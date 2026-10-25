const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const scrapedPagesDir = path.join(rootDir, 'scraped', 'pages');

// Remove custom CSS and pattern files
const customCssPath = path.join(rootDir, 'wp-content', 'themes', 'astra', 'assets', 'css', 'nature-pure-enhancements.css');
if (fs.existsSync(customCssPath)) {
  fs.unlinkSync(customCssPath);
  console.log('Deleted nature-pure-enhancements.css');
}

const patternsDir = path.join(rootDir, 'wp-content', 'themes', 'astra', 'assets', 'images', 'patterns');
if (fs.existsSync(patternsDir)) {
  fs.rmSync(patternsDir, { recursive: true, force: true });
  console.log('Deleted custom patterns directory');
}

// Interactive script for form and WhatsApp only (no CSS / no padding interference)
const interactiveScript = `
<script id="np-enhancements">
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    var toggleBtn = document.querySelector('.main-header-menu-toggle, .ast-mobile-menu-trigger-minimal, .ast-button-wrap .menu-toggle');
    var navMenu = document.querySelector('.main-header-bar-navigation, .ast-mobile-header-wrap');
    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var isOpen = navMenu.classList.toggle('toggle-on');
        toggleBtn.classList.toggle('toggled');
        toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // WhatsApp button
    var waButtons = document.querySelectorAll('.joinchat, .joinchat__button, [href*="api.whatsapp.com"]');
    waButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://api.whatsapp.com/send/?phone=919567889001&text=Hi%20Nature%20Pure!%20I%20would%20like%20to%20inquire%20about%20your%20products.', '_blank');
      });
    });

    // Form feedback
    var forms = document.querySelectorAll('form.elementor-form, form');
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var submitBtn = form.querySelector('button[type="submit"], input[type="submit"], .elementor-button');
        var originalText = submitBtn ? (submitBtn.innerText || submitBtn.value) : '';
        if (submitBtn) {
          if (submitBtn.tagName === 'INPUT') submitBtn.value = 'Sending...';
          else submitBtn.innerText = 'Sending...';
          submitBtn.disabled = true;
        }

        setTimeout(function() {
          if (submitBtn) {
            if (submitBtn.tagName === 'INPUT') submitBtn.value = originalText;
            else submitBtn.innerText = originalText;
            submitBtn.disabled = false;
          }

          var alertBox = form.querySelector('.elementor-message');
          if (!alertBox) {
            alertBox = document.createElement('div');
            alertBox.className = 'elementor-message elementor-message-success';
            alertBox.style.cssText = 'padding:14px 18px;margin-top:15px;background:#e8f5e9;color:#2e7d32;border:1px solid #c8e6c9;border-radius:6px;font-size:15px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.06);';
            form.appendChild(alertBox);
          }
          alertBox.innerText = 'Thank you! Your message has been received successfully. Our team will get back to you shortly.';
          alertBox.style.display = 'block';
          form.reset();

          setTimeout(function() {
            if (alertBox) alertBox.style.display = 'none';
          }, 8000);
        }, 800);
      });
    });
  });
})();
</script>
`;

const files = fs.readdirSync(scrapedPagesDir).filter(f => f.endsWith('.html'));
console.log(`Rebuilding exactly as originally copied for ${files.length} pages...`);

files.forEach(file => {
  let content = fs.readFileSync(path.join(scrapedPagesDir, file), 'utf8');

  // Remove trailing PHP/LiteSpeed notices
  content = content.replace(/<!--\s*Page cached by LiteSpeed[\s\S]*$/, '');
  content = content.replace(/<br\s*\/?>\s*<b>Notice<\/b>[\s\S]*$/, '');
  if (!content.trim().endsWith('</html>')) {
    content = content.trim() + '\n</html>';
  }

  // Replace absolute domain references with local paths
  content = content.replaceAll('https://naturepureextracts.com/', '/');
  content = content.replaceAll('http://naturepureextracts.com/', '/');
  content = content.replaceAll('https:\\/\\/naturepureextracts.com\\/', '\\/');
  content = content.replaceAll('http:\\/\\/naturepureextracts.com\\/', '\\/');
  content = content.replaceAll('/imunify-bot-check', '#');

  // Make sure NO nature-pure-enhancements link exists
  content = content.replace(/<link[^>]+nature-pure-enhancements-css[^>]*>\s*/gi, '');

  // Inject interactive helper script before </body>
  if (content.includes('</body>')) {
    content = content.replace('</body>', `${interactiveScript}\n</body>`);
  } else {
    content += interactiveScript;
  }

  const slug = file.replace('.html', '');

  if (slug === 'home') {
    fs.writeFileSync(path.join(rootDir, 'index.html'), content, 'utf8');
    console.log('Restored index.html (Home) exactly as originally copied');
  } else {
    const dir = path.join(rootDir, slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), content, 'utf8');
    fs.writeFileSync(path.join(rootDir, `${slug}.html`), content, 'utf8');
  }
});

// Update build_website.js to match
const buildJsPath = path.join(rootDir, 'build_website.js');
let buildJs = fs.readFileSync(buildJsPath, 'utf8');
buildJs = buildJs.replace(/const cssLink = '<link[^>]+nature-pure-enhancements-css[^>]*>;\s*if \(!content\.includes\('nature-pure-enhancements-css'\)\) \{\s*content = content\.replace\('<\/head>', `  \$\{cssLink\}\\n<\/head>`\);\s*\}/g, '');
fs.writeFileSync(buildJsPath, buildJs, 'utf8');

console.log('Completed! The website is restored exactly as it was when first copied.');

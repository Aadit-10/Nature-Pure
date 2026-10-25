const fs = require('fs');
const path = require('path');

const publicAssets = path.join(__dirname, 'public_assets');
const pagesDir = path.join(__dirname, 'scraped', 'pages');

// 1. Copy wp-content and wp-includes to project root
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Copying static assets to project root...');
copyRecursive(path.join(publicAssets, 'wp-content'), path.join(__dirname, 'wp-content'));
copyRecursive(path.join(publicAssets, 'wp-includes'), path.join(__dirname, 'wp-includes'));
console.log('Assets copied successfully!');

// Interactive script to inject into every page
const interactiveScript = `
<script id="np-enhancements">
(function() {
  // Mobile navigation and hamburger toggle helper
  document.addEventListener('DOMContentLoaded', function() {
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

    // Floating WhatsApp button handler
    var waButtons = document.querySelectorAll('.joinchat, .joinchat__button, [href*="api.whatsapp.com"]');
    waButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://api.whatsapp.com/send/?phone=919567889001&text=Hi%20Nature%20Pure!%20I%20would%20like%20to%20inquire%20about%20your%20products.', '_blank');
      });
    });

    // Handle Contact / Inquiry forms gracefully
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

// Clean and process all pages
const htmlFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));
console.log(`Processing ${htmlFiles.length} pages...`);

htmlFiles.forEach(file => {
  let content = fs.readFileSync(path.join(pagesDir, file), 'utf8');

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

  // Fix imunify bot check if present
  content = content.replaceAll('/imunify-bot-check', '#');

  // Inject enhancements CSS into head
  const cssLink = '<link rel="stylesheet" id="nature-pure-enhancements-css" href="/wp-content/themes/astra/assets/css/nature-pure-enhancements.css" media="all" />';
  if (!content.includes('nature-pure-enhancements-css')) {
    content = content.replace('</head>', `  ${cssLink}\n</head>`);
  }

  // Inject interactive helper script before </body>
  if (content.includes('</body>')) {
    content = content.replace('</body>', `${interactiveScript}\n</body>`);
  } else {
    content += interactiveScript;
  }

  const slug = file.replace('.html', '');

  if (slug === 'home') {
    // Write index.html at root
    fs.writeFileSync(path.join(__dirname, 'index.html'), content, 'utf8');
    console.log('Generated index.html (Home)');
  } else {
    // Write both <slug>/index.html and <slug>.html
    const dir = path.join(__dirname, slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), content, 'utf8');
    fs.writeFileSync(path.join(__dirname, `${slug}.html`), content, 'utf8');
    console.log(`Generated /${slug}/index.html & ${slug}.html`);
  }
});

console.log('All pages generated successfully!');

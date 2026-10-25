const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const cssTag = `<link rel="stylesheet" id="nature-pure-enhancements-css" href="/wp-content/themes/astra/assets/css/nature-pure-enhancements.css" media="all" />`;

function injectCSS(html) {
  if (html.includes('nature-pure-enhancements-css')) return html;
  return html.replace('</head>', `  ${cssTag}\n</head>`);
}

function addHero(slug, badge, title, subtitle) {
  const filePath = path.join(rootDir, slug, 'index.html');
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const heroHtml = `
<div class="np-page-hero">
  <span class="np-pill-badge">${badge}</span>
  <h1>${title}</h1>
  <p class="np-hero-subtitle">${subtitle}</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>${title}</span>
  </div>
</div>
`;

  if (!html.includes('np-page-hero')) {
    html = html.replace(/<div id="content" class="site-content">\s*<div class="ast-container">/, `<div id="content" class="site-content">\n<div class="ast-container">\n${heroHtml}`);
    fs.writeFileSync(filePath, html, 'utf8');
    const flat = path.join(rootDir, `${slug}.html`);
    if (fs.existsSync(flat)) fs.writeFileSync(flat, html, 'utf8');
    console.log(`✓ Added Hero to ${slug}`);
  }
}

addHero('solutions', '💡 End-to-End Solutions', 'Integrated Botanical Solutions', 'Comprehensive turnkey capabilities spanning botanical sourcing, supercritical CO₂ processing, custom formulation, and analytical validation.');
addHero('contract-manufacturing', '🏭 Scalable Production', 'Contract Manufacturing &amp; OEM', 'State-of-the-art toll extraction and private label manufacturing for food, cosmetic, and pharmaceutical enterprises worldwide.');
addHero('bulk-extraction', '📦 Industrial Capacity', 'High-Volume Bulk Extraction', 'Processing up to 150 metric tons annually using high-pressure supercritical CO₂ extraction systems with consistent yields and purity.');
addHero('innovation-lab', '🔬 Science &amp; R&amp;D', 'Innovation Lab &amp; Analytical Center', 'Leading-edge research in bioactive phytonutrient retention, customized fractional distillation, and specialized molecular isolation.');
addHero('technology', '⚙️ Green Chemistry', 'Supercritical CO₂ Extraction Technology', 'Eco-friendly, solvent-free supercritical fluid technology operating at peak thermodynamic precision for supreme botanical integrity.');
addHero('certifications', '🏆 Global Compliance', 'Certifications &amp; Accreditations', 'Independently audited and certified under FSSAI, ISO, GMP, Halal, Kosher, and Organic regulatory standards.');
addHero('private-label', '🏷️ Custom Branding', 'Private Label Botanical Extracts', 'Turnkey formulation, custom concentration ratios, and bespoke packaging for global wellness, cosmetic, and specialty brands.');

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const cssTag = `<link rel="stylesheet" id="nature-pure-enhancements-css" href="/wp-content/themes/astra/assets/css/nature-pure-enhancements.css" media="all" />`;

function injectCSS(html) {
  if (html.includes('nature-pure-enhancements-css')) return html;
  return html.replace('</head>', `  ${cssTag}\n</head>`);
}

// -----------------------------------------------------------------
// 1. QUALITY PAGE
// -----------------------------------------------------------------
function enrichQuality() {
  const filePath = path.join(rootDir, 'quality', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const content = `
<div class="np-page-hero">
  <span class="np-pill-badge">🛡️ Quality Assurance &amp; Standards</span>
  <h1>Commitment to Uncompromising Quality</h1>
  <p class="np-hero-subtitle">Every botanical extract from Nature Pure undergoes rigorous multi-tier testing — ensuring 100% solvent-free purity, batch-to-batch consistency, and compliance with international pharmacopeias.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Quality</span>
  </div>
</div>

<div style="max-width: 1140px; margin: 40px auto;">
  <div class="np-grid-4">
    <div class="np-feature-box">
      <div class="np-feature-icon">🔬</div>
      <div class="np-feature-title">Analytical Precision</div>
      <p class="np-feature-desc">In-house GC-MS, HPLC, UV-Vis Spectrophotometry, and moisture analyzers validate chemical profiles of every lot.</p>
    </div>
    <div class="np-feature-box">
      <div class="np-feature-icon">🌿</div>
      <div class="np-feature-title">Zero Residue</div>
      <p class="np-feature-desc">Supercritical CO₂ extraction guarantees zero toxic chemical residues, heavy metals within USP/EP limits, and non-detectable pesticides.</p>
    </div>
    <div class="np-feature-box">
      <div class="np-feature-icon">📜</div>
      <div class="np-feature-title">Certifications</div>
      <p class="np-feature-desc">Certified under FSSAI, ISO 9001, GMP, Halal, Kosher, and Organic manufacturing standards.</p>
    </div>
    <div class="np-feature-box">
      <div class="np-feature-icon">📊</div>
      <div class="np-feature-title">Full Traceability</div>
      <p class="np-feature-desc">Each batch is accompanied by a detailed Certificate of Analysis (CoA) providing complete harvest and processing provenance.</p>
    </div>
  </div>

  <!-- Quality Assurance Process Flow -->
  <div class="np-card" style="margin: 45px 0;">
    <span class="np-pill-badge">The Testing Pipeline</span>
    <h3 style="font-size: 24px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0 20px 0;">Our 4-Stage Quality Verification Process</h3>
    <div class="np-grid-4">
      <div style="background: var(--np-bg-mint); padding: 20px; border-radius: 12px; border: 1px solid var(--np-border-card);">
        <strong style="color: var(--np-primary); font-size: 16px;">1. Raw Material Assay</strong>
        <p style="font-size: 13.5px; color: var(--np-text-body); margin-top: 8px;">Inspection of moisture, active phytonutrient content, foreign matter, and microbial screening before extraction.</p>
      </div>
      <div style="background: var(--np-bg-mint); padding: 20px; border-radius: 12px; border: 1px solid var(--np-border-card);">
        <strong style="color: var(--np-primary); font-size: 16px;">2. SCFE Extraction Control</strong>
        <p style="font-size: 13.5px; color: var(--np-text-body); margin-top: 8px;">Precise pressure (up to 350+ bar), temperature, and supercritical fluid flow regulation to avoid thermal degradation.</p>
      </div>
      <div style="background: var(--np-bg-mint); padding: 20px; border-radius: 12px; border: 1px solid var(--np-border-card);">
        <strong style="color: var(--np-primary); font-size: 16px;">3. Analytical Validation</strong>
        <p style="font-size: 13.5px; color: var(--np-text-body); margin-top: 8px;">Active component quantification, optical rotation, refractive index, density, and solubility profiling.</p>
      </div>
      <div style="background: var(--np-bg-mint); padding: 20px; border-radius: 12px; border: 1px solid var(--np-border-card);">
        <strong style="color: var(--np-primary); font-size: 16px;">4. Packaging &amp; CoA Release</strong>
        <p style="font-size: 13.5px; color: var(--np-text-body); margin-top: 8px;">Hermetically sealed food-grade containers, nitrogen flushing, and final CoA sign-off by QC directors.</p>
      </div>
    </div>
  </div>

  <!-- CTA Box -->
  <div class="elementor-element elementor-element-78db9ec4 np-cta-section">
    <h3>Need Specific Quality Specifications or CoA?</h3>
    <p>Our analytical team can provide comprehensive technical datasheets and sample testing reports for any product in our portfolio.</p>
    <a href="/contact-us/" class="elementor-button">Contact Our Quality Team</a>
  </div>
</div>
`;

  // Replace entry-content
  html = html.replace(/<header class="entry-header[^"]*"[^>]*>[\s\S]*?<\/header>/, '');
  html = html.replace(/<div class="entry-content clear"[\s\S]*?<\/div><!-- \.entry-content -->/, `<div class="entry-content clear">\n${content}\n</div>`);

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'quality.html'), html, 'utf8');
  console.log('✓ Enriched Quality page');
}

// -----------------------------------------------------------------
// 2. NATURE'S BLEND PAGE
// -----------------------------------------------------------------
function enrichNaturesBlend() {
  const filePath = path.join(rootDir, 'natures-blend', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const content = `
<div class="np-page-hero">
  <span class="np-pill-badge">🌿 Proprietary Formulations</span>
  <h1>Nature's Blend: Bespoke Botanical Formulations</h1>
  <p class="np-hero-subtitle">Customized, synergistic botanical combinations and oleoresin seasoning blends developed for signature culinary, beverage, and functional wellness products.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Nature's Blend</span>
  </div>
</div>

<div style="max-width: 1140px; margin: 40px auto;">
  <div class="np-grid-3">
    <div class="np-card">
      <span class="np-pill-badge">Culinary Seasonings</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Aromatic Spice Blends</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Standardized oleoresin and essential oil blends for snack foods, ready-to-eat meals, meat marinades, and savory seasonings. Ensures 100% uniform flavor distribution and microbial safety.</p>
    </div>
    <div class="np-card">
      <span class="np-pill-badge">Beverage Science</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Water-Dispersible Infusions</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Custom-formulated clear and cloud-stable botanical extracts for sparkling waters, herbal tonics, kombuchas, and craft beverages without oil separation.</p>
    </div>
    <div class="np-card">
      <span class="np-pill-badge">Nutraceutical Actives</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Synergistic Wellness Complexes</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Targeted herbal extract ratios (e.g. Curcumin + Piperine, Ginger + Boswellia) formulated to maximize bio-availability and clinical efficacy in capsules and powders.</p>
    </div>
  </div>

  <div class="elementor-element elementor-element-78db9ec4 np-cta-section">
    <h3>Have a Custom Formulation Concept?</h3>
    <p>Our R&amp;D laboratory works hand-in-hand with your product development team from initial pilot bench trials to commercial scale-up.</p>
    <a href="/contact-us/" class="elementor-button">Request a Custom Blend Consultation</a>
  </div>
</div>
`;

  html = html.replace(/<header class="entry-header[^"]*"[^>]*>[\s\S]*?<\/header>/, '');
  html = html.replace(/<div class="entry-content clear"[\s\S]*?<\/div><!-- \.entry-content -->/, `<div class="entry-content clear">\n${content}\n</div>`);

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'natures-blend.html'), html, 'utf8');
  console.log('✓ Enriched Nature\'s Blend page');
}

// -----------------------------------------------------------------
// 3. FOOD ADDICTIVES PAGE
// -----------------------------------------------------------------
function enrichFoodAddictives() {
  const filePath = path.join(rootDir, 'food-addictives', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const content = `
<div class="np-page-hero">
  <span class="np-pill-badge">🍃 Food Science &amp; Innovation</span>
  <h1>Food Additives &amp; Functional Ingredients</h1>
  <p class="np-hero-subtitle">High-purity food-grade stabilizers, emulsifiers, natural antioxidants, and freshness enhancers backed by our 50-year legacy in industrial ingredient formulation.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Food Additives</span>
  </div>
</div>

<div style="max-width: 1140px; margin: 40px auto;">
  <div class="np-grid-3">
    <div class="np-card">
      <span class="np-pill-badge">Shelf-Life Extension</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Natural Antioxidant Systems</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Supercritical CO₂ rosemary extract (carnosic acid and rosmarinic acid) providing potent anti-rancidity and lipid preservation in edible oils, snacks, and meat products without artificial BHA/BHT.</p>
    </div>
    <div class="np-card">
      <span class="np-pill-badge">Bakery Heritage</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">APIFAC Bakery Additives</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Carrying forward our 1974 APIFAC origins — dough conditioners, crumb softeners, and baking improvers engineered to ensure consistent crumb structure and extended freshness.</p>
    </div>
    <div class="np-card">
      <span class="np-pill-badge">Emulsification</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Functional Emulsifiers</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Food-grade stabilizing bases for sauces, dressings, confectionery creams, and beverages ensuring smooth texture and temperature stability.</p>
    </div>
  </div>

  <div class="elementor-element elementor-element-78db9ec4 np-cta-section">
    <h3>Partner with Our Food Science Experts</h3>
    <p>Enhance your formulations with clean-label, functional food additives manufactured to strict international standards.</p>
    <a href="/contact-us/" class="elementor-button">Inquire About Bulk Ingredients</a>
  </div>
</div>
`;

  html = html.replace(/<header class="entry-header[^"]*"[^>]*>[\s\S]*?<\/header>/, '');
  html = html.replace(/<div class="entry-content clear"[\s\S]*?<\/div><!-- \.entry-content -->/, `<div class="entry-content clear">\n${content}\n</div>`);

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'food-addictives.html'), html, 'utf8');
  console.log('✓ Enriched Food Additives page');
}

// -----------------------------------------------------------------
// 4. SPECIALTY PRODUCTS PAGE
// -----------------------------------------------------------------
function enrichSpecialtyProducts() {
  const filePath = path.join(rootDir, 'specialty-products', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const content = `
<div class="np-page-hero">
  <span class="np-pill-badge">✨ Precision Engineering</span>
  <h1>Specialty Products &amp; Isolated Fractions</h1>
  <p class="np-hero-subtitle">High-potency isolated fractions, de-aromatized active carriers, and custom supercritical fractions tailored for specific pharmaceutical and high-end cosmetic formulations.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Specialty Products</span>
  </div>
</div>

<div style="max-width: 1140px; margin: 40px auto;">
  <div class="np-grid-3">
    <div class="np-card">
      <span class="np-pill-badge">Cosmetic Actives</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">De-Aromatized Bioactives</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Active botanical extracts fractionated to remove strong characteristic odors and dark pigments, allowing easy incorporation into luxury face creams and perfumes.</p>
    </div>
    <div class="np-card">
      <span class="np-pill-badge">Pharma Intermediates</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Standardized Terpene Fractions</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Ultra-pure mono-terpene and sesquiterpene isolates collected under fractional CO₂ separation protocols, ensuring precise chemical purity benchmarks.</p>
    </div>
    <div class="np-card">
      <span class="np-pill-badge">Nutraceutical Delivery</span>
      <h3 style="font-size: 20px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Cold-Water Dispersible Powders</h3>
      <p style="font-size: 14.5px; color: var(--np-text-body); line-height: 1.65;">Micro-encapsulated and freeze-dried botanical oleoresins that dissolve instantly into clear water or hot beverages without oily separation.</p>
    </div>
  </div>

  <div class="elementor-element elementor-element-78db9ec4 np-cta-section">
    <h3>Looking for a Specialized Extraction Fraction?</h3>
    <p>Contact our extraction engineering team to discuss fractional CO₂ parameters and custom molecular separation.</p>
    <a href="/contact-us/" class="elementor-button">Discuss Technical Requirements</a>
  </div>
</div>
`;

  html = html.replace(/<header class="entry-header[^"]*"[^>]*>[\s\S]*?<\/header>/, '');
  html = html.replace(/<div class="entry-content clear"[\s\S]*?<\/div><!-- \.entry-content -->/, `<div class="entry-content clear">\n${content}\n</div>`);

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'specialty-products.html'), html, 'utf8');
  console.log('✓ Enriched Specialty Products page');
}

// -----------------------------------------------------------------
// 5. GLITTERS PAGE
// -----------------------------------------------------------------
function enrichGlitters() {
  const filePath = path.join(rootDir, 'glitters', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const content = `
<div class="np-page-hero">
  <span class="np-pill-badge">✨ Pearlescent &amp; Decorative</span>
  <h1>Cosmetic Glitters &amp; Luster Pigments</h1>
  <p class="np-hero-subtitle">High-purity cosmetic grade glitters, pearlescent minerals, and decorative mica pigments engineered for cosmetics, soaps, makeup, and specialty visual applications.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Glitters</span>
  </div>
</div>

<div style="max-width: 1140px; margin: 40px auto;">
  <div class="np-grid-2">
    <div class="np-card" style="border-top: 4px solid #c69234;">
      <span class="np-pill-badge">Gold Collection</span>
      <h3 style="font-size: 22px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Gold Glitters &amp; Bronzes</h3>
      <p style="font-size: 15px; color: var(--np-text-body); line-height: 1.7;">Brilliant, radiant gold glitters ranging from micro-fine shimmering powder to multi-dimensional hexagon flakes. Certified safe for cosmetic applications, lotions, eye cosmetics, lip colors, and soap crafting.</p>
      <ul style="margin: 15px 0 0 20px; color: var(--np-text-muted); font-size: 14px; line-height: 1.8;">
        <li>24K Luster Gold Cosmetic Flakes</li>
        <li>Antique Gold Pearlescent Mica</li>
        <li>Warm Bronze Sparkle Powders</li>
      </ul>
    </div>

    <div class="np-card" style="border-top: 4px solid #94a3b8;">
      <span class="np-pill-badge">Silver Collection</span>
      <h3 style="font-size: 22px; color: var(--np-text-heading); font-weight: 700; margin: 10px 0;">Silver Glitters &amp; Holographics</h3>
      <p style="font-size: 15px; color: var(--np-text-body); line-height: 1.7;">Crisp, ultra-reflective silver glitters designed for maximum light refraction and sparkling visual brilliance. Superior solvent resistance ensures color fastness in nail polishes, gels, and body lotions.</p>
      <ul style="margin: 15px 0 0 20px; color: var(--np-text-muted); font-size: 14px; line-height: 1.8;">
        <li>Diamond Silver Micro Glitters</li>
        <li>Holographic Prismatic Flakes</li>
        <li>Crystal White Luster Pigments</li>
      </ul>
    </div>
  </div>

  <div class="elementor-element elementor-element-78db9ec4 np-cta-section">
    <h3>Request Cosmetic Glitter Samples &amp; Safety Data</h3>
    <p>We supply bulk orders with complete MSDS, cosmetic safety certifications, and particle size distribution specifications.</p>
    <a href="/contact-us/" class="elementor-button">Request Sample Kit</a>
  </div>
</div>
`;

  html = html.replace(/<header class="entry-header[^"]*"[^>]*>[\s\S]*?<\/header>/, '');
  html = html.replace(/<div class="entry-content clear"[\s\S]*?<\/div><!-- \.entry-content -->/, `<div class="entry-content clear">\n${content}\n</div>`);

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'glitters.html'), html, 'utf8');
  console.log('✓ Enriched Glitters page');
}

// -----------------------------------------------------------------
// 6. POLICY PAGES (COOKIE POLICY & TERMS CONDITIONS)
// -----------------------------------------------------------------
function enrichPolicies() {
  // Cookie Policy
  const cpPath = path.join(rootDir, 'cookie-policy', 'index.html');
  let cp = fs.readFileSync(cpPath, 'utf8');
  cp = injectCSS(cp);
  const cpContent = `
<div class="np-page-hero">
  <span class="np-pill-badge">🔒 Privacy &amp; Compliance</span>
  <h1>Cookie Policy</h1>
  <p class="np-hero-subtitle">How Nature Pure Supercritical Extracts Pvt. Ltd. respects your digital privacy and manages website cookies.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Cookie Policy</span>
  </div>
</div>

<div class="np-card" style="max-width: 950px; margin: 40px auto; line-height: 1.75;">
  <h3 style="color: var(--np-text-heading); font-size: 20px;">1. What Are Cookies?</h3>
  <p>Cookies are small text files that are stored on your device when you visit our website. They assist in website functionality, user navigation, and anonymous performance analytics to improve your browsing experience.</p>
  
  <h3 style="color: var(--np-text-heading); font-size: 20px; margin-top: 25px;">2. How We Use Cookies</h3>
  <p>Nature Pure Extracts uses essential cookies to ensure the website displays properly across mobile and desktop devices. We may also use anonymous analytics cookies to understand visitor traffic patterns without collecting personally identifiable information.</p>

  <h3 style="color: var(--np-text-heading); font-size: 20px; margin-top: 25px;">3. Managing Your Cookie Preferences</h3>
  <p>You can adjust or disable cookies at any time through your internet browser settings (e.g., Chrome, Safari, Firefox, Edge). Please note that disabling essential cookies may impact certain site navigation features.</p>

  <h3 style="color: var(--np-text-heading); font-size: 20px; margin-top: 25px;">4. Contact Us</h3>
  <p>If you have questions regarding our cookie practices, please contact us at <strong>info@naturepureextracts.com</strong>.</p>
</div>
`;
  cp = cp.replace(/<div class="entry-content clear"[\s\S]*?<\/div><!-- \.entry-content -->/, `<div class="entry-content clear">\n${cpContent}\n</div>`);
  fs.writeFileSync(cpPath, cp, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'cookie-policy.html'), cp, 'utf8');
  console.log('✓ Enriched Cookie Policy');

  // Terms & Conditions
  const tcPath = path.join(rootDir, 'terms-conditions', 'index.html');
  let tc = fs.readFileSync(tcPath, 'utf8');
  tc = injectCSS(tc);
  const tcContent = `
<div class="np-page-hero">
  <span class="np-pill-badge">⚖️ Legal Terms</span>
  <h1>Terms &amp; Conditions</h1>
  <p class="np-hero-subtitle">Terms of use governing access to Nature Pure Supercritical Extracts Pvt. Ltd. and its product catalogs.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Terms &amp; Conditions</span>
  </div>
</div>

<div class="np-card" style="max-width: 950px; margin: 40px auto; line-height: 1.75;">
  <h3 style="color: var(--np-text-heading); font-size: 20px;">1. Acceptance of Terms</h3>
  <p>By accessing and utilizing the website of Nature Pure Supercritical Extracts Pvt. Ltd. (https://naturepureextracts.com/), you acknowledge and accept these terms and conditions in full.</p>

  <h3 style="color: var(--np-text-heading); font-size: 20px; margin-top: 25px;">2. Intellectual Property Rights</h3>
  <p>All brand logos, technical specifications, imagery, text, and proprietary extraction process descriptions displayed on this website are the intellectual property of Nature Pure Supercritical Extracts Pvt. Ltd. and protected under relevant copyright and trademark laws.</p>

  <h3 style="color: var(--np-text-heading); font-size: 20px; margin-top: 25px;">3. Product Information &amp; Disclaimer</h3>
  <p>Product information, active phytonutrient percentages, and specifications are provided for commercial and industrial formulation guidance. Due to natural harvest variations, exact batch Certificate of Analysis (CoA) values govern all commercial shipments.</p>

  <h3 style="color: var(--np-text-heading); font-size: 20px; margin-top: 25px;">4. Governing Jurisdiction</h3>
  <p>These terms and conditions are governed by and construed in accordance with the laws of India, under the jurisdiction of the courts of Kerala, India.</p>
</div>
`;
  tc = tc.replace(/<div class="entry-content clear"[\s\S]*?<\/div><!-- \.entry-content -->/, `<div class="entry-content clear">\n${tcContent}\n</div>`);
  fs.writeFileSync(tcPath, tc, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'terms-conditions.html'), tc, 'utf8');
  console.log('✓ Enriched Terms & Conditions');
}

enrichQuality();
enrichNaturesBlend();
enrichFoodAddictives();
enrichSpecialtyProducts();
enrichGlitters();
enrichPolicies();

console.log('All previously blank pages have been fully enriched and designed!');

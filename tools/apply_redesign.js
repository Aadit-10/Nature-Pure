const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const cssTag = `<link rel="stylesheet" id="nature-pure-enhancements-css" href="/wp-content/themes/astra/assets/css/nature-pure-enhancements.css" media="all" />`;

// Helper to inject CSS into head if not already present
function injectCSS(html) {
  if (html.includes('nature-pure-enhancements-css')) return html;
  return html.replace('</head>', `  ${cssTag}\n</head>`);
}

// -------------------------------------------------------------
// 1. REDESIGN: ABOUT US
// -------------------------------------------------------------
function redesignAboutUs() {
  const filePath = path.join(rootDir, 'about-us', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  // Replace entry-header and unstyled h1 with rich Hero
  const heroHtml = `
<div class="np-page-hero">
  <span class="np-pill-badge">🌿 Pioneering Botanical Science</span>
  <h1>About Nature Pure Extracts</h1>
  <p class="np-hero-subtitle">Leading the world in Supercritical CO₂ Extraction — delivering pure, potent, and solvent-free natural extracts for food, nutraceutical, pharmaceutical, and cosmetic applications.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>About Us</span>
  </div>
</div>
`;

  // Stats Grid to fill empty space
  const statsGrid = `
<div class="np-grid-4">
  <div class="np-feature-box">
    <div class="np-feature-icon">🌿</div>
    <div class="np-stat-number">100%</div>
    <div class="np-stat-label">Solvent-Free CO₂</div>
    <p class="np-feature-desc">Clean, eco-friendly supercritical extraction preserving full bio-active compounds without harsh chemical residues.</p>
  </div>
  <div class="np-feature-box">
    <div class="np-feature-icon">🔬</div>
    <div class="np-stat-number">40+</div>
    <div class="np-stat-label">Years Legacy</div>
    <p class="np-feature-desc">Founded on pharmaceutical-grade chemical engineering and ingredient science since 1973.</p>
  </div>
  <div class="np-feature-box">
    <div class="np-feature-icon">🏭</div>
    <div class="np-stat-number">150 MT</div>
    <div class="np-stat-label">Annual Capacity</div>
    <p class="np-feature-desc">High-pressure SCFE processing facility at Kinfra Industrial Park equipped with cutting-edge extraction chambers.</p>
  </div>
  <div class="np-feature-box">
    <div class="np-feature-icon">🏆</div>
    <div class="np-stat-number">Global</div>
    <div class="np-stat-label">Certified Purity</div>
    <p class="np-feature-desc">Fully compliant with FSSAI, ISO, GMP, Halal, Kosher, and global organic benchmarks.</p>
  </div>
</div>
`;

  // Replace <header class="entry-header ...> ... </header> with heroHtml
  html = html.replace(/<header class="entry-header[^"]*"[^>]*>[\s\S]*?<\/header>/, heroHtml);

  // Inject statsGrid right after the main about-us container
  if (!html.includes('np-grid-4')) {
    html = html.replace(/(<div class="elementor-element elementor-element-4a236a5c[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/, `$1\n${statsGrid}`);
  }

  // Update CTA link to /contact-us/
  html = html.replaceAll('href="#"', 'href="/contact-us/"');

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'about-us.html'), html, 'utf8');
  console.log('✓ Upgraded About Us page');
}

// -------------------------------------------------------------
// 2. REDESIGN: OUR STORY
// -------------------------------------------------------------
function redesignOurStory() {
  const filePath = path.join(rootDir, 'our-story', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const heroHtml = `
<div class="np-page-hero">
  <span class="np-pill-badge">📜 Heritage & Innovation</span>
  <h1>Our Journey of Pure Botanical Excellence</h1>
  <p class="np-hero-subtitle">From pharmaceutical roots in 1973 to pioneering Supercritical CO₂ Extraction on a global scale.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Our Story</span>
  </div>
</div>
`;

  const timelineHtml = `
<div style="margin: 45px 0;">
  <div style="text-align: center; margin-bottom: 30px;">
    <span class="np-pill-badge">Historical Milestones</span>
    <h2 style="font-size: clamp(24px, 3.5vw, 34px); color: var(--np-text-heading); font-weight: 700; margin-top: 8px;">Four Decades of Scientific Precision</h2>
    <p style="color: var(--np-text-muted); max-width: 650px; margin: 0 auto;">Trace the pivotal moments that shaped Nature Pure Extracts into an international leader in botanical extraction.</p>
  </div>

  <div class="np-timeline">
    <div class="np-timeline-item">
      <div class="np-timeline-dot"></div>
      <span class="np-timeline-year">1973</span>
      <div class="np-timeline-content">
        <h4 class="np-timeline-title">The Foundation at Pfizer</h4>
        <p class="np-timeline-desc">N.T. Kuruvilla, a Chemical Engineering graduate from UDCT, begins his professional journey with Pfizer, instilling rigorous pharmaceutical standards and a passion for ingredient purity.</p>
      </div>
    </div>

    <div class="np-timeline-item">
      <div class="np-timeline-dot"></div>
      <span class="np-timeline-year">1974</span>
      <div class="np-timeline-content">
        <h4 class="np-timeline-title">Founding of APIFAC</h4>
        <p class="np-timeline-desc">Driven by an entrepreneurial spirit, N.T. Kuruvilla establishes APIFAC, launching a visionary venture into food ingredients, bakery innovations, and industrial ingredient science.</p>
      </div>
    </div>

    <div class="np-timeline-item">
      <div class="np-timeline-dot"></div>
      <span class="np-timeline-year">1998</span>
      <div class="np-timeline-content">
        <h4 class="np-timeline-title">Deccan Colours & Chemicals</h4>
        <p class="np-timeline-desc">Established Deccan Colours & Chemicals Pvt. Ltd. By the early 2000s, the company emerged as a global leader in Patent Blue V production, earning international acclaim for technical consistency.</p>
      </div>
    </div>

    <div class="np-timeline-item">
      <div class="np-timeline-dot"></div>
      <span class="np-timeline-year">2003</span>
      <div class="np-timeline-content">
        <h4 class="np-timeline-title">Next-Generation Leadership</h4>
        <p class="np-timeline-desc">Leadership transitions to Thomas Kuruvilla and Joseph Biju Kuruvilla, injecting new strategic momentum, international expansion, and advanced technical capabilities.</p>
      </div>
    </div>

    <div class="np-timeline-item">
      <div class="np-timeline-dot"></div>
      <span class="np-timeline-year">2008</span>
      <div class="np-timeline-content">
        <h4 class="np-timeline-title">The Supercritical CO₂ Revolution</h4>
        <p class="np-timeline-desc">Recognizing the global demand for clean-label, solvent-free botanicals, Nature Pure Supercritical Pvt. Ltd. is launched with high-pressure CO₂ extraction technology.</p>
      </div>
    </div>

    <div class="np-timeline-item">
      <div class="np-timeline-dot"></div>
      <span class="np-timeline-year">Present Day</span>
      <div class="np-timeline-content">
        <h4 class="np-timeline-title">Global Strategic R&D Partner</h4>
        <p class="np-timeline-desc">Empowering leading brands in nutraceuticals, pharmaceuticals, cosmetics, and functional foods with traceable, highly potent, and customized botanical extracts.</p>
      </div>
    </div>
  </div>
</div>
`;

  // Insert hero
  html = html.replace(/<div id="content" class="site-content">\s*<div class="ast-container">/, `<div id="content" class="site-content">\n<div class="ast-container">\n${heroHtml}`);

  // Insert timeline after the text editor container
  if (!html.includes('np-timeline')) {
    html = html.replace(/(<div class="elementor-element elementor-element-5422d957[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/, `$1\n${timelineHtml}`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'our-story.html'), html, 'utf8');
  console.log('✓ Upgraded Our Story page');
}

// -------------------------------------------------------------
// 3. REDESIGN: LEADERSHIP
// -------------------------------------------------------------
function redesignLeadership() {
  const filePath = path.join(rootDir, 'leadership', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const heroHtml = `
<div class="np-page-hero">
  <span class="np-pill-badge">👥 Visionary Governance</span>
  <h1>Executive Leadership Team</h1>
  <p class="np-hero-subtitle">Decades of chemical engineering mastery, strategic foresight, and dedication to botanical purity and global standards.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Leadership</span>
  </div>
</div>
`;

  const leadersHtml = `
<div style="max-width: 1050px; margin: 30px auto;">
  <!-- Leader 1 -->
  <div class="np-leader-card">
    <div class="np-leader-header">
      <div class="np-leader-avatar-icon">👨‍🔬</div>
      <div class="np-leader-info">
        <h3>N. T. Kuruvilla</h3>
        <span class="np-leader-role">Founder &amp; Pioneer • Chemical Engineer (UDCT)</span>
      </div>
    </div>
    <p class="np-leader-bio">
      A distinguished chemical engineer from UDCT and former Pfizer professional, N. T. Kuruvilla pioneered the company's journey into natural extraction and specialty ingredient manufacturing. With a visionary entrepreneurial mindset and deep technical mastery, he established the foundational principles of scientific integrity, innovation, and pharmaceutical-grade excellence that continue to steer Nature Pure Extracts.
    </p>
  </div>

  <!-- Leader 2 -->
  <div class="np-leader-card">
    <div class="np-leader-header">
      <div class="np-leader-avatar-icon">🌐</div>
      <div class="np-leader-info">
        <h3>Thomas Kuruvilla</h3>
        <span class="np-leader-role">Managing Director • Strategic Growth &amp; Global Operations</span>
      </div>
    </div>
    <p class="np-leader-bio">
      Building upon the company's strong legacy, Thomas Kuruvilla has been instrumental in strengthening the organization’s global footprint. With extensive expertise in business development, strategic planning, and multinational supply chain operations, he spearheads international market expansion and fosters long-term client relationships anchored in reliability, compliance, and consistent product quality across Nature Pure Extracts and APIFAC.
    </p>
  </div>

  <!-- Leader 3 -->
  <div class="np-leader-card">
    <div class="np-leader-header">
      <div class="np-leader-avatar-icon">⚙️</div>
      <div class="np-leader-info">
        <h3>Joseph Biju Kuruvilla</h3>
        <span class="np-leader-role">Director of Technology • Process Innovation &amp; R&amp;D</span>
      </div>
    </div>
    <p class="np-leader-bio">
      Dedicated to technological advancement and product innovation, Joseph Biju Kuruvilla leads the company’s engineering capabilities in supercritical fluid extraction (SCFE), specialty natural ingredients, and bespoke formulation development. His unwavering focus on state-of-the-art extraction systems, quality assurance, and customer-oriented R&D ensures Nature Pure remains at the forefront of global botanical science.
    </p>
  </div>

  <!-- Values Grid -->
  <div style="margin-top: 45px; text-align: center;">
    <span class="np-pill-badge">Guiding Principles</span>
    <h3 style="font-size: clamp(22px, 3vw, 28px); color: var(--np-text-heading); font-weight: 700; margin-top: 10px;">Our Shared Leadership Vision</h3>
    <div class="np-values-grid">
      <div class="np-value-item"><span class="np-check-icon">✓</span> Uncompromising Quality &amp; Consistency</div>
      <div class="np-value-item"><span class="np-check-icon">✓</span> Innovation Through Science &amp; Technology</div>
      <div class="np-value-item"><span class="np-check-icon">✓</span> Sustainable &amp; Responsible Manufacturing</div>
      <div class="np-value-item"><span class="np-check-icon">✓</span> Partnerships Built on Trust &amp; Transparency</div>
      <div class="np-value-item"><span class="np-check-icon">✓</span> Continuous Improvement &amp; Operational Mastery</div>
    </div>
  </div>
</div>
`;

  // Insert hero
  html = html.replace(/<div id="content" class="site-content">\s*<div class="ast-container">/, `<div id="content" class="site-content">\n<div class="ast-container">\n${heroHtml}`);

  // Replace plain text editor with rich cards
  if (!html.includes('np-leader-card')) {
    html = html.replace(/<div class="elementor-element elementor-element-37a28c8[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, leadersHtml);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'leadership.html'), html, 'utf8');
  console.log('✓ Upgraded Leadership page');
}

// -------------------------------------------------------------
// 4. REDESIGN: MISSION & VISION
// -------------------------------------------------------------
function redesignMissionVision() {
  const filePath = path.join(rootDir, 'mission-vision', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const heroHtml = `
<div class="np-page-hero">
  <span class="np-pill-badge">🧭 Purpose &amp; Promise</span>
  <h1>Driving Purity Through Innovation</h1>
  <p class="np-hero-subtitle">We combine advanced supercritical science with sustainable practices to create clean, potent botanical ingredients that empower healthier lives.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Mission &amp; Vision</span>
  </div>
</div>
`;

  const valuesHtml = `
<div style="max-width: 1100px; margin: 40px auto;">
  <div class="np-grid-4">
    <div class="np-feature-box">
      <div class="np-feature-icon">🌱</div>
      <div class="np-feature-title">Pure Botanicals</div>
      <p class="np-feature-desc">Zero chemical solvents, zero pesticide contamination, retaining complete natural bioactive spectrums.</p>
    </div>
    <div class="np-feature-box">
      <div class="np-feature-icon">🔍</div>
      <div class="np-feature-title">Total Traceability</div>
      <p class="np-feature-desc">Complete farm-to-extract visibility with batch validation, ensuring ethical sourcing and purity.</p>
    </div>
    <div class="np-feature-box">
      <div class="np-feature-icon">♻️</div>
      <div class="np-feature-title">Green Footprint</div>
      <p class="np-feature-desc">Closed-loop CO₂ recycling with minimal carbon footprint and zero effluent discharge.</p>
    </div>
    <div class="np-feature-box">
      <div class="np-feature-icon">💡</div>
      <div class="np-feature-title">Custom Innovation</div>
      <p class="np-feature-desc">Bespoke formulations, standardized actives, and collaborative R&amp;D for specialized brand requirements.</p>
    </div>
  </div>
</div>
`;

  // Insert hero
  html = html.replace(/<div id="content" class="site-content">\s*<div class="ast-container">/, `<div id="content" class="site-content">\n<div class="ast-container">\n${heroHtml}`);

  // Insert values grid
  if (!html.includes('np-feature-box')) {
    html = html.replace(/(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- \.entry-content)/, `${valuesHtml}\n$1`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'mission-vision.html'), html, 'utf8');
  console.log('✓ Upgraded Mission & Vision page');
}

// -------------------------------------------------------------
// 5. REDESIGN: INFRASTRUCTURE
// -------------------------------------------------------------
function redesignInfrastructure() {
  const filePath = path.join(rootDir, 'infrastructure', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const heroHtml = `
<div class="np-page-hero">
  <span class="np-pill-badge">🏭 State-of-the-Art Facility</span>
  <h1>Advanced Manufacturing Infrastructure</h1>
  <p class="np-hero-subtitle">High-precision Supercritical CO₂ Extraction, precision freeze-drying, and certified analytical laboratories located in Kinfra Industrial Park, Thiruvalla, Kerala.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Infrastructure</span>
  </div>
</div>
`;

  // Clean the nested h3 artifact
  html = html.replaceAll('<h3 class="elementor-heading-title elementor-size-default"><h3 class="elementor-heading-title elementor-size-default elementor-inline-editing pen" data-elementor-setting-key="title" data-pen-placeholder="Type Here..." style="letter-spacing: normal;word-spacing: 0px">Advanced Manufacturing Infrastructure &amp; Technical Capabilities</h3></h3>', '<h2 style="font-size: clamp(24px, 3.5vw, 32px); color: var(--np-text-heading); font-weight: 700; margin-bottom: 16px;">Core Technical Capabilities</h2>');

  // Insert hero
  html = html.replace(/<div id="content" class="site-content">\s*<div class="ast-container">/, `<div id="content" class="site-content">\n<div class="ast-container">\n${heroHtml}`);

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'infrastructure.html'), html, 'utf8');
  console.log('✓ Upgraded Infrastructure page');
}

// -------------------------------------------------------------
// 6. REDESIGN: SUB-BRANDS
// -------------------------------------------------------------
function redesignSubBrands() {
  const filePath = path.join(rootDir, 'sub-brands', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const heroHtml = `
<div class="np-page-hero">
  <span class="np-pill-badge">🌿 Tailored Product Lines</span>
  <h1>Our Specialized Sub-Brands</h1>
  <p class="np-hero-subtitle">Targeted botanical ingredient divisions engineered to serve specific industrial requirements across flavors, fragrances, oleoresins, and active botanicals.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Sub-Brands</span>
  </div>
</div>
`;

  html = html.replace(/<div id="content" class="site-content">\s*<div class="ast-container">/, `<div id="content" class="site-content">\n<div class="ast-container">\n${heroHtml}`);

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'sub-brands.html'), html, 'utf8');
  console.log('✓ Upgraded Sub-Brands page');
}

// -------------------------------------------------------------
// 7. REDESIGN: CONTACT US
// -------------------------------------------------------------
function redesignContactUs() {
  const filePath = path.join(rootDir, 'contact-us', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = injectCSS(html);

  const heroHtml = `
<div class="np-page-hero">
  <span class="np-pill-badge">💬 Get in Touch</span>
  <h1>Contact Nature Pure Extracts</h1>
  <p class="np-hero-subtitle">Connect with our extraction specialists and R&amp;D team to discuss custom botanical formulations, bulk inquiries, or technical specifications.</p>
  <div class="np-breadcrumbs">
    <a href="/">Home</a> <span>/</span> <span>Contact Us</span>
  </div>
</div>
`;

  html = html.replace(/<div id="content" class="site-content">\s*<div class="ast-container">/, `<div id="content" class="site-content">\n<div class="ast-container">\n${heroHtml}`);

  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'contact-us.html'), html, 'utf8');
  console.log('✓ Upgraded Contact Us page');
}

// -------------------------------------------------------------
// 8. GLOBAL INJECTION: APPLY CSS TO ALL REMAINING PAGES
// -------------------------------------------------------------
function applyGlobalCSS() {
  const dirs = fs.readdirSync(rootDir).filter(f => {
    const p = path.join(rootDir, f);
    return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.html'));
  });

  dirs.forEach(d => {
    const pagePath = path.join(rootDir, d, 'index.html');
    let content = fs.readFileSync(pagePath, 'utf8');
    if (!content.includes('nature-pure-enhancements-css')) {
      content = injectCSS(content);
      fs.writeFileSync(pagePath, content, 'utf8');
      const flatPath = path.join(rootDir, `${d}.html`);
      if (fs.existsSync(flatPath)) {
        fs.writeFileSync(flatPath, content, 'utf8');
      }
      console.log(`✓ Injected enhancements into ${d}`);
    }
  });

  // Also root index.html
  const rootIndex = path.join(rootDir, 'index.html');
  let homeContent = fs.readFileSync(rootIndex, 'utf8');
  if (!homeContent.includes('nature-pure-enhancements-css')) {
    homeContent = injectCSS(homeContent);
    fs.writeFileSync(rootIndex, homeContent, 'utf8');
    console.log('✓ Injected enhancements into Home (index.html)');
  }
}

// Run all redesign tasks
redesignAboutUs();
redesignOurStory();
redesignLeadership();
redesignMissionVision();
redesignInfrastructure();
redesignSubBrands();
redesignContactUs();
applyGlobalCSS();

console.log('\n==============================================');
console.log('🎉 All design and alignment upgrades completed!');
console.log('==============================================\n');

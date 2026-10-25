const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pagesDir = path.join(__dirname, 'scraped', 'pages');
const imgDir = path.join(__dirname, 'scraped', 'images');
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

function collectAndDownload() {
  if (!fs.existsSync(pagesDir)) return;
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));
  console.log(`Analyzing ${files.length} HTML files for images...`);

  const imgUrls = new Set();
  const cssUrls = new Set();

  for (const file of files) {
    const html = fs.readFileSync(path.join(pagesDir, file), 'utf8');
    
    // Find img src and srcset
    const srcs = [...html.matchAll(/src=["'](https?:\/\/[^"'\s>]+\.(?:png|jpe?g|svg|webp|gif|ico)(?:\?[^"'\s>]*)?)["']/gi)].map(m => m[1]);
    srcs.forEach(u => imgUrls.add(u));

    const srcsets = [...html.matchAll(/srcset=["']([^"']+)["']/gi)].map(m => m[1]);
    for (const ss of srcsets) {
      const parts = ss.split(',').map(s => s.trim().split(/\s+/)[0]);
      for (const p of parts) {
        if (p.startsWith('http')) imgUrls.add(p);
      }
    }

    // CSS background-image: url(...)
    const bgImgs = [...html.matchAll(/url\(['"]?(https?:\/\/[^'"\)]+\.(?:png|jpe?g|svg|webp|gif|ico)(?:\?[^'"\)]*)?)['"]?\)/gi)].map(m => m[1]);
    bgImgs.forEach(u => imgUrls.add(u));

    // CSS files
    const cssLinks = [...html.matchAll(/href=["'](https?:\/\/[^"']+\.css(?:\?[^"']*)?)["']/gi)].map(m => m[1]);
    cssLinks.forEach(u => cssUrls.add(u));
  }

  console.log(`Found ${imgUrls.size} unique images and ${cssUrls.size} unique CSS links.`);
  fs.writeFileSync('all_image_urls.json', JSON.stringify(Array.from(imgUrls), null, 2));
  fs.writeFileSync('all_css_urls.json', JSON.stringify(Array.from(cssUrls), null, 2));
}

collectAndDownload();

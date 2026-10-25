const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'scraped', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

const knownPages = new Set(files.map(f => f.replace('.html', '')));
const unknownPages = new Set();

for (const file of files) {
  const html = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  const links = [...html.matchAll(/href=["']https:\/\/naturepureextracts\.com\/([^"'#\?]+)\/?["']/gi)].map(m => m[1]);
  for (let l of links) {
    l = l.replace(/\/$/, '');
    if (l && !l.includes('wp-') && !l.includes('feed') && !knownPages.has(l)) {
      unknownPages.add(l);
    }
  }
}

console.log('Any un-crawled pages found across all 41 pages?');
console.log(Array.from(unknownPages));

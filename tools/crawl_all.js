const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = path.join(__dirname, 'scraped');
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
const pagesDir = path.join(baseDir, 'pages');
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

const pages = JSON.parse(fs.readFileSync('pages_list.json', 'utf8'));
// Add homepage
if (!pages.includes('https://naturepureextracts.com/')) {
  pages.unshift('https://naturepureextracts.com/');
}

console.log(`Starting crawl of ${pages.length} pages...`);

for (let i = 0; i < pages.length; i++) {
  const url = pages[i];
  let slug = url.replace('https://naturepureextracts.com/', '').replace(/\/$/, '');
  if (!slug) slug = 'home';
  const outPath = path.join(pagesDir, `${slug}.html`);

  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
    console.log(`[${i+1}/${pages.length}] Already downloaded: ${slug}`);
    continue;
  }

  console.log(`[${i+1}/${pages.length}] Fetching ${url} -> ${slug}.html`);
  try {
    const cmd = `curl.exe -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8" "${url}" -o "${outPath}"`;
    execSync(cmd, { stdio: 'pipe' });
    const sz = fs.statSync(outPath).size;
    console.log(`  Saved ${sz} bytes`);
  } catch (err) {
    console.error(`  Failed to fetch ${url}:`, err.message);
  }
}

console.log('Finished downloading all pages!');

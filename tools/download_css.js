const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const urls = JSON.parse(fs.readFileSync('all_css_urls.json', 'utf8'));
const outBase = path.join(__dirname, 'public_assets');

const validUrls = urls.map(u => u.split('?')[0]).filter(u => u.startsWith('http') && u.includes('naturepureextracts.com'));
const uniqueUrls = Array.from(new Set(validUrls));

console.log(`Total unique CSS files to download: ${uniqueUrls.length}`);

function downloadFile(urlStr, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
      return resolve({ url: urlStr, status: 'already_exists' });
    }

    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const client = urlStr.startsWith('https') ? https : http;
    const req = client.get(urlStr, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const parsed = new URL(urlStr);
          redirectUrl = new URL(redirectUrl, parsed.origin).href;
        }
        return downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        res.resume();
        return resolve({ url: urlStr, status: `error_${res.statusCode}` });
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => resolve({ url: urlStr, status: 'ok' }));
      });
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        resolve({ url: urlStr, status: 'write_error', error: err.message });
      });
    });

    req.on('timeout', () => {
      req.abort();
      resolve({ url: urlStr, status: 'timeout' });
    });

    req.on('error', (err) => {
      resolve({ url: urlStr, status: 'network_error', error: err.message });
    });
  });
}

async function run() {
  for (const urlStr of uniqueUrls) {
    const parsed = new URL(urlStr);
    let relPath = parsed.pathname.replace(/^\//, '').replace(/\//g, path.sep);
    relPath = decodeURIComponent(relPath);
    const dest = path.join(outBase, relPath);
    await downloadFile(urlStr, dest);
  }
  console.log('All CSS downloaded!');
}

run();

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const pagesDir = path.join(__dirname, 'scraped', 'pages');
const outBase = path.join(__dirname, 'public_assets');

// Collect all static assets across all HTML files
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));
const assetUrls = new Set();

for (const file of files) {
  const html = fs.readFileSync(path.join(pagesDir, file), 'utf8');

  // Match all href and src with naturepureextracts.com or relative wp-content/wp-includes
  const matches = [...html.matchAll(/(?:src|href|url)\s*=\s*["']([^"']+)["']|url\((?:['"]?)([^'"\)]+)(?:['"]?)\)/gi)];
  for (const m of matches) {
    const raw = m[1] || m[2];
    if (!raw) continue;
    let u = raw.split('?')[0].split('#')[0];
    if (u.match(/\.(?:js|css|woff2?|ttf|eot|svg|png|jpe?g|webp|gif|ico)$/i)) {
      if (u.startsWith('https://naturepureextracts.com') || u.startsWith('http://naturepureextracts.com')) {
        assetUrls.add(u);
      } else if (u.startsWith('/wp-content') || u.startsWith('/wp-includes')) {
        assetUrls.add('https://naturepureextracts.com' + u);
      }
    }
  }
}

console.log(`Discovered ${assetUrls.size} static assets to sync locally.`);

function downloadFile(urlStr, destPath) {
  return new Promise((resolve) => {
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
        return downloadFile(redirectUrl, destPath).then(resolve);
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
      fileStream.on('error', () => {
        fs.unlink(destPath, () => {});
        resolve({ url: urlStr, status: 'write_error' });
      });
    });

    req.on('timeout', () => {
      req.abort();
      resolve({ url: urlStr, status: 'timeout' });
    });

    req.on('error', () => {
      resolve({ url: urlStr, status: 'network_error' });
    });
  });
}

async function downloadAll() {
  const list = Array.from(assetUrls);
  const concurrency = 20;
  let active = 0;
  let index = 0;
  let done = 0;

  return new Promise((resolve) => {
    function next() {
      if (index >= list.length && active === 0) {
        console.log(`\nCompleted asset sync! Total assets processed: ${done}`);
        return resolve();
      }

      while (active < concurrency && index < list.length) {
        const urlStr = list[index++];
        active++;

        try {
          const parsed = new URL(urlStr);
          let relPath = parsed.pathname.replace(/^\//, '').replace(/\//g, path.sep);
          relPath = decodeURIComponent(relPath);
          const dest = path.join(outBase, relPath);

          downloadFile(urlStr, dest).then(() => {
            active--;
            done++;
            if (done % 50 === 0 || done === list.length) {
              process.stdout.write(`Synced assets: ${done}/${list.length}\r`);
            }
            next();
          }).catch(() => {
            active--;
            done++;
            next();
          });
        } catch (e) {
          active--;
          done++;
          next();
        }
      }
    }
    next();
  });
}

downloadAll();

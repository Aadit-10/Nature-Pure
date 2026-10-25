const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const urls = JSON.parse(fs.readFileSync('all_image_urls.json', 'utf8'));
const outBase = path.join(__dirname, 'public_assets');

// Clean and filter URLs
const validUrls = urls.map(u => u.split('?')[0]).filter(u => u.startsWith('http'));
const uniqueUrls = Array.from(new Set(validUrls));

console.log(`Total unique image files to download: ${uniqueUrls.length}`);

// Download helper
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
        res.resume(); // consume response to free memory
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

// Concurrency queue
async function downloadAll() {
  const concurrency = 15;
  let active = 0;
  let index = 0;
  let completed = 0;
  let failed = 0;

  return new Promise((resolve) => {
    function next() {
      if (index >= uniqueUrls.length && active === 0) {
        console.log(`\nAll downloads finished! Completed: ${completed}, Failed: ${failed}`);
        return resolve();
      }

      while (active < concurrency && index < uniqueUrls.length) {
        const urlStr = uniqueUrls[index++];
        active++;

        try {
          const parsed = new URL(urlStr);
          // Destination path based on pathname
          // e.g. /wp-content/uploads/2026/05/pic.png -> public_assets/wp-content/uploads/2026/05/pic.png
          let relPath = parsed.pathname.replace(/^\//, '').replace(/\//g, path.sep);
          // decode uri components
          relPath = decodeURIComponent(relPath);
          const dest = path.join(outBase, relPath);

          downloadFile(urlStr, dest).then(result => {
            active--;
            if (result.status === 'ok' || result.status === 'already_exists') {
              completed++;
            } else {
              failed++;
            }
            if ((completed + failed) % 50 === 0 || (completed + failed) === uniqueUrls.length) {
              process.stdout.write(`Downloaded: ${completed}/${uniqueUrls.length} (Failed: ${failed})\r`);
            }
            next();
          }).catch(() => {
            active--;
            failed++;
            next();
          });
        } catch (e) {
          active--;
          failed++;
          next();
        }
      }
    }

    next();
  });
}

downloadAll();

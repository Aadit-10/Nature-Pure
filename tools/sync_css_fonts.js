const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const publicAssets = path.join(__dirname, 'public_assets');

// Recursively find all CSS files in public_assets
function getFiles(dir, matchExt) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, matchExt));
    } else if (file.endsWith(matchExt)) {
      results.push(fullPath);
    }
  }
  return results;
}

const cssFiles = getFiles(publicAssets, '.css');
console.log(`Found ${cssFiles.length} CSS files in public_assets`);

const missingAssets = new Set();

for (const cssFile of cssFiles) {
  const content = fs.readFileSync(cssFile, 'utf8');
  const matches = [...content.matchAll(/url\((['"]?)([^'"\)]+)\1\)/g)];
  for (const m of matches) {
    let rel = m[2].trim().split('?')[0].split('#')[0];
    if (rel.startsWith('data:') || rel.length === 0) continue;

    let targetPath;
    let urlToFetch = null;

    if (rel.startsWith('http://') || rel.startsWith('https://')) {
      if (rel.includes('naturepureextracts.com')) {
        const p = new URL(rel).pathname;
        targetPath = path.join(publicAssets, p.replace(/^\//, '').replace(/\//g, path.sep));
        urlToFetch = rel;
      }
    } else if (rel.startsWith('/')) {
      targetPath = path.join(publicAssets, rel.replace(/^\//, '').replace(/\//g, path.sep));
      urlToFetch = 'https://naturepureextracts.com' + rel;
    } else {
      // Relative to cssFile
      const cssDir = path.dirname(cssFile);
      targetPath = path.resolve(cssDir, rel);
      // Construct remote URL
      const relToPublic = path.relative(publicAssets, targetPath).replace(/\\/g, '/');
      urlToFetch = 'https://naturepureextracts.com/' + relToPublic;
    }

    if (targetPath && !fs.existsSync(targetPath) && urlToFetch) {
      missingAssets.add(JSON.stringify({ url: urlToFetch, path: targetPath }));
    }
  }
}

console.log(`Found ${missingAssets.size} missing assets referenced inside CSS files.`);

// Download missing
const toFetch = Array.from(missingAssets).map(s => JSON.parse(s));

function downloadFile(urlStr, destPath) {
  return new Promise((resolve) => {
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

async function run() {
  for (let i = 0; i < toFetch.length; i++) {
    await downloadFile(toFetch[i].url, toFetch[i].path);
    if ((i + 1) % 10 === 0 || i === toFetch.length - 1) {
      console.log(`Downloaded ${i + 1}/${toFetch.length} CSS referenced assets`);
    }
  }
  console.log('CSS font/asset check complete!');
}

run();

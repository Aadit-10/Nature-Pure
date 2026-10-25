const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8080;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // CORS & Security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Default to index.html for root
  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Safe file path resolution
  let filePath = path.join(ROOT_DIR, pathname);

  // If path is a directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // If file doesn't exist, try appending .html or /index.html
  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  // Check if file exists
  if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000'
    });

    const stream = fs.createReadStream(filePath);
    stream.on('error', (err) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Server Error');
    });
    stream.pipe(res);
  } else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html>
<head><title>404 Not Found - Nature Pure Extracts</title>
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; background:#f4fbf5; color:#233d28; text-align:center; }
.card { background:#fff; padding:40px 50px; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,0.08); max-width:500px; }
h1 { font-size:64px; margin:0; color:#2e7d32; }
p { font-size:18px; margin:16px 0 24px; color:#555; }
a { display:inline-block; padding:12px 28px; background:#2e7d32; color:#fff; text-decoration:none; border-radius:30px; font-weight:600; }
a:hover { background:#1b5e20; }
</style>
</head>
<body>
<div class="card">
  <h1>404</h1>
  <p>The page you are looking for does not exist.</p>
  <a href="/">Return to Home</a>
</div>
</body>
</html>`);
  }
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🌿 Nature Pure Extracts Rebuilt Website`);
  console.log(`   Running at: http://localhost:${PORT}`);
  console.log(`======================================================\n`);
});

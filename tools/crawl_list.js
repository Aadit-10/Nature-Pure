const fs = require('fs');
const https = require('https');
const http = require('http');
const { execSync } = require('child_process');

// Collect all internal HTML links from the index page
const html = fs.readFileSync('index_raw.html', 'utf8');
const regex = /href="(https:\/\/naturepureextracts\.com\/[^"#\?]+)"/g;
let match;
const urls = new Set();
while ((match = regex.exec(html)) !== null) {
  let u = match[1];
  if (!u.endsWith('.css') && !u.endsWith('.js') && !u.endsWith('.png') && !u.endsWith('.jpg') && !u.endsWith('.webp') && !u.endsWith('.xml') && !u.endsWith('.php') && !u.includes('/wp-json/') && !u.includes('/feed/')) {
    urls.add(u);
  }
}

console.log('Discovered URLs from homepage:', Array.from(urls));
fs.writeFileSync('pages_list.json', JSON.stringify(Array.from(urls), null, 2));

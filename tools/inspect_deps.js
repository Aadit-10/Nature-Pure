const fs = require('fs');

const html = fs.readFileSync('scraped/pages/home.html', 'utf8');

// Find all script tags
const scripts = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Scripts in home:', scripts.length);
console.log(scripts);

// Find all font links
const fonts = [...html.matchAll(/href=["'](https?:\/\/[^"']*(?:fonts|font|woff2?)[^"']*)["']/gi)].map(m => m[1]);
console.log('Fonts in home:', fonts);

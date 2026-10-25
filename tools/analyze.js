const fs = require('fs');

const html = fs.readFileSync('index_raw.html', 'utf8');

const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'No title');

const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);
const internal = [...new Set(hrefs.filter(h => h.includes('naturepureextracts.com') || (h.startsWith('/') && !h.startsWith('//'))))];
console.log('Internal links found:', internal.length);
console.log(JSON.stringify(internal, null, 2));

const imgs = [...html.matchAll(/src=["']([^"']+\.(?:png|jpe?g|svg|webp|gif))["']/gi)].map(m => m[1]);
console.log('Images found:', imgs.length);
console.log(JSON.stringify([...new Set(imgs)].slice(0, 20), null, 2));

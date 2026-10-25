const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const dirs = fs.readdirSync(rootDir).filter(f => {
  const p = path.join(rootDir, f);
  return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.html'));
});

console.log('Pages with almost no content:');
dirs.forEach(d => {
  const html = fs.readFileSync(path.join(rootDir, d, 'index.html'), 'utf8');
  const mastheadEnd = html.indexOf('</header>');
  const colophonStart = html.indexOf('<footer');
  const mid = html.slice(mastheadEnd + 9, colophonStart);
  const text = mid.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length < 200) {
    console.log(`- ${d} (text length: ${text.length}): "${text}"`);
  }
});

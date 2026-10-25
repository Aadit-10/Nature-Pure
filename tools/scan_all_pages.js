const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const dirs = fs.readdirSync(rootDir).filter(f => {
  const p = path.join(rootDir, f);
  return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.html'));
});

dirs.forEach(d => {
  const html = fs.readFileSync(path.join(rootDir, d, 'index.html'), 'utf8');
  const m = html.match(/data-elementor-type="wp-page"[\s\S]*?<\/div>\s*<\/div>\s*<\/article>/)
         || html.match(/<article[\s\S]*?<\/article>/)
         || html.match(/<div class="entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>/);
  const text = m ? m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  const imgs = (html.match(/<img /g) || []).length;
  console.log(`${d.padEnd(35)} : text chars: ${String(text.length).padStart(5)} | sample: ${text.slice(0, 50)}...`);
});

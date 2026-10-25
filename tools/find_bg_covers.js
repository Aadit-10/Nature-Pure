const fs = require('fs');

const html = fs.readFileSync('about-us/index.html', 'utf8');
const cssLinks = [...html.matchAll(/href=["']([^"']+\.css(?:\?[^"']*)?)["']/gi)].map(m => m[1]);

cssLinks.forEach(link => {
  const p = link.split('?')[0].replace(/^\//, '');
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const matches = text.match(/(?:\.ast-plain-container|\.ast-page-builder-template|article|\.entry-content|\.site-content|\.site|body|#page|\.ast-container|\.elementor-17)\s*\{[^}]*background[^}]*\}/gi);
    if (matches) {
      console.log('File:', p);
      matches.forEach(m => console.log('  ', m));
    }
  }
});

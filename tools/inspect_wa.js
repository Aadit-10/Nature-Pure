const fs = require('fs');
const html = fs.readFileSync('scraped/pages/home.html', 'utf8');
const idx = html.indexOf('joinchat');
if (idx !== -1) {
  console.log(html.slice(idx - 50, idx + 600));
}

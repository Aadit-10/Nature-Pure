const fs = require('fs');

const html = fs.readFileSync('scraped/pages/home.html', 'utf8');
const elemStart = html.indexOf('data-elementor-type="wp-page"');
console.log(html.slice(elemStart, elemStart + 1500));

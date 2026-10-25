const fs = require('fs');
const html = fs.readFileSync('scraped/pages/home.html', 'utf8');
const matches = [...html.matchAll(/data-elementor-type="([^"]+)"/g)].map(m => m[1]);
console.log('Types:', matches);

const masthead = html.indexOf('</header>');
console.log('After masthead:', html.slice(masthead + 9, masthead + 1500));

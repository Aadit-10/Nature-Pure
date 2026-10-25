const fs = require('fs');
const html = fs.readFileSync('about-us/index.html', 'utf8');
const entryStart = html.indexOf('<div class="entry-content');
console.log(html.slice(entryStart, entryStart + 1000));

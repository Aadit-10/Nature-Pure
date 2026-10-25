const fs = require('fs');
const html = fs.readFileSync('scraped/pages/home.html', 'utf8');
const matches = [...html.matchAll(/<div[^>]*joinchat[^>]*>[\s\S]*?<\/div>/gi)];
console.log('Joinchat divs:', matches.length);
if (matches.length > 0) {
  console.log(matches[0][0].slice(0, 400));
} else {
  // search for joinchat_app
  const jc = html.match(/class=["'][^"']*joinchat[^"']*["']/gi);
  console.log('Class occurrences:', jc);
}

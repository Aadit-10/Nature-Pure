const fs = require('fs');
const html = fs.readFileSync('about-us/index.html', 'utf8');
const main = html.match(/<main[\s\S]*?<\/main>/);
if (main) {
  fs.writeFileSync('tools/about_main.html', main[0]);
  console.log('Saved main to tools/about_main.html');
  console.log('Length:', main[0].length);
  // Print first 2000 chars of main
  console.log(main[0].slice(0, 2000));
}

const fs = require('fs');

const html = fs.readFileSync('our-story/index.html', 'utf8');
console.log('HTML size:', html.length);
// print body
const bodyMatch = html.match(/<body[\s\S]*?<\/body>/);
if (bodyMatch) {
  // strip scripts and styles
  const clean = bodyMatch[0].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  console.log('Clean body length:', clean.length);
  // print first 2500 chars of clean body
  console.log(clean.slice(0, 3000));
}

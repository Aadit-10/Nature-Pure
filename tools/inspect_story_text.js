const fs = require('fs');
const html = fs.readFileSync('our-story/index.html', 'utf8');
const textEditor = html.match(/<div class="elementor-element elementor-element-5422d957[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (textEditor) {
  console.log('Text in our story:');
  console.log(textEditor[0]);
} else {
  console.log('Searching all text-editor in our-story:');
  const allTexts = [...html.matchAll(/class="elementor-widget-text-editor"[\s\S]*?<p>([\s\S]*?)<\/div>/gi)];
  allTexts.forEach(t => console.log(t[1].slice(0, 300)));
}

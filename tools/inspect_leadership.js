const fs = require('fs');
const html = fs.readFileSync('leadership/index.html', 'utf8');
const textEditor = html.match(/<div class="elementor-widget-text-editor"[\s\S]*?<\/div>/);
if (textEditor) console.log(textEditor[0]);

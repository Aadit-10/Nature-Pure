const fs = require('fs');

const html = fs.readFileSync('about-us/index.html', 'utf8');
const entryContent = html.match(/<div class="entry-content[^"]*"[^>]*>([\s\S]*?)<\/div><!-- \.entry-content -->/);
if (entryContent) {
  console.log('Found entry-content, length:', entryContent[1].length);
  const sections = [...entryContent[1].matchAll(/<section[\s\S]*?<\/section>/gi)].map(s => s[0]);
  console.log('Sections count in entry-content:', sections.length);
  sections.forEach((sec, i) => {
    console.log(`\n--- Section ${i} (length: ${sec.length}) ---`);
    console.log(sec.slice(0, 400).replace(/\s+/g, ' '));
  });
} else {
  console.log('No entry-content found. Searching for main or article:');
  const main = html.match(/<main[\s\S]*?<\/main>/);
  if (main) console.log('Main found, length:', main[0].length);
}

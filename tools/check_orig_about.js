const fs = require('fs');

const orig = fs.readFileSync('scraped/pages/about-us.html', 'utf8');
console.log('Original about-us size:', orig.length);

// What classes and styles were in the main sections?
const sections = [...orig.matchAll(/<div[^>]*class="[^"]*(?:elementor-element|e-con|site-content)[^"]*"[^>]*>/gi)].map(m => m[0]);
console.log('Main div elements count:', sections.length);
sections.slice(0, 10).forEach(s => console.log('Div:', s));

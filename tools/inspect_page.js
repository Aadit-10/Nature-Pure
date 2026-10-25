const fs = require('fs');
const path = require('path');

function inspect(slug) {
  const filePath = path.join(__dirname, '..', slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.log('File not found:', filePath);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  console.log('=== Inspecting', slug, '===');
  const headings = [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  console.log('Headings:', headings);

  // Find images
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
  console.log('Images count:', imgs.length, 'Samples:', imgs.slice(0, 5));

  // Find elementor widget types
  const widgets = [...html.matchAll(/data-widget_type="([^"]+)"/g)].map(m => m[1]);
  console.log('Widget types:', [...new Set(widgets)]);

  // Check section background styles
  const bgStyles = [...html.matchAll(/style="([^"]*background[^"]*)"/gi)].map(m => m[1]);
  console.log('Background inline styles:', bgStyles.length);
}

inspect('about-us');
inspect('our-story');
inspect('infrastructure');
inspect('mission-vision');
inspect('sub-brands');
inspect('rd');

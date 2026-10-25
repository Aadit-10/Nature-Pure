const fs = require('fs');

function dumpMain(slug) {
  const html = fs.readFileSync(`${slug}/index.html`, 'utf8');
  const main = html.match(/<main[\s\S]*?<\/main>/);
  if (main) {
    console.log(`\n=== MAIN FOR ${slug} === (Length: ${main[0].length})`);
    console.log(main[0].slice(0, 1500));
  }
}

dumpMain('our-story');
dumpMain('mission-vision');
dumpMain('infrastructure');
dumpMain('leadership');
dumpMain('sub-brands');

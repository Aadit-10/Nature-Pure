import { execSync } from 'child_process';

const html = execSync('git show 1137d8a:index.html', { maxBuffer: 10 * 1024 * 1024 }).toString();
const idx = html.indexOf('Your Strategic Partner in CO₂ Extract Innovation');
if (idx !== -1) {
  console.log(html.substring(idx - 200, idx + 2000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

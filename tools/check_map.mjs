import { execSync } from 'child_process';

const html = execSync('git show 1137d8a:index.html', { maxBuffer: 10 * 1024 * 1024 }).toString();
console.log(html.substring(340500, 342500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

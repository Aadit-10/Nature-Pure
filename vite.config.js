import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// Custom plugin to serve wp-content static media assets seamlessly in Vite dev and preview
function serveWpAssets() {
  const handler = (req, res, next) => {
    if (req.url && req.url.startsWith('/wp-content/')) {
      const cleanPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = path.join(import.meta.dirname, cleanPath.replace(/^\//, ''));
      if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.webp': 'image/webp',
          '.svg': 'image/svg+xml',
          '.css': 'text/css',
          '.js': 'application/javascript',
          '.woff': 'font/woff',
          '.woff2': 'font/woff2',
          '.ttf': 'font/ttf',
        };
        res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        return fs.createReadStream(filePath).pipe(res);
      }
    }
    next();
  };

  return {
    name: 'serve-wp-assets',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveWpAssets()],
  server: {
    port: 5173,
    open: false,
    fs: {
      allow: ['.']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
});

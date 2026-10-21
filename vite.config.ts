import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-final-mp4',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4')) {
            const filePath = path.resolve(__dirname, 'dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4');
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'video/mp4');
              res.setHeader('Content-Disposition', 'attachment; filename="MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"');
              return fs.createReadStream(filePath).pipe(res);
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    host: true
  },
  build: {
    emptyOutDir: false
  }
});

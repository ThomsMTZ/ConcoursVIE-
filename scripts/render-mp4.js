import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import http from 'http';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Static Server for dist/
function startStaticServer(distDir, port = 4173) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml'
  };

  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    if (reqUrl === '/') reqUrl = '/index.html';

    const filePath = path.join(distDir, reqUrl);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          fs.readFile(path.join(distDir, 'index.html'), (err2, indexContent) => {
            if (err2) {
              res.writeHead(404);
              res.end('Not found');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(indexContent);
            }
          });
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`[Server] Serveur local démarré sur http://localhost:${port}`);
      resolve(server);
    });
  });
}

// 2. Locate FFmpeg Executable
function getFFmpegPath() {
  try {
    const result = execSync('python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"', {
      encoding: 'utf-8'
    }).trim();
    if (fs.existsSync(result)) {
      return result;
    }
  } catch (e) {}
  return 'ffmpeg';
}

(async () => {
  const distDir = path.resolve(__dirname, '../dist');
  const rawVideoDir = path.resolve(__dirname, '../dist/raw_video');
  const voiceoverPath = path.resolve(__dirname, '../public/assets/voiceover.mp3');
  const finalMp4Path = path.resolve(__dirname, '../dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4');

  if (!fs.existsSync(rawVideoDir)) {
    fs.mkdirSync(rawVideoDir, { recursive: true });
  }

  const server = await startStaticServer(distDir, 4173);

  console.log('[Browser] Lancement de Chrome avec accélération GPU complète...');
  const browser = await chromium.launch({
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      '--use-gl=angle',
      '--use-angle=d3d11',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--enable-gpu-rasterization',
      '--enable-zero-copy',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--autoplay-policy=no-user-gesture-required',
      '--window-size=1920,1080',
      '--force-device-scale-factor=1'
    ]
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: rawVideoDir,
      size: { width: 1920, height: 1080 }
    }
  });

  const page = await context.newPage();
  console.log('[Capture] Pré-chargement des textures et de la scène 3D...');
  await page.goto('http://localhost:4173/?autoplay=1&record=1');
  await page.waitForLoadState('networkidle');

  // Attendre exactement les 85 secondes du scénario (< 1m30)
  console.log('[Capture] Enregistrement cinématique haute fidélité (85.5s)...');
  await page.waitForTimeout(85500);

  const rawVideoPath = await page.video().path();
  console.log(`[Capture] Vidéo brute enregistrée : ${rawVideoPath}`);

  await context.close();
  await browser.close();
  server.close();

  // 3. Fusion FFmpeg avec Cadence Forcée 60 FPS Constants (CFR)
  // Résout définitivement tout problème de micro-saccades ou de roll-back temporel
  const ffmpegExe = getFFmpegPath();
  console.log(`[FFmpeg] Utilisation de l'exécutable : ${ffmpegExe}`);
  console.log('[FFmpeg] Encodage H.264 60 FPS (CFR constant) + Audio HD...');

  const ffmpegCmd = `"${ffmpegExe}" -y -i "${rawVideoPath}" -i "${voiceoverPath}" -map 0:v:0 -map 1:a:0 -vf "fps=60,setpts=N/(60*TB)" -r 60 -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -t 85 "${finalMp4Path}"`;

  execSync(ffmpegCmd, { stdio: 'inherit' });

  console.log('====================================================');
  console.log('✅ Rendu MP4 60 FPS Ultra-Fluide terminé avec succès !');
  console.log(`Fichier final : ${finalMp4Path}`);
  console.log('Durée : 85 secondes (Conforme < 1m30)');
  console.log('====================================================');
})();

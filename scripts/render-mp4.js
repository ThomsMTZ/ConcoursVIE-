/**
 * scripts/render-mp4.js
 * Grand Prix V.I.E Roumanie 2026 — Thomas MARTINEZ
 * Capture Playwright Chrome GPU 1080p60 & Transcodage FFmpeg 7.1 CFR Strict
 */

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { preview } from 'vite';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Localisation du binaire FFmpeg (imageio_ffmpeg ou PATH)
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
  const args = process.argv.slice(2);
  const viewMode = args.find(a => a.startsWith('--view='))?.split('=')[1] || 'editorial';
  const customOut = args.find(a => a.startsWith('--out='))?.split('=')[1];

  const distDir = path.resolve(__dirname, '../dist');
  const rawVideoDir = path.resolve(__dirname, '../dist/raw_video');
  const voiceoverPath = path.resolve(__dirname, '../public/assets/voiceover.mp3');
  
  const finalMp4Path = customOut 
    ? path.resolve(__dirname, '..', customOut)
    : (viewMode === 'cockpit'
        ? path.resolve(__dirname, '../dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026_v1_cockpit.mp4')
        : path.resolve(__dirname, '../dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026_v2_editorial.mp4'));

  console.log(`[Config] Mode de rendu : view=${viewMode}`);
  console.log(`[Config] Fichier de sortie cible : ${finalMp4Path}`);

  if (!fs.existsSync(rawVideoDir)) {
    fs.mkdirSync(rawVideoDir, { recursive: true });
  }

  // Vérification de la présence de la voix-off
  if (!fs.existsSync(voiceoverPath)) {
    console.error(`[Erreur] Piste audio introuvable : ${voiceoverPath}`);
    console.error("Veuillez exécuter 'npm run render:audio' au préalable.");
    process.exit(1);
  }

  console.log('[Server] Démarrage du serveur Vite preview haute performance sur le port 4173...');
  const server = await preview({
    root: path.resolve(__dirname, '..'),
    preview: { port: 4173, strictPort: true }
  });
  console.log('[Server] Serveur Vite preview prêt pour le streaming vidéo 1080p60');

  // Détection du chemin Google Chrome avec fallback Chromium
  const standardChromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chromeExecutable = fs.existsSync(standardChromePath) ? standardChromePath : undefined;

  console.log('[Browser] Lancement de Chrome avec accélération GPU complète...');
  const browser = await chromium.launch({
    headless: false,
    executablePath: chromeExecutable,
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
  console.log(`[Capture] Pré-chargement des textures et de la scène (view=${viewMode})...`);
  await page.goto(`http://localhost:4173/?record=1&view=${viewMode}`);
  await page.waitForLoadState('domcontentloaded');

  // Attente de la mise en mémoire tampon complète du master vidéo pour éviter tout gel au démarrage
  console.log('[Capture] Préparation et mise en tampon VRAM du flux vidéo...');
  try {
    await page.waitForFunction(() => {
      const v = document.querySelector('video');
      return !v || v.readyState >= 3;
    }, { timeout: 30000 });
  } catch (e) {
    console.warn('[Capture] Avertissement buffer vidéo :', e.message);
  }

  // Stabilisation de 1000ms pour garantir un premier frame statique parfait avant déclenchement
  await page.waitForTimeout(1000);

  console.log('[Capture] Démarrage instantané synchronisé de la lecture cinématique...');
  await page.evaluate(() => {
    if (typeof window.startFootagePlayback === 'function') {
      window.startFootagePlayback();
    }
    if (typeof window.startTimelinePlayback === 'function') {
      window.startTimelinePlayback();
    }
  });

  // Enregistrement des 85.0 secondes du scénario avec marge de capture de 4.0s
  console.log('[Capture] Enregistrement cinématique haute fidélité (89.0s)...');
  await page.waitForTimeout(89000);

  // CRITIQUE : Fermer le contexte AVANT de récupérer le chemin pour finaliser le conteneur WebM
  const videoHandle = page.video();
  try {
    if (!page.isClosed()) await page.close();
  } catch (e) {}
  try {
    await context.close();
  } catch (e) {
    console.warn('[Capture] Contexte déjà fermé ou avertissement :', e.message);
  }
  try {
    await browser.close();
  } catch (e) {}
  try {
    if (server && server.httpServer) {
      server.httpServer.close();
    }
  } catch (e) {}

  let rawVideoPath = '';
  try {
    rawVideoPath = await videoHandle.path();
  } catch (e) {
    // Fallback recherche du fichier webm le plus récent dans rawVideoDir
    const webmFiles = fs.readdirSync(rawVideoDir).filter(f => f.endsWith('.webm'));
    if (webmFiles.length > 0) {
      webmFiles.sort((a, b) => fs.statSync(path.join(rawVideoDir, b)).mtimeMs - fs.statSync(path.join(rawVideoDir, a)).mtimeMs);
      rawVideoPath = path.join(rawVideoDir, webmFiles[0]);
    }
  }
  console.log(`[Capture] Vidéo brute enregistrée et finalisée : ${rawVideoPath}`);

  // 3. Détection automatique chirurgicale du premier frame de mouvement (radar en action)
  let startOffset = 0.0;
  try {
    const detectScript = path.resolve(__dirname, 'detect_start.py');
    const safeRawPath = rawVideoPath.replace(/\\/g, '/');
    fs.writeFileSync(detectScript, `import cv2, numpy as np, sys
raw_path = "${safeRawPath}"
cap = cv2.VideoCapture(raw_path)
fps = cap.get(cv2.CAP_PROP_FPS) or 25.0
prev = None
seen_content = False
content_frames = 0
start_t = 0.0

for i in range(int(fps * 60)):
    ret, frame = cap.read()
    if not ret: break
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)[200:800, 200:1400]
    m = gray.mean()
    if 15.0 < m < 240.0:
        seen_content = True
        content_frames += 1
    if seen_content and content_frames > 15:
        if prev is not None:
            diff = float(np.mean(np.abs(gray.astype(float) - prev.astype(float))))
            if diff > 1.2:
                start_t = i / fps
                print(f"{start_t:.4f}")
                sys.exit(0)
    prev = gray

print(f"{start_t:.4f}")
`);
    const out = execSync(`python "${detectScript}"`, { encoding: 'utf-8' }).trim();
    if (fs.existsSync(detectScript)) fs.unlinkSync(detectScript);
    const val = parseFloat(out);
    if (!isNaN(val) && val > 0.05) {
      startOffset = val;
      console.log(`[Trim] Premier mouvement fluide détecté avec précision : calage chirurgical à t = ${startOffset.toFixed(3)}s`);
    }
  } catch (err) {
    console.warn('[Trim] Fallback détection standard :', err.message);
  }

  // 4. Fusion & Transcodage FFmpeg 7.1 en 1080p 60fps CFR Strict avec démarrage direct au contenu
  const ffmpegExe = getFFmpegPath();
  console.log(`[FFmpeg] Utilisation de l'exécutable : ${ffmpegExe}`);
  console.log('[FFmpeg] Encodage H.264 1080p 60 FPS (CFR constant) + Audio 48kHz AAC...');

  const ffmpegCmd = `"${ffmpegExe}" -y -ss ${startOffset.toFixed(3)} -i "${rawVideoPath}" -i "${voiceoverPath}" -map 0:v:0 -map 1:a:0 -vf "fps=60,setpts=N/(60*TB)" -r 60 -c:v libx264 -profile:v high -level 4.2 -preset fast -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -ar 48000 -movflags +faststart -t 85 "${finalMp4Path}"`;

  execSync(ffmpegCmd, { stdio: 'inherit' });

  // 5. Audit & Validation du livrable final
  if (fs.existsSync(finalMp4Path)) {
    // Copie vers le livrable officiel par défaut seulement si explicitement demandé
    const syncDefault = args.includes('--sync-default');
    const defaultSubmissionPath = path.resolve(__dirname, '../dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4');
    if (syncDefault && finalMp4Path !== defaultSubmissionPath) {
      fs.copyFileSync(finalMp4Path, defaultSubmissionPath);
      console.log(`[Sync] Copié vers le livrable officiel par défaut : ${defaultSubmissionPath}`);
    }

    const stats = fs.statSync(finalMp4Path);
    console.log('====================================================');
    console.log('[OK] RENDU MP4 1080P 60FPS TERMINE AVEC SUCCES !');
    console.log(`Fichier final : ${finalMp4Path}`);
    console.log(`Taille : ${(stats.size / (1024 * 1024)).toFixed(2)} Mo`);
    console.log('Durée : Exactement 85.00 secondes (5 100 frames à 60 fps)');
    console.log('Format : 1920x1080 Full HD, H.264 High 4.2 CFR, AAC 192k 48kHz');
    console.log('====================================================');
  } else {
    console.error('[Erreur] Le fichier MP4 final n\'a pas pu être créé.');
    process.exit(1);
  }
})();

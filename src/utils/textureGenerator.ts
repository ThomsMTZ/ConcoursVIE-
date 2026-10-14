import * as THREE from 'three';

/**
 * Procedural texture generator for high-fidelity Three.js materials.
 * Produces crisp, beautiful canvas-based textures with zero external asset dependencies.
 */

// 1. Skyscraper Windows Texture (Bucarest Tech Hub)
export function createBuildingTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Deep architectural glass/concrete facade
  ctx.fillStyle = '#080e1a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cols = 14;
  const rows = 36;
  const padX = 10;
  const padY = 10;
  const w = (canvas.width - padX * (cols + 1)) / cols;
  const h = (canvas.height - padY * (rows + 1)) / rows;

  for (let r = 0; r < rows; r++) {
    // Structural floor separator line
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, r * (h + padY), canvas.width, 3);

    for (let c = 0; c < cols; c++) {
      const x = padX + c * (w + padX);
      const y = padY + r * (h + padY);

      const rand = Math.random();
      if (rand > 0.42) {
        if (rand > 0.82) {
          ctx.fillStyle = '#38bdf8'; // Cyan screen glow
        } else if (rand > 0.58) {
          ctx.fillStyle = '#fef08a'; // Warm amber office light
        } else {
          ctx.fillStyle = '#bae6fd'; // Clean daylight fluorescent
        }
        ctx.fillRect(x, y, w, h);
      } else {
        ctx.fillStyle = '#050912'; // Dark unlit office
        ctx.fillRect(x, y, w, h);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// 2. High-Tech Aerodynamic Jet Fuselage & Wing Livery
export function createAirplaneTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Aeronautics pearl white metallic gradient
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, '#f8fafc');
  grad.addColorStop(0.3, '#ffffff');
  grad.addColorStop(0.7, '#e2e8f0');
  grad.addColorStop(1, '#cbd5e1');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Fuselage Panel Joints
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
  ctx.lineWidth = 2;
  for (let x = 100; x < canvas.width; x += 120) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // Aeronautic Speed Stripes (Navy, Cyan, Cobalt)
  ctx.fillStyle = '#0369a1';
  ctx.fillRect(0, 470, canvas.width, 24);
  ctx.fillStyle = '#00f0ff';
  ctx.fillRect(0, 498, canvas.width, 10);
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(0, 512, canvas.width, 6);

  // Streamlined Cockpit Canopy Windows
  ctx.fillStyle = '#030712';
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.roundRect(160 + i * 55, 390, 44, 52, 10);
    ctx.fill();
    // Glass reflection highlight
    ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.fillRect(168 + i * 55, 396, 12, 40);
    ctx.fillStyle = '#030712';
  }

  // Passenger Windows
  for (let i = 0; i < 28; i++) {
    ctx.beginPath();
    ctx.roundRect(460 + i * 48, 415, 22, 34, 8);
    ctx.fill();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.fillRect(464 + i * 48, 419, 6, 26);
    ctx.fillStyle = '#030712';
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// 3. Polished Airport Concourse Marble Floor Texture with Real Tile Grid
export function createAirportFloorTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Deep charcoal reflective stone
  ctx.fillStyle = '#080f1e';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Marble veining
  ctx.strokeStyle = 'rgba(2, 132, 199, 0.12)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 150);
  ctx.bezierCurveTo(240, 280, 600, 80, 1024, 360);
  ctx.moveTo(0, 680);
  ctx.bezierCurveTo(360, 560, 680, 840, 1024, 780);
  ctx.stroke();

  // Subtle tile grid lines (illuminated grout)
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 4;
  const tileSize = 256;
  for (let x = 0; x <= canvas.width; x += tileSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += tileSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 12);
  return texture;
}

// 4. CABIS Smart Biometric OLED Gate Screen Texture (Sharp & High Tech)
export function createCabisScreenTexture(granted: boolean = false): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 800;
  const ctx = canvas.getContext('2d')!;

  // Deep black glass OLED screen
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Outer Glowing Border
  ctx.strokeStyle = granted ? '#10b981' : '#00f0ff';
  ctx.lineWidth = 10;
  ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);

  // Screen Header
  ctx.fillStyle = granted ? '#10b981' : '#00f0ff';
  ctx.font = 'bold 28px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('CABIS // BIOMETRIC GATE', canvas.width / 2, 70);
  ctx.font = '16px "JetBrains Mono", monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('HENRI COANDĂ AIRPORT — BUCAREST', canvas.width / 2, 102);

  // Biometric Target Frame Box
  const frameY = 140;
  const frameSize = 340;
  const frameX = (canvas.width - frameSize) / 2;

  ctx.strokeStyle = granted ? '#10b981' : '#38bdf8';
  ctx.lineWidth = 4;
  ctx.strokeRect(frameX, frameY, frameSize, frameSize);

  // Target Corner Crosshairs
  const cLen = 30;
  ctx.lineWidth = 6;
  ctx.strokeStyle = granted ? '#34d399' : '#00f0ff';
  // Top-Left
  ctx.beginPath(); ctx.moveTo(frameX - 4, frameY + cLen); ctx.lineTo(frameX - 4, frameY - 4); ctx.lineTo(frameX + cLen, frameY - 4); ctx.stroke();
  // Top-Right
  ctx.beginPath(); ctx.moveTo(frameX + frameSize + 4 - cLen, frameY - 4); ctx.lineTo(frameX + frameSize + 4, frameY - 4); ctx.lineTo(frameX + frameSize + 4, frameY + cLen); ctx.stroke();
  // Bottom-Left
  ctx.beginPath(); ctx.moveTo(frameX - 4, frameY + frameSize - cLen); ctx.lineTo(frameX - 4, frameY + frameSize + 4); ctx.lineTo(frameX + cLen, frameY + frameSize + 4); ctx.stroke();
  // Bottom-Right
  ctx.beginPath(); ctx.moveTo(frameX + frameSize + 4 - cLen, frameY + frameSize + 4); ctx.lineTo(frameX + frameSize + 4, frameY + frameSize + 4); ctx.lineTo(frameX + frameSize + 4, frameY + frameSize - cLen); ctx.stroke();

  // Face Silhouette
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.arc(canvas.width / 2, frameY + 120, 65, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(canvas.width / 2, frameY + 260, 105, 65, 0, Math.PI, 0);
  ctx.fill();

  // Biometric Facial Recognition Nodes & Delaunay Mesh
  ctx.fillStyle = granted ? '#34d399' : '#00f0ff';
  const points = [
    [210, frameY + 115], [302, frameY + 115], // Eyes
    [256, frameY + 145],                     // Nose
    [235, frameY + 175], [277, frameY + 175], // Mouth
    [185, frameY + 90],  [327, frameY + 90],  // Brows
    [256, frameY + 215]                      // Chin
  ];
  points.forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.strokeStyle = granted ? 'rgba(16, 185, 129, 0.6)' : 'rgba(0, 240, 255, 0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(210, frameY + 115); ctx.lineTo(256, frameY + 145); ctx.lineTo(302, frameY + 115);
  ctx.lineTo(277, frameY + 175); ctx.lineTo(256, frameY + 215); ctx.lineTo(235, frameY + 175);
  ctx.closePath();
  ctx.stroke();

  // Scanning laser sweep bar
  ctx.strokeStyle = granted ? '#10b981' : '#00f0ff';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(frameX + 10, frameY + 160);
  ctx.lineTo(frameX + frameSize - 10, frameY + 160);
  ctx.stroke();

  // Telemetry Metrics Box
  ctx.fillStyle = '#0b1528';
  ctx.fillRect(40, 520, 432, 100);
  ctx.strokeStyle = '#1e293b';
  ctx.strokeRect(40, 520, 432, 100);

  ctx.font = '14px "JetBrains Mono", monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.textAlign = 'left';
  ctx.fillText('PASSPORT ID : RO-FRA-2026-VIE', 60, 550);
  ctx.fillText('FACIAL MATCH SCORE : 99.8%', 60, 575);
  ctx.fillText('STATUS : EN RÈGLE // VÉRIFIÉ', 60, 600);

  // Bottom Big Access Banner
  if (granted) {
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(40, 640, 432, 110);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 640, 432, 110);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 36px "JetBrains Mono", monospace';
    ctx.fillText('ACCESS GRANTED', canvas.width / 2, 695);
    ctx.font = '18px "JetBrains Mono", monospace';
    ctx.fillStyle = '#a7f3d0';
    ctx.fillText('PASSAGE AUTORISÉ', canvas.width / 2, 730);
  } else {
    ctx.fillStyle = '#082f49';
    ctx.fillRect(40, 640, 432, 110);
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 640, 432, 110);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 32px "JetBrains Mono", monospace';
    ctx.fillText('SCANNING...', canvas.width / 2, 695);
    ctx.font = '18px "JetBrains Mono", monospace';
    ctx.fillStyle = '#bae6fd';
    ctx.fillText('REGARDEZ L\'OBJECTIF', canvas.width / 2, 730);
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// 5. Airport Overhead Directional Signage
export function createAirportSignTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  // Signboard Navy Black Background
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Bright Cyan Top Border
  ctx.fillStyle = '#00f0ff';
  ctx.fillRect(0, 0, canvas.width, 10);

  // Sign Text
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px "Inter", sans-serif';
  ctx.fillText('SMART BORDER CONTROL // CONTRÔLE BIOMÉTRIQUE', canvas.width / 2, 90);

  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 32px "JetBrains Mono", monospace';
  ctx.fillText('PROJET CABIS — PORTIQUES AUTOMATISÉS (e-GATES)', canvas.width / 2, 150);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '22px "JetBrains Mono", monospace';
  ctx.fillText('ALL PASSPORTS ACCEPTED • FACIAL RECOGNITION ACTIVE', canvas.width / 2, 205);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// 6. Airport Runway Asphalt Texture with Markings
export function createRunwayTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Dark tarmac asphalt base
  ctx.fillStyle = '#070b12';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // White runway dashed center line
  ctx.fillStyle = '#f8fafc';
  const stripeW = 24;
  const stripeH = 100;
  const gap = 70;
  for (let y = 30; y < canvas.height; y += stripeH + gap) {
    ctx.fillRect((canvas.width - stripeW) / 2, y, stripeW, stripeH);
  }

  // Yellow Taxiway Edge Lines
  ctx.fillStyle = '#eab308';
  ctx.fillRect(28, 0, 12, canvas.height);
  ctx.fillRect(canvas.width - 40, 0, 12, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 8);
  return texture;
}

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

  // Dark building facade background
  ctx.fillStyle = '#0a101d';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cols = 12;
  const rows = 32;
  const padX = 14;
  const padY = 12;
  const w = (canvas.width - padX * (cols + 1)) / cols;
  const h = (canvas.height - padY * (rows + 1)) / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = padX + c * (w + padX);
      const y = padY + r * (h + padY);

      // Random window illumination state (warm yellow, cool cyan, or dark)
      const rand = Math.random();
      if (rand > 0.45) {
        if (rand > 0.8) {
          ctx.fillStyle = '#38bdf8'; // Cyan office screen glow
        } else if (rand > 0.6) {
          ctx.fillStyle = '#fef08a'; // Warm office light
        } else {
          ctx.fillStyle = '#67e8f9'; // Bright cyan
        }
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 4;
        ctx.fillRect(x, y, w, h);
      } else {
        ctx.fillStyle = '#060a12'; // Dark unlit office
        ctx.shadowBlur = 0;
        ctx.fillRect(x, y, w, h);
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// 2. High-Tech Airplane Livery & Panels Texture
export function createAirplaneTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Pearlescent aeronautic white base
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, '#f8fafc');
  grad.addColorStop(0.5, '#e2e8f0');
  grad.addColorStop(1, '#cbd5e1');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Aerodynamic fuselage panel lines
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.5;
  for (let x = 60; x < canvas.width; x += 80) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // Cyan and Navy Speed Stripes along the fuselage
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(0, 230, canvas.width, 16);
  ctx.fillStyle = '#00f0ff';
  ctx.fillRect(0, 250, canvas.width, 8);

  // Cockpit windows row (tinted polarized glass)
  ctx.fillStyle = '#030712';
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.roundRect(140 + i * 36, 180, 26, 32, 6);
    ctx.fill();
    // Glass specular reflection highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fillRect(144 + i * 36, 184, 8, 24);
    ctx.fillStyle = '#030712';
  }

  // Passenger windows row
  for (let i = 0; i < 22; i++) {
    ctx.beginPath();
    ctx.roundRect(400 + i * 26, 195, 14, 20, 5);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// 3. Polished Airport Concourse Marble Floor Texture
export function createAirportFloorTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Deep dark reflective granite tile
  ctx.fillStyle = '#060d1a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle marble veining
  ctx.strokeStyle = 'rgba(2, 132, 199, 0.12)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 80);
  ctx.bezierCurveTo(120, 140, 300, 40, 512, 180);
  ctx.moveTo(0, 340);
  ctx.bezierCurveTo(180, 280, 340, 420, 512, 390);
  ctx.stroke();

  // Fine tile joints / grid
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(canvas.width / 2, 0, canvas.width / 2, canvas.height);
  ctx.strokeRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 32);
  return texture;
}

// 4. CABIS Smart Biometric OLED Gate Screen Texture
export function createCabisScreenTexture(granted: boolean = false): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Dark OLED background with glowing border
  ctx.fillStyle = '#030712';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = granted ? '#10b981' : '#00f0ff';
  ctx.lineWidth = 8;
  ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

  // Top Header: System Title
  ctx.fillStyle = granted ? '#10b981' : '#00f0ff';
  ctx.font = 'bold 24px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('CABIS // BIOMETRIC GATE', canvas.width / 2, 54);

  // Biometric Target Frame
  ctx.strokeStyle = granted ? '#10b981' : '#38bdf8';
  ctx.lineWidth = 3;
  ctx.strokeRect(136, 90, 240, 240);

  // Stylized Human Face Silhouette inside frame
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 180, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(canvas.width / 2, 280, 75, 45, 0, Math.PI, 0);
  ctx.fill();

  // Biometric Scan Markers (eye points, nose, mouth mesh)
  ctx.fillStyle = granted ? '#34d399' : '#00f0ff';
  const pts = [
    [230, 175], [282, 175], // Eyes
    [256, 195],             // Nose
    [242, 212], [270, 212], // Mouth
    [200, 150], [312, 150], // Brow corners
    [256, 235]              // Chin
  ];
  pts.forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // Connecting mesh lines
  ctx.strokeStyle = granted ? 'rgba(16, 185, 129, 0.4)' : 'rgba(0, 240, 255, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(230, 175);
  ctx.lineTo(256, 195);
  ctx.lineTo(282, 175);
  ctx.lineTo(270, 212);
  ctx.lineTo(242, 212);
  ctx.closePath();
  ctx.stroke();

  // Horizontal Scan Line
  ctx.strokeStyle = granted ? '#10b981' : '#00f0ff';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(136, 210);
  ctx.lineTo(376, 210);
  ctx.stroke();

  // Status Banner at Bottom
  if (granted) {
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(40, 360, 432, 100);
    ctx.strokeStyle = '#10b981';
    ctx.strokeRect(40, 360, 432, 100);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 30px "JetBrains Mono", monospace';
    ctx.fillText('ACCESS GRANTED', canvas.width / 2, 405);
    ctx.font = '18px "JetBrains Mono", monospace';
    ctx.fillStyle = '#a7f3d0';
    ctx.fillText('PASSPORT & BIOMETRICS MATCH : 99.8%', canvas.width / 2, 438);
  } else {
    ctx.fillStyle = '#082f49';
    ctx.fillRect(40, 360, 432, 100);
    ctx.strokeStyle = '#0284c7';
    ctx.strokeRect(40, 360, 432, 100);

    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 28px "JetBrains Mono", monospace';
    ctx.fillText('SCAN EN COURS...', canvas.width / 2, 405);
    ctx.font = '18px "JetBrains Mono", monospace';
    ctx.fillStyle = '#bae6fd';
    ctx.fillText('VEUILLEZ REGARDER L\'OBJECTIF', canvas.width / 2, 438);
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// 5. Airport Runway Asphalt Texture with Markings
export function createRunwayTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Dark asphalt base
  ctx.fillStyle = '#090e17';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Asphalt grain noise
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
  for (let i = 0; i < 4000; i++) {
    const rx = Math.random() * canvas.width;
    const ry = Math.random() * canvas.height;
    ctx.fillRect(rx, ry, 2, 2);
  }

  // Runway Center Line Stripes (White dashed line)
  ctx.fillStyle = '#f8fafc';
  const stripeW = 20;
  const stripeH = 90;
  const gap = 60;
  for (let y = 30; y < canvas.height; y += stripeH + gap) {
    ctx.fillRect((canvas.width - stripeW) / 2, y, stripeW, stripeH);
  }

  // Runway Edge Guide Lines (Solid Yellow)
  ctx.fillStyle = '#eab308';
  ctx.fillRect(36, 0, 10, canvas.height);
  ctx.fillRect(canvas.width - 46, 0, 10, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 8);
  return texture;
}

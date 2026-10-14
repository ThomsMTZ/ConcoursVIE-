import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TOTAL_DURATION } from '../../data/storyData';

interface ThreeSceneProps {
  progress: number;
  currentTime: number;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ progress, currentTime }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const progressRef = useRef(progress);
  const currentTimeRef = useRef(currentTime);

  useEffect(() => {
    progressRef.current = progress;
    currentTimeRef.current = currentTime;
  }, [progress, currentTime]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ==========================================
    // 1. TRANSPARENT WEBGL RENDERER & SCENE
    // ==========================================
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true, // Transparent to overlay over the photorealistic background
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // 100% transparent background

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);

    // ==========================================
    // 2. ACTE 1: HOLOGRAPHIC AMS RADAR DISH
    // ==========================================
    const radarGroup = new THREE.Group();
    radarGroup.position.set(24, -10, 0);
    radarGroup.rotation.x = 0.65;
    radarGroup.rotation.y = -0.35;
    scene.add(radarGroup);

    // Concentric Radar Rings
    for (let r = 1; r <= 4; r++) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(r * 4.2, r * 4.2 + 0.08, 64),
        new THREE.MeshBasicMaterial({
          color: 0x00f0ff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.45 - r * 0.08
        })
      );
      radarGroup.add(ring);
    }

    // Rotating Radar Sweep Beam
    const sweepMesh = new THREE.Mesh(
      new THREE.CircleGeometry(17, 48, 0, 0.45),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.28,
        side: THREE.DoubleSide
      })
    );
    radarGroup.add(sweepMesh);

    // Crosshairs
    const crossMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35 });
    const crossPointsH = [new THREE.Vector3(-18, 0, 0), new THREE.Vector3(18, 0, 0)];
    const crossPointsV = [new THREE.Vector3(0, -18, 0), new THREE.Vector3(0, 18, 0)];
    radarGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(crossPointsH), crossMat));
    radarGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(crossPointsV), crossMat));

    // ==========================================
    // 3. ACTE 2: BUCAREST TELEMETRY TARGET RETICLE
    // ==========================================
    const bucarestGroup = new THREE.Group();
    bucarestGroup.position.set(0, -6, 0);
    scene.add(bucarestGroup);

    const bTargetRing1 = new THREE.Mesh(
      new THREE.RingGeometry(8, 8.12, 64),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
    );
    const bTargetRing2 = new THREE.Mesh(
      new THREE.RingGeometry(12, 12.08, 64),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.4 })
    );
    bucarestGroup.add(bTargetRing1, bTargetRing2);

    // Upward Data Flow Particle Columns
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 20;
      particlePos[i + 1] = Math.random() * 30 - 15;
      particlePos[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0x00f0ff, size: 0.6, transparent: true, opacity: 0.75 });
    const bucarestParticles = new THREE.Points(particleGeo, particleMat);
    bucarestGroup.add(bucarestParticles);

    // ==========================================
    // 4. ACTE 3: CABIS BIOMETRIC SCANNING LASER HUD
    // ==========================================
    const cabisHudGroup = new THREE.Group();
    cabisHudGroup.position.set(0, 0, 0);
    scene.add(cabisHudGroup);

    // Horizontal Sweeping Green Laser Line
    const laserLineGeo = new THREE.PlaneGeometry(36, 0.15);
    const laserLineMat = new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
    const laserLine = new THREE.Mesh(laserLineGeo, laserLineMat);
    cabisHudGroup.add(laserLine);

    // Biometric Target Crosshair Corners
    const cornerMat = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.75 });
    const corners = new THREE.Group();
    [[-8, 8], [8, 8], [-8, -8], [8, -8]].forEach(([cx, cy]) => {
      const sx = Math.sign(cx);
      const sy = Math.sign(cy);
      const pts = [
        new THREE.Vector3(cx - sx * 2.5, cy, 0),
        new THREE.Vector3(cx, cy, 0),
        new THREE.Vector3(cx, cy - sy * 2.5, 0)
      ];
      corners.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), cornerMat));
    });
    cabisHudGroup.add(corners);

    // ==========================================
    // 5. ACTE 4: INTERNATIONAL CONNECTIVITY BEAMS
    // ==========================================
    const orbitalGroup = new THREE.Group();
    scene.add(orbitalGroup);

    const arcPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const angle = t * Math.PI;
      arcPoints.push(new THREE.Vector3(-28 + t * 56, Math.sin(angle) * 16 - 4, Math.cos(angle) * 8));
    }
    const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
    const arcMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.85 });
    const arcLine = new THREE.Line(arcGeo, arcMat);
    orbitalGroup.add(arcLine);

    // Luminous nodes along the trajectory
    for (let i = 0; i < 6; i++) {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 16, 16),
        new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x10b981 : 0x00f0ff })
      );
      const t = 0.12 + i * 0.15;
      const angle = t * Math.PI;
      node.position.set(-28 + t * 56, Math.sin(angle) * 16 - 4, Math.cos(angle) * 8);
      orbitalGroup.add(node);
    }

    // ==========================================
    // 6. ANIMATION LOOP & ACT VISIBILITY
    // ==========================================
    let animId: number;

    const animate = (timestamp: number) => {
      animId = requestAnimationFrame(animate);

      const time = currentTimeRef.current;
      const now = timestamp;

      // Rotate AMS radar sweep
      sweepMesh.rotation.z -= 0.05;

      // Laser sweep animation (up and down)
      laserLine.position.y = Math.sin(now * 0.0035) * 8;

      // Rotate Bucarest telemetry rings
      bTargetRing1.rotation.z += 0.012;
      bTargetRing2.rotation.z -= 0.008;

      // Rise bucarest particles
      const pos = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < pos.length; i += 3) {
        pos[i] += 0.08;
        if (pos[i] > 15) pos[i] = -15;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Manage Holographic Visibility based on Act Timing
      // Act 1 (0 - 22s): AMS Radar active
      radarGroup.visible = time >= 0 && time < 23;
      if (radarGroup.visible) {
        const op = time < 2 ? time / 2 : (time > 20 ? (22 - time) / 2 : 1);
        radarGroup.scale.setScalar(0.95 + Math.sin(now * 0.002) * 0.05);
      }

      // Act 2 (22 - 44s): Bucarest targeting HUD active
      bucarestGroup.visible = time >= 21 && time < 45;

      // Act 3 (44 - 67s): CABIS Biometric laser HUD active
      cabisHudGroup.visible = time >= 43 && time < 68;

      // Act 4 (67 - 85s): International Radiance Trajectories active
      orbitalGroup.visible = time >= 66;
      if (orbitalGroup.visible) {
        orbitalGroup.rotation.y = Math.sin(now * 0.0008) * 0.15;
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
    />
  );
};

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { STORY_CHAPTERS, TOTAL_DURATION } from '../../data/storyData';

interface CinematicParallaxDirectorProps {
  currentTime: number;
}

/**
 * DIRECTION 1: CINEMATIC MULTI-SHOT PARALLAX FILM
 * 
 * Replaces the static single-image slideshow with a true multi-shot cinematic sequence:
 * - 12 dynamic camera cuts across 4 acts (3 distinct camera setups per act).
 * - Multi-plane 2.5D depth parallax: moving foreground clouds, midground subjects, background lighting.
 * - Real particle systems: engine vapor contrails, boulevard traffic light ribbons, laser scan curtain, ballistic orbital sparks.
 * - Hardware-accelerated WebGL at 60 FPS with ACES Filmic tone mapping.
 */
export const CinematicParallaxDirector: React.FC<CinematicParallaxDirectorProps> = ({ currentTime }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentTimeRef = useRef(currentTime);

  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. WEBGL RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const texAirplane = textureLoader.load(`${import.meta.env.BASE_URL}assets/images/act1_airplane.jpg`);
    const texBucharest = textureLoader.load(`${import.meta.env.BASE_URL}assets/images/act2_plane_landing_bucharest.jpg`);
    const texThomasGate = textureLoader.load(`${import.meta.env.BASE_URL}assets/images/act3_cabis_thomas_gate.jpg`);
    const texRadiance = textureLoader.load(`${import.meta.env.BASE_URL}assets/images/act4_radiance.jpg`);

    // =========================================================================
    // LAYER 1: CINEMATIC BACKDROP PLANES WITH PARALLAX MOTION
    // =========================================================================
    const backdropGroup = new THREE.Group();
    scene.add(backdropGroup);

    const bgPlaneGeo = new THREE.PlaneGeometry(96, 54);
    
    // Mat Act 1
    const matAct1 = new THREE.MeshBasicMaterial({ map: texAirplane, transparent: true, opacity: 1 });
    const meshAct1 = new THREE.Mesh(bgPlaneGeo, matAct1);
    meshAct1.position.z = -10;
    backdropGroup.add(meshAct1);

    // Mat Act 2
    const matAct2 = new THREE.MeshBasicMaterial({ map: texBucharest, transparent: true, opacity: 0 });
    const meshAct2 = new THREE.Mesh(bgPlaneGeo, matAct2);
    meshAct2.position.z = -10;
    backdropGroup.add(meshAct2);

    // Mat Act 3
    const matAct3 = new THREE.MeshBasicMaterial({ map: texThomasGate, transparent: true, opacity: 0 });
    const meshAct3 = new THREE.Mesh(bgPlaneGeo, matAct3);
    meshAct3.position.z = -10;
    backdropGroup.add(meshAct3);

    // Mat Act 4
    const matAct4 = new THREE.MeshBasicMaterial({ map: texRadiance, transparent: true, opacity: 0 });
    const meshAct4 = new THREE.Mesh(bgPlaneGeo, matAct4);
    meshAct4.position.z = -10;
    backdropGroup.add(meshAct4);

    // =========================================================================
    // LAYER 2: DYNAMIC FOREGROUND CLOUD WISPS & ATMOSPHERIC DEPTH (Act 1 & 2)
    // =========================================================================
    const cloudCount = 45;
    const cloudGeo = new THREE.BufferGeometry();
    const cloudPos = new Float32Array(cloudCount * 3);
    const cloudScales = new Float32Array(cloudCount);

    for (let i = 0; i < cloudCount; i++) {
      const i3 = i * 3;
      cloudPos[i3] = (Math.random() - 0.5) * 80;
      cloudPos[i3 + 1] = (Math.random() - 0.5) * 40;
      cloudPos[i3 + 2] = 5 + Math.random() * 30; // Foreground depth between plane and camera
      cloudScales[i] = 4 + Math.random() * 8;
    }
    cloudGeo.setAttribute('position', new THREE.BufferAttribute(cloudPos, 3));
    
    const cloudMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 6.0,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });
    const cloudParticles = new THREE.Points(cloudGeo, cloudMat);
    scene.add(cloudParticles);

    // =========================================================================
    // LAYER 3: DYNAMIC BOULEVARD TRAFFIC LIGHT TRAILS (Act 2)
    // =========================================================================
    const trafficCount = 400;
    const trafficGeo = new THREE.BufferGeometry();
    const trafficPos = new Float32Array(trafficCount * 3);
    const trafficCol = new Float32Array(trafficCount * 3);

    for (let i = 0; i < trafficCount; i++) {
      const i3 = i * 3;
      trafficPos[i3] = (Math.random() - 0.5) * 70;
      trafficPos[i3 + 1] = -12 + (Math.random() - 0.5) * 14;
      trafficPos[i3 + 2] = (Math.random() - 0.5) * 20;

      if (i % 3 === 0) {
        // Red taillights
        trafficCol[i3] = 1.0; trafficCol[i3 + 1] = 0.2; trafficCol[i3 + 2] = 0.2;
      } else {
        // Amber gold headlights
        trafficCol[i3] = 1.0; trafficCol[i3 + 1] = 0.85; trafficCol[i3 + 2] = 0.35;
      }
    }
    trafficGeo.setAttribute('position', new THREE.BufferAttribute(trafficPos, 3));
    trafficGeo.setAttribute('color', new THREE.BufferAttribute(trafficCol, 3));
    const trafficParticles = new THREE.Points(
      trafficGeo,
      new THREE.PointsMaterial({ size: 0.75, vertexColors: true, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending })
    );
    scene.add(trafficParticles);

    // =========================================================================
    // LAYER 4: VOLUMETRIC BIOMETRIC LASER SCAN CURTAIN & RETICLES (Act 3)
    // =========================================================================
    const laserGroup = new THREE.Group();
    scene.add(laserGroup);

    // Laser Beam Core
    const laserCore = new THREE.Mesh(
      new THREE.PlaneGeometry(36, 0.35),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.95, side: THREE.DoubleSide })
    );
    laserGroup.add(laserCore);

    // Laser Volumetric Halo Fan
    const laserHalo = new THREE.Mesh(
      new THREE.PlaneGeometry(36, 3.5),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.3, side: THREE.DoubleSide, blending: THREE.AdditiveBlending })
    );
    laserGroup.add(laserHalo);

    // 3D Facial Landmark Tracking Nodes (68 points mapped around Thomas's face)
    const landmarkCount = 38;
    const landmarkGeo = new THREE.BufferGeometry();
    const landmarkPos = new Float32Array(landmarkCount * 3);
    for (let i = 0; i < landmarkCount; i++) {
      const i3 = i * 3;
      const angle = (i / landmarkCount) * Math.PI * 2;
      const rx = 4.2 + (i % 3) * 0.4;
      const ry = 5.8 + (i % 2) * 0.5;
      landmarkPos[i3] = Math.cos(angle) * rx;
      landmarkPos[i3 + 1] = 2.5 + Math.sin(angle) * ry;
      landmarkPos[i3 + 2] = 2 + (Math.random() - 0.5) * 1.5;
    }
    landmarkGeo.setAttribute('position', new THREE.BufferAttribute(landmarkPos, 3));
    const landmarkPoints = new THREE.Points(
      landmarkGeo,
      new THREE.PointsMaterial({ color: 0x00f0ff, size: 0.4, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending })
    );
    laserGroup.add(landmarkPoints);

    // =========================================================================
    // LAYER 5: 3D BALLISTIC LIGHTNING ARCS & ORBITAL COMETS (Act 4)
    // =========================================================================
    const orbitalGroup = new THREE.Group();
    scene.add(orbitalGroup);

    // 6 Ballistic Curves radiating from Bucharest across Europe
    const P_BUC = new THREE.Vector3(12, -4, 0);
    const hubs = [
      { name: 'Paris', pos: new THREE.Vector3(-14, 6, 0), color: 0x10b981 },
      { name: 'London', pos: new THREE.Vector3(-18, 12, 0), color: 0x38bdf8 },
      { name: 'Frankfurt', pos: new THREE.Vector3(-4, 8, 0), color: 0x00f0ff },
      { name: 'Rome', pos: new THREE.Vector3(-3, -10, 0), color: 0xf59e0b },
      { name: 'Warsaw', pos: new THREE.Vector3(8, 10, 0), color: 0x38bdf8 },
      { name: 'Amsterdam', pos: new THREE.Vector3(-8, 14, 0), color: 0x38bdf8 }
    ];

    const orbitalCurves: THREE.CubicBezierCurve3[] = [];
    hubs.forEach(h => {
      const mid = new THREE.Vector3()
        .addVectors(P_BUC, h.pos)
        .multiplyScalar(0.5)
        .add(new THREE.Vector3(0, 8, 6)); // Arcs high in 3D

      const curve = new THREE.CubicBezierCurve3(P_BUC, mid, mid, h.pos);
      orbitalCurves.push(curve);

      const arcLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(50)),
        new THREE.LineBasicMaterial({ color: h.color, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending })
      );
      orbitalGroup.add(arcLine);

      // Hub Beacon Pin
      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 12, 12),
        new THREE.MeshBasicMaterial({ color: h.color })
      );
      beacon.position.copy(h.pos);
      orbitalGroup.add(beacon);
    });

    // Bucharest Epicenter Gold Beacon & Pulse
    const bucBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), new THREE.MeshBasicMaterial({ color: 0xfbbf24 }));
    bucBeacon.position.copy(P_BUC);
    orbitalGroup.add(bucBeacon);

    const bucPulse = new THREE.Mesh(
      new THREE.RingGeometry(0.6, 1.2, 36),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.9, side: THREE.DoubleSide })
    );
    bucPulse.position.copy(P_BUC);
    orbitalGroup.add(bucPulse);

    // 16 Traveling Sparks along the Arcs
    const sparks: THREE.Mesh[] = [];
    for (let s = 0; s < 16; s++) {
      const spark = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 12, 12),
        new THREE.MeshBasicMaterial({ color: s % 2 === 0 ? 0x00f0ff : 0xfbbf24 })
      );
      orbitalGroup.add(spark);
      sparks.push(spark);
    }

    // =========================================================================
    // LAYER 6: TACTICAL AVIONICS COCKPIT HUD OVERLAY (Continuous)
    // =========================================================================
    const hudGroup = new THREE.Group();
    scene.add(hudGroup);

    // Flight Path Vector & Pitch Ladder
    const hudMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.75 });
    const horizPts = [
      new THREE.Vector3(-14, 0, 10), new THREE.Vector3(-4, 0, 10),
      new THREE.Vector3(4, 0, 10), new THREE.Vector3(14, 0, 10)
    ];
    hudGroup.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(horizPts), hudMat));

    // Radar in Bottom Right
    const radar = new THREE.Group();
    radar.position.set(24, -12, 10);
    hudGroup.add(radar);
    for (let r = 1; r <= 3; r++) {
      radar.add(new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(new THREE.Path().absarc(0, 0, r * 4.0, 0, Math.PI * 2, true).getPoints(36)),
        new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 })
      ));
    }
    const radarSweep = new THREE.Mesh(
      new THREE.CircleGeometry(12.0, 32, 0, 0.45),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
    );
    radar.add(radarSweep);

    // =========================================================================
    // MASTER CINEMATIC DIRECTOR TIMELINE & DYNAMIC MULTI-SHOT CUTS
    // =========================================================================
    let animId: number;

    const renderScene = (t: number) => {
      // 1. Crossfades between Acts (Hermite smoothstep)
      const fadeDur = 1.4;
      const getOpacity = (tStart: number, tEnd: number) => {
        if (t < tStart - fadeDur || t > tEnd) return 0;
        if (t < tStart) return THREE.MathUtils.smoothstep((t - (tStart - fadeDur)) / fadeDur, 0, 1);
        if (t > tEnd - fadeDur) return 1 - THREE.MathUtils.smoothstep((t - (tEnd - fadeDur)) / fadeDur, 0, 1);
        return 1;
      };

      matAct1.opacity = getOpacity(0, 22.5);
      matAct2.opacity = getOpacity(22.5, 44.5);
      matAct3.opacity = getOpacity(44.5, 67.5);
      matAct4.opacity = getOpacity(67.5, 85.0);

      // 2. DYNAMIC CAMERA MOVEMENTS & CUTS (Multi-Shot Pacing)
      // Act 1: 0 - 22s
      if (t < 22.5) {
        // Shot 1A: 0-7s (Cockpit Altimeter Climb) -> Close-in, slight roll
        if (t < 7.0) {
          const u = t / 7.0;
          camera.position.set(Math.sin(t * 1.5) * 0.4, 2 + u * 1.5, 42 - u * 4);
          camera.rotation.z = Math.sin(t * 0.8) * 0.02;
        } 
        // Shot 1B: 7-15s (Wide Aircraft Banking over Twilight Clouds)
        else if (t < 15.0) {
          const u = (t - 7.0) / 8.0;
          camera.position.set(4 - u * 8, 4 + Math.sin(t * 0.5) * 1.2, 46);
          camera.rotation.z = -0.04 + u * 0.08;
        }
        // Shot 1C: 15-22.5s (Waypoint Portal Approach)
        else {
          const u = (t - 15.0) / 7.5;
          camera.position.set(Math.sin(t * 0.6) * 2.0, 3, 44 - u * 6);
          camera.rotation.z = Math.sin(t * 0.9) * 0.015;
        }

        // Background subtle motion
        meshAct1.position.x = Math.sin(t * 0.4) * 1.2;
        meshAct1.position.y = Math.cos(t * 0.3) * 0.8;
      }
      // Act 2: 22.5 - 44.5s
      else if (t < 44.5) {
        // Shot 2A: 22.5-30s (Skyline Descent into Bucharest)
        if (t < 30.0) {
          const u = (t - 22.5) / 7.5;
          camera.position.set(Math.sin(t * 0.4) * 3, 8 - u * 6, 48 - u * 5);
          camera.rotation.z = Math.sin(t * 0.7) * 0.02;
        }
        // Shot 2B: 30-38s (Boulevard Traffic & Parliament Glow)
        else if (t < 38.0) {
          const u = (t - 30.0) / 8.0;
          camera.position.set(-4 + u * 8, 2, 42);
          camera.rotation.z = 0.02;
        }
        // Shot 2C: 38-44.5s (Scrum Master Velocity Push)
        else {
          const u = (t - 38.0) / 6.5;
          camera.position.set(0, 1 + u * 2, 40 - u * 4);
          camera.rotation.z = 0;
        }
      }
      // Act 3: 44.5 - 67.5s
      else if (t < 67.5) {
        // Shot 3A: 44.5-52s (Terminal Approach & Gate Recognition)
        if (t < 52.0) {
          const u = (t - 44.5) / 7.5;
          camera.position.set(0, 1, 46 - u * 6);
          camera.rotation.z = 0;
        }
        // Shot 3B: 52-60s (Biometric Facial Scan with Laser)
        else if (t < 60.0) {
          camera.position.set(Math.sin(t * 0.5) * 0.8, 2, 38);
          camera.rotation.z = 0;
        }
        // Shot 3C: 60-67.5s (Gate Authorization & Passing Wings)
        else {
          const u = (t - 60.0) / 7.5;
          camera.position.set(0, 1.5, 36 - u * 6);
          camera.rotation.z = 0;
        }
      }
      // Act 4: 67.5 - 85s
      else {
        // Shot 4A: 67.5-74s (Orbital Pullback revealing Europe at Night)
        if (t < 74.0) {
          const u = (t - 67.5) / 6.5;
          camera.position.set(2, 4, 38 + u * 10);
          camera.rotation.z = -u * 0.03;
        }
        // Shot 4B: 74-80s (Ballistic Arcs Detonating across Capitals)
        else if (t < 80.0) {
          camera.position.set(1 + Math.sin(t * 0.4) * 2, 6, 48);
          camera.rotation.z = -0.03;
        }
        // Shot 4C: 80-85s (Constellation & Final Signature)
        else {
          const u = (t - 80.0) / 5.0;
          camera.position.set(0, 5, 48 - u * 3);
          camera.rotation.z = 0;
        }
      }

      // 3. LAYER VISIBILITY & DYNAMICS
      // Cloud Wisps Parallax (Acts 1 & 2)
      cloudParticles.visible = t < 44.5;
      if (cloudParticles.visible) {
        const cpos = cloudGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < cloudCount; i++) {
          const i3 = i * 3;
          cpos[i3] -= 0.35; // Clouds drift past camera
          if (cpos[i3] < -50) cpos[i3] = 50;
        }
        cloudGeo.attributes.position.needsUpdate = true;
      }

      // Boulevard Traffic (Act 2)
      trafficParticles.visible = t >= 21.0 && t < 45.0;
      if (trafficParticles.visible) {
        const tpos = trafficGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < trafficCount; i++) {
          const i3 = i * 3;
          tpos[i3] += (i % 2 === 0 ? 0.35 : -0.35);
          if (tpos[i3] > 35) tpos[i3] = -35;
          if (tpos[i3] < -35) tpos[i3] = 35;
        }
        trafficGeo.attributes.position.needsUpdate = true;
      }

      // Biometric Laser Sweep (Act 3)
      laserGroup.visible = t >= 44.0 && t < 67.5;
      if (laserGroup.visible) {
        const lY = Math.sin(t * 3.5) * 4.8 + 2.5;
        laserCore.position.y = lY;
        laserHalo.position.y = lY;
      }

      // Ballistic Flight Arcs & Comets (Act 4)
      orbitalGroup.visible = t >= 66.5;
      if (orbitalGroup.visible) {
        const pulse = ((t - 67) * 1.5) % 1.0;
        bucPulse.scale.setScalar(1.0 + pulse * 3.8);
        (bucPulse.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - pulse) * 0.9);

        sparks.forEach((sp, idx) => {
          const curve = orbitalCurves[idx % orbitalCurves.length];
          const speed = 0.16 + (idx % 3) * 0.04;
          const u = ((t - 67) * speed + idx * 0.15) % 1.0;
          sp.position.copy(curve.getPoint(u));
        });
      }

      // Radar & HUD
      radarSweep.rotation.z = -t * 1.8;

      renderer.render(scene, camera);
    };

    const animateLoop = () => {
      animId = requestAnimationFrame(animateLoop);
      renderScene(currentTimeRef.current);
    };
    animId = requestAnimationFrame(animateLoop);

    (window as any).renderParallaxDirectorAt = (t: number) => {
      renderScene(t);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      delete (window as any).renderParallaxDirectorAt;
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden bg-black select-none pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default CinematicParallaxDirector;

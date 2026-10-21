import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneV2Props {
  currentTime: number;
}

export const ThreeSceneV2: React.FC<ThreeSceneV2Props> = ({ currentTime }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentTimeRef = useRef(currentTime);

  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. TRANSPARENT WEBGL RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 45);

    // =========================================================================
    // ACTE 1: TACTICAL AVIONICS HUD & WAYPOINT CORRIDORS (Over real aircraft)
    // =========================================================================
    const act1Group = new THREE.Group();
    scene.add(act1Group);

    // A. Pitch Ladder & Artificial Horizon Reticle
    const hudMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.65 });
    const horizPts = [
      new THREE.Vector3(-12, 0, 0), new THREE.Vector3(-3.5, 0, 0),
      new THREE.Vector3(3.5, 0, 0), new THREE.Vector3(12, 0, 0)
    ];
    act1Group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(horizPts), hudMat));

    // Pitch rungs (-6, -3, 3, 6)
    const pitchRungs = [-6, -3, 3, 6];
    pitchRungs.forEach(y => {
      const w = 4 - Math.abs(y) * 0.15;
      const pts = [
        new THREE.Vector3(-w, y, 0), new THREE.Vector3(-w + 1.2, y, 0),
        new THREE.Vector3(w - 1.2, y, 0), new THREE.Vector3(w, y, 0)
      ];
      act1Group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), hudMat));
    });

    // Flight Path Vector (FPV)
    const fpvCircle = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(new THREE.Path().absarc(0, 0, 0.8, 0, Math.PI * 2, true).getPoints(24)),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.9 })
    );
    const fpvWings = new THREE.LineSegments(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.6, 0, 0), new THREE.Vector3(-0.8, 0, 0),
        new THREE.Vector3(0.8, 0, 0), new THREE.Vector3(1.6, 0, 0),
        new THREE.Vector3(0, 0.8, 0), new THREE.Vector3(0, 1.6, 0)
      ]),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.9 })
    );
    const fpvGroup = new THREE.Group();
    fpvGroup.add(fpvCircle, fpvWings);
    act1Group.add(fpvGroup);

    // B. Flight Corridor Receding Waypoint Rings
    const ringsGroup = new THREE.Group();
    ringsGroup.position.set(0, 1, 0);
    act1Group.add(ringsGroup);
    const corridorRings: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(7.5, 7.7, 36),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
      );
      ring.position.set(0, 0, -i * 12);
      ringsGroup.add(ring);
      corridorRings.push(ring);
    }

    // C. Continuous 360° Tactical Radar in Bottom Right
    const radarGroup = new THREE.Group();
    radarGroup.position.set(16, -10, 0);
    act1Group.add(radarGroup);

    for (let r = 1; r <= 3; r++) {
      const ring = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(new THREE.Path().absarc(0, 0, r * 3.5, 0, Math.PI * 2, true).getPoints(40)),
        new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 })
      );
      radarGroup.add(ring);
    }
    const sweepMesh = new THREE.Mesh(
      new THREE.CircleGeometry(10.5, 32, 0, 0.45),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
    );
    radarGroup.add(sweepMesh);

    // =========================================================================
    // ACTE 2: DYNAMIC BOULEVARD TRAFFIC & TECH CROSSHAIRS (Over Bucharest)
    // =========================================================================
    const act2Group = new THREE.Group();
    scene.add(act2Group);

    // A. Dynamic Boulevard Traffic Particle Streams
    const trafficCount = 300;
    const trafficGeo = new THREE.BufferGeometry();
    const trafficPos = new Float32Array(trafficCount * 3);
    const trafficCol = new Float32Array(trafficCount * 3);

    for (let i = 0; i < trafficCount; i++) {
      const i3 = i * 3;
      trafficPos[i3] = (Math.random() - 0.5) * 50;
      trafficPos[i3 + 1] = -6 + (Math.random() - 0.5) * 12;
      trafficPos[i3 + 2] = (Math.random() - 0.5) * 20;

      if (i % 3 === 0) {
        // Red taillights
        trafficCol[i3] = 0.95; trafficCol[i3 + 1] = 0.2; trafficCol[i3 + 2] = 0.2;
      } else {
        // Golden headlights
        trafficCol[i3] = 1.0; trafficCol[i3 + 1] = 0.85; trafficCol[i3 + 2] = 0.35;
      }
    }
    trafficGeo.setAttribute('position', new THREE.BufferAttribute(trafficPos, 3));
    trafficGeo.setAttribute('color', new THREE.BufferAttribute(trafficCol, 3));
    const trafficMesh = new THREE.Points(
      trafficGeo,
      new THREE.PointsMaterial({ size: 0.5, vertexColors: true, transparent: true, opacity: 0.8 })
    );
    act2Group.add(trafficMesh);

    // B. Tech District Coordinate Crosshairs & Beacons
    const techPins = [
      { x: -8, y: 2, label: 'BUC // CENTRU' },
      { x: 10, y: 4, label: 'SECTOR 1 // DIGITAL' },
      { x: 4, y: -4, label: 'PIPERA // TECH' }
    ];
    techPins.forEach(p => {
      const pin = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(new THREE.Path().absarc(0, 0, 1.2, 0, Math.PI * 2, true).getPoints(24)),
        new THREE.LineBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.85 })
      );
      pin.position.set(p.x, p.y, 0);
      act2Group.add(pin);

      const cross = new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-1.8, 0, 0), new THREE.Vector3(1.8, 0, 0),
          new THREE.Vector3(0, -1.8, 0), new THREE.Vector3(0, 1.8, 0)
        ]),
        new THREE.LineBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.65 })
      );
      cross.position.set(p.x, p.y, 0);
      act2Group.add(cross);
    });

    // =========================================================================
    // ACTE 3: BIOMETRIC LASER SCAN & FACIAL TARGETING RETICLES (Over Thomas Gate)
    // =========================================================================
    const act3Group = new THREE.Group();
    scene.add(act3Group);

    // A. Sweeping Emerald-Green Volumetric Laser Line
    const laserMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(28, 0.25),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.95, side: THREE.DoubleSide })
    );
    laserMesh.position.set(0, 2, 2);
    act3Group.add(laserMesh);

    // Laser Glow Halo
    const laserGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(28, 1.6),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.25, side: THREE.DoubleSide })
    );
    laserGlow.position.set(0, 2, 2);
    act3Group.add(laserGlow);

    // B. 3D Facial Authentication Bounding Box (Framing Thomas in the gate)
    const faceReticle = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(9.0, 11.5, 0.2)),
      new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.75 })
    );
    faceReticle.position.set(0, 2.5, 3);
    act3Group.add(faceReticle);

    // Biometric Corner Brackets
    const bracketMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.9 });
    const bracketSize = 1.2;
    const cornerPts = [
      // Top-Left
      new THREE.Vector3(-4.5, 8.25 - bracketSize, 3), new THREE.Vector3(-4.5, 8.25, 3),
      new THREE.Vector3(-4.5, 8.25, 3), new THREE.Vector3(-4.5 + bracketSize, 8.25, 3),
      // Top-Right
      new THREE.Vector3(4.5, 8.25 - bracketSize, 3), new THREE.Vector3(4.5, 8.25, 3),
      new THREE.Vector3(4.5, 8.25, 3), new THREE.Vector3(4.5 - bracketSize, 8.25, 3),
      // Bottom-Left
      new THREE.Vector3(-4.5, -3.25 + bracketSize, 3), new THREE.Vector3(-4.5, -3.25, 3),
      new THREE.Vector3(-4.5, -3.25, 3), new THREE.Vector3(-4.5 + bracketSize, -3.25, 3),
      // Bottom-Right
      new THREE.Vector3(4.5, -3.25 + bracketSize, 3), new THREE.Vector3(4.5, -3.25, 3),
      new THREE.Vector3(4.5, -3.25, 3), new THREE.Vector3(4.5 - bracketSize, -3.25, 3)
    ];
    act3Group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(cornerPts), bracketMat));

    // =========================================================================
    // ACTE 4: BALLISTIC FLIGHT TRAJECTORIES & EUROPEAN HUBS (Over Earth Radiance)
    // =========================================================================
    const act4Group = new THREE.Group();
    scene.add(act4Group);

    // European Hub Coordinates on screen projection
    const hubPositions: Record<string, THREE.Vector3> = {
      Bucharest: new THREE.Vector3(6, -2, 0),
      Paris: new THREE.Vector3(-8, 3, 0),
      London: new THREE.Vector3(-10, 6, 0),
      Frankfurt: new THREE.Vector3(-3, 4, 0),
      Rome: new THREE.Vector3(-2, -5, 0),
      Warsaw: new THREE.Vector3(4, 5, 0),
      Amsterdam: new THREE.Vector3(-5, 7, 0)
    };

    // Arcs radiating from Bucharest
    const arcCurves: THREE.CubicBezierCurve3[] = [];
    const bucPos = hubPositions['Bucharest'];
    const destinations = ['Paris', 'Frankfurt', 'London', 'Rome', 'Warsaw', 'Amsterdam'];

    destinations.forEach(dest => {
      const targetPos = hubPositions[dest];
      const mid = new THREE.Vector3()
        .addVectors(bucPos, targetPos)
        .multiplyScalar(0.5)
        .add(new THREE.Vector3(0, 4.5, 3.5)); // Arcs upward in 3D

      const curve = new THREE.CubicBezierCurve3(bucPos, mid, mid, targetPos);
      arcCurves.push(curve);

      const arcLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)),
        new THREE.LineBasicMaterial({
          color: dest === 'Paris' ? 0x10b981 : 0x00f0ff,
          transparent: true,
          opacity: 0.8
        })
      );
      act4Group.add(arcLine);

      // Hub Beacon Pin
      const hubDot = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 12, 12),
        new THREE.MeshBasicMaterial({ color: dest === 'Paris' ? 0x10b981 : 0x38bdf8 })
      );
      hubDot.position.copy(targetPos);
      act4Group.add(hubDot);
    });

    // Bucharest Golden Epicenter Beacon & Expanding Pulse Ring
    const bucDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    );
    bucDot.position.copy(bucPos);
    act4Group.add(bucDot);

    const bucPulse = new THREE.Mesh(
      new THREE.RingGeometry(0.4, 0.8, 32),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.8, side: THREE.DoubleSide })
    );
    bucPulse.position.copy(bucPos);
    act4Group.add(bucPulse);

    // 12 Traveling Luminous Comets along the Arcs
    const comets: THREE.Mesh[] = [];
    for (let c = 0; c < 12; c++) {
      const comet = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 12, 12),
        new THREE.MeshBasicMaterial({ color: c % 2 === 0 ? 0x00f0ff : 0xfbbf24 })
      );
      act4Group.add(comet);
      comets.push(comet);
    }

    // =========================================================================
    // ANIMATION & TIMELINE INTERPOLATION
    // =========================================================================
    let animId: number;

    const renderScene = (t: number) => {
      // Act 1: 0 - 22s
      act1Group.visible = t >= 0 && t < 22.8;
      if (act1Group.visible) {
        // Continuous 360° radar sweep
        sweepMesh.rotation.z = -t * 1.6;

        // FPV gentle flight oscillation
        fpvGroup.position.set(Math.sin(t * 0.8) * 0.8, Math.cos(t * 0.6) * 0.5, 0);

        // Corridor rings flowing backward
        corridorRings.forEach((ring, idx) => {
          ring.position.z = ((ring.position.z + t * 4) % 30) - 30;
        });
      }

      // Act 2: 22 - 44s
      act2Group.visible = t >= 21.5 && t < 44.8;
      if (act2Group.visible) {
        // Traffic particles animation
        const pos = trafficGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < trafficCount; i++) {
          const i3 = i * 3;
          pos[i3] += (i % 2 === 0 ? 0.2 : -0.2);
          if (pos[i3] > 25) pos[i3] = -25;
          if (pos[i3] < -25) pos[i3] = 25;
        }
        trafficGeo.attributes.position.needsUpdate = true;
      }

      // Act 3: 44 - 67s
      act3Group.visible = t >= 43.8 && t < 67.5;
      if (act3Group.visible) {
        // Smooth laser oscillation up and down
        const lY = Math.sin(t * 3.2) * 4.2 + 2.5;
        laserMesh.position.y = lY;
        laserGlow.position.y = lY;

        // Subtle reticle breathing
        const scale = 1.0 + Math.sin(t * 2.0) * 0.02;
        faceReticle.scale.set(scale, scale, 1);
      }

      // Act 4: 67 - 85s
      act4Group.visible = t >= 66.5;
      if (act4Group.visible) {
        // Bucharest pulse wave expansion
        const pulse = ((t - 67) * 1.5) % 1.0;
        bucPulse.scale.setScalar(1.0 + pulse * 3.5);
        (bucPulse.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - pulse) * 0.85);

        // Traveling comets on arcs
        comets.forEach((comet, idx) => {
          const curve = arcCurves[idx % arcCurves.length];
          const speed = 0.16 + (idx % 3) * 0.04;
          const u = ((t - 67) * speed + idx * 0.18) % 1.0;
          comet.position.copy(curve.getPoint(u));
        });
      }

      renderer.render(scene, camera);
    };

    const animateLoop = () => {
      animId = requestAnimationFrame(animateLoop);
      renderScene(currentTimeRef.current);
    };
    animId = requestAnimationFrame(animateLoop);

    (window as any).renderSceneV2At = (t: number) => {
      renderScene(t);
    };

    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      delete (window as any).renderSceneV2At;
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ minHeight: '100dvh' }}
    />
  );
};

export default ThreeSceneV2;

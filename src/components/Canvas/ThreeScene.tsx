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

    // =========================================================================
    // 1. TRANSPARENT WEBGL RENDERER & SCENE
    // =========================================================================
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);

    // =========================================================================
    // 2. ACTE 1: HIGH-PRECISION AVIONICS COCKPIT HUD (Replaces bulky radar)
    // =========================================================================
    const avionicsGroup = new THREE.Group();
    scene.add(avionicsGroup);

    // A. Pitch Ladder (Artificial Horizon)
    const hudMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.55 });
    const hudGroup = new THREE.Group();
    avionicsGroup.add(hudGroup);

    // Horizon line
    const horizPts = [
      new THREE.Vector3(-14, 0, 0), new THREE.Vector3(-4, 0, 0),
      new THREE.Vector3(4, 0, 0), new THREE.Vector3(14, 0, 0)
    ];
    hudGroup.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(horizPts), hudMat));

    // Pitch rungs (-10°, -5°, +5°, +10°)
    const rungs = [-8, -4, 4, 8];
    rungs.forEach(y => {
      const w = 5 - Math.abs(y) * 0.2;
      const rungPts = [
        new THREE.Vector3(-w, y, 0), new THREE.Vector3(-w + 1.8, y, 0),
        new THREE.Vector3(w - 1.8, y, 0), new THREE.Vector3(w, y, 0)
      ];
      hudGroup.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(rungPts), hudMat));
    });

    // Flight Path Vector symbol (Circle with small wings)
    const fpvGroup = new THREE.Group();
    const fpvCircle = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.Path().absarc(0, 0, 0.9, 0, Math.PI * 2, true).getPoints(32)
      ),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 })
    );
    const fpvWings = new THREE.LineSegments(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.8, 0, 0), new THREE.Vector3(-0.9, 0, 0),
        new THREE.Vector3(0.9, 0, 0), new THREE.Vector3(1.8, 0, 0),
        new THREE.Vector3(0, 0.9, 0), new THREE.Vector3(0, 1.8, 0)
      ]),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 })
    );
    fpvGroup.add(fpvCircle, fpvWings);
    avionicsGroup.add(fpvGroup);

    // B. High-Tech Tactical Radar Sector (Bottom-Right, Integrated & Continuous 360°)
    const tacticalRadar = new THREE.Group();
    tacticalRadar.position.set(20, -9, 0);
    // STRICTLY 2D ORTHOGONAL: NO 3D TILT TO PREVENT PERSPECTIVE DISTORTION OR SPEED WOBBLE
    tacticalRadar.rotation.set(0, 0, 0);
    avionicsGroup.add(tacticalRadar);

    // Fine Concentric Range Rings (5nm, 10nm, 15nm)
    for (let r = 1; r <= 3; r++) {
      const radius = r * 4.5;
      const ring = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(
          new THREE.Path().absarc(0, 0, radius, 0, Math.PI * 2, true).getPoints(64)
        ),
        new THREE.LineBasicMaterial({
          color: 0x00f0ff,
          transparent: true,
          opacity: 0.35 - r * 0.08
        })
      );
      tacticalRadar.add(ring);
    }

    // Crosshairs
    const crossMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.2 });
    const crossGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-14.5, 0, 0), new THREE.Vector3(14.5, 0, 0),
      new THREE.Vector3(0, -14.5, 0), new THREE.Vector3(0, 14.5, 0)
    ]);
    tacticalRadar.add(new THREE.LineSegments(crossGeo, crossMat));

    // Sweep Group with Multi-Layer Phosphor Persistence Trail (100% constant rotation)
    const sweepGroup = new THREE.Group();
    tacticalRadar.add(sweepGroup);

    // 1. Primary Leading Edge Beam Line (Bright)
    const sweepLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0.05),
        new THREE.Vector3(14.5, 0, 0.05)
      ]),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.95 })
    );
    sweepGroup.add(sweepLine);

    // 2. High-intensity leading sector
    const sector1 = new THREE.Mesh(
      new THREE.CircleGeometry(14.5, 32, 0, 0.25),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide
      })
    );
    sweepGroup.add(sector1);

    // 3. Medium-intensity trailing sector
    const sector2 = new THREE.Mesh(
      new THREE.CircleGeometry(14.5, 32, 0.25, 0.35),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide
      })
    );
    sweepGroup.add(sector2);

    // 4. Soft faint trailing persistence
    const sector3 = new THREE.Mesh(
      new THREE.CircleGeometry(14.5, 32, 0.60, 0.45),
      new THREE.MeshBasicMaterial({
        color: 0x0284c7,
        transparent: true,
        opacity: 0.05,
        side: THREE.DoubleSide
      })
    );
    sweepGroup.add(sector3);

    // Waypoint blips (AMS air route navigation fixes)
    const waypoints = [
      { x: 5, y: 7, label: 'BUD' },
      { x: -7, y: 4, label: 'BEG' },
      { x: 3, y: -6, label: 'OTP' },
      { x: -6, y: -5, label: 'SOF' }
    ];
    const blipMeshes: { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; angle: number }[] = [];
    waypoints.forEach(wp => {
      const bMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
      const blip = new THREE.Mesh(new THREE.CircleGeometry(0.38, 16), bMat);
      blip.position.set(wp.x, wp.y, 0.05);
      tacticalRadar.add(blip);
      const angle = (Math.atan2(wp.y, wp.x) + Math.PI * 2) % (Math.PI * 2);
      blipMeshes.push({ mesh: blip, mat: bMat, angle });
    });

    // =========================================================================
    // 3. ACTE 2: BUCHAREST DESCENT GLIDESLOPE & URBAN FLOW
    // =========================================================================
    const bucarestGroup = new THREE.Group();
    scene.add(bucarestGroup);

    // A. 3D Approach Glide Slope Path
    const glidePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      glidePoints.push(new THREE.Vector3(-25 + t * 40, 15 - t * 20, (1 - t) * 10));
    }
    const glideLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(glidePoints),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 })
    );
    bucarestGroup.add(glideLine);

    // B. Target Reticle on Bucharest Hub
    const reticleGroup = new THREE.Group();
    reticleGroup.position.set(0, -6, 0);
    bucarestGroup.add(reticleGroup);

    const bTargetRing1 = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.Path().absarc(0, 0, 7.5, 0, Math.PI * 2, true).getPoints(64)
      ),
      new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.7 })
    );
    const bTargetRing2 = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.Path().absarc(0, 0, 11.5, 0, Math.PI * 2, true).getPoints(64)
      ),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 })
    );
    reticleGroup.add(bTargetRing1, bTargetRing2);

    // C. Urban Traffic Streams (Simulates dynamic Bucharest boulevards)
    const trafficCount = 180;
    const trafficGeo = new THREE.BufferGeometry();
    const trafficPositions = new Float32Array(trafficCount * 3);
    const trafficColors = new Float32Array(trafficCount * 3);

    for (let i = 0; i < trafficCount; i++) {
      const i3 = i * 3;
      const angle = (i / trafficCount) * Math.PI * 2;
      const dist = 6 + Math.random() * 16;
      trafficPositions[i3] = Math.cos(angle) * dist * 1.5;
      trafficPositions[i3 + 1] = Math.sin(angle) * dist * 0.6 - 6;
      trafficPositions[i3 + 2] = (Math.random() - 0.5) * 6;

      // Golden headlight stream vs Red taillight stream
      if (i % 2 === 0) {
        trafficColors[i3] = 1.0;
        trafficColors[i3 + 1] = 0.85;
        trafficColors[i3 + 2] = 0.3; // Amber gold
      } else {
        trafficColors[i3] = 0.95;
        trafficColors[i3 + 1] = 0.2;
        trafficColors[i3 + 2] = 0.25; // Ruby red
      }
    }
    trafficGeo.setAttribute('position', new THREE.BufferAttribute(trafficPositions, 3));
    trafficGeo.setAttribute('color', new THREE.BufferAttribute(trafficColors, 3));

    const trafficParticles = new THREE.Points(
      trafficGeo,
      new THREE.PointsMaterial({
        size: 0.45,
        vertexColors: true,
        transparent: true,
        opacity: 0.75
      })
    );
    bucarestGroup.add(trafficParticles);

    // =========================================================================
    // 4. ACTE 3: CABIS BIOMETRIC SCANNING LASER & LANDMARKS
    // =========================================================================
    const cabisHudGroup = new THREE.Group();
    scene.add(cabisHudGroup);

    // Volumetric Emerald-Green Laser Line (Sweeps across the gate)
    const laserMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(32, 0.12),
      new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide
      })
    );
    cabisHudGroup.add(laserMesh);

    // Subtle laser beam fan (light curtain)
    const fanGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 16, 0),
      new THREE.Vector3(-16, 0, 0),
      new THREE.Vector3(16, 0, 0)
    ]);
    const fanMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide
    });
    const laserFan = new THREE.Mesh(fanGeo, fanMat);
    cabisHudGroup.add(laserFan);

    // Target reticles over biometric sensor gate
    const gateTargetMat = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.75 });
    const gateBrackets = new THREE.Group();
    [[-6, 6], [6, 6], [-6, -6], [6, -6]].forEach(([cx, cy]) => {
      const sx = Math.sign(cx);
      const sy = Math.sign(cy);
      const pts = [
        new THREE.Vector3(cx - sx * 2.0, cy, 0),
        new THREE.Vector3(cx, cy, 0),
        new THREE.Vector3(cx, cy - sy * 2.0, 0)
      ];
      gateBrackets.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gateTargetMat));
    });
    gateBrackets.position.set(0, 1, 0);
    cabisHudGroup.add(gateBrackets);

    // =========================================================================
    // 5. ACTE 4: HIGH-END EUROPEAN GEODESIC FLIGHT ARCS & DATA PULSES
    // =========================================================================
    const orbitalGroup = new THREE.Group();
    scene.add(orbitalGroup);

    // Coordinates for key hubs (in 3D view space)
    const HUBS = {
      BUCAREST: new THREE.Vector3(12, -4, 2),
      PARIS: new THREE.Vector3(-14, 2, 4),
      FRANKFURT: new THREE.Vector3(-4, 4, 3),
      LONDON: new THREE.Vector3(-16, 8, 3),
      AMSTERDAM: new THREE.Vector3(-9, 7, 3)
    };

    // Helper to generate smooth geodesic parabolic arc
    function createGeodesicArc(start: THREE.Vector3, end: THREE.Vector3, apexHeight: number) {
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5);
      mid.y += apexHeight;
      mid.z += apexHeight * 0.4;

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(50);
      return { curve, points };
    }

    const arcDefs = [
      { start: HUBS.BUCAREST, end: HUBS.PARIS, height: 9.5, color: 0x00f0ff },
      { start: HUBS.BUCAREST, end: HUBS.FRANKFURT, height: 7.0, color: 0x38bdf8 },
      { start: HUBS.BUCAREST, end: HUBS.AMSTERDAM, height: 8.0, color: 0x00f0ff },
      { start: HUBS.PARIS, end: HUBS.LONDON, height: 4.0, color: 0x10b981 }
    ];

    const arcCurves: THREE.QuadraticBezierCurve3[] = [];
    arcDefs.forEach(def => {
      const { curve, points } = createGeodesicArc(def.start, def.end, def.height);
      arcCurves.push(curve);

      // Delicate, ultra-fine arc line
      const arcLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({
          color: def.color,
          transparent: true,
          opacity: 0.65
        })
      );
      orbitalGroup.add(arcLine);
    });

    // Traveling Comet Light Pulses along the arcs
    const cometMeshCount = 14;
    const comets: THREE.Mesh[] = [];
    const cometGeo = new THREE.SphereGeometry(0.28, 12, 12);
    const cometMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    for (let i = 0; i < cometMeshCount; i++) {
      const comet = new THREE.Mesh(cometGeo, cometMat);
      orbitalGroup.add(comet);
      comets.push(comet);
    }

    // Concentric Hub Beacons (Bucharest & Paris)
    const hubMarkers = [HUBS.BUCAREST, HUBS.PARIS];
    const beaconRings: THREE.Mesh[] = [];
    hubMarkers.forEach((hubPos, hIdx) => {
      for (let r = 0; r < 2; r++) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.6 + r * 0.8, 0.72 + r * 0.8, 32),
          new THREE.MeshBasicMaterial({
            color: hIdx === 0 ? 0x00f0ff : 0x10b981,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8
          })
        );
        ring.position.copy(hubPos);
        orbitalGroup.add(ring);
        beaconRings.push(ring);
      }
    });

    // =========================================================================
    // 6. ANIMATION LOOP & ACT TRANSITION CHOREOGRAPHY
    // =========================================================================
    let animId: number;

    const renderFrameAt = (t: number) => {
      currentTimeRef.current = t;
      progressRef.current = Math.min(1, Math.max(0, t / TOTAL_DURATION));

      // Act 1 (0 to 22s): Avionics HUD
      avionicsGroup.visible = t >= 0 && t < 22.8;
      if (avionicsGroup.visible) {
        // Continuous, strictly uniform 360° sweep rotation without ANY rollback or perspective wobble
        const sweepSpeed = 1.45;
        const currentRot = -t * sweepSpeed;
        sweepGroup.rotation.z = currentRot;

        // Current positive sweep angle in [0, 2pi]
        const sweepAngle = ((-currentRot) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);

        // Blips ping dynamically when sweep line passes over them
        blipMeshes.forEach(blip => {
          const diff = (sweepAngle - blip.angle + Math.PI * 2) % (Math.PI * 2);
          if (diff < 0.6) {
            // Flash and decay
            const p = 1.0 - diff / 0.6;
            blip.mat.opacity = 0.4 + p * 0.6;
            blip.mesh.scale.setScalar(1.0 + p * 0.4);
          } else {
            blip.mat.opacity = 0.4;
            blip.mesh.scale.setScalar(1.0);
          }
        });

        // FPV gently floating with realistic aerodynamic inertia (steady horizon, no tilt rocking)
        fpvGroup.position.x = Math.sin(t * 0.8) * 0.8;
        fpvGroup.position.y = Math.cos(t * 0.6) * 0.5;

        // Smooth fade out before Act 2
        const op = t > 21.0 ? Math.max(0, (22.8 - t) / 1.8) : 1;
        hudMat.opacity = 0.55 * op;
      }

      // Act 2 (22 to 44s): Bucharest Approach & Urban Flows
      bucarestGroup.visible = t >= 21.5 && t < 44.8;
      if (bucarestGroup.visible) {
        reticleGroup.rotation.z = t * 0.45;

        // Animate traffic light streams along boulevards
        const pos = trafficGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < trafficCount; i++) {
          const i3 = i * 3;
          // Slowly orbit and pulse inward/outward
          pos[i3 + 2] += (i % 2 === 0 ? 0.02 : -0.02);
          if (pos[i3 + 2] > 3) pos[i3 + 2] = -3;
          if (pos[i3 + 2] < -3) pos[i3 + 2] = 3;
        }
        trafficGeo.attributes.position.needsUpdate = true;
      }

      // Act 3 (44 to 67s): CABIS Biometric e-Gate
      // NO glitch from 45s-47s: strictly clean envelope
      cabisHudGroup.visible = t >= 43.8 && t < 67.5;
      if (cabisHudGroup.visible) {
        // Smooth vertical laser sweep across the gate
        const laserY = Math.sin(t * 2.6) * 5.5 + 1.0;
        laserMesh.position.y = laserY;
        laserFan.position.y = (laserY + 16) * 0.5 - 8;

        const gateOp = t > 66.0 ? (67.5 - t) / 1.5 : (t < 45.0 ? (t - 43.8) / 1.2 : 1);
        laserMesh.material.opacity = 0.85 * Math.max(0, gateOp);
      }

      // Act 4 (67 to 85s): European Geodesic Arcs & Orbital Radiance
      orbitalGroup.visible = t >= 66.5;
      if (orbitalGroup.visible) {
        // Animate traveling comets along the geodesic curves
        comets.forEach((comet, cIdx) => {
          const curveIdx = cIdx % arcCurves.length;
          const curve = arcCurves[curveIdx];
          const speed = 0.08 + (cIdx % 3) * 0.02;
          const u = ((t - 66.5) * speed + (cIdx * 0.18)) % 1.0;
          const pt = curve.getPoint(u);
          comet.position.copy(pt);
        });

        // Pulsing ripple beacons at Bucharest & Paris
        beaconRings.forEach((ring, rIdx) => {
          const scale = 1.0 + Math.sin(t * 3.5 + rIdx * 1.5) * 0.25;
          ring.scale.set(scale, scale, 1);
        });
      }

      renderer.render(scene, camera);
    };

    // Main RAF loop for interactive web application
    const animate = (timestamp: number) => {
      animId = requestAnimationFrame(animate);
      renderFrameAt(currentTimeRef.current);
    };

    animId = requestAnimationFrame(animate);

    // Deterministic render trigger for video automation
    (window as any).renderSceneAt = (t: number) => {
      renderFrameAt(t);
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
      delete (window as any).renderSceneAt;
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

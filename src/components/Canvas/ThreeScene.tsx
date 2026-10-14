import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  progress: number;
  currentTime: number;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ progress, currentTime }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // References to keep updated values accessible in animation loop
  const progressRef = useRef(progress);
  const currentTimeRef = useRef(currentTime);

  useEffect(() => {
    progressRef.current = progress;
    currentTimeRef.current = currentTime;
  }, [progress, currentTime]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030712, 1);

    // 2. Scene & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.011);

    // 3. Camera
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 800);
    camera.position.set(0, 80, 20);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.8);
    dirLight.position.set(20, 50, 30);
    scene.add(dirLight);

    const secondaryLight = new THREE.DirectionalLight(0x10b981, 1.2);
    secondaryLight.position.set(-20, 30, -20);
    scene.add(secondaryLight);

    // 5. Shared Materials
    const cyanWireMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.85 });
    const cyanGlowMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8
    });
    const emeraldScanMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide
    });

    // ==========================================
    // GROUP 1: SKY & AMS AIR TRAFFIC (Altitude 60)
    // ==========================================
    const skyGroup = new THREE.Group();
    skyGroup.position.y = 60;
    scene.add(skyGroup);

    // Airplane 3D Model
    const planeGroup = new THREE.Group();
    
    // Fuselage
    const fuselageGeo = new THREE.ConeGeometry(0.9, 7.5, 12);
    const fuselage = new THREE.Mesh(fuselageGeo, cyanGlowMat);
    fuselage.rotation.x = Math.PI / 2;
    planeGroup.add(fuselage);

    // Main Wings
    const wingsGeo = new THREE.BoxGeometry(8.2, 0.12, 1.8);
    const wings = new THREE.Mesh(wingsGeo, cyanWireMat);
    wings.position.z = 0.8;
    planeGroup.add(wings);

    // Tail Wings
    const tailGeo = new THREE.BoxGeometry(2.8, 0.08, 1.0);
    const tail = new THREE.Mesh(tailGeo, cyanWireMat);
    tail.position.z = -2.8;
    planeGroup.add(tail);

    // Vertical Stabilizer
    const finGeo = new THREE.BoxGeometry(0.1, 1.6, 1.2);
    const fin = new THREE.Mesh(finGeo, cyanGlowMat);
    fin.position.set(0, 0.8, -2.8);
    planeGroup.add(fin);

    // Jet Engine Exhaust Glows
    const engineGlowGeo = new THREE.SphereGeometry(0.25, 8, 8);
    const engineMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const engineL = new THREE.Mesh(engineGlowGeo, engineMat);
    engineL.position.set(-1.4, -0.2, -1.2);
    const engineR = engineL.clone();
    engineR.position.x = 1.4;
    planeGroup.add(engineL, engineR);

    skyGroup.add(planeGroup);

    // Flight Trajectory Ribbons / Trails
    const trailPoints: THREE.Vector3[] = [];
    for (let i = 0; i < 40; i++) {
      trailPoints.push(new THREE.Vector3(Math.sin(i * 0.2) * 4, 0, -i * 3.5));
    }
    const trailGeo = new THREE.BufferGeometry().setFromPoints(trailPoints);
    const trailMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.5 });
    const trajectoryLine = new THREE.Line(trailGeo, trailMat);
    skyGroup.add(trajectoryLine);

    // Radar System (Concentric Rings & Sweep)
    const radarGroup = new THREE.Group();
    for (let r = 1; r <= 4; r++) {
      const ringGeo = new THREE.RingGeometry(r * 4.2, r * 4.2 + 0.1, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45 - r * 0.08
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      radarGroup.add(ring);
    }

    // Radar Rotating Sweep Beam
    const sweepGeo = new THREE.CircleGeometry(17, 48, 0, 0.4);
    const sweepMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.24,
      side: THREE.DoubleSide
    });
    const radarSweep = new THREE.Mesh(sweepGeo, sweepMat);
    radarSweep.rotation.x = Math.PI / 2;
    radarGroup.add(radarSweep);
    skyGroup.add(radarGroup);

    // ==========================================
    // GROUP 2: VOLUMETRIC CLOUDS DECK (Altitude 25-50)
    // ==========================================
    const cloudsGroup = new THREE.Group();
    const cloudGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      transparent: true,
      opacity: 0.22,
      flatShading: true
    });

    for (let i = 0; i < 160; i++) {
      const cloud = new THREE.Mesh(cloudGeo, cloudMat);
      cloud.position.set(
        (Math.random() - 0.5) * 110,
        24 + Math.random() * 26,
        (Math.random() - 0.5) * 110
      );
      cloud.scale.set(
        1.2 + Math.random() * 2.2,
        0.5 + Math.random() * 0.6,
        1.2 + Math.random() * 2
      );
      cloudsGroup.add(cloud);
    }
    scene.add(cloudsGroup);

    // ==========================================
    // GROUP 3: BUCAREST TECH HUB (Topography & City Towers)
    // ==========================================
    const cityGroup = new THREE.Group();
    cityGroup.position.set(0, 0, 0);
    scene.add(cityGroup);

    // City Ground Grid
    const cityGrid = new THREE.GridHelper(200, 100, 0x00f0ff, 0x1e293b);
    cityGroup.add(cityGrid);

    // Bucarest Stylized Tech Skyscrapers
    const buildingMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true });
    const buildingSolidMat = new THREE.MeshStandardMaterial({ color: 0x030712, roughness: 0.5 });
    
    for (let i = 0; i < 45; i++) {
      const bx = (Math.random() - 0.5) * 140;
      const bz = (Math.random() - 0.5) * 140;
      // Keep runway/airport center lane clear
      if (Math.abs(bx) < 14 && Math.abs(bz) < 40) continue;

      const bh = 5 + Math.random() * 25;
      const bw = 3 + Math.random() * 4;
      const bGeo = new THREE.BoxGeometry(bw, bh, bw);
      
      const bMesh = new THREE.Mesh(bGeo, buildingSolidMat);
      bMesh.position.set(bx, bh / 2, bz);
      
      const bWire = new THREE.Mesh(bGeo, buildingMat);
      bWire.position.copy(bMesh.position);

      cityGroup.add(bMesh);
      cityGroup.add(bWire);
    }

    // ==========================================
    // GROUP 4: AIRPORT TARMAC & CABIS BIOMETRIC GATES (Altitude 0)
    // ==========================================
    const cabisGroup = new THREE.Group();
    scene.add(cabisGroup);

    // Runway Center Line
    const runwayGeo = new THREE.PlaneGeometry(16, 120);
    const runwayMat = new THREE.MeshBasicMaterial({ color: 0x080f20, side: THREE.DoubleSide });
    const runway = new THREE.Mesh(runwayGeo, runwayMat);
    runway.rotation.x = -Math.PI / 2;
    runway.position.set(0, 0.05, 0);
    cabisGroup.add(runway);

    // CABIS Biometric Gate Arches
    const gateArches: THREE.Group[] = [];
    for (let z = -28; z <= 20; z += 9) {
      for (const x of [-4.5, 0, 4.5]) {
        const arch = new THREE.Group();
        arch.position.set(x, 0, z);

        // Pillars
        const pillarL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 4.2, 0.6), cyanWireMat);
        pillarL.position.set(-1.3, 2.1, 0);
        const pillarR = pillarL.clone();
        pillarR.position.x = 1.3;

        // Top Arch Crossbar
        const topBar = new THREE.Mesh(new THREE.BoxGeometry(2.88, 0.3, 0.6), cyanWireMat);
        topBar.position.set(0, 4.2, 0);

        // Biometric Laser Scanner Wall (Green Hologram)
        const scannerWall = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 3.9), emeraldScanMat);
        scannerWall.position.set(0, 2.05, 0);

        // Top Status Light (Pulsing Cyan/Emerald)
        const statusGeo = new THREE.SphereGeometry(0.12, 8, 8);
        const statusMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
        const statusLight = new THREE.Mesh(statusGeo, statusMat);
        statusLight.position.set(0, 4.4, 0);

        arch.add(pillarL, pillarR, topBar, scannerWall, statusLight);
        cabisGroup.add(arch);
        gateArches.push(arch);
      }
    }

    // Passengers Walking Through CABIS Gates
    const passengerGroup = new THREE.Group();
    cabisGroup.add(passengerGroup);

    interface PassengerItem {
      mesh: THREE.Group;
      scanRing: THREE.Mesh;
      speed: number;
      lane: number;
    }

    const passengers: PassengerItem[] = [];
    const passMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });

    for (let i = 0; i < 21; i++) {
      const p = new THREE.Group();
      
      // Passenger Body (Stylized Cyber Avatar)
      const pBody = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.22, 1.4, 8), passMat);
      pBody.position.y = 0.7;

      const pHead = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), passMat);
      pHead.position.y = 1.7;

      // Scanning Laser Ring around Passenger
      const ringGeo = new THREE.RingGeometry(0.5, 0.6, 24);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x10b981, side: THREE.DoubleSide });
      const scanRing = new THREE.Mesh(ringGeo, ringMat);
      scanRing.rotation.x = Math.PI / 2;
      scanRing.position.y = 1.0;

      p.add(pBody, pHead, scanRing);

      const laneIndex = i % 3;
      const laneX = [-4.5, 0, 4.5][laneIndex];
      const startZ = -34 + i * 2.8;
      p.position.set(laneX, 0, startZ);

      passengerGroup.add(p);
      passengers.push({
        mesh: p,
        scanRing,
        speed: 0.048 + (i % 3) * 0.008,
        lane: laneIndex
      });
    }

    // ==========================================
    // GROUP 5: ORBITAL TRAJECTORY ARCS (Act 4)
    // ==========================================
    const orbitalGroup = new THREE.Group();
    scene.add(orbitalGroup);

    // French-Romanian International Bridge Arc
    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 50; i++) {
      const t = i / 50;
      const angle = t * Math.PI;
      curvePoints.push(new THREE.Vector3(
        -30 + t * 60,
        Math.sin(angle) * 35,
        -20 + Math.cos(angle) * 20
      ));
    }
    const bridgeGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const bridgeMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.7 });
    const bridgeLine = new THREE.Line(bridgeGeo, bridgeMat);
    orbitalGroup.add(bridgeLine);

    // Glowing network nodes along the arc
    for (let i = 0; i < 5; i++) {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x10b981 })
      );
      const t = 0.15 + i * 0.18;
      const angle = t * Math.PI;
      node.position.set(-30 + t * 60, Math.sin(angle) * 35, -20 + Math.cos(angle) * 20);
      orbitalGroup.add(node);
    }

    // ==========================================
    // 6. Camera Animation & Trajectory Control
    // ==========================================
    let animId: number;

    const animate = (timestamp: number) => {
      animId = requestAnimationFrame(animate);

      const p = progressRef.current;
      const now = timestamp;

      // 1. Radar Sweep Rotation
      radarSweep.rotation.z -= 0.038;

      // 2. Airplane subtle banking & turbulence
      planeGroup.position.x = Math.sin(now * 0.0016) * 1.5;
      planeGroup.position.y = Math.cos(now * 0.0012) * 0.6;
      planeGroup.rotation.z = Math.cos(now * 0.0016) * 0.14;

      // 3. Passenger Movement & Scanning Cycle
      passengers.forEach((pass, idx) => {
        pass.mesh.position.z += pass.speed;
        if (pass.mesh.position.z > 24) {
          pass.mesh.position.z = -34;
        }
        // Biometric ring sweeps vertically over body
        pass.scanRing.position.y = 0.8 + Math.sin(now * 0.006 + idx * 1.2) * 0.75;
      });

      // 4. Smooth Camera Trajectory interpolation across the 4 Acts
      const targetCamPos = new THREE.Vector3();
      const targetLookAt = new THREE.Vector3();

      if (p < 0.26) {
        // ACTE 1: 30,000 FT — High Altitude, Following the Supersonic Aircraft & AMS Radar
        const localT = p / 0.26;
        targetCamPos.set(
          Math.sin(localT * 1.8) * 8,
          82 - localT * 12,
          10 + Math.cos(localT * 1.8) * 8
        );
        targetLookAt.set(0, 60, 0);
      } else if (p < 0.52) {
        // ACTE 2: 4,500 FT — Diving through Cloud Deck into Bucarest Hub
        const localT = (p - 0.26) / 0.26;
        targetCamPos.set(
          Math.sin(localT * Math.PI) * 12,
          70 - localT * 64,
          18 - localT * 42
        );
        targetLookAt.set(0, 30 - localT * 28, -12);
      } else if (p < 0.79) {
        // ACTE 3: 0 FT — On the Tarmac, Traveling through CABIS Biometric Gates
        const localT = (p - 0.52) / 0.27;
        targetCamPos.set(
          Math.sin(localT * Math.PI * 1.5) * 2.8,
          2.4,
          -28 + localT * 38
        );
        targetLookAt.set(0, 2.0, -12 + localT * 38);
      } else {
        // ACTE 4: Rayonnement International — Smooth Orbital Ascension
        const localT = (p - 0.79) / 0.21;
        targetCamPos.set(
          localT * 32,
          2.4 + localT * 42,
          12 + localT * 34
        );
        targetLookAt.set(0, 10 + localT * 20, 0);
      }

      // Smooth camera interpolation
      camera.position.lerp(targetCamPos, 0.075);
      camera.lookAt(targetLookAt);

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // 7. Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 8. Cleanup on unmount
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
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-auto"
    />
  );
};

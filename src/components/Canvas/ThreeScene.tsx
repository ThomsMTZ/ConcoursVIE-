import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  createAirplaneTexture,
  createBuildingTexture,
  createAirportFloorTexture,
  createCabisScreenTexture,
  createRunwayTexture
} from '../../utils/textureGenerator';
import { TOTAL_DURATION } from '../../data/storyData';

interface ThreeSceneProps {
  progress: number;
  currentTime: number;
  onTimeUpdate?: (time: number) => void;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ progress, currentTime }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Keep latest progress accessible in animation loop without re-triggering scene reconstruction
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
    // 1. RENDERER & SCENE SETUP
    // ==========================================
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setClearColor(0x040814, 1);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040814, 0.009);

    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1000);

    // ==========================================
    // 2. LIGHTING (Atmospheric & Technical)
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.4);
    scene.add(ambientLight);

    const moonLight = new THREE.DirectionalLight(0x7dd3fc, 2.2);
    moonLight.position.set(30, 90, 40);
    scene.add(moonLight);

    const groundGlowLight = new THREE.DirectionalLight(0x0284c7, 1.0);
    groundGlowLight.position.set(-20, 20, -30);
    scene.add(groundGlowLight);

    // ==========================================
    // 3. TEXTURES GENERATION
    // ==========================================
    const airplaneTexture = createAirplaneTexture();
    const buildingTexture = createBuildingTexture();
    const airportFloorTexture = createAirportFloorTexture();
    const cabisScanningTexture = createCabisScreenTexture(false);
    const cabisGrantedTexture = createCabisScreenTexture(true);
    const runwayTexture = createRunwayTexture();

    // ==========================================
    // 4. STARFIELD (High Altitude Atmosphere)
    // ==========================================
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1200;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 600;
      starPositions[i + 1] = 40 + Math.random() * 250;
      starPositions[i + 2] = (Math.random() - 0.5) * 600;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xe0f2fe,
      size: 1.2,
      transparent: true,
      opacity: 0.85
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ==========================================
    // 5. ACTE 1: DETAILED COMMERCIAL JET & AMS RADAR (Altitude 65)
    // ==========================================
    const skyGroup = new THREE.Group();
    skyGroup.position.set(0, 65, 0);
    scene.add(skyGroup);

    // Airplane Group
    const airplane = new THREE.Group();
    skyGroup.add(airplane);

    // Aerodynamic Fuselage (PBR Pearlescent Material)
    const fuselageMat = new THREE.MeshPhysicalMaterial({
      map: airplaneTexture,
      roughness: 0.18,
      metalness: 0.25,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1
    });

    // Fuselage Central Body
    const bodyGeo = new THREE.CylinderGeometry(1.25, 1.25, 14, 24);
    bodyGeo.rotateX(Math.PI / 2);
    const bodyMesh = new THREE.Mesh(bodyGeo, fuselageMat);
    airplane.add(bodyMesh);

    // Aerodynamic Nose Cone
    const noseGeo = new THREE.ConeGeometry(1.25, 3.8, 24);
    noseGeo.rotateX(-Math.PI / 2);
    const noseMesh = new THREE.Mesh(noseGeo, fuselageMat);
    noseMesh.position.z = 8.9;
    airplane.add(noseMesh);

    // Tail Taper
    const tailConeGeo = new THREE.ConeGeometry(1.25, 4.5, 24);
    tailConeGeo.rotateX(Math.PI / 2);
    const tailConeMesh = new THREE.Mesh(tailConeGeo, fuselageMat);
    tailConeMesh.position.z = -9.25;
    airplane.add(tailConeMesh);

    // Cockpit Tinted Polarized Windshield
    const cockpitGeo = new THREE.SphereGeometry(1.28, 16, 16, 0, Math.PI, 0, Math.PI * 0.4);
    cockpitGeo.rotateX(-Math.PI / 2);
    const cockpitMat = new THREE.MeshPhysicalMaterial({
      color: 0x020617,
      roughness: 0.05,
      metalness: 0.9,
      transmission: 0.4,
      transparent: true
    });
    const cockpitMesh = new THREE.Mesh(cockpitGeo, cockpitMat);
    cockpitMesh.position.set(0, 0.45, 6.8);
    airplane.add(cockpitMesh);

    // Main Wings with Airfoil Profile & Winglets
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.22,
      metalness: 0.3
    });
    const leftWing = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.2, 2.6), wingMat);
    leftWing.position.set(-5.5, -0.2, 0.5);
    leftWing.rotation.set(-0.04, 0.25, -0.06);

    const rightWing = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.2, 2.6), wingMat);
    rightWing.position.set(5.5, -0.2, 0.5);
    rightWing.rotation.set(-0.04, -0.25, 0.06);
    airplane.add(leftWing, rightWing);

    // Vertical Stabilizer (Fin) & Horizontal Stabilizers
    const finMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 3.6, 2.8), wingMat);
    finMesh.position.set(0, 2.4, -9.6);
    finMesh.rotation.x = -0.32;
    airplane.add(finMesh);

    const hStabL = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.14, 1.4), wingMat);
    hStabL.position.set(-2.2, 0.4, -10.2);
    hStabL.rotation.y = 0.2;
    const hStabR = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.14, 1.4), wingMat);
    hStabR.position.set(2.2, 0.4, -10.2);
    hStabR.rotation.y = -0.2;
    airplane.add(hStabL, hStabR);

    // Turbofan Jet Engines under Wings
    const engineMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.85,
      roughness: 0.25
    });
    const engineGlowMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    [-3.8, 3.8].forEach(ex => {
      const nacelle = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.65, 3.2, 16), engineMat);
      nacelle.rotation.x = Math.PI / 2;
      nacelle.position.set(ex, -1.1, 0.8);

      const exhaustGlow = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.6, 16), engineGlowMat);
      exhaustGlow.position.set(0, -1.6, 0);
      exhaustGlow.rotation.x = Math.PI / 2;
      nacelle.add(exhaustGlow);

      airplane.add(nacelle);
    });

    // Realistic Navigation Lights
    // Left Wing Red Light
    const navRedLight = new THREE.PointLight(0xef4444, 2.5, 12);
    navRedLight.position.set(-10.2, -0.15, 0.5);
    const navRedMesh = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    navRedLight.add(navRedMesh);
    airplane.add(navRedLight);

    // Right Wing Green Light
    const navGreenLight = new THREE.PointLight(0x10b981, 2.5, 12);
    navGreenLight.position.set(10.2, -0.15, 0.5);
    const navGreenMesh = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
    navGreenLight.add(navGreenMesh);
    airplane.add(navGreenLight);

    // Tail White Strobe Light
    const strobeLight = new THREE.PointLight(0xffffff, 4, 20);
    strobeLight.position.set(0, 3.8, -10.5);
    const strobeMesh = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    strobeLight.add(strobeMesh);
    airplane.add(strobeLight);

    // AMS Holographic Sweep Radar
    const radarGroup = new THREE.Group();
    radarGroup.position.set(0, -2, 0);
    for (let r = 1; r <= 4; r++) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(r * 4.6, r * 4.6 + 0.12, 64),
        new THREE.MeshBasicMaterial({
          color: 0x00f0ff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.42 - r * 0.08
        })
      );
      ring.rotation.x = Math.PI / 2;
      radarGroup.add(ring);
    }
    const sweepMesh = new THREE.Mesh(
      new THREE.CircleGeometry(18.5, 48, 0, 0.4),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide
      })
    );
    sweepMesh.rotation.x = Math.PI / 2;
    radarGroup.add(sweepMesh);
    skyGroup.add(radarGroup);

    // ==========================================
    // 6. ACTE 2: VOLUMETRIC CLOUDS DECK (Altitude 26 - 48)
    // ==========================================
    const cloudsGroup = new THREE.Group();
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.95,
      metalness: 0.05,
      transparent: true,
      opacity: 0.45,
      flatShading: false
    });

    for (let i = 0; i < 90; i++) {
      const cluster = new THREE.Group();
      const numPuffs = 4 + Math.floor(Math.random() * 4);
      for (let j = 0; j < numPuffs; j++) {
        const puffGeo = new THREE.SphereGeometry(2.6 + Math.random() * 2.2, 10, 8);
        const puff = new THREE.Mesh(puffGeo, cloudMat);
        puff.position.set((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 5);
        cluster.add(puff);
      }
      cluster.position.set(
        (Math.random() - 0.5) * 140,
        28 + Math.random() * 20,
        (Math.random() - 0.5) * 140
      );
      cloudsGroup.add(cluster);
    }
    scene.add(cloudsGroup);

    // ==========================================
    // 7. ACTE 2: BUCAREST TECH HUB (Textured City Skyscrapers)
    // ==========================================
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // Ground Highway Grid with Road Traffic
    const groundGrid = new THREE.GridHelper(300, 100, 0x0284c7, 0x0f172a);
    groundGrid.position.y = 0.02;
    cityGroup.add(groundGrid);

    // Textured High-Rise Towers
    const buildingMat = new THREE.MeshStandardMaterial({
      map: buildingTexture,
      roughness: 0.35,
      metalness: 0.4
    });

    const towerCount = 55;
    for (let i = 0; i < towerCount; i++) {
      const bx = (Math.random() - 0.5) * 180;
      const bz = (Math.random() - 0.5) * 180;
      // Leave center runway / terminal corridor clear
      if (Math.abs(bx) < 18 && Math.abs(bz) < 45) continue;

      const bh = 8 + Math.random() * 30;
      const bw = 4 + Math.random() * 4;
      const bd = 4 + Math.random() * 4;

      const tower = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), buildingMat);
      tower.position.set(bx, bh / 2, bz);

      // Roof Helipad / Beacon Light
      if (Math.random() > 0.6) {
        const roofLight = new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0xef4444 })
        );
        roofLight.position.set(0, bh / 2 + 0.3, 0);
        tower.add(roofLight);
      }
      cityGroup.add(tower);
    }

    // Bucarest Beacon Hologram
    const beaconLight = new THREE.PointLight(0x00f0ff, 3, 40);
    beaconLight.position.set(0, 18, -12);
    cityGroup.add(beaconLight);

    // ==========================================
    // 8. ACTE 3: RUNWAY TARMAC & CABIS BIOMETRIC SMART GATES
    // ==========================================
    const airportGroup = new THREE.Group();
    scene.add(airportGroup);

    // Runway / Tarmac with Center Stripes
    const tarmacGeo = new THREE.PlaneGeometry(24, 150);
    const tarmacMat = new THREE.MeshStandardMaterial({
      map: runwayTexture,
      roughness: 0.8,
      metalness: 0.1
    });
    const tarmac = new THREE.Mesh(tarmacGeo, tarmacMat);
    tarmac.rotation.x = -Math.PI / 2;
    tarmac.position.set(0, 0.05, 0);
    airportGroup.add(tarmac);

    // Terminal Concourse Polished Floor
    const terminalFloorGeo = new THREE.PlaneGeometry(40, 50);
    const terminalFloorMat = new THREE.MeshStandardMaterial({
      map: airportFloorTexture,
      roughness: 0.12,
      metalness: 0.35
    });
    const terminalFloor = new THREE.Mesh(terminalFloorGeo, terminalFloorMat);
    terminalFloor.rotation.x = -Math.PI / 2;
    terminalFloor.position.set(0, 0.08, 0);
    airportGroup.add(terminalFloor);

    // CABIS High-End Biometric Smart Gate Arches
    const gateArches: THREE.Group[] = [];
    const archFrameMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.2
    });
    const oledScreenMat = new THREE.MeshBasicMaterial({ map: cabisGrantedTexture });
    const scanningOledMat = new THREE.MeshBasicMaterial({ map: cabisScanningTexture });
    const glassPartitionMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.3,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.6
    });

    const lanePositions = [-5.2, 0, 5.2];
    for (let z = -26; z <= 18; z += 11) {
      lanePositions.forEach((lx, laneIdx) => {
        const gate = new THREE.Group();
        gate.position.set(lx, 0, z);

        // Left & Right Aluminum Columns
        const colL = new THREE.Mesh(new THREE.BoxGeometry(0.35, 4.4, 0.8), archFrameMat);
        colL.position.set(-1.4, 2.2, 0);
        const colR = colL.clone();
        colR.position.x = 1.4;

        // Top Header Beam
        const topHeader = new THREE.Mesh(new THREE.BoxGeometry(3.15, 0.4, 0.8), archFrameMat);
        topHeader.position.set(0, 4.4, 0);

        // Glass Flap Barrier Gates (Openable Doors)
        const doorL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 0.08), glassPartitionMat);
        doorL.position.set(-0.65, 1.1, 0);
        const doorR = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 0.08), glassPartitionMat);
        doorR.position.set(0.65, 1.1, 0);

        // OLED Biometric Display Screen on Column
        const screenGeo = new THREE.PlaneGeometry(0.75, 1.2);
        const screenMesh = new THREE.Mesh(screenGeo, laneIdx === 1 ? oledScreenMat : scanningOledMat);
        screenMesh.position.set(1.42, 2.4, 0.41);
        screenMesh.rotation.y = Math.PI / 2;

        // Top Status Light (Green = Granted)
        const ledGeo = new THREE.SphereGeometry(0.12, 10, 10);
        const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
        const led = new THREE.Mesh(ledGeo, ledMat);
        led.position.set(0, 4.65, 0.35);

        // Volumetric Laser Scanner Plane
        const laserMat = new THREE.MeshBasicMaterial({
          color: 0x10b981,
          transparent: true,
          opacity: 0.25,
          side: THREE.DoubleSide
        });
        const laserPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 4.0), laserMat);
        laserPlane.position.set(0, 2.2, 0);

        gate.add(colL, colR, topHeader, doorL, doorR, screenMesh, led, laserPlane);
        airportGroup.add(gate);
        gateArches.push(gate);
      });
    }

    // Realistic Passenger Silhouettes with Trolley Bags
    interface PassengerData {
      group: THREE.Group;
      laserRing: THREE.Mesh;
      speed: number;
    }

    const passengers: PassengerData[] = [];
    const passengerCoatMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.7 });
    const passengerShirtMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.4 });
    const luggageMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.6, roughness: 0.3 });

    for (let i = 0; i < 18; i++) {
      const p = new THREE.Group();

      // Lower Body (Legs)
      const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 1.2, 8), passengerCoatMat);
      legs.position.y = 0.6;

      // Torso with Jacket
      const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.3, 1.1, 8), passengerShirtMat);
      torso.position.y = 1.6;

      // Head
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), new THREE.MeshStandardMaterial({ color: 0xfde047 }));
      head.position.y = 2.3;

      // Wheeled Cabin Trolley Luggage
      const luggage = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.7, 0.3), luggageMat);
      luggage.position.set(0.55, 0.35, -0.4);
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.8), archFrameMat);
      handle.position.set(0.55, 0.8, -0.4);

      // Biometric Vertical Scanner Ring
      const scanRing = new THREE.Mesh(
        new THREE.RingGeometry(0.45, 0.55, 24),
        new THREE.MeshBasicMaterial({ color: 0x10b981, side: THREE.DoubleSide })
      );
      scanRing.rotation.x = Math.PI / 2;
      scanRing.position.y = 1.4;

      p.add(legs, torso, head, luggage, handle, scanRing);

      const lane = lanePositions[i % 3];
      p.position.set(lane, 0, -32 + i * 3.6);

      airportGroup.add(p);
      passengers.push({
        group: p,
        laserRing: scanRing,
        speed: 0.052 + (i % 3) * 0.007
      });
    }

    // ==========================================
    // 9. ACTE 4: INTERNATIONAL BRIDGE & RADIANCE
    // ==========================================
    const bridgeGroup = new THREE.Group();
    scene.add(bridgeGroup);

    const bridgePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const angle = t * Math.PI;
      bridgePoints.push(new THREE.Vector3(
        -35 + t * 70,
        Math.sin(angle) * 42,
        -15 + Math.cos(angle) * 25
      ));
    }
    const bridgeGeo = new THREE.BufferGeometry().setFromPoints(bridgePoints);
    const bridgeLine = new THREE.Line(
      bridgeGeo,
      new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.85 })
    );
    bridgeGroup.add(bridgeLine);

    // Luminous nodes along the bridge
    for (let i = 0; i < 7; i++) {
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 16, 16),
        new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x10b981 : 0x00f0ff })
      );
      const t = 0.12 + i * 0.13;
      const angle = t * Math.PI;
      node.position.set(-35 + t * 70, Math.sin(angle) * 42, -15 + Math.cos(angle) * 25);
      bridgeGroup.add(node);
    }

    // ==========================================
    // 10. SMOOTH CONTINUOUS CAMERA SPLINES (Zero Discontinuity, Zero Rollbacks)
    // ==========================================
    // Control points for continuous Catmull-Rom spline camera trajectory
    const camPathPoints = [
      new THREE.Vector3(12, 69, 14),   // t=0.00: Act 1 - Parallel alongside airplane in cruise
      new THREE.Vector3(6, 67, 18),    // t=0.15: Act 1 - Sweeping towards the radar & wing
      new THREE.Vector3(0, 64, 16),    // t=0.26: Transition into clouds
      new THREE.Vector3(-4, 42, 10),   // t=0.38: Act 2 - Diving through clouds, Bucarest emerges
      new THREE.Vector3(0, 16, -6),    // t=0.52: Act 2 - Flying above illuminated towers
      new THREE.Vector3(0, 3.2, -22),  // t=0.65: Act 3 - Entering CABIS Terminal at eye level
      new THREE.Vector3(0, 2.6, 2),    // t=0.79: Act 3 - Traveling through biometric gates
      new THREE.Vector3(18, 28, 22),   // t=0.90: Act 4 - Ascending orbital crane shot
      new THREE.Vector3(28, 52, 38)    // t=1.00: Act 4 - Full international vista
    ];
    const cameraPathCurve = new THREE.CatmullRomCurve3(camPathPoints, false, 'catmullrom', 0.5);

    const lookPathPoints = [
      new THREE.Vector3(0, 65, 0),     // t=0.00: Focus on jet fuselage
      new THREE.Vector3(0, 65, 2),     // t=0.15: Focus on cockpit
      new THREE.Vector3(0, 48, -4),    // t=0.26: Look down into clouds
      new THREE.Vector3(0, 15, -12),   // t=0.38: Look at Bucarest skyscrapers
      new THREE.Vector3(0, 2, -18),    // t=0.52: Align with runway & terminal entrance
      new THREE.Vector3(0, 2.2, -8),   // t=0.65: Look directly at CABIS gates & passengers
      new THREE.Vector3(0, 2.4, 16),   // t=0.79: Look through the cleared exit gates
      new THREE.Vector3(0, 20, 0),     // t=0.90: Look at international radiance bridge
      new THREE.Vector3(0, 15, -5)     // t=1.00: Majestic global overview
    ];
    const cameraLookCurve = new THREE.CatmullRomCurve3(lookPathPoints, false, 'catmullrom', 0.5);

    // Expose deterministic frame render function on window for offline export
    (window as any).renderSceneAt = (timeInSeconds: number) => {
      const p = Math.max(0, Math.min(1, timeInSeconds / TOTAL_DURATION));
      const pos = cameraPathCurve.getPointAt(p);
      const look = cameraLookCurve.getPointAt(p);
      camera.position.copy(pos);
      camera.lookAt(look);
      renderer.render(scene, camera);
    };

    // ==========================================
    // 11. MAIN ANIMATION LOOP
    // ==========================================
    let animId: number;

    const animate = (timestamp: number) => {
      animId = requestAnimationFrame(animate);

      const p = progressRef.current;
      const now = timestamp;

      // 1. Strobe lights blinking (realistic 1Hz flash)
      const strobeOn = Math.floor(now / 1000) % 2 === 0 && (now % 1000) < 120;
      strobeLight.intensity = strobeOn ? 8 : 0.2;

      // 2. Radar sweep rotation
      sweepMesh.rotation.z -= 0.045;

      // 3. Gentle airplane flight dynamics
      airplane.position.x = Math.sin(now * 0.0014) * 1.8;
      airplane.position.y = Math.cos(now * 0.0011) * 0.7;
      airplane.rotation.z = Math.cos(now * 0.0014) * 0.08;

      // 4. Passenger walking & vertical biometric scan
      passengers.forEach((pass, idx) => {
        pass.group.position.z += pass.speed;
        if (pass.group.position.z > 22) {
          pass.group.position.z = -32;
        }
        pass.laserRing.position.y = 0.9 + Math.sin(now * 0.006 + idx * 1.1) * 0.75;
      });

      // 5. Mathematically Smooth Camera Position from Spline (Strictly Monotonic, Zero Rollback!)
      const camPos = cameraPathCurve.getPointAt(p);
      const lookTarget = cameraLookCurve.getPointAt(p);
      camera.position.copy(camPos);
      camera.lookAt(lookTarget);

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // ==========================================
    // 12. RESIZE & CLEANUP
    // ==========================================
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
      delete (window as any).renderSceneAt;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-auto"
    />
  );
};

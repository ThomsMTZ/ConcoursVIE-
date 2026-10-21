import React from 'react';
import { ScanFace, Fingerprint, CheckCircle2, ShieldCheck, Activity, Unlock, Lock } from 'lucide-react';

interface BiometricConsoleHUDProps {
  currentTime: number;
}

/**
 * BIOMETRIC DUAL-SCAN CONSOLE (ACT 3 CABIS)
 * 
 * Features:
 * 1. Thomas Martinez Studio Portrait (thomas_studio_portrait.png) with geometrically locked 17-point 3D facial mesh.
 * 2. Real-time laser sweep illumination: nodes actively ping and glow when intersected by the biometric laser.
 * 3. High-precision Dactyloscopic Fingerprint Scanner with animated laser beam and minutiae points.
 * 4. Dynamic e-Gate clearance telemetry reflecting border passage at the airport.
 */
export const BiometricConsoleHUD: React.FC<BiometricConsoleHUDProps> = ({ currentTime }) => {
  // Act 3 spans 44.0s to 67.5s
  const isAct3 = currentTime >= 44.0 && currentTime <= 67.5;
  if (!isAct3) return null;

  // Gate unlock & verified threshold at 52.5s
  const isVerified = currentTime >= 52.5;

  // Smooth fade-in (44.0s - 45.5s) and fade-out (66.0s - 67.5s)
  let opacity = 1;
  if (currentTime < 45.5) {
    opacity = Math.max(0, (currentTime - 44.0) / 1.5);
  } else if (currentTime > 66.0) {
    opacity = Math.max(0, (67.5 - currentTime) / 1.5);
  }

  // Scanning progress percentage (ramps from 24% to 99.8%)
  const scanProgress = isVerified
    ? 99.8
    : Math.min(99.4, Math.round(((currentTime - 44.5) / 8.0) * 75 + 24));

  // Laser oscillating position across face (focused between eyebrows 34% and chin 80%)
  const laserFacePercent = isVerified
    ? 44.0
    : (Math.sin(currentTime * 3.8) * 0.5 + 0.5) * 46 + 34;

  const laserFingerPercent = isVerified
    ? 50
    : Math.round((Math.cos(currentTime * 5.5) * 0.5 + 0.5) * 70 + 15);

  // 17 Facial landmarks calibrated with mathematical pixel-precision to Thomas's studio portrait (505 x 660 px)
  const faceLandmarks = [
    { id: 'L_EYE', x: 40.8, y: 43.2, label: 'L_EYE' },
    { id: 'R_EYE', x: 68.5, y: 45.6, label: 'R_EYE' },
    { id: 'GLABELLA', x: 54.7, y: 40.6, label: 'GLABELLA' },
    { id: 'NOSE_BRIDGE', x: 55.0, y: 46.2, label: 'BRIDGE' },
    { id: 'NOSE_TIP', x: 56.4, y: 54.5, label: 'TIP' },
    { id: 'NOSE_L', x: 49.5, y: 54.8, label: 'NOSE_L' },
    { id: 'NOSE_R', x: 63.0, y: 55.8, label: 'NOSE_R' },
    { id: 'L_BROW', x: 39.2, y: 36.4, label: 'BROW_L' },
    { id: 'R_BROW', x: 69.3, y: 39.1, label: 'BROW_R' },
    { id: 'L_MOUTH', x: 45.9, y: 64.8, label: 'MOUTH_L' },
    { id: 'R_MOUTH', x: 62.4, y: 66.4, label: 'MOUTH_R' },
    { id: 'MOUTH_MID', x: 53.9, y: 65.5, label: 'LIPS' },
    { id: 'CHIN', x: 55.0, y: 78.5, label: 'CHIN' },
    { id: 'L_JAW', x: 32.1, y: 58.3, label: 'JAW_L' },
    { id: 'R_JAW', x: 77.6, y: 62.9, label: 'JAW_R' },
    { id: 'L_TEMPLE', x: 29.3, y: 41.7, label: 'TEMPLE_L' },
    { id: 'R_TEMPLE', x: 80.8, y: 45.2, label: 'TEMPLE_R' },
  ];

  // Minutiae points on fingerprint
  const minutiaePoints = [
    { cx: 32, cy: 30 },
    { cx: 48, cy: 22 },
    { cx: 64, cy: 34 },
    { cx: 38, cy: 46 },
    { cx: 52, cy: 52 },
    { cx: 62, cy: 62 },
    { cx: 44, cy: 68 },
    { cx: 56, cy: 78 },
  ];

  return (
    <div
      className="absolute right-6 top-24 z-30 w-[350px] sm:w-[380px] pointer-events-none select-none transition-all duration-500 font-sans"
      style={{ opacity }}
    >
      <div
        className={`relative rounded-2xl p-4 overflow-hidden backdrop-blur-2xl border shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-colors duration-700 ${
          isVerified
            ? 'bg-slate-950/92 border-emerald-400/50 shadow-[0_0_35px_rgba(16,185,129,0.3)]'
            : 'bg-slate-950/92 border-cyan-400/40 shadow-[0_0_30px_rgba(0,240,255,0.2)]'
        }`}
      >
        {/* Tech Corner Brackets */}
        <div className={`absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 ${isVerified ? 'border-emerald-400' : 'border-cyan-400'}`} />
        <div className={`absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 ${isVerified ? 'border-emerald-400' : 'border-cyan-400'}`} />
        <div className={`absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 ${isVerified ? 'border-emerald-400' : 'border-cyan-400'}`} />
        <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 ${isVerified ? 'border-emerald-400' : 'border-cyan-400'}`} />

        {/* 1. Header Bar */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 font-mono">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isVerified ? 'bg-emerald-400 animate-ping' : 'bg-cyan-400 animate-pulse'}`} />
            <span className={`text-[10px] font-bold tracking-widest uppercase ${isVerified ? 'text-emerald-300' : 'text-cyan-300'}`}>
              CABIS // BIOMETRICS HUD
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-slate-300">
            <ShieldCheck className={`w-3 h-3 ${isVerified ? 'text-emerald-400' : 'text-cyan-400'}`} />
            <span>ICAO 9303</span>
          </div>
        </div>

        {/* 2. DUAL BIOMETRICS VIEWPORT: Thomas Studio Portrait (Left) + Fingerprint (Right) */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* A. THOMAS STUDIO PORTRAIT WITH DYNAMIC FACIAL LANDMARK TRACKER */}
          <div className="relative h-[200px] rounded-xl overflow-hidden bg-black border border-white/15 flex items-center justify-center">
            {/* Background Grid Lines */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(0,240,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.2) 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            />

            {/* Thomas Studio Portrait (100% matched to container) */}
            <img
              src={`${import.meta.env.BASE_URL}assets/images/thomas_studio_portrait.png`}
              alt="Thomas Martinez Studio Portrait"
              className={`w-full h-full object-cover object-center pointer-events-none transition-all duration-700 ${
                isVerified ? 'brightness-105 contrast-110 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]' : 'brightness-100 contrast-105'
              }`}
            />

            {/* Dynamic Laser Beam Sweep across Face */}
            <div
              className="absolute left-0 right-0 z-20 pointer-events-none transition-all duration-75"
              style={{ top: `${laserFacePercent}%` }}
            >
              <div className={`h-[2px] w-full ${isVerified ? 'bg-emerald-400 shadow-[0_0_12px_#10b981]' : 'bg-cyan-300 shadow-[0_0_10px_#00f0ff]'}`} />
              <div className={`h-4 -mt-2 w-full opacity-35 blur-xs ${isVerified ? 'bg-emerald-500' : 'bg-cyan-400'}`} />
            </div>

            {/* Geometrically Calibrated 3D Facial Mesh & Landmark Nodes */}
            <svg
              className="absolute inset-0 w-full h-full z-20 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Outer Jaw & Forehead Polygonal Hull */}
              <polygon
                points="29.3,41.7 39.2,36.4 54.7,40.6 69.3,39.1 80.8,45.2 77.6,62.9 55.0,78.5 32.1,58.3"
                fill={isVerified ? 'rgba(16, 185, 129, 0.12)' : 'rgba(0, 240, 255, 0.08)'}
                stroke={isVerified ? 'rgba(16, 185, 129, 0.7)' : 'rgba(0, 240, 255, 0.55)'}
                strokeWidth="0.6"
                strokeDasharray={isVerified ? 'none' : '2 2'}
              />

              {/* Eyebrows to Glabella */}
              <polyline
                points="39.2,36.4 54.7,40.6 69.3,39.1"
                fill="none"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.8"
              />

              {/* Eyes horizontal line */}
              <polyline
                points="29.3,41.7 40.8,43.2 54.7,40.6 68.5,45.6 80.8,45.2"
                fill="none"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.75"
              />

              {/* Nose Bridge and Cartilage */}
              <line
                x1="54.7" y1="40.6"
                x2="55.0" y2="46.2"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.8"
              />
              <line
                x1="55.0" y1="46.2"
                x2="56.4" y2="54.5"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.8"
              />
              <polyline
                points="49.5,54.8 56.4,54.5 63.0,55.8"
                fill="none"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.8"
              />

              {/* Nose to Mouth & Lips */}
              <line
                x1="56.4" y1="54.5"
                x2="53.9" y2="65.5"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.7"
              />
              <polyline
                points="45.9,64.8 53.9,65.5 62.4,66.4"
                fill="none"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.6"
                opacity="0.85"
              />

              {/* Mouth to Chin */}
              <line
                x1="45.9" y1="64.8"
                x2="55.0" y2="78.5"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.7"
              />
              <line
                x1="62.4" y1="66.4"
                x2="55.0" y2="78.5"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.7"
              />
              <line
                x1="53.9" y1="65.5"
                x2="55.0" y2="78.5"
                stroke={isVerified ? '#10b981' : '#00f0ff'}
                strokeWidth="0.5"
                opacity="0.7"
              />

              {/* Eye Targeting Brackets */}
              <g stroke={isVerified ? '#10b981' : '#00f0ff'} strokeWidth="0.6" fill="none" opacity="0.8">
                {/* Left Eye Box */}
                <path d="M 37.5 41.5 L 37.5 40.5 L 39.0 40.5" />
                <path d="M 42.5 40.5 L 44.0 40.5 L 44.0 41.5" />
                <path d="M 37.5 45.0 L 37.5 46.0 L 39.0 46.0" />
                <path d="M 42.5 46.0 L 44.0 46.0 L 44.0 45.0" />

                {/* Right Eye Box */}
                <path d="M 65.5 43.5 L 65.5 42.5 L 67.0 42.5" />
                <path d="M 70.0 42.5 L 71.5 42.5 L 71.5 43.5" />
                <path d="M 65.5 47.5 L 65.5 48.5 L 67.0 48.5" />
                <path d="M 70.0 48.5 L 71.5 48.5 L 71.5 47.5" />
              </g>

              {/* Dynamic Landmark Nodes with Laser Illumination */}
              {faceLandmarks.map((pt) => {
                const isHit = Math.abs(pt.y - laserFacePercent) < 7.0;
                return (
                  <g key={pt.id}>
                    {/* Active Laser Ping Halo */}
                    {isHit && !isVerified && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="3.2"
                        fill="rgba(0, 240, 255, 0.25)"
                        stroke="#00f0ff"
                        strokeWidth="0.4"
                      />
                    )}
                    {/* Verified Glow Halo */}
                    {isVerified && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="2.2"
                        fill="rgba(16, 185, 129, 0.2)"
                      />
                    )}
                    {/* Node Core */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHit ? '1.5' : '1.1'}
                      fill={isVerified ? '#10b981' : isHit ? '#ffffff' : '#00f0ff'}
                      stroke={isVerified ? '#047857' : isHit ? '#00f0ff' : '#0891b2'}
                      strokeWidth="0.3"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Label Badge */}
            <div className="absolute bottom-1.5 left-1.5 z-20 font-mono text-[8px] text-slate-200 bg-black/80 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
              <ScanFace className={`w-2.5 h-2.5 ${isVerified ? 'text-emerald-400' : 'text-cyan-400'}`} />
              <span>{isVerified ? '17/17 LOCKED' : '3D MESH SCAN'}</span>
            </div>
          </div>

          {/* B. DACTYLOSCOPIC FINGERPRINT SCANNER */}
          <div className="relative h-[200px] rounded-xl overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 border border-white/15 flex flex-col items-center justify-center p-2">
            {/* Holographic Fingerprint SVG graphic */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className={`w-full h-full transition-colors duration-500 ${
                  isVerified ? 'text-emerald-400' : 'text-cyan-400'
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                {/* Fingerprint concentric whorls & ridges */}
                <path d="M 50 18 A 32 32 0 0 1 82 50 C 82 66 74 78 70 84" opacity="0.4" />
                <path d="M 18 50 A 32 32 0 0 1 50 18" opacity="0.4" />
                <path d="M 50 25 A 25 25 0 0 1 75 50 C 75 64 68 74 64 80" opacity="0.6" />
                <path d="M 25 50 A 25 25 0 0 1 50 25" opacity="0.6" />
                <path d="M 50 32 A 18 18 0 0 1 68 50 C 68 60 62 70 58 76" opacity="0.8" />
                <path d="M 32 50 A 18 18 0 0 1 50 32" opacity="0.8" />
                <path d="M 50 39 A 11 11 0 0 1 61 50 C 61 58 56 64 54 70" opacity="0.9" />
                <path d="M 39 50 A 11 11 0 0 1 50 39" opacity="0.9" />
                <path d="M 50 46 A 4 4 0 0 1 54 50 C 54 54 52 58 50 64" strokeWidth="2" />
                <path d="M 46 50 A 4 4 0 0 1 50 46" strokeWidth="2" />

                {/* Minutiae detection points */}
                {minutiaePoints.map((m, idx) => (
                  <circle
                    key={idx}
                    cx={m.cx}
                    cy={m.cy}
                    r={isVerified ? 1.8 : 1.4}
                    fill={isVerified ? '#10b981' : '#00f0ff'}
                  />
                ))}
              </svg>

              {/* Laser Beam Sweep on Fingerprint */}
              <div
                className="absolute left-0 right-0 z-20 pointer-events-none transition-all duration-75"
                style={{ top: `${laserFingerPercent}%` }}
              >
                <div className={`h-[2px] w-full ${isVerified ? 'bg-emerald-400 shadow-[0_0_10px_#10b981]' : 'bg-cyan-300 shadow-[0_0_8px_#00f0ff]'}`} />
                <div className={`h-3 -mt-1.5 w-full opacity-35 blur-xs ${isVerified ? 'bg-emerald-500' : 'bg-cyan-400'}`} />
              </div>
            </div>

            {/* Fingerprint Telemetry readout */}
            <div className="w-full mt-2 pt-1 border-t border-white/10 font-mono text-center">
              <div className="flex items-center justify-between text-[8px] text-slate-400 px-1">
                <span>MINUTIES :</span>
                <span className={`font-bold ${isVerified ? 'text-emerald-300' : 'text-cyan-300'}`}>
                  {isVerified ? '48/48 MATCH' : 'SCANNING...'}
                </span>
              </div>
              <div className="text-[8px] text-slate-500 mt-0.5">500 DPI // CAPTEUR OPTIQUE</div>
            </div>

            {/* Label Badge */}
            <div className="absolute bottom-1.5 left-1.5 z-20 font-mono text-[8px] text-slate-200 bg-black/80 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
              <Fingerprint className={`w-2.5 h-2.5 ${isVerified ? 'text-emerald-400' : 'text-cyan-400'}`} />
              <span>EMPREINTE</span>
            </div>
          </div>
        </div>

        {/* 3. Identity & Matching Telemetry Bar */}
        <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 font-mono mb-2.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
            <span>THOMAS MARTINEZ</span>
            <span className={`text-[10px] ${isVerified ? 'text-emerald-400' : 'text-cyan-300 animate-pulse'}`}>
              {isVerified ? '✓ 99.8% MATCH' : `${scanProgress.toFixed(1)}%`}
            </span>
          </div>

          <div className="text-[9px] text-slate-400 leading-tight">
            FULL-STACK & SCRUM MASTER // V.I.E BUCAREST
          </div>

          {/* Biometric Progress Bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-2">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isVerified
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_10px_#10b981]'
                  : 'bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_#00f0ff]'
              }`}
              style={{ width: `${scanProgress}%` }}
            />
          </div>
        </div>

        {/* 4. Portique e-Gate Clearance Banner (Passage du Portique) */}
        <div
          className={`p-2 rounded-xl border font-mono transition-all duration-500 flex items-center justify-between ${
            isVerified
              ? 'bg-emerald-950/70 border-emerald-400/60 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.35)]'
              : 'bg-slate-900/60 border-amber-400/30 text-amber-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {isVerified ? (
              <Unlock className="w-4 h-4 text-emerald-400 animate-bounce" />
            ) : (
              <Lock className="w-4 h-4 text-amber-400" />
            )}
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-wide uppercase">
                {isVerified ? 'PORTIQUE e-GATE 04 : DÉVERROUILLÉ' : 'PORTIQUE e-GATE 04 : EN ATTENTE'}
              </span>
              <span className="text-[8px] text-slate-300">
                {isVerified ? 'PASSAGE AUTORISÉ // FRONTIÈRE SCHENGEN' : 'AUTHENTIFICATION BIOMÉTRIQUE EN COURS...'}
              </span>
            </div>
          </div>

          {isVerified && (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BiometricConsoleHUD;

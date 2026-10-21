import React from 'react';
import { ShieldCheck, CheckCircle2, ScanFace, Activity, Fingerprint, Lock, Unlock } from 'lucide-react';

interface BiometricScanCardProps {
  currentTime: number;
}

export const BiometricScanCard: React.FC<BiometricScanCardProps> = ({ currentTime }) => {
  // Act 3 spans 44.0s to 67.0s
  const isAct3 = currentTime >= 43.5 && currentTime <= 67.5;
  if (!isAct3) return null;

  // Verification threshold at exactly 53.5s
  const isVerified = currentTime >= 53.5;

  // Fade in at start (43.5s - 45.0s) and fade out at end (66.0s - 67.5s)
  let opacity = 1;
  if (currentTime < 45.0) {
    opacity = Math.max(0, (currentTime - 43.5) / 1.5);
  } else if (currentTime > 66.0) {
    opacity = Math.max(0, (67.5 - currentTime) / 1.5);
  }

  // Laser scanning vertical position percentage (oscillates between 10% and 88%)
  const laserPercent = isVerified
    ? 50
    : Math.round((Math.sin(currentTime * 4.5) * 0.5 + 0.5) * 78 + 10);

  // Scanning progress percentage (ramps from 18% to 99% before 53.5s, then solid 99.8%)
  const scanProgress = isVerified
    ? 99.8
    : Math.min(99.4, Math.round(((currentTime - 44.0) / 9.5) * 81 + 18));

  // Biometric landmark facial coordinates calibrated precisely to Thomas studio portrait
  const landmarks = [
    { x: 40.8, y: 43.2, label: 'L_EYE' },
    { x: 68.5, y: 45.6, label: 'R_EYE' },
    { x: 54.7, y: 40.6, label: 'GLABELLA' },
    { x: 56.4, y: 54.5, label: 'NOSE' },
    { x: 45.9, y: 64.8, label: 'L_MOUTH' },
    { x: 62.4, y: 66.4, label: 'R_MOUTH' },
    { x: 55.0, y: 78.5, label: 'CHIN' }
  ];

  return (
    <aside
      className="fixed top-[14%] right-4 md:right-8 z-30 w-[300px] sm:w-[340px] pointer-events-none select-none transition-all duration-300 ease-out"
      style={{ opacity }}
    >
      <div
        className={`relative glass-panel rounded-xl p-4 overflow-hidden backdrop-blur-xl border shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-colors duration-700 ${
          isVerified
            ? 'border-emerald-400/40 bg-slate-950/85'
            : 'border-cyan-400/40 bg-slate-950/85'
        }`}
      >
        {/* Tech Bracket Corners */}
        <div
          className={`absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 transition-colors duration-500 ${
            isVerified ? 'border-emerald-400' : 'border-cyan-400'
          }`}
        />
        <div
          className={`absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 transition-colors duration-500 ${
            isVerified ? 'border-emerald-400' : 'border-cyan-400'
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 transition-colors duration-500 ${
            isVerified ? 'border-emerald-400' : 'border-cyan-400'
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 transition-colors duration-500 ${
            isVerified ? 'border-emerald-400' : 'border-cyan-400'
          }`}
        />

        {/* Top Header & Telemetry Mode */}
        <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <ScanFace
              className={`w-4 h-4 transition-colors duration-500 ${
                isVerified ? 'text-emerald-400 animate-pulse' : 'text-cyan-400 animate-spin'
              }`}
            />
            <span
              className={`font-mono text-[10px] font-bold tracking-wider uppercase transition-colors duration-500 ${
                isVerified ? 'text-emerald-400' : 'text-cyan-400'
              }`}
            >
              CABIS // BIOMETRIC HUD
            </span>
          </div>

          <div
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded font-mono text-[9px] font-semibold tracking-widest uppercase transition-all duration-500 ${
              isVerified
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse'
            }`}
          >
            <Activity className="w-2.5 h-2.5" />
            <span>{isVerified ? 'VERIFIED' : 'SCANNING'}</span>
          </div>
        </div>

        {/* Portrait Viewing Frame with Scanlines & Landmark Mesh */}
        <div className="relative w-full h-[230px] rounded-lg overflow-hidden bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-slate-950 border border-white/10 flex items-center justify-center">
          {/* Subtle CRT / Scanlines Pattern */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-30"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 240, 255, 0.15) 0px, transparent 2px, transparent 4px)',
              backgroundSize: '100% 4px'
            }}
          />

          {/* AI-Extracted Transparent Portrait of Thomas */}
            <img
              src={`${import.meta.env.BASE_URL}assets/images/thomas_studio_portrait.png`}
              alt="Thomas Martinez Biometric Face"
              className={`w-full h-full object-cover object-center pointer-events-none transition-all duration-700 ${
                isVerified ? 'brightness-105 contrast-105' : 'brightness-95 contrast-100'
              }`}
            />

          {/* Dynamic Laser Beam (Moving in scanning phase, glowing locked in verified phase) */}
          <div
            className={`absolute left-0 right-0 z-20 pointer-events-none transition-all duration-100 ${
              isVerified ? 'opacity-70' : 'opacity-90'
            }`}
            style={{ top: `${laserPercent}%` }}
          >
            <div
              className={`h-[2px] w-full ${
                isVerified
                  ? 'bg-emerald-400 shadow-[0_0_12px_#10b981]'
                  : 'bg-cyan-300 shadow-[0_0_10px_#00f0ff]'
              }`}
            />
            <div
              className={`h-4 -mt-2 w-full opacity-30 blur-xs ${
                isVerified ? 'bg-emerald-500' : 'bg-cyan-400'
              }`}
            />
          </div>

          {/* Facial Landmark Points & Polygonal Mesh Overlay */}
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Connecting lines for face geometry */}
            <polygon
              points="41,46 55,32 68,48 64,67 55,80 47,67"
              fill={isVerified ? 'rgba(16, 185, 129, 0.08)' : 'rgba(0, 240, 255, 0.06)'}
              stroke={isVerified ? 'rgba(16, 185, 129, 0.55)' : 'rgba(0, 240, 255, 0.45)'}
              strokeWidth="0.6"
              strokeDasharray={isVerified ? 'none' : '1.5 1.5'}
            />
            {/* Internal triangular bridge */}
            <polyline
              points="41,46 55,57 68,48"
              fill="none"
              stroke={isVerified ? 'rgba(16, 185, 129, 0.5)' : 'rgba(0, 240, 255, 0.4)'}
              strokeWidth="0.5"
            />
            <polyline
              points="47,67 55,57 64,67"
              fill="none"
              stroke={isVerified ? 'rgba(16, 185, 129, 0.5)' : 'rgba(0, 240, 255, 0.4)'}
              strokeWidth="0.5"
            />
            <line
              x1="55"
              y1="57"
              x2="55"
              y2="80"
              stroke={isVerified ? 'rgba(16, 185, 129, 0.5)' : 'rgba(0, 240, 255, 0.4)'}
              strokeWidth="0.5"
            />

            {/* Glowing landmark nodes */}
            {landmarks.map((lm, idx) => (
              <g key={idx}>
                <circle
                  cx={lm.x}
                  cy={lm.y}
                  r="1.2"
                  fill={isVerified ? '#10b981' : '#00f0ff'}
                  className={isVerified ? 'animate-none' : 'animate-ping'}
                  style={{ transformOrigin: `${lm.x}px ${lm.y}px`, animationDuration: '2s' }}
                />
                <circle
                  cx={lm.x}
                  cy={lm.y}
                  r="0.75"
                  fill="#ffffff"
                />
              </g>
            ))}
          </svg>

          {/* In-Frame Corner Reticles */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/40" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/40" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/40" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/40" />

          {/* ICAO Standard Tag */}
          <div className="absolute bottom-1.5 left-2 z-20 font-mono text-[8px] tracking-wider text-slate-400 bg-black/60 px-1 py-0.5 rounded">
            ICAO 9303 // 3D MESH
          </div>
        </div>

        {/* Dynamic Verification Telemetry Box */}
        <div className="mt-2.5 pt-2 border-t border-white/10">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Fingerprint className="w-3 h-3 text-cyan-400" />
              STATUS
            </span>
            <span
              className={`font-mono text-[10px] font-bold tracking-wider transition-colors duration-500 ${
                isVerified ? 'text-emerald-400' : 'text-cyan-300'
              }`}
            >
              {isVerified ? 'MATCH: 99.8%' : `${scanProgress.toFixed(1)}%`}
            </span>
          </div>

          {/* Confidence Progress Bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isVerified
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_8px_#10b981]'
                  : 'bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_#00f0ff]'
              }`}
              style={{ width: `${scanProgress}%` }}
            />
          </div>

          {/* Primary Result Headline */}
          <div
            className={`p-2 rounded-lg border font-mono text-center transition-all duration-500 ${
              isVerified
                ? 'bg-emerald-950/40 border-emerald-400/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-slate-900/60 border-cyan-400/30 text-cyan-200'
            }`}
          >
            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase">
              {isVerified ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>MATCH 99.8% // IDENTITY CONFIRMED</span>
                </>
              ) : (
                <>
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  <span>SCANNING FACIAL MESH...</span>
                </>
              )}
            </div>

            <div className="text-[9px] tracking-wider text-slate-300 mt-0.5 truncate">
              {isVerified
                ? 'ID: MARTINEZ_THOMAS // BUCAREST'
                : 'MATCHING WITH BORDER CONTROL ARCHIVES...'}
            </div>
          </div>

          {/* Gate Access Telemetry Sub-bar */}
          <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 mt-2 px-1">
            <div className="flex items-center gap-1">
              {isVerified ? (
                <Unlock className="w-2.5 h-2.5 text-emerald-400" />
              ) : (
                <Lock className="w-2.5 h-2.5 text-amber-400" />
              )}
              <span>{isVerified ? 'e-GATE 04: PASSENGER CLEARED' : 'e-GATE 04: STANDBY'}</span>
            </div>
            <div className="text-slate-500">CABIS v2.6</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BiometricScanCard;

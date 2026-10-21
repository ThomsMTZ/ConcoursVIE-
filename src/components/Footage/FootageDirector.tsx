import React, { useRef, useEffect, useState } from 'react';
import { STORY_CHAPTERS } from '../../data/storyData';
import { BiometricConsoleHUD } from '../HUD/BiometricConsoleHUD';

interface FootageDirectorProps {
  currentTime: number;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
  onJumpToChapter?: (index: number) => void;
}

export interface ShotDef {
  id: string;
  src: string;
  tStart: number;
  tEnd: number;
  label: string;
  act: number;
}

/**
 * 11 SHOTS ACROSS 4 ACTS (85.00s TOTAL) — PRE-RENDERED MASTER FOOTAGE (ZERO ROLLBACK / ZERO FREEZE)
 * 
 * Act 1: Surveillance Aéronautique AMS (0.00s -> 22.50s)
 * - Shot 1.1 (0.00s - 7.50s): Radar scope 30,000 FT (Fluid continuous motion from frame 0)
 * - Shot 1.2 (7.50s - 15.00s): Real commercial flight through twilight clouds
 * - Shot 1.3 (15.00s - 22.50s): Air traffic software developer console & 3D trajectories
 * 
 * Act 2: Bucarest & Agilité Internationale (22.50s -> 44.50s)
 * - Shot 2.1 (22.50s - 29.50s): Airplane descent over Bucharest (hflip right wing)
 * - Shot 2.2 (29.50s - 37.00s): Real Arcul de Triumf night roundabout timelapse
 * - Shot 2.3 (37.00s - 44.50s): Agile dev team around Bucharest Scrum glassboard
 * 
 * Act 3: Portiques CABIS & Reconnaissance Biométrique (44.50s -> 67.50s)
 * - Shot 3.1 (44.50s - 52.00s): Thomas frontal facial laser scan at biometric e-Gate
 * - Shot 3.2 (52.00s - 59.50s): Biometric e-Gate tempered glass doors sliding open
 * - Shot 3.3 (59.50s - 67.50s): Thomas walking through the opened gate into Schengen
 * - Biometric Console HUD: Thomas photoshoot portrait + 17-point calibrated mesh + fingerprint scanner
 * 
 * Act 4: Rayonnement Pan-Européen & Leadership (67.50s -> 85.00s)
 * - Shot 4.1 (67.50s - 76.00s): NASA ISS view of Europe and Earth at night (0 text)
 * - Shot 4.2 (76.00s - 85.00s): Thomas in tailored suit looking toward runway at sunrise
 */
export const SHOTS: ShotDef[] = [
  // Act 1
  { id: '1_1', src: `${import.meta.env.BASE_URL}assets/videos/act1_radar.mp4`, tStart: 0.0, tEnd: 7.5, label: 'RADAR SURVEILLANCE // 30 000 FT', act: 0 },
  { id: '1_2', src: `${import.meta.env.BASE_URL}assets/videos/act1_real_flight.mp4`, tStart: 7.5, tEnd: 15.0, label: 'COMMERCIAL FLIGHT // CRUISE ALTITUDE', act: 0 },
  { id: '1_3', src: `${import.meta.env.BASE_URL}assets/videos/act1_dev_console.mp4`, tStart: 15.0, tEnd: 22.5, label: 'AIR TRAFFIC DEV CONSOLE // 3D TRAJECTORIES', act: 0 },

  // Act 2
  { id: '2_1', src: `${import.meta.env.BASE_URL}assets/videos/act2_plane_descent.mp4`, tStart: 22.5, tEnd: 29.5, label: 'DESCENT OVER BUCHAREST // GOLDEN HOUR', act: 1 },
  { id: '2_2', src: `${import.meta.env.BASE_URL}assets/videos/act2_real_arcul_de_triumf.mp4`, tStart: 29.5, tEnd: 37.0, label: 'BUCHAREST ARCUL DE TRIUMF // NIGHT TIMELAPSE', act: 1 },
  { id: '2_3', src: `${import.meta.env.BASE_URL}assets/videos/act2_team_agile.mp4`, tStart: 37.0, tEnd: 44.5, label: 'AGILE SPRINT COLLABORATION // BUCHAREST TEAM', act: 1 },

  // Act 3
  { id: '3_1', src: `${import.meta.env.BASE_URL}assets/videos/act3_real_cabis_scan.mp4`, tStart: 44.5, tEnd: 52.0, label: 'BIOMETRIC SCAN // ICAO 9303 MATCHING', act: 2 },
  { id: '3_2', src: `${import.meta.env.BASE_URL}assets/videos/act3_egate_open.mp4`, tStart: 52.0, tEnd: 59.5, label: 'CABIS SMART E-GATE // AUTOMATED CLEARANCE', act: 2 },
  { id: '3_3', src: `${import.meta.env.BASE_URL}assets/videos/act3_thomas_cabis_spy.mp4`, tStart: 59.5, tEnd: 67.5, label: 'SCHENGEN BORDER PASSING // FIELD SUCCESS', act: 2 },

  // Act 4
  { id: '4_1', src: `${import.meta.env.BASE_URL}assets/videos/act4_real_iss_earth.mp4`, tStart: 67.5, tEnd: 76.0, label: 'CONTINENTAL HORIZON // PAN-EUROPEAN REACH', act: 3 },
  { id: '4_2', src: `${import.meta.env.BASE_URL}assets/videos/act4_thomas_future.mp4`, tStart: 76.0, tEnd: 85.0, label: 'FUTURE LEADERSHIP // TRAJECTOIRE V.I.E', act: 3 },
];

export const FootageDirector: React.FC<FootageDirectorProps> = ({ 
  currentTime, 
  isPlaying = true, 
  onTogglePlay, 
  onJumpToChapter 
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 1. Hook up video ready signal and playback trigger
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const params = new URLSearchParams(window.location.search);
    const shouldAutoplay = params.get('autoplay') === '1';

    if (shouldAutoplay && video.paused && isPlaying) {
      video.play().catch(() => {});
    }

    (window as any).startFootagePlayback = () => {
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    (window as any).isMasterVideoReady = () => {
      return video && video.readyState >= 3;
    };

    return () => {
      delete (window as any).startFootagePlayback;
      delete (window as any).isMasterVideoReady;
    };
  }, []);

  // 2. Play / Pause strict synchronization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      if (video.paused) {
        if (Math.abs(video.currentTime - currentTime) > 0.15) {
          video.currentTime = currentTime;
        }
        video.play().catch(() => {});
      }
    } else {
      if (!video.paused) {
        video.pause();
        video.currentTime = currentTime;
      }
    }
  }, [isPlaying]);

  // 3. Video timeline sync: keep video accurately synchronized with audio timeline
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const diff = Math.abs(video.currentTime - currentTime);
    if (!isPlaying) {
      if (diff > 0.04) {
        video.currentTime = currentTime;
      }
    } else {
      if (diff > 0.35) {
        video.currentTime = currentTime;
      }
    }
  }, [currentTime, isPlaying]);

  // Determine active chapter [0, 1, 2, 3]
  let actIndex = 0;
  if (currentTime >= 67.5) actIndex = 3;
  else if (currentTime >= 44.5) actIndex = 2;
  else if (currentTime >= 22.5) actIndex = 1;

  const chapter = STORY_CHAPTERS[actIndex];

  // Current Shot
  const currentShot = SHOTS.find(s => currentTime >= s.tStart && currentTime < s.tEnd) || SHOTS[SHOTS.length - 1];
  const currentShotIndex = SHOTS.findIndex(s => s.id === currentShot.id);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black select-none font-sans">
      {/* 1. MASTER UNIFIED BACKGROUND FOOTAGE (85.0s CONTINUOUS — ZERO BUFFERING / ZERO ROLLBACK) */}
      <div 
        onClick={onTogglePlay}
        className="absolute inset-0 w-full h-full z-0 cursor-pointer"
        title={isPlaying ? "Cliquer sur l'écran pour mettre en pause" : "Cliquer pour reprendre la lecture"}
      >
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}assets/videos/master_footage_85s.mp4`}
          muted
          playsInline
          preload="auto"
          onCanPlay={(e) => {
            const params = new URLSearchParams(window.location.search);
            if (params.get('autoplay') === '1' && e.currentTarget.paused && isPlaying) {
              e.currentTarget.play().catch(() => {});
            }
          }}
          className="w-full h-full object-cover scale-105 pointer-events-none"
        />

        {/* Filmic Vignette & Dynamic Color Grade */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/75 pointer-events-none z-10" />
      </div>

      {/* Center Play Overlay when Paused */}
      {!isPlaying && (
        <div 
          onClick={onTogglePlay}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[2px] cursor-pointer transition-all animate-in fade-in duration-200"
          title="Reprendre la lecture"
        >
          <div className="w-20 h-20 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.6)] transform hover:scale-110 active:scale-95 transition-all">
            <svg className="w-9 h-9 fill-current ml-1" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <div className="mt-4 px-5 py-2 rounded-full bg-slate-950/90 border border-cyan-400/40 text-cyan-300 font-mono text-xs tracking-widest shadow-xl">
            VIDÉO EN PAUSE — CLIQUER OU ESPACE POUR REPRENDRE
          </div>
        </div>
      )}

      {/* 2. TOP TELEMETRY NAVIGATION BAR */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-5 border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="flex flex-col">
            <span className="font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase">Grand Prix V.I.E Roumanie 2026 // Documentary Feature</span>
            <span className="text-xs font-bold text-white tracking-wide">THOMAS MARTINEZ — FULL-STACK & SCRUM MASTER</span>
          </div>
        </div>

        {/* Act Pills - Double-Bezel Segmented Control */}
        <div className="h-8 p-1 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-xl flex items-center gap-1">
          {STORY_CHAPTERS.map((ch, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onJumpToChapter?.(idx)}
              className={`h-6 px-3 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer ${
                actIndex === idx
                  ? 'bg-emerald-400/25 text-emerald-300 font-semibold border border-emerald-400/40 shadow-[0_0_12px_rgba(52,211,153,0.25)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent'
              }`}
            >
              Acte 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Shot Indicator & Spec Badge */}
        <div className="flex items-center gap-2">
          <div className="h-8 px-3 rounded-full bg-slate-900/80 border border-white/10 font-mono text-[10px] text-cyan-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>PLAN {String(currentShotIndex + 1).padStart(2, '0')}/11 : {currentShot.label.split(' // ')[0]}</span>
          </div>
          <div className="h-8 px-3 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-slate-300 flex items-center">
            <span>1080P60 // 0-LOOP</span>
          </div>
        </div>
      </header>

      {/* 3. DYNAMIC HUD TELEMETRY OVERLAY (LEFT) */}
      <div className="absolute left-8 top-28 z-20 max-w-md pointer-events-none">
        <div className="px-4 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md inline-flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase">
            {actIndex === 0 && 'AERONAUTICAL SURVEILLANCE // AMS'}
            {actIndex === 1 && 'BUCHAREST AGILE SPRINT // ROUMANIE'}
            {actIndex === 2 && 'BORDER CONTROL BIOMETRICS // CABIS'}
            {actIndex === 3 && 'PAN-EUROPEAN TRAJECTORY // RAYONNEMENT'}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
          {chapter.title}
        </h2>
        <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">
          {chapter.summary}
        </p>

        {/* Mini Metrics Badges */}
        <div className="flex items-center gap-3 mt-4">
          {actIndex === 0 && (
            <>
              <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <div className="text-sm font-mono font-bold text-cyan-400">30 000 FT</div>
                <div className="text-[9px] font-mono text-slate-400">CROISIÈRE AMS</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <div className="text-sm font-mono font-bold text-white">100k+ VOLS</div>
                <div className="text-[9px] font-mono text-slate-400">HAUTE DISPO</div>
              </div>
            </>
          )}
          {actIndex === 1 && (
            <>
              <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <div className="text-sm font-mono font-bold text-amber-400">+35% VÉLOCITÉ</div>
                <div className="text-[9px] font-mono text-slate-400">SPRINT RECOVERY</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <div className="text-sm font-mono font-bold text-white">12 INGS</div>
                <div className="text-[9px] font-mono text-slate-400">TEAM FR-RO</div>
              </div>
            </>
          )}
          {actIndex === 2 && (
            <>
              <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <div className="text-sm font-mono font-bold text-emerald-400">100% CONFORME</div>
                <div className="text-[9px] font-mono text-slate-400">SCHENGEN E-GATES</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <div className="text-sm font-mono font-bold text-cyan-400">99.4% MATCH</div>
                <div className="text-[9px] font-mono text-slate-400">ICAO 9303</div>
              </div>
            </>
          )}
          {actIndex === 3 && (
            <>
              <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <div className="text-sm font-mono font-bold text-amber-300">14 HUBS</div>
                <div className="text-[9px] font-mono text-slate-400">RÉSEAU EUROPÉEN</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <div className="text-sm font-mono font-bold text-emerald-400">LEADERSHIP</div>
                <div className="text-[9px] font-mono text-slate-400">TRAJECTOIRE V.I.E</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 4. ACT 3 DUAL-BIOMETRICS CONSOLE HUD: STUDIO PORTRAIT + FINGERPRINT SCANNER */}
      <BiometricConsoleHUD currentTime={currentTime} />

      {/* 5. FOOTER SUBTITLES */}
      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl text-center px-6 pointer-events-none">
        <div className="px-6 py-3 rounded-2xl bg-slate-950/85 border border-white/15 backdrop-blur-xl shadow-2xl">
          <p className="text-sm md:text-base font-light text-slate-200 tracking-wide leading-relaxed">
            {chapter.subtitles}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FootageDirector;

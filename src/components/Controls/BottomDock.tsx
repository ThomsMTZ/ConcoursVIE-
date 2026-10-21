import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2,
  Minimize2,
  Download
} from 'lucide-react';
import { STORY_CHAPTERS, TOTAL_DURATION } from '../../data/storyData';

export type ViewMode = 'cinematic' | 'keynote' | 'footage' | 'cockpit';

interface BottomDockProps {
  currentTime: number;
  duration: number;
  progress: number;
  isPlaying: boolean;
  activeChapterIndex: number;
  audioEnabled: boolean;
  viewMode?: ViewMode;
  onTogglePlay: () => void;
  onRestart: () => void;
  onSeek: (time: number) => void;
  onJumpToChapter: (index: number) => void;
  onToggleAudio: () => void;
  onSelectViewMode?: (mode: ViewMode) => void;
}

export const BottomDock: React.FC<BottomDockProps> = ({
  currentTime,
  duration,
  progress,
  isPlaying,
  activeChapterIndex,
  audioEnabled,
  viewMode = 'footage',
  onTogglePlay,
  onRestart,
  onSeek,
  onJumpToChapter,
  onToggleAudio,
  onSelectViewMode
}) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    onSeek(clickRatio * duration);
  };

  return (
    <footer className="bottom-dock-container fixed bottom-0 left-0 w-full z-40 select-none bg-slate-950/90 border-t border-white/10 px-4 md:px-6 py-2.5 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 lg:gap-5 flex-wrap xl:flex-nowrap">
        
        {/* GROUP 1: Primary Playback & Act Switcher */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={onTogglePlay}
            className="h-8 px-3.5 rounded-lg flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs transition-all shadow-[0_0_16px_rgba(0,240,255,0.35)] active:scale-95 cursor-pointer"
            title={isPlaying ? "Mettre en pause (Espace)" : "Lancer la lecture (Espace)"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Lecture</span>
              </>
            )}
          </button>

          {/* Reset Button */}
          <button
            type="button"
            onClick={onRestart}
            className="h-8 px-2.5 rounded-lg flex items-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white font-sans text-xs border border-white/10 transition-all active:scale-95 cursor-pointer"
            title="Recommencer depuis le début (Touche R)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Audio Toggle */}
          <button
            type="button"
            onClick={onToggleAudio}
            className={`h-8 px-2.5 rounded-lg flex items-center gap-1.5 font-sans text-xs border transition-all active:scale-95 cursor-pointer ${
              audioEnabled 
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                : 'bg-white/[0.06] hover:bg-white/[0.12] border-white/10 text-slate-400 hover:text-white'
            }`}
            title="Activer / désactiver la voix-off (Touche M)"
          >
            {audioEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Audio Off</span>
              </>
            )}
          </button>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-white/10 mx-0.5 hidden sm:block" />

          {/* Unified Actes Segmented Control */}
          <div className="h-8 p-0.5 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-0.5">
            {STORY_CHAPTERS.map((ch, idx) => {
              const isActive = idx === activeChapterIndex;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => onJumpToChapter(idx)}
                  className={`h-7 px-2.5 rounded-md font-sans text-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent'
                  }`}
                  title={`Aller à l'Acte 0${ch.id}`}
                >
                  Acte 0{ch.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* GROUP 2: Timeline Progress & Timecode */}
        <div className="w-full xl:w-auto flex-1 flex items-center gap-3 min-w-[220px] max-w-xl order-last xl:order-none">
          <div 
            onClick={handleProgressBarClick}
            className="relative flex-1 h-2 bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 rounded-full cursor-pointer overflow-hidden group transition-all"
            title="Cliquer pour naviguer dans la timeline"
          >
            {/* Fill Bar */}
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 rounded-full transition-all duration-75 relative"
              style={{ width: `${progress * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_#00f0ff] scale-0 group-hover:scale-100 transition-transform" />
            </div>

            {/* Act Milestones */}
            {STORY_CHAPTERS.map((ch, idx) => {
              if (idx === 0) return null;
              const leftPercent = (ch.tStart / TOTAL_DURATION) * 100;
              return (
                <div 
                  key={idx}
                  className="absolute top-0 bottom-0 w-0.5 bg-white/25 pointer-events-none"
                  style={{ left: `${leftPercent}%` }}
                />
              );
            })}
          </div>

          {/* Timecode */}
          <div className="font-mono text-xs text-cyan-400 font-semibold tracking-wider whitespace-nowrap tabular-nums">
            {formatTime(currentTime)} <span className="text-slate-500 font-normal">/ {formatTime(duration)}</span>
          </div>
        </div>

        {/* GROUP 3: View Modes & Action Tools */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Unified View Mode Segmented Control */}
          {onSelectViewMode && (
            <div className="h-8 p-0.5 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-0.5">
              <button
                type="button"
                onClick={() => onSelectViewMode('footage')}
                className={`h-7 px-2.5 rounded-md font-sans text-xs transition-all cursor-pointer ${
                  viewMode === 'footage'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent'
                }`}
                title="Mode Documentaire Vidéo B-Roll"
              >
                Footage
              </button>
              <button
                type="button"
                onClick={() => onSelectViewMode('cinematic')}
                className={`h-7 px-2.5 rounded-md font-sans text-xs transition-all cursor-pointer ${
                  viewMode === 'cinematic'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent'
                }`}
                title="Mode Cinématographique 2.5D"
              >
                Ciné 2.5D
              </button>
              <button
                type="button"
                onClick={() => onSelectViewMode('keynote')}
                className={`h-7 px-2.5 rounded-md font-sans text-xs transition-all cursor-pointer ${
                  viewMode === 'keynote'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent'
                }`}
                title="Mode Apple Keynote"
              >
                Keynote
              </button>
              <button
                type="button"
                onClick={() => onSelectViewMode('cockpit')}
                className={`h-7 px-2 rounded-md font-sans text-xs transition-all cursor-pointer ${
                  viewMode === 'cockpit'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06] border border-transparent'
                }`}
                title="Mode Télémétrie 3D Cockpit"
              >
                V1 HUD
              </button>
            </div>
          )}

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="h-8 px-2.5 rounded-lg flex items-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white font-sans text-xs border border-white/10 transition-all active:scale-95 cursor-pointer"
            title={isFullscreen ? "Quitter le plein écran (Échap ou F11)" : "Plein écran (F11)"}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Fenêtré</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Plein Écran</span>
              </>
            )}
          </button>

          {/* Download Official 1080p60 Video Button */}
          <a
            href={`${import.meta.env.BASE_URL}MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`}
            download="MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"
            className="h-8 px-3 rounded-lg flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-semibold text-xs shadow-[0_0_14px_rgba(16,185,129,0.35)] transition-all active:scale-95 cursor-pointer"
            title="Télécharger la vidéo officielle du concours (1080p 60fps MP4, 85s)"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Télécharger MP4</span>
            <span className="sm:hidden">MP4</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

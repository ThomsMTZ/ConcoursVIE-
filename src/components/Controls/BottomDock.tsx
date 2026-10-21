import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Video, 
  ChevronRight,
  Sparkles
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
  isRecordingMode?: boolean;
  onTogglePlay: () => void;
  onRestart: () => void;
  onSeek: (time: number) => void;
  onJumpToChapter: (index: number) => void;
  onToggleAudio: () => void;
  onStartRecording: () => void;
  onExitRecording?: () => void;
  onSelectViewMode?: (mode: ViewMode) => void;
}

export const BottomDock: React.FC<BottomDockProps> = ({
  currentTime,
  duration,
  progress,
  isPlaying,
  activeChapterIndex,
  audioEnabled,
  viewMode = 'cinematic',
  isRecordingMode = false,
  onTogglePlay,
  onRestart,
  onSeek,
  onJumpToChapter,
  onToggleAudio,
  onStartRecording,
  onExitRecording,
  onSelectViewMode
}) => {
  const [isMouseIdle, setIsMouseIdle] = useState<boolean>(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsMouseIdle(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (isPlaying && isRecordingMode) {
        idleTimerRef.current = setTimeout(() => {
          setIsMouseIdle(true);
        }, 2500);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [isPlaying, isRecordingMode]);

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
    <footer className={`bottom-dock-container fixed bottom-0 left-0 w-full z-40 select-none bg-slate-950/95 border-t border-white/10 px-3 md:px-8 py-3 backdrop-blur-xl transition-all duration-500 ${
      isRecordingMode && isMouseIdle && isPlaying 
        ? 'opacity-0 translate-y-8 pointer-events-none' 
        : 'opacity-100 translate-y-0 pointer-events-auto'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-4">
        
        {/* Main Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          {/* Play/Pause Button */}
          <button
            onClick={onTogglePlay}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs sm:text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.4)] active:scale-95 cursor-pointer"
            title={isPlaying ? "Mettre en pause (Espace)" : "Lancer la lecture (Espace)"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>PAUSE</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>LECTURE</span>
              </>
            )}
          </button>

          {/* Restart Button */}
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs px-3 py-2 rounded-lg border border-white/10 transition-colors cursor-pointer"
            title="Recommencer depuis le début (Touche R)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RESET</span>
          </button>

          {/* Audio Toggle */}
          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-1.5 font-mono text-xs px-3 py-2 rounded-lg border transition-all cursor-pointer ${
              audioEnabled 
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.25)]' 
                : 'bg-slate-800/80 border-white/10 text-slate-400 hover:text-slate-200'
            }`}
            title="Activer / désactiver la voix-off (Touche M)"
          >
            {audioEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span>AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Chapter Selector Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 ml-1 border-l border-white/10 pl-2 sm:pl-3">
            {STORY_CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => onJumpToChapter(idx)}
                className={`text-[11px] font-mono px-2 sm:px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                  idx === activeChapterIndex
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
                title={`Aller à l'Acte 0${ch.id}`}
              >
                Acte 0{ch.id}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Progress Bar & Timecode */}
        <div className="w-full flex-1 flex items-center gap-4 max-w-2xl">
          <div 
            onClick={handleProgressBarClick}
            className="relative flex-1 h-2.5 bg-slate-800/90 hover:bg-slate-800 border border-white/10 rounded-full cursor-pointer overflow-hidden group transition-all"
          >
            {/* Fill Bar */}
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 rounded-full transition-all duration-75 relative"
              style={{ width: `${progress * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_#00f0ff] scale-0 group-hover:scale-100 transition-transform" />
            </div>

            {/* Chapter Milestones Dividers */}
            {STORY_CHAPTERS.map((ch, idx) => {
              if (idx === 0) return null;
              const leftPercent = (ch.tStart / TOTAL_DURATION) * 100;
              return (
                <div 
                  key={idx}
                  className="absolute top-0 bottom-0 w-0.5 bg-white/30 pointer-events-none"
                  style={{ left: `${leftPercent}%` }}
                  title={ch.tag}
                />
              );
            })}
          </div>

          {/* Precise Timecode Clock */}
          <div className="font-mono text-xs md:text-sm text-cyan-400 font-bold tracking-wider whitespace-nowrap min-w-[90px] text-right">
            {formatTime(currentTime)} <span className="text-slate-500 font-normal">/ {formatTime(duration)}</span>
          </div>
        </div>

        {/* View Mode Selector: 3 Directions + Cockpit */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-xl">
          {onSelectViewMode && (
            <>
              <button
                onClick={() => onSelectViewMode('cinematic')}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all ${
                  viewMode === 'cinematic'
                    ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Direction 1 : Film multi-plans avec parallaxe 2.5D, nuages et laser"
              >
                1. CINÉ 2.5D
              </button>
              <button
                onClick={() => onSelectViewMode('keynote')}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all ${
                  viewMode === 'keynote'
                    ? 'bg-emerald-400 text-black font-bold shadow-lg shadow-emerald-400/20'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Direction 2 : Apple Keynote, typographie cinétique et métriques"
              >
                2. KEYNOTE
              </button>
              <button
                onClick={() => onSelectViewMode('footage')}
                className={`px-2.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all ${
                  viewMode === 'footage'
                    ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Direction 3 : Véritables clips vidéo réels (B-Roll documentaire)"
              >
                3. FOOTAGE
              </button>
              <button
                onClick={() => onSelectViewMode('cockpit')}
                className={`px-2 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all ${
                  viewMode === 'cockpit'
                    ? 'bg-sky-500 text-black font-bold shadow-lg shadow-sky-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Version originale V1 Cockpit HUD"
              >
                V1 HUD
              </button>
            </>
          )}

          {isRecordingMode ? (
            <button
              onClick={onExitRecording}
              className="flex items-center gap-1.5 bg-rose-500/20 hover:bg-rose-500/35 text-rose-300 border border-rose-400/50 text-xs font-mono font-semibold px-3 py-2 rounded-lg transition-all shadow-[0_0_12px_rgba(244,63,94,0.3)] cursor-pointer"
              title="Quitter le mode épuré (Touche Échap)"
            >
              <span>✕ QUITTER LE MODE ÉPURÉ (ÉCHAP)</span>
            </button>
          ) : (
            <button
              onClick={onStartRecording}
              className="flex items-center gap-1.5 bg-gradient-to-r from-rose-950/80 to-purple-950/80 hover:from-rose-900 hover:to-purple-900 border border-rose-500/40 text-rose-200 text-xs font-mono font-semibold px-3 py-2 rounded-lg transition-all shadow-[0_0_12px_rgba(244,63,94,0.2)] cursor-pointer"
              title="Passer en vue épurée sans interface (auto-masquage)"
            >
              <Video className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span className="hidden sm:inline">MODE ÉPURÉ</span>
            </button>
          )}
        </div>

      </div>
    </footer>
  );
};

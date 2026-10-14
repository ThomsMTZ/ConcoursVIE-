import React from 'react';
import { ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Chapter } from '../../types/story';

interface HudOverlayProps {
  activeChapter: Chapter;
}

export const HudOverlay: React.FC<HudOverlayProps> = ({ activeChapter }) => {
  return (
    <aside className="fixed top-[14%] left-4 md:left-8 z-30 max-w-[90vw] sm:max-w-[360px] pointer-events-none select-none transition-all duration-500 ease-out">
      <div className="relative glass-panel rounded-xl p-4 md:p-5 overflow-hidden backdrop-blur-xl border border-cyan-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] bg-slate-950/80">
        
        {/* Subtle Tech Corner Marks */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

        {/* Phase Badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-mono text-[10px] tracking-widest text-cyan-400 font-bold uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            {activeChapter.tag}
          </span>
          <div className="font-mono text-[9px] text-slate-400 uppercase flex items-center gap-1">
            <Terminal className="w-2.5 h-2.5 text-cyan-400" />
            <span>LIVE_TELEMETRY</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200 leading-snug mb-2">
          {activeChapter.title}
        </h1>

        {/* Summary */}
        <p className="text-[11px] sm:text-xs text-slate-300 font-sans leading-relaxed mb-3">
          {activeChapter.summary}
        </p>

        {/* Compact Metrics Row */}
        <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-white/10">
          {activeChapter.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/70 border border-slate-800 rounded-lg p-2"
            >
              <div className="flex items-center gap-1 mb-0.5">
                {idx === 0 ? (
                  <Layers className="w-3 h-3 text-cyan-400" />
                ) : (
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                )}
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider truncate">
                  {metric.label}
                </span>
              </div>
              <div className="font-mono text-xs font-bold text-emerald-400 tracking-wide truncate">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

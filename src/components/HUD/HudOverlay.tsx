import React from 'react';
import { Cpu, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Chapter } from '../../types/story';

interface HudOverlayProps {
  activeChapter: Chapter;
}

export const HudOverlay: React.FC<HudOverlayProps> = ({ activeChapter }) => {
  return (
    <aside className="fixed top-[18%] md:top-[22%] left-4 md:left-12 z-30 max-w-[92vw] sm:max-w-[460px] md:max-w-[500px] pointer-events-none select-none transition-all duration-700 ease-out">
      <div className="relative glass-panel rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-xl border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        
        {/* Futuristic Corner Tech Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

        {/* Phase Badge & Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-[11px] md:text-xs tracking-widest text-cyan-400 font-bold uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
            {activeChapter.tag}
          </span>
          <div className="font-mono text-[10px] text-slate-500 uppercase flex items-center gap-1">
            <Terminal className="w-3 h-3 text-cyan-400/70" />
            <span>LIVE_FEED</span>
          </div>
        </div>

        {/* Act Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200 leading-tight mb-3">
          {activeChapter.title}
        </h1>

        {/* Summary Description */}
        <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed mb-5">
          {activeChapter.summary}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
          {activeChapter.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 rounded-xl p-3 transition-colors duration-300"
            >
              <div className="flex items-center gap-1.5 mb-1">
                {idx === 0 ? (
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                )}
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wide">
                {metric.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

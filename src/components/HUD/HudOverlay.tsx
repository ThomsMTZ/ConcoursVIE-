import React from 'react';
import { ShieldCheck, Terminal, Layers, Radio } from 'lucide-react';
import { Chapter } from '../../types/story';

interface HudOverlayProps {
  activeChapter: Chapter;
}

export const HudOverlay: React.FC<HudOverlayProps> = ({ activeChapter }) => {
  return (
    <aside className="fixed top-[13%] left-4 md:left-8 z-30 w-[420px] max-w-[92vw] pointer-events-none select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* DOUBLE-BEZEL ARCHITECTURE (Awwwards-Tier Outer Hardware Shell) */}
      <div className="relative p-2 rounded-[2rem] bg-white/[0.04] border border-white/10 ring-1 ring-white/5 backdrop-blur-3xl shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
        
        {/* INNER CORE CONTAINER */}
        <div className="relative p-5 md:p-6 rounded-[calc(2rem-0.5rem)] bg-slate-950/90 border border-cyan-500/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
          
          {/* Subtle Tech Corner Brackets */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />

          {/* Phase Badge & Telemetry Indicator */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-300 font-semibold uppercase">
                {activeChapter.tag}
              </span>
            </div>
            <div className="font-mono text-[9px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>LIVE_HUD</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200 tracking-tight leading-snug mb-2.5">
            {activeChapter.title}
          </h1>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-slate-300/90 font-sans leading-relaxed mb-4">
            {activeChapter.summary}
          </p>

          {/* Enhanced Metrics Row */}
          <div className="grid grid-cols-2 gap-2.5 pt-3.5 border-t border-white/10">
            {activeChapter.metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-3 shadow-inner"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {idx === 0 ? (
                    <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  ) : (
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  )}
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate">
                    {metric.label}
                  </span>
                </div>
                <div className="font-mono text-sm font-black text-emerald-400 tracking-wide truncate">
                  {metric.value}
                </div>
                <div className="text-[10px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </aside>
  );
};

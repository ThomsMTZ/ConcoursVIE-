import React from 'react';
import { Radio, ShieldCheck, Layers, Activity, Award, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { Chapter } from '../../types/story';
import { STORY_CHAPTERS, TOTAL_DURATION, CANDIDATE_INFO } from '../../data/storyData';

interface EditorialSidebarProps {
  activeChapter: Chapter;
  activeChapterIndex: number;
  currentTime: number;
  duration: number;
}

export const EditorialSidebar: React.FC<EditorialSidebarProps> = ({
  activeChapter,
  activeChapterIndex,
  currentTime,
  duration
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <aside className="relative w-full h-full flex flex-col justify-between p-6 lg:p-8 xl:p-10 bg-[#030712] border-r border-white/10 select-none overflow-y-auto">
      {/* 1. TOP HEADER & IDENTITY */}
      <div className="space-y-6">
        {/* Candidate & Contest Eyebrow */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300 font-bold uppercase">
              {CANDIDATE_INFO.contest}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 font-mono text-[9px] tracking-widest uppercase">
            <Radio className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
            <span>LIVE_STREAM // 60FPS</span>
          </div>
        </div>

        {/* Candidate Name & Title */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              CANDIDAT OFFICIEL
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-white uppercase">
            {CANDIDATE_INFO.name}
          </h1>
          <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
            {CANDIDATE_INFO.role} — {CANDIDATE_INFO.location}
          </p>
        </div>

        {/* 2. CHAPTER PROGRESS PILLS */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {STORY_CHAPTERS.map((ch, idx) => {
            const isActive = idx === activeChapterIndex;
            const isPassed = currentTime >= ch.tEnd;
            return (
              <div
                key={ch.id}
                className={`relative p-2 rounded-xl border transition-all duration-500 ${
                  isActive
                    ? 'bg-cyan-950/40 border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                    : isPassed
                    ? 'bg-slate-900/60 border-slate-700/40 text-slate-400'
                    : 'bg-slate-950/40 border-white/5 text-slate-600'
                }`}
              >
                <div className="font-mono text-[9px] font-bold tracking-wider uppercase mb-1">
                  ACTE 0{ch.id}
                </div>
                <div className="text-[10px] font-semibold text-white truncate">
                  {ch.id === 1 ? 'AMS 30k FT' : ch.id === 2 ? 'BUCAREST' : ch.id === 3 ? 'CABIS GATE' : 'RAYONNEMENT'}
                </div>
                {/* Micro progress line */}
                <div className="mt-1.5 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isActive ? 'bg-cyan-400 shadow-[0_0_8px_#00f0ff]' : isPassed ? 'bg-emerald-400' : 'bg-transparent'
                    }`}
                    style={{
                      width: isActive
                        ? `${Math.min(100, Math.max(0, ((currentTime - ch.tStart) / (ch.tEnd - ch.tStart)) * 100))}%`
                        : isPassed
                        ? '100%'
                        : '0%'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. ACTIVE CHAPTER TITLE & SUMMARY (Double-Bezel Design) */}
        <div className="relative p-2 rounded-[1.75rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 backdrop-blur-2xl">
          <div className="p-5 rounded-[calc(1.75rem-0.5rem)] bg-slate-950/80 border border-cyan-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 font-mono text-[9px] tracking-widest text-cyan-300 uppercase mb-2">
              <Zap className="w-2.5 h-2.5 text-cyan-400" />
              <span>{activeChapter.tag}</span>
            </div>
            <h2 className="text-lg lg:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200 tracking-tight leading-snug mb-2">
              {activeChapter.title}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {activeChapter.summary}
            </p>
          </div>
        </div>

        {/* 4. DYNAMIC METRICS GRID */}
        <div className="grid grid-cols-2 gap-3">
          {activeChapter.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 shadow-inner"
            >
              <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                {idx === 0 ? (
                  <Layers className="w-3 h-3 text-cyan-400" />
                ) : (
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                )}
                <span className="font-mono text-[9px] uppercase tracking-wider truncate">
                  {metric.label}
                </span>
              </div>
              <div className="font-mono text-sm font-black text-emerald-400 tracking-wide truncate">
                {metric.value}
              </div>
              <div className="text-[10px] text-slate-400 leading-tight mt-0.5 truncate">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 5. DYNAMIC AUDIO WAVEFORM VISUALIZER */}
        <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[9px] tracking-wider text-slate-400 uppercase flex items-center gap-1">
              <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
              FLUX VOCAL TEMPS RÉEL
            </span>
            <span className="font-mono text-[9px] text-emerald-400 font-bold">
              AUDIO STREAM ACTIVE
            </span>
          </div>
          {/* Animated SVG Equalizer Bars */}
          <div className="flex items-end justify-between h-7 gap-1">
            {Array.from({ length: 32 }).map((_, i) => {
              const h = Math.max(15, Math.sin(currentTime * 8 + i * 0.4) * 80 + 20);
              return (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-cyan-600 via-cyan-400 to-emerald-400 rounded-full transition-all duration-75"
                  style={{ height: `${h}%` }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. BOTTOM NARRATIVE SUBTITLES & TIMECODE */}
      <div className="pt-6 border-t border-white/10 space-y-3">
        {/* Dynamic Subtitles */}
        <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/25 shadow-lg">
          <div className="font-mono text-[9px] text-cyan-400 font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1">
            <span>RÉCIT OFFICIEL</span>
            <ChevronRight className="w-2.5 h-2.5" />
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-sans italic">
            {activeChapter.subtitles}
          </p>
        </div>

        {/* Timecode & System Status */}
        <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 pt-1">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">{formatTime(currentTime)}</span>
            <span className="text-slate-600">/</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>ICAO 9303 CERTIFIED</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default EditorialSidebar;

import React from 'react';
import { Plane, Compass, MapPin, Activity, Award } from 'lucide-react';
import { Chapter } from '../../types/story';
import { CANDIDATE_INFO } from '../../data/storyData';

interface HeaderNavProps {
  activeChapter: Chapter;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activeChapter }) => {
  return (
    <header className="header-nav-container fixed top-0 left-0 w-full z-40 pointer-events-none select-none px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent backdrop-blur-md">
      {/* Brand & Identity */}
      <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]" />
        <div>
          <div className="font-mono text-xs md:text-sm tracking-widest uppercase font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
            {CANDIDATE_INFO.name}
          </div>
          <div className="text-[10px] md:text-xs text-slate-400 font-mono tracking-wider">
            {CANDIDATE_INFO.role}
          </div>
        </div>
      </div>

      {/* Telemetry Chips */}
      <div className="flex items-center gap-4 md:gap-8 font-mono text-[11px] md:text-xs">
        {/* Altitude */}
        <div className="flex items-center gap-2 bg-slate-900/60 border border-white/10 px-3 py-1.5 rounded-md">
          <Plane className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-400">ALTITUDE:</span>
          <span className="text-white font-bold tracking-wider">{activeChapter.altitude}</span>
        </div>

        {/* Current Active System */}
        <div className="flex items-center gap-2 bg-slate-900/60 border border-white/10 px-3 py-1.5 rounded-md">
          <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
          <span className="text-slate-400">SYSTÈME:</span>
          <span className="text-emerald-400 font-bold tracking-wider">{activeChapter.system}</span>
        </div>

        {/* Location & Coordinates */}
        <div className="hidden lg:flex items-center gap-2 bg-slate-900/60 border border-white/10 px-3 py-1.5 rounded-md">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-400">COORD:</span>
          <span className="text-white font-mono">{CANDIDATE_INFO.coordinates} (BUCAREST)</span>
        </div>

        {/* Official Contest Tag */}
        <div className="hidden sm:flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-md text-cyan-300">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-semibold tracking-wider text-[10px]">{CANDIDATE_INFO.contest}</span>
        </div>
      </div>
    </header>
  );
};

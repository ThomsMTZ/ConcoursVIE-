import React from 'react';
import { Quote } from 'lucide-react';

interface CinemaSubtitlesProps {
  text: string;
}

export const CinemaSubtitles: React.FC<CinemaSubtitlesProps> = ({ text }) => {
  const formatSubtitles = (raw: string) => {
    const keywords = [
      'AMS',
      'Bucarest',
      'CABIS',
      'Full-Stack',
      'Scrum Master',
      'trajectoire',
      'Roumanie',
      'portiques',
      'biométrique',
      'biométriques',
      'excellence',
      'savoir-faire',
      'mai 2025',
      'mars 2026',
      'V.I.E'
    ];

    let processed = raw;
    keywords.forEach(kw => {
      const reg = new RegExp(`(${kw})`, 'gi');
      processed = processed.replace(reg, '<span class="text-cyan-300 font-semibold border-b border-cyan-400/40">$1</span>');
    });

    return { __html: processed };
  };

  return (
    <div className="fixed bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-30 w-[94vw] max-w-4xl pointer-events-none select-none transition-all duration-500 ease-out">
      {/* Outer Machined Glass Shell (Double-Bezel) */}
      <div className="p-1.5 rounded-[1.75rem] bg-white/[0.04] border border-white/10 ring-1 ring-white/5 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
        {/* Inner Core Container */}
        <div className="px-6 py-3.5 md:px-8 md:py-4 rounded-[calc(1.75rem-0.375rem)] bg-slate-950/90 border border-cyan-500/20 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1.5 opacity-80">
            <Quote className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-cyan-300 uppercase font-semibold">
              RÉCIT & TÉMOIGNAGE DU CANDIDAT V.I.E
            </span>
          </div>
          <p 
            className="text-xs sm:text-sm md:text-[15px] text-slate-100 font-sans font-medium leading-relaxed drop-shadow"
            dangerouslySetInnerHTML={formatSubtitles(text)}
          />
        </div>
      </div>
    </div>
  );
};

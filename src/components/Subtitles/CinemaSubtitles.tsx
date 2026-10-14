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
      'savoir-faire français',
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
    <div className="fixed bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-30 w-[92vw] max-w-3xl pointer-events-none select-none transition-all duration-300">
      <div className="bg-slate-950/85 border border-white/15 rounded-xl px-5 py-3 md:px-6 md:py-3.5 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.85)] text-center">
        <div className="flex items-center justify-center gap-1.5 mb-1 opacity-70">
          <Quote className="w-3 h-3 text-cyan-400" />
          <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase">
            RÉCIT & TÉMOIGNAGE V.I.E
          </span>
        </div>
        <p 
          className="text-xs sm:text-sm md:text-base text-slate-100 font-sans font-medium leading-relaxed drop-shadow"
          dangerouslySetInnerHTML={formatSubtitles(text)}
        />
      </div>
    </div>
  );
};

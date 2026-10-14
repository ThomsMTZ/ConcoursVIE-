import React from 'react';
import { Quote } from 'lucide-react';

interface CinemaSubtitlesProps {
  text: string;
}

export const CinemaSubtitles: React.FC<CinemaSubtitlesProps> = ({ text }) => {
  // Highlight important keywords for a striking documentary effect
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
      processed = processed.replace(reg, '<span class="text-cyan-300 font-semibold border-b border-cyan-400/50">$1</span>');
    });

    return { __html: processed };
  };

  return (
    <div className="fixed bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-30 w-[92vw] max-w-4xl pointer-events-none select-none transition-all duration-500 ease-out">
      <div className="bg-slate-950/85 border border-white/15 rounded-xl px-6 py-4 md:px-8 md:py-5 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.85)] text-center">
        <div className="flex items-center justify-center gap-2 mb-1.5 opacity-60">
          <Quote className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            RÉCIT & TÉMOIGNAGE V.I.E
          </span>
        </div>
        <p 
          className="text-sm sm:text-base md:text-lg text-slate-100 font-sans font-medium leading-relaxed drop-shadow-md"
          dangerouslySetInnerHTML={formatSubtitles(text)}
        />
      </div>
    </div>
  );
};

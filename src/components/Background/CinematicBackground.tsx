import React from 'react';
import { STORY_CHAPTERS, TOTAL_DURATION } from '../../data/storyData';

interface CinematicBackgroundProps {
  currentTime: number;
}

const ACT_IMAGES = [
  '/assets/images/act1_airplane.jpg',
  '/assets/images/act2_bucarest.jpg',
  '/assets/images/act3_cabis_terminal.jpg',
  '/assets/images/act4_radiance.jpg'
];

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({ currentTime }) => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none bg-slate-950">
      {ACT_IMAGES.map((imgSrc, index) => {
        const chapter = STORY_CHAPTERS[index];
        const { tStart, tEnd } = chapter;
        const duration = tEnd - tStart;

        // Compute opacity for smooth crossfades
        const fadeDuration = 1.6; // 1.6s smooth transition
        let opacity = 0;
        let progressInAct = 0;

        if (currentTime >= tStart && currentTime <= tEnd) {
          progressInAct = (currentTime - tStart) / duration;
          // Fade in at start
          if (currentTime - tStart < fadeDuration && index !== 0) {
            opacity = (currentTime - tStart) / fadeDuration;
          } else if (tEnd - currentTime < fadeDuration && index !== ACT_IMAGES.length - 1) {
            // Fade out at end
            opacity = (tEnd - currentTime) / fadeDuration;
          } else {
            opacity = 1;
          }
        } else if (currentTime < tStart && currentTime > tStart - fadeDuration && index !== 0) {
          opacity = (currentTime - (tStart - fadeDuration)) / fadeDuration;
        }

        // Ken Burns effect: subtle slow zoom from 1.0 to 1.07 and gentle panning
        const scale = 1.0 + progressInAct * 0.08;
        const translateX = (index % 2 === 0 ? 1 : -1) * progressInAct * 1.5;
        const translateY = progressInAct * -1.0;

        return (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-linear"
            style={{ opacity: Math.max(0, Math.min(1, opacity)) }}
          >
            <img
              src={imgSrc}
              alt={chapter.title}
              className="w-full h-full object-cover will-change-transform"
              style={{
                transform: `scale(${scale}) translate(${translateX}%, ${translateY}%)`,
                transformOrigin: index % 2 === 0 ? 'center center' : '60% 40%'
              }}
            />
          </div>
        );
      })}

      {/* Cinematic Dark Vignette & Atmospheric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,18,0.75)_100%)] pointer-events-none" />
    </div>
  );
};

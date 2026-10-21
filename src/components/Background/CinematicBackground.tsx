import React from 'react';
import { STORY_CHAPTERS, TOTAL_DURATION } from '../../data/storyData';

interface CinematicBackgroundProps {
  currentTime: number;
  className?: string;
}

const ACT_IMAGES = [
  `${import.meta.env.BASE_URL}assets/images/act1_airplane.jpg`,
  `${import.meta.env.BASE_URL}assets/images/act2_plane_landing_bucharest.jpg`,
  `${import.meta.env.BASE_URL}assets/images/act3_cabis_thomas_gate.jpg`,
  `${import.meta.env.BASE_URL}assets/images/act4_radiance.jpg`
];

const FADE_DURATION = 1.6; // 1.6s broadcast-standard crossfade

/**
 * Hermite smoothstep interpolation: S(t) = 3t^2 - 2t^3
 * Ensures C1 continuous transitions with zero derivative at boundaries.
 */
function smoothstep(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * clamped * (3 - 2 * clamped);
}

/**
 * Computes continuous opacity for act `index` at time `t`.
 * Eliminates the 22s/44s/67s rollback and flash to black.
 */
function computeActOpacity(index: number, currentTime: number): number {
  const chapter = STORY_CHAPTERS[index];
  const { tStart, tEnd } = chapter;
  const isFirstAct = index === 0;
  const isLastAct = index === ACT_IMAGES.length - 1;

  // 1. Outside visibility envelope
  const visStart = isFirstAct ? 0 : tStart - FADE_DURATION;
  const visEnd = isLastAct ? TOTAL_DURATION : tEnd;

  if (currentTime < visStart || currentTime > visEnd) {
    return 0;
  }

  // 2. Act 1 (First Act): begins fully opaque at t = 0
  if (isFirstAct) {
    if (currentTime > tEnd - FADE_DURATION) {
      // Smooth fade-out before Act 2
      const tau = (tEnd - currentTime) / FADE_DURATION;
      return smoothstep(tau);
    }
    return 1;
  }

  // 3. Act 4 (Last Act): reaches 1.0 at tStart and stays until TOTAL_DURATION
  if (isLastAct) {
    if (currentTime < tStart) {
      // Smooth fade-in during pre-transition
      const tau = (currentTime - (tStart - FADE_DURATION)) / FADE_DURATION;
      return smoothstep(tau);
    }
    return 1;
  }

  // 4. Intermediate Acts (Act 2 & Act 3):
  // Pre-transition fade-in: [tStart - FADE_DURATION, tStart]
  if (currentTime < tStart) {
    const tau = (currentTime - (tStart - FADE_DURATION)) / FADE_DURATION;
    return smoothstep(tau);
  }

  // Post-transition fade-out: [tEnd - FADE_DURATION, tEnd]
  if (currentTime > tEnd - FADE_DURATION) {
    const tau = (tEnd - currentTime) / FADE_DURATION;
    return smoothstep(tau);
  }

  // Core plateau: fully visible
  return 1;
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({ 
  currentTime,
  className = "fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none bg-slate-950"
}) => {
  return (
    <div className={className}>
      {ACT_IMAGES.map((imgSrc, index) => {
        const chapter = STORY_CHAPTERS[index];
        const { tStart, tEnd } = chapter;
        const isFirstAct = index === 0;
        const isLastAct = index === ACT_IMAGES.length - 1;

        // Continuous Opacity Calculation
        const opacity = computeActOpacity(index, currentTime);

        // Continuous Ken Burns Progress across full visible envelope
        const visStart = isFirstAct ? 0 : tStart - FADE_DURATION;
        const visEnd = isLastAct ? TOTAL_DURATION : tEnd;
        const visDuration = Math.max(0.1, visEnd - visStart);
        const motionProgress = Math.max(0, Math.min(1, (currentTime - visStart) / visDuration));

        // Ken Burns Transform: subtle slow zoom from 1.0 to 1.08 with gentle directional panning
        const scale = 1.0 + motionProgress * 0.08;
        const translateX = (index % 2 === 0 ? 1 : -1) * motionProgress * 1.5;
        const translateY = motionProgress * -1.0;

        // Skip rendering invisible layers completely for GPU rasterization optimization
        const isVisible = opacity > 0.0001;

        return (
          <div
            key={index}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity,
              display: isVisible ? 'block' : 'none',
              zIndex: index + 1
            }}
          >
            <img
              src={imgSrc}
              alt={chapter.title}
              className="w-full h-full object-cover will-change-transform"
              style={{
                transform: `scale(${scale.toFixed(5)}) translate(${translateX.toFixed(4)}%, ${translateY.toFixed(4)}%)`,
                transformOrigin: index % 2 === 0 ? 'center center' : '60% 40%'
              }}
            />
          </div>
        );
      })}

      {/* Cinematic Dark Vignette & Atmospheric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/70 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,18,0.75)_100%)] pointer-events-none z-10" />
    </div>
  );
};

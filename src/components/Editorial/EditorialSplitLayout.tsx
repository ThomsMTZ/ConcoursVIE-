import React from 'react';
import { EditorialSidebar } from './EditorialSidebar';
import { ThreeSceneV2 } from '../Canvas/ThreeSceneV2';
import { CinematicBackground } from '../Background/CinematicBackground';
import { Chapter } from '../../types/story';

interface EditorialSplitLayoutProps {
  activeChapter: Chapter;
  activeChapterIndex: number;
  currentTime: number;
  duration: number;
}

export const EditorialSplitLayout: React.FC<EditorialSplitLayoutProps> = ({
  activeChapter,
  activeChapterIndex,
  currentTime,
  duration
}) => {
  return (
    <div className="relative w-screen h-screen flex flex-col md:flex-row overflow-hidden bg-slate-950">
      {/* LEFT COLUMN: 40% Editorial Bento Sidebar */}
      <div className="w-full md:w-[42%] lg:w-[38%] xl:w-[36%] h-full z-20 flex-shrink-0 shadow-2xl">
        <EditorialSidebar
          activeChapter={activeChapter}
          activeChapterIndex={activeChapterIndex}
          currentTime={currentTime}
          duration={duration}
        />
      </div>

      {/* RIGHT COLUMN: 60% Cinematic Textured Viewport + WebGL Overlay */}
      <div className="relative w-full md:w-[58%] lg:w-[62%] xl:w-[64%] h-full z-10 overflow-hidden bg-slate-950">
        {/* 1. Photorealistic 4K Textured Cinematic Background with Ken Burns Motion & Smoothstep Crossfades */}
        <CinematicBackground
          currentTime={currentTime}
          className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none bg-slate-950"
        />

        {/* 2. Transparent WebGL Holographic Telemetry & Effects Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <ThreeSceneV2 currentTime={currentTime} />
        </div>

        {/* Top-Right Telemetry Watermark */}
        <div className="absolute top-6 right-6 z-20 pointer-events-none select-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-xl font-mono text-[9px] tracking-widest text-slate-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>CINEMATIC 4K // WEBGL TELEMETRY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialSplitLayout;

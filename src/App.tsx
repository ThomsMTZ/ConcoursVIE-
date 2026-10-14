import React, { useEffect } from 'react';
import { useTimeline } from './hooks/useTimeline';
import { CinematicBackground } from './components/Background/CinematicBackground';
import { ThreeScene } from './components/Canvas/ThreeScene';
import { HeaderNav } from './components/Navigation/HeaderNav';
import { HudOverlay } from './components/HUD/HudOverlay';
import { CinemaSubtitles } from './components/Subtitles/CinemaSubtitles';
import { BottomDock } from './components/Controls/BottomDock';

export const App: React.FC = () => {
  const {
    currentTime,
    duration,
    progress,
    isPlaying,
    activeChapter,
    activeChapterIndex,
    audioEnabled,
    togglePlay,
    restart,
    seekTo,
    jumpToChapter,
    toggleAudio,
    startRecordingMode
  } = useTimeline();

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'r' || e.key === 'R') {
        restart();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleAudio();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        jumpToChapter(parseInt(e.key, 10) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, restart, toggleAudio, jumpToChapter]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans">
      {/* 1. Photorealistic 16:9 Cinematic Background with Smooth Ken Burns Motion */}
      <CinematicBackground currentTime={currentTime} />

      {/* 2. 3D WebGL Holographic Telemetry Overlay */}
      <ThreeScene progress={progress} currentTime={currentTime} />

      {/* 3. Top Aerospace Telemetry Navigation */}
      <HeaderNav activeChapter={activeChapter} />

      {/* 4. Sleek Aerospace HUD Information Overlay */}
      <HudOverlay activeChapter={activeChapter} />

      {/* 5. Bottom Center Dynamic Cinematic Subtitles */}
      <CinemaSubtitles text={activeChapter.subtitles} />

      {/* 6. Floating Control Dock */}
      <BottomDock
        currentTime={currentTime}
        duration={duration}
        progress={progress}
        isPlaying={isPlaying}
        activeChapterIndex={activeChapterIndex}
        audioEnabled={audioEnabled}
        onTogglePlay={togglePlay}
        onRestart={restart}
        onSeek={seekTo}
        onJumpToChapter={jumpToChapter}
        onToggleAudio={toggleAudio}
        onStartRecording={startRecordingMode}
      />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { useTimeline } from './hooks/useTimeline';
import { CinematicBackground } from './components/Background/CinematicBackground';
import { ThreeScene } from './components/Canvas/ThreeScene';
import { EditorialSplitLayout } from './components/Editorial/EditorialSplitLayout';
import { CinematicParallaxDirector } from './components/Cinematic/CinematicParallaxDirector';
import { AppleKeynoteDirector } from './components/Keynote/AppleKeynoteDirector';
import { FootageDirector } from './components/Footage/FootageDirector';
import { HeaderNav } from './components/Navigation/HeaderNav';
import { HudOverlay } from './components/HUD/HudOverlay';
import { BiometricScanCard } from './components/HUD/BiometricScanCard';
import { CinemaSubtitles } from './components/Subtitles/CinemaSubtitles';
import { BottomDock, ViewMode } from './components/Controls/BottomDock';

export const App: React.FC = () => {
  const {
    currentTime,
    duration,
    progress,
    isPlaying,
    activeChapter,
    activeChapterIndex,
    audioEnabled,
    isRecordingMode,
    togglePlay,
    restart,
    seekTo,
    jumpToChapter,
    toggleAudio,
    startRecordingMode,
    exitRecordingMode
  } = useTimeline();

  // View Mode: 'cinematic' | 'keynote' | 'footage' | 'cockpit'
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get('view');
    if (v === 'keynote') return 'keynote';
    if (v === 'footage') return 'footage';
    if (v === 'cockpit') return 'cockpit';
    if (v === 'editorial') return 'cinematic';
    if (v === 'cinematic') return 'cinematic';
    return 'footage'; // Flagship B-roll Documentary by default
  });

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
      } else if (e.key === '1') {
        setViewMode('cinematic');
      } else if (e.key === '2') {
        setViewMode('keynote');
      } else if (e.key === '3') {
        setViewMode('footage');
      } else if (e.key === '4') {
        setViewMode('cockpit');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, restart, toggleAudio]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans">
      {/* =========================================================================
          DIRECTION 1: CINEMATIC MULTI-SHOT PARALLAX FILM
          ========================================================================= */}
      {viewMode === 'cinematic' && (
        <>
          <CinematicParallaxDirector currentTime={currentTime} />
          <HeaderNav activeChapter={activeChapter} />
          <CinemaSubtitles text={activeChapter.subtitles} />
        </>
      )}

      {/* =========================================================================
          DIRECTION 2: APPLE KEYNOTE & KINETIC MOTION DESIGN
          ========================================================================= */}
      {viewMode === 'keynote' && (
        <AppleKeynoteDirector currentTime={currentTime} onJumpToChapter={jumpToChapter} />
      )}

      {/* =========================================================================
          DIRECTION 3: REAL VIDEO FOOTAGE (B-ROLL) DOCUMENTARY
          ========================================================================= */}
      {viewMode === 'footage' && (
        <FootageDirector 
          currentTime={currentTime} 
          isPlaying={isPlaying}
          onTogglePlay={togglePlay}
          onJumpToChapter={jumpToChapter} 
        />
      )}

      {/* =========================================================================
          ORIGINAL: HIGH-PRECISION AVIONICS COCKPIT & AEROSPACE HUD
          ========================================================================= */}
      {viewMode === 'cockpit' && (
        <>
          <CinematicBackground currentTime={currentTime} />
          <ThreeScene progress={progress} currentTime={currentTime} />
          <HeaderNav activeChapter={activeChapter} />
          <HudOverlay activeChapter={activeChapter} />
          <BiometricScanCard currentTime={currentTime} />
          <CinemaSubtitles text={activeChapter.subtitles} />
        </>
      )}

      {/* Floating Control Dock with 4-Mode Switcher */}
      <BottomDock
        currentTime={currentTime}
        duration={duration}
        progress={progress}
        isPlaying={isPlaying}
        activeChapterIndex={activeChapterIndex}
        audioEnabled={audioEnabled}
        viewMode={viewMode}
        isRecordingMode={isRecordingMode}
        onTogglePlay={togglePlay}
        onRestart={restart}
        onSeek={seekTo}
        onJumpToChapter={jumpToChapter}
        onToggleAudio={toggleAudio}
        onStartRecording={startRecordingMode}
        onExitRecording={exitRecordingMode}
        onSelectViewMode={(mode) => setViewMode(mode)}
      />
    </div>
  );
};

export default App;

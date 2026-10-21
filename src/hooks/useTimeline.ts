import { useState, useEffect, useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { TOTAL_DURATION, STORY_CHAPTERS } from '../data/storyData';
import { Chapter } from '../types/story';

export interface UseTimelineReturn {
  currentTime: number;
  duration: number;
  progress: number;
  isPlaying: boolean;
  activeChapter: Chapter;
  activeChapterIndex: number;
  audioEnabled: boolean;
  isRecordingMode: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  seekTo: (time: number) => void;
  jumpToChapter: (index: number) => void;
  restart: () => void;
  toggleAudio: () => void;
  startRecordingMode: () => void;
  exitRecordingMode: () => void;
}

export function useTimeline(): UseTimelineReturn {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [isRecordingMode, setIsRecordingMode] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastTickRef = useRef<number>(performance.now());
  const rafIdRef = useRef<number | null>(null);
  const internalTimeRef = useRef<number>(0);
  const lastAudioSyncRef = useRef<number>(0);

  // =========================================================================
  // 1. DETERMINISTIC SEEK & RENDER API EXPOSURE FOR PLAYWRIGHT
  // =========================================================================
  useEffect(() => {
    // Synchronous deterministic seek function callable by automation scripts
    (window as any).seekTimeline = (t: number) => {
      const clamped = Math.max(0, Math.min(TOTAL_DURATION, t));
      internalTimeRef.current = clamped;

      // Force synchronous React state flush and DOM paint
      flushSync(() => {
        setCurrentTime(clamped);
      });

      if (audioRef.current && Math.abs(audioRef.current.currentTime - clamped) > 0.05) {
        audioRef.current.currentTime = clamped;
      }

      if (typeof (window as any).renderSceneAt === 'function') {
        (window as any).renderSceneAt(clamped);
      }
    };

    (window as any).getTimelineCurrentTime = () => internalTimeRef.current;
    (window as any).TOTAL_DURATION = TOTAL_DURATION;

    (window as any).startTimelinePlayback = () => {
      internalTimeRef.current = 0;
      setCurrentTime(0);
      setIsPlaying(true);
      setAudioEnabled(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    };

    return () => {
      delete (window as any).seekTimeline;
      delete (window as any).getTimelineCurrentTime;
      delete (window as any).TOTAL_DURATION;
      delete (window as any).startTimelinePlayback;
    };
  }, []);

  // =========================================================================
  // 2. AUDIO INITIALIZATION
  // =========================================================================
  useEffect(() => {
    const audioUrl = `${import.meta.env.BASE_URL}assets/voiceover.mp3`;
    const audio = new Audio(audioUrl);
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // =========================================================================
  // 3. RECORDING & AUTOPLAY URL DETECTION
  // =========================================================================
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('record') === '1') {
      setIsRecordingMode(true);
      document.body.classList.add('automated-record');
    }
    if (params.get('autoplay') === '1') {
      setIsPlaying(true);
      setAudioEnabled(true);
    }
  }, []);

  // =========================================================================
  // 4. ACTIVE CHAPTER CALCULATION
  // =========================================================================
  const activeChapterIndex = Math.max(
    0,
    STORY_CHAPTERS.findIndex(c => currentTime >= c.tStart && currentTime < c.tEnd)
  );
  const activeChapter = STORY_CHAPTERS[activeChapterIndex !== -1 ? activeChapterIndex : STORY_CHAPTERS.length - 1];

  // =========================================================================
  // 5. AUDIO PLAYBACK TRIGGER (Decoupled from 60 FPS tick to prevent CPU choke)
  // =========================================================================
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && audioEnabled) {
      if (Math.abs(audio.currentTime - internalTimeRef.current) > 0.25) {
        audio.currentTime = internalTimeRef.current;
      }
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, audioEnabled]); // Note: currentTime REMOVED from dependencies

  // =========================================================================
  // 6. MAIN 60 FPS ANIMATION LOOP (Without 20 FPS throttle)
  // =========================================================================
  useEffect(() => {
    if (!isPlaying) {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      return;
    }

    lastTickRef.current = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTickRef.current) / 1000;
      lastTickRef.current = now;

      // Clamp delta-time to 100ms max to prevent massive jumps on system freeze
      const clampedDt = Math.min(dt, 0.1);
      internalTimeRef.current += clampedDt;

      if (internalTimeRef.current >= TOTAL_DURATION) {
        internalTimeRef.current = TOTAL_DURATION;
        setCurrentTime(TOTAL_DURATION);
        setIsPlaying(false);
        return;
      }

      // Smooth 60 FPS React state dispatch
      setCurrentTime(internalTimeRef.current);

      // Low-frequency audio drift check (every 500ms)
      if (now - lastAudioSyncRef.current > 500) {
        lastAudioSyncRef.current = now;
        const audio = audioRef.current;
        if (audio && audioEnabled && !audio.paused) {
          if (Math.abs(audio.currentTime - internalTimeRef.current) > 0.35) {
            audio.currentTime = internalTimeRef.current;
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isPlaying, audioEnabled]);

  // =========================================================================
  // 7. USER PLAYBACK CONTROLS
  // =========================================================================
  const togglePlay = useCallback(() => {
    setIsPlaying(prev => {
      if (!prev && internalTimeRef.current >= TOTAL_DURATION) {
        internalTimeRef.current = 0;
        setCurrentTime(0);
      }
      return !prev;
    });
  }, []);

  const play = useCallback(() => {
    if (internalTimeRef.current >= TOTAL_DURATION) {
      internalTimeRef.current = 0;
      setCurrentTime(0);
    }
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const seekTo = useCallback((time: number) => {
    const clamped = Math.max(0, Math.min(TOTAL_DURATION, time));
    internalTimeRef.current = clamped;
    setCurrentTime(clamped);
    if (audioRef.current) {
      audioRef.current.currentTime = clamped;
    }
  }, []);

  const jumpToChapter = useCallback((index: number) => {
    const chapter = STORY_CHAPTERS[index];
    if (chapter) {
      seekTo(chapter.tStart);
    }
  }, [seekTo]);

  const restart = useCallback(() => {
    seekTo(0);
    setIsPlaying(true);
  }, [seekTo]);

  const toggleAudio = useCallback(() => {
    setAudioEnabled(prev => !prev);
  }, []);

  const startRecordingMode = useCallback(() => {
    setIsRecordingMode(true);
    document.body.classList.add('recording-mode');
    seekTo(0);
    setIsPlaying(true);
    setAudioEnabled(true);
  }, [seekTo]);

  const exitRecordingMode = useCallback(() => {
    setIsRecordingMode(false);
    document.body.classList.remove('recording-mode');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isRecordingMode) {
        exitRecordingMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRecordingMode, exitRecordingMode]);

  return {
    currentTime,
    duration: TOTAL_DURATION,
    progress: Math.min(1, currentTime / TOTAL_DURATION),
    isPlaying,
    activeChapter,
    activeChapterIndex,
    audioEnabled,
    isRecordingMode,
    togglePlay,
    play,
    pause,
    seekTo,
    jumpToChapter,
    restart,
    toggleAudio,
    startRecordingMode,
    exitRecordingMode
  };
}

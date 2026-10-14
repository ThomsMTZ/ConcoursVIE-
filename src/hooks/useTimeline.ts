import { useState, useEffect, useRef, useCallback } from 'react';
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
  const lastStateUpdateRef = useRef<number>(0);

  // Expose global seek for automated video rendering
  useEffect(() => {
    (window as any).seekTimeline = (t: number) => {
      internalTimeRef.current = Math.max(0, Math.min(TOTAL_DURATION, t));
      setCurrentTime(internalTimeRef.current);
      if (audioRef.current) {
        audioRef.current.currentTime = internalTimeRef.current;
      }
      if ((window as any).renderSceneAt) {
        (window as any).renderSceneAt(internalTimeRef.current);
      }
    };

    return () => {
      delete (window as any).seekTimeline;
    };
  }, []);

  // Initialize Audio element
  useEffect(() => {
    const audio = new Audio('/assets/voiceover.mp3');
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Check URL params for autoplay or recording mode
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autoplay') === '1' || params.get('record') === '1') {
      setIsRecordingMode(true);
      document.body.classList.add('recording-mode');
      setIsPlaying(true);
      setAudioEnabled(true);
    }
  }, []);

  // Compute active chapter
  const activeChapterIndex = Math.max(
    0,
    STORY_CHAPTERS.findIndex(c => currentTime >= c.tStart && currentTime < c.tEnd)
  );
  const activeChapter = STORY_CHAPTERS[activeChapterIndex !== -1 ? activeChapterIndex : STORY_CHAPTERS.length - 1];

  // Control audio playback sync
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && audioEnabled) {
      if (Math.abs(audio.currentTime - currentTime) > 0.35) {
        audio.currentTime = currentTime;
      }
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying, audioEnabled, currentTime]);

  // Main high-precision animation loop with throttled React state dispatch
  useEffect(() => {
    if (!isPlaying) {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      return;
    }

    lastTickRef.current = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTickRef.current) / 1000;
      lastTickRef.current = now;

      internalTimeRef.current += dt;

      if (internalTimeRef.current >= TOTAL_DURATION) {
        internalTimeRef.current = TOTAL_DURATION;
        setCurrentTime(TOTAL_DURATION);
        setIsPlaying(false);
        return;
      }

      // Throttle React state re-renders to ~20 FPS (every 50ms) to ensure smooth 60 FPS WebGL rendering without CPU choke
      if (now - lastStateUpdateRef.current > 50) {
        lastStateUpdateRef.current = now;
        setCurrentTime(internalTimeRef.current);
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isPlaying]);

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
    startRecordingMode
  };
}

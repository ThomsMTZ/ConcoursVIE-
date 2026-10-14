export interface Metric {
  label: string;
  value: string;
  detail: string;
}

export interface Chapter {
  id: number;
  phaseCode: string;
  tStart: number; // in seconds
  tEnd: number;   // in seconds
  altitude: string;
  system: string;
  tag: string;
  title: string;
  summary: string;
  subtitles: string;
  metrics: Metric[];
}

export interface TimelineState {
  currentTime: number;
  duration: number;
  progress: number;
  isPlaying: boolean;
  activeChapterIndex: number;
  audioEnabled: boolean;
}

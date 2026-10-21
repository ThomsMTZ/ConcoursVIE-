# Dispatch for teamwork_preview_explorer_mfinal_3

## Task
Explore and specify the exact implementations for Audio synchronization and Production render:
1. Exact Python script for multi-act `edge-tts` generation with precision padding (1.0s, 23.0s, 45.0s, 68.0s) yielding exactly 85.0s.
2. Mixing of ambient cinematic background music at -20 dB to eliminate 24s silence in Act 4.
3. Production render command and `scripts/render-mp4.js` updates ensuring 1080p 60fps CFR to `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`.
4. Fix for `vite.config.ts` so `emptyOutDir` does not accidentally wipe the rendered MP4.

## Inputs
- ORIGINAL_REQUEST.md: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\ORIGINAL_REQUEST.md
- PROJECT.md: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\PROJECT.md
- Survey 3 Report: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_3\report.md

## Scope
- Read-only investigation and exact code/script recommendations for the Worker.
- Do NOT modify project source files.

## Output Requirements
- Working directory: `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_mfinal_3`
- Write `progress.md`, `report.md`, and `handoff.md`.
- Send message to orchestrator when finished.


## 2026-10-14T11:06:26Z
You are Explorer MFinal 3 for the Grand Prix V.I.E Roumanie 2026 video finalization project.
Working directory: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_mfinal_3
Read your instructions in DISPATCH.md, ORIGINAL_REQUEST.md at c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\ORIGINAL_REQUEST.md, and PROJECT.md at c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\PROJECT.md.

Mission:
Focus on Audio Resynchronization and Production Render:
1. Provide the complete Python script `scripts/generate-voiceover.py`:
   - Synthesizes each of the 4 acts with `edge-tts` ("fr-FR-HenriNeural").
   - Inserts precision silence padding so that:
     - Act 1 starts at 1.0s
     - Act 2 starts at 23.0s
     - Act 3 starts at 45.0s (biometric mention at ~53.5s)
     - Act 4 starts at 68.0s
   - Generates or mixes a subtle cinematic ambient background audio bed at -20 dB to guarantee no dead silence in Act 4 and perfect total duration of 85.00s.
   - Outputs to `public/assets/voiceover.mp3`.
2. Provide the exact updates for `scripts/render-mp4.js` and `vite.config.ts`:
   - FFmpeg 7.1 flags ensuring strict 1080p 60fps CFR: `-vf "fps=60,setpts=N/(60*TB)" -r 60 -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -ar 48000 -t 85 "dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"`.
   - Prevent Vite build from wiping `dist/` if needed, or ensure the build/render command sequence in package.json is bulletproof.

Write report.md, handoff.md, and progress.md in your working directory. Send message to orchestrator when finished.

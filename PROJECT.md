# Project: Grand Prix V.I.E Roumanie 2026 Video Finalization

## Architecture
- **Web App**: React 18, Vite, Three.js, Tailwind CSS. Real-time cinematic presentation with 4 acts (AMS, Bucarest, CABIS, Rayonnement).
- **Background & Motion**: `CinematicBackground.tsx` executing 1.6s continuous crossfade and Ken Burns camera pan/zoom.
- **Biometric Compositing**: Dual-tier compositing:
  1. Micro: Inpainted & warped portrait on physical e-Gate OLED display in `act3_cabis_terminal.jpg`.
  2. Macro: Holographic HUD biometric card (`BiometricScanCard.tsx`) with AI facial extraction (`rembg`), scanlines, landmark mesh, and live validation.
- **Audio & Narration**: Edge-TTS synthesized French voiceover across 4 acts with precision timing padding to 85.0s, accompanied by an ambient cinematic music bed.
- **Render Engine**: Playwright Chrome GPU capturing at 1920x1080 Full HD, transcoded and muxed with FFmpeg 7.1 to 1080p 60fps CFR.
- **Destination**: `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Photo Extraction (Alpha PNG) | AI extraction of Thomas portrait via `rembg` U2-Net (`IMG-20260901-WA0014.jpg` / WA0012) into clean 32-bit transparent PNG | M_FINAL | Survey 2 |
| 2 | Inpainting & Zero-Logo Cleansing | Removal of TAROM logo on airplane in `act3_cabis_terminal.jpg` and polo logo cropping to satisfy zero-logo rule | M_FINAL | Survey 3 |
| 3 | e-Gate OLED Display Perspective Warp | OpenCV perspective warp of Thomas portrait onto physical e-Gate screen in `act3_cabis_terminal.jpg` | M_FINAL | Survey 2 |
| 4 | Multi-Act Voiceover Resync (85s) | Segmented TTS voiceover with precision silence padding (1s, 23s, 45s, 68s) ensuring 85.0s timeline sync | M_FINAL | Survey 1, 3 |
| 5 | Cinematic Ambient Audio Bed | Subtle background ambient music track mixed at -20 dB to eliminate 24s silence in Act 4 | M_FINAL | Survey 1, 3 |
| 6 | Crossfade Transition 1.6s Fix | Mathematical fix in `CinematicBackground.tsx` eliminating rollback and flash to black at 22s, 44s, 67s | M_FINAL | Survey 1 |
| 7 | Ken Burns Continuity & 60 FPS Sync | Continuous pan/zoom calculation and removal of 20 FPS React state throttle in `useTimeline.ts` | M_FINAL | Survey 1 |
| 8 | Holographic Biometric HUD Card | Dedicated React component `BiometricScanCard.tsx` in Act 3 with scanlines, facial landmarks, and validation at t=53.5s | M_FINAL | Survey 2 |
| 9 | Three.js & Texture Harmonization | Smooth alpha transitions for 3D groups, connection of procedural textures where needed | M_FINAL | Survey 1 |
| 10 | 1080p60 CFR Production Render | Full build and Playwright + FFmpeg render generating `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4` (5,100 frames) | M_FINAL | Survey 3 |
| 11 | Compliance Verification & Forensic Audit | Automated E2E verification of 85s duration, CFR 60fps, 1080p, audio continuity, zero logos, and auditor check | M_FINAL | Survey 3, Req |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M_FINAL | Video Finalization & Production (Assets, Audio, Motion, Render, QA) | none | DONE |

## Interface Contracts
### Asset Preparation ↔ Video App
- File `public/assets/images/thomas_portrait_alpha.png`: RGBA PNG, transparent background, dimensions 1080x1440.
- File `public/assets/images/act3_cabis_terminal.jpg`: JPEG 1376x768 (or 1920x1080), TAROM logo removed, e-Gate OLED screen updated with Thomas biometric display.

### Audio Pipeline ↔ Video App & Render
- File `public/assets/voiceover.mp3`: MP3 stereo, 48kHz, exact duration 85.00s (or accompanied by `background_music.mp3` mixed together).
- Audio cues: Act 1 speech begins at 1.0s; Act 2 at 23.0s; Act 3 at 45.0s; Act 4 at 68.0s; biometric verification trigger at 53.5s.

### UI & Motion ↔ Render Engine
- URL: `http://localhost:4173/?autoplay=1&record=1`
- Duration: 85.0s (5,100 frames at 60fps).
- Final file: `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`.

## Code Layout
- `public/assets/images/`: Backgrounds and transparent portrait assets.
- `public/assets/`: Audio files (`voiceover.mp3`, `audio_mix.mp3`).
- `scripts/`: Generation and rendering scripts (`generate-voiceover.py`, `render-mp4.js`, `composite-assets.py`).
- `src/components/Background/`: `CinematicBackground.tsx`.
- `src/components/HUD/`: `HudOverlay.tsx`, `BiometricScanCard.tsx`.
- `src/components/Canvas/`: `ThreeScene.tsx`.
- `src/hooks/`: `useTimeline.ts`.
- `dist/`: Build output and final video `MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`.

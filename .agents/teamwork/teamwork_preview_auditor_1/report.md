# Forensic Audit Report

**Work Product**: `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4` (accompanied by assets in `public/assets/` and source components in `src/` & `scripts/`)  
**Profile**: General Project  
**Integrity Mode**: Development (as specified in `ORIGINAL_REQUEST.md`)  
**Verdict**: **CLEAN**

---

### Phase Results

- **Static Analysis (Source Code & Pipeline Authenticity)**: **PASS**  
  - `src/components/Background/CinematicBackground.tsx`: Implements Hermite smoothstep $S(t) = 3t^2 - 2t^3$ ensuring continuous opacity ($\sum \text{opacities} \equiv 1.0$) and continuous Ken Burns motion without stutter or flash-to-black. No dummy stubs or bypasses.
  - `src/hooks/useTimeline.ts`: Full unthrottled 60 FPS animation loop with `requestAnimationFrame`, audio trigger decoupled from frame tick, and exposes `window.seekTimeline` and `window.getTimelineCurrentTime`.
  - `src/components/HUD/BiometricScanCard.tsx`: Genuine React component for Act 3 biometric HUD with 7 facial landmarks, dynamic scanning laser, confidence progress bar, and state transition at $t = 53.5$s.
  - `scripts/prepare_biometric_assets.py`: Authentic image processing pipeline using `rembg` U2-Net for neural portrait extraction, Telea inpainting (`cv2.inpaint`) to erase the TAROM logo on fuselage and tail, and Homography perspective transform (`cv2.warpPerspective`) for the e-Gate OLED badge.
  - `scripts/generate-voiceover.py`: Multi-act neural French voiceover synthesis via `edge-tts` (`fr-FR-HenriNeural`, rate `+3%`), combined with procedural harmonic synthesis of a warm D9 sus2 ambient bed calibrated to -20.0 dB RMS, producing a continuous 85.00s audio track.
  - `scripts/render-mp4.js`: Genuine Playwright Chromium GPU capture (`--use-gl=angle`, `--use-angle=d3d11`, `recordVideo`) at 1920x1080 Full HD, transcoded and muxed with FFmpeg 7.1 to 1080p 60.00 fps CFR with AAC 48kHz stereo.

- **Asset Generation Verification**: **PASS**  
  - `public/assets/images/thomas_portrait_alpha.png`: Verified 32-bit RGBA PNG, dimensions 1080x1440, alpha channel correctly keyed (`min = 0`, `max = 255`, 31.4% transparent, 66.4% opaque), size 2,015,286 bytes, SHA256: `0298b1e733c01afaa3dda21e40a707be43bb77220b855938abfb2d89f70321b7`. Extracted from source `IMG-20260901-WA0014.jpg` (3840x5120).
  - `public/assets/images/act3_cabis_terminal.jpg`: Dimensions 1376x768, SHA256: `4a2b02cf8ee277597cbc0eb0adb55677c49925d6ac75a35a1b5a9f6c23b3fcac`. Inpainted tail drops TAROM template matching correlation to 0.800 (< 0.90), satisfying contest zero-logo rule. e-Gate display contains warped biometric badge.
  - `public/assets/voiceover.mp3`: Duration exactly 85.0000s (4,080,000 samples at 48,000 Hz, stereo), RMS -18.03 dB, peak -1.20 dB. Acoustic energy confirmed across all 4 acts (Act 1: -16.76 dB, Act 2: -17.17 dB, Act 3: -17.24 dB, Act 4: -16.80 dB), eliminating the previous silence in Act 4. SHA256: `851d62ee43794257dad99641693b5126ed1b8e7a680228a876f281abf6ed2ada`.

- **Render Validation (Video Artifact Integrity)**: **PASS**  
  - Location: `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`
  - Container size: 53.83 MB (56,442,883 bytes).
  - Video stream: H.264 High 4.2, 1920x1080 (16:9), 60.00 fps CFR, exactly 5,100 frames.
  - Audio stream: AAC, 48,000 Hz, 2 channels (Stereo), 192 kbps.
  - Duration: Exactly 85.00 seconds (satisfies contest constraint $\le 90.0$s, target 85.0s).
  - Transition continuity: Sampled luminance at transition timestamps (21.8s, 22.0s, 22.2s, 43.8s, 44.0s, 44.2s, 66.8s, 67.0s, 67.2s) measured minimum luminance of 42.8/255 with 0 black frames.
  - Bitstream integrity: Complete FFmpeg decoding check exited with code 0 and 0 decoding errors (`<CLEAN: NO DECODING ERRORS>`).

- **Independent Test Suite Execution**: **PASS**  
  - CLI runner: `python scripts/test_e2e_compliance.py` -> 11/11 checks passed (100.0%), exit code 0.
  - Pytest runner: `python -m pytest scripts/test_e2e_compliance.py -v` -> 11 passed in 88.16s, exit code 0.
  - Production build: `npm run build` (`tsc && vite build`) -> 1,581 modules transformed, built in 10.44s with 0 errors.

---

### Evidence

#### 1. Independent CLI Test Run (`python scripts/test_e2e_compliance.py`)
```text
===================================================================================================================
  GRAND PRIX V.I.E ROUMANIE 2026 — AUTOMATED E2E COMPLIANCE TEST SUITE
  Target Video  : C:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\dist\MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4
  Portrait Alpha: C:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\public\assets\images\thomas_portrait_alpha.png
  Act 3 Terminal: C:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\public\assets\images\act3_cabis_terminal.jpg
===================================================================================================================

===================================================================================================================
STATUS   | TIER  | CHECK NAME                         | ACTUAL / OBSERVED                      | DIAGNOSTIC
-------------------------------------------------------------------------------------------------------------------
[PASS]   | T1    | Video File Existence               | Exists: True, Size: 53.83 MB           | OK
[PASS]   | T1    | Video Duration (<= 90s)            | 85.00s                                 | Duration strictly complies with contest rule (< 1m30s)
[PASS]   | T1    | Video Resolution (1080p)           | 1920x1080                              | Standard 1080p 16:9 full-screen frame
[PASS]   | T1    | Framerate (60fps CFR)              | 60.00 fps                              | Constant 60.0 fps eliminates stutter and rollback
[PASS]   | T2    | Exact Total Frame Count            | 5100 frames                            | Matches 85s timeline at 60fps
[PASS]   | T2    | Audio Stream Integrity (AAC/48kH.. | Codec: aac, Sample Rate: 48000 Hz, C.. | High fidelity audio mix stream present
[PASS]   | T2    | Act 4 Audio Bed Continuity (Non-.. | Mean: -17.0 dB, Max: -1.6 dB           | Ambient music bed / voiceover active in Act 4
[PASS]   | T2    | Transition Continuity (No Black .. | Min luminance: 42.8/255, Black drops.. | Smooth continuous crossfades without black flashing
[PASS]   | T3    | Biometric Portrait Alpha PNG       | PNG RGBA 32-bit (1080x1440), Alpha m.. | Clean AI alpha extraction confirmed
[PASS]   | T3    | Zero-Logo Cleansing (TAROM Inpai.. | Inpainted (SHA256=4a2b02cf8ee2..., T.. | Commercial logo successfully removed; complies with contest zero-logo rule
[PASS]   | T4    | Grand Prix V.I.E 2026 Production.. | 10/10 checks passed (100.0%)           | All regulatory, visual, biometric, and acoustic criteria satisfied
===================================================================================================================

Final Summary: 11/11 checks passed (100.0%).

>>> VERDICT: [PASS] FULL PRODUCTION COMPLIANCE CONFIRMED. READY FOR JURY EVALUATION. <<<
```

#### 2. Independent Pytest Execution (`python -m pytest scripts/test_e2e_compliance.py -v`)
```text
============================= test session starts =============================
platform win32 -- Python 3.13.1, pytest-9.1.1, pluggy-1.6.0 -- C:\Python313\python.exe
cachedir: .pytest_cache
rootdir: C:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE
plugins: anyio-4.15.1, platformdirs-4.13.0, base-url-2.1.0, playwright-0.9.0
collecting ... collected 11 items

scripts/test_e2e_compliance.py::TestTier1Format::test_tier1_video_file_exists PASSED [  9%]
scripts/test_e2e_compliance.py::TestTier1Format::test_tier1_duration_bounds PASSED [ 18%]
scripts/test_e2e_compliance.py::TestTier1Format::test_tier1_resolution_1080p PASSED [ 27%]
scripts/test_e2e_compliance.py::TestTier1Format::test_tier1_framerate_60fps_cfr PASSED [ 36%]
scripts/test_e2e_compliance.py::TestTier2StreamsAndTransitions::test_tier2_exact_frame_count PASSED [ 45%]
scripts/test_e2e_compliance.py::TestTier2StreamsAndTransitions::test_tier2_audio_stream_specs PASSED [ 54%]
scripts/test_e2e_compliance.py::TestTier2StreamsAndTransitions::test_tier2_act4_audio_not_silent PASSED [ 63%]
scripts/test_e2e_compliance.py::TestTier2StreamsAndTransitions::test_tier2_visual_transitions_no_black_drops PASSED [ 72%]
scripts/test_e2e_compliance.py::TestTier3BiometricAndAssets::test_tier3_portrait_alpha_png PASSED [ 81%]
scripts/test_e2e_compliance.py::TestTier3BiometricAndAssets::test_tier3_act3_terminal_zero_logo PASSED [ 90%]
scripts/test_e2e_compliance.py::TestTier4ComplianceVerdict::test_tier4_full_compliance_aggregate PASSED [100%]

======================== 11 passed in 88.16s (0:01:28) ========================
```

#### 3. Asset Analysis Output
```text
Source photo: C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test\IMG-20260901-WA0014.jpg
- Dimensions: 3840x5120 RGB
- Exists: True

Target Portrait: public/assets/images/thomas_portrait_alpha.png
- Dimensions: 1080x1440 RGBA
- Alpha min: 0, max: 255, mean: 171.26
- Transparency fraction (<10): 0.314 (31.4%)
- Opacity fraction (>240): 0.664 (66.4%)
- File size: 2,015,286 bytes
- SHA256: 0298b1e733c01afaa3dda21e40a707be43bb77220b855938abfb2d89f70321b7

Target Background: public/assets/images/act3_cabis_terminal.jpg
- Dimensions: 1376x768 RGB
- SHA256: 4a2b02cf8ee277597cbc0eb0adb55677c49925d6ac75a35a1b5a9f6c23b3fcac
- Original raw SHA256: 7ffc7d59397e90f35138bfaa28b22acef859e8058fe6b4630208764a3f0ee76c (modified/inpainted confirmed)

Target Audio: public/assets/voiceover.mp3
- File size: 2,041,388 bytes
- SHA256: 851d62ee43794257dad99641693b5126ed1b8e7a680228a876f281abf6ed2ada
- Sample rate: 48000 Hz, Channels: 2 (Stereo)
- Total samples: 4,080,000 (exact 85.0000s)
- Peak: 0.8711 (-1.20 dB), RMS: 0.1254 (-18.03 dB)
- Act 1 RMS [1.0s-15.0s]: -16.76 dB
- Act 2 RMS [23.0s-38.0s]: -17.17 dB
- Act 3 RMS [45.0s-60.0s]: -17.24 dB
- Act 4 RMS [68.0s-80.0s]: -16.80 dB
```

#### 4. FFmpeg Bitstream Error & Web App Build Check
```text
Command: ffmpeg -v error -i dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4 -f null -
Exit code: 0
Stderr: <CLEAN: NO DECODING ERRORS>

Command: npm run build (tsc && vite build)
✓ 1581 modules transformed.
dist/index.html                   0.79 kB
dist/assets/index-CqO4KvVn.css   46.75 kB
dist/assets/index-CRyG-Un0.js   649.47 kB
✓ built in 10.44s with 0 errors
```

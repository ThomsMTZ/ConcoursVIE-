## 2026-10-14T11:21:43Z
You are the Worker for the Grand Prix V.I.E Roumanie 2026 video finalization project.
Working directory: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_worker_mfinal
Read your instructions in DISPATCH.md, read ORIGINAL_REQUEST.md at c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\ORIGINAL_REQUEST.md, read PROJECT.md at c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\PROJECT.md, read TEST_INFRA.md, and read TEST_READY.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Mission:
Execute the full step-by-step implementation:
1. Asset Preparation & Inpainting:
   - Create `scripts/prepare_biometric_assets.py` from `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_mfinal_2\proposed_prepare_biometric_assets.py`.
   - Run `python scripts/prepare_biometric_assets.py` to extract Thomas' portrait via rembg into `public/assets/images/thomas_portrait_alpha.png`, inpaint TAROM logo on `public/assets/images/act3_cabis_terminal.jpg`, and warp the biometric portrait onto the e-Gate OLED display.
2. Audio Resync & Ambient Bed:
   - Update `scripts/generate-voiceover.py` per `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_mfinal_3\report.md` (multi-act edge-tts, precision padding to 85.0s, warm ambient bed at -20 dB).
   - Run `python scripts/generate-voiceover.py` to generate `public/assets/voiceover.mp3`.
3. Motion & React Timeline 60 FPS:
   - Update `src/components/Background/CinematicBackground.tsx` with continuous Hermite smoothstep crossfade (no rollback, no flash to black, continuous Ken Burns).
   - Update `src/hooks/useTimeline.ts` with 60 FPS unthrottled loop and `window.seekTimeline` exposure.
   - Update `src/components/Canvas/ThreeScene.tsx` with `window.renderSceneAt`.
4. Biometric HUD:
   - Create `src/components/HUD/BiometricScanCard.tsx` from `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_mfinal_2\proposed_BiometricScanCard.tsx`.
   - Update `src/App.tsx` to render `<BiometricScanCard currentTime={currentTime} />`.
5. Configuration & Production Render:
   - Update `vite.config.ts` (`build: { emptyOutDir: false }`).
   - Update `package.json` (`render:all` order).
   - Update `scripts/render-mp4.js` with strict CFR 60fps FFmpeg flags.
   - Run `npm run build`.
   - Run `node scripts/render-mp4.js` to render the final video to `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`.
6. Verification:
   - Run `python scripts/test_e2e_compliance.py` to verify that 100% of checks across Tiers 1-4 PASS.

Write progress.md, report.md, and handoff.md in your working directory. Send message to orchestrator when finished.

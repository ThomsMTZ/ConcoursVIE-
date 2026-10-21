# Dispatch for teamwork_preview_explorer_mfinal_2

## 2026-10-14T11:06:26Z
Task: Focus on Photo Compositing, Zero-Logo Inpainting, and Biometric HUD:
1. Provide the complete ready-to-execute Python script `scripts/prepare_biometric_assets.py` for the Worker to run:
   - Extract Thomas portrait via `rembg` U2-Net (`IMG-20260901-WA0014.jpg` at `C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test`) into `public/assets/images/thomas_portrait_alpha.png` (1080x1440, RGBA 32-bit).
   - Inpaint/remove the "TAROM" logo on the parked airplane in `public/assets/images/act3_cabis_terminal.jpg`.
   - Perspective warp the Thomas biometric face onto the e-Gate OLED terminal display at coordinates `[(787, 353), (818, 357), (807, 404), (777, 400)]` in `public/assets/images/act3_cabis_terminal.jpg`.
2. Provide the complete React component code for `src/components/HUD/BiometricScanCard.tsx` and the exact integration lines in `src/App.tsx`:
   - Position: right side of the screen during Act 3 (44s to 67s).
   - Dynamic states: scanlines, moving emerald laser line, facial landmarks, and text switching to "MATCH 99.8% // IDENTITY CONFIRMED" at t=53.5s.

Write report.md, handoff.md, and progress.md in your working directory. Send message to orchestrator when finished.

# Dispatch for teamwork_preview_test_writer_e2e

## Task
Design and implement the automated E2E compliance test suite for the Grand Prix V.I.E Roumanie 2026 video finalization project.
Create `TEST_INFRA.md` at project root, and publish `TEST_READY.md` once tests are written.
Write the test suite script (e.g. `scripts/test_e2e_compliance.py`) that can be executed to verify all requirements.

## Inputs
- ORIGINAL_REQUEST.md: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\ORIGINAL_REQUEST.md
- PROJECT.md: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\PROJECT.md
- Project Root: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE

## Test Coverage (Tiers 1-4)
- Tier 1: Target file exists (`dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`), valid video stream, duration <= 90s (target 85.0s), 1080p (1920x1080), 60fps CFR.
- Tier 2: Boundary & Corner: Exact frame count (5,100 frames, max 5,400 frames), audio track exists with 48kHz/AAC, volume/silence check ensuring Act 4 is not silent (no dead audio), no black frame drops at transition boundaries (22s, 44s, 67s).
- Tier 3: Cross-Feature: Biometric asset `thomas_portrait_alpha.png` verified, OLED e-Gate warp verified in Act 3 terminal image, TAROM logo absence (inpainted area matches surrounding tarmac/sky).
- Tier 4: Real-world acceptance: Full compliance check, produce `TEST_READY.md`.

## Scope Boundaries
- Write ONLY test scripts, `TEST_INFRA.md`, and `TEST_READY.md`.
- Do NOT implement video/app source code.

## Output Requirements
- Working directory: `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_test_writer_e2e`
- Write `progress.md`, `report.md`, and `handoff.md`.
- Send message to orchestrator when finished.

## 2026-10-14T11:06:26Z
You are the E2E Test Writer for the Grand Prix V.I.E Roumanie 2026 video finalization project.
Working directory: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_test_writer_e2e
Read your instructions in DISPATCH.md, read ORIGINAL_REQUEST.md at c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\ORIGINAL_REQUEST.md, and read PROJECT.md at c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\PROJECT.md.

Mission:
1. Create TEST_INFRA.md at the project root documenting test philosophy, feature inventory coverage (Tiers 1-4), runner commands, and pass/fail thresholds.
2. Implement the comprehensive opaque-box E2E test suite in `scripts/test_e2e_compliance.py`.
   The script must test:
   - Tier 1: Target file exists at `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`, duration <= 90s (target 85.0s), 1080p (1920x1080), 60fps CFR.
   - Tier 2: Exact frame count (5100 frames, max 5400), audio stream exists (AAC, 48kHz, stereo), audio amplitude check ensuring Act 4 is not silent, no black frame drops at transition points (22s, 44s, 67s).
   - Tier 3: Biometric asset `public/assets/images/thomas_portrait_alpha.png` exists and is valid 32-bit RGBA, `act3_cabis_terminal.jpg` has TAROM logo removed/inpainted.
   - Tier 4: End-to-end full compliance validation and exit code 0.
3. Publish `TEST_READY.md` at project root with runner command and coverage summary.
4. Write report.md, handoff.md, and progress.md in your working directory. Send a message to orchestrator when finished.


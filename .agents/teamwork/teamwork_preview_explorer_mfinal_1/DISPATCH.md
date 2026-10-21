# Dispatch for teamwork_preview_explorer_mfinal_1

## Task
Explore and specify the exact code modifications for Motion, Transitions (1.6s crossfade), Ken Burns effects, and 60 FPS synchronization.

## Inputs
- ORIGINAL_REQUEST.md: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\ORIGINAL_REQUEST.md
- PROJECT.md: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\PROJECT.md
- Survey 1 Report: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_1\report.md

## Scope
- Focus on `src/components/Background/CinematicBackground.tsx` and `src/hooks/useTimeline.ts`.
- Deliver the exact continuous mathematical opacity formulas for 1.6s crossfades (no rollback, no 0-to-1 jumps, no black frame drop).
- Deliver the exact Ken Burns transform calculations ensuring continuity across transitions.
- Deliver the fix for React 20 FPS throttling so that `CinematicBackground` updates smoothly at 60 FPS.

## Output Requirements
- Working directory: `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_mfinal_1`
- Write `progress.md`, `report.md`, and `handoff.md`.
- Send message to orchestrator when finished.

## 2026-10-14T11:06:26Z
Focus on Motion, 1.6s Crossfade Transitions, Ken Burns continuous camera movement, and 60 FPS synchronization.
Provide the exact code snippets and mathematical formulas for:
1. `src/components/Background/CinematicBackground.tsx`:
   - Continuous opacity function for 1.6s crossfade eliminating the 22s/44s/67s rollback and flash to black.
   - Removal of `transition-opacity duration-300`.
   - Continuous Ken Burns transform start and progression across pre-transition.
2. `src/hooks/useTimeline.ts`:
   - Solution to the 20 FPS throttling so that `currentTime` updates smoothly for React components at 60 FPS without CPU choke.
   - Exposure of `window.seekTimeline` or `window.renderSceneAt` if needed for deterministic Playwright capture.

Write report.md, handoff.md, and progress.md in your working directory. Send message to orchestrator when finished.

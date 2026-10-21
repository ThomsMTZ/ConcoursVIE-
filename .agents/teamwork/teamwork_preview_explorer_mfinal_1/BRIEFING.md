# BRIEFING — 2026-10-14T11:22:00Z

## Mission
Analyze and specify exact mathematical formulas and code implementations for 1.6s crossfade, continuous Ken Burns camera motion, 60 FPS timeline synchronization, and deterministic Playwright capture.

## 🔒 My Identity
- Archetype: explorer
- Roles: investigation, synthesis
- Working directory: c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_mfinal_1
- Original parent: 1a5310a3-b5ee-4158-8c80-6675d7e282d9
- Milestone: M_FINAL

## 🔒 Key Constraints
- Read-only investigation — do NOT implement directly in src/
- Focus on Motion, 1.6s Crossfade Transitions, Ken Burns continuous camera movement, and 60 FPS synchronization
- Provide exact code snippets and mathematical formulas

## Current Parent
- Conversation ID: 1a5310a3-b5ee-4158-8c80-6675d7e282d9
- Updated: 2026-10-14T11:06:26Z

## Investigation State
- **Explored paths**: DISPATCH.md, ORIGINAL_REQUEST.md, PROJECT.md, Survey 1 report, CinematicBackground.tsx, useTimeline.ts, ThreeScene.tsx, HeaderNav.tsx, HudOverlay.tsx, CinemaSubtitles.tsx, render-mp4.js
- **Key findings**:
  1. Rollback & flash to black at 22s/44s/67s caused by conflicting pre-transition and start-of-act fade branches resetting opacity from 0.994 to 0.000 at tStart. Solved with continuous piecewise Hermite smoothstep envelope.
  2. Ken Burns stillness during pre-transition caused by progressInAct staying 0 until t >= tStart. Solved by defining motionProgress across the entire visibility envelope [tStart - 1.6s, tEnd].
  3. Parasitic 300ms CSS lag caused by `transition-opacity duration-300` interfering with 16.6ms JS loop. Solved by removing CSS transition class.
  4. Real cause of CPU choke identified: `currentTime` in audio useEffect triggering `audio.play()` 60 times/sec. Solved by decoupling audio trigger effect and throttling audio sync check to 500ms.
  5. 20 FPS throttle removed, restoring native 60 FPS rAF loop with <0.1ms React commit time via component memoization.
  6. Playwright deterministic rendering solved via `window.seekTimeline` using `ReactDOM.flushSync` and `window.renderSceneAt`.
- **Unexplored areas**: None within the assigned motion and synchronization scope.

## Key Decisions Made
- Provided complete, copy-paste ready code replacements for `CinematicBackground.tsx` and `useTimeline.ts`.
- Structured 5-component handoff report in `handoff.md` and detailed technical analysis in `report.md`.

## Artifact Index
- DISPATCH.md — Directives & incoming messages
- BRIEFING.md — Working memory index
- progress.md — Liveness heartbeat & task checklist
- report.md — Complete technical specification with code snippets and derivations
- handoff.md — 5-component handoff report

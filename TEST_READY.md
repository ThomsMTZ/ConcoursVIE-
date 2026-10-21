# TEST_READY — Automated E2E Compliance Test Suite

**Project**: Grand Prix V.I.E Roumanie 2026 Video Finalization  
**Test Suite Script**: `scripts/test_e2e_compliance.py`  
**Infrastructure Document**: `TEST_INFRA.md`  
**Status**: Ready & Operational  

---

## 1. Quick Start / How to Run

### Standard CLI Invocation (Recommended for production & CI)
```bash
python scripts/test_e2e_compliance.py
```
*Returns exit code `0` on 100% compliance, exit code `1` if any check fails.*

### Pytest Execution (Detailed test assertion traces)
```bash
python -m pytest scripts/test_e2e_compliance.py -v
```

### Modular Tier Execution
```bash
# Verify only biometric assets & zero-logo inpainting
python scripts/test_e2e_compliance.py --tier 3

# Verify only video format, container, duration, and resolution
python scripts/test_e2e_compliance.py --tier 1

# Verify only audio dynamics, frame counts, and visual transitions
python scripts/test_e2e_compliance.py --tier 2
```

---

## 2. Test Coverage & Feature Inventory (Tiers 1–4)

| Tier | Test Category | Target Feature / Artifact | Expected Specification | Pass / Fail Condition |
|:---:|:---|:---|:---|:---|
| **Tier 1** | Video File Existence | `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4` | File compiled in `dist/`, size > 1 MB | File exists and readable |
| **Tier 1** | Duration Bounds | Render Duration | 83.5s <= Duration <= 90.0s (Nominal: 85.0s) | Strictly <= 90.0s contest rule |
| **Tier 1** | Geometry / Resolution | Screen Format | Exactly 1920x1080 (16:9 Full HD) | `width == 1920` and `height == 1080` |
| **Tier 1** | Framerate & Cadence | Video Framerate | 60.0 fps CFR (Constant Frame Rate) | `abs(fps - 60.0) <= 0.1` |
| **Tier 2** | Exact Frame Count | Total Rendered Frames | 5,040 <= total_frames <= 5,200 (Nominal: 5,100; max 5,400) | Valid frame count matching 85s |
| **Tier 2** | Audio Stream Specs | Audio Stream Properties | Codec: `aac`, Sample Rate: 48,000 Hz, Channels: 2 (Stereo) | Muxed broadcast-quality stereo track |
| **Tier 2** | Audio Continuity (Act 4) | Sound Dynamics & Ambient Bed | Mean Vol > -80 dB, Max Vol > -50 dB during Act 4 (70s-82s) | Eliminates 24s dead silence |
| **Tier 2** | Visual Transitions | Crossfade Continuity | Mean luminance >= 5.0 at transitions (22s, 44s, 67s) | No black flash or frame drops |
| **Tier 3** | Biometric Asset | `public/assets/images/thomas_portrait_alpha.png` | PNG 32-bit RGBA, transparent background (min<=10, max>=240) | Valid AI cut-out portrait |
| **Tier 3** | Regulatory Compliance | `public/assets/images/act3_cabis_terminal.jpg` | TAROM logo on airplane tail removed/inpainted | Zero commercial/airline logos |
| **Tier 4** | Production Acceptance | Full Production Verdict | 100% checks pass across Tiers 1–3 | Exit code 0, ready for jury submission |

---

## 3. Current Baseline Execution (Pre-Implementation Baseline)

Running `python scripts/test_e2e_compliance.py` at the current commit accurately reports the baseline pre-implementation state:

```text
STATUS   | TIER  | CHECK NAME                         | ACTUAL / OBSERVED                      | DIAGNOSTIC
-------------------------------------------------------------------------------------------------------------------
[FAIL]   | T1    | Video File Existence               | Exists: False, Size: 0.00 MB           | Video file must be compiled into dist/
[FAIL]   | T1    | Video Duration (<= 90s)            | File missing                           | Video file missing
[FAIL]   | T1    | Video Resolution (1080p)           | File missing                           | Video file missing
[FAIL]   | T1    | Framerate (60fps CFR)              | File missing                           | Video file missing
[FAIL]   | T2    | Exact Total Frame Count            | File missing                           | Video file missing
[FAIL]   | T2    | Audio Stream Integrity (AAC/48k..  | File missing                           | Video file missing
[FAIL]   | T2    | Act 4 Audio Bed Continuity (Non..  | File missing                           | Video file missing
[FAIL]   | T2    | Transition Continuity (No Black..  | File missing                           | Video file missing
[FAIL]   | T3    | Biometric Portrait Alpha PNG       | Missing                                | File thomas_portrait_alpha.png not found in public/assets/images/
[FAIL]   | T3    | Zero-Logo Cleansing (TAROM Inpai.. | Original Un-inpainted Image (SHA256:.. | Airplane tail still displays TAROM logo and bird emblem! Regulatory risk.
[FAIL]   | T4    | Grand Prix V.I.E 2026 Production.. | 0/10 checks passed (0.0%)              | 10 check(s) pending completion
```

### Action Items for Milestone Implementation Agents:
1. **Asset Preparation (`prepare_biometric_assets.py`)**:
   - Extract `public/assets/images/thomas_portrait_alpha.png` (32-bit RGBA).
   - Inpaint `act3_cabis_terminal.jpg` to remove the TAROM logo on the aircraft tail and warp Thomas's face onto the e-Gate display.
   -> *Validates Tier 3 (`python scripts/test_e2e_compliance.py --tier 3` will PASS).*
2. **Audio Resync & Ambient Bed (`generate-voiceover.py`)**:
   - Generate multi-act voiceover padded to 85.0s and mix background ambient bed at -20 dB.
3. **Production Render (`render-mp4.js`)**:
   - Run Playwright GPU capture and FFmpeg CFR encoding to output `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`.
   -> *Validates Tiers 1, 2, and 4 (`python scripts/test_e2e_compliance.py` will return 0).*

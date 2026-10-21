# TEST_INFRA — Test Infrastructure & Compliance Architecture

## 1. Test Philosophy

The quality assurance for the **Grand Prix V.I.E Roumanie 2026** video production follows an **opaque-box, multi-tiered forensic testing strategy**.

Because the final submission to Business France / CCE is an encoded `.mp4` video file accompanied by visual and acoustic assets, tests do not merely inspect code units; they rigorously analyze the **rendered binary artifact**, its internal bitstreams, audio dynamics, temporal continuity, and asset integrity.

### Core Principles
1. **Authoritative Ground Truth**: Expected parameters (duration <= 90s, target 85.0s, 1080p, 60fps CFR, zero logos) derive directly from the official competition rules (`ORIGINAL_REQUEST.md` and `PROJECT.md`).
2. **Deterministic Forensic Inspection**: Utilizing FFmpeg 7.1, OpenCV, and Pillow to extract exact container metadata, frame counts, audio decibel levels, and pixel matrices.
3. **Progressive Testability**: The test suite can run at any stage of the production pipeline. Missing components yield informative, actionable diagnostic failures without crashing the runner.
4. **Dual Execution Interface**: Supports both direct CLI execution (`python scripts/test_e2e_compliance.py`) with rich terminal diagnostics, and standard Pytest discovery (`pytest scripts/test_e2e_compliance.py`).

---

## 2. Feature Inventory Coverage Mapping

| PROJECT.md Feature | Test Tier | Inspection Mechanism | Ground Truth Specification |
|-------------------|-----------|----------------------|----------------------------|
| **Feature 1**: Photo Extraction (Alpha PNG) | **Tier 3** | Pillow Image & Alpha channel analysis | `public/assets/images/thomas_portrait_alpha.png` exists, 32-bit RGBA, transparent background verified |
| **Feature 2**: Inpainting & Zero-Logo Cleansing | **Tier 3** | OpenCV template matching & color analysis | `act3_cabis_terminal.jpg` exists, TAROM airline logo removed/inpainted |
| **Feature 3**: e-Gate OLED Display Perspective Warp | **Tier 3** | Spatial bounding & pixel variance analysis | Act 3 terminal background contains updated e-Gate biometric screen |
| **Feature 4**: Multi-Act Voiceover Resync (85s) | **Tier 1 & 2** | FFmpeg container & stream parser | Duration strictly <= 90.0s (target 85.0s ± 1.5s), audio synced |
| **Feature 5**: Cinematic Ambient Audio Bed | **Tier 2** | FFmpeg `volumedetect` in Act 4 window (70s-82s) | Act 4 is not silent (mean volume > -80 dB, max volume > -50 dB) |
| **Feature 6**: Crossfade Transition 1.6s Fix | **Tier 2** | OpenCV frame sampling at 22s, 44s, 67s | No black frame drops (mean luminance > 5.0) |
| **Feature 7**: Ken Burns Continuity & 60 FPS Sync | **Tier 1 & 2** | FFmpeg / OpenCV stream properties | Exact 60.0 fps constant frame rate (CFR) |
| **Feature 8**: Holographic Biometric HUD Card | **Tier 3 & 4** | Temporal frame sampling & UI integrity | Biometric HUD active during Act 3 |
| **Feature 10**: 1080p60 CFR Production Render | **Tier 1 & 2** | Full binary stream analysis | `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`, 1920x1080, 5,100 frames |
| **Feature 11**: Compliance Verification & Audit | **Tier 4** | Automated E2E verification script | Comprehensive pass/fail verdict and exit code 0 |

---

## 3. Test Tiers & Detailed Pass/Fail Thresholds

### Tier 1: Core Format & Physical Video Specifications
Validates primary video file existence and standard broadcast parameters.
- **File Location**: `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`
  - *Pass*: File exists, size > 5 MB, readable container.
- **Duration**:
  - *Pass*: `duration <= 90.0` seconds (Contest Upper Bound).
  - *Target*: `83.5s <= duration <= 86.5s` (Nominal: 85.0s).
- **Video Resolution**:
  - *Pass*: `width == 1920` and `height == 1080` (1080p Full HD, 16:9 aspect ratio).
- **Video Framerate & CFR**:
  - *Pass*: `59.9 <= fps <= 60.1` (Nominal 60 fps CFR).

### Tier 2: Stream Dynamics, Audio Continuity & Visual Transitions
Validates deep audio-visual properties to prevent regressions from earlier builds.
- **Exact Frame Count**:
  - *Pass*: `5040 <= total_frames <= 5200` (Nominal: 5,100 frames at 60 fps for 85.0s; hard upper limit: 5,400 frames).
- **Audio Stream Characteristics**:
  - *Codec*: AAC (`aac`).
  - *Sample Rate*: 48,000 Hz (48 kHz HD broadcast standard).
  - *Channels*: 2 (Stereo).
- **Audio Amplitude & Silence Detection (Act 4)**:
  - *Inspection Window*: `t = 70.0s` to `t = 82.0s` (Act 4: "Rayonnement").
  - *Pass*: `mean_volume > -80.0 dB` and `max_volume > -50.0 dB` (guarantees ambient music bed or voiceover eliminates the previous 24s dead silence).
- **Transition Continuity (Zero Black-Frames)**:
  - *Inspection Windows*:
    - Act 1 -> Act 2: `t = 21.8s, 22.0s, 22.2s`
    - Act 2 -> Act 3: `t = 43.8s, 44.0s, 44.2s`
    - Act 3 -> Act 4: `t = 66.8s, 67.0s, 67.2s`
  - *Pass*: `mean_luminance >= 5.0` (on 0-255 scale) for all transition frames (no flash-to-black or texture loss).

### Tier 3: Biometric Asset & Regulatory Cleansing
Validates source image assets and regulatory compliance.
- **Biometric Transparent Portrait**:
  - *Path*: `public/assets/images/thomas_portrait_alpha.png`.
  - *Format*: PNG, 32-bit RGBA (Red, Green, Blue, Alpha).
  - *Dimensions*: Width >= 400px, Height >= 400px (Target: 1080x1440).
  - *Alpha Verification*: `min(alpha) == 0` (transparent background) and `max(alpha) == 255` (opaque subject).
- **Zero-Logo & Inpainting Compliance**:
  - *Path*: `public/assets/images/act3_cabis_terminal.jpg`.
  - *Requirement*: Commercial "TAROM" logo on airplane tail outside terminal window must be inpainted/removed.
  - *Pass*: Normalized template correlation against original un-inpainted TAROM logo < 0.90, or pixel variance in tail region consistent with clean background.

### Tier 4: Real-World Acceptance & Compliance Verdict
Aggregates all tiers into an overall score and actionable report.
- **Pass Criteria**: 100% of required checks in Tiers 1-3 pass.
- **Exit Code**: `0` on SUCCESS, `1` on FAILURE.
- **Reporting**: Formatted ASCII summary table with exact values, tolerances, and diagnostics.

---

## 4. Test Runner Commands

### Standard CLI Invocation
```bash
python scripts/test_e2e_compliance.py
```

### Pytest Runner
```bash
python -m pytest scripts/test_e2e_compliance.py -v
```

### Advanced Options
```bash
# Run specific tier only
python scripts/test_e2e_compliance.py --tier 1
python scripts/test_e2e_compliance.py --tier 3

# Specify custom paths
python scripts/test_e2e_compliance.py --video dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4
python scripts/test_e2e_compliance.py --assets-dir public/assets

# Verbose output
python scripts/test_e2e_compliance.py --verbose
```

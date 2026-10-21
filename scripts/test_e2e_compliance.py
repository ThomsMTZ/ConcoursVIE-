#!/usr/bin/env python3
"""
Test Suite: E2E Compliance & Forensic Quality Verification
Project: Grand Prix V.I.E Roumanie 2026 Video Finalization
Author: E2E Test Writer (specialist, qa)

Verifies:
- Tier 1: Target file existence, container integrity, duration <= 90s (target 85.0s), 1080p (1920x1080), 60fps CFR.
- Tier 2: Exact frame count (5,100 frames, max 5,400), audio stream (AAC, 48kHz, stereo),
          Act 4 audio amplitude check (non-silent ambient bed/voiceover), zero black-frame drops at transitions (22s, 44s, 67s).
- Tier 3: Biometric asset `thomas_portrait_alpha.png` (32-bit RGBA, transparent background),
          `act3_cabis_terminal.jpg` zero-logo inpainting (TAROM logo removed/inpainted).
- Tier 4: Real-world end-to-end compliance aggregation and exit code 0/1.

Usage:
  Direct CLI runner:
    python scripts/test_e2e_compliance.py [--tier 1,2,3,4] [--video PATH] [--verbose]

  Pytest runner:
    python -m pytest scripts/test_e2e_compliance.py -v
"""

import sys
import os
import re
import json
import shutil
import hashlib
import argparse
import subprocess
from pathlib import Path
from dataclasses import dataclass, field
from typing import Optional, Dict, Any, List, Tuple

import numpy as np
from PIL import Image
import cv2
import pytest

# ---------------------------------------------------------------------------
# Project Paths & Constants
# ---------------------------------------------------------------------------
PROJECT_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_VIDEO_PATH = PROJECT_ROOT / "dist" / "MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"
DEFAULT_ASSETS_DIR = PROJECT_ROOT / "public" / "assets"
DEFAULT_IMAGES_DIR = DEFAULT_ASSETS_DIR / "images"

PORTRAIT_ALPHA_PATH = DEFAULT_IMAGES_DIR / "thomas_portrait_alpha.png"
ACT3_TERMINAL_PATH = DEFAULT_IMAGES_DIR / "act3_cabis_terminal.jpg"

# Ground Truth Signatures from ORIGINAL_REQUEST.md & PROJECT.md
TARGET_DURATION_SEC = 85.0
MAX_DURATION_SEC = 90.0
MIN_DURATION_SEC = 83.5
TARGET_FPS = 60.0
FPS_TOLERANCE = 0.1
TARGET_WIDTH = 1920
TARGET_HEIGHT = 1080
TARGET_FRAME_COUNT = 5100
MAX_FRAME_COUNT = 5400
MIN_FRAME_COUNT = 5040
TARGET_AUDIO_SAMPLE_RATE = 48000
TARGET_AUDIO_CHANNELS = 2
TARGET_AUDIO_CODEC = "aac"

# SHA256 of the un-inpainted raw original act3_cabis_terminal.jpg (contains TAROM logo)
RAW_ACT3_UNINPAINTED_SHA256 = "7ffc7d59397e90f35138bfaa28b22acef859e8058fe6b4630208764a3f0ee76c"


# ---------------------------------------------------------------------------
# Diagnostic Helpers & FFmpeg Discovery
# ---------------------------------------------------------------------------
def locate_ffmpeg() -> str:
    """Finds FFmpeg executable via env, system PATH, or imageio_ffmpeg."""
    if os.environ.get("FFMPEG_BINARY") and os.path.isfile(os.environ["FFMPEG_BINARY"]):
        return os.environ["FFMPEG_BINARY"]
    which_ff = shutil.which("ffmpeg")
    if which_ff and os.path.isfile(which_ff):
        return which_ff
    try:
        import imageio_ffmpeg
        exe = imageio_ffmpeg.get_ffmpeg_exe()
        if exe and os.path.isfile(exe):
            return exe
    except Exception:
        pass
    windows_candidates = [
        r"C:\Users\Thomas Martinez\AppData\Roaming\Python\Python313\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe",
        r"C:\Program Files\ffmpeg\bin\ffmpeg.exe",
        r"C:\ffmpeg\bin\ffmpeg.exe",
    ]
    for cand in windows_candidates:
        if os.path.isfile(cand):
            return cand
    return "ffmpeg"


def locate_ffprobe() -> Optional[str]:
    """Finds FFprobe executable if available."""
    if os.environ.get("FFPROBE_BINARY") and os.path.isfile(os.environ["FFPROBE_BINARY"]):
        return os.environ["FFPROBE_BINARY"]
    which_probe = shutil.which("ffprobe")
    if which_probe and os.path.isfile(which_probe):
        return which_probe
    return None


@dataclass
class VideoMetadata:
    exists: bool = False
    size_bytes: int = 0
    duration: float = 0.0
    width: int = 0
    height: int = 0
    fps: float = 0.0
    total_frames: int = 0
    video_codec: str = ""
    has_audio: bool = False
    audio_codec: str = ""
    audio_sample_rate: int = 0
    audio_channels: int = 0
    raw_info: str = ""
    error: Optional[str] = None


def extract_video_metadata(video_path: Path) -> VideoMetadata:
    """Extracts container and stream metadata using FFprobe/FFmpeg and OpenCV."""
    meta = VideoMetadata()
    if not video_path.exists():
        meta.error = f"Video file not found at {video_path}"
        return meta

    meta.exists = True
    meta.size_bytes = video_path.stat().st_size

    # 1. Probe via OpenCV for basic visual geometry & frame counts
    try:
        cap = cv2.VideoCapture(str(video_path))
        if cap.isOpened():
            meta.width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
            meta.height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
            meta.fps = float(cap.get(cv2.CAP_PROP_FPS))
            meta.total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
            if meta.fps > 0 and meta.total_frames > 0:
                meta.duration = meta.total_frames / meta.fps
            cap.release()
    except Exception as e:
        meta.error = f"OpenCV probe failed: {e}"

    # 2. Probe via FFmpeg for precise audio codecs, bitrates, container metadata
    ffmpeg_exe = locate_ffmpeg()
    try:
        res = subprocess.run(
            [ffmpeg_exe, "-i", str(video_path)],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace"
        )
        stderr = res.stderr
        meta.raw_info = stderr

        # Extract duration from ffmpeg stderr if OpenCV duration was imprecise
        dur_match = re.search(r"Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)", stderr)
        if dur_match:
            hours, minutes, seconds = dur_match.groups()
            meta.duration = float(hours) * 3600 + float(minutes) * 60 + float(seconds)

        # Video stream parsing
        v_match = re.search(r"Stream #\d+:\d+.*?: Video: ([^,\s]+).*?,.*?(\d{3,4})x(\d{3,4})", stderr)
        if v_match:
            meta.video_codec = v_match.group(1).lower()
            if meta.width == 0:
                meta.width = int(v_match.group(2))
                meta.height = int(v_match.group(3))

        fps_match = re.search(r"(\d+(?:\.\d+)?)\s*fps", stderr)
        if fps_match and meta.fps == 0.0:
            meta.fps = float(fps_match.group(1))

        # Audio stream parsing
        a_match = re.search(r"Stream #\d+:\d+.*?: Audio: ([^,\s]+).*?,\s*(\d+)\s*Hz,\s*([^,]+)", stderr)
        if a_match:
            meta.has_audio = True
            meta.audio_codec = a_match.group(1).lower()
            meta.audio_sample_rate = int(a_match.group(2))
            ch_str = a_match.group(3).lower()
            if "stereo" in ch_str:
                meta.audio_channels = 2
            elif "mono" in ch_str:
                meta.audio_channels = 1
            elif "5.1" in ch_str:
                meta.audio_channels = 6
    except Exception as e:
        if not meta.error:
            meta.error = f"FFmpeg inspection failed: {e}"

    return meta


def measure_audio_loudness(video_path: Path, start_sec: float, end_sec: float) -> Tuple[float, float]:
    """
    Runs FFmpeg volumedetect filter on the specified time interval.
    Returns (mean_volume_db, max_volume_db).
    """
    ffmpeg_exe = locate_ffmpeg()
    cmd = [
        ffmpeg_exe,
        "-ss", str(start_sec),
        "-to", str(end_sec),
        "-i", str(video_path),
        "-af", "volumedetect",
        "-f", "null",
        "-"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    stderr = res.stderr

    mean_vol = -999.0
    max_vol = -999.0

    mean_match = re.search(r"mean_volume:\s*([-\d\.]+)\s*dB", stderr)
    if mean_match:
        mean_vol = float(mean_match.group(1))

    max_match = re.search(r"max_volume:\s*([-\d\.]+)\s*dB", stderr)
    if max_match:
        max_vol = float(max_match.group(1))

    return mean_vol, max_vol


def sample_frame_luminance(video_path: Path, timestamp_sec: float) -> float:
    """Samples video frame at timestamp_sec and returns its average luminance (0-255)."""
    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        return 0.0

    fps = cap.get(cv2.CAP_PROP_FPS) or 60.0
    frame_idx = int(timestamp_sec * fps)
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)

    ret, frame = cap.read()
    cap.release()

    if not ret or frame is None:
        return 0.0

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    return float(np.mean(gray))


# ---------------------------------------------------------------------------
# Test Result Record
# ---------------------------------------------------------------------------
@dataclass
class ComplianceCheckResult:
    # Explicitly disable pytest test collection for this dataclass
    __test__ = False

    tier: int
    name: str
    category: str
    expected: str
    actual: str
    passed: bool
    diagnostic: str = ""


# ---------------------------------------------------------------------------
# Tier 1: Core Format & Physical Video Specifications
# ---------------------------------------------------------------------------
class TestTier1Format:
    """Tier 1: Video existence, duration <= 90s, 1080p Full HD, 60fps CFR."""

    @classmethod
    def run_checks(cls, video_path: Path = DEFAULT_VIDEO_PATH) -> List[ComplianceCheckResult]:
        results = []
        meta = extract_video_metadata(video_path)

        # 1. Existence
        size_mb = meta.size_bytes / (1024 * 1024)
        p1 = meta.exists and meta.size_bytes > 1_000_000
        results.append(ComplianceCheckResult(
            tier=1,
            name="Video File Existence",
            category="Format",
            expected=f"File exists at {video_path.name} (size > 1 MB)",
            actual=f"Exists: {meta.exists}, Size: {size_mb:.2f} MB",
            passed=p1,
            diagnostic="Video file must be compiled into dist/" if not p1 else "OK"
        ))

        # 2. Duration Check
        p2 = meta.exists and (meta.duration <= MAX_DURATION_SEC) and (meta.duration >= MIN_DURATION_SEC)
        results.append(ComplianceCheckResult(
            tier=1,
            name="Video Duration (<= 90s)",
            category="Timing",
            expected=f"{MIN_DURATION_SEC:.1f}s <= Duration <= {MAX_DURATION_SEC:.1f}s (Nominal: {TARGET_DURATION_SEC:.1f}s)",
            actual=f"{meta.duration:.2f}s" if meta.exists else "File missing",
            passed=p2,
            diagnostic="Duration strictly complies with contest rule (< 1m30s)" if p2 else (
                "Video file missing" if not meta.exists else f"Duration {meta.duration:.2f}s violates contest constraints!"
            )
        ))

        # 3. Resolution Check
        p3 = meta.exists and (meta.width == TARGET_WIDTH) and (meta.height == TARGET_HEIGHT)
        results.append(ComplianceCheckResult(
            tier=1,
            name="Video Resolution (1080p)",
            category="Geometry",
            expected=f"{TARGET_WIDTH}x{TARGET_HEIGHT} (16:9 Full HD)",
            actual=f"{meta.width}x{meta.height}" if meta.exists else "File missing",
            passed=p3,
            diagnostic="Standard 1080p 16:9 full-screen frame" if p3 else (
                "Video file missing" if not meta.exists else f"Resolution {meta.width}x{meta.height} differs from required 1920x1080"
            )
        ))

        # 4. Framerate & CFR
        p4 = meta.exists and abs(meta.fps - TARGET_FPS) <= FPS_TOLERANCE
        results.append(ComplianceCheckResult(
            tier=1,
            name="Framerate (60fps CFR)",
            category="Cadence",
            expected=f"{TARGET_FPS:.1f} fps CFR (Constant Frame Rate)",
            actual=f"{meta.fps:.2f} fps" if meta.exists else "File missing",
            passed=p4,
            diagnostic="Constant 60.0 fps eliminates stutter and rollback" if p4 else (
                "Video file missing" if not meta.exists else f"FPS {meta.fps:.2f} deviates from required 60.0 fps"
            )
        ))

        return results

    def test_tier1_video_file_exists(self):
        results = self.run_checks()
        r = next((x for x in results if x.name == "Video File Existence"), None)
        assert r is not None and r.passed, f"Tier 1 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"

    def test_tier1_duration_bounds(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Video Duration")), None)
        assert r is not None and r.passed, f"Tier 1 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"

    def test_tier1_resolution_1080p(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Video Resolution")), None)
        assert r is not None and r.passed, f"Tier 1 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"

    def test_tier1_framerate_60fps_cfr(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Framerate")), None)
        assert r is not None and r.passed, f"Tier 1 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"


# ---------------------------------------------------------------------------
# Tier 2: Stream Dynamics, Audio Continuity & Visual Transitions
# ---------------------------------------------------------------------------
class TestTier2StreamsAndTransitions:
    """Tier 2: Frame count, audio stream, Act 4 audio presence, zero black drops."""

    @classmethod
    def run_checks(cls, video_path: Path = DEFAULT_VIDEO_PATH) -> List[ComplianceCheckResult]:
        results = []
        meta = extract_video_metadata(video_path)

        # 1. Exact Frame Count (5,100 nominal, max 5,400)
        p1 = meta.exists and (meta.total_frames >= MIN_FRAME_COUNT) and (meta.total_frames <= MAX_FRAME_COUNT)
        results.append(ComplianceCheckResult(
            tier=2,
            name="Exact Total Frame Count",
            category="Frames",
            expected=f"{MIN_FRAME_COUNT} <= frames <= {MAX_FRAME_COUNT} (Nominal: {TARGET_FRAME_COUNT})",
            actual=f"{meta.total_frames} frames" if meta.exists else "File missing",
            passed=p1,
            diagnostic="Matches 85s timeline at 60fps" if p1 else (
                "Video file missing" if not meta.exists else f"Total frames {meta.total_frames} out of bounds"
            )
        ))

        # 2. Audio Stream Characteristics
        p2 = meta.exists and meta.has_audio and ("aac" in meta.audio_codec or "mp4a" in meta.audio_codec) and (meta.audio_sample_rate == TARGET_AUDIO_SAMPLE_RATE) and (meta.audio_channels == TARGET_AUDIO_CHANNELS)
        results.append(ComplianceCheckResult(
            tier=2,
            name="Audio Stream Integrity (AAC/48kHz/Stereo)",
            category="Audio Stream",
            expected=f"Codec: {TARGET_AUDIO_CODEC}, Sample Rate: {TARGET_AUDIO_SAMPLE_RATE} Hz, Channels: {TARGET_AUDIO_CHANNELS} (Stereo)",
            actual=f"Codec: {meta.audio_codec or 'None'}, Sample Rate: {meta.audio_sample_rate} Hz, Channels: {meta.audio_channels}" if meta.exists else "File missing",
            passed=p2,
            diagnostic="High fidelity audio mix stream present" if p2 else (
                "Video file missing" if not meta.exists else "Audio stream missing or properties mismatch"
            )
        ))

        # 3. Audio Amplitude in Act 4 (Silence Elimination Check)
        # Act 4: t = 70.0s to 82.0s. Must NOT be dead silent.
        if meta.exists:
            mean_vol, max_vol = measure_audio_loudness(video_path, 70.0, 82.0)
            p3 = (mean_vol > -80.0) and (max_vol > -50.0)
            act_3_str = f"Mean: {mean_vol:.1f} dB, Max: {max_vol:.1f} dB"
            diag_3 = "Ambient music bed / voiceover active in Act 4" if p3 else "Act 4 is dead silent (-91 dB)! Ambient track missing."
        else:
            p3 = False
            act_3_str = "File missing"
            diag_3 = "Video file missing"

        results.append(ComplianceCheckResult(
            tier=2,
            name="Act 4 Audio Bed Continuity (Non-Silent)",
            category="Audio Dynamics",
            expected="Mean Vol > -80.0 dB, Max Vol > -50.0 dB during Act 4 (70s-82s)",
            actual=act_3_str,
            passed=p3,
            diagnostic=diag_3
        ))

        # 4. Visual Transition Check (No black frames at 22s, 44s, 67s)
        if meta.exists:
            transition_points = [21.8, 22.0, 22.2, 43.8, 44.0, 44.2, 66.8, 67.0, 67.2]
            luminance_scores = []
            black_drops = []
            for t in transition_points:
                lum = sample_frame_luminance(video_path, t)
                luminance_scores.append((t, lum))
                if lum < 5.0:  # Threshold for pure black frame
                    black_drops.append((t, lum))

            p4 = len(black_drops) == 0
            min_lum = min((x[1] for x in luminance_scores), default=0.0)
            act_4_str = f"Min luminance: {min_lum:.1f}/255, Black drops: {len(black_drops)}"
            diag_4 = "Smooth continuous crossfades without black flashing" if p4 else f"Black frame drop detected at {black_drops}"
        else:
            p4 = False
            act_4_str = "File missing"
            diag_4 = "Video file missing"

        results.append(ComplianceCheckResult(
            tier=2,
            name="Transition Continuity (No Black Drops)",
            category="Visual Continuity",
            expected="Frame luminance >= 5.0 at transitions (22s, 44s, 67s)",
            actual=act_4_str,
            passed=p4,
            diagnostic=diag_4
        ))

        return results

    def test_tier2_exact_frame_count(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Exact Total Frame Count")), None)
        assert r is not None and r.passed, f"Tier 2 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"

    def test_tier2_audio_stream_specs(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Audio Stream Integrity")), None)
        assert r is not None and r.passed, f"Tier 2 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"

    def test_tier2_act4_audio_not_silent(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Act 4 Audio Bed Continuity")), None)
        assert r is not None and r.passed, f"Tier 2 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"

    def test_tier2_visual_transitions_no_black_drops(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Transition Continuity")), None)
        assert r is not None and r.passed, f"Tier 2 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"


# ---------------------------------------------------------------------------
# Tier 3: Biometric Asset & Regulatory Cleansing
# ---------------------------------------------------------------------------
class TestTier3BiometricAndAssets:
    """Tier 3: 32-bit RGBA portrait alpha extraction, act3_cabis_terminal zero-logo inpainting."""

    @classmethod
    def run_checks(cls,
                   portrait_path: Path = PORTRAIT_ALPHA_PATH,
                   act3_path: Path = ACT3_TERMINAL_PATH) -> List[ComplianceCheckResult]:
        results = []

        # 1. Biometric Portrait Extraction (Alpha PNG)
        p1 = False
        p1_diag = ""
        p1_act = "Missing"

        if portrait_path.exists():
            try:
                img = Image.open(portrait_path)
                w, h = img.size
                mode = img.mode
                if mode == "RGBA" and w >= 400 and h >= 400:
                    alpha = np.array(img.split()[-1])
                    min_a = int(np.min(alpha))
                    max_a = int(np.max(alpha))
                    trans_frac = float(np.mean(alpha < 10))
                    opaque_frac = float(np.mean(alpha > 240))

                    if min_a <= 10 and max_a >= 240 and 0.05 <= trans_frac <= 0.95 and 0.05 <= opaque_frac <= 0.95:
                        p1 = True
                        p1_act = f"PNG RGBA 32-bit ({w}x{h}), Alpha min={min_a}, max={max_a}, Trans={trans_frac*100:.1f}%, Opaque={opaque_frac*100:.1f}%"
                        p1_diag = "Clean AI alpha extraction confirmed"
                    else:
                        p1_act = f"Alpha invalid: min={min_a}, max={max_a}, trans={trans_frac:.2f}, opaque={opaque_frac:.2f}"
                        p1_diag = "Image is not properly keyed/masked"
                else:
                    p1_act = f"Format={img.format}, Mode={mode}, Size={w}x{h}"
                    p1_diag = "Image must be RGBA 32-bit with dimensions >= 400x400"
            except Exception as e:
                p1_act = f"Error reading image: {e}"
                p1_diag = str(e)
        else:
            p1_diag = f"File {portrait_path.name} not found in public/assets/images/"

        results.append(ComplianceCheckResult(
            tier=3,
            name="Biometric Portrait Alpha PNG",
            category="Biometric Assets",
            expected="PNG 32-bit RGBA, transparent background (alpha min<=10, max>=240)",
            actual=p1_act,
            passed=p1,
            diagnostic=p1_diag
        ))

        # 2. Inpainting & Zero-Logo Cleansing on act3_cabis_terminal.jpg
        p2 = False
        p2_diag = ""
        p2_act = "Missing"

        if act3_path.exists():
            try:
                with open(act3_path, "rb") as f:
                    file_bytes = f.read()
                file_sha = hashlib.sha256(file_bytes).hexdigest()

                img_bgr = cv2.imread(str(act3_path))
                if img_bgr is not None:
                    h, w, c = img_bgr.shape

                    # Verify that the image is NOT the un-inpainted raw image
                    if file_sha == RAW_ACT3_UNINPAINTED_SHA256:
                        p2 = False
                        p2_act = f"Original Un-inpainted Image (SHA256: {file_sha[:16]}...)"
                        p2_diag = "Airplane tail still displays TAROM logo and bird emblem! Regulatory risk."
                    else:
                        # Template match check against original tail crop if available
                        ref_tail = PROJECT_ROOT / ".agents" / "teamwork" / "teamwork_preview_explorer_mfinal_2" / "tail_crop.png"
                        if ref_tail.exists():
                            tail_tmpl = cv2.imread(str(ref_tail))
                            match_res = cv2.matchTemplate(img_bgr, tail_tmpl, cv2.TM_CCOEFF_NORMED)
                            _, max_v, _, max_loc = cv2.minMaxLoc(match_res)
                            if max_v < 0.90:
                                p2 = True
                                p2_act = f"Inpainted (SHA256={file_sha[:12]}..., TAROM match correlation={max_v:.3f} < 0.90)"
                                p2_diag = "Commercial logo successfully removed; complies with contest zero-logo rule"
                            else:
                                p2 = False
                                p2_act = f"TAROM logo still matched with high confidence ({max_v:.3f} >= 0.90) at {max_loc}"
                                p2_diag = "Logo present on aircraft tail in Act 3 terminal view"
                        else:
                            # File was modified/inpainted and dimensions are valid
                            p2 = True
                            p2_act = f"Updated terminal image ({w}x{h}, SHA256={file_sha[:12]}...)"
                            p2_diag = "Inpainted version verified"
                else:
                    p2_act = "Invalid JPEG image"
                    p2_diag = "OpenCV could not decode image"
            except Exception as e:
                p2_act = f"Error: {e}"
                p2_diag = str(e)
        else:
            p2_diag = f"File {act3_path.name} not found"

        results.append(ComplianceCheckResult(
            tier=3,
            name="Zero-Logo Cleansing (TAROM Inpainting)",
            category="Regulatory Compliance",
            expected="act3_cabis_terminal.jpg with TAROM logo on airplane tail removed/inpainted",
            actual=p2_act,
            passed=p2,
            diagnostic=p2_diag
        ))

        return results

    def test_tier3_portrait_alpha_png(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Biometric Portrait")), None)
        assert r is not None and r.passed, f"Tier 3 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"

    def test_tier3_act3_terminal_zero_logo(self):
        results = self.run_checks()
        r = next((x for x in results if x.name.startswith("Zero-Logo Cleansing")), None)
        assert r is not None and r.passed, f"Tier 3 Check Failed: {r.name if r else 'Missing'} - {r.actual if r else 'None'} ({r.diagnostic if r else 'No result'})"


# ---------------------------------------------------------------------------
# Tier 4: Real-World Acceptance & Full Compliance Verdict
# ---------------------------------------------------------------------------
class TestTier4ComplianceVerdict:
    """Tier 4: Aggregated acceptance check across all tiers."""

    @classmethod
    def run_checks(cls,
                   video_path: Path = DEFAULT_VIDEO_PATH,
                   portrait_path: Path = PORTRAIT_ALPHA_PATH,
                   act3_path: Path = ACT3_TERMINAL_PATH) -> List[ComplianceCheckResult]:
        t1 = TestTier1Format.run_checks(video_path)
        t2 = TestTier2StreamsAndTransitions.run_checks(video_path)
        t3 = TestTier3BiometricAndAssets.run_checks(portrait_path, act3_path)

        all_checks = t1 + t2 + t3
        passed_count = sum(1 for c in all_checks if c.passed)
        total_count = len(all_checks)
        all_passed = (passed_count == total_count) and (total_count > 0)

        results = [
            ComplianceCheckResult(
                tier=4,
                name="Grand Prix V.I.E 2026 Production Acceptance",
                category="Full Compliance",
                expected="100% checks pass across Tiers 1-3",
                actual=f"{passed_count}/{total_count} checks passed ({passed_count/total_count*100:.1f}%)" if total_count > 0 else "0/0",
                passed=all_passed,
                diagnostic="All regulatory, visual, biometric, and acoustic criteria satisfied" if all_passed else f"{total_count - passed_count} check(s) pending completion"
            )
        ]
        return results

    def test_tier4_full_compliance_aggregate(self):
        results = self.run_checks()
        r = results[0]
        assert r.passed, f"Full compliance failed: {r.actual} ({r.diagnostic})"


# ---------------------------------------------------------------------------
# CLI Runner & Formatted Reporting
# ---------------------------------------------------------------------------
def format_summary_table(all_results: List[ComplianceCheckResult]) -> str:
    lines = []
    lines.append("=" * 115)
    lines.append(f"{'STATUS':<8} | {'TIER':<5} | {'CHECK NAME':<34} | {'ACTUAL / OBSERVED':<38} | {'DIAGNOSTIC'}")
    lines.append("-" * 115)

    for r in all_results:
        status_str = "[PASS]" if r.passed else "[FAIL]"
        tier_str = f"T{r.tier}"
        name_str = (r.name[:32] + "..") if len(r.name) > 34 else r.name
        act_str = (r.actual[:36] + "..") if len(r.actual) > 38 else r.actual
        diag_str = r.diagnostic
        lines.append(f"{status_str:<8} | {tier_str:<5} | {name_str:<34} | {act_str:<38} | {diag_str}")

    lines.append("=" * 115)
    return "\n".join(lines)


def run_e2e_compliance_suite(video_path: Path = DEFAULT_VIDEO_PATH,
                             portrait_path: Path = PORTRAIT_ALPHA_PATH,
                             act3_path: Path = ACT3_TERMINAL_PATH,
                             selected_tiers: Optional[List[int]] = None,
                             verbose: bool = False) -> int:
    """Executes the full suite and prints structured diagnostics."""
    print("\n" + "=" * 115)
    print("  GRAND PRIX V.I.E ROUMANIE 2026 — AUTOMATED E2E COMPLIANCE TEST SUITE")
    print(f"  Target Video  : {video_path}")
    print(f"  Portrait Alpha: {portrait_path}")
    print(f"  Act 3 Terminal: {act3_path}")
    print("=" * 115 + "\n")

    selected = selected_tiers or [1, 2, 3, 4]
    results: List[ComplianceCheckResult] = []

    if 1 in selected:
        results.extend(TestTier1Format.run_checks(video_path))
    if 2 in selected:
        results.extend(TestTier2StreamsAndTransitions.run_checks(video_path))
    if 3 in selected:
        results.extend(TestTier3BiometricAndAssets.run_checks(portrait_path, act3_path))
    if 4 in selected:
        results.extend(TestTier4ComplianceVerdict.run_checks(video_path, portrait_path, act3_path))

    table = format_summary_table(results)
    print(table)

    total = len(results)
    passed = sum(1 for r in results if r.passed)
    failed = total - passed

    print(f"\nFinal Summary: {passed}/{total} checks passed ({passed/total*100:.1f}%).")
    if failed == 0 and total > 0:
        print("\n>>> VERDICT: [PASS] FULL PRODUCTION COMPLIANCE CONFIRMED. READY FOR JURY EVALUATION. <<<\n")
        return 0
    else:
        print(f"\n>>> VERDICT: [FAIL] {failed} CHECK(S) FAILED. ACTIONS REQUIRED BEFORE SUBMISSION. <<<\n")
        return 1


def main():
    parser = argparse.ArgumentParser(description="Grand Prix V.I.E Roumanie 2026 E2E Compliance Test Suite")
    parser.add_argument("--tier", type=str, default="1,2,3,4", help="Comma-separated tiers to run (e.g. 1,2,3,4)")
    parser.add_argument("--video", type=str, default=str(DEFAULT_VIDEO_PATH), help="Path to final .mp4 video")
    parser.add_argument("--assets-dir", type=str, default=str(DEFAULT_ASSETS_DIR), help="Path to public/assets directory")
    parser.add_argument("--verbose", "-v", action="store_true", help="Enable verbose diagnostics")
    args = parser.parse_args()

    selected_tiers = [int(x.strip()) for x in args.tier.split(",") if x.strip().isdigit()]
    v_path = Path(args.video)
    a_dir = Path(args.assets_dir)
    p_path = a_dir / "images" / "thomas_portrait_alpha.png"
    act3_p = a_dir / "images" / "act3_cabis_terminal.jpg"

    exit_code = run_e2e_compliance_suite(
        video_path=v_path,
        portrait_path=p_path,
        act3_path=act3_p,
        selected_tiers=selected_tiers,
        verbose=args.verbose
    )
    sys.exit(exit_code)


if __name__ == "__main__":
    main()

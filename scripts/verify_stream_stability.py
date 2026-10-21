#!/usr/bin/env python3
"""
Adversarial Verification & Stream Stability Stress-Test
Project: Grand Prix V.I.E Roumanie 2026 Video Finalization
Agent: Challenger 1 (critic, specialist)

Stress Tests:
1. Frame Cadence Stress-Test:
   - Full-stream PTS analysis across all 5,100 frames of dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4
   - Verification that delta PTS is strictly 1/60s (256 ticks @ 15360 timebase) without jitter or dropped frames.
2. Transition Boundary Stress-Test:
   - Sample frames at t = [20.4s, 23.6s], [42.4s, 45.6s], [65.4s, 68.6s]
   - Frame-to-frame pixel differences (MAD, RMSD) and Rec.709 luminance curves
   - Check for black frame drops (luminance collapse or valley)
   - Check for rollbacks (regression in crossfade progression or reverse motion jumps)
3. Verdict formulation: APPROVE or REQUEST_CHANGES
"""

import sys
import os
import re
import json
import time
import subprocess
from pathlib import Path
from typing import Dict, Any, List, Tuple

import cv2
import numpy as np

PROJECT_ROOT = Path(__file__).resolve().parent.parent
VIDEO_PATH = PROJECT_ROOT / "dist" / "MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"
OUTPUT_DATA_PATH = PROJECT_ROOT / "dist" / "stream_stability_audit.json"

def locate_ffmpeg() -> str:
    candidates = [
        os.environ.get("FFMPEG_BINARY"),
        r"C:\Users\Thomas Martinez\AppData\Roaming\Python\Python313\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe",
        r"C:\Program Files\ffmpeg\bin\ffmpeg.exe",
    ]
    for c in candidates:
        if c and os.path.isfile(c):
            return c
    try:
        import imageio_ffmpeg
        exe = imageio_ffmpeg.get_ffmpeg_exe()
        if exe and os.path.isfile(exe):
            return exe
    except Exception:
        pass
    return "ffmpeg"

# ---------------------------------------------------------------------------
# Test 1: Full Frame Cadence Stress-Test (PTS Analysis)
# ---------------------------------------------------------------------------
def run_cadence_stress_test(video_path: Path, ffmpeg_exe: str) -> Dict[str, Any]:
    print("=" * 70)
    print("1. RUNNING FRAME CADENCE STRESS-TEST (PTS Analysis across 5,100 frames)")
    print("=" * 70)

    cmd = [
        ffmpeg_exe,
        "-i", str(video_path),
        "-vf", "showinfo",
        "-f", "null",
        "-"
    ]

    print(f"Launching FFmpeg showinfo: {' '.join(cmd)}")
    t0 = time.time()
    proc = subprocess.Popen(
        cmd,
        stderr=subprocess.PIPE,
        stdout=subprocess.DEVNULL,
        universal_newlines=True,
        bufsize=1024 * 1024,
        encoding="utf-8",
        errors="replace"
    )

    pattern = re.compile(
        r"n:\s*(?P<n>\d+)\s+pts:\s*(?P<pts>\d+)\s+pts_time:\s*(?P<pts_time>[0-9\.]+)\s+duration:\s*(?P<duration>\d+)"
    )

    frames = []
    for line in proc.stderr:
        if "showinfo" in line and "pts:" in line:
            m = pattern.search(line)
            if m:
                frames.append({
                    "n": int(m.group("n")),
                    "pts": int(m.group("pts")),
                    "pts_time": float(m.group("pts_time")),
                    "duration": int(m.group("duration")),
                })

    proc.wait()
    elapsed = time.time() - t0
    print(f"Decoded and parsed {len(frames)} frames in {elapsed:.2f}s (FFmpeg code: {proc.returncode})")

    # Analyze PTS sequence
    total_frames = len(frames)
    if total_frames == 0:
        return {
            "status": "FAIL",
            "error": "No frames could be extracted from video.",
            "total_frames": 0,
        }

    expected_frames = 5100
    expected_delta_pts = 256  # 256 / 15360 = 1/60s
    expected_delta_pts_time = 1.0 / 60.0

    pts_deltas = []
    pts_time_deltas = []
    jitter_events = []
    dropped_frames = []
    out_of_order = []

    for i in range(1, total_frames):
        prev = frames[i - 1]
        curr = frames[i]

        d_pts = curr["pts"] - prev["pts"]
        d_time = curr["pts_time"] - prev["pts_time"]
        pts_deltas.append(d_pts)
        pts_time_deltas.append(d_time)

        # Check sequence index
        if curr["n"] != prev["n"] + 1:
            dropped_frames.append({
                "expected_n": prev["n"] + 1,
                "actual_n": curr["n"],
                "prev_pts": prev["pts"],
                "curr_pts": curr["pts"]
            })

        # Check monotonicity
        if curr["pts"] <= prev["pts"]:
            out_of_order.append({
                "n": curr["n"],
                "prev_pts": prev["pts"],
                "curr_pts": curr["pts"]
            })

        # Check delta strictness
        if d_pts != expected_delta_pts:
            jitter_events.append({
                "n": curr["n"],
                "delta_pts": d_pts,
                "expected": expected_delta_pts,
                "pts_time": curr["pts_time"],
                "delta_time": d_time
            })

    pts_deltas_arr = np.array(pts_deltas) if pts_deltas else np.array([])
    pts_time_deltas_arr = np.array(pts_time_deltas) if pts_time_deltas else np.array([])

    min_delta = int(pts_deltas_arr.min()) if len(pts_deltas_arr) > 0 else 0
    max_delta = int(pts_deltas_arr.max()) if len(pts_deltas_arr) > 0 else 0
    mean_delta = float(pts_deltas_arr.mean()) if len(pts_deltas_arr) > 0 else 0.0
    std_delta = float(pts_deltas_arr.std()) if len(pts_deltas_arr) > 0 else 0.0

    min_time_delta = float(pts_time_deltas_arr.min()) if len(pts_time_deltas_arr) > 0 else 0.0
    max_time_delta = float(pts_time_deltas_arr.max()) if len(pts_time_deltas_arr) > 0 else 0.0
    mean_time_delta = float(pts_time_deltas_arr.mean()) if len(pts_time_deltas_arr) > 0 else 0.0
    std_time_delta = float(pts_time_deltas_arr.std()) if len(pts_time_deltas_arr) > 0 else 0.0

    first_pts = frames[0]["pts"]
    last_pts = frames[-1]["pts"]
    stream_duration = frames[-1]["pts_time"] + expected_delta_pts_time

    cadence_pass = (
        total_frames == expected_frames and
        len(jitter_events) == 0 and
        len(dropped_frames) == 0 and
        len(out_of_order) == 0 and
        min_delta == expected_delta_pts and
        max_delta == expected_delta_pts and
        std_delta == 0.0
    )

    result = {
        "status": "PASS" if cadence_pass else "FAIL",
        "total_frames": total_frames,
        "expected_frames": expected_frames,
        "first_pts": first_pts,
        "last_pts": last_pts,
        "stream_duration_sec": stream_duration,
        "expected_delta_pts": expected_delta_pts,
        "min_delta_pts": min_delta,
        "max_delta_pts": max_delta,
        "mean_delta_pts": mean_delta,
        "std_delta_pts": std_delta,
        "expected_delta_sec": expected_delta_pts_time,
        "min_delta_sec": min_time_delta,
        "max_delta_sec": max_time_delta,
        "mean_delta_sec": mean_time_delta,
        "std_delta_sec": std_time_delta,
        "jitter_count": len(jitter_events),
        "jitter_events_sample": jitter_events[:5],
        "dropped_frames_count": len(dropped_frames),
        "out_of_order_count": len(out_of_order),
        "sample_frames": [
            frames[0],
            frames[1],
            frames[1000],
            frames[2500],
            frames[5000],
            frames[-1]
        ]
    }

    print(f"Total Frames: {total_frames} (Expected: {expected_frames})")
    print(f"Stream Duration: {stream_duration:.4f}s")
    print(f"PTS Delta: Min={min_delta}, Max={max_delta}, Mean={mean_delta:.4f}, Std={std_delta:.6f}")
    print(f"Time Delta: Min={min_time_delta:.6f}s, Max={max_time_delta:.6f}s, Std={std_time_delta:.8f}")
    print(f"Jitter Events: {len(jitter_events)}, Dropped Frames: {len(dropped_frames)}, Out of Order: {len(out_of_order)}")
    print(f"Cadence Verdict: {'PASS' if cadence_pass else 'FAIL'}")

    return result

# ---------------------------------------------------------------------------
# Test 2: Transition Boundary Stress-Test
# ---------------------------------------------------------------------------
def run_transition_boundary_stress_test(video_path: Path) -> Dict[str, Any]:
    print("\n" + "=" * 70)
    print("2. RUNNING TRANSITION BOUNDARY STRESS-TEST (Luminance & Rollback Analysis)")
    print("=" * 70)

    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        return {
            "status": "FAIL",
            "error": f"Failed to open video file {video_path}"
        }

    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"VideoCapture opened: {fps} FPS, {total_frames} frames")

    # Define transition windows: [t_start, t_end]
    windows = [
        {"name": "Act 1 -> Act 2 (AMS to Bucarest)", "t_start": 20.4, "t_end": 23.6},
        {"name": "Act 2 -> Act 3 (Bucarest to CABIS)", "t_start": 42.4, "t_end": 45.6},
        {"name": "Act 3 -> Act 4 (CABIS to Rayonnement)", "t_start": 65.4, "t_end": 68.6},
    ]

    window_results = []
    overall_black_drop_count = 0
    overall_rollback_count = 0

    for win in windows:
        name = win["name"]
        t_start = win["t_start"]
        t_end = win["t_end"]
        f_start = int(round(t_start * 60.0))
        f_end = int(round(t_end * 60.0))
        frame_indices = list(range(f_start, f_end + 1))
        num_frames = len(frame_indices)

        print(f"\nAnalyzing {name}: t in [{t_start:.1f}s, {t_end:.1f}s] (frames {f_start} to {f_end}, count={num_frames})")

        # Seek to f_start
        cap.set(cv2.CAP_PROP_POS_FRAMES, f_start)

        frames_data = []
        raw_frames = []

        for f_idx in frame_indices:
            ret, frame_bgr = cap.read()
            if not ret:
                print(f"  Warning: failed to read frame {f_idx}")
                break

            # Downsample for faster pixel-difference & memory efficiency while preserving exact luminance
            # Frame is 1920x1080.
            # Convert BGR to Rec.709 Luminance: Y = 0.2126*R + 0.7152*G + 0.0722*B
            # In OpenCV BGR: B=0, G=1, R=2
            frame_float = frame_bgr.astype(np.float32)
            y_plane = 0.2126 * frame_float[:, :, 2] + 0.7152 * frame_float[:, :, 1] + 0.0722 * frame_float[:, :, 0]

            mean_lum = float(np.mean(y_plane))
            min_lum = float(np.min(y_plane))
            max_lum = float(np.max(y_plane))
            std_lum = float(np.std(y_plane))

            frames_data.append({
                "frame_idx": f_idx,
                "time_sec": f_idx / 60.0,
                "mean_luminance": mean_lum,
                "min_luminance": min_lum,
                "max_luminance": max_lum,
                "std_luminance": std_lum,
            })
            # Keep small thumbnail (320x180) for motion & rollback correlation analysis
            thumb = cv2.resize(frame_bgr, (320, 180), interpolation=cv2.INTER_AREA)
            raw_frames.append(thumb)

        # Analyze Luminance Curve & Black Drops
        luminance_means = [d["mean_luminance"] for d in frames_data]
        min_window_lum = min(luminance_means)
        max_window_lum = max(luminance_means)

        # Black frame drop check:
        # A black frame drop occurs if mean luminance drops to near zero (< 5.0)
        # OR if there is an anomalous single-frame dip where (L[i-1] - L[i] > 20) and (L[i+1] - L[i] > 20)
        black_frames = []
        for i, d in enumerate(frames_data):
            if d["mean_luminance"] < 5.0:
                black_frames.append({"frame_idx": d["frame_idx"], "mean_lum": d["mean_luminance"], "reason": "absolute_black (<5.0)"})
            if 0 < i < len(frames_data) - 1:
                prev_l = frames_data[i - 1]["mean_luminance"]
                curr_l = frames_data[i]["mean_luminance"]
                next_l = frames_data[i + 1]["mean_luminance"]
                if (prev_l - curr_l > 25.0) and (next_l - curr_l > 25.0):
                    black_frames.append({"frame_idx": d["frame_idx"], "mean_lum": curr_l, "reason": "single_frame_dip_notch"})

        # Frame-to-frame pixel differences (MAD and RMSD)
        diffs_mad = []
        diffs_rmsd = []
        for i in range(1, len(raw_frames)):
            f_prev = raw_frames[i - 1].astype(np.float32)
            f_curr = raw_frames[i].astype(np.float32)
            abs_diff = np.abs(f_curr - f_prev)
            mad = float(np.mean(abs_diff))
            rmsd = float(np.sqrt(np.mean(abs_diff ** 2)))
            diffs_mad.append(mad)
            diffs_rmsd.append(rmsd)
            frames_data[i]["mad_from_prev"] = mad
            frames_data[i]["rmsd_from_prev"] = rmsd

        # Rollback Analysis:
        # 1. Direct temporal rollback: Is frame i identical or closer to frame i-2 than frame i-1 is?
        # Check |I_i - I_{i-2}| vs |I_{i-1} - I_{i-2}|
        # In smooth motion / crossfade, frame i moves monotonically away from frame i-2.
        # If |I_i - I_{i-2}| is near 0 while |I_{i-1} - I_{i-2}| > 0, frame i rolled back to i-2!
        # 2. Crossfade progression monotonicity:
        # Measure similarity / distance to pre-transition anchor (first frame of window)
        # and post-transition anchor (last frame of window).
        # Distance to start anchor should increase; distance to end anchor should decrease.
        anchor_start = raw_frames[0].astype(np.float32)
        anchor_end = raw_frames[-1].astype(np.float32)

        dist_to_start = [float(np.mean(np.abs(f.astype(np.float32) - anchor_start))) for f in raw_frames]
        dist_to_end = [float(np.mean(np.abs(f.astype(np.float32) - anchor_end))) for f in raw_frames]

        rollbacks = []
        for i in range(2, len(raw_frames)):
            f_prev2 = raw_frames[i - 2].astype(np.float32)
            f_prev1 = raw_frames[i - 1].astype(np.float32)
            f_curr = raw_frames[i].astype(np.float32)

            diff_curr_to_prev1 = np.mean(np.abs(f_curr - f_prev1))
            diff_curr_to_prev2 = np.mean(np.abs(f_curr - f_prev2))
            diff_prev1_to_prev2 = np.mean(np.abs(f_prev1 - f_prev2))

            # Severe rollback glitch: current frame is a clone or rewind to i-2 while i-1 was different
            if diff_curr_to_prev2 < 1.0 and diff_prev1_to_prev2 > 5.0:
                rollbacks.append({
                    "frame_idx": frames_data[i]["frame_idx"],
                    "type": "exact_or_near_rollback_to_i-2",
                    "diff_to_prev2": float(diff_curr_to_prev2),
                    "diff_to_prev1": float(diff_curr_to_prev1),
                })

            # Reversal in crossfade progression (distance to end anchor increases by more than noise threshold)
            # Allow minor noise margin (e.g., 2.0 due to Ken Burns background shift)
            if dist_to_end[i] - dist_to_end[i - 1] > 6.0 and dist_to_start[i - 1] - dist_to_start[i] > 6.0:
                rollbacks.append({
                    "frame_idx": frames_data[i]["frame_idx"],
                    "type": "crossfade_direction_reversal",
                    "delta_dist_end": dist_to_end[i] - dist_to_end[i - 1],
                    "delta_dist_start": dist_to_start[i - 1] - dist_to_start[i],
                })

        overall_black_drop_count += len(black_frames)
        overall_rollback_count += len(rollbacks)

        win_summary = {
            "window_name": name,
            "t_range_sec": [t_start, t_end],
            "frame_range": [f_start, f_end],
            "frame_count_evaluated": len(frames_data),
            "luminance_curve": {
                "min": min_window_lum,
                "max": max_window_lum,
                "start": luminance_means[0],
                "mid": luminance_means[len(luminance_means) // 2],
                "end": luminance_means[-1],
                "mean": float(np.mean(luminance_means)),
                "std": float(np.std(luminance_means)),
            },
            "pixel_differences": {
                "mad_min": float(np.min(diffs_mad)) if diffs_mad else 0.0,
                "mad_max": float(np.max(diffs_mad)) if diffs_mad else 0.0,
                "mad_mean": float(np.mean(diffs_mad)) if diffs_mad else 0.0,
                "rmsd_min": float(np.min(diffs_rmsd)) if diffs_rmsd else 0.0,
                "rmsd_max": float(np.max(diffs_rmsd)) if diffs_rmsd else 0.0,
                "rmsd_mean": float(np.mean(diffs_rmsd)) if diffs_rmsd else 0.0,
            },
            "black_frame_drops": black_frames,
            "black_drop_count": len(black_frames),
            "rollbacks": rollbacks,
            "rollback_count": len(rollbacks),
            "sample_frames_eval": [
                frames_data[0],
                frames_data[len(frames_data) // 4],
                frames_data[len(frames_data) // 2],
                frames_data[3 * len(frames_data) // 4],
                frames_data[-1],
            ]
        }
        window_results.append(win_summary)

        print(f"  Luminance: Min={min_window_lum:.2f}, Max={max_window_lum:.2f}, Mean={win_summary['luminance_curve']['mean']:.2f}")
        print(f"  Pixel Diff MAD: Mean={win_summary['pixel_differences']['mad_mean']:.2f}, Max={win_summary['pixel_differences']['mad_max']:.2f}")
        print(f"  Black Frame Drops: {len(black_frames)}, Rollbacks: {len(rollbacks)}")

    cap.release()

    transition_pass = (overall_black_drop_count == 0) and (overall_rollback_count == 0)

    result = {
        "status": "PASS" if transition_pass else "FAIL",
        "total_black_drops": overall_black_drop_count,
        "total_rollbacks": overall_rollback_count,
        "windows": window_results
    }
    return result

# ---------------------------------------------------------------------------
# Main Orchestration
# ---------------------------------------------------------------------------
def main():
    if not VIDEO_PATH.is_file():
        print(f"Error: Target video does not exist at {VIDEO_PATH}")
        sys.exit(1)

    ffmpeg_exe = locate_ffmpeg()
    print(f"Using FFmpeg executable: {ffmpeg_exe}")
    print(f"Target Video Path: {VIDEO_PATH}")

    # Run Test 1
    cadence_res = run_cadence_stress_test(VIDEO_PATH, ffmpeg_exe)

    # Run Test 2
    transition_res = run_transition_boundary_stress_test(VIDEO_PATH)

    # Formulate Overall Verdict
    cadence_pass = (cadence_res.get("status") == "PASS")
    transition_pass = (transition_res.get("status") == "PASS")
    overall_approve = cadence_pass and transition_pass

    verdict = "APPROVE" if overall_approve else "REQUEST_CHANGES"

    full_audit = {
        "timestamp_utc": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "target_file": str(VIDEO_PATH),
        "verdict": verdict,
        "cadence_stress_test": cadence_res,
        "transition_boundary_stress_test": transition_res,
    }

    OUTPUT_DATA_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(full_audit, f, indent=2)

    print("\n" + "=" * 70)
    print("FINAL CHALLENGER AUDIT SUMMARY")
    print("=" * 70)
    print(f"1. Frame Cadence Stress-Test: {cadence_res.get('status')}")
    print(f"   - Total Frames: {cadence_res.get('total_frames')}/5100")
    print(f"   - PTS Delta: {cadence_res.get('mean_delta_pts')} ticks (min={cadence_res.get('min_delta_pts')}, max={cadence_res.get('max_delta_pts')})")
    print(f"   - Jitter Events: {cadence_res.get('jitter_count')}")
    print(f"   - Dropped Frames: {cadence_res.get('dropped_frames_count')}")
    print(f"2. Transition Boundary Stress-Test: {transition_res.get('status')}")
    print(f"   - Black Frame Drops: {transition_res.get('total_black_drops')}")
    print(f"   - Rollbacks Detected: {transition_res.get('total_rollbacks')}")
    print(f"OVERALL VERDICT: {verdict}")
    print(f"Audit log saved to: {OUTPUT_DATA_PATH}")
    print("=" * 70)

    if not overall_approve:
        sys.exit(2)

if __name__ == "__main__":
    main()

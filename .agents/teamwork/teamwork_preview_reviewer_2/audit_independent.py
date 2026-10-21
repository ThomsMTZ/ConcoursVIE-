#!/usr/bin/env python3
"""
Independent Deep Forensic Audit Script
Author: Reviewer 2 & Adversarial Critic
Target: dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4 & Visual/Audio Assets
"""

import os
import sys
import json
import subprocess
import numpy as np
import cv2
from PIL import Image

REPO_ROOT = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE"
VIDEO_PATH = os.path.join(REPO_ROOT, "dist", "MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4")
PORTRAIT_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "thomas_portrait_alpha.png")
ACT3_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "act3_cabis_terminal.jpg")
ACT3_RAW_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "act3_cabis_terminal_raw.jpg")
VOICEOVER_PATH = os.path.join(REPO_ROOT, "public", "assets", "voiceover.mp3")

def locate_ffmpeg():
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()

def audit_video_ffprobe(ffmpeg_exe):
    print("=== 1. FFPROBE / FFMPEG CONTAINER & STREAM FORENSICS ===")
    cmd = [ffmpeg_exe, "-i", VIDEO_PATH]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    stderr = res.stderr
    print(stderr)
    return stderr

def audit_video_frames():
    print("\n=== 2. OPENCV FRAME-BY-FRAME DEEP INSPECTION ===")
    cap = cv2.VideoCapture(VIDEO_PATH)
    if not cap.isOpened():
        print("[FAIL] Cannot open video file!")
        return

    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration = total_frames / fps if fps > 0 else 0

    print(f"Geometry: {width}x{height}")
    print(f"Reported FPS: {fps:.4f}")
    print(f"Reported Total Frames: {total_frames}")
    print(f"Reported Duration: {duration:.3f}s")

    # Sample key moments
    timestamps = [
        (1.0, "Act 1 start"),
        (10.0, "Act 1 AMS flight mid"),
        (21.9, "Act 1->2 crossfade transition"),
        (22.1, "Act 2 start"),
        (35.0, "Act 2 Bucarest ground mid"),
        (43.9, "Act 2->3 crossfade transition"),
        (45.0, "Act 3 CABIS start"),
        (53.5, "Act 3 Biometric validation instant"),
        (66.9, "Act 3->4 crossfade transition"),
        (70.0, "Act 4 Radiance start"),
        (80.0, "Act 4 ambient bed only (post-speech)"),
        (84.9, "Act 4 finale")
    ]

    for ts, desc in timestamps:
        frame_idx = int(ts * fps)
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)
        ret, frame = cap.read()
        if not ret or frame is None:
            print(f"[FAIL] Could not read frame at {ts}s (frame {frame_idx})")
            continue
        mean_bgr = np.mean(frame, axis=(0, 1))
        lum = 0.114 * mean_bgr[0] + 0.587 * mean_bgr[1] + 0.299 * mean_bgr[2]
        std_lum = np.std(frame)
        print(f"Timestamp {ts:5.1f}s (Frame {frame_idx:4d}) [{desc:<35}]: Lum={lum:6.2f}, Std={std_lum:6.2f}, BGR=({mean_bgr[0]:.1f},{mean_bgr[1]:.1f},{mean_bgr[2]:.1f})")

    cap.release()

def audit_audio(ffmpeg_exe):
    print("\n=== 3. AUDIO SIGNAL PROCESSING & DYNAMICS AUDIT ===")
    # Extract audio to raw wav
    temp_wav = os.path.join(REPO_ROOT, ".agents", "teamwork", "teamwork_preview_reviewer_2", "temp_audio_dump.wav")
    cmd = [
        ffmpeg_exe, "-y", "-i", VIDEO_PATH,
        "-vn", "-acodec", "pcm_s16le", "-ar", "48000", "-ac", "2",
        temp_wav
    ]
    subprocess.run(cmd, check=True, capture_output=True)

    import soundfile as sf
    data, sr = sf.read(temp_wav)
    os.remove(temp_wav)

    total_samples = len(data)
    dur = total_samples / sr
    channels = data.shape[1]
    peak = np.max(np.abs(data))
    peak_db = 20 * np.log10(peak) if peak > 0 else -999.0
    overall_rms = np.sqrt(np.mean(data**2))
    overall_rms_db = 20 * np.log10(overall_rms) if overall_rms > 0 else -999.0

    print(f"Audio Sample Rate: {sr} Hz")
    print(f"Audio Channels: {channels}")
    print(f"Total Samples: {total_samples}")
    print(f"Duration: {dur:.3f}s")
    print(f"Peak: {peak:.4f} ({peak_db:.2f} dBFS)")
    print(f"Overall RMS: {overall_rms:.4f} ({overall_rms_db:.2f} dBFS)")

    # Audit each Act interval
    intervals = [
        (0.0, 1.0, "Pre-roll / silence buffer"),
        (1.0, 22.0, "Act 1 AMS Voiceover + Bed"),
        (22.0, 23.0, "Act 1->2 Transition Inter-speech"),
        (23.0, 44.0, "Act 2 Bucarest Voiceover + Bed"),
        (44.0, 45.0, "Act 2->3 Transition Inter-speech"),
        (45.0, 67.0, "Act 3 CABIS Biométrie Voiceover + Bed"),
        (67.0, 68.0, "Act 3->4 Transition Inter-speech"),
        (68.0, 78.0, "Act 4 Rayonnement Voiceover + Bed"),
        (78.0, 85.0, "Act 4 Ambient Bed Finale (Post-speech)")
    ]

    for start_t, end_t, desc in intervals:
        s_idx = int(start_t * sr)
        e_idx = min(int(end_t * sr), total_samples)
        segment = data[s_idx:e_idx]
        seg_peak = np.max(np.abs(segment))
        seg_peak_db = 20 * np.log10(seg_peak) if seg_peak > 0 else -999.0
        seg_rms = np.sqrt(np.mean(segment**2))
        seg_rms_db = 20 * np.log10(seg_rms) if seg_rms > 0 else -999.0
        print(f"Interval [{start_t:4.1f}s - {end_t:4.1f}s] [{desc:<38}]: RMS={seg_rms_db:6.2f} dBFS, Peak={seg_peak_db:6.2f} dBFS")

def audit_assets():
    print("\n=== 4. ASSET QUALITY & FORENSIC INPAINTING AUDIT ===")
    # 4.1 Portrait
    print("--- 4.1 thomas_portrait_alpha.png ---")
    if os.path.exists(PORTRAIT_PATH):
        im = Image.open(PORTRAIT_PATH)
        w, h = im.size
        mode = im.mode
        print(f"Dimensions: {w}x{h}, Mode: {mode}, Format: {im.format}")
        if mode == "RGBA":
            alpha = np.array(im.split()[-1])
            trans_pct = np.mean(alpha == 0) * 100
            semi_trans_pct = np.mean((alpha > 0) & (alpha < 255)) * 100
            opaque_pct = np.mean(alpha == 255) * 100
            print(f"Alpha distribution: Pure transparent={trans_pct:.2f}%, Semi-transparent (feather/hair)={semi_trans_pct:.2f}%, Pure opaque={opaque_pct:.2f}%")
            # Bounding box of content
            bbox = im.getbbox()
            print(f"Content bounding box: {bbox}")
    else:
        print("[FAIL] Portrait alpha not found!")

    # 4.2 act3_cabis_terminal.jpg vs act3_cabis_terminal_raw.jpg
    print("\n--- 4.2 act3_cabis_terminal.jpg vs act3_cabis_terminal_raw.jpg ---")
    if os.path.exists(ACT3_PATH) and os.path.exists(ACT3_RAW_PATH):
        img_inpainted = cv2.imread(ACT3_PATH)
        img_raw = cv2.imread(ACT3_RAW_PATH)
        diff = cv2.absdiff(img_inpainted, img_raw)
        diff_gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
        changed_pixels = np.count_nonzero(diff_gray > 5)
        total_pixels = diff_gray.size
        print(f"Dimensions: Inpainted {img_inpainted.shape}, Raw {img_raw.shape}")
        print(f"Changed pixels (> 5 diff): {changed_pixels} / {total_pixels} ({changed_pixels / total_pixels * 100:.2f}%)")

        # Specific regions check:
        # Region 1: Airplane tail fin (x: 0-100, y: 150-260)
        tail_diff = np.mean(diff[150:260, 0:100])
        print(f"Mean diff in tail fin region: {tail_diff:.2f}")

        # Region 2: Fuselage text (x: 270-330, y: 350-380)
        fuse_diff = np.mean(diff[350:380, 270:330])
        print(f"Mean diff in fuselage text region: {fuse_diff:.2f}")

        # Region 3: e-Gate OLED screen (x: 770-825, y: 350-410)
        screen_diff = np.mean(diff[350:410, 770:825])
        print(f"Mean diff in e-Gate OLED screen region: {screen_diff:.2f}")

        # Region 4: Untouched background check (e.g. floor x: 1000-1200, y: 600-700)
        untouched_diff = np.mean(diff[600:700, 1000:1200])
        print(f"Mean diff in untouched floor region: {untouched_diff:.2f}")
    else:
        print("[FAIL] Missing act3 images for diff comparison!")

if __name__ == "__main__":
    ff = locate_ffmpeg()
    audit_video_ffprobe(ff)
    audit_video_frames()
    audit_audio(ff)
    audit_assets()

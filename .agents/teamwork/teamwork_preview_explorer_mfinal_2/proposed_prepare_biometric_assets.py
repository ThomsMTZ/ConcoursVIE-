#!/usr/bin/env python3
"""
=============================================================================
Grand Prix V.I.E Roumanie 2026 — Asset Preparation & Biometric Compositing
=============================================================================
Author: Teamwork Video Engineering
Target Deliverables:
  1. public/assets/images/thomas_portrait_alpha.png (1080x1440, RGBA 32-bit)
  2. public/assets/images/act3_cabis_terminal.jpg (Inpainted zero-logo + e-Gate warp)
=============================================================================
"""

import os
import sys
import shutil
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Define repository root and file paths
REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SOURCE_PHOTO_PATH = r"C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test\IMG-20260901-WA0014.jpg"
TARGET_PORTRAIT_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "thomas_portrait_alpha.png")
TARGET_BG_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "act3_cabis_terminal.jpg")
BACKUP_BG_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "act3_cabis_terminal_raw.jpg")


def step1_extract_portrait():
    """Extract Thomas portrait using rembg U2-Net, crop at 3:4 aspect ratio, and resize to 1080x1440."""
    print("\n--- STEP 1: AI Portrait Extraction (rembg U2-Net) ---")
    if not os.path.exists(SOURCE_PHOTO_PATH):
        raise FileNotFoundError(f"Source photo not found at: {SOURCE_PHOTO_PATH}")

    import rembg

    print(f"[1/4] Loading high-resolution source photo: {SOURCE_PHOTO_PATH}")
    with Image.open(SOURCE_PHOTO_PATH) as im:
        w, h = im.size
        print(f"      Original image size: {w}x{h} px")

        # Thomas is centered horizontally (~1920) with optimal bust & head proportions
        # 3:4 aspect ratio crop box: width 2250, height 3000 (800, 700, 3050, 3700)
        crop_box = (800, 700, 3050, 3700)
        print(f"[2/4] Cropping bust with 3:4 aspect ratio: {crop_box}")
        cropped = im.crop(crop_box)

        print("[3/4] Running rembg U2-Net model for neural hair/background separation...")
        alpha_img = rembg.remove(cropped)

        print("[4/4] Resampling with Lanczos to exact contract dimensions 1080x1440 (RGBA)...")
        final_portrait = alpha_img.resize((1080, 1440), Image.Resampling.LANCZOS)

        os.makedirs(os.path.dirname(TARGET_PORTRAIT_PATH), exist_ok=True)
        final_portrait.save(TARGET_PORTRAIT_PATH, format="PNG")
        print(f"✔ Successfully generated: {TARGET_PORTRAIT_PATH} ({final_portrait.size}, mode={final_portrait.mode})")


def step2_inpaint_zero_logo(bg_img):
    """Inpaint airplane tail bird emblem and fuselage text (TAROM) for zero-logo compliance."""
    print("\n--- STEP 2: Zero-Logo Inpainting on Parked Airplane ---")
    h_bg, w_bg = bg_img.shape[:2]
    mask = np.zeros((h_bg, w_bg), dtype=np.uint8)

    # 1. Fuselage text: 'TAROM' located at x in [273, 322], y in [358, 372]
    fuse_roi = bg_img[358:372, 273:322]
    fuse_mask = ((fuse_roi[:, :, 2] < 205) | (fuse_roi[:, :, 1] < 205)).astype(np.uint8) * 255
    kernel = np.ones((3, 3), np.uint8)
    fuse_mask = cv2.dilate(fuse_mask, kernel, iterations=1)
    mask[358:372, 273:322] = fuse_mask

    # 2. Tail fin circular bird emblem: located at x in [240, 270], y in [325, 355]
    tail_roi = bg_img[325:355, 240:270]
    tail_mask = ((tail_roi[:, :, 2] > 165) & (tail_roi[:, :, 1] > 185) & (tail_roi[:, :, 0] > 215)).astype(np.uint8) * 255
    tail_mask = cv2.dilate(tail_mask, kernel, iterations=1)
    mask[325:355, 240:270] = tail_mask

    print("[1/2] Created precise threshold-based inpainting mask for airplane branding")
    cleaned_bg = cv2.inpaint(bg_img, mask, inpaintRadius=2, flags=cv2.INPAINT_TELEA)
    print("✔ Successfully inpainted airplane logo & text with Telea method")
    return cleaned_bg


def step3_perspective_warp_egate(bg_img):
    """Perspective warp Thomas biometric display onto e-Gate terminal OLED screen."""
    print("\n--- STEP 3: e-Gate OLED Screen Perspective Warp ---")
    h_bg, w_bg = bg_img.shape[:2]

    # Destination coordinates of physical tilted OLED screen on portique
    dst_pts = np.float32([
        [787, 353],  # Top-Left
        [818, 357],  # Top-Right
        [807, 404],  # Bottom-Right
        [777, 400]   # Bottom-Left
    ])

    # 1. Design micro high-contrast biometric badge
    badge_w, badge_h = 160, 240
    badge = Image.new("RGBA", (badge_w, badge_h), (8, 15, 30, 255))
    draw = ImageDraw.Draw(badge)

    # Glowing border & top header
    draw.rectangle([0, 0, badge_w - 1, badge_h - 1], outline=(0, 240, 255, 230), width=3)
    draw.rectangle([0, 0, badge_w, 32], fill=(0, 200, 255, 120))
    draw.text((12, 8), "CABIS BIOMETRIC", fill=(255, 255, 255, 255))

    # Load extracted alpha portrait of Thomas and crop tight on face
    portrait = Image.open(TARGET_PORTRAIT_PATH)
    # Face crop within the 1080x1440 portrait
    face_tight = portrait.crop((150, 80, 930, 1120))
    face_tight.thumbnail((136, 160), Image.Resampling.LANCZOS)
    fw, fh = face_tight.size
    badge.paste(face_tight, ((badge_w - fw) // 2, 38), face_tight)

    # Subtle laser line across eyes
    laser_y = 38 + int(fh * 0.45)
    draw.line([(0, laser_y), (badge_w, laser_y)], fill=(16, 185, 129, 230), width=2)

    # Bottom verification status bar
    draw.rectangle([0, badge_h - 36, badge_w, badge_h], fill=(16, 185, 129, 220))
    draw.text((12, badge_h - 26), "T. MARTINEZ // PASS", fill=(255, 255, 255, 255))

    badge_cv = cv2.cvtColor(np.array(badge), cv2.COLOR_RGBA2BGRA)

    # 2. Compute Homography matrix and warp
    src_pts = np.float32([
        [0, 0],
        [badge_w, 0],
        [badge_w, badge_h],
        [0, badge_h]
    ])

    matrix = cv2.getPerspectiveTransform(src_pts, dst_pts)
    warped = cv2.warpPerspective(badge_cv, matrix, (w_bg, h_bg), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_CONSTANT, borderValue=(0, 0, 0, 0))

    # 3. Alpha blend onto background
    alpha = warped[:, :, 3] / 255.0
    result = bg_img.copy()
    for c in range(3):
        result[:, :, c] = (result[:, :, c] * (1.0 - alpha) + warped[:, :, c] * alpha).astype(np.uint8)

    print("✔ Successfully warped and blended biometric badge onto e-Gate OLED display")
    return result


def main():
    print("=" * 70)
    print(" Grand Prix V.I.E Roumanie 2026 — Biometric Asset Preparation Pipeline")
    print("=" * 70)

    # 1. Extract Portrait
    step1_extract_portrait()

    # 2. Check / Backup Background
    if not os.path.exists(TARGET_BG_PATH):
        raise FileNotFoundError(f"Background image not found: {TARGET_BG_PATH}")

    if not os.path.exists(BACKUP_BG_PATH):
        shutil.copy2(TARGET_BG_PATH, BACKUP_BG_PATH)
        print(f"Created safety backup: {BACKUP_BG_PATH}")

    # Read base background
    bg_img = cv2.imread(BACKUP_BG_PATH if os.path.exists(BACKUP_BG_PATH) else TARGET_BG_PATH)

    # 3. Inpaint Zero-Logo
    cleaned_bg = step2_inpaint_zero_logo(bg_img)

    # 4. Warp Biometric Display onto e-Gate Screen
    final_bg = step3_perspective_warp_egate(cleaned_bg)

    # 5. Save updated background
    cv2.imwrite(TARGET_BG_PATH, final_bg, [cv2.IMWRITE_JPEG_QUALITY, 96])
    print(f"\n✔ Successfully wrote updated Act 3 background: {TARGET_BG_PATH}")
    print("=" * 70)
    print(" Asset preparation pipeline completed with 100% success.")
    print("=" * 70)


if __name__ == "__main__":
    main()

import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Load extracted alpha portrait
portrait_path = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\rembg_bust_IMG-20260901-WA0014.jpg.png"
out_path = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\holographic_biometric_sample.png"

im = Image.open(portrait_path).convert("RGBA")
w, h = im.size

# Target card size
canvas_w, canvas_h = 420, 560
# Resize portrait to fit nicely inside card
portrait_resized = im.copy()
portrait_resized.thumbnail((360, 480), Image.Resampling.LANCZOS)
pw, ph = portrait_resized.size

# Create base dark holographic HUD canvas
hud = Image.new("RGBA", (canvas_w, canvas_h), (3, 7, 18, 220)) # Deep navy glass
draw = ImageDraw.Draw(hud)

# Paste portrait centered
offset_x = (canvas_w - pw) // 2
offset_y = 60
hud.paste(portrait_resized, (offset_x, offset_y), portrait_resized)

# Apply scanlines over portrait region
overlay = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
ov_draw = ImageDraw.Draw(overlay)

for y in range(offset_y, offset_y + ph, 4):
    ov_draw.line([(offset_x, y), (offset_x + pw, y)], fill=(0, 240, 255, 35), width=1)

# Horizontal biometric laser line (cyan-emerald glow)
laser_y = offset_y + int(ph * 0.42)
for thickness, alpha in [(7, 40), (5, 80), (3, 140), (1, 230)]:
    ov_draw.line([(offset_x - 10, laser_y), (offset_x + pw + 10, laser_y)], fill=(16, 185, 129, alpha), width=thickness)

# Biometric landmark crosshairs on eyes, nose, mouth
landmarks = [
    (offset_x + int(pw * 0.36), offset_y + int(ph * 0.38)), # Left eye
    (offset_x + int(pw * 0.65), offset_y + int(ph * 0.39)), # Right eye
    (offset_x + int(pw * 0.50), offset_y + int(ph * 0.52)), # Nose tip
    (offset_x + int(pw * 0.41), offset_y + int(ph * 0.64)), # Left mouth
    (offset_x + int(pw * 0.59), offset_y + int(ph * 0.64)), # Right mouth
    (offset_x + int(pw * 0.50), offset_y + int(ph * 0.72)), # Chin
]

# Connecting polygon for face mesh
pts = [landmarks[0], landmarks[1], landmarks[4], landmarks[5], landmarks[3]]
ov_draw.polygon(pts, outline=(0, 240, 255, 90))

for lx, ly in landmarks:
    ov_draw.ellipse([lx-3, ly-3, lx+3, ly+3], fill=(16, 185, 129, 220), outline=(0, 240, 255, 255))
    ov_draw.line([(lx-7, ly), (lx+7, ly)], fill=(0, 240, 255, 180), width=1)
    ov_draw.line([(lx, ly-7), (lx, ly+7)], fill=(0, 240, 255, 180), width=1)

# HUD Bracket Corners around portrait
bx1, by1 = offset_x - 12, offset_y - 12
bx2, by2 = offset_x + pw + 12, offset_y + ph + 12
arm = 20

# Top-left
ov_draw.line([(bx1, by1), (bx1 + arm, by1)], fill=(0, 240, 255, 230), width=2)
ov_draw.line([(bx1, by1), (bx1, by1 + arm)], fill=(0, 240, 255, 230), width=2)
# Top-right
ov_draw.line([(bx2, by1), (bx2 - arm, by1)], fill=(0, 240, 255, 230), width=2)
ov_draw.line([(bx2, by1), (bx2, by1 + arm)], fill=(0, 240, 255, 230), width=2)
# Bottom-left
ov_draw.line([(bx1, by2), (bx1 + arm, by2)], fill=(0, 240, 255, 230), width=2)
ov_draw.line([(bx1, by2), (bx1, by2 - arm)], fill=(0, 240, 255, 230), width=2)
# Bottom-right
ov_draw.line([(bx2, by2), (bx2 - arm, by2)], fill=(0, 240, 255, 230), width=2)
ov_draw.line([(bx2, by2), (bx2, by2 - arm)], fill=(0, 240, 255, 230), width=2)

# Card Border & Tech Accents
ov_draw.rectangle([1, 1, canvas_w-2, canvas_h-2], outline=(0, 240, 255, 120), width=1)
ov_draw.line([(10, 42), (canvas_w-10, 42)], fill=(255, 255, 255, 40), width=1)

# Header & Telemetry Text
ov_draw.text((16, 14), "CABIS // BIOMETRIC PORTAL GATE-04", fill=(0, 240, 255, 255))
ov_draw.text((canvas_w - 75, 14), "LIVE SCAN", fill=(16, 185, 129, 255))

# Bottom telemetry
ov_draw.text((18, canvas_h - 48), "ID: MARTINEZ // THOMAS", fill=(240, 248, 255, 255))
ov_draw.text((18, canvas_h - 30), "V.I.E BUCAREST 2026 // FULL-STACK", fill=(148, 163, 184, 255))
ov_draw.text((canvas_w - 110, canvas_h - 48), "MATCH: 99.8%", fill=(16, 185, 129, 255))
ov_draw.text((canvas_w - 110, canvas_h - 30), "[VERIFIED]", fill=(16, 185, 129, 255))

# Composite overlay onto hud
final_img = Image.alpha_composite(hud, overlay)
final_img.save(out_path)
print(f"Holographic sample saved to {out_path}")

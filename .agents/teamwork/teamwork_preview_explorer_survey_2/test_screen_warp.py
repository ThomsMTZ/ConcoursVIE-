import cv2
import numpy as np

bg_path = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\public\assets\images\act3_cabis_terminal.jpg"
overlay_path = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\holographic_biometric_sample.png"
out_path = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\egate_screen_warped_sample.jpg"

bg = cv2.imread(bg_path)
h_bg, w_bg = bg.shape[:2]

overlay = cv2.imread(overlay_path, cv2.IMREAD_UNCHANGED)
h_ov, w_ov = overlay.shape[:2]

src_pts = np.float32([
    [0, 0],
    [w_ov, 0],
    [w_ov, h_ov],
    [0, h_ov]
])

# Precise destination corners of the tilted OLED screen on the turnstile display
dst_pts = np.float32([
    [787, 353],  # Top-Left
    [818, 357],  # Top-Right
    [807, 404],  # Bottom-Right
    [777, 400]   # Bottom-Left
])

matrix = cv2.getPerspectiveTransform(src_pts, dst_pts)
warped = cv2.warpPerspective(overlay, matrix, (w_bg, h_bg), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=(0,0,0,0))

alpha = warped[:, :, 3] / 255.0
for c in range(3):
    bg[:, :, c] = bg[:, :, c] * (1.0 - alpha) + warped[:, :, c] * alpha

crop_x1, crop_y1 = 700, 300
crop_x2, crop_y2 = 900, 480
egate_crop = bg[crop_y1:crop_y2, crop_x1:crop_x2]

cv2.imwrite(out_path, egate_crop)
print(f"Saved refined warped crop to {out_path}")

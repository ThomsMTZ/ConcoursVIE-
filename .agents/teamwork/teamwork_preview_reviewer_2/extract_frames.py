import cv2
import os

video_path = r"dist\MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"
out_dir = r".agents\teamwork\teamwork_preview_reviewer_2\frames"
os.makedirs(out_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

points = [
    (10.0, "frame_act1_ams.png"),
    (30.0, "frame_act2_bucarest.png"),
    (50.0, "frame_act3_cabis_hud.png"),
    (54.0, "frame_act3_cabis_validated.png"),
    (75.0, "frame_act4_radiance.png")
]

for t, filename in points:
    idx = int(t * fps)
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ret, frame = cap.read()
    if ret:
        out_path = os.path.join(out_dir, filename)
        # resize for quick inspection if needed or save 1080p
        # Let's save half-res (960x540) to keep size compact
        half = cv2.resize(frame, (960, 540), interpolation=cv2.INTER_AREA)
        cv2.imwrite(out_path, half)
        print(f"Saved {filename} at {t}s (frame {idx})")
    else:
        print(f"Failed to read frame at {t}s")

cap.release()

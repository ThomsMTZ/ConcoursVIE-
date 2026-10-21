import cv2
import numpy as np

video_path = r"dist\MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"
cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

for f in range(int(54.5 * fps), int(56.5 * fps), 5):
    cap.set(cv2.CAP_PROP_POS_FRAMES, f)
    ret, frame = cap.read()
    if ret:
        card_roi = frame[150:500, 1500:1900]
        green_mask = (card_roi[:, :, 1] > 160) & (card_roi[:, :, 2] < 100) & (card_roi[:, :, 0] < 150)
        cnt = np.count_nonzero(green_mask)
        t = f / fps
        print(f"Frame {f} (t={t:.2f}s): green={cnt}")
        if cnt > 500:
            # Save verified frame
            cv2.imwrite(r".agents\teamwork\teamwork_preview_reviewer_2\frames\verified_transition.png", card_roi)
            print("Saved verified_transition.png")
            break

cap.release()

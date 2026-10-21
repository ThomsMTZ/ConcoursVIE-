import cv2
import numpy as np

video_path = r"dist\MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"
cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

# Let's crop the text area in the biometric card (top right of screen)
# Screen is 1920x1080. The card is fixed top-[14%] right-4 md:right-8, w-[300px] or [340px].
# Right-most 400px, y from 150 to 500.

print("Searching for VERIFIED state in video...")
for sec in range(50, 65):
    idx = int(sec * fps)
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ret, frame = cap.read()
    if ret:
        # Check green pixels in the card header/status area
        # Green in BGR has high G, lower R and B (e.g. emerald #10b981 -> B~129, G~185, R~16)
        card_roi = frame[150:500, 1500:1900]
        # Check for emerald green pixels (B < 150, G > 160, R < 100)
        green_mask = (card_roi[:, :, 1] > 160) & (card_roi[:, :, 2] < 100) & (card_roi[:, :, 0] < 150)
        green_count = np.count_nonzero(green_mask)
        print(f"t = {sec:2d}s (frame {idx}): emerald green pixel count = {green_count}")

cap.release()

import cv2
import numpy as np
from PIL import Image

src_path = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\bust_IMG-20260901-WA0014.jpg"
out_path = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\test_extracted_alpha.png"

img = cv2.imread(src_path)
h, w = img.shape[:2]

# Initialize mask for GrabCut
mask = np.zeros((h, w), np.uint8)
bgdModel = np.zeros((1, 65), np.float64)
fgdModel = np.zeros((1, 65), np.float64)

# Bounding box containing the person (leaving a 15px border as background)
rect = (15, 15, w - 30, h - 30)

cv2.grabCut(img, mask, rect, bgdModel, fgdModel, 3, cv2.GC_INIT_WITH_RECT)
mask2 = np.where((mask == 2) | (mask == 0), 0, 255).astype('uint8')

# Feather edges slightly
mask_feathered = cv2.GaussianBlur(mask2, (7, 7), 0)

# Create 4-channel BGRA image
b, g, r = cv2.split(img)
bgra = cv2.merge([b, g, r, mask_feathered])

cv2.imwrite(out_path, bgra)
print(f"Extraction test saved to {out_path}, size={w}x{h}")

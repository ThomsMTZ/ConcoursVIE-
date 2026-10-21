import cv2
import numpy as np
from PIL import Image

portrait_path = r"public\assets\images\thomas_portrait_alpha.png"
img = Image.open(portrait_path)
print("Image size:", img.size)

# Check lower part of portrait (y from 1000 to 1440)
cropped = img.crop((0, 900, 1080, 1440))
cropped.save(r".agents\teamwork\teamwork_preview_reviewer_2\portrait_lower.png")
print("Saved portrait_lower.png")

# Also let's inspect act3_cabis_terminal.jpg in the airplane area and e-Gate area
act3_path = r"public\assets\images\act3_cabis_terminal.jpg"
act3 = cv2.imread(act3_path)
cv2.imwrite(r".agents\teamwork\teamwork_preview_reviewer_2\act3_tail_crop.png", act3[140:270, 0:120])
cv2.imwrite(r".agents\teamwork\teamwork_preview_reviewer_2\act3_fuse_crop.png", act3[340:390, 260:340])
cv2.imwrite(r".agents\teamwork\teamwork_preview_reviewer_2\act3_egate_crop.png", act3[340:420, 760:830])
print("Saved act3 crops for visual review")

import cv2
import numpy as np

img_path = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\public\assets\images\act3_cabis_terminal.jpg"
img = cv2.imread(img_path)
h, w, c = img.shape
print(f"act3_cabis_terminal.jpg: {w}x{h}, {c} channels")

# Let's inspect regions of interest in the image:
# 1. Passenger face location:
# The woman is walking in the center gate
# 2. Front e-gate pillar screen (right of passenger):
# Center-right e-gate pillar screen
# 3. Floating HUD biometric box:
# In ThreeScene or React overlay, where would a HUD biometric scan box be positioned?
# Let's check aspect ratio: 1376 / 768 = 1.7916 (~16:9 is 1.777)
print(f"Aspect ratio: {w/h:.4f}")

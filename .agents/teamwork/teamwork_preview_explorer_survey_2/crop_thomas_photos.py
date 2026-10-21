import os
from PIL import Image

src_dir = r"C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test"
out_dir = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails"

# In 3840 x 5120 images:
# Thomas' head and bust are roughly centered in x (1000 to 2800) and upper half in y (500 to 3200)
# Let's crop tight headshots and bust shots for WA0011, WA0012, WA0014, WA0022

photos = [
    ("IMG-20260901-WA0011.jpg", (800, 500, 3000, 3500)),
    ("IMG-20260901-WA0012.jpg", (800, 1000, 3000, 4000)),
    ("IMG-20260901-WA0014.jpg", (800, 700, 3000, 3700)),
    ("IMG-20260901-WA0022.jpg", (800, 700, 3000, 3700)),
]

for filename, bbox in photos:
    p = os.path.join(src_dir, filename)
    if os.path.exists(p):
        im = Image.open(p)
        cropped = im.crop(bbox)
        cropped.thumbnail((600, 800))
        out_name = f"bust_{filename}"
        cropped.save(os.path.join(out_dir, out_name))
        print(f"Saved {out_name}, size={cropped.size}")

        # Also tight face crop
        # Head is roughly top 50% of the bust
        w_b, h_b = im.size
        tight_bbox = (int(bbox[0] + (bbox[2]-bbox[0])*0.15),
                      int(bbox[1]),
                      int(bbox[2] - (bbox[2]-bbox[0])*0.15),
                      int(bbox[1] + (bbox[3]-bbox[1])*0.65))
        face_crop = im.crop(tight_bbox)
        face_crop.thumbnail((500, 600))
        face_name = f"face_{filename}"
        face_crop.save(os.path.join(out_dir, face_name))
        print(f"Saved {face_name}")

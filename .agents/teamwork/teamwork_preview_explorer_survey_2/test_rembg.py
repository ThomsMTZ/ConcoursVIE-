import rembg
from PIL import Image
import os

thumb_dir = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails"

for name in ["bust_IMG-20260901-WA0014.jpg", "bust_IMG-20260901-WA0011.jpg"]:
    in_path = os.path.join(thumb_dir, name)
    out_path = os.path.join(thumb_dir, f"rembg_{name}.png")
    
    print(f"Processing {name} with rembg...")
    with Image.open(in_path) as im:
        output = rembg.remove(im)
        output.save(out_path)
    print(f"Saved {out_path}")

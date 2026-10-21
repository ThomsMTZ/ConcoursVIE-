import os
import sys
from PIL import Image, ExifTags, ImageStat
import numpy as np

folder = r"C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test"
files_to_check = [
    "IMG-20260901-WA0011.jpg",
    "IMG-20260901-WA0012.jpg",
    "IMG-20260901-WA0013.jpg",
    "IMG-20260901-WA0014.jpg",
    "IMG-20260901-WA0022.jpg",
    "IMG-20260901-WA0025.jpg"
]

print(f"Inspecting images in {folder}...\n")

for filename in files_to_check:
    filepath = os.path.join(folder, filename)
    if not os.path.exists(filepath):
        print(f"[-] {filename} not found")
        continue

    file_size_kb = os.path.getsize(filepath) / 1024.0
    
    with Image.open(filepath) as img:
        width, height = img.size
        img_format = img.format
        mode = img.mode
        stat = ImageStat.Stat(img)
        mean_rgb = stat.mean
        stddev_rgb = stat.stddev
        
        exif_info = {}
        exif_data = img.getexif()
        if exif_data:
            for tag_id, value in exif_data.items():
                tag_name = ExifTags.TAGS.get(tag_id, tag_id)
                exif_info[tag_name] = value

    print(f"=== {filename} ===")
    print(f"  File size: {file_size_kb:.1f} KB ({file_size_kb/1024:.2f} MB)")
    print(f"  Dimensions: {width} x {height} px")
    print(f"  Aspect ratio: {width/height:.4f} ({'Portrait' if height > width else 'Landscape'})")
    print(f"  Mode: {mode}, Format: {img_format}")
    print(f"  Mean RGB: R={mean_rgb[0]:.1f}, G={mean_rgb[1]:.1f}, B={mean_rgb[2]:.1f}")
    print(f"  StdDev RGB: R={stddev_rgb[0]:.1f}, G={stddev_rgb[1]:.1f}, B={stddev_rgb[2]:.1f}")
    print(f"  EXIF items: {len(exif_info)}")
    for k, v in list(exif_info.items())[:5]:
        print(f"    {k}: {v}")
    print()

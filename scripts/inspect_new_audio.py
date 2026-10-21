import os
import subprocess
import json
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
print(f"FFmpeg path: {ffmpeg_exe}")

files = [
    "assets/Acte 1.m4a.mp4",
    "assets/Acte 2.m4a.mp4",
    "assets/Acte 3.m4a.mp4",
    "assets/Acte 4.m4a.mp4"
]

for f in files:
    cmd = [ffmpeg_exe, "-i", f]
    res = subprocess.run(cmd, capture_output=True, text=True)
    print(f"\n--- {f} ---")
    for line in res.stderr.splitlines():
        if "Duration:" in line or "Stream #" in line:
            print(" ", line.strip())

import os
import subprocess
import json
import imageio_ffmpeg
import numpy as np

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()

files = [
    ("Acte 1", "assets/Acte 1.m4a.mp4", 0.0, 22.0),
    ("Acte 2", "assets/Acte 2.m4a.mp4", 22.0, 44.0),
    ("Acte 3", "assets/Acte 3.m4a.mp4", 44.0, 67.0),
    ("Acte 4", "assets/Acte 4.m4a.mp4", 67.0, 85.0)
]

for name, path, t_start, t_end in files:
    # Run silencedetect to find leading and trailing silence
    cmd = [
        ffmpeg_exe, "-i", path,
        "-af", "silencedetect=noise=-35dB:d=0.2",
        "-f", "null", "-"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    silences = []
    for line in res.stderr.splitlines():
        if "silence_start" in line or "silence_end" in line:
            silences.append(line.strip())
            
    # Run volumedetect
    cmd2 = [
        ffmpeg_exe, "-i", path,
        "-af", "volumedetect",
        "-f", "null", "-"
    ]
    res2 = subprocess.run(cmd2, capture_output=True, text=True)
    vols = []
    for line in res2.stderr.splitlines():
        if "mean_volume" in line or "max_volume" in line:
            vols.append(line.strip())
            
    print(f"\n=== {name} ({path}) ===")
    print(f"Target slot in video: {t_start:.1f}s -> {t_end:.1f}s (slot duration: {t_end - t_start:.1f}s)")
    print("Volume stats:", vols)
    print("Silences:", silences[:6])

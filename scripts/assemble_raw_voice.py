import os
import subprocess
import soundfile as sf
import numpy as np
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
sr = 48000
total_samples = int(85.0 * sr)
composite_voice = np.zeros(total_samples, dtype=np.float32)

act_placements = [
    ("Acte 1", "assets/Acte 1.m4a.mp4", 0.0),
    ("Acte 2", "assets/Acte 2.m4a.mp4", 22.0),
    ("Acte 3", "assets/Acte 3.m4a.mp4", 44.0),
    ("Acte 4", "assets/Acte 4.m4a.mp4", 67.0),
]

for name, path, start_sec in act_placements:
    temp_wav = f"scripts/.temp_{name.replace(' ', '_')}.wav"
    cmd = [
        ffmpeg_exe, "-y", "-i", path,
        "-vn", "-ac", "1", "-ar", str(sr),
        "-c:a", "pcm_s16le", temp_wav
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    data, _ = sf.read(temp_wav)
    if os.path.exists(temp_wav):
        os.remove(temp_wav)
        
    start_sample = int(start_sec * sr)
    end_sample = min(total_samples, start_sample + len(data))
    copy_len = end_sample - start_sample
    composite_voice[start_sample:end_sample] = data[:copy_len]
    print(f"Placed {name} from t={start_sec:.2f}s to t={start_sec + copy_len/sr:.2f}s")

sf.write("scripts/raw_composite_voice.wav", composite_voice, sr)
print(f"Exported raw composite voice to scripts/raw_composite_voice.wav ({len(composite_voice)/sr}s)")

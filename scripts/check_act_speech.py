import os
import subprocess
import soundfile as sf
import numpy as np
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
sr = 48000

acts = [
    ("Acte 1", "assets/Acte 1.m4a.mp4"),
    ("Acte 2", "assets/Acte 2.m4a.mp4"),
    ("Acte 3", "assets/Acte 3.m4a.mp4"),
    ("Acte 4", "assets/Acte 4.m4a.mp4"),
]

for name, path in acts:
    temp_wav = f"scripts/.temp_{name.replace(' ', '_')}.wav"
    cmd = [
        ffmpeg_exe, "-y", "-i", path,
        "-vn", "-ac", "1", "-ar", str(sr),
        "-c:a", "pcm_s16le", temp_wav
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    data, _ = sf.read(temp_wav)
    os.remove(temp_wav)
    
    # Calculate energy profile
    frame_size = int(sr * 0.02) # 20ms
    frames = [np.sqrt(np.mean(data[i:i+frame_size]**2)) for i in range(0, len(data)-frame_size, frame_size)]
    frames = np.array(frames)
    
    threshold = 0.015 # speech threshold
    speech_indices = np.where(frames > threshold)[0]
    first_speech_t = (speech_indices[0] * frame_size) / sr if len(speech_indices) > 0 else 0
    last_speech_t = (speech_indices[-1] * frame_size) / sr if len(speech_indices) > 0 else len(data)/sr
    total_dur = len(data) / sr
    
    print(f"{name}: Total {total_dur:.2f}s | Speech starts at {first_speech_t:.2f}s, ends at {last_speech_t:.2f}s (Speech duration: {last_speech_t - first_speech_t:.2f}s)")

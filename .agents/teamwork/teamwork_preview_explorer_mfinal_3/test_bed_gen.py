import numpy as np
import soundfile as sf
import os
import subprocess
import imageio_ffmpeg

SAMPLE_RATE = 48000
TOTAL_DURATION = 85.0  # seconds
TOTAL_SAMPLES = int(SAMPLE_RATE * TOTAL_DURATION)

def generate_cinematic_ambient_bed(duration_sec=85.0, sample_rate=48000):
    t = np.linspace(0, duration_sec, int(sample_rate * duration_sec), endpoint=False)
    
    # Root chord: D major 9th / Sus2 (warm, expansive, aerospace feel)
    # Frequencies: D2 (73.42), A2 (110.00), D3 (146.83), E3 (164.81), F#3 (185.00), A3 (220.00), B3 (246.94)
    chord_freqs = [
        (73.42, 0.35),   # Sub drone
        (110.00, 0.28),  # Fifth
        (146.83, 0.22),  # Octave
        (164.81, 0.18),  # 9th (E)
        (185.00, 0.15),  # Major 3rd (F#)
        (220.00, 0.12),  # High fifth
        (246.94, 0.08)   # 6th/13th (B) - ethereal sheen
    ]
    
    # Left and Right stereo channels
    left = np.zeros_like(t)
    right = np.zeros_like(t)
    
    # Slow LFOs for organic movement
    lfo1 = 0.5 + 0.5 * np.sin(2 * np.pi * 0.08 * t)        # 12.5s cycle
    lfo2 = 0.5 + 0.5 * np.cos(2 * np.pi * 0.05 * t + 0.5)  # 20s cycle
    lfo3 = 0.5 + 0.5 * np.sin(2 * np.pi * 0.13 * t + 1.2)  # 7.7s cycle
    
    for freq, amp in chord_freqs:
        # Subtle detuning between ears for wide cinematic stereo image (+/- 0.15 Hz)
        detune = 0.15 * (freq / 100.0)
        
        # Fundamental sine + soft 2nd harmonic (warm analog synth timbre)
        sig_l = np.sin(2 * np.pi * (freq - detune) * t) + 0.25 * np.sin(2 * np.pi * 2 * (freq - detune) * t)
        sig_r = np.sin(2 * np.pi * (freq + detune) * t) + 0.25 * np.sin(2 * np.pi * 2 * (freq + detune) * t)
        
        # Modulate amplitude with LFO
        mod = 0.7 + 0.3 * np.sin(2 * np.pi * (0.04 + freq*0.0002) * t)
        left += sig_l * amp * mod
        right += sig_r * amp * mod
        
    # Add subtle atmospheric air flow (filtered pink-ish noise)
    noise = np.random.normal(0, 0.02, size=len(t))
    # Simple smoothing to simulate lowpass filter at ~300 Hz
    smooth_len = int(sample_rate / 350)
    kernel = np.ones(smooth_len) / smooth_len
    air = np.convolve(noise, kernel, mode='same')
    
    left += air * 0.15 * lfo2
    right += air * 0.15 * lfo1
    
    # Master Envelope: 3s smooth fade-in, steady, 4s cinematic fade-out at end
    fade_in_len = int(3.0 * sample_rate)
    fade_out_len = int(4.0 * sample_rate)
    
    env = np.ones_like(t)
    # Cosine fade in
    env[:fade_in_len] = 0.5 * (1 - np.cos(np.linspace(0, np.pi, fade_in_len)))
    # Cosine fade out
    env[-fade_out_len:] = 0.5 * (1 + np.cos(np.linspace(0, np.pi, fade_out_len)))
    
    left *= env
    right *= env
    
    # Calibrate level to -20 dB RMS
    stereo = np.column_stack([left, right])
    rms = np.sqrt(np.mean(stereo**2))
    target_rms = 10 ** (-20.0 / 20.0)  # -20 dB = 0.1
    if rms > 0:
        stereo = stereo * (target_rms / rms)
    
    # Ensure no clipping
    peak = np.max(np.abs(stereo))
    if peak > 0.95:
        stereo = stereo * (0.95 / peak)
        
    return stereo

if __name__ == "__main__":
    work_dir = os.path.dirname(os.path.abspath(__file__))
    out_wav = os.path.join(work_dir, "test_ambient_bed.wav")
    bed = generate_cinematic_ambient_bed(TOTAL_DURATION, SAMPLE_RATE)
    sf.write(out_wav, bed, SAMPLE_RATE)
    print(f"Generated ambient bed: shape={bed.shape}, peak={np.max(np.abs(bed)):.4f}, rms={np.sqrt(np.mean(bed**2)):.4f}")

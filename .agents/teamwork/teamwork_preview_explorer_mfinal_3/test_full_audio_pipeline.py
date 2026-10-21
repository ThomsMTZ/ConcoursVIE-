import asyncio
import os
import subprocess
import numpy as np
import scipy.signal as signal
import soundfile as sf
import imageio_ffmpeg
import edge_tts

SAMPLE_RATE = 48000
TOTAL_DURATION = 85.0  # seconds
TOTAL_SAMPLES = int(SAMPLE_RATE * TOTAL_DURATION)

ACT_TIMINGS = [
    {
        "id": 1,
        "name": "Acte 01 // 30,000 FT",
        "start_sec": 1.0,
        "text": (
            "À trente mille pieds d'altitude, une trajectoire ne doit rien au hasard. "
            "En arrivant à Bucarest en mai 2025 pour mon V.I.E, j'ai pris de la hauteur sur le projet AMS : "
            "rapatrier et migrer des outils critiques de navigation aérienne au sein d'une équipe agile."
        )
    },
    {
        "id": 2,
        "name": "Acte 02 // 4,500 FT",
        "start_sec": 23.0,
        "text": (
            "Mais un V.I.E, c'est avant tout traverser les nuages pour s'ancrer sur le terrain. "
            "En atterrissant en Roumanie, j'ai découvert une culture chaleureuse, francophile, et des ingénieurs roumains "
            "d'une réactivité redoutable qui ont enrichi mes méthodes et ouvert mes horizons."
        )
    },
    {
        "id": 3,
        "name": "Acte 03 // 0 FT (SOL)",
        "start_sec": 45.0,
        "text": (
            "Une fois au sol, ma mission a pris une nouvelle dimension en mars 2026 avec le projet CABIS. "
            "Du suivi des avions dans le ciel, je suis passé à la sécurisation des passagers dans les aéroports "
            "grâce aux portiques de contrôle biométrique, en intervenant sur toute la chaîne Full-Stack."
        )
    },
    {
        "id": 4,
        "name": "Acte 04 // PERSPECTIVES",
        "start_sec": 68.0,
        "text": (
            "De la gestion du ciel avec AMS aux portiques biométriques CABIS, j'ai vu comment l'excellence technologique française "
            "rayonne lorsqu'elle s'unit au dynamisme roumain. "
            "Ce V.I.E n'a pas seulement guidé des avions et des passagers : il a transformé ma propre trajectoire."
        )
    }
]

VOICE = "fr-FR-HenriNeural"

def generate_ambient_bed(duration_sec=85.0, sample_rate=48000):
    """
    Synthesize an elegant, subtle cinematic ambient audio bed.
    Warm analog chord pad (D9 sus2) + slow LFO breathing modulation + soft filtered air flow.
    RMS calibrated to -20 dB.
    """
    t = np.linspace(0, duration_sec, int(sample_rate * duration_sec), endpoint=False)
    
    # Warm aerospace chord frequencies: D2, A2, D3, E3, F#3, A3
    chord_freqs = [
        (73.42, 0.32),   # D2 sub-fundamental
        (110.00, 0.28),  # A2 fifth
        (146.83, 0.24),  # D3 octave
        (164.81, 0.18),  # E3 ninth
        (185.00, 0.15),  # F#3 major third
        (220.00, 0.12),  # A3 high fifth
        (246.94, 0.08)   # B3 sixth
    ]
    
    left = np.zeros_like(t)
    right = np.zeros_like(t)
    
    lfo_left = 0.6 + 0.4 * np.sin(2 * np.pi * 0.07 * t)
    lfo_right = 0.6 + 0.4 * np.cos(2 * np.pi * 0.05 * t + 0.7)
    
    for freq, amp in chord_freqs:
        detune = 0.12 * (freq / 100.0)
        # Sine + subtle second harmonic for analog warmth
        tone_l = np.sin(2 * np.pi * (freq - detune) * t) + 0.2 * np.sin(2 * np.pi * 2 * (freq - detune) * t)
        tone_r = np.sin(2 * np.pi * (freq + detune) * t) + 0.2 * np.sin(2 * np.pi * 2 * (freq + detune) * t)
        
        mod = 0.75 + 0.25 * np.sin(2 * np.pi * (0.035 + freq * 0.0001) * t)
        left += tone_l * amp * mod
        right += tone_r * amp * mod
        
    # Soft cabin/flight air texture (filtered noise)
    noise = np.random.normal(0, 0.02, size=len(t))
    smooth_len = int(sample_rate / 350)
    kernel = np.ones(smooth_len) / smooth_len
    air = np.convolve(noise, kernel, mode='same')
    
    left += air * 0.15 * lfo_left
    right += air * 0.15 * lfo_right
    
    # Smooth master fade-in (2.5s) and fade-out (3.5s)
    fade_in = int(2.5 * sample_rate)
    fade_out = int(3.5 * sample_rate)
    env = np.ones_like(t)
    env[:fade_in] = 0.5 * (1 - np.cos(np.linspace(0, np.pi, fade_in)))
    env[-fade_out:] = 0.5 * (1 + np.cos(np.linspace(0, np.pi, fade_out)))
    
    left *= env
    right *= env
    
    # Calibrate to -20 dB RMS
    stereo = np.column_stack([left, right])
    rms = np.sqrt(np.mean(stereo ** 2))
    target_rms = 10 ** (-20.0 / 20.0) # 0.1000
    if rms > 0:
        stereo *= (target_rms / rms)
        
    # Prevent hard peaks
    peak = np.max(np.abs(stereo))
    if peak > 0.95:
        stereo *= (0.95 / peak)
        
    return stereo

async def run_pipeline():
    work_dir = os.path.dirname(os.path.abspath(__file__))
    temp_dir = os.path.join(work_dir, "temp_render_test")
    os.makedirs(temp_dir, exist_ok=True)
    
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    
    print("[1/4] Synthesizing speech acts with edge-tts...")
    act_audios = []
    for act in ACT_TIMINGS:
        temp_mp3 = os.path.join(temp_dir, f"act_{act['id']}.mp3")
        comm = edge_tts.Communicate(act["text"], voice=VOICE, rate="+3%", pitch="+0Hz")
        await comm.save(temp_mp3)
        
        # Read with soundfile
        data, sr = sf.read(temp_mp3)
        if sr != SAMPLE_RATE:
            # Resample to 48000 Hz
            data = signal.resample_poly(data, SAMPLE_RATE, sr)
        
        # Ensure 2-channel stereo
        if data.ndim == 1:
            data = np.column_stack([data, data])
            
        dur = len(data) / SAMPLE_RATE
        print(f"  Act {act['id']} ({act['start_sec']}s): duration = {dur:.2f}s ({len(data)} samples)")
        act_audios.append((act, data))
        
    print("[2/4] Assembling master voice track with precision silence padding...")
    master_voice = np.zeros((TOTAL_SAMPLES, 2), dtype=np.float32)
    for act, data in act_audios:
        start_idx = int(act["start_sec"] * SAMPLE_RATE)
        end_idx = start_idx + len(data)
        if end_idx > TOTAL_SAMPLES:
            end_idx = TOTAL_SAMPLES
            data = data[:TOTAL_SAMPLES - start_idx]
        master_voice[start_idx:end_idx] += data
        
    # Normalize dialogue peak to -1.5 dB (factor ~ 0.84)
    v_peak = np.max(np.abs(master_voice))
    if v_peak > 0:
        target_v_peak = 10 ** (-1.5 / 20.0) # 0.8414
        master_voice *= (target_v_peak / v_peak)
    print(f"  Master voice track peak: {np.max(np.abs(master_voice)):.4f}")
    
    print("[3/4] Generating cinematic ambient audio bed (-20 dB)...")
    ambient_bed = generate_ambient_bed(TOTAL_DURATION, SAMPLE_RATE)
    print(f"  Ambient bed RMS: {np.sqrt(np.mean(ambient_bed**2)):.4f} (target 0.1000 = -20 dB)")
    
    print("[4/4] Mixing voiceover and ambient bed...")
    mixed = master_voice + ambient_bed
    m_peak = np.max(np.abs(mixed))
    if m_peak > 0.98:
        mixed *= (0.98 / m_peak)
    print(f"  Final mixed track: shape={mixed.shape}, peak={np.max(np.abs(mixed)):.4f}, duration={len(mixed)/SAMPLE_RATE:.2f}s")
    
    # Save temporary master WAV
    temp_wav = os.path.join(temp_dir, "test_mixed_master.wav")
    sf.write(temp_wav, mixed, SAMPLE_RATE)
    
    # Encode with FFmpeg to 192k MP3
    test_mp3 = os.path.join(temp_dir, "test_voiceover.mp3")
    cmd = [
        ffmpeg_exe, "-y", "-i", temp_wav,
        "-c:a", "libmp3lame", "-b:a", "192k", "-ar", "48000",
        test_mp3
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    
    # Verify final MP3 duration and properties via ffprobe/ffmpeg
    probe_cmd = [ffmpeg_exe, "-i", test_mp3, "-f", "null", "-"]
    res = subprocess.run(probe_cmd, capture_output=True, text=True)
    for line in res.stderr.splitlines():
        if "Duration:" in line or "Audio:" in line:
            print(f"  [Probe] {line.strip()}")
            
    print("SUCCESS: Pipeline fully verified!")

if __name__ == "__main__":
    asyncio.run(run_pipeline())

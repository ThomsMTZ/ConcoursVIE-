"""
scripts/master_cinematic_audio.py
Mixage audio haute fidélité style 'Bande-Annonce de Film' (Movie Trailer)
pour les 4 pistes vocales enregistrées acte par acte par Thomas MARTINEZ — Grand Prix V.I.E Roumanie 2026.

Entrées :
- assets/Acte 1.m4a.mp4 (0.0s -> 22.0s)
- assets/Acte 2.m4a.mp4 (22.0s -> 44.0s)
- assets/Acte 3.m4a.mp4 (44.0s -> 67.0s)
- assets/Acte 4.m4a.mp4 (67.0s -> 85.0s)
"""

import os
import sys
import subprocess
import shutil
import numpy as np
import scipy.signal as signal
import soundfile as sf
import pedalboard as pb
import imageio_ffmpeg

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)

SAMPLE_RATE = 48000
TOTAL_DURATION = 85.0
TOTAL_SAMPLES = int(SAMPLE_RATE * TOTAL_DURATION) # 4 080 000

ACTS_CONFIG = [
    {"name": "Acte 1", "file": "assets/Acte 1.m4a", "start_s": 0.0, "end_s": 22.0},
    {"name": "Acte 2", "file": "assets/Acte 2.m4a", "start_s": 22.0, "end_s": 44.0},
    {"name": "Acte 3", "file": "assets/Acte 3.m4a", "start_s": 44.0, "end_s": 67.0},
    {"name": "Acte 4", "file": "assets/Acte 4.m4a", "start_s": 67.0, "end_s": 85.0},
]

def load_and_assemble_acts(root_dir, sample_rate, total_samples):
    """Charge les 4 fichiers d'actes, normalise leurs niveaux et les assemble sur la timeline 85s."""
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    composite_voice = np.zeros(total_samples, dtype=np.float32)
    
    print("[Voice Assembly] Chargement des 4 pistes par acte...")
    act_data_list = []
    
    for cfg in ACTS_CONFIG:
        path = os.path.join(root_dir, cfg["file"])
        if not os.path.exists(path):
            raise FileNotFoundError(f"Fichier introuvable : {path}")
            
        temp_wav = os.path.join(root_dir, "scripts", f".temp_{cfg['name'].replace(' ', '_')}.wav")
        cmd = [
            ffmpeg_exe, "-y", "-i", path,
            "-vn", "-ac", "1", "-ar", str(sample_rate),
            "-c:a", "pcm_s16le", temp_wav
        ]
        subprocess.run(cmd, check=True, capture_output=True)
        raw_data, _ = sf.read(temp_wav)
        if os.path.exists(temp_wav):
            os.remove(temp_wav)
            
        raw_data = raw_data.astype(np.float32)
        act_data_list.append((cfg, raw_data))
        
    # Calcul des RMS de parole par acte
    speech_rms_list = []
    for cfg, data in act_data_list:
        speech = data[np.abs(data) > 0.02]
        rms = float(np.sqrt(np.mean(speech**2))) if len(speech) > 0 else 0.10
        speech_rms_list.append(rms)
        print(f"  {cfg['name']}: durée {len(data)/sample_rate:.2f}s | RMS parole = {rms:.4f} ({20*np.log10(rms):.1f} dB)")
        
    # Référence RMS basée sur l'Acte 1
    ref_rms = speech_rms_list[0]
    print(f"[Voice Balance] Normalisation inter-actes sur la référence Acte 1 (RMS: {ref_rms:.4f})...")
    
    for i, (cfg, data) in enumerate(act_data_list):
        rms = speech_rms_list[i]
        gain = float(ref_rms / rms) if rms > 0 else 1.0
        gain = np.clip(gain, 0.85, 1.25)
        normalized_data = data * gain
        print(f"  {cfg['name']}: Gain ajusté x{gain:.3f} ({20*np.log10(gain):+.2f} dB)")
        
        start_idx = int(cfg["start_s"] * sample_rate)
        slot_len = int((cfg["end_s"] - cfg["start_s"]) * sample_rate)
        
        copy_len = min(len(normalized_data), slot_len, total_samples - start_idx)
        composite_voice[start_idx:start_idx + copy_len] = normalized_data[:copy_len]
        
    print(f"[Voice Assembly] 4 actes assemblés avec succès sur {TOTAL_DURATION}s.")
    return composite_voice

def process_trailer_vocal(voice_mono, sr):
    """
    Chaîne de traitement vocal cinéma professionnelle (Pedalboard) :
    - Highpass 80 Hz raide
    - LowShelf 190 Hz +2.5 dB (chaleur)
    - Peak -2.2 dB à 500 Hz (anti-boîte)
    - Peak +2.8 dB à 3.2 kHz (diction)
    - Peak -1.8 dB à 6.8 kHz (dé-esseur)
    - HighShelf +3.0 dB à 9.5 kHz (brillance)
    - Compresseur cinéma transparent (Ratio 2.4:1)
    - Limiteur à -1.5 dBFS
    - Reverb Plate 7%
    """
    print("[Voice DSP] Application de la chaîne vocale Bande-Annonce...")
    
    # Filtre passe-haut Butterworth 4ème ordre
    b, a = signal.butter(4, 80.0 / (sr / 2), btype='highpass')
    filtered = signal.filtfilt(b, a, voice_mono)
    
    # Noise gate doux avec fftconvolve ultra-rapide
    frame_len = int(sr * 0.04) # 40ms
    num_frames = len(filtered) // frame_len
    env = np.zeros_like(filtered)
    for i in range(num_frames):
        chunk = filtered[i*frame_len:(i+1)*frame_len]
        r = np.sqrt(np.mean(chunk**2))
        env[i*frame_len:(i+1)*frame_len] = r
    
    gate_thresh = 10 ** (-48.0 / 20.0)
    gate_gain = np.clip((env - gate_thresh*0.4) / (gate_thresh*1.4), 0.25, 1.0)
    smooth_len = int(sr * 0.12)
    kernel = np.ones(smooth_len, dtype=np.float32) / smooth_len
    gate_gain = signal.fftconvolve(gate_gain, kernel, mode='same')
    
    gated_voice = filtered * gate_gain
    vocal_in = gated_voice.reshape(1, -1)
    
    board = pb.Pedalboard([
        pb.LowShelfFilter(cutoff_frequency_hz=190.0, gain_db=2.5),
        pb.PeakFilter(cutoff_frequency_hz=500.0, gain_db=-2.2, q=1.2),
        pb.PeakFilter(cutoff_frequency_hz=3200.0, gain_db=2.8, q=1.0),
        pb.PeakFilter(cutoff_frequency_hz=6800.0, gain_db=-1.8, q=2.2),
        pb.HighShelfFilter(cutoff_frequency_hz=9500.0, gain_db=3.0),
        pb.Compressor(threshold_db=-17.0, ratio=2.4, attack_ms=20.0, release_ms=140.0),
        pb.Gain(gain_db=2.0),
        pb.Limiter(threshold_db=-1.5)
    ])
    
    vocal_dry = board(vocal_in, sr)[0]
    
    dry_peak = np.max(np.abs(vocal_dry))
    if dry_peak > 0:
        vocal_dry = vocal_dry * (10 ** (-1.5 / 20.0) / dry_peak)
        
    # Reverb Plate feutrée cinéma
    reverb_board = pb.Pedalboard([
        pb.HighpassFilter(cutoff_frequency_hz=300.0),
        pb.LowpassFilter(cutoff_frequency_hz=5500.0),
        pb.Reverb(room_size=0.30, damping=0.60, wet_level=0.35, dry_level=0.0, width=1.0)
    ])
    
    stereo_in = np.vstack([vocal_dry, vocal_dry])
    vocal_wet = reverb_board(stereo_in, sr)
    
    vocal_stereo = np.column_stack([
        vocal_dry + 0.07 * vocal_wet[0],
        vocal_dry + 0.07 * vocal_wet[1]
    ])
    
    print(f"[Voice DSP] Voix traitée. Crête : {np.max(np.abs(vocal_stereo)):.4f}")
    return vocal_stereo, vocal_dry

def generate_cinematic_ambient_bed(duration_sec, sample_rate):
    """Nappe ambiante cinématographique D9 sus2 harmonique."""
    print("[Bed] Synthèse procédurale de la nappe musicale ambiante...")
    t = np.linspace(0, duration_sec, int(sample_rate * duration_sec), endpoint=False, dtype=np.float32)
    
    chord_freqs = [
        (73.42, 0.30),
        (110.00, 0.26),
        (146.83, 0.22),
        (164.81, 0.18),
        (185.00, 0.15),
        (220.00, 0.12),
        (246.94, 0.08)
    ]
    
    left = np.zeros_like(t)
    right = np.zeros_like(t)
    
    lfo_left = 0.6 + 0.4 * np.sin(2 * np.pi * 0.07 * t)
    lfo_right = 0.6 + 0.4 * np.cos(2 * np.pi * 0.05 * t + 0.7)
    
    for freq, amp in chord_freqs:
        detune = 0.12 * (freq / 100.0)
        tone_l = np.sin(2 * np.pi * (freq - detune) * t) + 0.2 * np.sin(2 * np.pi * 2 * (freq - detune) * t)
        tone_r = np.sin(2 * np.pi * (freq + detune) * t) + 0.2 * np.sin(2 * np.pi * 2 * (freq + detune) * t)
        mod = 0.75 + 0.25 * np.sin(2 * np.pi * (0.035 + freq * 0.0001) * t)
        left += tone_l * amp * mod
        right += tone_r * amp * mod
        
    noise = np.random.normal(0, 0.016, size=len(t)).astype(np.float32)
    smooth_len = int(sample_rate / 350)
    kernel = np.ones(smooth_len, dtype=np.float32) / smooth_len
    air = signal.fftconvolve(noise, kernel, mode='same')
    
    left += air * 0.15 * lfo_left
    right += air * 0.15 * lfo_right
    
    fade_in = int(1.8 * sample_rate)
    fade_out = int(2.5 * sample_rate)
    env = np.ones_like(t)
    env[:fade_in] = 0.5 * (1 - np.cos(np.linspace(0, np.pi, fade_in)))
    env[-fade_out:] = 0.5 * (1 + np.cos(np.linspace(0, np.pi, fade_out)))
    
    left *= env
    right *= env
    
    stereo = np.column_stack([left, right])
    rms = np.sqrt(np.mean(stereo ** 2))
    target_rms = 10 ** (-21.5 / 20.0)
    if rms > 0:
        stereo *= (target_rms / rms)
        
    return stereo

def generate_trailer_sound_design(duration_sec, sample_rate):
    """
    Effets sonores cinématiques :
    - 0.2s : Sub-Impact lourd et doux au démarrage du radar
    - 22.0s : Whoosh feutré lors de la plongée nuages vers Bucarest
    - 44.0s : Whoosh feutré / transition portique (AUCUNE cloche)
    - 66.8s : Swell cosmique feutré vers l'orbite
    """
    print("[SFX] Synthèse des effets sonores signature (cloche supprimée)...")
    total_samples = int(duration_sec * sample_rate)
    sfx = np.zeros((total_samples, 2), dtype=np.float32)
    
    def add_sub_impact(t_start, dur=2.0, f_start=85.0, f_end=32.0, amp=0.20):
        s_idx = int(t_start * sample_rate)
        e_idx = min(total_samples, s_idx + int(dur * sample_rate))
        n = e_idx - s_idx
        t = np.linspace(0, dur, n, endpoint=False, dtype=np.float32)
        f_inst = np.geomspace(f_start, f_end, n)
        phase = 2 * np.pi * np.cumsum(f_inst) / sample_rate
        sub = np.sin(phase) * amp * np.exp(-t * 2.2)
        sfx[s_idx:e_idx, 0] += sub
        sfx[s_idx:e_idx, 1] += sub

    def add_whoosh(t_start, dur=1.8, amp=0.08):
        s_idx = int(t_start * sample_rate)
        e_idx = min(total_samples, s_idx + int(dur * sample_rate))
        n = e_idx - s_idx
        t = np.linspace(0, dur, n, endpoint=False, dtype=np.float32)
        noise = np.random.normal(0, 1.0, n).astype(np.float32)
        env = np.sin(np.pi * (t / dur)) ** 2
        b, a = signal.butter(2, [200 / (sample_rate / 2), 1600 / (sample_rate / 2)], btype='band')
        filtered_noise = signal.filtfilt(b, a, noise)
        w = filtered_noise * env * amp
        pan_l = np.linspace(0.8, 0.2, n)
        pan_r = np.linspace(0.2, 0.8, n)
        sfx[s_idx:e_idx, 0] += w * pan_l
        sfx[s_idx:e_idx, 1] += w * pan_r

    def add_swell(t_start, dur=2.5, amp=0.09):
        s_idx = int(t_start * sample_rate)
        e_idx = min(total_samples, s_idx + int(dur * sample_rate))
        n = e_idx - s_idx
        t = np.linspace(0, dur, n, endpoint=False, dtype=np.float32)
        env = (t / dur) ** 2.5
        chord = np.sin(2 * np.pi * 146.83 * t) + np.sin(2 * np.pi * 220.00 * t) + np.sin(2 * np.pi * 293.66 * t)
        sw = chord * env * amp * 0.33
        sfx[s_idx:e_idx, 0] += sw
        sfx[s_idx:e_idx, 1] += sw

    add_sub_impact(0.2, dur=2.0, amp=0.20)
    add_whoosh(22.0, dur=1.8, amp=0.08)
    add_whoosh(44.0, dur=1.5, amp=0.07)
    add_swell(66.8, dur=2.5, amp=0.09)
    
    return sfx

def apply_sidechain_ducking(ambient_bed, voice_dry, sr):
    """Baisse la musique de façon douce (-2.5 dB) dès que Thomas s'exprime."""
    print("[Sidechain] Ducking dynamique de la nappe musicale...")
    frame_len = int(sr * 0.05)
    num_frames = len(voice_dry) // frame_len
    env = np.zeros(len(voice_dry), dtype=np.float32)
    for i in range(num_frames):
        chunk = voice_dry[i*frame_len:(i+1)*frame_len]
        r = np.sqrt(np.mean(chunk**2))
        env[i*frame_len:(i+1)*frame_len] = r
        
    speaking_mask = env > 0.015
    duck_gain = np.ones(len(voice_dry), dtype=np.float32)
    duck_gain[speaking_mask] = 0.75 # -2.5 dB
    
    smooth_len = int(sr * 0.35)
    kernel = np.ones(smooth_len, dtype=np.float32) / smooth_len
    smoothed_gain = signal.fftconvolve(duck_gain, kernel, mode='same')
    smoothed_gain = np.clip(smoothed_gain, 0.75, 1.0)
    
    ducked_bed = ambient_bed * smoothed_gain[:, None]
    return ducked_bed

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_assets_dir = os.path.join(root_dir, "public", "assets")
    assets_dir = os.path.join(root_dir, "assets")
    dist_assets_dir = os.path.join(root_dir, "dist", "assets")
    
    target_public = os.path.join(public_assets_dir, "voiceover.mp3")
    target_assets = os.path.join(assets_dir, "voiceover.mp3")
    target_dist = os.path.join(dist_assets_dir, "voiceover.mp3")
    
    print("================================================================")
    print("  MIXAGE AUDIO CINÉMATIQUE 4 ACTES — THOMAS MARTINEZ")
    print("================================================================")
    
    # 1. Chargement, calage et égalisation des 4 actes
    voice_mono = load_and_assemble_acts(root_dir, SAMPLE_RATE, TOTAL_SAMPLES)
    
    # 2. Traitement studio vocal 'Bande-Annonce'
    voice_stereo, voice_dry = process_trailer_vocal(voice_mono, SAMPLE_RATE)
    
    # 3. Nappe musicale ambiante
    ambient_bed = generate_cinematic_ambient_bed(TOTAL_DURATION, SAMPLE_RATE)
    
    # 4. Ducking Sidechain
    ducked_bed = apply_sidechain_ducking(ambient_bed, voice_dry, SAMPLE_RATE)
    
    # 5. Effets sonores signature (SANS cloche)
    sfx = generate_trailer_sound_design(TOTAL_DURATION, SAMPLE_RATE)
    
    # 6. Mixage Final (Voix + Nappe + SFX)
    print("[Master Mix] Fusion stéréo broadcast...")
    master_mix = voice_stereo + ducked_bed + sfx
    
    # 7. Limiteur de Master
    master_board = pb.Pedalboard([
        pb.Compressor(threshold_db=-6.0, ratio=1.6, attack_ms=25.0, release_ms=180.0),
        pb.Limiter(threshold_db=-1.0)
    ])
    final_master = master_board(master_mix.T, SAMPLE_RATE).T
    
    final_peak = np.max(np.abs(final_master))
    if final_peak > 0.95:
        final_master = final_master * (0.95 / final_peak)
        
    print(f"[Master Mix] Durée finale : {len(final_master)/SAMPLE_RATE:.2f}s | Crête True Peak : {np.max(np.abs(final_master)):.4f} (-1.0 dBFS)")
    
    temp_master_wav = os.path.join(root_dir, "scripts", ".temp_master_trailer.wav")
    sf.write(temp_master_wav, final_master, SAMPLE_RATE)
    
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    cmd = [
        ffmpeg_exe, "-y", "-i", temp_master_wav,
        "-c:a", "libmp3lame", "-b:a", "192k", "-ar", str(SAMPLE_RATE),
        target_public
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    
    shutil.copyfile(target_public, target_assets)
    shutil.copyfile(target_public, target_dist)
    
    if os.path.exists(temp_master_wav):
        os.remove(temp_master_wav)
        
    print(f"[Master Mix] Fichiers MP3 exportés avec succès !")
    print(f"  -> {target_public}")
    print(f"  -> {target_assets}")
    print(f"  -> {target_dist}")
    print("================================================================")

if __name__ == "__main__":
    main()

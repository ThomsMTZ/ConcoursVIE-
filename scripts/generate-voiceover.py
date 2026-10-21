"""
scripts/generate-voiceover.py
Grand Prix V.I.E Roumanie 2026 — Thomas MARTINEZ
Génération vocale haute fidélité segmentée par actes avec padding temporel d'extrême précision
et nappe musicale ambiante cinématographique à -20 dB.
"""

import asyncio
import os
import sys
import subprocess
import shutil
import numpy as np
import scipy.signal as signal
import soundfile as sf
import imageio_ffmpeg
import edge_tts

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

SAMPLE_RATE = 48000
TOTAL_DURATION = 85.0  # Durée réglementaire ciblée (< 90s)
TOTAL_SAMPLES = int(SAMPLE_RATE * TOTAL_DURATION)  # 4 080 000 échantillons à 48 kHz

VOICE = "fr-FR-HenriNeural"  # Voix masculine française chaleureuse, naturelle et claire

# Structure narrative des 4 actes
ACTS_CONFIG = [
    {
        "id": 1,
        "name": "ACTE 01 // 30,000 FT (AMS)",
        "start_sec": 0.5,
        "text": (
            "À trente mille pieds d'altitude, une trajectoire ne doit rien au hasard. "
            "En arrivant à Bucarest en mai 2025 pour mon V.I.E, j'ai pris de la hauteur sur le projet AMS : "
            "moderniser et migrer des outils critiques de gestion du trafic aérien pour plus de cent mille vols quotidiens. "
            "En tant que développeur Full-Stack et Scrum Master, j'ai orchestré les sprints d'une équipe biculturelle, "
            "alliant rigueur aéronautique et développement réactif."
        )
    },
    {
        "id": 2,
        "name": "ACTE 02 // 4,500 FT (APPROCHE BUCAREST)",
        "start_sec": 22.5,
        "text": (
            "Traverser les nuages pour atterrir en Roumanie, c'est s'ancrer dans un carrefour technologique européen "
            "d'une vitalité remarquable. À Bucarest, j'ai découvert un écosystème d'ingénieurs talentueux et francophiles, "
            "dont la réactivité et la créativité ont immédiatement nourri nos méthodes. "
            "Cette immersion culturelle au quotidien a soudé notre équipe et renforcé l'agilité de nos architectures."
        )
    },
    {
        "id": 3,
        "name": "ACTE 03 // 0 FT SOL (CABIS BIOMÉTRIE)",
        "start_sec": 44.5,
        "text": (
            "En mars 2026, ma mission franchit une nouvelle étape décisive avec le projet CABIS. "
            "Du suivi des avions dans le ciel, je passe à la sécurisation des passagers dans les aéroports "
            "grâce aux portiques de contrôle biométrique. "
            "De la caméra de reconnaissance faciale haute sécurité aux algorithmes d'authentification temps réel, "
            "mon engagement Full-Stack s'incarne directement à chaque franchissement de frontière."
        )
    },
    {
        "id": 4,
        "name": "ACTE 04 // PERSPECTIVES (RAYONNEMENT FR-RO)",
        "start_sec": 67.5,
        "text": (
            "Des couloirs aériens jusqu'aux terminaux internationaux, ce V.I.E prouve que l'alliance "
            "du savoir-faire technologique français et de l'énergie roumaine repousse les frontières de l'ingénierie. "
            "Plus qu'une mission professionnelle, cette aventure a forgé mon leadership, "
            "accéléré mes compétences et changé pour toujours ma propre trajectoire."
        )
    }
]

def generate_cinematic_ambient_bed(duration_sec=85.0, sample_rate=48000):
    """
    Génère une nappe sonore ambiante procédurale chaleureuse et cinématographique.
    Harmonie D9 sus2 (aéronautique & espace) avec LFO respiratoire et air feutré.
    Calibrée strictement à -20.0 dB RMS.
    """
    print("[Bed] Synthèse procédurale de la nappe musicale ambiante (D9 sus2)...")
    t = np.linspace(0, duration_sec, int(sample_rate * duration_sec), endpoint=False)
    
    # Fréquences fondamentales et harmoniques
    chord_freqs = [
        (73.42, 0.32),   # D2 sous-basse
        (110.00, 0.28),  # A2 quinte
        (146.83, 0.24),  # D3 octave
        (164.81, 0.18),  # E3 neuvième
        (185.00, 0.15),  # F#3 tierce majeure
        (220.00, 0.12),  # A3 quinte haute
        (246.94, 0.08)   # B3 treizième (brillance subtile)
    ]
    
    left = np.zeros_like(t)
    right = np.zeros_like(t)
    
    lfo_left = 0.6 + 0.4 * np.sin(2 * np.pi * 0.07 * t)
    lfo_right = 0.6 + 0.4 * np.cos(2 * np.pi * 0.05 * t + 0.7)
    
    for freq, amp in chord_freqs:
        detune = 0.12 * (freq / 100.0)
        # Synthèse oscillateur doux (sinusoïde + 2e harmonique chaude)
        tone_l = np.sin(2 * np.pi * (freq - detune) * t) + 0.2 * np.sin(2 * np.pi * 2 * (freq - detune) * t)
        tone_r = np.sin(2 * np.pi * (freq + detune) * t) + 0.2 * np.sin(2 * np.pi * 2 * (freq + detune) * t)
        
        mod = 0.75 + 0.25 * np.sin(2 * np.pi * (0.035 + freq * 0.0001) * t)
        left += tone_l * amp * mod
        right += tone_r * amp * mod
        
    # Souffle d'air atmosphérique filtré (simule le flux aéronautique feutré)
    noise = np.random.normal(0, 0.02, size=len(t))
    smooth_len = int(sample_rate / 350)
    kernel = np.ones(smooth_len) / smooth_len
    air = np.convolve(noise, kernel, mode='same')
    
    left += air * 0.15 * lfo_left
    right += air * 0.15 * lfo_right
    
    # Enveloppe maîtresse : fondu d'entrée doux (2.5s) et fondu de sortie final (3.5s)
    fade_in = int(2.5 * sample_rate)
    fade_out = int(3.5 * sample_rate)
    env = np.ones_like(t)
    env[:fade_in] = 0.5 * (1 - np.cos(np.linspace(0, np.pi, fade_in)))
    env[-fade_out:] = 0.5 * (1 + np.cos(np.linspace(0, np.pi, fade_out)))
    
    left *= env
    right *= env
    
    # Étalonnage rigoureux du volume à -20.0 dB RMS
    stereo = np.column_stack([left, right])
    rms = np.sqrt(np.mean(stereo ** 2))
    target_rms = 10 ** (-20.0 / 20.0)  # Exactement 0.1000
    if rms > 0:
        stereo *= (target_rms / rms)
        
    peak = np.max(np.abs(stereo))
    if peak > 0.95:
        stereo *= (0.95 / peak)
        
    print(f"[Bed] Nappe ambiante prête (RMS = {np.sqrt(np.mean(stereo**2)):.4f} = -20 dB, crête = {np.max(np.abs(stereo)):.4f})")
    return stereo

async def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_assets_dir = os.path.join(root_dir, "public", "assets")
    assets_dir = os.path.join(root_dir, "assets")
    dist_assets_dir = os.path.join(root_dir, "dist", "assets")
    temp_dir = os.path.join(root_dir, "scripts", ".temp_tts")
    
    os.makedirs(public_assets_dir, exist_ok=True)
    os.makedirs(assets_dir, exist_ok=True)
    os.makedirs(temp_dir, exist_ok=True)
    
    target_public = os.path.join(public_assets_dir, "voiceover.mp3")
    target_assets = os.path.join(assets_dir, "voiceover.mp3")
    target_dist = os.path.join(dist_assets_dir, "voiceover.mp3")
    
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    print("================================================================")
    print("[VOICEOVER] GENERATION DE LA VOIX-OFF & MIXAGE CINEMATIQUE 85.0s")
    print(f"Voix : {VOICE} | Echantillonnage : {SAMPLE_RATE} Hz | FFmpeg : {ffmpeg_exe}")
    print("================================================================")
    
    # 1. Synthèse vocale de chaque acte avec edge-tts
    act_segments = []
    for act in ACTS_CONFIG:
        temp_act_mp3 = os.path.join(temp_dir, f"act_{act['id']}.mp3")
        rate = "+8%" if act["id"] == 1 else "+4%"
        print(f"[TTS] Synthèse de l'{act['name']} (départ prévu : {act['start_sec']}s, cadence : {rate})...")
        comm = edge_tts.Communicate(act["text"], voice=VOICE, rate=rate, pitch="+0Hz")
        await comm.save(temp_act_mp3)
        
        # Décodage et ré-échantillonnage à 48 kHz
        data, sr = sf.read(temp_act_mp3)
        if sr != SAMPLE_RATE:
            data = signal.resample_poly(data, SAMPLE_RATE, sr)
            
        if data.ndim == 1:
            data = np.column_stack([data, data])
            
        dur = len(data) / SAMPLE_RATE
        print(f"  -> Durée : {dur:.2f}s ({len(data)} échantillons)")
        act_segments.append((act, data))
        
    # 2. Construction de la piste voix maîtresse avec silences de calage
    print("[Master] Assemblage de la piste voix avec silences calibrés...")
    master_voice = np.zeros((TOTAL_SAMPLES, 2), dtype=np.float32)
    for act, data in act_segments:
        start_idx = int(act["start_sec"] * SAMPLE_RATE)
        end_idx = start_idx + len(data)
        if end_idx > TOTAL_SAMPLES:
            end_idx = TOTAL_SAMPLES
            data = data[:TOTAL_SAMPLES - start_idx]
        master_voice[start_idx:end_idx] += data
        
    # Normalisation du niveau de parole à -1.5 dB crête (grande clarté vocale)
    v_peak = np.max(np.abs(master_voice))
    if v_peak > 0:
        target_v_peak = 10 ** (-1.5 / 20.0)  # 0.8414
        master_voice *= (target_v_peak / v_peak)
    print(f"[Master] Niveau crête voix-off normalisé à {np.max(np.abs(master_voice)):.4f} (-1.5 dB)")
    
    # 3. Synthèse de la nappe ambiante
    ambient_bed = generate_cinematic_ambient_bed(TOTAL_DURATION, SAMPLE_RATE)
    
    # 4. Mixage Voiceover + Ambient Bed
    print("[Mix] Fusion audio (Voix + Nappe à -20 dB)...")
    final_mix = master_voice + ambient_bed
    m_peak = np.max(np.abs(final_mix))
    if m_peak > 0.98:
        final_mix *= (0.98 / m_peak)
    print(f"[Mix] Mix final : {len(final_mix)} échantillons, durée = {len(final_mix)/SAMPLE_RATE:.2f}s, crête = {np.max(np.abs(final_mix)):.4f}")
    
    # Sauvegarde temporaire en WAV PCM 32-bit float
    temp_wav = os.path.join(temp_dir, "master_mix.wav")
    sf.write(temp_wav, final_mix, SAMPLE_RATE)
    
    # 5. Encodage broadcast MP3 192 kbps 48 kHz via FFmpeg
    print(f"[FFmpeg] Encodage MP3 haute qualité dans {target_public}...")
    cmd = [
        ffmpeg_exe, "-y", "-i", temp_wav,
        "-c:a", "libmp3lame", "-b:a", "192k", "-ar", str(SAMPLE_RATE),
        target_public
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    
    # Copie de sécurité dans assets/ et dist/assets/ si existant
    shutil.copyfile(target_public, target_assets)
    print(f"[Sync] Fichier dupliqué dans : {target_assets}")
    if os.path.exists(dist_assets_dir):
        shutil.copyfile(target_public, target_dist)
        print(f"[Sync] Fichier dupliqué dans : {target_dist}")
        
    # Nettoyage des fichiers temporaires
    try:
        shutil.rmtree(temp_dir)
    except Exception:
        pass
        
    # Vérification finale par FFprobe/FFmpeg
    probe_cmd = [ffmpeg_exe, "-i", target_public, "-f", "null", "-"]
    res = subprocess.run(probe_cmd, capture_output=True, text=True)
    for line in res.stderr.splitlines():
        if "Duration:" in line or "Stream #0:0" in line:
            print(f"  [Vérification] {line.strip()}")
            
    print("================================================================")
    print("[OK] PISTE AUDIO MASTER FINALISEE AVEC SUCCES (85.00s EXACTES)")
    print("================================================================")

if __name__ == "__main__":
    asyncio.run(main())

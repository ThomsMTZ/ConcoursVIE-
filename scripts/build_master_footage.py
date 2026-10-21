"""
scripts/build_master_footage.py
Assemble les 11 clips vidéo en un seul fichier MP4 continu de 85.00 secondes (5 100 frames à 60 fps CFR)
avec des fondus enchaînés xfade professionnels de 0.5s.
Élimine 100% des freezes au démarrage, des rollbacks et des sauts de décodeur.
"""

import os
import sys
import subprocess
import imageio_ffmpeg

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Définition des 11 plans avec timing exact sur 85.0s
# target timeline cuts: [7.5, 15.0, 22.5, 29.5, 37.0, 44.5, 52.0, 59.5, 67.5, 76.0, 85.0]
XFADE_DUR = 0.5

SHOTS = [
    # Acte 1 (0.0s - 22.5s)
    {"id": "1_1", "file": "public/assets/videos/act1_radar.mp4", "dur": 8.0, "hflip": False},
    {"id": "1_2", "file": "public/assets/videos/act1_real_flight.mp4", "dur": 8.0, "hflip": False},
    {"id": "1_3", "file": "public/assets/videos/act1_dev_console.mp4", "dur": 8.0, "hflip": False},
    # Acte 2 (22.5s - 44.5s)
    {"id": "2_1", "file": "public/assets/videos/act2_plane_descent.mp4", "dur": 7.5, "hflip": True}, # hflip pour cohérence sens de vol
    {"id": "2_2", "file": "public/assets/videos/act2_real_arcul_de_triumf.mp4", "dur": 8.0, "hflip": False},
    {"id": "2_3", "file": "public/assets/videos/act2_team_agile.mp4", "dur": 8.0, "hflip": False},
    # Acte 3 (44.5s - 67.5s)
    {"id": "3_1", "file": "public/assets/videos/act3_real_cabis_scan.mp4", "dur": 8.0, "hflip": False},
    {"id": "3_2", "file": "public/assets/videos/act3_egate_open.mp4", "dur": 8.0, "hflip": False},
    {"id": "3_3", "file": "public/assets/videos/act3_thomas_cabis_spy.mp4", "dur": 8.5, "hflip": False},
    # Acte 4 (67.5s - 85.0s)
    {"id": "4_1", "file": "public/assets/videos/act4_real_iss_earth.mp4", "dur": 9.0, "hflip": False},
    {"id": "4_2", "file": "public/assets/videos/act4_thomas_future.mp4", "dur": 9.0, "hflip": False},
]

OFFSETS = [7.5, 15.0, 22.5, 29.5, 37.0, 44.5, 52.0, 59.5, 67.5, 76.0]

def build_master_footage():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_public = os.path.join(root_dir, "public", "assets", "videos", "master_footage_85s.mp4")
    out_dist = os.path.join(root_dir, "dist", "assets", "videos", "master_footage_85s.mp4")
    os.makedirs(os.path.dirname(out_public), exist_ok=True)
    os.makedirs(os.path.dirname(out_dist), exist_ok=True)
    
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    
    cmd = [ffmpeg_exe, "-y"]
    
    # Inputs
    for s in SHOTS:
        input_path = os.path.join(root_dir, s["file"])
        cmd.extend(["-t", str(s["dur"]), "-i", input_path])
        
    # Filter graph
    # 1. Standardisation de chaque flux : 60 fps, 1920x1080 scale+pad, format yuv420p
    filter_parts = []
    for i, s in enumerate(SHOTS):
        flip_str = ",hflip" if s["hflip"] else ""
        filter_parts.append(
            f"[{i}:v]fps=60,scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1{flip_str}[v{i}]"
        )
        
    # 2. Chaîne de xfade
    # v0 + v1 -> x0
    # x0 + v2 -> x1
    # ...
    # x8 + v10 -> outv
    prev_label = "v0"
    for i in range(len(OFFSETS)):
        next_label = f"v{i+1}"
        out_label = "outv" if i == len(OFFSETS) - 1 else f"x{i}"
        offset = OFFSETS[i]
        filter_parts.append(
            f"[{prev_label}][{next_label}]xfade=transition=fade:duration={XFADE_DUR}:offset={offset}[{out_label}]"
        )
        prev_label = out_label
        
    filter_str = ";".join(filter_parts)
    
    cmd.extend([
        "-filter_complex", filter_str,
        "-map", "[outv]",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "17",
        "-pix_fmt", "yuv420p",
        "-r", "60",
        "-t", "85.0",
        out_public
    ])
    
    print("================================================================")
    print("  ASSEMBLAGE MASTER DU FOOTAGE VIDÉO 85.0s (11 PLANS SANS ROLLBACK)")
    print("================================================================")
    print(f"Sortie : {out_public}")
    
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"[ERREUR FFmpeg] {res.stderr}")
        sys.exit(1)
        
    import shutil
    shutil.copyfile(out_public, out_dist)
    print(f"[OK] Fichier master footage généré et dupliqué dans dist/ !")
    
    # Vérification durée et frames
    probe_cmd = [ffmpeg_exe, "-i", out_public, "-f", "null", "-"]
    probe = subprocess.run(probe_cmd, capture_output=True, text=True)
    for l in probe.stderr.splitlines():
        if "Duration:" in l or "frame=" in l:
            print(f"  {l.strip()}")
            
    print("================================================================")

if __name__ == "__main__":
    build_master_footage()

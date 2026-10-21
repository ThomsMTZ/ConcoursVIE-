import cv2
import numpy as np
import sys
import os

video_path = sys.argv[1] if len(sys.argv) > 1 else "dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"

if not os.path.exists(video_path):
    print(f"[ERREUR] Le fichier {video_path} n'existe pas.")
    sys.exit(1)

cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
duration = total_frames / fps if fps > 0 else 0

print("=" * 60)
print(f"AUDIT VIDEO DE FLUIDITE ET DE CONTINUITE")
print(f"Fichier : {video_path}")
print(f"Resolution : {width}x{height} | FPS : {fps:.2f} | Frames : {total_frames} | Duree : {duration:.2f}s")
print("=" * 60)

prev_frame = None
freeze_frames = 0
freeze_start_time = 0.0
freezes = []

# Analyse rapide et optimisee des frames avec cv2.absdiff
for idx in range(total_frames):
    ret, frame = cap.read()
    if not ret:
        break
    
    # Downscale leger 480x270 pour analyse haute vitesse sans perte de detection de freeze
    small = cv2.resize(frame, (480, 270))
    gray = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY)
    
    if prev_frame is not None:
        diff_img = cv2.absdiff(gray, prev_frame)
        diff = float(np.mean(diff_img))
        
        if diff < 0.05:
            if freeze_frames == 0:
                freeze_start_time = (idx - 1) / fps
            freeze_frames += 1
        else:
            if freeze_frames > 0:
                freeze_duration = freeze_frames / fps
                if freeze_duration >= 0.15:
                    freezes.append((freeze_start_time, freeze_duration, freeze_frames))
                freeze_frames = 0
    
    prev_frame = gray

if freeze_frames > 0:
    freeze_duration = freeze_frames / fps
    if freeze_duration >= 0.15:
        freezes.append((freeze_start_time, freeze_duration, freeze_frames))

cap.release()

print("\n--- RAPPORT DE FLUIDITE ---")
if not freezes:
    print(f"[PARFAIT] ZERO freeze detecte (> 150ms) sur l'ensemble des {total_frames} frames ({duration:.2f}s) !")
    print("La video est 100% fluide de t=0.0s a la derniere frame.")
else:
    print(f"[ATTENTION] {len(freezes)} gel(s) d'image detecte(s) :")
    for start, dur, count in freezes:
        print(f"  - Gel a t = {start:.2f}s pendant {dur:.2f}s ({count} frames)")

# Verification specifique du debut (t = 0.0s a 3.0s)
print("\n--- VERIFICATION DU DEMARRAGE (ACTE 1 - RADAR) ---")
cap2 = cv2.VideoCapture(video_path)
initial_diffs = []
prev = None
for i in range(min(180, total_frames)):
    ret, frame = cap2.read()
    if not ret: break
    small = cv2.resize(frame, (480, 270))
    gray = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY)
    if prev is not None:
        d = float(np.mean(cv2.absdiff(gray, prev)))
        initial_diffs.append(d)
    prev = gray
cap2.release()

avg_initial_diff = np.mean(initial_diffs) if initial_diffs else 0
print(f"Diff moyen sur les 3 premieres secondes : {avg_initial_diff:.4f}")
if avg_initial_diff > 0.5:
    print("[OK] Le radar et les elements de l'Acte 1 sont immediatement en mouvement des la premiere seconde !")
else:
    print(f"[INFO] Diff initial : {avg_initial_diff:.4f}")

print("=" * 60)

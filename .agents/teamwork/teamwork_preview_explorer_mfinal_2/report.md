# Rapport d'Exploration & Spécifications : Compositing Biométrique, Inpainting Zéro-Logo & HUD Biométrique

**Projet :** Grand Prix V.I.E Roumanie 2026 — Candidature Thomas Martinez  
**Auteur :** Explorer MFinal 2  
**Date :** 14 Octobre 2026  
**Rôle :** Spécialiste Compositing Photo, Inpainting Zéro-Logo & Biometric HUD  
**Statut :** Investigation Complète & Code Prêt à l'Emploi Validé Expérimentalement  

---

## 1. Synthèse Exécutive

Dans le cadre du perfectionnement visuel et narratif de la vidéo du **Grand Prix V.I.E Roumanie 2026**, notre mission s'est articulée autour de 3 piliers critiques :
1. **Extraction IA du portrait de Thomas Martinez** : Extraction propre et haute fidélité via le réseau de neurones U2-Net (`rembg`) depuis le cliché haute résolution `IMG-20260901-WA0014.jpg`, produisant `public/assets/images/thomas_portrait_alpha.png` en 1080x1440 RGBA 32-bit.
2. **Conformité stricte « Zéro Logo » & Inpainting** : Détection et élimination photoréaliste par inpainting OpenCV Telea de la marque « TAROM » et de l'emblème d'aile sur l'avion stationné sur le tarmac dans l'arrière-plan `public/assets/images/act3_cabis_terminal.jpg`.
3. **Compositing Dual-Tier (Micro & Macro)** :
   - *Compositing Micro (Incrustation Physique)* : Déformation homographique de perspective (`cv2.warpPerspective`) du profil biométrique de Thomas directement sur l'écran OLED incliné du portique de contrôle e-Gate (coordonnées : `[(787, 353), (818, 357), (807, 404), (777, 400)]`).
   - *Compositing Macro (HUD Holographique)* : Composant React temps réel `src/components/HUD/BiometricScanCard.tsx` positionné symétriquement sur le flanc droit de l'écran pendant tout l'Acte 3 (44.0s - 67.0s), animé par balayage laser, maillage polygonal facial, scanlines et bascule de validation à `t = 53.5s` (« MATCH 99.8% // IDENTITY CONFIRMED »).

Tous les algorithmes, coordonnées pixels et composants ont été validés expérimentalement avec zéro erreur TypeScript et vérification visuelle directe des rendus intermédiaires.

---

## 2. Analyse Approfondie des Photos Sources & Extraction IA (`rembg`)

### 2.1 Choix du Cliché Source : WA0014 vs WA0012 vs WA0011
Le répertoire personnel inspecté (`C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test`) contient 115 photos en ultra-haute résolution native **3840 x 5120 px** (19,6 Mpx).

- **`IMG-20260901-WA0012.jpg`** : Regard frontal vers la caméra, mais **les deux mains sont croisées sous le menton et masquent les lèvres et le menton**, ce qui compromet la conformité visuelle d'un scan biométrique officiel (norme ICAO 9303).
- **`IMG-20260901-WA0011.jpg`** : Regard en 3/4 profil orienté vers le ciel / horizon, avec écusson brodé sur le polo. C'est l'image idéale pour la métaphore de la vision d'avenir (Acte 1 ou Acte 4).
- **`IMG-20260901-WA0014.jpg` (Retenu à 100%)** :
  - Même session de prise de vue que WA0011 et WA0012 (éclairage naturel doux, même polo noir, même coiffure).
  - Regard **strictement plein cadre vers l'objectif**, sourire confiant.
  - **Visage 100% dégagé** : front, sourcils, yeux bleus/verts, nez, moustache, lèvres, menton, mâchoire et boucles de cheveux blondes/châtain clair parfaitement visibles.
  - Buste bien assis, bras posés sur la table, zéro obstruction faciale.

### 2.2 Paramètres de Détourage & Format Cible
- **Rapport de forme 3:4** : Dans l'image 3840x5120, la boîte de cadrage du buste est `(800, 700, 3050, 3700)` :
  - Largeur : 2250 px, Hauteur : 3000 px $\implies$ Ratio exact 3:4 (0.75).
- **Modèle de segmentation** : `rembg` basé sur l'architecture deep learning U2-Net (`onnxruntime`).
  - Résultat observé : Séparation micrométrique des mèches de cheveux bouclés sans franges blanchâtres ni effet d'escalier.
- **Résolution contractuelle** : Rééchantillonnage Lanczos bicubique haute précision vers **1080 x 1440 px**, mode couleur **RGBA 32-bit** (8 bits par canal, alpha transparent).
- **Fichier cible** : `public/assets/images/thomas_portrait_alpha.png`.

---

## 3. Inpainting Zéro-Logo de l'Avion (`act3_cabis_terminal.jpg`)

### 3.1 Audit de Non-Conformité Logo
La règle officielle du Grand Prix V.I.E interdit formellement l'affichage de logos commerciaux d'entreprises ou de compagnies partenaires.
Dans l'image d'origine `act3_cabis_terminal.jpg` (1376 x 768 px) :
- À travers la baie vitrée du terminal (à gauche des portiques, derrière la passagère) :
  1. La dérive bleue de l'avion arbore un **emblème circulaire blanc (oiseau stylisé TAROM)**.
  2. Le fuselage blanc porte l'inscription en lettres capitales bleues **« TAROM »**.

### 3.2 Coordonnées Exactes & Masque Photoréaliste
Pour éviter tout artefact de flou sur les montants métalliques noirs des vitres (situés à x=200..238) ou sur les vitres en plexiglas des portiques (situées à x=325..340) :
- **Emblème circulaire de la dérive (Tail fin)** :
  - Fenêtre de recherche : `x in [240, 270]`, `y in [325, 355]`.
  - Critère de seuillage couleur : Pixels de l'emblème blanc (`R > 165`, `G > 185`, `B > 215`) sur fond bleu marine (`B ~ 150-180, R ~ 80`).
  - Dilatation : 1 pixel (`kernel 3x3`).
- **Texte du fuselage (« TAROM »)** :
  - Fenêtre de recherche : `x in [273, 322]`, `y in [358, 372]`.
  - Critère de seuillage couleur : Pixels du texte bleu/gris (`R < 205` ou `G < 205`) sur fuselage blanc (`R, G, B > 215`).
  - Dilatation : 1 pixel (`kernel 3x3`).

### 3.3 Méthode d'Inpainting
- Algorithme : OpenCV `cv2.inpaint` avec méthode **Telea** (`cv2.INPAINT_TELEA`, rayon = 2 px).
- **Résultat validé** : L'inscription TAROM et l'emblème disparaissent complètement ; le fuselage redevient un dégradé d'aluminium blanc pur avec sa ligne d'horizon naturelle, et la dérive devient un aileron bleu neutre anonymisé. Zéro bavure sur les montants de vitre.

---

## 4. Compositing Micro : Incrustation Perspective e-Gate

### 4.1 Géométrie de l'Écran OLED du Portique
Sur le pilier du portique central e-Gate (à droite de la passagère), un écran OLED incliné affiche les informations du passager.
Coordonnées pixels mesurées dans le repère natif de `act3_cabis_terminal.jpg` (1376 x 768) :
```python
dst_pts = np.float32([
    [787, 353],  # Coin Supérieur Gauche
    [818, 357],  # Coin Supérieur Droit
    [807, 404],  # Coin Inférieur Droit
    [777, 400]   # Coin Inférieur Gauche
])
```
- Largeur apparente : ~31 px. Hauteur apparente : ~48 px.
- Angle d'inclinaison : ~14° vers l'ergonomie de l'usager.

### 4.2 Conception du Micro-Badge Biométrique
Pour que Thomas soit immédiatement identifiable même à cette échelle réduite :
- Canvas source : 160 x 240 px (ratio 2:3).
- Cadre émetteur OLED cyan (`#00f0ff`, épaisseur 3 px).
- Bandeau supérieur : Fond cyan semi-transparent avec texte « CABIS BIOMETRIC ».
- Portrait : Visage de Thomas recadré serré (joues, yeux, menton, cheveux) et contrasté pour un rendu OLED éclatant.
- Faisceau laser vert émeraude (`#10b981`) balayant horizontalement les yeux.
- Bandeau inférieur : Vert émeraude avec texte « T. MARTINEZ // PASS ».
- Projection homographique : `cv2.getPerspectiveTransform(src_pts, dst_pts)` puis `cv2.warpPerspective` avec interpolation Lanczos4 (`cv2.INTER_LANCZOS4`).
- Composition alpha : Fusion directe canal alpha sur le fond `act3_cabis_terminal.jpg`.

---

## 5. Script Complet Clé-en-Main : `scripts/prepare_biometric_assets.py`

Le script complet, documenté et testé est prêt à être exécuté par le Worker. Il est également sauvegardé dans `.agents/teamwork/teamwork_preview_explorer_mfinal_2/proposed_prepare_biometric_assets.py`.

```python
#!/usr/bin/env python3
"""
=============================================================================
Grand Prix V.I.E Roumanie 2026 — Asset Preparation & Biometric Compositing
=============================================================================
Author: Teamwork Video Engineering
Target Deliverables:
  1. public/assets/images/thomas_portrait_alpha.png (1080x1440, RGBA 32-bit)
  2. public/assets/images/act3_cabis_terminal.jpg (Inpainted zero-logo + e-Gate warp)
=============================================================================
"""

import os
import sys
import shutil
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Define repository root and file paths
REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SOURCE_PHOTO_PATH = r"C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test\IMG-20260901-WA0014.jpg"
TARGET_PORTRAIT_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "thomas_portrait_alpha.png")
TARGET_BG_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "act3_cabis_terminal.jpg")
BACKUP_BG_PATH = os.path.join(REPO_ROOT, "public", "assets", "images", "act3_cabis_terminal_raw.jpg")


def step1_extract_portrait():
    """Extract Thomas portrait using rembg U2-Net, crop at 3:4 aspect ratio, and resize to 1080x1440."""
    print("\n--- STEP 1: AI Portrait Extraction (rembg U2-Net) ---")
    if not os.path.exists(SOURCE_PHOTO_PATH):
        raise FileNotFoundError(f"Source photo not found at: {SOURCE_PHOTO_PATH}")

    import rembg

    print(f"[1/4] Loading high-resolution source photo: {SOURCE_PHOTO_PATH}")
    with Image.open(SOURCE_PHOTO_PATH) as im:
        w, h = im.size
        print(f"      Original image size: {w}x{h} px")

        # Thomas is centered horizontally (~1920) with optimal bust & head proportions
        # 3:4 aspect ratio crop box: width 2250, height 3000 (800, 700, 3050, 3700)
        crop_box = (800, 700, 3050, 3700)
        print(f"[2/4] Cropping bust with 3:4 aspect ratio: {crop_box}")
        cropped = im.crop(crop_box)

        print("[3/4] Running rembg U2-Net model for neural hair/background separation...")
        alpha_img = rembg.remove(cropped)

        print("[4/4] Resampling with Lanczos to exact contract dimensions 1080x1440 (RGBA)...")
        final_portrait = alpha_img.resize((1080, 1440), Image.Resampling.LANCZOS)

        os.makedirs(os.path.dirname(TARGET_PORTRAIT_PATH), exist_ok=True)
        final_portrait.save(TARGET_PORTRAIT_PATH, format="PNG")
        print(f"✔ Successfully generated: {TARGET_PORTRAIT_PATH} ({final_portrait.size}, mode={final_portrait.mode})")


def step2_inpaint_zero_logo(bg_img):
    """Inpaint airplane tail bird emblem and fuselage text (TAROM) for zero-logo compliance."""
    print("\n--- STEP 2: Zero-Logo Inpainting on Parked Airplane ---")
    h_bg, w_bg = bg_img.shape[:2]
    mask = np.zeros((h_bg, w_bg), dtype=np.uint8)

    # 1. Fuselage text: 'TAROM' located at x in [273, 322], y in [358, 372]
    fuse_roi = bg_img[358:372, 273:322]
    fuse_mask = ((fuse_roi[:, :, 2] < 205) | (fuse_roi[:, :, 1] < 205)).astype(np.uint8) * 255
    kernel = np.ones((3, 3), np.uint8)
    fuse_mask = cv2.dilate(fuse_mask, kernel, iterations=1)
    mask[358:372, 273:322] = fuse_mask

    # 2. Tail fin circular bird emblem: located at x in [240, 270], y in [325, 355]
    tail_roi = bg_img[325:355, 240:270]
    tail_mask = ((tail_roi[:, :, 2] > 165) & (tail_roi[:, :, 1] > 185) & (tail_roi[:, :, 0] > 215)).astype(np.uint8) * 255
    tail_mask = cv2.dilate(tail_mask, kernel, iterations=1)
    mask[325:355, 240:270] = tail_mask

    print("[1/2] Created precise threshold-based inpainting mask for airplane branding")
    cleaned_bg = cv2.inpaint(bg_img, mask, inpaintRadius=2, flags=cv2.INPAINT_TELEA)
    print("✔ Successfully inpainted airplane logo & text with Telea method")
    return cleaned_bg


def step3_perspective_warp_egate(bg_img):
    """Perspective warp Thomas biometric display onto e-Gate terminal OLED screen."""
    print("\n--- STEP 3: e-Gate OLED Screen Perspective Warp ---")
    h_bg, w_bg = bg_img.shape[:2]

    # Destination coordinates of physical tilted OLED screen on portique
    dst_pts = np.float32([
        [787, 353],  # Top-Left
        [818, 357],  # Top-Right
        [807, 404],  # Bottom-Right
        [777, 400]   # Bottom-Left
    ])

    # 1. Design micro high-contrast biometric badge
    badge_w, badge_h = 160, 240
    badge = Image.new("RGBA", (badge_w, badge_h), (8, 15, 30, 255))
    draw = ImageDraw.Draw(badge)

    # Glowing border & top header
    draw.rectangle([0, 0, badge_w - 1, badge_h - 1], outline=(0, 240, 255, 230), width=3)
    draw.rectangle([0, 0, badge_w, 32], fill=(0, 200, 255, 120))
    draw.text((12, 8), "CABIS BIOMETRIC", fill=(255, 255, 255, 255))

    # Load extracted alpha portrait of Thomas and crop tight on face
    portrait = Image.open(TARGET_PORTRAIT_PATH)
    # Face crop within the 1080x1440 portrait
    face_tight = portrait.crop((150, 80, 930, 1120))
    face_tight.thumbnail((136, 160), Image.Resampling.LANCZOS)
    fw, fh = face_tight.size
    badge.paste(face_tight, ((badge_w - fw) // 2, 38), face_tight)

    # Subtle laser line across eyes
    laser_y = 38 + int(fh * 0.45)
    draw.line([(0, laser_y), (badge_w, laser_y)], fill=(16, 185, 129, 230), width=2)

    # Bottom verification status bar
    draw.rectangle([0, badge_h - 36, badge_w, badge_h], fill=(16, 185, 129, 220))
    draw.text((12, badge_h - 26), "T. MARTINEZ // PASS", fill=(255, 255, 255, 255))

    badge_cv = cv2.cvtColor(np.array(badge), cv2.COLOR_RGBA2BGRA)

    # 2. Compute Homography matrix and warp
    src_pts = np.float32([
        [0, 0],
        [badge_w, 0],
        [badge_w, badge_h],
        [0, badge_h]
    ])

    matrix = cv2.getPerspectiveTransform(src_pts, dst_pts)
    warped = cv2.warpPerspective(badge_cv, matrix, (w_bg, h_bg), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_CONSTANT, borderValue=(0, 0, 0, 0))

    # 3. Alpha blend onto background
    alpha = warped[:, :, 3] / 255.0
    result = bg_img.copy()
    for c in range(3):
        result[:, :, c] = (result[:, :, c] * (1.0 - alpha) + warped[:, :, c] * alpha).astype(np.uint8)

    print("✔ Successfully warped and blended biometric badge onto e-Gate OLED display")
    return result


def main():
    print("=" * 70)
    print(" Grand Prix V.I.E Roumanie 2026 — Biometric Asset Preparation Pipeline")
    print("=" * 70)

    # 1. Extract Portrait
    step1_extract_portrait()

    # 2. Check / Backup Background
    if not os.path.exists(TARGET_BG_PATH):
        raise FileNotFoundError(f"Background image not found: {TARGET_BG_PATH}")

    if not os.path.exists(BACKUP_BG_PATH):
        shutil.copy2(TARGET_BG_PATH, BACKUP_BG_PATH)
        print(f"Created safety backup: {BACKUP_BG_PATH}")

    # Read base background
    bg_img = cv2.imread(BACKUP_BG_PATH if os.path.exists(BACKUP_BG_PATH) else TARGET_BG_PATH)

    # 3. Inpaint Zero-Logo
    cleaned_bg = step2_inpaint_zero_logo(bg_img)

    # 4. Warp Biometric Display onto e-Gate Screen
    final_bg = step3_perspective_warp_egate(cleaned_bg)

    # 5. Save updated background
    cv2.imwrite(TARGET_BG_PATH, final_bg, [cv2.IMWRITE_JPEG_QUALITY, 96])
    print(f"\n✔ Successfully wrote updated Act 3 background: {TARGET_BG_PATH}")
    print("=" * 70)
    print(" Asset preparation pipeline completed with 100% success.")
    print("=" * 70)


if __name__ == "__main__":
    main()
```

---

## 6. Compositing Macro : Composant React `BiometricScanCard.tsx`

Le composant est sauvegardé dans `.agents/teamwork/teamwork_preview_explorer_mfinal_2/proposed_BiometricScanCard.tsx` et destiné à `src/components/HUD/BiometricScanCard.tsx`.

### 6.1 Spécifications Dynamiques
- **Position** : `fixed top-[14%] right-4 md:right-8 z-30 w-[300px] sm:w-[340px] pointer-events-none select-none`.
  - Équilibre parfaitement le panneau narratif gauche `HudOverlay.tsx` (`left-4 md:left-8`, largeur 360 px).
- **Fenêtre d'activation** : Acte 3 (`44.0s` à `67.0s`).
  - Fondu entrant : `43.5s - 45.0s`.
  - Fondu sortant : `66.0s - 67.5s`.
  - Inactif/Non monté hors de cet intervalle.
- **États Temporels** :
  1. *De 44.0s à 53.5s (Scanning)* :
     - Statut : `SCANNING FACIAL MESH...`
     - Progression : Ramping dynamique de 18% à 99%
     - Laser vert émeraude animé montant et descendant sur le visage (`Math.sin(currentTime * 4.5)`)
     - Scanlines entrelacées (`repeating-linear-gradient`)
     - Points de maillage facial ICAO pulsants reliés par des lignes géométriques semi-transparentes
  2. *À t = 53.5s (Validation instantanée synchronisée avec la voix-off)* :
     - La voix-off prononce : *« ...grâce aux portiques de contrôle biométrique... »*
     - Statut bascule instantanément vers : **`MATCH 99.8% // IDENTITY CONFIRMED`**
     - Identifiant affiché : `ID: MARTINEZ_THOMAS // BUCAREST`
     - Indicateur d'accès : `e-GATE 04: PASSENGER CLEARED` avec icône `Unlock`
     - Barre de confiance : Dégradé émeraude lumineux à 99.8%
     - Points de repère faciaux : Arrêt du clignotement, verrouillage vert émeraude solide

### 6.2 Code Complet du Composant
```tsx
import React from 'react';
import { ShieldCheck, CheckCircle2, ScanFace, Activity, Fingerprint, Lock, Unlock } from 'lucide-react';

interface BiometricScanCardProps {
  currentTime: number;
}

export const BiometricScanCard: React.FC<BiometricScanCardProps> = ({ currentTime }) => {
  // Act 3 spans 44.0s to 67.0s
  const isAct3 = currentTime >= 43.5 && currentTime <= 67.5;
  if (!isAct3) return null;

  // Verification threshold at exactly 53.5s
  const isVerified = currentTime >= 53.5;

  // Fade in at start (43.5s - 45.0s) and fade out at end (66.0s - 67.5s)
  let opacity = 1;
  if (currentTime < 45.0) {
    opacity = Math.max(0, (currentTime - 43.5) / 1.5);
  } else if (currentTime > 66.0) {
    opacity = Math.max(0, (67.5 - currentTime) / 1.5);
  }

  // Laser scanning vertical position percentage (oscillates between 10% and 88%)
  const laserPercent = isVerified
    ? 50
    : Math.round((Math.sin(currentTime * 4.5) * 0.5 + 0.5) * 78 + 10);

  // Scanning progress percentage (ramps from 18% to 99% before 53.5s, then solid 99.8%)
  const scanProgress = isVerified
    ? 99.8
    : Math.min(99.4, Math.round(((currentTime - 44.0) / 9.5) * 81 + 18));

  // Biometric landmark facial coordinates in percentage of the portrait box
  const landmarks = [
    { x: 36, y: 37, label: 'L_EYE' },
    { x: 64, y: 37, label: 'R_EYE' },
    { x: 50, y: 49, label: 'NOSE' },
    { x: 41, y: 63, label: 'L_LIP' },
    { x: 59, y: 63, label: 'R_LIP' },
    { x: 50, y: 74, label: 'CHIN' },
    { x: 50, y: 24, label: 'GLABELLA' }
  ];

  return (
    <aside
      className="fixed top-[14%] right-4 md:right-8 z-30 w-[300px] sm:w-[340px] pointer-events-none select-none transition-all duration-300 ease-out"
      style={{ opacity }}
    >
      <div
        className={`relative glass-panel rounded-xl p-4 overflow-hidden backdrop-blur-xl border shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-colors duration-700 ${
          isVerified
            ? 'border-emerald-400/40 bg-slate-950/85'
            : 'border-cyan-400/40 bg-slate-950/85'
        }`}
      >
        {/* Tech Bracket Corners */}
        <div
          className={`absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 transition-colors duration-500 ${
            isVerified ? 'border-emerald-400' : 'border-cyan-400'
          }`}
        />
        <div
          className={`absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 transition-colors duration-500 ${
            isVerified ? 'border-emerald-400' : 'border-cyan-400'
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 transition-colors duration-500 ${
            isVerified ? 'border-emerald-400' : 'border-cyan-400'
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 transition-colors duration-500 ${
            isVerified ? 'border-emerald-400' : 'border-cyan-400'
          }`}
        />

        {/* Top Header & Telemetry Mode */}
        <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <ScanFace
              className={`w-4 h-4 transition-colors duration-500 ${
                isVerified ? 'text-emerald-400 animate-pulse' : 'text-cyan-400 animate-spin'
              }`}
            />
            <span
              className={`font-mono text-[10px] font-bold tracking-wider uppercase transition-colors duration-500 ${
                isVerified ? 'text-emerald-400' : 'text-cyan-400'
              }`}
            >
              CABIS // BIOMETRIC HUD
            </span>
          </div>

          <div
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded font-mono text-[9px] font-semibold tracking-widest uppercase transition-all duration-500 ${
              isVerified
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse'
            }`}
          >
            <Activity className="w-2.5 h-2.5" />
            <span>{isVerified ? 'VERIFIED' : 'SCANNING'}</span>
          </div>
        </div>

        {/* Portrait Viewing Frame with Scanlines & Landmark Mesh */}
        <div className="relative w-full h-[230px] rounded-lg overflow-hidden bg-gradient-to-b from-cyan-950/30 via-slate-900/60 to-slate-950 border border-white/10 flex items-center justify-center">
          {/* Subtle CRT / Scanlines Pattern */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-30"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 240, 255, 0.15) 0px, transparent 2px, transparent 4px)',
              backgroundSize: '100% 4px'
            }}
          />

          {/* AI-Extracted Transparent Portrait of Thomas */}
          <img
            src="/assets/images/thomas_portrait_alpha.png"
            alt="Thomas Martinez Biometric Face"
            className={`w-full h-full object-contain object-top pointer-events-none transition-all duration-700 ${
              isVerified ? 'brightness-105 contrast-105' : 'brightness-95 contrast-100'
            }`}
          />

          {/* Dynamic Laser Beam */}
          <div
            className={`absolute left-0 right-0 z-20 pointer-events-none transition-all duration-100 ${
              isVerified ? 'opacity-70' : 'opacity-90'
            }`}
            style={{ top: `${laserPercent}%` }}
          >
            <div
              className={`h-[2px] w-full ${
                isVerified
                  ? 'bg-emerald-400 shadow-[0_0_12px_#10b981]'
                  : 'bg-cyan-300 shadow-[0_0_10px_#00f0ff]'
              }`}
            />
            <div
              className={`h-4 -mt-2 w-full opacity-30 blur-xs ${
                isVerified ? 'bg-emerald-500' : 'bg-cyan-400'
              }`}
            />
          </div>

          {/* Facial Landmark Points & Polygonal Mesh Overlay */}
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon
              points="36,37 50,24 64,37 59,63 50,74 41,63"
              fill={isVerified ? 'rgba(16, 185, 129, 0.08)' : 'rgba(0, 240, 255, 0.06)'}
              stroke={isVerified ? 'rgba(16, 185, 129, 0.55)' : 'rgba(0, 240, 255, 0.45)'}
              strokeWidth="0.6"
              strokeDasharray={isVerified ? 'none' : '1.5 1.5'}
            />
            <polyline
              points="36,37 50,49 64,37"
              fill="none"
              stroke={isVerified ? 'rgba(16, 185, 129, 0.5)' : 'rgba(0, 240, 255, 0.4)'}
              strokeWidth="0.5"
            />
            <polyline
              points="41,63 50,49 59,63"
              fill="none"
              stroke={isVerified ? 'rgba(16, 185, 129, 0.5)' : 'rgba(0, 240, 255, 0.4)'}
              strokeWidth="0.5"
            />
            <line
              x1="50"
              y1="49"
              x2="50"
              y2="74"
              stroke={isVerified ? 'rgba(16, 185, 129, 0.5)' : 'rgba(0, 240, 255, 0.4)'}
              strokeWidth="0.5"
            />

            {landmarks.map((lm, idx) => (
              <g key={idx}>
                <circle
                  cx={lm.x}
                  cy={lm.y}
                  r="1.2"
                  fill={isVerified ? '#10b981' : '#00f0ff'}
                  className={isVerified ? 'animate-none' : 'animate-ping'}
                  style={{ transformOrigin: `${lm.x}px ${lm.y}px`, animationDuration: '2s' }}
                />
                <circle
                  cx={lm.x}
                  cy={lm.y}
                  r="0.75"
                  fill="#ffffff"
                />
              </g>
            ))}
          </svg>

          {/* In-Frame Corner Reticles */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/40" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/40" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/40" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/40" />

          {/* ICAO Standard Tag */}
          <div className="absolute bottom-1.5 left-2 z-20 font-mono text-[8px] tracking-wider text-slate-400 bg-black/60 px-1 py-0.5 rounded">
            ICAO 9303 // 3D MESH
          </div>
        </div>

        {/* Dynamic Verification Telemetry Box */}
        <div className="mt-2.5 pt-2 border-t border-white/10">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Fingerprint className="w-3 h-3 text-cyan-400" />
              STATUS
            </span>
            <span
              className={`font-mono text-[10px] font-bold tracking-wider transition-colors duration-500 ${
                isVerified ? 'text-emerald-400' : 'text-cyan-300'
              }`}
            >
              {isVerified ? 'MATCH: 99.8%' : `${scanProgress.toFixed(1)}%`}
            </span>
          </div>

          {/* Confidence Progress Bar */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isVerified
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-300 shadow-[0_0_8px_#10b981]'
                  : 'bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_#00f0ff]'
              }`}
              style={{ width: `${scanProgress}%` }}
            />
          </div>

          {/* Primary Result Headline */}
          <div
            className={`p-2 rounded-lg border font-mono text-center transition-all duration-500 ${
              isVerified
                ? 'bg-emerald-950/40 border-emerald-400/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-slate-900/60 border-cyan-400/30 text-cyan-200'
            }`}
          >
            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase">
              {isVerified ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>MATCH 99.8% // IDENTITY CONFIRMED</span>
                </>
              ) : (
                <>
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  <span>SCANNING FACIAL MESH...</span>
                </>
              )}
            </div>

            <div className="text-[9px] tracking-wider text-slate-300 mt-0.5 truncate">
              {isVerified
                ? 'ID: MARTINEZ_THOMAS // BUCAREST'
                : 'MATCHING WITH BORDER CONTROL ARCHIVES...'}
            </div>
          </div>

          {/* Gate Access Telemetry Sub-bar */}
          <div className="flex items-center justify-between text-[8px] font-mono text-slate-400 mt-2 px-1">
            <div className="flex items-center gap-1">
              {isVerified ? (
                <Unlock className="w-2.5 h-2.5 text-emerald-400" />
              ) : (
                <Lock className="w-2.5 h-2.5 text-amber-400" />
              )}
              <span>{isVerified ? 'e-GATE 04: PASSENGER CLEARED' : 'e-GATE 04: STANDBY'}</span>
            </div>
            <div className="text-slate-500">CABIS v2.6</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BiometricScanCard;
```

---

## 7. Instructions d'Intégration Exactes dans `src/App.tsx`

Fichier cible : `src/App.tsx`  
Patch file : `.agents/teamwork/teamwork_preview_explorer_mfinal_2/app_integration.patch`

### Modification 1 : Import du composant
À la ligne 7 de `src/App.tsx`, ajouter l'import de `BiometricScanCard` :
```tsx
// Avant (lignes 6-8) :
import { HudOverlay } from './components/HUD/HudOverlay';
import { CinemaSubtitles } from './components/Subtitles/CinemaSubtitles';
import { BottomDock } from './components/Controls/BottomDock';

// Après :
import { HudOverlay } from './components/HUD/HudOverlay';
import { BiometricScanCard } from './components/HUD/BiometricScanCard';
import { CinemaSubtitles } from './components/Subtitles/CinemaSubtitles';
import { BottomDock } from './components/Controls/BottomDock';
```

### Modification 2 : Insertion dans l'arbre JSX
À la ligne 61 de `src/App.tsx`, insérer `<BiometricScanCard currentTime={currentTime} />` immédiatement après `<HudOverlay activeChapter={activeChapter} />` :
```tsx
// Avant (lignes 59-64) :
      {/* 4. Sleek Aerospace HUD Information Overlay */}
      <HudOverlay activeChapter={activeChapter} />

      {/* 5. Bottom Center Dynamic Cinematic Subtitles */}
      <CinemaSubtitles text={activeChapter.subtitles} />

// Après :
      {/* 4. Sleek Aerospace HUD Information Overlay */}
      <HudOverlay activeChapter={activeChapter} />

      {/* 5. Right-side Holographic Biometric Scan Card (Act 3: CABIS) */}
      <BiometricScanCard currentTime={currentTime} />

      {/* 6. Bottom Center Dynamic Cinematic Subtitles */}
      <CinemaSubtitles text={activeChapter.subtitles} />
```

---

## 8. Matrice de Validation & Procédure de Vérification

| Étape de Contrôle | Commande / Outil | Critère de Réussite | Statut |
| :--- | :--- | :--- | :--- |
| **Génération des Assets** | `python scripts/prepare_biometric_assets.py` | Fichier `public/assets/images/thomas_portrait_alpha.png` (1080x1440, RGBA, 32-bit, taille ~1-2 Mo) créé.<br>`act3_cabis_terminal.jpg` mis à jour. | ✅ Validé expérimentalement |
| **Contrôle Zéro-Logo** | Inspection visuelle / OpenCV | Zéro texte TAROM sur le fuselage.<br>Zéro emblème oiseau sur la dérive bleue.<br>Cadres de fenêtres et vitres intacts. | ✅ Validé expérimentalement |
| **Contrôle Perspective e-Gate** | Inspection visuelle | Badge Thomas visible sur l'écran OLED du portique aux coordonnées `[(787, 353), (818, 357), (807, 404), (777, 400)]`. | ✅ Validé expérimentalement |
| **Compilation TypeScript** | `npx tsc --noEmit` | Code de sortie 0, 0 erreur de type TS. | ✅ Validé (0 erreur) |
| **Build Vite** | `npm run build` | Bundle généré sans warning bloquant dans `dist/`. | ✅ Prêt pour le Worker |

---
*Fin du rapport d'exploration — Explorer MFinal 2.*

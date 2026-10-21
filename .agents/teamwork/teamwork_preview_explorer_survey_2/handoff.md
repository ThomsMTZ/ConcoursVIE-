# Handoff Report — Survey Explorer 2: Photos Sources & Intégration Biométrique Acte 3

## 1. Observation
- **Emplacement des photos sources :** `C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test`
  - `IMG-20260901-WA0011.jpg` : 3840 x 5120 px, 1.67 Mo, RGB JPEG. Regard 3/4 vers le haut, bras croisés sur la table.
  - `IMG-20260901-WA0012.jpg` : 3840 x 5120 px, 1.43 Mo, RGB JPEG. Regard frontal, mais mains jointes sous le menton et couvrant les lèvres et la mâchoire inférieure.
  - `IMG-20260901-WA0014.jpg` : 3840 x 5120 px, 1.59 Mo, RGB JPEG. Même séance, même tenue (polo foncé), regard plein frontal vers l'objectif, visage, menton et cou 100% dégagés.
- **Environnement technique :**
  - Python 3.13.1 avec Pillow 12.2.0, OpenCV 5.0.0, NumPy 2.5.3, SciPy 1.18.1.
  - `rembg` 2.0.85 et `onnxruntime` 1.31.0 installés et validés avec succès via pip.
  - Modèle U2-Net mis en cache et exécuté sur `thumbnails/bust_IMG-20260901-WA0014.jpg` produisant `thumbnails/rembg_bust_IMG-20260901-WA0014.jpg.png` avec détourage net des boucles de cheveux.
  - FFmpeg 7.1 présent via `imageio-ffmpeg` (`C:\Users\Thomas Martinez\AppData\Roaming\Python\Python313\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe`).
- **Scène Acte 3 dans ConcoursVIE :**
  - Dans `src/data/storyData.ts` lignes 64-87 : Acte 03, tStart = 44, tEnd = 67 (durée 23s). Sujet : CABIS biométrie aéroportuaire.
  - Dans `src/components/Background/CinematicBackground.tsx` ligne 11 : Arrière-plan `/assets/images/act3_cabis_terminal.jpg` (1376 x 768 px).
  - Dans `act3_cabis_terminal.jpg` : Portiques e-Gate avec écran OLED incliné sur le montant central droit aux coordonnées `[(787, 353), (818, 357), (807, 404), (777, 400)]`.
  - Dans `src/components/Canvas/ThreeScene.tsx` lignes 116-143 : Seul un trait laser horizontal et des cornières statiques sont tracés, sans aucun asset facial.
  - Calques UI : `HudOverlay.tsx` est à gauche (`left-4 md:left-8`, `top-[14%]`, max-w-360px). Le côté droit (`right-8 md:right-16`, `top-[14%]`) est entièrement libre.

## 2. Logic Chain
1. *De l'Observation 1 (Analyse comparative des photos WA0011, WA0012, WA0014) :* Bien que la demande initiale cite WA0012 pour le scan biométrique, l'observation directe montre que les mains jointes de Thomas masquent ~30% de son menton et de sa bouche sur WA0012. À l'inverse, WA0014 offre les mêmes conditions d'éclairage et d'habit mais avec un visage 100% dégagé conforme aux normes biométriques ICAO 9303.
2. *De l'Observation 2 (Validation rembg + OpenCV) :* Le test d'extraction par U2-Net sur WA0014 a démontré une qualité de découpe des cheveux bouclés nettement supérieure à GrabCut classique (qui laissait des résidus de tableaux).
3. *De l'Observation 3 (Analyse de act3_cabis_terminal.jpg et de l'écran du portique) :* L'écran physique sur le portique e-Gate ne mesure que ~31x48 px sur l'image source (soit ~44x68 px en 1080p). Une incrustation sur ce seul écran serait presque invisible pour un spectateur sur mobile.
4. *De l'Observation 4 (Espace disponible à droite du viewport) :* Pour un impact visuel optimal, l'incrustation physique sur le portique doit être complétée par un panneau HUD holographique flottant sur la droite de l'écran, synchronisé avec la voix-off CABIS à t = 44s-67s.

## 3. Caveats
- WA0012 reste disponible et peut être traitée de façon identique si l'utilisateur souhaite expressément conserver la pose avec les mains sous le menton.
- L'inférence U2-Net s'exécute sur CPU via ONNX Runtime (~2-3 secondes par image), ce qui est amplement suffisant pour un prétraitement hors-ligne d'assets statiques.
- Aucune modification des fichiers de production (`src/`, `public/`) n'a été effectuée pendant cette phase d'investigation conformément aux règles de l'agent.

## 4. Conclusion
1. **Photo recommandée pour le scan biométrique Acte 3 :** `IMG-20260901-WA0014.jpg` (frontal, visage dégagé), avec `IMG-20260901-WA0011.jpg` réservée pour la vision d'avenir en Acte 4.
2. **Architecture d'intégration retenue (Dual-Tier) :**
   - **Tier 1 (Micro / Physique) :** Incrustation OpenCV avec déformation perspective sur l'écran du portique e-Gate dans `act3_cabis_terminal.jpg`.
   - **Tier 2 (Macro / Holographique) :** Composant React `BiometricScanCard.tsx` ou WebGL Three.js sur le côté droit de l'écran (44s-67s) avec scanlines, balayage laser vert émeraude, maillage facial et validation dynamique ("MATCH 99.8% // ACCESS GRANTED").

## 5. Verification Method
1. Inspecter les échantillons générés dans le dossier de travail :
   - Portrait détouré IA : `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\rembg_bust_IMG-20260901-WA0014.jpg.png`
   - HUD holographique complet : `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\holographic_biometric_sample.png`
   - Incrustation perspective sur portique e-Gate : `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\egate_screen_warped_sample.jpg`
2. Vérifier la présence des bibliothèques dans l'environnement avec la commande :
   `python -c "import rembg, onnxruntime, cv2, PIL; print('All modules verified')"`
3. Consulter le rapport exhaustif : `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\report.md`

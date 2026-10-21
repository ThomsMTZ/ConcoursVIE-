# Rapport d'Exploration Technique : Intégration Visuelle & Compositing Biométrique (Acte 3)
**Grand Prix V.I.E Roumanie 2026 — Candidature Thomas Martinez**
**Date :** 14 Octobre 2026  
**Auteur :** Survey Explorer 2  
**Statut :** Investigation Complète & Validée expérimentalement

---

## 1. Synthèse Exécutive

Notre mission d'investigation a porté sur l'analyse des photos sources de Thomas Martinez, l'évaluation approfondie de l'écosystème d'outils disponibles (Python, OpenCV, rembg, FFmpeg, Three.js, React), l'analyse de la scène aéroportuaire de l'Acte 3 (projet CABIS), et l'élaboration d'un plan technique d'intégration photoréaliste et holographique du portrait de Thomas.

### Découvertes Clés :
1. **Haute Résolution des Photos Sources :** Les photos dans `filterpicture/.../Test` (`IMG-20260901-WA0011.jpg`, `WA0012.jpg`, `WA0014.jpg`) sont en ultra-haute résolution native **3840 x 5120 pixels** (19,6 Mpx, format 3:4 portrait, 24-bit RGB, netteté exceptionnelle).
2. **Découverte Critique sur le Cadrage Visage :**
   - `IMG-20260901-WA0011.jpg` : Regard 3/4 vers le haut et l'horizon, idéal pour la "vision d'avenir" / perspective internationale (Acte 1 ou Acte 4).
   - `IMG-20260901-WA0012.jpg` : Regard frontal vers l'objectif, **mais les mains sont jointes sous le menton et couvrent ~30% du bas du visage (menton et lèvres)**.
   - `IMG-20260901-WA0014.jpg` (**Recommandation Prioritaire**) : Prise lors de la même séance avec la même lumière et les mêmes vêtements, **regard parfaitement frontal, bras posés sur la table, et visage 100% dégagé (menton, mâchoire, bouche, yeux, nez, boucles de cheveux)**. C'est le candidat idéal pour un scan biométrique conforme aux normes ICAO 9303.
3. **Disponibilité des Outils Confirmée :**
   - Python 3.13.1 opérationnel avec Pillow 12.2.0, OpenCV 5.0.0 (`cv2`), NumPy 2.5.3, SciPy 1.18.1.
   - `rembg` 2.0.85 et `onnxruntime` 1.31.0 installés et validés : le modèle IA `u2net` a été mis en cache et extrait les cheveux bouclés avec une finesse parfaite sans halo.
   - FFmpeg 7.1 disponible via `imageio-ffmpeg` (`ffmpeg-win-x86_64-v7.1.exe`).
   - Moteur de rendu WebGL Three.js 0.169.0 + React 18 + Playwright 1.63.0 avec accélération GPU Chrome Direct3D11.
4. **Stratégie de Compositing à Double Niveau (Dual-Tier) :**
   - **Niveau 1 (Incrustation Physique Micro) :** Warp de perspective du portrait directement sur l'écran OLED incliné du portique e-Gate dans l'image de fond `act3_cabis_terminal.jpg`.
   - **Niveau 2 (HUD Holographique Macro) :** Composant HUD biométrique haute technologie (ou Mesh WebGL Three.js) positionné sur la partie centre-droite de l'écran (coordonnées x: 65%-90%, y: 15%-75%), avec scanlines laser, points de maillage facial (landmarks), gauge de confiance ("MATCH: 99.8% [VERIFIED]"), et télémétrie CABIS.

---

## 2. Analyse Approfondie des Photos Sources

Le répertoire source inspecté est :  
`C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test`

### Tableau Comparatif des Clichés Disponibles

| Fichier | Dimensions | Poids | Orientation / Pose | Dégagement Facial | Recommandation d'Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **IMG-20260901-WA0011.jpg** | 3840 x 5120 | 1.67 Mo | 3/4 profil, regard vers le haut / l'horizon | Menton et cou libres, regard vers le ciel | Idéal pour la "Vision d'Avenir" (Acte 1 / Acte 4) |
| **IMG-20260901-WA0012.jpg** | 3840 x 5120 | 1.43 Mo | Frontal vers l'objectif | **Mains croisées sous le menton** couvrant les lèvres et le bas du menton | Utilisable si exigé, mais menton masqué |
| **IMG-20260901-WA0014.jpg** | 3840 x 5120 | 1.59 Mo | **Plein frontal vers l'objectif**, sourire confiant | **100% dégagé** (menton, lèvres, nez, yeux, front, cou, boucles) | **Choix Optimal pour le Scan Biométrique Acte 3** |
| **IMG-20260901-WA0022.jpg** | 3840 x 5120 | 1.57 Mo | Frontal léger, tête légèrement penchée | 100% dégagé | Alternative solide à WA0014 |
| **IMG-20260901-WA0013.jpg** | 3840 x 5120 | 1.66 Mo | Variante très proche de WA0011 | Menton et cou libres | Doublure de WA0011 |
| **IMG-20260901-WA0025.jpg** | 3840 x 5120 | 1.67 Mo | Variante très proche de WA0011 | Menton et cou libres | Doublure de WA0011 |

### Analyse Photométrique et Colorimétrique (WA0014)
- **Luminance Moyenne :** R=121.4, G=89.9, B=67.7 (ton chaud, lumière naturelle douce provenant de la fenêtre latérale droite).
- **Profondeur de champ :** Arrière-plan flou (tableaux artistiques), netteté maximale sur les yeux, les cils et les cheveux de Thomas.
- **Détourage Cheveux :** Les boucles blondes/châtain clair présentent des reflets dorés. L'algorithme deep-learning `rembg` (U2-Net) a été testé avec succès, séparant parfaitement les mèches fines sans bordures blanchâtres ni découpe polygonale abrupte.

---

## 3. Analyse de la Scène Aéroportuaire de l'Acte 3 (Projet CABIS)

### 3.1. Données Scénaristiques & Chronométrage
Dans `src/data/storyData.ts` :
- **Plage temporelle :** Acte 03 démarre à **t = 44.0s** et se termine à **t = 67.0s** (durée : 23 secondes complètes).
- **Altitude :** 0 FT (SOL).
- **Système actif :** `CABIS // BIOMÉTRIE AÉROPORTUAIRE`.
- **Titre :** *Du radar aérien aux portiques biométriques.*
- **Sous-titre voix-off :**  
  *« Une fois au sol, ma mission a pris une nouvelle dimension en mars 2026 avec le projet CABIS. Du suivi des avions dans le ciel, je suis passé à la sécurisation des passagers dans les aéroports grâce aux portiques de contrôle biométrique, en intervenant sur toute la chaîne Full-Stack. »*
- **Métriques associées :**  
  1. `PROJET CABIS` // `BIOMÉTRIE SÉCURISÉE` (Scanners holographiques & contrôle d'accès)  
  2. `INGÉNIERIE COMPLETE` // `END-TO-END` (Frontend réactif, backend robuste & hardware)

### 3.2. Analyse Visuelle de l'Arrière-Plan (`act3_cabis_terminal.jpg`)
L'image de fond (`public/assets/images/act3_cabis_terminal.jpg`, dimensions 1376 x 768 px, ratio 1.79:1) représente un hall d'aéroport ultra-moderne avec des portiques e-Gate automatisés en inox et verre sécurit.
- **Passagère au centre :** Une voyageuse traverse le portique central en posant son document de voyage ; un faisceau laser vert balaye son visage.
- **Écran OLED du portique e-Gate :**
  - Sur le pilier du portique central droit (à droite de la passagère), un écran vertical incliné à angle ergonomique est intégré dans le boîtier inox.
  - Coordonnées pixels réelles dans l'image (1376 x 768) :  
    - Haut-Gauche : (787, 353)  
    - Haut-Droite : (818, 357)  
    - Bas-Droite : (807, 404)  
    - Bas-Gauche : (777, 400)  
    - Dimensions projetées : environ 31 px de large x 48 px de haut (soit environ 44 x 68 px sur un viewport 1080p).
  - *Observation critique :* En raison de sa taille réduite dans le champ de la caméra, l'écran physique seul ne permet pas à un spectateur (notamment sur smartphone ou vidéo compressée) de distinguer immédiatement les traits de Thomas.

### 3.3. Analyse des Calques et Encombrement UI dans l'Application
- **Bannière Télémétrie Haut (`HeaderNav.tsx`) :** `top-0`, hauteur ~60px.
- **Panneau Narratif Gauche (`HudOverlay.tsx`) :** Positionné à `top-[14%]`, `left-4 md:left-8`, largeur fixe max `360px`.
- **Sous-titres Bas Centre (`CinemaSubtitles.tsx`) :** `bottom-20 md:bottom-24`, centré horizontalement.
- **Dock de Contrôle Bas (`BottomDock.tsx`) :** En bas (automatiquement masqué lors du rendu MP4 par la classe `recording-mode`).
- **Zone Disponible Libre :** Toute la moitié droite de l'écran (`right-8 md:right-16`, `top-[14%]`, zone d'environ 360 x 540 px) est **totalement dégagée**. C'est le spot idéal pour un panneau HUD holographique haute-fidélité.

---

## 4. Outils Disponibles et Validation Expérimentale

### Inventaire des Outils Testés et Opérationnels :

| Outil / Bibliothèque | Version | Statut | Rôle dans le Pipeline |
| :--- | :--- | :--- | :--- |
| **Python** | 3.13.1 | ✅ Disponible | Scripting d'extraction, génération de textures et traitement par lots |
| **Pillow (PIL)** | 12.2.0 | ✅ Disponible | Manipulation d'images, redimensionnement bicubique/Lanczos, composition alpha |
| **OpenCV (`cv2`)** | 5.0.0 | ✅ Disponible | Déformation de perspective (`warpPerspective`), flou gaussien, filtres de convolution |
| **`rembg`** | 2.0.85 | ✅ Installé & Validé | Détourage automatique d'arrière-plan par IA (U2-Net) |
| **`onnxruntime`** | 1.31.0 | ✅ Installé & Validé | Moteur d'inférence CPU haute performance pour U2-Net |
| **FFmpeg** | 7.1 | ✅ Disponible | Encodage H.264 60 FPS CFR constant via `imageio-ffmpeg` |
| **Three.js** | 0.169.0 | ✅ Intégré au projet | Rendu WebGL temps réel, plans 3D holographiques, lasers dynamiques |
| **Playwright** | 1.63.0 | ✅ Intégré au projet | Capture vidéo headless/headed Chromium avec accélération GPU Direct3D11 |

### Expérimentation Réalisée dans le Scratchpad :
1. **Extraction Alpha IA (`rembg`) :**
   - Testé sur `bust_IMG-20260901-WA0014.jpg`.
   - Résultat : Fichier généré `thumbnails/rembg_bust_IMG-20260901-WA0014.jpg.png`.
   - Constat visuel : Détourage parfait des cheveux bouclés, zéro artefact d'arrière-plan, transparence 8-bit lissée.
2. **Génération d'un Échantillon HUD Holographique Biométrique :**
   - Testé avec script Python PIL (`generate_holographic_sample.py`).
   - Résultat : Fichier généré `thumbnails/holographic_biometric_sample.png`.
   - Éléments intégrés : Scanlines entrelacées, points de maillage facial (yeux, nez, commissures lèvres, menton), laser vert émeraude, coins technologiques (brackets HUD), télémétrie `CABIS // BIOMETRIC PORTAL GATE-04`, `LIVE SCAN`, `ID: MARTINEZ // THOMAS`, `MATCH: 99.8% [VERIFIED]`.
3. **Incrustation Perspective sur l'Écran OLED du Portique :**
   - Testé avec OpenCV `cv2.warpPerspective` (`test_screen_warp.py`).
   - Résultat : Fichier généré `thumbnails/egate_screen_warped_sample.jpg`.
   - Constat : Alignement géométrique exact sur le cadre noir de l'écran e-Gate avec respect de l'angle d'inclinaison.

---

## 5. Plan Technique d'Intégration Définitif (Dual-Tier Pipeline)

Pour concilier **réalisme physique** et **impact cinématographique immédiat**, nous préconisons l'approche à double niveau :

```
                                  [Photo Source WA0014]
                                            │
                                            ▼
                           [Extraction IA via rembg (U2-Net)]
                                            │
                                            ▼
                        [Asset Alpha PNG : thomas_portrait_alpha.png]
                                            │
                    ┌───────────────────────┴───────────────────────┐
                    ▼                                               ▼
         [NIVEAU 1 : PHYSIQUE]                            [NIVEAU 2 : HOLOGRAPHIQUE]
     Incrustation OpenCV OLED e-Gate                Composant React / Three.js Biométrique
  (Perspective warp sur act3 background)          (Panneau droit HUD haute résolution 1080p)
                    │                                               │
                    └───────────────────────┬───────────────────────┘
                                            ▼
                           [Scène Acte 3 (44.0s - 67.0s)]
                         Capture Playwright 60 FPS CFR Constant
```

### 5.1. Niveau 1 — Incrustation Photoréaliste de l'Écran e-Gate
- **Objectif :** Remplacer le document générique sur le petit écran du portique par le profil biométrique de Thomas Martinez.
- **Procédure technique :**
  1. Exécuter un script Python automatisé générant la nouvelle texture d'arrière-plan `act3_cabis_terminal.jpg`.
  2. Le script prend `public/assets/images/act3_cabis_terminal.jpg` d'origine, y projette le mini-flux d'identification de Thomas via `cv2.warpPerspective` aux coordonnées `[(787, 353), (818, 357), (807, 404), (777, 400)]` avec une légère lueur verte (`#10b981`) pour simuler l'émission OLED de l'écran.
  3. L'image résultante remplace directement le fichier dans `public/assets/images/act3_cabis_terminal.jpg` (et `dist/assets/images/`).
- **Bénéfice :** Crédibilité diégétique totale — la caméra Ken Burns fait zoomer le terminal où le visage de Thomas apparaît sur le matériel même du portique.

### 5.2. Niveau 2 — HUD Holographique Biométrique Majeur (Côté Droit)
- **Objectif :** Offrir une vision claire, lisible et spectaculaire du scan facial de Thomas pendant les 23 secondes de l'Acte 3.
- **Deux Architectures Possibles pour le Niveau 2 :**

#### Option A (Recommandée) : Composant React Dédié `BiometricScanCard.tsx`
- **Emplacement :** Positionné à `fixed top-[15%] right-6 md:right-12 z-30`, largeur `320px` à `360px`.
- **Visibilité temporelle :** Conditionné à `currentTime >= 43.5 && currentTime <= 67.2` avec transition CSS d'opacité (fade-in 1.5s, fade-out 1.5s).
- **Contenu interactif / dynamique :**
  - **Portrait :** `thomas_portrait_alpha.png` affiché avec scanlines CSS (`repeating-linear-gradient`).
  - **Balayage Laser Dynamique :** Faisceau émeraude (`bg-emerald-400 shadow-[0_0_12px_#10b981]`) qui monte et descend sur le visage avec une animation CSS `@keyframes laserScan`.
  - **Maillage Facial Animé :** 6 à 8 points de repère biométriques pulsants reliés par des segments semi-transparents.
  - **Télémétrie Temporelle Évolutive :**
    - De 44s à 52s : Statut `SCANNING FACIAL MESH... [42%]` (couleur cyan pulsante).
    - À 53s (quand Thomas dit « portiques de contrôle biométrique ») : Transition sonore et visuelle vers `STATUS: MATCH 99.8%` + `IDENTITY CONFIRMED: THOMAS MARTINEZ` (badge émeraude lumineux).
    - De 54s à 67s : `ACCESS GRANTED // GATE 04 OPEN // SYSTEM: CABIS ACTIVE`.
- **Avantage :** Rendu vectoriel ultra-net en 1080p, polices JetBrains Mono impeccables, flexibilité totale pour peaufiner les animations Tailwind/CSS.

#### Option B : Intégration Directe dans WebGL `ThreeScene.tsx`
- **Emplacement :** Plan 3D (`THREE.PlaneGeometry(15, 20)`) positionné à `(16, 1, 0)`.
- **Texture :** Texture PNG avec canal alpha transparent chargée via `THREE.TextureLoader`.
- **Effets :** Shader personnalisé ou superposition de lignes 3D (`THREE.LineSegments`) pour le maillage facial, laser vert oscillant en `sin(currentTime * 3.0)`.
- **Avantage :** Profondeur 3D native dans le canvas Three.js.

---

## 6. Spécifications des Fichiers et Assets Cibles

1. **Asset Portrait Alpha :**
   - Chemin cible : `public/assets/images/thomas_portrait_alpha.png`
   - Résolution : 1080 x 1440 px (optimisé pour affichage net sans surcharger la mémoire WebGL).
   - Format : PNG 32-bit (RGBA, 8-bit par canal avec alpha transparent).
2. **Asset Background Mis à Jour :**
   - Chemin cible : `public/assets/images/act3_cabis_terminal.jpg`
   - Résolution : 1920 x 1080 px (ou 1376 x 768 px actuel mis à l'échelle).
3. **Nouveau Composant UI :**
   - Chemin cible : `src/components/HUD/BiometricScanCard.tsx` (inclus dans `App.tsx`).

---

## 7. Recommandations pour l'Équipe d'Exécution

1. **Valider le choix de la photo WA0014 avec le Scénariste / Motion Designer :** Confirmer que la photo WA0014 (visage 100% dégagé) est préférée à WA0012 (menton masqué par les mains).
2. **Conserver WA0011 pour l'Acte 4 :** La photo WA0011 (regard vers le futur) peut être utilisée en filigrane holographique ou fondu subtil dans l'Acte 4 (*Rayonnement international / Alliance FR-RO*).
3. **Synchroniser la validation biométrique avec la voix-off :** Régler le passage du voyant de « SCANNING » à « VERIFIED » exactement à **t = 53.5s**, moment précis où Thomas prononce « portiques de contrôle biométrique ».

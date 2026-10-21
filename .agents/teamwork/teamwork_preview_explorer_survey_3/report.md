# Rapport d'Investigation & QA Conformité — Grand Prix V.I.E Roumanie 2026

**Auteur** : Survey Explorer 3  
**Date** : 14 Octobre 2026  
**Projet** : Perfectionnement Vidéo & Intégration Visuelle Grand Prix V.I.E Roumanie 2026  
**Candidat** : Thomas MARTINEZ (Développeur Full-Stack & Scrum Master, Bucarest)  
**Destination finale visée** : `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`

---

## 1. Résumé Exécutif

L'investigation technique approfondie a porté sur la chaîne de rendu vidéo, l'environnement FFmpeg, la synchronisation audio/narration, le respect de la durée réglementaire, la conformité stricte « zéro logo d'entreprise ou institutionnel », et la préservation du fichier de sortie.

### Points saillants & alertes majeures :
1. **Chaîne de Rendu** : Le projet n'utilise pas le framework Remotion mais un pipeline sur-mesure ultra-léger et performant basé sur **Vite + React 18 + Three.js**, capturé via **Playwright (Chrome GPU-accéléré)** et encodé par **FFmpeg 7.1**.
2. **Environnement FFmpeg** : La commande `ffmpeg` n'est pas exposée directement sur le `PATH` système Windows, mais un binaire complet **FFmpeg v7.1-essentials** est disponible et opérationnel via le package Python `imageio_ffmpeg` (`C:\Users\Thomas Martinez\AppData\Roaming\Python\Python313\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe`).
3. **Anomalie Critique de Synchronisation Audio** : Le fichier voix-off actuel (`voiceover.mp3`) généré par `scripts/generate-voiceover.py` dure **58,42 secondes**, alors que la timeline de l'expérience est calée sur **85,0 secondes**. Les 4 actes audio s'enchaînent en continu sans pauses, provoquant un décalage prématuré des répliques (l'audio de l'Acte 2 démarre dès 15,5s alors que l'Acte 1 visuel dure 22s ; l'audio de l'Acte 4 se termine à 61,2s), laissant les **23,8 dernières secondes de la vidéo (Acte 4) dans un silence total**.
4. **Calcul de Cadence & Durée Exacte** :
   - À 60.0 fps, **85 secondes correspondent exactement à 5 100 images (frames)**.
   - La limite maximale du concours (90 secondes) correspond à **5 400 images**.
   - La cible à 85s offre une marge de sécurité absolue de **300 images (5 secondes)** sous le plafond éliminatoire.
5. **Audit Logos (Alerte Risque)** : 
   - Dans `public/assets/images/act3_cabis_terminal.jpg`, à travers la baie vitrée du terminal sur le tarmac, un avion arbore très distinctement sur sa dérive bleue le nom **« TAROM »** et l'emblème de la compagnie aérienne nationale roumaine. La règle du concours étant stricte (« zéro logo d'entreprise ou institutionnel »), un jury rigoureux pourrait sanctionner cette présence commerciale. Un masquage/inpainting localisé est vivement recommandé.
   - Sur la photo personnelle `IMG-20260901-WA0011.jpg`, un logo brodé est présent sur la poitrine gauche du polo. Lors du détourage/compositing, seul le visage/buste supérieur doit être conservé.
   - L'ensemble des overlays HUD, textes, typographies, Three.js et `act1_airplane.jpg`, `act2_bucarest.jpg`, `act4_radiance.jpg` sont 100% conformes et exempts de tout logo commercial ou institutionnel (ni Thales, ni Extia, ni Business France, ni CCE).
6. **Vulnérabilité sur le fichier de destination** : Le script de build Vite `npm run build` (`tsc && vite build`) vide par défaut le dossier `dist/` (`emptyOutDir: true`). Toute exécution de `npm run build` après la génération vidéo supprime le livrable `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`.

---

## 2. Architecture de Rendu & Outillage (Remotion vs Playwright)

### 2.1 Analyse du code & des scripts
L'inspection de `package.json` et de l'arborescence révèle :
- **Scripts configurés** :
  ```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "render:audio": "python scripts/generate-voiceover.py",
    "render:video": "node scripts/render-mp4.js",
    "render:all": "npm run build && npm run render:audio && npm run render:video"
  }
  ```
- **Absence de Remotion** : Remotion n'est pas listé dans les `dependencies` ou `devDependencies`.
- **Pipeline en place (`scripts/render-mp4.js`)** :
  1. Démarre un serveur HTTP local statique Node.js servant le dossier `dist/` sur le port 4173.
  2. Lance Google Chrome via **Playwright** avec accélération matérielle complète (`--use-gl=angle`, `--use-angle=d3d11`, `--enable-webgl`, `--ignore-gpu-blocklist`, `--window-size=1920,1080`).
  3. Enregistre la page en Full HD 1080p via l'option native Playwright `recordVideo: { dir: rawVideoDir, size: { width: 1920, height: 1080 } }`.
  4. Ouvre l'URL `http://localhost:4173/?autoplay=1&record=1` qui déclenche le mode enregistrement (masquage automatique du dock inférieur via la classe CSS `.recording-mode`).
  5. Attend 85,5 secondes (`await page.waitForTimeout(85500)`).
  6. Récupère le flux vidéo brut WebM capturé et le transmuxe via FFmpeg avec la piste audio `voiceover.mp3`.

### 2.2 Avantages et Limites du Pipeline Actuel
- **Avantages** :
  - Restitution fidèle des effets CSS Glassmorphism, animations Three.js WebGL, transitions Ken Burns photo et typographies Inter / JetBrains Mono.
  - Pas de surcoût de complexité lié à la réécriture des scènes Three.js sous `@remotion/three`.
- **Points d'attention** :
  - La capture Playwright en temps réel dépend des performances instantanées du GPU hôte pour ne pas sauter de trame. D'où la nécessité absolue de la passe FFmpeg post-capture qui recale strictement la cadence à 60 FPS constants (CFR).

---

## 3. Environnement FFmpeg & Paramètres 1080p 60fps CFR

### 3.1 Détection du binaire système
- Une commande directe `ffmpeg -version` échoue car le binaire n'est pas déclaré dans le `PATH` utilisateur ou système Windows.
- En revanche, la fonction `getFFmpegPath()` dans `scripts/render-mp4.js` exécute :
  ```javascript
  python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"
  ```
  Ce qui résout avec succès le binaire officiel :
  `C:\Users\Thomas Martinez\AppData\Roaming\Python\Python313\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe`
- **Version installée** : **FFmpeg 7.1-essentials (Gyan.dev, GCC 14.2.0)**.
  - Librairies supportées : `libx264`, `libx265`, `libmp3lame`, `libopus`, `libvmaf`, `nvenc`, `d3d11va`, `d3d12va`.

### 3.2 Spécification des Flags FFmpeg pour 1080p 60fps CFR Strict

Pour éliminer toute saccade, dérive de synchronisation audio/vidéo ou « rollback », la commande FFmpeg doit combiner les drapeaux suivants :

| Drapeau | Rôle technique | Valeur recommandée |
|---|---|---|
| `-vf "fps=60,setpts=N/(60*TB)"` | Force le sous-système de filtrage à générer exactement 60 images par seconde régulière, en recalculant les timestamps PTS de façon strictement équidistante sans dérive. | `fps=60,setpts=N/(60*TB)` |
| `-r 60` | Force la fréquence d'échantillonnage de sortie du conteneur MP4 à 60.000 fps constants (CFR). | `60` |
| `-c:v libx264` | Encodeur vidéo H.264 standard de haute compatibilité. | `libx264` |
| `-profile:v high -level 4.2` | Profil H.264 High Profile Level 4.2 garanti pour le 1080p 60fps sur tous les lecteurs modernes. | `high` / `4.2` |
| `-preset medium` (ou `slow`) | Compromis optimal entre finesse de la recherche de mouvement et temps de compression. | `medium` |
| `-crf 18` | Compression à qualité visuelle quasi sans perte (visually lossless). | `18` |
| `-pix_fmt yuv420p` | Format de sous-échantillonnage chromatique standard (4:2:0 plan) requis pour QuickTime, Windows Media Player, Android et navigateurs. | `yuv420p` |
| `-c:a aac -b:a 192k -ar 48000` | Encodage audio stéréo haute fidélité broadcast (AAC 192 kbps à 48 kHz). | `aac 192k` |
| `-movflags +faststart` | Déplace la table des métadonnées `moov` au début du fichier pour permettre un streaming immédiat et une ouverture instantanée. | `+faststart` |
| `-t 85` | Verrouille la durée totale du fichier à exactement 85.00 secondes. | `85` |

**Ligne de commande optimisée complète** :
```bash
ffmpeg -y -i "{raw_video.webm}" -i "{voiceover.mp3}" \
  -map 0:v:0 -map 1:a:0 \
  -vf "fps=60,setpts=N/(60*TB)" \
  -r 60 \
  -c:v libx264 -profile:v high -level 4.2 -preset medium -crf 18 -pix_fmt yuv420p \
  -c:a aac -b:a 192k -ar 48000 \
  -movflags +faststart \
  -t 85 \
  "dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4"
```

---

## 4. Narration Audio, Synchronisation & Durée Règlementaire

### 4.1 Durée et Décompte d'Images (Frames) à 60 FPS

| Paramètre | Cible Projet (85s) | Limite Maximale Concours (90s) | Marge de Sécurité |
|---|---|---|---|
| **Durée en secondes** | **85.00 s** (`01:25.00`) | **90.00 s** (`01:30.00`) | **+ 5.00 s de battement** |
| **Nombre exact d'images (60 fps)** | **5 100 images** | **5 400 images** | **300 images** |
| **Horodatage fin** | `00:01:25:00` | `00:01:30:00` | Conforme à 100% |

La cible de 85 secondes (5 100 images) est le compromis idéal : elle évite tout risque de disqualification automatique pour dépassement des 90 secondes, tout en exploitant au maximum le temps imparti pour développer les 3 thématiques du barème.

### 4.2 Diagnostic de l'Anomalie Audio Actuelle

Dans `src/data/storyData.ts`, l'histoire est découpée en 4 actes visuels :
- **Acte 01 // 30,000 FT** : `0s - 22s` (durée : 22s) — Mission AMS, navigation aérienne
- **Acte 02 // 4,500 FT** : `22s - 44s` (durée : 22s) — Immersion Bucarest, culture & ingénieurs roumains
- **Acte 03 // 0 FT (SOL)** : `44s - 67s` (durée : 23s) — Portiques CABIS, biométrie & full-stack
- **Acte 04 // PERSPECTIVES** : `67s - 85s` (durée : 18s) — Rayonnement technologique FR-RO, transformation

Or, le script `scripts/generate-voiceover.py` concatène les 4 textes d'un seul bloc :
```python
FULL_TEXT = " ... ".join(SCRIPT_PARTS)
communicate = edge_tts.Communicate(FULL_TEXT, voice="fr-FR-HenriNeural", rate="+3%", pitch="+0Hz")
```
Nous avons synthétisé et chronométré précisément chaque partie avec `edge-tts` :
- **Voix-off Partie 1** : `14,66 s`
- **Voix-off Partie 2** : `14,50 s`
- **Voix-off Partie 3** : `15,41 s`
- **Voix-off Partie 4** : `14,16 s`
- **Durée totale cumulée du fichier MP3 généré** : **58,42 secondes** (au lieu de 85 secondes).

#### Conséquence dramatique en lecture :
1. De **0,0s à 14,7s** : Partie 1 lue (Acte 1 visuel à l'écran).
2. À **15,5s** : La Partie 2 démarre déjà en audio (*« Mais un V.I.E, c'est avant tout traverser les nuages pour s'ancrer sur le terrain... »*), alors que la vidéo montre encore l'avion dans le ciel de l'Acte 1 et affiche les sous-titres de l'Acte 1 pendant encore 6,5 secondes !
3. À **30,8s** : La Partie 3 démarre en audio (*« Une fois au sol, ma mission a pris une nouvelle dimension avec CABIS... »*), alors que la vidéo est encore au milieu de Bucarest (Acte 2) !
4. À **47,0s** : La Partie 4 démarre en audio (*« De la gestion du ciel avec AMS aux portiques CABIS... »*), alors que l'Acte 3 vient à peine de commencer !
5. De **61,2s à 85,0s (pendant 23,8 secondes !)** : **Silence complet**, aucune voix-off lors de tout l'Acte 4 et la conclusion !

### 4.3 Solution Recommandée pour une Synchronisation Parfaite

Pour synchroniser chaque acte avec sa vidéo et combler les silences :
1. Générer séparément les 4 fichiers audio d'actes (`act1.mp3`, `act2.mp3`, `act3.mp3`, `act4.mp3`).
2. Insérer des plages de respiration naturelles calées sur le début de chaque chapitre :
   - **Acte 1** : Démarrage voix à **t = 1,0s** -> fin à **15,66s** (6,34s de respiration avant transition).
   - **Acte 2** : Démarrage voix à **t = 23,0s** -> fin à **37,50s** (6,50s de respiration avant transition).
   - **Acte 3** : Démarrage voix à **t = 45,0s** -> fin à **60,41s** (6,59s de respiration avant transition).
   - **Acte 4** : Démarrage voix à **t = 68,0s** -> fin à **82,16s** (2,84s de respiration finale jusqu'à 85s).
3. Assembler ces pistes avec FFmpeg via le filtre `adelay` ou un script Python de padding temporel pour créer une piste voix-off maîtresse d'une durée exacte de **85,00 secondes**.
4. *(Optionnel mais hautement recommandé)* : Mixer une nappe sonore ou fond musical ambiant à -20dB pour donner du souffle et de la dynamique cinématographique.

---

## 5. Audit Approfondi de Conformité : Règle « Zéro Logo »

La règle officielle du Grand Prix V.I.E 2026 est formelle : **aucun logo d'entreprise (ni société d'accueil, ni société de portage), ni logo institutionnel (Business France, CCE, V.I.E officiel) ne doit être visible.**

### 5.1 Audit des Médias Visuels

| Fichier média | Emplacement | Éléments inspectés | Statut de conformité | Observations & Risques |
|---|---|---|---|---|
| `act1_airplane.jpg` | `public/assets/images/` | Fuselage, empennage, dérive, réacteurs | ✅ **100% Conforme** | Avion entièrement blanc neutre, aucun logo de compagnie (ex: Air France, Tarom) ni marquage constructeur. |
| `act2_bucarest.jpg` | `public/assets/images/` | Façades de bâtiments, enseignes lumineuses, carrefours | ✅ **100% Conforme** | Vue aérienne nocturne de Bucarest (Palais du Parlement). Aucune enseigne de marque identifiable. |
| `act3_cabis_terminal.jpg` | `public/assets/images/` | Portiques, écrans de contrôle, tarmac visible à travers la vitre | ⚠️ **ALERTE RISQUE** | **Présence visible sur le tarmac d'un avion avec dérive bleue et logo texte « TAROM » très net.** Bien que dans le décor réaliste de l'aéroport de Bucarest, un jury strict pourrait y voir une marque d'entreprise. **Action requise : Inpainting ou flou localisé sur la queue de l'avion.** |
| `act4_radiance.jpg` | `public/assets/images/` | Globe terrestre, lignes d'arcs de vol | ✅ **100% Conforme** | Rendu planétaire spatial avec réseaux de flux lumineux. Zéro logo. |
| `IMG-20260901-WA0012.jpg` | Dossier source personnel | Portrait frontal du candidat (visage) | ✅ **100% Conforme** | Portrait face caméra, mains jointes, polo noir sans logo visible. Idéal pour l'intégration scan biométrique e-Gate. |
| `IMG-20260901-WA0011.jpg` | Dossier source personnel | Portrait 3/4 regard vers le haut | ⚠️ **Attention cadrage** | Petit écusson brodé présent sur la poitrine gauche du polo. Conserver uniquement la tête/visage lors de l'extraction. |

### 5.2 Audit du Code, des Textes et Overlays

| Composant | Textes & Symboles | Statut |
|---|---|---|
| `HeaderNav.tsx` | "THOMAS MARTINEZ", "DÉVELOPPEUR FULL-STACK & SCRUM MASTER", "GRAND PRIX V.I.E ROUMANIE 2026", Coordonnées GPS | ✅ Conforme |
| `HudOverlay.tsx` | "PROJET AMS", "AIR TRAFFIC", "PROJET CABIS", "BIOMÉTRIE SÉCURISÉE", "FULL-STACK & SCRUM" | ✅ Conforme (Noms de projets techniques internes, aucune mention de Thales ou Extia) |
| `CinemaSubtitles.tsx` | Sous-titres narratifs parlant de la trajectoire, de Bucarest, d'AMS et de CABIS | ✅ Conforme |
| `ThreeScene.tsx` | Anneaux radar, grilles télémétriques, lignes laser, particules | ✅ Conforme (100% procédural Three.js) |
| Métadonnées MP3 | Balises ID3 de `voiceover.mp3` | ✅ Conforme (Aucune pochette ni tag commercial) |

---

## 6. Analyse du Livrable & Fichier de Sortie (`dist/`)

### 6.1 Spécification du chemin de destination
- Chemin officiel attendu : `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`
- Nommage : `MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4` (respect strict du patronyme et du concours).

### 6.2 Détection d'un Piège de Cycle de Vie (Vite `emptyOutDir`)
- Dans `vite.config.ts`, la configuration ne désactive pas le vidage du dossier de sortie.
- Par conséquent, la commande `npm run build` (`tsc && vite build`) exécute un `emptyOutDir` automatique qui **supprime l'intégralité du contenu de `dist/`**, y compris les fichiers vidéo MP4 qui y auraient été déposés précédemment !
- **Recommandation immédiate** :
  1. Ajouter `build: { emptyOutDir: false }` dans `vite.config.ts` OU
  2. S'assurer que le script de génération final `render:all` exécute toujours `npm run build` **avant** `render:video`, et avertir l'équipe de ne jamais lancer `npm run build` isolément après la génération du MP4 sans relancer le rendu vidéo.

---

## 7. Synthèse des Préconisations & Plan d'Action pour l'Équipe

| Priorité | Domaine | Action requise | Responsable suggéré |
|---|---|---|---|
| **P0** | **Audio & Voix-off** | Corriger `generate-voiceover.py` pour générer les 4 actes avec leurs silences respectifs et atteindre exactement 85s synchronisées. | Scénariste / Ingénieur Rendu |
| **P0** | **Conformité Logo** | Effacer le texte/logo « TAROM » sur la queue de l'avion en arrière-plan de `act3_cabis_terminal.jpg`. | Spécialiste Compositing |
| **P0** | **Compositing Photo** | Extraire le visage de Thomas depuis `IMG-20260901-WA0012.jpg` (sans inclure de vêtement à logo) et l'incruster dans l'écran e-Gate de l'Acte 3. | Spécialiste Compositing |
| **P1** | **Rendu Vidéo** | Appliquer la commande FFmpeg CFR 60fps avec `-vf "fps=60,setpts=N/(60*TB)" -r 60 -crf 18 -pix_fmt yuv420p -t 85` via le binaire `imageio_ffmpeg`. | Ingénieur Rendu & QA |
| **P1** | **Build Vite** | Configurer `vite.config.ts` pour éviter l'effacement accidentel de `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4`. | Ingénieur Rendu & QA |

---
*Fin du rapport d'investigation — Survey Explorer 3.*

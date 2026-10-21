# Handoff Report — Survey Explorer 3

**Agent** : Survey Explorer 3  
**Date** : 2026-10-14  
**Working Directory** : `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_3`  
**Recipient** : Orchestrator (`1a5310a3-b5ee-4158-8c80-6675d7e282d9`)

---

## 1. Observation

1. **Environnement FFmpeg Système** :
   - Commande exécutée : `ffmpeg -version`
   - Résultat verbatim : `ffmpeg: Le terme 'ffmpeg' n'est pas reconnu comme nom d'applet de commande, d'une fonction, d'un fichier de script ou d'un programme exécutable.`
   - Découverte binaire Python :
     Commande : `python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"`
     Résultat verbatim : `C:\Users\Thomas Martinez\AppData\Roaming\Python\Python313\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe`
     Version vérifiée : `ffmpeg version 7.1-essentials_build-www.gyan.dev Copyright (c) 2000-2024 the FFmpeg developers built with gcc 14.2.0 (Rev1, Built by MSYS2 project)`.

2. **Absence de Remotion & Chaîne de Rendu Existante** :
   - Fichier inspecté : `package.json`
   - Scripts verbatim (l. 6-13) :
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
   - Recherche globale de chaîne : `grep_search "remotion"` renvoie 0 résultat.
   - Script `scripts/render-mp4.js` (l. 89-140) : Utilise Playwright Chromium (`recordVideo: { dir: rawVideoDir, size: { width: 1920, height: 1080 } }`) et multiplexe via FFmpeg avec `-vf "fps=60,setpts=N/(60*TB)" -r 60 -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -t 85`.

3. **Mesure Audio & Désynchronisation Constatée** :
   - Fichier inspecté : `scripts/generate-voiceover.py` (l. 29) : `FULL_TEXT = " ... ".join(SCRIPT_PARTS)`.
   - Inspection FFmpeg sur `public/assets/voiceover.mp3` généré :
     `Input #0, mp3: Duration: 00:00:58.42, start: 0.000000, bitrate: 48 kb/s`.
   - Mesure individuelle de chaque acte (via script Python test avec `edge-tts` rate `+3%`) :
     - Partie 1 : `14.66s`
     - Partie 2 : `14.50s`
     - Partie 3 : `15.41s`
     - Partie 4 : `14.16s`
     - Total cumulé continu : `58.73s`.
   - Timings des chapitres dans `src/data/storyData.ts` :
     - Acte 1 : `0s - 22s` (durée 22s)
     - Acte 2 : `22s - 44s` (durée 22s)
     - Acte 3 : `44s - 67s` (durée 23s)
     - Acte 4 : `67s - 85s` (durée 18s).
   - Les dialogues audio démarrent donc en avance par rapport à la vidéo (Acte 2 à 15,5s, Acte 3 à 30,8s, Acte 4 à 47,0s), et la tranche `61,2s - 85,0s` (23,8 secondes) est dans un silence complet.

4. **Décompte d'Images à 60 FPS** :
   - Calcul vérifié : `85 * 60 = 5100 images` ; `90 * 60 = 5400 images`. Marge de sécurité = `300 images (5s)`.

5. **Audit des Logos Visuels & Code** :
   - Fichier `public/assets/images/act3_cabis_terminal.jpg` inspecté via `view_file` :
     À travers la vitre de l'aéroport, la dérive d'un avion stationné sur le tarmac porte le logo et l'inscription **« TAROM »** (compagnie aérienne nationale roumaine).
   - Fichier source `IMG-20260901-WA0011.jpg` : Présence d'un petit logo brodé sur la poitrine du polo noir.
   - Fichier source `IMG-20260901-WA0012.jpg` : Buste masqué par les mains jointes, visage net, zéro logo visible.
   - Fichiers `act1_airplane.jpg`, `act2_bucarest.jpg`, `act4_radiance.jpg` : Zéro logo visible.
   - Composants React (`HeaderNav.tsx`, `HudOverlay.tsx`, `CinemaSubtitles.tsx`, `ThreeScene.tsx`) : Zéro logo d'entreprise ou institutionnel (ni Thales, ni Extia, ni Business France, ni CCE).

6. **Comportement du dossier `dist/`** :
   - `vite.config.ts` ne spécifie pas `build.emptyOutDir: false`.
   - La commande `npm run build` efface systématiquement les fichiers préexistants dans `dist/`.

---

## 2. Logic Chain

1. **Disponibilité FFmpeg** : `ffmpeg` n'étant pas dans le PATH global mais présent via `imageio_ffmpeg`, tout script d'automatisation ou commande de build doit résoudre explicitement le chemin absolu vers `imageio_ffmpeg.get_ffmpeg_exe()`.
2. **Encodage CFR 1080p 60fps** : La capture Playwright produit un conteneur WebM temps réel potentiellement VFR. L'application des filtres FFmpeg `-vf "fps=60,setpts=N/(60*TB)" -r 60 -pix_fmt yuv420p` force le recalage strict des timestamps PTS sur une grille fixe de 60.0 fps sans dérive temporelle, garantissant 5 100 images pour 85 secondes.
3. **Désynchronisation Audio** : La timeline vidéo dure 85 secondes avec des transitions à 22s, 44s, 67s. La voix-off actuelle durant 58,42 secondes sans silences d'attente, l'audio et les sous-titres visuels se désynchronisent dès la 15e seconde, et le final (Acte 4) est muet. Une régénération avec des pauses calées sur chaque acte (départs à 1s, 23s, 45s, 68s) est impérative pour aligner la narration sur la vidéo.
4. **Conformité Réglementaire (Zéro Logo)** : Le règlement officiel du concours stipule l'exclusion de tout logo commercial ou institutionnel. Le mot « TAROM » et le logo oiseau sur l'avion en arrière-plan d'Acte 3 présentent un risque de requalification ou pénalité par le jury. L'inpainting de cette dérive supprime définitivement ce risque.
5. **Sauvegarde du livrable MP4** : Pour que `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4` ne soit pas écrasé par inadvertance par une compilation ultérieure de Vite, la commande finale doit être `render:video` ou `vite.config.ts` doit préserver les fichiers média existants.

---

## 3. Caveats

- **Matériel d'enregistrement Playwright** : Le script `scripts/render-mp4.js` est configuré avec un chemin Chrome spécifique (`C:\Program Files\Google\Chrome\Application\chrome.exe`). Si Chrome n'était pas présent à cet emplacement, Playwright basculerait sur le Chromium packagé si disponible.
- **Réseau edge-tts** : La génération de la voix-off par `edge-tts` requiert un accès réseau aux serveurs Microsoft Speech. En cas d'indisponibilité réseau ponctuelle, le fichier audio local en cache dans `public/assets/voiceover.mp3` fait office de fallback.
- **Interprétation du logo TAROM** : Dans un cadre documentaire réaliste, apercevoir un avion Tarom sur le tarmac de Bucarest peut être perçu comme un élément de décor authentique. Cependant, vu la sévérité du barème (« zéro logo d'entreprise »), l'effacement préventif est la stratégie la plus sûre.

---

## 4. Conclusion

L'infrastructure technique est solide et capable de produire une vidéo 1080p 60fps CFR de haute volée en 85 secondes (5 100 images). Néanmoins, trois actions correctives prioritaires doivent être appliquées par l'équipe :
1. **Recalibrer la génération audio** pour séquencer les 4 actes avec leurs temps de respiration respectifs et combler le silence des 23 dernières secondes.
2. **Nettoyer l'arrière-plan de l'Acte 3** pour effacer le logo « TAROM » sur la dérive de l'avion visible sur le tarmac.
3. **Sécuriser la génération vidéo finale** via `npm run render:all` en s'assurant que `dist/MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4` est bien le livrable final généré.

---

## 5. Verification Method

Pour vérifier de façon autonome l'ensemble des constats :

1. **Vérifier FFmpeg 7.1** :
   ```powershell
   python -c "import imageio_ffmpeg; import subprocess; print(subprocess.check_output([imageio_ffmpeg.get_ffmpeg_exe(), '-version']).decode().splitlines()[0])"
   ```
2. **Vérifier la durée actuelle de la voix-off** :
   ```powershell
   python -c "import imageio_ffmpeg, subprocess; print(subprocess.run([imageio_ffmpeg.get_ffmpeg_exe(), '-i', 'public/assets/voiceover.mp3'], capture_output=True, text=True).stderr)"
   ```
   -> Observer la ligne `Duration: 00:00:58.42`.
3. **Vérifier visuellement le logo TAROM dans l'Acte 3** :
   Ouvrir `public/assets/images/act3_cabis_terminal.jpg` et observer l'empennage bleu de l'avion au centre-gauche derrière la vitre.
4. **Vérifier les frames à 60 FPS** :
   Calculer `85 * 60 = 5100` et vérifier que le drapeau `-t 85` avec `-r 60` produit un flux vidéo de 5 100 trames.
5. **Consulter le rapport complet** :
   `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_3\report.md`

# RAPPORT D'EXPLORATION ET D'AUDIT ARCHITECTURAL
## Grand Prix V.I.E Roumanie 2026 — « Le V.I.E qui change une trajectoire »

**Date** : 14 Octobre 2026  
**Auteur** : Survey Explorer 1 (`teamwork_preview_explorer_survey_1`)  
**Candidat** : Thomas MARTINEZ (Développeur Full-Stack & Scrum Master — Bucarest, Roumanie)  
**Objectif** : Analyse exhaustive de l'architecture logicielle, de la composition vidéo, des 4 actes narratifs, des superpositions Three.js, des effets Ken Burns, des transitions 1.6s, et du pipeline de rendu MP4.

---

## 1. Executive Summary

L'architecture actuelle du projet repose sur une application **React 18 + Vite + Three.js + Tailwind CSS**, pilotée pour le rendu vidéo par un enregistrement automatisé **Playwright Chromium + FFmpeg**.

Bien que la structure globale soit propre et modulaire, **quatre anomalies critiques** impactent directement la fluidité vidéo, la synchronisation audiovisuelle et la conformité au concours :
1. **Bug critique de transition (Rollback / Flash to Black)** dans `CinematicBackground.tsx` : au passage exact des actes (ex: $t = 22.0\text{s}$), l'opacité de l'acte entrant passe instantanément de ~0.99 à 0.00 et repart à zéro, provoquant une coupure brutale au noir complet de 1.6 seconde et un effet de rollback.
2. **Désynchronisation massive de la voix-off** : le fichier `public/assets/voiceover.mp3` généré par `edge-tts` dure **58,42 secondes** pour une vidéo de **85 secondes**. Les répliques des actes 2, 3 et 4 sont lues très en avance par rapport à l'image, et les 26,58 dernières secondes de la vidéo (fin de l'Acte 3 et tout l'Acte 4) sont plongées dans un **silence total**. De plus, aucune musique de fond n'est intégrée.
3. **Saccade de mouvement Ken Burns (Conflit 20 FPS / 60 FPS)** : `useTimeline.ts` bride volontairement les mises à jour d'état React à ~20 FPS (`now - lastStateUpdate > 50ms`), ce qui fait saccader les translations/zooms CSS du fond 16:9 alors que Three.js tourne en rAF indépendant. Une transition CSS parasite (`transition-opacity duration-300`) aggrave la latence.
4. **Intégration photo personnelle inexistante dans l'Acte 3** : les photos haute résolution de Thomas (`IMG-20260901-WA0012.jpg` et `WA0011.jpg` en 3840x5120) sont stockées dans le dossier source externe mais ne sont pas intégrées dans le portique biométrique e-Gate CABIS. Les textures procédurales avancées de `textureGenerator.ts` sont par ailleurs orphelines.

---

## 2. Framework & Stack Technologique

Le projet est configuré comme une Single-Page Application (SPA) moderne orientée rendu temps réel et capture vidéo déterministe.

### 2.1 Dépendances Core (`package.json`)
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.169.0",
    "lucide-react": "^0.453.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.3",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.0",
    "@types/three": "^0.169.0",
    "@vitejs/plugin-react": "^4.3.2",
    "playwright": "^1.48.2",
    "tailwindcss": "^4.1.3",
    "typescript": "^5.6.3",
    "vite": "^5.4.9"
  }
}
```

### 2.2 Scripts d'exécution
- `npm run dev` : Démarre le serveur local de développement Vite.
- `npm run build` : Compile TypeScript (`tsc`) et génère le bundle de production Vite dans `dist/` (succès validé en 6.68s, bundle JS ~638 kB, CSS ~38 kB).
- `npm run preview` : Prévisualise le build statique.
- `npm run render:audio` : Exécute `python scripts/generate-voiceover.py` (synthèse vocale `edge-tts`).
- `npm run render:video` : Exécute `node scripts/render-mp4.js` (serveur HTTP local + capture Playwright Chrome GPU + fusion FFmpeg).
- `npm run render:all` : Enchaîne build, audio et rendu vidéo.

---

## 3. Structure Complète des Fichiers du Projet

L'arborescence du dépôt `ConcoursVIE` se compose de :

```text
ConcoursVIE/
├── .agents/
│   └── teamwork/
│       ├── ORIGINAL_REQUEST.md                          # Cahier des charges initial
│       ├── plan.md                                      # Plan global d'orchestration
│       └── teamwork_preview_explorer_survey_1/          # Dossier de l'explorateur
│           ├── BRIEFING.md
│           ├── DISPATCH.md
│           ├── progress.md
│           ├── report.md
│           └── handoff.md
├── assets/
│   └── voiceover.mp3                                    # Copie miroir de la piste audio (58.42s)
├── dist/
│   ├── MARTINEZ_Thomas_Grand_Prix_VIE_2026.mp4          # Rendu vidéo actuel (85.00s, H.264 60fps CFR)
│   ├── assets/
│   │   ├── images/                                      # Act 1 à Act 4 (1376x768)
│   │   ├── index-DgWCskn4.js
│   │   ├── index-ybSD2yyt.css
│   │   └── voiceover.mp3
│   ├── frames/                                          # Extractions de frames témoin v3_act1 à v3_act4
│   ├── raw_video/                                       # Capture brute Playwright WebM
│   └── index.html
├── public/
│   └── assets/
│       ├── images/
│       │   ├── act1_airplane.jpg                        # 1376x768 (16:9) cockpit/jet vue altitude
│       │   ├── act2_bucarest.jpg                        # 1376x768 (16:9) skyline Bucarest tech
│       │   ├── act3_cabis_terminal.jpg                  # 1376x768 (16:9) terminal aéroport e-Gates
│       │   └── act4_radiance.jpg                        # 1376x768 (16:9) globe / radiance orbitale
│       └── voiceover.mp3
├── scripts/
│   ├── generate-voiceover.py                            # Script Python edge-tts (fr-FR-HenriNeural)
│   └── render-mp4.js                                    # Script Node capture Playwright + FFmpeg
├── src/
│   ├── App.tsx                                          # Composant racine orchestrant les calques
│   ├── main.tsx                                         # Point d'entrée React 18 createRoot
│   ├── index.css                                        # Thème Tailwind v4, polices, mode recording
│   ├── components/
│   │   ├── Background/
│   │   │   └── CinematicBackground.tsx                  # Calque fond 16:9 + crossfade 1.6s + Ken Burns
│   │   ├── Canvas/
│   │   │   └── ThreeScene.tsx                           # Scène WebGL Three.js transparente
│   │   ├── Controls/
│   │   │   └── BottomDock.tsx                           # Barre de transport interactive (Play, Seek, Mode Rec)
│   │   ├── HUD/
│   │   │   └── HudOverlay.tsx                           # Panneau télémétrique aérospatial gauche
│   │   ├── Navigation/
│   │   │   └── HeaderNav.tsx                            # Barre de navigation supérieure (nom, altitude, GPS)
│   │   └── Subtitles/
│   │       └── CinemaSubtitles.tsx                      # Sous-titres dynamiques avec mise en valeur lexicale
│   ├── data/
│   │   └── storyData.ts                                 # Données narratives, chapitres, métriques, timing
│   ├── hooks/
│   │   └── useTimeline.ts                               # Moteur temporel centralisé, rAF, audio sync
│   ├── types/
│   │   └── story.ts                                     # Interfaces TypeScript (Chapter, Metric, TimelineState)
│   └── utils/
│       └── textureGenerator.ts                          # Générateur procédural de textures Canvas 2D / Three.js
├── gemini-code-1791965230718.md                         # Spécification initiale monocouche Awwwards
├── Grand Prix V.I.E Roumanie 2026.pdf                   # Règlement officiel Business France (6 pages)
├── index.html                                           # Page HTML hôte avec Google Fonts (Inter, JetBrains Mono)
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 4. Définition des Scènes, Actes, Timings et Narration

Le scénario est découpé en 4 actes pour une durée totale fixée à **85 secondes** (inférieure à la limite réglementaire de 90 secondes / 01:30 du Grand Prix) :

| Acte | Code Phase | Début ($t_{start}$) | Fin ($t_{end}$) | Durée | Altitude / Système | Thématique Officielle Traitée |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Acte 1** | `ACTE 01 // 30,000 FT` | 0,00 s | 22,00 s | 22,00 s | 30,000 FT <br> `AMS // AIR TRAFFIC CONTROL` | Thématique 1 : Promotion de la mission V.I.E (Migration et rapatriement d'outils critiques AMS, Full-Stack & Scrum Master). |
| **Acte 2** | `ACTE 02 // 4,500 FT` | 22,00 s | 44,00 s | 22,00 s | 4,500 FT <br> `APPROCHE // HUB DE BUCAREST` | Thématique 2 : Découverte de la Roumanie et de sa culture (Écosystème tech de Bucarest, synergie francophile, réactivité). |
| **Acte 3** | `ACTE 03 // 0 FT (SOL)` | 44,00 s | 67,00 s | 23,00 s | 0 FT (SOL) <br> `CABIS // BIOMÉTRIE AÉROPORTUAIRE` | Thématiques 1 & 3 : Mission V.I.E & Haute technologie (Portiques e-Gates aéroportuaires CABIS, vision faciale, sécurisation des flux). |
| **Acte 4** | `ACTE 04 // PERSPECTIVES` | 67,00 s | 85,00 s | 18,00 s | ORBITAL <br> `ALLIANCE // RAYONNEMENT FR-RO` | Thématique 3 : Rayonnement international du savoir-faire français uni à l'énergie roumaine + changement de trajectoire personnelle. |

### 4.1 Scripts narratifs et sous-titres
- **Acte 1** (0s - 22s) :
  > *« À trente mille pieds d'altitude, une trajectoire ne doit rien au hasard. En arrivant à Bucarest en mai 2025 pour mon V.I.E, j'ai pris de la hauteur sur le projet AMS : rapatrier et migrer des outils critiques de navigation aérienne au sein d'une équipe agile. »*
- **Acte 2** (22s - 44s) :
  > *« Mais un V.I.E, c'est avant tout traverser les nuages pour s'ancrer sur le terrain. En atterrissant en Roumanie, j'ai découvert une culture chaleureuse, francophile, et des ingénieurs roumains d'une réactivité redoutable qui ont enrichi mes méthodes et ouvert mes horizons. »*
- **Acte 3** (44s - 67s) :
  > *« Une fois au sol, ma mission a pris une nouvelle dimension en mars 2026 avec le projet CABIS. Du suivi des avions dans le ciel, je suis passé à la sécurisation des passagers dans les aéroports grâce aux portiques de contrôle biométrique, en intervenant sur toute la chaîne Full-Stack. »*
- **Acte 4** (67s - 85s) :
  > *« De la gestion du ciel avec AMS aux portiques biométriques CABIS, j'ai vu comment l'excellence technologique française rayonne lorsqu'elle s'unit au dynamisme roumain. Ce V.I.E n'a pas seulement guidé des avions et des passagers : il a transformé ma propre trajectoire. »*

---

## 5. Audit Approfondi des Effets Visuels et Transitions

### 5.1 Le Bug Critique de Transition : Rollback & Flash to Black
Dans `src/components/Background/CinematicBackground.tsx` (lignes 28-42) :
```tsx
const fadeDuration = 1.6; // 1.6s smooth transition
let opacity = 0;
let progressInAct = 0;

if (currentTime >= tStart && currentTime <= tEnd) {
  progressInAct = (currentTime - tStart) / duration;
  // Fade in at start
  if (currentTime - tStart < fadeDuration && index !== 0) {
    opacity = (currentTime - tStart) / fadeDuration;
  } else if (tEnd - currentTime < fadeDuration && index !== ACT_IMAGES.length - 1) {
    // Fade out at end
    opacity = (tEnd - currentTime) / fadeDuration;
  } else {
    opacity = 1;
  }
} else if (currentTime < tStart && currentTime > tStart - fadeDuration && index !== 0) {
  opacity = (currentTime - (tStart - fadeDuration)) / fadeDuration;
}
```

**Démonstration du dysfonctionnement à la frontière $t = 22.0\text{s}$ (Acte 1 $\to$ Acte 2) :**
1. À $t = 21.9\text{s}$ :
   - Pour l'Acte 1 ($tStart=0, tEnd=22$) : $tEnd - currentTime = 0.1\text{s}$. L'opacité vaut $0.1 / 1.6 = 0.0625$ (s'estompe).
   - Pour l'Acte 2 ($tStart=22, tEnd=44$) : $currentTime < tStart$ est vrai. La branche `else if` s'exécute :
     $$\text{opacity} = \frac{21.9 - (22.0 - 1.6)}{1.6} = \frac{1.5}{1.6} = 0.9375$$
     L'image 2 est donc quasiment visible à 100%.
2. À $t = 22.000\text{s}$ :
   - Pour l'Acte 1 : $currentTime > 22.0$, ne rentre dans aucune condition $\implies$ `opacity = 0`.
   - Pour l'Acte 2 : $currentTime \ge tStart$ devient VRAI ! La condition principale s'exécute, puis :
     `if (currentTime - tStart < fadeDuration)` est évalué avec $currentTime - tStart = 22.0 - 22.0 = 0$ !
     $$\text{opacity} = \frac{0}{1.6} = 0.000$$
3. **Conséquence immédiate** :
   - À $t = 21.99\text{s}$, l'Acte 2 était à **99.4% d'opacité**.
   - À $t = 22.00\text{s}$, l'Acte 2 **s'effondre instantanément à 0.0%** !
   - Les deux images ont alors une opacité de 0, affichant le fond noir brut (`bg-slate-950`).
   - Puis de 22.0s à 23.6s, l'image 2 remonte une seconde fois de 0 à 1 !
   - **C'est la cause exacte des saccades et du rollback ressenti par l'utilisateur.** Le même phénomène se produit à 44.0s et 67.0s.

### 5.2 Conflit CSS Transition vs Boucle JS
Ligne 51 de `CinematicBackground.tsx` :
```tsx
className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-linear"
style={{ opacity: Math.max(0, Math.min(1, opacity)) }}
```
L'attribut inline `style.opacity` est recalculé à chaque instant par JavaScript. La classe Tailwind `transition-opacity duration-300` applique une interpolation CSS de 300 millisecondes sur chaque changement. Cela induit une traînée d'inertie (lag), empêche le calage strict des frames lors des captures Playwright, et crée des micropulsations.

### 5.3 Mouvement Ken Burns et Discontinuités Géométriques
Lignes 44-46 de `CinematicBackground.tsx` :
```tsx
const scale = 1.0 + progressInAct * 0.08;
const translateX = (index % 2 === 0 ? 1 : -1) * progressInAct * 1.5;
const translateY = progressInAct * -1.0;
```
- Lors de la pré-transition ($currentTime < tStart$), `progressInAct` est bloqué à `0`. L'image entrante est immobile ($scale=1.0$) pendant 1.6 seconde, puis commence soudainement son mouvement à $t=tStart$.
- Dès que $currentTime > tEnd$, `progressInAct` retombe immédiatement à `0`, provoquant un saut géométrique si l'image avait un reliquat d'affichage.

### 5.4 Saccade Liée au Throttling 20 FPS de React
Dans `src/hooks/useTimeline.ts` (lignes 121-125) :
```tsx
// Throttle React state re-renders to ~20 FPS (every 50ms) to ensure smooth 60 FPS WebGL rendering without CPU choke
if (now - lastStateUpdateRef.current > 50) {
  lastStateUpdateRef.current = now;
  setCurrentTime(internalTimeRef.current);
}
```
Comme `CinematicBackground` et les sous-titres reçoivent `currentTime` en prop React, leurs positions et transformations CSS ne sont rafraîchies qu'à **20 FPS**, tandis que Three.js rend sa boucle à 60 FPS. Cette discordance produit une friction visuelle flagrante entre l'arrière-plan et le canevas 3D.

---

## 6. Analyse des Superpositions Three.js et Déconnexion Visuelle

Dans `src/components/Canvas/ThreeScene.tsx` :
1. **Ruptures de visibilité brutales (Hard Cuts)** :
   ```tsx
   radarGroup.visible = time >= 0 && time < 23;
   bucarestGroup.visible = time >= 21 && time < 45;
   cabisHudGroup.visible = time >= 43 && time < 68;
   orbitalGroup.visible = time >= 66;
   ```
   Les groupes 3D sont activés/désactivés via un booléen `visible`, sans transition d'opacité fluide liée au fondu 1.6s du fond. Le radar de l'Acte 1 tente un calcul d'opacité (`const op = ...`), mais la variable `op` n'est jamais appliquée aux matériaux des anneaux !
2. **Désynchronisation temporelle (`timestamp` vs `currentTime`)** :
   Les animations d'oscillation (ex: `laserLine.position.y = Math.sin(now * 0.0035) * 8` ou les rotations d'anneaux) utilisent le `timestamp` temps réel de la machine (`now`) plutôt que le temps cinématique de la vidéo `time` (`currentTimeRef.current`). En cas de micro-ralentissement lors de la capture Playwright, la vitesse d'animation Three.js dérive par rapport à l'audio et aux sous-titres.
3. **Absence du hook déterministe pour le rendu vidéo** :
   Dans `useTimeline.ts`, un appel `window.renderSceneAt(t)` est prévu ligne 44, mais `ThreeScene.tsx` ne l'enregistre jamais sur `window`. Playwright ne peut donc pas forcer un rendu frame-par-frame déterministe hors temps réel.
4. **Code orphelin dans `textureGenerator.ts`** :
   Le fichier `src/utils/textureGenerator.ts` implémente d'excellentes textures procédurales (`createBuildingTexture`, `createAirplaneTexture`, `createAirportFloorTexture`, `createCabisScreenTexture`, `createAirportSignTexture`, `createRunwayTexture`), mais n'est **importé nulle part** dans `ThreeScene.tsx`.

---

## 7. Audit de l'Intégration Photo Personnelle (Acte 3)

### 7.1 Fichiers Sources Disponibles
Dans le répertoire `C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test` :
- `IMG-20260901-WA0012.jpg` : Portrait frontal de Thomas (3840 x 5120 pixels, JPEG RGB, netteté optimale).
- `IMG-20260901-WA0011.jpg` : Vue contemplative / vision d'avenir (3840 x 5120 pixels).

### 7.2 État Actuel dans l'Application
- **Aucune intégration** dans le portique biométrique de l'Acte 3.
- `createCabisScreenTexture` dans `textureGenerator.ts` dessinait une vague silhouette ovale procédurale (`ctx.arc(..., 65)`), mais ce générateur lui-même est inutilisé.
- Les seules images présentes dans `public/assets/images/` sont 4 arrière-plans génériques de 1376x768 (`act1_airplane.jpg`, `act2_bucarest.jpg`, `act3_cabis_terminal.jpg`, `act4_radiance.jpg`).

---

## 8. Audit du Pipeline Audio & Vidéo (FFmpeg & Playwright)

### 8.1 Désynchronisation Majeure de la Voix-Off
L'analyse de `public/assets/voiceover.mp3` via FFmpeg révèle :
```text
Input #0, mp3, from 'public/assets/voiceover.mp3':
  Duration: 00:00:58.42, bitrate: 48 kb/s, 24000 Hz, mono
```
- Le script `scripts/generate-voiceover.py` concatène les 4 textes avec un simple `" ... "` (`FULL_TEXT = " ... ".join(SCRIPT_PARTS)`).
- Le moteur `edge-tts` déclame l'intégralité du texte en **58,42 secondes**.
- Décalage par rapport à la vidéo de **85 secondes** :
  - **Acte 1** (0s - 22s) : la voix lit l'acte 1 (14s), puis à $t = 15\text{s}$, elle commence déjà à parler de Bucarest et de la Roumanie alors que l'écran affiche encore l'avion dans les nuages !
  - **Acte 2** (22s - 44s) : à $t = 30\text{s}$, la voix parle des portiques biométriques CABIS, alors que le visuel est en plein sur Bucarest !
  - **Acte 3** (44s - 67s) : à $t = 44\text{s}$, la voix attaque déjà l'Acte 4 (« De la gestion du ciel... ») !
  - **À $t = 58,42\text{s}$** : la voix s'arrête définitivement.
  - **De $t = 58,42\text{s}$ à $t = 85,00\text{s}$ (26,58 secondes)** : aucun son, **silence total** sur tout l'Acte 4 !

### 8.2 Absence de Piste Musicale
Le règlement officiel autorise une musique libre de droits (ex. Pixabay, Au bout du fil). Actuellement, aucun fichier musical n'existe dans le projet et `render-mp4.js` n'intègre que la piste voix-off.

### 8.3 Risque d'Accélération Temporelle Playwright / FFmpeg
Dans `scripts/render-mp4.js` (ligne 138) :
```javascript
const ffmpegCmd = `"${ffmpegExe}" -y -i "${rawVideoPath}" -i "${voiceoverPath}" -map 0:v:0 -map 1:a:0 -vf "fps=60,setpts=N/(60*TB)" -r 60 -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a aac -b:a 192k -t 85 "${finalMp4Path}"`;
```
Le filtre `setpts=N/(60*TB)` réindexe chaque frame capturée à $\frac{1}{60}\text{s}$. Si Chromium subit un ralentissement durant les 85,5 secondes de capture en temps réel et n'enregistre que 4 200 frames au lieu des 5 100 requises ($85 \times 60$), `setpts` compresse la durée de la vidéo à 70 secondes, provoquant un décalage progressif dramatique par rapport au son !

---

## 9. Recommandations et Feuille de Route pour l'Équipe

### 9.1 Pour le Monteur Vidéo & Motion Designer
1. **Refonte mathématique du crossfade 1.6s** :
   Remplacer la logique conditionnelle défaillante de `CinematicBackground.tsx` par une fonction d'opacité continue et symétrique par acte $i$ :
   - Pour $t < tStart - 1.6$ ou $t > tEnd$ : $\text{opacity} = 0$.
   - Pour $t \in [tStart - 1.6, tStart]$ : $\text{opacity} = (t - (tStart - 1.6)) / 1.6$ (fondu d'entrée).
   - Pour $t \in [tStart, tEnd - 1.6]$ : $\text{opacity} = 1.0$.
   - Pour $t \in [tEnd - 1.6, tEnd]$ : $\text{opacity} = (tEnd - t) / 1.6$ (fondu de sortie).
   - L'Acte 1 commence à 1.0 à $t=0$, et l'Acte 4 reste à 1.0 jusqu'à $t=85$.
2. **Suppression de `transition-opacity` en CSS** pour garantir un contrôle déterministe immédiat.
3. **Mouvement Ken Burns continu** :
   Faire démarrer le calcul du `scale` et du `translate` dès $tStart - 1.6\text{s}$ pour que l'image apparaisse déjà en mouvement doux.
4. **Synchronisation 60 FPS unifiée** :
   Permettre à `CinematicBackground` de lire le temps directement ou synchroniser la mise à jour sans saccade.

### 9.2 Pour le Scénariste & Concepteur Audio
1. **Reprise de `generate-voiceover.py` avec Silence Padding** :
   Générer chaque acte séparément sous forme d'extrait audio indépendant, puis les assembler avec des silences précis pour que chaque texte démarre exactement aux repères visuels :
   - Acte 1 : départ à $t = 1.0\text{s}$
   - Acte 2 : départ à $t = 23.0\text{s}$
   - Acte 3 : départ à $t = 45.0\text{s}$
   - Acte 4 : départ à $t = 68.0\text{s}$
2. **Ajout d'une nappe sonore musicale libre de droits** :
   Mixer une musique de fond électronique/aéronautique subtile (ex: Ambient Tech / Cinematic Pad à -18 dB) derrière la voix-off (-2 dB) pour éviter tout silence de fond.

### 9.3 Pour le Spécialiste Compositing & Intégration Photo
1. **Traitement et détourage du portrait de Thomas** :
   À partir de `IMG-20260901-WA0012.jpg` (3840x5120), recadrer et extraire le visage/buste.
2. **Création d'un panneau holographique 3D / HUD e-Gate dans l'Acte 3** :
   Intégrer le portrait stylisé (effet scan biométrique bleu cyan / vert émeraude, maillage facial Delaunay, score de reconnaissance 99.8%, statut « PASSAGE AUTORISÉ ») au centre ou sur le côté du portique aéroportuaire de l'Acte 3.

### 9.4 Pour l'Ingénieur Rendu & QA Conformité
1. **Sécurisation de la capture Playwright** :
   Remplacer l'attente passive en temps réel par une boucle d'échantillonnage déterministe `window.seekTimeline(frame / 60)` si nécessaire, ou garantir un taux de rafraîchissement constant à 60 FPS sans perte de frames.
2. **Vérification stricte de conformité** :
   - Durée exacte : 85 secondes (respect absolu de la limite $\le 90\text{s}$).
   - Format : 1920x1080 60 FPS CFR H.264 / AAC.
   - Contrôle d'absence de logo d'entreprise ou institutionnel sur l'ensemble de la vidéo.

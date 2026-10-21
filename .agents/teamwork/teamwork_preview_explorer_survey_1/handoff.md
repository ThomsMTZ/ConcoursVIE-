# Handoff Report — Survey Explorer 1

**Agent** : Survey Explorer 1 (`teamwork_preview_explorer_survey_1`)  
**Parent / Orchestrator ID** : `1a5310a3-b5ee-4158-8c80-6675d7e282d9`  
**Mission** : Exploration et audit technique approfondi du projet Grand Prix V.I.E Roumanie 2026.  
**Type** : Hard Handoff (Investigation complète terminée)

---

## 1. Observation

### Obs 1 : Structure du code et stack technique
- `package.json` (lignes 14-30) : Dépendances principales `react: ^18.3.1`, `three: ^0.169.0`, `lucide-react: ^0.453.0`, `tailwindcss: ^4.1.3`, `playwright: ^1.48.2`, `vite: ^5.4.9`.
- Commande `npm run build` exécutée avec succès en 6.68s via `tsc && vite build`, produisant `dist/index.html` (0.79 kB), `dist/assets/index-DgWCskn4.js` (638.44 kB), `dist/assets/index-ybSD2yyt.css` (38.06 kB).

### Obs 2 : Définitions des 4 Actes dans `src/data/storyData.ts`
- Ligne 3 : `TOTAL_DURATION = 85;`
- Lignes 15-112 :
  - Acte 1 (`ACTE 01 // 30,000 FT`) : `tStart: 0`, `tEnd: 22` (AMS / Air Traffic Control)
  - Acte 2 (`ACTE 02 // 4,500 FT`) : `tStart: 22`, `tEnd: 44` (Approche / Hub Bucarest)
  - Acte 3 (`ACTE 03 // 0 FT (SOL)`) : `tStart: 44`, `tEnd: 67` (CABIS / Biométrie Aéroportuaire)
  - Acte 4 (`ACTE 04 // PERSPECTIVES`) : `tStart: 67`, `tEnd: 85` (Alliance / Rayonnement FR-RO)

### Obs 3 : Anomalie mathématique de transition dans `CinematicBackground.tsx`
- Dans `src/components/Background/CinematicBackground.tsx` (lignes 28-41) :
```tsx
if (currentTime >= tStart && currentTime <= tEnd) {
  progressInAct = (currentTime - tStart) / duration;
  if (currentTime - tStart < fadeDuration && index !== 0) {
    opacity = (currentTime - tStart) / fadeDuration;
  } else if (tEnd - currentTime < fadeDuration && index !== ACT_IMAGES.length - 1) {
    opacity = (tEnd - currentTime) / fadeDuration;
  } else {
    opacity = 1;
  }
} else if (currentTime < tStart && currentTime > tStart - fadeDuration && index !== 0) {
  opacity = (currentTime - (tStart - fadeDuration)) / fadeDuration;
}
```
- Ligne 51 : `className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-linear"`

### Obs 4 : Throttling d'état React à 20 FPS dans `src/hooks/useTimeline.ts`
- Lignes 121-125 de `src/hooks/useTimeline.ts` :
```tsx
// Throttle React state re-renders to ~20 FPS (every 50ms) to ensure smooth 60 FPS WebGL rendering without CPU choke
if (now - lastStateUpdateRef.current > 50) {
  lastStateUpdateRef.current = now;
  setCurrentTime(internalTimeRef.current);
}
```

### Obs 5 : Coupure brutale et désynchronisation temporelle dans `src/components/Canvas/ThreeScene.tsx`
- Lignes 203, 210, 212, 216 :
  - `radarGroup.visible = time >= 0 && time < 23;`
  - `bucarestGroup.visible = time >= 21 && time < 45;`
  - `cabisHudGroup.visible = time >= 43 && time < 68;`
  - `orbitalGroup.visible = time >= 66;`
- Lignes 187, 206, 218 : les fonctions d'oscillation utilisent `Math.sin(now * ...)` basé sur le `timestamp` rAF de la machine au lieu de la variable cinématique `time`.
- `window.renderSceneAt` n'est pas défini dans `ThreeScene.tsx`.
- `src/utils/textureGenerator.ts` (362 lignes) n'est importé nulle part dans le projet.

### Obs 6 : Durée réelle de `voiceover.mp3` vs vidéo 85s
- Exécution de `ffmpeg -i public/assets/voiceover.mp3` :
  `Duration: 00:00:58.42, bitrate: 48 kb/s, 24000 Hz, mono`
- Dans `scripts/generate-voiceover.py` (ligne 29) :
  `FULL_TEXT = " ... ".join(SCRIPT_PARTS)`
- Dans `scripts/render-mp4.js` (ligne 138) :
  `"${ffmpegExe}" -y -i "${rawVideoPath}" -i "${voiceoverPath}" -map 0:v:0 -map 1:a:0 -vf "fps=60,setpts=N/(60*TB)" -r 60 ... -t 85 "${finalMp4Path}"`

### Obs 7 : Présence et état des photos personnelles de Thomas
- Vérification dans `C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test` :
  - `IMG-20260901-WA0011.jpg` : 3840 x 5120 JPEG RGB (vision d'avenir)
  - `IMG-20260901-WA0012.jpg` : 3840 x 5120 JPEG RGB (portrait frontal biométrique)
- Aucune de ces photos n'est importée dans `public/` ou utilisée dans l'Acte 3.

---

## 2. Logic Chain

1. **Rupture de transition (Rollback / Flash to Black)** :
   - Par Obs 3, à $t = 21.9\text{s}$, l'image de l'Acte 2 calcule son opacité via la branche `else if` : $\text{opacity} = \frac{21.9 - 20.4}{1.6} \approx 0.9375$.
   - À $t = 22.000\text{s}$, $currentTime \ge tStart$ devient vrai. La condition `if (currentTime - tStart < fadeDuration)` prend le relais avec $currentTime - tStart = 0$. L'opacité est immédiatement réassignée à $0.000$.
   - L'image saute donc de 0.94 à 0.00 en une frame, l'image 1 ayant elle-même terminé son fondu à 0.00. L'écran devient noir (`bg-slate-950`). Puis l'image 2 remonte de 0 à 1 une seconde fois.
   - De plus, la classe CSS `transition-opacity duration-300` tente d'adoucir ce saut avec 300ms de retard, créant un artefact de clignotement / saccade visible.

2. **Saccade de la caméra Ken Burns** :
   - Par Obs 4, `currentTime` dans React n'est dispatché que toutes les 50ms (~20 FPS).
   - `CinematicBackground` dépend de `currentTime` pour recalculer inline `scale` et `translate`.
   - Les mouvements de zoom/panoramique sont donc cadencés à 20 FPS, ce qui heurte le regard humain et tranche avec la fluidité 60 FPS du canevas Three.js.

3. **Désynchronisation audio majeure** :
   - Par Obs 2, la vidéo dure 85 secondes réparties en 4 actes de 22s, 22s, 23s et 18s.
   - Par Obs 6, la voix-off générée ne dure que 58,42 secondes car les 4 textes sont enchaînés sans pause suffisante.
   - La voix lit donc l'Acte 2 dès 14s (pendant l'image de l'Acte 1), l'Acte 3 dès 29s (pendant l'image de l'Acte 2), et l'Acte 4 dès 43s (pendant l'image de l'Acte 3).
   - De 58,42s à 85,00s (les 26,58 dernières secondes), il n'y a plus aucun signal sonore (silence absolu).

4. **Incohérence Three.js / Capture Vidéo** :
   - Par Obs 5, les objets Three.js disparaissent par coupure nette de visibilité (`visible = false`) et leurs animations oscillantes reposent sur le temps machine `now` plutôt que sur `currentTime`.
   - Par Obs 5 et 7, l'absence de Thomas dans l'Acte 3 et l'inactivité de `textureGenerator.ts` privent la vidéo de son atout d'identification personnel requis pour le Grand Prix.

---

## 3. Caveats

- Les tests de rendu complet via `render-mp4.js` lancent un Chromium complet avec accélération GPU et capture audio pendant 85,5 secondes réelles. Ce test complet n'a pas été relancé dans ce tour d'exploration afin de ne pas bloquer les ressources système, mais la compilation `tsc && vite build` a été vérifiée et confirmée fonctionnelle.
- Les photos sources sont situées dans un dépôt sibling (`filterpicture`). Elles devront être copiées dans `public/assets/` ou traitées via un script dédié lors de l'implémentation.
- Aucune musique de fond libre de droits n'a encore été sélectionnée ou placée dans le dépôt.

---

## 4. Conclusion

L'infrastructure React + Three.js est saine et bien architecturée, mais la vidéo finale présente **quatre défauts rédhibitoires** pour un concours d'excellence :
1. Le bug mathématique de double-fondu dans `CinematicBackground.tsx` (saccade / flash noir à 22s, 44s, 67s).
2. La désynchronisation complète de la voix-off (58s au lieu de 85s, avance de phase et 26s de silence final).
3. Le manque de fluidité du Ken Burns causé par le throttling React 20 FPS et la transition CSS 300ms.
4. L'absence d'intégration du portrait de Thomas dans le portique biométrique CABIS de l'Acte 3.

Toutes les causes racines sont isolées avec précision dans le code source. Les correctifs sont clairement identifiés et prêts à être déployés par les agents spécialistes (Monteur, Scénariste, Compositing, QA).

---

## 5. Verification Method

1. **Vérification du bug de transition** :
   Inspecter `CinematicBackground.tsx` lignes 28-42. Évaluer mathématiquement la variable `opacity` pour $t = 21.99$ puis $t = 22.00$ avec $tStart = 22, fadeDuration = 1.6$. On constate immédiatement la discontinuité $0.99375 \to 0.000$.
2. **Vérification de la durée audio** :
   Exécuter dans le terminal :
   `python -c "import imageio_ffmpeg, subprocess; ffmpeg = imageio_ffmpeg.get_ffmpeg_exe(); print(subprocess.run([ffmpeg, '-i', 'public/assets/voiceover.mp3'], capture_output=True, text=True).stderr)"`
   Observer `Duration: 00:00:58.42`.
3. **Vérification de la présence des photos** :
   Exécuter dans le terminal :
   `python -c "import os; print(os.path.exists(r'C:\Users\Thomas Martinez\Documents\GitHub\filterpicture\src\main\resources\input\Test\IMG-20260901-WA0012.jpg'))"`
   Retourne `True`.
4. **Vérification du build applicatif** :
   Exécuter `npm run build` dans `c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE`.

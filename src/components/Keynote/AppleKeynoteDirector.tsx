import React from 'react';
import { STORY_CHAPTERS } from '../../data/storyData';

interface AppleKeynoteDirectorProps {
  currentTime: number;
}

/**
 * DIRECTION 2: APPLE KEYNOTE & KINETIC MOTION DESIGN
 * 
 * Inspired by Apple Worldwide Developers Conference (WWDC) and Apple Product Keynotes:
 * - Ultra-deep OLED black canvas with subtle radial titanium illumination.
 * - Massive kinetic typography with spring reveals and gradient typography.
 * - Central dynamic audio frequency wave pulsing to Thomas's voice.
 * - Giant animated metrics and counters (+35% velocity, 100,000+ flights, 100% Schengen).
 * - Machined brushed-titanium bento cards with refractive specular edges.
 */
export const AppleKeynoteDirector: React.FC<AppleKeynoteDirectorProps> = ({ currentTime }) => {
  // Determine current chapter index [0, 1, 2, 3]
  let actIndex = 0;
  if (currentTime >= 67.5) actIndex = 3;
  else if (currentTime >= 44.5) actIndex = 2;
  else if (currentTime >= 22.5) actIndex = 1;

  const chapter = STORY_CHAPTERS[actIndex];
  const actProgress = Math.max(0, Math.min(1, (currentTime - chapter.tStart) / (chapter.tEnd - chapter.tStart)));

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black text-white font-sans select-none flex flex-col justify-between p-8 md:p-14 z-10">
      {/* 1. AMBIENT GLOWS & MACHINED TITANIUM LIGHTING */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.07)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,240,255,0.06)_0%,transparent_50%)] pointer-events-none" />

      {/* 2. TOP APPLE-STYLE NAVIGATION & TIME STAMP */}
      <header className="relative z-20 flex items-center justify-between w-full border-b border-white/10 pb-5">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] animate-pulse" />
          <div className="flex flex-col">
            <span className="font-mono text-xs tracking-[0.25em] text-slate-400 uppercase">Grand Prix V.I.E Roumanie 2026</span>
            <span className="text-sm font-semibold tracking-tight text-slate-200">Thomas MARTINEZ — Candidat Officiel</span>
          </div>
        </div>

        {/* Acts Segmented Pill Indicator */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-xl">
          {STORY_CHAPTERS.map((ch, idx) => (
            <div
              key={idx}
              className={`px-3.5 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all duration-500 ${
                actIndex === idx
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold shadow-lg shadow-emerald-500/20'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              ACTE 0{idx + 1}
            </div>
          ))}
        </div>

        {/* Timecode */}
        <div className="font-mono text-xs tracking-widest text-slate-400">
          {Math.floor(currentTime / 60)}:{(currentTime % 60).toFixed(0).padStart(2, '0')} / 01:25
        </div>
      </header>

      {/* 3. CENTERSTAGE: KINETIC TYPOGRAPHY & DYNAMIC METRIC REVEAL */}
      <main className="relative z-20 my-auto flex flex-col items-center justify-center text-center max-w-6xl mx-auto w-full">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
          <span className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-emerald-400">
            {actIndex === 0 && '01 // ALTITUDE DE CROISIÈRE — 30 000 FT'}
            {actIndex === 1 && '02 // IMMERSION & GOUVERNANCE AGILE'}
            {actIndex === 2 && '03 // PORTIQUES BIOMÉTRIQUES CABIS'}
            {actIndex === 3 && '04 // RAYONNEMENT EUROPÉEN'}
          </span>
        </div>

        {/* GIANT STATEMENT HEADLINE (Apple Keynote Style) */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-5xl mb-8">
          {actIndex === 0 && (
            <>
              Contrôler les trajectoires dans le ciel.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Plus de 100 000 vols quotidiens.
              </span>
            </>
          )}
          {actIndex === 1 && (
            <>
              Plonger au cœur de l'écosystème roumain.{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-emerald-400 bg-clip-text text-transparent">
                Synergie biculturelle & vélocité agile.
              </span>
            </>
          )}
          {actIndex === 2 && (
            <>
              Du radar aérien aux portiques biométriques.{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Sécuriser les frontières Schengen.
              </span>
            </>
          )}
          {actIndex === 3 && (
            <>
              L'excellence française portée par l'énergie roumaine.{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
                Une nouvelle trajectoire.
              </span>
            </>
          )}
        </h1>

        {/* CENTRAL APPLE EQUALIZER & SOUNDWAVE */}
        <div className="flex items-center justify-center gap-1.5 h-12 my-6">
          {Array.from({ length: 36 }).map((_, i) => {
            const freq = Math.sin(currentTime * 4.5 + i * 0.35) * 0.5 + 0.5;
            const h = 8 + freq * 36;
            return (
              <div
                key={i}
                className="w-1.5 rounded-full transition-all duration-75"
                style={{
                  height: `${h}px`,
                  backgroundColor: actIndex === 1 ? '#fbbf24' : actIndex === 2 ? '#34d399' : '#38bdf8',
                  opacity: 0.4 + freq * 0.6
                }}
              />
            );
          })}
        </div>

        {/* GIANT QUANTIFIED METRIC CALLOUTS (Animated with Spring Easing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
          {actIndex === 0 && (
            <>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">30 000 FT</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Altitude de croisière</div>
                <div className="text-xs text-slate-300 mt-2">Prise de hauteur & migration des flux critiques AMS.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">100 000+</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Vols surveillés / jour</div>
                <div className="text-xs text-slate-300 mt-2">Architecture haute disponibilité & zéro tolérance à la panne.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">DOUBLE RÔLE</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Full-Stack & Scrum Master</div>
                <div className="text-xs text-slate-300 mt-2">Développement réactif et pilotage agile de l'équipe.</div>
              </div>
            </>
          )}

          {actIndex === 1 && (
            <>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-amber-400 font-mono tracking-tight">+35%</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Vélocité d'équipe</div>
                <div className="text-xs text-slate-300 mt-2">Gouvernance Scrum réactive & suppression des goulets.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">12 INGÉNIEURS</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Équipe biculturelle</div>
                <div className="text-xs text-slate-300 mt-2">Synergie quotidienne talentueuse et francophile à Bucarest.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">2 SEMAINES</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Cadence de sprint</div>
                <div className="text-xs text-slate-300 mt-2">Itérations rapides & déploiement continu sans friction.</div>
              </div>
            </>
          )}

          {actIndex === 2 && (
            <>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">100%</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Conformité Schengen</div>
                <div className="text-xs text-slate-300 mt-2">Passage e-Gates automatisé & sécurisé aux frontières.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">99.4%</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Précision Biométrique</div>
                <div className="text-xs text-slate-300 mt-2">Reconnaissance faciale ICAO 9303 haute sécurité temps réel.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">END-TO-END</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Caméra à l'actionneur</div>
                <div className="text-xs text-slate-300 mt-2">Intégration du logiciel avec les portiques physiques.</div>
              </div>
            </>
          )}

          {actIndex === 3 && (
            <>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-amber-300 font-mono tracking-tight">14 HUBS</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Rayonnement Européen</div>
                <div className="text-xs text-slate-300 mt-2">Aéroports internationaux connectés au savoir-faire franco-roumain.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">LEADERSHIP</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Trajectoire Transformée</div>
                <div className="text-xs text-slate-300 mt-2">Passage d'ingénieur logiciel à leader technique international.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left">
                <div className="text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">2026</div>
                <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1">Grand Prix V.I.E</div>
                <div className="text-xs text-slate-300 mt-2">L'impact concret et durable de l'expérience roumaine.</div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* 4. FOOTER: OFFICIAL NARRATION SUBTITLES (Synchronized) */}
      <footer className="relative z-20 w-full max-w-4xl mx-auto border-t border-white/10 pt-4 text-center">
        <p className="text-sm md:text-base font-light text-slate-300 tracking-wide leading-relaxed">
          « {chapter.subtitles} »
        </p>
      </footer>
    </div>
  );
};

export default AppleKeynoteDirector;

import { Chapter } from '../types/story';

export const TOTAL_DURATION = 85; // 1 min 25 sec (Strictement conforme < 1m30)

export const CANDIDATE_INFO = {
  name: "THOMAS MARTINEZ",
  role: "DÉVELOPPEUR FULL-STACK & SCRUM MASTER",
  contest: "GRAND PRIX V.I.E ROUMANIE 2026",
  location: "BUCAREST, ROUMANIE",
  coordinates: "44.4268° N, 26.1025° E",
  arrivalDate: "1er Mai 2025",
  theme: "Le V.I.E qui change une trajectoire"
};

export const STORY_CHAPTERS: Chapter[] = [
  {
    id: 1,
    phaseCode: "ACTE 01 // 30,000 FT",
    tStart: 0,
    tEnd: 22,
    altitude: "30,000 FT",
    system: "AMS // AIR TRAFFIC CONTROL",
    tag: "01. ALTITUDE DE CROISIÈRE — MISSION AMS",
    title: "Contrôler les trajectoires dans le ciel.",
    summary: "Rapatriement et migration d'outils critiques de gestion du trafic aérien.",
    subtitles: "« À trente mille pieds d'altitude, une trajectoire ne doit rien au hasard. En arrivant à Bucarest en mai 2025 pour mon V.I.E, j'ai pris de la hauteur sur le projet AMS : rapatrier et migrer des outils critiques de navigation aérienne au sein d'une équipe agile. »",
    metrics: [
      {
        label: "PROJET AMS",
        value: "AIR TRAFFIC",
        detail: "Migration & rapatriement d'outils de navigation"
      },
      {
        label: "DOUBLE CASQUETTE",
        value: "FULL-STACK & SCRUM",
        detail: "Développement réactif & pilotage de sprints"
      }
    ]
  },
  {
    id: 2,
    phaseCode: "ACTE 02 // 4,500 FT",
    tStart: 22,
    tEnd: 44,
    altitude: "4,500 FT",
    system: "APPROCHE // HUB DE BUCAREST",
    tag: "02. DESCENTE À TRAVERS LES NUAGES — ROUMANIE",
    title: "Plonger au cœur de l'écosystème roumain.",
    summary: "Immersion culturelle et synergie avec les ingénieurs locaux francophiles.",
    subtitles: "« Mais un V.I.E, c'est avant tout traverser les nuages pour s'ancrer sur le terrain. En atterrissant en Roumanie, j'ai découvert une culture chaleureuse, francophile, et des ingénieurs roumains d'une réactivité redoutable qui ont enrichi mes méthodes et ouvert mes horizons. »",
    metrics: [
      {
        label: "HUB BUCAREST",
        value: "TECH EXCELLENCE",
        detail: "Écosystème dynamique d'ingénierie logicielle"
      },
      {
        label: "SYNERGIE LOCALE",
        value: "FRANCOPHILIE",
        detail: "Partage culturel & esprit d'équipe soudé"
      }
    ]
  },
  {
    id: 3,
    phaseCode: "ACTE 03 // 0 FT (SOL)",
    tStart: 44,
    tEnd: 67,
    altitude: "0 FT (SOL)",
    system: "CABIS // BIOMÉTRIE AÉROPORTUAIRE",
    tag: "03. SUR LE TARMAC — PORTIQUES CABIS",
    title: "Du radar aérien aux portiques biométriques.",
    summary: "Sécurisation et fluidification des flux passagers en aéroport de bout en bout.",
    subtitles: "« Une fois au sol, ma mission a pris une nouvelle dimension en mars 2026 avec le projet CABIS. Du suivi des avions dans le ciel, je suis passé à la sécurisation des passagers dans les aéroports grâce aux portiques de contrôle biométrique, en intervenant sur toute la chaîne Full-Stack. »",
    metrics: [
      {
        label: "PROJET CABIS",
        value: "BIOMÉTRIE SÉCURISÉE",
        detail: "Scanners holographiques & contrôle d'accès"
      },
      {
        label: "INGÉNIERIE COMPLETE",
        value: "END-TO-END",
        detail: "Frontend réactif, backend robuste & hardware"
      }
    ]
  },
  {
    id: 4,
    phaseCode: "ACTE 04 // PERSPECTIVES",
    tStart: 67,
    tEnd: 85,
    altitude: "ORBITAL",
    system: "ALLIANCE // RAYONNEMENT FR-RO",
    tag: "04. IMPACT INTERNATIONAL — NOUVELLE TRAJECTOIRE",
    title: "L'excellence française portée par l'énergie roumaine.",
    summary: "La rencontre des savoir-faire comme tremplin d'une carrière internationale.",
    subtitles: "« De la gestion du ciel avec AMS aux portiques biométriques CABIS, j'ai vu comment l'excellence technologique française rayonne lorsqu'elle s'unit au dynamisme roumain. Ce V.I.E n'a pas seulement guidé des avions et des passagers : il a transformé ma propre trajectoire. »",
    metrics: [
      {
        label: "RAYONNEMENT",
        value: "SAVOIR-FAIRE FR",
        detail: "Rigueur technologique déployée à l'international"
      },
      {
        label: "TRAJECTOIRE",
        value: "ACCÉLÉRATEUR V.I.E",
        detail: "Leadership affirmé & propulsion de carrière"
      }
    ]
  }
];

export const FULL_VOICEOVER_SCRIPT = STORY_CHAPTERS.map(c => c.subtitles.replace(/^[«\s]+|[»\s]+$/g, '')).join(' ');

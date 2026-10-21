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
    subtitles: "« À trente mille pieds d'altitude, une trajectoire ne doit rien au hasard. En arrivant à Bucarest en mai 2025 pour mon V.I.E, j'ai pris de la hauteur sur le projet AMS : moderniser et migrer des outils critiques de gestion du trafic aérien pour plus de cent mille vols quotidiens. En tant que développeur Full-Stack et Scrum Master, j'ai orchestré les sprints d'une équipe biculturelle, alliant rigueur aéronautique et développement réactif. »",
    metrics: [
      {
        label: "PROJET AMS",
        value: "AIR TRAFFIC",
        detail: "Migration & modernisation critique"
      },
      {
        label: "DOUBLE CASQUETTE",
        value: "FULL-STACK & SCRUM",
        detail: "Développement réactif & pilotage agile"
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
    subtitles: "« Traverser les nuages pour atterrir en Roumanie, c'est s'ancrer dans un carrefour technologique européen d'une vitalité remarquable. À Bucarest, j'ai découvert un écosystème d'ingénieurs talentueux et francophiles, dont la réactivité et la créativité ont immédiatement nourri nos méthodes. Cette immersion culturelle au quotidien a soudé notre équipe et renforcé l'agilité de nos architectures. »",
    metrics: [
      {
        label: "ÉQUIPE AGILE",
        value: "12 INGÉNIEURS",
        detail: "Synergie biculturelle FR-RO & francophonie"
      },
      {
        label: "RÔLE SCRUM MASTER",
        value: "SPRINTS 2 SEM.",
        detail: "+28% vélocité & gouvernance réactive"
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
    subtitles: "« En mars 2026, ma mission franchit une nouvelle étape décisive avec le projet CABIS. Du suivi des avions dans le ciel, je passe à la sécurisation des passagers dans les aéroports grâce aux portiques de contrôle biométrique. De la caméra de reconnaissance faciale haute sécurité aux algorithmes d'authentification temps réel, mon engagement Full-Stack s'incarne directement à chaque franchissement de frontière. »",
    metrics: [
      {
        label: "PROJET CABIS",
        value: "BIOMÉTRIE SÉCURISÉE",
        detail: "Scanners e-Gates & contrôle d'accès temps réel"
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
    subtitles: "« Des couloirs aériens jusqu'aux terminaux internationaux, ce V.I.E prouve que l'alliance du savoir-faire technologique français et de l'énergie roumaine repousse les frontières de l'ingénierie. Plus qu'une mission professionnelle, cette aventure a forgé mon leadership, accéléré mes compétences et changé pour toujours ma propre trajectoire. »",
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

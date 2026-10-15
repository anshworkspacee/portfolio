/**
 * Central portfolio data for Ansh Shrivastav.
 * Single source of truth across all components.
 * Honest, verified details only — no fabricated credentials or stats.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ansh Shrivastav',
  displayName: 'Ansh Shrivastav',
  firstName: 'ANSH',
  seriesTag: 'THE BUILDER',
  originalLabel: 'ANSH ORIGINAL',
  role: 'Student & Web Developer',
  tagline: ['Web Developer', 'Frontend Builder', 'WEBYONEEC Founder'],
  intro:
    'A student developer and founder of WEBYONEEC, focused on building modern, responsive, and functional websites. Learning through real project builds, exploring modern web tools, and shipping digital experiences.',
  location: 'India',
  email: 'team.webyoneec@gmail.com',
  personalEmail: 'yrrasnsh29@gmail.com',
  links: {
    webyoneec: 'https://webyoneec.web.app/',
    github: 'https://github.com/anshworkspacee',
  },
  resumePdf: '',
  portrait: {
    src: '/assets/ansh-portrait.svg',
    srcSet: '',
    alt: 'Ansh Shrivastav — Monogram Portrait',
  },
  interests: ['Frontend Development', 'UI Engineering', 'Startups & Digital Products', 'Modern Web Technologies'],
};

export const education = [
  {
    school: 'Student Developer',
    place: 'India',
    degree: 'Self-Directed & Applied Web Development',
    period: 'Active Learning & Building',
    score: 'Active Learner',
  },
];

export const experience = [
  {
    company: 'WEBYONEEC',
    role: 'Founder & Web Developer',
    place: 'India',
    period: '2026 – Present',
    points: [
      'Founded and actively building a digital agency focused on creating professional, responsive websites for businesses.',
      'Implementing modern frontend UI, component-driven layouts, and fast deployment workflows on Google Firebase Hosting.',
      'Continually learning, shipping real projects, and expanding technical capabilities across web technologies.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'bematlab',
    title: 'BEMATLAB',
    year: '2026',
    live: 'https://bematlab.netlify.app/',
    genre: 'Product Concept • Quick Commerce',
    logline:
      'A grocery-shopping web app concept inspired by modern quick-commerce platforms, featuring fast catalog browsing and an intuitive shopping flow.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    build: [
      'Built a responsive quick-commerce grocery concept with category navigation and product discovery.',
      'Structured modular components for seamless cart interactions and smooth interface feedback.',
      'Deployed on Netlify with automated build workflows and optimized production assets.',
    ],
    features: [
      'Product catalog browsing',
      'Quick-commerce inspired shopping flow',
      'Clean responsive layout across screen sizes',
      'Live Netlify deployment',
    ],
    metrics: [],
    palette: { from: '#021a12', via: '#0d5a40', to: '#040d09', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'ssa-hotels',
    title: 'SSA Hotel & Residences',
    year: '2026',
    live: 'https://ssa-hotels.netlify.app/',
    genre: 'Hospitality • Web Experience',
    logline:
      'A luxury hotel and residence landing page showcasing accommodations, guest amenities, ambience, and direct reservation inquiries.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    build: [
      'Designed an elegant hospitality layout with clear visual hierarchy, room previews, and amenity highlights.',
      'Developed mobile-first responsive styling ensuring a seamless booking inquiry experience.',
      'Deployed live on Netlify with zero external framework overhead for maximum speed.',
    ],
    features: [
      'Room and suite presentation',
      'Amenities and service highlights',
      'Responsive touch-friendly navigation',
      'Inquiry and contact integration',
    ],
    metrics: [],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'ansh-demo',
    title: 'Ansh Demo',
    year: '2026',
    live: 'https://ansh-demo.netlify.app/',
    genre: 'Web UI Experiment • Interactive Lab',
    logline:
      'A live interactive space for exploring modern web interface patterns, responsive grid architectures, and experimental layout interactions.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
    build: [
      'Created an active web lab to test layout compositions, interaction states, and design ideas.',
      'Engineered responsive viewports and validated cross-browser rendering behavior.',
      'Maintained continuous deployment on Netlify for immediate real-world validation.',
    ],
    features: [
      'Interactive layout experiments',
      'Responsive interface testing',
      'Fluid component compositions',
      'Live production deployment',
    ],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'webyoneec',
    title: 'WEBYONEEC',
    year: '2026',
    live: 'https://webyoneec.web.app/',
    genre: 'Digital Agency • Official Platform',
    logline:
      'The official digital agency platform founded by Ansh Shrivastav, offering high-quality web design and development services for growing brands.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Hosting', 'SEO'],
    build: [
      'Established WEBYONEEC to provide modern, reliable web development services to clients.',
      'Engineered the core agency website with structured services, modern aesthetics, and clear calls to action.',
      'Configured Google Firebase Hosting, SSL certificates, and foundational SEO metadata.',
    ],
    features: [
      'Agency service showcase',
      'Business client proposition',
      'Custom branding and typography',
      'Production Firebase Hosting deployment',
    ],
    metrics: [],
    palette: { from: '#0f0524', via: '#381670', to: '#070311', accent: '#b98bff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Building interfaces for the web',
    skills: [
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'JavaScript', mono: 'JS' },
      { name: 'React', mono: 'Re' },
      { name: 'TypeScript', mono: 'TS' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    subtitle: 'Shipping projects and learning workflows',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Netlify', mono: 'Nt' },
      { name: 'Firebase Hosting', mono: 'Fb' },
      { name: 'Vite', mono: 'Vi' },
    ],
  },
  {
    id: 'focus',
    title: 'Engineering Focus',
    subtitle: 'Core competencies in web development',
    skills: [
      { name: 'Responsive Design', mono: 'Rd' },
      { name: 'UI / UX Design', mono: 'Ui' },
      { name: 'Web Performance', mono: 'Wp' },
      { name: 'SEO Fundamentals', mono: 'Se' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  HTML5: ['SSA Hotel & Residences', 'WEBYONEEC', 'Ansh Demo'],
  CSS3: ['SSA Hotel & Residences', 'WEBYONEEC', 'Ansh Demo'],
  JavaScript: ['SSA Hotel & Residences', 'WEBYONEEC', 'Ansh Demo'],
  React: ['BEMATLAB', 'Portfolio Series'],
  TypeScript: ['BEMATLAB', 'Portfolio Series'],
  'Tailwind CSS': ['BEMATLAB', 'Portfolio Series'],
  'Git / GitHub': ['anshworkspacee repositories'],
  Netlify: ['BEMATLAB', 'SSA Hotel & Residences', 'Ansh Demo'],
  'Firebase Hosting': ['WEBYONEEC'],
  Vite: ['BEMATLAB', 'Portfolio Series'],
  'Responsive Design': ['All featured projects'],
  'UI / UX Design': ['BEMATLAB', 'SSA Hotel & Residences', 'WEBYONEEC'],
  'Web Performance': ['All live deployments'],
  'SEO Fundamentals': ['WEBYONEEC platform'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const jade: Palette = { from: '#021a12', via: '#0d5a40', to: '#040d09', accent: '#46e3a8' };
const violet: Palette = { from: '#0f0524', via: '#381670', to: '#070311', accent: '#b98bff' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Learning Curve',
    period: '2025 – 2026',
    synopsis: 'Mastering modern web foundations by building real interfaces, exploring component architectures, and shipping code.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Web Foundations',
        description: 'Building strong foundations with semantic HTML5, modern CSS3 layouts, responsive design, and JavaScript interactivity.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        runtime: 'Milestone',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Component Thinking',
        description: 'Adopting React, TypeScript, and utility-first styling with Tailwind CSS to build structured, scalable user interfaces.',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        runtime: 'Milestone',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Projects in Production',
    period: '2026',
    synopsis: 'A growing series of live web projects, client landing pages, and founding the WEBYONEEC digital agency.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'BEMATLAB Launch',
        description: 'Building and shipping a responsive grocery quick-commerce web app concept with product catalog browsing.',
        tags: ['React', 'TypeScript', 'Netlify'],
        runtime: 'Live Demo',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'Hospitality Web',
        description: 'Crafting a luxury hotel landing page concept for SSA Hotel & Residences with responsive booking sections.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        runtime: 'Live Demo',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'Agency Mode: WEBYONEEC',
        description: 'Founding WEBYONEEC, designing its agency platform, and launching on Google Firebase Hosting to serve real clients.',
        tags: ['WEBYONEEC', 'Agency', 'Firebase'],
        runtime: 'Active Venture',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Quick Commerce', title: 'BEMATLAB', detail: 'Grocery shopping web app concept', palette: jade },
  { label: 'Hospitality Web', title: 'SSA Hotels', detail: 'Luxury hotel & residences landing page', palette: amber },
  { label: 'Interactive Lab', title: 'Ansh Demo', detail: 'Layout & interaction experiments', palette: ocean },
  { label: 'Digital Agency', title: 'WEBYONEEC', detail: 'Founder venture & web services platform', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The Builder',
    title: 'Student & Web Developer.',
    lines: ['Learning by building real, production websites', 'Exploring modern frontend engineering and UI design'],
    chips: ['Web Development', 'Frontend', 'Founder'],
  },
  {
    kicker: 'Selected Work',
    title: 'Four Live Projects.',
    lines: [
      'BEMATLAB — Quick-commerce grocery concept',
      'SSA Hotel & Residences — Hospitality website',
      'Ansh Demo — Web UI experiment lab',
      'WEBYONEEC — Founder digital agency platform',
    ],
    chips: ['React', 'TypeScript', 'Live Demos'],
  },
  {
    kicker: 'Mission',
    title: 'Build. Launch. Grow.',
    lines: [
      'Growing WEBYONEEC into a trusted web agency',
      'Sharpening frontend engineering & responsive craft',
      'Creating clean, accessible, and fast web experiences',
    ],
    chips: ['WEBYONEEC', 'Web Craft'],
  },
];

export type ProfileId = 'ansh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'ansh', name: 'Ansh', blurb: 'The full journey, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Projects and skills first', color: '#4cc9ff', order: ['story', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects and toolkit first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story and highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Student Developer & Founder', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Selected projects and experiments', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Overview', card: 'The Full Story', meta: 'Background & Developer Overview', palette: violet },
};

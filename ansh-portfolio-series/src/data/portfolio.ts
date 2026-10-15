/**
 * Central portfolio data — generated from Ansh's resume (Ansh_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ansh Shrivastav', displayName: 'Ansh Shrivastav', firstName: 'ANSH', seriesTag: 'THE BUILDER',
  originalLabel: 'ANSH ORIGINAL', role: 'Student Developer',
  tagline: ['Web Developer', 'Frontend Builder', 'WEBYONEEC Founder'],
  intro: 'A student developer learning by building real websites and digital products. I work on frontend experiences, explore backend tools, and document the journey of growing WEBYONEEC.',
  location: 'India', email: 'team.webyoneec@gmail.com',
  links: { linkedin: '', github: 'https://github.com/anshworkspacee' }, resumePdf: '',
  portrait: { src: '/assets/ansh-portrait.svg', srcSet: '', alt: 'Ansh Shrivastav monogram portrait illustration' },
  interests: ['Frontend Development', 'UI Engineering', 'Startups & Digital Products'],
};

export const education = [
  { school: 'School student', place: 'India', degree: 'Student Developer', period: 'Currently learning and building', score: 'Student' },
];

export const experience = [
  { company: 'WEBYONEEC', role: 'Founder · In progress', place: 'India', period: 'Current',
    points: ['Building a small digital agency focused on creating useful, professional websites for businesses.', 'Learning through real project builds, responsive UI work, deployment, and ongoing improvements.'] },
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
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
 { id:'bematlab', title:'BEMATLAB', year:'2026', live:'https://bematlab.netlify.app/', genre:'Product Concept • Quick Commerce', logline:'A grocery-shopping web app concept inspired by quick-commerce experiences.', stack:['React','TypeScript','Tailwind CSS'], build:['Built a grocery web app concept with product browsing and a familiar shopping flow.'], features:['Product browsing concept','Responsive interface','Quick-commerce inspired experience'], metrics:[], palette:{from:'#03150f',via:'#0d5a40',to:'#050a08',accent:'#46e3a8'}, motif:'flow' },
 { id:'ssa-hotels', title:'SSA Hotel & Residences', year:'2026', live:'https://ssa-hotels.netlify.app/', genre:'Hospitality • Website', logline:'A hotel landing page concept for a hospitality business in Varanasi.', stack:['HTML','CSS','JavaScript'], build:['Created a hospitality-focused landing page with structured sections and a responsive browsing experience.'], features:['Hospitality landing page','Responsive layout','Clear content sections'], metrics:[], palette:{from:'#1c1003',via:'#6b3c06',to:'#0a0806',accent:'#ffb547'}, motif:'tenants' },
 { id:'ansh-demo', title:'Ansh Demo', year:'2026', live:'https://ansh-demo.netlify.app/', genre:'Web Experiment • Live Demo', logline:'A live space for exploring web layouts and interface ideas.', stack:['Web UI','Responsive Design','Deployment'], build:['A deployed demo project used to explore layouts, interactions, and early web ideas.'], features:['Live demo','Interface experiments','Responsive browsing'], metrics:[], palette:{from:'#04121f',via:'#0f4c6e',to:'#05080d',accent:'#4cc9ff'}, motif:'shield' },
 { id:'webyoneec', title:'WEBYONEEC', year:'2026', live:'https://webyoneec.web.app/', genre:'Digital Agency • Website', logline:'My ongoing digital agency project, focused on useful websites for businesses.', stack:['Web Design','SEO Basics','Firebase Hosting'], build:['Building the agency website and refining its service presentation, content, and online presence.'], features:['Agency website','Service presentation','Deployment and SEO basics'], metrics:[], palette:{from:'#120822',via:'#3d1a6e',to:'#07060c',accent:'#b98bff'}, motif:'flow' },
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
 {id:'frontend',title:'Frontend',subtitle:'Building interfaces for the web',skills:[{name:'HTML',mono:'Ht'},{name:'CSS',mono:'Cs'},{name:'JavaScript',mono:'Js'},{name:'React',mono:'Re'},{name:'TypeScript',mono:'Ts'},{name:'Tailwind CSS',mono:'Tw'}]},
 {id:'tools',title:'Tools & Deployment',subtitle:'Shipping projects and learning workflows',skills:[{name:'Git / GitHub',mono:'Gt'},{name:'Netlify',mono:'Nt'},{name:'Firebase Hosting',mono:'Fb'},{name:'Vite',mono:'Vi'}]},
 {id:'learning',title:'Currently Exploring',subtitle:'Skills in progress',skills:[{name:'APIs',mono:'Ap'},{name:'Backend Basics',mono:'Be'},{name:'SEO',mono:'Se'},{name:'UI Design',mono:'Ui'}]},
];
export const skillEvidence: Record<string,string[]> = {
 HTML:['SSA Hotel & Residences'],CSS:['SSA Hotel & Residences'],JavaScript:['SSA Hotel & Residences'],React:['BEMATLAB'],TypeScript:['BEMATLAB'],'Tailwind CSS':['BEMATLAB'],'Git / GitHub':['Project repositories'],Netlify:['BEMATLAB','SSA Hotel & Residences','Ansh Demo'],'Firebase Hosting':['WEBYONEEC'],Vite:['BEMATLAB'],APIs:['Currently exploring'],'Backend Basics':['Currently exploring'],SEO:['WEBYONEEC'],'UI Design':['All featured projects']
};

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
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
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
 {number:1,title:'The Learning Curve',period:'Ongoing',synopsis:'Learning web development by building projects, shipping them, and improving what comes next.',episodes:[
 {code:'S01 E01',title:'Learning the Basics',description:'Building confidence with HTML, CSS, JavaScript, and responsive layouts.',tags:['HTML','CSS','JavaScript'],runtime:'Ongoing',palette:amber},
 {code:'S01 E02',title:'Component Thinking',description:'Exploring React, TypeScript, reusable components, and practical project structure.',tags:['React','TypeScript'],runtime:'Ongoing',palette:ocean}]},
 {number:2,title:'Projects in Production',period:'2026',synopsis:'A growing collection of live web projects and experiments.',episodes:[
 {code:'S02 E01',title:'BEMATLAB',description:'A grocery-shopping web app concept built to practise a product-style experience.',tags:['React','TypeScript'],runtime:'2026',palette:jade},
 {code:'S02 E02',title:'Hospitality Web',description:'A landing page concept for SSA Hotel & Residences.',tags:['HTML','CSS','JavaScript'],runtime:'2026',palette:amber},
 {code:'S02 E03',title:'Agency Mode',description:'Growing WEBYONEEC as a digital agency and improving its own website.',tags:['WEBYONEEC','Web Design'],runtime:'In progress',palette:crimson}]}
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
 {label:'Product concept',title:'BEMATLAB',detail:'Grocery shopping web app concept',palette:jade},
 {label:'Hospitality website',title:'SSA Hotels',detail:'Landing page concept',palette:amber},
 {label:'Live experiment',title:'Ansh Demo',detail:'Web layouts and interface ideas',palette:ocean},
 {label:'Ongoing venture',title:'WEBYONEEC',detail:'Digital agency in progress',palette:crimson},
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
 {kicker:'The builder',title:'Student developer.',lines:['Learning by building real websites','Exploring frontend, UI, and deployment'],chips:['Web Development','Frontend']},
 {kicker:'Selected work',title:'Four projects.',lines:['BEMATLAB — grocery web app concept','SSA Hotels — hospitality landing page','Ansh Demo — web experiment','WEBYONEEC — digital agency'],chips:['Projects','Live Demos']},
 {kicker:'Current mission',title:'Build. Learn. Improve.',lines:['Growing WEBYONEEC','Practising clean interfaces and responsive layouts','Learning more with every project']},
];

export type ProfileId = 'ansh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {id:ProfileId;name:string;blurb:string;color:string;order:SectionId[]}[] = [
 {id:'ansh',name:'Ansh',blurb:'The full journey, in order',color:'#e5132b',order:['about','journey','originals','picks','skills','moments','story']},
 {id:'recruiter',name:'Recruiter',blurb:'Projects and skills first',color:'#4cc9ff',order:['story','skills','originals','about','journey','picks','moments']},
 {id:'developer',name:'Developer',blurb:'Projects and toolkit first',color:'#46e3a8',order:['originals','skills','journey','about','picks','story','moments']},
 {id:'creative',name:'Creative',blurb:'The story and highlights first',color:'#ffb547',order:['journey','picks','originals','about','skills','moments','story']},
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Selected projects and experiments', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'The journey so far', palette: violet },
};

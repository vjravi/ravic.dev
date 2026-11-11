// Central identity / config. Edit this to update the site everywhere
// (nav, footer, JSON-LD sameAs, llms.txt, contact links).

export const site = {
  name: 'Vijay Ravichandran',
  initials: 'VR',
  role: 'Freelance AI Engineer · Technical Architect',
  // Short subtitle used in the hero eyebrow and meta.
  tagline: 'Freelance AI Engineer & Technical Architect',
  location: 'Munich, Germany',
  url: 'https://ravic.dev',

  description:
    'Vijay Ravichandran — freelance AI engineer & technical architect in Munich with 10+ years building ' +
    'production-grade ML systems. Speech recognition (ASR), generative AI, small language models, ' +
    'and scalable cloud infrastructure. Available for freelance projects.',

  email: 'vijay@ravic.dev',

  // Availability — surfaced for humans (badge) and machines (JSON-LD, llms.txt).
  availability: {
    freelancing: true,
    label: 'Available for freelance projects',
    statement:
      'Available for freelance and consulting work in applied AI, speech technology, ' +
      'and technical architecture.',
  },

  // Profile links. These double as entity-consistency signals (JSON-LD sameAs).
  // TODO: replace the GitHub and Substack placeholders with the real URLs.
  links: {
    linkedin: 'https://www.linkedin.com/in/vijay-ravichandran',
    github: 'https://github.com/vjravi',
    substack: 'https://vijayravichandran.substack.com', // TODO: replace with real Substack URL
  },
} as const;

// Credibility strip under the hero (employers already listed on About).
export const workedWith = [
  'Samsung / Harman',
  'LaLeTu · Startup of the Year, Hessen 2024',
  'Wallstreetdocs',
];

// What a client can hire Vijay for. Rendered on Home and in llms.txt.
export const services = [
  {
    title: 'Speech & voice AI',
    body: 'Speech recognition (ASR), voice interfaces and language modelling — from prototype to a production system you can measure and trust.',
  },
  {
    title: 'Generative AI & local-first LLMs',
    body: 'Practical LLM and small-language-model solutions, including private, low-latency, on-device setups for data that cannot leave your environment.',
  },
  {
    title: 'AI strategy & architecture',
    body: 'Technical roadmaps, system design and build-vs-buy decisions, so AI work ships and sticks instead of stalling after the demo.',
  },
  {
    title: 'Cloud & ML infrastructure',
    body: 'CI/CD, evaluation pipelines and cost-effective cloud setups that make ML systems reliable and affordable to run.',
  },
];

// Ordered list of external profiles for JSON-LD `sameAs` and footer.
export const sameAs = [
  site.links.linkedin,
  site.links.github,
  site.links.substack,
];

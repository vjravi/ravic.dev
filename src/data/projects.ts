// Projects shown on /projects and /projects/[slug].
// Add a new project by appending an entry. For a live app set type:'app' and url.
// Cards, detail pages, sitemap, and JSON-LD all derive from this file.

export type Project = {
  slug: string;
  num: string; // display index, e.g. '01'
  title: string;
  category: string;
  year: string;
  role: string;
  type: 'app' | 'writeup';
  blurb: string; // one-line summary (cards + detail intro)
  cover: string; // CSS gradient for the cover
  stack: string[];
  url?: string; // live app / demo URL (apps)
  repo?: string; // optional source link
  descParas: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: 'laletu',
    num: '01',
    title: 'LaLeTu',
    category: 'AI · Speech · EdTech',
    year: '2022–2025',
    role: 'Acting CTO / Speech Engineering Lead',
    type: 'writeup',
    blurb:
      'A production reading-fluency platform powered by speech recognition — helping thousands of students read better, and winner of "Startup of the Year, Hessen 2024".',
    cover: 'linear-gradient(140deg,#D8B59C,#B07A50)',
    stack: ['ASR', 'Python', 'Cloud', 'CI/CD'],
    descParas: [
      'LaLeTu began as a proof-of-concept speech engine and grew into a market-leading education platform. As Senior Speech Engineer and later Acting CTO, I co-engineered its transformation into a production-ready application that helps thousands of students improve their reading fluency, and led the cross-functional AI, frontend, and backend team behind it.',
      'On the strategy side I drove the international expansion of the German product into Austria and Switzerland — adapting speech models for regional dialects — built an English MVP for India, partnered with the COO to modernize team structures and migrate to a cost-effective cloud setup, and shaped the B2B evolution from a school-focused tool into a scalable enterprise solution.',
    ],
    features: [
      'Led the technical vision that won "Startup of the Year, Hessen 2024"',
      'Took the speech engine from proof-of-concept to production serving thousands of students',
      'Architected an end-to-end test suite to scientifically measure speech-model accuracy before every release',
      'Designed custom metrics, dashboards, and logic for educators to track student reading progress',
      'Adapted ASR models for regional German dialects to expand into Austria and Switzerland',
    ],
  },
  {
    slug: 'bixby-german',
    num: '02',
    title: 'Bixby — German',
    category: 'AI · Speech · NLP',
    year: '2018–2020',
    role: 'Senior Speech Recognition Engineer',
    type: 'writeup',
    blurb:
      'Taught Samsung’s Bixby assistant to understand German — training language models for the nuances and regional dialects of the market.',
    cover: 'linear-gradient(140deg,#AEB9C7,#73849B)',
    stack: ['ASR', 'NLP', 'BERT', 'CI/CD'],
    descParas: [
      'At Samsung / Harman I led the training of language models that brought Bixby to the German market, ensuring the assistant understood the nuances and regional dialects German speakers actually use.',
      'I also built a custom, in-house BERT-based model that analyzed real usage data to pinpoint exactly where the voice assistant was confusing users, and architected a "one-click" system to generate synthetic training data and customized datasets — drastically accelerating the model training and evaluation cycle.',
    ],
    features: [
      'Trained language models so Bixby understood German nuances and regional dialects',
      'Built an in-house BERT-based model to surface where the assistant confused users',
      'Created a one-click synthetic-data generator that accelerated training and evaluation',
      'Set up automated CI/CD pipelines for testing and releasing speech models',
      'Prototyped voice-controlled hotel automation and infotainment interfaces',
    ],
  },
  {
    slug: 'text-to-singing',
    num: '03',
    title: 'Text-to-Singing',
    category: 'AI · Generative · TTS',
    year: '2021–2022',
    role: 'Machine Learning Expert',
    type: 'writeup',
    blurb:
      'A generative prototype that turned text into melodic vocal performances — compelling enough to become the foundation for a company spin-off.',
    cover: 'linear-gradient(140deg,#E2CFA1,#BE9F62)',
    stack: ['Generative AI', 'TTS', 'Deep Learning', 'Cloud'],
    descParas: [
      'At Wallstreetdocs I pioneered a text-to-singing prototype: a system that translated plain text into melodic vocal performances. The result was strong enough to serve as the foundation for a dedicated company spin-off.',
      'Alongside the model work I established scalable cloud workflows that supported rapid experimentation and the early-stage scaling of our deep-learning models.',
    ],
    features: [
      'Built a text-to-singing system generating melodic vocal performances',
      'Work became the foundation for a company spin-off',
      'Established scalable cloud workflows for rapid ML experimentation',
      'Supported early-stage scaling of deep-learning training',
    ],
  },
  {
    slug: 'ai-for-scientific-simulations',
    num: '04',
    title: 'AI for Scientific Simulations',
    category: 'Research · Applied AI',
    year: '2025–2026',
    role: 'Independent AI Strategy & Research',
    type: 'writeup',
    blurb:
      'Independent research applying neural networks to scientific simulations — helping non-tech researchers significantly improve the performance and accuracy of their existing models.',
    cover: 'linear-gradient(140deg,#9CC2BD,#5F938D)',
    stack: ['Neural Networks', 'Python', 'Research'],
    descParas: [
      'As an independent AI strategist and researcher, I help researchers and professionals in non-tech fields integrate neural networks into their existing scientific models — significantly improving both performance and accuracy without requiring them to become ML engineers.',
      'This work pairs hands-on modelling with the translation layer that makes AI adoption real for domain experts: framing the problem, choosing the right architecture, and delivering results they can trust and build on.',
    ],
    features: [
      'Apply neural networks to scientific simulations for non-tech domain experts',
      'Improve accuracy and performance of researchers’ existing models',
      'Bridge deep ML engineering and practical, domain-specific outcomes',
      'Available for freelance and consulting engagements',
    ],
  },
  {
    slug: 'local-first-slms',
    num: '05',
    title: 'Local-First Small Language Models',
    category: 'Research · LLMs · Privacy',
    year: '2025–2026',
    role: 'Independent AI Strategy & Research',
    type: 'writeup',
    blurb:
      'Independent research into low-latency AI architectures and Small Language Models (SLMs) for privacy-focused, local-first environments.',
    cover: 'linear-gradient(140deg,#C7A9C2,#8E6E89)',
    stack: ['SLMs', 'LLMs', 'Low-latency', 'Edge'],
    descParas: [
      'I conduct independent research into low-latency AI architectures, focusing on Small Language Models that run in privacy-focused, local-first environments — keeping data on-device while still delivering useful AI capabilities.',
      'The goal is practical: AI that is fast, private, and deployable outside the cloud, for products and teams that cannot or will not send their data to a third party.',
    ],
    features: [
      'Research low-latency architectures for Small Language Models (SLMs)',
      'Target privacy-focused, local-first / on-device deployment',
      'Reduce dependence on cloud inference for sensitive data',
      'Inform real product and architecture decisions',
    ],
  },
];

// Bio, experience timeline, and skills for the About page.

export const bio: string[] = [
  'I’m a freelance AI engineer and technical architect based in Munich, with over 10 years building production-grade machine learning systems for global companies and high-growth startups.',
  'My focus areas are speech recognition (ASR), generative AI and small language models, and the cloud infrastructure that makes them run reliably.',
  'What I do best is bridge deep technical engineering and product strategy — taking models from research into dependable products.',
  'I work independently and take on freelance and consulting projects.',
];

export type Job = {
  period: string;
  role: string;
  org: string;
};

// Kept deliberately short: employer + years only.
export const experience: Job[] = [
  { period: '10/2026 — Present', role: 'Forward Deployed AI Engineer (freelance)', org: 'via Bandpey, embedded with a healthcare-software client’s test-automation team' },
  { period: '2025 — 2026', role: 'Independent AI Strategy & Research', org: 'Self-employed' },
  { period: '2022 — 2025', role: 'Acting CTO / Speech Engineering Lead', org: 'Digi Sapiens (LaLeTu)' },
  { period: '2021 — 2022', role: 'Machine Learning Expert', org: 'Wallstreetdocs' },
  { period: '2018 — 2020', role: 'Senior Speech Recognition Engineer', org: 'Samsung / Harman' },
  { period: '2011 — 2014', role: 'Software Engineer', org: 'Huawei Technologies' },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: 'AI & Machine Learning',
    items: ['ASR', 'NLP', 'LLMs (BERT, GPT)', 'TTS', 'Language Modeling', 'Synthetic Data', 'AI for Test Automation'],
  },
  {
    label: 'Architecture & DevOps',
    items: ['System Design', 'Microservices', 'CI/CD (Jenkins)', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    label: 'Cloud & Data',
    items: ['AWS (EC2, S3, Lambda)', 'Scaleway', 'Big Data Analytics'],
  },
  {
    label: 'Leadership',
    items: ['Multi-team Management', 'Technical Roadmap Strategy', 'Agile / Scrum', 'Stakeholder Management'],
  },
  {
    label: 'Core Languages',
    items: ['Python', 'Java', 'C++', 'Linux'],
  },
];

export interface ResumeLink {
  label: string;
  href: string;
}

export interface ResumeItem {
  period: string;
  role: string;
  org: string;
  blurb: string;
  stack: string[];
  links: ResumeLink[];
}

export interface SkillGroup {
  cat: string;
  items: string[];
}

export const SECTIONS = [
  { id: 'experience', label: 'Experience',  num: '01' },
  { id: 'opensource', label: 'Open Source', num: '02' },
  { id: 'projects',   label: 'Projects',    num: '03' },
  { id: 'education',  label: 'Education',   num: '04' },
  { id: 'skills',     label: 'Skills',      num: '05' },
] as const;

export type SectionId = typeof SECTIONS[number]['id'];

export const RESUME = {
  name: 'Ethan Balakumar',
  links: {
    github: 'https://github.com/etbala',
    linkedin: 'https://linkedin.com/in/ebalakumar',
  },

  experience: [
    {
      period: 'Feb 2026 — Present',
      role: 'Software Engineer',
      org: 'JPMorganChase',
      blurb: 'Modernizing CCB anti-money laundering risk scoring systems in AMLKYC.',
      stack: ['Java', 'Spring Boot', 'Postgres', 'Kafka', 'AWS'],
      links: [],
    },
    {
      period: 'Jun 2025 — Aug 2025',
      role: 'Software Engineer Intern',
      org: 'JPMorganChase',
      blurb: 'Created internal devops tools for CIB credit monitoring platform.',
      stack: ['Java', 'Spring Boot', 'Oracle', 'Kafka'],
      links: [],
    },
    {
      period: 'Jun 2024 — Aug 2024',
      role: 'Software Engineer Intern',
      org: 'Doron Precision Systems',
      blurb: 'Built realistic traffic simulation system from scratch.',
      stack: ['C++20', 'Unreal Engine 5'],
      links: [],
    },
    {
      period: 'Jan 2025 — Dec 2025',
      role: 'Teaching Assistant',
      org: 'Rensselaer Polytechnic Institute',
      blurb: 'Operating Systems and Data Structures courses.',
      stack: ['C++', 'C'],
      links: [],
    },
  ] as ResumeItem[],

  opensource: [
    {
      period: 'Apr 2026 — Present',
      role: 'Contributor',
      org: 'yfinance',
      blurb: 'Pythonic access to Yahoo Finance API, used by 10M+ monthly users.',
      stack: [],
      links: [{ label: 'ranaroussi/yfinance', href: 'https://github.com/ranaroussi/yfinance' }],
    },
    {
      period: 'Apr 2026 — Present',
      role: 'Contributor',
      org: 'tursodatabase',
      blurb: 'SQLite compatible embedded database written in Rust.',
      stack: [],
      links: [{ label: 'tursodatabase/turso', href: 'https://github.com/tursodatabase/turso' }],
    },
  ] as ResumeItem[],

  projects: [
    {
      period: '2025',
      role: 'LeetCode Duels',
      org: 'LeetCode against your friends',
      blurb: 'A browser extension that lets you challenge friends to real-time duels.',
      stack: ['Go', 'TypeScript', 'Redis', 'Postgres', 'Kubernetes', 'GitHub Actions'],
      links: [{ label: 'github', href: 'https://github.com/etbala/LeetCodeDuels' }],
    },
    {
      period: '2024',
      role: 'CacheDB',
      org: 'Key Value In-Memory Cache',
      blurb: 'An in-memory store designed for high performance and low latency.',
      stack: ['C', 'C++'],
      links: [{ label: 'github', href: 'https://github.com/etbala/CacheDB' }],
    },
    {
      period: '2024',
      role: 'Firm Valuation Calculator',
      org: 'DCF Valuation Simulator',
      blurb: 'A web app for simulating CAPM based firm valuations with real market data.',
      stack: ['Python', 'Flask', 'Rust', 'WebAssembly', 'AWS'],
      links: [{ label: 'sharingval.com', href: 'https://sharingval.com' }],
    },
  ] as ResumeItem[],

  education: [
    {
      period: 'Aug 2022 — Dec 2025',
      role: 'B.S. Computer Science',
      org: 'Rensselaer Polytechnic Institute',
      blurb: '',
      stack: [],
      links: [],
    },
  ] as ResumeItem[],

  skills: [
    { cat: 'Languages', items: ['C++20', 'C', 'Java', 'Python', 'Go', 'Rust', 'SQL'] },
    { cat: 'Backend',   items: ['AWS', 'Postgres', 'Redis', 'Kafka', 'Kubernetes'] },
    { cat: 'Tools',     items: ['Claude Code', 'Git', 'Splunk', 'Linux'] },
  ] as SkillGroup[],
};

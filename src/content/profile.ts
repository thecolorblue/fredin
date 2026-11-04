export type Link = { label: string; href: string };

export type ShippedItem = {
  title: string;
  pill: string;
  body: string;
  live?: boolean;
  featured?: boolean;
  link?: Link;
};

export type Job = {
  period: string;
  role: string;
  body?: string;
  current?: boolean;
};

export type Profile = {
  name: string;
  email: string;
  linkedin: string;
  nav: { label: string; href: string }[];
  hero: {
    prompt: string;
    firstLine: string;
    secondLine: string;
    lede: string;
    stats: { key: string; value: string }[];
  };
  shipped: ShippedItem[];
  experience: Job[];
};

export const profile: Profile = {
  name: "Brad Davis",
  email: "brad.bdavis1@gmail.com",
  linkedin: "https://www.linkedin.com/in/bradedavis",
  nav: [
    { label: "shipped", href: "#shipped" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
  ],
  hero: {
    prompt: "$ whoami",
    firstLine: "Brad Davis.",
    secondLine: "Software engineer.",
    lede:
      "13 years of front-end and full-stack development. Now a Software Expert at micro1, evaluating AI-generated code. Recently shipped my first mobile app.",
    stats: [
      { key: "experience", value: "13 yrs" },
      { key: "javascript", value: "12 yrs" },
      { key: "typescript", value: "6 yrs" },
      { key: "python", value: "3 yrs" },
      { key: "based in", value: "Cleveland" },
      { key: "now", value: "micro1" },
    ],
  },
  shipped: [
    {
      title: "Alakai",
      pill: "● live on Google Play",
      live: true,
      featured: true,
      body: "My first mobile app: an AI coaching agent you can talk to by voice or text, tuned with evals for tool calling and structured output.",
      link: { label: "play.google.com → alakai", href: "https://play.google.com/store/apps/details?id=com.stewardai.alakai" },
    },
    {
      title: "Specliotheque",
      pill: "2026",
      body: "Spec files verified to build working desktop apps, plus the agent harness and eval set behind them.",
      link: { label: "specliotheque.com", href: "https://specliotheque.com" },
    },
    {
      title: "Snow Day Academy",
      pill: "2025",
      body: "Speech-to-text reading coach for K-6 students and an AI pipeline that produced 12 Kindle ebooks.",
      link: { label: "snowdayacademy.com", href: "https://snowdayacademy.com" },
    },
    {
      title: "Leaf segmentation model",
      pill: "2020",
      body: "Computer-vision model from Steward AI's IoT image pipeline, published on modelplace.ai.",
      link: { label: "modelplace.ai", href: "https://modelplace.ai/models/leaf-segmentation" },
    },
    {
      title: "Genomics data platform",
      pill: "Ginkgo",
      body: "Database, Python API and React app on 76 AWS resources, which made the genomics team 75% more productive.",
    },
  ],
  experience: [
    {
      period: "2026 – now",
      role: "micro1 · Software Expert",
      body: "Evaluation workflows and datasets for AI-generated code.",
      current: true,
    },
    {
      period: "2025 – now",
      role: "Snow Day Academy · Founder",
      body: "AI reading assessment and coaching apps.",
      current: true,
    },
    {
      period: "2022 – 2025",
      role: "Ginkgo Bioworks · Senior Software Engineer",
      body: "Genomics data platform; resident expert on AI coding tools.",
    },
    {
      period: "2021 – 2022",
      role: "Bayer Crop Science · Senior Software Engineer",
      body: "CI/CD modernization; React rewrite with 4x faster data loading.",
    },
    {
      period: "2017 – 2021",
      role: "Bunch · Ottimate · Root Integrated · Roundtable Learning",
    },
  ],
};

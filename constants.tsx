
import { Project, Skill, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Vision Dashboard",
    description: "A real-time visual analytics platform using computer vision and React.",
    tags: ["React", "TypeScript", "OpenCV", "Tailwind"],
    image: "https://picsum.photos/seed/p1/600/400",
    link: "#"
  },
  {
    id: 2,
    title: "EcoSphere E-commerce",
    description: "Sustainable marketplace with advanced filtering and carbon footprint tracking.",
    tags: ["Next.js", "GraphQL", "Node.js"],
    image: "https://picsum.photos/seed/p2/600/400",
    link: "#"
  },
  {
    id: 3,
    title: "Quantum Ledger",
    description: "High-performance blockchain explorer with real-time transaction visualization.",
    tags: ["D3.js", "Solidity", "React"],
    image: "https://picsum.photos/seed/p3/600/400",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", level: 90, category: 'Frontend' },
  { name: "Next.js", level: 80, category: 'Frontend' },
  { name: "TypeScript", level: 85, category: 'Frontend' },
  { name: "JavaScript", level: 95, category: 'Frontend' },
  { name: "Tailwind CSS", level: 98, category: 'Frontend' },
  { name: "Node.js", level: 88, category: 'Backend' },
  { name: "Express", level: 85, category: 'Backend' },
  { name: "PostgreSQL", level: 82, category: 'Backend' },
  { name: "MongoDB", level: 83, category: 'Backend' },
  { name: "Firebase", level: 85, category: 'Backend' },
  { name: "Better Auth", level: 90, category: 'Tools' },
  { name: "Docker", level: 70, category: 'DevOps' }
];

export const EDUCATION: Education[] = [
  {
    degree: "HSC(Higher School Certificate",
    institution: "Amrita Lal Dey College, Barishal",
    duration: "2019 - 2021",
    description: "Learned Basic 'ICT, English, Economics, History'. "
  },
  {
    degree: "B.S.S in Economics",
    institution: "University of Barishal",
    duration: "2023 - present",
    description: "Learning Statistics, Calculus, Econometrics and Advance Economics. "
  }
];

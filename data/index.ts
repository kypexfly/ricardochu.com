import { Icons } from "@/components/icons";
import type { Project, Social } from "@/types";

export const socialList: Social[] = [
  {
    label: "Github",
    url: "https://github.com/kypexfly",
    icon: Icons.github,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ricardochuzheng",
    icon: Icons.linkedin,
  },
  {
    label: "Telegram",
    url: "https://telegram.me/ricardo_chu",
    icon: Icons.telegram,
  },
  {
    label: "Email",
    url: "mailto:rchuzheng@gmail.com",
    icon: Icons.mail,
  },
];

export const projectList: Project[] = [
  {
    title: "Blog Platform for Developers",
    description:
      "Fullstack app clone of Dev.to. Create posts, comment, share your profile and more.",
    date: "2023",
    source: "https://github.com/kypexfly/devto-clone",
    demo: "https://devclone23.vercel.app",
    tech: ["next", "react-hook-form", "postgresql", "oauth", "mdx", "zod"],
    cover: "/img/cover-devto-clone.jpg",
    highlight: true,
  },
  {
    title: "AI Playground (Coming soon)",
    description:
      "Explore amazing apps powered by Artificial Intelligence and Large Language Models.",
    date: "2023",
    source: "https://github.com/kypexfly/ai-playground",
    // demo: "https://ai.ricardochu.com",
    tech: ["next", "typescript", "langchain", "ai"],
    cover: "/img/cover-ai-playground.jpg",
    highlight: true,
  },
  {
    title: "Cryptocurrency Manager",
    description:
      "CryptoView let you explore news, manage, and gain insightful analysis on cryptocurrencies.",
    date: "2023",
    source: "https://github.com/kypexfly/cryptoview",
    demo: "https://cryptoview-plus.netlify.app",
    tech: [
      "react",
      "express",
      "plotly",
      "mongodb",
      "netlify-functions",
      "vite",
    ],
    cover: "/img/cover-cryptoview.jpg",
    highlight: true,
  },
  {
    title: "E-commerce Store",
    description:
      "Fullstack tech e-commerce app with React/Next and Stripe payment.",
    date: "2023",
    source: "https://github.com/kypexfly/cybertech-ecommerce",
    demo: "https://cybertech-ecommerce.vercel.app",
    tech: ["next", "stripe", "zustand"],
    cover: "/img/cover-cybertech.jpg",
    highlight: true,
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion with more than 150 options.",
    date: "2023",
    source: "https://github.com/kypexfly/currency-converter",
    demo: "https://currency-rcz.vercel.app",
    tech: ["next", "shadcn-ui"],
    cover: "/img/cover-currency-converter.jpg",
    highlight: true,
  },
  {
    title: "ricardochu.com",
    description:
      "Personal website, portfolio and blog. Next.js 13 with App Router API and SSR.",
    date: "2023",
    source: "https://github.com/kypexfly/ricardochu",
    demo: "https://www.ricardochu.com",
    tech: ["next", "typescript", "tailwind", "contentlayer"],
    cover: "/img/cover-portfolio.jpg",
    highlight: true,
  },
  {
    title: "To-Do App",
    description:
      "A To-Do App with task completion, sort options, and local storage.",
    date: "2022",
    source: "https://github.com/kypexfly/todo-app-ts",
    demo: "https://react-todoapp-ts.netlify.app/",
    tech: ["react", "typescript", "tailwind", "zustand"],
    cover: "/img/cover-todo-app.jpg",
    highlight: true,
  },
  {
    title: "Epic Seven Index",
    description:
      "Library of heroes and artifacts for the Epic Seven mobile game.",
    date: "2022",
    source: "https://github.com/kypexfly/epic7index",
    demo: "https://epic7index.netlify.app",
    tech: ["react", "typescript", "tailwindcss"],
    cover: "/img/cover-epic7index.jpg",
    highlight: true,
  },
  {
    title: "ricardochu.com v4",
    description: "Old version of ricardochu.com with Astro framework.",
    date: "2023",
    demo: "https://ricardochu.netlify.app",
    source: "https://github.com/kypexfly/ricardochu.com/tree/v4-astro",
    tech: ["astro", "mdx"],
  },
  {
    title: "Learning and testing",
    description:
      "A repository to test libraries, frameworks, and tools for improving skills.",
    date: "2023",
    source: "https://github.com/kypexfly/learning",
    tech: ["learning", "tools", "testing", "libraries"],
  },
  {
    title: "Leetcode Problems",
    description: "Practice programming skills by solving coding questions.",
    date: "2023",
    source: "https://github.com/kypexfly/leetcode-problems-js",
    tech: ["learning", "vitest", "javascript"],
  },
  {
    title: "frontendmentor.io challenges",
    description: "My solutions for Frontend Mentor challenges.",
    date: "2022",
    source: "https://github.com/kypexfly/frontend-mentor-challenges",
    tech: ["html", "css", "javascript"],
  },
  {
    title: "Economic Load Dispatch algorithm",
    description:
      "Algorithm based on Power Generation, Operation, and Control by Allen J. Wood.",
    date: "2022",
    source: "https://github.com/kypexfly/economic-load-dispatch",
    tech: ["python", "matlab"],
  },
];

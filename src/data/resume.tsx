import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Golang } from "@/components/ui/svgs/golang";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Vito Andareas Manik",
  initials: "VM",
  url: "https://whoismanik.dev",
  location: "Samarinda, Indonesia",
  locationLink: "https://www.google.com/maps/place/Samarinda",
  description:
    "AI Engineer based in Samarinda, Indonesia, focused on building AI-powered applications that solve real-world problems through practical automation and thoughtful user experiences.",
  summary:"I'm an AI Engineer who enjoys turning small, specific problems into useful products. Most of my work focuses on AI-powered web and mobile applications, especially AI agents and automation systems, while keeping the experience simple, clear, and practical for users.\n\nI usually start with a narrow problem, test different approaches, and gradually shape the idea into something that works beyond a technical demo. A big part of how I learn comes from experimentation, whether through side projects, research, internships, or hackathons.\n\nI'm particularly interested in how AI can reduce repetitive work without making products feel complicated or opaque. Because the AI ecosystem moves quickly, I continuously evaluate new models, frameworks, and patterns, then use the ones that meaningfully improve reliability, capability, or user experience.\n\nOutside of building products, I enjoy playing badminton, watching Korean dramas, and occasionally turning random ideas into my next side project.",
  avatarUrl: "/vitomanik.webp",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "Go", icon: Golang },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vite", icon: null },
    { name: "Go Chi", icon: Golang },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Mastra AI", icon: null },
    { name: "LangChain", icon: null },
    { name: "Qdrant", icon: null },
    { name: "Upstash", icon: null },
    { name: "Python", icon: Python },
    { name: "AI SDK", icon: null },
    { name: "TailwindCSS", icon: null },
    { name: "Bun", icon: null },
    { name: "Node.js", icon: Nodejs },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "me@whoismanik.dev",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/manikandareas",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vitomanik/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Threads: {
        name: "Threads",
        url: "https://www.threads.net/@manikandareas",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:me@whoismanik.dev",
        icon: Icons.email,
        navbar: false,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/manikandareas",
        icon: Icons.instagram,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "PT Eterno Global Technologies",
      href: "https://eternoglobaltechnologies.com",
      badges: [],
      location: "Remote",
      title: "AI Engineer Intern",
      logoUrl:
        "https://eternoglobaltechnologies.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-with-text-2.b400f7df.png&w=384&q=75",
      start: "Jan 2026",
      end: "May 2026",
      description:
        "Researched, designed, and built FMS Chat, an AI agent connected to a fleet management system database. The system enables users to explore fleet conditions, operational performance, and deeper insights from recent mining data through natural-language interaction. I also built a secure RAG fallback that generates efficient database queries when existing tools cannot handle a request, while maintaining controlled and reliable access across edge cases. The internship also gave me hands-on exposure to real coal mining operations and the challenge of translating complex operational data into an accessible AI experience.",
    },
  ],
  education: [
    {
      school: "Politeknik Negeri Samarinda",
      href: "https://polnes.ac.id/",
      degree:
        "Bachelor of Applied Science — Informatics Multimedia (S.Tr.Kom) · GPA 3.93/4.00",
      logoUrl: "/education/polnes.svg",
      start: "2022",
      end: "Oct 2026",
    },
  ],
  projects: [
    {
      title: "Ngertiin",
      href: "https://ngertiin.whoismanik.dev",
      dates: "2026",
      active: true,
      description:
        "An AI-powered learning platform that transforms PDFs, notes, and websites into structured, engaging learning modules. I built an AI agent that helps users follow their curiosity and explore topics more deeply, using LangChain, durable LangGraph workflows, and RAG with pgvector to create a flexible, context-aware learning experience.",
      technologies: [
        "NestJS",
        "TypeScript",
        "LangChain",
        "LangGraph",
        "Vite",
        "React",
        "OpenAI",
        "Firecrawl",
        "TailwindCSS",
        "Docker",
        "PostgreSQL",
        "S3",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://ngertiin.whoismanik.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Blog",
          href: "/blog/ngertiin",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/ngertiin.webp",
      video:
        "https://ngertiin-assets.whoismanik.dev/videos/ngertiin-linkedin-post.mp4",
    },
    {
      title: "FMS Chat",
      href: "/blog/fms-chat",
      dates: "2026",
      active: true,
      description:
        "An AI agent connected to a fleet management system database that lets users ask about fleet conditions, operational performance, and deeper insights from recent mining data. I researched, designed, and built the system end-to-end, including a secure RAG fallback that can generate efficient database queries when predefined tools cannot handle a request while keeping data access controlled and reliable.",
      technologies: [
        "Python",
        "Next.js",
        "FastAPI",
        "TypeScript",
        "Qwen",
        "Qdrant",
        "PostgreSQL",
        "Docker",
        "LangChain DeepAgents",
        "LangChain",
        "OpenAI",
      ],
      links: [
        {
          type: "Blog",
          href: "/blog/fms-chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/fms-chat.webp",

      video: "",
    },
    {
      title: "Pixelaid",
      href: "https://github.com/manikandareas/technofest2026",
      dates: "2026",
      active: true,
      description:
        "An AI-powered simulation game for medical students to practice clinical interactions through realistic scenarios. I built real-time AI conversations with LiveKit and designed the experience around a playful pixel-art interface to make clinical practice feel less intimidating and more interactive.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Python",
        "FastAPI",
        "LiveKit",
        "Gemini",
        "Openai",
      ],
      links: [
          {
          type: "Source",
          href: "https://github.com/manikandareas/technofest2026",
          icon: <Icons.github className="size-3" />,
        },
          {
          type: "Blog",
          href: "/blog/pixelaid",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/pixelaid.webp",
      video: "",
    },
    {
      title: "Lana",
      href: "https://github.com/manikandareas/lana",
      dates: "2026",
      active: true,
      description:
        "A code-driven video generation engine focused on explanation videos rather than generative video models. Lana composes playful crayon and whiteboard-style educational videos using programmable scenes, animation pipelines, AI-assisted planning, and generated narration.",
      technologies: [
        "Hono",
        "Remotion",
        "React",
        "Manim",
        "Fish Audio",
        "LangGraph",
        "OpenAI",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manikandareas/lana",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "/blog/lana",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/lana.png",
      video: "https://ngertiin-assets.whoismanik.dev/videos/lana.mp4",
    },
    {
      title: "Genii",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "An AI-integrated course platform that recommends learning content based on user data and interests. I implemented semantic search to compare user profiles with course metadata and surface courses that are more relevant to each learner.",
      technologies: [
        "Convex",
        "Next.js",
        "TailwindCSS",
        "Convex AI Agent",
        "OpenAI",
        "Convex RAG",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manikandareas/genii",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/genii.png",
      video: "",
    },
    {
      title: "Madia Blog",
      href: "https://github.com/manikandareas/Madia",
      dates: "2024",
      active: true,
      description:
        "A developer-focused article platform inspired by dev.to, built with Nuxt 3 and Supabase.",
      technologies: ["Nuxt.js", "Vue.js", "TypeScript", "Supabase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/manikandareas/Madia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/madia-blog.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Bangkit Academy 2025",
      dates: "2024 - 2025",
      location: "Indonesia",
      description:
        "Participated in Bangkit Academy as a Mobile Development cohort member and collaborated in a team-based product development environment.",
      image:
        "https://yt3.googleusercontent.com/0b3Ljhqw5VJpXwOaffzj5lwAfHHYa7fTfT32hjnZ3MMHyWu84IUfy4CTliMmY15f0k8i-wt7oA=s900-c-k-c0x00ffffff-no-rj",
      links: [],
    },
    {
      title: "3rd Place — Infinite DevFest Hackathon Competition",
      dates: "2025",
      location: "Indonesia",
      description:
        "Served as team lead and full-stack developer, coordinating the team while contributing directly to product development during the hackathon.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdu0ERxtb0ZtvMHu1imfXTeJPIjRdpebcemgQOwNY3_g&s=10",
      links: [],
    },
    {
      title: "1st Place — Technovest IT V2.25 Hackathon Competition",
      dates: "2025",
      location: "Indonesia",
      description:
        "Served as team lead and full-stack developer, leading the team from ideation through implementation and final presentation.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ITR3_VL0PoPKzVzYrXFyt-YNWfDEZ50CGk6mjh3kiOsqgJOXuGAm-wQI&s=10",
      links: [],
    },
    {
      title:
        "Silver Medal — International Innovation and Invention Competition Through Exhibition",
      dates: "2025",
      location: "International",
      description:
        "Contributed as team lead and full-stack developer in an international innovation and invention competition.",
      image: "https://www.icompex.gov.my/assets/img/logoicompex.png",
      links: [],
    },
    {
      title:
        "Participant — Kewirausahaan Mahasiswa Indonesia (KMI) Expo XVI 2025",
      dates: "2025",
      location: "Indonesia",
      description:
        "Participated in KMI Expo XVI 2025 as part of a student team presenting and developing a technology-driven product.",
      image: "/hachathons/kmi-expo.webp",
      links: [],
    },
    {
      title: "3rd Place — Technovest IT V3.26 Hackathon Competition",
      dates: "2026",
      location: "Indonesia",
      description:
        "Served as team lead and full-stack developer, guiding the team through rapid product development and competition delivery.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ITR3_VL0PoPKzVzYrXFyt-YNWfDEZ50CGk6mjh3kiOsqgJOXuGAm-wQI&s=10",
      links: [],
    },
  ],
} as const;

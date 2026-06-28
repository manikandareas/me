import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Golang } from "@/components/ui/svgs/golang";

export const DATA = {
  name: "Vito Andareas Manik",
  initials: "VM",
  url: "https://vitomanik.com",
  location: "Samarinda, Indonesia",
  locationLink: "https://www.google.com/maps/place/Samarinda",
  description:
    "Junior Frontend Developer based in Samarinda, Indonesia 🇮🇩. I love crafting pixel-perfect, efficient, and scalable web experiences.",
  summary:
    "Hi! I'm Vito Andareas Manik, a junior frontend developer navigating the exciting realm of programming. My journey into the world of coding began in 2020, and it wasn't until 2022 that I decided to dive deep into honing my skills. My proficiency lies in languages such as JavaScript, TypeScript, and a touch of Golang.\n\nOne of my strengths is a robust problem-solving ability, a skill I've cultivated along with my capacity to thrive under pressure. I find myself particularly drawn to the fascinating universe of web development, with a special focus on mastering the [Next.js](https://nextjs.org) framework. This framework, with its dynamic features, has become a cornerstone of my skills.\n\nMy commitment to learning and staying abreast of the latest trends in web development is unwavering. As a junior frontend developer, I bring to the table not just technical expertise but also a passion for innovation. I am excited about the possibilities that coding presents and look forward to contributing my skills to the ever-evolving landscape of technology.",
  avatarUrl: "/vitomanik.jpg",
  skills: [
    { name: "JavaScript", icon: null },
    { name: "TypeScript", icon: Typescript },
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "TailwindCSS", icon: null },
    { name: "Vue.js", icon: null },
    { name: "Nuxt.js", icon: null },
    { name: "Go", icon: Golang },
    { name: "Prisma", icon: null },
    { name: "tRPC", icon: null },
    { name: "Tanstack Query", icon: null },
    { name: "Redux Toolkit", icon: null },
    { name: "Supabase", icon: null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vitoandareas15@gmail.com",
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
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/manikandareas",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vitoandareas15@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // TODO: Dummy data — no work experience available in the source repo yet.
  // Replace these placeholders with your real experience.
  work: [
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "",
      start: "2023",
      end: "Present",
      description:
        "Built and shipped responsive web applications for clients using Next.js, React, and TailwindCSS. Focused on pixel-perfect UI, performance, and clean, maintainable code. (Placeholder — replace with your real experience.)",
    },
    {
      company: "Politeknik Negeri Samarinda",
      href: "https://polnes.ac.id/",
      badges: [],
      location: "Samarinda, Indonesia",
      title: "Web Development Project Assistant",
      logoUrl: "/education/polnes.svg",
      start: "2022",
      end: "2023",
      description:
        "Collaborated on campus and student projects, building internal web tools and learning the fundamentals of full-stack development with the JavaScript ecosystem. (Placeholder — replace with your real experience.)",
    },
  ],
  education: [
    {
      school: "Politeknik Negeri Samarinda",
      href: "https://polnes.ac.id/",
      degree:
        "Bachelor of Applied Science — Teknik Informatika Multimedia (S.Tr.Kom)",
      logoUrl: "/education/polnes.svg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "{ News } App",
      href: "https://news-app-git-main-manikxixis-projects.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A news website with authentication and an article management dashboard for editors. Aggregates content from several major Indonesian media APIs. Built with Next.js 14, Shadcn UI, Tanstack Query, Drizzle ORM, TailwindCSS, and Neon Database.",
      technologies: ["Next.js", "React.js", "TailwindCSS", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://news-app-git-main-manikxixis-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manikandareas/news-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/news-app.png",
      video: "",
    },
    {
      title: "vitomanik.com",
      href: "https://vitomanik.com",
      dates: "2024",
      active: true,
      description:
        "Personal website built from scratch using Next.js 14, inspired by [Ryan Aulia](https://aulianza.id/).",
      technologies: ["Next.js", "React.js", "TailwindCSS", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "https://vitomanik.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manikandareas/portfolio-2.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/portfolio2-0.png",
      video: "",
    },
    {
      title: "Madia Blog",
      href: "https://madia.vitomanik.com/",
      dates: "2024",
      active: true,
      description:
        "An article application inspired by dev.to, built with TypeScript, Nuxt 3, and Supabase.",
      technologies: ["Nuxt.js", "Vue.js", "TypeScript", "Supabase"],
      links: [
        {
          type: "Website",
          href: "https://madia.vitomanik.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manikandareas/Madia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/madia-blog.png",
      video: "",
    },
    {
      title: "Nextjs Movies",
      href: "https://movies-nextjs-coral.vercel.app/",
      dates: "2023",
      active: true,
      description:
        "A Next.js application for browsing movies and TV series, powered by a movie database API.",
      technologies: ["Next.js", "TypeScript", "Tanstack Query", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://movies-nextjs-coral.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manikandareas/movies-nextjs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/nextjs-movies.png",
      video: "",
    },
    {
      title: "Mini Media",
      href: "https://akumanik.fun",
      dates: "2023",
      active: true,
      description:
        "A Twitter-inspired social media application created using Prisma, tRPC, and Next.js 14.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "tRPC",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://akumanik.fun",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manikandareas/mini-media",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mini-media.png",
      video: "",
    },
  ],
  // TODO: Dummy data — no hackathon history available in the source repo yet.
  // Replace these placeholders with your real hackathon experience.
  hackathons: [
    {
      title: "Hackathon Placeholder",
      dates: "2024",
      location: "Indonesia",
      description:
        "Participated in a hackathon and built a web application with a small team in a couple of days. (Placeholder — replace with your real hackathon experience.)",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/manikandareas",
        },
      ],
    },
    {
      title: "Student Project Showcase",
      dates: "2023",
      location: "Samarinda, Indonesia",
      description:
        "Presented a campus web project, collaborating with classmates to design and ship it under a tight deadline. (Placeholder — replace with your real hackathon experience.)",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/manikandareas",
        },
      ],
    },
  ],
} as const;

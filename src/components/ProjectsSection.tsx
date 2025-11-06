"use client";

import Image from "next/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import TerminalWindow from "../components/TerminalWindow";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
};

const PROJECTS: Project[] = [
  {
    id: "modde",
    title: "MODDE",
    description:
      "AI-powered fashion discovery platform using CNN for visual search, featuring a React Native app, Next.js retailer dashboard, and Node.js backend for real-time shopping and management.",
    image: "/images/project1.jpg",
    tags: ["React Native","Next Js", "Nest Js","Mongo DB","Python" ,"Flask"],
    github: "https://github.com/ModdeSGDP/ModdeMain",
    live: "https://www.getmodde.com/",
  },
  {
    id: "Digital-Vault",
    title: "Digital_Vault",
    description:
      "Full-stack expense management app built with React Native, Express, and PostgreSQL, featuring Clerk authentication, Redis caching, and smart monthly summaries for tracking income and spending.",
    image: "/images/project2.png",
    tags: ["React Native", "Express", "PostgreSQL", "Clerk","Redis"],
    github: "https://github.com/nelith-2002/Digital-Vault-full-stack-app",
    // live: "https://your-demo-link.com/cyber-defense-suite",
  },
  {
    id: "Meals-App",
    title: "Meals_App",
    description:
      "React Native app with a seamless, modern UI that lets users explore, add, and manage recipes, offering a smooth and engaging experience for discovering delicious meals.",
    image: "/images/project3.png",
    tags: ["React Native" , "Expo"],
    github: "https://github.com/nelith-2002/Meals-App",
    // live: "https://your-demo-link.com/blockchain-validator",
  },
  {
    id: "Real_Time_Ticket_managment_System",
    title: "Realtime_Ticket_Managment_System",
    description:
      "Real-time ticket management system featuring multi-threaded concurrency, Producer-Consumer pattern, and synchronization to ensure consistent, reliable performance during high-volume ticket transactions.",
    image: "/images/project4.jpg",
    tags: ["Java", "Spring Boot", "React"],
    github: "https://github.com/nelith-2002/Real-time-Ticket-Management-System",
    // live: "https://your-demo-link.com/quantum-simulator",
  },
  {
    id: "Real_Time_Ticket_managment_System1",
    title: "Realtime_Ticket_Managment_System",
    description:
      "Real-time ticket management system featuring multi-threaded concurrency, Producer-Consumer pattern, and synchronization to ensure consistent, reliable performance during high-volume ticket transactions.",
    image: "/images/project4.jpg",
    tags: ["Java", "Spring Boot", "React"],
    github: "https://github.com/nelith-2002/Real-time-Ticket-Management-System",
    // live: "https://your-demo-link.com/quantum-simulator",
  },
  {
    id: "Real_Time_Ticket_managment_System2",
    title: "Realtime_Ticket_Managment_System",
    description:
      "Real-time ticket management system featuring multi-threaded concurrency, Producer-Consumer pattern, and synchronization to ensure consistent, reliable performance during high-volume ticket transactions.",
    image: "/images/project4.jpg",
    tags: ["Java", "Spring Boot", "React"],
    github: "https://github.com/nelith-2002/Real-time-Ticket-Management-System",
    // live: "https://your-demo-link.com/quantum-simulator",
  },
];

function ProjectCard(project: Project) {
  return (
    <article className="group relative flex flex-col border border-[#b4ff39] bg-black/60 shadow-[0_0_18px_rgba(0,0,0,0.8)] overflow-hidden">
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center border border-[#b4ff39] bg-black/50 text-[#b4ff39] hover:bg-[#b4ff39] hover:text-black transition-colors duration-150"
            >
              <FaGithub className="text-lg" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center border border-[#b4ff39] bg-black/50 text-[#b4ff39] hover:bg-[#b4ff39] hover:text-black transition-colors duration-150"
            >
              <FaArrowUpRightFromSquare className="text-sm" />
            </a>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-5 md:px-7 md:py-6 flex flex-col flex-1">
        <h3 className="mb-2 text-lg md:text-xl font-semibold text-[#b4ff39] tracking-[0.16em]">
          <span className="mr-2 text-base">{">_"}</span>
          {project.title}
        </h3>

        <p className="mb-4 text-sm md:text-base text-[#d6ffe1] leading-relaxed">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#b4ff39] bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#b4ff39] hover:bg-[#b4ff39] hover:text-black transition-colors duration-150"
            >
              {">"} {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-20 mt-16 mb-20">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        {/* Reusable terminal header */}
        <TerminalWindow
          path="~/projects"
          command="ls -la ./featured_projects"
          status="Displaying secure database entries..."
        >
          {/* if you want extra text inside body, you can put it here.
              For now we'll leave body empty so header sits alone */}
        </TerminalWindow>

        <div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-2 items-stretch">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

import {
  FaReact,
  FaAngular,
  FaJava,
  FaPython,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiFlutter,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiGooglecolab,
  SiJavascript
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";

const SKILLS = [
  // MOBILE
  { name: "React Native", icon: FaReact, area: "MOBILE" },
  { name: "Flutter", icon: SiFlutter, area: "MOBILE" },

  // FRONTEND
  { name: "React", icon: FaReact, area: "FRONTEND" },
  { name: "Next.js", icon: SiNextdotjs, area: "FRONTEND" },
  { name: "Angular", icon: FaAngular, area: "FRONTEND" },
  { name: "TypeScript", icon: SiTypescript, area: "FRONTEND" },

  // BACKEND
  { name: "Express.js", icon: SiExpress, area: "BACKEND" },
  { name: "Nest.js", icon: SiNestjs, area: "BACKEND" },
  { name: "Spring Boot", icon: SiSpringboot, area: "BACKEND" },
  { name: "Flask", icon: SiFlask, area: "BACKEND" },

  // DATABASE
  { name: "PostgreSQL", icon: SiPostgresql, area: "DATABASE" },
  { name: "MongoDB", icon: SiMongodb, area: "DATABASE" },
  { name: "SQL", icon: TbSql, area: "DATABASE" },

  // LANGUAGE
  { name: "Java", icon: FaJava, area: "LANGUAGE" },
  { name: "Python", icon: FaPython, area: "LANGUAGE" },
  { name: "JavaScript", icon: SiJavascript, area: "LANGUAGE" },

  // TOOLS
  { name: "Git", icon: FaGitAlt, area: "TOOLS" },
  { name: "Figma", icon: FaFigma, area: "TOOLS" },
  { name: "CI/CD", icon: BsBoxSeam, area: "TOOLS" },
  { name: "Google Colab", icon: SiGooglecolab, area: "TOOLS" },
];

function SkillCard({
  name,
  icon: Icon,
  area,
}: {
  name: string;
  icon: React.ElementType;
  area: string;
}) {
  return (
    <article
      className={
        // smaller base card, hover grow, NO outer glitter
        "group relative overflow-hidden border border-[#b4ff39]/35 bg-black/75 " +
        "px-5 py-5 md:px-6 md:py-6 text-center text-[#b4ff39] " +
        "shadow-[0_0_6px_rgba(0,0,0,0.9)] " +
        "transition-all duration-200 transform " +
        "hover:-translate-y-1 hover:scale-[1.03]"
      }
    >
      {/* glow overlay kept INSIDE the card (inset-[1px]) */}
      <div
        className="pointer-events-none absolute inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background:
            "radial-gradient(circle at 0 0, rgba(180,255,57,0.22), transparent 55%)," +
            "radial-gradient(circle at 100% 0, rgba(180,255,57,0.22), transparent 55%)," +
            "radial-gradient(circle at 0 100%, rgba(180,255,57,0.22), transparent 55%)," +
            "radial-gradient(circle at 100% 100%, rgba(180,255,57,0.22), transparent 55%)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
          <Icon />
        </div>

        {/* Name */}
        <h3 className="mb-1 text-sm md:text-base font-semibold tracking-[0.18em]">
          {name}
        </h3>

        {/* Area */}
        <p className="mb-3 text-[0.6rem] md:text-xs uppercase tracking-[0.25em] text-[#d6ffe1]/80">
          {area}
        </p>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1 text-[0.55rem] tracking-[0.6em]">
          <span className="group-hover:text-[#b4ff39]">•</span>
          <span className="group-hover:text-[#b4ff39]">•</span>
          <span className="group-hover:text-[#b4ff39]">•</span>
        </div>
      </div>
    </article>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 mt-20 mb-24">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        {/* TERMINAL HEADER */}
        <div className="mb-10 border border-[#b4ff39] bg-black/70 shadow-[0_0_18px_rgba(0,0,0,0.9)]">
          <div className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-mono text-[#b4ff39]">
            {/* top row: dots + path */}
            <div className="flex items-center gap-2">
              <span className="inline-flex h-3 w-3 rounded-full bg-red-500" />
              <span className="inline-flex h-3 w-3 rounded-full bg-yellow-400" />
              <span className="inline-flex h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-4 tracking-[0.18em]">
                ~/technical_arsenal
              </span>
            </div>

            {/* thin line */}
            <div className="mt-4 h-px bg-[#b4ff39]/40" />

            {/* command + lines */}
            <div className="mt-4 space-y-1 tracking-[0.18em]">
              <p>
                <span className="mr-2">{">"}</span>
                ./scan_capabilities --all
              </p>
              <p>
                <span className="mr-2">{">"}</span>
                Mobile_Development | Full-Stack | DevOps
              </p>

              {/* blinking status line WITH [✓] using icon inside brackets */}
              <p className="flex items-center gap-2">
                <span className=" mt-5">{">"}</span>
                <span className="animate-pulse inline-flex items-center gap-2 mt-5">
                  <span>SYSTEM: FULLY_OPERATIONAL</span>
                  <span className="inline-flex items-center gap-1">
                    [✓]
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS GRID */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              area={skill.area}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { FaCircle } from "react-icons/fa";

export default function EducationSection() {
  const EDUCATION = [
    {
      title: "Bachelor_of_Computer_Science",
      institution: "Tech_University",
      period: "2018 - 2022",
      description: "Specialized in Software Engineering and Mobile Development",
      image: "/images/edu/uni.png", 
    },
    {
      title: "Mobile_Development_Certification",
      institution: "Advanced_Tech_Institute",
      period: "2022",
      description: "React Native & Flutter Expert Certification",
      image: "/images/edu/scl.png", 
    },
  ];

  return (
    <section id="education" className="relative z-20 mt-24 mb-24">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        {/* TERMINAL HEADER */}
        <div className="mb-10 border border-[#b4ff39] bg-black/70 shadow-[0_0_18px_rgba(0,0,0,0.9)]">
          <div className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-mono text-[#b4ff39]">
            {/* top row: dots + path */}
            <div className="flex items-center gap-2">
              <span className="inline-flex h-3 w-3 rounded-full bg-red-500" />
              <span className="inline-flex h-3 w-3 rounded-full bg-yellow-400" />
              <span className="inline-flex h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-4 tracking-[0.18em]">~/education</span>
            </div>

            {/* thin line */}
            <div className="mt-4 h-px bg-[#b4ff39]/40" />

            {/* command lines */}
            <div className="mt-4 space-y-1 tracking-[0.18em]">
              <p>
                <span className="mr-2">{">"}</span>
                cat ./credentials.log
              </p>
              <p className="animate-pulse">
                <span className="mr-2">{">"}</span>
                Loading academic records...
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATION GRID */}
        <div className="grid gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2">
          {EDUCATION.map((edu) => (
            <div
              key={edu.title}
              className="group border border-[#b4ff39]/40 bg-black/70 text-[#b4ff39] p-6 md:p-8 hover:border-[#b4ff39] transition-all duration-200"
            >
              {/* Header row */}
              <div className="flex items-start gap-4">
                {/* Square icon with image */}
                <div className="border border-[#b4ff39]  h-16 w-16 flex items-center justify-center overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image
                      src={edu.image}
                      alt={edu.institution}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-base md:text-lg font-semibold tracking-[0.05em]">
                    {edu.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#d6ffe1]/80 tracking-[0.08em] mt-1">
                    {edu.institution}
                  </p>

                  {/* Period with dot */}
                  <div className="flex items-center gap-2 text-xs mt-1 text-[#b4ff39]">
                    <FaCircle className="text-[7px]" />
                    {edu.period}
                  </div>
                </div>
              </div>

              {/* Divider line */}
              <div className="mt-4 h-px bg-[#b4ff39]/40" />

              {/* Description */}
              <p className="mt-4 text-sm font-mono text-[#b4ff39]/90 tracking-[0.04em]">
                <span className="mr-2">{">"}</span>
                {edu.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-4 flex gap-2">
                <div className="h-[3px] flex-1 bg-[#b4ff39]/70" />
                <div className="h-[3px] flex-1 bg-[#b4ff39]/70" />
                <div className="h-[3px] flex-1 bg-[#b4ff39]/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

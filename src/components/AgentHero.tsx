"use client";

import { useEffect, useState } from "react";

const AGENT_CONFIG = {
  handle: "Nelith_Nethsanda",
  name: "NELITH NETHSANDA",
  specialization: "[AI, Web_Performance, DevOps]",
  status: "ACTIVE",
};


const ROLE_TITLES = [
  "Mobile_Developer",
  "Full-Stack_Developer",
  "Programmer",
];

export default function AgentHero() {
  const [initDots, setInitDots] = useState("...");
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [visibleLines, setVisibleLines] = useState(0);

  // animate "System_Initializing..."
  useEffect(() => {
    const id = setInterval(() => {
      setInitDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);
    return () => clearInterval(id);
  }, []);

  // reveal SPECIALIZATION / STATUS lines
  useEffect(() => {
    if (visibleLines >= 2) return;
    const id = setInterval(() => {
      setVisibleLines((prev) => (prev < 2 ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(id);
  }, [visibleLines]);

 
  useEffect(() => {
    const current = ROLE_TITLES[roleIndex % ROLE_TITLES.length];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setTypedRole((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      
      if (!isDeleting && typedRole === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && typedRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting, roleIndex]);

   const getStatusColor = () => {
    switch (AGENT_CONFIG.status) {
      case "ACTIVE":
        return "text-[#b4ff39]"; // neon green
      case "STANDBY":
        return "text-yellow-400";
      case "OFFLINE":
        return "text-red-500";
      default:
        return "text-[#b4ff39]";
    }
  };

  return (
    <section className="relative z-20 mt-16">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        <div className="space-y-6">
          {/* System initializing + init command */}
          <div className="space-y-2 text-sm md:text-base tracking-[0.18em]">
            <p>
              <span className="mr-2">{">"}</span>
              <span>System_Initializing{initDots}</span>
            </p>

            <p className="flex items-center">
              <span className="mr-2">{">"}</span>
              <span>./{AGENT_CONFIG.handle} --init</span>
              <span className="ml-2 inline-block w-2 h-4 bg-[#b4ff39] animate-pulse" />
            </p>
          </div>

          {/* Name */}
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-[#b4ff39] drop-shadow-[0_0_22px_rgba(180,255,57,0.8)]">
            {AGENT_CONFIG.name}
          </h1>

          {/* Info lines */}
          <div className="mt-6 space-y-2 text-sm md:text-base">
            {/* ROLE (with typing effect) */}
            <p className="flex items-baseline gap-2 tracking-[0.12em]">
              <span>{">"}</span>
              <span className="opacity-80">
                ROLE:{" "}
                <span className="opacity-100">
                  {typedRole}
                  <span className="animate-pulse">▌</span>
                </span>
              </span>
            </p>

            {/* SPECIALIZATION & STATUS */}
            {visibleLines >= 1 && (
              <p className="flex items-baseline gap-2 tracking-[0.12em]">
                <span>{">"}</span>
                <span className="opacity-80">
                  SPECIALIZATION:{" "}
                  <span className="opacity-100">{AGENT_CONFIG.specialization}</span>
                </span>
              </p>
            )}
            {visibleLines >= 2 && (
              <p className="flex items-baseline gap-2 tracking-[0.12em]">
                <span>{">"}</span>
                <span className="opacity-80">
                   STATUS:{" "}
                  <span
                    className={`${getStatusColor()} font-semibold drop-shadow-[0_0_10px_rgba(180,255,57,0.9)] animate-[pulse_1.5s_ease-in-out_infinite]`}
                  >
                    {AGENT_CONFIG.status}
                  </span>
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";

type LoadingScreenProps = {
  onDone: () => void;
  fast?: boolean;
};

const STACKS = [
  { icon: FaJava, label: "Java_Engine" },
  { icon: FaPython, label: "Python_Core" },
  { icon: FaReact, label: "React_UI_Module" },
  { icon: SiNextdotjs, label: "NextJS_Router" },
  { icon: SiExpress, label: "Express_API_Gateway" },
  { icon: SiMongodb, label: "MongoDB_Datastore" },
];

export default function LoadingScreen({ onDone ,fast }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stackIndex, setStackIndex] = useState(0);

  useEffect(() => {
    const totalDuration = fast ? 1200 : 3000; // ms
    const tick = 40; // ms between updates
    const step = (100 * tick) / totalDuration;

    // progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + step, 100);
        if (next === 100) {
          clearInterval(progressInterval);
          setTimeout(onDone, fast ? 80 : 300); // small pause at 100%
        }
        return next;
      });
    }, tick); // ~6s total

    // rotating tech stack icon/text
    // const stackInterval = setInterval(() => {
    //   setStackIndex((prev) => (prev + 1) % STACKS.length);
    // }, 700);

    return () => {
      clearInterval(progressInterval);
      // clearInterval(stackInterval);
    };
  }, [onDone , fast]);

   useEffect(() => {
    const stepPerIcon = 100 / STACKS.length; // each icon gets an equal progress slice
    const index = Math.min(
      STACKS.length - 1,
      Math.floor(progress / stepPerIcon)
    );
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setStackIndex(index);
  }, [progress]);

  const CurrentStack = STACKS[stackIndex].icon;
   const displayProgress = Math.round(progress);
//   const currentLabel = STACKS[stackIndex].label;

  return (
    <div
      className="fixed inset-0 z-60 flex flex-col items-center justify-center text-[#b4ff39]"
      style={{
        backgroundColor: "#020b06",
        backgroundImage:
          "repeating-linear-gradient(to bottom, rgba(180, 255, 57, 0.12) 0, rgba(180, 255, 57, 0.12) 1px, transparent 1px, transparent 3px)",
      }}
    >
      {/* Center avatar placeholder (you can replace with your own image) */}
      {/* <div className="mb-8 border-2 border-[#00f7a1] p-1 shadow-[0_0_25px_rgba(0,247,161,0.6)]"> */}
        {/* Replace this with an <Image> using /public/avatar.png if you want */}
        {/* <div
          className="h-32 w-32 bg-[#00f7a1]/15"
          style={{
            backgroundImage:
              "radial-gradient(circle, #00f7a1 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        /> */}
      {/* </div> */}

      {/* Glitchy ID text under avatar */}
      {/* <p className="mb-8 text-lg tracking-[0.35em] uppercase">
        4&nbsp;XZ93Y(&nbsp;+
      </p> */}

      <div className="mb-4 flex items-center justify-center gap-3 text-xs md:text-sm tracking-[0.25em] uppercase">
          <CurrentStack className="text-6xl md:text-6xl animate-pulse mb-5" />
          {/* <span>{currentLabel}</span> */}
        </div>

      {/* Terminal-like loading panel */}
      <div className="w-full max-w-3xl border-2 border-[#b4ff39] bg-black/80 px-6 py-5 md:px-10 md:py-7 shadow-[0_0_8px_rgba(180,255,57,0.8)]">
        {/* Tech stack line */}
        <div className="mb-4 flex items-center justify-between text-xs md:text-sm tracking-[0.2em]">
          <span>PROGRESS: INITIALIZING_TEXTURES</span>
          <span className="tabular-nums">{displayProgress}%</span>
        </div>

        {/* Rotating tech icon + label */}
        {/* <div className="mb-4 flex items-center justify-center gap-3 text-xs md:text-sm tracking-[0.25em] uppercase">
          <CurrentStack className="text-2xl md:text-3xl animate-pulse" />
          <span>{currentLabel}</span>
        </div> */}

        {/* Progress bar */}
        <div className="mt-2 border border-[#b4ff39] h-7 flex items-center px-1">
          <div className="relative w-full h-4 bg-black/60 overflow-hidden">
            <div
              className="h-full bg-[#b4ff39] shadow-[0_0_15px_rgba(180,255,57,0.8)] transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer text */}
      {/* <p className="mt-6 text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-[#00f7a1]/80 text-center">
        [ Loading may take 2–3 minutes depending on your connection... just
        kidding, it&apos;s all simulated ]  
      </p> */}
    </div>
  );
}

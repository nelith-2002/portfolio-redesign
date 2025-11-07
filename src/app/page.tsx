"use client";

import { useEffect, useState } from "react";

import { MatrixRain } from "../components/MatrixRain";
import AgentNavbar from "../components/AgentNavbar";
import AgentHero from "../components/AgentHero";
import AgentContact from "../components/AgentContact";
import AgentCTA from "../components/AgentCTA";
import AgentMission from "../components/AgentMission";
import ProjectsSection from "../components/ProjectsSection";
import AgentResumeButton from "../components/AgentResumeButton";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [fastLoader, setFastLoader] = useState(false);


  // eslint-disable-next-line react-hooks/exhaustive-deps   

  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyLoaded = sessionStorage.getItem("agent_loaded");
    if (alreadyLoaded) {
      setFastLoader(true);
    }
  }, []); 

  const handleLoaderDone = () => {
    setShowLoader(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("agent_loaded", "0.2");
    }
  };

  if (showLoader) {
    return (
      <main className="relative min-h-screen">
        <LoadingScreen onDone={handleLoaderDone} fast={fastLoader} />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen pt-20">
      {/* BACKGROUND */}
      <MatrixRain />

      {/* NAVBAR */}
      <AgentNavbar />

      <AgentHero />

      <AgentMission />
      <AgentCTA />
      <AgentContact />
      <AgentResumeButton />
      <ProjectsSection />

      {/* REST OF HERO CONTENT GOES HERE */}
      <section className="relative z-20 max-w-6xl mx-auto mt-16 px-6" />
    </main>
  );
}

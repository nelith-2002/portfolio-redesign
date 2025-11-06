import { MatrixRain } from "../components/MatrixRain";
import AgentNavbar from "../components/AgentNavbar";
import AgentHero from "../components/AgentHero"; 
import AgentContact from "../components/AgentContact";
import AgentCTA from "../components/AgentCTA";
import AgentMission from "../components/AgentMission";
import ProjectsSection from "../components/ProjectsSection";
import AgentResumeButton from "../components/AgentResumeButton";
import { Agent } from "http";



export default function Home() {
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
      <section className="relative z-20 max-w-6xl mx-auto mt-16 px-6">
        {/* System_Initializing, ./Deeshana --init, etc. */}
      </section>
    </main>
  );
}

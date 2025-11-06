import { MatrixRain } from "../components/MatrixRain";
import AgentNavbar from "../components/AgentNavbar";
import AgentHero from "../components/AgentHero";
import AgentContact from "../components/AgentContact";
import AgentCTA from "../components/AgentCTA";
import AgentMission from "../components/AgentMission";



export default function Home() {
  return (
     <main className="relative min-h-screen">
      {/* BACKGROUND */}
      <MatrixRain />

      {/* NAVBAR */}
      <AgentNavbar />

      <AgentHero />

      <AgentMission />
      <AgentCTA />
      <AgentContact />
    

      {/* REST OF HERO CONTENT GOES HERE */}
      <section className="relative z-20 max-w-6xl mx-auto mt-16 px-6">
        {/* System_Initializing, ./Deeshana --init, etc. */}
      </section>
    </main>
  );
}

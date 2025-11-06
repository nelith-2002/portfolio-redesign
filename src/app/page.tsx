import { MatrixRain } from "../components/MatrixRain";
import AgentNavbar from "../components/AgentNavbar";


export default function Home() {
  return (
     <main className="relative min-h-screen">
      {/* BACKGROUND */}
      <MatrixRain />

      {/* NAVBAR */}
      <AgentNavbar />

      

      {/* REST OF HERO CONTENT GOES HERE */}
      <section className="relative z-20 max-w-6xl mx-auto mt-16 px-6">
        {/* System_Initializing, ./Deeshana --init, etc. */}
      </section>
    </main>
  );
}

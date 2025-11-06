import { MatrixRain } from "../components/MatrixRain";

export default function Home() {
  return (
    <main className="relative min-h-screen text-lime-300">
      {/* MATRIX BACKGROUND */}
      <MatrixRain />

      {/* YOUR CONTENT ON TOP */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* later we’ll put your navbar, “AGENT_PORTFOLIO_v2.5”, role, buttons, etc. */}
        <h1 className="text-3xl md:text-5xl font-mono">
          
        </h1>
      </section>
    </main>
  );
}

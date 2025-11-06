export default function AgentMission() {
  const MISSION_TEXT = `
  A dedicated, creative, and talented university student with hands-on experience in hackathons and tech events,committed to expanding programming skills and staying current with new technologies. Skilled in front-end development for web and mobile platforms and have a keen interest in machine learning.
  `;

  return (
    <section className="relative z-20 mt-12">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        <div className="border border-[#b4ff39] bg-black/40 max-w-3xl px-6 pr-4 py-5 md:px-8 md:pr-6 md:py-6">
          <p className="text-sm md:text-base tracking-[0.18em] mb-1 flex items-baseline">
            <span className="mr-2">{">"}</span>
            <span>MISSION_BRIEF:</span>
          </p>

          <p className="text-md md:text-base leading-relaxed whitespace-pre-line">
            {MISSION_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
}

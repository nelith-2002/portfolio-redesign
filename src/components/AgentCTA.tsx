export default function AgentCTA() {
  return (
    <section className="relative z-20 mt-10">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-4">
            {/* ACCESS PROJECTS */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 border border-[#b4ff39] bg-[#b4ff39] text-black px-6 py-3 text-xs md:text-sm uppercase tracking-[0.25em] shadow-[0_0_18px_rgba(180,255,57,0.8)] hover:bg-black hover:text-[#b4ff39] hover:shadow-[0_0_26px_rgba(180,255,57,1)] transition-colors duration-150"
            >
              <span className="text-base">{">_"}</span>
              <span>Access_Projects</span>
              <span className="ml-1 transform transition-transform duration-150 group-hover:translate-x-1">
                ➜
              </span>
            </a>

            {/* INITIATE CONTACT */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-[#b4ff39] bg-transparent text-[#b4ff39] px-6 py-3 text-xs md:text-sm uppercase tracking-[0.25em] hover:bg-[#b4ff39] hover:text-black hover:shadow-[0_0_24px_rgba(180,255,57,0.9)] transition-colors duration-150"
            >
              <span className="text-base">✉</span>
              <span>Initiate_Contact</span>
              <span className="ml-1 transform transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

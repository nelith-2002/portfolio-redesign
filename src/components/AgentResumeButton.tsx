"use client";

import { FaFileDownload } from "react-icons/fa";

export default function AgentResumeButton() {
  return (
    <section className="relative z-20 mt-12 mb-10">
      <div className="max-w-7xl mx-auto px-8 flex justify-start">
        <a
          href="/docs/resume/Nelith Nethsanda-Cover Letter.pdf" 
          download
          className="group flex items-center gap-3 border border-[#b4ff39] px-6 py-3 md:px-8 md:py-4 bg-black/40 text-[#b4ff39]
                     font-mono tracking-[0.2em] hover:bg-[#b4ff39] hover:text-black transition-all duration-200
                     shadow-[0_0_15px_rgba(180,255,57,0.4)]"
        >
          <FaFileDownload className="text-lg group-hover:animate-bounce" />
          <span className="uppercase">Download_Resume.pdf</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
            {"↘"}
          </span>
        </a>
      </div>
    </section>
  );
}

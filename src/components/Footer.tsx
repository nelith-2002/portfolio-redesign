"use client";

import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-[#b4ff39]/40 bg-black/80 text-[#b4ff39]">
      {/* subtle neon glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#b4ff39]/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-6">
        <p
          className="flex items-center gap-2 font-mono text-xs md:text-sm tracking-[0.18em] text-center 
                     text-[#b4ff39]/90 transition-all duration-300"
        >
          <span className="text-[#b4ff39]">{">"}</span>
          <FaRegCopyright className="text-[#b4ff39] text-sm" />
          2025&nbsp;Nelith_Nethsanda&nbsp;|&nbsp;ALL_RIGHTS_RESERVED
        </p>
      </div>
    </footer>
  );
}

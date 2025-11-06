"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "Projects", "Skills", "Contact"];

export default function AgentNavbar() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString("en-GB");
      const time = now.toLocaleTimeString("en-GB", { hour12: false });
      setDateTime(`${date}, ${time}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div
        className="pointer-events-auto mx-auto mt-6 max-w-7xl border px-8 py-4 flex items-center justify-between bg-black/100"
        style={{ borderColor: "#b4ff39", color: "#b4ff39" }}
      >
        {/* LEFT: Title */}
        <div className="text-sm md:text-base tracking-[0.25em] flex items-center">
          <span className="mr-3 text-lg">{">_"}</span>
          <span className="whitespace-nowrap font-semibold">
            AGENT_PORTFOLIO_v2.5
          </span>
        </div>

        {/* CENTER: Nav links */}
        <nav className="hidden md:flex items-center gap-10 text-sm md:text-base tracking-[0.2em]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="hover:bg-[#b4ff39] hover:text-black px-2 py-1 transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* RIGHT: Date + Time */}
        <div className="text-xs md:text-sm tabular-nums tracking-[0.15em] whitespace-nowrap">
          {dateTime}
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";
import TerminalWindow from "../components/TerminalWindow";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New message from ${name || "Portfolio_Visitor"}`
    );

    const bodyLines = [
      name && `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:nelithnethsanda2002@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative z-20 mt-16 mb-16">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        {/* NOTE: only path -> no separator line from TerminalWindow */}
        <TerminalWindow path="~/contact">
          {/* header lines inside the body so there is no line underneath */}
          <div className="font-mono text-xs md:text-sm tracking-[0.18em] space-y-1 mb-4">
            <p>
              <span className="mr-2">{">"}</span>
              initiate_secure_connection
            </p>
            <p className="text-[#d6ffe1]">
              Establishing encrypted channel...
            </p>
          </div>

          <div className="space-y-6">
            {/* TOP: EMAIL & LOCATION ROW */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* EMAIL BOX */}
              <div className="relative border border-[#b4ff39]/60 bg-black/60 px-4 py-3 md:px-5 md:py-4">
                {/* corner accents */}
                <span className="pointer-events-none absolute top-0 left-0 h-5 w-0.5 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute top-0 left-0 h-0.5 w-8 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute top-0 right-0 h-6 w-0.5 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute top-0 right-0 h-0.5 w-8 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-0.5 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-8 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-0.5 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute bottom-0 right-0 h-0.5 w-8 bg-[#b4ff39]" />

                <p className="font-mono text-xs md:text-sm tracking-[0.18em] mb-1">
                  <span className="mr-2">{">"}</span>
                  EMAIL_ADDRESS:
                </p>
                <p className="font-mono text-xs md:text-sm tracking-[0.12em] text-[#d6ffe1] break-all">
                  nelithnethsanda2002@gmail.com
                </p>
              </div>

              {/* LOCATION BOX */}
              <div className="relative border border-[#b4ff39]/60 bg-black/60 px-4 py-3 md:px-5 md:py-4">
                {/* corner accents */}
                <span className="pointer-events-none absolute top-0 left-0 h-5 w-0.5 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute top-0 left-0 h-0.5 w-8 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute top-0 right-0 h-5 w-0.5 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute top-0 right-0 h-0.5 w-8 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-0.5 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-8 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-0.5 bg-[#b4ff39]" />
                <span className="pointer-events-none absolute bottom-0 right-0 h-0.5 w-8 bg-[#b4ff39]" />

                <p className="font-mono text-xs md:text-sm tracking-[0.18em] mb-1">
                  <span className="mr-2">{">"}</span>
                  LOCATION:
                </p>
                <p className="font-mono text-xs md:text-sm tracking-[0.12em] text-[#d6ffe1]">
                  Colombo_SriLanka
                </p>
              </div>
            </div>

            {/* QUICK MESSAGE PROTOCOL BLOCK */}
            <div className="border border-[#b4ff39]/60 bg-black/60 px-4 py-4 md:px-5 md:py-5">
              {/* Section title */}
              <p className="font-mono text-xs md:text-sm tracking-[0.18em] mb-4">
                <span className="mr-2">{">"}</span>
                QUICK_MESSAGE_PROTOCOL:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME FIELD */}
                <div className="space-y-1">
                  <p className="font-mono text-[0.7rem] md:text-xs tracking-[0.18em]">
                    <span className="mr-2">{">"}</span>
                    Your_Name:
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter designation..."
                    className="w-full border border-[#b4ff39]/60 bg-black/80 px-3 py-2 text-sm text-[#b4ff39] font-mono tracking-[0.18em] outline-none placeholder:text-[#b4ff39]/40 focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39]"
                  />
                </div>

                {/* EMAIL FIELD (REQUIRED) */}
                <div className="space-y-1">
                  <p className="font-mono text-[0.7rem] md:text-xs tracking-[0.18em]">
                    <span className="mr-2">{">"}</span>
                    Email_Address:
                  </p>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter contact protocol..."
                    className="w-full border border-[#b4ff39]/60 bg-black/80 px-3 py-2 text-sm text-[#b4ff39] font-mono tracking-[0.18em] outline-none placeholder:text-[#b4ff39]/40 focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39]"
                  />
                </div>

                {/* PHONE FIELD (OPTIONAL) */}
                <div className="space-y-1">
                  <p className="font-mono text-[0.7rem] md:text-xs tracking-[0.18em]">
                    <span className="mr-2">{">"}</span>
                    Phone_Number (optional):
                  </p>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter secure line..."
                    className="w-full border border-[#b4ff39]/60 bg-black/80 px-3 py-2 text-sm text-[#b4ff39] font-mono tracking-[0.18em] outline-none placeholder:text-[#b4ff39]/40 focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39]"
                  />
                </div>

                {/* MESSAGE FIELD */}
                <div className="space-y-1">
                  <p className="font-mono text-[0.7rem] md:text-xs tracking-[0.18em]">
                    <span className="mr-2">{">"}</span>
                    Message_Content:
                  </p>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter encrypted message..."
                    rows={5}
                    className="w-full border border-[#b4ff39]/60 bg-black/80 px-3 py-2 text-sm text-[#b4ff39] font-mono tracking-[0.18em] outline-none placeholder:text-[#b4ff39]/40 focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39] resize-none"
                  />
                </div>

                {/* TRANSMIT BUTTON – FULL WIDTH NEON STRIP */}
                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center gap-3 border border-[#b4ff39] bg-[#b4ff39] py-2.5 
                             font-mono text-xs md:text-sm tracking-[0.22em] text-black 
                             transition-all duration-300 ease-in-out
                             hover:bg-transparent hover:text-[#b4ff39] 
                             active:scale-[0.98] group"
                >
                  <FaPaperPlane className="text-sm transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                  TRANSMIT_MESSAGE
                </button>
              </form>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

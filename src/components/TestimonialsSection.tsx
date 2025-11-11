"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import TerminalWindow from "../components/TerminalWindow"; // ✅ adjust path if needed

type StaticTestimonial = {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatar: string;
  message: string;
};

const TESTIMONIALS: StaticTestimonial[] = [
  {
    id: "sarah",
    name: "Sarah Chen",
    handle: "Sarah_Chen",
    role: "CTO_at_TechCorp",
    avatar: "/images/testimonials/sarah.jpg", // make sure this file exists
    message:
      "Exceptional mobile developer. Built our flagship app with React Native – performance is outstanding.",
  },
  {
    id: "mike",
    name: "Mike Johnson",
    handle: "Mike_Johnson",
    role: "Product_Manager",
    avatar: "/images/testimonial.jpg",
    message:
      "Delivered a complex Flutter application ahead of schedule. Great communication and technical skills.",
  },
  {
    id: "lisa",
    name: "Lisa Park",
    handle: "Lisa_Park",
    role: "Engineering_Lead",
    avatar: "/images/testimonials/lisa.jpg",
    message:
      "One of the best full-stack developers I’ve worked with. Expertise in both mobile and backend.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-20 mt-20 mb-24">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        {/* TERMINAL HEADER (reusing your component) */}
        <TerminalWindow
          path="~/testimonials"
          command="fetch_client_reviews --verified"
          status="Displaying encrypted testimonials..."
        />

        {/* TESTIMONIAL CARDS */}
        <div className="mt-8 grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="relative flex flex-col justify-between border border-[#b4ff39]/50 bg-black/80 px-6 py-6 md:px-8 md:py-8 text-[#b4ff39] shadow-[0_0_18px_rgba(0,0,0,0.9)] hover:shadow-[0_0_24px_rgba(180,255,57,0.45)] transition-shadow duration-200"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1 text-[#b4ff39]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              {/* Message */}
              <p className="mb-8 text-sm md:text-base text-[#d6ffe1] leading-relaxed">
                &quot;{t.message}&quot;
              </p>

              {/* FOOTER */}
              <div className="mt-auto pt-6 border-t border-[#b4ff39]/30 flex items-center gap-4">
                {/* Avatar with neon frame */}
                <div className="relative h-20 w-20">
                  {/* corners */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#b4ff39]" />
                    <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-[#b4ff39]" />
                    <div className="absolute left-0 bottom-0 h-3 w-3 border-l-2 border-b-2 border-[#b4ff39]" />
                    <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-[#b4ff39]" />
                  </div>

                  {/* circular avatar */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border border-[#b4ff39]/80 bg-black">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name + role + dots */}
                <div>
                  <p className="font-semibold tracking-[0.16em]">{t.handle}</p>
                  <p className="text-xs text-[#d6ffe1]/85 tracking-[0.18em] mt-1">
                    {t.role}
                  </p>
                  <div className="mt-2 flex gap-1 text-[0.55rem] text-[#b4ff39]">
                    <span>•••••••</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

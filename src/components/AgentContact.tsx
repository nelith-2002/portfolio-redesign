import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function AgentContact() {
  return (
    <section className="relative z-20 mt-8 mb-16">
      <div className="max-w-7xl mx-auto px-8 text-[#b4ff39]">
        <div className="flex gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/nelith-2002"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center border border-[#b4ff39] bg-black/40 hover:bg-[#b4ff39] hover:text-black transition-all duration-200 hover:shadow-[0_0_18px_rgba(180,255,57,0.8)]"
          >
            <FaGithub className="text-2xl transform group-hover:scale-110 transition-transform duration-150" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nelith-nethsanda/"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center border border-[#b4ff39] bg-black/40 hover:bg-[#b4ff39] hover:text-black transition-all duration-200 hover:shadow-[0_0_18px_rgba(180,255,57,0.8)]"
          >
            <FaLinkedinIn className="text-2xl transform group-hover:scale-110 transition-transform duration-150" />
          </a>

          {/* Email */}
          <a
            href="mailto:nelithnethsanda2002@gmail.com"
            className="group flex h-12 w-12 items-center justify-center border border-[#b4ff39] bg-black/40 hover:bg-[#b4ff39] hover:text-black transition-all duration-200 hover:shadow-[0_0_18px_rgba(180,255,57,0.8)]"
          >
            <FaEnvelope className="text-2xl transform group-hover:scale-110 transition-transform duration-150" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/nelith_woof/"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center border border-[#b4ff39] bg-black/40 hover:bg-[#b4ff39] hover:text-black transition-all duration-200 hover:shadow-[0_0_18px_rgba(180,255,57,0.8)]"
          >
            <FaInstagram className="text-2xl transform group-hover:scale-110 transition-transform duration-150" />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/nelith_nethsanda"
            target="_blank"
            rel="noreferrer"
            className="group flex h-12 w-12 items-center justify-center border border-[#b4ff39] bg-black/40 hover:bg-[#b4ff39] hover:text-black transition-all duration-200 hover:shadow-[0_0_18px_rgba(180,255,57,0.8)]"
          >
            <FaXTwitter className="text-2xl transform group-hover:scale-110 transition-transform duration-150" />
          </a>

        </div>
      </div>
    </section>
  );
}

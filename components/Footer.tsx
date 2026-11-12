"use client";

import React, { useState, useEffect } from "react";
import TransitionLink from "./transitions/TransitionLink";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { usePathname } from "next/navigation";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  handle: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/TuathaDeLugh",
    label: "GitHub",
    icon: <AiFillGithub size={18} />,
    handle: "@TuathaDeLugh",
  },
  {
    href: "https://www.linkedin.com/in/umangsailor/",
    label: "LinkedIn",
    icon: <AiFillLinkedin size={18} />,
    handle: "/in/umangsailor",
  },
  {
    href: "https://api.whatsapp.com/send?phone=919998558554",
    label: "WhatsApp",
    icon: <AiOutlineWhatsApp size={18} />,
    handle: "+91 99985 58554",
  },
  {
    href: "mailto:contact@umangsailor.com",
    label: "Email",
    icon: <HiOutlineMail size={18} />,
    handle: "contact@umangsailor.com",
  },
];

const navLinks = [
  { label: "Index", href: "/" },
  { label: "Selected Works", href: "/project" },
  { label: "About & Engineering", href: "/about" },
  { label: "Contact Channel", href: "/contact" },
];

const Footer: React.FC = () => {
  const path = usePathname();
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (path === "/login") return null;

  return (
    <footer className="relative bg-carbon border-hairline-t text-pearl overflow-hidden">
      {/* Subtle telemetry architectural grid background */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />

      {/* Radial soft champagne ambiance in corner */}
      <div className="pointer-events-none absolute -bottom-32 right-0 w-80 h-80 rounded-full bg-[#CAAD8E]/[0.05] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plate border border-[#CAAD8E]/20 text-[#CAAD8E] font-mono text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#CAAD8E] animate-pulse" />
              <span>Available for High-Impact Software Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-pearl leading-tight">
              Ready to engineer systems that combine performance with craft.
            </h2>

            <p className="text-pearl-muted text-base max-w-xl leading-relaxed">
              Based in Surat, India — open to global remote engineering roles,
              frontend architecture contracts, and full-stack product builds.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:contact@umangsailor.com"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#CAAD8E] text-[#14100E] font-extrabold text-sm hover:bg-[#EBE3DA] transition-all btn-press shadow-xl shadow-[#CAAD8E]/15"
              >
                <span>Initiate Contact</span>
                <HiArrowUpRight size={18} />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-plate border border-[#CAAD8E]/20 text-pearl hover:border-[#CAAD8E]/50 text-sm font-medium transition-all btn-press"
              >
                <span>Curriculum Vitae</span>
                <HiArrowUpRight size={16} className="text-[#CAAD8E]" />
              </a>
            </div>
          </div>

          {/* Right Telemetry & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pl-10 lg:border-l lg:border-white/[0.08]">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-pearl-dim">
                Studio Coordinates & Telemetry
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 rounded-2xl bg-plate/60 border border-white/5">
                  <div className="text-[11px] font-mono text-pearl-dim">LOCAL TIME</div>
                  <div className="text-xl font-mono font-bold text-pearl mt-1">
                    {localTime || "12:00:00"}
                  </div>
                  <div className="text-[10px] font-mono text-[#CAAD8E] mt-0.5">
                    IST (UTC+05:30)
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-plate/60 border border-white/5">
                  <div className="text-[11px] font-mono text-pearl-dim">LOCATION</div>
                  <div className="text-sm font-bold text-pearl mt-1 truncate">
                    Surat, Gujarat
                  </div>
                  <div className="text-[10px] font-mono text-pearl-dim mt-0.5">
                    21.2250° N, 72.7795° E
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles list */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-pearl-dim mb-3">
                Direct Channels
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-plate/40 hover:bg-plate border border-white/5 hover:border-[#CAAD8E]/30 text-pearl-muted hover:text-pearl transition-all text-xs font-mono group btn-press"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#CAAD8E]">{s.icon}</span>
                      <span>{s.label}</span>
                    </div>
                    <HiArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#CAAD8E]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-pearl-dim font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CAAD8E]" />
            <span>
              Umang Sailor · Engineered with Next.js 16, React 19 &amp; GSAP
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navLinks.map((item) => (
              <TransitionLink
                key={item.label}
                href={item.href}
                className="hover:text-[#CAAD8E] transition-colors"
              >
                {item.label}
              </TransitionLink>
            ))}
          </div>

          <div>&copy; {new Date().getFullYear()} All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

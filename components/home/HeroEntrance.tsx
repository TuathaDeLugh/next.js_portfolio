"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TransitionLink from "../transitions/TransitionLink";
import MagneticButton from "../creative/MagneticButton";
import CopyEmailButton from "./CopyEmailButton";
import HeroInteractiveConsole from "./HeroInteractiveConsole";
import StatCounter from "./StatCounter";
import { HiArrowUpRight } from "react-icons/hi2";

export const HeroEntrance: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const consoleWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 1. Status Pill Entrance
      tl.from(".hero-status-pill", {
        scale: 0.95,
        opacity: 0,
        y: -6,
        duration: 0.3,
      });

      // 2. Headline Words Stagger
      tl.from(
        ".hero-word",
        {
          y: 20,
          opacity: 0,
          duration: 0.35,
          stagger: 0.02,
        },
        "-=0.15"
      );

      // 3. Bio Paragraph
      tl.from(
        ".hero-bio",
        {
          y: 15,
          opacity: 0,
          duration: 0.3,
        },
        "-=0.2"
      );

      // 4. CTAs
      tl.from(
        ".hero-cta-btn",
        {
          y: 15,
          opacity: 0,
          duration: 0.3,
          stagger: 0.04,
        },
        "-=0.2"
      );

      // 5. Metrics Band
      tl.from(
        ".hero-metrics-band",
        {
          y: 15,
          opacity: 0,
          duration: 0.3,
        },
        "-=0.15"
      );

      // 6. Right Console Instrument Entrance
      if (consoleWrapperRef.current) {
        tl.from(
          consoleWrapperRef.current,
          {
            x: 20,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.3"
        );
      }
    }, containerRef.current);

    // Subtle 3D perspective mouse tilt on console
    const handleMouseMove = (e: MouseEvent) => {
      if (!consoleWrapperRef.current) return;
      const rect = consoleWrapperRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(consoleWrapperRef.current, {
        rotateY: Math.max(-10, Math.min(10, x * 0.02)),
        rotateX: Math.max(-10, Math.min(10, -y * 0.02)),
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      if (!consoleWrapperRef.current) return;
      gsap.to(consoleWrapperRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const headline = "Engineering resilient web systems with kinetic soul.";
  const words = headline.split(" ");

  return (
    <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Editorial & Narrative Typography */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Status and Telemetry Pill */}
          <div className="hero-status-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate/90 border border-[#CAAD8E]/20 text-pearl font-mono text-xs shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CAAD8E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CAAD8E]"></span>
            </span>
            <span className="text-pearl-muted text-[11px] sm:text-xs">
              Creative Full-Stack Engineer · Surat, India
            </span>
          </div>

          {/* Confident, Oversized Editorial Headline with kinetic word reveal */}
          <div className="space-y-2 sm:space-y-3 overflow-hidden">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.4rem] font-extrabold tracking-tight text-pearl leading-[1.08]">
              {words.map((word, idx) => {
                const isHighlight = word.toLowerCase().includes("kinetic") || word.toLowerCase().includes("soul");
                return (
                  <span
                    key={idx}
                    className={`hero-word inline-block mr-[0.25em] ${
                      isHighlight
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#CAAD8E] via-[#EBE3DA] to-[#F1EDE7]"
                        : "text-pearl"
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>
          </div>

          {/* Positioning paragraph */}
          <p className="hero-bio text-pearl-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
            I&apos;m <span className="text-pearl font-semibold">Umang Sailor</span>.
            I build award-worthy web applications — bridging high-concurrency
            React 19 &amp; Next.js 16 frontends with distributed Node.js,
            Nest.js, PostgreSQL, and MongoDB architectures.
          </p>

          {/* Spacious, Uncrowded CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="hero-cta-btn">
                <MagneticButton cursorText="EXPLORE">
                  <TransitionLink
                    href="#works"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#CAAD8E] text-[#14100E] font-extrabold text-xs sm:text-sm hover:bg-[#EBE3DA] transition-all btn-press shadow-xl shadow-[#CAAD8E]/20 whitespace-nowrap"
                  >
                    <span>Explore Flagship Works</span>
                    <HiArrowUpRight size={16} />
                  </TransitionLink>
                </MagneticButton>
              </div>

              <div className="hero-cta-btn">
                <MagneticButton cursorText="DOSSIER">
                  <a
                    href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3A2E29]/80 hover:bg-[#3A2E29] border border-[#CAAD8E]/30 text-[#F1EDE7] text-xs sm:text-sm font-medium transition-all btn-press shadow-lg whitespace-nowrap"
                  >
                    <span>Curriculum Vitae</span>
                    <HiArrowUpRight size={15} className="text-[#CAAD8E]" />
                  </a>
                </MagneticButton>
              </div>

              <div className="hero-cta-btn">
                <CopyEmailButton />
              </div>
            </div>
          </div>

          {/* Engineering Metrics Band with ample spacing and no text truncation */}
          <div className="hero-metrics-band flex items-center gap-8 sm:gap-14 pt-8 border-t border-[#CAAD8E]/15 w-full max-w-xl">
            <StatCounter
              value={3}
              suffix="+"
              label="Years Experience"
              className="p-0 bg-transparent border-0 min-w-0"
              numberClassName="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-pearl"
              labelClassName="text-xs font-mono text-[#A58376] mt-1 whitespace-nowrap"
            />

            <div className="w-px h-10 bg-[#CAAD8E]/15" />

            <StatCounter
              value={15}
              suffix="+"
              label="Shipped Systems"
              className="p-0 bg-transparent border-0 min-w-0"
              numberClassName="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-[#CAAD8E]"
              labelClassName="text-xs font-mono text-[#A58376] mt-1 whitespace-nowrap"
            />

            <div className="w-px h-10 bg-[#CAAD8E]/15" />

            <StatCounter
              value={60}
              suffix=" FPS"
              label="Frame Budget"
              className="p-0 bg-transparent border-0 min-w-0"
              numberClassName="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-[#D1C8BD]"
              labelClassName="text-xs font-mono text-[#A58376] mt-1 whitespace-nowrap"
            />
          </div>
        </div>

        {/* Right: Live Telemetry Workstation Instrument with 3D tilt */}
        <div ref={consoleWrapperRef} className="lg:col-span-5" style={{ transformStyle: "preserve-3d" }}>
          <HeroInteractiveConsole />
        </div>
      </div>
    </div>
  );
};

export default HeroEntrance;

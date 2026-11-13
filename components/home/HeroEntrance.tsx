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
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Status Pill Entrance
      tl.fromTo(
        ".hero-status-pill",
        { scale: 0.92, opacity: 0, y: -12 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6 }
      );

      // 2. Headline Words Stagger
      tl.fromTo(
        ".hero-word",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.035,
          ease: "power4.out",
        },
        "-=0.3"
      );

      // 3. Bio Paragraph Reveal
      tl.fromTo(
        ".hero-bio",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.35"
      );

      // 4. CTAs Cascade
      tl.fromTo(
        ".hero-cta-btn",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.07,
        },
        "-=0.3"
      );

      // 5. Metrics Band
      tl.fromTo(
        ".hero-metrics-band",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.25"
      );

      // 6. Right Console Instrument Entrance
      if (consoleWrapperRef.current) {
        tl.fromTo(
          consoleWrapperRef.current,
          { x: 30, opacity: 0, scale: 0.96 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

        // Subtle ambient floating breathing motion
        gsap.to(consoleWrapperRef.current, {
          y: -6,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef.current);

    // 3D perspective mouse tilt on console
    const handleMouseMove = (e: MouseEvent) => {
      if (!consoleWrapperRef.current) return;
      const rect = consoleWrapperRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(consoleWrapperRef.current, {
        rotateY: Math.max(-8, Math.min(8, x * 0.02)),
        rotateX: Math.max(-8, Math.min(8, -y * 0.02)),
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      if (!consoleWrapperRef.current) return;
      gsap.to(consoleWrapperRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
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

  const headline = "Architecting resilient digital systems with cinematic craft.";
  const words = headline.split(" ");

  return (
    <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Editorial & Narrative Typography */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Status and Telemetry Pill */}
          <div className="hero-status-pill inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-plate/90 border border-luxury-gold/25 text-pearl font-mono text-xs shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-pearl-muted text-[11px] sm:text-xs tracking-wide">
              Senior Full-Stack Architect &amp; Design Engineer · Surat, India
            </span>
          </div>

          {/* Confident, Oversized Editorial Headline */}
          <div className="space-y-2 sm:space-y-3 overflow-hidden">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-pearl leading-[1.08]">
              {words.map((word, idx) => (
                <span
                  key={idx}
                  className="hero-word inline-block mr-[0.25em]"
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          {/* Positioning paragraph */}
          <p className="hero-bio text-pearl-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
            I&apos;m <span className="text-pearl font-semibold">Umang Sailor</span>.
            I architect high-performance distributed systems and cinematic web applications
            — unifying React 19 &amp; Next.js 16 frontends with distributed Node.js,
            Nest.js, PostgreSQL, and event-driven backends, enriched with
            hardware-accelerated, zero-layout-shift GSAP motion choreography. This atelier is built
            to demonstrate architectural depth, systems rigor, and software craft.
          </p>

          {/* Spacious, Uncrowded CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="hero-cta-btn">
                <MagneticButton cursorText="EXPLORE">
                  <TransitionLink
                    href="#works"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-bold text-xs sm:text-sm hover:brightness-110 transition-all btn-press shadow-xl shadow-luxury-gold/20 whitespace-nowrap"
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
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-plate/90 hover:bg-plate-elevated border border-luxury-gold/30 text-pearl text-xs sm:text-sm font-medium transition-all btn-press shadow-lg hover:border-luxury-gold/60 whitespace-nowrap"
                  >
                    <span>Curriculum Vitae</span>
                    <HiArrowUpRight size={15} className="text-luxury-gold" />
                  </a>
                </MagneticButton>
              </div>

              <div className="hero-cta-btn">
                <CopyEmailButton />
              </div>
            </div>
          </div>

          {/* Engineering Metrics Band */}
          <div className="hero-metrics-band flex items-center gap-6 sm:gap-12 pt-8 border-t border-plate-border w-full max-w-xl">
            <StatCounter
              value={3}
              suffix="+"
              label="Years Experience"
              className="p-0 bg-transparent border-0 min-w-0"
              numberClassName="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-pearl"
              labelClassName="text-xs font-mono text-pearl-dim mt-1 whitespace-nowrap"
            />

            <div className="w-px h-10 bg-plate-border" />

            <StatCounter
              value={15}
              suffix="+"
              label="Production Systems"
              className="p-0 bg-transparent border-0 min-w-0"
              numberClassName="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-luxury-gold"
              labelClassName="text-xs font-mono text-pearl-dim mt-1 whitespace-nowrap"
            />

            <div className="w-px h-10 bg-plate-border" />

            <StatCounter
              value={100}
              suffix="%"
              label="Strict Type Safety"
              className="p-0 bg-transparent border-0 min-w-0"
              numberClassName="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-pearl"
              labelClassName="text-xs font-mono text-pearl-dim mt-1 whitespace-nowrap"
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

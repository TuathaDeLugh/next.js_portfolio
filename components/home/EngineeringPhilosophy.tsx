"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IStandard } from "@/types";
import { playHover } from "../creative/SoundEffects";

interface Props {
  standards: IStandard[];
}

export const EngineeringPhilosophy: React.FC<Props> = ({ standards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".philosophy-header-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Staggered cards entrance
      gsap.fromTo(
        ".philosophy-card-item",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const handleCardMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement
  ) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.25,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleCardMouseLeave = (card: HTMLDivElement) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-carbon border-hairline-t overflow-hidden"
    >
      {/* Telemetry background grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 space-y-4 philosophy-header-anim">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-[#CAAD8E]/20 text-[#CAAD8E] font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E]" />
              <span>Architectural Principles &amp; Engineering Standards</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
              Software built with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CAAD8E] via-[#EBE3DA] to-pearl">
                mathematical rigor and tactile soul.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end philosophy-header-anim">
            <p className="text-pearl-muted text-base leading-relaxed">
              Great software isn&apos;t just code that passes tests — it&apos;s
              architecture that endures, interactions that delight without
              sluggishness, and reliable engineering foundations that teams can
              trust.
            </p>
          </div>
        </div>

        {/* 6-Card Architecture Matrix with interactive 3D tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {standards.map((item, idx) => (
            <div
              key={item._id || item.title}
              onMouseEnter={playHover}
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
              className="philosophy-card-item p-8 rounded-3xl bg-plate/60 hover:bg-plate border border-[#CAAD8E]/15 hover:border-[#CAAD8E]/40 transition-colors duration-300 group shadow-lg flex flex-col justify-between"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#CAAD8E] px-2.5 py-1 rounded bg-obsidian border border-[#CAAD8E]/20">
                    RULE // {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#CAAD8E] transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-pearl mb-3 group-hover:text-[#CAAD8E] transition-colors">
                  {item.title}
                </h3>

                <p className="text-pearl-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.04] font-mono text-[11px] text-pearl-dim group-hover:text-[#CAAD8E] transition-colors">
                PRODUCTION VALIDATED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IExperience } from "@/types";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi2";
import { playHover } from "./SoundEffects";

interface Props {
  experiences: IExperience[];
}

export const ExperienceScrollTimeline: React.FC<Props> = ({ experiences }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const line = lineRef.current;
    const container = containerRef.current;
    if (!line || !container) return;

    const ctx = gsap.context(() => {
      // 1. Dynamic Scroll-Linked Golden Thread scrubbing line
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "bottom 70%",
            scrub: 0.4,
          },
        }
      );

      // 2. Individual Timeline Nodes illumination on scroll
      const nodes = container.querySelectorAll(".timeline-node");
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          {
            scale: 0.85,
            borderColor: "var(--border-subtle)",
            boxShadow: "0 0 0px var(--glow-primary)",
          },
          {
            scale: 1.2,
            borderColor: "var(--luxury-gold)",
            boxShadow: "0 0 16px var(--glow-gold)",
            duration: 0.35,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 72%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // 3. Staggered Entrance of experience cards
      const cards = container.querySelectorAll(".timeline-card-item");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [experiences]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-28 bg-carbon border-hairline-t overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              <span>Career Trajectory · Proven Ownership</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
              Engineering experience &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-cream via-luxury-gold to-luxury-champagne">
                commercial track record.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-pearl-muted text-base leading-relaxed">
              Real systems engineering responsibility — architecting high-throughput
              distributed services, leading enterprise frontend systems with sub-16ms
              frame budgets, and owning mission-critical features from architectural
              blueprint to production deployment.
            </p>
          </div>
        </div>

        {/* Timeline Container with centered spine geometry */}
        <div className="relative space-y-10 sm:space-y-14">
          {/* Static background timeline rail */}
          <div className="absolute left-4 sm:left-5 top-10 bottom-12 w-[2px] bg-luxury-gold/15 -translate-x-1/2 pointer-events-none" />

          {/* Dynamic glowing gold beam scrubbed by GSAP */}
          <div
            ref={lineRef}
            className="absolute left-4 sm:left-5 top-10 bottom-12 w-[2px] bg-gradient-to-b from-luxury-champagne via-luxury-gold to-luxury-cream -translate-x-1/2 origin-top shadow-[0_0_15px_var(--glow-primary)] pointer-events-none"
            style={{ willChange: "transform" }}
          />

          {experiences.map((exp) => {
            const isCurrent =
              (exp.duration?.end || "").toLowerCase() === "present";

            return (
              <div
                key={exp._id}
                className="timeline-item relative flex items-start gap-3 sm:gap-8 group"
              >
                {/* Dedicated Spine Column */}
                <div className="flex-shrink-0 w-8 sm:w-10 flex items-center justify-center pt-8 sm:pt-10 z-10">
                  <div className="timeline-node relative w-5 h-5 rounded-full bg-obsidian border-2 border-luxury-gold flex items-center justify-center shadow-[0_0_10px_var(--glow-primary)] transition-all duration-300">
                    {isCurrent && (
                      <span className="animate-ping absolute inset-0 rounded-full bg-luxury-gold opacity-60" />
                    )}
                    <span className="w-2 h-2 rounded-full bg-luxury-gold" />
                  </div>
                </div>

                {/* Experience Card */}
                <div
                  onMouseEnter={playHover}
                  className="timeline-card-item flex-1 relative p-6 sm:p-10 rounded-3xl bg-plate/90 hover:bg-plate border border-luxury-gold/15 hover:border-luxury-gold/50 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Left Column: Organization & Role */}
                    <div className="space-y-3 lg:max-w-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-obsidian border border-luxury-gold/20 text-luxury-gold flex items-center justify-center">
                          <HiOutlineBriefcase size={20} />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-pearl-dim uppercase">
                            {exp.address || "Surat, Gujarat, India"}
                          </div>
                          <h3 className="text-2xl font-bold text-pearl group-hover:text-luxury-gold transition-colors">
                            {exp.orgName}
                          </h3>
                        </div>
                      </div>

                      <div className="inline-block px-3 py-1 rounded-full bg-obsidian border border-luxury-gold/25 text-xs font-mono font-bold text-luxury-gold">
                        {exp.position}
                      </div>
                    </div>

                    {/* Right Column: Duration & Description */}
                    <div className="flex-1 lg:max-w-xl space-y-4">
                      <div className="flex items-center justify-between sm:justify-end gap-3 font-mono text-xs">
                        {isCurrent && (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-ping" />
                            <span>Active Commercial Role</span>
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full bg-obsidian border border-luxury-gold/15 text-pearl-muted">
                          {exp.duration?.start} — {exp.duration?.end || "Present"}
                        </span>
                      </div>

                      <p className="text-pearl-muted text-sm sm:text-base leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Academic Background Node with matching spine alignment */}
          <div className="timeline-item relative flex items-start gap-3 sm:gap-8 group">
            {/* Dedicated Spine Column */}
            <div className="flex-shrink-0 w-8 sm:w-10 flex items-center justify-center pt-8 sm:pt-10 z-10">
              <div className="timeline-node relative w-5 h-5 rounded-full bg-obsidian border-2 border-luxury-gold flex items-center justify-center shadow-[0_0_10px_var(--glow-primary)] transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-luxury-gold" />
              </div>
            </div>

            {/* Academic Card */}
            <div className="timeline-card-item flex-1 relative p-6 sm:p-10 rounded-3xl bg-plate/60 border border-luxury-gold/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-obsidian border border-luxury-gold/20 text-luxury-gold flex items-center justify-center">
                  <HiOutlineAcademicCap size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pearl">
                    Information Technology Engineering Foundation
                  </h3>
                  <span className="font-mono text-xs text-pearl-dim">
                    Formal Technical Education
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-obsidian/70 border border-luxury-gold/10 font-mono text-xs space-y-1">
                  <div className="text-pearl font-bold text-sm">
                    Diploma in Information Technology
                  </div>
                  <div className="text-pearl-dim">
                    Government Polytechnic College, Surat
                  </div>
                  <div className="text-luxury-gold font-bold">
                    CGPA: 8.35 / 10.0
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-obsidian/70 border border-luxury-gold/10 font-mono text-xs space-y-1">
                  <div className="text-pearl font-bold text-sm">
                    Secondary School Certificate (10th GSEB)
                  </div>
                  <div className="text-pearl-dim">
                    Gujarat Secondary Education Board
                  </div>
                  <div className="text-luxury-gold font-bold">Score: 89.80%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceScrollTimeline;

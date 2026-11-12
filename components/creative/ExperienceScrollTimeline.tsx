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
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-28 bg-carbon border-hairline-t overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-[#CAAD8E]/20 text-[#CAAD8E] font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E] animate-pulse" />
              <span>Career Trajectory · Proven Ownership</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
              Engineering experience &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CAAD8E] via-[#EBE3DA] to-pearl">
                commercial track record.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-pearl-muted text-base leading-relaxed">
              Real commercial responsibility — delivering responsive client
              portals, designing robust backends, and taking complete features
              from Figma specifications all the way to production deployment.
            </p>
          </div>
        </div>

        {/* Timeline Container with animated beam */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          {/* Static background track */}
          <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-white/10 -translate-x-1/2" />

          {/* Dynamic glowing beam */}
          <div
            ref={lineRef}
            className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#A58376] via-[#CAAD8E] to-[#A58376] -translate-x-1/2 origin-top shadow-lg shadow-[#CAAD8E]/40"
            style={{ willChange: "transform" }}
          />

          {experiences.map((exp, idx) => {
            const isCurrent =
              (exp.duration?.end || "").toLowerCase() === "present";

            return (
              <div
                key={exp._id}
                onMouseEnter={playHover}
                className="group relative p-6 sm:p-10 rounded-3xl bg-plate/80 hover:bg-plate border border-[#CAAD8E]/15 hover:border-[#CAAD8E]/40 transition-all duration-300 shadow-xl"
              >
                {/* Node pin on the timeline */}
                <div className="absolute -left-[30px] sm:-left-[46px] top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-obsidian border-2 border-[#CAAD8E] flex items-center justify-center shadow-md shadow-[#CAAD8E]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E]" />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Column: Organization & Role */}
                  <div className="space-y-3 lg:max-w-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-obsidian border border-[#CAAD8E]/20 text-[#CAAD8E] flex items-center justify-center">
                        <HiOutlineBriefcase size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-pearl-dim uppercase">
                          {exp.address || "Surat, Gujarat, India"}
                        </div>
                        <h3 className="text-2xl font-bold text-pearl group-hover:text-[#CAAD8E] transition-colors">
                          {exp.orgName}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-obsidian border border-[#CAAD8E]/20 text-xs font-mono font-bold text-[#CAAD8E]">
                      {exp.position}
                    </div>
                  </div>

                  {/* Right Column: Duration & Description */}
                  <div className="flex-1 lg:max-w-xl space-y-4">
                    <div className="flex items-center justify-between sm:justify-end gap-3 font-mono text-xs">
                      {isCurrent && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CAAD8E]/10 border border-[#CAAD8E]/30 text-[#CAAD8E] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E] animate-ping" />
                          <span>Active Commercial Role</span>
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-obsidian border border-white/10 text-pearl-muted">
                        {exp.duration?.start} — {exp.duration?.end || "Present"}
                      </span>
                    </div>

                    <p className="text-pearl-muted text-sm sm:text-base leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Academic Background Node */}
          <div className="group relative p-6 sm:p-10 rounded-3xl bg-plate/50 border border-white/5 space-y-4">
            <div className="absolute -left-[30px] sm:-left-[46px] top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-obsidian border-2 border-[#CAAD8E] flex items-center justify-center shadow-md shadow-[#CAAD8E]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E]" />
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-obsidian border border-[#CAAD8E]/20 text-[#CAAD8E] flex items-center justify-center">
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
              <div className="p-4 rounded-2xl bg-obsidian/60 border border-white/5 font-mono text-xs space-y-1">
                <div className="text-pearl font-bold text-sm">
                  Diploma in Information Technology
                </div>
                <div className="text-pearl-dim">
                  Government Polytechnic College, Surat
                </div>
                <div className="text-[#CAAD8E] font-bold">
                  CGPA: 8.35 / 10.0
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-obsidian/60 border border-white/5 font-mono text-xs space-y-1">
                <div className="text-pearl font-bold text-sm">
                  Secondary School Certificate (10th GSEB)
                </div>
                <div className="text-pearl-dim">
                  Gujarat Secondary Education Board
                </div>
                <div className="text-[#CAAD8E] font-bold">Score: 89.80%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceScrollTimeline;

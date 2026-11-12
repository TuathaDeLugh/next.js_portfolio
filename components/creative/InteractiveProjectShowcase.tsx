"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IProject } from "@/types";
import TransitionLink from "../transitions/TransitionLink";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { truncateText } from "@/lib/text";
import { playHover, playClick } from "./SoundEffects";

interface Props {
  projects: IProject[];
  hideHeader?: boolean;
}

export const InteractiveProjectShowcase: React.FC<Props> = ({
  projects,
  hideHeader = false,
}) => {
  const [viewMode, setViewMode] = useState<"float" | "cards">("float");
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  // Floating preview container refs
  const previewModalRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Strictly non-archived projects
  const activeProjects = projects.filter((p) => !p.archived);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-row-item",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [viewMode]);

  // GSAP 60fps mouse follow for floating preview
  useEffect(() => {
    if (viewMode !== "float" || typeof window === "undefined") return;

    const modal = previewModalRef.current;
    if (!modal) return;

    let xTo = gsap.quickTo(modal, "x", { duration: 0.45, ease: "power3.out" });
    let yTo = gsap.quickTo(modal, "y", { duration: 0.45, ease: "power3.out" });

    let lastX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      // Subtle tilt based on horizontal velocity
      const velocityX = (e.clientX - lastX) * 0.15;
      lastX = e.clientX;
      gsap.to(modal, {
        rotation: Math.max(-12, Math.min(12, velocityX)),
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [viewMode]);

  const handleRowEnter = (index: number) => {
    setActiveProjectIndex(index);
    playHover();

    if (previewModalRef.current) {
      gsap.to(previewModalRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    }
  };

  const handleRowLeave = () => {
    setActiveProjectIndex(null);
    if (previewModalRef.current) {
      gsap.to(previewModalRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
      });
    }
  };

  const handleCardMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement
  ) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
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

  const activeProject =
    activeProjectIndex !== null && activeProjects[activeProjectIndex]
      ? activeProjects[activeProjectIndex]
      : null;

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-28 bg-obsidian border-hairline-t overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

      {/* Floating Cursor-Following Modal (Only active in float mode on desktop) */}
      <div
        ref={previewModalRef}
        className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 hidden lg:block"
        style={{ willChange: "transform, opacity" }}
      >
        {activeProject && (
          <div className="w-[440px] aspect-[16/10] rounded-2xl overflow-hidden bg-carbon/95 border border-[#CAAD8E]/30 shadow-2xl shadow-black/80 backdrop-blur-xl p-2.5">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-obsidian">
              <Image
                src={activeProject.image?.link || "/code.png"}
                alt={activeProject.title}
                width={800}
                height={500}
                className="w-full h-full object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-pearl bg-obsidian/80 px-2.5 py-1 rounded-md border border-white/10">
                  {activeProject.title}
                </span>
                <span className="font-mono text-[11px] text-[#CAAD8E] bg-obsidian/80 px-2 py-1 rounded-md border border-[#CAAD8E]/30">
                  EXPLORE CASE →
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-[#CAAD8E]/20 text-[#CAAD8E] font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E] animate-pulse" />
                <span>Selected Works · Active Deployments ({activeProjects.length})</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-pearl leading-[1.05]">
                Engineered Works &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CAAD8E] via-[#EBE3DA] to-pearl">
                  Production Systems.
                </span>
              </h2>

              <p className="text-pearl-muted text-base sm:text-lg leading-relaxed">
                Tackling high-concurrency real-time messaging, full-stack content publishing,
                hardware switch telemetry, and media analytics.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-plate border border-white/10 flex items-center shadow-lg">
                <button
                  type="button"
                  onClick={() => {
                    setViewMode("float");
                    playClick();
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    viewMode === "float"
                      ? "bg-[#CAAD8E] text-[#14100E] font-bold shadow-md shadow-[#CAAD8E]/20"
                      : "text-pearl-muted hover:text-pearl"
                  }`}
                >
                  Interactive List
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setViewMode("cards");
                    playClick();
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    viewMode === "cards"
                      ? "bg-[#CAAD8E] text-[#14100E] font-bold shadow-md shadow-[#CAAD8E]/20"
                      : "text-pearl-muted hover:text-pearl"
                  }`}
                >
                  3D Card Grid
                </button>
              </div>

              <TransitionLink
                href="/project"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-plate border border-white/10 text-pearl hover:text-[#CAAD8E] hover:border-[#CAAD8E]/40 text-xs font-mono transition-all btn-press"
              >
                <span>Index</span>
                <HiArrowUpRight size={14} className="text-[#CAAD8E]" />
              </TransitionLink>
            </div>
          </div>
        )}

        {/* ===================== VIEW MODE 1: INTERACTIVE FLOAT LIST ===================== */}
        {viewMode === "float" && (
          <div className="divide-y divide-[#CAAD8E]/15 border-y border-[#CAAD8E]/15">
            {activeProjects.map((project, idx) => {
              const techList = (project.technology || "")
                .split(/[,·+]/)
                .map((t) => t.trim())
                .filter(Boolean);

              return (
                <div
                  key={project._id}
                  onMouseEnter={() => handleRowEnter(idx)}
                  onMouseLeave={handleRowLeave}
                  data-cursor-text="EXPLORE"
                  className="project-row-item group relative py-8 sm:py-12 transition-all duration-300 hover:bg-[#27201C]/60 px-4 sm:px-6 rounded-2xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left: Number + Title */}
                    <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                      <span className="font-mono text-sm sm:text-base font-bold text-pearl-dim group-hover:text-[#CAAD8E] transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div className="space-y-2">
                        <TransitionLink
                          href={`/project/${project._id}`}
                          className="block text-2xl sm:text-4xl lg:text-5xl font-black text-pearl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#CAAD8E] group-hover:to-[#EBE3DA] group-hover:translate-x-3 transition-all duration-300"
                        >
                          {project.title}
                        </TransitionLink>

                        <p className="text-pearl-muted text-xs sm:text-sm max-w-xl line-clamp-2">
                          {truncateText(project.summary || project.info, 180)}
                        </p>
                      </div>
                    </div>

                    {/* Right: Tech stack tags + Action buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 self-start lg:self-center">
                      <div className="flex flex-wrap gap-1.5 max-w-xs">
                        {techList.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-plate border border-[#CAAD8E]/10 font-mono text-[11px] text-pearl-dim group-hover:border-[#CAAD8E]/30 group-hover:text-pearl transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <TransitionLink
                          href={`/project/${project._id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#CAAD8E] text-[#14100E] font-bold text-xs font-mono hover:bg-[#EBE3DA] transition-colors btn-press shadow-md shadow-[#CAAD8E]/15"
                        >
                          <span>Details</span>
                          <HiArrowUpRight size={14} />
                        </TransitionLink>

                        {project.livedemo && project.livedemo !== "/" && (
                          <a
                            href={project.livedemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-plate border border-white/10 hover:border-[#CAAD8E] text-pearl hover:text-[#CAAD8E] transition-colors btn-press"
                            title="Live Demo"
                          >
                            <FaExternalLinkAlt size={12} />
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-plate border border-white/10 hover:border-[#CAAD8E] text-pearl hover:text-[#CAAD8E] transition-colors btn-press"
                            title="GitHub"
                          >
                            <FaGithub size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ===================== VIEW MODE 2: 3D CARD GRID ===================== */}
        {viewMode === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeProjects.map((project, idx) => {
              const techList = (project.technology || "")
                .split(/[,·+]/)
                .map((t) => t.trim())
                .filter(Boolean);

              return (
                <div
                  key={project._id}
                  onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                  className="group relative rounded-3xl bg-carbon border border-white/10 hover:border-[#CAAD8E]/40 transition-colors duration-300 overflow-hidden shadow-2xl flex flex-col justify-between"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Card Visual Preview */}
                  <div className="relative aspect-[16/10] w-full bg-obsidian overflow-hidden border-b border-white/10">
                    <Image
                      src={project.image?.link || "/code.png"}
                      alt={project.title}
                      width={900}
                      height={550}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-obsidian/90 backdrop-blur-md border border-[#CAAD8E]/20 font-mono text-[11px] text-pearl font-semibold">
                        {String(idx + 1).padStart(2, "0")} // ARTIFACT
                      </span>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#CAAD8E] uppercase font-semibold">
                          Production System
                        </span>
                        <span className="font-mono text-xs text-pearl-dim">
                          {project.createdAt
                            ? new Date(project.createdAt).getFullYear()
                            : "2024"}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-pearl group-hover:text-[#CAAD8E] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-pearl-muted text-sm leading-relaxed">
                        {truncateText(project.summary || project.info, 180)}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {techList.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-plate border border-[#CAAD8E]/10 font-mono text-xs text-pearl-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                      <TransitionLink
                        href={`/project/${project._id}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#CAAD8E] hover:text-[#EBE3DA] transition-colors"
                      >
                        <span>Case Details</span>
                        <HiArrowUpRight size={15} />
                      </TransitionLink>

                      <div className="flex items-center gap-2">
                        {project.livedemo && project.livedemo !== "/" && (
                          <a
                            href={project.livedemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-plate border border-white/10 text-pearl hover:text-[#CAAD8E] transition-colors"
                            title="Live Demo"
                          >
                            <FaExternalLinkAlt size={12} />
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-plate border border-white/10 text-pearl hover:text-[#CAAD8E] transition-colors"
                            title="GitHub"
                          >
                            <FaGithub size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveProjectShowcase;

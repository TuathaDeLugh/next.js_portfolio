"use client";

import React, { useState } from "react";
import Image from "next/image";
import TransitionLink from "../transitions/TransitionLink";
import { IProject } from "@/types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { stripHtml, truncateText } from "@/lib/text";

interface Props {
  projects: IProject[];
  hideHeader?: boolean;
}

export const FeaturedWorksSection: React.FC<Props> = ({ projects, hideHeader = false }) => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Architectural Works" },
    { id: "fullstack", label: "Full-Stack Products" },
    { id: "systems", label: "Distributed & Backend" },
    { id: "frontend", label: "Interactive & UI" },
  ];

  const activeProjects = projects.filter((p) => !p.archived);

  const filteredProjects = activeProjects.filter((project) => {
    if (filter === "all") return true;
    const tech = (project.technology || "").toLowerCase();
    const title = (project.title || "").toLowerCase();
    if (filter === "fullstack") {
      return (
        tech.includes("next") ||
        tech.includes("mongo") ||
        tech.includes("postgres") ||
        title.includes("vibe") ||
        title.includes("forge")
      );
    }
    if (filter === "systems") {
      return (
        tech.includes("nest") ||
        tech.includes("node") ||
        tech.includes("postgres") ||
        tech.includes("firebase")
      );
    }
    if (filter === "frontend") {
      return (
        tech.includes("react") ||
        tech.includes("tailwind") ||
        title.includes("keyboard") ||
        title.includes("notes")
      );
    }
    return true;
  });

  return (
    <section className="relative py-28 bg-obsidian border-hairline-t overflow-hidden">
      {/* Background architectural guides */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-white/10 text-signal-emerald font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald animate-pulse" />
                <span>Engineered Systems · Production Deployments</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-pearl leading-[1.05]">
                Featured Works &amp; <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pearl via-pearl to-pearl-muted">
                  Software Artifacts.
                </span>
              </h2>
              <p className="text-pearl-muted text-base sm:text-lg leading-relaxed">
                Every project represents real engineering solutions — tackling
                high-throughput messaging, content publishing, hardware telemetry,
                and critical logistics with modern stack architecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <TransitionLink
                href="/project"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-plate border border-white/10 text-pearl hover:text-signal-emerald hover:border-signal-emerald/40 text-xs font-mono transition-all btn-press"
              >
                <span>Explore Complete Index ({projects.length})</span>
                <HiArrowUpRight size={15} className="text-signal-emerald" />
              </TransitionLink>
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/[0.08] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all btn-press ${
                filter === cat.id
                  ? "bg-signal-emerald text-obsidian font-bold shadow-md shadow-signal-emerald/20"
                  : "bg-carbon/80 text-pearl-muted hover:text-pearl border border-white/5 hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Layout Spreads */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const techList = (project.technology || "")
              .split(/[,·+]/)
              .map((t) => t.trim())
              .filter(Boolean);

            return (
              <div
                key={project._id}
                className="group relative rounded-3xl bg-carbon border border-white/10 hover:border-signal-emerald/30 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Visual Preview Half */}
                  <div
                    className={`relative lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto w-full lg:min-h-[460px] bg-obsidian overflow-hidden border-b lg:border-b-0 ${
                      isEven
                        ? "lg:order-2 lg:border-l lg:border-white/10"
                        : "lg:order-1 lg:border-r lg:border-white/10"
                    }`}
                  >
                    <Image
                      src={project.image?.link || "/code.png"}
                      alt={project.title}
                      width={1200}
                      height={750}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />

                    {/* Top status tag */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-obsidian/90 backdrop-blur-md border border-white/10 font-mono text-[11px] text-pearl font-semibold">
                        {String(idx + 1).padStart(2, "0")} // ARTIFACT
                      </span>
                    </div>
                  </div>

                  {/* Editorial & Technical Specs Half */}
                  <div
                    className={`lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-signal-emerald tracking-wider uppercase font-semibold">
                          Production Case Study
                        </span>
                        <span className="font-mono text-xs text-pearl-dim">
                          {project.createdAt
                            ? new Date(project.createdAt).getFullYear()
                            : "2024"}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-pearl tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-pearl-muted text-sm sm:text-base leading-relaxed">
                        {truncateText(project.summary || project.info, 240)}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="pt-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-pearl-dim mb-2.5">
                          Architectural Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {techList.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-plate border border-white/5 font-mono text-xs text-pearl-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-8 mt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                      <TransitionLink
                        href={`/project/${project._id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-signal-emerald text-obsidian font-bold text-xs font-mono hover:bg-emerald-400 transition-colors btn-press shadow-lg shadow-signal-emerald/20"
                      >
                        <span>Case Details</span>
                        <HiArrowUpRight size={14} />
                      </TransitionLink>

                      {project.livedemo && project.livedemo !== "/" && (
                        <a
                          href={project.livedemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-plate border border-white/10 hover:border-signal-emerald/40 text-pearl text-xs font-mono transition-all btn-press"
                        >
                          <FaExternalLinkAlt
                            size={11}
                            className="text-signal-emerald"
                          />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-plate border border-white/10 hover:border-signal-emerald/40 text-pearl text-xs font-mono transition-all btn-press"
                        >
                          <FaGithub size={13} className="text-pearl-muted" />
                          <span>Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksSection;

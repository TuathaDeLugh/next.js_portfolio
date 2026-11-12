"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ISkill } from "@/types";
import { playHover, playClick } from "./SoundEffects";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

interface Props {
  skills: ISkill[];
}

const CATEGORIES: Record<string, string[]> = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind css",
    "GSAP",
    "Framer Motion",
    "Redux & Redux-toolkit",
    "RTK Query",
    "Shadcn/ui",
    "MUI",
    "HTML",
    "CSS",
    "SASS/SCSS",
    "BootStrap",
    "React StoryBook",
  ],
  backend: [
    "Node.js",
    "Nest.js",
    "Express.js",
    "REST API",
    "MicroServices",
    "NX MonoRepo",
    "Packages",
  ],
  database: ["PostgreSQL", "Mongo", "MySQL", "Firebase"],
  devops: [
    "Docker",
    "Git",
    "Github",
    "Gitlab",
    "Postman",
    "kubernetes(basic)",
  ],
};

export const InteractiveSkillsCloud: React.FC<Props> = ({ skills }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const skillNames = skills && skills.length > 0
    ? skills.map((s) => s.lang)
    : Object.values(CATEGORIES).flat();

  // Deduplicate and filter
  const uniqueSkills = Array.from(new Set(skillNames));

  const filtered = uniqueSkills.filter((skill) => {
    const matchesSearch = skill.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (activeTab === "all") return true;
    const catList = CATEGORIES[activeTab] || [];
    return catList.some((c) => c.toLowerCase() === skill.toLowerCase());
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const pills = container.querySelectorAll(".skill-pill-item");
    gsap.fromTo(
      pills,
      { scale: 0.8, opacity: 0, y: 15 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.02,
        ease: "back.out(1.8)",
      }
    );
  }, [activeTab, searchQuery]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-28 bg-obsidian border-hairline-t overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-[#CAAD8E]/20 text-[#CAAD8E] font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E] animate-pulse" />
              <span>Full-Stack Arsenal · {uniqueSkills.length} Verified Technologies</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
              Technologies honed in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CAAD8E] via-[#EBE3DA] to-pearl">
                commercial production.
              </span>
            </h2>

            <p className="text-pearl-muted text-base leading-relaxed">
              Every tool and framework in this registry has been tested, deployed,
              and maintained in enterprise web apps, microservices, or client portals.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <HiOutlineMagnifyingGlass
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-pearl-dim"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-plate border border-[#CAAD8E]/20 focus:border-[#CAAD8E] text-xs font-mono text-pearl placeholder:text-pearl-dim outline-none transition-all shadow-md"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/[0.08] pb-4">
          {[
            { id: "all", label: `All Technologies (${uniqueSkills.length})` },
            { id: "frontend", label: "Frontend & Motion" },
            { id: "backend", label: "Backend & Systems" },
            { id: "database", label: "Data & Storage" },
            { id: "devops", label: "DevOps & Tooling" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                playClick();
              }}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all btn-press ${
                activeTab === tab.id
                  ? "bg-[#CAAD8E] text-[#14100E] font-extrabold shadow-md shadow-[#CAAD8E]/15"
                  : "bg-carbon/80 text-pearl-muted hover:text-pearl border border-white/5 hover:border-[#CAAD8E]/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Pills Grid */}
        <div className="flex flex-wrap gap-3">
          {filtered.map((skill) => (
            <div
              key={skill}
              onMouseEnter={playHover}
              data-cursor="pointer"
              className="skill-pill-item group relative px-5 py-3 rounded-2xl bg-carbon/90 hover:bg-plate border border-[#CAAD8E]/15 hover:border-[#CAAD8E]/50 transition-all duration-200 btn-press flex items-center gap-3 shadow-lg hover:shadow-[#CAAD8E]/10 hover:-translate-y-1"
            >
              <span className="w-2 h-2 rounded-full bg-[#CAAD8E]/50 group-hover:bg-[#CAAD8E] transition-colors" />
              <span className="text-sm font-bold text-pearl group-hover:text-[#CAAD8E] transition-colors">
                {skill}
              </span>
              <span className="text-[10px] font-mono text-[#A58376] uppercase px-1.5 py-0.5 rounded bg-obsidian border border-[#CAAD8E]/15">
                PROD
              </span>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="py-12 text-center w-full text-pearl-dim font-mono text-sm">
              No technologies match &ldquo;{searchQuery}&rdquo;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkillsCloud;


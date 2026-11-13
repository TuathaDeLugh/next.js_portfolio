"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ISkill } from "@/types";
import { playHover, playClick } from "./SoundEffects";
import {
  HiOutlineMagnifyingGlass,
  HiCodeBracket,
  HiCpuChip,
  HiCircleStack,
  HiCommandLine,
  HiSparkles,
} from "react-icons/hi2";

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
  devops: ["Docker", "Git", "Github", "Gitlab", "Postman", "kubernetes(basic)"],
};

const getSkillIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (
    CATEGORIES.database.some((c) => c.toLowerCase() === lower) ||
    lower.includes("sql") ||
    lower.includes("mongo") ||
    lower.includes("redis") ||
    lower.includes("db") ||
    lower.includes("storage")
  ) {
    return HiCircleStack;
  }
  if (
    CATEGORIES.devops.some((c) => c.toLowerCase() === lower) ||
    lower.includes("docker") ||
    lower.includes("git") ||
    lower.includes("ci") ||
    lower.includes("linux") ||
    lower.includes("tool") ||
    lower.includes("postman")
  ) {
    return HiCommandLine;
  }
  if (
    CATEGORIES.backend.some((c) => c.toLowerCase() === lower) ||
    lower.includes("node") ||
    lower.includes("nest") ||
    lower.includes("express") ||
    lower.includes("api") ||
    lower.includes("server") ||
    lower.includes("microservice")
  ) {
    return HiCpuChip;
  }
  if (
    CATEGORIES.frontend.some((c) => c.toLowerCase() === lower) ||
    lower.includes("react") ||
    lower.includes("next") ||
    lower.includes("script") ||
    lower.includes("css") ||
    lower.includes("html") ||
    lower.includes("ui") ||
    lower.includes("tailwind")
  ) {
    return HiCodeBracket;
  }
  return HiSparkles;
};

export const InteractiveSkillsCloud: React.FC<Props> = ({ skills }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const skillNames =
    skills && skills.length > 0
      ? skills.map((s) => s.lang)
      : Object.values(CATEGORIES).flat();

  // Deduplicate and filter
  const uniqueSkills = Array.from(new Set(skillNames));

  const filtered = uniqueSkills.filter((skill) => {
    const matchesSearch = skill
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
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
      { scale: 0.85, opacity: 0, y: 15 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: "back.out(1.5)",
      },
    );
  }, [activeTab, searchQuery]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-28 bg-obsidian border-hairline-t overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              <span>
                Technical Arsenal · {uniqueSkills.length} Production
                Technologies
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
              Technologies honed in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-cream via-luxury-gold to-luxury-champagne">
                commercial production.
              </span>
            </h2>

            <p className="text-pearl-muted text-base leading-relaxed">
              Every tool, language, and framework in this registry has been
              tested, deployed, and benchmarked in enterprise distributed
              systems, high-concurrency microservices, or production design
              systems.
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
              className="w-full pl-11 pr-4 py-3 rounded-full bg-plate border border-luxury-gold/20 focus:border-luxury-gold text-xs font-mono text-pearl placeholder:text-pearl-dim outline-none transition-all shadow-md focus:shadow-[0_0_15px_var(--glow-primary)]"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-luxury-gold/15 pb-4">
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
                  ? "bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-bold shadow-md shadow-luxury-gold/20"
                  : "bg-carbon/80 text-pearl-muted hover:text-pearl border border-luxury-gold/10 hover:border-luxury-gold/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Pills Grid */}
        <div className="flex flex-wrap gap-3">
          {filtered.map((skill) => {
            const Icon = getSkillIcon(skill);
            return (
              <div
                key={skill}
                onMouseEnter={playHover}
                data-cursor="pointer"
                className="skill-pill-item group relative px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-carbon/90 hover:bg-plate border border-luxury-gold/15 hover:border-luxury-gold/50 transition-all duration-200 btn-press flex items-center gap-3 shadow-lg hover:shadow-[0_4px_20px_var(--glow-primary)] hover:-translate-y-1"
              >
                <span className="w-6 h-6 rounded-lg bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-obsidian group-hover:border-luxury-gold group-hover:scale-110 transition-all duration-200 flex-shrink-0 shadow-sm">
                  <Icon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-6" />
                </span>
                <span className="text-sm font-bold text-pearl group-hover:text-luxury-gold transition-colors">
                  {skill}
                </span>
              </div>
            );
          })}

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

"use client";

import React, { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPostman,
  SiPrisma,
  SiFirebase,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

interface TechDomain {
  id: string;
  title: string;
  tagline: string;
  iconAccent: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    context: string;
  }[];
}

const domains: TechDomain[] = [
  {
    id: "frontend",
    title: "01 // Frontend Architecture & Motion",
    tagline: "High-concurrency React 19, App Router, responsive design systems, & spring physics.",
    iconAccent: "text-signal-emerald",
    skills: [
      { name: "React 19", level: "Primary", experience: "3+ Years", context: "Concurrent features, hooks, custom state stores" },
      { name: "Next.js 16", level: "Primary", experience: "2+ Years", context: "App Router, SSR, Server Components, Turbopack" },
      { name: "TypeScript", level: "Primary", experience: "3+ Years", context: "Strict typing, generics, schema definitions" },
      { name: "Tailwind CSS", level: "Core", experience: "3+ Years", context: "Design tokens, arbitrary values, responsive utilities" },
      { name: "Motion for React", level: "Core", experience: "2+ Years", context: "Spring dynamics, gesture physics, layout transitions" },
      { name: "GSAP 3", level: "Specialty", experience: "2+ Years", context: "ScrollTrigger, timelines, architectural sequence reveals" },
      { name: "Shadcn / Radix", level: "Core", experience: "1.5 Years", context: "Headless accessible primitives & custom styled atoms" },
      { name: "Redux Toolkit / RTK", level: "Core", experience: "2+ Years", context: "Normalized slices, RTK Query API caching" },
    ],
  },
  {
    id: "backend",
    title: "02 // Backend Systems & Microservices",
    tagline: "Scalable API design, asynchronous processing, and monorepo architectures.",
    iconAccent: "text-signal-cyan",
    skills: [
      { name: "Node.js", level: "Primary", experience: "3+ Years", context: "Event loop, asynchronous I/O, server-side execution" },
      { name: "Nest.js", level: "Core", experience: "1.5 Years", context: "Modular architecture, dependency injection, microservices" },
      { name: "Express.js", level: "Core", experience: "3+ Years", context: "RESTful middleware, route controllers, auth pipelines" },
      { name: "REST APIs", level: "Primary", experience: "3+ Years", context: "Resource modeling, rate limiting, error handling standards" },
      { name: "NX Monorepo", level: "Specialty", experience: "1+ Year", context: "Distributed workspaces, shared packages, build caching" },
      { name: "Authentication", level: "Core", experience: "2+ Years", context: "NextAuth, JWT, bcrypt encryption, role-based access" },
    ],
  },
  {
    id: "database",
    title: "03 // Data Storage & Persistence",
    tagline: "Relational integrity, document flexibility, and performance indexing.",
    iconAccent: "text-signal-amber",
    skills: [
      { name: "MongoDB & Mongoose", level: "Primary", experience: "3+ Years", context: "Schema modeling, aggregation pipelines, replica sets" },
      { name: "PostgreSQL", level: "Core", experience: "2+ Years", context: "Relational constraints, joins, connection pooling" },
      { name: "Prisma ORM", level: "Core", experience: "1.5 Years", context: "Type-safe database client, schema migrations" },
      { name: "Firebase", level: "Core", experience: "2+ Years", context: "Realtime data, auth, cloud storage buckets" },
      { name: "MySQL", level: "Core", experience: "2+ Years", context: "ACID compliance, normalized tables, stored procedures" },
    ],
  },
  {
    id: "devops",
    title: "04 // DevOps & Tooling",
    tagline: "Deterministic builds, containerization, and developer tooling.",
    iconAccent: "text-purple-400",
    skills: [
      { name: "Docker", level: "Core", experience: "1.5 Years", context: "Containerized environments, multi-stage Dockerfiles" },
      { name: "Git & GitHub", level: "Primary", experience: "3+ Years", context: "Branching workflows, PR reviews, release tagging" },
      { name: "GitLab", level: "Core", experience: "1.5 Years", context: "CI/CD runner pipelines, container registries" },
      { name: "Postman", level: "Core", experience: "3+ Years", context: "API contract testing, environment variable suites" },
      { name: "Kubernetes (Basic)", level: "Foundational", experience: "1 Year", context: "Pods, services, declarative deployment manifests" },
    ],
  },
];

export const TechnicalArsenalSection: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>("frontend");

  const current = domains.find((d) => d.id === activeDomain) || domains[0];

  return (
    <section className="relative py-28 bg-obsidian border-hairline-t overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-white/10 text-signal-emerald font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald" />
            <span>Technical Capabilities &amp; Technology Matrix</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
            An engineered stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pearl via-pearl to-pearl-muted">
              honed through real production.
            </span>
          </h2>

          <p className="text-pearl-muted text-base sm:text-lg leading-relaxed">
            Organized by architectural domain — every tool here has been applied
            in commercial products, microservice backends, or client design
            systems.
          </p>
        </div>

        {/* Domain Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {domains.map((dom) => (
            <button
              key={dom.id}
              type="button"
              onClick={() => setActiveDomain(dom.id)}
              className={`p-4 rounded-2xl text-left border transition-all btn-press ${
                activeDomain === dom.id
                  ? "bg-plate border-signal-emerald/40 shadow-xl shadow-signal-emerald/5"
                  : "bg-carbon/60 border-white/5 hover:border-white/15"
              }`}
            >
              <div
                className={`font-mono text-xs font-bold mb-1 ${
                  activeDomain === dom.id ? "text-signal-emerald" : "text-pearl-dim"
                }`}
              >
                {dom.id.toUpperCase()}
              </div>
              <div className="text-sm font-bold text-pearl truncate">
                {dom.title.replace(/^0\d\s\/\/\s/, "")}
              </div>
            </button>
          ))}
        </div>

        {/* Active Domain Skills Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-carbon border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
            <div>
              <h3 className="text-2xl font-bold text-pearl">{current.title}</h3>
              <p className="text-pearl-muted text-sm mt-1">{current.tagline}</p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-signal-emerald px-3 py-1.5 rounded-full bg-plate border border-white/10 self-start sm:self-auto">
              <span>{current.skills.length} Validated Capabilities</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {current.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-plate/60 hover:bg-plate border border-white/5 hover:border-signal-emerald/30 transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-pearl text-base group-hover:text-signal-emerald transition-colors">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-[10px] text-signal-emerald px-2 py-0.5 rounded bg-obsidian border border-white/10">
                    {skill.level}
                  </span>
                </div>

                <div className="font-mono text-xs text-pearl-dim mb-3">
                  Tenure: {skill.experience}
                </div>

                <p className="text-xs text-pearl-muted leading-relaxed">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArsenalSection;


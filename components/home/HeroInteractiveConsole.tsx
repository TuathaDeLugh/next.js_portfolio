"use client";

import React, { useState } from "react";
import Image from "next/image";
import TransitionLink from "../transitions/TransitionLink";

interface StackCapability {
  title: string;
  badge: string;
  specs: string[];
  metric: string;
  metricLabel: string;
}

const capabilities: Record<string, StackCapability> = {
  frontend: {
    title: "Client Architecture & Motion",
    badge: "React 19 · Next.js 16 · GSAP",
    specs: [
      "Server Component hydration boundaries with zero reflow",
      "GSAP timeline choreography for cinematic scroll narratives",
      "Strict accessible ARIA compliance & responsive typography",
      "Hardware-accelerated CSS GPU layers & deterministic render cycles",
    ],
    metric: "0.00 CLS",
    metricLabel: "Zero Layout Shift",
  },
  backend: {
    title: "Distributed Backend & APIs",
    badge: "Nest.js · Node · Express",
    specs: [
      "Modular microservice structure with NX Monorepo isolation",
      "Type-safe REST & GraphQL contract validation",
      "Session authentication, token lifecycle & security headers",
      "Webhooks, NodeMailer dispatch & asynchronous task queues",
    ],
    metric: "< 40ms",
    metricLabel: "Mean Latency",
  },
  data: {
    title: "Data Layers & Persistence",
    badge: "PostgreSQL · MongoDB · Prisma",
    specs: [
      "Relational schema design with foreign key integrity (Postgres)",
      "Document database indexing & aggregate queries (MongoDB)",
      "Prisma ORM migration workflows & client-side pooling",
      "Real-time event subscriptions via WebSockets & SSE",
    ],
    metric: "99.9%",
    metricLabel: "Type Safety",
  },
};

const flagshipSnapshots = [
  {
    id: "69fb78c78be5cbc968d30fd5",
    name: "Vibe Message",
    shortName: "Vibe",
    domain: "Push Infrastructure",
    image: "/vibemessage.png",
    tag: "Nest + Next",
  },
  {
    id: "66937e2cabc7ed0d7791729f",
    name: "Blog Forge",
    shortName: "Forge",
    domain: "Publishing Engine",
    image: "/Blogforge.png",
    tag: "Next + Mongo",
  },
  {
    id: "6560d710fd896164e3867aae",
    name: "Spirited Score",
    shortName: "Spirited",
    domain: "Analytics & Scoring",
    image: "/SpiritedScore.png",
    tag: "Next14 + Auth",
  },
];

export const HeroInteractiveConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "data">("frontend");
  const [selectedProject, setSelectedProject] = useState(0);

  const current = capabilities[activeTab];
  const project = flagshipSnapshots[selectedProject];

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Structural Card Container */}
      <div className="relative rounded-3xl bg-white/95 dark:bg-carbon/95 border border-plate-border shadow-[0_16px_40px_-12px_rgba(20,18,16,0.08),0_0_1px_1px_rgba(20,18,16,0.05)] dark:shadow-[0_24px_64px_-15px_rgba(0,0,0,0.85)] overflow-hidden w-full backdrop-blur-2xl">
        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-plate-elevated/50 dark:bg-obsidian/90 border-b border-plate-border font-mono text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-luxury-gold"></span>
            </span>
            <span className="text-pearl font-bold tracking-wider text-[11px] sm:text-xs truncate">
              SYSTEM TELEMETRY // CRAFT INSTRUMENT
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-pearl-dim flex-shrink-0">
            <span className="hidden sm:inline">IN-WEST</span>
            <span className="px-2 py-0.5 rounded-full bg-plate-elevated border border-plate-border text-luxury-gold text-[10px] font-mono font-semibold">
              OPTIMAL
            </span>
          </div>
        </div>

        {/* Tab Navigator */}
        <div className="grid grid-cols-3 border-b border-plate-border bg-plate/40 dark:bg-obsidian/60 text-[11px] sm:text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("frontend")}
            className={`py-2.5 sm:py-3 px-2 text-center transition-all border-r border-plate-border btn-press truncate ${
              activeTab === "frontend"
                ? "bg-plate-elevated text-luxury-gold border-b-2 border-b-luxury-gold font-semibold"
                : "text-pearl-muted hover:text-pearl hover:bg-plate/50"
            }`}
          >
            <span>Frontend &amp; Motion</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("backend")}
            className={`py-2.5 sm:py-3 px-2 text-center transition-all border-r border-plate-border btn-press truncate ${
              activeTab === "backend"
                ? "bg-plate-elevated text-luxury-gold border-b-2 border-b-luxury-gold font-semibold"
                : "text-pearl-muted hover:text-pearl hover:bg-plate/50"
            }`}
          >
            <span>Distributed Backend</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("data")}
            className={`py-2.5 sm:py-3 px-2 text-center transition-all btn-press truncate ${
              activeTab === "data"
                ? "bg-plate-elevated text-luxury-gold border-b-2 border-b-luxury-gold font-semibold"
                : "text-pearl-muted hover:text-pearl hover:bg-plate/50"
            }`}
          >
            <span>Data &amp; Persistence</span>
          </button>
        </div>

        {/* Tab Details */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="inline-block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-pearl-dim mb-1">
                {current.badge}
              </div>
              <h3 className="text-base sm:text-xl font-bold text-pearl tracking-tight">
                {current.title}
              </h3>
            </div>

            {/* Metric pill */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center p-2.5 rounded-xl bg-plate-elevated/50 dark:bg-plate border border-plate-border flex-shrink-0 self-start sm:self-auto w-full sm:w-auto">
              <div className="text-sm sm:text-lg font-mono font-bold text-luxury-gold">
                {current.metric}
              </div>
              <div className="text-[10px] font-mono text-pearl-muted leading-none">
                {current.metricLabel}
              </div>
            </div>
          </div>

          {/* Specifications Checklist */}
          <div className="space-y-2">
            {current.specs.map((spec, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-2 sm:p-2.5 rounded-xl bg-plate/40 dark:bg-obsidian/50 border border-plate-border text-[11px] sm:text-xs font-mono text-pearl-muted"
              >
                <span className="text-luxury-gold font-bold flex-shrink-0">✦</span>
                <span className="leading-snug">{spec}</span>
              </div>
            ))}
          </div>

          {/* Flagship Works Quick-Switcher */}
          <div className="pt-4 border-t border-plate-border">
            <div className="flex items-center justify-between mb-2 text-xs font-mono">
              <span className="text-pearl-dim uppercase tracking-wider text-[10px] sm:text-[11px]">
                Flagship Deployments
              </span>
              <span className="text-[10px] text-luxury-gold">Select to Inspect</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {flagshipSnapshots.map((snap, idx) => (
                <button
                  key={snap.id}
                  type="button"
                  onClick={() => setSelectedProject(idx)}
                  className={`text-left p-2 sm:p-2.5 rounded-xl border transition-all btn-press min-w-0 ${
                    selectedProject === idx
                      ? "bg-plate-elevated border-luxury-gold/60 shadow-lg shadow-luxury-gold/10"
                      : "bg-plate/40 dark:bg-obsidian/40 border-plate-border hover:border-luxury-gold/30"
                  }`}
                >
                  <div className="text-[11px] font-bold text-pearl truncate">
                    <span className="sm:hidden">{snap.shortName}</span>
                    <span className="hidden sm:inline">{snap.name}</span>
                  </div>
                  <div className="text-[9px] font-mono text-pearl-dim truncate mt-0.5">
                    {snap.tag}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Project Snapshot Preview Pill */}
            <div className="mt-3 p-3 rounded-2xl bg-plate-elevated/50 dark:bg-plate border border-plate-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-plate-border flex-shrink-0 bg-plate">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-pearl truncate">
                    {project.name}
                  </div>
                  <div className="text-[11px] font-mono text-pearl-dim truncate">
                    {project.domain}
                  </div>
                </div>
              </div>

              <TransitionLink
                href={`/project/${project.id}`}
                className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian text-xs font-bold font-mono hover:brightness-110 transition-all btn-press flex-shrink-0 shadow-lg shadow-luxury-gold/15"
              >
                Inspect Work →
              </TransitionLink>
            </div>
          </div>
        </div>

        {/* Ambient bottom status strip */}
        <div className="px-4 sm:px-5 py-2.5 bg-plate-elevated/50 dark:bg-obsidian/95 border-t border-plate-border flex items-center justify-between text-[10px] font-mono text-pearl-dim">
          <span>LOCATION: INDIA · GLOBAL READY</span>
          <span className="text-luxury-gold">NEXT.JS 16 &amp; REACT 19</span>
        </div>
      </div>
    </div>
  );
};

export default HeroInteractiveConsole;

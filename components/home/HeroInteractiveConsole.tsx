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
    badge: "React 19 · Next.js 16",
    specs: [
      "Server Component hydration boundaries with zero reflow",
      "Motion spring physics (Apple 0.5s duration, 0.2 bounce)",
      "Strict accessible ARIA compliance & responsive typography",
      "GSAP timeline orchestration for editorial scroll reveals",
    ],
    metric: "60 FPS",
    metricLabel: "Frame-Budget",
  },
  backend: {
    title: "Distributed Backend & APIs",
    badge: "Nest.js · Node · Express",
    specs: [
      "Modular microservice structure with NX Monorepo isolation",
      "Type-safe REST API endpoints & contract validation",
      "Session authentication, token lifecycle & security headers",
      "Webhooks, NodeMailer dispatch & asynchronous queues",
    ],
    metric: "< 45ms",
    metricLabel: "Mean Latency",
  },
  data: {
    title: "Data Layers & Persistence",
    badge: "PostgreSQL · MongoDB · Prisma",
    specs: [
      "Relational schema design with foreign key integrity (Postgres)",
      "Document database indexing & aggregate queries (MongoDB)",
      "Prisma ORM migration workflows & client-side pooling",
      "Real-time event subscriptions via Firebase & WebSockets",
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
      <div className="relative rounded-3xl bg-carbon/95 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden w-full">
        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 bg-obsidian/80 border-b border-white/[0.08] font-mono text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CAAD8E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CAAD8E]"></span>
            </span>
            <span className="text-pearl font-bold tracking-wider text-[10px] sm:text-xs truncate">
              TELEMETRY // US-STATION
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-pearl-dim flex-shrink-0">
            <span className="hidden sm:inline">IN-WEST</span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded bg-[#3A2E29] border border-[#CAAD8E]/25 text-[#CAAD8E] text-[9px] sm:text-[10px]">
              SYS OK
            </span>
          </div>
        </div>

        {/* Tab Navigator */}
        <div className="grid grid-cols-3 border-b border-[#CAAD8E]/15 bg-obsidian/40 text-[11px] sm:text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("frontend")}
            className={`py-2 sm:py-3 px-1 text-center transition-all border-r border-[#CAAD8E]/15 btn-press truncate ${
              activeTab === "frontend"
                ? "bg-[#3A2E29] text-[#CAAD8E] border-b-2 border-b-[#CAAD8E] font-semibold"
                : "text-pearl-muted hover:text-pearl hover:bg-white/[0.03]"
            }`}
          >
            <span className="sm:hidden">01. UI</span>
            <span className="hidden sm:inline">01. UI Engine</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("backend")}
            className={`py-2 sm:py-3 px-1 text-center transition-all border-r border-[#CAAD8E]/15 btn-press truncate ${
              activeTab === "backend"
                ? "bg-[#3A2E29] text-[#CAAD8E] border-b-2 border-b-[#CAAD8E] font-semibold"
                : "text-pearl-muted hover:text-pearl hover:bg-white/[0.03]"
            }`}
          >
            <span className="sm:hidden">02. API</span>
            <span className="hidden sm:inline">02. Distributed</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("data")}
            className={`py-2 sm:py-3 px-1 text-center transition-all btn-press truncate ${
              activeTab === "data"
                ? "bg-[#3A2E29] text-[#CAAD8E] border-b-2 border-b-[#CAAD8E] font-semibold"
                : "text-pearl-muted hover:text-pearl hover:bg-white/[0.03]"
            }`}
          >
            <span className="sm:hidden">03. Data</span>
            <span className="hidden sm:inline">03. Data Layers</span>
          </button>
        </div>

        {/* Tab Details */}
        <div className="p-3.5 sm:p-6 space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3">
            <div className="min-w-0">
              <div className="inline-block font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-[#A58376] mb-0.5">
                {current.badge}
              </div>
              <h3 className="text-base sm:text-xl font-bold text-pearl tracking-tight truncate sm:whitespace-normal">
                {current.title}
              </h3>
            </div>

            {/* Metric pill */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center p-2 sm:p-2.5 rounded-xl bg-plate border border-[#CAAD8E]/15 flex-shrink-0 self-start sm:self-auto w-full sm:w-auto">
              <div className="text-sm sm:text-lg font-mono font-bold text-[#CAAD8E]">
                {current.metric}
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-[#D1C8BD] leading-none">
                {current.metricLabel}
              </div>
            </div>
          </div>

          {/* Specifications Checklist */}
          <div className="space-y-1.5 sm:space-y-2">
            {current.specs.map((spec, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-1.5 sm:p-2.5 rounded-xl bg-obsidian/40 border border-white/[0.04] text-[11px] sm:text-xs font-mono text-pearl-muted"
              >
                <span className="text-[#CAAD8E] mt-0.5 font-bold flex-shrink-0">↳</span>
                <span className="leading-snug">{spec}</span>
              </div>
            ))}
          </div>

          {/* Flagship Works Quick-Switcher */}
          <div className="pt-3 sm:pt-4 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-2 text-xs font-mono">
              <span className="text-pearl-dim uppercase tracking-wider text-[10px] sm:text-[11px]">
                Flagship Deployments
              </span>
              <span className="text-[9px] sm:text-[10px] text-pearl-dim">Inspect</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {flagshipSnapshots.map((snap, idx) => (
                <button
                  key={snap.id}
                  type="button"
                  onClick={() => setSelectedProject(idx)}
                  className={`text-left p-1.5 sm:p-2.5 rounded-xl border transition-all btn-press min-w-0 ${
                    selectedProject === idx
                      ? "bg-[#3A2E29] border-[#CAAD8E]/50 shadow-md shadow-[#CAAD8E]/10"
                      : "bg-obsidian/40 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="text-[10px] sm:text-[11px] font-bold text-pearl truncate">
                    <span className="sm:hidden">{snap.shortName}</span>
                    <span className="hidden sm:inline">{snap.name}</span>
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-mono text-pearl-dim truncate mt-0.5">
                    {snap.tag}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Project Snapshot Preview Pill */}
            <div className="mt-3 p-2.5 sm:p-3 rounded-2xl bg-plate border border-[#CAAD8E]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 bg-obsidian">
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
                  <div className="text-[10px] sm:text-[11px] font-mono text-pearl-dim truncate">
                    {project.domain}
                  </div>
                </div>
              </div>

              <TransitionLink
                href={`/project/${project.id}`}
                className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-[#CAAD8E] text-[#14100E] text-xs font-bold font-mono hover:bg-[#EBE3DA] transition-colors btn-press flex-shrink-0 shadow-lg shadow-[#CAAD8E]/15"
              >
                Inspect Work →
              </TransitionLink>
            </div>
          </div>
        </div>

        {/* Ambient bottom status strip */}
        <div className="px-3.5 sm:px-5 py-2 bg-obsidian/90 border-t border-white/[0.06] flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-pearl-dim">
          <span>SURAT HQ · REMOTE</span>
          <span className="text-[#CAAD8E]">NEXT.JS 16 READY</span>
        </div>
      </div>
    </div>
  );
};

export default HeroInteractiveConsole;

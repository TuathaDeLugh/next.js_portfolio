import React from "react";
import getProjects from "@/controllers/project";
import { IProject } from "@/types";
import InteractiveProjectShowcase from "@/components/creative/InteractiveProjectShowcase";
import TransitionLink from "@/components/transitions/TransitionLink";
import { HiArrowUpRight } from "react-icons/hi2";

const ProjectList = async (): Promise<React.JSX.Element> => {
  const allProjects: IProject[] = await getProjects();
  const projects = allProjects.filter((p) => !p.archived);

  return (
    <div className="min-h-screen bg-obsidian text-pearl overflow-x-hidden selection:bg-luxury-gold selection:text-obsidian">
      {/* ===== HERO / WORK INDEX HEADER ===== */}
      <section className="relative pt-32 pb-16 border-hairline-b overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              <span>Catalog // Production Deployments &amp; Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-pearl leading-[1.05]">
              Curated software artifacts &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-cream via-luxury-gold to-luxury-champagne">
                engineering case studies.
              </span>
            </h1>

            <p className="text-pearl-muted text-base sm:text-xl leading-relaxed">
              A comprehensive index of production web applications, open-source
              developer tools, and full-stack systems built with modern web
              architectures.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURED & FILTERABLE SHOWCASE ===== */}
      <InteractiveProjectShowcase projects={projects} hideHeader={true} />

      {/* ===== FOOTER CTA ===== */}
      <section className="py-24 bg-carbon border-hairline-t text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Architectural Discourse // Peer Exchange</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-pearl tracking-tight">
            Deep-Dive Technical Dialogues
          </h2>
          <p className="text-pearl-muted text-sm sm:text-base leading-relaxed">
            Interested in discussing distributed microservice patterns, zero-layout-shift
            rendering pipelines, or technical architecture leadership? Connect directly.
          </p>
          <div className="pt-3">
            <TransitionLink
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-extrabold text-sm hover:brightness-110 transition-all btn-press shadow-xl shadow-luxury-gold/20"
            >
              <span>Initiate Transmission</span>
              <HiArrowUpRight size={16} />
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectList;

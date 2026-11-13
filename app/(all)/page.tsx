import React from "react";
import getServices from "@/controllers/service";
import getStandards from "@/controllers/standard";
import getProjects from "@/controllers/project";
import getExps from "@/controllers/exp";
import getSkills from "@/controllers/skill";
import { IService, IStandard, IProject, IExperience, ISkill } from "@/types";
import HeroEntrance from "@/components/home/HeroEntrance";
import HeroCanvas from "@/components/creative/HeroCanvas";
import InfiniteMarquee from "@/components/creative/InfiniteMarquee";
import ScrollTextReveal from "@/components/creative/ScrollTextReveal";
import InteractiveProjectShowcase from "@/components/creative/InteractiveProjectShowcase";
import ServicesShowcase from "@/components/creative/ServicesShowcase";
import EngineeringPhilosophy from "@/components/home/EngineeringPhilosophy";
import InteractiveSkillsCloud from "@/components/creative/InteractiveSkillsCloud";
import ExperienceScrollTimeline from "@/components/creative/ExperienceScrollTimeline";
import HomeContactSection from "@/components/home/HomeContactSection";

const Home = async (): Promise<React.JSX.Element> => {
  const [services, standards, projects, experiences, skills]: [
    IService[],
    IStandard[],
    IProject[],
    IExperience[],
    ISkill[]
  ] = await Promise.all([
    getServices(),
    getStandards(),
    getProjects(),
    getExps(),
    getSkills(),
  ]);

  // Strictly filter out archived projects for the public showcase
  const activeProjects = projects.filter((p) => !p.archived);

  return (
    <main className="min-h-screen bg-obsidian text-pearl overflow-x-hidden selection:bg-luxury-gold selection:text-obsidian">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-28 sm:pt-36 pb-20 lg:pb-28 border-hairline-b overflow-hidden">
        {/* Interactive Mouse-Reactive Particle Constellation Canvas */}
        <HeroCanvas />

        {/* Subtle architectural background coordinate grid */}
        <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

        {/* Ambient deep obsidian lighting */}
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-luxury-gold/[0.05] rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-luxury-bronze/[0.04] rounded-full blur-[120px]" />

        {/* Coordinated GSAP Hero Entrance */}
        <HeroEntrance />
      </section>

      {/* ===================== INFINITE KINETIC MARQUEE ===================== */}
      <InfiniteMarquee />

      {/* ===================== AWWWARDS EDITORIAL SCRUB REVEAL ===================== */}
      <section className="py-24 sm:py-32 bg-obsidian border-hairline-b relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
            <span>Core Philosophy // Creative Engineering Manifesto</span>
          </div>
          <ScrollTextReveal
            text="I engineer digital experiences where systems engineering meets visual motion craft. Every millisecond of latency is challenged. Every render cycle is deterministic. Building software that makes users stop scrolling."
            className="text-pearl"
          />
        </div>
      </section>

      {/* ===================== INTERACTIVE PROJECT SHOWCASE ===================== */}
      <InteractiveProjectShowcase projects={activeProjects} />

      {/* ===================== ARCHITECTURAL SERVICES ===================== */}
      <ServicesShowcase services={services} />

      {/* ===================== ENGINEERING PHILOSOPHY ===================== */}
      <EngineeringPhilosophy standards={standards} />

      {/* ===================== INTERACTIVE SKILLS REGISTRY ===================== */}
      <InteractiveSkillsCloud skills={skills} />

      {/* ===================== CAREER TRAJECTORY & EDUCATION ===================== */}
      <ExperienceScrollTimeline experiences={experiences} />

      {/* ===================== CONTACT CHANNEL ===================== */}
      <HomeContactSection />
    </main>
  );
};

export default Home;

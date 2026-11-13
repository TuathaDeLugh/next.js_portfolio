import React from "react";
import Image from "next/image";
import getExps from "@/controllers/exp";
import getSkills from "@/controllers/skill";
import getEdus from "@/controllers/edu";
import { IExperience, ISkill } from "@/types";
import { IEdu } from "@/controllers/edu";
import TransitionLink from "@/components/transitions/TransitionLink";
import CopyEmailButton from "@/components/home/CopyEmailButton";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineCommandLine,
} from "react-icons/hi2";
import InteractiveSkillsCloud from "@/components/creative/InteractiveSkillsCloud";

const About: React.FC = async () => {
  const [experiences, skills, edus]: [IExperience[], ISkill[], IEdu[]] =
    await Promise.all([getExps(), getSkills(), getEdus()]);

  return (
    <div className="min-h-screen bg-obsidian text-pearl overflow-x-hidden selection:bg-luxury-gold selection:text-obsidian">
      {/* ===== HERO / DOSSIER HEADER ===== */}
      <section className="relative pt-32 pb-20 border-hairline-b overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              <span>Dossier // Engineering Profile &amp; Biography</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-pearl leading-[1.05]">
              Developer, systems architect, &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-cream via-luxury-gold to-luxury-champagne">
                craft-focused engineer.
              </span>
            </h1>

            <p className="text-pearl-muted text-base sm:text-xl leading-relaxed">
              Positioned at the intersection of rigorous frontend systems and
              distributed backends. I engineer production web applications with
              architectural discipline, strict typing, and high-performance
              micro-interactions.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL BIOGRAPHY & PORTRAIT ===== */}
      <section className="py-24 bg-carbon border-hairline-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Architectural Portrait */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-obsidian border border-luxury-gold/20 shadow-2xl">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/photo.jpg"
                    alt="Umang Sailor"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent pointer-events-none" />

                  {/* Corner telemetry tag */}
                  <div className="absolute bottom-4 left-4 z-10 flex flex-col font-mono text-xs">
                    <span className="text-pearl font-bold">UMANG SAILOR</span>
                    <span className="text-luxury-gold text-[11px]">
                      FULL-STACK SOFTWARE ENGINEER
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-obsidian/95 border-t border-luxury-gold/15 font-mono text-xs flex items-center justify-between text-pearl-dim">
                  <span>LOC: SURAT, GUJARAT, IN</span>
                  <span className="text-luxury-gold">UTC+05:30</span>
                </div>
              </div>

              {/* Quick Contacts Pill */}
              <div className="p-6 rounded-3xl bg-plate border border-luxury-gold/15 space-y-3 font-mono text-xs">
                <div className="text-pearl-dim uppercase tracking-wider mb-2">
                  Direct Inquiries
                </div>
                <CopyEmailButton className="w-full justify-between" />
              </div>
            </div>

            {/* Right: Narrative Storytelling & Positioning */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6 text-pearl-muted text-base sm:text-lg leading-relaxed">
                <h2 className="text-3xl font-extrabold text-pearl tracking-tight">
                  About My Engineering Approach
                </h2>

                <p>
                  I have spent the last 3+ years architecting and scaling web
                  applications in professional and corporate agile environments.
                  Currently developing commercial frontend solutions at{" "}
                  <strong className="text-pearl">WeeTech Solution</strong>, my
                  focus centers on building clean, type-safe, and resilient
                  software.
                </p>

                <p>
                  On the client side, I treat user interface development as a
                  discipline of precision. Using{" "}
                  <span className="text-pearl font-semibold">React 19</span>,{" "}
                  <span className="text-pearl font-semibold">Next.js 16</span>,{" "}
                  <span className="text-pearl font-semibold">TypeScript</span>, and{" "}
                  <span className="text-pearl font-semibold">Tailwind CSS</span>,
                  I engineer interfaces where layout shifts are eliminated,
                  render cycles are deterministic, and micro-interactions answer
                  user input with tactile spring physics and GSAP motion.
                </p>

                <p>
                  On the server side, I build scalable services with{" "}
                  <span className="text-pearl font-semibold">Node.js</span>,{" "}
                  <span className="text-pearl font-semibold">Nest.js</span>, and{" "}
                  <span className="text-pearl font-semibold">Express.js</span>,
                  leveraging{" "}
                  <span className="text-pearl font-semibold">PostgreSQL</span> and{" "}
                  <span className="text-pearl font-semibold">MongoDB</span> for
                  reliable persistence. I believe in modular codebases organized
                  through NX monorepos, strict API schemas, and robust error
                  handling.
                </p>
              </div>

              {/* Core Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-luxury-gold/15">
                <div className="p-5 rounded-2xl bg-plate border border-luxury-gold/15">
                  <div className="flex items-center gap-2 text-luxury-gold font-mono text-xs font-bold mb-2">
                    <HiOutlineCommandLine size={18} />
                    <span>01 // OWNERSHIP</span>
                  </div>
                  <h4 className="text-pearl font-bold text-base mb-1">
                    End-to-End Execution
                  </h4>
                  <p className="text-pearl-muted text-xs leading-relaxed">
                    Comfortable taking entire features from design prototypes to
                    production deployment with monitoring.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-plate border border-luxury-gold/15">
                  <div className="flex items-center gap-2 text-luxury-gold font-mono text-xs font-bold mb-2">
                    <HiOutlineBriefcase size={18} />
                    <span>02 // ARCHITECTURE</span>
                  </div>
                  <h4 className="text-pearl font-bold text-base mb-1">
                    Systems Rigor
                  </h4>
                  <p className="text-pearl-muted text-xs leading-relaxed">
                    Prioritizing clean interfaces, decoupled modules, domain
                    boundaries, and strict contract typing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAREER & ACADEMIC TIMELINE ===== */}
      <section className="py-24 bg-obsidian border-hairline-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
              <HiOutlineBriefcase size={14} />
              <span>Commercial Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pearl tracking-tight">
              Work Experience &amp; Impact
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp._id}
                className="p-8 sm:p-10 rounded-3xl bg-carbon border border-luxury-gold/15 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="space-y-2 lg:max-w-md">
                    <div className="text-xs font-mono text-pearl-dim uppercase">
                      {exp.address || "Surat, Gujarat, India"}
                    </div>
                    <h3 className="text-2xl font-bold text-pearl">
                      {exp.orgName}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-plate border border-luxury-gold/25 text-xs font-mono font-semibold text-luxury-gold">
                      {exp.position}
                    </div>
                  </div>

                  <div className="flex-1 lg:max-w-xl space-y-3">
                    <div className="font-mono text-xs text-pearl-dim lg:text-right">
                      {exp.duration?.start} — {exp.duration?.end || "Present"}
                    </div>
                    <p className="text-pearl-muted text-base leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Academic Credentials */}
            <div className="p-8 sm:p-10 rounded-3xl bg-carbon/70 border border-luxury-gold/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-plate border border-luxury-gold/20 text-luxury-gold flex items-center justify-center">
                  <HiOutlineAcademicCap size={22} />
                </div>
                <h3 className="text-xl font-bold text-pearl">
                  Formal Computer Engineering Foundation
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {edus.map((edu) => (
                  <div
                    key={edu._id}
                    className="p-5 rounded-2xl bg-obsidian/70 border border-luxury-gold/10 font-mono text-xs"
                  >
                    <div className="text-pearl font-bold text-sm mb-1">
                      {edu.degree}
                    </div>
                    <div className="text-pearl-dim mb-2">{edu.place}</div>
                    <div className="text-luxury-gold font-semibold">
                      {edu.marks}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNICAL ARSENAL ===== */}
      <InteractiveSkillsCloud skills={skills} />

      {/* ===== ACTION CTA ===== */}
      <section className="py-24 bg-carbon border-hairline-t text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Architectural Discourse // Direct Transmission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pearl tracking-tight">
            Systems architecture grounded in craft.
          </h2>
          <p className="text-pearl-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Dedicated to engineering distributed architectures that scale reliably under load,
            enforcing compile-time type safety, and delivering deterministic, zero-layout-shift interfaces.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <TransitionLink
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-extrabold text-sm hover:brightness-110 transition-all btn-press shadow-xl shadow-luxury-gold/20"
            >
              <span>Initiate Exchange</span>
              <HiArrowUpRight size={18} />
            </TransitionLink>
            <TransitionLink
              href="/project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-plate border border-luxury-gold/25 text-pearl hover:border-luxury-gold/60 text-sm font-medium transition-all btn-press"
            >
              <span>Inspect Flagship Artifacts</span>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import getSingleProject from "@/controllers/singleproject";
import getProjects from "@/controllers/project";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoChevronBack } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IProject } from "@/types";
import { HiArrowUpRight } from "react-icons/hi2";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>;
}

const Details = async ({
  params,
}: ProjectDetailsProps): Promise<React.JSX.Element> => {
  const { id } = await params;
  const project = await getSingleProject(id);

  if (!project || project.archived) {
    notFound();
  }

  // Fetch sibling projects (strictly non-archived)
  const allProjects: IProject[] = await getProjects();
  const siblingProjects = (allProjects || [])
    .filter((p) => !p.archived && String(p._id) !== id)
    .slice(0, 2);

  const techTags = (project.technology || "")
    .split(/[,·+]/)
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-obsidian text-pearl overflow-x-hidden selection:bg-luxury-gold selection:text-obsidian">
      {/* ===== HERO / HEADER ===== */}
      <section className="relative pt-32 pb-16 border-hairline-b overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          {/* Navigation Bar & Breadcrumb */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <TransitionLink
              href="/project"
              title="Return to Selected Works"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-plate border border-luxury-gold/20 text-pearl hover:text-luxury-gold hover:border-luxury-gold/50 text-xs font-mono transition-all btn-press shadow-md"
            >
              <IoChevronBack size={16} />
              <span>Index of Works</span>
            </TransitionLink>

            <nav className="hidden sm:flex items-center gap-2 text-xs font-mono text-pearl-dim">
              <TransitionLink href="/" className="hover:text-pearl transition-colors">
                Index
              </TransitionLink>
              <span>/</span>
              <TransitionLink href="/project" className="hover:text-pearl transition-colors">
                Works
              </TransitionLink>
              <span>/</span>
              <span className="text-luxury-gold font-semibold truncate max-w-[200px]">
                {project.title}
              </span>
            </nav>
          </div>

          {/* Project Title & Summary */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              <span>Production Artifact // Deep Dive</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-pearl leading-[1.05]">
              {project.title}
            </h1>

            {project.info && (
              <p className="text-pearl-muted text-lg sm:text-xl leading-relaxed">
                {project.info}
              </p>
            )}

            {/* CTAs: Live Demo & Repository */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.livedemo && project.livedemo !== "/" && (
                <a
                  href={project.livedemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-luxury-gold text-obsidian font-extrabold text-xs font-mono hover:bg-luxury-champagne transition-all btn-press shadow-xl shadow-luxury-gold/15"
                >
                  <FaExternalLinkAlt size={12} />
                  <span>Launch Live Deployment</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-plate border border-luxury-gold/20 hover:border-luxury-gold/50 text-pearl font-mono text-xs font-semibold transition-all btn-press shadow-md"
                >
                  <FaGithub size={15} />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PREVIEW MEDIA ===== */}
      <section className="py-16 bg-carbon border-hairline-b">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
          {/* Main Visual Showcase Image */}
          <div className="relative rounded-3xl overflow-hidden bg-obsidian border border-luxury-gold/15 shadow-2xl aspect-[16/10] sm:aspect-video flex items-center justify-center p-2 sm:p-6">
            <Image
              src={project.image?.link || "/code.png"}
              alt={project.title}
              width={1400}
              height={850}
              className="w-full h-full object-contain rounded-2xl"
              priority
            />
          </div>

          {/* Technical Specs & Architectural Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Summary description */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold text-pearl">
                Architectural Breakdown &amp; Engineering Scope
              </h2>

              {project.summary && /<[a-z][\s\S]*>/i.test(project.summary) ? (
                <div
                  className="text-pearl-muted text-base sm:text-lg leading-relaxed space-y-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>h3]:text-pearl [&>h3]:text-xl [&>h3]:font-bold [&>h4]:text-pearl [&>h4]:text-lg [&>h4]:font-semibold [&>a]:text-luxury-gold [&>a]:underline"
                  dangerouslySetInnerHTML={{ __html: project.summary }}
                />
              ) : (
                <p className="text-pearl-muted text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {project.summary || project.info}
                </p>
              )}
            </div>

            {/* Right: Technical Stack Pill Matrix */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-plate border border-luxury-gold/15 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-pearl-dim">
                Technology Specifications
              </div>

              <div className="flex flex-wrap gap-2">
                {techTags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-obsidian border border-luxury-gold/15 font-mono text-xs text-pearl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-luxury-gold/10 text-xs font-mono text-pearl-dim space-y-2">
                <div className="flex justify-between">
                  <span>DEPLOYMENT:</span>
                  <span className="text-luxury-gold">VERIFIED</span>
                </div>
                <div className="flex justify-between">
                  <span>ARCHITECTURE:</span>
                  <span className="text-pearl">FULL-STACK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SIBLING ARTIFACTS RECOMMENDATIONS ===== */}
      {siblingProjects.length > 0 && (
        <section className="py-24 bg-obsidian border-hairline-t">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-pearl">
                Other Selected Works
              </h2>
              <TransitionLink
                href="/project"
                className="text-xs font-mono text-luxury-gold hover:underline flex items-center gap-1"
              >
                <span>View Full Index</span>
                <span>→</span>
              </TransitionLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siblingProjects.map((sibling) => (
                <TransitionLink
                  key={sibling._id}
                  href={`/project/${sibling._id}`}
                  className="group p-6 rounded-3xl bg-carbon border border-luxury-gold/15 hover:border-luxury-gold/40 transition-all btn-press shadow-xl"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden bg-obsidian mb-4 border border-luxury-gold/10">
                    <Image
                      src={sibling.image?.link || "/code.png"}
                      alt={sibling.title}
                      width={640}
                      height={360}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-pearl text-lg group-hover:text-luxury-gold transition-colors">
                        {sibling.title}
                      </h3>
                      <p className="text-pearl-dim text-xs font-mono mt-0.5 truncate max-w-xs">
                        {sibling.technology}
                      </p>
                    </div>
                    <HiArrowUpRight size={18} className="text-pearl-dim group-hover:text-luxury-gold group-hover:translate-x-0.5 transition-all" />
                  </div>
                </TransitionLink>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Details;

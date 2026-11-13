import React from "react";
import getSingleProject from "@/controllers/singleproject";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import DelProjBtn from "@/components/Delete/DelProjBtn";
import Image from "next/image";
import { IProject } from "@/types";

interface DetailsProps {
  params: Promise<{ id: string }>;
}

const Details = async ({ params }: DetailsProps): Promise<React.JSX.Element> => {
  const { id } = await params;
  const project: IProject | null = await getSingleProject(id);

  if (!project) {
    return (
      <div className="w-full py-16 text-center space-y-4">
        <div className="bg-carbon rounded-3xl p-8 border border-luxury-gold/15 max-w-md mx-auto space-y-4">
          <p className="text-pearl-dim font-mono text-xs">Project artifact not found</p>
          <Link
            href="/admin/project"
            className="inline-flex items-center gap-2 text-luxury-gold hover:underline font-mono text-xs"
          >
            <FiArrowLeft size={14} /> Back to Projects Registry
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
      {/* Top action bar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Link
          href="/admin/project"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-carbon hover:bg-plate border border-luxury-gold/15 text-pearl-muted hover:text-pearl font-mono text-xs transition-colors"
        >
          <FiArrowLeft size={14} />
          <span>Return to Projects</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={`/admin/project/edit-project/${project._id}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all shadow-md"
          >
            <HiPencilAlt size={15} />
            <span>Edit Artifact</span>
          </Link>
          <DelProjBtn
            id={String(project._id)}
            name={project.image?.name}
          />
        </div>
      </div>

      {/* Main Project Card */}
      <div className="rounded-3xl bg-carbon border border-luxury-gold/20 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-luxury-gold/15 bg-obsidian/60 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
              <span className="font-mono text-xs text-luxury-gold font-bold">
                ARTIFACT DOSSIER
              </span>
            </div>
            {project.archived ? (
              <span className="px-3 py-1 rounded-full bg-obsidian border border-pearl-dim/30 font-mono text-xs text-pearl-dim">
                Archived State
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400">
                Live in Public Catalog
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pearl tracking-tight">
            {project.title}
          </h1>

          <p className="text-pearl-muted text-sm sm:text-base leading-relaxed max-w-3xl">
            {project.info}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.livedemo && (
              <a
                href={project.livedemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-plate hover:bg-plate-elevated border border-luxury-gold/30 text-pearl font-mono text-xs transition-colors"
              >
                <FiExternalLink size={14} className="text-luxury-gold" />
                <span>Live Demonstration</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-plate hover:bg-plate-elevated border border-luxury-gold/30 text-pearl font-mono text-xs transition-colors"
              >
                <FiGithub size={14} className="text-luxury-gold" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Screenshot preview */}
        {project.image?.link && (
          <div className="p-6 sm:p-8 border-b border-luxury-gold/15 bg-obsidian/40">
            <div className="relative rounded-2xl overflow-hidden border border-luxury-gold/20 shadow-xl aspect-video w-full max-h-[500px]">
              <Image
                src={project.image.link}
                alt={project.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Technologies & Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-pearl-dim mb-3">
              TECHNOLOGY STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technology.split(",").map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-obsidian border border-luxury-gold/15 font-mono text-xs text-pearl"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-pearl-dim mb-3">
              TECHNICAL CASE STUDY &amp; SUMMARY
            </div>
            <div
              className="p-6 rounded-2xl bg-obsidian border border-luxury-gold/15 font-sans text-sm sm:text-base text-pearl-muted leading-relaxed prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: project.summary }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

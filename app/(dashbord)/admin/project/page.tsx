import Link from "next/link";
import React from "react";
import Image from "next/image";
import getProjects from "@/controllers/project";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { FiPlus, FiExternalLink, FiGithub } from "react-icons/fi";
import { TotalProject } from "@/components/total/Total";
import DelProjBtn from "@/components/Delete/DelProjBtn";
import { IProject } from "@/types";

const ProjectList = async (): Promise<React.JSX.Element> => {
  const projects: IProject[] = await getProjects({ all: true });
  let i = 1;

  const activeCount = projects.filter((p) => !p.archived).length;
  const archivedCount = projects.filter((p) => p.archived).length;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-luxury-gold/15">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-carbon border border-luxury-gold/25 text-luxury-gold flex items-center justify-center shadow-lg">
            <TbReportAnalytics size={22} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
              Production Projects Registry
            </h2>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              {activeCount} active in public catalog · {archivedCount} archived
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-carbon border border-luxury-gold/15 text-center flex items-center gap-2">
            <span className="text-xs font-mono text-pearl-dim">TOTAL:</span>
            <TotalProject />
          </div>
          <Link
            href="/admin/project/addproject"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all btn-press shadow-md cursor-pointer flex-shrink-0"
          >
            <FiPlus size={15} />
            <span>Deploy Project</span>
          </Link>
        </div>
      </div>

      {/* Table card */}
      <div className="bg-carbon rounded-3xl border border-luxury-gold/15 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          {projects && projects.length > 0 ? (
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-obsidian/60 border-b border-luxury-gold/15 font-mono text-[11px] text-pearl-dim uppercase tracking-wider">
                  <th className="px-5 py-4 w-12 text-center">#</th>
                  <th className="px-5 py-4">Artifact / System</th>
                  <th className="px-5 py-4 hidden md:table-cell">Architecture Scope</th>
                  <th className="px-5 py-4 hidden lg:table-cell">Stack</th>
                  <th className="px-5 py-4 text-center">State</th>
                  <th className="px-5 py-4 text-right w-36">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-luxury-gold/10">
                {projects.map((project) => (
                  <tr
                    key={String(project._id)}
                    className="hover:bg-plate/40 transition-colors duration-150"
                  >
                    <td className="px-5 py-4 text-pearl-dim font-mono text-xs text-center">
                      {i++}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3.5">
                        {project.image?.link ? (
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-obsidian border border-luxury-gold/15 flex-shrink-0">
                            <Image
                              src={project.image.link}
                              alt={project.title}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-obsidian border border-luxury-gold/15 flex items-center justify-center text-luxury-gold text-xs font-mono font-bold flex-shrink-0">
                            PRJ
                          </div>
                        )}
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-pearl text-sm truncate">
                            {project.title}
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            {project.livedemo && (
                              <a
                                href={project.livedemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-mono text-luxury-gold hover:underline flex items-center gap-1"
                              >
                                Live Demo <FiExternalLink size={10} />
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-mono text-pearl-dim hover:text-pearl flex items-center gap-1"
                              >
                                Repo <FiGithub size={10} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-pearl-muted text-xs hidden md:table-cell max-w-xs">
                      <span className="line-clamp-2 leading-relaxed">{project.info}</span>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell max-w-xs">
                      <span className="font-mono text-[11px] text-pearl-dim truncate block">
                        {project.technology}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      {project.archived ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-obsidian border border-pearl-dim/30 text-pearl-dim">
                          Archived
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Catalog
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/admin/project/${project._id}`}
                          title="View Details"
                          className="w-8 h-8 rounded-lg bg-obsidian hover:bg-plate border border-luxury-gold/15 flex items-center justify-center text-pearl-dim hover:text-pearl transition-colors"
                        >
                          <AiOutlineEye size={16} />
                        </Link>
                        <Link
                          href={`/admin/project/edit-project/${project._id}`}
                          title="Edit Project"
                          className="w-8 h-8 rounded-lg bg-obsidian hover:bg-plate border border-luxury-gold/15 flex items-center justify-center text-luxury-gold transition-colors"
                        >
                          <HiPencilAlt size={16} />
                        </Link>
                        <DelProjBtn
                          id={String(project._id)}
                          name={project.image?.name}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="py-20 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-luxury-gold/20 flex items-center justify-center mx-auto text-luxury-gold">
                <TbReportAnalytics size={24} />
              </div>
              <div>
                <p className="text-pearl font-bold text-base">
                  No project artifacts registered
                </p>
                <p className="text-pearl-dim font-mono text-xs mt-1">
                  Deploy your first engineering case study to the catalog.
                </p>
              </div>
              <Link
                href="/admin/project/addproject"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all btn-press shadow-md"
              >
                <FiPlus size={15} />
                <span>Deploy Project Now</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

import React from "react";
import getSingleProject from "@/controllers/singleproject";
import getProjects from "@/controllers/project";
import TransitionLink from "@/components/transitions/TransitionLink";
import { IoChevronBack } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IProject } from "@/types";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>;
}

const Details = async ({
  params,
}: ProjectDetailsProps): Promise<React.JSX.Element> => {
  const { id } = await params;
  const project = await getSingleProject(id);

  if (!project) {
    notFound();
  }

  // Fetch other projects for bottom recommendation section
  const allProjects: IProject[] = await getProjects();
  const otherProjects = (allProjects || [])
    .filter((p) => String(p._id) !== id)
    .slice(0, 2);

  // Split technology string into individual tags
  const techTags = (project.technology || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== HERO / HEADER ===== */}
      <div className="relative pt-28 pb-16 bg-gradient-to-br from-white via-green-50/50 to-emerald-50/60 overflow-hidden border-b border-gray-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-100/70 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-emerald-100/60 blur-3xl animate-float-delayed" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #16a34a 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          {/* Breadcrumbs & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <TransitionLink
              href="/project"
              title="Back to all projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-gray-200 text-gray-700 hover:text-green-600 hover:border-green-300 shadow-sm hover:shadow transition-all duration-200 text-sm font-semibold cursor-pointer gsap-magnetic"
            >
              <IoChevronBack size={18} className="text-gray-600" />
              <span>Back to Projects</span>
            </TransitionLink>

            <nav className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
              <TransitionLink href="/" className="hover:text-green-600 transition-colors">
                Home
              </TransitionLink>
              <span>/</span>
              <TransitionLink href="/project" className="hover:text-green-600 transition-colors">
                Projects
              </TransitionLink>
              <span>/</span>
              <span className="text-gray-900 font-medium truncate max-w-[200px]">
                {project.title}
              </span>
            </nav>
          </div>

          {/* Project Title & Summary */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Project Overview</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
              {project.title}
            </h1>

            {project.info && (
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-normal">
                {project.info}
              </p>
            )}

            {/* CTAs: Github & Live Demo */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer gsap-magnetic"
                >
                  <FaGithub size={17} />
                  <span>View Source Code</span>
                </a>
              )}

              {project.livedemo && project.livedemo !== "/" && (
                <a
                  href={project.livedemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300 transition-all duration-200 cursor-pointer gsap-magnetic"
                >
                  <FaExternalLinkAlt size={13} />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-green-100/30 overflow-hidden">
            {/* Featured Image */}
            <div className="relative w-full aspect-video max-h-[620px] bg-gray-100 overflow-hidden border-b border-gray-100 flex items-center justify-center p-2 sm:p-4">
              <Image
                width={1200}
                height={750}
                className="w-full h-full object-contain rounded-2xl"
                src={project.image?.link || "/code.png"}
                alt={project.title}
                priority
              />
            </div>

            {/* Project Details Body */}
            <div className="p-6 sm:p-10 md:p-12">
              {/* Tech Stack Pills */}
              {techTags.length > 0 && (
                <div className="mb-10 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3.5 uppercase tracking-wider">
                    <GrTechnology className="text-green-600" size={16} />
                    <span>Technologies & Architecture</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-green-50 text-green-800 border border-green-200/70 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary / Article */}
              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  About this project
                </h3>
                <div
                  className="text-gray-700 leading-relaxed space-y-4 project-summary-html"
                  dangerouslySetInnerHTML={{ __html: project.summary }}
                />
              </div>
            </div>
          </div>

          {/* ===== MORE PROJECTS SECTION ===== */}
          {otherProjects.length > 0 && (
            <div className="mt-20 pt-10 border-t border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Explore More Projects
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Discover other works crafted with precision and modern tools.
                  </p>
                </div>
                <TransitionLink
                  href="/project"
                  className="hidden sm:inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors"
                >
                  <span>View All Projects</span>
                  <span>→</span>
                </TransitionLink>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.map((other) => (
                  <TransitionLink
                    key={other._id}
                    href={`/project/${other._id}`}
                    className="group block cursor-pointer"
                  >
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 rounded-xl overflow-hidden bg-gray-100 mb-4">
                        <Image
                          src={other.image?.link || "/code.png"}
                          alt={other.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                            {other.title}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                            {other.info}
                          </p>
                        </div>
                        <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0 text-sm font-bold">
                          →
                        </span>
                      </div>
                    </div>
                  </TransitionLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Details;

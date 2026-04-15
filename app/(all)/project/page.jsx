import Link from "next/link";
import React from "react";
import { GrTechnology } from "react-icons/gr";
import getProjects from "@/controllers/project";

async function ProjectList() {
  const projects = await getProjects();
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ===== HERO ===== */}
      <div className="relative pt-28 pb-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-900/30 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-emerald-900/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #22c55e 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/40 border border-green-700/50 text-green-400 text-sm font-medium mb-6">
            All Work
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg">
            A curated collection of web applications, tools, and experiments
            I've built — click any card to explore.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-20 fill-gray-50"
          >
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,56C1120,59,1280,53,1360,50.7L1440,48L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </div>

      {/* ===== PROJECTS GRID ===== */}
      <section className="bg-gray-50 pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {projects ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects?.map((project) => (
                <Link
                  key={project._id}
                  href={`/project/${project._id}`}
                  className="group block cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-1">
                    {/* Image */}
                    <div
                      className="relative h-72 overflow-hidden bg-gray-200 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${project.image.link})`,
                        backgroundPosition: "center center",
                      }}
                    >
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-sm text-green-300 font-medium mb-1">
                          View Project →
                        </p>
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {project.info}
                        </p>
                      </div>
                    </div>

                    {/* Footer bar */}
                    <div className="px-5 py-4 flex items-center justify-between bg-white">
                      <div>
                        <h2 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors duration-150 capitalize">
                          {project.title}
                        </h2>
                        <div className="flex items-center gap-1.5 mt-1">
                          <GrTechnology size={13} className="text-green-500" />
                          <span className="text-xs text-gray-400 font-medium">
                            {project.technology}
                          </span>
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-200 flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No projects yet
              </h3>
              <p className="text-gray-400">
                Projects will appear here once added from the admin panel.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProjectList;

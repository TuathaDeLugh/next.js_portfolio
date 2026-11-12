"use client";

import React from "react";
import { IExperience } from "@/types";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi2";

interface Props {
  experiences: IExperience[];
}

export const ExperienceTimelineSection: React.FC<Props> = ({ experiences }) => {
  return (
    <section className="relative py-28 bg-obsidian border-hairline-t overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-white/10 text-signal-emerald font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald" />
              <span>Proven Track Record · Career History</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
              Engineering experience &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pearl via-pearl to-pearl-muted">
                commercial ownership.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-pearl-muted text-base leading-relaxed">
              Real commercial responsibility — building agile client portals,
              designing robust backends, and taking features from design
              specifications all the way into production deployment.
            </p>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const isCurrent =
              (exp.duration?.end || "").toLowerCase() === "present";

            return (
              <div
                key={exp._id}
                className="group relative p-5 sm:p-8 lg:p-10 rounded-3xl bg-carbon border border-white/10 hover:border-signal-emerald/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Column: Role & Organization */}
                  <div className="space-y-2 lg:max-w-md">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-plate border border-white/10 text-signal-emerald">
                        <HiOutlineBriefcase size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase text-pearl-dim">
                          {exp.address || "Surat, Gujarat, India"}
                        </div>
                        <h3 className="text-2xl font-bold text-pearl group-hover:text-signal-emerald transition-colors">
                          {exp.orgName}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-plate border border-white/10 text-xs font-mono font-semibold text-signal-cyan">
                        {exp.position}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Duration badge & Summary */}
                  <div className="flex-1 lg:max-w-xl space-y-4">
                    <div className="flex items-center justify-between sm:justify-end gap-3 font-mono text-xs">
                      {isCurrent && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-signal-emerald/10 border border-signal-emerald/30 text-signal-emerald font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald animate-ping" />
                          <span>Active Role</span>
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-plate border border-white/10 text-pearl-muted">
                        {exp.duration?.start} — {exp.duration?.end || "Present"}
                      </span>
                    </div>

                    <p className="text-pearl-muted text-sm sm:text-base leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Academic Background Card */}
          <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-carbon/50 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-plate border border-white/10 text-signal-cyan flex-shrink-0">
                <HiOutlineAcademicCap size={24} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-pearl-dim">
                  Formal Computer Engineering Foundation
                </div>
                <h4 className="text-lg font-bold text-pearl mt-0.5">
                  Diploma in Information Technology · GTU
                </h4>
                <div className="text-xs text-pearl-muted font-mono mt-1">
                  Tapi Diploma Engineering College, Surat · CGPA: 8.35 / 10.0
                </div>
              </div>
            </div>

            <div className="font-mono text-xs text-pearl-dim px-4 py-2 rounded-xl bg-plate border border-white/5 self-start md:self-auto">
              10th GSEB Rank: 89.80 Percentile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimelineSection;

import getExps from "@/controllers/exp";
import React from "react";
import { MdWorkOutline } from "react-icons/md";

export default async function AboutExp() {
  const exps = await getExps();

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    if (dateStr.toLowerCase() === "present") return "Present";
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr; // return as-is if already "Jan 2022" style string
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  if (!exps || exps.length === 0) return null;

  return (
    <div className="mt-2">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
          <MdWorkOutline size={16} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Work Experience</h3>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-0 bottom-0 w-px bg-green-100" />

        <div className="space-y-6">
          {exps.map((exp, index) => (
            <div key={exp._id} className="relative flex gap-5">
              {/* Dot */}
              <div className="relative flex-shrink-0 flex flex-col items-center">
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 ${
                  index === 0
                    ? "bg-green-500 border-green-500"
                    : "bg-white border-green-300"
                }`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    index === 0 ? "bg-white" : "bg-green-400"
                  }`} />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 pb-2">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-200 p-5 group">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900 text-base group-hover:text-green-700 transition-colors duration-150">
                        {exp.orgName}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-100">
                          {exp.position}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 inline-block">
                        {formatDate(exp.duration?.start)} – {formatDate(exp.duration?.end || "Present")}
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  {exp.address && (
                    <div className="flex items-center gap-1.5 mb-3 text-xs text-gray-400 font-medium">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.address}
                    </div>
                  )}

                  {/* Summary */}
                  {exp.summary && (
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {exp.summary}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

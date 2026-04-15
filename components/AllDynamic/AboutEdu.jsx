import getEdus from '@/controllers/edu';
import React, { Suspense } from 'react';
import { PiStudentBold } from "react-icons/pi";

export default async function AboutEdu() {
  const edus = await getEdus();

  if (!edus || edus.length === 0) return null;

  return (
    <div className="mb-10">
      {/* Section Header */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm">
            <PiStudentBold size={18} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Education</h3>
        </div>
      </div>

      {/* Education Cards */}
      <div className="space-y-4">
        {edus.map((edu) => (
          <div
            key={edu._id}
            className="group relative bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
          >
            {/* Degree Title */}
            <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200 mb-1">
              {edu.degree}
            </h4>
            
            {/* Institution / Place */}
            <div className="flex items-start gap-2 mb-3 text-sm text-gray-500 font-medium">
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="leading-relaxed">{edu.place}</span>
            </div>

            {/* Marks / Performance Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-bold text-emerald-700 tracking-wide">
                {edu.marks}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import getExps from "@/controllers/exp";
import { IExperience } from "@/types";
import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";

const AboutExp = async (): Promise<React.JSX.Element | null> => {
  const exps: IExperience[] = await getExps();

  if (!exps || exps.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase text-pearl-dim">
        <HiOutlineBriefcase size={16} className="text-sky-400" />
        <span>Verified Commercial History</span>
      </div>

      <div className="space-y-4">
        {exps.map((exp) => (
          <div
            key={exp._id}
            className="p-6 rounded-2xl bg-plate/60 border border-white/5 hover:border-indigo-400/40 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h4 className="font-bold text-pearl text-base">
                {exp.orgName}
              </h4>
              <div className="font-mono text-xs text-pearl-dim">
                {exp.duration?.start} — {exp.duration?.end || "Present"}
              </div>
            </div>
            <div className="text-xs font-mono text-sky-400 mb-2">
              {exp.position}
            </div>
            <p className="text-xs text-pearl-muted leading-relaxed">
              {exp.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutExp;

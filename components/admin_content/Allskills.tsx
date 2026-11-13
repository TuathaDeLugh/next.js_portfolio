import React from "react";
import { TbCpu } from "react-icons/tb";
import DelSkillBtn from "../Delete/DelSkillBtn";
import AddSkill from "../InsertForm/AddSkill";
import getSkills from "@/controllers/skill";
import { ISkill } from "@/types";

const Allskills = async (): Promise<React.JSX.Element> => {
  const skills: ISkill[] = await getSkills();

  return (
    <div className="w-full bg-carbon rounded-3xl border border-luxury-gold/15 shadow-xl overflow-hidden mb-8">
      {/* Header */}
      <div className="px-6 py-5 border-b border-luxury-gold/15 flex items-center justify-between bg-obsidian/60 flex-wrap gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-obsidian border border-luxury-gold/25 text-luxury-gold flex items-center justify-center shadow-md">
            <TbCpu size={20} />
          </div>
          <div>
            <h3 className="font-bold text-pearl text-base sm:text-lg">
              Technical Arsenal &amp; Skills Registry
            </h3>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              {skills?.length || 0} production technologies indexed
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <AddSkill />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-carbon/40">
        <div className="flex flex-wrap gap-2.5">
          {skills?.map((skill) => (
            <div
              key={skill._id}
              className="group flex items-center gap-2 py-1.5 pl-3 pr-2 rounded-xl bg-obsidian/90 border border-luxury-gold/15 hover:border-luxury-gold/45 transition-all duration-150 shadow-sm"
            >
              <span className="font-mono text-xs font-medium text-pearl">
                {skill.lang}
              </span>
              <div className="opacity-40 group-hover:opacity-100 transition-opacity">
                <DelSkillBtn id={skill._id} />
              </div>
            </div>
          ))}
          {(!skills || skills.length === 0) && (
            <p className="text-pearl-dim font-mono text-xs py-4">
              No technologies cataloged in registry.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allskills;

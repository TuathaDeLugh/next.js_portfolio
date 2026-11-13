import getSkills from "@/controllers/skill";
import { ISkill } from "@/types";
import React from "react";

const CATEGORIES = [
  {
    key: "frontend",
    label: "Frontend & UI",
    keywords: ["react", "next", "vue", "angular", "tailwind", "typescript", "javascript", "html", "css", "motion", "gsap", "sass", "redux", "shadcn", "mui"],
  },
  {
    key: "backend",
    label: "Backend & Systems",
    keywords: ["node", "express", "nest", "rest", "api", "python", "graphql"],
  },
  {
    key: "database",
    label: "Data & Storage",
    keywords: ["mongo", "postgres", "mysql", "firebase", "prisma", "sql", "redis"],
  },
  {
    key: "devops",
    label: "DevOps & Tooling",
    keywords: ["docker", "kubernetes", "git", "github", "gitlab", "postman", "nx"],
  },
];

function categorize(skillName: string): string {
  const lower = skillName.toLowerCase();
  for (const cat of CATEGORIES) {
    if (cat.keywords.some((kw) => lower.includes(kw))) return cat.key;
  }
  return "other";
}

const AboutSkill = async (): Promise<React.JSX.Element | null> => {
  const skills: ISkill[] = await getSkills();

  if (!skills || skills.length === 0) return null;

  const grouped: Record<string, ISkill[]> = {
    frontend: [],
    backend: [],
    database: [],
    devops: [],
    other: [],
  };

  for (const skill of skills) {
    const key = categorize(skill.lang);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(skill);
  }

  const activeCategories = [
    ...CATEGORIES,
    { key: "other", label: "Other Technologies", keywords: [] },
  ].filter((c) => grouped[c.key]?.length > 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {activeCategories.map((cat) => (
        <div
          key={cat.key}
          className="p-6 rounded-3xl bg-carbon border border-luxury-gold/15 shadow-lg space-y-4"
        >
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="font-bold text-luxury-gold uppercase tracking-wider">
              {cat.label}
            </span>
            <span className="text-pearl-dim">
              {grouped[cat.key].length} Technologies
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {grouped[cat.key].map((skill) => (
              <span
                key={skill._id}
                className="px-3 py-1 rounded-xl bg-obsidian border border-luxury-gold/15 font-mono text-xs text-pearl hover:border-luxury-gold/40 transition-colors"
              >
                {skill.lang}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkill;

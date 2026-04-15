import getSkills from '@/controllers/skill';
import React from 'react';

// ── Category lookup map ────────────────────────────────────────────────────
// Keys are lowercase skill name fragments; first match wins.
const CATEGORY_MAP = [
  {
    key: 'frontend',
    label: 'Frontend',
    color: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-700', badge: 'bg-blue-500', head: 'text-blue-600' },
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    keywords: ['react', 'next', 'vue', 'angular', 'svelte', 'html', 'css', 'tailwind', 'bootstrap', 'sass', 'scss', 'redux', 'zustand', 'vite', 'webpack', 'typescript', 'javascript', 'jquery', 'framer', 'mui', 'material', 'antd', 'chakra', 'styled'],
  },
  {
    key: 'backend',
    label: 'Backend',
    color: { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-700', badge: 'bg-purple-500', head: 'text-purple-600' },
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    keywords: ['node', 'express', 'django', 'flask', 'fastapi', 'spring', 'laravel', 'php', 'ruby', 'rails', 'graphql', 'rest', 'api', 'python', 'java', 'go', 'rust', 'c#', '.net', 'dotnet', 'nest'],
  },
  {
    key: 'database',
    label: 'Database',
    color: { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-700', badge: 'bg-amber-500', head: 'text-amber-600' },
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    keywords: ['mongo', 'mysql', 'postgres', 'sqlite', 'redis', 'firebase', 'supabase', 'prisma', 'dynamo', 'cassandra', 'elasticsearch', 'sql', 'database', 'db', 'oracle'],
  },
  {
    key: 'devops',
    label: 'DevOps & Tools',
    color: { bg: 'bg-green-50', border: 'border-green-100', text: 'text-green-700', badge: 'bg-green-500', head: 'text-green-600' },
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    keywords: ['docker', 'kubernetes', 'k8s', 'aws', 'gcp', 'azure', 'vercel', 'netlify', 'heroku', 'ci', 'cd', 'github', 'gitlab', 'bitbucket', 'git', 'linux', 'nginx', 'apache', 'terraform', 'ansible', 'jenkins'],
  },
  {
    key: 'other',
    label: 'Other',
    color: { bg: 'bg-gray-50', border: 'border-gray-100', text: 'text-gray-700', badge: 'bg-gray-500', head: 'text-gray-600' },
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    keywords: [], // catch-all
  },
];

function categorize(skillName) {
  const lower = skillName.toLowerCase();
  for (const cat of CATEGORY_MAP) {
    if (cat.keywords.some((kw) => lower.includes(kw))) return cat.key;
  }
  return 'other';
}

export default async function AboutSkill() {
  const skills = await getSkills();

  if (!skills || skills.length === 0) return null;

  // Group skills by category, preserving CATEGORY_MAP order
  const grouped = {};
  for (const cat of CATEGORY_MAP) grouped[cat.key] = [];
  for (const skill of skills) {
    const key = categorize(skill.lang);
    grouped[key].push(skill);
  }

  // Only render categories that have at least one skill
  const activeCats = CATEGORY_MAP.filter((cat) => grouped[cat.key].length > 0);

  return (
    <div className="space-y-5 mt-2">
      {activeCats.map((cat) => (
        <div
          key={cat.key}
          className={`rounded-2xl border ${cat.color.border} ${cat.color.bg} p-4`}
        >
          {/* Category header */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-6 h-6 rounded-md ${cat.color.badge} text-white flex items-center justify-center flex-shrink-0`}>
              {cat.icon}
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider ${cat.color.head}`}>
              {cat.label}
            </span>
            <span className="ml-auto text-xs text-gray-400 font-medium">
              {grouped[cat.key].length} skill{grouped[cat.key].length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2">
            {grouped[cat.key].map((skill) => (
              <span
                key={skill._id}
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${cat.color.border} ${cat.color.text} bg-white/80`}
              >
                {skill.lang}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

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
    keywords: ['react', 'next', 'vue', 'angular', 'svelte', 'redux', 'zustand', 'vite', 'webpack', 'typescript', 'javascript', 'jquery', 'html'],
  },
  {
    key: 'design',
    label: 'Design & Styling',
    color: { bg: 'bg-pink-50', border: 'border-pink-100', text: 'text-pink-700', badge: 'bg-pink-500', head: 'text-pink-600' },
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3M9.707 3.293l-3.32 3.32a.5.5 0 000 .707L16.035 17h3.914l1.344-3.555-6.858-6.142-2.31 2.31a.5.5 0 01-.707 0L9.707 3.293z" />
      </svg>
    ),
    keywords: ['css', 'tailwind', 'bootstrap', 'sass', 'scss', 'mui', 'material', 'antd', 'chakra', 'styled', 'framer', 'shadcn', 'figma', 'canva', 'ui', 'ux'],
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
    color: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-700', badge: 'bg-indigo-500', head: 'text-indigo-600' },
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {activeCats.map((cat) => (
        <div
          key={cat.key}
          className="group relative flex flex-col h-full rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 hover:-translate-y-1 overflow-hidden"
        >
          {/* Subtle background glow based on category color */}
          <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 ${cat.color.badge}`} />
          
          {/* Category header */}
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className={`w-12 h-12 rounded-2xl ${cat.color.bg} ${cat.color.head} flex items-center justify-center flex-shrink-0 shadow-inner transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
              {cat.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {cat.label}
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                {grouped[cat.key].length} {grouped[cat.key].length === 1 ? 'Skill' : 'Skills'}
              </p>
            </div>
          </div>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2.5 mt-auto relative z-10">
            {grouped[cat.key].map((skill) => (
              <span
                key={skill._id}
                className="px-3.5 py-1.5 rounded-xl text-sm font-semibold border border-gray-100 text-gray-700 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-default"
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

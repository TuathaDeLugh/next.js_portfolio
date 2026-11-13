import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(all)/api/auth/[...nextauth]/route";
import getProjects from "@/controllers/project";
import getEmails from "@/controllers/email";
import getStandards from "@/controllers/standard";
import getSkills from "@/controllers/skill";
import getExps from "@/controllers/exp";
import {
  TbReportAnalytics,
  TbId,
  TbCpu,
  TbServer,
  TbShieldCheck,
  TbBrandSpeedtest,
} from "react-icons/tb";
import {
  FiMessageSquare,
  FiArrowUpRight,
  FiPlus,
  FiTerminal,
  FiLayers,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const AdminDashboard: React.FC = async () => {
  const session = await getServerSession(authOptions);

  const [projects, emails, standards, skills, experiences] = await Promise.all([
    getProjects({ all: true }),
    getEmails(),
    getStandards(),
    getSkills(),
    getExps(),
  ]);

  const activeProjectsCount = projects.filter((p) => !p.archived).length;
  const archivedProjectsCount = projects.filter((p) => p.archived).length;

  const quickLinks = [
    {
      title: "Production Projects",
      subtitle: `${projects.length} artifacts registered (${activeProjectsCount} active · ${archivedProjectsCount} archived)`,
      desc: "Manage showcased software artifacts, technical case studies, live demo endpoints, and repository links.",
      href: "/admin/project",
      icon: TbReportAnalytics,
      cta: "Open Project Registry",
      actionHref: "/admin/project/addproject",
      actionText: "Deploy New Project",
    },
    {
      title: "Engineering Content",
      subtitle: `${standards.length} standards · ${skills.length} skills · ${experiences.length} career milestones`,
      desc: "Update core technical competencies, engineering philosophy manifesto, and career trajectory timeline.",
      href: "/admin/content",
      icon: TbId,
      cta: "Open Content Registry",
      actionHref: "/admin/content/add/exp",
      actionText: "Add Milestone",
    },
    {
      title: "Inbound Transmissions",
      subtitle: `${emails.length} messages received via public contact channel`,
      desc: "Review incoming inquiries, technical correspondences, and direct messages dispatched from the public terminal.",
      href: "/admin/contact",
      icon: FiMessageSquare,
      cta: "Open Inbox Terminal",
      actionHref: "/admin/contact",
      actionText: "Inspect Messages",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ===================== EXECUTIVE COMMAND BANNER ===================== */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-carbon to-obsidian border border-luxury-gold/25 p-6 sm:p-8 lg:p-10 shadow-2xl">
        {/* Ambient luminous glow circles */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-luxury-gold/[0.12] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-luxury-bronze/[0.1] blur-[120px]" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian border border-luxury-gold/25 font-mono text-[11px] text-luxury-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>CORE ARCHITECTURAL TELEMETRY // ACTIVE SESSION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pearl tracking-tight leading-tight">
              Welcome back,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-highlight via-luxury-gold to-luxury-champagne">
                {session?.user?.name || "Umang Sailor"}
              </span>
            </h2>

            <p className="text-pearl-muted text-sm sm:text-base leading-relaxed">
              Senior Full-Stack Systems &amp; Design Engineer. All telemetry channels are
              operational. Core system metrics locked at sub-16ms budget with zero layout reflow.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs text-pearl-dim">
              <span className="px-2.5 py-1 rounded-lg bg-obsidian/80 border border-luxury-gold/15 text-pearl">
                OPERATOR: {session?.user?.username || "admin"}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-obsidian/80 border border-luxury-gold/15 text-luxury-gold">
                ROLE: {session?.user?.role || "Lead Architect"}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-obsidian/80 border border-luxury-gold/15 text-pearl-dim">
                SURAT · UTC+05:30
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
            <Link
              href="/admin/project/addproject"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all btn-press shadow-xl shadow-luxury-gold/20"
            >
              <FiPlus size={16} />
              <span>Deploy New Project</span>
            </Link>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-plate hover:bg-plate-elevated border border-luxury-gold/25 hover:border-luxury-gold/50 text-pearl font-mono text-xs font-semibold transition-all btn-press"
            >
              <span>View Public Atelier</span>
              <FiArrowUpRight size={15} className="text-luxury-gold" />
            </a>
          </div>
        </div>
      </div>

      {/* ===================== TELEMETRY METRIC CARDS ===================== */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-luxury-gold uppercase tracking-wider">
            <FiLayers size={14} />
            <span>Telemetry Metrics Matrix</span>
          </div>
          <span className="font-mono text-[11px] text-pearl-dim">REAL-TIME DB SYNC</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Projects */}
          <Link
            href="/admin/project"
            className="p-5 sm:p-6 rounded-2xl bg-carbon border border-luxury-gold/15 hover:border-luxury-gold/40 hover:bg-plate transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-pearl-dim uppercase tracking-wider">
                01 // ARTIFACTS
              </span>
              <div className="w-8 h-8 rounded-lg bg-obsidian border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform">
                <TbReportAnalytics size={16} />
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-pearl">
                {projects.length}
              </div>
              <div className="text-xs text-pearl-muted font-mono mt-1">
                {activeProjectsCount} active · {archivedProjectsCount} archived
              </div>
            </div>
          </Link>

          {/* Card 2: Inbound Transmissions */}
          <Link
            href="/admin/contact"
            className="p-5 sm:p-6 rounded-2xl bg-carbon border border-luxury-gold/15 hover:border-luxury-gold/40 hover:bg-plate transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-pearl-dim uppercase tracking-wider">
                02 // INQUIRIES
              </span>
              <div className="w-8 h-8 rounded-lg bg-obsidian border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform">
                <FiMessageSquare size={16} />
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-luxury-gold">
                {emails.length}
              </div>
              <div className="text-xs text-pearl-muted font-mono mt-1">
                Transmissions logged
              </div>
            </div>
          </Link>

          {/* Card 3: Engineering Standards */}
          <Link
            href="/admin/content"
            className="p-5 sm:p-6 rounded-2xl bg-carbon border border-luxury-gold/15 hover:border-luxury-gold/40 hover:bg-plate transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-pearl-dim uppercase tracking-wider">
                03 // PRINCIPLES
              </span>
              <div className="w-8 h-8 rounded-lg bg-obsidian border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform">
                <TbShieldCheck size={16} />
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-pearl">
                {standards.length}
              </div>
              <div className="text-xs text-pearl-muted font-mono mt-1">
                Architecture standards
              </div>
            </div>
          </Link>

          {/* Card 4: Tech Stack Skills */}
          <Link
            href="/admin/content"
            className="p-5 sm:p-6 rounded-2xl bg-carbon border border-luxury-gold/15 hover:border-luxury-gold/40 hover:bg-plate transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-pearl-dim uppercase tracking-wider">
                04 // COMPETENCIES
              </span>
              <div className="w-8 h-8 rounded-lg bg-obsidian border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform">
                <TbCpu size={16} />
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-pearl">
                {skills.length}
              </div>
              <div className="text-xs text-pearl-muted font-mono mt-1">
                Indexed technologies
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ===================== PRIMARY CONTROL REGISTRIES ===================== */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-luxury-gold uppercase tracking-wider">
            <FiTerminal size={14} />
            <span>System Registries</span>
          </div>
          <span className="font-mono text-[11px] text-pearl-dim">CENTRAL DISPATCH</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-6 sm:p-7 rounded-3xl bg-carbon border border-luxury-gold/15 hover:border-luxury-gold/40 hover:bg-plate transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Ambient glow accent on card hover */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full bg-luxury-gold/[0.08] group-hover:bg-luxury-gold/[0.15] blur-2xl transition-all duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-obsidian border border-luxury-gold/25 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon size={22} />
                    </div>
                    <Link
                      href={item.actionHref}
                      className="px-3 py-1.5 rounded-lg bg-plate hover:bg-plate-elevated border border-luxury-gold/20 text-pearl hover:text-luxury-gold font-mono text-[11px] transition-colors"
                    >
                      {item.actionText}
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-pearl group-hover:text-luxury-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-luxury-gold/90 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-pearl-muted text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-luxury-gold/10 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-luxury-gold hover:text-luxury-highlight transition-colors"
                  >
                    <span>{item.cta}</span>
                    <FiArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===================== SYSTEM SPECIFICATION & ARCHITECTURE AUDIT ===================== */}
      <div className="p-6 sm:p-8 rounded-3xl bg-carbon border border-luxury-gold/15 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-luxury-gold/15 pb-4">
          <div className="flex items-center gap-2">
            <TbBrandSpeedtest size={18} className="text-luxury-gold" />
            <h3 className="text-base font-bold text-pearl">
              Architecture &amp; Environment Diagnostics
            </h3>
          </div>
          <span className="font-mono text-[11px] text-pearl-dim">
            ENVIRONMENT: PRODUCTION // HARDENED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-obsidian border border-luxury-gold/10 space-y-1">
            <span className="text-pearl-dim uppercase tracking-wider text-[10px]">
              ENGINEERING FRAMEWORK
            </span>
            <div className="text-pearl font-bold">Next.js 16 + React 19</div>
            <div className="text-luxury-gold text-[11px]">Server Components + App Router</div>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian border border-luxury-gold/10 space-y-1">
            <span className="text-pearl-dim uppercase tracking-wider text-[10px]">
              MOTION SUBSYSTEM
            </span>
            <div className="text-pearl font-bold">GSAP 3.15 + ScrollTrigger</div>
            <div className="text-luxury-gold text-[11px]">Hardware GPU Accelerated</div>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian border border-luxury-gold/10 space-y-1">
            <span className="text-pearl-dim uppercase tracking-wider text-[10px]">
              PERSISTENCE &amp; ORM
            </span>
            <div className="text-pearl font-bold">MongoDB + Mongoose</div>
            <div className="text-luxury-gold text-[11px]">High-Resilience Dual Fallbacks</div>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian border border-luxury-gold/10 space-y-1">
            <span className="text-pearl-dim uppercase tracking-wider text-[10px]">
              IDENTITY &amp; SECURITY
            </span>
            <div className="text-pearl font-bold">NextAuth JWT Sessions</div>
            <div className="text-luxury-gold text-[11px]">Bcrypt Salted Encryption</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

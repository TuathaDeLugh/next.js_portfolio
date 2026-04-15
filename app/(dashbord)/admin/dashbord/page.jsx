"use client"
import React from 'react'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import { MdOutlineDashboard } from "react-icons/md"
import { TbReportAnalytics, TbId } from "react-icons/tb"
import { FiMessageSquare } from "react-icons/fi"

const quickLinks = [
  {
    title: 'Manage Content',
    desc: 'Update skills, education & experience shown on About page.',
    href: '/admin/content',
    icon: TbId,
    accent: 'bg-blue-500',
    light: 'bg-blue-50',
    border: 'border-blue-100',
    text: 'text-blue-600',
  },
  {
    title: 'Manage Projects',
    desc: 'Add, edit or remove projects from the portfolio.',
    href: '/admin/project',
    icon: TbReportAnalytics,
    accent: 'bg-purple-500',
    light: 'bg-purple-50',
    border: 'border-purple-100',
    text: 'text-purple-600',
  },
  {
    title: 'View Messages',
    desc: 'Read and manage contact form submissions.',
    href: '/admin/contact',
    icon: FiMessageSquare,
    accent: 'bg-green-500',
    light: 'bg-green-50',
    border: 'border-green-100',
    text: 'text-green-600',
  },
];

function AdminDashboard() {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return null;

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 md:p-8">
        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full bg-emerald-500/10 blur-2xl" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-green-400 text-sm font-semibold mb-1">Welcome back 👋</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              {session.user.name || 'Admin'}
            </h2>
            <p className="text-gray-400 text-sm">
              Role: <span className="text-green-400 font-medium capitalize">{session.user.role}</span>
              {' · '}
              <span className="text-gray-400">{session.user.email}</span>
            </p>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors duration-150 cursor-pointer flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Portfolio
          </a>
        </div>
      </div>

      {/* Quick access cards */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Access</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group block p-5 rounded-2xl bg-white border ${item.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.accent} text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                <div className={`mt-3 text-xs font-semibold flex items-center gap-1 ${item.text}`}>
                  Go to {item.title}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
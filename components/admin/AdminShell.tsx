"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics, TbId } from "react-icons/tb";
import {
  FiMessageSquare,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiMenu,
  FiX,
  FiTerminal,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import ThemeSwitcher from "../theme/ThemeSwitcher";

interface NavItem {
  name: string;
  shortName: string;
  link: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    name: "Command Deck",
    shortName: "Deck",
    link: "/admin/dashbord",
    icon: MdOutlineDashboard,
  },
  {
    name: "Engineering Content",
    shortName: "Content",
    link: "/admin/content",
    icon: TbId,
  },
  {
    name: "Production Projects",
    shortName: "Projects",
    link: "/admin/project",
    icon: TbReportAnalytics,
  },
  {
    name: "Inbound Transmissions",
    shortName: "Messages",
    link: "/admin/contact",
    icon: FiMessageSquare,
  },
];

interface AdminShellProps {
  children: React.ReactNode;
}

export const AdminShell: React.FC<AdminShellProps> = ({ children }) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Keep live UTC+05:30 IST clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Don't render shell on root /admin redirect
  if (pathname === "/admin") return <>{children}</>;

  const getBreadcrumb = () => {
    if (pathname.includes("/content")) return "ENGINEERING CONTENT // REGISTRY";
    if (pathname.includes("/project")) return "PRODUCTION PROJECTS // REPOSITORY";
    if (pathname.includes("/contact")) return "INBOUND TRANSMISSIONS // INBOX";
    return "COMMAND DECK // TELEMETRY";
  };

  return (
    <div className="min-h-screen bg-obsidian text-pearl flex flex-col selection:bg-luxury-gold selection:text-obsidian">
      {/* ===================== SIDEBAR (DESKTOP) ===================== */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 z-30 h-screen bg-carbon/95 backdrop-blur-xl border-r border-luxury-gold/15 flex-col transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Brand Lockup */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-luxury-gold/15 h-20">
          <Link
            href="/admin/dashbord"
            className="flex items-center gap-3 overflow-hidden group"
          >
            <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-luxury-highlight via-luxury-gold to-luxury-bronze p-[1px] shadow-lg shadow-luxury-gold/10">
              <div className="w-full h-full rounded-[11px] bg-obsidian flex items-center justify-center">
                <span className="font-mono font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-luxury-highlight to-luxury-gold">
                  US
                </span>
              </div>
            </div>

            {!collapsed && (
              <div className="flex flex-col min-w-0 transition-opacity duration-200">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-pearl truncate flex items-center gap-1.5">
                  Umang Sailor
                </span>
                <span className="font-mono text-[10px] text-luxury-gold tracking-widest truncate">
                  CORE CONTROL
                </span>
              </div>
            )}
          </Link>

          <button
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="p-1.5 rounded-lg text-pearl-dim hover:text-luxury-gold hover:bg-plate transition-colors cursor-pointer border border-transparent hover:border-luxury-gold/20"
          >
            {collapsed ? <FiChevronRight size={16} /> : <FiChevronLeft size={16} />}
          </button>
        </div>

        {/* Navigation Registry */}
        <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
          {!collapsed && (
            <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-pearl-dim">
              SYSTEM CHANNELS
            </div>
          )}

          {navItems.map((item) => {
            const isActive =
              pathname === item.link || pathname.startsWith(item.link + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.link}
                href={item.link}
                title={collapsed ? item.name : undefined}
                className={`relative flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-mono text-xs tracking-wide transition-all duration-200 group outline-none ${
                  isActive
                    ? "bg-plate-elevated text-luxury-gold border border-luxury-gold/30 shadow-[0_0_20px_-5px_rgba(212,175,55,0.25)]"
                    : "text-pearl-muted hover:text-pearl hover:bg-plate/80 border border-transparent hover:border-luxury-gold/15"
                } ${collapsed ? "justify-center px-0" : ""}`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-luxury-gold rounded-r-full" />
                )}

                <Icon
                  size={19}
                  className={`flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-luxury-gold" : "text-pearl-dim group-hover:text-luxury-gold"
                  }`}
                />

                {!collapsed && (
                  <span className="truncate font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Telemetry Status & Session Terminal */}
        <div className="p-3 border-t border-luxury-gold/15 space-y-2 bg-obsidian/40">
          {!collapsed && (
            <div className="px-3 py-2 rounded-xl bg-plate border border-luxury-gold/10 font-mono text-[11px] space-y-1">
              <div className="flex items-center justify-between text-pearl-dim">
                <span>STATUS</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OPTIMAL
                </span>
              </div>
              <div className="flex items-center justify-between text-pearl-dim">
                <span>LOCAL</span>
                <span className="text-luxury-gold">{currentTime || "12:00:00"}</span>
              </div>
            </div>
          )}

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            title={collapsed ? "View Public Portfolio" : undefined}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-mono text-xs text-pearl-muted hover:text-luxury-gold hover:bg-plate transition-all duration-150 border border-transparent hover:border-luxury-gold/20 ${
              collapsed ? "justify-center px-0" : ""
            }`}
          >
            <FiExternalLink size={16} className="flex-shrink-0 text-luxury-gold" />
            {!collapsed && <span className="truncate">Public Atelier</span>}
          </a>

          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            title={collapsed ? "Terminate Session" : undefined}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-mono text-xs text-red-400/80 hover:text-red-300 hover:bg-red-500/10 transition-all duration-150 cursor-pointer border border-transparent hover:border-red-500/20 ${
              collapsed ? "justify-center px-0" : ""
            }`}
          >
            <FiLogOut size={16} className="flex-shrink-0" />
            {!collapsed && <span>Terminate Session</span>}
          </button>
        </div>
      </aside>

      {/* ===================== MOBILE DRAWER BACKDROP ===================== */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* ===================== MOBILE DRAWER ===================== */}
      <aside
        className={`md:hidden fixed top-0 left-0 bottom-0 z-50 w-72 bg-carbon border-r border-luxury-gold/20 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-luxury-gold/15">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-luxury-highlight to-luxury-gold p-[1px]">
              <div className="w-full h-full rounded-[10px] bg-obsidian flex items-center justify-center">
                <span className="font-mono font-bold text-xs text-luxury-gold">US</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-pearl">Umang Sailor</div>
              <div className="font-mono text-[10px] text-luxury-gold">COMMAND CONTROL</div>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-pearl-dim hover:text-pearl"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              pathname === item.link || pathname.startsWith(item.link + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.link}
                href={item.link}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-xs tracking-wide transition-all ${
                  isActive
                    ? "bg-plate-elevated text-luxury-gold border border-luxury-gold/30"
                    : "text-pearl-muted hover:text-pearl hover:bg-plate"
                }`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-luxury-gold/15 space-y-3">
          <div className="flex items-center justify-between px-2">
            <span className="font-mono text-[11px] text-pearl-dim uppercase tracking-wider">Appearance</span>
            <ThemeSwitcher showLabels={true} />
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-xs text-pearl-muted hover:text-pearl hover:bg-plate"
          >
            <FiExternalLink size={16} className="text-luxury-gold" />
            <span>View Public Atelier</span>
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-xs text-red-400 hover:bg-red-500/10"
          >
            <FiLogOut size={16} />
            <span>Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* ===================== MAIN COMMAND AREA ===================== */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          collapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        {/* Top Executive Header */}
        <header className="sticky top-0 z-20 h-20 bg-obsidian/85 backdrop-blur-xl border-b border-luxury-gold/15 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-xl bg-plate border border-luxury-gold/15 text-pearl hover:text-luxury-gold cursor-pointer"
              aria-label="Open navigation menu"
            >
              <FiMenu size={18} />
            </button>

            {/* Breadcrumb Trail */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2 font-mono text-[10px] text-luxury-gold uppercase tracking-wider truncate">
                <FiTerminal size={12} className="text-luxury-gold flex-shrink-0" />
                <span className="truncate">{getBreadcrumb()}</span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-pearl tracking-tight truncate">
                Architectural Control Plane
              </h1>
            </div>
          </div>

          {/* Right Header Instruments */}
          <div className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0">
            {/* Theme Switcher Segmented Control */}
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>

            {/* Live IST clock */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-plate border border-luxury-gold/15 font-mono text-xs text-pearl-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              <span>IST {currentTime || "12:00:00"}</span>
            </div>

            {/* View Site Quick Action */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-plate hover:bg-plate-elevated border border-luxury-gold/25 hover:border-luxury-gold/50 text-pearl hover:text-luxury-gold font-mono text-xs font-semibold transition-all shadow-md group"
            >
              <span>Public Site</span>
              <FiExternalLink
                size={13}
                className="text-luxury-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            {/* User Session Profile Chip */}
            <div className="flex items-center gap-2.5 pl-3 border-l border-luxury-gold/15">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-luxury-gold to-luxury-champagne p-[1px]">
                <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center font-mono text-xs font-bold text-luxury-gold">
                  {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                </div>
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-xs font-bold text-pearl leading-none">
                  {session?.user?.name || "Umang Sailor"}
                </span>
                <span className="text-[10px] font-mono text-luxury-gold leading-tight mt-0.5">
                  Lead Maintainer
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Interior Page Content Canvas */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminShell;


"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import TransitionLink from "./transitions/TransitionLink";
import { isSoundEnabled, setSoundEnabled, playHover, playClick } from "./creative/SoundEffects";

interface NavItem {
  name: string;
  path: string;
  number: string;
}

const navItems: NavItem[] = [
  { name: "Index", path: "/", number: "01" },
  { name: "Selected Work", path: "/project", number: "02" },
  { name: "About & Engineering", path: "/about", number: "03" },
  { name: "Contact", path: "/contact", number: "04" },
];

const NavBar: React.FC = () => {
  const { status } = useSession();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [soundActive, setSoundActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setSoundActive(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (pathname === "/login") return null;

  const currentNav = [...navItems];
  if (status === "authenticated") {
    currentNav.push({ name: "Console", path: "/admin/dashbord", number: "05" });
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-4 sm:px-6 lg:px-8 ${
          scrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-6"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand & Status Pill */}
          <TransitionLink
            href="/"
            className="group flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-carbon/90 backdrop-blur-xl border border-white/10 hover:border-[#CAAD8E]/40 transition-all duration-200 btn-press shadow-2xl shadow-black/60"
            title="Umang Sailor — Full-Stack Software Engineer"
          >
            <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-obsidian border border-white/10 group-hover:border-[#CAAD8E]/50 transition-colors">
              <span className="font-mono text-[11px] font-bold text-pearl group-hover:text-[#CAAD8E] transition-colors">
                U
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wider text-pearl uppercase">
                Umang <span className="hidden sm:inline">Sailor</span>
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-pearl-dim font-mono">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CAAD8E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#CAAD8E]"></span>
                </span>
                <span className="hidden sm:inline">Open to Connect</span>
                <span className="sm:hidden">Available</span>
              </span>
            </div>
          </TransitionLink>

          {/* Desktop Navigation Center Pill */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-carbon/90 backdrop-blur-xl border border-[#CAAD8E]/15 shadow-2xl shadow-black/60"
          >
            {currentNav.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <TransitionLink
                  key={item.path}
                  href={item.path}
                  onMouseEnter={playHover}
                  className={`group relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 btn-press ${
                    isActive
                      ? "text-[#14100E] bg-[#CAAD8E] font-bold shadow-md shadow-[#CAAD8E]/30"
                      : "text-pearl-muted hover:text-pearl hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-60 mr-1.5">
                    {item.number}
                  </span>
                  <span>{item.name}</span>
                </TransitionLink>
              );
            })}
          </nav>

          {/* Right Action: Dossier / Resume, Sound Toggle & Mobile Trigger */}
          <div className="flex items-center gap-2">
            {/* Audio Feedback Toggle */}
            <button
              onClick={() => {
                const next = !soundActive;
                setSoundActive(next);
                setSoundEnabled(next);
              }}
              title={soundActive ? "Mute interactive audio" : "Enable tactile sound feedback"}
              aria-label={soundActive ? "Mute interactive audio" : "Enable tactile sound feedback"}
              className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-plate border border-[#CAAD8E]/20 hover:border-[#CAAD8E]/50 text-pearl hover:text-[#CAAD8E] text-xs font-mono font-medium transition-all duration-200 btn-press shadow-lg shadow-black/50 flex items-center gap-1.5"
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  soundActive ? "bg-[#CAAD8E] animate-pulse" : "bg-pearl-dim"
                }`}
              />
              <span className="text-[11px] font-mono">
                {soundActive ? "SFX ON" : "SFX"}
              </span>
            </button>

            <a
              href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-plate border border-[#CAAD8E]/20 text-pearl hover:text-[#F1EDE7] hover:border-[#CAAD8E]/50 text-xs font-mono font-medium transition-all duration-200 btn-press shadow-lg shadow-black/50"
            >
              <span>CV / Dossier</span>
              <svg
                className="w-3 h-3 text-[#CAAD8E]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-carbon/90 backdrop-blur-xl border border-white/10 text-pearl hover:text-[#CAAD8E] transition-colors btn-press shadow-xl"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Accessible, origin-aware) */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 md:hidden animate-fade-in"
        >
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-pearl-dim px-4 mb-2">
              Navigation Index
            </div>
            {currentNav.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <TransitionLink
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-5 py-4 rounded-2xl border text-base font-medium transition-all btn-press ${
                    isActive
                      ? "bg-[#3A2E29] border-[#CAAD8E]/50 text-[#CAAD8E] font-semibold"
                      : "bg-carbon/60 border-white/5 text-pearl-muted hover:text-pearl hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-pearl-dim">
                      {item.number}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <span className="text-sm font-mono opacity-40">→</span>
                </TransitionLink>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#CAAD8E] text-[#14100E] font-extrabold text-sm hover:bg-[#EBE3DA] transition-colors btn-press shadow-xl shadow-[#CAAD8E]/10"
            >
              <span>Download CV / Dossier</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <div className="text-center font-mono text-xs text-pearl-dim">
              Surat, India · UTC+05:30
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

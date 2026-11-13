"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import TransitionLink from "./transitions/TransitionLink";
import { playHover, playClick } from "./creative/SoundEffects";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Overview", path: "/" },
  { name: "Selected Works", path: "/project" },
  { name: "Engineering & Craft", path: "/about" },
  { name: "Inquiries", path: "/contact" },
];

const NavBar: React.FC = () => {
  const { status } = useSession();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const headerRef = useRef<HTMLElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll listener for sticky compact styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Header Entrance on page load
  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headerRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      tl.fromTo(
        ".nav-brand-reveal",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        "-=0.5"
      );

      tl.fromTo(
        ".nav-item-reveal",
        { y: -8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 },
        "-=0.3"
      );

      tl.fromTo(
        ".nav-action-reveal",
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05 },
        "-=0.2"
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // GSAP Active Indicator sliding glide
  useEffect(() => {
    const activeIndex = currentNav.findIndex((item) =>
      item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)
    );

    if (activeIndex !== -1 && linksRef.current[activeIndex] && indicatorRef.current) {
      const targetEl = linksRef.current[activeIndex];
      if (targetEl) {
        gsap.to(indicatorRef.current, {
          x: targetEl.offsetLeft,
          width: targetEl.offsetWidth,
          duration: 0.4,
          ease: "power3.out",
          opacity: 1,
        });
      }
    } else if (indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        opacity: 0,
        duration: 0.2,
      });
    }
  }, [pathname]);

  // GSAP Mobile Drawer open/close animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );

      gsap.fromTo(
        ".mobile-link-item",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.06, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (pathname === "/login") return null;

  const currentNav = [...navItems];
  if (status === "authenticated") {
    currentNav.push({ name: "Console", path: "/admin/dashbord" });
  }

  const handleLinkHover = (index: number) => {
    playHover();
    const targetEl = linksRef.current[index];
    if (targetEl && indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        x: targetEl.offsetLeft,
        width: targetEl.offsetWidth,
        opacity: 1,
        duration: 0.28,
        ease: "power2.out",
      });
    }
  };

  const handleNavMouseLeave = () => {
    const activeIndex = currentNav.findIndex((item) =>
      item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)
    );
    if (activeIndex !== -1 && linksRef.current[activeIndex] && indicatorRef.current) {
      const targetEl = linksRef.current[activeIndex];
      gsap.to(indicatorRef.current, {
        x: targetEl.offsetLeft,
        width: targetEl.offsetWidth,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none px-4 sm:px-6 lg:px-8 ${
          scrolled ? "py-2 sm:py-2.5" : "py-4 sm:py-6"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Monogram & Availability Seal */}
          <TransitionLink
            href="/"
            className="nav-brand-reveal group flex items-center gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-carbon/85 backdrop-blur-2xl border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300 btn-press shadow-2xl shadow-black/80"
            title="Umang Sailor — Full-Stack Software Engineer & Creative Developer"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-plate border border-luxury-gold/30 group-hover:border-luxury-gold group-hover:shadow-[0_0_12px_var(--glow-primary)] transition-all duration-300">
              <span className="font-mono text-xs font-semibold text-pearl group-hover:text-luxury-gold transition-colors">
                U
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wider text-pearl uppercase">
                Umang <span className="hidden sm:inline font-light text-pearl-muted">Sailor</span>
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-pearl-dim font-mono tracking-tight">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-luxury-gold"></span>
                </span>
                <span className="hidden sm:inline">Available for Q3/Q4</span>
                <span className="sm:hidden">Available</span>
              </span>
            </div>
          </TransitionLink>

          {/* Center Navigation Capsule with GSAP Sliding Pill */}
          <nav
            ref={navContainerRef}
            onMouseLeave={handleNavMouseLeave}
            aria-label="Primary Navigation"
            className={`hidden md:flex relative items-center p-1 rounded-full bg-carbon/85 backdrop-blur-2xl border transition-all duration-300 shadow-2xl shadow-black/80 ${
              scrolled
                ? "border-luxury-gold/25 bg-obsidian/90"
                : "border-luxury-gold/15 hover:border-luxury-gold/30"
            }`}
          >
            {/* GSAP Sliding Indicator Pill */}
            <div
              ref={indicatorRef}
              className="absolute h-[calc(100%-8px)] top-1 left-0 rounded-full bg-gradient-to-r from-luxury-gold/20 via-luxury-gold/25 to-luxury-champagne/20 border border-luxury-gold/40 pointer-events-none opacity-0 shadow-[0_0_15px_var(--glow-primary)]"
            />

            {currentNav.map((item, idx) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <div
                  key={item.path}
                  ref={(el: HTMLDivElement | null) => {
                    linksRef.current[idx] = el;
                  }}
                  onMouseEnter={() => handleLinkHover(idx)}
                  className="nav-item-reveal relative z-10"
                >
                  <TransitionLink
                    href={item.path}
                    className={`block px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-pearl font-semibold text-shadow"
                        : "text-pearl-muted hover:text-pearl"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {isActive && (
                        <span className="w-1 h-1 rounded-full bg-luxury-gold shadow-[0_0_6px_var(--luxury-gold)]" />
                      )}
                      <span>{item.name}</span>
                    </span>
                  </TransitionLink>
                </div>
              );
            })}
          </nav>

          {/* Right Action Cluster: Dossier & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Dossier / CV Button with Metallic Gold Sheen */}
            <a
              href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              className="nav-action-reveal hidden sm:inline-flex group items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-plate to-plate-elevated border border-luxury-gold/30 hover:border-luxury-gold text-pearl text-xs font-mono font-medium transition-all duration-300 btn-press shadow-xl shadow-black/60 hover:shadow-[0_0_20px_var(--glow-primary)]"
            >
              <span className="tracking-wide">Dossier / CV</span>
              <svg
                className="w-3.5 h-3.5 text-luxury-gold transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                playClick();
                setMobileOpen(!mobileOpen);
              }}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-carbon/90 backdrop-blur-xl border border-luxury-gold/25 text-pearl hover:text-luxury-gold hover:border-luxury-gold transition-all duration-200 btn-press shadow-xl"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300"
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

      {/* Bespoke Luxury Mobile Menu Sheet */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 md:hidden border-b border-luxury-gold/20"
        >
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-pearl-dim px-4 mb-2">
              Curated Navigation
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
                  className={`mobile-link-item flex items-center justify-between px-5 py-4 rounded-2xl border text-base font-medium transition-all duration-200 btn-press ${
                    isActive
                      ? "bg-plate-elevated border-luxury-gold/50 text-luxury-gold font-semibold shadow-[0_0_20px_var(--glow-primary)]"
                      : "bg-carbon/70 border-luxury-gold/10 text-pearl-muted hover:text-pearl hover:border-luxury-gold/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shadow-[0_0_8px_var(--luxury-gold)]" />
                    )}
                    <span>{item.name}</span>
                  </div>
                  <span className="text-sm font-mono text-luxury-gold opacity-60">→</span>
                </TransitionLink>
              );
            })}
          </div>

          <div className="pt-6 border-t border-luxury-gold/15 space-y-4">
            <a
              href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-bold text-sm hover:brightness-110 transition-all btn-press shadow-xl shadow-luxury-gold/20"
            >
              <span>Download Dossier / CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <div className="flex items-center justify-between text-xs font-mono text-pearl-dim px-2">
              <span>Surat, India · UTC+05:30</span>
              <span className="text-luxury-gold">Available</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

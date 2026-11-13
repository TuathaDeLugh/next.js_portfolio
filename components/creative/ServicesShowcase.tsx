"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IService } from "@/types";
import {
  PiChalkboardBold,
  PiDesktopTowerBold,
  PiTreeStructure,
  PiFileTextBold,
} from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { playHover } from "./SoundEffects";

interface Props {
  services: IService[];
}

const iconMap: Record<string, React.ReactNode> = {
  PiChalkboardBold: <PiChalkboardBold size={28} />,
  PiDesktopTowerBold: <PiDesktopTowerBold size={28} />,
  PiTreeStructure: <PiTreeStructure size={28} />,
  PiFileTextBold: <PiFileTextBold size={28} />,
};

export const ServicesShowcase: React.FC<Props> = ({ services }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".services-header-anim",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Service cards staggered entrance
      gsap.fromTo(
        ".service-card-item",
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const handleCardMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement
  ) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.25,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleCardMouseLeave = (card: HTMLDivElement) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-carbon border-hairline-t overflow-hidden"
    >
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl services-header-anim">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              <span>Core Architectural Competencies // Systems Engineering</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
              Architectural disciplines &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-cream via-luxury-gold to-luxury-champagne">
                systems execution.
              </span>
            </h2>
          </div>

          <p className="services-header-anim text-pearl-muted text-base max-w-md leading-relaxed">
            Engineering distributed microservices, type-safe API contracts,
            and deterministic frontends crafted with tactile GSAP motion physics.
          </p>
        </div>

        {/* 4 Dynamic Animated 3D Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
          {services.map((service, idx) => {
            const icon = iconMap[service.icon] || (
              <PiDesktopTowerBold size={28} />
            );

            return (
              <div
                key={service._id}
                onMouseEnter={playHover}
                onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                className="service-card-item group relative p-8 sm:p-10 rounded-3xl bg-plate/90 hover:bg-plate border border-luxury-gold/15 hover:border-luxury-gold/50 transition-colors duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Ambient glow highlight */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-luxury-gold/[0.08] group-hover:bg-luxury-gold/[0.18] blur-2xl transition-all duration-500" />

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-luxury-gold px-3 py-1 rounded-full bg-obsidian border border-luxury-gold/20">
                      0{idx + 1} // DOMAIN
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-obsidian border border-luxury-gold/25 text-luxury-gold flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:border-luxury-gold/60 group-hover:shadow-[0_0_15px_var(--glow-primary)] transition-all duration-300">
                      {icon}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-pearl group-hover:text-luxury-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-pearl-muted text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-luxury-gold/10 flex items-center justify-between text-xs font-mono text-pearl-dim group-hover:text-pearl transition-colors">
                  <span>DEPLOYMENT READY</span>
                  <HiArrowUpRight
                    size={16}
                    className="text-luxury-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;

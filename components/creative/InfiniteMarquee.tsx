"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandSpeedtest, TbLayersLinked } from "react-icons/tb";
import { HiSparkles, HiCommandLine } from "react-icons/hi2";

interface MarqueeItem {
  label: string;
  icon: React.ReactNode;
}

const DEFAULT_ITEMS: MarqueeItem[] = [
  { label: "REACT 19 & NEXT.JS 16", icon: <SiReact className="text-luxury-gold" size={16} /> },
  { label: "GSAP 3 TIMELINE & SCROLLTRIGGER", icon: <TbBrandSpeedtest className="text-luxury-champagne" size={16} /> },
  { label: "TYPESCRIPT STRICT DISCIPLINE", icon: <SiTypescript className="text-luxury-shimmer" size={16} /> },
  { label: "NEST.JS ENTERPRISE BACKENDS", icon: <SiNestjs className="text-luxury-gold" size={16} /> },
  { label: "NX MONOREPO ARCHITECTURE", icon: <TbLayersLinked className="text-luxury-champagne" size={16} /> },
  { label: "TAILWIND CSS & BESPOKE TOKENS", icon: <SiTailwindcss className="text-luxury-shimmer" size={16} /> },
  { label: "POSTGRESQL & MONGODB CLUSTERS", icon: <SiPostgresql className="text-luxury-gold" size={16} /> },
  { label: "NODE.JS ASYNC EVENT DRIVEN", icon: <SiNodedotjs className="text-luxury-champagne" size={16} /> },
  { label: "DOCKER & CLOUD ORCHESTRATION", icon: <SiDocker className="text-luxury-shimmer" size={16} /> },
  { label: "CINEMATIC MOTION CRAFT", icon: <HiSparkles className="text-luxury-gold" size={16} /> },
  { label: "HIGH CONCURRENCY ARCHITECTURES", icon: <HiCommandLine className="text-luxury-champagne" size={16} /> },
];

export const InfiniteMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const repeated = [...DEFAULT_ITEMS, ...DEFAULT_ITEMS];

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth continuous infinite translation with GSAP
      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 35,
        ease: "none",
      });

      // Interactive hover slowdown
      const el = containerRef.current;
      if (el) {
        const onEnter = () => gsap.to(tween, { timeScale: 0.35, duration: 0.8 });
        const onLeave = () => gsap.to(tween, { timeScale: 1, duration: 0.8 });
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        return () => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-4 border-y border-luxury-gold/15 bg-carbon/70 backdrop-blur-xl select-none"
    >
      <div
        ref={trackRef}
        className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform"
      >
        {repeated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 font-mono text-xs sm:text-sm font-semibold tracking-wider text-pearl-muted hover:text-pearl transition-colors"
          >
            <span className="flex items-center justify-center">{item.icon}</span>
            <span>{item.label}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shadow-[0_0_8px_var(--glow-gold)] ml-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;

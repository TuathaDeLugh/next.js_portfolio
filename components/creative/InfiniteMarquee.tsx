"use client";

import React from "react";
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
  { label: "REACT 19 & NEXT.JS 16", icon: <SiReact className="text-cyan-400" size={15} /> },
  { label: "GSAP 3 SCROLLTRIGGER", icon: <TbBrandSpeedtest className="text-indigo-400" size={15} /> },
  { label: "TYPESCRIPT STRICT", icon: <SiTypescript className="text-blue-400" size={15} /> },
  { label: "NEST.JS MICROSERVICES", icon: <SiNestjs className="text-rose-400" size={15} /> },
  { label: "NX MONOREPO ARCHITECTURE", icon: <TbLayersLinked className="text-amber-400" size={15} /> },
  { label: "TAILWIND CSS & RADIX", icon: <SiTailwindcss className="text-sky-400" size={15} /> },
  { label: "POSTGRESQL & MONGODB", icon: <SiPostgresql className="text-blue-300" size={15} /> },
  { label: "NODE.JS ASYNC I/O", icon: <SiNodedotjs className="text-emerald-400" size={15} /> },
  { label: "DOCKER CONTAINERIZATION", icon: <SiDocker className="text-sky-300" size={15} /> },
  { label: "SPRING INTERACTION CRAFT", icon: <HiSparkles className="text-purple-400" size={15} /> },
  { label: "HIGH CONCURRENCY SYSTEMS", icon: <HiCommandLine className="text-indigo-300" size={15} /> },
];

export const InfiniteMarquee: React.FC = () => {
  const repeated = [...DEFAULT_ITEMS, ...DEFAULT_ITEMS, ...DEFAULT_ITEMS];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-[#CAAD8E]/15 bg-carbon/50 backdrop-blur-md select-none">
      <div className="flex w-max items-center gap-10 animate-marquee-left hover:[animation-play-state:paused]">
        {repeated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 font-mono text-xs sm:text-sm font-bold tracking-wider text-pearl-muted hover:text-white transition-colors"
          >
            <span className="flex items-center justify-center">{item.icon}</span>
            <span>{item.label}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E] ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;

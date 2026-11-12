import React from "react";
import TransitionLink from "@/components/transitions/TransitionLink";
import { HiArrowUpRight } from "react-icons/hi2";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-obsidian text-pearl px-6 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-white/10 text-signal-amber font-mono text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-amber animate-pulse" />
          <span>Error 404 // Target Route Unresolved</span>
        </div>

        <h1 className="text-8xl sm:text-9xl font-extrabold font-mono tracking-tighter text-pearl">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-pearl tracking-tight">
          Artifact Not Found
        </h2>

        <p className="text-pearl-muted text-sm sm:text-base leading-relaxed">
          The requested coordinate or project specification does not exist in
          this index or has been migrated.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <TransitionLink
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs font-mono hover:bg-neutral-200 transition-all btn-press shadow-xl shadow-white/10"
          >
            <span>Return to Index</span>
            <HiArrowUpRight size={14} />
          </TransitionLink>

          <TransitionLink
            href="/project"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-plate border border-white/10 text-pearl hover:border-indigo-400/40 text-xs font-mono transition-all btn-press"
          >
            <span>Selected Works</span>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

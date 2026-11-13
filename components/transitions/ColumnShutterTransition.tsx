"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

export interface TransitionHandle {
  playIn: () => Promise<void>;
  playOut: () => Promise<void>;
}

interface Props {
  columnsCount?: number;
}

const ColumnShutterTransition = forwardRef<TransitionHandle, Props>(
  ({ columnsCount = 6 }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const columnsRef = useRef<HTMLDivElement[]>([]);
    const lineRef = useRef<HTMLDivElement>(null);
    const shimmerRef = useRef<HTMLDivElement>(null);
    const shimmerTweenRef = useRef<gsap.core.Tween | null>(null);

    useImperativeHandle(ref, () => ({
      playIn: () => {
        return new Promise((resolve) => {
          const container = containerRef.current;
          const columns = columnsRef.current.filter(Boolean);
          const line = lineRef.current;
          const shimmer = shimmerRef.current;

          if (!container || columns.length === 0) {
            resolve();
            return;
          }

          if (shimmerTweenRef.current) shimmerTweenRef.current.kill();

          gsap.set(container, { display: "block", pointerEvents: "auto" });
          gsap.set(columns, { transformOrigin: "top center", scaleY: 0 });
          if (line) gsap.set(line, { scaleX: 0, opacity: 0 });
          if (shimmer) gsap.set(shimmer, { xPercent: -100, opacity: 0 });

          const tl = gsap.timeline({
            onComplete: () => {
              if (shimmer) {
                gsap.set(shimmer, { opacity: 1 });
                shimmerTweenRef.current = gsap.to(shimmer, {
                  xPercent: 100,
                  duration: 1.4,
                  repeat: -1,
                  ease: "sine.inOut",
                });
              }
              resolve();
            },
          });

          if (line) {
            tl.to(line, {
              scaleX: 1,
              opacity: 1,
              duration: 0.22,
              ease: "power2.out",
            });
          }

          tl.to(
            columns,
            {
              scaleY: 1,
              duration: 0.35,
              ease: "power3.inOut",
              stagger: {
                amount: 0.14,
                from: "start",
              },
            },
            line ? "-=0.08" : 0
          );
        });
      },

      playOut: () => {
        return new Promise((resolve) => {
          const container = containerRef.current;
          const columns = columnsRef.current.filter(Boolean);
          const line = lineRef.current;
          const shimmer = shimmerRef.current;

          if (!container || columns.length === 0) {
            resolve();
            return;
          }

          if (shimmerTweenRef.current) {
            shimmerTweenRef.current.kill();
            shimmerTweenRef.current = null;
          }

          const tl = gsap.timeline({
            onComplete: () => {
              gsap.set(container, { display: "none", pointerEvents: "none" });
              if (shimmer) gsap.set(shimmer, { opacity: 0 });
              resolve();
            },
          });

          if (shimmer) {
            tl.to(shimmer, { opacity: 0, duration: 0.1 }, 0);
          }

          tl.to(
            columns,
            {
              scaleY: 0,
              transformOrigin: "bottom center",
              duration: 0.35,
              ease: "power3.inOut",
              stagger: {
                amount: 0.12,
                from: "end",
              },
            },
            0
          );

          if (line) {
            tl.to(
              line,
              {
                scaleX: 0,
                transformOrigin: "right",
                opacity: 0,
                duration: 0.22,
                ease: "power2.in",
              },
              "-=0.15"
            );
          }
        });
      },
    }));

    return (
      <div
        ref={containerRef}
        className="fixed inset-0 z-[99999] pointer-events-none hidden overflow-hidden"
        aria-hidden="true"
      >
        {/* High-end signature gold laser guide */}
        <div
          ref={lineRef}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-luxury-bronze via-luxury-gold to-luxury-bronze origin-left z-30 shadow-[0_0_15px_var(--glow-gold)]"
        />

        {/* High-end obsidian carbon shutters */}
        <div className="relative w-full h-full flex flex-row">
          {Array.from({ length: columnsCount }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) columnsRef.current[index] = el;
              }}
              className="relative h-full flex-1 bg-obsidian border-r border-luxury-gold/10 last:border-r-0 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            />
          ))}

          {/* Precision light pulse */}
          <div
            ref={shimmerRef}
            className="absolute inset-0 pointer-events-none opacity-0 z-20"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--border-subtle) 35%, var(--glow-gold) 50%, var(--border-subtle) 65%, transparent 100%)",
            }}
          />
        </div>
      </div>
    );
  }
);

ColumnShutterTransition.displayName = "ColumnShutterTransition";

export default ColumnShutterTransition;

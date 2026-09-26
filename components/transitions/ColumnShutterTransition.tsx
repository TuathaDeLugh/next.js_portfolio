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

          // Kill any existing looping animations
          if (shimmerTweenRef.current) shimmerTweenRef.current.kill();

          gsap.set(container, { display: "block", pointerEvents: "auto" });
          gsap.set(columns, { transformOrigin: "top center", scaleY: 0 });
          if (line) gsap.set(line, { scaleX: 0, opacity: 0 });
          if (shimmer) gsap.set(shimmer, { xPercent: -100, opacity: 0 });

          const tl = gsap.timeline({
            onComplete: () => {
              // If the route takes extra time, run a smooth, soft gray/white gradient wave
              if (shimmer) {
                gsap.set(shimmer, { opacity: 1 });
                shimmerTweenRef.current = gsap.to(shimmer, {
                  xPercent: 100,
                  duration: 1.5,
                  repeat: -1,
                  ease: "sine.inOut",
                });
              }

              resolve();
            },
          });

          // Top subtle indicator line
          if (line) {
            tl.to(line, {
              scaleX: 1,
              opacity: 1,
              duration: 0.25,
              ease: "power2.out",
            });
          }

          // Staggered column shutter drop with smooth easing
          tl.to(
            columns,
            {
              scaleY: 1,
              duration: 0.38,
              ease: "power3.inOut",
              stagger: {
                amount: 0.16,
                from: "start",
              },
            },
            line ? "-=0.1" : 0
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

          // Kill loading animations
          if (shimmerTweenRef.current) {
            shimmerTweenRef.current.kill();
            shimmerTweenRef.current = null;
          }

          const tl = gsap.timeline({
            onComplete: () => {
              gsap.set(container, { display: "none", pointerEvents: "none" });
              resolve();
            },
          });

          if (shimmer) {
            tl.to(shimmer, { opacity: 0, duration: 0.15, ease: "power1.out" }, 0);
          }
          if (line) {
            tl.to(line, { opacity: 0, duration: 0.15, ease: "power1.out" }, 0);
          }

          // Unveil: columns retract smoothly towards bottom
          tl.to(
            columns,
            {
              transformOrigin: "bottom center",
              scaleY: 0,
              duration: 0.38,
              ease: "power3.inOut",
              stagger: {
                amount: 0.16,
                from: "start",
              },
            },
            "-=0.08"
          );
        });
      },
    }));

    return (
      <div
        ref={containerRef}
        className="fixed inset-0 z-[99999] pointer-events-none hidden overflow-hidden"
        aria-hidden="true"
      >
        {/* Glowing emerald top accent line */}
        <div
          ref={lineRef}
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 origin-left z-30 shadow-[0_0_12px_rgba(34,197,94,0.45)]"
        />

        {/* Luminous Light Frosted Mint & White columns matching site aesthetic */}
        <div className="relative w-full h-full flex flex-row">
          {Array.from({ length: columnsCount }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) columnsRef.current[index] = el;
              }}
              className="relative h-full flex-1 bg-gradient-to-b from-white via-[#f0fdf4] to-[#e6f7ec] border-r border-emerald-200/60 last:border-r-0 shadow-[0_10px_35px_rgba(16,185,129,0.07)]"
            />
          ))}

          {/* Smooth, soft luminous white & emerald gradient sheen if page takes time to load */}
          <div
            ref={shimmerRef}
            className="absolute inset-0 pointer-events-none opacity-0 z-20"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.06) 35%, rgba(255, 255, 255, 0.65) 50%, rgba(34, 197, 94, 0.06) 65%, transparent 100%)",
            }}
          />
        </div>
      </div>
    );
  }
);

ColumnShutterTransition.displayName = "ColumnShutterTransition";

export default ColumnShutterTransition;

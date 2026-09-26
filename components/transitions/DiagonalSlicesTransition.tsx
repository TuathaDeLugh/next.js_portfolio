"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import { TransitionHandle } from "./ColumnShutterTransition";

interface Props {
  slicesCount?: number;
}

const DiagonalSlicesTransition = forwardRef<TransitionHandle, Props>(
  ({ slicesCount = 5 }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const slicesRef = useRef<HTMLDivElement[]>([]);

    useImperativeHandle(ref, () => ({
      playIn: () => {
        return new Promise((resolve) => {
          const container = containerRef.current;
          const slices = slicesRef.current.filter(Boolean);

          if (!container || slices.length === 0) {
            resolve();
            return;
          }

          gsap.set(container, { display: "block", pointerEvents: "auto" });
          slices.forEach((slice, i) => {
            const fromLeft = i % 2 === 0;
            gsap.set(slice, {
              xPercent: fromLeft ? -130 : 130,
              skewX: -8,
            });
          });

          const tl = gsap.timeline({
            onComplete: () => resolve(),
          });

          tl.to(slices, {
            xPercent: 0,
            skewX: 0,
            duration: 0.42,
            ease: "power3.out",
            stagger: 0.05,
          });
        });
      },

      playOut: () => {
        return new Promise((resolve) => {
          const container = containerRef.current;
          const slices = slicesRef.current.filter(Boolean);

          if (!container || slices.length === 0) {
            resolve();
            return;
          }

          const tl = gsap.timeline({
            onComplete: () => {
              gsap.set(container, { display: "none", pointerEvents: "none" });
              resolve();
            },
          });

          tl.to(slices, {
            xPercent: (i) => (i % 2 === 0 ? 130 : -130),
            skewX: 8,
            duration: 0.38,
            ease: "power3.in",
            stagger: 0.04,
          });
        });
      },
    }));

    return (
      <div
        ref={containerRef}
        className="fixed inset-0 z-[99999] pointer-events-none hidden overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full h-full flex flex-col">
          {Array.from({ length: slicesCount }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) slicesRef.current[index] = el;
              }}
              className="relative flex-1 w-full bg-gradient-to-r from-white via-[#f0fdf4] to-[#e6f7ec] border-b border-emerald-200/60 last:border-b-0 shadow-[0_4px_20px_rgba(16,185,129,0.06)]"
            />
          ))}
        </div>
      </div>
    );
  }
);

DiagonalSlicesTransition.displayName = "DiagonalSlicesTransition";

export default DiagonalSlicesTransition;

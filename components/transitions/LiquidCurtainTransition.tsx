"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import { TransitionHandle } from "./ColumnShutterTransition";

const LiquidCurtainTransition = forwardRef<TransitionHandle>(
  (_props, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgPathRef = useRef<SVGPathElement>(null);

    useImperativeHandle(ref, () => ({
      playIn: () => {
        return new Promise((resolve) => {
          const container = containerRef.current;
          const path = svgPathRef.current;

          if (!container || !path) {
            resolve();
            return;
          }

          gsap.set(container, { display: "block", pointerEvents: "auto" });

          // Start path: flat at bottom
          path.setAttribute("d", "M 0 100 V 100 Q 50 100 100 100 V 100 z");

          const tl = gsap.timeline({
            onComplete: () => resolve(),
          });

          // Curve up to cover
          tl.to(path, {
            attr: { d: "M 0 100 V 35 Q 50 -20 100 35 V 100 z" },
            duration: 0.35,
            ease: "power2.in",
          }).to(path, {
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
            duration: 0.22,
            ease: "power2.out",
          });
        });
      },

      playOut: () => {
        return new Promise((resolve) => {
          const container = containerRef.current;
          const path = svgPathRef.current;

          if (!container || !path) {
            resolve();
            return;
          }

          const tl = gsap.timeline({
            onComplete: () => {
              gsap.set(container, { display: "none", pointerEvents: "none" });
              resolve();
            },
          });

          // Unveil from top upward
          tl.to(path, {
            attr: { d: "M 0 0 V 0 Q 50 -30 100 0 V 0 z" },
            duration: 0.4,
            ease: "power3.inOut",
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
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="liquidGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f0fdf4" />
              <stop offset="100%" stopColor="#dcfce7" />
            </linearGradient>
          </defs>
          <path
            ref={svgPathRef}
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
            fill="url(#liquidGradLight)"
          />
        </svg>
      </div>
    );
  }
);

LiquidCurtainTransition.displayName = "LiquidCurtainTransition";

export default LiquidCurtainTransition;

"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  text: string;
  className?: string;
}

export const ScrollTextReveal: React.FC<Props> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".reveal-word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.15, y: 4 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`select-none ${className}`}>
      <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.3] tracking-tight">
        {words.map((word, i) => (
          <span
            key={i}
            className="reveal-word inline-block mr-[0.28em] transition-colors duration-200"
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ScrollTextReveal;

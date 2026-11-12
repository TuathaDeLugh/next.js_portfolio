"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Fast GSAP quickSetter for 60fps physics
    const setCursorX = gsap.quickTo(cursor, "x", {
      duration: 0.1,
      ease: "power3",
    });
    const setCursorY = gsap.quickTo(cursor, "y", {
      duration: 0.1,
      ease: "power3",
    });

    const setFollowerX = gsap.quickTo(follower, "x", {
      duration: 0.35,
      ease: "power3",
    });
    const setFollowerY = gsap.quickTo(follower, "y", {
      duration: 0.35,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setFollowerX(e.clientX);
      setFollowerY(e.clientY);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [data-cursor], [data-cursor-text]",
      ) as HTMLElement | null;
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor-text") || "";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Center sharp dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#CAAD8E] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovered ? "opacity-0" : "opacity-100"}`}
      />

      {/* Trailing magnetic fluid ring / badge */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CAAD8E]/60 flex items-center justify-center transition-all duration-300 ease-out backdrop-blur-[2px] ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorText
            ? "w-24 h-24 bg-[#CAAD8E] text-[#14100E] border-transparent shadow-xl shadow-[#CAAD8E]/30 scale-100"
            : isHovered
              ? "w-14 h-14 bg-[#CAAD8E]/15 border-[#CAAD8E] scale-110"
              : "w-8 h-8 bg-transparent scale-100"
        } ${isClicking ? "scale-90" : ""}`}
      >
        {cursorText && (
          <span
            ref={textRef}
            className="font-mono text-[11px] font-black uppercase tracking-wider text-[#14100E] select-none"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;

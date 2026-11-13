"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { playHover, playClick } from "./SoundEffects";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier (default 0.3)
  onClick?: () => void;
  cursorText?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  strength = 0.35,
  onClick,
  cursorText,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = buttonRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    gsap.to(el, {
      x: distanceX,
      y: distanceY,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const el = buttonRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1.1, 0.4)",
    });
  };

  const handleMouseEnter = () => {
    playHover();
  };

  const handleClick = () => {
    playClick();
    if (onClick) onClick();
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      data-cursor="pointer"
      data-cursor-text={cursorText}
      className={`inline-block transition-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default MagneticButton;

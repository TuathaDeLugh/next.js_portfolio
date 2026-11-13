"use client";

import React, { useRef, useEffect } from "react";
import { useTheme, Theme } from "./ThemeProvider";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { playHover, playClick } from "../creative/SoundEffects";
import gsap from "gsap";

interface ThemeSwitcherProps {
  className?: string;
  showLabels?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = "",
  showLabels = false,
}) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const options: { id: Theme; label: string; icon: React.ReactNode }[] = [
    {
      id: "light",
      label: "Light",
      icon: <FiSun size={14} className="flex-shrink-0" />,
    },
    {
      id: "dark",
      label: "Dark",
      icon: <FiMoon size={14} className="flex-shrink-0" />,
    },
    {
      id: "system",
      label: "System",
      icon: <FiMonitor size={14} className="flex-shrink-0" />,
    },
  ];

  // Glide active indicator pill using GSAP
  useEffect(() => {
    const activeIndex = options.findIndex((opt) => opt.id === theme);
    const targetBtn = buttonsRef.current[activeIndex];
    const pill = pillRef.current;

    if (targetBtn && pill) {
      gsap.to(pill, {
        x: targetBtn.offsetLeft,
        width: targetBtn.offsetWidth,
        opacity: 1,
        duration: 0.28,
        ease: "power2.out",
      });
    }
  }, [theme]);

  const handleSelect = (selectedTheme: Theme) => {
    playClick();
    setTheme(selectedTheme);
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center p-1 rounded-full bg-plate/80 border border-luxury-gold/20 shadow-md backdrop-blur-xl ${className}`}
      role="group"
      aria-label="Theme selection"
    >
      {/* Sliding Active Indicator Highlight */}
      <div
        ref={pillRef}
        className="absolute top-1 bottom-1 left-0 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian pointer-events-none opacity-0 shadow-sm"
        style={{ willChange: "transform, width" }}
      />

      {options.map((option, idx) => {
        const isActive = theme === option.id;
        return (
          <button
            key={option.id}
            ref={(el) => {
              buttonsRef.current[idx] = el;
            }}
            onClick={() => handleSelect(option.id)}
            onMouseEnter={playHover}
            type="button"
            title={`${option.label} theme ${option.id === "system" ? "(matches OS setting)" : ""}`}
            aria-pressed={isActive}
            className={`relative z-10 flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-colors duration-150 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-luxury-gold ${
              isActive
                ? "text-obsidian font-bold"
                : "text-pearl-dim hover:text-pearl"
            }`}
          >
            {option.icon}
            {showLabels && <span className="text-[11px] font-semibold">{option.label}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;


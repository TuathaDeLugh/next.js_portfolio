"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

export const HomeGsapEnhancer: React.FC = () => {
  useEffect(() => {
    // Only animate if reduced motion is not preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Ambient floating blobs
      gsap.to(".gsap-hero-blob-1", {
        y: -20,
        x: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".gsap-hero-blob-2", {
        y: 20,
        x: -12,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // Terminal badges floating
      gsap.to(".gsap-floating-badge-1", {
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".gsap-floating-badge-2", {
        y: 8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // Terminal card tilt is handled below

      // Clean subtle hover lift on terminal card (no 3D skewing)
      const card = document.querySelector(".gsap-terminal-card") as HTMLElement;
      if (card) {
        const handleEnter = () => {
          gsap.to(card, {
            y: -4,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default HomeGsapEnhancer;

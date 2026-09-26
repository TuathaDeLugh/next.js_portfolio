"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

export const HomeGsapEnhancer: React.FC = () => {
  useEffect(() => {
    // Only animate if reduced motion is not preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Stagger in the hero elements
      gsap.from(".gsap-hero-title", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(".gsap-hero-desc", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.25,
      });

      gsap.from(".gsap-hero-buttons a, .gsap-hero-buttons button", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.35,
      });

      gsap.from(".gsap-terminal-card", {
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        ease: "back.out(1.5)",
        delay: 0.2,
      });

      // Animate stat counters from 0
      const counters = document.querySelectorAll(".gsap-counter");
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          delay: 0.4,
          onUpdate: () => {
            el.textContent = `${Math.floor(obj.val)}+`;
          },
        });
      });

      // Subtle 3D tilt on terminal card
      const card = document.querySelector(".gsap-terminal-card") as HTMLElement;
      if (card) {
        const handleMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(card, {
            rotateY: x * 0.035,
            rotateX: -y * 0.035,
            duration: 0.35,
            ease: "power1.out",
            transformPerspective: 1000,
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default HomeGsapEnhancer;

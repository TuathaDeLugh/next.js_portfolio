"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register ScrollTrigger on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const GsapGlobalOrchestrator: React.FC = () => {
  const pathname = usePathname();
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Small delay to ensure Next.js route has rendered all DOM nodes
    const timer = setTimeout(() => {
      // Clean up previous animations if any
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }

      const ctx = gsap.context(() => {
        // 1. REVEAL HEADERS & TITLES ON SCROLL
        const revealElements = document.querySelectorAll(
          ".gsap-reveal-header, .gsap-reveal-title, .gsap-reveal-sub"
        );
        revealElements.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 30, opacity: 0 },
            {
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "transform,opacity",
            }
          );
        });

        // 2. STAGGERED GRIDS & CARDS (Smooth vertical rise, NO 3D skewing)
        const staggerContainers = document.querySelectorAll(
          ".gsap-stagger-grid, .gsap-services-grid, .gsap-projects-grid, .gsap-expertise-grid"
        );
        staggerContainers.forEach((container) => {
          const cards = container.querySelectorAll(".gsap-stagger-card, .card-premium");
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { y: 30, opacity: 0 },
              {
                scrollTrigger: {
                  trigger: container,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
                y: 0,
                opacity: 1,
                duration: 0.65,
                stagger: 0.08,
                ease: "power3.out",
                clearProps: "transform,opacity",
              }
            );
          }
        });

        // Any standalone card with .gsap-card
        const standaloneCards = document.querySelectorAll(".gsap-card");
        standaloneCards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 25, opacity: 0 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              clearProps: "transform,opacity",
            }
          );
        });

        // 3. SKILL BARS WITH SCROLLTRIGGER
        const skillBars = document.querySelectorAll(".gsap-skill-bar, .skill-bar-inner");
        skillBars.forEach((bar) => {
          const el = bar as HTMLElement;
          const targetWidth = el.getAttribute("data-width") || el.style.width || "0%";
          gsap.set(el, { width: "0%" });
          gsap.to(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none",
            },
            width: targetWidth,
            duration: 1.2,
            ease: "power2.out",
          });
        });

        // 4. TIMELINE ITEMS (EXPERIENCE & JOURNEY)
        const timelineItems = document.querySelectorAll(".gsap-timeline-item");
        timelineItems.forEach((item, idx) => {
          gsap.fromTo(
            item,
            { x: idx % 2 === 0 ? -25 : 25, opacity: 0 },
            {
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none none",
              },
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "transform,opacity",
            }
          );
        });

        // 5. TECH STACK BADGES STAGGER
        const badgeGroups = document.querySelectorAll(".gsap-badge-group");
        badgeGroups.forEach((group) => {
          const badges = group.querySelectorAll(".gsap-badge");
          if (badges.length > 0) {
            gsap.fromTo(
              badges,
              { scale: 0.85, opacity: 0, y: 12 },
              {
                scrollTrigger: {
                  trigger: group,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
                scale: 1,
                opacity: 1,
                y: 0,
                stagger: 0.03,
                duration: 0.45,
                ease: "back.out(1.5)",
                clearProps: "transform,opacity",
              }
            );
          }
        });

        // 6. IMAGE SCALE REVEAL
        const imagesToReveal = document.querySelectorAll(".gsap-image-reveal");
        imagesToReveal.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 0.95, opacity: 0 },
            {
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              scale: 1,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              clearProps: "transform,opacity",
            }
          );
        });

        // 7. AMBIENT CONTINUOUS FLOATING BACKGROUND MESH (Brings energy so site doesn't feel empty)
        const floatingBlobs = document.querySelectorAll(
          ".animate-float-slow, .animate-float-delayed, .gsap-ambient-orb"
        );
        floatingBlobs.forEach((blob, index) => {
          const el = blob as HTMLElement;
          const factorX = index % 2 === 0 ? 25 : -25;
          const factorY = index % 3 === 0 ? -20 : 25;
          const duration = 6 + (index % 4) * 2;

          gsap.to(el, {
            x: factorX,
            y: factorY,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.4,
          });
        });

        // Floating tech chips & status badges
        const floatingBadges = document.querySelectorAll(".gsap-floating-badge");
        floatingBadges.forEach((badge, index) => {
          const el = badge as HTMLElement;
          const offset = index % 2 === 0 ? -10 : 10;
          gsap.to(el, {
            y: offset,
            duration: 2.8 + index * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3,
          });
        });

        // 8. ELEGANT CARD HOVER MICRO-INTERACTIONS (Clean, modern lift & soft glow - ZERO 3D skewing)
        const interactiveCards = document.querySelectorAll(
          ".card-premium, .gsap-stagger-card"
        );
        const cardCleanups: Array<() => void> = [];

        interactiveCards.forEach((cardEl) => {
          const card = cardEl as HTMLElement;

          const handleEnter = () => {
            gsap.to(card, {
              y: -4,
              duration: 0.28,
              ease: "power2.out",
            });
          };

          const handleLeave = () => {
            gsap.to(card, {
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            });
          };

          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mouseleave", handleLeave);

          cardCleanups.push(() => {
            card.removeEventListener("mouseenter", handleEnter);
            card.removeEventListener("mouseleave", handleLeave);
          });
        });

        // 9. MAGNETIC BUTTONS & LINKS (Addictive, playful cursor attraction)
        const magneticBtns = document.querySelectorAll(".gsap-magnetic");
        const magneticCleanups: Array<() => void> = [];

        magneticBtns.forEach((btnEl) => {
          const btn = btnEl as HTMLElement;

          const handleMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, {
              x: x * 0.22,
              y: y * 0.22,
              duration: 0.25,
              ease: "power2.out",
            });
          };

          const handleLeave = () => {
            gsap.to(btn, {
              x: 0,
              y: 0,
              duration: 0.6,
              ease: "elastic.out(1, 0.4)",
            });
          };

          btn.addEventListener("mousemove", handleMove);
          btn.addEventListener("mouseleave", handleLeave);

          magneticCleanups.push(() => {
            btn.removeEventListener("mousemove", handleMove);
            btn.removeEventListener("mouseleave", handleLeave);
          });
        });

        // Store cleanups for events
        return () => {
          cardCleanups.forEach((c) => c());
          magneticCleanups.forEach((c) => c());
        };
      });

      ScrollTrigger.refresh();

      cleanupRef.current = () => {
        ctx.revert();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [pathname]);

  return null;
};

export default GsapGlobalOrchestrator;

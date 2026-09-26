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
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Small delay to ensure Next.js route has rendered all DOM nodes
    const timer = setTimeout(() => {
      // Clean up previous animations if any
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }

      const ctx = gsap.context(() => {
        // 1. REVEAL HEADERS & TITLES
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
                start: "top 88%",
                toggleActions: "play none none none",
              },
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "all",
            }
          );
        });

        // 2. STAGGERED GRIDS & CARDS
        const staggerContainers = document.querySelectorAll(
          ".gsap-stagger-grid, .gsap-services-grid, .gsap-projects-grid, .gsap-expertise-grid"
        );
        staggerContainers.forEach((container) => {
          const cards = container.querySelectorAll(".gsap-stagger-card, .card-premium");
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { y: 35, opacity: 0 },
              {
                scrollTrigger: {
                  trigger: container,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
                y: 0,
                opacity: 1,
                duration: 0.65,
                stagger: 0.08,
                ease: "power3.out",
                clearProps: "all",
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
                start: "top 88%",
                toggleActions: "play none none none",
              },
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              clearProps: "all",
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

        // 4. TIMELINE ITEMS (EXPERIENCE & EDUCATION)
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
              clearProps: "all",
            }
          );
        });

        // 5. COUNTERS are handled safely via StatCounter client component

        // 6. TECH STACK BADGES STAGGER
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
                clearProps: "all",
              }
            );
          }
        });

        // 7. IMAGE SCALE REVEAL
        const imagesToReveal = document.querySelectorAll(".gsap-image-reveal");
        imagesToReveal.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 0.94, opacity: 0 },
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
              clearProps: "all",
            }
          );
        });

        // 8. INTERACTIVE 3D PERSPECTIVE TILT (Desktop mousemove)
        const tiltCards = document.querySelectorAll(
          ".gsap-tilt, .card-premium, .gsap-stagger-card"
        );
        const tiltCleanups: Array<() => void> = [];

        tiltCards.forEach((cardEl) => {
          const card = cardEl as HTMLElement;

          const handleMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(card, {
              rotateY: x * 0.04,
              rotateX: -y * 0.04,
              duration: 0.3,
              ease: "power1.out",
              transformPerspective: 800,
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

          tiltCleanups.push(() => {
            card.removeEventListener("mousemove", handleMove);
            card.removeEventListener("mouseleave", handleLeave);
          });
        });

        // 9. MAGNETIC BUTTONS & LINKS
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
              ease: "elastic.out(1, 0.35)",
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
          tiltCleanups.forEach((c) => c());
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

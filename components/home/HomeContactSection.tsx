"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactPage from "../InsertForm/ContactPage";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import CopyEmailButton from "./CopyEmailButton";

export const HomeContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal-item",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-28 bg-obsidian border-hairline-t overflow-hidden">
      {/* Background architectural aura */}
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[650px] h-[320px] bg-luxury-gold/[0.05] blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Call to Action & Channels */}
          <div className="lg:col-span-5 space-y-8 contact-reveal-item">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plate border border-luxury-gold/20 text-luxury-gold font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
                <span>Channel Open · 24-Hour Response</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-pearl tracking-tight leading-tight">
                Let&apos;s engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-cream via-luxury-gold to-luxury-champagne">
                  something exceptional.
                </span>
              </h2>

              <p className="text-pearl-muted text-base leading-relaxed">
                Whether you have an ambitious product to build, an engineering
                role to fill, or technical architecture to discuss — my inbox is
                open.
              </p>
            </div>

            {/* Quick Email Pill */}
            <div className="pt-2">
              <div className="text-xs font-mono text-pearl-dim uppercase tracking-wider mb-2">
                Direct Dispatch
              </div>
              <CopyEmailButton />
            </div>

            {/* Direct Connect Grid */}
            <div className="space-y-3 pt-4 border-t border-luxury-gold/15">
              <div className="text-xs font-mono text-pearl-dim uppercase tracking-wider">
                Professional Coordinates
              </div>

              <div className="space-y-2.5">
                <a
                  href="https://www.linkedin.com/in/umangsailor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-carbon hover:bg-plate border border-luxury-gold/15 hover:border-luxury-gold/50 text-pearl transition-all btn-press group shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <AiFillLinkedin size={20} className="text-luxury-gold" />
                    <div>
                      <div className="text-xs font-bold">LinkedIn</div>
                      <div className="text-[11px] font-mono text-pearl-dim">
                        linkedin.com/in/umangsailor
                      </div>
                    </div>
                  </div>
                  <HiArrowUpRight size={16} className="text-pearl-dim group-hover:text-luxury-gold transition-colors" />
                </a>

                <a
                  href="https://github.com/TuathaDeLugh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-carbon hover:bg-plate border border-luxury-gold/15 hover:border-luxury-gold/50 text-pearl transition-all btn-press group shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <AiFillGithub size={20} className="text-pearl" />
                    <div>
                      <div className="text-xs font-bold">GitHub</div>
                      <div className="text-[11px] font-mono text-pearl-dim">
                        github.com/TuathaDeLugh
                      </div>
                    </div>
                  </div>
                  <HiArrowUpRight size={16} className="text-pearl-dim group-hover:text-luxury-gold transition-colors" />
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=919998558554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-carbon hover:bg-plate border border-luxury-gold/15 hover:border-luxury-gold/50 text-pearl transition-all btn-press group shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <AiOutlineWhatsApp size={20} className="text-luxury-gold" />
                    <div>
                      <div className="text-xs font-bold">WhatsApp Channel</div>
                      <div className="text-[11px] font-mono text-pearl-dim">
                        +91 99985 58554 (Direct)
                      </div>
                    </div>
                  </div>
                  <HiArrowUpRight size={16} className="text-pearl-dim group-hover:text-luxury-gold transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Terminal */}
          <div className="lg:col-span-7 contact-reveal-item">
            <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-carbon/95 border border-luxury-gold/20 shadow-2xl relative backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-luxury-gold/15">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse" />
                  <span className="font-mono text-xs font-bold text-pearl uppercase tracking-wider">
                    Direct Inquiry Transmission
                  </span>
                </div>
                <span className="font-mono text-[11px] text-pearl-dim">
                  PRIORITY RESPONSE
                </span>
              </div>

              <ContactPage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;

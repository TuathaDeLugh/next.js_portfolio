import React from "react";
import ContactPage from "@/components/InsertForm/ContactPage";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import CopyEmailButton from "@/components/home/CopyEmailButton";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian text-pearl overflow-x-hidden selection:bg-[#CAAD8E] selection:text-[#14100E]">
      {/* ===== HERO / HEADER ===== */}
      <section className="relative pt-32 pb-16 border-hairline-b overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plate border border-[#CAAD8E]/20 text-[#CAAD8E] font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CAAD8E] animate-pulse" />
              <span>Communications Channel // Open For Contact</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-pearl leading-[1.05]">
              Initiate transmission &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CAAD8E] via-[#EBE3DA] to-pearl">
                technical collaboration.
              </span>
            </h1>

            <p className="text-pearl-muted text-base sm:text-xl leading-relaxed">
              Available for full-stack software engineering roles, frontend
              design engineering contracts, and high-performance product
              development.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT: TRANSMISSION TERMINAL & COORDINATES ===== */}
      <section className="py-20 bg-carbon border-hairline-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Message Dispatch Form */}
            <div className="lg:col-span-7 space-y-8">
              <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-obsidian border border-white/10 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CAAD8E] animate-pulse" />
                    <span className="font-mono text-xs font-bold text-pearl uppercase tracking-wider">
                      Message Terminal
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-pearl-dim">
                    REPLIES &le; 24H
                  </span>
                </div>

                <ContactPage />
              </div>

              {/* Location Map with Architectural Dark Frame */}
              <div className="rounded-3xl overflow-hidden bg-obsidian border border-white/10 shadow-xl">
                <div className="px-6 py-4 bg-plate/80 border-b border-white/[0.08] flex items-center justify-between font-mono text-xs text-pearl-dim">
                  <span>LOCATION: SURAT, GUJARAT, INDIA</span>
                  <span className="text-[#CAAD8E]">21.2250° N, 72.7795° E</span>
                </div>
                <iframe
                  className="w-full grayscale invert contrast-125 opacity-80"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14876.689800341675!2d72.77946530537108!3d21.225009164083545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzEzLjQiTiA3MsKwNDYnNDkuMyJF!5e0!3m2!1sgu!2sin!4v1695572227814!5m2!1sgu!2sin"
                  height="340"
                  loading="lazy"
                  title="Surat location coordinates"
                />
              </div>
            </div>

            {/* Right: Channels & Telemetry Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Dispatch Card */}
              <div className="p-8 rounded-3xl bg-obsidian border border-white/10 space-y-5">
                <div className="text-xs font-mono uppercase tracking-widest text-pearl-dim">
                  Direct Inquiries
                </div>

                <p className="text-pearl-muted text-sm leading-relaxed">
                  Have an urgent project brief or prefer direct communication?
                  Copy my verified email or message directly on WhatsApp:
                </p>

                <CopyEmailButton className="w-full justify-between" />
              </div>

              {/* Verified Coordinate Channels */}
              <div className="p-8 rounded-3xl bg-obsidian border border-white/10 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-pearl-dim mb-4">
                  Professional Channels
                </div>

                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/umangsailor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-plate/60 hover:bg-plate border border-white/5 hover:border-[#CAAD8E]/40 text-pearl transition-all btn-press group"
                  >
                    <div className="flex items-center gap-3">
                      <AiFillLinkedin size={22} className="text-[#CAAD8E]" />
                      <div>
                        <div className="text-sm font-bold">LinkedIn</div>
                        <div className="text-xs font-mono text-pearl-dim">
                          linkedin.com/in/umangsailor
                        </div>
                      </div>
                    </div>
                    <HiArrowUpRight size={18} className="text-pearl-dim group-hover:text-[#CAAD8E] transition-colors" />
                  </a>

                  <a
                    href="https://github.com/TuathaDeLugh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-plate/60 hover:bg-plate border border-white/5 hover:border-[#CAAD8E]/40 text-pearl transition-all btn-press group"
                  >
                    <div className="flex items-center gap-3">
                      <AiFillGithub size={22} className="text-pearl" />
                      <div>
                        <div className="text-sm font-bold">GitHub</div>
                        <div className="text-xs font-mono text-pearl-dim">
                          github.com/TuathaDeLugh
                        </div>
                      </div>
                    </div>
                    <HiArrowUpRight size={18} className="text-pearl-dim group-hover:text-[#CAAD8E] transition-colors" />
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=919998558554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-plate/60 hover:bg-plate border border-white/5 hover:border-[#CAAD8E]/40 text-pearl transition-all btn-press group"
                  >
                    <div className="flex items-center gap-3">
                      <AiOutlineWhatsApp size={22} className="text-[#CAAD8E]" />
                      <div>
                        <div className="text-sm font-bold">WhatsApp Channel</div>
                        <div className="text-xs font-mono text-pearl-dim">
                          +91 99985 58554 (Direct Voice &amp; Chat)
                        </div>
                      </div>
                    </div>
                    <HiArrowUpRight size={18} className="text-pearl-dim group-hover:text-[#CAAD8E] transition-colors" />
                  </a>
                </div>
              </div>

              {/* Résumé Quick Download */}
              <div className="p-8 rounded-3xl bg-plate border border-white/5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-pearl-dim">
                  Curriculum Vitae
                </div>
                <p className="text-xs text-pearl-muted leading-relaxed">
                  Download a comprehensive one-page engineering résumé with
                  detailed project impact and career history.
                </p>
                <a
                  href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#CAAD8E] text-[#14100E] font-extrabold text-xs font-mono hover:bg-[#EBE3DA] transition-colors btn-press shadow-xl shadow-[#CAAD8E]/15"
                >
                  <span>Download Curriculum Vitae</span>
                  <HiArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

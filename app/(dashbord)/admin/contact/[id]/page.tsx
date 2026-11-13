import React from "react";
import getSingleEmail from "@/controllers/singleEmail";
import DelmailBtn from "@/components/Delete/DelmailBtn";
import Link from "next/link";
import { FiArrowLeft, FiMail, FiUser, FiCalendar, FiSend } from "react-icons/fi";
import { IEmail } from "@/types";

interface CdetailsProps {
  params: Promise<{ id: string }>;
}

const Cdetails = async ({ params }: CdetailsProps): Promise<React.JSX.Element> => {
  const { id } = await params;
  const email: IEmail | null = await getSingleEmail(id);

  if (!email) {
    return (
      <div className="w-full py-16 text-center space-y-4">
        <div className="bg-carbon rounded-3xl p-8 border border-luxury-gold/15 max-w-md mx-auto space-y-4">
          <p className="text-pearl-dim font-mono text-xs">Transmission record not found</p>
          <Link
            href="/admin/contact"
            className="inline-flex items-center gap-2 text-luxury-gold hover:underline font-mono text-xs"
          >
            <FiArrowLeft size={14} /> Back to Inbound Messages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Top action bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-carbon hover:bg-plate border border-luxury-gold/15 text-pearl-muted hover:text-pearl font-mono text-xs transition-colors"
        >
          <FiArrowLeft size={14} />
          <span>Return to Transmissions</span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${email.email}?subject=Re: ${encodeURIComponent(email.subject || "Your inquiry")}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all shadow-md"
          >
            <FiSend size={13} />
            <span>Direct Reply</span>
          </a>
          <DelmailBtn id={String(email._id)} />
        </div>
      </div>

      {/* Main Transmission Reader Card */}
      <div className="rounded-3xl bg-carbon border border-luxury-gold/20 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-luxury-gold/15 bg-obsidian/60 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-plate border border-luxury-gold/25 font-mono text-xs text-luxury-gold font-bold">
              TRANSMISSION ID: {String(email._id).substring(0, 10)}...
            </span>
            <span className="font-mono text-xs text-pearl-dim">STATUS: LOGGED</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
            {email.subject || "No Subject Specified"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
            <div className="flex items-center gap-2.5 text-pearl-dim">
              <FiUser size={14} className="text-luxury-gold" />
              <span className="text-pearl font-medium">{email.fullname}</span>
            </div>
            <div className="flex items-center gap-2.5 text-pearl-dim">
              <FiMail size={14} className="text-luxury-gold" />
              <a
                href={`mailto:${email.email}`}
                className="text-luxury-gold hover:underline"
              >
                {email.email}
              </a>
            </div>
          </div>
        </div>

        {/* Message Body Content */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-wider text-pearl-dim">
            MESSAGE PAYLOAD
          </div>
          <div className="p-6 rounded-2xl bg-obsidian border border-luxury-gold/15 font-sans text-sm sm:text-base text-pearl leading-relaxed whitespace-pre-wrap">
            {email.details}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cdetails;

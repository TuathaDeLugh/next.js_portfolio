"use client";

import React, { useState } from "react";
import { HiOutlineMail, HiOutlineCheck } from "react-icons/hi";

interface Props {
  email?: string;
  className?: string;
}

export const CopyEmailButton: React.FC<Props> = ({
  email = "contact@umangsailor.com",
  className = "",
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      title="Click to copy email address"
      aria-label="Copy email address"
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-plate/90 hover:bg-plate-elevated border border-luxury-gold/20 hover:border-luxury-gold/60 text-xs font-mono text-pearl transition-all btn-press shadow-md whitespace-nowrap ${className}`}
    >
      {copied ? (
        <>
          <HiOutlineCheck className="text-luxury-gold text-sm" />
          <span className="text-luxury-gold font-semibold">Copied to Clipboard!</span>
        </>
      ) : (
        <>
          <HiOutlineMail className="text-luxury-gold text-sm" />
          <span className="text-pearl-muted group-hover:text-pearl transition-colors">
            {email}
          </span>
          <span className="text-[10px] text-pearl-dim ml-1 px-1.5 py-0.5 rounded-full bg-obsidian border border-luxury-gold/15">
            Copy
          </span>
        </>
      )}
    </button>
  );
};

export default CopyEmailButton;

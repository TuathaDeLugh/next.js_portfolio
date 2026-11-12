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
      // fallback
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      title="Click to copy email address"
      aria-label="Copy email address"
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-plate/90 hover:bg-plate border border-[#CAAD8E]/20 hover:border-[#CAAD8E]/50 text-xs font-mono text-pearl transition-all btn-press shadow-md whitespace-nowrap ${className}`}
    >
      {copied ? (
        <>
          <HiOutlineCheck className="text-[#CAAD8E] text-sm" />
          <span className="text-[#CAAD8E] font-semibold">Copied to Clipboard!</span>
        </>
      ) : (
        <>
          <HiOutlineMail className="text-[#CAAD8E] text-sm" />
          <span className="text-pearl-muted group-hover:text-pearl transition-colors">
            {email}
          </span>
          <span className="text-[10px] text-[#D1C8BD] ml-1 px-1.5 py-0.5 rounded bg-obsidian border border-[#CAAD8E]/15">
            Copy
          </span>
        </>
      )}
    </button>
  );
};

export default CopyEmailButton;


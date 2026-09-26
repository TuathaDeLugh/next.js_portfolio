"use client";

import React from "react";
import Link from "next/link";
import { usePageTransition } from "./PageTransitionManager";

interface TransitionLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className = "",
  onClick,
  ...rest
}) => {
  const { triggerTransition, isTransitioning } = usePageTransition();

  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    rest.target === "_blank";

  const isHash = href.startsWith("#");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If external, anchor hash, or modified click (Ctrl/Cmd/Shift/Alt/Middle click), let default handler run
    if (
      isExternal ||
      isHash ||
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    e.preventDefault();
    if (!isTransitioning) {
      triggerTransition(href);
    }
  };

  if (isExternal) {
    return (
      <a href={href} className={className} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default TransitionLink;

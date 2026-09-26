"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { TransitionType, TransitionContextType } from "./types";
import ColumnShutterTransition, {
  TransitionHandle,
} from "./ColumnShutterTransition";
import DiagonalSlicesTransition from "./DiagonalSlicesTransition";
import LiquidCurtainTransition from "./LiquidCurtainTransition";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TransitionContext = createContext<TransitionContextType | null>(null);

export const usePageTransition = (): TransitionContextType => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used within a PageTransitionProvider"
    );
  }
  return context;
};

interface ProviderProps {
  children: React.ReactNode;
}

export const PageTransitionProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const [transitionType, setTransitionTypeState] =
    useState<TransitionType>("column-shutter");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const columnShutterRef = useRef<TransitionHandle>(null);
  const diagonalSlicesRef = useRef<TransitionHandle>(null);
  const liquidCurtainRef = useRef<TransitionHandle>(null);

  const prevPathRef = useRef<string>(pathname);
  const pendingHrefRef = useRef<string | null>(null);

  const [isPending, startTransition] = React.useTransition();
  const safetyTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Load user transition preference from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_transition");
      if (
        saved === "column-shutter" ||
        saved === "diagonal-slices" ||
        saved === "liquid-curtain"
      ) {
        setTransitionTypeState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setTransitionType = (type: TransitionType) => {
    setTransitionTypeState(type);
    try {
      localStorage.setItem("preferred_transition", type);
    } catch {
      // ignore
    }
  };

  const getActiveHandle = useCallback((): TransitionHandle | null => {
    switch (transitionType) {
      case "column-shutter":
        return columnShutterRef.current;
      case "diagonal-slices":
        return diagonalSlicesRef.current;
      case "liquid-curtain":
        return liquidCurtainRef.current;
      default:
        return columnShutterRef.current;
    }
  }, [transitionType]);

  // Helper to instantly reset scroll position to top with zero animation
  const resetScrollToTopInstant = useCallback(() => {
    if (typeof window === "undefined") return;
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const triggerTransition = useCallback(
    async (href: string) => {
      // Don't transition if already transitioning or navigating to the exact current page
      if (isTransitioning) return;
      if (href === pathname || (href === "/" && pathname === "/")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      setIsTransitioning(true);
      pendingHrefRef.current = href;

      const handle = getActiveHandle();
      if (handle) {
        await handle.playIn();
      }

      // Shutter is now fully displayed and covering the screen:
      // Instantly reset scroll to top behind the closed shutter
      resetScrollToTopInstant();

      // Navigate to the target route wrapped in startTransition so React tracks data fetching
      startTransition(() => {
        router.push(href, { scroll: false });
      });
    },
    [isTransitioning, pathname, router, getActiveHandle, resetScrollToTopInstant]
  );

  // Safety fallback: ensure isTransitioning never remains stuck if a navigation fails or is aborted
  useEffect(() => {
    if (isTransitioning) {
      safetyTimerRef.current = setTimeout(async () => {
        const handle = getActiveHandle();
        if (handle) {
          await handle.playOut();
        }
        setIsTransitioning(false);
        pendingHrefRef.current = null;
      }, 4000);

      return () => {
        if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      };
    }
  }, [isTransitioning, getActiveHandle]);

  // When pathname changes (either by push or back/forward) and React is not pending, play out
  useEffect(() => {
    if (prevPathRef.current !== pathname && !isPending) {
      prevPathRef.current = pathname;

      // Ensure scroll is at top before shutter starts retracting
      resetScrollToTopInstant();

      // Small delay for Next.js to commit new route elements
      const timer = setTimeout(async () => {
        resetScrollToTopInstant();

        const handle = getActiveHandle();
        if (handle) {
          await handle.playOut();
        }
        setIsTransitioning(false);
        pendingHrefRef.current = null;

        // Restore smooth scrolling for in-page user navigation after shutter is hidden
        document.documentElement.style.scrollBehavior = "";
        document.body.style.scrollBehavior = "";

        // Re-sync all GSAP scroll triggers for the newly revealed page
        if (typeof window !== "undefined") {
          ScrollTrigger.refresh();
        }
      }, 60);

      return () => clearTimeout(timer);
    }
  }, [pathname, isPending, getActiveHandle, resetScrollToTopInstant]);

  // Global click interceptor: ensure ANY internal link (e.g. project cards, back buttons) triggers transition
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (isTransitioning) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only handle internal relative paths
      if (
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith("/#") &&
        !href.startsWith("/api") &&
        !href.startsWith("/_next") &&
        anchor.target !== "_blank" &&
        !anchor.hasAttribute("download") &&
        !e.defaultPrevented &&
        e.button === 0 &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        // If navigating to exact current page, do nothing special
        if (href === pathname || (href === "/" && pathname === "/")) {
          return;
        }

        e.preventDefault();
        triggerTransition(href);
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleGlobalClick, {
        capture: true,
      });
    };
  }, [isTransitioning, pathname, triggerTransition]);

  return (
    <TransitionContext.Provider
      value={{
        transitionType,
        setTransitionType,
        isTransitioning,
        triggerTransition,
      }}
    >
      {/* Transition Overlay Components */}
      <ColumnShutterTransition ref={columnShutterRef} columnsCount={6} />
      <DiagonalSlicesTransition ref={diagonalSlicesRef} slicesCount={6} />
      <LiquidCurtainTransition ref={liquidCurtainRef} />

      {/* Main App Content */}
      <div id="page-content-wrapper" className="min-h-screen">
        {children}
      </div>
    </TransitionContext.Provider>
  );
};

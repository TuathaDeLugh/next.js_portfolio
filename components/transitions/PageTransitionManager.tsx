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

      // Navigate to the target route without Next.js auto-scrolling
      router.push(href, { scroll: false });
    },
    [isTransitioning, pathname, router, getActiveHandle, resetScrollToTopInstant]
  );

  // When pathname changes (either by push or back/forward), play out
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;

      // Ensure scroll is at top before shutter starts retracting
      resetScrollToTopInstant();

      // Small delay for Next.js to render new route elements
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
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [pathname, getActiveHandle, resetScrollToTopInstant]);

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

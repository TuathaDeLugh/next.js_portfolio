"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  resolvedTheme: "dark",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  // Apply theme class to documentElement
  const applyTheme = useCallback((targetTheme: Theme) => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    let isDark = false;
    if (targetTheme === "dark") {
      isDark = true;
    } else if (targetTheme === "light") {
      isDark = false;
    } else {
      // system default
      isDark = mediaQuery.matches;
    }

    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
      setResolvedTheme("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      setResolvedTheme("light");
    }
  }, []);

  // Initialize theme from localStorage on mount (defaults to "system")
  useEffect(() => {
    setMounted(true);
    let initialTheme: Theme = "system";
    try {
      const stored = localStorage.getItem("portfolio_theme") as Theme | null;
      if (stored === "light" || stored === "dark" || stored === "system") {
        initialTheme = stored;
      }
    } catch {
      // fallback to system
    }

    setThemeState(initialTheme);
    applyTheme(initialTheme);

    // Listen to OS prefers-color-scheme changes when in system mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      try {
        const current = (localStorage.getItem("portfolio_theme") as Theme) || "system";
        if (current === "system") {
          applyTheme("system");
        }
      } catch {
        applyTheme("system");
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemChange);
      return () => mediaQuery.removeEventListener("change", handleSystemChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemChange);
      return () => mediaQuery.removeListener(handleSystemChange);
    }
  }, [applyTheme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem("portfolio_theme", newTheme);
      } catch {
        // ignore
      }
      applyTheme(newTheme);
    },
    [applyTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;


import React from "react";

export const ThemeScript: React.FC = () => {
  const scriptContent = `
    (function() {
      try {
        var stored = localStorage.getItem("portfolio_theme") || "system";
        var isDark = stored === "dark" || (stored === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        if (isDark) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
      } catch (e) {}
    })();
  `;

  return (
    <script
      id="theme-initializer"
      dangerouslySetInnerHTML={{ __html: scriptContent }}
      suppressHydrationWarning
    />
  );
};

export default ThemeScript;


import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  const stored = document.documentElement.getAttribute("data-theme");
  return stored === "light" ? "light" : "dark";
}

/**
 * The actual theme value is applied synchronously by the inline script in
 * index.html (before paint, to avoid a flash). This hook just mirrors that
 * choice into React state and keeps localStorage + the DOM attribute in sync.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}

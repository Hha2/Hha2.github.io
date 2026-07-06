import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { EASE, EMAIL } from "./data";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return { theme, toggle };
}

export function useRevealVariants() {
  const reduce = useReducedMotion();
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay * 0.07, ease: EASE },
    }),
  };
}

/**
 * Opens the user's email client AND copies the address to clipboard,
 * so it works even when mailto: is blocked (e.g. in preview iframes).
 * Returns "opened" | "copied" for UI feedback.
 */
export async function launchEmail(subject = "", body = "") {
  const query = new URLSearchParams();
  if (subject) query.set("subject", subject);
  if (body) query.set("body", body);
  const q = query.toString();
  const href = `mailto:${EMAIL}${q ? `?${q}` : ""}`;

  try { await navigator.clipboard.writeText(EMAIL); } catch { /* ignore */ }

  // Try new tab first (works outside iframes); fall back to top-level nav.
  const opened = window.open(href, "_blank", "noopener,noreferrer");
  if (!opened) {
    try { window.top.location.href = href; } catch { window.location.href = href; }
  }
  return "opened";
}

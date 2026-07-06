import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import cvAsset from "@/assets/cv.asset.json";
import { NAV } from "./data";

export function SiteHeader({ theme, toggle, navOpen, setNavOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-paper/84 backdrop-blur-2xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-8 md:h-20 md:grid-cols-3 md:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Go to top">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-sm font-semibold text-paper shadow-card">
            H
          </span>
          <span className="truncate text-sm font-semibold md:text-base">Haris Ali</span>
        </a>

        <nav className="hidden justify-center md:flex" aria-label="Main navigation">
          <div className="flex items-center gap-1 rounded-full border border-hairline bg-surface px-1.5 py-1.5 shadow-soft">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:bg-paper hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface shadow-soft transition-colors hover:bg-paper"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -30, y: -4 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, rotate: 30, y: 4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid place-items-center"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href={cvAsset.url}
            download
            className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-brand-contrast shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow md:inline-flex"
          >
            <Download className="h-4 w-4" /> CV
          </a>

          <button
            type="button"
            onClick={() => setNavOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface shadow-soft md:hidden"
            aria-label="Toggle menu"
          >
            {navOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden border-t border-hairline bg-paper md:hidden"
          >
            <div className="grid gap-1 px-5 py-4">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setNavOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={cvAsset.url}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium text-brand-contrast shadow-card"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

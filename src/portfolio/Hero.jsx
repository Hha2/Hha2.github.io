import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, CheckCircle2, Code2, GraduationCap, Mail, TerminalSquare } from "lucide-react";
import { launchEmail } from "./hooks";

const HERO_ICONS = [
  { icon: Code2, label: "Software" },
  { icon: BrainCircuit, label: "AI / ML" },
  { icon: TerminalSquare, label: "Python" },
  { icon: GraduationCap, label: "BS IET" },
];

export function Hero() {
  const [emailed, setEmailed] = useState(false);

  const handleEmail = async () => {
    await launchEmail();
    setEmailed(true);
    window.setTimeout(() => setEmailed(false), 2600);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 md:px-12 md:pb-20 md:pt-28">
      <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-end">
        <div className="min-w-0">
          <p className="mb-4 inline-flex max-w-full rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft sm:mb-6">
            Available for Software Engineering / AI-ML internships
          </p>
          <h1 className="max-w-4xl text-[clamp(2.15rem,6.2vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-ink">
            <span className="block text-ink">Software</span>
            <span className="block text-ink">Engineer &amp;</span>
            <span className="block text-brand">AI/ML Intern.</span>
          </h1>
        </div>

        <div className="rounded-[1.65rem] border border-hairline bg-card p-5 shadow-elevated sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink text-sm font-semibold text-paper shadow-card">H</span>
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold text-ink">Muhammad Haris Ali</p>
              <p className="text-sm text-muted-foreground">Lahore, Pakistan</p>
            </div>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            7th-semester BS Information Engineering Technology student focused on practical software, mobile products, and computer vision systems.
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row lg:flex-col xl:flex-row">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand py-3 pl-5 pr-3 text-sm font-medium text-brand-contrast shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              View work
              <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-brand transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-paper px-5 py-3 text-sm font-medium shadow-soft transition-colors hover:bg-surface"
            >
              <AnimatePresence mode="wait" initial={false}>
                {emailed ? (
                  <motion.span
                    key="ok"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="inline-flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand" /> Copied — check your email app
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" /> Email me
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-10 md:gap-4">
        {HERO_ICONS.map((item) => (
          <div
            key={item.label}
            className="group flex min-h-20 flex-col justify-between rounded-2xl border border-hairline bg-surface p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-card sm:min-h-24 sm:p-5"
          >
            <item.icon className="h-5 w-5 text-brand sm:h-6 sm:w-6" />
            <span className="mt-4 text-xs font-medium leading-snug text-ink sm:text-base">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

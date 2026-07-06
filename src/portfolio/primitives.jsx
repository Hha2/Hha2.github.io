import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "./data";
import { useRevealVariants } from "./hooks";

export function Reveal({ children, delay = 0, className = "" }) {
  const variants = useRevealVariants();
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageLine() {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduce ? 0 : 0.95, ease: EASE }}
        className="h-px origin-left bg-hairline"
      />
    </div>
  );
}

export function PageSection({ id, label, title, children }) {
  return (
    <section
      id={id}
      className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 py-20 scroll-mt-16 sm:px-8 md:px-12 md:py-28"
    >
      <Reveal className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 md:mb-12">
        <h2 className="min-w-0 text-[clamp(1.85rem,4.6vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-ink">
          {title}
        </h2>
        <span className="shrink-0 pb-1.5 text-right text-[0.65rem] font-medium uppercase tracking-wider text-brand sm:text-xs">
          {label}
        </span>
      </Reveal>
      {children}
    </section>
  );
}

export function Field({ label, name, type = "text", textarea, required }) {
  const cls =
    "w-full rounded-2xl border border-hairline bg-paper px-4 py-3.5 text-base text-ink shadow-soft transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25";
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium uppercase text-muted-foreground">{label}</span>
      {textarea
        ? <textarea name={name} required={required} rows={5} className={`${cls} resize-none`} />
        : <input name={name} type={type} required={required} className={cls} />}
    </label>
  );
}

export function ContactRow({ icon, label, value, href }) {
  const body = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-hairline bg-paper text-brand shadow-soft">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase text-muted-foreground">{label}</span>
        <span className="block truncate text-sm font-medium text-ink sm:text-base">{value}</span>
      </span>
      {href && <ArrowUpRight className="h-4 w-4 shrink-0 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-2 py-3 transition-colors hover:bg-surface"
      >
        {body}
      </a>
    );
  }
  return (
    <div className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-2 py-3">
      {body}
    </div>
  );
}

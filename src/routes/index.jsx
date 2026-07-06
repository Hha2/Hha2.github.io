import { createFileRoute } from "@tanstack/react-router";
import { useReducer, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

import { EMAIL } from "@/portfolio/data";
import { useTheme, launchEmail } from "@/portfolio/hooks";
import { PageLine } from "@/portfolio/primitives";
import { SiteHeader } from "@/portfolio/Header";
import { Hero } from "@/portfolio/Hero";
import { AboutSection, ContactSection, ExperienceSection, WorkSection } from "@/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [status, setStatus] = useReducer((_, next) => next, "idle");
  const { theme, toggle } = useTheme();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.35 });

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name || "visitor"}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!response.ok) throw new Error("Form service failed");
      setStatus("sent");
      form.reset();
      window.setTimeout(() => setStatus("idle"), 4500);
    } catch {
      await launchEmail(
        `Portfolio message from ${name || "visitor"}`,
        `${message}\n\nFrom: ${name}\nEmail: ${email}`,
      );
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 4500);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <motion.div
        style={{ scaleX: reduce ? 1 : scaleX }}
        className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-brand"
      />

      <SiteHeader theme={theme} toggle={toggle} navOpen={navOpen} setNavOpen={setNavOpen} />

      <main id="top">
        <Hero />
        <PageLine />
        <WorkSection />
        <PageLine />
        <AboutSection />
        <PageLine />
        <ExperienceSection />
        <PageLine />
        <ContactSection status={status} onSubmit={onSubmit} />
      </main>

      <footer className="mx-auto grid max-w-7xl grid-cols-1 gap-2 border-t border-hairline px-5 py-8 text-xs text-muted-foreground sm:px-8 md:grid-cols-[1fr_auto] md:px-12">
        <p>© {new Date().getFullYear()} Muhammad Haris Ali</p>
        <p>Software Engineering / AI-ML Intern — Lahore, Pakistan</p>
      </footer>
    </div>
  );
}

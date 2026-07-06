import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Phone, Rocket, Send } from "lucide-react";
import { EMAIL, EXPERIENCE, GH, LINKEDIN, PHONE, PROJECTS, SKILLS } from "./data";
import { ContactRow, Field, PageSection, Reveal } from "./primitives";
import { useRevealVariants, launchEmail } from "./hooks";

/* ------------------------------- WORK ------------------------------- */

function ProjectCard({ project, index }) {
  const variants = useRevealVariants();
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
      className="group block rounded-[1.45rem] border border-hairline bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-elevated sm:p-5 md:rounded-[1.75rem] md:p-7"
    >
      <div className="grid gap-4 md:grid-cols-12 md:items-start md:gap-6">
        <div className="flex items-center justify-between md:col-span-1 md:block">
          <span className="text-xs font-medium uppercase text-brand">{project.n}</span>
          <span className="text-xs font-medium uppercase text-muted-foreground md:hidden">{project.year}</span>
        </div>
        <div className="min-w-0 md:col-span-5">
          <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">{project.kicker}</p>
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-brand sm:text-2xl md:text-[1.75rem]">
            {project.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-hairline bg-paper px-2.5 py-1 text-xs text-muted-foreground shadow-soft">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm leading-7 text-muted-foreground md:col-span-4 md:text-base">
          {project.description}
        </p>
        <div className="flex items-center justify-between gap-3 md:col-span-2 md:justify-end">
          <span className="hidden text-xs font-medium uppercase text-muted-foreground md:inline">{project.year}</span>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-hairline bg-paper text-ink shadow-soft transition-all duration-300 group-hover:rotate-6 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-contrast">
            <Github className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function WorkSection() {
  return (
    <PageSection id="work" label="Selected repositories" title="Work">
      <div className="grid gap-4 md:gap-5">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </PageSection>
  );
}

/* ------------------------------- ABOUT ------------------------------ */

export function AboutSection() {
  return (
    <PageSection id="about" label="Profile" title="About">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-8">
        <Reveal className="rounded-[1.75rem] border border-hairline bg-card p-6 shadow-elevated sm:p-8 md:p-10">
          <p className="text-xl font-light leading-[1.35] tracking-tight text-ink sm:text-2xl md:text-3xl">
            I build simple, useful products across web, mobile, and applied AI — with a strong base in Python, computer vision, and frontend delivery.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Currently studying BS Information Engineering Technology at Superior University, Lahore. I am seeking an internship where I can contribute to real products, learn from senior engineers, and improve practical ML systems.
          </p>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={1} className="rounded-[1.5rem] border border-hairline bg-surface p-5 shadow-card sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase text-brand">
              <Rocket className="h-4 w-4" /> Current focus
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Mobile engineering, clean Python backends, data pipelines, and computer vision workflows from annotation to model evaluation.
            </p>
          </Reveal>

          <Reveal delay={2} className="rounded-[1.5rem] border border-hairline bg-surface p-5 shadow-card sm:p-6">
            <div className="mb-4 text-xs font-medium uppercase text-brand">Skills</div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="rounded-full border border-hairline bg-paper px-3 py-1.5 text-xs text-muted-foreground shadow-soft">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </PageSection>
  );
}

/* ---------------------------- EXPERIENCE ---------------------------- */

export function ExperienceSection() {
  return (
    <PageSection id="experience" label="Timeline" title="Experience">
      <div className="grid gap-4">
        {EXPERIENCE.map((item, index) => (
          <Reveal key={item.role} delay={index}>
            <article className="rounded-[1.5rem] border border-hairline bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated sm:p-6 md:p-8">
              <div className="grid gap-3 md:grid-cols-12 md:gap-6">
                <p className="text-xs font-medium uppercase text-brand md:col-span-3">{item.period}</p>
                <div className="min-w-0 md:col-span-4">
                  <h3 className="text-xl font-semibold leading-tight text-ink sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                </div>
                <p className="text-sm leading-7 text-muted-foreground md:col-span-5 md:text-base">{item.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal delay={EXPERIENCE.length}>
          <article className="rounded-[1.5rem] border border-brand/40 bg-ink p-5 text-paper shadow-elevated sm:p-6 md:p-8">
            <div className="grid gap-3 md:grid-cols-12 md:gap-6">
              <p className="text-xs font-medium uppercase text-brand md:col-span-3">2023 — 2027</p>
              <div className="min-w-0 md:col-span-4">
                <h3 className="text-xl font-semibold leading-tight sm:text-2xl">BS IET</h3>
                <p className="mt-1 text-sm opacity-75">Superior University, Lahore</p>
              </div>
              <p className="text-sm leading-7 opacity-80 md:col-span-5 md:text-base">
                7th-semester student focused on software engineering, machine learning, and applied computer vision coursework.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </PageSection>
  );
}

/* ----------------------------- CONTACT ------------------------------ */

export function ContactSection({ status, onSubmit }) {
  return (
    <PageSection id="contact" label="Contact" title="Let's talk">
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
        <Reveal className="rounded-[1.75rem] border border-hairline bg-card p-5 shadow-elevated sm:p-7 md:p-8">
          <p className="text-xl font-light leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl">
            Open to software engineering, frontend, mobile, and AI/ML internship opportunities.
          </p>
          <div className="mt-8 grid gap-2">
            <EmailRow />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value={PHONE} href="tel:+923234139068" />
            <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="haris-byte" href={GH} />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="muhammad-haris-ali" href={LINKEDIN} />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Lahore, Pakistan" />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-hairline bg-surface p-5 shadow-elevated sm:p-7 md:p-8">
            <div className="grid gap-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Message" name="message" textarea required />
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-brand-contrast shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending message</>
                ) : status === "sent" ? (
                  <><CheckCircle2 className="h-4 w-4" /> Message sent</>
                ) : (
                  <>Send message <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></>
                )}
              </button>
              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.p key="sent" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                    className="text-center text-xs text-muted-foreground">
                    Thanks — your message has been sent.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p key="error" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                    className="text-center text-xs text-brand">
                    Couldn't reach the mail service — opening your email app instead.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </PageSection>
  );
}

/** Email row that both opens the mail app and copies the address. */
function EmailRow() {
  const onClick = (e) => {
    e.preventDefault();
    launchEmail();
  };
  return (
    <a
      href={`mailto:${EMAIL}`}
      onClick={onClick}
      className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-2 py-3 transition-colors hover:bg-surface"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-hairline bg-paper text-brand shadow-soft">
        <Mail className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase text-muted-foreground">Email</span>
        <span className="block truncate text-sm font-medium text-ink sm:text-base">{EMAIL}</span>
      </span>
      <Send className="h-4 w-4 shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

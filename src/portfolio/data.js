// Portfolio content — edit copy, links, and lists here.

export const EMAIL = "h.harisali124@gmail.com";
export const PHONE = "+92 323 4139068";
export const GH = "https://github.com/haris-byte";
export const LINKEDIN = "https://linkedin.com/in/muhammad-haris-ali";

export const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const PROJECTS = [
  {
    n: "01",
    year: "2025",
    title: "Ship Detection",
    kicker: "Computer Vision",
    description:
      "Ensemble object-detection pipeline for maritime imagery using YOLO models, OpenCV, and dataset evaluation workflows.",
    tech: ["Python", "YOLOv11", "OpenCV"],
    href: `${GH}/Ship-detection-CV-Project`,
  },
  {
    n: "02",
    year: "2025",
    title: "Persist",
    kicker: "AI Goal Tracking",
    description:
      "Cross-platform goal tracking concept with AI roadmaps, mood logs, stability scoring, and friend progress features.",
    tech: ["React Native", "Flutter", "Firebase"],
    href: `${GH}/Persist-Doc`,
  },
  {
    n: "03",
    year: "2024",
    title: "NPR News Scraper",
    kicker: "Data Pipeline",
    description:
      "Clean article extraction pipeline with pagination, deduplication, and structured CSV/JSON output for NLP workflows.",
    tech: ["Python", "BeautifulSoup", "Data"],
    href: `${GH}/NPR-News-data-scraper`,
  },
  {
    n: "04",
    year: "2024",
    title: "Habit Tracker",
    kicker: "Mobile Product",
    description:
      "Streak-based mobile tracking product focused on habit consistency, simple feedback loops, and clean user flow.",
    tech: ["React Native", "Mobile", "UX"],
    href: `${GH}/Habit-Tracker-With-Streaks`,
  },
];

export const EXPERIENCE = [
  {
    period: "2023 — Now",
    role: "Data Annotator",
    org: "Adaxiom",
    desc: "Labelled CV and NLP datasets including bounding boxes, segmentation, and classification for production ML pipelines.",
  },
  {
    period: "2024",
    role: "Frontend Developer Intern",
    org: "Adaxiom",
    desc: "Built user-facing web pages with HTML, CSS, and JavaScript while practicing design-to-code delivery.",
  },
  {
    period: "2022 — 2024",
    role: "Computer Science Tutor",
    org: "Independent",
    desc: "Taught Python, DSA, and web fundamentals through practical, project-based sessions.",
  },
];

export const SKILLS = [
  "Python", "JavaScript", "React Native", "Flutter", "Django",
  "Firebase", "TensorFlow", "PyTorch", "OpenCV", "YOLOv11",
  "scikit-learn", "Pandas",
];

export const EASE = [0.22, 1, 0.36, 1];

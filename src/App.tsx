import { useEffect, useRef, useState } from "react";
import cvUrl from "../assets/arsha-hsia-cv-product-operations.pdf";
import coverIntercom from "../assets/cover-intercom.jpg";
import coverLilai from "../assets/cover-lilai.jpg";
import coverSolus from "../assets/cover-solus.jpg";
import coverTriage from "../assets/cover-triage.jpg";
import portraitCutout from "../assets/arsha-hsia-portrait-cutout.webp";

const links = {
  cv: cvUrl,
  linkedin: "https://www.linkedin.com/in/arsha-hsia/",
  email: "mailto:arsha.hsia@gmail.com",
  emailAddress: "arsha.hsia@gmail.com",
  intercom: "https://arsha-portfolio.github.io/intercom-case-study/",
  lilai: "https://lilaiireland.com/consult/",
  lilaiInstagram: "https://www.instagram.com/lilaiireland/",
  solus: "https://canva.link/m3cy5y3ldrojhd5",
};

type Project = {
  title: string;
  context: string;
  description: string;
  outcome: string;
  tags: string[];
  href: string;
  cta: string;
  external?: boolean;
  cover: string;
  coverAlt: string;
  video?: string;
};

const projects: Project[] = [
  {
    title: "Designing Trust-Sensitive AI Escalation",
    context: "Intercom Fin — Independent Product Case Study",
    description: "Rethinking AI-to-human routing around trust deterioration rather than sentiment alone.",
    outcome: "Grounded in 600+ real survey responses and 33 consultation records · L1–L4 escalation framework · live working prototype",
    tags: ["Product Judgement", "AI Operations", "Human-in-the-loop", "Experimentation"],
    href: links.intercom,
    cta: "Read Case Study",
    external: true,
    cover: coverIntercom,
    coverAlt: "Cover of the Trust-Sensitive Escalation case study for Intercom Fin",
  },
  {
    title: "Zero-Touch AI Feedback Triage",
    context: "Lilai Ireland — Automation Case Study",
    description:
      "A Google Forms → Make.com → OpenAI → Notion pipeline that turns unstructured student feedback into a structured, SLA-routed product backlog — designed and shipped in one weekend, with zero engineering resources.",
    outcome:
      "100% of manual triage eliminated (~10 hrs/week) · P1 alerts routed to the triage board in minutes · NPS-by-vendor evidence powering commission negotiations",
    tags: ["AI Automation", "Prompt Guardrails", "SLA Design", "Data Pipeline"],
    href: "https://youtu.be/lk1QPOcE60o",
    cta: "Watch the 4-min Demo",
    external: true,
    cover: coverTriage,
    coverAlt: "Demo video still showing the Make.com scenario connecting Google Forms, OpenAI, and Notion",
    video: "lk1QPOcE60o",
  },
  {
    title: "Scaling AI Content Without Breaking User Trust",
    context: "SOLUS Lighting — Company Research Project",
    description:
      "Designing a human-in-the-loop content operations framework through user research and AI workflow testing.",
    outcome: "~40% reduction in production costs · 6× increase in engagement, delivered safely through human-in-the-loop review",
    tags: ["User Research", "Workflow Design", "AI Adoption", "Business Strategy"],
    href: links.solus,
    cta: "View Case Study",
    external: true,
    cover: coverSolus,
    coverAlt: "Cover of the AI-assisted content operations case study for SOLUS Lighting",
  },
  {
    title: "Building a Trust-Based Education Service from 0→1",
    context: "Lilai Ireland — Live Venture",
    description:
      "Building customer journeys, operational workflows, AI-assisted automation, and productised advisory services for students relocating to Ireland.",
    outcome: "~350% growth in one quarter · 3,000+ followers · 50+ high-quality clients converted in the first year",
    tags: ["0→1 Operations", "GTM", "Automation", "Founder"],
    href: links.lilai,
    cta: "Try the Live Assessment",
    external: true,
    cover: coverLilai,
    coverAlt: "Result screen of the Lilai Ireland departure-readiness assessment, classifying the user's readiness stage with recommended next steps",
  },
];

const workAreas = [
  {
    title: "Operational Systems",
    body: "Workflow design, playbooks, triage models, and feedback loops for teams handling complex operating conditions.",
  },
  {
    title: "Human-centred AI",
    body: "AI-assisted processes that clarify where automation helps, where review matters, and how accountability stays visible.",
  },
  {
    title: "Trust-sensitive Products",
    body: "Product and journey decisions where escalation, transparency, and user confidence matter as much as speed.",
  },
];

const timeline = [
  {
    period: "Apr 2025 — Present",
    org: "Lilai Ireland",
    role: "Co-Founder & Operations Lead",
    body: "Built 0→1 onboarding and operations workflows for a live education venture — ~350% quarterly growth, 80%+ consultation conversion, and an AI-assisted feedback triage saving ~10 hours a week.",
  },
  {
    period: "Apr — Jul 2026",
    org: "Intercom Fin — Independent Case Study",
    role: "Project Lead & Product Designer",
    body: "Designed a six-category Decision Blocker Taxonomy with an L1–L4 escalation framework, and shipped a working prototype with branching validation flows and live lead capture.",
  },
  {
    period: "Apr — Jul 2025",
    org: "SOLUS Lighting",
    role: "Digital Content Researcher & Analyst",
    body: "MSc company project at Trinity College Dublin — built a human-in-the-loop AI content workflow achieving a ~40% reduction in production costs while driving a 6× increase in engagement safely.",
  },
  {
    period: "Sep 2024 — Aug 2025",
    org: "LE LYS TW",
    role: "Product & GTM Operations Manager",
    body: "Redesigned onboarding and CRM workflows for a remote EdTech business — 40% less manual coordination, ~30% higher lead-to-paid conversion, supporting 20% monthly revenue growth.",
  },
  {
    period: "Oct 2021 — Dec 2023",
    org: "AceKing Group",
    role: "LATAM Customer Service & Platform Operations Specialist",
    body: "Operated moderation, risk investigation, and incident triage at platform scale — 40% faster response times, 50% backlog reduction, and 35% lower abuse rates across LATAM markets.",
  },
];

const sectionIds = ["work", "experience", "about", "contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const povRef = useRef<HTMLElement | null>(null);
  const povBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Header elevation on scroll (state only flips at the 8px boundary, so no re-render churn).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Parallax for the POV section: mutates the transform directly so React never re-renders.
  useEffect(() => {
    const section = povRef.current;
    const background = povBgRef.current;
    if (!section || !background) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const progress = Math.max(
            0,
            Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
          );
          background.style.transform = `translate3d(0, ${((progress - 0.5) * -80).toFixed(1)}px, 0)`;
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal for everything tagged data-reveal.
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          // Stagger only the entrance; clear the delay afterwards so hover effects stay snappy.
          if (el.dataset.revealDelay) {
            el.style.transitionDelay = el.dataset.revealDelay;
            window.setTimeout(() => {
              el.style.transitionDelay = "";
            }, 1000);
          }
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "Work", href: "#work", id: "work" },
    { label: "Evidence", href: "#experience", id: "experience" },
    { label: "About", href: "#about", id: "about" },
    { label: "Contact", href: "#contact", id: "contact" },
    { label: "CV", href: links.cv, id: "" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-charcoal text-bone">
      <a
        href="#main"
        className="focus-ring fixed left-4 top-4 z-[70] -translate-y-24 rounded-full border border-bone/20 bg-bone px-4 py-3 text-sm font-bold text-charcoal transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-bone/10 bg-charcoal/85 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10" aria-label="Primary">
          <a className="focus-ring text-sm font-semibold tracking-[0.24em] text-bone/95 transition hover:text-bone" href="./" onClick={closeMenu}>
            Arsha Hsia
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                className={`focus-ring nav-link text-sm font-medium transition ${
                  item.id && activeSection === item.id ? "is-active text-bone" : "text-bone/68 hover:text-bone"
                }`}
                aria-current={item.id && activeSection === item.id ? "true" : undefined}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="focus-ring hidden rounded-full border border-bone/18 px-5 py-3 text-sm font-semibold text-bone/86 transition duration-300 hover:-translate-y-0.5 hover:border-moss/70 hover:text-bone md:inline-flex"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <button
            type="button"
            className="focus-ring relative z-[65] flex h-11 w-11 items-center justify-center rounded-full border border-bone/18 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-0.5 w-5 bg-bone transition duration-300 ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span className={`absolute h-0.5 w-5 bg-bone transition duration-300 ${menuOpen ? "scale-0 opacity-0" : ""}`} />
            <span
              className={`absolute h-0.5 w-5 bg-bone transition duration-300 ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>

        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={closeMenu}
          className={`fixed inset-0 z-[55] bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        <div
          id="mobile-menu"
          className={`fixed right-0 top-0 z-[60] h-screen w-[85%] max-w-[340px] border-l border-bone/10 bg-charcoal/96 px-7 pb-8 pt-24 backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="focus-ring border-b border-bone/10 py-4 text-lg text-bone/86 transition hover:text-bone"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className="focus-ring mt-5 rounded-full bg-bone px-6 py-4 text-center text-sm font-bold text-charcoal"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(36,76,57,0.36),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(145,166,175,0.18),transparent_30%),linear-gradient(140deg,#080b0c_0%,#101616_52%,#17221f_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,560px)]">
            <div className="max-w-5xl">
              <div className="hero-enter relative mb-5 w-64 sm:w-80 md:w-96 lg:hidden">
                <div className="absolute inset-[-18%] rounded-full bg-[radial-gradient(closest-side,rgba(141,168,151,0.3),rgba(36,76,57,0.14)_55%,transparent_78%)] blur-xl" />
                <img
                  src={portraitCutout}
                  alt="Portrait of Arsha Hsia"
                  className="portrait-cutout relative z-10 w-full object-contain"
                  width="820"
                  height="1000"
                />
              </div>
              <p className="hero-enter mb-5 text-xs font-bold uppercase tracking-[0.28em] text-moss" style={{ animationDelay: "0.05s" }}>
                Product &amp; Platform Operations | AI-Assisted Workflows | Trust-Sensitive Systems
              </p>
              <h1
                className="hero-enter font-instrument max-w-5xl text-[4.2rem] leading-[0.88] tracking-[-0.02em] text-bone [text-wrap:balance] sm:text-[5.8rem] md:text-[7.4rem] lg:text-[8.4rem]"
                style={{ animationDelay: "0.15s" }}
              >
                I design better systems for complex operations.
              </h1>
              <p
                className="hero-enter mt-8 max-w-3xl text-base leading-8 text-bone/72 md:text-lg"
                style={{ animationDelay: "0.3s" }}
              >
                Product &amp; Platform Operations professional turning complex user and business problems into
                structured, scalable workflows across AI-assisted systems, platform operations, and trust-sensitive user
                journeys.
              </p>
              <div className="hero-enter mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.45s" }}>
                <a
                  className="focus-ring rounded-full bg-bone px-7 py-4 text-center text-sm font-bold text-charcoal transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_40px_rgba(244,239,230,0.15)]"
                  href="#work"
                >
                  View Selected Work
                </a>
                <a
                  className="focus-ring rounded-full border border-bone/20 px-7 py-4 text-center text-sm font-bold text-bone/88 transition duration-300 hover:-translate-y-0.5 hover:border-moss/70 hover:text-bone"
                  href={links.cv}
                  download
                >
                  Download CV — Product &amp; Operations
                </a>
                <a
                  className="focus-ring rounded-full border border-transparent px-7 py-4 text-center text-sm font-bold text-bone/78 transition hover:text-bone"
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="hero-enter relative hidden self-end lg:block" style={{ animationDelay: "0.35s" }}>
              <div className="absolute inset-x-[-18%] bottom-[-24%] top-[2%] rounded-full bg-[radial-gradient(closest-side,rgba(141,168,151,0.3),rgba(36,76,57,0.14)_55%,transparent_78%)] blur-2xl" />
              <img
                src={portraitCutout}
                alt="Portrait of Arsha Hsia"
                className="portrait-cutout relative z-10 -mb-16 w-full max-w-[560px] object-contain"
                width="820"
                height="1000"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section ref={povRef} className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32" aria-labelledby="pov-title">
          <div ref={povBgRef} className="absolute inset-0 will-change-transform">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#081114_0%,#102525_45%,#244c39_100%)]" />
            <div className="absolute left-[12%] top-[8%] h-[26rem] w-px bg-gradient-to-b from-transparent via-bone/24 to-transparent" />
            <div className="absolute bottom-[-6rem] right-[8%] h-[20rem] w-[20rem] rounded-full border border-bone/10" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-6xl items-center">
            <div className="max-w-5xl" data-reveal>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-moss">Professional point of view</p>
              <h2 id="pov-title" className="font-instrument text-3xl italic leading-tight text-bone [text-wrap:balance] sm:text-4xl md:text-6xl">
                “The hardest AI design decision is not what the system can automate, but when it should stop deciding.”
              </h2>
              <p className="mt-8 max-w-3xl text-base leading-8 text-bone/70 md:text-lg">
                My work explores how teams can improve efficiency, structure complex workflows, and introduce AI without
                sacrificing user trust, operational quality, or human accountability.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32" aria-labelledby="work-title">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl" data-reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">Selected Work</p>
              <h2 id="work-title" className="font-instrument text-4xl leading-none text-bone [text-wrap:balance] sm:text-5xl md:text-7xl">
                Case studies built around judgement, workflow, and trust.
              </h2>
            </div>

            <div className="grid gap-6">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="glass-panel group grid overflow-hidden rounded-2xl transition duration-500 hover:border-moss/35 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
                  data-reveal
                  data-reveal-delay={`${index * 80}ms`}
                >
                  {project.video && playingVideo === project.video ? (
                    <div className="flex items-center overflow-hidden border-b border-bone/10 bg-black md:border-b-0 md:border-r md:border-bone/10">
                      <iframe
                        className="aspect-video w-full"
                        src={`https://www.youtube-nocookie.com/embed/${project.video}?autoplay=1&rel=0`}
                        title={`${project.title} — demo video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : project.video ? (
                    <button
                      type="button"
                      onClick={() => setPlayingVideo(project.video ?? null)}
                      className="focus-ring group/play relative flex cursor-pointer items-center overflow-hidden border-b border-bone/10 bg-black/25 md:border-b-0 md:border-r"
                      aria-label={`Play demo video: ${project.title}`}
                    >
                      <img
                        src={project.cover}
                        alt={project.coverAlt}
                        className="aspect-video w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute inset-0 grid place-items-center bg-charcoal/20 transition duration-300 group-hover/play:bg-charcoal/40">
                        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-bone/30 bg-charcoal/70 backdrop-blur-md transition duration-300 group-hover/play:scale-110 group-hover/play:border-moss/70">
                          <span aria-hidden="true" className="ml-1 text-2xl text-bone">
                            ▶
                          </span>
                        </span>
                      </span>
                      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-charcoal/75 px-4 py-1.5 text-xs font-bold text-bone/90 backdrop-blur-md">
                        4-min demo
                      </span>
                    </button>
                  ) : (
                    <a
                      className="focus-ring flex items-center overflow-hidden border-b border-bone/10 bg-black/25 md:border-b-0 md:border-r"
                      href={project.href}
                      target={project.external ? "_blank" : undefined}
                      rel={project.external ? "noopener noreferrer" : undefined}
                      aria-label={`${project.cta}: ${project.title}`}
                      tabIndex={-1}
                    >
                      <img
                        src={project.cover}
                        alt={project.coverAlt}
                        className="aspect-video w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  )}

                  <div className="flex flex-col p-6 md:p-9">
                    <p className="mb-4 text-sm font-semibold text-bluegrey">{project.context}</p>
                    <h3 className="font-instrument max-w-3xl text-3xl leading-tight text-bone [text-wrap:balance] md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-bone/68">{project.description}</p>

                    <p className="mt-5 border-t border-bone/10 pt-5 text-sm font-semibold leading-6 text-moss">
                      {project.outcome}
                    </p>

                    <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-7">
                      <ul className="flex flex-wrap gap-2" aria-label={`${project.title} tags`}>
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-bone/12 px-3 py-1.5 text-xs font-semibold text-bone/68 transition duration-300 group-hover:border-bone/24"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      {project.video ? (
                        <span className="flex flex-wrap items-center gap-5">
                          <button
                            type="button"
                            onClick={() => setPlayingVideo(project.video ?? null)}
                            className="focus-ring inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm font-bold text-moss transition hover:text-bone"
                          >
                            {project.cta}
                            <span aria-hidden="true">▶</span>
                          </button>
                          <a
                            className="focus-ring inline-flex min-h-11 items-center gap-1 whitespace-nowrap text-sm font-semibold text-bone/55 transition hover:text-bone"
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            YouTube
                            <span aria-hidden="true">↗</span>
                          </a>
                        </span>
                      ) : (
                        <a
                          className="focus-ring inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm font-bold text-moss transition hover:text-bone"
                          href={project.href}
                          target={project.external ? "_blank" : undefined}
                          rel={project.external ? "noopener noreferrer" : undefined}
                        >
                          {project.cta}
                          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            ↗
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-10 md:py-32" aria-labelledby="work-on-title">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl" data-reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">What I Work On</p>
              <h2 id="work-on-title" className="font-instrument text-4xl leading-none text-bone [text-wrap:balance] sm:text-5xl md:text-7xl">
                Operating questions that sit between people, policy, and systems.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 md:grid-cols-3" data-reveal>
              {workAreas.map((area) => (
                <article key={area.title} className="bg-charcoal p-7 transition duration-500 hover:bg-ink md:p-9">
                  <h3 className="text-lg font-bold text-bone">{area.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-bone/64">{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32" aria-labelledby="evidence-title">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end" data-reveal>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">Experience as Evidence</p>
                <h2 id="evidence-title" className="font-instrument text-4xl leading-none text-bone [text-wrap:balance] sm:text-5xl md:text-7xl">
                  Evidence across live operations, research, product thinking, and venture building.
                </h2>
              </div>
              <p className="text-lg font-semibold leading-8 text-bone/82">
                AceKing proves I operated systems. SOLUS proves I researched them. Intercom proves I can design them.
                Lilai proves I can build them from 0→1.
              </p>
            </div>

            <ol className="relative border-l border-bone/15 pl-8 md:pl-12">
              {timeline.map((item, index) => (
                <li
                  key={item.org}
                  className={`relative ${index === timeline.length - 1 ? "" : "pb-12"}`}
                  data-reveal
                  data-reveal-delay={`${index * 70}ms`}
                >
                  <span
                    className="absolute -left-8 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-moss bg-charcoal md:-left-12"
                    aria-hidden="true"
                  />
                  <div className="grid gap-3 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">{item.period}</p>
                    <div>
                      <h3 className="text-lg font-bold text-bone">
                        {item.org}
                        <span className="font-medium text-bone/56"> · {item.role}</span>
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-bone/64">{item.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-12 border-t border-bone/10 pt-6 text-sm text-bone/56" data-reveal>
              MSc Digital Marketing Strategy — Trinity College Dublin (2024–2025) · BA Spanish Language and Culture — Fu
              Jen Catholic University · PSPO II · AWS Certified AI Practitioner · Lean Six Sigma Green Belt
            </p>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]" data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-moss">About</p>
            <div>
              <h2 id="about-title" className="font-instrument text-4xl leading-tight text-bone [text-wrap:balance] sm:text-5xl md:text-6xl">
                I’m a Dublin-based Product and Platform Operations professional.
              </h2>
              <p className="mt-8 max-w-3xl text-base leading-8 text-bone/68 md:text-lg">
                My work spans LATAM platform operations, AI-assisted workflows, process improvement, and 0→1 business
                building. I’m drawn to systems where automation can scale better decisions, but only when human
                judgement, escalation, and accountability are designed into the workflow.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 pb-28 pt-8 md:px-10 md:pb-36" aria-labelledby="contact-title">
          <div className="glass-panel mx-auto max-w-7xl rounded-[2rem] px-6 py-16 text-center md:px-12 md:py-24" data-reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">Contact</p>
            <h2 id="contact-title" className="font-instrument mx-auto max-w-3xl text-4xl leading-tight text-bone [text-wrap:balance] sm:text-5xl md:text-6xl">
              Let’s build better systems together.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-bone/68 md:text-lg">
              Open to Product Operations, Platform Operations, and AI-adjacent operations roles — or a conversation
              about trust-sensitive systems.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                className="focus-ring rounded-full bg-bone px-8 py-4 text-sm font-bold text-charcoal transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_40px_rgba(244,239,230,0.15)]"
                href={links.email}
              >
                {links.emailAddress}
              </a>
              <a
                className="focus-ring rounded-full border border-bone/20 px-8 py-4 text-sm font-bold text-bone/88 transition duration-300 hover:-translate-y-0.5 hover:border-moss/70 hover:text-bone"
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-bone/10 px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-instrument text-3xl text-bone">Arsha Hsia</p>
            <p className="mt-2 text-sm text-bone/58">Product &amp; Platform Operations | AI-Assisted Workflows</p>
            <p className="mt-1 text-sm text-bone/40">Dublin, Ireland · © {new Date().getFullYear()}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-bone/72 transition hover:text-bone" href={links.email}>
              {links.emailAddress}
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-bone/72 transition hover:text-bone"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-bone/72 transition hover:text-bone" href={links.cv} download>
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

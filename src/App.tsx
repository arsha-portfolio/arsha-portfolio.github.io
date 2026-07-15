import { useEffect, useRef, useState } from "react";
import cvUrl from "../assets/arsha-hsia-cv-product-operations.pdf";
import acekingLogo from "../assets/logo-aceking.png";
import intercomLogo from "../assets/logo-intercom.png";
import lilaiLogo from "../assets/logo-lilai.png";
import solusLogo from "../assets/logo-solus.png";
import portraitUrl from "../assets/arsha-hsia-portrait.jpg";

const links = {
  cv: cvUrl,
  linkedin: "https://www.linkedin.com/in/arsha-hsia/",
  email: "mailto:arsha.hsia@gmail.com",
  intercom: "https://arsha-portfolio.github.io/intercom-case-study/",
  lilai: "https://www.instagram.com/lilaiireland/",
  solus: "#solus-pdf-placeholder",
};

const projects = [
  {
    title: "Designing Trust-Sensitive AI Escalation",
    context: "Intercom Fin — Independent Product Case Study",
    description: "Rethinking AI-to-human routing around trust deterioration rather than sentiment alone.",
    tags: ["Product Judgement", "AI Operations", "Human-in-the-loop", "Experimentation"],
    href: links.intercom,
    cta: "Read Case Study",
    external: true,
    logo: intercomLogo,
    logoAlt: "Intercom logo",
    logoTone: "light",
  },
  {
    title: "Scaling AI Content Without Breaking User Trust",
    context: "SOLUS Lighting — Company Research Project",
    description:
      "Designing a human-in-the-loop content operations framework through user research and AI workflow testing.",
    tags: ["User Research", "Workflow Design", "AI Adoption", "Business Strategy"],
    href: links.solus,
    cta: "View Case Study",
    logo: solusLogo,
    logoAlt: "SOLUS logo",
    logoTone: "light",
  },
  {
    title: "Building a Trust-Based Education Service from 0→1",
    context: "Lilai Ireland — Live Venture",
    description:
      "Building customer journeys, operational workflows, AI-assisted automation, and productised advisory services for students relocating to Ireland.",
    tags: ["0→1 Operations", "GTM", "Automation", "Founder"],
    href: links.lilai,
    cta: "View Lilai Instagram",
    external: true,
    logo: lilaiLogo,
    logoAlt: "Lilai Ireland logo",
    logoTone: "light",
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

const evidence = [
  {
    label: "AceKing",
    body: "Handled real platform complexity through moderation quality, risk investigation, incident triage, and onboarding systems.",
    logo: acekingLogo,
    logoAlt: "AceKing logo",
    logoTone: "light",
  },
  {
    label: "SOLUS",
    body: "Turned research and user insight into an AI-assisted operational framework.",
    logo: solusLogo,
    logoAlt: "SOLUS logo",
    logoTone: "light",
  },
  {
    label: "Intercom Case Study",
    body: "Demonstrated product judgement through routing logic, trade-offs, metrics, guardrails, and kill criteria.",
    logo: intercomLogo,
    logoAlt: "Intercom logo",
    logoTone: "light",
  },
  {
    label: "Lilai Ireland",
    body: "Built and operated a real 0→1 service venture.",
    logo: lilaiLogo,
    logoAlt: "Lilai Ireland logo",
    logoTone: "light",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [povProgress, setPovProgress] = useState(0);
  const povRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let frame = 0;
    let current = 0;

    const update = () => {
      const section = povRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const target = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      current += (target - current) * 0.08;
      setPovProgress(current);
      frame = window.requestAnimationFrame(update);
    };

    frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Evidence", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "CV", href: links.cv },
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

      <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-charcoal/72 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10" aria-label="Primary">
          <a className="focus-ring text-sm font-semibold tracking-[0.24em] text-bone/95" href="./" onClick={closeMenu}>
            Arsha Hsia
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="focus-ring text-sm font-medium text-bone/68 transition hover:text-bone"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="focus-ring hidden rounded-full border border-bone/18 px-5 py-3 text-sm font-semibold text-bone/86 transition hover:border-moss/70 hover:text-bone md:inline-flex"
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

        <div
          id="mobile-menu"
          className={`fixed right-0 top-0 z-[60] h-screen w-[85%] max-w-[340px] border-l border-bone/10 bg-charcoal/96 px-7 pb-8 pt-24 backdrop-blur-xl transition duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="focus-ring border-b border-bone/10 py-4 text-lg text-bone/86"
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

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(300px,390px)]">
            <div className="max-w-5xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-moss">
                Product &amp; Platform Operations | AI-Assisted Workflows | Trust-Sensitive Systems
              </p>
              <h1 className="font-instrument max-w-5xl text-[4.2rem] leading-[0.88] tracking-[-0.02em] text-bone sm:text-[5.8rem] md:text-[7.4rem] lg:text-[8.4rem]">
                I design better systems for complex operations.
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-8 text-bone/72 md:text-lg">
                Product &amp; Platform Operations professional turning complex user and business problems into
                structured, scalable workflows across AI-assisted systems, platform operations, and trust-sensitive user
                journeys.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="focus-ring rounded-full bg-bone px-7 py-4 text-center text-sm font-bold text-charcoal transition hover:bg-white" href="#work">
                  View Selected Work
                </a>
                <a className="focus-ring rounded-full border border-bone/20 px-7 py-4 text-center text-sm font-bold text-bone/88 transition hover:border-moss/70 hover:text-bone" href={links.cv} download>
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

            <figure className="glass-panel hidden rounded-[2rem] p-3 lg:block">
              <img
                src={portraitUrl}
                alt="Portrait of Arsha Hsia"
                className="aspect-[4/5] w-full rounded-[1.45rem] object-cover grayscale-[12%]"
                width="820"
                height="1000"
              />
            </figure>
          </div>
        </section>

        <section ref={povRef} className="relative min-h-screen overflow-hidden px-5 py-28 md:px-10" aria-labelledby="pov-title">
          <div
            className="absolute inset-0"
            style={{
              transform: `translate3d(0, ${Math.round((povProgress - 0.5) * -80)}px, 0)`,
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#081114_0%,#102525_45%,#244c39_100%)]" />
            <div className="absolute left-[12%] top-[18%] h-[42rem] w-px bg-gradient-to-b from-transparent via-bone/24 to-transparent" />
            <div className="absolute bottom-[12%] right-[12%] h-[22rem] w-[22rem] rounded-full border border-bone/10" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl items-center">
            <div className="max-w-5xl">
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.28em] text-moss">Professional point of view</p>
              <h2 id="pov-title" className="font-instrument text-4xl italic leading-tight text-bone sm:text-5xl md:text-7xl">
                “The hardest AI design decision is not what the system can automate, but when it should stop deciding.”
              </h2>
              <p className="mt-10 max-w-3xl text-base leading-8 text-bone/70 md:text-lg">
                My work explores how teams can improve efficiency, structure complex workflows, and introduce AI without
                sacrificing user trust, operational quality, or human accountability.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-24 md:px-10 md:py-32" aria-labelledby="work-title">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">Selected Work</p>
              <h2 id="work-title" className="font-instrument text-4xl leading-none text-bone sm:text-5xl md:text-7xl">
                Case studies built around judgement, workflow, and trust.
              </h2>
            </div>

            <div className="grid gap-5">
              {projects.map((project) => (
                <article key={project.title} className="glass-panel grid gap-9 rounded-2xl p-6 md:grid-cols-[minmax(0,1fr)_18rem] md:p-9">
                  <div>
                    <div
                      className={`mb-7 flex h-20 w-48 items-center justify-center rounded-2xl border p-3.5 ${
                        project.logoTone === "dark"
                          ? "border-bone/10 bg-charcoal"
                          : "border-bone/10 bg-bone"
                      }`}
                    >
                      <img src={project.logo} alt={project.logoAlt} className="max-h-full max-w-full object-contain" />
                    </div>
                    <p className="mb-5 text-sm font-semibold text-bluegrey">{project.context}</p>
                    <h3 className="font-instrument max-w-3xl text-3xl leading-tight text-bone md:text-5xl">{project.title}</h3>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-bone/68">{project.description}</p>
                  </div>

                  <div className="flex flex-col justify-between gap-8 border-t border-bone/10 pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                    <ul className="flex flex-wrap gap-2" aria-label={`${project.title} tags`}>
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-bone/12 px-3 py-1.5 text-xs font-semibold text-bone/68">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a
                      className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-moss transition hover:text-bone"
                      href={project.href}
                      target={project.external ? "_blank" : undefined}
                      rel={project.external ? "noopener noreferrer" : undefined}
                    >
                      {project.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-10 md:py-32" aria-labelledby="work-on-title">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">What I Work On</p>
              <h2 id="work-on-title" className="font-instrument text-4xl leading-none text-bone sm:text-5xl md:text-7xl">
                Operating questions that sit between people, policy, and systems.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 md:grid-cols-3">
              {workAreas.map((area) => (
                <article key={area.title} className="bg-charcoal p-7 md:p-9">
                  <h3 className="text-lg font-bold text-bone">{area.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-bone/64">{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-5 py-24 md:px-10 md:py-32" aria-labelledby="evidence-title">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">Experience as Evidence</p>
                <h2 id="evidence-title" className="font-instrument text-4xl leading-none text-bone sm:text-5xl md:text-7xl">
                  Evidence across live operations, research, product thinking, and venture building.
                </h2>
              </div>
              <p className="text-lg font-semibold leading-8 text-bone/82">
                AceKing proves I operated systems. SOLUS proves I researched them. Intercom proves I can design them.
                Lilai proves I can build them from 0→1.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {evidence.map((item) => (
                <article key={item.label} className="rounded-2xl border border-bone/10 bg-bone/[0.035] p-7">
                  <div
                    className={`mb-6 flex h-14 w-32 items-center justify-center rounded-xl border p-2.5 ${
                      item.logoTone === "dark" ? "border-bone/10 bg-charcoal" : "border-bone/10 bg-bone"
                    }`}
                  >
                    <img src={item.logo} alt={item.logoAlt} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-bone">{item.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-bone/64">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-24 md:px-10 md:py-32" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-moss">About</p>
            <div>
              <h2 id="about-title" className="font-instrument text-4xl leading-tight text-bone sm:text-5xl md:text-6xl">
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
      </main>

      <footer className="border-t border-bone/10 px-5 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-instrument text-3xl text-bone">Arsha Hsia</p>
            <p className="mt-2 text-sm text-bone/58">Product &amp; Platform Operations | AI-Assisted Workflows</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-bone/72 hover:text-bone" href={links.email}>
              Email
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-bone/72 hover:text-bone"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-bone/72 hover:text-bone" href={links.cv} download>
              Download CV — Product &amp; Operations
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

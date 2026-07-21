import { useEffect } from "react";
import shotFields from "../../assets/crm/shot-fields.jpg";
import shotLeadConversion from "../../assets/crm/shot-lead-conversion.jpg";
import shotKanban from "../../assets/crm/shot-kanban.jpg";
import shotTasks from "../../assets/crm/shot-tasks.jpg";
import shotReportStage from "../../assets/crm/shot-report-stage.jpg";
import shotDashSchool from "../../assets/crm/shot-dash-school.jpg";
import shotDashIntake from "../../assets/crm/shot-dash-intake.jpg";
import shotDashFunnel from "../../assets/crm/shot-dash-funnel.jpg";

const stages = [
  {
    name: "New Lead",
    entry: "Enquiry received from web form, Instagram, info session, or referral",
    owner: "Ops",
    required: "Name, contact channel, lead source",
    next: "First response within 24 hours",
    exit: "Contact attempted",
  },
  {
    name: "Contacted",
    entry: "First response sent",
    owner: "Ops",
    required: "Preferred contact method, initial intent",
    next: "Run qualification questions",
    exit: "Intent and timeline captured",
  },
  {
    name: "Qualified",
    entry: "Timeline, budget range, and visa eligibility confirmed",
    owner: "Consultant",
    required: "Intake type, expected start window, budget range",
    next: "Book consultation",
    exit: "Consultation scheduled",
  },
  {
    name: "Consultation Completed",
    entry: "Consultation held",
    owner: "Consultant",
    required: "Consultation notes, needs summary",
    next: "Prepare school options",
    exit: "Options brief agreed",
  },
  {
    name: "Options Sent",
    entry: "Proposal with 2–3 school options delivered",
    owner: "Consultant",
    required: "Schools, courses, and pricing captured on the Opportunity",
    next: "Follow up within 5 days",
    exit: "Student responds to options",
  },
  {
    name: "School Selected",
    entry: "Student confirms school and course",
    owner: "Consultant",
    required: "Language school, course length, expected start date",
    next: "Issue deposit instructions",
    exit: "Deposit requested",
  },
  {
    name: "Deposit Pending",
    entry: "Deposit instructions sent",
    owner: "Ops",
    required: "Amount, due date",
    next: "Payment reminder cadence",
    exit: "Deposit received (or expired)",
  },
  {
    name: "Deposit Paid",
    entry: "Payment confirmed",
    owner: "Ops",
    required: "Payment record, receipt issued",
    next: "Enrolment paperwork with the school",
    exit: "School confirms the place",
  },
  {
    name: "Enrolled",
    entry: "School confirmation received",
    owner: "Ops",
    required: "Enrolment confirmation, start date",
    next: "Hand over to the pre-departure workflow",
    exit: "Opportunity closed won → post-enrolment support",
  },
];

const objects = [
  { name: "Leads", body: "Prospective students before qualification — one record per enquiry, tagged by source." },
  { name: "Accounts", body: "Represent the student / family unit in the MVP." },
  { name: "Contacts", body: "The actual student, linked to the Account on conversion." },
  {
    name: "Opportunities",
    body: "One enrolment case per student — carries language school, intake type, expected start date, amount, and stage.",
  },
  { name: "Cases", body: "Payment, accommodation, and enrolment issues after conversion (next iteration)." },
];

const configurations = [
  {
    title: "Custom fields for segmentation",
    what: "Created structured picklist and date fields for language school, intake type, and expected start date.",
    why: "Replaced inconsistent free-text entries and enabled reliable segmentation and reporting.",
    image: shotFields,
    imageAlt: "Object Manager field list showing the custom Language School, Intake Type, and Expected Start Date fields on Opportunity",
  },
  {
    title: "Lead conversion mapping",
    what: "Configured lead conversion so a qualified Lead creates the Account–Contact pair and an Opportunity in one step, in the same action.",
    why: "Keeps qualification history attached to the student record and prevents duplicate entry at handover.",
    image: shotLeadConversion,
    imageAlt: "Salesforce Convert Lead screen mapping a qualified lead to a new Account, Contact, and Opportunity",
  },
  {
    title: "Opportunity pipeline & list views",
    what: "Rebuilt the default sales stages into the nine lead-to-enrolment stages with entry/exit criteria, viewed here as a role-based Kanban list view.",
    why: "Stage names mirror how the team actually works, and each teammate opens one view to see exactly what needs action.",
    image: shotKanban,
    imageAlt: "Kanban-style Active Pipeline list view showing student Opportunities grouped across all nine pipeline stages",
  },
  {
    title: "Tasks and follow-up activities",
    what: "Attached follow-up tasks with due dates to stage transitions — e.g. a 5-day follow-up after Options Sent.",
    why: "Nobody has to remember who needs a nudge — the CRM surfaces it on the Opportunity's Activity timeline.",
    image: shotTasks,
    imageAlt: "Opportunity Activity tab showing a scheduled 5-day follow-up task on school options",
  },
  {
    title: "Reports feeding the dashboard",
    what: "Configured stage, school, source, and intake reports as the data layer behind the operations dashboard.",
    why: "Turns the pipeline into questions leadership can actually ask — where do leads stall, which sources convert.",
    image: shotReportStage,
    imageAlt: "Opportunities by Stage report rendered as a horizontal bar chart of pipeline value per stage",
  },
];

const dashboardShots = [
  { src: shotDashFunnel, alt: "Conversion Funnel dashboard chart showing pipeline value narrowing from New Lead to Enrolled", caption: "Conversion Funnel — where value narrows across the journey" },
  { src: shotDashSchool, alt: "Opportunities by Language School dashboard chart comparing pipeline value across partner schools", caption: "Opportunities by Language School — partner performance" },
  { src: shotDashIntake, alt: "Expected Revenue by Intake Type donut chart split across Spring, Summer, Autumn, Winter, and Rolling intakes", caption: "Expected Revenue by Intake Type — forecasting input" },
];

const limitations = [
  "Person Accounts were not enabled in the prototype",
  "Test data was synthetic — no real student personal data was used",
  "No production integrations were implemented",
  "Automation was intentionally limited",
  "Pipeline probabilities require validation against actual conversion data",
];

const nextIteration = [
  "Evaluate Person Accounts",
  "Add school Business Accounts",
  "Add Cases for post-enrolment support",
  "Create validation rules",
  "Build reminder flows",
  "Integrate website forms",
  "Add consent and data-retention fields",
  "Connect marketing source attribution",
];

function Eyebrow({ children }: { children: string }) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">{children}</p>;
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="font-instrument text-3xl leading-tight text-bone [text-wrap:balance] sm:text-4xl md:text-5xl">
      {children}
    </h2>
  );
}

function ScreenshotSlot({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-bone/20 bg-bone/[0.03] text-center">
      <p className="max-w-[80%] text-xs font-semibold uppercase tracking-[0.14em] text-bone/35">
        Screenshot pending — {label}
      </p>
    </div>
  );
}

function CaseStudy() {
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
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-bone">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-charcoal/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-10" aria-label="Primary">
          <a className="focus-ring text-sm font-semibold tracking-[0.24em] text-bone/95 transition hover:text-bone" href="/">
            Arsha Hsia
          </a>
          <a className="focus-ring text-sm font-medium text-bone/68 transition hover:text-bone" href="/#work">
            ← Back to Selected Work
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-28 pt-32 md:px-10 md:pt-40">
        <section className="mb-20 md:mb-28">
          <Eyebrow>Case Study — Salesforce CRM</Eyebrow>
          <h1 className="font-instrument text-4xl leading-tight text-bone [text-wrap:balance] sm:text-5xl md:text-7xl">
            Lilai Ireland Student Conversion CRM
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-bone/72 md:text-xl">
            Designing a Salesforce-based lead-to-enrolment workflow for a B2B2C education service.
          </p>
          <p className="mt-6 text-sm font-semibold text-bone/50">
            Role: design, data model &amp; configuration · Status: sandbox prototype · Synthetic data only
          </p>
        </section>

        <section className="mb-20 md:mb-28" data-reveal>
          <Eyebrow>01 — Business Problem</Eyebrow>
          <SectionTitle>Six channels in, no single view out.</SectionTitle>
          <p className="mt-6 max-w-3xl text-base leading-8 text-bone/68">
            Lilai Ireland supports students from first enquiry through school enrolment. As the service grew, the
            operating picture fragmented:
          </p>
          <ul className="mt-6 grid max-w-3xl gap-3">
            {[
              "Students arrive from the website, Instagram, info sessions, and referrals",
              "Information scattered across forms, DMs, and spreadsheets",
              "Hard to tell who needs a follow-up, and when",
              "No shared view of which conversion stage each student is in",
              "School, course, start date, and payment status lacked a unified structure",
              "Impossible to compare conversion performance across sources, schools, and plans",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-7 text-bone/68">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20 md:mb-28" data-reveal>
          <Eyebrow>02 — Objective</Eyebrow>
          <blockquote className="font-instrument max-w-4xl text-2xl italic leading-snug text-bone sm:text-3xl md:text-4xl">
            “Design a CRM prototype that centralises student enquiries, standardises qualification and enrolment
            stages, and improves visibility across the lead-to-enrolment journey.”
          </blockquote>
        </section>

        <section className="mb-20 md:mb-28" data-reveal>
          <Eyebrow>03 — Process Mapping</Eyebrow>
          <SectionTitle>Nine stages, each with clear ownership and exit conditions.</SectionTitle>
          <p className="mt-6 max-w-3xl text-base leading-8 text-bone/68">
            Before touching Salesforce, I mapped the full journey with the team. Every stage defines who owns it, what
            information must exist, and what has to be true before a student moves forward.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-2" aria-hidden="true">
            {stages.map((s, i) => (
              <span key={s.name} className="flex items-center gap-2">
                <span className="rounded-full border border-bone/15 bg-bone/[0.04] px-3.5 py-1.5 text-xs font-semibold text-bone/80">
                  {s.name}
                </span>
                {i < stages.length - 1 && <span className="text-moss/70">→</span>}
              </span>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-bone/10">
            <table className="w-full min-w-[64rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-bone/10 bg-bone/[0.04]">
                  {["Stage", "Entry criteria", "Owner", "Required information", "Next action", "Exit condition"].map(
                    (h) => (
                      <th key={h} className="px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-moss">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {stages.map((s) => (
                  <tr key={s.name} className="border-b border-bone/[0.06] align-top last:border-0">
                    <td className="whitespace-nowrap px-4 py-3.5 font-bold text-bone">{s.name}</td>
                    <td className="px-4 py-3.5 leading-6 text-bone/64">{s.entry}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-bone/64">{s.owner}</td>
                    <td className="px-4 py-3.5 leading-6 text-bone/64">{s.required}</td>
                    <td className="px-4 py-3.5 leading-6 text-bone/64">{s.next}</td>
                    <td className="px-4 py-3.5 leading-6 text-bone/64">{s.exit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-20 md:mb-28" data-reveal>
          <Eyebrow>04 — Salesforce Data Model</Eyebrow>
          <SectionTitle>Standard objects, deliberately mapped to the journey.</SectionTitle>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="rounded-2xl border border-bone/10 bg-bone/[0.03] p-6 md:p-8">
              <div className="flex flex-col items-center gap-2 text-center text-sm font-semibold">
                <span className="w-full max-w-[16rem] rounded-xl border border-moss/40 bg-moss/10 px-4 py-3 text-bone">
                  Lead
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-moss">↓ convert</span>
                <div className="flex w-full max-w-[20rem] items-center gap-2">
                  <span className="flex-1 rounded-xl border border-bone/20 bg-bone/[0.05] px-4 py-3 text-bone">
                    Account
                  </span>
                  <span className="text-moss">—</span>
                  <span className="flex-1 rounded-xl border border-bone/20 bg-bone/[0.05] px-4 py-3 text-bone">
                    Contact
                  </span>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-moss">↓</span>
                <div className="w-full max-w-[20rem] rounded-xl border border-bluegrey/40 bg-bluegrey/10 px-4 py-3 text-bone">
                  Opportunity
                  <ul className="mt-3 grid gap-1 border-t border-bone/10 pt-3 text-left text-xs font-medium text-bone/64">
                    <li>· Language School</li>
                    <li>· Intake Type</li>
                    <li>· Expected Start Date</li>
                    <li>· Amount</li>
                    <li>· Stage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid content-start gap-4">
              {objects.map((o) => (
                <div key={o.name} className="rounded-xl border border-bone/10 bg-bone/[0.02] p-5">
                  <h3 className="text-base font-bold text-bone">{o.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-bone/64">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-28" data-reveal>
          <Eyebrow>05 — Configuration</Eyebrow>
          <SectionTitle>Design decisions, not software tourism.</SectionTitle>
          <p className="mt-6 max-w-3xl text-base leading-8 text-bone/68">
            Everything below was configured hands-on in the sandbox. Each screenshot pairs what was built with why it
            matters operationally.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {configurations.map((c) => (
              <article key={c.title} className="rounded-2xl border border-bone/10 bg-bone/[0.03] p-6">
                {c.image ? (
                  <div className="overflow-hidden rounded-xl border border-bone/10 bg-bone">
                    <img src={c.image} alt={c.imageAlt} className="w-full object-contain" loading="lazy" decoding="async" />
                  </div>
                ) : (
                  <ScreenshotSlot label={c.title} />
                )}
                <h3 className="mt-5 text-base font-bold text-bone">{c.title}</h3>
                <p className="mt-3 text-sm leading-6 text-bone/72">
                  <span className="font-bold text-moss">What I configured — </span>
                  {c.what}
                </p>
                <p className="mt-2 text-sm leading-6 text-bone/72">
                  <span className="font-bold text-bluegrey">Why it matters — </span>
                  {c.why}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-28" data-reveal>
          <Eyebrow>06 — Dashboard Insights</Eyebrow>
          <SectionTitle>From pipeline to decisions.</SectionTitle>
          <p className="mt-6 max-w-3xl text-base leading-8 text-bone/68">
            Four reports feed one operations dashboard: stage, language school, lead source, and intake type. Together
            they turn the pipeline into questions leadership can actually ask.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dashboardShots.map((d) => (
              <figure key={d.caption} className="overflow-hidden rounded-2xl border border-bone/10 bg-bone">
                <img src={d.src} alt={d.alt} className="w-full object-contain" loading="lazy" decoding="async" />
                <figcaption className="border-t border-bone/10 bg-charcoal px-4 py-3 text-xs font-semibold leading-5 text-bone/68">
                  {d.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 max-w-2xl rounded-xl border border-bone/10 bg-bone/[0.03] p-5 text-sm italic leading-7 text-bone/72">
            Example insight: with 65% of expected revenue concentrated in the Autumn intake, the team can see a
            forecasting concentration risk early — and plan capacity or diversify outreach for other intake windows
            before it becomes a bottleneck.
          </p>
        </section>

        <section className="mb-24" data-reveal>
          <Eyebrow>07 — Limitations &amp; Next Iteration</Eyebrow>
          <SectionTitle>What this prototype is not — yet.</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-bone/10 bg-bone/[0.03] p-6 md:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-bone/50">Known limitations</h3>
              <ul className="mt-5 grid gap-2.5">
                {limitations.map((l) => (
                  <li key={l} className="flex gap-3 text-sm leading-6 text-bone/68">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bone/30" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-moss/25 bg-moss/[0.05] p-6 md:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-moss">Next iteration</h3>
              <ul className="mt-5 grid gap-2.5">
                {nextIteration.map((n) => (
                  <li key={n} className="flex gap-3 text-sm leading-6 text-bone/68">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-bone/10 bg-bone/[0.03] px-6 py-12 text-center md:px-12" data-reveal>
          <p className="font-instrument text-2xl text-bone sm:text-3xl">
            Want to talk through the design decisions?
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="focus-ring rounded-full bg-bone px-7 py-3.5 text-sm font-bold text-charcoal transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              href="mailto:arsha.hsia@gmail.com"
            >
              arsha.hsia@gmail.com
            </a>
            <a
              className="focus-ring rounded-full border border-bone/20 px-7 py-3.5 text-sm font-bold text-bone/88 transition duration-300 hover:-translate-y-0.5 hover:border-moss/70 hover:text-bone"
              href="/#work"
            >
              ← Back to Selected Work
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-bone/10 px-5 py-10 text-center md:px-10">
        <p className="text-sm text-bone/40">
          Arsha Hsia · Product &amp; Platform Operations · © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default CaseStudy;

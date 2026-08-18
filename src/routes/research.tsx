import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  BrainCircuit,
  Check,
  FileText,
  LayoutTemplate,
  Globe2,
  Landmark,
  Layers3,
  Menu,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { DigitalGlobe } from "../components/digital-globe";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Knowledge Centre | REIS Global" },
      {
        name: "description",
        content:
          "Explore REIS Global standards, frameworks, reference architectures, engineering figures and applied research.",
      },
      { property: "og:title", content: "REIS Research & Knowledge Centre" },
      {
        property: "og:description",
        content:
          "A structured library of REIS engineering standards, frameworks, architectures and transformation knowledge.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ResearchPage,
});

const featured = [
  {
    code: "RAIEDS-001",
    title: "REIS AI Engineering & Delivery Standard",
    type: "Engineering Standard",
    summary:
      "The authoritative REIS standard for AI-assisted architecture, engineering, security, governance, delivery and operations.",
    figure: "AI Governance Lifecycle",
    tags: ["AI", "Governance", "Security", "Delivery"],
    icon: BrainCircuit,
  },
  {
    code: "GV-BLD-V1-001",
    title: "GovVisit AI Build Specification",
    type: "Implementation Specification",
    summary:
      "A complete implementation blueprint for secure visitor management, OCR, RBAC, auditability and cloud delivery.",
    figure: "GovVisit Platform Architecture",
    tags: ["Government", "Platform", "OCR", "RBAC"],
    icon: Landmark,
  },
  {
    code: "DAPRA",
    title: "Digital Agriculture Platform Reference Architecture",
    type: "Reference Architecture",
    summary:
      "A vendor-neutral architecture for digital agriculture ecosystems spanning capabilities, data, platforms and governance.",
    figure: "Digital Agriculture Capability Model",
    tags: ["Agriculture", "Architecture", "Data", "Governance"],
    icon: Layers3,
  },
  {
    code: "NIJCPT",
    title: "National Justice Transformation Framework",
    type: "Transformation Framework",
    summary:
      "A structured framework connecting justice processes, institutional reform, digital enablement and correctional outcomes.",
    figure: "Government Decision Pathway",
    tags: ["Justice", "Transformation", "Public Sector"],
    icon: ShieldCheck,
  },
] as const;

const categories = [
  [BookOpen, "Standards", "Engineering, security, governance and delivery standards."],
  [LayoutTemplate, "Frameworks", "Transformation, operating-model and decision frameworks."],
  [Boxes, "Reference Architectures", "Reusable business, data, application and technology architectures."],
  [FileText, "Publications", "Executive papers, implementation specifications and technical guidance."],
  [Network, "Engineering Figures", "Architecture diagrams, process models and decision pathways."],
  [Sparkles, "Research & Insights", "Applied research and evidence-led perspectives on digital transformation."],
] as const;

const snippets = [
  {
    title: "AI Governance Lifecycle",
    source: "RAIEDS-001",
    explanation:
      "Shows how business requirements, architecture, security, implementation, testing, deployment and continuous improvement are governed as one connected lifecycle.",
    steps: ["Requirements", "Architecture", "Security", "Implementation", "Testing", "Deployment", "Operations"],
  },
  {
    title: "Government Decision Pathway",
    source: "NIJCPT",
    explanation:
      "Explains how policy intent moves through executive decision, institutional coordination, delivery governance and measurable justice outcomes.",
    steps: ["Policy Intent", "Executive Decision", "Institutional Alignment", "Delivery", "Oversight", "Outcomes"],
  },
  {
    title: "Platform Engineering Flow",
    source: "GV-BLD-V1-001",
    explanation:
      "Illustrates the separation of user channels, workflow services, identity controls, data services, integration and operational monitoring.",
    steps: ["Channels", "Workflow", "Identity", "Data", "Integration", "Operations"],
  },
] as const;

const principles = [
  "Evidence before assertion",
  "Architecture before implementation",
  "Security and governance by design",
  "Vendor neutrality where practical",
  "Traceability from strategy to delivery",
  "Knowledge reuse across solutions",
];

function ResearchPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="reis-site min-h-screen overflow-x-hidden">
      <header className="reis-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <a href="/" className="flex items-center gap-3" aria-label="REIS Global home">
            <ReisMark />
            <div>
              <div className="text-xl font-bold tracking-[0.04em]">REIS GLOBAL</div>
              <div className="text-[9px] uppercase tracking-[0.18em] opacity-65">
                Research · Engineering · Innovation · Solutions
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            <a className="reis-nav-link" href="/about">About</a>
            <a className="reis-nav-link" href="/capabilities">Capabilities</a>
            <a className="reis-nav-link" href="/solutions">Solutions</a>
            <a className="reis-nav-link" href="/industries">Industries</a>
            <a className="reis-nav-link text-white" href="/research">Research</a>
          </nav>
          <a href="#contact" className="reis-primary-button hidden items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold lg:inline-flex">
            Start a conversation <ArrowRight size={16} />
          </a>
          <button type="button" className="reis-icon-button lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileOpen && (
          <div className="reis-mobile-menu border-t px-6 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              <a href="/about">About</a><a href="/capabilities">Capabilities</a><a href="/solutions">Solutions</a><a href="/industries">Industries</a><a href="/research">Research</a>
            </nav>
          </div>
        )}
      </header>

      <section className="reis-hero relative isolate overflow-hidden pt-20">
        <div className="reis-grid absolute inset-0" /><div className="reis-stars absolute inset-0" /><div className="reis-blue-glow absolute -right-52 top-10 h-[36rem] w-[36rem] rounded-full blur-[130px]" />
        <div className="relative mx-auto grid min-h-[700px] max-w-[1440px] items-center gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="z-10 max-w-2xl">
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.25em]">Research & Knowledge Centre</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
              Knowledge engineered for <span className="reis-accent-text">real transformation.</span>
            </h1>
            <p className="reis-hero-copy mt-7 max-w-xl text-lg leading-8 sm:text-xl">
              REIS develops standards, frameworks, reference architectures and engineering guidance that turn complex ideas into secure, governable and reusable digital systems.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#featured" className="reis-primary-button inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-semibold">Explore featured knowledge <ArrowRight size={18} /></a>
              <a href="#categories" className="reis-secondary-button inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-semibold"><Search size={18} /> Browse categories</a>
            </div>
          </div>
          <DigitalGlobe />
        </div>
      </section>

      <section id="categories" className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader eyebrow="Knowledge domains" title="A connected engineering knowledge system" text="Each knowledge domain supports the others, linking research and strategy to architecture, engineering, delivery and measurable outcomes." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map(([Icon, title, text]) => (
              <article key={title} className="reis-panel rounded-2xl border p-7">
                <div className="reis-small-icon grid h-12 w-12 place-items-center rounded-xl"><Icon size={23} /></div>
                <h2 className="mt-7 text-2xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 opacity-65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="reis-research-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader eyebrow="Featured publications" title="Original REIS standards, frameworks and architectures" text="These artefacts demonstrate the methods, models and engineering discipline underpinning REIS solutions." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featured.map(({ icon: Icon, code, title, type, summary, figure, tags }) => (
              <article key={code} className="reis-panel overflow-hidden rounded-2xl border">
                <div className="about-figure-preview relative min-h-[220px] p-7">
                  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(21,155,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(21,155,255,.18)_1px,transparent_1px)] [background-size:42px_42px]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div className="reis-small-icon grid h-12 w-12 place-items-center rounded-xl"><Icon size={23} /></div>
                      <span className="about-tag rounded-full px-3 py-1 text-xs font-semibold">{type}</span>
                    </div>
                    <div className="pt-14">
                      <p className="reis-eyebrow text-xs font-bold uppercase tracking-[0.2em]">Featured figure</p>
                      <h3 className="mt-3 text-2xl font-semibold">{figure}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <p className="reis-index text-xs font-bold uppercase tracking-[0.18em]">{code}</p>
                  <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
                  <p className="mt-4 leading-7 opacity-65">{summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="about-tag rounded-full px-3 py-1 text-xs font-semibold">{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader eyebrow="Engineering snippets" title="Figures with a short explanation" text="Each figure presents one reusable idea clearly, with its source and practical meaning." />
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {snippets.map((item) => (
              <article key={item.title} className="reis-panel rounded-2xl border p-7">
                <p className="reis-index text-xs font-bold uppercase tracking-[0.18em]">Source: {item.source}</p>
                <h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
                <p className="mt-4 leading-7 opacity-65">{item.explanation}</p>
                <div className="mt-7 space-y-3">
                  {item.steps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="reis-check grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold">{index + 1}</div>
                      <div className="h-px flex-1 bg-blue-500/20" />
                      <span className="w-36 text-sm font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-dark-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Knowledge principles</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Built to be trusted, reused and applied.</h2>
            <p className="mt-6 text-lg leading-8 opacity-65">REIS knowledge is designed as operational intellectual property—not static documentation.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="reis-solution-card flex items-center gap-4 rounded-2xl border p-5">
                <div className="reis-check grid h-9 w-9 shrink-0 place-items-center rounded-full"><Check size={17} /></div>
                <span className="font-semibold">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="reis-cta-section px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">Apply REIS knowledge</p>
          <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Turn knowledge into delivery confidence.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-70">Discuss how REIS standards, architectures and frameworks can support your transformation programme.</p>
          <a href="mailto:info@reis-global.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">Start a conversation <ArrowRight size={18} /></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{title}</h2><p className="mt-6 text-lg leading-8 opacity-65">{text}</p></div>;
}

function ReisMark() { return <div className="relative h-11 w-11" aria-hidden="true"><span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" /><span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" /><span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" /></div>; }

function Footer() { return <footer className="reis-footer border-t"><div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-10"><div className="lg:col-span-2"><div className="flex items-center gap-3"><ReisMark /><span className="text-xl font-bold tracking-[0.05em]">REIS GLOBAL</span></div><p className="mt-5 max-w-md leading-7 opacity-60">Research, engineering, innovation and solutions for governments, enterprises and communities.</p></div><div><h3 className="font-semibold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm opacity-60"><a href="/capabilities">Capabilities</a><a href="/solutions">Solutions</a><a href="/industries">Industries</a><a href="/research">Research</a></div></div><div><h3 className="font-semibold">Contact</h3><div className="mt-4 flex flex-col gap-3 text-sm opacity-60"><a href="mailto:info@reis-global.com">info@reis-global.com</a><span>United Kingdom</span><span>Serving clients globally</span></div></div></div><div className="mx-auto flex max-w-[1440px] flex-col gap-2 border-t px-6 py-6 text-xs opacity-45 sm:flex-row sm:justify-between lg:px-10"><span>© 2026 REIS Global Ltd. All rights reserved.</span><span>Research · Engineering · Innovation · Solutions</span></div></footer>; }

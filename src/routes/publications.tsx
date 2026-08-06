import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Layers3,
  Menu,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications | REIS Global" },
      {
        name: "description",
        content:
          "Explore REIS Global standards, frameworks, reference architectures and engineering publications.",
      },
      { property: "og:title", content: "REIS Global Publications" },
      {
        property: "og:description",
        content:
          "Standards, frameworks and architecture publications from REIS Global.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PublicationsPage,
});

const publications = [
  {
    code: "RAIEDS-001",
    title: "REIS AI Engineering & Delivery Standard",
    type: "Engineering Standard",
    status: "Version 1.0",
    summary:
      "The authoritative REIS standard for AI-assisted software delivery, covering governance, architecture, security, engineering, DevSecOps and operations.",
    icon: Sparkles,
    topics: ["AI Governance", "Architecture", "Security", "Delivery"],
    figure: "AI Governance Lifecycle",
  },
  {
    code: "GV-BLD-V1-001",
    title: "GovVisit Management Platform AI Build Specification",
    type: "Implementation Specification",
    status: "Version 1.0",
    summary:
      "A complete implementation blueprint for secure visitor management, OCR, RBAC, workflows, auditability and platform engineering.",
    icon: ShieldCheck,
    topics: ["Government", "Platform", "OCR", "RBAC"],
    figure: "GovVisit Platform Architecture",
  },
  {
    code: "DAPRA",
    title: "Digital Agriculture Platform Reference Architecture",
    type: "Reference Architecture",
    status: "Approved Baseline",
    summary:
      "A vendor-neutral architecture for integrated digital agriculture ecosystems spanning business, data, application, technology and governance domains.",
    icon: Layers3,
    topics: ["Agriculture", "Enterprise Architecture", "Data", "Governance"],
    figure: "Digital Agriculture Capability Model",
  },
  {
    code: "NIJCPT",
    title: "National Justice-to-Corrections Transformation Framework",
    type: "Transformation Framework",
    status: "Executive Proposal",
    summary:
      "A national transformation model connecting justice processes, institutional reform, corrections outcomes and executive decision pathways.",
    icon: Scale,
    topics: ["Justice", "Corrections", "Transformation", "Public Sector"],
    figure: "Government Decision Pathway",
  },
  {
    code: "DPGM",
    title: "Digital Platform Governance Model",
    type: "Governance Framework",
    status: "Multi-Chapter Publication",
    summary:
      "A comprehensive governance model addressing architecture, performance, risk, stakeholder engagement, operations and continuous improvement.",
    icon: Network,
    topics: ["Governance", "Risk", "Operating Model", "Architecture"],
    figure: "Architecture Governance Operating Model",
  },
  {
    code: "REIS-INSIGHT",
    title: "Engineering Insights & Applied Research",
    type: "Insight Series",
    status: "Ongoing",
    summary:
      "Concise engineering papers translating REIS standards, architecture patterns and programme lessons into practical guidance.",
    icon: FileText,
    topics: ["AI", "Cloud", "Security", "Transformation"],
    figure: "Research-to-Delivery Knowledge Flow",
  },
] as const;

const publicationTypes = [
  [BookOpen, "Standards", "Authoritative engineering and governance requirements."],
  [Layers3, "Reference Architectures", "Reusable models for complex digital ecosystems."],
  [Network, "Frameworks", "Structured methods for transformation and delivery."],
  [FileText, "Insights", "Focused explanations of REIS engineering practice."],
] as const;

function PublicationsPage() {
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
            <a className="reis-nav-link" href="/research">Research</a>
            <a className="reis-nav-link" href="/publications">Publications</a>
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
              {[
                ["About", "/about"],
                ["Capabilities", "/capabilities"],
                ["Solutions", "/solutions"],
                ["Industries", "/industries"],
                ["Research", "/research"],
                ["Publications", "/publications"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="reis-hero relative isolate overflow-hidden pt-20">
        <div className="reis-grid absolute inset-0" />
        <div className="reis-stars absolute inset-0" />
        <div className="reis-blue-glow absolute -right-56 top-10 h-[38rem] w-[38rem] rounded-full blur-[130px]" />
        <div className="relative mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.24em]">REIS Publications</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
              Engineering knowledge made <span className="reis-accent-text">visible.</span>
            </h1>
            <p className="reis-hero-copy mt-7 max-w-2xl text-lg leading-8 sm:text-xl">
              REIS publications capture the standards, architectures, frameworks and delivery methods that underpin our solutions and transformation programmes.
            </p>
          </div>
          <div className="reis-panel rounded-[2rem] border p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {publicationTypes.map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-[rgba(43,170,255,.18)] p-5">
                  <div className="reis-small-icon grid h-11 w-11 place-items-center rounded-xl"><Icon size={22} /></div>
                  <h2 className="mt-5 font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 opacity-65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Publication Library</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Flagship REIS publications</h2>
            <p className="mt-6 text-lg leading-8 opacity-65">
              Each publication is presented through its purpose, scope, featured figures and engineering contribution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {publications.map(({ code, title, type, status, summary, icon: Icon, topics, figure }) => (
              <article key={code} className="reis-panel overflow-hidden rounded-[1.75rem] border">
                <div className="about-figure-preview p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="reis-small-icon grid h-12 w-12 place-items-center rounded-xl"><Icon size={23} /></div>
                    <span className="about-tag rounded-full px-3 py-1 text-xs font-semibold">{status}</span>
                  </div>
                  <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] opacity-60">Featured figure</p>
                  <h3 className="mt-2 text-2xl font-semibold">{figure}</h3>
                  <div className="mt-6 flex items-center gap-2">
                    {[0, 1, 2, 3].map((step) => (
                      <span key={step} className="h-2 flex-1 rounded-full bg-[#159bff]" style={{ opacity: 1 - step * 0.18 }} />
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] opacity-55">
                    <span>{code}</span><span>•</span><span>{type}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 opacity-65">{summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {topics.map((topic) => <span key={topic} className="about-tag rounded-full px-3 py-1 text-xs font-semibold">{topic}</span>)}
                  </div>
                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold reis-card-link">View publication overview <ArrowRight size={15} /></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-research-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
          <div>
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Publication model</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">From document to connected knowledge.</h2>
            <p className="mt-6 text-lg leading-8 opacity-65">
              REIS publications connect executive summaries, figures, frameworks, solutions and industry applications so visitors can understand both the idea and its practical use.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Executive summary", "Featured figures", "Key principles", "Related solutions", "Industry applications", "Release history"].map((item) => (
              <div key={item} className="reis-panel flex items-center gap-4 rounded-2xl border p-5">
                <div className="reis-check grid h-9 w-9 shrink-0 place-items-center rounded-full"><ArrowRight size={16} /></div>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="reis-cta-section px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">Apply REIS knowledge</p>
          <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Turn engineering knowledge into delivery confidence.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-70">
            Discuss how REIS standards, frameworks and reference architectures can support your transformation programme.
          </p>
          <a href="mailto:ola.reis.global@gmail.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">
            Start a conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="reis-footer border-t">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3"><ReisMark /><span className="text-xl font-bold tracking-[0.05em]">REIS GLOBAL</span></div>
            <p className="mt-5 max-w-md leading-7 opacity-60">Research, engineering, innovation and solutions for governments, enterprises and communities.</p>
          </div>
          <div><h3 className="font-semibold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm opacity-60"><a href="/capabilities">Capabilities</a><a href="/solutions">Solutions</a><a href="/industries">Industries</a><a href="/research">Research</a></div></div>
          <div><h3 className="font-semibold">Contact</h3><div className="mt-4 flex flex-col gap-3 text-sm opacity-60"><a href="mailto:ola.reis.global@gmail.com">ola.reis.global@gmail.com</a><span>United Kingdom</span><span>Serving clients globally</span></div></div>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 border-t px-6 py-6 text-xs opacity-45 sm:flex-row sm:justify-between lg:px-10"><span>© 2026 REIS Global Ltd. All rights reserved.</span><span>Research · Engineering · Innovation · Solutions</span></div>
      </footer>
    </main>
  );
}

function ReisMark() {
  return (
    <div className="relative h-11 w-11" aria-hidden="true">
      <span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" />
      <span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" />
      <span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" />
    </div>
  );
}

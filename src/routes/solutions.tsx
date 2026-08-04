import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  Cloud,
  Database,
  Landmark,
  Leaf,
  Menu,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { DigitalGlobe } from "../components/digital-globe";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | REIS Global" },
      {
        name: "description",
        content:
          "Explore REIS Global solutions for government, agriculture, justice, security and enterprise transformation.",
      },
      { property: "og:title", content: "REIS Global Solutions" },
      {
        property: "og:description",
        content:
          "Research-led, architecture-driven and secure digital solutions for complex transformation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    icon: Users,
    title: "GovVisit",
    challenge: "Secure, auditable and efficient visitor management for government and enterprise facilities.",
    overview:
      "A mobile and web platform combining identity capture, OCR, visitor workflows, role-based administration, QR passes, audit trails and reporting.",
    capabilities: ["OCR and identity capture", "Mobile reception", "RBAC and audit trails", "QR and digital passes"],
    industries: ["Government", "Defence", "Enterprise"],
    publication: "GovVisit AI Build Specification",
    figure: "GovVisit Platform Architecture",
  },
  {
    icon: Leaf,
    title: "Farm Naturale",
    challenge: "Fragmented access to agricultural learning, commerce, support and finance.",
    overview:
      "An integrated agriculture platform that connects education, marketplace services, advisory support, buy-back models, finance and analytics.",
    capabilities: ["Digital learning", "Agri-commerce", "Advisory services", "Farmer analytics"],
    industries: ["Agriculture", "Education", "Commerce"],
    publication: "Digital Agriculture Platform Reference Architecture",
    figure: "Integrated Agriculture Ecosystem",
  },
  {
    icon: Scale,
    title: "National Justice Transformation",
    challenge: "Disconnected justice processes, institutional bottlenecks and limited end-to-end visibility.",
    overview:
      "A transformation framework connecting courts, law enforcement, prosecution, corrections and executive decision-making around shared outcomes.",
    capabilities: ["Process transformation", "Institutional integration", "Decision support", "Governance and traceability"],
    industries: ["Justice", "Government", "Corrections"],
    publication: "National Justice Transformation Framework",
    figure: "Government Decision Pathway",
  },
  {
    icon: Leaf,
    title: "Digital Agriculture",
    challenge: "Agricultural ecosystems that lack shared architecture, interoperable data and scalable digital services.",
    overview:
      "A vendor-neutral architecture for digital agriculture platforms spanning farmers, markets, data, finance, logistics, extension services and government.",
    capabilities: ["Reference architecture", "Data interoperability", "Platform governance", "Ecosystem integration"],
    industries: ["Agriculture", "Government", "Financial Services"],
    publication: "Digital Agriculture Platform Reference Architecture",
    figure: "Agriculture Capability Model",
  },
  {
    icon: ShieldCheck,
    title: "National Security & Government Platforms",
    challenge: "Mission-critical public-sector services requiring resilience, security and cross-agency coordination.",
    overview:
      "Secure, scalable platforms for intelligence, response, government operations, identity, collaboration and national digital transformation.",
    capabilities: ["Mission-critical architecture", "Secure integration", "Data and intelligence", "Cross-agency workflows"],
    industries: ["Government", "Defence", "Security"],
    publication: "REIS Architecture and Security Standards",
    figure: "National Platform Operating Model",
  },
] as const;

const lifecycle = [
  [BrainCircuit, "Research", "Understand the mission, context and evidence."],
  [Network, "Architecture", "Define the operating model, controls and target design."],
  [Sparkles, "Engineering", "Build secure, scalable and maintainable capabilities."],
  [ShieldCheck, "Security", "Embed assurance, governance and auditability."],
  [Check, "Validation", "Test outcomes, resilience, usability and compliance."],
  [Cloud, "Deployment", "Release through controlled and observable environments."],
  [Database, "Continuous Improvement", "Measure, learn and evolve the solution."],
] as const;

const matrix = [
  ["GovVisit", true, true, false, false, true],
  ["Farm Naturale", true, false, false, true, true],
  ["Justice Transformation", true, false, true, false, false],
  ["Digital Agriculture", true, false, false, true, true],
  ["Security & Government Platforms", true, true, true, false, true],
] as const;

const outcomes = [
  "Improved operational efficiency",
  "Enhanced security and accountability",
  "Better evidence-based decision support",
  "Increased transparency and traceability",
  "Scalable digital platforms",
  "Standards-based engineering",
];

function SolutionsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="reis-site min-h-screen overflow-x-hidden">
      <header className="reis-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <a href="/" className="flex items-center gap-3" aria-label="REIS Global home">
            <ReisMark />
            <div>
              <div className="text-xl font-bold tracking-[0.04em]">REIS GLOBAL</div>
              <div className="text-[9px] uppercase tracking-[0.18em] opacity-65">Research · Engineering · Innovation · Solutions</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            <a className="reis-nav-link" href="/about">About</a>
            <a className="reis-nav-link" href="/capabilities">Capabilities</a>
            <a className="reis-nav-link text-white" href="/solutions">Solutions</a>
            <a className="reis-nav-link" href="/#industries">Industries</a>
            <a className="reis-nav-link" href="/#research">Research</a>
            <a className="reis-nav-link" href="/#contact">Contact</a>
          </nav>
          <a href="#contact" className="reis-primary-button hidden items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold lg:inline-flex">Discuss an initiative <ArrowRight size={16} /></a>
          <button type="button" className="reis-icon-button lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && (
          <div className="reis-mobile-menu border-t px-6 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              <a href="/about">About</a><a href="/capabilities">Capabilities</a><a href="/solutions">Solutions</a><a href="/#industries">Industries</a><a href="/#research">Research</a><a href="/#contact">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <section className="reis-hero relative isolate overflow-hidden pt-20">
        <div className="reis-grid absolute inset-0" /><div className="reis-stars absolute inset-0" /><div className="reis-blue-glow absolute -right-56 top-10 h-[38rem] w-[38rem] rounded-full blur-[130px]" />
        <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-10 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="z-10 max-w-2xl">
            <a href="/" className="reis-nav-link mb-8 inline-flex items-center gap-2 text-sm"><ArrowLeft size={16} /> Back to home</a>
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.24em]">Solutions</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.03] tracking-[-0.05em] sm:text-6xl xl:text-7xl">Engineering solutions for <span className="reis-accent-text">complex transformation.</span></h1>
            <p className="reis-hero-copy mt-7 max-w-xl text-lg leading-8 sm:text-xl">REIS combines research, architecture, engineering and governance to deliver secure digital solutions that strengthen institutions, modernise services and create measurable impact.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="#portfolio" className="reis-primary-button inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-semibold">Explore the portfolio <ArrowRight size={18} /></a><a href="#lifecycle" className="reis-secondary-button inline-flex items-center justify-center rounded-lg px-6 py-4 font-semibold">How we engineer solutions</a></div>
          </div>
          <DigitalGlobe />
        </div>
      </section>

      <section id="portfolio" className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading eyebrow="Solution portfolio" title="Designed around real-world missions" text="Every REIS solution is guided by research, architecture, engineering, security, governance and continuous improvement." />
          <div className="mt-14 space-y-6">
            {solutions.map((solution, index) => (
              <article key={solution.title} className="reis-panel overflow-hidden rounded-3xl border">
                <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
                  <div className="about-figure-preview relative min-h-[300px] p-8 sm:p-10">
                    <div className="absolute right-8 top-8 text-xs font-bold opacity-45">0{index + 1}</div>
                    <div className="reis-small-icon grid h-14 w-14 place-items-center rounded-2xl"><solution.icon size={27} /></div>
                    <p className="reis-eyebrow mt-10 text-xs font-bold uppercase tracking-[0.2em]">Featured solution</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">{solution.title}</h2>
                    <div className="mt-8 rounded-2xl border border-current/10 bg-white/5 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-55">Featured figure</p>
                      <p className="mt-2 font-semibold">{solution.figure}</p>
                    </div>
                  </div>
                  <div className="p-8 sm:p-10">
                    <div className="grid gap-8 xl:grid-cols-2">
                      <div><p className="text-xs font-bold uppercase tracking-[0.18em] opacity-50">Challenge</p><p className="mt-3 leading-7 opacity-75">{solution.challenge}</p></div>
                      <div><p className="text-xs font-bold uppercase tracking-[0.18em] opacity-50">Solution overview</p><p className="mt-3 leading-7 opacity-75">{solution.overview}</p></div>
                    </div>
                    <div className="mt-8 grid gap-8 xl:grid-cols-2">
                      <div><p className="text-xs font-bold uppercase tracking-[0.18em] opacity-50">Key capabilities</p><div className="mt-4 grid gap-3">{solution.capabilities.map((item) => <div key={item} className="flex items-center gap-3"><Check size={16} className="reis-index" /><span className="text-sm">{item}</span></div>)}</div></div>
                      <div><p className="text-xs font-bold uppercase tracking-[0.18em] opacity-50">Industries served</p><div className="mt-4 flex flex-wrap gap-2">{solution.industries.map((item) => <span key={item} className="about-tag rounded-full px-3 py-1 text-xs font-semibold">{item}</span>)}</div><p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] opacity-50">Related publication</p><p className="mt-2 text-sm font-semibold">{solution.publication}</p></div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lifecycle" className="reis-dark-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading eyebrow="Solution engineering lifecycle" title="From research to continuous improvement" text="A controlled lifecycle ensures that every solution remains aligned to outcomes, secure by design and capable of evolving over time." />
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
            {lifecycle.map(([Icon, title, text], index) => (
              <div key={title} className="reis-solution-card rounded-2xl border p-5">
                <div className="flex items-center justify-between"><div className="reis-solution-icon grid h-11 w-11 place-items-center rounded-xl"><Icon size={21} /></div><span className="text-xs opacity-35">0{index + 1}</span></div>
                <h3 className="mt-6 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 opacity-65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading eyebrow="Cross-sector applicability" title="Solutions engineered for institutional context" text="REIS solution patterns are adapted to the regulatory, operational and security requirements of each environment." />
          <div className="mt-12 overflow-x-auto rounded-2xl border reis-panel">
            <table className="min-w-[860px] w-full text-left text-sm">
              <thead className="border-b border-current/10"><tr><th className="p-5">Solution</th>{["Government","Defence","Justice","Agriculture","Enterprise"].map((item) => <th key={item} className="p-5 text-center">{item}</th>)}</tr></thead>
              <tbody>{matrix.map(([name, ...cells]) => <tr key={name} className="border-b border-current/10 last:border-0"><td className="p-5 font-semibold">{name}</td>{cells.map((active, index) => <td key={index} className="p-5 text-center">{active ? <span className="reis-check inline-grid h-7 w-7 place-items-center rounded-full"><Check size={14} /></span> : <span className="opacity-25">—</span>}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="reis-research-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <div><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Engineering outcomes</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Built to create durable operational value.</h2><p className="mt-6 text-lg leading-8 opacity-65">Our work is measured by stronger services, better decisions, increased resilience and platforms that can evolve without losing control.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{outcomes.map((item) => <div key={item} className="reis-panel flex items-center gap-4 rounded-2xl border p-5"><div className="reis-check grid h-9 w-9 shrink-0 place-items-center rounded-full"><Check size={17} /></div><span className="font-semibold">{item}</span></div>)}</div>
        </div>
      </section>

      <section id="contact" className="reis-cta-section px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center"><p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">Engineering solutions built to last</p><h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Discuss your transformation initiative.</h2><p className="mt-6 max-w-2xl text-lg leading-8 opacity-75">REIS delivers research-led engineering that creates secure, scalable and sustainable digital transformation.</p><a href="mailto:ola.reis.global@gmail.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">Start a conversation <ArrowRight size={18} /></a></div>
      </section>

      <footer className="reis-footer border-t">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-10"><div className="lg:col-span-2"><div className="flex items-center gap-3"><ReisMark /><span className="text-xl font-bold tracking-[0.05em]">REIS GLOBAL</span></div><p className="mt-5 max-w-md leading-7 opacity-60">Research, engineering, innovation and solutions for governments, enterprises and communities.</p></div><div><h3 className="font-semibold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm opacity-60"><a href="/about">About</a><a href="/capabilities">Capabilities</a><a href="/solutions">Solutions</a><a href="/#research">Research</a></div></div><div><h3 className="font-semibold">Contact</h3><div className="mt-4 flex flex-col gap-3 text-sm opacity-60"><a href="mailto:ola.reis.global@gmail.com">ola.reis.global@gmail.com</a><span>United Kingdom</span><span>Serving clients globally</span></div></div></div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 border-t px-6 py-6 text-xs opacity-45 sm:flex-row sm:justify-between lg:px-10"><span>© 2026 REIS Global Ltd. All rights reserved.</span><span>Research · Engineering · Innovation · Solutions</span></div>
      </footer>
    </main>
  );
}

function ReisMark() {
  return <div className="relative h-11 w-11" aria-hidden="true"><span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" /><span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" /><span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" /></div>;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{title}</h2><p className="mt-6 text-lg leading-8 opacity-65">{text}</p></div>;
}

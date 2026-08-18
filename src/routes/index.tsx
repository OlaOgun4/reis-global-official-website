import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  Database,
  GraduationCap,
  Landmark,
  Layers3,
  Leaf,
  Menu,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { DigitalGlobe } from "../components/digital-globe";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REIS Global | Research, Engineering, Innovation & Solutions" },
      { name: "description", content: "REIS Global engineers intelligent digital platforms for governments, enterprises and communities." },
      { property: "og:title", content: "REIS Global | Intelligent Transformation" },
      { property: "og:description", content: "Research-led engineering and secure digital solutions for complex transformation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capabilities = [
  [Layers3, "Enterprise Architecture", "Robust architectures aligned to institutional outcomes."],
  [Database, "Data & Intelligence", "Trusted data foundations for evidence-based decisions."],
  [BrainCircuit, "Artificial Intelligence", "Responsible AI for complex operational problems."],
  [Cloud, "Cloud & Integration", "Resilient platforms and seamless systems integration."],
  [ShieldCheck, "Security & Governance", "Security, compliance and auditability in every layer."],
  [Sparkles, "Innovation & Delivery", "Modern engineering that delivers measurable impact."],
] as const;

const solutions = [
  [Users, "GovVisit", "Secure visitor management for government and enterprise facilities.", "govvisit"],
  [Leaf, "Farm Naturale", "An agri-platform connecting learning, services and market participation.", "farm-naturale"],
  [Sparkles, "NaijaResolve", "Citizen-centred pathways for navigating everyday public-service challenges.", "naijaresolve"],
  [Scale, "Justice Transformation", "Institutional transformation for stronger justice and corrections outcomes.", "justice-transformation"],
  [ShieldCheck, "National Security & Response", "Resilient platforms supporting awareness, coordination and response.", "national-security-response"],
  [Database, "REIS Financials", "Regulated digital integration supporting controlled tax-reporting journeys.", "reis-financials"],
] as const;

const industries = [
  [Landmark, "Government & Public Sector"],
  [ShieldCheck, "Defence & Security"],
  [Leaf, "Agriculture & Food Systems"],
  [Scale, "Justice & Law"],
  [Building2, "Enterprise & Commercial"],
  [GraduationCap, "Education & Knowledge"],
] as const;

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="reis-site min-h-screen overflow-x-hidden">
      <header className="reis-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="REIS Global home">
            <ReisMark />
            <div>
              <div className="text-xl font-bold tracking-[0.04em]">REIS GLOBAL</div>
              <div className="text-[9px] uppercase tracking-[0.18em] opacity-65">Research · Engineering · Innovation · Solutions</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            {[["About", "about"], ["Capabilities", "capabilities"], ["Solutions", "solutions"], ["Industries", "industries"], ["Research", "research"], ["Contact", "contact"]].map(([label, id]) => (
              <a key={id} className="reis-nav-link" href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <a href="#contact" className="reis-primary-button hidden items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold lg:inline-flex">Start a conversation <ArrowRight size={16} /></a>
          <button type="button" className="reis-icon-button lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && <div className="reis-mobile-menu border-t px-6 py-5 lg:hidden"><nav className="flex flex-col gap-4">{["about", "capabilities", "solutions", "industries", "research", "contact"].map((item) => <a key={item} href={`#${item}`} className="capitalize" onClick={() => setMobileOpen(false)}>{item}</a>)}</nav></div>}
      </header>

      <section id="top" className="reis-hero relative isolate overflow-hidden pt-20">
        <div className="reis-grid absolute inset-0" /><div className="reis-stars absolute inset-0" /><div className="reis-blue-glow absolute -right-56 top-10 h-[38rem] w-[38rem] rounded-full blur-[130px]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-8 px-6 py-20 lg:grid-cols-[0.86fr_1.14fr] lg:px-10">
          <div className="z-10 max-w-2xl">
            <p className="reis-eyebrow text-xs font-bold uppercase tracking-[0.28em] sm:text-sm">Research · Engineering · Innovation · Solutions</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl xl:text-7xl">Engineering intelligent <span className="reis-accent-text">transformation.</span></h1>
            <p className="reis-hero-copy mt-7 max-w-xl text-lg leading-8 sm:text-xl">REIS Global designs secure digital platforms that transform governments, strengthen enterprises and create sustainable value for communities.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="#capabilities" className="reis-primary-button inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-semibold">Explore our capabilities <ArrowRight size={18} /></a><a href="#solutions" className="reis-secondary-button inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-semibold">View our solutions <ChevronRight size={18} /></a></div>
          </div>
          <DigitalGlobe />
        </div>
        <div id="capabilities" className="relative mx-auto max-w-[1440px] px-6 pb-12 lg:px-10"><div className="reis-capability-strip grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{capabilities.map(([Icon, title, text]) => <article key={title} className="reis-capability-item p-5"><div className="flex gap-4"><div className="reis-small-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl"><Icon size={22} /></div><div><h2 className="text-sm font-semibold">{title}</h2><p className="mt-2 text-xs leading-5 opacity-65">{text}</p></div></div></article>)}</div></div>
      </section>

      <section id="about" className="reis-section py-24"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-10"><div><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">About REIS</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Research-led thinking. Engineering-led delivery.</h2></div><div className="grid gap-5 sm:grid-cols-2">{[["Research", "Evidence, insight and domain understanding shape every engagement."], ["Engineering", "Architecture, security and delivery discipline turn strategy into working systems."], ["Innovation", "Emerging technology is applied where it creates practical institutional value."], ["Solutions", "Our platforms are designed for measurable outcomes, scale and long-term evolution."]].map(([title, text], index) => <div key={title} className="reis-panel rounded-2xl border p-6"><span className="reis-index text-xs font-bold">0{index + 1}</span><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 opacity-65">{text}</p></div>)}</div></div></section>

      <section id="solutions" className="reis-dark-section py-24"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><SectionHeader eyebrow="Solutions that transform" title="Platforms designed around real-world missions" text="Our solutions combine sector knowledge, secure architecture and modern engineering to improve services, institutions and livelihoods." dark /><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{solutions.map(([Icon, title, text, slug], index) => <a key={title} href={`/solutions/${slug}`} className="reis-solution-card group relative min-h-[280px] overflow-hidden rounded-2xl border p-7" aria-label={`View ${title} capability page`}><div className="reis-solution-glow absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl" /><div className="relative flex h-full flex-col"><div className="flex items-center justify-between"><div className="reis-solution-icon grid h-12 w-12 place-items-center rounded-full"><Icon size={23} /></div><span className="text-xs opacity-35">0{index + 1}</span></div><div className="mt-auto pt-16"><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 max-w-sm leading-7 opacity-65">{text}</p><span className="reis-card-link mt-6 inline-flex items-center gap-2 text-sm font-semibold">View capability page <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span></div></div></a>)}</div></div></section>

      <section id="industries" className="reis-section py-24"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><SectionHeader eyebrow="Industries we serve" title="Domain depth where transformation matters most" text="REIS focuses on sectors where secure digital systems directly affect institutional resilience, economic opportunity and public value." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{industries.map(([Icon, label]) => <div key={label} className="reis-industry-card rounded-2xl border p-5 text-center"><div className="reis-small-icon mx-auto grid h-12 w-12 place-items-center rounded-xl"><Icon size={23} /></div><p className="mt-4 text-sm font-semibold leading-6">{label}</p></div>)}</div></div></section>

      <section id="research" className="reis-research-section py-24"><div className="mx-auto grid max-w-[1440px] gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"><div><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Research & innovation</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Knowledge that becomes infrastructure.</h2><p className="mt-6 max-w-xl text-lg leading-8 opacity-65">Our standards, reference architectures and research convert emerging ideas into secure, governable and sustainable digital systems.</p></div><div className="grid gap-4 sm:grid-cols-2">{["Architecture frameworks", "Engineering standards", "AI research & innovation", "White papers & publications"].map((item) => <div key={item} className="reis-panel flex items-center gap-4 rounded-2xl border p-5"><div className="reis-check grid h-9 w-9 shrink-0 place-items-center rounded-full"><Check size={17} /></div><span className="font-semibold">{item}</span></div>)}</div></div></section>

      <section id="contact" className="reis-cta-section px-6 py-24 lg:px-10"><div className="mx-auto flex max-w-5xl flex-col items-center text-center"><p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">What comes next?</p><h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Let’s engineer what comes next.</h2><p className="mt-6 max-w-2xl text-lg leading-8 opacity-70">Talk to REIS Global about your transformation agenda, digital platform, research initiative or complex engineering challenge.</p><a href="mailto:info@reis-global.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">Start a conversation <ArrowRight size={18} /></a></div></section>

      <footer className="reis-footer border-t"><div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-10"><div className="lg:col-span-2"><div className="flex items-center gap-3"><ReisMark /><span className="text-xl font-bold tracking-[0.05em]">REIS GLOBAL</span></div><p className="mt-5 max-w-md leading-7 opacity-60">Research, engineering, innovation and solutions for governments, enterprises and communities.</p></div><div><h3 className="font-semibold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm opacity-60"><a href="#capabilities">Capabilities</a><a href="#solutions">Solutions</a><a href="#industries">Industries</a><a href="#research">Research</a></div></div><div><h3 className="font-semibold">Contact</h3><div className="mt-4 flex flex-col gap-3 text-sm opacity-60"><a href="mailto:info@reis-global.com">info@reis-global.com</a><span>United Kingdom</span><span>Serving clients globally</span></div></div></div><div className="mx-auto flex max-w-[1440px] flex-col gap-2 border-t px-6 py-6 text-xs opacity-45 sm:flex-row sm:justify-between lg:px-10"><span>© 2026 REIS Global Ltd. All rights reserved.</span><span>Research · Engineering · Innovation · Solutions</span></div></footer>
    </main>
  );
}

function ReisMark() { return <div className="relative h-11 w-11" aria-hidden="true"><span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" /><span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" /><span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" /></div>; }
function SectionHeader({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) { return <div className="max-w-3xl"><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className={`mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl ${dark ? "text-white" : ""}`}>{title}</h2><p className={`mt-6 text-lg leading-8 ${dark ? "text-white/60" : "opacity-65"}`}>{text}</p></div>; }

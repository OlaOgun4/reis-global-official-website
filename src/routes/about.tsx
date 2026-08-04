import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Compass,
  Globe2,
  Landmark,
  Lightbulb,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { DigitalGlobe } from "../components/digital-globe";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About REIS Global | Research-Led Engineering" },
      {
        name: "description",
        content:
          "Learn how REIS Global combines research, engineering, innovation and knowledge to deliver secure digital transformation.",
      },
      { property: "og:title", content: "About REIS Global" },
      {
        property: "og:description",
        content:
          "A research-led engineering company delivering intelligent digital solutions for institutions, enterprises and communities.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

const journey = [
  "Consulting",
  "Enterprise Architecture",
  "Engineering",
  "Artificial Intelligence",
  "Research",
  "Innovation",
  "Digital Platforms",
  "Knowledge Leadership",
] as const;

const values = [
  [BookOpen, "Research", "Evidence before assumption."],
  [Network, "Engineering", "Architecture before implementation."],
  [Lightbulb, "Innovation", "Solve meaningful problems."],
  [ShieldCheck, "Integrity", "Security, governance and trust."],
  [Target, "Excellence", "Continuous improvement in every release."],
  [Users, "Collaboration", "Partnership before transaction."],
] as const;

const knowledge = [
  [
    "RAIEDS-001",
    "REIS AI Engineering & Delivery Standard",
    "AI Governance Lifecycle",
    "A governance and engineering standard for architecture, security, delivery and operation of AI-assisted systems.",
    ["AI", "Governance", "Engineering"],
  ],
  [
    "GV-BLD-V1-001",
    "GovVisit AI Build Specification",
    "Platform Architecture",
    "An implementation blueprint covering workflows, architecture, OCR, RBAC, auditability and secure delivery.",
    ["Government", "Platform", "Security"],
  ],
  [
    "DAPRA",
    "Digital Agriculture Reference Architecture",
    "Agriculture Capability Model",
    "A vendor-neutral reference architecture for integrated digital agriculture ecosystems and governance.",
    ["Agriculture", "Architecture", "Data"],
  ],
  [
    "NIJCPT",
    "National Justice Transformation Framework",
    "Government Decision Pathway",
    "A structured transformation model connecting justice processes, institutional reform and corrections outcomes.",
    ["Justice", "Transformation", "Public Sector"],
  ],
] as const;

const outlook = [
  [Globe2, "United Kingdom", "Corporate and engineering base"],
  [Landmark, "Nigeria", "Priority transformation market"],
  [Compass, "Africa", "Regional growth and impact"],
  [Sparkles, "Global", "Standards-led delivery outlook"],
] as const;

const principles = [
  "Research before recommendation",
  "Architecture before implementation",
  "Security before deployment",
  "Quality before release",
  "Knowledge before repetition",
  "Partnership before transaction",
] as const;

function AboutPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="reis-site min-h-screen overflow-x-hidden">
      <SiteHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <section className="reis-hero relative isolate overflow-hidden pt-20">
        <div className="reis-grid absolute inset-0" />
        <div className="reis-stars absolute inset-0" />
        <div className="reis-blue-glow absolute -right-56 top-10 h-[38rem] w-[38rem] rounded-full blur-[130px]" />
        <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="z-10 max-w-3xl">
            <a href="/" className="reis-card-link mb-8 inline-flex items-center gap-2 text-sm font-semibold">
              <ArrowLeft size={16} /> Back to homepage
            </a>
            <p className="reis-eyebrow text-xs font-bold uppercase tracking-[0.28em] sm:text-sm">About REIS Global</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.03] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
              Engineering progress through <span className="reis-accent-text">research and innovation.</span>
            </h1>
            <p className="reis-hero-copy mt-7 max-w-2xl text-lg leading-8 sm:text-xl">
              REIS Global helps governments, enterprises and communities solve complex challenges through research-led engineering, intelligent technology and disciplined digital delivery.
            </p>
          </div>
          <DigitalGlobe />
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <SectionLead eyebrow="Who we are" title="A research-led engineering company." />
          <div className="reis-panel rounded-3xl border p-8 sm:p-10">
            <p className="text-lg leading-8 opacity-75">
              REIS Global designs secure, intelligent and scalable digital platforms across enterprise architecture, artificial intelligence, software engineering, cloud, data, governance and national-scale transformation.
            </p>
            <p className="mt-6 text-lg leading-8 opacity-75">
              We engineer complete ecosystems that align people, processes, information, governance and technology around measurable outcomes—not isolated technology deliverables.
            </p>
          </div>
        </div>
      </section>

      <section className="reis-research-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader eyebrow="Our journey" title="An evolution from advisory to knowledge leadership" text="REIS has evolved through progressively deeper capability—moving from advisory and architecture into engineering, intelligent platforms and original knowledge assets." />
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {journey.map((item, index) => (
              <div key={item} className="reis-panel relative rounded-2xl border p-6">
                <span className="reis-index text-xs font-bold">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold">{item}</h3>
                {index < journey.length - 1 && <ArrowRight className="absolute right-5 top-5 opacity-30" size={18} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-6 lg:grid-cols-2 lg:px-10">
          <StatementCard eyebrow="Our mission">
            To research, engineer and deliver intelligent digital solutions that strengthen institutions, empower organisations and improve lives.
          </StatementCard>
          <StatementCard eyebrow="Our vision">
            To become Africa&apos;s leading research, engineering and innovation company delivering globally recognised platforms, trusted knowledge and transformational solutions.
          </StatementCard>
        </div>
      </section>

      <section className="reis-dark-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader dark eyebrow="Our values" title="Principles embedded in how we work" text="The REIS identity is defined not only by what we build, but by the standards we apply while building it." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map(([Icon, title, text]) => (
              <article key={title} className="reis-solution-card rounded-2xl border p-7">
                <div className="reis-solution-icon grid h-12 w-12 place-items-center rounded-full"><Icon size={23} /></div>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-lg opacity-70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <SectionLead eyebrow="Why REIS" title="Architecture, security and outcomes—not isolated technology." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Research led", "Architecture driven", "Engineering focused", "AI ready", "Secure by design", "Outcome oriented"].map((item) => (
              <CheckCard key={item}>{item}</CheckCard>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-research-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader eyebrow="REIS knowledge" title="Engineering knowledge that creates real solutions" text="REIS develops standards, implementation specifications, frameworks and reference architectures that directly underpin the solutions we deliver." />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {knowledge.map(([code, title, figure, summary, tags]) => (
              <article key={code} className="reis-panel overflow-hidden rounded-3xl border">
                <div className="about-figure-preview relative min-h-52 overflow-hidden p-6">
                  <div className="reis-grid absolute inset-0" />
                  <div className="relative flex min-h-40 flex-col justify-between">
                    <span className="reis-index text-xs font-bold">{code}</span>
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="reis-small-icon grid h-11 w-11 place-items-center rounded-xl"><BookOpen size={21} /></div>
                        <span className="text-sm font-semibold opacity-70">Featured figure</span>
                      </div>
                      <h3 className="text-2xl font-bold">{figure}</h3>
                      <div className="mt-5 flex items-center gap-2 opacity-70"><span className="h-2 w-2 rounded-full bg-[#28b8ff]" /><span className="h-px flex-1 bg-gradient-to-r from-[#28b8ff] to-transparent" /><span className="h-2 w-2 rounded-full bg-[#087cff]" /></div>
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 leading-7 opacity-70">{summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="about-tag rounded-full px-3 py-1.5 text-xs font-semibold">{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionLead eyebrow="Global outlook" title="Global engineering practices. Regional understanding." />
            <p className="mt-6 text-lg leading-8 opacity-70">
              Headquartered in the United Kingdom and building for international markets, REIS combines globally recognised engineering practices with deep understanding of African and emerging-market transformation needs.
            </p>
          </div>
          <div className="reis-panel rounded-3xl border p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {outlook.map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-current/10 p-5">
                  <Icon className="reis-accent-text" size={24} />
                  <h3 className="mt-5 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 opacity-65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reis-dark-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader dark eyebrow="Leadership philosophy" title="Principles that guide every engagement" text="REIS applies a consistent decision philosophy across research, architecture, engineering and delivery." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((principle) => <CheckCard key={principle} dark>{principle}</CheckCard>)}
          </div>
        </div>
      </section>

      <section className="reis-cta-section px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">REIS Global</p>
          <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Engineering a better digital future.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-75">Research informs our thinking. Engineering delivers our solutions. Innovation creates lasting value.</p>
          <a href="mailto:ola.reis.global@gmail.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">Start a conversation <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer className="reis-footer border-t">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div className="flex items-center gap-3"><ReisMark /><span className="font-bold tracking-[0.05em]">REIS GLOBAL</span></div>
          <p className="text-sm opacity-55">© 2026 REIS Global Ltd. Research · Engineering · Innovation · Solutions</p>
        </div>
      </footer>
    </main>
  );
}

function SiteHeader({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (value: boolean) => void }) {
  return (
    <header className="reis-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <a href="/" className="flex items-center gap-3" aria-label="REIS Global home"><ReisMark /><div><div className="text-xl font-bold tracking-[0.04em]">REIS GLOBAL</div><div className="text-[9px] uppercase tracking-[0.18em] opacity-65">Research · Engineering · Innovation · Solutions</div></div></a>
        <nav className="hidden items-center gap-7 text-sm lg:flex"><a className="reis-nav-link text-white" href="/about">About</a><a className="reis-nav-link" href="/#capabilities">Capabilities</a><a className="reis-nav-link" href="/#solutions">Solutions</a><a className="reis-nav-link" href="/#industries">Industries</a><a className="reis-nav-link" href="/#research">Research</a></nav>
        <a href="/#contact" className="reis-primary-button hidden items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold lg:inline-flex">Start a conversation <ArrowRight size={16} /></a>
        <button type="button" className="reis-icon-button lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      {mobileOpen && <div className="reis-mobile-menu border-t px-6 py-5 lg:hidden"><nav className="flex flex-col gap-4"><a href="/about">About</a><a href="/#capabilities">Capabilities</a><a href="/#solutions">Solutions</a><a href="/#industries">Industries</a><a href="/#research">Research</a><a href="/#contact">Contact</a></nav></div>}
    </header>
  );
}

function ReisMark() { return <div className="relative h-11 w-11" aria-hidden="true"><span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" /><span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" /><span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" /></div>; }
function SectionLead({ eyebrow, title }: { eyebrow: string; title: string }) { return <div><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{title}</h2></div>; }
function SectionHeader({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) { return <div className="max-w-3xl"><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className={`mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl ${dark ? "text-white" : ""}`}>{title}</h2><p className={`mt-6 text-lg leading-8 ${dark ? "text-white/65" : "opacity-65"}`}>{text}</p></div>; }
function StatementCard({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) { return <article className="reis-panel rounded-3xl border p-8 sm:p-10"><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">{children}</h2></article>; }
function CheckCard({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) { return <div className={`${dark ? "reis-solution-card" : "reis-panel"} flex items-center gap-4 rounded-2xl border p-5`}><div className="reis-check grid h-9 w-9 shrink-0 place-items-center rounded-full"><Check size={17} /></div><span className="font-semibold">{children}</span></div>; }

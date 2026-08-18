import { SiteFooter as GlobalFooter, SiteHeader as GlobalHeader } from "../components/site-navigation";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Menu,
  Scale,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { DigitalGlobe } from "../components/digital-globe";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | REIS Global" },
      {
        name: "description",
        content:
          "Explore how REIS Global applies research-led engineering across government, defence, justice, agriculture, healthcare, education and enterprise.",
      },
      { property: "og:title", content: "Industries | REIS Global" },
      {
        property: "og:description",
        content:
          "Secure digital transformation designed around the realities of each sector.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Landmark,
    title: "Government & Public Sector",
    challenge:
      "Modernising public services while maintaining accountability, interoperability and citizen trust.",
    capabilities: ["Enterprise Architecture", "Digital Transformation", "Platform Engineering"],
    solutions: ["GovVisit", "Government Digital Platforms", "Cross-agency integration"],
    knowledge: "Public-sector operating models and architecture frameworks",
    outcome: "Connected services, stronger institutions and better citizen experience.",
  },
  {
    icon: ShieldCheck,
    title: "Defence & Security",
    challenge:
      "Delivering mission-critical capabilities across complex, high-assurance environments.",
    capabilities: ["Cybersecurity", "Data Engineering", "Cloud & Integration"],
    solutions: ["National Security Platforms", "Identity and access systems", "Operational intelligence"],
    knowledge: "Security architectures and governance models",
    outcome: "Improved readiness, resilience and trusted information sharing.",
  },
  {
    icon: Scale,
    title: "Justice & Law",
    challenge:
      "Reducing fragmentation across justice, corrections and associated institutions.",
    capabilities: ["Digital Transformation", "Data Architecture", "Platform Engineering"],
    solutions: ["National Justice Transformation", "Workflow modernisation", "Decision support"],
    knowledge: "National Justice Transformation Framework",
    outcome: "Faster processes, greater transparency and improved access to justice.",
  },
  {
    icon: Leaf,
    title: "Agriculture & Food Systems",
    challenge:
      "Connecting knowledge, markets, finance, data and farm operations in one ecosystem.",
    capabilities: ["Platform Engineering", "Data Engineering", "AI Engineering"],
    solutions: ["Farm Naturale", "Digital Agriculture", "Farmer enablement platforms"],
    knowledge: "Digital Agriculture Platform Reference Architecture",
    outcome: "Higher productivity, stronger value chains and more resilient food systems.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    challenge:
      "Improving access, coordination and trusted information across health services.",
    capabilities: ["Data Engineering", "Cloud Engineering", "Cybersecurity"],
    solutions: ["Digital service platforms", "Integrated records", "Operational analytics"],
    knowledge: "Secure data and platform architecture patterns",
    outcome: "Better coordination, stronger data quality and more responsive services.",
  },
  {
    icon: GraduationCap,
    title: "Education & Knowledge",
    challenge:
      "Scaling access to learning while improving administration, insight and knowledge transfer.",
    capabilities: ["Software Engineering", "Cloud Engineering", "Data & Intelligence"],
    solutions: ["Digital learning platforms", "Knowledge systems", "Research portals"],
    knowledge: "Engineering standards, publications and reference models",
    outcome: "Broader access, better learning experiences and stronger institutional knowledge.",
  },
  {
    icon: Building2,
    title: "Enterprise & Commercial",
    challenge:
      "Modernising fragmented systems while protecting continuity, performance and customer value.",
    capabilities: ["Enterprise Architecture", "Cloud Engineering", "AI Engineering"],
    solutions: ["Digital platforms", "Process automation", "Data-driven operations"],
    knowledge: "Architecture, governance and delivery standards",
    outcome: "Greater efficiency, scalability and competitive resilience.",
  },
] as const;

const principles = [
  "Understand the sector before recommending technology",
  "Design around operating realities and regulatory obligations",
  "Embed security, governance and auditability",
  "Connect strategy, architecture and delivery",
  "Measure outcomes, not only technical completion",
  "Build for long-term evolution",
];

function IndustriesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main id="top" className="reis-site min-h-screen overflow-x-hidden">
      <GlobalHeader active="/industries" />

      <section className="reis-hero relative isolate overflow-hidden pt-20">
        <div className="reis-grid absolute inset-0" />
        <div className="reis-stars absolute inset-0" />
        <div className="reis-blue-glow absolute -right-56 top-8 h-[38rem] w-[38rem] rounded-full blur-[130px]" />
        <div className="relative mx-auto grid min-h-[700px] max-w-[1440px] items-center gap-10 px-6 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
          <div className="z-10 max-w-2xl">
            <a href="/" className="reis-nav-link inline-flex items-center gap-2 text-sm"><ArrowLeft size={16} /> Back to home</a>
            <p className="reis-eyebrow mt-8 text-sm font-bold uppercase tracking-[0.24em]">Industries</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
              Sector insight. <span className="reis-accent-text">Engineering depth.</span>
            </h1>
            <p className="reis-hero-copy mt-7 max-w-xl text-lg leading-8 sm:text-xl">
              REIS applies research-led engineering to the operating realities, risks and transformation priorities of each sector.
            </p>
            <a href="#industry-portfolio" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-6 py-4 font-semibold">
              Explore industries <ArrowRight size={18} />
            </a>
          </div>
          <DigitalGlobe />
        </div>
      </section>

      <section id="industry-portfolio" className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader
            eyebrow="Industries we serve"
            title="Transformation grounded in sector realities"
            text="Each engagement combines domain understanding, architecture, engineering and delivery discipline rather than applying a generic technology template."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {industries.map(({ icon: Icon, title, challenge, capabilities, solutions, knowledge, outcome }, index) => (
              <article key={title} className="reis-panel overflow-hidden rounded-3xl border">
                <div className="about-figure-preview p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="reis-small-icon grid h-13 w-13 place-items-center rounded-2xl"><Icon size={25} /></div>
                    <span className="reis-index text-sm font-bold">0{index + 1}</span>
                  </div>
                  <h2 className="mt-8 text-3xl font-bold tracking-[-0.03em]">{title}</h2>
                  <p className="mt-4 max-w-2xl leading-7 opacity-70">{challenge}</p>
                </div>
                <div className="grid gap-6 p-7 sm:grid-cols-2">
                  <InfoBlock title="Capabilities applied" items={capabilities} />
                  <InfoBlock title="Relevant solutions" items={solutions} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-50">Related knowledge</p>
                    <div className="mt-3 flex items-start gap-3"><BookOpen size={18} className="mt-1 shrink-0 text-[#159bff]" /><p className="leading-7 opacity-70">{knowledge}</p></div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-50">Executive outcome</p>
                    <div className="mt-3 flex items-start gap-3"><Check size={18} className="mt-1 shrink-0 text-[#159bff]" /><p className="leading-7 opacity-70">{outcome}</p></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-dark-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Our sector approach</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Technology follows context.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 opacity-65">
              We begin with institutional purpose, operating constraints and measurable outcomes before defining architecture or technology.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div key={principle} className="reis-solution-card rounded-2xl border p-5">
                <span className="reis-index text-xs font-bold">0{index + 1}</span>
                <p className="mt-4 font-semibold leading-7">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-research-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Connected portfolio</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Capabilities, solutions and knowledge working together.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Capabilities define how we engineer", "Solutions show what we deliver", "Knowledge explains the standards behind the work"].map((text, index) => (
              <div key={text} className="reis-panel rounded-2xl border p-6">
                <span className="reis-index text-xs font-bold">0{index + 1}</span>
                <p className="mt-5 font-semibold leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-cta-section px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">Industry transformation</p>
          <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Engineering around your sector, not around a template.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-70">
            Discuss how REIS can apply research, architecture and engineering to your sector-specific transformation priorities.
          </p>
          <a href="mailto:info@reis-global.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">
            Start a conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <GlobalFooter />
    </main>
  );
}

function InfoBlock({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-50">{title}</p>
      <div className="mt-3 space-y-3">
        {items.map((item) => <div key={item} className="flex items-start gap-3"><Check size={17} className="mt-1 shrink-0 text-[#159bff]" /><span className="leading-7 opacity-70">{item}</span></div>)}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{title}</h2><p className="mt-6 text-lg leading-8 opacity-65">{text}</p></div>;
}

function ReisMark() {
  return <div className="relative h-11 w-11" aria-hidden="true"><span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" /><span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" /><span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" /></div>;
}

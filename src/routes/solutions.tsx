import { ReisMark } from "../components/reis-mark";
import { SiteFooter as GlobalFooter, SiteHeader as GlobalHeader } from "../components/site-navigation";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Check,
  Cloud,
  Database,
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
          "Explore REIS Global solutions for government, agriculture, justice, security, governance and enterprise transformation.",
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
    slug: "govvisit",
    title: "GovVisit",
    category: "Secure Operations",
    challenge: "Modernising visitor operations while strengthening control, accountability and service quality.",
    overview: "A secure visitor-management concept demonstrating how connected digital journeys can improve reception, oversight and operational confidence.",
    capabilities: ["Digital service design", "Identity-enabled workflows", "Operational governance", "Management insight"],
    outcomes: ["More consistent visitor journeys", "Stronger operational oversight", "Improved accountability"],
    pathway: ["Arrive", "Verify", "Connect", "Assure"],
    industries: ["Government", "Defence", "Enterprise"],
    status: "Demonstrator",
    disclaimer: null,
  },
  {
    icon: Leaf,
    slug: "farm-naturale",
    title: "Farm Naturale",
    category: "Digital Agriculture",
    challenge: "Connecting fragmented agricultural knowledge, services and market opportunities.",
    overview: "An integrated agriculture concept showing how learning, advisory support and commercial participation can be brought into one coherent experience.",
    capabilities: ["Platform strategy", "Digital learning", "Ecosystem design", "Data-informed services"],
    outcomes: ["Clearer access to support", "Connected participant journeys", "Scalable service foundations"],
    pathway: ["Learn", "Grow", "Participate", "Improve"],
    industries: ["Agriculture", "Education", "Commerce"],
    status: "Demonstrator",
    disclaimer: null,
  },
  {
    icon: Sparkles,
    slug: "naijaresolve",
    title: "NaijaResolve",
    category: "Citizen Services",
    challenge: "Helping people navigate everyday public-service problems through clear, trusted digital pathways.",
    overview: "A research-led service concept exploring how structured guidance and responsible digital support can improve problem resolution.",
    capabilities: ["Service discovery", "Citizen-centred design", "Responsible AI", "Governance by design"],
    outcomes: ["Simpler service navigation", "More consistent guidance", "Evidence-led service improvement"],
    pathway: ["Describe", "Understand", "Guide", "Resolve"],
    industries: ["Government", "Public Services", "Communities"],
    status: "Concept development",
    disclaimer: null,
  },
  {
    icon: Scale,
    slug: "justice-transformation",
    title: "National Justice Transformation",
    category: "Institutional Transformation",
    challenge: "Addressing fragmented processes and limited end-to-end visibility across complex justice environments.",
    overview: "A transformation proposition demonstrating how research, operating-model design and governance can align institutions around shared outcomes.",
    capabilities: ["Enterprise architecture", "Operating-model design", "Transformation governance", "Executive decision support"],
    outcomes: ["Clearer institutional alignment", "Improved decision visibility", "Stronger transformation governance"],
    pathway: ["Understand", "Align", "Govern", "Transform"],
    industries: ["Justice", "Government", "Corrections"],
    status: "Executive proposition",
    disclaimer: null,
  },
  {
    icon: Leaf,
    slug: "digital-agriculture-architecture",
    title: "Digital Agriculture Architecture",
    category: "Reference Architecture",
    challenge: "Creating a shared direction for diverse agricultural participants, services and digital investments.",
    overview: "A vendor-neutral reference approach showing how architecture and governance can support connected, scalable agricultural ecosystems.",
    capabilities: ["Reference architecture", "Capability modelling", "Interoperability strategy", "Platform governance"],
    outcomes: ["Shared transformation direction", "Reduced solution fragmentation", "Reusable architecture guidance"],
    pathway: ["Map", "Standardise", "Connect", "Scale"],
    industries: ["Agriculture", "Government", "Financial Services"],
    status: "Approved framework",
    disclaimer: null,
  },
  {
    icon: ShieldCheck,
    slug: "national-security-response",
    title: "National Security & Response",
    category: "Mission-Critical Platforms",
    challenge: "Supporting coordinated decision-making in complex, high-assurance operational environments.",
    overview: "A strategic platform proposition demonstrating REIS capability in resilient architecture, trusted information flows and multi-agency operating models.",
    capabilities: ["Mission architecture", "Secure integration", "Information strategy", "Resilience and assurance"],
    outcomes: ["Stronger coordination", "Improved operational awareness", "Resilient transformation foundations"],
    pathway: ["Observe", "Coordinate", "Respond", "Learn"],
    industries: ["Government", "Defence", "Security"],
    status: "Strategic proposition",
    disclaimer: null,
  },
  {
    icon: Database,
    slug: "reis-financials",
    title: "REIS Financials",
    category: "HMRC MTD Integration",
    challenge: "Helping organisations navigate regulated digital tax workflows with stronger consistency, control and auditability.",
    overview: "A financial-platform integration initiative demonstrating how REIS engineers secure connections to regulated services and supports structured VAT reporting journeys.",
    capabilities: ["Regulated API integration", "Secure authorisation", "Workflow validation", "Audit-ready engineering"],
    outcomes: ["More controlled reporting journeys", "Improved validation and traceability", "A foundation for compliant digital services"],
    pathway: ["Connect", "Prepare", "Validate", "Report"],
    industries: ["Enterprise", "Financial Services", "Professional Services"],
    status: "Development and sandbox validation",
    disclaimer: "REIS Financials is an independent REIS initiative. It is not an HMRC product and its inclusion does not imply HMRC endorsement or production approval.",
  },
  {
    icon: Landmark,
    slug: "governance-transformation",
    title: "Governance Transformation",
    category: "Risk & Compliance",
    challenge: "Embedding policy, compliance, risk and accountability into digital transformation so institutions stay controlled, auditable and trusted.",
    overview: "A governance-led transformation proposition that aligns people, process, technology and assurance around institutional outcomes.",
    capabilities: ["Policy & control design", "Risk & compliance architecture", "Auditability & traceability", "Governance operating model"],
    outcomes: ["Clearer accountability", "Reduced compliance friction", "Trusted transformation"],
    pathway: ["Assess", "Design", "Assure", "Evolve"],
    industries: ["Government", "Enterprise", "Financial Services"],
    status: "Advisory proposition",
    disclaimer: null,
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
  ["NaijaResolve", true, false, false, false, true],
  ["Justice Transformation", true, false, true, false, false],
  ["Digital Agriculture Architecture", true, false, false, true, true],
  ["National Security & Response", true, true, true, false, true],
  ["REIS Financials", false, false, false, false, true],
  ["Governance Transformation", true, false, false, false, true],
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
    <main id="top" className="reis-site min-h-screen overflow-x-hidden">
      <GlobalHeader active="/solutions" />

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
          <SectionHeading eyebrow="Capability showcase" title="Selected work. Carefully presented." text="Explore concise public previews of how REIS applies research, architecture, engineering and governance to demanding transformation challenges." />
          <div className="mt-8 flex max-w-4xl items-start gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/[.06] p-5">
            <ShieldCheck className="reis-index mt-0.5 shrink-0" size={21} />
            <div><p className="font-semibold">Capability without over-disclosure</p><p className="mt-1 text-sm leading-6 opacity-65">These public snapshots demonstrate our approach and outcomes. Detailed architectures, security controls, implementation methods and proprietary materials remain protected.</p></div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <Link
                key={solution.title}
                to="/solutions/$slug"
                params={{ slug: solution.slug }}
                className="reis-panel group overflow-hidden rounded-3xl border text-left"
                aria-label={`View ${solution.title} capability page`}
              >
                <div className="about-figure-preview relative min-h-[230px] p-7">
                  <div className="absolute right-7 top-7 text-xs font-bold opacity-45">0{index + 1}</div>
                  <div className="reis-small-icon grid h-13 w-13 place-items-center rounded-2xl"><solution.icon size={25} /></div>
                  <p className="reis-eyebrow mt-9 text-xs font-bold uppercase tracking-[0.2em]">{solution.category}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">{solution.title}</h2>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold reis-card-link">View capability page <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></div>
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-50">Challenge</p>
                  <p className="mt-3 leading-7 opacity-75">{solution.challenge}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{solution.industries.map((item) => <span key={item} className="about-tag rounded-full px-3 py-1 text-xs font-semibold">{item}</span>)}</div>
                </div>
              </Link>
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
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center"><p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">Engineering solutions built to last</p><h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Discuss your transformation initiative.</h2><p className="mt-6 max-w-2xl text-lg leading-8 opacity-75">REIS delivers research-led engineering that creates secure, scalable and sustainable digital transformation.</p><a href="mailto:info@reis-global.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">Start a conversation <ArrowRight size={18} /></a></div>
      </section>

      <GlobalFooter />
    </main>
  );
}


function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{title}</h2><p className="mt-6 text-lg leading-8 opacity-65">{text}</p></div>;
}

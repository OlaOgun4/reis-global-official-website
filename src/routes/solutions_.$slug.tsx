import { SiteFooter as GlobalFooter, SiteHeader as GlobalHeader } from "../components/site-navigation";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BrainCircuit, Check, Menu, Network, ShieldCheck, Sparkles, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/solutions_/$slug")({
  head: ({ params }) => {
    const showcase = showcases[params.slug as keyof typeof showcases];
    const title = showcase ? `${showcase.title} | REIS Global` : "Capability Showcase | REIS Global";
    const description = showcase?.challenge ?? "Explore a public, high-level view of REIS Global engineering capability.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        ...(showcase ? [{ property: "og:image", content: `https://reis-global.com${showcase.image}` }] : []),
      ],
      links: [{ rel: "canonical", href: `https://reis-global.com/solutions/${params.slug}` }],
    };
  },
  component: SolutionShowcasePage,
});

const showcases = {
  govvisit: {
    title: "GovVisit",
    category: "Secure Operations",
    status: "Demonstrator",
    image: "/images/projects/govvisit.webp",
    challenge: "Modernising visitor operations while strengthening control, accountability and service quality.",
    response: "A secure visitor-management concept demonstrating how connected digital journeys can improve reception, oversight and operational confidence.",
    capabilities: ["Digital service design", "Identity-enabled workflows", "Operational governance", "Management insight"],
    outcomes: ["More consistent visitor journeys", "Stronger operational oversight", "Improved accountability"],
    pathway: ["Arrive", "Verify", "Connect", "Assure"],
    industries: ["Government", "Defence", "Enterprise"],
  },
  "farm-naturale": {
    title: "Farm Naturale",
    category: "Digital Agriculture",
    status: "Demonstrator",
    image: "/images/projects/farm-naturale.webp",
    challenge: "Connecting fragmented agricultural knowledge, services and market opportunities.",
    response: "An integrated agriculture concept showing how learning, advisory support and commercial participation can be brought into one coherent experience.",
    capabilities: ["Platform strategy", "Digital learning", "Ecosystem design", "Data-informed services"],
    outcomes: ["Clearer access to support", "Connected participant journeys", "Scalable service foundations"],
    pathway: ["Learn", "Grow", "Participate", "Improve"],
    industries: ["Agriculture", "Education", "Commerce"],
  },
  naijaresolve: {
    title: "NaijaResolve",
    category: "Citizen Services",
    status: "Concept development",
    image: "/images/projects/naijaresolve.webp",
    challenge: "Helping people navigate everyday public-service problems through clear, trusted digital pathways.",
    response: "A research-led service concept exploring how structured guidance and responsible digital support can improve problem resolution.",
    capabilities: ["Service discovery", "Citizen-centred design", "Responsible AI", "Governance by design"],
    outcomes: ["Simpler service navigation", "More consistent guidance", "Evidence-led service improvement"],
    pathway: ["Describe", "Understand", "Guide", "Resolve"],
    industries: ["Government", "Public Services", "Communities"],
  },
  "justice-transformation": {
    title: "National Justice Transformation",
    category: "Institutional Transformation",
    status: "Executive proposition",
    image: "/images/projects/justice-transformation.webp",
    challenge: "Addressing fragmented processes and limited end-to-end visibility across complex justice environments.",
    response: "A transformation proposition demonstrating how research, operating-model design and governance can align institutions around shared outcomes.",
    capabilities: ["Enterprise architecture", "Operating-model design", "Transformation governance", "Executive decision support"],
    outcomes: ["Clearer institutional alignment", "Improved decision visibility", "Stronger transformation governance"],
    pathway: ["Understand", "Align", "Govern", "Transform"],
    industries: ["Justice", "Government", "Corrections"],
  },
  "digital-agriculture-architecture": {
    title: "Digital Agriculture Architecture",
    category: "Reference Architecture",
    status: "Approved framework",
    image: "/images/projects/digital-agriculture-architecture.webp",
    challenge: "Creating a shared direction for diverse agricultural participants, services and digital investments.",
    response: "A vendor-neutral reference approach showing how architecture and governance can support connected, scalable agricultural ecosystems.",
    capabilities: ["Reference architecture", "Capability modelling", "Interoperability strategy", "Platform governance"],
    outcomes: ["Shared transformation direction", "Reduced solution fragmentation", "Reusable architecture guidance"],
    pathway: ["Map", "Standardise", "Connect", "Scale"],
    industries: ["Agriculture", "Government", "Financial Services"],
  },
  "national-security-response": {
    title: "National Security & Response",
    category: "Mission-Critical Platforms",
    status: "Strategic proposition",
    image: "/images/projects/national-security-response.webp",
    challenge: "Supporting coordinated decision-making in complex, high-assurance operational environments.",
    response: "A strategic platform proposition demonstrating REIS capability in resilient architecture, trusted information flows and multi-agency operating models.",
    capabilities: ["Mission architecture", "Secure integration", "Information strategy", "Resilience and assurance"],
    outcomes: ["Stronger coordination", "Improved operational awareness", "Resilient transformation foundations"],
    pathway: ["Observe", "Coordinate", "Respond", "Learn"],
    industries: ["Government", "Defence", "Security"],
  },
  "reis-financials": {
    title: "REIS Financials",
    category: "HMRC MTD Integration",
    status: "Development and sandbox validation",
    image: "/images/projects/reis-financials.webp",
    challenge: "Helping organisations navigate regulated digital tax workflows with stronger consistency, control and auditability.",
    response: "A financial-platform integration initiative demonstrating how REIS engineers secure connections to regulated services and supports structured VAT reporting journeys.",
    capabilities: ["Regulated API integration", "Secure authorisation", "Workflow validation", "Audit-ready engineering"],
    outcomes: ["More controlled reporting journeys", "Improved validation and traceability", "A foundation for compliant digital services"],
    pathway: ["Connect", "Prepare", "Validate", "Report"],
    industries: ["Enterprise", "Financial Services", "Professional Services"],
    disclaimer: "REIS Financials is an independent REIS initiative. It is not an HMRC product and its inclusion does not imply HMRC endorsement or production approval.",
  },
} as const;

function SolutionShowcasePage() {
  const { slug } = Route.useParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const showcase = showcases[slug as keyof typeof showcases];

  if (!showcase) {
    return <main id="top" className="reis-site grid min-h-screen place-items-center px-6 text-center"><div><h1 className="text-4xl font-bold">Capability page not found</h1><a href="/solutions" className="reis-primary-button mt-7 inline-flex rounded-lg px-6 py-3 font-semibold">Return to solutions</a></div></main>;
  }

  return (
    <main id="top" className="reis-site min-h-screen overflow-x-hidden">
      <GlobalHeader active="/solutions" />

      <section className="reis-showcase-hero relative isolate min-h-[500px] overflow-hidden pt-20 text-white sm:min-h-[420px] lg:min-h-[320px]">
        <div className="reis-showcase-image absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${showcase.image})` }} aria-hidden="true" />
        <div className="reis-showcase-overlay absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[420px] max-w-[1440px] items-center gap-6 px-6 py-8 sm:min-h-[340px] lg:min-h-[240px] lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-5">
          <div>
            <a href="/solutions" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-[#55c5ff]"><ArrowLeft size={16} /> All capabilities</a>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#55c5ff]">{showcase.category}</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-4xl xl:text-5xl">{showcase.title}</h1>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-white/80">{showcase.challenge}</p>
            <div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full border border-cyan-300/25 bg-blue-500/15 px-3 py-1.5 text-xs font-semibold text-cyan-100">{showcase.status}</span>{showcase.industries.map((industry) => <span key={industry} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80">{industry}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div>
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">REIS response</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Capability applied with purpose.</h2>
            <p className="mt-6 text-lg leading-8 opacity-70">{showcase.response}</p>
            {"disclaimer" in showcase && <p className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-500/[.06] p-5 text-sm leading-6 opacity-70">{showcase.disclaimer}</p>}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">{showcase.capabilities.map((item) => <div key={item} className="reis-panel rounded-2xl border p-5"><div className="reis-small-icon grid h-10 w-10 place-items-center rounded-xl"><Check size={18} /></div><p className="mt-4 font-semibold">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="reis-dark-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Illustrative pathway</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">A clear view of the transformation journey.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">{showcase.pathway.map((step, index) => { const icons = [BrainCircuit, Network, Sparkles, ShieldCheck] as const; const Icon = icons[index] ?? BrainCircuit; return <div key={step} className="reis-solution-card relative rounded-2xl border p-6"><div className="flex items-center justify-between"><div className="reis-solution-icon grid h-11 w-11 place-items-center rounded-xl"><Icon size={21} /></div><span className="text-xs opacity-35">0{index + 1}</span></div><h3 className="mt-7 text-xl font-semibold">{step}</h3>{index < showcase.pathway.length - 1 && <ArrowRight className="reis-index absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block" size={18} />}</div>; })}</div>
          <p className="mt-5 text-sm text-white/55">Illustrative only. This is not a system architecture or implementation design.</p>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-10">
          <div><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Potential value</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Outcomes that matter.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">{showcase.outcomes.map((item) => <div key={item} className="reis-panel rounded-2xl border p-6"><Check className="reis-index" size={21} /><p className="mt-5 font-semibold leading-7">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="reis-cta-section px-6 py-24 lg:px-10"><div className="mx-auto flex max-w-5xl flex-col items-center text-center"><p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">Explore the opportunity</p><h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Discuss this capability with REIS.</h2><p className="mt-6 max-w-2xl text-lg leading-8 opacity-75">Detailed engineering materials are shared only through an appropriate engagement and disclosure process.</p><a href="mailto:info@reis-global.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">Start a conversation <ArrowRight size={18} /></a></div></section>

      <GlobalFooter />
    </main>
  );
}

function ReisMark() {
  return <div className="relative h-11 w-11" aria-hidden="true"><span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" /><span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" /><span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" /></div>;
}

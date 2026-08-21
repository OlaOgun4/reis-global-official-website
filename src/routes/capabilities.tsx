import { ReisMark } from "../components/reis-mark";
import { SiteFooter as GlobalFooter, SiteHeader as GlobalHeader } from "../components/site-navigation";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  Cloud,
  Code2,
  Database,
  Landmark,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities | REIS Global" },
      {
        name: "description",
        content:
          "Explore REIS Global capabilities in enterprise architecture, AI, software, platforms, cloud, data, cybersecurity and digital transformation.",
      },
      { property: "og:title", content: "REIS Global Capabilities" },
      {
        property: "og:description",
        content: "Research-led engineering capability for secure, scalable and intelligent transformation.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CapabilitiesPage,
});

const capabilityDomains = [
  {
    icon: Layers3,
    title: "Enterprise Architecture",
    summary:
      "Architecture that connects strategy, operating models, information, applications and technology investment.",
    competencies: ["Business architecture", "Solution architecture", "Reference architectures"],
    deliverables: "Roadmaps, target architectures, capability models and governance structures.",
    evidence: "DAPRA and national-platform architecture models",
  },
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    summary:
      "Responsible AI systems designed for operational use, governance, explainability and measurable institutional value.",
    competencies: ["AI governance", "Computer vision and OCR", "Intelligent automation"],
    deliverables: "AI architecture, controls, implementation patterns and operational assurance.",
    evidence: "RAIEDS and GovVisit identity-processing architecture",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    summary:
      "Maintainable web and mobile software engineered around quality, security, traceability and long-term evolution.",
    competencies: ["Web and mobile delivery", "API engineering", "Quality engineering"],
    deliverables: "Production applications, APIs, test assets and technical documentation.",
    evidence: "GovVisit and Farm Naturale platforms",
  },
  {
    icon: Network,
    title: "Platform Engineering",
    summary:
      "Reusable platform foundations that standardise delivery, integration, observability and operational resilience.",
    competencies: ["Platform architecture", "DevSecOps", "Observability and reliability"],
    deliverables: "Platform blueprints, pipelines, service foundations and operational controls.",
    evidence: "REIS AI engineering and delivery patterns",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    summary: "Secure cloud environments and deployment models designed for scale, continuity and controlled change.",
    competencies: ["Cloud-native architecture", "CI/CD", "Infrastructure and integration"],
    deliverables: "Cloud landing patterns, deployment pipelines, environments and integration services.",
    evidence: "Cloudflare, GitHub and Supabase delivery architecture",
  },
  {
    icon: Database,
    title: "Data Engineering",
    summary:
      "Trusted data foundations that enable interoperability, analytics, governance and evidence-based decisions.",
    competencies: ["Data architecture", "Integration pipelines", "Analytics foundations"],
    deliverables: "Data models, integration flows, governance controls and analytical platforms.",
    evidence: "Digital agriculture and national-data architecture work",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    summary:
      "Security engineered into architecture, software, identity, infrastructure and operational processes from inception.",
    competencies: ["Security architecture", "Identity and access", "Audit and assurance"],
    deliverables: "Security models, RBAC, controls, threat treatments and compliance evidence.",
    evidence: "GovVisit RBAC, audit and secure OCR design",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    summary: "Research, service redesign, architecture and delivery combined into coherent transformation programmes.",
    competencies: ["Transformation strategy", "Service redesign", "Programme architecture"],
    deliverables: "Transformation roadmaps, operating models, implementation plans and benefit measures.",
    evidence: "Justice, government and agriculture transformation frameworks",
  },
] as const;

const lifecycle = [
  ["01", "Research", "Understand the mission, evidence and operating context."],
  ["02", "Architecture", "Define the target state, controls and design decisions."],
  ["03", "Engineering", "Build the platform, integration and delivery foundations."],
  ["04", "Validation", "Verify quality, security, usability and traceability."],
  ["05", "Deployment", "Release through controlled environments and governance."],
  ["06", "Improvement", "Measure, learn and evolve the operating solution."],
] as const;

const matrix = [
  ["Enterprise Architecture", true, true, true, true, true],
  ["AI Engineering", true, true, true, true, true],
  ["Software Engineering", true, true, true, true, true],
  ["Platform Engineering", true, true, true, true, true],
  ["Cloud Engineering", true, true, true, true, true],
  ["Data Engineering", true, true, true, true, true],
  ["Cybersecurity", true, true, true, true, true],
  ["Digital Transformation", true, true, true, true, true],
] as const;

const practice = [
  ["GovVisit", "Secure visitor operations, identity processing, OCR, RBAC and auditability."],
  ["Farm Naturale", "A digital agriculture ecosystem spanning learning, commerce, finance and support."],
  ["Justice Transformation", "Institutional process redesign, decision pathways and implementation governance."],
  ["RAIEDS", "A reusable standard for AI-assisted engineering, security, governance and delivery."],
] as const;

function CapabilitiesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main id="top" className="reis-site min-h-screen overflow-x-hidden">
      <GlobalHeader active="/capabilities" />

      <section className="reis-hero relative isolate overflow-hidden pt-20">
        <div className="reis-grid absolute inset-0" />
        <div className="reis-stars absolute inset-0" />
        <div className="reis-blue-glow absolute -right-56 top-10 h-[38rem] w-[38rem] rounded-full blur-[130px]" />
        <div className="relative mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div className="z-10 max-w-3xl">
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.25em]">REIS capabilities</p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
              Engineering capability built for <span className="reis-accent-text">complex transformation.</span>
            </h1>
            <p className="reis-hero-copy mt-7 max-w-2xl text-lg leading-8 sm:text-xl">
              REIS combines research, architecture and engineering to design secure, scalable and intelligent digital
              platforms that enable meaningful transformation.
            </p>
          </div>
          <CapabilityConstellation />
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Capability domains"
            title="Eight disciplines. One integrated engineering model."
            text="Each capability can be applied independently, but the greatest value comes from combining them around a clear institutional mission."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {capabilityDomains.map(({ icon: Icon, title, summary, competencies, deliverables, evidence }, index) => (
              <article key={title} className="reis-panel rounded-2xl border p-7">
                <div className="flex items-start justify-between gap-5">
                  <div className="reis-small-icon grid h-12 w-12 shrink-0 place-items-center rounded-xl">
                    <Icon size={24} />
                  </div>
                  <span className="reis-index text-xs font-bold">0{index + 1}</span>
                </div>
                <h2 className="mt-7 text-2xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 opacity-70">{summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {competencies.map((item) => (
                    <span key={item} className="reis-tag rounded-full px-3 py-1.5 text-xs font-semibold">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 border-t border-current/10 pt-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] opacity-45">Typical deliverables</p>
                    <p className="mt-2 text-sm leading-6 opacity-70">{deliverables}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] opacity-45">REIS evidence</p>
                    <p className="mt-2 text-sm leading-6 opacity-70">{evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-research-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Delivery methodology"
            title="From research to continuous improvement"
            text="A controlled lifecycle connects institutional purpose to architecture, implementation, assurance and measurable operational outcomes."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {lifecycle.map(([number, title, text]) => (
              <article key={title} className="reis-panel rounded-2xl border p-5">
                <span className="reis-index text-xs font-bold">{number}</span>
                <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 opacity-65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Capability matrix"
            title="Engineering applied across priority sectors"
            text="The same governed capability model is adapted to the operating, regulatory and mission context of each sector."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border reis-panel">
            <table className="min-w-[880px] w-full text-left text-sm">
              <thead className="border-b border-current/10">
                <tr>
                  <th className="px-6 py-5">Capability</th>
                  {["Government", "Enterprise", "Defence", "Agriculture", "Justice"].map((sector) => (
                    <th key={sector} className="px-5 py-5 text-center">
                      {sector}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map(([name, ...checks]) => (
                  <tr key={name} className="border-b border-current/10 last:border-0">
                    <td className="px-6 py-4 font-semibold">{name}</td>
                    {checks.map((enabled, index) => (
                      <td key={`${name}-${index}`} className="px-5 py-4 text-center">
                        {enabled && (
                          <span className="reis-check mx-auto grid h-7 w-7 place-items-center rounded-full">
                            <Check size={14} />
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="reis-dark-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeading
            eyebrow="Engineering in practice"
            title="Capability demonstrated through real programmes"
            text="REIS work provides practical evidence of architecture, engineering, governance and transformation capability."
            dark
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {practice.map(([title, text], index) => (
              <article key={title} className="reis-solution-card rounded-2xl border p-6">
                <span className="text-xs opacity-40">0{index + 1}</span>
                <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 opacity-70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reis-cta-section px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">REIS engineering</p>
          <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">
            Engineering confidence through research, architecture and delivery.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-75">
            Discuss the capability combination required for your transformation agenda.
          </p>
          <a
            href="mailto:info@reis-global.com"
            className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold"
          >
            Start a conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <GlobalFooter />
    </main>
  );
}

function CapabilityConstellation() {
  const nodes = [
    [Layers3, "Architecture", "left-[6%] top-[18%]"],
    [BrainCircuit, "AI", "right-[8%] top-[13%]"],
    [Cloud, "Cloud", "left-[2%] bottom-[20%]"],
    [ShieldCheck, "Security", "right-[4%] bottom-[18%]"],
    [Database, "Data", "left-[35%] bottom-[2%]"],
  ] as const;
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[560px]">
      <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#2caeff]/40 bg-[#082651]/75 shadow-[0_0_80px_rgba(0,120,255,.35)] backdrop-blur-xl">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">REIS</div>
          <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#5ed1ff]">Engineering Core</div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2caeff]/20" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2caeff]/10" />
      {nodes.map(([Icon, label, position]) => (
        <div
          key={label}
          className={`absolute ${position} reis-panel flex items-center gap-3 rounded-xl border px-4 py-3`}
        >
          <div className="reis-small-icon grid h-9 w-9 place-items-center rounded-lg">
            <Icon size={18} />
          </div>
          <span className="text-sm font-semibold">{label}</span>
        </div>
      ))}
    </div>
  );
}


function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p>
      <h2 className={`mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl ${dark ? "text-white" : ""}`}>{title}</h2>
      <p className={`mt-6 text-lg leading-8 ${dark ? "text-white/65" : "opacity-65"}`}>{text}</p>
    </div>
  );
}

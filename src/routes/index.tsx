import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  CloudCog,
  Database,
  Globe2,
  Landmark,
  Layers3,
  Leaf,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REIS Global | Research, Engineering, Innovation & Solutions" },
      {
        name: "description",
        content:
          "REIS Global designs and delivers secure, intelligent digital platforms for governments, enterprises and communities.",
      },
      {
        property: "og:title",
        content: "REIS Global | Engineering Intelligent Transformation",
      },
      {
        property: "og:description",
        content:
          "Research-led engineering, innovation and digital solutions for governments, enterprises and communities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capabilities = [
  {
    icon: Layers3,
    title: "Enterprise Architecture",
    description:
      "Strategy-to-execution architecture that aligns operating models, platforms, data and technology investment.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Responsible AI, intelligent automation, computer vision and decision-support solutions built for real operations.",
  },
  {
    icon: Network,
    title: "Platform Engineering",
    description:
      "Secure, scalable web, mobile and national-scale platforms engineered for resilience and long-term evolution.",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description:
      "Transformation roadmaps, service redesign and execution frameworks that convert ambition into measurable outcomes.",
  },
  {
    icon: CloudCog,
    title: "Cloud & Integration",
    description:
      "Cloud-native delivery, DevSecOps, APIs and systems integration connecting complex enterprise ecosystems.",
  },
  {
    icon: Database,
    title: "Data, Security & Governance",
    description:
      "Trusted data foundations, cyber resilience, auditability and governance embedded into every solution.",
  },
];

const solutions = [
  {
    label: "Government Operations",
    title: "GovVisit",
    description:
      "An intelligent visitor management platform for secure government and enterprise facilities.",
    icon: Landmark,
  },
  {
    label: "Digital Agriculture",
    title: "Farm Naturale",
    description:
      "An integrated agri-platform combining learning, commerce, finance and farmer enablement.",
    icon: Leaf,
  },
  {
    label: "National Transformation",
    title: "Justice & Security Platforms",
    description:
      "Architecture-led platforms that strengthen institutions, interoperability and national outcomes.",
    icon: ShieldCheck,
  },
];

const industries = [
  "Government & Public Sector",
  "Defence & Security",
  "Agriculture",
  "Justice",
  "Enterprise & Commercial",
  "Education & Knowledge",
];

const principles = [
  "Secure by design",
  "Architecture-led",
  "AI-ready",
  "Cloud-enabled",
  "Governance embedded",
  "Built for scale",
];

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f8f7] text-[#12221c]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07150f]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="REIS Global home">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#42d392] font-bold text-[#07150f] shadow-[0_0_30px_rgba(66,211,146,0.25)]">
              R
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.08em]">REIS GLOBAL</div>
              <div className="text-[9px] uppercase tracking-[0.26em] text-white/55">
                Research · Engineering · Innovation · Solutions
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#capabilities">Capabilities</a>
            <a className="transition hover:text-white" href="#solutions">Solutions</a>
            <a className="transition hover:text-white" href="#industries">Industries</a>
            <a className="transition hover:text-white" href="#research">Research</a>
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#42d392] px-5 py-2.5 text-sm font-semibold text-[#07150f] transition hover:-translate-y-0.5 hover:bg-[#62e3a8] lg:inline-flex"
          >
            Start a conversation <ArrowRight size={16} />
          </a>

          <button
            type="button"
            className="rounded-lg border border-white/15 p-2 lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#07150f] px-6 py-6 lg:hidden">
            <nav className="flex flex-col gap-4 text-white/80">
              {["about", "capabilities", "solutions", "industries", "research", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="capitalize"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate min-h-[92vh] overflow-hidden bg-[#07150f] pt-20 text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[#1c8c64]/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#d7b36a]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#42d392]/30 bg-[#42d392]/10 px-4 py-2 text-sm text-[#8cf1bd]">
              <Globe2 size={15} /> Research-led. Engineering-driven. Outcome-focused.
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Engineering intelligent <span className="text-[#42d392]">transformation.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              REIS Global designs, engineers and delivers secure digital platforms that help governments, enterprises and communities solve complex problems and create lasting value.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#capabilities" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#42d392] px-7 py-4 font-semibold text-[#07150f] transition hover:-translate-y-0.5 hover:bg-[#62e3a8]">
                Explore our capabilities <ArrowRight size={18} />
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                View our solutions <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-[2.5rem] bg-[#42d392]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[#8cf1bd]">REIS operating model</div>
                  <div className="mt-2 text-2xl font-semibold">From insight to impact</div>
                </div>
                <div className="h-3 w-3 rounded-full bg-[#42d392] shadow-[0_0_18px_#42d392]" />
              </div>
              <div className="space-y-3">
                {["Research", "Engineering", "Innovation", "Solutions"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#42d392]/15 text-sm font-bold text-[#8cf1bd]">0{index + 1}</div>
                    <div className="flex-1">
                      <div className="font-medium">{item}</div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#42d392] to-[#d7b36a]" style={{ width: `${92 - index * 8}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <Metric value="Secure" label="by design" />
                <Metric value="Scalable" label="by default" />
                <Metric value="Trusted" label="by governance" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-[#dfe7e2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4 lg:px-8">
          {[
            ["Research-led", "Evidence, insight and domain depth"],
            ["Engineering-driven", "Architecture and delivery excellence"],
            ["Innovation-focused", "Practical emerging technology"],
            ["Outcome-oriented", "Measurable institutional value"],
          ].map(([title, text], index) => (
            <div key={title} className="flex gap-4 md:border-r md:border-[#dfe7e2] md:pr-6 last:border-0">
              <span className="pt-1 text-xs font-bold text-[#18865e]">0{index + 1}</span>
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-[#617069]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="What we do" title="Capabilities built for complex transformation" description="We combine strategic advisory, deep engineering and disciplined delivery to address the full lifecycle of digital transformation." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="group rounded-[1.75rem] border border-[#dbe5df] bg-white p-7 shadow-[0_12px_50px_rgba(17,42,31,0.04)] transition hover:-translate-y-1 hover:border-[#42d392] hover:shadow-[0_18px_60px_rgba(17,42,31,0.09)]">
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e4f8ee] text-[#18865e]"><Icon size={23} /></div>
                <span className="text-xs text-[#8b9992]">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-[#617069]">{description}</p>
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#18865e] opacity-80 transition group-hover:gap-3 group-hover:opacity-100">Explore capability <ArrowRight size={15} /></div>
            </article>
          ))}
        </div>
      </section>

      <section id="solutions" className="bg-[#0b1d15] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading dark eyebrow="Our solutions" title="Platforms designed around real-world missions" description="REIS solutions combine domain knowledge, secure architecture and modern engineering to improve services, institutions and livelihoods." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {solutions.map(({ label, title, description, icon: Icon }, index) => (
              <article key={title} className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-8">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#42d392]/10 blur-2xl transition group-hover:bg-[#42d392]/20" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#42d392]/15 text-[#8cf1bd]"><Icon /></div>
                    <span className="text-sm text-white/35">0{index + 1}</span>
                  </div>
                  <div className="mt-auto pt-20">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8cf1bd]">{label}</p>
                    <h3 className="mt-3 text-3xl font-semibold">{title}</h3>
                    <p className="mt-4 leading-7 text-white/60">{description}</p>
                    <div className="mt-7 inline-flex items-center gap-2 font-semibold">Discover the platform <ArrowRight size={17} /></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#18865e]">Industry focus</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Domain depth where it matters most.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#617069]">We work where digital transformation has direct consequences for public value, institutional resilience, economic opportunity and citizen experience.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <div key={industry} className="flex items-center justify-between rounded-2xl border border-[#dfe7e2] bg-[#f8faf9] px-5 py-5 transition hover:border-[#42d392] hover:bg-[#f0fbf5]">
                <div className="flex items-center gap-4"><span className="text-xs font-bold text-[#18865e]">0{index + 1}</span><span className="font-medium">{industry}</span></div>
                <ChevronRight size={17} className="text-[#809087]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#dff5e9]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#18865e]">Research & innovation</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Knowledge that becomes infrastructure.</h2>
              <p className="mt-6 text-lg leading-8 text-[#4c6559]">Our research, standards and reference architectures translate emerging ideas into practical frameworks for building secure, governable and sustainable digital systems.</p>
              <div className="mt-8 space-y-4">
                {["Reference architectures", "Engineering standards", "Transformation frameworks", "Applied AI research"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><div className="grid h-6 w-6 place-items-center rounded-full bg-[#18865e] text-white"><Check size={14} /></div><span className="font-medium">{item}</span></div>
                ))}
              </div>
              <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-semibold text-[#126a4a]">Explore REIS insights <ArrowRight size={17} /></a>
            </div>
            <div className="relative min-h-[460px] overflow-hidden bg-[#10271d] p-8 text-white sm:p-12">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(66,211,146,.45)_0,transparent_2px)] [background-size:28px_28px]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex justify-end"><div className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/55">REIS Knowledge System</div></div>
                <div className="relative mx-auto grid h-64 w-64 place-items-center rounded-full border border-[#42d392]/25">
                  <div className="absolute inset-8 rounded-full border border-[#42d392]/30" />
                  <div className="absolute inset-16 rounded-full border border-[#d7b36a]/40" />
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-[#42d392] text-2xl font-bold text-[#07150f] shadow-[0_0_60px_rgba(66,211,146,.35)]">REIS</div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-xs text-white/50"><span>Research</span><span>Standards</span><span>Innovation</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#18865e]">How we deliver</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Confidence engineered into every layer.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center gap-3 rounded-xl bg-[#f3f7f5] px-4 py-4"><ShieldCheck size={19} className="text-[#18865e]" /><span className="font-medium">{principle}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#d7b36a] px-6 py-24 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#5d491f]">What comes next?</p>
          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-[#102018] sm:text-6xl">Let’s engineer what comes next.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f4429]">Talk to REIS Global about your transformation agenda, digital platform, research initiative or complex engineering challenge.</p>
          <a href="mailto:hello@reis-global.com" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#102018] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#193226]">Start a conversation <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer className="bg-[#07150f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#42d392] font-bold text-[#07150f]">R</div><span className="text-xl font-semibold tracking-[0.08em]">REIS GLOBAL</span></div>
              <p className="mt-5 max-w-md leading-7 text-white/55">Research, engineering, innovation and solutions for governments, enterprises and communities.</p>
            </div>
            <div><h3 className="font-semibold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm text-white/55"><a href="#capabilities">Capabilities</a><a href="#solutions">Solutions</a><a href="#industries">Industries</a><a href="#research">Research</a></div></div>
            <div><h3 className="font-semibold">Contact</h3><div className="mt-4 flex flex-col gap-3 text-sm text-white/55"><a href="mailto:hello@reis-global.com">hello@reis-global.com</a><span>United Kingdom</span><span>Serving clients globally</span></div></div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 REIS Global Ltd. All rights reserved.</span><span>Research · Engineering · Innovation · Solutions</span></div>
        </div>
      </footer>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3"><div className="text-sm font-semibold text-[#8cf1bd]">{value}</div><div className="mt-1 text-[10px] text-white/40">{label}</div></div>;
}

function SectionHeading({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description: string; dark?: boolean }) {
  return <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42b982]">{eyebrow}</p><h2 className={`mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl ${dark ? "text-white" : "text-[#12221c]"}`}>{title}</h2><p className={`mt-6 text-lg leading-8 ${dark ? "text-white/60" : "text-[#617069]"}`}>{description}</p></div>;
}

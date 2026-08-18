import { SiteFooter as GlobalFooter, SiteHeader as GlobalHeader } from "../components/site-navigation";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact REIS Global | Start a Conversation" },
      {
        name: "description",
        content:
          "Contact REIS Global to discuss digital transformation, engineering, research, partnerships and platform delivery.",
      },
      { property: "og:title", content: "Contact REIS Global" },
      {
        property: "og:description",
        content:
          "Start a conversation with REIS Global about research, engineering, innovation and digital solutions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

const engagementPaths = [
  {
    icon: Building2,
    title: "Transformation initiatives",
    text: "Discuss enterprise, government or national-scale digital transformation programmes.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    text: "Explore delivery partnerships, strategic alliances and co-development opportunities.",
  },
  {
    icon: Users,
    title: "Research collaboration",
    text: "Collaborate on standards, reference architectures, frameworks and applied research.",
  },
  {
    icon: MessageSquare,
    title: "General enquiries",
    text: "Contact REIS Global for company, media, supplier or stakeholder enquiries.",
  },
] as const;

function ContactPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="top" className="reis-site min-h-screen overflow-x-hidden">
      <GlobalHeader active="/contact" />

      <section className="reis-hero relative isolate overflow-hidden pt-20">
        <div className="reis-grid absolute inset-0" />
        <div className="reis-stars absolute inset-0" />
        <div className="reis-blue-glow absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full blur-[130px]" />
        <div className="relative mx-auto grid min-h-[660px] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="z-10 max-w-2xl">
            <a href="/" className="reis-card-link inline-flex items-center gap-2 text-sm font-semibold"><ArrowLeft size={16} /> Back to home</a>
            <p className="reis-eyebrow mt-8 text-sm font-bold uppercase tracking-[0.24em]">Contact REIS Global</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
              Let’s engineer what comes <span className="reis-accent-text">next.</span>
            </h1>
            <p className="reis-hero-copy mt-7 max-w-xl text-lg leading-8 sm:text-xl">
              Start a conversation about your transformation agenda, research initiative, digital platform or complex engineering challenge.
            </p>
          </div>

          <div className="reis-panel rounded-[2rem] border p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <ContactTile icon={Mail} title="Email" text="info@reis-global.com" href="mailto:info@reis-global.com" />
              <ContactTile icon={MapPin} title="Primary location" text="United Kingdom" />
              <ContactTile icon={Globe2} title="Market focus" text="United Kingdom, Africa and international markets" />
              <ContactTile icon={ShieldCheck} title="Engagement model" text="Secure, structured and outcome-focused" />
            </div>
          </div>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <SectionHeader eyebrow="How we can engage" title="Choose the right starting point" text="Whether you are exploring a transformation programme, partnership or research collaboration, REIS will route your enquiry to the right conversation." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {engagementPaths.map(({ icon: Icon, title, text }) => (
              <article key={title} className="reis-panel rounded-2xl border p-6">
                <div className="reis-small-icon grid h-12 w-12 place-items-center rounded-xl"><Icon size={23} /></div>
                <h2 className="mt-6 text-xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 opacity-65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="reis-research-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">Business enquiry</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Tell us what you are trying to achieve.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 opacity-65">
              Provide a concise overview of your organisation, challenge and intended outcome. REIS will use this information to determine the most appropriate next step.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Your information is used only to respond to your enquiry.",
                "No sensitive or classified information should be submitted through this form.",
                "Complex engagements may require a structured discovery session.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#159bff]" size={19} />
                  <span className="leading-7 opacity-70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            className="reis-panel rounded-[2rem] border p-7 sm:p-9"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="reis-check grid h-16 w-16 place-items-center rounded-full"><CheckCircle2 size={30} /></div>
                <h3 className="mt-6 text-2xl font-semibold">Enquiry prepared</h3>
                <p className="mt-3 max-w-md leading-7 opacity-65">
                  The Version 1.0 form is currently a front-end demonstration. Please email your enquiry to info@reis-global.com while the production mail service is being configured.
                </p>
                <a href="mailto:info@reis-global.com" className="reis-primary-button mt-7 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold">
                  Email REIS Global <Mail size={17} />
                </a>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="firstName" required />
                <Field label="Last name" name="lastName" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Organisation" name="organisation" required />
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold">Enquiry type</span>
                  <select name="type" className="w-full rounded-xl border bg-transparent px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#159bff]" defaultValue="Transformation initiative">
                    <option>Transformation initiative</option>
                    <option>Partnership</option>
                    <option>Research collaboration</option>
                    <option>General enquiry</option>
                  </select>
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold">How can we help?</span>
                  <textarea name="message" required rows={6} className="w-full resize-y rounded-xl border bg-transparent px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#159bff]" placeholder="Briefly describe your organisation, challenge and desired outcome." />
                </label>
                <button type="submit" className="reis-primary-button sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-semibold">
                  Submit enquiry <Send size={17} />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="reis-section py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 lg:grid-cols-3 lg:px-10">
          <InfoCard icon={Globe2} title="Global outlook" text="Headquartered in the United Kingdom and serving organisations across international markets." />
          <InfoCard icon={Handshake} title="Partnership approach" text="We work collaboratively with public institutions, enterprises, specialists and delivery partners." />
          <InfoCard icon={Phone} title="Structured engagement" text="Initial contact is followed by discovery, qualification and an agreed next-step pathway." />
        </div>
      </section>

      <section className="reis-cta-section px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-70">Research · Engineering · Innovation · Solutions</p>
          <h2 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl">Start the right conversation.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-70">Connect with REIS Global to explore how research-led engineering can support your next transformation initiative.</p>
          <a href="mailto:info@reis-global.com" className="reis-primary-button mt-9 inline-flex items-center gap-2 rounded-lg px-7 py-4 font-semibold">Contact REIS Global <ArrowRight size={18} /></a>
        </div>
      </section>

      <GlobalFooter />
    </main>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input name={name} type={type} required={required} className="w-full rounded-xl border bg-transparent px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#159bff]" />
    </label>
  );
}

function ContactTile({ icon: Icon, title, text, href }: { icon: typeof Mail; title: string; text: string; href?: string }) {
  const content = <><div className="reis-small-icon grid h-11 w-11 place-items-center rounded-xl"><Icon size={21} /></div><div><h2 className="font-semibold">{title}</h2><p className="mt-1 text-sm leading-6 opacity-65">{text}</p></div></>;
  return href ? <a href={href} className="flex gap-4 rounded-2xl border p-4 transition hover:border-[#159bff]">{content}</a> : <div className="flex gap-4 rounded-2xl border p-4">{content}</div>;
}

function InfoCard({ icon: Icon, title, text }: { icon: typeof Mail; title: string; text: string }) {
  return <article className="reis-panel rounded-2xl border p-7"><div className="reis-small-icon grid h-12 w-12 place-items-center rounded-xl"><Icon size={23} /></div><h2 className="mt-6 text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 opacity-65">{text}</p></article>;
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><p className="reis-eyebrow text-sm font-bold uppercase tracking-[0.22em]">{eyebrow}</p><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{title}</h2><p className="mt-6 text-lg leading-8 opacity-65">{text}</p></div>;
}

function ReisMark() {
  return <div className="relative h-11 w-11" aria-hidden="true"><span className="absolute left-1 top-1 h-4 w-8 rotate-[-35deg] rounded-md bg-[#28b8ff]" /><span className="absolute left-3 top-4 h-4 w-8 rotate-[-35deg] rounded-md bg-[#087cff]" /><span className="absolute left-1 top-7 h-4 w-8 rotate-[-35deg] rounded-md bg-[#1366d8]" /></div>;
}

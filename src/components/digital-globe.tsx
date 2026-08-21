import { ArrowRight, Building2, Landmark, Leaf, Scale, ShieldCheck, Users } from "lucide-react";

const sectors = [
  { icon: Landmark, label: "Government", href: "/industries#government-public-sector" },
  { icon: ShieldCheck, label: "Defence & Security", href: "/industries#defence-security" },
  { icon: Leaf, label: "Agriculture", href: "/industries#agriculture-food-systems" },
  { icon: Scale, label: "Justice", href: "/industries#justice-law" },
  { icon: Building2, label: "Enterprise", href: "/industries#enterprise-commercial" },
  { icon: Users, label: "Communities", href: "/industries#government-public-sector" },
];

export function DigitalGlobe() {
  return (
    <div className="relative mx-auto flex min-h-[560px] w-full max-w-[740px] items-center justify-center">
      <div className="reis-orbit reis-orbit-one absolute rounded-full" />
      <div className="reis-orbit reis-orbit-two absolute rounded-full" />
      <div className="reis-globe-shell relative grid h-[340px] w-[340px] place-items-center rounded-full sm:h-[450px] sm:w-[450px]">
        <div className="reis-globe-halo absolute inset-0 rounded-full" />
        <div className="reis-globe relative h-[86%] w-[86%] overflow-hidden rounded-full">
          <div className="reis-earth-surface absolute inset-0" />
          <div className="reis-longitude reis-longitude-a absolute inset-[7%] rounded-full" />
          <div className="reis-longitude reis-longitude-b absolute inset-[7%] rounded-full" />
          <div className="reis-latitude absolute left-[7%] right-[7%] top-[28%] h-[18%] rounded-[50%]" />
          <div className="reis-latitude absolute bottom-[28%] left-[7%] right-[7%] h-[18%] rounded-[50%]" />
          <div className="reis-globe-shade absolute inset-0 rounded-full" />
          <div className="reis-globe-gloss absolute inset-0 rounded-full" />
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="reis-node absolute h-1.5 w-1.5 rounded-full"
              style={{
                left: `${16 + ((index * 23) % 68)}%`,
                top: `${18 + ((index * 31) % 62)}%`,
                animationDelay: `${index * 180}ms`,
              }}
            />
          ))}
        </div>
      </div>


      <div className="absolute right-0 top-8 hidden w-56 space-y-3 xl:block">
        {sectors.map(({ icon: Icon, label, href }, index) => (
          <a
            key={label}
            href={href}
            aria-label={`Explore ${label} industry capabilities`}
            className="reis-sector-node group relative flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 no-underline transition hover:-translate-y-0.5 hover:border-[#159bff] hover:shadow-[0_12px_30px_rgba(21,155,255,0.18)]"
            style={{ marginLeft: `${(index % 3) * 10}px` }}
          >
            <span aria-hidden="true" className="reis-sector-line absolute right-full top-1/2 h-px w-16" />
            <span aria-hidden="true" className="reis-small-icon grid h-9 w-9 shrink-0 place-items-center rounded-full">
              <Icon size={17} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.08em]">{label}</span>
            <ArrowRight aria-hidden="true" size={15} className="ml-auto shrink-0 opacity-35 transition group-hover:translate-x-1 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
}

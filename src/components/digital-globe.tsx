import { Building2, Landmark, Leaf, Scale, ShieldCheck, Users } from "lucide-react";

const sectors = [
  { icon: Landmark, label: "Government" },
  { icon: ShieldCheck, label: "Defence & Security" },
  { icon: Leaf, label: "Agriculture" },
  { icon: Scale, label: "Justice" },
  { icon: Building2, label: "Enterprise" },
  { icon: Users, label: "Communities" },
];

export function DigitalGlobe() {
  return (
    <div className="relative mx-auto flex min-h-[560px] w-full max-w-[740px] items-center justify-center">
      <div className="reis-orbit reis-orbit-one absolute rounded-full" />
      <div className="reis-orbit reis-orbit-two absolute rounded-full" />
      <div className="reis-globe-shell relative grid h-[340px] w-[340px] place-items-center rounded-full sm:h-[450px] sm:w-[450px]">
        <div className="reis-globe-halo absolute inset-0 rounded-full" />
        <div className="reis-globe relative h-[86%] w-[86%] overflow-hidden rounded-full">
          <div className="reis-longitude reis-longitude-a absolute inset-[7%] rounded-full" />
          <div className="reis-longitude reis-longitude-b absolute inset-[7%] rounded-full" />
          <div className="reis-latitude absolute left-[7%] right-[7%] top-[28%] h-[18%] rounded-[50%]" />
          <div className="reis-latitude absolute bottom-[28%] left-[7%] right-[7%] h-[18%] rounded-[50%]" />
          <div className="reis-continent reis-continent-one absolute" />
          <div className="reis-continent reis-continent-two absolute" />
          <div className="reis-continent reis-continent-three absolute" />
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="reis-node absolute h-1.5 w-1.5 rounded-full"
              style={{
                left: `${12 + ((index * 19) % 76)}%`,
                top: `${14 + ((index * 29) % 70)}%`,
                animationDelay: `${index * 120}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-8 hidden w-56 space-y-3 xl:block">
        {sectors.map(({ icon: Icon, label }, index) => (
          <div
            key={label}
            className="reis-sector-node relative flex items-center gap-3 rounded-xl border px-3 py-2.5"
            style={{ marginLeft: `${(index % 3) * 10}px` }}
          >
            <span className="reis-sector-line absolute right-full top-1/2 h-px w-16" />
            <div className="reis-small-icon grid h-9 w-9 place-items-center rounded-full">
              <Icon size={17} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.08em]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

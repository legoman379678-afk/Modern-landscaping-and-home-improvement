import type { ComponentType } from "react";
import { services } from "~/data";
import type { Service } from "~/data";
import {
  BriefcaseIcon,
  BuildingIcon,
  BulbIcon,
  DropIcon,
  HammerIcon,
  HomeIcon,
  LayersIcon,
  LeafIcon,
  PaintIcon,
  PalmIcon,
  ScissorsIcon,
  ShieldIcon,
  WrenchIcon,
  ZapIcon,
} from "./Icons";
import { Section, SectionHeading } from "./Section";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  wrench: WrenchIcon,
  home: HomeIcon,
  shield: ShieldIcon,
  layers: LayersIcon,
  bulb: BulbIcon,
  hammer: HammerIcon,
  paint: PaintIcon,
  drop: DropIcon,
  zap: ZapIcon,
  leaf: LeafIcon,
  scissors: ScissorsIcon,
  palm: PalmIcon,
  building: BuildingIcon,
  briefcase: BriefcaseIcon,
};

export default function Services() {
  return (
    <Section id="services" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="One Team. More Ways to Improve Your Property."
          subtitle="Handyman repairs, landscaping, painting, drywall, fixtures and more — one dependable team for your home or business."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s: Service) => {
            const Icon = ICONS[s.icon] ?? WrenchIcon;
            return (
              <article
                key={s.title}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/10"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-800 text-sand-300 transition duration-300 group-hover:bg-forest-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-semibold text-forest-950">
                  {s.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/80">
                  {s.detail}
                </p>
                {s.note ? (
                  <p className="mt-4 rounded-lg bg-mist px-3.5 py-2.5 text-xs leading-relaxed text-ink/75">
                    {s.note}
                  </p>
                ) : null}
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-lg border border-forest-800 px-4 py-2.5 text-sm font-semibold text-forest-800 transition hover:bg-forest-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-800"
                >
                  {s.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

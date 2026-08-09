import type { ComponentType } from "react";
import { whyChooseUs } from "~/data";
import {
  BriefcaseIcon,
  LayersIcon,
  LeafIcon,
  ShieldIcon,
  ZapIcon,
} from "./Icons";
import { Section, SectionHeading } from "./Section";

const iconFor: Record<string, ComponentType<{ className?: string }>> = {
  quality: ShieldIcon,
  price: LeafIcon,
  dependable: BriefcaseIcon,
  fast: ZapIcon,
  commercial: LayersIcon,
  versatile: LayersIcon,
};

export default function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Orlando Homeowners Choose Us"
          subtitle="A local team focused on doing the job right, communicating clearly and treating your property with care."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((c) => {
            const Icon = iconFor[c.icon] ?? ShieldIcon;
            return (
              <div
                key={c.title}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-950/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest-950">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/75">
                    {c.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

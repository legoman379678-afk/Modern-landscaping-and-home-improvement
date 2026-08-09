import type { ComponentType } from "react";
import { projects } from "~/data";
import type { Project } from "~/data";
import {
  BuildingIcon,
  BulbIcon,
  HomeIcon,
  LayersIcon,
  LeafIcon,
} from "./Icons";
import { Section, SectionHeading } from "./Section";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  leaf: LeafIcon,
  layers: LayersIcon,
  bulb: BulbIcon,
  building: BuildingIcon,
  home: HomeIcon,
};

function BeforeAfterCard({ project }: { project: Project }) {
  const Icon = ICONS[project.icon] ?? HomeIcon;
  return (
    <article className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition duration-300 hover:bg-white/10 hover:ring-sand-400/40">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sand-400 text-forest-950">
        <Icon className="h-6 w-6" />
      </span>
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
        <span className="rounded-md bg-white/10 px-2.5 py-1 text-white/80">
          {project.beforeLabel}
        </span>
        <span className="text-sand-300" aria-hidden>
          →
        </span>
        <span className="rounded-md bg-sand-400/90 px-2.5 py-1 text-forest-950">
          {project.afterLabel}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">
        Example — placeholder for demonstration, not an actual customer project.
      </p>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="bg-forest-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Projects"
          title="See the Difference"
          subtitle="Every property is different. Tell us what you need and we'll help find the right solution."
        />
        <p className="mx-auto -mt-4 mb-10 max-w-2xl text-center text-xs font-medium uppercase tracking-[0.18em] text-sand-300 sm:mb-14">
          Examples — placeholders, not real customer projects
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((p) => (
            <BeforeAfterCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}

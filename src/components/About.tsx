import { HOURS_FULL, PHONE_DISPLAY } from "~/data";
import { ClockIcon, PhoneIcon } from "./Icons";
import { Section, SectionHeading } from "./Section";

const DAYS: { day: string; hours: string; open: boolean }[] = [
  { day: "Sunday", hours: "Open 24 Hours", open: true },
  { day: "Monday", hours: "Open 24 Hours", open: true },
  { day: "Tuesday", hours: "Open 24 Hours", open: true },
  { day: "Wednesday", hours: "Open 24 Hours", open: true },
  { day: "Thursday", hours: "Open 24 Hours", open: true },
  { day: "Friday", hours: "Open 24 Hours", open: true },
  { day: "Saturday", hours: "Closed", open: false },
];

export default function About() {
  return (
    <>
      <Section id="about" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="About Us" title="Quality Work. Honest Service." />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-5 text-base leading-relaxed text-ink/85 sm:text-lg">
              <p>
                Modern Landscape and Home Improvement provides reliable handyman,
                landscaping, repair and home improvement services throughout the
                Orlando area.
              </p>
              <p>
                From drywall repair, fixture installation, furniture assembly and
                painting to landscaping, minor plumbing repairs, electrical fixture
                replacement and larger improvement projects, we help homeowners and
                businesses keep their properties looking and functioning their best.
              </p>
              <p>
                We believe in quality workmanship, honest pricing, dependable
                communication and practical solutions. Whether you need a quick
                repair or help transforming part of your property, we're ready to
                help.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-forest-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-800"
              >
                Tell Us About Your Project
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-3xl bg-forest-900 p-7 text-white shadow-xl shadow-forest-950/15 ring-1 ring-forest-950/10">
                <p className="flex items-center gap-3 font-display text-xl font-semibold">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand-400 text-forest-950">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  {PHONE_DISPLAY}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Call us for a free estimate, or send your project details
                  through the form on this page.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-xl shadow-forest-950/10 ring-1 ring-forest-950/10">
                <p className="flex items-center gap-3 font-display text-lg font-semibold text-forest-950">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800 text-sand-300">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  {HOURS_FULL}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  Serving Orlando, Florida &amp; surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Hours */}
      <Section id="hours" className="bg-forest-950 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            eyebrow="Hours"
            title="When We're Available"
            subtitle={HOURS_FULL}
          />

          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {DAYS.map((d) => (
              <div
                key={d.day}
                className={`flex items-center justify-between gap-3 rounded-xl px-5 py-4 sm:flex-col sm:items-start sm:gap-1 ${
                  d.open
                    ? "bg-white/10 text-white ring-1 ring-white/15"
                    : "bg-white/5 text-white/60 ring-1 ring-white/10"
                }`}
              >
                <p className="text-sm font-semibold">{d.day}</p>
                <p
                  className={`text-sm font-medium ${
                    d.open ? "text-sand-300" : "text-white/50"
                  }`}
                >
                  {d.hours}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-forest-800 to-forest-700 px-6 py-5 text-center ring-1 ring-sand-400/30">
            <ClockIcon className="h-6 w-6 shrink-0 text-sand-300" />
            <p className="font-display text-lg font-semibold text-white sm:text-xl">
              Open 24 Hours Sunday–Friday
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

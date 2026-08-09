import { HOURS_SHORT, PHONE_DISPLAY, PHONE_TEL, RATING } from "~/data";
import { PhoneIcon, StarIcon } from "./Icons";
import { Section } from "./Section";

export default function FinalCta() {
  return (
    <Section className="relative overflow-hidden bg-forest-900 py-20 lg:py-28">
      {/* Decorative backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #fff 0 2px, transparent 2.5px), radial-gradient(circle at 80% 70%, #fff 0 2px, transparent 2.5px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Have Something That Needs Fixing or Improving?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Tell us about your project and let's get it taken care of.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-sand-400 px-8 py-4 text-base font-semibold text-forest-950 shadow-lg transition hover:bg-sand-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand-300 sm:w-auto"
          >
            Get a Free Estimate
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border-2 border-white/70 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <p className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-white/85">
          <span className="inline-flex items-center gap-1.5">
            <span className="flex text-sand-300" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            {RATING} Google Rating
          </span>
          <span className="h-1 w-1 rounded-full bg-sand-400" aria-hidden />
          <span>{HOURS_SHORT}</span>
        </p>
      </div>
    </Section>
  );
}

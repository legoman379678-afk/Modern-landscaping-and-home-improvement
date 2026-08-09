import { HOURS_SHORT, PHONE_DISPLAY, PHONE_TEL, RATING, REVIEW_COUNT } from "~/data";
import { PhoneIcon, StarIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88svh] items-center overflow-hidden bg-forest-950">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        alt="Beautiful Florida home with manicured landscaping and palm trees"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-forest-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-forest-950/40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="rise-in rise-in-1 mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sand-300 backdrop-blur-sm">
            Orlando, Florida &amp; Surrounding Areas
          </p>
          <h1 className="rise-in rise-in-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Home Improvement &amp; Landscaping in Orlando
          </h1>
          <p className="rise-in rise-in-2 mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            From quick repairs and landscaping to complete property improvements,
            Modern Landscape and Home Improvement delivers dependable service,
            fair pricing and quality workmanship.
          </p>
          <div className="rise-in rise-in-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-sand-400 px-7 py-4 text-base font-semibold text-forest-950 shadow-lg shadow-forest-950/30 transition hover:bg-sand-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand-300"
            >
              Get a Free Estimate
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/70 px-7 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          {/* Trust indicators */}
          <ul className="rise-in rise-in-3 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/90">
            <li className="flex items-center gap-1.5">
              <span className="flex text-sand-300" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <strong className="font-semibold">{RATING} Google Rating</strong>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sand-400" aria-hidden />
              {REVIEW_COUNT} Google Reviews
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sand-400" aria-hidden />
              {HOURS_SHORT}
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sand-400" aria-hidden />
              Orlando Area
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

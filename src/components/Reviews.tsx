import { useRef } from "react";
import {
  GOOGLE_REVIEWS_URL,
  REVIEW_COUNT,
  RATING,
  reviews,
} from "~/data";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "./Icons";
import { Section, SectionHeading } from "./Section";

function Stars() {
  return (
    <div className="flex gap-0.5 text-sand-500" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4.5 w-4.5" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const amount = card ? card.offsetWidth + 16 : 360;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <Section id="reviews" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Google Reviews"
          title="5.0 ⭐ on Google"
          subtitle="What Our Customers Say"
        />

        <div className="relative">
          {/* Arrow controls (desktop) */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll reviews left"
            className="absolute -left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-forest-900 shadow-md ring-1 ring-forest-950/10 transition hover:bg-forest-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-800 lg:flex"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll reviews right"
            className="absolute -right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-forest-900 shadow-md ring-1 ring-forest-950/10 transition hover:bg-forest-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-800 lg:flex"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          {/* Swipeable scroller */}
          <div
            ref={scrollerRef}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 pt-1 sm:-mx-6 sm:px-6"
            role="region"
            aria-label="Customer reviews carousel"
          >
            {reviews.map((r) => (
              <article
                key={r.name}
                data-review-card
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest-950/5 sm:w-[400px]"
              >
                <Stars />
                <div className="mt-4 flex-1">
                  {r.quote ? (
                    <p className="text-sm leading-relaxed text-ink/85">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                  ) : (
                    <p className="text-sm italic text-ink/60">
                      ⭐⭐⭐⭐⭐ Rated on Google
                    </p>
                  )}
                </div>
                <footer className="mt-5 flex items-center gap-3 border-t border-mist pt-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-800 font-display text-base font-semibold text-sand-300"
                    aria-hidden
                  >
                    {r.name.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-forest-950">{r.name}</p>
                    <p className="text-xs text-ink/60">Google Review</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-2xl font-semibold text-forest-950">
            {RATING} ⭐ <span className="text-ink/60">•</span>{" "}
            <span className="text-forest-700">{REVIEW_COUNT} Google Reviews</span>
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-forest-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-800"
          >
            Read Our Google Reviews
          </a>
        </div>
      </div>
    </Section>
  );
}

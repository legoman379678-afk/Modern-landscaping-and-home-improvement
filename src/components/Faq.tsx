import { useState } from "react";
import { faqs } from "~/data";
import { ChevronDownIcon } from "./Icons";
import { Section, SectionHeading } from "./Section";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to the questions we hear most. Something else on your mind? Call us anytime."
        />

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition ${
                  open ? "ring-forest-700/40" : "ring-forest-950/5"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-forest-700 sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-base font-semibold text-forest-950 sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                        open ? "rotate-180 bg-forest-800 text-white" : "bg-mist text-forest-800"
                      }`}
                    >
                      <ChevronDownIcon className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`acc-panel ${open ? "open" : ""}`}
                >
                  <div>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink/80 sm:px-6 sm:pb-6 sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

import { useState } from "react";
import { CheckIcon, ChevronDownIcon, InfoIcon } from "./Icons";

// ---------------------------------------------------------------------------
// Optional AI upgrade panel (spec §6). A small, understated demo element for
// the business owner: "Want this on your website?" expands to show the
// AI Chat + Voice Assistant bundle for one additional $20 total charge.
// Exact copy only — never invent anything beyond the spec.
// ---------------------------------------------------------------------------

const UPGRADE_INCLUDES = [
  "AI website chatbot",
  "Voice questions",
  "Spoken responses",
  "Common customer Q&A",
  "Service information",
  "Hours information",
  "Quote guidance",
  "Call button",
  "Estimate guidance",
  "Mobile support",
];

const UPGRADE_STATEMENT =
  "Both AI Chat + Voice Assistant are included together for one additional $20 charge.";

export default function AiUpgradePanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-forest-950/5 bg-mist/50 px-4 py-2.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="ai-upgrade-panel"
        className="mx-auto flex items-center gap-1.5 rounded-md px-2 py-1 text-[0.7rem] font-medium text-forest-700/75 transition hover:text-forest-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
      >
        <InfoIcon className="h-3.5 w-3.5 shrink-0" />
        Want this on your website?
        <ChevronDownIcon
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div
          id="ai-upgrade-panel"
          className="panel-in mt-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-forest-950/10"
        >
          <div className="flex items-baseline justify-between gap-3">
            <h4 className="font-display text-base font-semibold text-forest-950">
              AI Chat + Voice Assistant
            </h4>
            <p className="font-display text-lg font-bold leading-none text-forest-800">
              +$20 TOTAL
            </p>
          </div>

          <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1.5 text-xs text-ink sm:grid-cols-2">
            {UPGRADE_INCLUDES.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="h-3.5 w-3.5 shrink-0 text-forest-700" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-3 border-t border-forest-950/10 pt-2.5 text-[0.7rem] leading-relaxed text-forest-900/80">
            {UPGRADE_STATEMENT}
          </p>
        </div>
      ) : null}
    </div>
  );
}

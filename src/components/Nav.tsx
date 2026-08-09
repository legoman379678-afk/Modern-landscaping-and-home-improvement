import { useState } from "react";
import type { MouseEvent } from "react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "~/data";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

function scrollToForm(e: MouseEvent) {
  e.preventDefault();
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-950/10 bg-forest-950/95 text-white shadow-lg shadow-forest-950/10 backdrop-blur supports-[backdrop-filter]:bg-forest-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand-400"
          aria-label="Modern Landscape and Home Improvement — back to top"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-forest-700 to-forest-900 font-display text-lg font-bold text-sand-300 ring-1 ring-sand-400/40">
            M
          </span>
          <span className="hidden min-w-0 truncate font-display text-[1.05rem] font-semibold leading-tight sm:block">
            Modern Landscape
            <span className="block text-[0.7rem] font-sans font-medium uppercase tracking-[0.18em] text-sand-300">
              &amp; Home Improvement
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={scrollToForm}
            className="rounded-lg bg-sand-400 px-4 py-2.5 text-sm font-semibold text-forest-950 shadow-sm transition hover:bg-sand-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-300"
          >
            Free Estimate
          </button>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sand-400 hover:text-sand-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-forest-950 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/90 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={(e) => {
                  setOpen(false);
                  scrollToForm(e);
                }}
                className="rounded-lg bg-sand-400 px-4 py-3 text-sm font-semibold text-forest-950 transition hover:bg-sand-300"
              >
                Free Estimate
              </button>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-4 py-3 text-sm font-semibold text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                Call
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

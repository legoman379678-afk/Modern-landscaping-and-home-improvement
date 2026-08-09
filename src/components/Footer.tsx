import { HOURS_FULL, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "~/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal pb-24 pt-14 text-white md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold leading-snug">
              Modern Landscape
              <span className="block text-forest-100/80">&amp; Home Improvement</span>
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-sand-300">
              Handyman • Landscaping • Home Improvement
            </p>
          </div>

          <div className="text-sm leading-relaxed text-white/75">
            <p>Orlando, Florida &amp; Surrounding Areas</p>
            <a
              href={PHONE_TEL}
              className="mt-2 inline-block text-base font-semibold text-sand-300 transition hover:text-sand-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand-400"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2">{HOURS_FULL}</p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/75 transition hover:text-sand-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/50">
            © Modern Landscape and Home Improvement. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

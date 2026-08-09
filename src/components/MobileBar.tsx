import { PHONE_TEL } from "~/data";

export default function MobileBar() {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const openAi = () => {
    window.dispatchEvent(new CustomEvent("modern-ai:open"));
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-forest-950/10 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(16,36,27,0.12)] backdrop-blur md:hidden"
      aria-label="Quick actions"
    >
      <a
        href={PHONE_TEL}
        className="flex flex-col items-center justify-center gap-1 py-3 text-forest-900 active:bg-forest-50"
      >
        <span className="text-xl leading-none" aria-hidden>
          📞
        </span>
        <span className="text-xs font-semibold">Call</span>
      </a>
      <button
        type="button"
        onClick={scrollToForm}
        className="flex flex-col items-center justify-center gap-1 border-x border-forest-950/10 py-3 text-forest-900 active:bg-forest-50"
      >
        <span className="text-xl leading-none" aria-hidden>
          📝
        </span>
        <span className="text-xs font-semibold">Free Estimate</span>
      </button>
      <button
        type="button"
        onClick={openAi}
        className="flex flex-col items-center justify-center gap-1 bg-forest-900 py-3 text-white active:bg-forest-800"
      >
        <span className="text-xl leading-none" aria-hidden>
          ✨
        </span>
        <span className="text-xs font-semibold">Ask AI</span>
      </button>
    </nav>
  );
}

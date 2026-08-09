import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import {
  AI_DISCLAIMER,
  PHONE_DISPLAY,
  PHONE_TEL,
  QUICK_QUESTIONS,
  answerQuestion,
} from "~/data";
import { CloseIcon, PhoneIcon, SendIcon, SparkleIcon } from "./Icons";
import VoiceAssistantDemo from "./VoiceAssistantDemo";
import AiUpgradePanel from "./AiUpgradePanel";

interface Msg {
  id: number;
  role: "user" | "ai";
  text: string;
}

let msgSeq = 0;

const WELCOME: Msg = {
  id: msgSeq++,
  role: "ai",
  text: `Hi! I'm Modern AI — a demo assistant for ${"Modern Landscape and Home Improvement"}. Ask me about our services, hours or how to get an estimate. (This is a demo — for real help, call ${PHONE_DISPLAY}.)`,
};

export default function AiDrawer() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Open from anywhere (mobile bar dispatches "modern-ai:open")
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("modern-ai:open", onOpen);
    return () => window.removeEventListener("modern-ai:open", onOpen);
  }, []);

  // Focus the composer when the drawer opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Auto-scroll to newest message
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey as unknown as EventListener);
    return () => window.removeEventListener("keydown", onKey as unknown as EventListener);
  }, [open]);

  const pushUser = (text: string) =>
    setMessages((m) => [...m, { id: msgSeq++, role: "user", text }]);

  // Read a reply aloud via speechSynthesis (voice demo). No-op if unsupported.
  const speakText = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.04;
    u.pitch = 1;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    synth.speak(u);
  };

  // Voice and text share the SAME engine (answerQuestion) and restrictions.
  const ask = (question: string, opts?: { voice?: boolean }) => {
    if (!question.trim() || typing) return;
    pushUser(opts?.voice ? `🎙️ ${question}` : question);
    setShowChips(false);
    setTyping(true);
    const reply = answerQuestion(question);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { id: msgSeq++, role: "ai", text: reply }]);
      if (opts?.voice) speakText(reply);
    }, 650);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    ask(input);
    setInput("");
  };

  const scrollToEstimate = () => {
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ask Modern AI — open demo assistant"
        className="fixed bottom-20 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-forest-900 py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-xl shadow-forest-950/30 ring-1 ring-sand-400/40 transition hover:bg-forest-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 md:bottom-6 md:right-6"
      >
        <SparkleIcon className="h-4.5 w-4.5 text-sand-300" />
        Ask Modern AI
      </button>

      {open ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Modern AI demo chat">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
            className="fade-in absolute inset-0 h-full w-full cursor-default bg-forest-950/60"
          />

          {/* Drawer */}
          <div className="drawer-in absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl">
            {/* Header */}
            <header className="flex items-center justify-between gap-3 bg-gradient-to-r from-forest-950 to-forest-800 px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-400 text-forest-950">
                  <SparkleIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold leading-tight">
                    Modern AI <span className="text-sand-300">— DEMO</span>
                  </p>
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/70">
                    Modern Landscape &amp; Home Improvement
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Modern AI"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </header>

            {/* Disclaimer */}
            <p className="border-b border-sand-400/30 bg-sand-400/15 px-5 py-2.5 text-xs leading-relaxed text-forest-950">
              💡 {AI_DISCLAIMER}
            </p>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-mist/50 px-4 py-4"
              aria-live="polite"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`msg-in flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "rounded-br-md bg-forest-800 text-white"
                        : "rounded-bl-md bg-white text-ink ring-1 ring-forest-950/10"
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>
                  </div>
                </div>
              ))}

              {typing ? (
                <div className="msg-in flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3.5 shadow-sm ring-1 ring-forest-950/10">
                    <span className="ai-dot h-2 w-2 rounded-full bg-forest-700" />
                    <span className="ai-dot h-2 w-2 rounded-full bg-forest-700" />
                    <span className="ai-dot h-2 w-2 rounded-full bg-forest-700" />
                    <span className="sr-only">Modern AI is typing</span>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Quick chips */}
            {showChips ? (
              <div className="no-scrollbar flex gap-2 overflow-x-auto border-t border-forest-950/5 bg-white px-4 py-3">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => ask(q)}
                    className="shrink-0 rounded-full border border-forest-800/25 bg-forest-50 px-3.5 py-2 text-xs font-medium text-forest-900 transition hover:border-forest-700 hover:bg-forest-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
                  >
                    {q}
                  </button>
                ))}
              </div>
            ) : null}

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-2 border-t border-forest-950/5 bg-white px-4 py-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-forest-900 px-2 py-2.5 text-xs font-semibold text-white transition hover:bg-forest-800"
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                Call Now
              </a>
              <button
                type="button"
                onClick={scrollToEstimate}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-forest-800/30 bg-white px-2 py-2.5 text-xs font-semibold text-forest-900 transition hover:bg-forest-50"
              >
                📝 Request Estimate
              </button>
            </div>

            {/* Composer */}
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-forest-950/5 bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <label htmlFor="ai-input" className="sr-only">
                Ask Modern AI a question
              </label>
              <input
                id="ai-input"
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, hours, estimates…"
                className="min-w-0 flex-1 rounded-full border border-forest-950/15 bg-mist/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink/45 focus:border-forest-700 focus:outline-2 focus:outline-forest-700/40"
              />
              <button
                type="submit"
                aria-label="Send question"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-800 text-white transition hover:bg-forest-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700"
              >
                <SendIcon className="h-4.5 w-4.5" />
              </button>
            </form>

            {/* 🎙️ Voice assistant demo — spec §7: voice input + spoken responses.
                Shares the same answer engine (ask → answerQuestion) as text chat. */}
            <VoiceAssistantDemo onQuestion={(q) => ask(q, { voice: true })} speaking={speaking} />

            {/* Optional $20 AI upgrade panel — spec §6 (understated, owner-facing). */}
            <AiUpgradePanel />
          </div>
        </div>
      ) : null}
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { MicIcon, VolumeIcon } from "./Icons";

// ---------------------------------------------------------------------------
// Voice assistant demo (spec §7). Runs entirely in the browser:
// SpeechRecognition/webkitSpeechRecognition → text → shared answer engine
// (via onQuestion) → speechSynthesis read-aloud (handled by the parent).
// If the browser lacks speech support it degrades to a clear message and the
// text chat keeps working — voice never breaks chat.
// ---------------------------------------------------------------------------

interface VoiceAssistantDemoProps {
  /** Called with the recognized question; parent runs the shared answer engine and speaks the reply. */
  onQuestion: (question: string) => void;
  /** True while the parent is reading an answer aloud via speechSynthesis. */
  speaking: boolean;
}

interface SpeechRecAlternative {
  transcript: string;
}

interface SpeechRecResultItem {
  isFinal: boolean;
  [index: number]: SpeechRecAlternative;
}

interface SpeechRecResultList {
  length: number;
  [index: number]: SpeechRecResultItem;
}

interface SpeechRecEvent {
  resultIndex: number;
  results: SpeechRecResultList;
}

interface SpeechRecErrorEvent {
  error: string;
}

interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onresult: ((e: SpeechRecEvent) => void) | null;
  onerror: ((e: SpeechRecErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

type RecognitionCtor = new () => SpeechRecognitionInstance;

function getRecognitionCtor(): RecognitionCtor | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor;
    webkitSpeechRecognition?: RecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

type ActiveState = "idle" | "starting" | "listening";

export default function VoiceAssistantDemo({
  onQuestion,
  speaking,
}: VoiceAssistantDemoProps) {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [active, setActive] = useState<ActiveState>("idle");
  const [interim, setInterim] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const recRef = useRef<SpeechRecognitionInstance | null>(null);

  // Detect support + cleanup on unmount (stops listening and cancels any speech).
  useEffect(() => {
    setSupported(Boolean(getRecognitionCtor()));
    return () => {
      recRef.current?.abort();
      recRef.current = null;
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const startListening = () => {
    const Ctor = getRecognitionCtor();
    if (!Ctor) {
      setSupported(false);
      return;
    }
    // Toggle off if already listening.
    if (active === "listening" || active === "starting") {
      recRef.current?.stop();
      return;
    }

    setNotice(null);
    setInterim("");

    const rec = new Ctor();
    rec.lang = "en-US";
    rec.continuous = false;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    let finalText = "";

    rec.onstart = () => setActive("listening");

    rec.onresult = (e) => {
      let interimText = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        const alt = res[0]?.transcript ?? "";
        if (res.isFinal) {
          finalText += (finalText ? " " : "") + alt.trim();
        } else {
          interimText += alt;
        }
      }
      setInterim(interimText);
      if (finalText.trim()) rec.stop();
    };

    rec.onerror = (e) => {
      setActive("idle");
      setInterim("");
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        setNotice(
          "Microphone access was blocked. Allow the mic in your browser to use voice, or just type your question below."
        );
      } else if (e.error === "no-speech") {
        setNotice("I didn't catch that — tap the mic and try again.");
      } else {
        setNotice("Voice didn't pick anything up — you can still type your question below.");
      }
    };

    rec.onend = () => {
      setActive("idle");
      setInterim("");
      const text = finalText.trim();
      if (text) onQuestion(text);
    };

    recRef.current = rec;
    try {
      rec.start();
      setActive("starting");
    } catch {
      setActive("idle");
      setNotice("Couldn't start the microphone — you can still type your question below.");
    }
  };

  const statusLine = (() => {
    if (supported === false) {
      return "Voice isn't supported in this browser — you can still type below.";
    }
    if (active === "starting") return "Starting microphone…";
    if (active === "listening") {
      return interim.trim()
        ? `Listening… “${interim.trim()}”`
        : "Listening… speak your question now";
    }
    if (speaking) return "Speaking the answer…";
    if (notice) return notice;
    return "Tap the mic and ask — like “Are you open today?”";
  })();

  const listening = active === "listening";

  return (
    <section
      aria-label="Voice assistant demo"
      className="border-t border-forest-950/5 bg-white px-4 py-3"
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={startListening}
          disabled={supported === false}
          aria-label={listening ? "Stop listening" : "Talk to Modern AI — start voice assistant"}
          aria-pressed={listening}
          className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-700 ${
            listening ? "bg-forest-700 hover:bg-forest-600" : "bg-forest-900 hover:bg-forest-800"
          } ${supported === false ? "cursor-not-allowed opacity-40" : ""}`}
        >
          {listening ? (
            <>
              <span className="voice-ring" aria-hidden />
              <span className="voice-ring voice-ring-2" aria-hidden />
            </>
          ) : null}
          {!listening && speaking ? (
            <VolumeIcon className="h-5 w-5" />
          ) : (
            <MicIcon className="h-5 w-5" />
          )}
        </button>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-forest-900">
            🎙️ Talk to Modern AI
          </p>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-sand-600">
            Voice Assistant Demo
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-xs leading-snug text-ink/60" aria-live="polite">
            {speaking && active === "idle" && supported !== false ? (
              <span className="voice-eq" aria-hidden>
                <i />
                <i />
                <i />
              </span>
            ) : null}
            <span className="truncate">{statusLine}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  BUSINESS_EMAIL,
  FORM_CONFIRMATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  serviceOptions,
} from "~/data";
import { MailIcon, PhoneIcon, SendIcon, StarIcon } from "./Icons";
import { Section } from "./Section";

interface FormState {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  service: string;
  description: string;
  preferredDate: string;
  contactMethod: string;
}

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  service: "",
  description: "",
  preferredDate: "",
  contactMethod: "Call",
};

const inputCls =
  "w-full rounded-xl border border-forest-950/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 shadow-sm transition focus:border-forest-700 focus:outline-2 focus:outline-forest-700/40";

// Readable plain-text summary of the entered details, shared by the
// "Send by Text" (sms) and "Send by Email" (mailto) links.
function buildSummary(v: FormState): string {
  const lines = [
    `Name: ${v.name.trim()}`,
    `Phone: ${v.phone.trim()}`,
    `Email: ${v.email.trim()}`,
    `Residential/Commercial: ${v.propertyType}`,
    `Service Needed: ${v.service}`,
    `Project Description: ${v.description.trim()}`,
    v.preferredDate ? `Preferred Date: ${v.preferredDate}` : null,
    `Preferred Contact Method: ${v.contactMethod}`,
  ].filter((l): l is string => l !== null);
  return lines.join("\n");
}

export default function EstimateForm() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) errs.name = "Please enter your name.";
    if (!values.phone.trim()) errs.phone = "Please enter your phone number.";
    else if (!/^[\d\s()+-]{7,}$/.test(values.phone.trim()))
      errs.phone = "Please enter a valid phone number.";
    if (!values.email.trim()) errs.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      errs.email = "Please enter a valid email address.";
    if (!values.propertyType) errs.propertyType = "Please choose Residential or Commercial.";
    if (!values.service) errs.service = "Please choose a service.";
    if (!values.description.trim()) errs.description = "Please describe your project.";
    else if (values.description.trim().length < 10)
      errs.description = "Please add a little more detail (at least 10 characters).";
    if (!values.contactMethod) errs.contactMethod = "Please choose how we should contact you.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    document.getElementById("estimate-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const summary = buildSummary(values);
  const smsHref = `sms:6893252800?&body=${encodeURIComponent(summary)}`;
  // When BUSINESS_EMAIL is empty the email button is not rendered at all
  // (see src/data.ts — paste the address there to enable it).
  const emailHref = BUSINESS_EMAIL
    ? `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("Free Estimate Request")}&body=${encodeURIComponent(summary)}`
    : "";

  return (
    <Section id="contact" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-forest-700">
            Free Estimate
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-forest-950 sm:text-4xl">
            Tell Us What You Need
          </h2>
          <p className="mt-4 text-base text-ink/70 sm:text-lg">
            Describe your project so we can understand what needs to be done.
          </p>
        </div>

        <div
          id="estimate-form"
          className="mt-10 rounded-3xl bg-white p-6 shadow-xl shadow-forest-950/10 ring-1 ring-forest-950/10 sm:p-10"
        >
          {submitted ? (
            <div className="py-6 text-center" role="status">
              <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-800">
                <StarIcon className="h-8 w-8" />
              </span>
              <p className="mx-auto max-w-md font-display text-2xl font-semibold leading-snug text-forest-950">
                {FORM_CONFIRMATION}
              </p>

              {/* Readable text summary of the entered details */}
              <div className="mx-auto mt-8 max-w-lg rounded-2xl bg-mist p-5 text-left ring-1 ring-forest-950/10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
                  Your Project Details
                </p>
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink/85">
                  {summary}
                </pre>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={smsHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-forest-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-800"
                >
                  <SendIcon className="h-4 w-4" />
                  Send by Text
                </a>
                {BUSINESS_EMAIL ? (
                  <a
                    href={emailHref}
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-sand-400 px-7 py-3.5 text-sm font-semibold text-forest-950 transition hover:bg-sand-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-500"
                  >
                    <MailIcon className="h-4 w-4" />
                    Send by Email
                  </a>
                ) : null}
              </div>

              <a
                href={PHONE_TEL}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 underline underline-offset-2 hover:text-forest-700"
              >
                <PhoneIcon className="h-4 w-4" />
                Or call {PHONE_DISPLAY} for fastest service
              </a>
              <p className="mt-4 text-xs text-ink/50">
                This website doesn't store your details — send them with the
                buttons above, or call us directly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="mb-1.5 block text-sm font-semibold text-forest-950">
                    Name *
                  </label>
                  <input
                    id="f-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputCls}
                    value={values.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "f-name-err" : undefined}
                  />
                  {errors.name ? (
                    <p id="f-name-err" className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="f-phone" className="mb-1.5 block text-sm font-semibold text-forest-950">
                    Phone *
                  </label>
                  <input
                    id="f-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(000) 000-0000"
                    className={inputCls}
                    value={values.phone}
                    onChange={set("phone")}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "f-phone-err" : undefined}
                  />
                  {errors.phone ? (
                    <p id="f-phone-err" className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="f-email" className="mb-1.5 block text-sm font-semibold text-forest-950">
                    Email *
                  </label>
                  <input
                    id="f-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputCls}
                    value={values.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "f-email-err" : undefined}
                  />
                  {errors.email ? (
                    <p id="f-email-err" className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <span className="mb-1.5 block text-sm font-semibold text-forest-950">
                    Residential / Commercial *
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {["Residential", "Commercial"].map((opt) => (
                      <label
                        key={opt}
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition ${
                          values.propertyType === opt
                            ? "border-forest-700 bg-forest-50 text-forest-800 ring-1 ring-forest-700"
                            : "border-forest-950/15 bg-white text-ink/70 hover:border-forest-700/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="propertyType"
                          value={opt}
                          checked={values.propertyType === opt}
                          onChange={set("propertyType")}
                          className="sr-only"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                  {errors.propertyType ? (
                    <p className="mt-1.5 text-xs font-medium text-red-700">{errors.propertyType}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="f-service" className="mb-1.5 block text-sm font-semibold text-forest-950">
                    Service Needed *
                  </label>
                  <select
                    id="f-service"
                    className={inputCls}
                    value={values.service}
                    onChange={set("service")}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "f-service-err" : undefined}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {errors.service ? (
                    <p id="f-service-err" className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.service}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="f-date" className="mb-1.5 block text-sm font-semibold text-forest-950">
                    Preferred Date <span className="font-normal text-ink/50">(optional)</span>
                  </label>
                  <input
                    id="f-date"
                    type="date"
                    className={inputCls}
                    value={values.preferredDate}
                    onChange={set("preferredDate")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="f-desc" className="mb-1.5 block text-sm font-semibold text-forest-950">
                    Project Description *
                  </label>
                  <textarea
                    id="f-desc"
                    rows={4}
                    placeholder="Tell us about the project, the room or area, and what you'd like done…"
                    className={inputCls}
                    value={values.description}
                    onChange={set("description")}
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? "f-desc-err" : undefined}
                  />
                  {errors.description ? (
                    <p id="f-desc-err" className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.description}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-forest-950">
                    Preferred Contact Method *
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Call", "Text", "Email"].map((m) => (
                      <label
                        key={m}
                        className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                          values.contactMethod === m
                            ? "border-forest-700 bg-forest-50 text-forest-800 ring-1 ring-forest-700"
                            : "border-forest-950/15 bg-white text-ink/70 hover:border-forest-700/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={m}
                          checked={values.contactMethod === m}
                          onChange={set("contactMethod")}
                          className="sr-only"
                        />
                        {m}
                      </label>
                    ))}
                  </div>
                  {errors.contactMethod ? (
                    <p className="mt-1.5 text-xs font-medium text-red-700">{errors.contactMethod}</p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-sand-400 px-6 py-4 text-base font-semibold text-forest-950 shadow-sm transition hover:bg-sand-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-500"
              >
                Request My Free Estimate
              </button>
              <p className="mt-4 text-center text-xs leading-relaxed text-ink/50">
                This website doesn't store your details. For fastest service, call{" "}
                <a href={PHONE_TEL} className="font-semibold text-forest-800 underline underline-offset-2">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

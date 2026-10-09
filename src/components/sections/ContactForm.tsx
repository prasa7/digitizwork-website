import type { ReactNode } from "react";
import type { ContactFormContent } from "@/content/types";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/**
 * Contact form LAYOUT ONLY (DIG-23 preview). Not connected: no submission, no validation.
 * DIG-26 will wire this to POST /api/contact using the shared zod schema in src/lib/validation
 * (Backend Agent), add honeypot/timing fields, error and success states.
 */
export function ContactForm({ content }: { content: ContactFormContent }) {
  const noticeId = "contact-form-notice";
  const f = content.fields;
  return (
    <div className="rounded-panel bg-white p-6 text-ink-700 shadow-raised ring-1 ring-white/10 sm:p-8">
      <h3 className="text-2xl font-bold">{content.title}</h3>
      <p className="mt-1.5 text-sm text-ink-600">{content.description}</p>

      <form
        className="mt-6 grid gap-5 sm:grid-cols-2"
        aria-describedby={content.previewNotice ? noticeId : undefined}
        noValidate
      >
        <Field id="contact-name" label={f.name}>
          <input id="contact-name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </Field>
        <Field id="contact-email" label={f.email}>
          <input id="contact-email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </Field>
        <Field id="contact-company" label={f.company} optional={content.optionalLabel}>
          <input id="contact-company" name="company" type="text" autoComplete="organization" className={inputClass} />
        </Field>
        <Field id="contact-service" label={f.service}>
          <div className="relative">
            <select id="contact-service" name="service" required defaultValue="" className={`${inputClass} appearance-none pr-10`}>
              <option value="" disabled>
                {f.servicePlaceholder}
              </option>
              {content.serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink-500" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Field>
        <Field id="contact-message" label={f.message} hint={f.messageHint} className="sm:col-span-2">
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            aria-describedby="contact-message-hint"
            className={`${inputClass} h-auto resize-y py-3`}
          />
        </Field>
        <div className="flex items-start gap-3 sm:col-span-2">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 size-5 shrink-0 rounded border-ink-400 accent-brand-600"
          />
          <label htmlFor="contact-consent" className="text-sm leading-relaxed text-ink-600">
            {f.consent}
          </label>
        </div>

        <div className="flex flex-col gap-4 sm:col-span-2">
          {/* type="button" while the API does not exist, so nothing is ever submitted */}
          <button type="button" aria-describedby={content.previewNotice ? noticeId : undefined} className={buttonClasses("primary", "lg", "w-full")}>
            {content.submitLabel}
            <Icon name="arrowRight" className="size-4" />
          </button>
          {content.previewNotice ? (
            <p id={noticeId} className="flex gap-2 rounded-control bg-iris-50 p-3 text-sm text-iris-700">
              <Icon name="info" className="mt-0.5 size-4 shrink-0" />
              {content.previewNotice}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

// Field border ink-400 on white = 3.45:1 (WCAG 1.4.11 non-text contrast)
const inputClass =
  "block h-12 w-full rounded-control border border-ink-400 bg-white px-4 text-base text-ink-950 shadow-xs transition-colors placeholder:text-ink-500 hover:border-ink-500 focus-visible:border-brand-600";

interface FieldProps {
  id: string;
  label: string;
  optional?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}

function Field({ id, label, optional, hint, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink-900">
        {label}
        {optional ? <span className="ml-1 font-normal text-ink-500">({optional})</span> : null}
      </label>
      {children}
      {hint ? (
        <p id={`${id}-hint`} className="mt-2 text-sm text-ink-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

import type { Rating, Testimonial } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { StatusTag } from "@/components/ui/StatusTag";
import { cn } from "@/components/ui/cn";

interface TestimonialCardProps {
  testimonial: Testimonial;
  /** Larger quote text, used for the featured testimonial on the home page. */
  featured?: boolean;
  className?: string;
}

/**
 * Testimonial (DIG-60) as figure / blockquote / figcaption.
 * Rating and photo render only when present; placeholder entries always show a "Placeholder" tag.
 */
export function TestimonialCard({ testimonial, featured = false, className }: TestimonialCardProps) {
  const t = testimonial;
  const meta = [t.role, t.company].filter(Boolean).join(", ");
  return (
    <figure
      className={cn(
        "relative flex h-full flex-col rounded-panel border border-ink-200 bg-white p-6 shadow-card sm:p-8",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          aria-hidden="true"
          className="inline-flex size-11 items-center justify-center rounded-control bg-linear-to-br from-brand-600 to-iris-600 text-white shadow-[0_8px_20px_-8px_rgb(58_99_234/0.7)]"
        >
          <Icon name="quote" className="size-5" />
        </span>
        {t.placeholder ? <StatusTag>Placeholder</StatusTag> : null}
      </div>
      {t.rating ? <Stars rating={t.rating} /> : null}
      <blockquote className="mt-5 flex-1">
        <p className={cn("leading-relaxed text-ink-700", featured ? "text-xl sm:text-2xl" : "text-lg")}>
          {t.quote}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
        {t.photo ? (
          <ImageSlot
            image={{ ...t.photo, alt: "" }}
            sizes="48px"
            className="size-12 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-500"
          >
            <Icon name="users" className="size-5" />
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-display font-bold text-ink-950">{t.name}</span>
          {meta ? <span className="block text-sm text-ink-600">{meta}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}

function Stars({ rating }: { rating: Rating }) {
  return (
    <p className="mt-5 flex gap-1 text-iris-600" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className={cn("size-5", n > rating && "text-ink-400")}
          fill="currentColor"
        >
          <path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.6L10 14.8l-5.1 2.6 1-5.6-4.1-4 5.7-.8L10 1.8Z" />
        </svg>
      ))}
    </p>
  );
}

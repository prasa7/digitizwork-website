import type { FeedbackPromptContent } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

/**
 * "Share your feedback" panel on /testimonials (DIG-60). No form: it links to the contact
 * section until the Backend provides a feedback endpoint.
 */
export function FeedbackPrompt({ content }: { content: FeedbackPromptContent }) {
  return (
    <section id="share-feedback" aria-labelledby="share-feedback-title" className="bg-white pb-16 sm:pb-20">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-panel border border-ink-200 bg-ink-50 p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <span
              aria-hidden="true"
              className="hidden size-12 shrink-0 items-center justify-center rounded-control bg-linear-to-br from-brand-600 to-iris-600 text-white sm:inline-flex"
            >
              <Icon name="chat" className="size-6" />
            </span>
            <div>
              <h2 id="share-feedback-title" className="text-2xl font-bold sm:text-3xl">
                {content.title}
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-600">{content.text}</p>
            </div>
          </div>
          <ButtonLink link={content.cta} variant="secondary" className="shrink-0" arrow />
        </div>
      </Container>
    </section>
  );
}

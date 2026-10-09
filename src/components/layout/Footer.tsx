import type { FooterContent, NavLink, SiteConfig } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SmartLink } from "@/components/ui/SmartLink";
import { Wordmark } from "@/components/ui/Wordmark";

interface FooterProps {
  site: SiteConfig;
  content: FooterContent;
  cta: NavLink;
}

export function Footer({ site, content, cta }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-dark relative isolate overflow-hidden border-t border-white/10 bg-ink-950 text-ink-300">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl"
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          <div className="max-w-sm">
            <Wordmark name={site.name} />
            <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
            <ButtonLink link={cta} size="sm" variant="ghost-dark" className="mt-6" arrow />
          </div>
          {content.groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-sans text-sm font-semibold tracking-wide text-white uppercase">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <SmartLink
                      link={link}
                      className={
                        link.pending
                          ? "text-ink-400"
                          : "text-ink-300 transition-colors hover:text-white"
                      }
                    />
                    {link.pending ? <span className="ml-2 text-xs text-ink-400">(coming soon)</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="font-sans text-sm font-semibold tracking-wide text-white uppercase">
              {content.contactTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="inline-flex items-center gap-2 break-all text-ink-300 transition-colors hover:text-white"
                >
                  <Icon name="mail" className="size-4 shrink-0 text-brand-300" />
                  {site.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2 text-ink-300">
                <Icon name="mapPin" className="size-4 shrink-0 text-brand-300" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-ink-400">
          <p>
            &copy; {year} {content.legalLine}
          </p>
        </div>
      </Container>
    </footer>
  );
}

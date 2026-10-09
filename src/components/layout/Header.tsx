import type { NavLink } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  siteName: string;
  nav: NavLink[];
  cta: NavLink;
}

export function Header({ siteName, nav, cta }: HeaderProps) {
  return (
    <header className="surface-dark sticky top-0 z-50">
      {/* Blur lives on its own layer so it does not trap the mobile menu's fixed backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
      />
      <Container className="flex h-18 items-center justify-between gap-6">
        <Wordmark name={siteName} />
        <DesktopNav items={nav} />
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink link={cta} size="sm" />
          </div>
          <MobileMenu items={nav} cta={cta} />
        </div>
      </Container>
    </header>
  );
}

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { SkipLink } from "@/components/layout/SkipLink";
import { desktopNav, footer, headerCta, primaryNav, site } from "@/content";
import "./globals.css";

// Self-hosted variable fonts (SIL OFL 1.1, latin subset from Fontsource 5.3.0) via next/font/local.
// Committed to the repo so builds never depend on network access to Google Fonts.
const inter = localFont({
  src: "../styles/fonts/inter-latin-wght.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const jakarta = localFont({
  src: "../styles/fonts/plus-jakarta-sans-latin-wght.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

// TODO(content): final titles/descriptions come from docs/marketing/seo-strategy.md (DIG-27).
export const metadata: Metadata = {
  title: { default: "DigitizWork", template: "%s | DigitizWork" },
  description: "DigitizWork website (in development).",
};

export const viewport: Viewport = {
  themeColor: "#0a1222",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} data-scroll-behavior="smooth">
      <body>
        <SkipLink />
        <PreviewBanner message={site.previewNotice} />
        <Header siteName={site.name} nav={primaryNav} desktopNav={desktopNav} cta={headerCta} />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer site={site} content={footer} cta={headerCta} />
      </body>
    </html>
  );
}

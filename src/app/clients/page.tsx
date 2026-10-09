import type { Metadata } from "next";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientList } from "@/components/sections/ClientList";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Story } from "@/components/sections/Story";
import { caseStudies, clients, clientsPage } from "@/content";

// TODO(content): title/description from docs/marketing/seo-strategy.md (DIG-27).
export const metadata: Metadata = {
  title: "Our clients",
  description:
    "[Placeholder] The organisations DigitizWork designs and builds AI-powered software for. Description pending the SEO strategy.",
  alternates: { canonical: "/clients" },
};

/** /clients (DIG-59): who we help, client grid and optional case studies. */
export default function ClientsPage() {
  return (
    <>
      <PageHero content={clientsPage.hero} />
      <Story id="who-we-help" tone="light" story={clientsPage.intro} values={clientsPage.audiences} />
      <ClientList content={clientsPage.clientList} clients={clients} />
      <CaseStudies content={clientsPage.caseStudies} studies={caseStudies} />
      <CtaBand content={clientsPage.cta} />
    </>
  );
}

import type { Client, SectionIntro } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClientCard } from "./ClientCard";

interface ClientListProps {
  content: SectionIntro;
  clients: Client[];
}

/** Client logo and name grid on /clients (DIG-59), driven by src/content/clients.ts. */
export function ClientList({ content, clients }: ClientListProps) {
  if (clients.length === 0) return null;
  return (
    <Section id="client-list" tone="muted" background={<div className="bg-grid-light absolute inset-0" />}>
      <SectionHeader id="client-list-title" content={content} align="center" />
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
        {clients.map((client) => (
          <li key={client.id}>
            <ClientCard client={client} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

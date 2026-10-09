// Placeholder single page. Section content comes from the Marketing Agent's approved copy.
const sections = [
  { id: "services", title: "Services" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <a href="#" className="text-lg font-semibold">DigitizWork</a>
          <ul className="flex gap-6 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:underline">{s.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <section className="mx-auto max-w-5xl px-4 py-24">
          <h1 className="text-4xl font-bold sm:text-5xl">DigitizWork</h1>
          <p className="mt-4 text-lg text-slate-600">Website in development.</p>
        </section>
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16">
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-slate-500">Content coming soon.</p>
          </section>
        ))}
      </main>
    </>
  );
}

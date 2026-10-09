/** First focusable element on every page; jumps past the header to <main id="main">. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-control focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-ink-950 focus:shadow-raised"
    >
      Skip to content
    </a>
  );
}

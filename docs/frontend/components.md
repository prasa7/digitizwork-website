# Components and page architecture

Owner: Frontend Agent. Jira: DIG-23 (shell and section architecture), DIG-52 (visuals), DIG-53 (/about), DIG-59 (/clients), DIG-60 (/testimonials). Last updated: 2026-10-10.
Tokens and visual rules: [design-system.md](design-system.md).

## 1. Principles

1. **Content is data.** Every word, link and image path lives in typed modules under `src/content/`. Components never hard-code copy.
2. **Sections are self-contained.** Each section is a server component that takes its content as a prop and renders its own `<section id aria-labelledby>`. It can be placed on any page.
3. **Navigation is declared once** (`src/content/navigation.ts`) with typed targets that are either an anchor on a page or a route.
4. **Static and light.** All routes (`/`, `/about`, `/clients`, `/testimonials`) are prerendered static HTML. Client JavaScript is limited to `MobileMenu` and `DesktopNav` (for `aria-current`), plus Next.js runtime.

## 2. File map

```
src/
├── app/
│   ├── layout.tsx          # html/body, fonts, SkipLink, PreviewBanner, Header, <main id="main">, Footer
│   ├── page.tsx            # Home: Hero, Services, Approach, WhyUs, AboutTeaser, TrustedTeaser, Contact
│   ├── about/page.tsx      # /about: PageHero, Story (+ values), Team, CtaBand
│   ├── clients/page.tsx    # /clients (DIG-59): PageHero, Story (who we help), ClientList, CaseStudies, CtaBand
│   ├── testimonials/page.tsx # /testimonials (DIG-60): PageHero, Testimonials, FeedbackPrompt, CtaBand
│   └── globals.css         # design tokens, base styles, utilities
├── content/
│   ├── types.ts            # all content types (LinkTarget, NavLink, ImageAsset, Consultant ...)
│   ├── links.ts            # hrefFor(target)
│   ├── site.ts             # name, confirmed email + location, preview banner text
│   ├── navigation.ts       # primaryNav (mobile menu, footer), desktopNav (header), headerCta, legalNav
│   ├── images.ts           # every image slot (swap point for generated images)
│   ├── consultants.ts      # /about consultant profiles (placeholders until real data)
│   ├── clients.ts          # clients[] and caseStudies[] (placeholders until real, permitted data)
│   ├── testimonials.ts     # testimonials[] (placeholders until real, written-consent data)
│   ├── sections/*.ts       # hero, services, approach, why-us, about (teaser), trusted (teaser), contact, footer
│   ├── pages/*.ts          # about, clients, testimonials page content
│   └── index.ts            # barrel export
├── components/
│   ├── ui/                 # Container, Section, SectionHeader, Button, SmartLink, Icon, ImageSlot, StatusTag, Wordmark, cn
│   ├── layout/             # SkipLink, PreviewBanner, Header, DesktopNav, MobileMenu, Footer, useIsCurrent
│   └── sections/           # Hero, Services, ServiceCard, Approach, FeatureGrid, WhyUs, AboutTeaser,
│                           # Contact, ContactForm, PageHero, Story, Team, ConsultantCard, CtaBand,
│                           # ClientList, ClientCard, CaseStudies, CaseStudyCard, Testimonials,
│                           # TestimonialCard, FeedbackPrompt, TrustedTeaser
└── styles/fonts/           # self-hosted Inter and Plus Jakarta Sans (woff2)
public/images/              # hero/, services/, about/, team/, clients/, testimonials/ illustrations
```

## 3. Page shell (layout.tsx)

Order in `<body>`: `SkipLink` (first tab stop, targets `#main`), `PreviewBanner` (removed by setting `site.previewNotice = null`), `Header`, `<main id="main" tabIndex={-1}>`, `Footer`.

Landmarks: `header` (banner), `nav aria-label="Main"` (desktop) or `nav aria-label="Main menu"` (mobile panel), `main`, `footer` (contentinfo). Each page has exactly one H1 (Hero on `/`, PageHero on `/about`, `/clients` and `/testimonials`); section titles are H2, cards are H3.

### Header and navigation

- `Header` (server) renders the wordmark, `DesktopNav` (lg and up, fed `desktopNav`), the header CTA (sm and up) and `MobileMenu` (below lg, fed the full `primaryNav`).
- Nav lists (DIG-59/60): `primaryNav` has all seven items (Services, How we work, Why us, About, Clients, Feedback, Contact) and drives the mobile menu and the footer Explore column. `desktopNav` drops the two home-page anchors "How we work" and "Why us" so the header holds five items and stays on one line from 1024px. Both lists reuse the same `NavLink` objects in `navigation.ts`.
- `DesktopNav` (client) marks route links matching the current path with `aria-current="page"` (About is highlighted on `/about`).
- `MobileMenu` (client) follows the disclosure pattern:
  - Toggle `button` with `aria-expanded`, `aria-controls`, and the accessible name "Open menu" / "Close menu".
  - When open: focus moves to the first link, page scroll is locked, a dimmed backdrop covers the page.
  - Closes on Escape (focus returns to the toggle), on choosing a link, on clicking outside, when focus leaves the panel, and when the viewport widens to desktop.
  - The panel uses the `hidden` attribute when closed, so its links are not focusable.

### Links

`LinkTarget` (in `types.ts`):

| kind | Example | `hrefFor` result |
|---|---|---|
| `section` | `{ kind: "section", section: "services" }` | `/#services` (works from any page) |
| `section` with page | `{ kind: "section", section: "team", page: "/about" }` | `/about#team` |
| `route` | `{ kind: "route", path: "/about" }` | `/about` |
| `external` | `{ kind: "external", url: "https://..." }` | opens in a new tab with `rel="noopener noreferrer"` |

`NavLink.pending: true` renders the label as plain text (used for "Privacy notice" until DIG-27 builds `/privacy`). `SmartLink` is the only component that turns a `NavLink` into markup.

## 4. Sections

| Section | Component | Content module | id | Notes |
|---|---|---|---|---|
| Hero | `Hero` | `sections/hero.ts` | `top` | H1 with gradient highlight, primary CTA to `#contact`, secondary to `#services`, AI illustration (priority image) |
| What we build with AI | `Services`, `ServiceCard` | `sections/services.ts` | `services` | Six illustrated cards; optional `link` per service for Phase 2 detail pages |
| How we work | `Approach` | `sections/approach.ts` | `approach` | Optional (OQ-5): `enabled: false` hides it; also remove its nav item |
| Why us | `WhyUs`, `FeatureGrid` | `sections/why-us.ts` | `why-us` | Qualitative points only, marked placeholder |
| About teaser | `AboutTeaser` | `sections/about.ts` | `about` | Links to `/about#team` (DIG-25) |
| Contact | `Contact`, `ContactForm` | `sections/contact.ts` | `contact` | Confirmed email (mailto) and location; form is layout only (see below) |
| Footer | `Footer` | `sections/footer.ts`, `site.ts` | n/a | Nav, legal, confirmed email and location |
| About hero | `PageHero` | `pages/about.ts` | n/a | H1 for `/about` |
| Story and values | `Story` | `pages/about.ts` | `story` | |
| Consultants | `Team`, `ConsultantCard` | `consultants.ts`, `pages/about.ts` | `team` | See section 6 |
| CTA band | `CtaBand` | `pages/about.ts`, `pages/clients.ts`, `pages/testimonials.ts` | n/a | Links to `/#contact` |
| Who we help | `Story` (`id="who-we-help"`) | `pages/clients.ts` (`intro`, `audiences`) | `who-we-help` | /clients (DIG-59). `Story` takes `id` and `tone` |
| Client grid | `ClientList`, `ClientCard` | `clients.ts`, `pages/clients.ts` | `client-list` | See section 6a |
| Case studies | `CaseStudies`, `CaseStudyCard` | `clients.ts` (`caseStudies`), `pages/clients.ts` | `case-studies` | Hidden when `caseStudies` is empty |
| Testimonials | `Testimonials`, `TestimonialCard` | `testimonials.ts`, `pages/testimonials.ts` | `feedback` | /testimonials (DIG-60) |
| Share feedback | `FeedbackPrompt` | `pages/testimonials.ts` (`share`) | `share-feedback` | Links to `/#contact`; no form |
| Trusted teaser | `TrustedTeaser` | `sections/trusted.ts`, `clients.ts`, `testimonials.ts` | `trusted-by` | Home, before Contact: compact logo strip (`clientLimit`), featured testimonial (`featuredTestimonialId`), links to both pages |

### Contact form (layout only)

`ContactForm` renders labelled fields matching kickoff section 6 (name, email, company optional, service, message with hint linked by `aria-describedby`, consent checkbox). It is **not functional**: the button is `type="button"`, nothing is submitted or validated, and a visible notice (linked to the form with `aria-describedby`) says so. DIG-26 will make it a client component that posts to `POST /api/contact` using the Backend Agent's shared zod schema in `src/lib/validation`, adds honeypot and timing fields, inline errors, focus management and success/failure announcements. The consent text must link to the privacy notice once it exists.

## 5. Turning a section into its own page (Phase 2)

Example: a dedicated `/services` page.

1. Create `src/app/services/page.tsx` with its own `metadata` (title, description, `alternates.canonical`).
2. Render a page H1, either `PageHero` with new content in `src/content/pages/services.ts`, or reuse the section with `<Services content={services} headingAs="h1" />` (`Services` and `Contact` accept `headingAs`; `SectionHeader` accepts `as`).
3. In `src/content/navigation.ts` change the item target from `{ kind: "section", section: "services" }` to `{ kind: "route", path: "/services" }`. Header, mobile menu and footer update automatically, and `aria-current` starts working for the new route.
4. On the home page, either keep the section as a summary or replace it with a teaser (pattern: `AboutTeaser` linking to `/about`).
5. Service detail pages: add `link: { label: "Learn more", target: { kind: "route", path: "/services/web-mobile" } }` to an item in `services.ts`; `ServiceCard` renders the link.
6. Add the route to `sitemap.ts` (DIG-27).

`/about` (DIG-53) is the worked example of this pattern: nav item `About` is a route, the home page keeps a teaser.

## 6. Consultants (DIG-53)

`src/content/consultants.ts` exports `Consultant[]`. Four placeholder entries (`placeholder: true`) show the layout with "Consultant name", "Role", "Short bio", "Specialism" and "Location", plus a silhouette illustration and a visible "Placeholder" tag. Names, bios and photos must never be invented.

To publish a real consultant: replace an entry with real, consultant-approved data; put a square photo (at least 800 x 800, WebP or JPEG) in `public/images/team/` and set `photo: { src, alt, width, height }`; optional `specialisms`, `location` and `linkedin` render only when present (LinkedIn as an icon link named "<name> on LinkedIn"). Remove `placeholder` to drop the tag. The grid adapts to any number of entries.

## 6a. Clients, case studies and testimonials (DIG-59, DIG-60)

These are real organisations and real customers. **Integrity rules** (repeated in the header comments of `src/content/clients.ts` and `src/content/testimonials.ts`):

- Never invent client names, logos, industries, case studies, quotes, names, job titles, ratings or results.
- Only publish a testimonial with the person's **written consent**, quoted exactly as approved. Never publish fabricated testimonials (Australian Consumer Law prohibits fake reviews).
- Case study `outcome` text contains no numbers unless the client has verified them in writing.
- `placeholder: true` renders a visible "Placeholder" tag on every card (client, case study, testimonial), including the compact tiles in the home teaser. Remove placeholder entries before launch if no real data exists yet; the client grid and case studies hide when their arrays are empty.

Types (`types.ts`): `Client { id, name, logo?, industry?, website?, placeholder? }`, `CaseStudy { id, client, title, challenge, solution, outcome, image?, placeholder? }`, `Testimonial { id, quote, name, role?, company?, photo?, rating?: 1-5, placeholder? }`. Optional fields render only when present.

Rendering notes:

- `ClientCard`: the name is always visible text, so the logo is rendered with `alt=""` (no duplicate announcement). `website` renders "Visit website" with screen-reader text "of <name> (opens in a new tab)". `compact` drops industry and website for the home strip.
- `CaseStudyCard`: `article` with H3 title and a `dl` of Challenge / Solution / Outcome (labels in `pages/clients.ts`). `image` replaces the gradient top bar when present.
- `TestimonialCard`: `figure` > `blockquote` > `p`, plus `figcaption` with name and "role, company". `rating` renders five stars inside `role="img"` named "Rated N out of 5"; nothing renders when it is absent. `photo` is decorative (the name is beside it); the fallback is a neutral icon, never a face.
- `FeedbackPrompt` is a link to `/#contact`, not a form. A feedback endpoint would come from the Backend Agent later.

Assets: logos in `public/images/clients/` (neutral placeholder: `logo-placeholder.svg`), testimonial photos in `public/images/testimonials/`.

## 7. Images (DIG-52)

Every slot is an `ImageAsset` (`src`, `alt`, `width`, `height`) in `src/content/images.ts`, rendered by `ImageSlot` (next/image, intrinsic size reserves space so there is no layout shift; the hero image uses `priority`). SVGs are served as-is; raster files get responsive optimisation. Swapping in a generated PNG/WebP is a one-line change of `src` (plus width/height if the ratio differs). Prompts and sizes: [image-prompts.md](image-prompts.md).

## 8. Stable selectors for QA

Prefer role and label selectors; no `data-testid` has been added.

| Target | Selector |
|---|---|
| Skip link | `getByRole("link", { name: "Skip to content" })` |
| Desktop nav | `getByRole("navigation", { name: "Main" })` |
| Mobile menu toggle | `getByRole("button", { name: "Open menu" })` / `"Close menu"` |
| Mobile menu panel | `getByRole("navigation", { name: "Main menu" })` |
| Home H1 | `getByRole("heading", { level: 1 })` |
| Sections | `getByRole("region", { name: <section H2 text> })`, or `#services`, `#approach`, `#why-us`, `#about`, `#contact`, `#team` |
| Contact fields | `getByLabel("Name")`, `getByLabel("Work email")`, `getByLabel("Company (optional)")`, `getByLabel("What do you need?")`, `getByLabel("Project details")`, consent checkbox by its label |
| Email link | `getByRole("link", { name: "consultant@digitizwork.com" })` (Contact and footer) |
| Clients grid (DIG-59) | `getByRole("region", { name: <clientsPage.clientList.title> })`, or `#client-list`; each client is an `article` with an H3 name |
| Case studies (DIG-59) | `#case-studies`; each card is an `article` with an H3 title and a `dl` (Challenge / Solution / Outcome) |
| Testimonials (DIG-60) | `#feedback`; each card is a `figure` containing `blockquote` and `figcaption` (`page.locator("#feedback figure")`) |
| Rating (DIG-60) | `getByRole("img", { name: /^Rated d out of 5$/ })` (only when a rating is set) |
| Share feedback (DIG-60) | `getByRole("link", { name: "Share your feedback" })` (href `/#contact`) |
| Home teaser | `#trusted-by`; `getByRole("link", { name: "See our clients" })`, `getByRole("link", { name: "Read client feedback" })` |
| Placeholder tags | `getByText("Placeholder", { exact: true })`: one per placeholder card (6 clients + 1 testimonial on `/`, 6 clients + 2 case studies + 2 section tags on `/clients`, 3 on `/testimonials`) |

Section H2 texts and form labels are placeholder copy and will change when Marketing delivers final copy; tests should read them from `src/content` rather than hard-coding them.

## 9. Known gaps

- All marketing copy is placeholder pending `docs/marketing/website-content.md` (marked `[Placeholder]` or `TODO(content)`).
- Metadata: placeholder titles/descriptions; canonical is relative and `metadataBase` is not set because the domain is unknown (DIG-27). No sitemap, robots, OG image, favicon, JSON-LD or custom 404 yet (DIG-27).
- Contact form is non-functional (DIG-26). Privacy notice route does not exist (OQ-3).
- No ESLint config or `lint` script exists in the project yet (E5-T3).

# DigitizWork design system

Status: **PROPOSAL, pending owner approval** (DIG-22, visual direction updated for DIG-52).
Owner: Frontend Agent. Last updated: 2026-10-10.
Implementation: tokens in `src/app/globals.css` (Tailwind 4 `@theme`), fonts in `src/app/layout.tsx`.
Screenshots: [designs/README.md](designs/README.md).

No brand assets have been supplied (discovery Q6). The colours, fonts and the neural-node logo mark below are a proposal and are replaced by official assets if the owner has them.

## 1. Direction

Owner feedback (2026-10-10): the first draft read as text-only. The direction is now **bold, modern, premium AI/tech**, conveying "DigitizWork can deliver any software solution using AI":

- Dark ink surfaces (hero, How we work, Contact, footer, inner-page heroes) alternating with clean white and light-grey sections, so the page has rhythm and depth.
- A blue to violet to teal "AI gradient" for highlights, primary buttons, icon tiles and illustration accents.
- Soft glows, faint grid backdrops, gradient hairline borders and layered "glass" cards.
- Original code-drawn SVG illustrations (no stock imagery, no fake logos, no fake people).
- Subtle motion only: slow float of the hero illustration, glow pulse, card lift on hover. All disabled under `prefers-reduced-motion: reduce`.

## 2. Colour tokens

Use these tokens (`bg-ink-950`, `text-brand-700`, `from-iris-600` ...) rather than Tailwind's default palettes.

| Token | Hex | Role |
|---|---|---|
| ink-50 | #F7F9FC | Muted section background |
| ink-100 | #EEF2F7 | Tag chips, dividers on white |
| ink-200 | #E2E8F0 | Card borders (decorative) |
| ink-300 | #CBD5E1 | Body text on dark surfaces |
| ink-400 | #7D8BA1 | Form field borders, muted text on dark |
| ink-500 | #64748B | Hints and secondary text on white (minimum for small text) |
| ink-600 | #475569 | Secondary body text on light |
| ink-700 | #334155 | Default body text |
| ink-900 | #111A2E | Labels, dark cards |
| ink-950 | #0A1222 | Headings on light, dark surface background |
| brand-50 / 100 / 200 / 300 | #EEF3FF / #DCE6FF / #BCCDFF / #93AFFF | Tints; 300 is the link and focus colour on dark |
| brand-400 / 500 | #5F86F7 / #3A63EA | Illustration accents; 500 is the focus ring on light |
| brand-600 / 700 / 800 / 900 | #2449D6 / #1C39B0 / #1A318B / #172A66 | Primary actions, text links on light, deep surfaces |
| iris-50 / 100 | #F3F0FF / #E6E0FF | Status tag and notice backgrounds |
| iris-300 / 400 / 500 | #B6A9FF / #8B7CF6 / #7C5CF0 | Gradient text, glows |
| iris-600 / 700 | #6D4AE0 / #5B3CC4 | Gradient end of primary buttons, status tag text |
| accent-50 / 100 | #ECFDF8 / #D1FAEC | Teal tints |
| accent-300 / 500 / 700 | #5EEAD4 / #14B8A6 / #0F766E | Eyebrows and checks on dark (300), decorative (500), text on light (700) |
| danger-50 / 700 | #FEF3F2 / #B42318 | Form errors (DIG-26) |
| success-50 / 700 | #ECFDF3 / #067647 | Form success (DIG-26) |

### Contrast (WCAG 2.2 AA)

Ratios computed with the WCAG relative luminance formula. AA requires 4.5:1 for body text, 3:1 for large text (24px, or 18.66px bold) and for UI component boundaries and focus indicators.

| Foreground on background | Ratio | Use | Result |
|---|---|---|---|
| ink-950 on white | 18.71 | Headings | Pass AAA |
| ink-700 on white | 10.35 | Body | Pass AAA |
| ink-600 on white | 7.58 | Secondary text | Pass AAA |
| ink-600 on ink-50 | 7.18 | Secondary text in muted sections | Pass AAA |
| ink-500 on white | 4.76 | Hints, optional labels | Pass AA |
| ink-500 on ink-50 | 4.51 | Hints in muted sections | Pass AA (use sparingly) |
| ink-700 on ink-100 | 9.21 | Tag chips | Pass AAA |
| brand-700 on white | 9.29 | Eyebrows, roles, links | Pass AAA |
| brand-700 on brand-50 | 8.36 | Specialism chips | Pass AAA |
| brand-700 on ink-50 | 8.80 | Eyebrows in muted sections | Pass AAA |
| iris-700 on iris-50 | 6.48 | Status tags, preview notices | Pass AA |
| white on brand-600 | 7.00 | Primary button (gradient start) | Pass AAA |
| white on iris-600 | 5.67 | Primary button (gradient end) | Pass AA |
| white on iris-700 | 7.27 | CTA band (darkest stop) | Pass AAA |
| brand-100 on iris-700 | 5.82 | CTA band body text | Pass AA |
| ink-950 on white | 18.71 | Light button | Pass AAA |
| white on ink-950 | 18.71 | Headings on dark | Pass AAA |
| ink-200 on ink-950 | 15.18 | Mobile menu links | Pass AAA |
| ink-300 on ink-950 | 12.60 | Body on dark | Pass AAA |
| ink-300 on ink-900 | 11.68 | Body in dark cards | Pass AAA |
| ink-300 on brand-900 | 9.07 | Contact section text (gradient start) | Pass AAA |
| ink-400 on ink-950 | 5.42 | Footer muted text, pending links | Pass AA |
| brand-300 on ink-950 | 8.75 | Gradient text stop 1 | Pass AAA |
| iris-300 on ink-950 | 9.00 | Gradient text stop 2 | Pass AAA |
| accent-300 on ink-950 | 12.65 | Gradient text stop 3, eyebrows on dark | Pass AAA |
| iris-300 on brand-900 | 6.48 | Status tag on dark | Pass AA |
| accent-700 on white | 5.47 | Teal text on light | Pass AA |
| danger-700 on white | 6.57 | Error text | Pass AA |
| success-700 on white | 5.69 | Success text | Pass AA |
| ink-400 border on white | 3.45 | Form field borders (1.4.11) | Pass |
| iris-600 filled star on white | 5.67 | Testimonial rating stars, non-text (DIG-60) | Pass |
| ink-400 empty star on white | 3.45 | Unfilled rating stars, non-text (DIG-60); the rating is also exposed as "Rated N out of 5" | Pass |
| ink-600 on ink-50 | 7.18 | "Some of our clients" label in the home teaser | Pass AAA |
| brand-500 focus ring on white | 5.06 | Focus indicator on light | Pass |
| brand-500 focus ring on ink-50 | 4.79 | Focus indicator on muted | Pass |
| brand-300 focus ring on ink-950 | 8.75 | Focus indicator on dark (`.surface-dark`) | Pass |
| brand-300 focus ring on brand-900 | 6.29 | Focus indicator in Contact | Pass |
| ink-200 border on white | 1.23 | Card borders | Decorative only; never the sole boundary of a control |

Rules: gradient text (`.text-gradient-ai`) is only used on ink-950 surfaces, where every stop passes. Text over decorative glows sits on ink-950 with glows at 10 to 30 percent opacity, so effective contrast stays within the dark-surface rows above. Dark containers carry the `surface-dark` class, which switches the focus ring to brand-300 (brand-500 on ink-950 would only be 3.70:1).

## 3. Typography

Self-hosted variable fonts via `next/font/local` (files in `src/styles/fonts/`, SIL OFL 1.1, latin subset, from Fontsource 5.3.0). No requests to Google at build or run time. This replaced `next/font/google`, which failed one production build out of three when the font download hiccupped.

| Role | Family | CSS variable / utility |
|---|---|---|
| Display and headings | Plus Jakarta Sans (600 to 800) | `--font-jakarta`, `font-display` |
| Body and UI | Inter (400 to 600) | `--font-inter`, `font-sans` (default) |

| Style | Mobile | Desktop | Weight / tracking |
|---|---|---|---|
| Hero H1 | 2.5rem / 1.08 | `text-display` 3.75rem / 1.05 | 800, -0.03em |
| Page H1 (inner pages) | 2.25rem | 3.75rem | 800 |
| Section H2 | 1.875rem | 3rem / 1.1 | 700, tight |
| Card H3 | 1.125 to 1.25rem | same | 700 |
| Lead | 1.125rem / 1.625 | same | 400 |
| Body | 1rem / 1.625 | same | 400 |
| Small / meta | 0.875rem | same | 400 to 600 |
| Eyebrow | 0.875rem, uppercase | same | 600, wide tracking |

Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`.

## 4. Spacing, layout and breakpoints

- Base unit 4px (Tailwind spacing scale). Common steps: 8, 12, 16, 24, 32, 48, 64.
- Container `max-w-site` (76rem / 1216px) with 20px gutters (32px from 640px).
- Section rhythm: `py-20` (80px) mobile, `py-24` from 640px, `py-32` (128px) from 1024px.
- Anchored sections get `scroll-margin-top: 5.5rem` to clear the sticky header.
- Breakpoints (Tailwind defaults): sm 640, md 768, lg 1024, xl 1280. Desktop navigation from lg; below that the mobile menu.
- Grids: services 1 / 2 / 3 columns; features 1 / 2 / 3; process 1 / 2 / 4; consultants 1 / 2 / 4; clients 2 / 3 (md); case studies 1 / 2 (md); testimonials 1 / 2 (md) / 3 (lg).
- Verified without horizontal scroll at 360, 390, 768, 1024, 1280 and 1440px.

## 5. Radius, elevation, effects

| Token | Value | Use |
|---|---|---|
| `rounded-control` | 10px | Buttons, inputs, icon tiles |
| `rounded-card` | 16px | Feature cards, glass chips |
| `rounded-panel` | 24px | Service cards, consultant cards, form card, CTA band |
| `shadow-card` | soft 2-layer | Resting cards |
| `shadow-raised` | deep 2-layer | Hover state, form, illustrations |
| `.bg-grid-dark` / `.bg-grid-light` | 48px grid with radial mask | Section backdrops |
| `.text-gradient-ai` | brand-300, iris-300, accent-300 | Hero highlight on dark only |
| `.border-gradient-ai` | gradient hairline on ink-900 | Process step cards |

## 6. Motion

`animate-float` (7s), `animate-float-slow` (9s), `animate-glow` (6s), `animate-menu-in` (160ms), hover lift on cards. Every animation is applied with `motion-safe:` and a global `prefers-reduced-motion: reduce` rule removes all animation, transitions and smooth scrolling.

## 7. Iconography and imagery

- Icons: original 24px outline set in `src/components/ui/Icon.tsx` (1.75 stroke, `currentColor`), no icon library. Decorative by default (`aria-hidden`); pass `title` for meaningful icons.
- Illustrations (DIG-52): original SVGs in `public/images/` drawn in code, using the same palette, glows and glass panels. Every slot is defined once in `src/content/images.ts`. Replacement prompts and sizes: [image-prompts.md](image-prompts.md).
- Never: stock "team" photos, invented faces, fake client logos, testimonials or statistics.

## 8. Component inventory

| Component | Path | Notes |
|---|---|---|
| Container | `src/components/ui/Container.tsx` | Max width and gutters |
| Section | `src/components/ui/Section.tsx` | `id`, `aria-labelledby`, tone light / muted / dark, decorative background slot |
| SectionHeader | `src/components/ui/SectionHeader.tsx` | Eyebrow, status tag, H2 (or H1 via `as`), intro |
| ButtonLink / buttonClasses | `src/components/ui/Button.tsx` | Variants primary (AI gradient), secondary, ghost-dark, light; sizes sm / md / lg |
| SmartLink | `src/components/ui/SmartLink.tsx` | Renders a content `NavLink` (section anchor, route, external, pending) |
| Icon | `src/components/ui/Icon.tsx` | 22 icons (adds quote, building, external for DIG-59/60) |
| ImageSlot | `src/components/ui/ImageSlot.tsx` | next/image wrapper for `ImageAsset` |
| StatusTag | `src/components/ui/StatusTag.tsx` | Dashed "Placeholder" / "Optional" pill |
| Wordmark | `src/components/ui/Wordmark.tsx` | Proposed mark and wordmark |
| SkipLink, PreviewBanner, Header, DesktopNav, MobileMenu, Footer | `src/components/layout/` | Page shell |
| Hero, Services + ServiceCard, Approach, WhyUs + FeatureGrid, AboutTeaser, Contact + ContactForm | `src/components/sections/` | Home sections |
| PageHero, Story, Team + ConsultantCard, CtaBand | `src/components/sections/` | /about sections (Story is reused on /clients) |
| ClientList + ClientCard, CaseStudies + CaseStudyCard | `src/components/sections/` | /clients (DIG-59) |
| Testimonials + TestimonialCard, FeedbackPrompt | `src/components/sections/` | /testimonials (DIG-60) |
| TrustedTeaser | `src/components/sections/` | Home teaser for /clients and /testimonials (reuses ClientCard compact and TestimonialCard) |

Behaviour and Phase 2 guidance: [components.md](components.md).

## 9. Decisions needed from the owner

1. Approve or adjust the visual direction (dark AI look, blue/violet/teal gradient, Plus Jakarta Sans + Inter).
2. Supply a logo and brand colours if they exist; otherwise approve the proposed neural-node mark.
3. Decide whether to keep the code-drawn illustrations or generate photoreal images from [image-prompts.md](image-prompts.md).

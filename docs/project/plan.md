# DigitizWork website: Jira-ready plan

Prepared by: PM agent, 2026-10-09. Scope: [project-brief.md](project-brief.md).
Jira: created 2026-10-09 in project **DIG** (Digitizwork, team-managed Scrum). Board: https://digitizwork.atlassian.net/jira/software/projects/DIG/boards
Jira is now the source of truth for status; this file keeps scope, acceptance criteria and the ID-to-key mapping.

## How it was loaded into Jira (E1-T5, DIG-15)

- 8 Epics: DIG-3 (E1) to DIG-10 (E8). 40 child issues DIG-11 to DIG-50, each with its parent set to its epic.
- Labels: owner (`marketing`, `frontend`, `backend`, `qa`, `pm`, `orchestrator`, `product-owner`), sprint (`sprint-1`, `sprint-2`, `sprint-3`, `backlog`), phase (`phase-1`, `phase-2`), and `blocked` on DIG-13 and DIG-47 (the workflow has no Blocked status). The 4 items done before planning carry `sprint-1`.
- Description: plan ID, owner and dependencies at the top, then the description and acceptance criteria (as a bullet list; met criteria prefixed MET).
- Dependencies: 69 "Blocks" links matching the Depends on column (non-issue dependencies such as "owner Jira key" are not links).
- Done items DIG-11, DIG-12, DIG-34, DIG-35 transitioned to Done with evidence in the description. DIG-15 (this load) transitioned to Done after verification.
- Sprints are NOT created (not possible with the available tools). The owner creates Sprint 1 to 3 on the board and moves issues by sprint label.
- Added later: DIG-51 (E3-S7, UI design review) on 2026-10-09 under DIG-5, blocked by DIG-22 and DIG-23. Total Blocks links now 71.
- Added later (owner requirements 2026-10-09): DIG-52 (E3-S8), DIG-53 (E3-S9), DIG-54 (E2-S6), DIG-55 (E2-S7). Links: DIG-54 blocks DIG-53; DIG-52 and DIG-53 block DIG-51; DIG-22 blocks DIG-52; DIG-23 blocks DIG-53; DIG-55 relates to DIG-52. Blocks links now 76, plus 1 Relates link. `/about` moved into Phase 1 (decision D10).
- Added 2026-10-10: DIG-56 (E2-T8, Done) and DIG-57 (E2-S9). DIG-57 relates to DIG-13, DIG-19 and DIG-54.
- Pre-existing DIG-1 and DIG-2 (Jira sample tasks) were left untouched. The SCRUM project was not touched.

Status values: Done, In Progress, To Do, Blocked. In Progress as of 2026-10-10: DIG-22, DIG-23, DIG-47, DIG-51, DIG-52, DIG-53, DIG-58, DIG-59, DIG-60.

Public preview LIVE 2026-10-10 at http://3.106.125.98:
- / and /about return 200 (checked by the coordinator and the PM).
- Serves the image from main commit 975b420.
- No HTTPS, no domain, no Elastic IP.
- DIG-58 stays In Progress until a fully green pipeline run is seen. The 975b420 run probably failed its health check while port 80 was still blocked.

Clients/Feedback (D13): DIG-59 and DIG-60 are In Progress; DIG-61 (content) blocks both. Both block DIG-51 and relate to DIG-57.

Deployment (D11, D12; 2026-10-10):
- CI/CD workflow committed in 4b7f6d7 (DIG-58). It runs typecheck on PRs and pushes; on main it builds the image, pushes it to GHCR and deploys over SSH to EC2.
- main includes the design work, deployed before owner approval of DIG-51.
- The Actions run result is not yet verified.
- The deploy job is skipped until the owner launches EC2 and sets EC2_HOST, EC2_USER and EC2_SSH_KEY.
- DIG-47 covers a public preview only. QA, DIG-45 and the hosting proposal were skipped for the preview (R20 to R23).

UI design delivered 2026-10-10 in commit a77bd4f (branch feature/DIG-22-DIG-23-ui-design, pushed). Screenshots, design-system.md, components.md and image-prompts.md are linked from the DIG-22, DIG-23, DIG-52 and DIG-53 comments. Verification:
- Frontend reports tsc exit 0, production build exit 0, and passing Playwright smoke checks.
- PM confirmed / and /about return 200 on :3000 and :8080.
- Lint has NOT been run (DIG-36) and there has been no axe scan.
The owner review is in progress on DIG-51. Owner approval there is the remaining acceptance criterion for DIG-22, DIG-23, DIG-52 and DIG-53. DIG-53 also cannot close until DIG-54 is done.

## Summary

| Epic | Items | Done | Sprint 1 | Sprint 2 | Sprint 3 | Backlog |
|---|---|---|---|---|---|---|
| E1 Discovery & Planning | 6 | 3 | 3 | 0 | 0 | 0 |
| E2 Brand & Content | 10 | 1 | 2 | 7 | 0 | 0 |
| E3 Design System & Frontend | 11 | 0 | 5 | 6 | 0 | 0 |
| E4 Contact Form & Backend | 6 | 0 | 1 | 5 | 0 | 0 |
| E5 Local Dev & DevOps (Docker) | 6 | 3 | 2 | 1 | 0 | 0 |
| E6 QA & Accessibility | 5 | 0 | 1 | 1 | 3 | 0 |
| E7 Launch | 4 | 0 | 0 | 0 | 4 | 0 |
| E8 Phase 2 Multi-page Expansion | 3 | 0 | 0 | 0 | 0 | 3 |
| Total | 51 | 7 | 14 | 20 | 7 | 3 |

(Done items are counted in "Done" only, not in a sprint column.)

## Critical path

E1-T3 owner discovery answers -> E2-S1 positioning -> E2-S3 copy -> E3-S3/E3-S4 sections -> E6-S2..S4 testing -> E7-T1 fixes -> E7-T2 release readiness.

Work that can start before discovery answers arrive: E3-S2 (page shell and section architecture with placeholder content), E4-S1 (draft API contract from kickoff form fields), E5-T3 (quality tooling), E5-T4 (git init), E6-S1 (draft test plan).

---

## E1 Discovery & Planning (Epic DIG-3)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E1-T1 | DIG-11 | Task | Create agent team definitions | orchestrator | none | Done | Done |
| E1-T2 | DIG-12 | Task | Project brief and Jira-ready plan | pm | E1-T1 | Done | Done |
| E1-T3 | DIG-13 | Task | Owner answers discovery questions | product-owner | E1-T1 | Sprint 1 | Blocked (waiting on owner) |
| E1-T4 | DIG-14 | Task | Owner confirms assumptions and launch decisions | product-owner | E1-T3 | Sprint 1 | To Do |
| E1-T5 | DIG-15 | Task | Create Jira project backlog from this plan | pm | E1-T2, owner Jira key | Done | Done |
| E1-T6 | DIG-16 | Task | Approve implementation plan (build gate) | product-owner | E2-S2, E3-S1, E4-S1, E6-S1 | Sprint 1 | To Do |

**E1-T1 Create agent team definitions** (Done)
Define the marketing, frontend, backend, QA and PM subagents with path-based ownership and integrity rules.
- [x] Five definitions exist in `.claude/agents/`
- [x] Each defines owned paths, deliverables and the no-invented-facts rule
Evidence: `.claude/agents/digitizwork-{marketing,frontend,backend,qa,project-manager}-agent.md` present (checked 2026-10-09).

**E1-T2 Project brief and Jira-ready plan** (Done)
Produce the project brief, backlog, risk register and decision log for the single-page launch.
- [x] `docs/project/project-brief.md` with objectives, scope, out of scope, constraints, success criteria, open questions
- [x] `docs/project/plan.md` with epics, items, acceptance criteria, dependencies and sprints
- [x] `docs/project/risks-and-decisions.md`
Evidence: files created 2026-10-09.

**E1-T3 Owner answers discovery questions** (Blocked)
The owner answers Q1 to Q11 in `phase-1-kickoff.md` section 4. "Not decided yet" is acceptable except for Q1 to Q5. No business facts will be invented in their absence.
- [ ] Services list for the first release (Q1)
- [ ] Target customers and markets, language and spelling (Q2, Q3)
- [ ] Primary site goal / single most important action (Q4)
- [ ] Contact details to publish and the inbox that receives form submissions (Q5)
- [ ] Brand assets status, domain, confirmable facts, reference sites, privacy jurisdiction, analytics (Q6 to Q11)
- [ ] Answers recorded in `docs/project/` and the decision log

**E1-T4 Owner confirms assumptions and launch decisions**
Confirm or override kickoff assumptions A1 to A8 and brief open questions OQ-3 to OQ-8.
- [ ] A1 to A8 each marked Confirmed or Overridden in the decision log
- [ ] Privacy notice format decided (OQ-3)
- [ ] Email delivery approach for launch decided (OQ-4)
- [ ] Phase 1 "launch" definition decided: local production build only, or public deployment after approval (OQ-8)

**E1-T5 Create Jira project backlog from this plan** (Done)
Create epics, issues, labels and dependency links in Jira project DIG, then record keys in this file.
- [x] 8 epics and all items created with type, labels, description, acceptance criteria, sprint label
- [x] "Blocks" links match the Depends on column (69 links)
- [x] Done items transitioned to Done with evidence
- [x] Jira key column in this file filled in
Evidence: JQL `project = DIG AND key >= DIG-3` on 2026-10-09 returned 48 issues; all 40 children have the correct epic parent; DIG-11, 12, 15, 34, 35 in Done; 69 distinct Blocks links.

**E1-T6 Approve implementation plan (build gate)**
The owner reviews the section map, design system proposal, API contract and test plan before Sprint 2 build begins.
- [ ] Owner approval recorded in the decision log with date
- [ ] Any requested changes captured as backlog items

---

## E2 Brand & Content (Epic DIG-4) (owner: marketing)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E2-S1 | DIG-17 | Story | Positioning, audience and brand voice | marketing | E1-T3 | Sprint 1 | To Do |
| E2-S2 | DIG-18 | Story | Single-page section map and Phase 2 sitemap | marketing | E2-S1 | Sprint 1 | To Do |
| E2-S3 | DIG-19 | Story | Copy for all single-page sections | marketing | E2-S2, E1-T4 | Sprint 2 | To Do |
| E2-S4 | DIG-20 | Story | SEO strategy for the single page | marketing | E2-S1 | Sprint 2 | To Do |
| E2-S5 | DIG-21 | Story | Privacy notice content for form data | marketing | E1-T3 (Q5, Q10), E1-T4 (OQ-3), E4-S1 | Sprint 2 | To Do |
| E2-S6 | DIG-54 | Story | Consultant profiles content and photos | product-owner, marketing | owner input | Sprint 2 | To Do |
| E2-S7 | DIG-55 | Story | Generate and approve AI imagery (optional) | product-owner, frontend | E3-S8 (image-prompts.md) | Sprint 2 | To Do |
| E2-T8 | DIG-56 | Task | Owner content workbook (Excel) for site copy | pm, product-owner, marketing | none | Sprint 1 | Done |
| E2-S9 | DIG-57 | Story | Apply owner content workbook v2 to the site | frontend, marketing | owner returns filled workbook (v2) | Sprint 2 | To Do |
| E2-S10 | DIG-61 | Story | Client list, logos and testimonials content | product-owner, marketing | owner input (via workbook) | Sprint 2 | To Do. ACs: names and logos with permission to display; optional case studies; testimonials with written consent; entered via the workbook. Blocks DIG-59 and DIG-60 |

**E2-S1 Positioning, audience and brand voice**
Turn the owner's discovery answers into positioning, audience definition, value proposition and voice guidelines.
- [ ] `docs/marketing/brand-strategy.md` exists
- [ ] Every factual claim traces to an owner answer; anything else marked `[ASSUMPTION]`
- [ ] Voice guidelines include do / don't examples
- [ ] Owner has reviewed and approved

**E2-S2 Single-page section map and Phase 2 sitemap**
Define the section order, purpose, heading and CTA of each section on the single page, with anchor IDs that map cleanly to future routes. Record the Phase 2 multi-page sitemap separately.
- [ ] `docs/marketing/sitemap.md` lists each section: anchor ID, purpose, primary CTA, future route
- [ ] Phase 2 pages listed separately and marked as later phase
- [ ] Owner approves the section list (OQ-5)

**E2-S3 Copy for all single-page sections**
Write final copy for header/nav labels, hero, services, about, contact (including form labels, help text, error and success messages) and footer.
- [ ] `docs/marketing/website-content.md` contains copy for every section in E2-S2
- [ ] Form labels, validation messages and success/failure messages included, matching the E4-S1 field list
- [ ] No fabricated testimonials, logos, statistics or certifications
- [ ] Zero `[ASSUMPTION]` markers left after owner review
- [ ] Owner sign-off recorded

**E2-S4 SEO strategy for the single page**
Define target queries, title, meta description, OG text, structured data facts and heading hierarchy.
- [ ] `docs/marketing/seo-strategy.md` contains title (<=60 chars), description (<=160 chars), OG title/description, H1 and H2 list
- [ ] JSON-LD Organization facts listed, owner-confirmed only
- [ ] Keyword research method and sources stated; nothing claimed as researched unless done

**E2-S5 Privacy notice content for form data**
Draft the privacy notice covering what the contact form collects, why, retention, processor (email provider) and contact for requests, for the owner's jurisdiction.
- [ ] Draft in `docs/marketing/website-content.md` (privacy section)
- [ ] Matches the actual data flow in `docs/architecture/backend-design.md`
- [ ] Flagged as "not legal advice; owner to review"; owner approval recorded

**E2-S6 Consultant profiles content and photos** (DIG-54, owner requirement 2026-10-09)
The owner supplies real consultant details for `/about`. Marketing edits the bios to the brand voice. Blocks E3-S9 (DIG-53) from closing.
- [ ] Per consultant: real name, role, short bio, specialisms, optional LinkedIn URL
- [ ] Professional photo per consultant, with written consent to publish recorded
- [ ] Bios edited to brand voice and approved by the owner
- [ ] Content handed to frontend for `src/content/consultants.ts`; no invented details

**E2-S7 Generate and approve AI imagery** (DIG-55, optional)
The owner generates photorealistic AI images from `docs/frontend/image-prompts.md`; frontend swaps them into the image slots. Relates to E3-S8 (DIG-52).
- [ ] Images generated from the documented prompts; tool and licence or usage terms recorded
- [ ] Owner approves each image before use
- [ ] Images optimised (next/image) with alt text
- [ ] No AI images of identifiable people presented as DigitizWork consultants

**E2-T8 Owner content workbook (Excel) for site copy** (DIG-56, Done 2026-10-10)
An Excel workbook the owner uses to supply real content. Each field has a Field ID mapped to src/content, current text, status (Placeholder / Draft / Confirmed), new content, an Action dropdown and notes. Each returned round is applied by the orchestrator, logged in the Change log tab and tracked by its own Jira issue.
- [x] `docs/content/DigitizWork-Website-Content.xlsx` and generator `docs/content/build_content_xlsx.py` (python:3.12-slim container) exist
- [x] 8 tabs: How to use, Site & Contact, Home page, About page, Consultants, Images, Discovery questions, Change log
- [x] Covers every current content field (per orchestrator; not independently verified by PM)
Evidence: PM check 2026-10-10: files present; tab names read from xl/workbook.xml.

**E2-S9 Apply owner content workbook v2 to the site** (DIG-57; relates to DIG-13, DIG-19, DIG-54)
- [ ] Every row with Action = "Replace with new content" or "Remove" is applied in src/content
- [ ] Every "Approve current text" row has its [Placeholder] marker removed
- [ ] A Change log row is added in the workbook referencing DIG-57
- [ ] Screenshots are refreshed
- [ ] QA re-checks the affected pages

---

## E3 Design System & Frontend (Epic DIG-5) (owner: frontend)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E3-S1 | DIG-22 | Story | Design system proposal | frontend | E1-T3 (Q6), E2-S1 | Sprint 1 | In Progress (started 2026-10-09 with placeholder content and an unapproved brand direction; DIG-13 still open) |
| E3-S2 | DIG-23 | Story | Extensible page shell, navigation and section architecture | frontend | E5-T1 | Sprint 1 | In Progress (started 2026-10-09, branch feature/DIG-22-DIG-23-ui-design) |
| E3-S3 | DIG-24 | Story | Hero and Services sections | frontend | E2-S3, E3-S1, E3-S2 | Sprint 2 | To Do |
| E3-S4 | DIG-25 | Story | About and Footer sections | frontend | E2-S3, E3-S1, E3-S2 | Sprint 2 | To Do |
| E3-S5 | DIG-26 | Story | Contact section and accessible contact form UI | frontend | E2-S3, E4-S2, E3-S2 | Sprint 2 | To Do |
| E3-S6 | DIG-27 | Story | Metadata, SEO files, favicon/OG image, 404 and privacy view | frontend | E2-S4, E2-S5, E1-T4 | Sprint 2 | To Do |
| E3-S7 | DIG-51 | Story | UI design review: owner approval of visual direction | frontend, pm (decision: product-owner) | E3-S1, E3-S2, E3-S8, E3-S9 | Sprint 1 | In Progress (owner reviewing since 2026-10-10) |
| E3-S8 | DIG-52 | Story | AI-themed visual design and illustrations | frontend | E3-S1 | Sprint 1 | In Progress |
| E3-S9 | DIG-53 | Story | About us page with consultants | frontend | E3-S2; E2-S6 to close | Sprint 1 | In Progress (placeholder cards) |
| E3-S10 | DIG-59 | Story | Clients page (/clients) | frontend | E2-S10 (DIG-61) to close | Sprint 2 | In Progress (branch feature/clients-and-feedback-pages; tagged placeholders) |
| E3-S11 | DIG-60 | Story | Client feedback page (/testimonials) | frontend | E2-S10 (DIG-61) to close | Sprint 2 | In Progress (same branch; tagged placeholders) |

**E3-S1 Design system proposal**
Propose colour, typography, spacing, radius and component styles, using existing brand assets if the owner has them.
- [ ] `docs/frontend/design-system.md` with tokens and component inventory
- [ ] Colour pairs meet WCAG 2.2 AA contrast (ratios listed)
- [ ] Tokens implemented as Tailwind 4 theme variables in `src/app/globals.css`
- [ ] Fonts self-hosted via next/font
- [ ] Owner approves visual direction

**E3-S2 Extensible page shell, navigation and section architecture**
Replace the placeholder page with a structure that can become multi-page later: layout shell, Header (desktop and mobile menu), Footer, Section wrapper, typed content modules in `src/content`. Can start with placeholder content before copy is ready.
- [ ] Sections are components in `src/components`, content comes from `src/content` modules
- [ ] Nav items defined once as data, supporting both `#anchor` and route links
- [ ] Mobile menu is keyboard operable, has visible focus, correct ARIA, closes on Escape
- [ ] Skip-to-content link; one H1; landmark elements
- [ ] `docs/frontend/components.md` documents how a section becomes a page in Phase 2
- [ ] Typecheck and build pass in Docker

**E3-S3 Hero and Services sections**
Build the hero (what DigitizWork does, for whom, primary CTA) and the services section from approved copy.
- [ ] Copy matches `docs/marketing/website-content.md` exactly
- [ ] Primary CTA scrolls to Contact
- [ ] Responsive at 360, 768, 1024, 1440px
- [ ] No client JavaScript unless required

**E3-S4 About and Footer sections**
Build About (and How we work, if approved in E2-S2) and the footer with approved contact details and legal links.
- [ ] Only owner-confirmed facts shown
- [ ] Footer includes privacy link and published contact details only
- [ ] Responsive at 360, 768, 1024, 1440px

**E3-S5 Contact section and accessible contact form UI**
Build the contact form against the E4-S2 API and shared schema: fields, client-side validation, honeypot and timing fields, pending, success and error states.
- [ ] Uses the shared zod schema from `src/lib/validation`
- [ ] Every field has a label; errors linked via `aria-describedby`; focus moves to the first error
- [ ] Success and failure announced to screen readers
- [ ] Honeypot hidden from users and assistive tech
- [ ] Consent checkbox wording links to the privacy notice

**E3-S6 Metadata, SEO files, favicon/OG image, 404 and privacy view**
Implement metadata from the SEO strategy, `sitemap.ts`, `robots.ts`, JSON-LD, favicon, OG image, the not-found page and the privacy notice (format per OQ-3).
- [ ] Title, description, canonical and OG tags match `docs/marketing/seo-strategy.md`
- [ ] `sitemap.xml` and `robots.txt` served by the production image
- [ ] JSON-LD validates and contains only confirmed facts
- [ ] 404 page with link home
- [ ] Privacy notice reachable from footer and form

**E3-S7 UI design review: owner approval of visual direction** (added 2026-10-09 at owner request)
The owner reviews the UI design screenshots and the live local build, then approves the visual direction or requests changes.
- [ ] Screenshots for desktop and mobile are linked from DIG-22 and DIG-23
- [ ] Owner decision (approve / request changes) recorded as a comment on DIG-51
- [ ] Each change request becomes a new issue
Blocked by: DIG-22, DIG-23, DIG-52, DIG-53.

**E3-S8 AI-themed visual design and illustrations** (DIG-52, owner requirement 2026-10-09, In Progress)
A visually rich design with AI-themed imagery conveying that DigitizWork can deliver any software solution using AI. Original SVG illustrations built in code (no image generator available), plus prompts so the owner can generate photorealistic images later (E2-S7).
- [ ] Original SVG illustrations for the hero, services and process sections
- [ ] Image slots swappable via content modules
- [ ] `docs/frontend/image-prompts.md` with prompts for AI-generated photos
- [ ] Alt text on all images (decorative images marked as such)
- [ ] WCAG 2.2 AA contrast maintained
- [ ] `prefers-reduced-motion` respected
- [ ] Owner approves via DIG-51

**E3-S9 About us page with consultants** (DIG-53, owner requirement 2026-10-09, In Progress)
A separate `/about` page presenting the company's real consultants. Uses placeholder cards until E2-S6 delivers real profiles. Cannot close until E2-S6 (DIG-54) is done.
- [ ] `/about` route with its own metadata (title, description, canonical, OG)
- [ ] Consultant cards driven by `src/content/consultants.ts`
- [ ] No invented names, bios or photos
- [ ] Navigation links to `/about`
- [ ] Responsive at 390 and 1440px
- [ ] Screenshots linked on DIG-53

---

## E4 Contact Form & Backend (Epic DIG-6) (owner: backend)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E4-S1 | DIG-28 | Story | Backend design and contact API contract | backend | E1-T1 (draft), E1-T3 Q5 (final) | Sprint 1 | To Do |
| E4-S2 | DIG-29 | Story | Contact API endpoint with shared validation | backend | E4-S1 | Sprint 2 | To Do |
| E4-S3 | DIG-30 | Story | Email delivery adapter and environment validation | backend | E4-S2, E1-T4 (OQ-4) | Sprint 2 | To Do |
| E4-S4 | DIG-31 | Story | Abuse protection: honeypot, fill time, rate limit | backend | E4-S2 | Sprint 2 | To Do |
| E4-S5 | DIG-32 | Story | Security headers and CSP | backend | E3-S2 | Sprint 2 | To Do |
| E4-S6 | DIG-33 | Task | Backend unit tests (Vitest) | backend | E4-S2, E4-S3, E4-S4, E5-T3 | Sprint 2 | To Do |

**E4-S1 Backend design and contact API contract**
Document the contact flow: fields, validation rules, request/response format, error codes, email adapter interface, spam controls, logging policy (no PII), environment variables.
- [ ] `docs/architecture/backend-design.md` exists
- [ ] Contract for `POST /api/contact`: request schema, 200/400/429/500 responses with examples
- [ ] Field list agreed with Marketing (labels) and Frontend (UI)
- [ ] Data flow section usable by E2-S5 privacy notice

**E4-S2 Contact API endpoint with shared validation**
Implement `src/app/api/contact/route.ts` and the shared zod schema in `src/lib/validation`.
- [ ] Rejects invalid payloads with 400 and field-level errors per the contract
- [ ] Accepts only POST with JSON; body size limited
- [ ] Schema imported by both server and client
- [ ] No personal data written to logs

**E4-S3 Email delivery adapter and environment validation**
Adapter interface with a console adapter for local dev and, only after owner approval, a real provider. `src/lib/env.ts` validates env at startup; `.env.example` documents variables.
- [ ] Console adapter works in Docker dev with no secrets
- [ ] Provider adapter not enabled and no account created without approval (OQ-4)
- [ ] Missing or invalid env fails fast with a clear message
- [ ] Secrets are not baked into the Docker image (coordinate with E5-T5)

**E4-S4 Abuse protection: honeypot, fill time, rate limit**
Silently drop honeypot-filled and too-fast submissions; per-IP in-memory rate limit returning 429.
- [ ] Honeypot and minimum fill time enforced server-side
- [ ] Rate limit threshold documented; returns 429 with Retry-After
- [ ] Limitation of in-memory limiter documented (per instance)

**E4-S5 Security headers and CSP**
Add CSP and baseline security headers in `next.config.ts` (shared file; change via orchestrator).
- [ ] CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors set
- [ ] No CSP violations in browser console on the production image
- [ ] Headers verified with a curl check against :8080

**E4-S6 Backend unit tests (Vitest)**
Unit tests for schema, route handler, adapters and abuse controls.
- [ ] Tests in `tests/unit` cover valid, invalid, honeypot, too-fast, rate-limited and adapter-failure cases
- [ ] `npm test` passes inside the Docker container; output attached as evidence

---

## E5 Local Dev & DevOps (Docker) (Epic DIG-7) (owner: orchestrator unless stated)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E5-T1 | DIG-34 | Task | Next.js 16 + TypeScript + Tailwind starter | orchestrator | none | Done | Done |
| E5-T2 | DIG-35 | Task | Docker dev (:3000) and production image (:8080) | orchestrator | E5-T1 | Done | Done |
| E5-T3 | DIG-36 | Task | Quality tooling and npm scripts (lint, test, e2e) | orchestrator | E5-T1 | Sprint 1 | To Do |
| E5-T4 | DIG-37 | Task | Version control: git init and repository decision | orchestrator | E1-T4 (OQ-6) for remote | Sprint 1 | Done (with gaps: CI not set up, remote decision not in decision log) |
| E5-T5 | DIG-38 | Task | Environment and secrets handling in Docker | backend | E4-S3 | Sprint 2 | To Do |
| E5-S6 | DIG-58 | Story | CI/CD pipeline: GitHub Actions to AWS EC2 | orchestrator | owner EC2 setup and GitHub variables/secret | Sprint 1 | In Progress (workflow committed 4b7f6d7; Actions run not yet verified; EC2 not launched) |

**E5-T1 Next.js 16 + TypeScript + Tailwind starter** (Done)
- [x] `package.json` pins next 16.4.0, react 19.3.0, typescript 5.9.3, tailwindcss 4.3.3
- [x] Placeholder single page with Services / About / Contact anchors in `src/app/page.tsx`
- [x] Typecheck passes
Evidence: files present; `npx tsc --noEmit` run by PM inside container `digitizwork-site-web-1` on 2026-10-09, exit code 0.

**E5-T2 Docker dev (:3000) and production image (:8080)** (Done)
- [x] Multi-stage `Dockerfile` (dev, builder, non-root standalone runner)
- [x] `docker-compose.yml`: `web` (dev, hot reload, :3000) and `web-prod` (profile prod, :8080)
- [x] Dev container serves the page
- [x] Production image builds and runs
Evidence: PM checked 2026-10-09: container `digitizwork-site-web-1` up, `curl http://localhost:3000/` returned 200; image `digitizwork-site-web-prod:latest` exists. The production container was not running at the time of the PM check; its run on :8080 is per the orchestrator's 2026-10-09 verification, not re-verified by PM.

**E5-T3 Quality tooling and npm scripts**
Add ESLint, Vitest, Playwright and @axe-core/playwright (versions pinned) and scripts `lint`, `test`, `test:e2e`. Today `package.json` has only dev/build/start/typecheck.
- [ ] Scripts `lint`, `typecheck`, `test`, `test:e2e` exist and run inside Docker
- [ ] Documented how to run Playwright against the production container on :8080
- [ ] `npm run lint` and `npm run typecheck` pass on the current code

**E5-T4 Version control: git init and repository decision**
The workspace is not a git repository. Initialise git locally; create a GitHub remote and CI only if the owner approves (OQ-6). Also correct the workspace path in the decision log (it says `/mnt/project-files/digitizwork-site`; the actual workspace is `C:\Users\prasa\Documents\digitizwork-site\digitizwork-site`).
- [x] `git init` with `.gitignore` covering `.env*`, `.next`, `node_modules`
- [ ] Owner decision on GitHub remote recorded (remote exists, so the decision was made, but it is not yet in decision-log.md)
- [ ] If approved: CI runs lint, typecheck, test, build on pull requests (NOT done: no `.github/workflows`; needs a follow-up issue)
- [x] Decision log workspace entry corrected
Evidence (PM check, 2026-10-09): branches main and feature/DIG-22-DIG-23-ui-design; commits 3e9bd29, e1ea570, 060fd5f; origin = https://github.com/prasa7/digitizwork-website.git. The local origin/main ref is at e1ea570, so 060fd5f is not yet shown as pushed. Private visibility not verified by PM. Closed in Jira at the coordinator's request, with the gaps recorded in a comment on DIG-37.

**E5-T5 Environment and secrets handling in Docker**
Make env vars available to dev and prod containers without committing or baking secrets.
- [ ] `.env.example` committed; `.env` git-ignored and docker-ignored
- [ ] Compose loads env via `env_file` for both services (shared file; change via orchestrator)
- [ ] Production image inspected: no secrets in layers

---

## E6 QA & Accessibility (Epic DIG-8) (owner: qa)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E6-S1 | DIG-39 | Story | Test plan and acceptance criteria | qa | E2-S2, E4-S1 (drafts) | Sprint 1 | To Do |
| E6-S2 | DIG-40 | Story | Playwright E2E suite (navigation and contact form) | qa | E5-T3, E3-S2, E4-S2 | Sprint 2 | To Do |
| E6-S3 | DIG-41 | Story | Accessibility testing (axe and manual keyboard) | qa | E3-S3, E3-S4, E3-S5, E3-S6 | Sprint 3 | To Do |
| E6-S4 | DIG-42 | Story | SEO, responsive and performance checks | qa | E3-S6, E2-S4 | Sprint 3 | To Do |
| E6-S5 | DIG-43 | Story | Test report, defect triage and release checklist | qa | E6-S2, E6-S3, E6-S4 | Sprint 3 | To Do |

**E6-S1 Test plan and acceptance criteria**
- [ ] `docs/qa/test-plan.md` maps every success criterion in the brief to tests
- [ ] Defines defect severity levels (Critical, High, Medium, Low)
- [ ] States the test target: production Docker image on :8080

**E6-S2 Playwright E2E suite (navigation and contact form)**
- [ ] `playwright.config.ts` and `tests/e2e/` exist
- [ ] Covers anchor navigation, mobile menu, form happy path, field errors, 429 handling, server error
- [ ] Suite passes against the production container; run output attached

**E6-S3 Accessibility testing (axe and manual keyboard)**
- [ ] `tests/a11y/` axe scan: zero serious or critical violations
- [ ] Manual keyboard and screen reader pass documented (tab order, focus visibility, form errors)
- [ ] WCAG 2.2 AA findings logged as defects with severity

**E6-S4 SEO, responsive and performance checks**
- [ ] `tests/seo/` verifies title, description, canonical, OG, one H1, sitemap.xml, robots.txt, JSON-LD
- [ ] Screenshots at 360, 768, 1024, 1440px reviewed
- [ ] Lighthouse mobile and desktop scores recorded; 90+ in all categories or defects raised

**E6-S5 Test report, defect triage and release checklist**
- [ ] `docs/qa/test-report.md` with commands run, results and open defects by severity
- [ ] `docs/qa/release-checklist.md` complete
- [ ] Every Critical/High defect has an owner and a re-test result

---

## E7 Launch (Epic DIG-9)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E7-T1 | DIG-44 | Task | Fix Critical/High defects and re-test | frontend, backend (per defect), qa (re-test) | E6-S5 | Sprint 3 | To Do |
| E7-T2 | DIG-45 | Task | Release readiness review (go / no-go) | pm | E7-T1, E6-S5 | Sprint 3 | To Do |
| E7-T3 | DIG-46 | Task | Hosting, domain and email provider proposal for approval | orchestrator | E1-T4 (OQ-8), E7-T2 | Sprint 3 | To Do |
| E7-T4 | DIG-47 | Task | Production deployment (only with owner approval) | orchestrator | E7-T3 approved; E5-S6 (DIG-58) | Sprint 3 | In Progress: public preview on EC2 approved 2026-10-10 (D11). Not the QA-gated launch |

**E7-T1 Fix Critical/High defects and re-test**
- [ ] Every Critical/High defect from E6-S5 fixed by its owner
- [ ] QA re-test recorded for each; zero open Critical/High
- [ ] Medium/Low defects either fixed or accepted by the owner in writing

**E7-T2 Release readiness review (go / no-go)**
- [ ] `docs/project/status-report.md` contains a readiness summary based on the test report and release checklist
- [ ] "Go" only if zero open Critical/High and checklist met
- [ ] Owner go / no-go decision recorded in the decision log

**E7-T3 Hosting, domain and email provider proposal for approval**
- [ ] Options with cost and commercial-use terms (e.g. Vercel Pro, Cloudflare)
- [ ] Domain and DNS steps listed; email provider setup listed
- [ ] Owner approval or rejection recorded; nothing purchased or created before approval

**E7-T4 Production deployment (only with owner approval)**
- [ ] Owner approval recorded before any action
- [ ] Deployed build matches the QA-tested image/commit
- [ ] Smoke test on the live URL: page loads, form delivers to the agreed inbox, headers present

---

## E8 Phase 2 Multi-page Expansion (Epic DIG-10) (Backlog)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E8-S1 | DIG-48 | Story | Phase 2 sitemap and page content | marketing | E7-T2, owner material | Backlog | To Do |
| E8-S2 | DIG-49 | Story | Split sections into routes (Services, Service detail, Contact, Terms; About already delivered in Phase 1 by E3-S9 per D10) | frontend | E8-S1 | Backlog | To Do |
| E8-S3 | DIG-50 | Story | Phase 2 QA regression and SEO update | qa | E8-S2 | Backlog | To Do |

**E8-S1 Phase 2 sitemap and page content**
Based on kickoff section 5. Case studies, blog, careers and industries only when real material exists.
- [ ] Updated `docs/marketing/sitemap.md` with pages, purpose, CTA
- [ ] Copy and SEO entries per page, owner-approved

**E8-S2 Split sections into routes**
- [ ] New routes reuse Phase 1 section components and content modules
- [ ] Existing `/#anchor` links still reach the right content (keep sections on home or redirect)
- [ ] Nav switches from anchors to routes via the nav data only

**E8-S3 Phase 2 QA regression and SEO update**
- [ ] E2E, a11y and SEO suites extended to every new page
- [ ] sitemap.xml lists all pages; unique title/description per page
- [ ] Zero open Critical/High defects

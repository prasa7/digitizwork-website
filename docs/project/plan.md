# DigitizWork website: Jira-ready plan

Prepared by: PM agent, 2026-10-09. Scope: [project-brief.md](project-brief.md).
Jira status: NOT created. Waiting for the owner's new Jira project key. The "Jira key" column is intentionally empty.

## How to load into Jira

- Create one Epic per section below (Epic name = section title). Then create each item as the listed issue type, linked to its Epic.
- Labels: `owner:marketing`, `owner:frontend`, `owner:backend`, `owner:qa`, `owner:pm`, `owner:orchestrator`, `owner:product-owner`. Add `phase-1` or `phase-2`.
- Description: the item's description paragraph. Acceptance criteria: the checklist (paste as a Jira checklist or in the description under "Acceptance criteria").
- Dependencies: create "is blocked by" links using the IDs in "Depends on" once Jira keys exist, then fill the Jira key column here.
- Sprints: Sprint 1 = discovery and definition; Sprint 2 = build; Sprint 3 = verification and launch readiness; Backlog = Phase 2. Sprint length is not set (owner decision); suggest 1 week each.
- Done items: create directly in Done status with the evidence in a comment.

Status values: Done, To Do, Blocked. Nothing is In Progress at the time of writing.

## Summary

| Epic | Items | Done | Sprint 1 | Sprint 2 | Sprint 3 | Backlog |
|---|---|---|---|---|---|---|
| E1 Discovery & Planning | 6 | 2 | 4 | 0 | 0 | 0 |
| E2 Brand & Content | 5 | 0 | 2 | 3 | 0 | 0 |
| E3 Design System & Frontend | 6 | 0 | 2 | 4 | 0 | 0 |
| E4 Contact Form & Backend | 6 | 0 | 1 | 5 | 0 | 0 |
| E5 Local Dev & DevOps (Docker) | 5 | 2 | 2 | 1 | 0 | 0 |
| E6 QA & Accessibility | 5 | 0 | 1 | 1 | 3 | 0 |
| E7 Launch | 4 | 0 | 0 | 0 | 4 | 0 |
| E8 Phase 2 Multi-page Expansion | 3 | 0 | 0 | 0 | 0 | 3 |
| Total | 40 | 4 | 12 | 14 | 7 | 3 |

(Done items are counted in "Done" only, not in a sprint column.)

## Critical path

E1-T3 owner discovery answers -> E2-S1 positioning -> E2-S3 copy -> E3-S3/E3-S4 sections -> E6-S2..S4 testing -> E7-T1 fixes -> E7-T2 release readiness.

Work that can start before discovery answers arrive: E1-T5 (once key is given), E3-S2 (page shell and section architecture with placeholder content), E4-S1 (draft API contract from kickoff form fields), E5-T3 (quality tooling), E5-T4 (git init), E6-S1 (draft test plan).

---

## E1 Discovery & Planning

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E1-T1 | | Task | Create agent team definitions | orchestrator | none | Done | Done |
| E1-T2 | | Task | Project brief and Jira-ready plan | pm | E1-T1 | Done | Done |
| E1-T3 | | Task | Owner answers discovery questions | product-owner | E1-T1 | Sprint 1 | Blocked (waiting on owner) |
| E1-T4 | | Task | Owner confirms assumptions and launch decisions | product-owner | E1-T3 | Sprint 1 | To Do |
| E1-T5 | | Task | Create Jira project backlog from this plan | pm | E1-T2, owner Jira key | Sprint 1 | Blocked (no Jira key) |
| E1-T6 | | Task | Approve implementation plan (build gate) | product-owner | E2-S2, E3-S1, E4-S1, E6-S1 | Sprint 1 | To Do |

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

**E1-T5 Create Jira project backlog from this plan** (Blocked)
Once the owner gives the Jira project key, create epics, issues, labels and dependency links, then record keys in this file.
- [ ] 8 epics and all items created with type, labels, description, acceptance criteria, sprint
- [ ] "Is blocked by" links match the Depends on column
- [ ] Done items created in Done with evidence comments
- [ ] Jira key column in this file filled in

**E1-T6 Approve implementation plan (build gate)**
The owner reviews the section map, design system proposal, API contract and test plan before Sprint 2 build begins.
- [ ] Owner approval recorded in the decision log with date
- [ ] Any requested changes captured as backlog items

---

## E2 Brand & Content (owner: marketing)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E2-S1 | | Story | Positioning, audience and brand voice | marketing | E1-T3 | Sprint 1 | To Do |
| E2-S2 | | Story | Single-page section map and Phase 2 sitemap | marketing | E2-S1 | Sprint 1 | To Do |
| E2-S3 | | Story | Copy for all single-page sections | marketing | E2-S2, E1-T4 | Sprint 2 | To Do |
| E2-S4 | | Story | SEO strategy for the single page | marketing | E2-S1 | Sprint 2 | To Do |
| E2-S5 | | Story | Privacy notice content for form data | marketing | E1-T3 (Q5, Q10), E1-T4 (OQ-3), E4-S1 | Sprint 2 | To Do |

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

---

## E3 Design System & Frontend (owner: frontend)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E3-S1 | | Story | Design system proposal | frontend | E1-T3 (Q6), E2-S1 | Sprint 1 | To Do |
| E3-S2 | | Story | Extensible page shell, navigation and section architecture | frontend | E5-T1 | Sprint 1 | To Do |
| E3-S3 | | Story | Hero and Services sections | frontend | E2-S3, E3-S1, E3-S2 | Sprint 2 | To Do |
| E3-S4 | | Story | About and Footer sections | frontend | E2-S3, E3-S1, E3-S2 | Sprint 2 | To Do |
| E3-S5 | | Story | Contact section and accessible contact form UI | frontend | E2-S3, E4-S2, E3-S2 | Sprint 2 | To Do |
| E3-S6 | | Story | Metadata, SEO files, favicon/OG image, 404 and privacy view | frontend | E2-S4, E2-S5, E1-T4 | Sprint 2 | To Do |

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

---

## E4 Contact Form & Backend (owner: backend)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E4-S1 | | Story | Backend design and contact API contract | backend | E1-T1 (draft), E1-T3 Q5 (final) | Sprint 1 | To Do |
| E4-S2 | | Story | Contact API endpoint with shared validation | backend | E4-S1 | Sprint 2 | To Do |
| E4-S3 | | Story | Email delivery adapter and environment validation | backend | E4-S2, E1-T4 (OQ-4) | Sprint 2 | To Do |
| E4-S4 | | Story | Abuse protection: honeypot, fill time, rate limit | backend | E4-S2 | Sprint 2 | To Do |
| E4-S5 | | Story | Security headers and CSP | backend | E3-S2 | Sprint 2 | To Do |
| E4-S6 | | Task | Backend unit tests (Vitest) | backend | E4-S2, E4-S3, E4-S4, E5-T3 | Sprint 2 | To Do |

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

## E5 Local Dev & DevOps (Docker) (owner: orchestrator unless stated)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E5-T1 | | Task | Next.js 16 + TypeScript + Tailwind starter | orchestrator | none | Done | Done |
| E5-T2 | | Task | Docker dev (:3000) and production image (:8080) | orchestrator | E5-T1 | Done | Done |
| E5-T3 | | Task | Quality tooling and npm scripts (lint, test, e2e) | orchestrator | E5-T1 | Sprint 1 | To Do |
| E5-T4 | | Task | Version control: git init and repository decision | orchestrator | E1-T4 (OQ-6) for remote | Sprint 1 | To Do |
| E5-T5 | | Task | Environment and secrets handling in Docker | backend | E4-S3 | Sprint 2 | To Do |

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
- [ ] `git init` with `.gitignore` covering `.env*`, `.next`, `node_modules`
- [ ] Owner decision on GitHub remote recorded
- [ ] If approved: CI runs lint, typecheck, test, build on pull requests
- [ ] Decision log workspace entry corrected

**E5-T5 Environment and secrets handling in Docker**
Make env vars available to dev and prod containers without committing or baking secrets.
- [ ] `.env.example` committed; `.env` git-ignored and docker-ignored
- [ ] Compose loads env via `env_file` for both services (shared file; change via orchestrator)
- [ ] Production image inspected: no secrets in layers

---

## E6 QA & Accessibility (owner: qa)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E6-S1 | | Story | Test plan and acceptance criteria | qa | E2-S2, E4-S1 (drafts) | Sprint 1 | To Do |
| E6-S2 | | Story | Playwright E2E suite (navigation and contact form) | qa | E5-T3, E3-S2, E4-S2 | Sprint 2 | To Do |
| E6-S3 | | Story | Accessibility testing (axe and manual keyboard) | qa | E3-S3, E3-S4, E3-S5, E3-S6 | Sprint 3 | To Do |
| E6-S4 | | Story | SEO, responsive and performance checks | qa | E3-S6, E2-S4 | Sprint 3 | To Do |
| E6-S5 | | Story | Test report, defect triage and release checklist | qa | E6-S2, E6-S3, E6-S4 | Sprint 3 | To Do |

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

## E7 Launch

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E7-T1 | | Task | Fix Critical/High defects and re-test | frontend, backend (per defect), qa (re-test) | E6-S5 | Sprint 3 | To Do |
| E7-T2 | | Task | Release readiness review (go / no-go) | pm | E7-T1, E6-S5 | Sprint 3 | To Do |
| E7-T3 | | Task | Hosting, domain and email provider proposal for approval | orchestrator | E1-T4 (OQ-8), E7-T2 | Sprint 3 | To Do |
| E7-T4 | | Task | Production deployment (only with owner approval) | orchestrator | E7-T3 approved | Sprint 3 | Blocked (needs approval) |

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

## E8 Phase 2 Multi-page Expansion (Backlog)

| ID | Jira key | Type | Summary | Owner | Depends on | Sprint | Status |
|---|---|---|---|---|---|---|---|
| E8-S1 | | Story | Phase 2 sitemap and page content | marketing | E7-T2, owner material | Backlog | To Do |
| E8-S2 | | Story | Split sections into routes (Services, Service detail, About, Contact, Terms) | frontend | E8-S1 | Backlog | To Do |
| E8-S3 | | Story | Phase 2 QA regression and SEO update | qa | E8-S2 | Backlog | To Do |

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

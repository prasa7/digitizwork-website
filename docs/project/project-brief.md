# DigitizWork website: project brief

Owner: Prasanna (product owner). Prepared by: PM agent. Date: 2026-10-09.
Status: draft, blocked on owner discovery answers (see section 7).
Backlog: [plan.md](plan.md). Risks and decisions: [risks-and-decisions.md](risks-and-decisions.md).

This brief supersedes the launch sitemap in [phase-1-kickoff.md](phase-1-kickoff.md) section 5. The multi-page sitemap there is retained as the Phase 2 scope.

## 1. Objectives

1. Publish a credible single-page website that states clearly what DigitizWork does and for whom, using only owner-confirmed facts.
2. Convert visitors into enquiries through a working, secure contact form that delivers to the owner's inbox.
3. Meet a professional quality bar: responsive from 360px, WCAG 2.2 AA, Lighthouse 90+ in all categories, correct SEO metadata.
4. Build the code so the single page can be split into multiple pages later without a rewrite (sections as reusable components, content in typed modules, navigation that supports both anchors and routes).
5. Run consistently on any machine through Docker (dev on :3000, production image on :8080).

Business objectives (target audience, primary conversion, markets) cannot be stated yet: they depend on discovery answers Q1 to Q4.

## 2. In scope (Phase 1: single-page launch)

- One page at `/` with sections. Proposed section order, to be confirmed by the Marketing Agent's section map: Header and navigation, Hero, Services, About / How we work, Contact (form plus published contact details), Footer.
- Privacy notice covering form data. Whether this is a minimal `/privacy` route or an in-page section is an open question (OQ-3).
- Not-found (404) page.
- Contact API: `POST /api/contact` with shared zod validation, email delivery adapter (console adapter locally, real provider only after approval), honeypot, minimum fill time, per-IP rate limit.
- Security headers and CSP.
- SEO: title, description, canonical, Open Graph image, favicon, `sitemap.ts`, `robots.ts`, JSON-LD (Organization, WebSite; Service only for confirmed services).
- Brand and content: positioning, brand voice, copy for every section, SEO strategy.
- Design system: tokens (colour, type, spacing), core components.
- Quality tooling: ESLint, typecheck, Vitest, Playwright, axe; all runnable inside Docker.
- QA: test plan, automated E2E, accessibility, SEO, responsive and performance checks, test report, release checklist.
- Release readiness review (go / no-go) for a local production build.

## 3. Out of scope / later phases

| Item | Phase | Note |
|---|---|---|
| Multi-page site (Services overview, Service detail, About, Contact, Terms pages) | Phase 2 | Kickoff section 5 sitemap; plan epic E8 |
| Case studies, Blog / Insights, Careers, Industries | Phase 2+ | Only when real material exists; no placeholder proof |
| Headless CMS | Later | Content lives in code (assumption A3) |
| Hosting, domain, DNS, production deployment | Requires explicit owner approval | No account creation or deployment without approval |
| Analytics and cookie consent | Requires owner decision (Q11) | Default: none at launch |
| Paid services (email provider paid tier, hosting plans, Turnstile alternatives) | Requires owner approval | |
| Database, separate backend service, user accounts | Not planned | Only server need is the contact form |
| Fabricated proof: testimonials, client logos, statistics, certifications | Never | Integrity rule for all agents |

## 4. Constraints

- Stack (pinned): Next.js 16.4.0, React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.3, Node 22 (alpine image). TypeScript 7 deliberately avoided (decision log).
- Local runtime is Docker. Host `node_modules` is empty; npm scripts are run inside the container (`docker exec digitizwork-site-web-1 ...`) or through compose.
- No hosting, deployment, purchases or third-party account creation without owner approval.
- No invented business facts; assumptions are marked `[ASSUMPTION]` and must be confirmed before launch.
- Agents edit only their owned paths (see `.claude/agents/`). Shared files with no single owner (`package.json`, `next.config.ts`, `docker-compose.yml`, `Dockerfile`) are changed via the orchestrator.
- Workspace is not a git repository yet, and no GitHub repository exists (OQ-6).
- Jira: backlog is planned but not created; waiting for the owner's new Jira project key.

## 5. Success criteria (Phase 1 launch-ready)

1. Every section contains owner-approved copy; zero `[ASSUMPTION]` markers or placeholder text remain in `src/`.
2. Contact form: valid submission is delivered to the agreed inbox (or console adapter in local dev, per approval); invalid input shows accessible field errors; spam controls and rate limiting verified by tests.
3. QA test report shows zero open Critical/High defects; all automated suites pass inside Docker against the production image.
4. axe scan reports zero serious/critical violations; full keyboard operation verified manually.
5. Lighthouse 90+ for Performance, Accessibility, Best Practices, SEO on mobile and desktop against the production image.
6. Layout verified at 360, 768, 1024 and 1440px widths.
7. `docker compose up` (dev) and `docker compose --profile prod up web-prod` (prod) both start cleanly from a fresh clone.
8. Release checklist (docs/qa/release-checklist.md) complete and signed off by the owner.
9. Adding a second page in Phase 2 requires no rewrite of section components (verified by a design review of the component and content structure).

## 6. Stakeholders and roles

| Role | Who | Responsibility |
|---|---|---|
| Product owner | Prasanna | Business facts, approvals, go / no-go |
| Orchestrator | Main Claude session | Technical decisions, integration, shared files, agent dispatch |
| PM | digitizwork-project-manager-agent | Brief, plan, risks, status, release readiness |
| Marketing | digitizwork-marketing-agent | Positioning, copy, SEO, section map |
| Frontend | digitizwork-frontend-agent | Design system, sections, metadata |
| Backend | digitizwork-backend-agent | Contact API, validation, email, security |
| QA | digitizwork-qa-agent | Test plan, automated suites, test report, release checklist |

## 7. Open questions for the owner

Discovery questions from [phase-1-kickoff.md](phase-1-kickoff.md) section 4 are unanswered. This is the first blocker (plan item E1-T3).

| ID | Question | Blocks | Default if undecided |
|---|---|---|---|
| OQ-1 | Kickoff Q1 to Q11 (services, customers, location and language, main goal, contact details and receiving inbox, brand assets, domain, confirmable facts, reference sites, privacy jurisdiction, analytics) | All content, design, contact delivery | Q1 to Q5 have no safe default; must be answered |
| OQ-2 | Confirm assumptions A1 to A8 in the kickoff doc | Copy language, form, email, analytics | Kickoff defaults apply |
| OQ-3 | Privacy notice: separate minimal `/privacy` route (recommended, since the form collects personal data) or an in-page section? | E2-S5, E3-S6 | `/privacy` route |
| OQ-4 | Email delivery for launch: managed provider (e.g. Resend), your existing mailbox via SMTP, or console-only until hosting is decided? | E4-S3 | Console adapter only; real provider after approval |
| OQ-5 | Which sections to include on the single page (e.g. is a "How we work" section wanted)? | E2-S2 | Marketing proposes; owner approves |
| OQ-6 | Should a GitHub repository be created, and under which account? Needed for version control and CI | E5-T4 | Local git init only, no remote |
| OQ-7 | Jira project key | E1-T5 | n/a |
| OQ-8 | Is "launch" for Phase 1 a local production build only, or do you intend to deploy publicly after QA? | E7-T3, E7-T4 | Local production build only |

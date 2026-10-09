# Risks and decisions

Maintained by: PM agent. Last updated: 2026-10-09.
Decisions are carried over from [decision-log.md](decision-log.md), which remains the orchestrator's running log. Plan item IDs refer to [plan.md](plan.md).

## Risk register

Likelihood and impact: Low / Medium / High.

| ID | Risk | Likelihood | Impact | Mitigation | Owner | Linked items | Status |
|---|---|---|---|---|---|---|---|
| R1 | Owner discovery answers delayed; all content, design and contact delivery wait on them | High | High | Start unblocked work now (E3-S2, E4-S1 draft, E5-T3, E5-T4, E6-S1); keep the question list short; accept "not decided" with defaults for Q6 to Q11 | pm / product-owner | E1-T3 | Open |
| R2 | Pressure to fill gaps with invented facts, testimonials or statistics | Medium | High | Agent integrity rules; `[ASSUMPTION]` markers; QA check for zero markers before release | marketing / qa | E2-S3, E6-S5 | Open |
| R3 | Single-page code structured in a way that makes Phase 2 multi-page a rewrite | Medium | Medium | Sections as components, content in typed modules, nav as data supporting anchors and routes; documented in components.md | frontend | E3-S2, E8-S2 | Open |
| R4 | No email provider approved, so the contact form cannot deliver real enquiries at launch | Medium | High | Console adapter for local; adapter interface so provider is a config change; decision OQ-4 raised early | backend / product-owner | E4-S3, E1-T4 | Open |
| R5 | No version control: work can be lost and changes cannot be reviewed or reverted | High | High | git init in Sprint 1; GitHub remote on owner approval | orchestrator | E5-T4 | Open |
| R6 | Host `node_modules` is empty; npm scripts fail on the host (`tsc` not found), causing confusion or tests run in inconsistent environments | High | Low | Run all scripts inside Docker; document commands; QA tests against the production container | orchestrator / qa | E5-T3 | Open |
| R7 | Shared files (`package.json`, `next.config.ts`, `Dockerfile`, `docker-compose.yml`) have no single owner; concurrent edits from agents conflict | Medium | Medium | Orchestrator applies changes to shared files; agents request changes in their handback | orchestrator | E4-S5, E5-T3, E5-T5 | Open |
| R8 | In-memory rate limiter is per instance and resets on restart; insufficient if deployed to serverless or multiple instances | Low (local) / Medium (deployed) | Medium | Document limitation; Turnstile or managed store only with approval, revisit at E7-T3 | backend | E4-S4, E7-T3 | Open |
| R9 | Privacy obligations unclear until jurisdiction is known (Q10); form collects personal data | Medium | High | Privacy notice task depends on Q10; flagged "not legal advice"; owner review required | marketing / product-owner | E2-S5 | Open |
| R10 | Lighthouse 90+ or WCAG 2.2 AA not met late in the cycle | Medium | Medium | Static rendering, minimal client JS, contrast checked in design system; a11y checks during build, not only in Sprint 3 | frontend / qa | E3-S1, E6-S3, E6-S4 | Open |
| R11 | Jira project not yet created; plan and Jira may drift once both exist | Medium | Low | Create from plan.md in one pass; record keys in plan.md; Jira becomes source of truth for status afterwards | pm | E1-T5 | Open |
| R12 | Accidental deployment or third-party account creation without approval | Low | High | Explicit approval gate (E7-T3, E7-T4); agent rules forbid it | orchestrator | E7-T4 | Open |
| R13 | Decision log records the workspace as `/mnt/project-files/digitizwork-site`, but the actual workspace is `C:\Users\prasa\Documents\digitizwork-site\digitizwork-site` | Certain | Low | Correct the decision log entry (orchestrator owns that file) | orchestrator | E5-T4 | Open |

## Decisions

Carried over from decision-log.md (2026-10-09), plus decisions taken in planning.

| ID | Date | Decision | Status | Rationale | Source |
|---|---|---|---|---|---|
| D1 | 2026-10-09 | Single Next.js app, no separate backend or database | Proposed (awaiting owner approval at E1-T6) | Only server need is a contact form | decision-log.md |
| D2 | 2026-10-09 | Workspace at `/mnt/project-files/digitizwork-site` until a GitHub repo is named | Adopted (default), path out of date, see R13 | No repo attached | decision-log.md |
| D3 | 2026-10-09 | Four specialist subagents with path-based file ownership (plus PM agent) | Adopted | Prevent overlapping edits | decision-log.md |
| D4 | 2026-10-09 | Launch as a single-page site (sections), extendable to multiple pages later; multi-page sitemap moved to Phase 2 | Adopted (owner request) | Owner wants a single page first, room to grow | decision-log.md |
| D5 | 2026-10-09 | Run locally with Docker (dev with hot reload on :3000, production image on :8080) | Adopted (owner request) | Consistent local environment; same image can be deployed later | decision-log.md |
| D6 | 2026-10-09 | TypeScript 5.9.3 instead of 7.x | Adopted | TypeScript 7 is a new rewrite; Next.js compatibility not yet confirmed | decision-log.md |
| D7 | 2026-10-09 | No hosting or deployment without owner approval | Adopted (owner instruction) | Owner control of cost and exposure | Owner, 2026-10-09 |
| D8 | 2026-10-09 | Backlog planned in docs/project/plan.md; Jira issues created only after the owner supplies the new project key | Adopted | Owner is creating a new Jira project | Owner, 2026-10-09 |
| D9 | 2026-10-09 | Three sprints for Phase 1 (definition, build, verification and launch readiness); Phase 2 in backlog | Proposed (PM) | Matches dependency order; sprint length to be set by owner | PM plan |

## Pending owner decisions

See [project-brief.md](project-brief.md) section 7 (OQ-1 to OQ-8).

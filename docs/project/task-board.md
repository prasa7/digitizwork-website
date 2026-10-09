# Task board

The backlog lives in Jira project **DIG** (Digitizwork, team-managed Scrum). Board: https://digitizwork.atlassian.net/jira/software/projects/DIG/boards
Jira is the source of truth for status. [plan.md](plan.md) holds scope, acceptance criteria and the plan-ID-to-Jira-key mapping.

Last updated: 2026-10-09 (PM agent). Sprints are not yet created on the board: the owner creates Sprint 1 to 3 and moves issues by their `sprint-1` / `sprint-2` / `sprint-3` / `backlog` labels.

## Summary by epic

| Epic | Jira | Items | Done | Status |
|---|---|---|---|---|
| E1 Discovery & Planning | DIG-3 | 6 (DIG-11 to DIG-16) | 3 | Blocked on owner discovery answers (DIG-13) |
| E2 Brand & Content | DIG-4 | 7 (DIG-17 to DIG-21, DIG-54, DIG-55) | 0 | Waiting on DIG-13; DIG-54 needs owner consultant profiles |
| E3 Design System & Frontend | DIG-5 | 9 (DIG-22 to DIG-27, DIG-51 to DIG-53) | 0 | DIG-22 and DIG-23 In Progress (placeholder content, unapproved brand direction); DIG-51 owner UI review next |
| E4 Contact Form & Backend | DIG-6 | 6 (DIG-28 to DIG-33) | 0 | DIG-28 draft contract can start now |
| E5 Local Dev & DevOps (Docker) | DIG-7 | 5 (DIG-34 to DIG-38) | 3 | DIG-37 Done (CI gap open); DIG-36 tooling can start now |
| E6 QA & Accessibility | DIG-8 | 5 (DIG-39 to DIG-43) | 0 | DIG-39 draft test plan can start now |
| E7 Launch | DIG-9 | 4 (DIG-44 to DIG-47) | 0 | Sprint 3; DIG-47 needs owner approval |
| E8 Phase 2 Multi-page Expansion | DIG-10 | 3 (DIG-48 to DIG-50) | 0 | Backlog |
| Total | | 45 | 6 | |

## In Progress

| ID | Jira | Item | Note |
|---|---|---|---|
| E3-S1 | DIG-22 | Design system proposal | Started 2026-10-09 on feature/DIG-22-DIG-23-ui-design; placeholder content, unapproved direction |
| E3-S2 | DIG-23 | Page shell and navigation | Started 2026-10-09, same branch |
| E3-S8 | DIG-52 | AI-themed visual design and SVG illustrations | Started 2026-10-09, same branch |
| E3-S9 | DIG-53 | About us page with consultants | Started 2026-10-09, same branch; placeholder cards; cannot close before DIG-54 |

## Done (with evidence)

| ID | Jira | Item | Evidence |
|---|---|---|---|
| E1-T1 | DIG-11 | Agent definitions | `.claude/agents/` contains 5 definitions |
| E1-T2 | DIG-12 | Project brief and plan | project-brief.md, plan.md, risks-and-decisions.md |
| E1-T5 | DIG-15 | Jira backlog created | 48 issues verified by JQL, 69 Blocks links, keys recorded in plan.md |
| E5-T1 | DIG-34 | Next.js starter | package.json pins; typecheck exit 0 in container, 2026-10-09 |
| E5-T4 | DIG-37 | Git repo and GitHub remote | Local repo (main + feature branch), commits 3e9bd29, e1ea570, 060fd5f, origin prasa7/digitizwork-website. Gaps: no CI; remote decision not in decision log; 060fd5f not shown as pushed |
| E5-T2 | DIG-35 | Docker dev and prod | Dev container up, :3000 returned 200 (PM check, 2026-10-09); prod image built; prod run on :8080 per orchestrator verification |

## Mapping from the previous board

| Old ID | Now |
|---|---|
| T1 | E1-T1 (DIG-11) |
| T2 | E1-T3, E1-T4 (DIG-13, DIG-14) |
| T3 | E2-S1, E2-S2 (DIG-17, DIG-18) |
| T4 | E2-S3, E2-S4, E2-S5 (DIG-19 to DIG-21) |
| T5 | E3-S1 (DIG-22) |
| T6 | E4-S1 (DIG-28) |
| T7 | E6-S1 (DIG-39) |
| T8 | E1-T6 (DIG-16) |
| T9 | E3-S2 to E3-S6, E4-S2 to E4-S6, E5-T3 to E5-T5, E6-S2 |
| T10 | E6-S3 to E6-S5, E7-T1 |
| T11 | E7-T2 to E7-T4 |

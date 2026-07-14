# 0001 — Mission set; first lesson on mutable/immutable split

**Date:** 2026-07-13
**Status:** active

## Context
First session. Workspace was empty. Established mission via questions.

## What we established
- User is an **experienced AEM developer** (components, templates, Sling, OSGi, HTL).
- Goal: **job/role prep** for a hands-on developer role on an **AEMaaCS migration**.
- Teaching should be code-forward, framed as "what changes vs classic AEM," grounded
  in Adobe Experience League (primary source).

## Zone of proximal development
Strong classic-AEM foundation assumed. So we skip AEM basics and start at the
*delta* Cloud Service introduces. Entry point chosen: **mutable vs immutable
repository split** — the change with the widest blast radius on a dev's day-to-day
(project structure, packaging, build gates).

## Delivered
- `lessons/0001-mutable-vs-immutable.html` — concept + before/after packaging + 2 retrieval quizzes.
- `reference/repo-areas.html` — lookup table of repo areas (glossary seed).
- `assets/course.css`, `assets/quiz.js` — shared components (first of the library).

## Assessment pending
Haven't yet confirmed the user's actual grasp — quizzes are self-check. Next session,
gauge whether Lesson 1 landed before advancing.

## Planned next lessons (Readiness Phase)
2. OSGi config as code (no `/system/console`, Developer Console read-only).
3. Dispatcher-in-repo structure & Cloud Manager deploy.
4. Asset microservices (Asset Compute replaces DAM Update Asset workflow).
5. RepoInit for users/groups/service-users/initial nodes.
6. Oak index refactoring.
Then move to Implementation Phase tooling (BPA, Content Transfer Tool, Modernization Tools).

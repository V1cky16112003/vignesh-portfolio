# Portfolio Design Analysis — Entry-Level AI Engineer, London

_Written 26 Sep 2026 against commit `64908f9`. Method: `frontend-design` skill review of the source in `src/components/`._

## 1. The audience and what the site has to do

The site gets three readers, and each one spends about 30–90 seconds on it:

| Reader | What they check | What the site has to show |
|---|---|---|
| Recruiter or talent partner (agency or in-house) | Right to work, availability, location, role fit, CV | "AI Engineer, London, available now" within 5 seconds, plus a one-click CV |
| Hiring engineer (AI startups such as Wayve, PolyAI, Synthesia, ElevenLabs; scale-ups; bank AI teams) | Did this person *ship* something, and can I see it running? | Live demos, architecture, eval numbers, readable code links |
| Interviewer, the night before | What to ask about | Project write-ups deep enough to talk through |

The content is already strong for this market. Few new grads have an agentic RAG system with a RAGAS CI gate, a deployed MCP server, or a benchmark-leakage audit with p-values. **The design hides these assets.** It uses a generic "dark portfolio template" look that makes those projects read like everyone else's.

## 2. The main problem: the site looks like a template

The skill's calibration list names the patterns that make a page read as AI- or template-generated. This site hits most of them:

| Tell | Where |
|---|---|
| Near-black navy background with a soft violet accent and gradient washes | `index.css` (`#050810`, `#a78bfa`), and the hero's `from-violet-500/[0.05]` blur |
| Floating glassy "ElegantShape" pills: a stock 21st.dev/shadcn hero component | `ui/shape-landing-hero.tsx` |
| Typewriter cycling job titles ("AI/ML Engineer → Data Scientist → ML Researcher → Multimodal AI Specialist") | `TypewriterRole`, which also blurs your positioning: pick one title |
| Eyebrow badge with middle dots ("MSc Data Science · King's College London") | hero `badge` |
| All-caps labels ("WHAT I DO", nav "ABOUT / CAREER…", "SCROLL" with 0.3em tracking) | `WhatIDo.tsx`, `Navbar.tsx`, hero |
| Numbered markers `01 / 02 / 03` on projects that aren't a sequence | `Projects.tsx` `.project-number` |
| Fade-and-slide-up entrance on *every* heading, card, paragraph and stat | every section uses `initial={{opacity:0,y:30}}` |
| Identical rounded cards with icon + category + title + chip cloud | `WhatIDo`, `Projects` |
| 3D tilt-on-hover cards, custom cursor, magnetic social icons | `Projects`, `Cursor`, `SocialIcons` |
| Count-up stat tiles ("71.7%", "8.73/10", "4+") | `About.tsx` |
| Fake loading screen with a 0→100% counter | `Loading.tsx` adds about 2.75s before anything appears, on a static site with nothing to load |
| "View on GitHub →" arrow-appended links | `Projects.tsx` |
| Scrolling tech-logo marquee | `TechStack.tsx` |

None of these is wrong on its own. Together they say "I picked a template." A London hiring engineer has seen this exact hero on hundreds of candidate sites. The irony is that your best project, the SEED-VII leakage audit, is about **seeing past things that look impressive but aren't rigorous**. The site should look like it was made by that person.

## 3. What's missing for AI engineer roles

In rough order of hiring impact:

1. **No live proof.** The ArXiv agent and the Chore Manager MCP server are both *deployed*, but the site links only to GitHub. Engineers hiring for AI roles want to click something that runs. Add a "Try it" link next to each deployed project, and ideally one embedded interaction on the page itself (see §5).
2. **No visuals of the systems.** No architecture diagrams, screenshots or eval charts. The Planner → Executor → Critic → Reporter graph and the leakage sweep are ideal diagrams, and right now they're buried in paragraphs.
3. **Project copy is CV bullets pasted into cards.** Each description is one paragraph of 80–100 words, long enough to lose a skim reader and too cramped for a deep reader. Split each project into: *problem (one line) → what I built → the number that proves it → links*. Keep the long version for a per-project page.
4. **Headline numbers are the wrong ones.** "71.7% MSc Sem 1" and "8.73/10 GPA" lead the About section. For an engineering role, lead with the outcomes: *0.80 faithfulness gate*, *50k papers indexed*, *leakage reproduced to within 0.17pp*, *5 production bugs traced across 25 commits*. Grades belong in Education.
5. **No clear hiring signals up top.** London recruiters filter first on location, right-to-work status (Graduate visa / sponsorship needs) and start date. "Available immediately" is there, but "London" and visa status are not in the hero. Decide what you're comfortable stating, then state it plainly.
6. **Tech stack is shown three times** (WhatIDo chips, the marquee, per-project chips). The marquee is desktop-only and adds nothing the project chips don't. Cut it.
7. **No writing.** One short technical post, such as "How a published EEG benchmark leaked its test set" or "Deploying a stateless MCP server on Vercel", is the best differentiator a new-grad AI engineer can have. Add a "Writing" section even if it has one entry.
8. **Missing basics:** no Open Graph/Twitter meta or preview image (LinkedIn shares render blank), no favicon beyond default, and `user-select: none` on `:root`, which stops recruiters from **copying your email or project names**. Remove that line first.

## 4. Accessibility and quality floor issues

- `user-select: none` globally (see above).
- No `prefers-reduced-motion` handling anywhere. The floating shapes, typewriter, blinking caret, bouncing chevron, count-ups and marquees all run regardless.
- Nav items are `<li onClick>` with no button or link: not keyboard-focusable. No `:focus-visible` styles found.
- Custom cursor replaces the system cursor. It hurts precision and does nothing on touch devices.
- Hero body text is `text-white/30` on `#050810`, well under WCAG AA contrast. The same goes for `text-white/40` on the CV button, which is the most important button on the page for recruiters.
- Social icon links use `target="_blank"` with no `rel="noopener"` and no accessible label (icon-only).
- Loading screen delays First Contentful Paint by about 2.75s. Lighthouse and impatient recruiters both penalise this.
- Mobile hides TechStack entirely via `isDesktopView`. That's fine, but it shows the section wasn't essential in the first place.

## 5. Proposed direction: "the lab notebook"

The subject matter is **an engineer whose work is evaluation, rigor and agents that behave under scrutiny**. The design vocabulary should come from that world: eval reports, experiment logs, trace viewers and paper figures. Not space-themed purple glow.

### Tokens

| Role | Value | Notes |
|---|---|---|
| Paper | `#EEF0EA` | cool, slightly green-grey off-white, like graph paper (not the cream/terracotta cliché) |
| Ink | `#16181D` | body text |
| Graphite | `#5B6068` | secondary text, AA on Paper |
| Rule | `#C9CDC4` | hairlines and grid |
| Signal | `#1F5EFF` | one saturated blue for links and live states only |
| Fail | `#C2410C` | used *only* in data: failed eval runs, leaked-vs-honest bars |

Light mode by default: it immediately stands apart from the sea of dark AI portfolios, and it prints/screenshots cleanly for recruiters. Offer dark mode as a toggle, not the default.

**Type:** *Newsreader* (serif) for headings and project write-ups, which gives an academic-paper voice that fits the audit work. *Inter Tight* or *IBM Plex Sans* for UI and body. Use Plex Mono **only** for real code/trace output, never as decorative labels. Scale: 16 / 20 / 28 / 44 / 64, body line length under 72ch, serif body line-height 1.6.

**Layout:** a left-aligned single column (max about 720px) with a wide right margin used for *marginalia*: figures, metrics and links sit beside the paragraph they support, like a paper's side notes. No cards. Sections are separated by hairline rules and whitespace.

```
┌───────────────────────────────────────────────────────────┐
│ Vignesh Ram Sivakumar            Work  Writing  CV  Email │
│───────────────────────────────────────────────────────────│
│ AI engineer in London. I build agents                     │
│ and then try to break their evals.        ┌─────────────┐ │
│                                           │ live trace  │ │
│ Available now · Graduate visa (edit)      │ Planner ▸   │ │
│ [Download CV]  [Email me]                 │ Critic ✗ ↻  │ │
│                                           └─────────────┘ │
│───────────────────────────────────────────────────────────│
│ ArXiv research agent                       faithfulness   │
│ Problem → built → proof                    0.80 gate      │
│ [Try it] [Code] [Write-up]                 [graph fig]    │
│───────────────────────────────────────────────────────────│
│ SEED-VII: a published 71% that was leakage [bar: leaked   │
│ ...                                         vs honest]    │
└───────────────────────────────────────────────────────────┘
```

**The one bold move:** the hero shows a **replayed agent trace** from the ArXiv agent instead of floating shapes. A real query goes Planner → Executor → Critic *rejects* → retry → Reporter, rendered as a compact step log that plays once on load (and is static under reduced motion). A "Run your own query" link opens the live app. This is the single orchestrated motion moment on the page; everything else stays still. It proves in 5 seconds that you build agents, that they have evaluation loops, and that they're deployed.

**Principles:**
- Every number on the page links to where it came from (repo, eval log, paper).
- Structure only where content has structure: the Career timeline *is* a sequence, so it keeps dates, but projects are not numbered.
- Plain sentence-case copy. One title: "AI Engineer". No typewriter.
- Motion only answers user actions (expand a project, toggle dark mode), plus the one hero trace.

## 6. Prioritised action list

**Quick wins (under an hour each)**
1. Remove `user-select: none` from `src/index.css`.
2. Delete the loading screen, or cap it at 0ms when assets are already cached.
3. Replace the typewriter with the single title "AI Engineer"; add "London" and visa status to the hero.
4. Raise hero text contrast (`white/30` → at least `white/70`) and make "Download CV" the primary button.
5. Add OG/Twitter meta plus a 1200×630 preview image, and a favicon.
6. Add `aria-label` + `rel="noopener noreferrer"` to social icons; turn nav `<li onClick>` into `<a href="#id">`.
7. Wrap all motion in a `prefers-reduced-motion` check (framer-motion `useReducedMotion`).
8. Swap the About stats for engineering outcomes; move GPA/grades into Career.

**Medium (a day or two)**
9. Add "Try it" links for the deployed ArXiv agent and MCP server.
10. Rewrite each project as problem → built → proof → links; add one figure per project (architecture graph, leakage bar chart, MCP request flow).
11. Remove TechStack marquee, custom cursor, magnetic icons, card tilt and the `01/02` numbers.
12. Merge WhatIDo into About as two short sentences; the chip clouds duplicate the project chips.

**Bigger (the redesign)**
13. Apply the lab-notebook tokens and layout from §5 (light default, serif headings, marginalia column).
14. Build the replayed agent-trace hero.
15. Add per-project pages (`/work/arxiv-agent`, etc.) and a Writing section with one post.

## 7. How to check the result

- **5-second test:** show the hero to someone for 5 seconds. Can they say your role, city, and one thing you built?
- Lighthouse: Performance ≥ 90 and Accessibility ≥ 95 on mobile.
- Keyboard-only pass: every link and button reachable, with visible focus.
- Share the URL in a LinkedIn DM draft and confirm the preview card renders.

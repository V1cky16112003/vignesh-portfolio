# Graph Report - .  (2026-06-09)

## Corpus Check
- Corpus is ~3,151 words - fits in a single context window. You may not need a graph.

## Summary
- 130 nodes · 148 edges · 16 communities (10 shown, 6 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.89)
- Token cost: 7,150 input · 2,420 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Section Components|Page Section Components]]
- [[_COMMUNITY_App TypeScript Config|App TypeScript Config]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_Node TypeScript Config|Node TypeScript Config]]
- [[_COMMUNITY_Dev & Lint Dependencies|Dev & Lint Dependencies]]
- [[_COMMUNITY_Hero & Landing UI|Hero & Landing UI]]
- [[_COMMUNITY_Navigation & Social Links|Navigation & Social Links]]
- [[_COMMUNITY_Build Pipeline Config|Build Pipeline Config]]
- [[_COMMUNITY_App Entry Point|App Entry Point]]
- [[_COMMUNITY_Claude Settings|Claude Settings]]
- [[_COMMUNITY_Tech Stack Section|Tech Stack Section]]
- [[_COMMUNITY_TS Project References|TS Project References]]
- [[_COMMUNITY_HTML Entry & Portfolio Identity|HTML Entry & Portfolio Identity]]
- [[_COMMUNITY_Package Metadata|Package Metadata]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `MainContainer()` - 15 edges
3. `compilerOptions` - 14 edges
4. `scripts` - 5 edges
5. `HoverLinks()` - 5 edges
6. `GSAP ScrollTrigger Animation Pattern` - 5 edges
7. `Career()` - 4 edges
8. `Navbar()` - 4 edges
9. `Projects()` - 4 edges
10. `App()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `GSAP ScrollTrigger Animation Pattern` --semantically_similar_to--> `Framer Motion Entrance Animation (HeroGeometric)`  [INFERRED] [semantically similar]
  src/components/About.tsx → src/components/ui/shape-landing-hero.tsx
- `HoverLinks()` --references--> `Custom Animated Cursor with data-cursor API`  [INFERRED]
  src/components/HoverLinks.tsx → src/components/Cursor.tsx
- `tsconfig.json - Root TypeScript Config` --references--> `tsconfig.app.json - App TypeScript Config`  [EXTRACTED]
  tsconfig.json → tsconfig.app.json
- `tsconfig.json - Root TypeScript Config` --references--> `tsconfig.node.json - Node TypeScript Config`  [EXTRACTED]
  tsconfig.json → tsconfig.node.json
- `tsconfig.node.json - Node TypeScript Config` --references--> `vite.config.ts - Vite Build Configuration`  [EXTRACTED]
  tsconfig.node.json → vite.config.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **GSAP ScrollTrigger Reveal Pattern (About, Career, Projects, WhatIDo)** — components_about_about, components_career_career, components_projects_projects, components_whatido_whatido, concept_gsap_scroll_animation [INFERRED 0.95]
- **MainContainer Orchestrates All Page Sections** — components_maincontainer_maincontainer, components_landing_landing, components_about_about, components_career_career, components_projects_projects, components_contact_contact, components_whatido_whatido, components_techstack_techstack, components_navbar_navbar, components_cursor_cursor, components_socialicons_socialicons, components_loading_loading [EXTRACTED 1.00]
- **HoverLinks + Cursor data-cursor API interaction** — components_hoverlinks_hoverlinks, components_cursor_cursor, concept_custom_cursor [INFERRED 0.85]
- **TypeScript + Vite + React Build Pipeline Configuration** — cv_update_tsconfig, cv_update_tsconfig_app, cv_update_tsconfig_node, cv_update_vite_config [INFERRED 0.95]

## Communities (16 total, 6 thin omitted)

### Community 0 - "Page Section Components"
Cohesion: 0.15
Nodes (14): About(), Career(), careerData, Cursor(), Loading(), MainContainer(), TechStack, Projects() (+6 more)

### Community 1 - "App TypeScript Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+12 more)

### Community 2 - "Runtime Dependencies"
Cohesion: 0.12
Nodes (16): dependencies, gsap, @gsap/react, react, react-dom, react-fast-marquee, react-icons, name (+8 more)

### Community 3 - "Node TypeScript Config"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 4 - "Dev & Lint Dependencies"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/react, @types/react-dom (+4 more)

### Community 5 - "Hero & Landing UI"
Cohesion: 0.24
Nodes (7): Landing(), Framer Motion Entrance Animation (HeroGeometric), cn(), ElegantShape(), HeroGeometric(), ElegantShape Component, HeroGeometric Component

### Community 6 - "Navigation & Social Links"
Cohesion: 0.31
Nodes (5): Contact(), HoverLinks(), Navbar(), SocialIcons(), Navbar hide-on-scroll behaviour

### Community 7 - "Build Pipeline Config"
Cohesion: 0.47
Nodes (6): @ Path Alias (src directory shorthand), React JSX Transform (react-jsx mode), tsconfig.json - Root TypeScript Config, tsconfig.app.json - App TypeScript Config, tsconfig.node.json - Node TypeScript Config, vite.config.ts - Vite Build Configuration

## Knowledge Gaps
- **65 isolated node(s):** `allow`, `name`, `private`, `version`, `type` (+60 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `MainContainer()` connect `Page Section Components` to `App Entry Point`, `Tech Stack Section`, `Hero & Landing UI`, `Navigation & Social Links`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev & Lint Dependencies` to `Runtime Dependencies`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `MainContainer()` (e.g. with `Lazy-loaded TechStack (desktop-only)` and `Loading Gate Pattern (hide content until loaded)`) actually correct?**
  _`MainContainer()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `allow`, `name`, `private` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Node TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
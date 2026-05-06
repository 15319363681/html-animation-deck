---
name: html-animation-deck
description: Turn a short topic prompt into a researched, modern animated HTML presentation or web-based slide show. Use when the user asks to make an animation presentation, animated explainer, HTML presentation, web PPT, browser slide deck, keynote-style web demo, scrollytelling page, video-recording-friendly presentation, or an about-a-topic animation/demo/presentation and expects Codex to research the topic, extract key knowledge points, design the narrative, and generate the HTML/CSS/JavaScript deliverable. Also use to refactor AI-looking animation pages into modern designed presentations. This skill is for browser-native HTML/CSS/JavaScript presentations, not editable .pptx authoring.
---

# HTML Animation Deck

Build polished browser-native presentation decks from minimal user input. If the user only says "make an animation presentation about X", infer the audience, research X when needed, select the useful knowledge points, design the narrative, and produce a full-screen HTML presentation with deliberate art direction, controlled motion, and strong story rhythm. The output should feel like a modern keynote, editorial microsite, or premium product demo, not a generic AI-generated neon particle page.

## Default Behavior

Do not wait for the user to provide an outline unless the topic is ambiguous or high-stakes. For ordinary educational, product, technology, science, business, or culture topics, proceed:

```text
short topic -> research/knowledge map -> story arc -> slide beats -> visual system -> animated HTML -> validation/preview
```

Use web research when facts may be current, niche, public-company-related, scientific/technical, legal/medical/financial, or when the user asks for "latest", "current", "search", "research", "knowledge points", "examples", "data", "sources", or similar. Use authoritative sources and do not invent claims. For stable general knowledge, concise internal knowledge is acceptable unless accuracy risk is material.

## Use The Right Mode

- `paged deck`: one slide per viewport, keyboard/wheel/touch navigation, progress indicator, optional autoplay.
- `scrollytelling`: vertical narrative with sticky scenes and scroll-linked transitions.
- `single-scene explainer`: one full-canvas animated scene with staged beats.
- `video capture deck`: deterministic timing, large type, no hover-only content, autoplay-safe states.
- `prototype presentation`: product/UI surfaces embedded as designed scenes, not a normal website.

If the user asks for `.pptx`, use a presentation/PPTX skill instead. If they ask for both HTML and PPTX, create the HTML deck first and say whether PPTX conversion will be screenshot-based or rebuilt as native PPTX.

## Workflow

1. Parse the user's short prompt into topic, implied audience, expected depth, and delivery mode.
2. If needed, research the topic and build a knowledge map using `references/research-to-story.md`.
3. Select 5-9 high-signal knowledge points; remove trivia, filler, and generic claims.
4. Write a compact story map: thesis, audience promise, beats, slide list, and the one job of each slide.
5. Choose an art direction from `references/modern-visual-direction.md`; avoid AI-demo cliches.
6. Author a self-contained HTML deck unless the repo already has a framework.
7. Use `references/html-deck-architecture.md` for slide structure, navigation, state, and accessibility.
8. Add motion only where it clarifies sequence, emphasis, or spatial transformation.
9. Run `scripts/validate_deck.js` on the HTML file.
10. Preview in a browser or capture screenshots with Playwright when available.
11. Repair overflow, low contrast, broken navigation, unreadable text, or janky motion before final response.

## Style Change Requests

When the user asks to "change style", "make it anime", "more modern", or similar, do not only swap colors, gradients, fonts, or shadows. A real style change must alter at least three of:

- layout grammar
- composition families
- navigation/progress treatment
- visual metaphor
- illustration/diagram language
- motion behavior
- copy voice
- control styling
- background/material system

If the user says the styles feel the same, rebuild the deck around a different presentation archetype instead of patching the old shell. Examples:

- `technical explainer` -> clean diagrams, measured reveals, quiet labels
- `anime/manga explainer` -> panels, speech bubbles, expressive labels, character/mascot, bold outlines
- `product keynote` -> full-bleed product moments, confident typography, launch pacing
- `cinematic story` -> chapter cuts, sparse copy, large atmosphere, slow spatial motion
- `data newsroom` -> annotated charts, editorial headlines, source-aware evidence

## Design Standard

Start with composition, not effects. Every deck needs:

- one visual thesis for the whole deck
- one content thesis grounded in researched or user-provided knowledge
- 2-3 reusable composition families, not a new gimmick every slide
- short slide copy written for live viewing
- strong type scale, consistent margins, and intentional negative space
- real images, diagrams, product surfaces, charts, or custom visual systems when the subject needs evidence
- motion that reveals structure or pacing, not decoration
- a concept demonstration area on explanation slides; it must teach the idea, not merely decorate the page

Reject these defaults unless the user explicitly asks for them:

- glowing particle backgrounds on every page
- generic blue/purple gradients, glassmorphism panels, cyber grids, and floating blobs
- "AI brain", robot, network node, and abstract data tunnel imagery used as filler
- overstuffed bullet slides inside translucent cards
- animated everything at the same speed
- tiny text that only works as a screenshot, not as a presentation

## Output Contract

Prefer a single deliverable HTML file for portability:

```text
output/
  deck.html
  preview/
    slide-01.png
    slide-02.png
```

For small static-site decks, keep all files under one output folder and use relative paths. Do not require a build step unless the existing project already uses one.

Minimum page contract:

- use semantic slide sections: `.deck` containing `.slide`
- set each paged slide to a fixed viewport stage: `width: 100vw; height: 100svh`
- keep body overflow hidden for paged decks; use controlled slide containers
- support keyboard navigation with Arrow keys, PageUp/PageDown, Home/End, Space
- support pointer controls or clickable previous/next buttons
- expose progress text such as `3 / 8` for orientation
- respect `prefers-reduced-motion`
- avoid external network dependencies unless the user asked for them

## References

- Read `references/research-to-story.md` when the user provides only a topic, asks for knowledge points, or expects the skill to research and explain the subject.
- Read `references/modern-visual-direction.md` before designing a fresh deck or refactoring an AI-looking one.
- Read `references/html-deck-architecture.md` before authoring deck code, navigation, animation timing, or responsive behavior.
- Read `references/qa-checklist.md` before final delivery or when visual polish is the main request.

## Scripts

- `scripts/validate_deck.js <html-file>` checks common structural defects.
- `scripts/capture_deck.js <html-file> --out <dir>` captures slide screenshots with Playwright when `npx` and Playwright are available.

Run validation for every nontrivial deck. Use screenshot capture when the task is visual, animation-heavy, or intended for video recording.

Playwright is optional QA, not a runtime dependency. The final HTML must work by opening the file in a browser. If screenshot capture fails or is skipped, say browser screenshot QA was skipped; do not imply the deck cannot be used.

## Final Response

Include the HTML path, validation result, preview/screenshot paths if captured, and any limitations such as skipped browser QA. Keep internal tooling details brief unless the user asks.

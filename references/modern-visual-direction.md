# Modern Visual Direction

Use this reference when designing or refactoring an HTML presentation deck.

## Design Goal

Make the deck feel like a deliberate contemporary presentation: editorial, product-grade, cinematic, or museum-like depending on the topic. The audience should sense a clear point of view from layout, type, image, pacing, and restraint.

## Useful Directions

Choose one primary direction and one secondary detail system.

- `editorial keynote`: oversized typography, asymmetric image crops, strict margins, sparse copy, strong section openers.
- `product launch`: full-bleed product moments, calm UI surfaces, confident numerals, precise labels, restrained accent color.
- `technical explainer`: clean diagrams, stepwise reveals, mono/detail type for annotations, semantic color, minimal texture.
- `cinematic story`: dark or light stage, large spatial transitions, meaningful imagery, chapter rhythm, few words.
- `data narrative`: one foreground metric or chart per slide, direct labels, animated emphasis, no dashboard clutter.
- `portfolio/case study`: artifact-first slides, before/after pacing, quiet captions, visual evidence over claims.
- `anime/manga explainer`: comic panels, bold outlines, speech bubbles, expressive labels, mascot or object-character, speed lines, bright but controlled palette.

## Style Distance Rule

When changing style, do not keep the same slide skeleton. A style is not a palette. To make styles feel different, change the structural language:

- from split-screen panels to comic panels or full-bleed scenes
- from cards to open typography or storyboard frames
- from thin technical lines to bold illustration marks
- from subtle fades to pop-in, cut, wipe, or staged character motion
- from neutral labels to audience-native copy

Before editing, name the old style and the new style. Then list what will change in layout, motion, visual objects, and copy voice.

## Anti-AI Rules

Avoid the common AI-demo look:

- no permanent neon purple/blue gradient universe
- no particle field unless the subject is literally particles, stars, or signal noise
- no random glowing orbs, floating glass cards, hexagon grids, circuit-board borders, or abstract neural networks
- no generic "future/innovation/AI" imagery without subject specificity
- no large translucent cards containing paragraphs
- no decorative icons in every bullet
- no typewriter text effect unless the content is about code, terminals, writing, or a timed reveal

## Composition

Give each slide one dominant read:

- a phrase
- an object
- a product view
- a chart
- a diagram
- a comparison
- a transformation

Use 2-3 composition families across a deck:

- full-bleed image with anchored title
- split field with one strong evidence object
- open typographic statement
- diagram stage with progressive highlights
- product/UI surface with callouts
- data slide with one chart and one message

Avoid repeating "title plus three cards" unless the deck is explicitly a workshop, menu, or comparison board.

## Concept Demonstrations

For educational or technical topics, the visual area must explain the concept. Do not fill it with abstract waves, random nodes, or decorative geometry unless the geometry is the concept.

Good demonstration patterns:

- state space -> sphere, map, stacked state cards, or coordinate stage
- search space -> maze, branching paths, candidate grid, narrowing funnel
- interference -> competing paths where some shrink and one grows
- entanglement -> linked objects whose labels/state change together
- error correction -> noisy surface with detected faults and repair loop
- algorithm -> pipeline with active step highlight
- tradeoff -> balance, tension line, or before/after comparison

Each demonstration should have labels and a visible before/after or cause/effect moment.

## Anime/Manga Direction

Use this only when the user asks for anime, manga, playful, cartoon, comic, or a clearly youth-friendly science explanation.

- Use bold outlines, high contrast, chunky shadows, speech bubbles, chapter labels, and occasional expressive sound-effect text.
- Prefer a character, mascot, object-character, or comic panel system over generic tech cards.
- Keep the concept accurate; the style can be playful, but the explanation cannot become vague.
- Use 3-5 bright colors with black ink outlines; avoid making every surface rainbow.
- Motion can pop, bounce, shake, or wipe, but it should still direct attention.
- Do not reuse the same split technical layout from a previous version.

## Typography

Use large, presentation-safe type.

- cover title: 72-140 px
- content title: 48-80 px
- body/callout: 24-36 px
- labels: 16-22 px
- captions: 13-16 px only when nonessential

Prefer high-quality system stacks:

```css
--font-display: ui-sans-serif, "Inter", "SF Pro Display", "Segoe UI", Arial, sans-serif;
--font-text: ui-sans-serif, "Inter", "Segoe UI", Arial, sans-serif;
--font-mono: "SF Mono", "Cascadia Code", "Consolas", monospace;
```

Do not rely on narrow negative letter spacing. Use weight, scale, case, and line breaks instead.

## Color

Build palettes from the subject, brand, image assets, or data semantics. Use one calm base plus one or two accents. If the deck feels like "AI purple" by default, change it.

Good palette anchors:

- warm white / black ink / signal red
- graphite / porcelain / electric green
- deep charcoal / fog / amber
- navy only when the audience is formal and the deck avoids generic enterprise chrome
- image-sampled neutrals plus one extracted accent

## Motion

Motion should have a job:

- reveal order
- show cause and effect
- move focus
- compare before and after
- transition chapters
- make a diagram understandable

Use a small timing system:

```css
--ease-out: cubic-bezier(.16, 1, .3, 1);
--ease-in-out: cubic-bezier(.65, 0, .35, 1);
--dur-fast: 220ms;
--dur-med: 520ms;
--dur-slow: 900ms;
```

Prefer transform and opacity. Avoid animating layout-heavy properties on many elements.

## Copy

Rewrite AI-sounding copy into presenter copy:

- use concrete nouns
- use short claims
- put detail in speaker notes or hidden comments if needed
- replace "unlock the power of" and "revolutionize" with specific outcomes
- each slide should be understandable in 3-5 seconds

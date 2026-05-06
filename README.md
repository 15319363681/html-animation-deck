# HTML Animation Deck

`html-animation-deck` is a Codex skill for creating researched, modern animated HTML presentations from short topic prompts.

It is designed for requests like:

```text
Make an animated presentation about quantum computing.
Create a modern web PPT about AI agents.
Turn this AI-looking animation page into a polished HTML presentation.
```

The skill guides Codex to research the topic when needed, extract key knowledge points, design a clear narrative, and produce a browser-native HTML/CSS/JavaScript slide deck.

## What It Creates

- Single-file or small static-site HTML presentations
- Web-based slide decks with keyboard, button, wheel, or touch navigation
- Animated explainers and visual storytelling pages
- Video-recording-friendly presentation pages
- Modern refactors of AI-looking neon/particle animation pages

This skill targets browser-native HTML presentations, not editable `.pptx` files.

## Design Principles

- Start with story and concept, not effects.
- Use research-backed knowledge points when the topic needs factual grounding.
- Avoid generic AI visuals such as purple gradients, particle fields, glass cards, robot brains, and random network nodes.
- Treat style changes as real structural changes, not palette swaps.
- Make explanation slides include a concept demonstration object that teaches the idea.

## Skill Layout

```text
html-animation-deck/
  SKILL.md
  agents/
    openai.yaml
  references/
    research-to-story.md
    modern-visual-direction.md
    html-deck-architecture.md
    qa-checklist.md
  scripts/
    validate_deck.js
    capture_deck.js
  assets/
```

## Validation

Validate the skill metadata:

```powershell
python D:\codex-home\skills\.system\skill-creator\scripts\quick_validate.py D:\Hermes\skills\html-animation-deck
```

Validate a generated deck:

```powershell
node scripts\validate_deck.js path\to\deck.html
```

Optional screenshot QA:

```powershell
node scripts\capture_deck.js path\to\deck.html --out output\preview
```

Playwright is only used for optional browser screenshot QA. Generated HTML files should run directly in a browser.

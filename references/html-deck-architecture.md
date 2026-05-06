# HTML Deck Architecture

Use this reference when authoring the deck file.

## Minimal Structure

```html
<main class="deck" data-mode="paged" aria-live="polite">
  <section class="slide is-active" data-title="Cover">
    <div class="slide__inner">
      <h1>Deck title</h1>
    </div>
  </section>
  <section class="slide" data-title="Second beat">
    <div class="slide__inner">
      <h2>One sharp claim</h2>
    </div>
  </section>
</main>
<nav class="controls" aria-label="Slide controls">
  <button data-prev aria-label="Previous slide">Prev</button>
  <span data-progress>1 / 2</span>
  <button data-next aria-label="Next slide">Next</button>
</nav>
```

For paged decks, keep one active slide visible. Use classes such as `is-active`, `is-before`, and `is-after`; do not scroll the body accidentally.

The inner slide container may be called `.slide__inner`, `.page`, `.scene`, or another style-specific name. Preserve the outer `.deck` and `.slide` contract so validation, navigation, and screenshot capture can work across visual styles.

## CSS Baseline

```css
* { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
body {
  overflow: hidden;
  font-family: var(--font-text);
  background: var(--bg);
  color: var(--fg);
}
.deck {
  position: relative;
  width: 100vw;
  height: 100svh;
  isolation: isolate;
}
.slide {
  position: absolute;
  inset: 0;
  display: grid;
  opacity: 0;
  pointer-events: none;
  transform: translate3d(0, 24px, 0) scale(.985);
  transition: opacity var(--dur-med) var(--ease-out),
              transform var(--dur-med) var(--ease-out);
}
.slide.is-active {
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 0) scale(1);
}
.slide__inner {
  width: min(1680px, calc(100vw - 96px));
  height: min(900px, calc(100svh - 96px));
  margin: auto;
  display: grid;
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Navigation

Required keys:

- ArrowRight, PageDown, Space: next
- ArrowLeft, PageUp: previous
- Home: first
- End: last
- Escape: pause autoplay if present

Recommended JavaScript:

```js
const slides = [...document.querySelectorAll(".slide")];
let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));

function render() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === index);
    slide.classList.toggle("is-before", i < index);
    slide.classList.toggle("is-after", i > index);
    slide.setAttribute("aria-hidden", i === index ? "false" : "true");
  });
  document.querySelector("[data-progress]").textContent = `${index + 1} / ${slides.length}`;
}

function go(delta) {
  index = Math.min(slides.length - 1, Math.max(0, index + delta));
  render();
}

document.querySelector("[data-next]").addEventListener("click", () => go(1));
document.querySelector("[data-prev]").addEventListener("click", () => go(-1));
window.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) go(1);
  if (["ArrowLeft", "PageUp"].includes(event.key)) go(-1);
  if (event.key === "Home") { index = 0; render(); }
  if (event.key === "End") { index = slides.length - 1; render(); }
});
render();
```

Add wheel/touch only with throttling so a trackpad does not skip multiple slides.

## Staged Reveals

Use data attributes for staged elements:

```html
<h2 data-reveal>One idea at a time</h2>
<p data-reveal style="--delay: 120ms">Short support line.</p>
```

```css
.slide [data-reveal] {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
}
.slide.is-active [data-reveal] {
  animation: reveal-up var(--dur-slow) var(--ease-out) forwards;
  animation-delay: var(--delay, 0ms);
}
@keyframes reveal-up {
  to { opacity: 1; transform: translate3d(0, 0, 0); }
}
```

Keep delays short. Reveals should finish fast enough for live presenting.

## Responsive Behavior

Design for 16:9 first, then ensure common laptop and mobile viewports do not crop important content.

- keep safe margins around titles, controls, and captions
- use `clamp()` for large display type
- split overfull slides instead of shrinking text below readability
- hide nonessential decorative layers on small screens
- do not let controls overlap slide text

## Assets

Use local relative files for images and video when possible. For single-file delivery, inline small SVG icons only when they are simple UI symbols. Do not create complex subject imagery as SVG/canvas filler.

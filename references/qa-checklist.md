# QA Checklist

Use this before delivery.

## Structural Checks

- The deck has a `.deck` root and at least one `.slide`.
- Exactly one slide is active at load.
- Keyboard navigation works.
- Previous/next controls work.
- Progress text updates.
- Slides do not scroll internally unless the user asked for a scrollable reference page.
- There are no broken local image, video, font, or script paths.

## Visual Checks

- Every slide has one dominant read.
- Explanation slides have a demonstration object that teaches the concept, not a decorative filler graphic.
- Text is readable at laptop presentation size.
- No important text overlaps controls, images, charts, or viewport edges.
- Titles do not wrap accidentally.
- Body copy is not trapped in large generic cards.
- The deck does not read as generic AI/neon/futuristic unless that is the topic.
- Color contrast is strong over images and video.
- Each visual asset is subject-relevant and not filler.
- If the user asked for a new style, the result changes layout grammar and visual metaphor, not only palette.

## Motion Checks

- Entrance animations are staggered, not simultaneous noise.
- Motion finishes quickly enough for live presenting.
- Trackpad wheel does not skip several slides at once.
- Autoplay can pause or is clearly optional.
- `prefers-reduced-motion` is respected.
- No animation causes layout shift after text has appeared.

## Capture Checks

If using screenshots or video:

- capture at 1920x1080 unless the user requested another size
- capture every slide after entrance animations have settled
- verify slide numbering and screenshots match
- use deterministic timing; avoid random animation states unless seeded or visually irrelevant

Browser screenshot capture is optional QA. Do not treat Playwright as a runtime requirement for the HTML deliverable.

## Final Delivery

State:

- HTML path
- validation result
- screenshot/preview path if produced
- browser QA status
- known limitations

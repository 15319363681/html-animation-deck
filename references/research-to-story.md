# Research To Story

Use this when the user gives only a topic, such as "make an animated presentation about quantum computing", and expects the agent to research, structure, and produce the deck.

## Topic Intake

Infer reasonable defaults:

- audience: general educated audience unless specified
- depth: conceptual explanation for 5-8 slides unless specified
- tone: modern, clear, visually designed
- format: paged deck unless scrollytelling or video is requested
- output: single self-contained HTML file

Ask a question only when the topic is too broad for a useful deck, the audience changes the facts materially, or the output context is risky.

## Research Rules

Search or verify when:

- facts may have changed recently
- the topic is niche, technical, scientific, medical, legal, financial, market-related, policy-related, or product/company-specific
- the user asks for "latest", "current", "research", "knowledge points", "examples", "data", "sources", or "search"
- the deck will present claims, dates, rankings, product features, statistics, or named entities

Prefer:

- official docs and standards
- research papers and academic institutions
- company/product official sources for product facts
- reputable datasets, public reports, or primary sources

Do not cite random blogs as factual anchors when primary sources are available.

## Knowledge Map

Build this before slide writing:

```text
topic:
audience:
presentation promise:
core question:
must-know concepts:
surprising insight:
common misconception:
process/mechanism:
example/case:
data or evidence:
visual metaphors:
terms to avoid or explain:
source notes:
```

Keep it compact. It is a planning artifact, not slide copy.

## Select Knowledge Points

Choose 5-9 points that create a clear journey:

- what it is
- why it matters now
- how it works
- what changes because of it
- where it is used
- what the limits or risks are
- what the audience should remember

Reject:

- encyclopedia timelines unless the user asks for history
- generic benefits
- "future is limitless" claims
- dense paragraphs
- facts that cannot be visualized or explained clearly

## Story Patterns

Pick one:

- `mystery to mechanism`: start with a surprising result, reveal how it works.
- `problem to new lens`: show the old bottleneck, then the concept that changes it.
- `inside the machine`: walk through components or stages.
- `myth vs reality`: contrast misconceptions with grounded explanation.
- `map of a field`: orient the audience across categories and relationships.
- `before / now / next`: show transformation over time.
- `case-led`: use one concrete example to explain the whole topic.

## Slide Beat Template

For a 6-8 slide educational animation:

```text
1. Cover: a concrete hook, not "Introduction to X"
2. Why now: one tension or stakes slide
3. Core idea: simplest accurate definition
4. Mechanism: animated diagram or staged process
5. Example: real use case, product, scenario, or analogy
6. Limits: constraint, risk, misconception, or tradeoff
7. Takeaway: what the audience should remember
8. Optional closer: next question, call to action, or recap visual
```

Use fewer slides for narrow topics and more only when the content truly needs staging.

## Writing Slide Copy

Write like a presenter:

- title = claim
- subtitle = short explanation
- labels = concrete nouns
- body = at most 1-2 short lines

Bad:

```text
The revolutionary potential of quantum computing is transforming the future.
```

Better:

```text
Quantum computing is not faster at everything.
It is powerful when the problem can be shaped as interference.
```

## Visual Translation

Convert knowledge into visual objects:

- process -> staged pipeline or path
- hierarchy -> layered stack
- tradeoff -> tension diagram or split field
- network -> meaningful topology, not random nodes
- timeline -> chapter strip only if time matters
- comparison -> before/after or two-column evidence
- abstract concept -> concrete analogy plus diagram

Every visual must explain something the words alone would not.

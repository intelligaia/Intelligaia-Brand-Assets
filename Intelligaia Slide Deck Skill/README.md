# Intelligaia Slide Deck Skill

Everything needed to generate on-brand Intelligaia presentations with Claude.

## What's in this bundle

| Item | What it is |
|---|---|
| `Intelligaia Deck Design.skill` | The installable skill — one-click install in Claude |
| `intelligaia-deck-design/SKILL.md` | The design system in full: palette, typography, grid, 15 slide archetypes, 7 coordinate blueprints |
| `intelligaia-deck-design/assets/` | 16 brand graphics — compositions, service icons, logo, lockup |
| `Sample - Agenda Slide.pptx` | Example output, built from blueprint B2 |

## How your team installs it

1. Open Claude (desktop app, Cowork mode).
2. Drag `Intelligaia Deck Design.skill` into the chat.
3. Click **Save skill** on the card that appears.

That's it. From then on, asking Claude for "an Intelligaia deck", "slides in our style", or "an on-brand readout" triggers the skill automatically.

## How to use it

Just describe the deck in plain language:

> "Make a 6-slide Intelligaia deck for a healthcare prospect — cover, agenda, what we do, a case study, testimonials, contact."

Claude builds it against the locked design system. You can also call specific layouts by name: cover, agenda, statement/CTA, services split, three concepts, growth stat, portfolio triptych, before/after, team, four-column services, contact closing.

## The design system in brief

- **Canvas:** 16:9 (13.33" × 7.5"), 12-column grid, 20px gutters, 70px side margins, rule of thirds
- **Colour:** brand gold `FFD700` dominant, navy `002B5C`, ink `231F20`, cream `FBEEDD` arcs. White backgrounds; full gold only on the closing slide
- **Type:** Montserrat throughout — ExtraBold/Black titles, Medium 12pt body
- **Footer:** logo bottom-left, "Deep in Tech. Rooted in Design." lockup bottom-right. No CAGE/UEI/NAICS codes
- **Motifs:** organic gold shapes — pills, scalloped suns, line bursts, semicircle dot-bursts — anchored on cream arcs

## Editing the system

To change a rule, edit `intelligaia-deck-design/SKILL.md`, then rebuild the bundle and re-install:

```bash
./build-skill.sh
```

This repackages `intelligaia-deck-design/` into `Intelligaia Deck Design.skill` (excluding this README, which isn't part of the skill payload). Assets can be swapped in place as long as filenames stay the same.

## Fonts

Montserrat is a free Google font. Team members without it installed will see substitutions in PowerPoint — install it from fonts.google.com/specimen/Montserrat for accurate rendering.

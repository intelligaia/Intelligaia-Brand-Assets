# Example — GovTech Bhutan cover slide

A worked example of the deck system's **cover** layout (blueprint B1), built for a real proposal.

![Cover](cover-preview.jpg)

## What it demonstrates

| Rule | How it's applied here |
|---|---|
| Cover title type | Montserrat **Bold 27pt**, ink `231F20`, left column, five short lines |
| Description | Montserrat Medium 12pt, navy `002B5C` |
| Meta block | 8.5pt, bold labels (PREPARED FOR / DATE / CONTACT) |
| Arc rings as stage | `cover-arc-rings.png` at 15.2" wide, bleeding top/bottom/right |
| Custom hero on top | Client graphic at 8.95" wide — the rings frame it, never the reverse |
| 12-column grid | Type column starts at the left margin `x:0.49`; client logo right edge lands on `x:12.85` |
| Client logo | Top-right white space, optically centred against the Intelligaia mark |

## Files

| File | Purpose |
|---|---|
| `Cover Slide.pptx` | The finished slide |
| `build-cover.js` | pptxgenjs source — edit and re-run to regenerate |
| `cover-hero.png` | Client-supplied hero graphic (deck-specific, not a brand asset) |
| `govtech-logo.png` | Client logo, background removed |
| `cover-preview.jpg` | Rendered preview |

## Rebuilding

```bash
npm install pptxgenjs
node build-cover.js
```

Paths are relative — shared brand assets resolve to `../../intelligaia-deck-design/assets/`.

## Note on per-deck assets

`cover-hero.png` and `govtech-logo.png` belong to this engagement, not to the brand system. Client artwork stays in its own example folder; only assets used across every deck live in `intelligaia-deck-design/assets/`.

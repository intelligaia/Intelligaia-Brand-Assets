# Intelligaia Illustration Library

Curated, versioned illustration assets for Intelligaia. One source, consumed by
designers, engineers, marketing, and AI agents — and the basis for skill training.

**174 assets · 9 categories · v2.0**

> This folder holds **assets only**. Templates, wave patterns, website banner
> assets, older graphics and HTML documents live outside it — see
> [Where everything else went](#where-everything-else-went).

---

## Quick start

Every asset has a stable URL. Nothing needs to be cloned.

```
https://raw.githubusercontent.com/intelligaia/Intelligaia-Brand-Assets/assets/<path>
```

Machine-readable index of everything: `manifest.json`

---

## What's in here

| Folder | Contains | Files |
|---|---|---|
| `case-studies/<project>/` | Case study graphics, one folder per project | — |
| `diagrams/` | Process and system diagrams (PDF + PNG pairs) | 14 |
| `icons/` | UI and concept icon sets, SVG | 41 |
| `illustrations/characters-female/` | Female characters, three-stage construction | 30 |
| `illustrations/characters-male/` | Male characters, three-stage construction | 18 |
| `illustrations/devices/` | Laptops, headsets, glasses, hardware | 21 |
| `illustrations/nature/` | Clouds, plants, trees | 10 |
| `illustrations/objects/` | Lighthouse, ships, binoculars, magnifier | 12 |
| `letters/` | Isometric gradient letterforms A–Z, SVG | 26 |
| `logo/` | Intelligaia logo and wordmark | 2 |

---

## Where everything else went

Everything below is still in the repo, one level up in `website/` — just not
part of the asset library.

| Now at | Was | Why it moved |
|---|---|---|
| `_older-graphics/banners/` | `assets/marketing/banners` | Superseded banner artwork |
| `_older-graphics/people/` | `assets/marketing/people` | Older human character concepts |
| `_older-graphics/sections/` | `assets/marketing/sections` | Older section graphics |
| `_older-graphics/lettering-raster/` | `assets/marketing/lettering` | Raster alphabet, superseded by `letters/` |
| `_templates/service-catalog/` | `assets/service-catalog` | Templates, not assets |
| `_waves/` | `assets/waves` | Separate wave-pattern system |
| `_website-banner-assets/` | `assets/Website banner assets` | Separate website banner set |
| `_documents/` | `assets/case-studies`, `whitepapers`, `landing-pages` | HTML write-ups, not graphics |
| `tokens/` | `assets/tokens` | Design-system foundation, not an illustration |
| `_meta/` | `assets/data` | Derived catalogue JSON |

---

## Construction stages

Many illustrations ship in stages. The filename suffix tells you which.

| Stage | Meaning |
|---|---|
| **Deconstructed** | Primitive circles and rectangles on the 50×50 grid |
| **Outlined** | Stroke-only contour, no fill |
| **Filled** | Flat brand-colour fill applied |
| **Final** | Production-ready with shading and detail |

Use **Final** unless you are documenting the method.

---

## Design tokens

Tokens now live at `../tokens/` (repo path `website/tokens/`).

```
tokens/colours.json      Four brand colours, dark + light scales, usage rules
tokens/typography.json   Oswald / Geist / Raleway, the seven-step scale
```

| Colour | Hex | Role |
|---|---|---|
| Signature Yellow | `#FFC800` | Hero banners, primary CTAs, highlights |
| Ink | `#04050A` | Dark surface, body type on light |
| Trust Blue | `#4A8BF5` | Data, information states, links |
| Insight Purple | `#8A5AF0` | AI, agents, moments of insight |

Type: **Oswald** 500 headings, 400 descriptions. **Geist** 400 body.
**Raleway** 400/500 labels. Nothing above weight 500.

---

## Rules

**Do** — pull by URL rather than copying · use `Final` stage in production ·
keep flat `#FFC800`, no gradients on hero yellow · one accent (blue *or* purple)
per viewport.

**Don't** — recolour, stretch or crop illustrations · regenerate with AI when an
approved asset exists · add a third display typeface · ship `Deconstructed` or
`Outlined` as finished artwork.

---

## Contributing

New assets follow the construction process in the design system, then land here
via PR to the `assets` branch. Re-run the manifest generator after adding files
so `manifest.json` stays accurate.

---

## Licence

Proprietary. Intelligaia internal and client work only. Not for redistribution.

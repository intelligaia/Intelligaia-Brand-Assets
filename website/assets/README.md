# Intelligaia Illustration Library

Curated, versioned illustration assets for Intelligaia. One source, consumed by
designers, engineers, marketing, and AI agents — and the basis for skill training.

**726 indexed assets · 14 categories · v2.0**

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
| `about/masters/` | Masters | 1 |
| `about/video/` | Video | 2 |
| `ai-and-robotics-elements/` | Ai and robotics elements | 21 |
| `cx-roadmap-thumbnails/` | Cx roadmap thumbnails | 14 |
| `diagrams/` | Diagrams | 14 |
| `icons/AI/` | Ai | 2 |
| `icons/Abstract/` | Abstract | 1 |
| `icons/Analytics/` | Analytics | 2 |
| `icons/Data/` | Data | 1 |
| `icons/Interface/` | Interface | 1 |
| `icons/People/` | People | 3 |
| `icons/Strategy/` | Strategy | 1 |
| `icons/System/` | System | 2 |
| `icons/UI/` | Ui | 27 |
| `illustrations/aviation-space/` | Aviation space | 9 |
| `illustrations/buildings/` | Buildings | 18 |
| `illustrations/business-workplace/` | Business workplace | 14 |
| `illustrations/cameras-optics/` | Cameras optics | 6 |
| `illustrations/celebration-events/` | Celebration events | 18 |
| `illustrations/characters-female/` | Characters female | 10 |
| `illustrations/characters-male/` | Characters male | 6 |
| `illustrations/commerce-retail/` | Commerce retail | 12 |
| `illustrations/communication-social/` | Communication social | 6 |
| `illustrations/computers-electronics/` | Computers electronics | 28 |
| `illustrations/data-analytics/` | Data analytics | 23 |
| `illustrations/devices/` | Devices | 3 |
| `illustrations/education-learning/` | Education learning | 7 |
| `illustrations/energy-systems/` | Energy systems | 15 |
| `illustrations/environment-sustainability/` | Environment sustainability | 2 |
| `illustrations/finance-payments/` | Finance payments | 7 |
| `illustrations/food-drink/` | Food drink | 4 |
| `illustrations/furniture-storage/` | Furniture storage | 28 |
| `illustrations/health-wellness/` | Health wellness | 14 |
| `illustrations/machinery-industry/` | Machinery industry | 19 |
| `illustrations/maritime-nautical/` | Maritime nautical | 4 |
| `illustrations/nature/animals/` | Animals | 5 |
| `illustrations/nature/birds/` | Birds | 7 |
| `illustrations/nature/clouds/` | Clouds | 4 |
| `illustrations/nature/flowers/` | Flowers | 16 |
| `illustrations/nature/landscapes-and-weather/` | Landscapes and weather | 11 |
| `illustrations/nature/plants-and-trees/` | Plants and trees | 22 |
| `illustrations/nature/sea-life/` | Sea life | 5 |
| `illustrations/networking-infrastructure/` | Networking infrastructure | 29 |
| `illustrations/objects/` | Objects | 5 |
| `illustrations/security-trust/` | Security trust | 4 |
| `illustrations/tools-objects/` | Tools objects | 23 |
| `illustrations/vehicles/` | Vehicles | 26 |
| `letters/` | Letters | 26 |
| `logo/` | Logo | 2 |
| `case-studies/<project>/` | Case study graphics | — |

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

## Production illustrations

Only finished illustrations are published. Construction-stage exports (outlined, deconstructed and filled) are excluded. Filenames omit stage suffixes; `stage: "final"` remains in the manifest for compatibility.

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

**Do** — pull by URL rather than copying · use the production illustrations ·
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

## Figma illustration import — 2026-11-13

355 original SVG exports were added from the four supplied sections in Intelligaia Web DS. Catalog cards and category labels are excluded; each file contains the complete illustration frame. Original backgrounds and colors are preserved. Filenames follow the existing illustration convention: `Subject [variant number] — [view or detail].svg`. Same-named variants use two-digit numbers (for example, `House 01.svg`); descriptive details identify cloud and color variations (for example, `Cloud — Compact.svg` and `Air Taxi — Blue.svg`). Figma node IDs and original layer names remain in the manifest's source metadata. Each new manifest entry includes its source node and a direct raw URL on `main`.

## Nature library — 2026-11-20

Nature artwork is organized in subfolders under `illustrations/nature/`. Existing cloud variations and finished plants and trees are consolidated there. Source Figma node IDs and original labels are retained in the manifest. Distinct variants use two-digit numbers or descriptive details.

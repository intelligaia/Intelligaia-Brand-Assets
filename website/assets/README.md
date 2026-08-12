# Intelligaia Illustration Assets

Shared, versioned asset library for Intelligaia. One source, consumed by designers, engineers, marketing, and AI agents.

**279 assets · 15 categories · v1.0.0**

---

## Quick start

Every asset has a stable URL. Nothing needs to be cloned.

```
https://raw.githubusercontent.com/intelligaia/Intelligaia-Brand-Assets/assets/<path>
```

Example:

```
.../assets/marketing/banners/approved_banner_homepage-hero_isometric-gradient_v01.png
.../assets/illustrations/devices/MacBook — Front face — Final.png
```

Machine-readable index of everything:

```
.../assets/manifest.json
```

---

## What's in here

| Folder | Contains |
|---|---|
| `illustrations/characters-female` | Female character illustrations, three-stage construction |
| `illustrations/characters-male` | Male character illustrations, three-stage construction |
| `illustrations/character-elements` | Modular character parts — heads, torsos, limbs |
| `illustrations/devices` | Laptops, phones, headsets, hardware |
| `illustrations/nature` | Trees, plants, clouds, landscape elements |
| `illustrations/objects` | Props — lighthouse, ship, binoculars, magnifier |
| `marketing/banners` | Full-width hero illustrations for landing pages |
| `marketing/sections` | In-page section illustrations for services and workshops |
| `marketing/people` | Approved human character concepts for collateral |
| `marketing/lettering` | Illustrated alphabet and lettering compositions |
| `icons` | UI icon set |
| `waves` | Abstract wave and flow shapes |
| `letters` | Individual illustrated letterforms |
| `brand` | Logos, wordmarks, grid references |
| `diagrams` | Process and system diagram graphics |
| `service-catalog` | Service catalogue collateral pages |
| `tokens` | Colour and typography tokens as JSON |
| `data` | Legacy catalogue JSON |

---

## Construction stages

Many illustrations ship in four stages. The suffix in the filename tells you which.

| Stage | Meaning |
|---|---|
| **Deconstructed** | Primitive circles and rectangles on the 50×50 grid |
| **Outlined** | Stroke-only contour, no fill |
| **Filled** | Flat brand-colour fill applied |
| **Final** | Production-ready with shading and detail |

Use **Final** unless you're documenting the method.

---

## Design tokens

```
tokens/colours.json      Four brand colours, dark + light theme scales, usage rules
tokens/typography.json   Oswald / Geist / Raleway, the seven-step scale, rules
```

The four brand colours:

| Colour | Hex | Role |
|---|---|---|
| Signature Yellow | `#FFC800` | Hero banners, primary CTAs, highlights |
| Ink | `#04050A` | Dark surface, body type on light |
| Trust Blue | `#4A8BF5` | Data, information states, links |
| Insight Purple | `#8A5AF0` | AI, agents, moments of insight |

Type: **Oswald** Medium 500 for headings, Regular 400 for descriptions. **Geist** 400 for interface body. Nothing else, no weights above 500.

---

## Rules

**Do**

- Pull assets by URL rather than copying them into your project
- Use `Final` stage assets in production work
- Keep the flat yellow `#FFC800` — no gradients on hero banners
- One accent colour (blue *or* purple) per viewport

**Don't**

- Recolour, stretch, or crop illustrations
- Regenerate assets with AI when an approved one exists
- Add a third display typeface
- Use `Deconstructed` or `Outlined` stages as finished artwork

---

## Contributing

New assets go through the construction process documented in the design system, then land here via PR to the `assets` branch. Run the manifest generator after adding files so `manifest.json` stays accurate.

---

## Licence

Proprietary. Intelligaia internal and client work only. Not for redistribution.

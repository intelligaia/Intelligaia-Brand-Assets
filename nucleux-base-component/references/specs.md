# Measured specs

Geometry read directly off the Figma component variants. Use this when you need pixel
parity, when someone questions whether the preview matches Figma, or when writing a spec
for a developer.

Padding notation: `top/right/bottom/left`. Odd values like `7.5` are Figma's way of
hitting a round height with a 21px line box — in CSS use a fixed `height` instead.

---

## Button — `Button Variants`

| Size | Height | Padding | Gap | Radius | Font |
|---|---|---|---|---|---|
| Regular | 36 | 7.5/16 | 8 | 8 | 14/21 Semibold |
| Large | 40 | 9.5/24 | 8 | 8 | 14/21 Semibold |
| Small | 32 | 5.5/12 | 6 | 8 | 14/21 Semibold |
| Mini | 24 | 3/8 | 6 | 8 | 12/16 Semibold |

| Variant | Fill | Text | Stroke |
|---|---|---|---|
| Primary | `#0f172a` | `#f8fafc` | — |
| Secondary | `#f1f5f9` | `#0f172a` | — |
| Outline | `#ffffff1a` | `#020617` | 1px `#cbd5e1` + shadow-sm |
| Ghost | transparent | `#334155` | — |

`Roundness=Round` → radius 9999. Icons are 16×16 (13×13 at Mini).

## Icon Button

| Size | Box | Padding | Icon | Radius |
|---|---|---|---|---|
| Regular | 36×36 | 8 | 16 | 8 |
| Large | 40×40 | 10 | 16 | 8 |
| Small | 32×32 | 7 | 15 | 8 |
| Mini | 24×24 | 4 | 13 | **4** |

Outline stroke is `#e2e8f0` here — *not* the `#cbd5e1` the text button uses. Primary fill
`#0f172a`, icon `#f8fafc`.

## Badge

Height 24 · padding 3/8 · gap 6 · radius 8 (Round → 9999) · label 12/16 Semibold.

| Variant | Fill | Text | Stroke |
|---|---|---|---|
| Primary | `#0f172a` | `#f8fafc` | — |
| Secondary | `#f1f5f9` | `#0f172a` | — |
| Outline | `#ffffff1a` | `#020617` | 1px `#e2e8f0` |

Ghost and Destructive exist in the set; their fills follow the button equivalents.

## Input

| Size | Height | Padding | Gap |
|---|---|---|---|
| Regular | 36 | 7.5/12 | 8 |
| Large | 40 | 9.5/16 | 12 |
| Small | 32 | 5.5/8 | 6 |

Default width 320 · radius 8 (Round → 9999) · fill `#ffffff` · stroke 1px `#e2e8f0` ·
text 14/21 · placeholder `#64748b`.
Focus adds `0 0 0 3px #cbd5e1`. Error swaps the stroke to `#dc2626` and the ring to `#fca5a5`.

## Textarea

320×76 · radius 8 · fill `#ffffff` · stroke 1px `#e2e8f0` · **padding 8** (tighter than
Input's 12 — measured, not a typo) · placeholder `#64748b` 14/21 · resize grip bottom-right.

## Select & Combobox

Height 36 · padding `7.5/8/7.5/12` — right side is tighter to seat the chevron ·
gap 8 · radius 8 · stroke `#e2e8f0` · chevron 16×16.
Value text `#020617`, placeholder text `#64748b`, both 14/21 Regular.

## Checkbox / Radio / Switch

| | Size | Detail |
|---|---|---|
| Checkbox unchecked | 16×16 | radius 4, fill `#ffffff`, stroke 1px `#cbd5e1` |
| Checkbox checked | 16×16 | radius 4, fill `#0f172a`, white check 14px |
| Radio unchecked | 16×16 | circle, fill `#ffffff`, stroke 1px `#cbd5e1` |
| Radio checked | 16×16 | same + 8px dot `#0f172a` |
| Switch off | 33×18 | track radius 12 fill `#e2e8f0`, knob 16 white |
| Switch on | 33×18 | track `#0f172a`, knob travels 15px |

## Card

| | Size | Padding | Gap | Radius |
|---|---|---|---|---|
| Compact | 280×72 | 16 | 8 | 8 |
| Large | 400×216 | 24 | 24 | 8 |

Both: fill `#ffffff`, stroke 1px `#e2e8f0`, no shadow at rest.

## Alert

400 wide · padding 16 · radius 8 · fill `#ffffff` · stroke 1px `#e2e8f0`.
Icon 16×16 with a 3px top nudge to sit on the text baseline · gap 12 to the text block ·
lines gap 1.
Line 1: 14/21 Semibold — `#020617` neutral, `#dc2626` error. Line 2: 14/21 muted.

## Tabs

Container: padding 4 · radius 10 · fill `#f1f5f9`.
Tab: height 29 · padding 4/8 · gap 6 · radius 10 · 14/21 Semibold.
- Inactive: transparent, text `#64748b`
- Active: fill `#ffffff`, text `#020617`, **shadow-sm**

## Menu

Container: padding 8 · gap 8 · radius 8 · fill `#ffffff` · stroke `#e2e8f0` · **shadow-md** · min-width 200.
Item: height 32 · padding 5.5/8 · gap 8 · radius 6 · 14/21.
- Default transparent · Hover `#f1f5f9` · Selected `#e2e8f0` · Destructive text `#dc2626`

## Separator

1px rule `#e2e8f0`. `Spacing=Regular` → 4px clearance each side (9px total block).
None → 0. Spacious → wider.

## Progress

Height 8 · radius 12 · track `#cbd5e1` · fill `#fe9a00` (chart amber-2).

## Tooltip

Padding 6/8 · radius 8 · fill `#000000` · text `#ffffff` 12/16 Regular · 12×5 arrow.

## Avatar

Regular 40×40 · Small 32×32 · circle or roundrect · fill `#f1f5f9` · initials 14/21
Semibold `#020617`.

## Table

Header: height 36 · padding 7.5/8 · fill `#f8fafc` · 14/21 Semibold `#020617`.
Cell: height 36 · padding 7.5/8 · 14/21 Regular `#020617`.
Row rule 1px `#e2e8f0`.

## Dialog

640×480 · radius **10** · fill `#ffffff` · stroke 1px `#e2e8f0` · **shadow-lg** · close ✕ 16px.
Header: padding 16 · gap 8 · title 20/24 Semibold.
Footer: padding 16 · gap 8 · buttons right-aligned, 36px Regular — outline then primary.

## Sheet

342 wide, full height · fill `#ffffff` · **shadow-lg** · internal gap 24.

## Accordion trigger

Padding 16/0 · label 14/21 Semibold `#020617` · optional 16px left icon ·
chevron 16px `#64748b` right · 1px `#e2e8f0` rule at the bottom.

## Toast (Sonner Content)

Content block 317 wide · vertical gap 4 · Line 1 14/21 Semibold `#020617` ·
Line 2 14/21 muted. Types: Simple, Line and button, Lines and button, Loading.

---

## Fidelity note

Measured directly: Button, Icon Button, Badge, Input, Textarea, Select, Checkbox, Radio,
Switch, Card, Alert, Tabs, Menu, Separator, Progress, Tooltip, Avatar, Table, Dialog,
Sheet, Accordion, Toast, Label.

Composed rather than measured (reasonable, but verify against Figma before treating as
spec): Field/helper-text spacing, empty state, skeleton, spinner, sidebar item metrics,
breadcrumb, input-group decoration spacing, button hover fills.

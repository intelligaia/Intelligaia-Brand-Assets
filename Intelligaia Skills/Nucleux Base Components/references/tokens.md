# Tokens

Extracted from Figma file `FRymkQ8Nd2VEX74l4tWCE9`, resolved through variable aliases to
final values. Light column = `your_brand` mode. Dark column = `Agntcy-dark` mode.

All of these exist as CSS custom properties in `assets/base-ui.css`. Use the variable,
never the literal.

## Semantic colors

| Token | CSS var | Light | Dark |
|---|---|---|---|
| general/background | `--ds-background` | `#ffffff` | `#000000` |
| general/foreground | `--ds-foreground` | `#020617` | `#fafafa` |
| general/primary | `--ds-primary` | `#0f172a` | `#f5f5f5` |
| general/primary foreground | `--ds-primary-foreground` | `#f8fafc` | `#0a0a0a` |
| general/secondary | `--ds-secondary` | `#f1f5f9` | `#262626` |
| general/secondary foreground | `--ds-secondary-foreground` | `#0f172a` | `#f5f5f5` |
| general/accent | `--ds-accent` | `#f1f5f9` | `#171717` |
| general/accent foreground | `--ds-accent-foreground` | `#0f172a` | `#f5f5f5` |
| general/muted | `--ds-muted` | `#f1f5f9` | `#171717` |
| general/muted foreground | `--ds-muted-foreground` | `#64748b` | `#a3a3a3` |
| general/destructive | `--ds-destructive` | `#dc2626` | `#9e4042` |
| general/border | `--ds-border` | `#e2e8f0` | `#404040` |
| general/input | `--ds-input` | `#ffffff` | `#ffffff0d` |
| card/card | `--ds-card` | `#ffffff` | `#171717` |
| card/card foreground | `--ds-card-foreground` | `#020617` | `#ffffff` |
| popover/popover | `--ds-popover` | `#000000` | `#ffffff` |
| popover/popover foreground | `--ds-popover-foreground` | `#ffffff` | `#000000` |
| focus/ring | `--ds-ring` | `#cbd5e1` | `#404040` |
| focus/ring error | `--ds-ring-error` | `#fca5a5` | `#6d2e2f` |

**Note — popover inverts.** In light mode the popover surface is black with white text.
That is intentional (tooltips are dark-on-light). Don't "fix" it.

### Control strokes

Two different border colors are in play and they are not interchangeable:

| Use | Value (light) | CSS var |
|---|---|---|
| Surfaces, inputs, outline badge, outline icon button, dividers | `#e2e8f0` | `--ds-border` |
| Outline **button**, unchecked checkbox/radio, progress track | `#cbd5e1` | `--ds-stroke-strong` |

Ghost button and sidebar text use `#334155` → `--ds-ghost-foreground`.

## Sidebar

| Token | CSS var | Light | Dark |
|---|---|---|---|
| sidebar | `--ds-sidebar` | `#f1f5f9` | `#0a0a0a` |
| sidebar foreground | `--ds-sidebar-foreground` | `#334155` | `#d4d4d4` |
| sidebar accent | `--ds-sidebar-accent` | `#e2e8f0` | `#171717` |
| sidebar accent foreground | `--ds-sidebar-accent-foreground` | `#334155` | `#f5f5f5` |
| sidebar primary | `--ds-sidebar-primary` | `#0f172a` | `#fafafa` |
| sidebar primary foreground | `--ds-sidebar-primary-foreground` | `#f8fafc` | `#171717` |
| sidebar border | `--ds-sidebar-border` | `#e2e8f0` | `#262626` |
| sidebar ring | `--ds-sidebar-ring` | `#cbd5e1` | `#404040` |

## Border radius

| Token | CSS var | Value |
|---|---|---|
| rounded-none | `--ds-radius-none` | 0 |
| rounded-xs | `--ds-radius-xs` | 2px |
| rounded-sm | `--ds-radius-sm` | 4px |
| rounded-md | `--ds-radius-md` | 6px |
| rounded-lg | `--ds-radius-lg` | **8px — the default for buttons, inputs, cards, badges** |
| rounded-xl | `--ds-radius-xl` | 12px |
| rounded-2xl | `--ds-radius-2xl` | 16px |
| rounded-3xl | `--ds-radius-3xl` | 24px |
| rounded-full | `--ds-radius-full` | 9999px |

Absolute steps also exist: 2, 4, 6, 8, 10, 12, 16, 24, 32.
Tabs and Dialog use 10px, which is an absolute step with no semantic name.

## Spacing

| Token | CSS var | Value |
|---|---|---|
| 3xs | `--ds-space-3xs` | 2px |
| 2xs | `--ds-space-2xs` | 4px |
| xs | `--ds-space-xs` | 8px |
| *(none)* | `--ds-space-3` | 12px |
| md | `--ds-space-md` | 16px |
| lg | `--ds-space-lg` | 20px |
| xl | `--ds-space-xl` | 24px |
| 2xl | `--ds-space-2xl` | 32px |
| 3xl | `--ds-space-3xl` | 40px |
| 4xl | `--ds-space-4xl` | 48px |
| 5xl | `--ds-space-5xl` | 64px |

**Gap in the scale:** there is no `semantic/sm`. It jumps 8px → 16px. 12px is used widely
in components (alert gap, rich option padding) and comes from `absolute/3`. That is why
`--ds-space-3` exists.

Full absolute ladder: 0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56,
64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 288, 320, 384.

## Typography

Families: sans / serif / headings / body all = **Inter**. Monospace = **Menlo**.

| Style | Size | Line height | Weight | Letter spacing | CSS class |
|---|---|---|---|---|---|
| heading 1 | 48 | 48 | 600 | -1.5px | `.ds-h1` |
| heading 2 | 30 | 30 | 600 | -1px | `.ds-h2` |
| heading 3 | 24 | 28.8 | 600 | -1px | `.ds-h3` |
| heading 4 | 20 | 24 | 600 | 0 | `.ds-h4` |
| paragraph/regular | 16 | 24 | 400 | 0 | `.ds-p` |
| paragraph/medium | 16 | 24 | 500 | 0 | `.ds-p-medium` |
| paragraph/bold | 16 | 24 | 600 | 0 | `.ds-p-bold` |
| paragraph small/regular | 14 | 21 | 400 | 0.5% | `.ds-sm` |
| paragraph small/medium | 14 | 21 | 500 | 0.5% | `.ds-sm-medium` |
| paragraph small/bold | 14 | 21 | 600 | 0.5% | `.ds-sm-bold` |
| paragraph mini/regular | 12 | 16 | 400 | 1.5% | `.ds-mini` |
| paragraph mini/medium | 12 | 16 | 500 | 1.5% | `.ds-mini-medium` |
| paragraph mini/bold | 12 | 16 | 600 | 1.5% | `.ds-mini-bold` |
| monospaced | 16 | 24 | 400 | 0 | `.ds-mono` |

**14/21 semibold is the workhorse.** Buttons, tabs, table headers, alert titles, menu
labels, accordion triggers — all of it. Reach for `.ds-sm-bold` before anything else.

**Known discrepancy:** the `heading 1` *text style* in Figma is set to Regular while the
`heading 1/weight` *variable* says Semibold. The CSS follows the variable (600). Confirm
with the design team if an H1 is central to what you're building.

## Shadows

| Token | CSS var | Value |
|---|---|---|
| shadow-2xs | `--ds-shadow-2xs` | `0 1px 0 0 #0000000d` |
| shadow-xs | `--ds-shadow-xs` | `0 1px 2px 0 #0000000d` |
| shadow-sm | `--ds-shadow-sm` | `0 1px 2px -1px #0000001a, 0 1px 3px 0 #0000001a` |
| shadow-md | `--ds-shadow-md` | `0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a` |
| shadow-lg | `--ds-shadow-lg` | `0 4px 6px -4px #0000001a, 0 10px 15px -3px #0000001a` |
| shadow-xl | `--ds-shadow-xl` | `0 8px 10px -6px #0000001a, 0 20px 25px -5px #0000001a` |
| shadow-2xl | `--ds-shadow-2xl` | `0 25px 50px 12px #00000040` |
| focus ring | `--ds-focus-ring` | `0 0 0 3px #cbd5e1` |
| focus ring error | `--ds-focus-ring-error` | `0 0 0 3px #fca5a5` |

Where they're actually used: `sm` on outline buttons and the active tab, `md` on menus,
`lg` on dialogs and sheets.

## Chart colors

Seven ramps — blue, green, amber, rose, purple, teal, orange — each with 5 static steps
plus area fill/stroke pairs. Steps 1–3 are exposed as `--ds-chart-{hue}-{1,2,3}`.

Progress bars fill with `--ds-chart-amber-2` (`#fe9a00`). That is measured from the
component, not a mistake — override with `.ds-progress--primary` if a neutral bar reads
better in context.

## Paint styles

`AI Gradients/15%`, `AI Gradients/45%`, `AI Gradients/100%` — reserved for agentic
surfaces. Do not use them on base components.

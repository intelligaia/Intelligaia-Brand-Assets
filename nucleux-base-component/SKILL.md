---
name: intelligaia-base-ui
description: Build and render a non-AI Nucleux UI surface as a working, self-contained HTML preview you can actually look at — buttons, form controls, navigation, layout surfaces, overlays, feedback, and data display, styled from tokens and geometry measured off the Intelligaia Figma library. Use this whenever someone wants to see, mock up, preview, lay out, or design a screen, form, card, modal, table, list, dashboard panel, or empty state, including short asks like "make a pricing card", "build a settings form", "create a data table", "design a login screen", "show me an empty state". This is the design-side skill and its output is a rendered preview, not production code — for writing real React against the @nucleux/* npm packages use nucleux-base-components instead, and for AI/agent surfaces (prompt bars, streaming responses, tool timelines, approval gates) use the agentic pattern set.
---

# Intelligaia Base UI

Turn a one-line request into a real, on-brand component preview. The user should never
have to describe padding, colors, or states — that is what this skill already knows.

**Source of truth:** Figma file `FRymkQ8Nd2VEX74l4tWCE9` — "Intelligaia Agentic Design System".
Tokens and geometry in `references/` were measured from that file, not estimated.

---

## The one rule that matters

**Build first, ask later.** A short prompt is the point. Do not open with clarifying
questions about variant, size, density, or theme — apply the defaults below, produce the
preview, then offer adjustments in one line at the end.

Only stop and ask if the request names a component that does not exist in the system, or
if two fundamentally different screens would satisfy it equally well.

---

## Workflow

1. **Parse the request into components.** Map the noun ("pricing card", "settings form")
   to primitives from `references/components.md`. Reach for a recipe in
   `references/recipes.md` first — most requests are already there.

2. **Fill the gaps with defaults.** Never leave a slot empty and never write "Lorem ipsum".
   Invent plausible, domain-appropriate content (real-sounding plan names, field labels,
   row data). Realistic copy is what makes a preview reviewable.

3. **Write a self-contained HTML file.** Inline `assets/base-ui.css` inside a single
   `<style>` block, then write semantic markup using the `ds-` classes. No build step, no
   external JS, no CDN beyond the Inter font `@import` already in the CSS.

4. **Verify before delivering** (see Verification below).

5. **Deliver.** `SendUserFile` the `.html`. If it is something they will reopen — a
   pattern reference, a component gallery, a page they will iterate on — also call
   `create_artifact` so it persists. Close with one line offering the obvious next turns
   (dark mode, a different variant, more density, hand it to code).

---

## Defaults — apply without asking

| Decision | Default |
|---|---|
| Theme | Light. Add the dark toggle only if asked, or if the preview is a gallery. |
| Button size | `Regular` (36px). `Large` only for a primary page-level CTA. |
| Button variant | Primary for the single main action; Outline for secondary; Ghost for tertiary/icon rows. **One primary per surface.** |
| Roundness | `Default` (8px). Use `--round` only if the request says pill/rounded. |
| Input size | `Regular` (36px), matching the buttons beside it. |
| Card | Compact (`.ds-card`, 16px padding) for list items and tiles; `.ds-card--lg` (24px) for a standalone feature card. |
| States shown | Resting state only. Add hover/focus/error/disabled only when the request is about states, or when it's a form worth showing validation on. |
| Width | Cards 280–400px, forms 480px, dialogs 640px, tables full-width. Center on the page with breathing room. |
| Page background | `--ds-background` with 32–48px padding around the component. |
| Icons | Inline `lucide` SVG paths at 16×16, `stroke-width="2"`, `currentColor`. Never emoji, never icon fonts. |
| Content | Realistic and specific to the domain implied by the request. |

---

## Hard rules

- **Only `--ds-*` tokens for color, radius, spacing, and shadow.** A raw hex in the markup
  is a bug. The one exception is `#f8fafc` on table headers, which is already in the CSS.
- **Never invent a component.** If it isn't in `references/components.md`, compose it from
  primitives that are — a "stat tile" is a card + label + heading + badge, not a new thing.
- **Never restyle a primitive inline.** No `style="padding:20px"` on a `.ds-btn`. If the
  spacing is wrong, the wrapper is wrong.
- **Icon-only controls need `aria-label`.** Every input needs a `<label>` or `aria-label`.
- **Keep the agentic set out.** Prompt bars, streaming indicators, thinking states, tool
  timelines, approval gates, structured AI output — all out of scope here. If the request
  needs them, say so and stop rather than improvising them from base parts.

---

## Verification — run before you deliver

1. **Token sweep.** Grep the file for `#` outside the `<style>` block. Any hit is a
   hardcoded color to replace with a token.
2. **Inventory check.** Every `ds-` class used exists in `assets/base-ui.css`.
3. **Render it.** Open the file headless and screenshot it, then actually look:

   ```bash
   python3 -c "
   from playwright.sync_api import sync_playwright
   with sync_playwright() as p:
       b = p.chromium.launch(); pg = b.new_page(viewport={'width':1200,'height':900})
       pg.goto('file:///path/to/preview.html'); pg.screenshot(path='/tmp/check.png', full_page=True); b.close()"
   ```

   Read the PNG. Check alignment, that nothing overflows, that text contrasts, that the
   primary action reads as primary. Fix and re-shoot — up to twice — before sending.
4. **Hierarchy check.** Exactly one primary action. Muted text is genuinely secondary.

---

## Staying in sync with Figma

The baked references are a snapshot. Re-verify against the live file when:

- the user asks for a variant, size, or state not listed in `references/components.md`
- the user says the preview doesn't match Figma
- the request is a spec or handoff rather than an exploration

The Figma bridge tools (`figma_get_component_details`, `figma_search_components`,
`figma_execute`) read the live file when the desktop plugin is connected. If it is not
connected, build from the references and say plainly that you used the baked snapshot.

`references/refresh.md` has the exact scripts that produced these files — re-run them to
regenerate after the library changes.

---

## If they want code instead of a preview

The preview is the default deliverable — this skill's job is to make a design real enough
to review before anyone writes a component.

When the user wants shippable React against the real library, that is the
`nucleux-base-components` skill's territory: it carries the authoritative `@nucleux/*`
package names and defers to `get_component` for actual props. Hand off rather than guessing
imports, since a plausible-looking wrong package path costs more than the handoff does.

The layout you just built is still useful there — it is the structure the React version
should follow. `references/components.md` maps each `ds-` class to its Figma variant
properties (`.ds-btn--primary` → `Variant=Primary`), and that vocabulary is what the props
express, so carry it across rather than re-deciding the design.

---

## Reference files

| File | Read it when |
|---|---|
| `references/recipes.md` | **Start here.** Ready compositions for card, form, table, dialog, list, settings, empty state, dashboard tile. |
| `references/components.md` | Full inventory: every component, its Figma variant properties, and allowed values. |
| `references/specs.md` | Measured geometry per component — sizes, padding, radii, colors. For pixel questions and Figma parity. |
| `references/tokens.md` | Complete token tables, light and dark. |
| `references/refresh.md` | Regenerating all of the above from Figma. |
| `assets/base-ui.css` | The implementation. Inline this into every preview. |
| `assets/template.html` | Starter shell — copy, inline the CSS, replace the body. |

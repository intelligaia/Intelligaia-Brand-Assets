---
name: nucleux-base-components-via-npm
description: The foundational (non-AI) Nucleux UI kit — buttons, form controls, navigation, layout surfaces, overlays, feedback, and data display. Use when building general UI with Nucleux and you need a primitive like a button, input, select, checkbox, dialog, sheet, tabs, table, card, badge, alert, toast, tooltip, menu, or breadcrumb — i.e. the standard building blocks, not the agent/chat-specific ones.
---

# Nucleux — base components

The foundational UI kit: everything that isn't AI/agent-specific. Use this to pick the right primitive; for the chat/agent components see `nucleux-agentic-components`.

**Always confirm exact exports and props with `get_component` before use** (see `nucleux-components`). Package names are authoritative (from npm); export names are the documented ones, but composable components have sub-parts you must read from the catalog.

## Component inventory

The full list of components — grouped into buttons & actions, inputs & form controls, navigation & chrome, layout & surfaces, feedback/status/onboarding, and data display, each with package name and usage notes — lives in `references/components.md`. Read that file whenever you need to pick a component or confirm its package name.

## Rules

- **Read props from `get_component`** — don't assume variant names or copy another library's API. Composable ones (`CardContainer`, `Sidebar`, `Toast`, `Table`) expose sub-parts; use the `exports` list.
- **Icon slots** take `lucide-react` icons (`<Bell />`); install it if used.
- **`aria-label` is required** on icon-only controls (`IconButton`).
- **Semantic colors** (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) keep components theme-correct — never hardcode hex.
- **Providers:** toast needs `ToastProvider` near the app root; confirm the exact setup with `get_component Toast`.

## Related

`nucleux-setup` (install/theming) · `nucleux-components` (props workflow) · `nucleux-app-shell` (assemble nav+layout) · `nucleux-agentic-components` (the AI/agent set).

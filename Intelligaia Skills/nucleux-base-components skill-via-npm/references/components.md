# Nucleux base components — full inventory

Authoritative package names (from npm) and notes for every component in the base (non-AI) Nucleux kit. Export names shown are the documented ones — composable components have sub-parts you must confirm via `get_component`.

**Always confirm exact exports and props with `get_component` before use** (see `nucleux-components`).

## Buttons & actions

| Component | Package | Notes |
|-----------|---------|-------|
| `Button` | `@nucleux/button` | variants, sizes, icon slots |
| `IconButton` | `@nucleux/icon-button` | icon-only, for toolbars/nav rails; needs `aria-label` |
| `LinkButton` | `@nucleux/link-button` | link-styled action |
| `ActionTile` | `@nucleux/action-tile` | large selectable action tile |

## Inputs & form controls

| Component | Package | Notes |
|-----------|---------|-------|
| `Checkbox` | `@nucleux/checkbox` | accessible checkbox |
| `RadioGroup` | `@nucleux/radio-group` | single-select radios |
| `RichCheckboxOption` | `@nucleux/rich-checkbox-group` | selectable option cards |
| `Switch` | `@nucleux/switch` | on/off toggle |
| `Select` | `@nucleux/select` | native-backed select with chevron |
| `SearchInput` | `@nucleux/search-input` | compact search field |

## Navigation & chrome

| Component | Package | Notes |
|-----------|---------|-------|
| `GlobalNav` | `@nucleux/global-nav` | top bar; `left`/`center`/`right` slots |
| `Sidebar` (+ `SidebarItem`, `SidebarSeparator`) | `@nucleux/sidebar` | collapsed icon rail |
| `NavPanel` | `@nucleux/nav-panel` | expanded nav with collapsible sections |
| `RightSidebar` | `@nucleux/right-sidebar` | on-this-page TOC + metadata |
| `Tabs` | `@nucleux/tabs` | horizontal/vertical tabs |
| `Breadcrumb` | `@nucleux/breadcrumb` | breadcrumb trail |
| `Menu` | `@nucleux/menu` | dropdown / context menu |

## Layout & surfaces

| Component | Package | Notes |
|-----------|---------|-------|
| `CardContainer` (+ card parts) | `@nucleux/card` | composable card surface |
| `MediaCard` | `@nucleux/media-card` | media + title + description card |
| `Dialog` | `@nucleux/dialog` | modal with overlay |
| `Sheet` | `@nucleux/sheet` | slide-over drawer |
| `Popover` | `@nucleux/popover` | click popover (outside-click/Esc) |
| `Tooltip` | `@nucleux/tooltip` | hover/focus tooltip |
| `Accordion` | `@nucleux/accordion` | collapsible panels |
| `PageHeader` | `@nucleux/page-header` | badges + title + description block |
| `Separator` | `@nucleux/separator` | horizontal/vertical divider |

## Feedback, status & onboarding

| Component | Package | Notes |
|-----------|---------|-------|
| `Alert` | `@nucleux/alert` | info/success/warning/error banner |
| `Badge` | `@nucleux/badge` | status pill / label |
| `Toast` (+ `ToastProvider`, `useToast`) | `@nucleux/toast` | transient notifications |
| `Progress` | `@nucleux/progress` | determinate/indeterminate bar |
| `ChecklistItem` | `@nucleux/checklist` | onboarding/progress checklist |
| `GettingStartedPill` | `@nucleux/getting-started-pill` | floating onboarding launcher |
| `ErrorState` | `@nucleux/error-state` | full error/empty state |

## Data display

| Component | Package | Notes |
|-----------|---------|-------|
| `Avatar` | `@nucleux/avatar` | image, initials, or role icon |
| `Chip` | `@nucleux/chip` | small tag, optional dot/remove |
| `CodeBlock` | `@nucleux/code-block` | code surface with copy button |
| `Table` | `@nucleux/table` | semantic table primitives |
| `RelatedPatternsGrid` | `@nucleux/related-patterns-grid` | grid of related-pattern cards |

# Component inventory

Every base (non-agentic) component set in the Figma library, with its real variant
properties and allowed values. **These property names and values are the vocabulary** —
when someone says "outline button, small", it maps to `Variant=Outline, Size=Small`.

Legend: `BOOLEAN` = show/hide toggle · `INSTANCE_SWAP` = icon slot · lists = variant options.

---

## Buttons & actions

**Button Variants** → `.ds-btn`
- Roundness: Default, Round
- Variant: Primary, Secondary, Outline, Ghost
- Size: Regular, Large, Small, Mini
- State: Default, Hover & Active, Focus, Disabled
- Show left icon / Show right icon (BOOLEAN) + icon slots

**Icon Button** → `.ds-icon-btn`
- Roundness: Default, Round
- Variant: Primary, Secondary, Outline, Ghost, Ghost Muted, Destructive
- Size: Regular, Large, Small, Mini
- State: Default, Hover & Active, Focus, Disabled
- *Has a Destructive and a Ghost Muted variant that the text button does not.*

**Link Button** → `.ds-link-btn`
- Roundness · Size: Default, Large, Small, Mini · State: Default, Hover & Active, Focus

**Loading Button**
- Roundness · Size: Large, Regular, Small, Mini · State: Default, Hover & Active, Focus
- Compose as `.ds-btn` + `.ds-spinner`.

**Button Group** / **Button Group Icon Button**
- Skin: Outlined, Ghost · Size: Regular, Large, Small
- Position: Left, Middle, Right, Single · State: Default, Focus, Hover, Disabled

**Toggle Button** / **Toggle Icon Button**
- Roundness · Skin: Outlined, Ghost · Size: Regular/Default, Large, Small, Mini
- Position: Left, Middle, Right, Single · Active?: Yes, No · State: Default, Disabled, Focus

**Pagination** (Type: Next, Previous · State: Regular, Disabled) and
**Pagination Button** (Active: On, Off).

---

## Inputs & form controls

**Input** → `.ds-input`
- Roundness: Default, Round
- Size: Regular, Large, Small, Mini
- State: Empty, Placeholder, Value, Focus, Error, Error Focus, Disabled
- Show decoration left / right / cursor (BOOLEAN) → use `.ds-input-group` when decorated

**Textarea** → `.ds-textarea`
- Roundness · State: Empty, Placeholder, Value, Focus, Error, Error Focus, Disabled
- Show resizable (BOOLEAN)

**Select & Combobox** → `.ds-select`
- Size: Regular, Large, Small, Mini
- State: Placeholder, Default, Focus, Error, Disabled
- Lines: 1 Line, 2 Lines · Show Decoration / Show Prepend (BOOLEAN)
- Right decoration differs: Combobox vs Select

**Input File** — Roundness · File Chosen?: True/False · Size · State

**Checkbox** → `.ds-checkbox`
- Checked?: False, True, Indeterminate
- State: Default, Focus, Error, Error Focus, Disabled

**Checkbox Group** (Layout: Inline, Block) · **Rich Checkbox Group** (Show Line 2, Flipped)
→ `.ds-option`, `.ds-rich-option`

**Radio** → `.ds-radio` — Checked?: False/True · State: Default, Focus, Error, Error Focus, Disabled
**Radio Group** (Layout: Block, Inline) · **Rich Radio Group** (Show Line 2, Flipped)

**Switch** → `.ds-switch` — Checked?: False/True · State: Default, Focus, Disabled
**Switch Group** (Layout) · **Rich Switch Group** (Show Line 2, Flipped)

**Slider Horizontal / Vertical** — Type: Default, Range narrow, Range wide

**Label** → `.ds-label` — Layout: Inline, Block

**Vertical Field** / **Horizontal Field** → `.ds-field` / `.ds-field--horizontal`
- Type: Select, Text Value, Radio, Textarea, Checkbox, Slider
- *This is the label + control + helper wrapper. Use it for every form row.*

**Date Picker** (Months: 1/2/3), **Date Picker Input** (State: Placeholder, Value, Focus),
plus internal `.Date Picker / Day` and `/ Header` parts.

---

## Navigation & chrome

**Tabs** → `.ds-tabs` — Size: Regular, Large, Small · Content: Label, Icon, Icon + Label · Parts: 2–5
**Tab** → `.ds-tab` — Size · Content · State: Inactive, Inactive Hover, Inactive Focus, Active, Active Focus, Disabled · Show counter (BOOLEAN)

**Menu** → `.ds-menu` — Spacing: None, 2px, 8px, 16px, 24px
**Menu Item** → `.ds-menu-item`
- Size: Regular, Large · Type: Default, Destructive
- State: Default, Hover, Focus, Active, Selected, Disabled
- Show left/right decoration, Show line 2 (BOOLEAN)

**Select Menu Group Label** (Type: Small, Regular · Indented?) ·
**Select Menu Overflow** (Scroll Direction) ·
**.Select Left Decoration** (Type: Icon, Text, Checkbox, Radio, Avatar, Deco Icon Primary,
Deco Icon Outline, Blank, Text Muted, Icon muted · Size: Default, Large)

**Sidebar/Collapsed**, **Sidebar/Expanded** (Projects: Yes/No) → `.ds-sidebar`
**Sidebar Item / Collapsed** (State: Default, Active, Hover)
**Sidebar Item / Expanded / 1st Level** — State: Default, Active, Focus, Active Focus, Hover · Type: Base, Expanded, Collapsed, Dropdown, Badge
**Sidebar Item / Expanded / 2nd Level** (State: Default, Active) → `.ds-sidebar-item`
**Sidebar Group Label** — Type: Base, Action, Expanded, Collapsed → `.ds-sidebar-label`

**Accordion Trigger** → `.ds-accordion__trigger` — State: Closed, Open · Left Icon (BOOLEAN)

**Scrollbar** (Type: Vertical, Horizontal) · **Resizable** (Orientation) ·
**Carousel** / **Carousel with Image** (Slides: 1/2/3)

**Command Item** — State: Regular, Hover, Active

---

## Surfaces & overlays

**Card** → `.ds-card`
- Two published components, both slot-based (no variant props):
  - compact: 280×72, padding 16, gap 8, radius 8
  - large: 400×216, padding 24, gap 24, radius 8

**Dialog** → `.ds-dialog` — Type: Desktop, Desktop Scrollable, Mobile, Mobile Full Screen Scrollable
**Dialog Header** — Type: Header, Close Only, Icon Button Close
**Dialog Footer** — Type: 2 Buttons Right, 2 Full-width Buttons, Single Full-width Button
**Alert Dialog** — Type: Desktop, Mobile

**Sheet** → `.ds-sheet` — Scrollable: False, True

**Tooltip** → `.ds-tooltip` — Side: Top, Bottom, Left, Right

**Separator** → `.ds-separator` — Spacing: Regular, None, Spacious · Direction: Default, Vertical

---

## Feedback & status

**Alert** → `.ds-alert`
- Type: Neutral, Error · Flip Icon: False, True
- Show Line 2 / Show Icon / Show Button (BOOLEAN) · Icon slot
- *Only two types. There is no success or warning variant — do not invent one.*

**Badge** → `.ds-badge`
- Roundness: Default, Round
- Variant: Primary, Secondary, Outline, Ghost, Destructive
- State: Default, Focus · Show icon left/right (BOOLEAN)

**Sonner** (toast stack — Stack: 1/2/3 Levels) ·
**Sonner Content** → `.ds-toast` — Type: Line and button, Simple, Lines and button, Loading

**Progress** → `.ds-progress` — Progress: 0, 10, 25, 33, 50, 66, 75, 90, 100

**Spinner** → `.ds-spinner` — Type: Default, Mirrored

**Skeleton** (3 components) → `.ds-skeleton`

---

## Data display

**Avatar** → `.ds-avatar`
- Set A: Picture: On/Off · Size: Small, Regular, Tiny, Extra Tiny · Roundness Type: Roundrect, Round
- Set B: Type: Logo, Image, Empty, Alpha Bet, Agent · Color: White, Mint, Pink, Blue, Purple, Black, Orange, Brown · Agent: Flare, Silk, Bloom, Jade, Void, Nova

**Avatar Stack** (Size: Regular, Small) · **Avatar Group** → `.ds-avatar-stack`

**Table Header** → `.ds-table th`
- Content: Text, Sortable, Checkbox, Empty · Alignment: Left, Right
- State: Default, Hover, Active, Selected · Show border (BOOLEAN)

**Table Cell** → `.ds-table td`
- Content: Text (1 Line), Text (2 Lines), Actions, Checkbox, Badge, Buttons, Avatar,
  Avatar + Name, Input, Progress, Progress + Text
- Alignment: Left, Right · State: Default, Hover, Active, Selected
- *That Content list is the menu of what can go in a cell. Pick from it rather than
  inventing a cell type.*

**Basic Table Header** (Cell Type: Heading) · **Basic Table Cell** (Parity: Odd/Even · Alignment)

**.Donut Chart** (2 components) · **Icon** library (1,604 icons) · **Alphabet** (26)

---

## Out of scope — agentic set

On the `✨ Agentic Patterns` page and the agentic part of `↳Input`. Do **not** build these
here: Input Bar, Agentic input, Aurora Glow, Suggestions, Structured Input, Structured
Output, Streaming, Initial CTA, File Attachment, Screenshot example, voice/dictation states.

If a request needs one, say which agentic pattern it needs and stop — don't approximate it
from base primitives.

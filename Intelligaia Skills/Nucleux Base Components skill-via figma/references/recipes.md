# Recipes

Ready compositions for the things people actually ask for. Copy the markup, swap the
content, ship it. Every one of these uses only classes that exist in `assets/base-ui.css`.

Wrap any of them in the page shell from `assets/template.html`.

---

## Product / pricing card

> "make a pricing card"

```html
<div class="ds-card ds-card--lg" style="width:400px">
  <div class="ds-card__header">
    <div class="ds-spread">
      <h3 class="ds-card__title">Growth</h3>
      <span class="ds-badge ds-badge--secondary">Most popular</span>
    </div>
    <p class="ds-card__desc">For teams shipping to production every week.</p>
  </div>
  <div class="ds-row" style="align-items:baseline;gap:4px">
    <span class="ds-h2">$79</span>
    <span class="ds-sm ds-muted">/ month</span>
  </div>
  <hr class="ds-separator">
  <div class="ds-stack-xs">
    <div class="ds-row">{{check}}<span class="ds-sm">Up to 20 seats</span></div>
    <div class="ds-row">{{check}}<span class="ds-sm">Unlimited environments</span></div>
    <div class="ds-row">{{check}}<span class="ds-sm">Priority support</span></div>
  </div>
  <div class="ds-card__footer">
    <button class="ds-btn ds-btn--primary ds-btn--block">Start free trial</button>
  </div>
</div>
```

`{{check}}` is the inline lucide check — write it out in full each time:

```html
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     style="color:var(--ds-muted-foreground);flex:none"><path d="M20 6 9 17l-5-5"/></svg>
```

That is the icon pattern everywhere in this skill: inline SVG, 16×16, `stroke="currentColor"`,
`stroke-width="2"`, color set by a token. There is no icon class in the CSS.

---

## Stat / metric tile

> "dashboard tile", "KPI card"

```html
<div class="ds-card" style="width:280px">
  <span class="ds-sm ds-muted">Monthly active users</span>
  <div class="ds-spread">
    <span class="ds-h3">18,204</span>
    <span class="ds-badge ds-badge--secondary ds-badge--round">+12.4%</span>
  </div>
  <div class="ds-progress"><div class="ds-progress__bar" style="width:68%"></div></div>
  <span class="ds-mini ds-muted">68% of quarterly target</span>
</div>
```

Grid of them: `<div class="ds-grid" style="grid-template-columns:repeat(4,1fr)">`.

---

## Form

> "settings form", "create X form"

Every row is a `.ds-field`. Label → control → helper. Never a bare input.

```html
<div class="ds-card ds-card--lg" style="width:520px">
  <div class="ds-card__header">
    <h3 class="ds-card__title">Workspace settings</h3>
    <p class="ds-card__desc">Applies to everyone in this workspace.</p>
  </div>

  <div class="ds-stack">
    <div class="ds-field">
      <label class="ds-label" for="name">Workspace name</label>
      <input class="ds-input" id="name" value="Intelligaia Platform">
    </div>

    <div class="ds-field">
      <label class="ds-label" for="region">Data region</label>
      <select class="ds-select" id="region">
        <option>US East (N. Virginia)</option>
        <option>EU West (Ireland)</option>
      </select>
      <span class="ds-help">Cannot be changed after the first deploy.</span>
    </div>

    <div class="ds-field">
      <label class="ds-label" for="desc">Description</label>
      <textarea class="ds-textarea" id="desc" placeholder="What is this workspace for?"></textarea>
    </div>

    <hr class="ds-separator ds-separator--spacious">

    <label class="ds-option">
      <input type="checkbox" class="ds-checkbox" checked>
      <span class="ds-option__text">
        <span class="ds-option__title">Require two-factor authentication</span>
        <span class="ds-option__desc">Members without 2FA lose access at their next sign-in.</span>
      </span>
    </label>

    <div class="ds-spread">
      <span class="ds-option__text">
        <span class="ds-option__title">Weekly digest</span>
        <span class="ds-option__desc">Summary of activity, sent Mondays.</span>
      </span>
      <input type="checkbox" class="ds-switch" checked>
    </div>
  </div>

  <div class="ds-card__footer" style="justify-content:flex-end">
    <button class="ds-btn ds-btn--outline">Cancel</button>
    <button class="ds-btn ds-btn--primary">Save changes</button>
  </div>
</div>
```

**Error state:** add `ds-input--error` to the control and a `.ds-field-error` line under it.
**Horizontal layout:** `.ds-field--horizontal` puts a 160px label beside the control.

---

## Data table

> "create a data table", "user list"

```html
<div class="ds-stack">
  <div class="ds-spread">
    <div class="ds-stack-2xs">
      <h3 class="ds-h3">Members</h3>
      <span class="ds-sm ds-muted">24 people have access</span>
    </div>
    <div class="ds-row">
      <div class="ds-input-group" style="width:240px">
        <svg><!-- search --></svg><input placeholder="Search members">
      </div>
      <button class="ds-btn ds-btn--primary">Invite</button>
    </div>
  </div>

  <div class="ds-table-wrap">
    <table class="ds-table">
      <thead>
        <tr>
          <th style="width:40px"><input type="checkbox" class="ds-checkbox"></th>
          <th>Name</th><th>Role</th><th>Status</th>
          <th class="ds-align-right">Last active</th>
          <th style="width:48px"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" class="ds-checkbox"></td>
          <td>
            <div class="ds-row">
              <span class="ds-avatar ds-avatar--tiny">AR</span>
              <span class="ds-sm-medium">Ananya Rao</span>
            </div>
          </td>
          <td class="ds-muted">Admin</td>
          <td><span class="ds-badge ds-badge--secondary">Active</span></td>
          <td class="ds-align-right ds-muted">2 hours ago</td>
          <td><button class="ds-icon-btn ds-icon-btn--ghost ds-icon-btn--sm" aria-label="Row actions"><svg><!-- more-horizontal --></svg></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

Cell contents come from the Table Cell menu in `components.md` — text, badge, avatar,
avatar + name, buttons, actions, checkbox, input, progress. Pick from it.

---

## Dialog

> "confirmation modal", "delete dialog"

```html
<div class="ds-overlay">
  <div class="ds-dialog" style="max-width:480px">
    <div class="ds-dialog__header">
      <div class="ds-dialog__titlerow">
        <h2 class="ds-dialog__title">Delete environment</h2>
        <button class="ds-icon-btn ds-icon-btn--ghost ds-icon-btn--sm" aria-label="Close"><svg><!-- x --></svg></button>
      </div>
      <p class="ds-dialog__desc">This permanently removes <strong>staging-eu</strong> and its 4 deployments. This cannot be undone.</p>
    </div>
    <div class="ds-dialog__body">
      <div class="ds-field">
        <label class="ds-label" for="confirm">Type <strong>staging-eu</strong> to confirm</label>
        <input class="ds-input" id="confirm" placeholder="staging-eu">
      </div>
    </div>
    <div class="ds-dialog__footer">
      <button class="ds-btn ds-btn--outline">Cancel</button>
      <button class="ds-btn ds-btn--destructive">Delete environment</button>
    </div>
  </div>
</div>
```

Footer button order is outline-then-primary, right-aligned. That's measured from the
Dialog Footer component — keep it.

---

## List row / selectable item

```html
<div class="ds-card ds-card--interactive">
  <div class="ds-spread">
    <div class="ds-row-md">
      <span class="ds-avatar ds-avatar--sm">SD</span>
      <div class="ds-stack-2xs">
        <span class="ds-sm-bold">Search & Discovery</span>
        <span class="ds-mini ds-muted">Updated 20 minutes ago · 12 documents</span>
      </div>
    </div>
    <div class="ds-row">
      <span class="ds-badge ds-badge--outline">Draft</span>
      <button class="ds-icon-btn ds-icon-btn--ghost ds-icon-btn--sm" aria-label="Options"><svg><!-- more --></svg></button>
    </div>
  </div>
</div>
```

---

## Tabs + panel

```html
<div class="ds-stack">
  <div class="ds-tabs" role="tablist">
    <button class="ds-tab ds-tab--active">Overview</button>
    <button class="ds-tab">Activity <span class="ds-tab__counter">12</span></button>
    <button class="ds-tab">Settings</button>
  </div>
  <div class="ds-card ds-card--lg"><!-- panel --></div>
</div>
```

---

## Empty state

```html
<div class="ds-card ds-card--lg">
  <div class="ds-empty">
    <svg class="ds-empty__icon"><!-- inbox --></svg>
    <h3 class="ds-empty__title">No deployments yet</h3>
    <p class="ds-empty__desc">Once you connect a repository, your deployments will show up here with build logs and status.</p>
    <div class="ds-row" style="margin-top:8px">
      <button class="ds-btn ds-btn--outline">Read the docs</button>
      <button class="ds-btn ds-btn--primary">Connect repository</button>
    </div>
  </div>
</div>
```

---

## Alert

```html
<div class="ds-alert" style="width:400px">
  <svg class="ds-alert__icon"><!-- info --></svg>
  <div class="ds-alert__body">
    <p class="ds-alert__title">Billing details needed</p>
    <p class="ds-alert__desc">Add a payment method before 12 September to keep your workspace active.</p>
  </div>
</div>
```

Error: add `ds-alert--error`. **Only Neutral and Error exist** — no success or warning.
If you need "success", a `.ds-badge--secondary` or a toast usually reads better than
inventing a green alert.

---

## Toast

```html
<div class="ds-toast">
  <svg style="width:16px;height:16px;margin-top:3px"><!-- check-circle --></svg>
  <div class="ds-toast__body">
    <p class="ds-toast__title">Changes saved</p>
    <p class="ds-toast__desc">Your workspace settings were updated.</p>
  </div>
  <button class="ds-icon-btn ds-icon-btn--ghost ds-icon-btn--mini" aria-label="Dismiss"><svg><!-- x --></svg></button>
</div>
```

---

## Menu / dropdown

```html
<div class="ds-menu">
  <div class="ds-menu-label">Actions</div>
  <button class="ds-menu-item"><svg><!-- pencil --></svg>Rename</button>
  <button class="ds-menu-item"><svg><!-- copy --></svg>Duplicate</button>
  <hr class="ds-separator">
  <button class="ds-menu-item ds-menu-item--destructive"><svg><!-- trash --></svg>Delete</button>
</div>
```

---

## Page shell with sidebar

```html
<div style="display:flex;height:100vh">
  <nav class="ds-sidebar">
    <div class="ds-sidebar-label">Workspace</div>
    <a class="ds-sidebar-item ds-sidebar-item--active"><svg><!-- home --></svg>Overview</a>
    <a class="ds-sidebar-item"><svg><!-- layers --></svg>Projects</a>
    <a class="ds-sidebar-item"><svg><!-- users --></svg>Members</a>
  </nav>
  <main style="flex:1;padding:32px;overflow:auto">
    <div class="ds-stack-xl">
      <div class="ds-page-header">
        <nav class="ds-breadcrumb"><a href="#">Workspace</a><span class="ds-breadcrumb__sep">/</span><span>Members</span></nav>
        <div class="ds-spread">
          <h1 class="ds-h2">Members</h1>
          <button class="ds-btn ds-btn--primary">Invite people</button>
        </div>
      </div>
      <!-- content -->
    </div>
  </main>
</div>
```

---

## Loading state

```html
<div class="ds-card ds-card--lg ds-stack">
  <div class="ds-skeleton" style="height:20px;width:40%"></div>
  <div class="ds-skeleton" style="height:14px;width:80%"></div>
  <div class="ds-skeleton" style="height:14px;width:60%"></div>
</div>
```

Button loading: `<button class="ds-btn ds-btn--primary"><span class="ds-spinner"></span>Saving…</button>`

---

## Composition habits

- **One primary button per surface.** Everything else is outline or ghost.
- **Reach for `.ds-sm` (14/21) as body text**, not 16px. The system is built around 14.
- **`.ds-stack` between sections, `.ds-row` within a line.** Don't hand-write margins.
- **Muted for metadata, foreground for content.** Timestamps, counts, helper text → muted.
- **Cards don't nest.** A card inside a card means the inner one should be a plain block.
- **Give the page 32–48px of padding** so the component isn't jammed against the viewport.

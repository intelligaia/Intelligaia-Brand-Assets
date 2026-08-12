# Refreshing this skill from Figma

The token and spec files are a snapshot. Re-run these when the library changes.

**Requires:** the Figma Desktop Bridge plugin running on the design system file, exposing
`figma_execute` and friends through the remote-devices MCP. Confirm with
`figma_list_open_files` — you want `Intelligaia Agentic Design System`,
file key `FRymkQ8Nd2VEX74l4tWCE9`.

If the bridge is not connected, the official Figma MCP (`get_variable_defs`,
`get_metadata`, `search_design_system`) can read the file too, but it needs explicit node
IDs and returns less geometry. The scripts below assume the bridge.

---

## 1. Component inventory → `components.md`

```js
const sets = figma.root.findAllWithCriteria({ types: ['COMPONENT_SET'] });
return sets.map(s => {
  const props = s.componentPropertyDefinitions || {};
  const simplified = {};
  for (const k of Object.keys(props)) {
    const p = props[k];
    simplified[k.split('#')[0]] = p.type === 'VARIANT' ? p.variantOptions : p.type;
  }
  let n = s; while (n && n.type !== 'PAGE') n = n.parent;
  return { name: s.name, page: n ? n.name : '?', props: simplified };
});
```

Anything on the `✨ Agentic Patterns` page, plus the agentic components under `↳Input`
(Agentic, Aurora Glow, Input Bar, Icon Set, Bottom actions, Input with Suggested Prompts),
is **excluded** from this skill.

## 2. Tokens → `tokens.md` and the `:root` block in `base-ui.css`

Collections: `raw colors`, `border radius`, `spacing`, `semantic colors`, `typography`,
`shadows`. Light = `your_brand` mode, dark = `Agntcy-dark`.

```js
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const byName = {}; cols.forEach(c => byName[c.name] = c);
const hex = c => '#' + [c.r,c.g,c.b].map(v => Math.round(v*255).toString(16).padStart(2,'0')).join('')
  + (c.a !== undefined && c.a < 1 ? Math.round(c.a*255).toString(16).padStart(2,'0') : '');

async function resolve(val, depth = 0) {
  if (depth > 6) return null;
  if (val && val.type === 'VARIABLE_ALIAS') {
    const v = await figma.variables.getVariableByIdAsync(val.id);
    if (!v) return null;
    const col = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId);
    return await resolve(v.valuesByMode[col.modes[0].modeId], depth + 1);
  }
  return val;
}

async function dump(collName, modeName) {
  const col = byName[collName]; if (!col) return {};
  const mode = col.modes.find(m => m.name === modeName) || col.modes[0];
  const out = {};
  for (const id of col.variableIds) {
    const v = await figma.variables.getVariableByIdAsync(id);
    let val = await resolve(v.valuesByMode[mode.modeId]);
    if (val && typeof val === 'object' && 'r' in val) val = hex(val);
    out[v.name] = val;
  }
  return out;
}

return {
  semanticLight: await dump('semantic colors', 'your_brand'),
  semanticDark:  await dump('semantic colors', 'Agntcy-dark'),
  radius:        await dump('border radius', 'your_brand'),
  spacing:       await dump('spacing', 'your_brand'),
  typography:    await dump('typography', 'your_brand'),
};
```

**The alias resolution matters.** Semantic colors point at `raw colors`; reading
`valuesByMode` without following the alias gives you an object reference, not a hex.

Text styles and effect styles are separate from variables:

```js
const texts = await figma.getLocalTextStylesAsync();
const effects = await figma.getLocalEffectStylesAsync();
```

## 3. Geometry → `specs.md` and the component rules in `base-ui.css`

```js
const hex = c => '#' + [c.r,c.g,c.b].map(v => Math.round(v*255).toString(16).padStart(2,'0')).join('')
  + (c.a !== undefined && c.a < 1 ? Math.round(c.a*255).toString(16).padStart(2,'0') : '');
function paint(fills) {
  if (!fills || fills === figma.mixed || !fills.length) return null;
  const f = fills.find(x => x.visible !== false); if (!f) return null;
  return f.type === 'SOLID' ? hex(Object.assign({}, f.color, {a: f.opacity !== undefined ? f.opacity : 1})) : f.type;
}
function spec(n) {
  const o = { name: n.name, type: n.type, w: Math.round(n.width), h: Math.round(n.height) };
  if (n.layoutMode && n.layoutMode !== 'NONE') {
    o.dir = n.layoutMode; o.gap = n.itemSpacing;
    o.pad = [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft].join('/');
  }
  if ('cornerRadius' in n && n.cornerRadius !== figma.mixed) o.r = n.cornerRadius;
  if (n.effects && n.effects.length) o.fx = n.effects.filter(e => e.visible !== false)
    .map(e => `${e.type}:${e.offset ? e.offset.x + ',' + e.offset.y : ''} b${e.radius} s${e.spread || 0} ${e.color ? hex(e.color) : ''}`);
  const f = paint(n.fills); if (f) o.fill = f;
  const s = paint(n.strokes); if (s) { o.stroke = s; o.sw = n.strokeWeight; }
  if (n.type === 'TEXT') { o.text = n.characters.slice(0,40); o.fs = n.fontSize; o.fw = n.fontName && n.fontName.style; }
  return o;
}
function walk(n, d) {
  const o = spec(n);
  if (d > 0 && 'children' in n) o.kids = n.children.filter(c => c.visible !== false).map(c => walk(c, d - 1));
  return o;
}

const sets = figma.root.findAllWithCriteria({ types: ['COMPONENT_SET'] });
const s = sets.find(x => x.name === 'Button Variants');
return s.children
  .filter(v => /State=Default/.test(v.name) && /Roundness=Default/.test(v.name))
  .map(v => ({ variant: v.name, spec: walk(v, 2) }));
```

Swap the set name and the variant filter per component. Depth 2 is usually enough; go to 3
for slot-based components (Card, Dialog, Sheet, Menu).

**Filter hard.** `Button Variants` alone has 4 variants × 4 sizes × 4 states × 2
roundnesses = 128 children. Pull the resting state and derive the rest.

---

## What to update after a refresh

1. `:root` and `[data-theme="dark"]` in `assets/base-ui.css` — token values
2. Per-component rules in `base-ui.css` — only if geometry moved
3. `references/tokens.md` and `references/specs.md` — the tables
4. `references/components.md` — if sets were added, renamed, or gained variants
5. The Fidelity note at the bottom of `specs.md` — what's measured vs composed

Then rebuild one recipe from `recipes.md` and screenshot it to confirm nothing regressed.

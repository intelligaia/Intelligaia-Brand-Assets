#!/usr/bin/env node
/*
 * build_docx.js — Intelligaia Doc Generator
 * Renders a doc_spec JSON into an on-brand .docx (corporate identity: Montserrat, gold #FFD700,
 * navy, cream). Styling is derived from references/brand-system.md. Content is never invented here —
 * this script only lays out what the spec contains.
 *
 * Usage: node scripts/build_docx.js <spec.json> <out.docx>
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, AlignmentType, HeadingLevel, PageBreak,
  Footer, PageNumber, LevelFormat, VerticalAlign, convertInchesToTwip,
  Tab, TabStopType, LeaderType, HorizontalPositionAlign, VerticalPositionAlign,
  TableOfContents, UnderlineType
} = require('docx');

// ---------- Brand tokens (from references/brand-system.md) ----------
const C = {
  gold: 'FFD700', navy: '002B5C', ink: '231F20', cream: 'FBEEDD', peach: 'F9D7AA',
  paleYellow: 'FBEAAD', gray: '666666', mutedGray: 'B7B7B7', hair: 'D9D9D9',
  white: 'FFFFFF', green: '05A550', coral: 'E46962', bg2: 'FAFAF8',
};
const F = { display: 'Montserrat', body: 'Montserrat Medium', mono: 'Consolas' };

// per-doc-type profile — the only things that flex are body line-height and a density hint
const PROFILES = {
  description:  { bodyLine: 372, calloutFill: C.cream },
  proposal:     { bodyLine: 348, calloutFill: C.gold  },
  architecture: { bodyLine: 360, calloutFill: C.cream },
  qna:          { bodyLine: 360, calloutFill: C.cream },
};

const HP = pt => Math.round(pt * 2);            // points -> half-points
const TW = pt => Math.round(pt * 20);           // points -> twips (spacing)

// resolve the effective profile: doc-type profile + client-adaptive treatment (standard | technical)
function resolveProfile(spec) {
  const base = PROFILES[spec.docType];
  if (!base) throw new Error(`Unknown docType: ${spec.docType} (description|proposal|architecture|qna)`);
  const isTech = (spec.meta && spec.meta.treatment) === 'technical';
  return {
    ...base,
    isTech,
    labelFont: isTech ? F.mono : F.display,   // eyebrows, kv keys, spec labels
    metaFont:  isTech ? F.mono : F.body,      // cover meta line, footer
    bodyLine:  base.bodyLine - (isTech ? 14 : 0),   // tighter grid
    sp: isTech ? 0.8 : 1,                      // block-spacing multiplier
  };
}
const SP = (profile, pt) => Math.round(pt * (profile.sp || 1)); // treatment-aware spacing

// ---------- run + paragraph helpers ----------
function run(text, { font = F.body, size = 21, color = C.navy, bold = false, caps = false, track = 0 } = {}) {
  return new TextRun({ text, font, size, color, bold, allCaps: caps,
    ...(track ? { characterSpacing: track } : {}) });
}
function para(children, { before = 0, after = 8, line = 360, align, border, indent, keepNext, heading } = {}) {
  return new Paragraph({
    children: Array.isArray(children) ? children : [children],
    spacing: { before: TW(before), after: TW(after), line, lineRule: 'auto' },
    ...(align ? { alignment: align } : {}),
    ...(keepNext ? { keepNext: true } : {}),
    ...(indent ? { indent } : {}),
    ...(border ? { border } : {}),
    ...(heading ? { heading } : {}),
  });
}
const hairlineBottom = { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.hair, space: 6 } };

// ---------- block renderers ----------
function blockToElements(b, profile) {
  switch (b.type) {
    case 'h1':
      return [para(run(b.text, { font: F.display, bold: true, size: HP(18), color: C.ink }),
        { before: SP(profile, 24), after: SP(profile, 8), line: 274, keepNext: true,
          heading: HeadingLevel.HEADING_1 })];
    case 'h2':
      return [para(run(b.text, { font: F.display, bold: true, size: HP(13), color: C.ink }),
        { before: SP(profile, 16), after: 4, line: 288, keepNext: true,
          heading: HeadingLevel.HEADING_2 })];
    case 'lede':
      return [para(run(b.text, { font: F.body, size: HP(13), color: C.navy }),
        { before: 8, after: 16, line: 336 })];
    case 'body':
      return [para(inlineRuns(b.text), { after: 8, line: profile.bodyLine })];
    case 'bullets':
      return (b.items || []).map(it => para(inlineRuns(it), { after: 4, line: profile.bodyLine,
        indent: { left: convertInchesToTwip(0.3), hanging: convertInchesToTwip(0.2) } }));
    case 'numbered':
      return (b.items || []).map((it, i) => new Paragraph({
        numbering: { reference: 'ig-numbered', level: 0 },
        spacing: { after: TW(4), line: profile.bodyLine, lineRule: 'auto' },
        children: inlineRuns(it),
      }));
    case 'callout':
      return [calloutTable(b.text, profile)];
    case 'kv':
      return [kvTable(b.rows || [], profile, b.muted)];
    case 'table':
      return [dataTable(b.headers || [], b.rows || [])];
    case 'qform':
      return qformElements(b, profile);
    case 'contents':
      return contentsElements(b);
    case 'pagebreak':
      return [new Paragraph({ children: [new PageBreak()] })];
    case 'qa':
      return [
        para(run(b.question, { font: F.display, bold: true, size: HP(13), color: C.ink }),
          { before: 12, after: 4, line: 300, keepNext: true }),
        ...String(b.answer || '').split('\n').filter(Boolean).map(a =>
          para(inlineRuns(a), { after: 8, line: profile.bodyLine })),
        para([], { after: 6, border: hairlineBottom }),
      ];
    case 'quote':
      return [
        para(run(b.text, { font: F.body, size: HP(13), color: C.navy }),
          { before: 12, after: 4, line: 336, indent: { left: convertInchesToTwip(0.3) },
            border: { left: { style: BorderStyle.SINGLE, size: 18, color: C.gold, space: 12 } } }),
        ...(b.attribution ? [para(run('— ' + b.attribution, { size: HP(9), color: C.gray }),
          { after: 12, indent: { left: convertInchesToTwip(0.3) } })] : []),
      ];
    case 'figure':
      return figureElements(b);
    case 'divider':
      return [para([], { before: 6, after: 6, border: hairlineBottom })];
    default:
      throw new Error(`Unknown block type: ${b.type}`);
  }
}

// **bold** emphasis inside body text -> navy bold runs (weight-based emphasis, never colour change)
function inlineRuns(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g).filter(s => s !== '');
  return parts.map(p => {
    const m = p.match(/^\*\*([^*]+)\*\*$/);
    return m ? run(m[1], { font: F.display, bold: true, size: HP(10.5), color: C.navy })
             : run(p, { font: F.body, size: HP(10.5), color: C.navy });
  });
}

function cellMargins(v = 90, h = 120) { return { top: v, bottom: v, left: h, right: h }; }

// questionnaire item: numbered question + a blank response box for the recipient to fill in
function qformElements(b, profile) {
  const numFont = (profile && profile.labelFont) || F.display;
  const q = [
    run((b.number ? b.number + '  ' : ''), { font: numFont, bold: numFont === F.display, size: HP(10.5), color: C.navy }),
    run(b.question || '', { font: F.display, bold: true, size: HP(10.5), color: C.ink }),
  ];
  const boxH = Math.max(560, (b.lines || 2) * 300);
  const box = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [9360], borders: hairAll(),
    rows: [new TableRow({ height: { value: boxH, rule: 'atLeast' }, children: [new TableCell({
      shading: { type: ShadingType.CLEAR, fill: C.bg2, color: 'auto' }, margins: cellMargins(120, 140),
      children: [
        para(run('Response', { font: F.body, size: HP(8.5), color: C.mutedGray, caps: true, track: 20 }), { after: 2, line: 240 }),
        ...(b.hint ? [para(run(b.hint, { font: F.body, size: HP(9), color: C.gray }), { after: 0, line: 280 })] : [para([], { after: 0 })]),
      ] })] })],
  });
  return [
    para(q, { before: SP(profile, 12), after: 4, line: 300, keepNext: true }),
    box,
    para([], { after: SP(profile, 8) }),
  ];
}

// Word-native table of contents generated from Heading 1 paragraphs.
function contentsElements(b) {
  const title = para(run(b.title || 'Contents', { font: F.display, bold: true, size: HP(18), color: C.ink }),
    { before: SP({ sp: 1 }, 16), after: 10, line: 274, keepNext: true });
  const toc = new TableOfContents(b.title || 'Contents', {
    hyperlink: true,
    headingStyleRange: '1-1',
    beginDirty: true,
    cachedEntries: (b._tocEntries || []).map((entry, index) => ({
      title: entry.title,
      level: 1,
      page: entry.page || index + 3,
    })),
  });
  return [title, toc];
}

function deriveContentsItems(blocks) {
  const headings = (blocks || [])
    .filter(b => b.type === 'h1' && b.text)
    .map(b => String(b.text).trim())
    .filter(Boolean);
  return headings.length ? headings : ['Document body'];
}

function contentsEntryTitle(entry) {
  return typeof entry === 'string' ? entry : (entry.title || entry.text || entry.label || '');
}

function contentsEntryPage(entry) {
  if (typeof entry === 'string') return undefined;
  const page = Number(entry.page);
  return Number.isFinite(page) && page > 0 ? page : undefined;
}

function prepareBlocks(blocks) {
  const source = blocks || [];
  const base = source.some(b => b.type === 'contents') ? source : [
    { type: 'contents', title: 'Contents', items: deriveContentsItems(source) },
    { type: 'pagebreak' },
    ...source,
  ];
  const prepared = base.map(b => ({ ...b }));
  const headings = prepared
    .filter(block => block.type === 'h1' && block.text)
    .map(block => ({ title: String(block.text).trim() }));
  for (const block of prepared) {
    if (block.type !== 'contents') continue;
    const items = (block.entries && block.entries.length)
      ? block.entries
      : (block.items && block.items.length)
        ? block.items
        : headings.map(h => h.title);
    block._tocEntries = items.map(item => {
      const title = String(contentsEntryTitle(item)).trim();
      return { title, page: contentsEntryPage(item) };
    });
  }
  return prepared;
}

function calloutTable(text, profile) {
  const onGold = profile.calloutFill === C.gold;
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9360],
    borders: noBorders(),
    rows: [new TableRow({ children: [new TableCell({
      shading: { type: ShadingType.CLEAR, fill: profile.calloutFill, color: 'auto' },
      margins: cellMargins(140, 180),
      children: [para(run(text, { font: F.display, bold: true, size: HP(11.5),
        color: C.navy }), { after: 0, line: 336 })],
    })] })],
  });
}

function kvTable(rows, profile, muted) {
  const keyFont = (profile && profile.labelFont) || F.display;
  const keyBold = keyFont === F.display;
  const valColor = muted ? C.gray : C.navy;
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [2800, 6560],
    borders: hairAll(),
    rows: rows.map(([k, v]) => new TableRow({ children: [
      new TableCell({ width: { size: 2800, type: WidthType.DXA }, margins: cellMargins(),
        shading: { type: ShadingType.CLEAR, fill: 'FAFAF8', color: 'auto' },
        children: [para(run(k, { font: keyFont, bold: keyBold, size: HP(keyBold ? 10 : 9.5), color: C.ink }), { after: 0, line: 288 })] }),
      new TableCell({ width: { size: 6560, type: WidthType.DXA }, margins: cellMargins(),
        children: [para(v ? run(v, { font: F.body, size: HP(10), color: valColor }) : [], { after: 0, line: 336 })] }),
    ] })),
  });
}

function dataTable(headers, rows) {
  const n = headers.length || (rows[0] ? rows[0].length : 1);
  const total = 9360;
  const w = Math.floor(total / n);
  const widths = Array.from({ length: n }, (_, i) => (i === n - 1 ? total - w * (n - 1) : w));
  const headerRow = new TableRow({ tableHeader: true, children: headers.map((h, i) =>
    new TableCell({ width: { size: widths[i], type: WidthType.DXA }, margins: cellMargins(),
      shading: { type: ShadingType.CLEAR, fill: C.navy, color: 'auto' },
      children: [para(run(h, { font: F.display, bold: true, size: HP(9.5), color: C.white }), { after: 0, line: 264 })] })) });
  const bodyRows = rows.map(r => new TableRow({ children: r.map((cell, i) =>
    new TableCell({ width: { size: widths[i], type: WidthType.DXA }, margins: cellMargins(),
      children: [para(inlineRuns(cell), { after: 0, line: 300 })] })) }));
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: widths,
    borders: hairAll(), rows: [headerRow, ...bodyRows] });
}

function figureElements(b) {
  // image bytes were resolved in preprocess() and attached as b._img (buffer) + b._px {w,h}
  if (b._img) {
    return [
      para(new ImageRun({ type: 'png', data: b._img,
        transformation: { width: b._px.w, height: b._px.h } }),
        { before: 16, after: 4, align: AlignmentType.CENTER, line: 240 }),
      ...(b.caption ? [para(run(b.caption, { size: HP(9), color: C.gray }),
        { after: 16, align: AlignmentType.CENTER, line: 260 })] : []),
    ];
  }
  // placeholder frame (no fabricated image)
  return [new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [9360],
    borders: hairAll(),
    rows: [new TableRow({ children: [new TableCell({
      shading: { type: ShadingType.CLEAR, fill: C.cream, color: 'auto' }, margins: cellMargins(260, 180),
      verticalAlign: VerticalAlign.CENTER,
      children: [
        para(run('Figure placeholder', { font: F.display, bold: true, size: HP(11), color: C.ink }),
          { after: 2, align: AlignmentType.CENTER, line: 264 }),
        para(run((b.caption ? b.caption + '  ' : '') + '[TK: image — select from manifest or supply one]',
          { size: HP(9), color: C.gray }), { after: 0, align: AlignmentType.CENTER, line: 260 }),
      ] })] })] })];
}

// ---------- borders ----------
function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: 'auto' };
  return { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
}
function hairAll() {
  const h = { style: BorderStyle.SINGLE, size: 4, color: C.hair };
  return { top: h, bottom: h, left: h, right: h, insideHorizontal: h, insideVertical: h };
}

// ---------- cover (mandatory first page — gold-forward, uses brand assets) ----------
// the gold client/project card
function goldCard(rows, profile) {
  const labelFont = (profile && profile.labelFont) || F.display;
  const inner = new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [9000], borders: noBorders(),
    rows: rows.map(([label, value]) => new TableRow({ children: [new TableCell({
      width: { size: 9000, type: WidthType.DXA }, margins: { top: 70, bottom: 70, left: 180, right: 180 }, borders: noBorders(),
      children: [new Paragraph({ spacing: { after: 0, line: 268 }, children: [
        run(label + '   ', { font: labelFont, bold: labelFont === F.display, size: HP(9), color: C.navy, caps: true, track: 20 }),
        run(value, { font: F.body, size: HP(11), color: C.navy }),
      ] })] })] })) });
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [9360], borders: noBorders(),
    rows: [new TableRow({ children: [new TableCell({
      shading: { type: ShadingType.CLEAR, fill: C.gold, color: 'auto' }, margins: { top: 40, bottom: 40, left: 0, right: 0 }, borders: noBorders(),
      children: [inner] })] })] });
}

function coverElements(meta, dir, profile) {
  const els = [];
  const labelFont = (profile && profile.labelFont) || F.display;
  const metaFont = (profile && profile.metaFont) || F.body;
  const A = f => { const p = path.join(dir, 'assets', 'brand', f); return fs.existsSync(p) ? fs.readFileSync(p) : null; };
  const company = meta.company || 'Intelligaia';
  const client = meta.client || '[TK: client]';
  const project = meta.project || '[TK: project]';
  const purpose = meta.purpose || '[TK: purpose — one line on why this document exists]';

  // brand-asset motifs, anchored behind the cover (stay on page 1)
  const floats = [];
  const arc = A('arc-cream.png');
  if (arc) floats.push(new ImageRun({ type: 'png', data: arc, transformation: { width: 360, height: 234 },
    floating: { behindDocument: true, horizontalPosition: { align: HorizontalPositionAlign.RIGHT }, verticalPosition: { align: VerticalPositionAlign.TOP } } }));
  const burst = A('starburst-yellow.png');
  if (burst) floats.push(new ImageRun({ type: 'png', data: burst, transformation: { width: 120, height: 120 },
    floating: { behindDocument: true, horizontalPosition: { offset: 250000 }, verticalPosition: { offset: 2250000 } } }));
  const logo = A('logo.png');
  els.push(new Paragraph({ spacing: { after: TW(22) }, children: [
    ...floats,
    ...(logo ? [new ImageRun({ type: 'png', data: logo, transformation: { width: 170, height: 59 } })] : []),
  ] }));

  if (meta.draft) els.push(para(run('DRAFT — NOT FOR DISTRIBUTION',
    { font: labelFont, bold: labelFont === F.display, size: HP(9), color: C.coral, caps: true, track: 30 }), { after: 8 }));
  els.push(para(run(meta.eyebrow || 'Document',
    { font: labelFont, bold: labelFont === F.display, size: HP(10), color: C.ink, caps: true, track: 30 }), { before: 6, after: 6, line: 240 }));
  els.push(para(run(meta.title || '[TK: title]',
    { font: F.display, bold: true, size: HP(32), color: C.ink }), { after: 16, line: 252 }));
  els.push(goldCard([['Client', client], ['Project', project]], profile));
  els.push(para(run('Purpose', { font: labelFont, bold: labelFont === F.display, size: HP(9), color: C.mutedGray, caps: true, track: 24 }),
    { before: 20, after: 2, line: 240 }));
  els.push(para(run(purpose, { font: F.body, size: HP(11.5), color: C.navy }), { after: 0, line: 320 }));
  const metaBits = ['Prepared by ' + company, meta.date, meta.docId, meta.confidential ? 'Confidential' : null]
    .filter(Boolean).join('     ·     ');
  els.push(para(run(metaBits, { font: metaFont, size: HP(9), color: C.gray }), { before: 200, after: 0, line: 260 }));
  els.push(new Paragraph({ children: [new PageBreak()] }));
  return els;
}

// ---------- assets: fetch remote figure images ----------
function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
        return resolve(fetchBuffer(res.headers.location));
      if (res.statusCode !== 200) return reject(new Error('HTTP ' + res.statusCode));
      const chunks = []; res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}
async function preprocess(spec, dir) {
  const notes = { assets: [], gaps: [] };
  let manifest = null;
  const mp = path.join(dir, 'assets', 'manifest.json');
  if (fs.existsSync(mp)) manifest = JSON.parse(fs.readFileSync(mp, 'utf8'));
  for (const b of spec.blocks || []) {
    if (b.type === 'figure') {
      let url = b.rawUrl, id = b.assetId, p = b.path, wpx = null, hpx = null;
      if (id && manifest) {
        const a = manifest.assets.find(x => x.id === id) || manifest.assets.find(x => x.path === p);
        if (a) { url = a.raw_url; p = a.path; wpx = a.width; hpx = a.height; }
      }
      if (b.localPath && fs.existsSync(b.localPath)) {
        b._img = fs.readFileSync(b.localPath); notes.assets.push({ id: id || 'local', path: b.localPath });
      } else if (url && (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg'))) {
        try { b._img = await fetchBuffer(url); notes.assets.push({ id: id || 'url', path: p || url }); }
        catch (e) { notes.gaps.push(`figure fetch failed (${e.message}) — placeholder used`); }
      } else {
        notes.gaps.push('figure has no embeddable PNG — placeholder used');
      }
      if (b._img) {
        const maxW = 624; // 6.5in @96dpi
        const ar = (wpx && hpx) ? hpx / wpx : 0.6;
        b._px = { w: maxW, h: Math.round(maxW * ar) };
      }
    }
    if (/\[TK:/.test(JSON.stringify(b))) notes.gaps.push('contains [TK: …] gap');
  }
  return notes;
}

// ---------- numbering (bullets/numbered) ----------
function numberingConfig() {
  return {
    config: [{
      reference: 'ig-numbered',
      levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.START,
        style: { run: { font: F.display, bold: true, color: C.navy },
          paragraph: { indent: { left: convertInchesToTwip(0.35), hanging: convertInchesToTwip(0.25) } } } }],
    }],
  };
}

function stylesConfig() {
  return {
    default: {
      hyperlink: { run: { color: C.ink, underline: { type: UnderlineType.NONE } } },
    },
    paragraphStyles: [{
      id: 'TOC1',
      name: 'TOC 1',
      basedOn: 'Normal',
      next: 'Normal',
      quickFormat: true,
      paragraph: {
        spacing: { after: TW(2), line: 320, lineRule: 'auto' },
      },
      run: { font: F.body, size: HP(14), color: C.ink },
    }],
    characterStyles: [{
      id: 'IndexLink',
      name: 'Index Link',
      basedOn: 'DefaultParagraphFont',
      run: { color: C.ink, underline: { type: UnderlineType.NONE } },
    }],
  };
}

// ---------- assemble ----------
async function main() {
  const [, , specPath, outPath] = process.argv;
  if (!specPath || !outPath) { console.error('Usage: build_docx.js <spec.json> <out.docx>'); process.exit(1); }
  const dir = path.resolve(__dirname, '..');
  const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
  const profile = resolveProfile(spec);
  const meta = spec.meta || {};
  const notes = await preprocess(spec, dir);

  const effectiveBlocks = prepareBlocks(spec.blocks);
  const children = [...coverElements(meta, dir, profile)];
  for (const b of effectiveBlocks) children.push(...blockToElements(b, profile));

  const footer = new Footer({ children: [new Paragraph({
    border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.hair, space: 6 } },
    spacing: { before: 60 },
    children: [
      run(`Intelligaia · ${meta.title || ''} · `, { font: profile.metaFont, size: HP(8.5), color: C.gray }),
      new TextRun({ children: [PageNumber.CURRENT], font: profile.metaFont, size: HP(8.5), color: C.gray }),
    ] })] });

  const doc = new Document({
    creator: 'Intelligaia Doc Generator', title: meta.title || 'Intelligaia Document',
    styles: stylesConfig(),
    features: { updateFields: true },
    numbering: numberingConfig(),
    sections: [{
      properties: { page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      } },
      footers: { default: footer },
      children,
    }],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buf);

  // run summary
  const summary = {
    docType: spec.docType, treatment: profile.isTech ? 'technical' : 'standard', title: meta.title,
    blocks: effectiveBlocks.length,
    assetsUsed: notes.assets, gaps: notes.gaps,
    fontMode: 'named (Montserrat → Arial fallback); not embedded',
  };
  console.log('BUILD_SUMMARY ' + JSON.stringify(summary, null, 2));
}
main().catch(e => { console.error('BUILD_ERROR', e.message); process.exit(1); });

/**
 * IntelliGIA Project Readout & Status Update Templates
 *
 * Adapts 7 industry-standard PM templates into the IntelliGIA brand design system.
 * Built with pptxgenjs following the Intelligaia Deck Design System SKILL.md.
 *
 * Slides:
 *  1. Cover (B1 blueprint)
 *  2. Agenda (B2 blueprint)
 *  3. Next Steps — Action Items (adapted from ref slide 2)
 *  4. Status Update — Card Format (adapted from ref slide 4)
 *  5. Status Update — Table Format (adapted from ref slide 5)
 *  6. Task Tracker (adapted from ref slide 6)
 *  7. Detailed Task Register (adapted from ref slide 7)
 *  8. OKRs Status (adapted from ref slide 8)
 *  9. Key Milestones — Horizontal Timeline
 *  10. Contact closing (B7 blueprint)
 */

const pptxgen = require("pptxgenjs");
const path = require("path");

const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.33 × 7.5"

// ── Brand tokens ──
const C = {
  gold:     "FFD700",
  navy:     "002B5C",
  ink:      "231F20",
  cream:    "FBEEDD",
  peach:    "F9D7AA",
  paleYel:  "FBEAAD",
  bodyGray: "666666",
  muteGray: "B7B7B7",
  hairline: "D9D9D9",
  softGray: "EFEFEF",
  green:    "05A550",
  greenLt:  "2AAB66",
  coral:    "E46962",
  white:    "FFFFFF",
  // status colors
  onTrack:  "05A550",
  atRisk:   "FFD700",
  critical: "E46962",
  done:     "2AAB66",
  overdue:  "E46962",
  notStart: "B7B7B7",
};

const FONT = "Montserrat";
const FONT_MED = "Montserrat Medium";

// Asset paths
const A = path.join(__dirname, "../Intelligaia Skills/Intelligaia Slide Deck Skill/intelligaia-deck-design/assets/");

// ── Helpers ──

function addFooter(slide) {
  // Logo bottom-left, lockup bottom-right
  // logo.png: 300×104 (ratio 2.88:1) — at w:1.3 → h:0.45 (correct)
  slide.addImage({ path: A + "logo.png", x: 0.49, y: 6.85, w: 1.3, h: 0.45 });
  // deep-tech-lockup.png: 292×98 (ratio 2.98:1) — at w:1.5 → h:0.503 (was 0.32 — stretched!)
  // Right edge at x:12.85, so x = 12.85 - 1.5 = 11.35
  slide.addImage({ path: A + "deep-tech-lockup.png", x: 11.35, y: 6.85, w: 1.5, h: 0.50 });
}

function addTitle(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x || 0.49,
    y: opts.y || 0.45,
    w: opts.w || 12.36,
    h: 0.7,
    fontFace: FONT,
    fontSize: opts.size || 36,
    bold: true,
    color: opts.color || C.ink,
    align: "left",
    margin: 0,
  });
}

function addEyebrow(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x || 0.49,
    y: opts.y || 0.25,
    w: opts.w || 12.36,
    h: 0.3,
    fontFace: FONT,
    fontSize: 12,
    bold: true,
    color: opts.color || C.bodyGray,
    charSpacing: 2,
    align: "left",
    margin: 0,
  });
}

// Shape type constants (pptxgenjs uses 'ellipse' not 'oval')
const SHAPES = {
  ellipse: "ellipse",
  roundRect: "roundRect",
  rect: "rect",
};

// Status badge — small colored circle/pill
function statusDot(slide, status, x, y) {
  const color = C[status] || C.muteGray;
  slide.addShape(SHAPES.ellipse, {
    x, y, w: 0.22, h: 0.22,
    fill: { color },
    line: { type: "none" },
  });
}

// Table cell style presets
const tableHeaderStyle = {
  fill: { color: C.ink },
  color: C.white,
  fontFace: FONT,
  fontSize: 11,
  bold: true,
  align: "left",
  valign: "middle",
  margin: [3, 5, 3, 5],
};

const tableCellStyle = {
  fontFace: FONT_MED,
  fontSize: 10,
  color: C.navy,
  align: "left",
  valign: "middle",
  margin: [3, 5, 3, 5],
  fill: { color: C.white },
};

const tableAltRowStyle = {
  ...tableCellStyle,
  fill: { color: C.softGray },
};

function buildTable(slide, rows, colW, x, y, h) {
  // Build header row + data rows
  const tableRows = rows.map((row, ri) => {
    return row.map((cell, ci) => {
      if (ri === 0) {
        return { text: String(cell), options: { ...tableHeaderStyle, w: colW[ci] } };
      }
      // Handle status badge cells (objects with type: 'status')
      if (typeof cell === "object" && cell.type === "status") {
        return {
          text: cell.label || "",
          options: {
            fontFace: FONT_MED,
            fontSize: 9,
            color: C.white,
            bold: true,
            align: "center",
            valign: "middle",
            fill: { color: C[cell.status] || C.muteGray },
            margin: [2, 3, 2, 3],
            w: colW[ci],
          },
        };
      }
      // Handle priority cells
      if (typeof cell === "object" && cell.type === "priority") {
        return {
          text: cell.label,
          options: {
            fontFace: FONT_MED,
            fontSize: 9,
            color: C.white,
            bold: true,
            align: "center",
            valign: "middle",
            fill: { color: cell.level === "High" ? C.coral : cell.level === "Medium" ? C.gold : C.greenLt },
            margin: [2, 3, 2, 3],
            w: colW[ci],
          },
        };
      }
      return {
        text: String(cell),
        options: { ...(ri % 2 === 0 ? tableCellStyle : tableAltRowStyle), w: colW[ci] },
      };
    });
  });

  slide.addTable(tableRows, {
    x, y, w: colW.reduce((a, b) => a + b, 0), h,
    colW,
    border: { pt: 0.5, color: C.hairline },
    rowH: rows.map((_, i) => i === 0 ? 0.45 : 0.42),
    valign: "middle",
  });
}

// ────────────────────────────────────────────
// SLIDE 1: Cover (Blueprint B1)
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  // Arc rings — bleed right
  s.addImage({ path: A + "cover-arc-rings.png", x: 4.6, y: 0.35, w: 10.5, h: 6.83 });

  // Logo top-left
  s.addImage({ path: A + "logo.png", x: 0.49, y: 0.45, w: 2.2, h: 0.75 });

  // Title — Montserrat Bold 27pt, ink
  s.addText([
    { text: "Project", options: { breakLine: true } },
    { text: "Readout &", options: { breakLine: true } },
    { text: "Status", options: { breakLine: true } },
    { text: "Templates", options: { breakLine: true } },
    { text: "for Client Readouts", options: {} },
  ], {
    x: 0.49, y: 2.25, w: 3.6, h: 3.0,
    fontFace: FONT, fontSize: 27, bold: true,
    color: C.ink, lineSpacingMultiple: 1.08, margin: 0,
  });

  // Description
  s.addText("On-brand slide templates for project readouts, status updates, and OKR reviews — built to the IntelliGIA design system.",
    {
      x: 0.49, y: 5.2, w: 3.8, h: 1.0,
      fontFace: FONT, fontSize: 12, color: C.navy,
      lineSpacingMultiple: 1.25, margin: 0,
    });

  // Meta block
  s.addText([
    { text: "PREPARED BY  ", options: { bold: true } },
    { text: "IntelliGIA Design Team", options: { breakLine: true } },
    { text: "DATE  ", options: { bold: true } },
    { text: "August 2026", options: { breakLine: true } },
    { text: "VERSION  ", options: { bold: true } },
    { text: "v2 — updated cover & typography", options: {} },
  ], {
    x: 0.49, y: 6.15, w: 3.8, h: 1.1,
    fontFace: FONT, fontSize: 8.5, color: C.ink,
    lineSpacingMultiple: 1.3, margin: 0,
  });
}

// ────────────────────────────────────────────
// SLIDE 2: Agenda (Blueprint B2)
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  // Arc right
  s.addImage({ path: A + "arc-cream.png", x: 8.2, y: 1.2, w: 7.0, h: 4.55 });
  // Starburst with "AGENDA"
  // starburst-yellow.png: 1720×1720 (square) — place at 2.3×2.3
  s.addImage({ path: A + "starburst-yellow.png", x: 7.55, y: 2.45, w: 2.3, h: 2.3 });
  // Center text on starburst center: x=7.55+1.15=8.70, y=2.45+1.15=3.60
  // Text box centered on that point: x=7.55 (same as starburst, w=2.3), y=3.30 (h=0.6 → center at 3.60)
  s.addText("AGENDA", {
    x: 7.55, y: 3.30, w: 2.3, h: 0.6,
    fontFace: FONT, fontSize: 21, bold: true,
    color: C.navy, align: "center", valign: "middle", charSpacing: 2, margin: 0,
  });

  const items = [
    { n: 1, title: "Next Steps — Action Items", desc: "Who owns what, by when" },
    { n: 2, title: "Status Update — Initiative Cards", desc: "Traffic-light view across workstreams" },
    { n: 3, title: "Status Update — Initiative Table", desc: "Structured table with due dates" },
    { n: 4, title: "Task Tracker", desc: "Priority, owner, completion %" },
    { n: 5, title: "Detailed Task Register", desc: "Full task log with notes & blockers" },
    { n: 6, title: "OKRs & Key Milestones", desc: "Objectives, key results, and timeline" },
  ];

  items.forEach((item, i) => {
    const y = 1.15 + i * 1.05;
    // Number circle
    s.addShape(SHAPES.ellipse, {
      x: 0.49, y, w: 0.45, h: 0.45,
      fill: { color: C.gold }, line: { type: "none" },
    });
    s.addText(String(item.n), {
      x: 0.49, y, w: 0.45, h: 0.45,
      fontFace: FONT, fontSize: 16, bold: true,
      color: C.navy, align: "center", valign: "middle", margin: 0,
    });
    // Item title
    s.addText(item.title, {
      x: 1.19, y, w: 6.11, h: 0.36,
      fontFace: FONT, fontSize: 19, bold: true,
      color: C.ink, align: "left", margin: 0,
    });
    // Descriptor
    s.addText(item.desc, {
      x: 1.19, y: y + 0.36, w: 6.11, h: 0.3,
      fontFace: FONT_MED, fontSize: 12, color: C.bodyGray,
      align: "left", margin: 0,
    });
  });

  addFooter(s);
}

// ────────────────────────────────────────────
// SLIDE 3: Next Steps — Action Items
//   (adapted from ref slide 2)
//   On-brand: gold circle number, navy table,
//   cream arc accent
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  addEyebrow(s, "PROJECT READOUT");
  addTitle(s, "Next Steps & Action Items", { size: 32, y: 0.55 });

  // Cream arc accent — right edge, behind everything
  s.addImage({ path: A + "arc-cream.png", x: 9.5, y: 3.5, w: 5.5, h: 4.0 });

  // Table: Action item / Description / Assigned to / Follow-up date
  // Full grid width: 12.36" (x:0.49 → x:12.85)
  // Proportions: Action Item 26% / Description 35% / Assigned To 20% / Date 19%
  const colW = [3.21, 4.33, 2.47, 2.35];
  const rows = [
    ["Action Item", "Description", "Assigned To", "Follow-up Date"],
    ["Cost savings estimates", "Verify preliminary cost savings estimates with HR and selected teams", "[Insert name]", "[Insert date]"],
    ["Vendor evaluation", "Complete vendor scoring matrix and shortlist top 3", "[Insert name]", "[Insert date]"],
    ["Stakeholder alignment", "Schedule alignment review with product, engineering, and design leads", "[Insert name]", "[Insert date]"],
    ["Prototype feedback", "Collect and synthesize user testing feedback from sprint 4", "[Insert name]", "[Insert date]"],
    ["Risk register update", "Refresh risk register with new items from latest review", "[Insert name]", "[Insert date]"],
  ];

  buildTable(s, rows, colW, 0.49, 1.35, 4.5);

  // Source line
  s.addText("Source: [Insert source]", {
    x: 0.49, y: 6.5, w: 5, h: 0.25,
    fontFace: FONT_MED, fontSize: 9, color: C.muteGray, margin: 0,
  });

  addFooter(s);
}

// ────────────────────────────────────────────
// SLIDE 4: Status Update — Card Format
//   (adapted from ref slide 4)
//   On-brand: initiative cards with gold/navy
//   status pills, cream arc
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  addEyebrow(s, "FRIDAY STATUS UPDATE");
  addTitle(s, "Status Update — [Insert Date]", { size: 32, y: 0.55 });

  // Cream arc behind cards
  s.addImage({ path: A + "arc-cream.png", x: 8.5, y: 1.0, w: 6.0, h: 4.0 });

  // 6 initiative cards in 2 columns × 3 rows
  const cards = [
    { title: "Discovery & Research", status: "onTrack", update: "User interviews complete; synthesizing personas" },
    { title: "UX Design", status: "onTrack", update: "Wireframes approved; hi-fi in progress" },
    { title: "Frontend Engineering", status: "atRisk", update: "API integration blocked by auth service delay" },
    { title: "Backend Engineering", status: "onTrack", update: "Core endpoints shipped; 2 remaining" },
    { title: "QA & Testing", status: "critical", update: "Test coverage at 45% — needs ramp before release" },
    { title: "DevOps & Deployment", status: "onTrack", update: "Staging environment provisioned and healthy" },
  ];

  // 6 initiative cards in 2 columns × 3 rows — span full grid (12.36")
  // Each card: 5.93" wide, 0.5" gap between columns
  const cardW = 5.93;
  const cardH = 1.35;
  const gapX = 0.5;
  const gapY = 0.15;
  const startX = 0.49;
  const startY = 1.4;

  cards.forEach((card, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY + 0.15);

    // Card background — rounded rectangle, white with hairline border
    s.addShape(SHAPES.roundRect, {
      x, y, w: cardW, h: cardH,
      fill: { color: C.white },
      line: { color: C.hairline, pt: 1 },
      rectRadius: 0.08,
    });

    // Status pill — left side
    const statusColors = { onTrack: C.green, atRisk: C.gold, critical: C.coral };
    const statusLabels = { onTrack: "ON TRACK", atRisk: "AT RISK", critical: "CRITICAL" };
    const sc = statusColors[card.status];

    s.addShape(SHAPES.roundRect, {
      x: x + 0.15, y: y + 0.15, w: 1.0, h: 0.3,
      fill: { color: sc }, line: { type: "none" },
      rectRadius: 0.15,
    });
    s.addText(statusLabels[card.status], {
      x: x + 0.15, y: y + 0.15, w: 1.0, h: 0.3,
      fontFace: FONT, fontSize: 8, bold: true,
      color: card.status === "atRisk" ? C.ink : C.white,
      align: "center", valign: "middle", margin: 0,
    });

    // Initiative title
    s.addText(card.title, {
      x: x + 1.3, y: y + 0.12, w: cardW - 1.5, h: 0.35,
      fontFace: FONT, fontSize: 13, bold: true,
      color: C.navy, align: "left", valign: "middle", margin: 0,
    });

    // Update text
    s.addText(card.update, {
      x: x + 0.15, y: y + 0.55, w: cardW - 0.3, h: 0.7,
      fontFace: FONT_MED, fontSize: 11, color: C.bodyGray,
      align: "left", valign: "top", margin: 0,
    });
  });

  // Legend
  s.addText([
    { text: "Legend:  ", options: { bold: true, color: C.ink } },
    { text: "On track", options: { color: C.green, bold: true } },
    { text: "    At risk", options: { color: C.gold, bold: true } },
    { text: "    Critical", options: { color: C.coral, bold: true } },
  ], {
    x: 0.49, y: 6.45, w: 12.36, h: 0.25,
    fontFace: FONT, fontSize: 10, align: "left", margin: 0,
  });

  addFooter(s);
}

// ────────────────────────────────────────────
// SLIDE 5: Status Update — Table Format
//   (adapted from ref slide 5)
//   On-brand: navy header, alternating rows,
//   colored status pills in cells
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  addEyebrow(s, "FRIDAY STATUS UPDATE");
  addTitle(s, "Status Update — [Insert Date]", { size: 32, y: 0.55 });

  // Table: Initiative / Update / Due date / Status
  // Full grid width: 12.36" (x:0.49 → x:12.85)
  // Proportions: Initiative 20% / Update 43% / Due Date 18% / Status 19%
  const colW = [2.47, 5.31, 2.22, 2.36];
  const rows = [
    ["Initiative", "Update", "Due Date", "Status"],
    ["Discovery & Research", "User interviews complete; personas in synthesis", "[Date]", { type: "status", status: "onTrack", label: "ON TRACK" }],
    ["UX Design", "Wireframes approved; hi-fi flows in progress", "[Date]", { type: "status", status: "onTrack", label: "ON TRACK" }],
    ["Frontend Engineering", "API integration blocked — auth service delay", "[Date]", { type: "status", status: "atRisk", label: "AT RISK" }],
    ["Backend Engineering", "Core endpoints shipped; 2 remaining", "[Date]", { type: "status", status: "onTrack", label: "ON TRACK" }],
    ["QA & Testing", "Coverage at 45% — ramp needed before release", "[Date]", { type: "status", status: "critical", label: "CRITICAL" }],
    ["DevOps & Deploy", "Staging provisioned and healthy", "[Date]", { type: "status", status: "onTrack", label: "ON TRACK" }],
    ["Stakeholder Review", "Scheduled for end of sprint 5", "[Date]", { type: "status", status: "onTrack", label: "ON TRACK" }],
  ];

  buildTable(s, rows, colW, 0.49, 1.35, 4.7);

  // Legend
  s.addText([
    { text: "Legend:  ", options: { bold: true, color: C.ink } },
    { text: "On track", options: { color: C.green, bold: true } },
    { text: "    At risk", options: { color: C.gold, bold: true } },
    { text: "    Critical", options: { color: C.coral, bold: true } },
  ], {
    x: 0.49, y: 6.45, w: 12.36, h: 0.25,
    fontFace: FONT, fontSize: 10, align: "left", margin: 0,
  });

  addFooter(s);
}

// ────────────────────────────────────────────
// SLIDE 6: Task Tracker
//   (adapted from ref slide 6)
//   On-brand: priority pills, completion %
//   visual bars, navy header
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  addEyebrow(s, "TASK TRACKER");
  addTitle(s, "Task Tracker — [Insert Date]", { size: 32, y: 0.55 });

  // Table: Task / Priority / Assigned to / Due date / Complete / Status
  // Full grid width: 12.36" (x:0.49 → x:12.85)
  // Proportions: Task 28% / Priority 10% / Assigned 16% / Due 12% / Complete 18% / Status 16%
  const colW = [3.46, 1.24, 1.98, 1.48, 2.22, 1.98];
  const rows = [
    ["Task", "Priority", "Assigned To", "Due Date", "Complete", "Status"],
    ["Design system audit", { type: "priority", level: "High", label: "HIGH" }, "[Name]", "[Date]", "80%", { type: "status", status: "onTrack", label: "ON TRACK" }],
    ["API contract definition", { type: "priority", level: "High", label: "HIGH" }, "[Name]", "[Date]", "100%", { type: "status", status: "done", label: "DONE" }],
    ["Component library setup", { type: "priority", level: "Medium", label: "MED" }, "[Name]", "[Date]", "80%", { type: "status", status: "onTrack", label: "ON TRACK" }],
    ["Accessibility audit", { type: "priority", level: "Medium", label: "MED" }, "[Name]", "[Date]", "0%", { type: "status", status: "notStart", label: "NOT STARTED" }],
    ["Integration testing", { type: "priority", level: "Medium", label: "MED" }, "[Name]", "[Date]", "100%", { type: "status", status: "done", label: "DONE" }],
    ["Documentation", { type: "priority", level: "Low", label: "LOW" }, "[Name]", "[Date]", "100%", { type: "status", status: "done", label: "DONE" }],
    ["Performance optimization", { type: "priority", level: "Low", label: "LOW" }, "[Name]", "[Date]", "60%", { type: "status", status: "onTrack", label: "ON TRACK" }],
  ];

  buildTable(s, rows, colW, 0.49, 1.35, 4.7);

  // Legend
  s.addText([
    { text: "Legend:  ", options: { bold: true, color: C.ink } },
    { text: "On track", options: { color: C.green, bold: true } },
    { text: "    Done", options: { color: C.greenLt, bold: true } },
    { text: "    Overdue", options: { color: C.coral, bold: true } },
    { text: "    Not started", options: { color: C.muteGray, bold: true } },
  ], {
    x: 0.49, y: 6.45, w: 12.36, h: 0.25,
    fontFace: FONT, fontSize: 10, align: "left", margin: 0,
  });

  addFooter(s);
}

// ────────────────────────────────────────────
// SLIDE 7: Detailed Task Register
//   (adapted from ref slide 7)
//   On-brand: 9-column table with priority pills,
//   compact, navy header
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  addEyebrow(s, "TASK REGISTER");
  addTitle(s, "Detailed Task Register", { size: 32, y: 0.55 });

  // 9-column table: ID / Task / Description / Responsible / Priority / Start date / Due date / Completion / Notes
  // Full grid width: 12.36" (x:0.49 → x:12.85)
  // Proportions: ID 4% / Task 13% / Desc 22% / Resp 10% / Pri 8% / Start 8% / Due 8% / Done 9% / Notes 18%
  const colW = [0.49, 1.61, 2.72, 1.24, 0.99, 0.99, 0.99, 1.11, 2.22];
  const rows = [
    ["ID", "Task", "Description", "Responsible", "Priority", "Start", "Due", "% Done", "Notes"],
    ["1", "Design system audit", "Audit current component library against brand guidelines", "[Name]", { type: "priority", level: "High", label: "HIGH" }, "[Date]", "[Date]", "80%", "Blocker: missing icon set"],
    ["2", "API contract", "Define and document REST API contracts", "[Name]", { type: "priority", level: "High", label: "HIGH" }, "[Date]", "[Date]", "100%", "Complete"],
    ["3", "Component library", "Set up shared component library in Figma", "[Name]", { type: "priority", level: "Medium", label: "MED" }, "[Date]", "[Date]", "80%", "In progress"],
    ["4", "Accessibility audit", "WCAG 2.1 AA compliance audit", "[Name]", { type: "priority", level: "Medium", label: "MED" }, "[Date]", "[Date]", "0%", "Not started — dep on #3"],
    ["5", "Integration testing", "End-to-end integration test suite", "[Name]", { type: "priority", level: "Medium", label: "MED" }, "[Date]", "[Date]", "100%", "Complete"],
    ["6", "Documentation", "Technical documentation and API docs", "[Name]", { type: "priority", level: "Low", label: "LOW" }, "[Date]", "[Date]", "100%", "Complete"],
    ["7", "Performance optimization", "Bundle size and load time optimization", "[Name]", { type: "priority", level: "Low", label: "LOW" }, "[Date]", "[Date]", "60%", "Ongoing"],
  ];

  buildTable(s, rows, colW, 0.49, 1.35, 4.8);

  s.addText("Source: [Insert source]", {
    x: 0.49, y: 6.5, w: 12.36, h: 0.25,
    fontFace: FONT_MED, fontSize: 9, color: C.muteGray, margin: 0,
  });

  addFooter(s);
}

// ────────────────────────────────────────────
// SLIDE 8: OKRs Status
//   (adapted from ref slide 8)
//   On-brand: navy header, status pills,
//   result scores with gold accent
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  addEyebrow(s, "OBJECTIVES & KEY RESULTS");
  addTitle(s, "OKRs Status — [Insert Date]", { size: 32, y: 0.55 });

  // Table: Objective / Key result / Owner / Status / Notes / Result
  // Full grid width: 12.36" (x:0.49 → x:12.85)
  // Proportions: Objective 19% / Key Result 23% / Owner 8% / Status 10% / Notes 28% / Result 12%
  const colW = [2.35, 2.84, 0.99, 1.24, 3.46, 1.48];
  const rows = [
    ["Objective", "Key Result", "Owner", "Status", "Notes", "Result"],
    ["Ship MVP", "Complete core feature set", "[Name]", { type: "status", status: "done", label: "DONE" }, "All P0 features shipped", "1.0"],
    ["", "Zero critical bugs at launch", "[Name]", { type: "status", status: "onTrack", label: "ON TRACK" }, "2 bugs remaining", "0.7"],
    ["", "User testing with 10 participants", "[Name]", { type: "status", status: "done", label: "DONE" }, "12 sessions completed", "1.0"],
    ["Scale platform", "Support 10K concurrent users", "[Name]", { type: "status", status: "onTrack", label: "ON TRACK" }, "Load testing at 8K", "0.3"],
    ["", "Reduce p95 latency to <200ms", "[Name]", { type: "status", status: "atRisk", label: "AT RISK" }, "Currently 280ms", "0.4"],
    ["", "Set up monitoring & alerting", "[Name]", { type: "status", status: "done", label: "DONE" }, "Datadog integrated", "1.0"],
    ["Drive adoption", "Onboard 5 pilot teams", "[Name]", { type: "status", status: "onTrack", label: "ON TRACK" }, "3 teams onboarded", "0.6"],
    ["", "Collect 50 user feedback forms", "[Name]", { type: "status", status: "onTrack", label: "ON TRACK" }, "32 responses so far", "0.6"],
    ["", "NPS score ≥ 40", "[Name]", { type: "status", status: "atRisk", label: "AT RISK" }, "Current NPS: 28", "0.3"],
  ];

  buildTable(s, rows, colW, 0.49, 1.35, 4.7);

  // Legend
  s.addText([
    { text: "Legend:  ", options: { bold: true, color: C.ink } },
    { text: "Completed", options: { color: C.greenLt, bold: true } },
    { text: "    In progress", options: { color: C.green, bold: true } },
    { text: "    At risk", options: { color: C.gold, bold: true } },
    { text: "    Blocked", options: { color: C.coral, bold: true } },
    { text: "    Moved", options: { color: C.muteGray, bold: true } },
  ], {
    x: 0.49, y: 6.45, w: 12.36, h: 0.25,
    fontFace: FONT, fontSize: 10, align: "left", margin: 0,
  });

  addFooter(s);
}

// ────────────────────────────────────────────
// SLIDE 9: Key Milestones — Horizontal Timeline
//   12-column grid: left margin x:0.49, right margin x:12.85
//   Content area: 12.36" split into 6 equal slots (one per milestone)
//   Each slot = 2.06" wide; label width = slot - gutter = 1.92"
//   Timeline bar runs from slot-1 center to slot-6 center (inside margins)
//   All text boxes constrained within their slot — no overflow
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.white };

  addEyebrow(s, "PROJECT TIMELINE");
  addTitle(s, "Key Milestones", { size: 32, y: 0.55 });

  // Timeline data — 6 milestones across the project
  const milestones = [
    { date: "Jan 2026",  title: "Project Kickoff",       status: "done",     desc: "Stakeholder alignment, scope definition, and team onboarding" },
    { date: "Feb 2026",  title: "Discovery Complete",    status: "done",     desc: "User research, competitive analysis, and requirements signed off" },
    { date: "Apr 2026",  title: "Design System Shipped", status: "done",     desc: "Component library, tokens, and brand guidelines delivered" },
    { date: "Jun 2026",  title: "MVP Launch",            status: "onTrack", desc: "Core features in production, pilot users onboarded" },
    { date: "Sep 2026",  title: "Scale to 10K Users",    status: "atRisk",  desc: "Load testing, performance optimization, and monitoring rollout" },
    { date: "Dec 2026",  title: "Full Release",          status: "notStart", desc: "GA launch, documentation, and handoff to ops team" },
  ];

  // ── 12-column/7-grid geometry ──
  // Grid: left margin 0.49, right margin 12.85, content 12.36"
  // Column: 0.903, Gutter: 0.139, Col+gutter: 1.042
  const gridLeft  = 0.49;
  const gridRight = 12.85;
  const gridW     = gridRight - gridLeft;  // 12.36"
  const gutter    = 0.139;

  // 6 milestones → 6 equal slots within the content area
  const n        = milestones.length;
  const slotW    = gridW / n;               // 2.06" per slot
  const labelW   = slotW - gutter;           // 1.921" — text fits within slot with gutter clearance
  const tlY      = 3.15;                     // vertical center of timeline (rule of thirds)

  // Timeline bar: from center of first slot to center of last slot
  // (so the bar doesn't extend past the outer milestone circles)
  const firstCX  = gridLeft + slotW / 2;                                    // 1.52
  const lastCX   = gridLeft + (n - 1) * slotW + slotW / 2;                  // 11.82
  const barX     = firstCX;
  const barW     = lastCX - firstCX;

  // Status colors and labels
  const statusColors = { done: C.greenLt, onTrack: C.green, atRisk: C.gold, critical: C.coral, notStart: C.muteGray };
  const statusLabels = { done: "DONE", onTrack: "ON TRACK", atRisk: "AT RISK", critical: "CRITICAL", notStart: "UPCOMING" };

  // ── Draw the timeline bar ──
  // Gold base line — from first milestone center to last milestone center
  s.addShape(p.ShapeType.rect, {
    x: barX, y: tlY - 0.05, w: barW, h: 0.10,
    fill: { color: C.gold }, line: { type: "none" },
  });

  // ── Draw milestones ──
  milestones.forEach((m, i) => {
    // Slot start and center
    const slotStart = gridLeft + i * slotW;
    const cx        = slotStart + slotW / 2;   // center of this slot
    const labelX    = slotStart + gutter / 2;  // left-aligned within slot (gutter clearance)
    const sc        = statusColors[m.status];

    // ── Milestone circle (on the timeline) ──
    const dotR = 0.26;  // circle radius

    // White halo behind the circle (separation from bar)
    s.addShape(SHAPES.ellipse, {
      x: cx - dotR - 0.05, y: tlY - dotR - 0.05, w: (dotR + 0.05) * 2, h: (dotR + 0.05) * 2,
      fill: { color: C.white }, line: { type: "none" },
    });
    // Status-colored circle
    s.addShape(SHAPES.ellipse, {
      x: cx - dotR, y: tlY - dotR, w: dotR * 2, h: dotR * 2,
      fill: { color: sc }, line: { type: "none" },
    });

    // Inner white circle for done milestones (ring style)
    if (m.status === "done") {
      s.addShape(SHAPES.ellipse, {
        x: cx - dotR + 0.06, y: tlY - dotR + 0.06, w: (dotR - 0.06) * 2, h: (dotR - 0.06) * 2,
        fill: { color: C.white }, line: { type: "none" },
      });
      s.addShape(SHAPES.ellipse, {
        x: cx - 0.05, y: tlY - 0.05, w: 0.10, h: 0.10,
        fill: { color: C.greenLt }, line: { type: "none" },
      });
    }

    // ── Date label (above the timeline) ──
    s.addText(m.date, {
      x: labelX, y: tlY - 0.95, w: labelW, h: 0.3,
      fontFace: FONT, fontSize: 11, bold: true,
      color: C.navy, align: "center", valign: "middle", margin: 0,
    });

    // Status pill — small, below date, above timeline
    const pillW = Math.min(1.01, labelW);
    const pillH = 0.26;
    s.addShape(SHAPES.roundRect, {
      x: cx - pillW / 2, y: tlY - 0.6, w: pillW, h: pillH,
      fill: { color: sc }, line: { type: "none" },
      rectRadius: pillH / 2,
    });
    s.addText(statusLabels[m.status], {
      x: cx - pillW / 2, y: tlY - 0.6, w: pillW, h: pillH,
      fontFace: FONT, fontSize: 7, bold: true,
      color: m.status === "atRisk" ? C.ink : C.white,
      align: "center", valign: "middle", margin: 0,
    });

    // ── Milestone title (below the timeline) ──
    s.addText(m.title, {
      x: labelX, y: tlY + 0.45, w: labelW, h: 0.35,
      fontFace: FONT, fontSize: 12, bold: true,
      color: C.ink, align: "center", valign: "middle", margin: 0,
    });

    // Description — body text, below title
    s.addText(m.desc, {
      x: labelX, y: tlY + 0.82, w: labelW, h: 0.75,
      fontFace: FONT_MED, fontSize: 10, color: C.bodyGray,
      align: "center", valign: "top", margin: 0,
      lineSpacingMultiple: 1.1,
    });
  });

  // ── Legend ──
  s.addText([
    { text: "Legend:  ", options: { bold: true, color: C.ink } },
    { text: "Done", options: { color: C.greenLt, bold: true } },
    { text: "    On track", options: { color: C.green, bold: true } },
    { text: "    At risk", options: { color: C.gold, bold: true } },
    { text: "    Upcoming", options: { color: C.muteGray, bold: true } },
  ], {
    x: 0.49, y: 6.45, w: 12.36, h: 0.25,
    fontFace: FONT, fontSize: 10, align: "left", margin: 0,
  });

  addFooter(s);
}

// ────────────────────────────────────────────
// SLIDE 10: Contact Closing (Blueprint B7)
// ────────────────────────────────────────────
{
  const s = p.addSlide();
  s.background = { color: C.gold };

  // Title
  s.addText("Got a Project? Let's Talk.", {
    x: 0.49, y: 0.6, w: 8.0, h: 0.8,
    fontFace: FONT, fontSize: 36, bold: true,
    color: C.navy, align: "left", margin: 0,
  });

  // White pills — staggered diagonally
  const pills = [
    { text: "rajiv@intelligaia.com", x: 2.6, y: 1.95, w: 4.6, h: 0.95 },
    { text: "intelligaia.com", x: 1.5, y: 3.25, w: 4.2, h: 0.95 },
    { text: "+1 (XXX) XXX-XXXX", x: 3.3, y: 4.55, w: 4.2, h: 0.95 },
  ];

  pills.forEach(pill => {
    s.addShape(SHAPES.roundRect, {
      x: pill.x, y: pill.y, w: pill.w, h: pill.h,
      fill: { color: C.white }, line: { type: "none" },
      rectRadius: pill.h / 2,
    });
    s.addText(pill.text, {
      x: pill.x, y: pill.y, w: pill.w, h: pill.h,
      fontFace: FONT, fontSize: 18, bold: true,
      color: C.navy, align: "center", valign: "middle", margin: 0,
    });
  });

  // Logo bottom-left (on gold, no standard footer lockup)
  s.addImage({ path: A + "logo.png", x: 0.49, y: 6.5, w: 2.0, h: 0.68 });
}

// ── Write the file ──
const outPath = path.join(__dirname, "Intelligaia Readout & Status Templates.pptx");
p.writeFile({ fileName: outPath }).then(() => {
  console.log("Written:", outPath);
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});

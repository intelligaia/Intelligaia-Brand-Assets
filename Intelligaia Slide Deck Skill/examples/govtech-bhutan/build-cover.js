const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE";
const A = "../../intelligaia-deck-design/assets/";
const s = p.addSlide();
s.background = { color: "FFFFFF" };

// arc rings, bleeding top/bottom/right
s.addImage({ path: A+"cover-arc-rings.png", x: 1.70, y: -1.85, w: 15.2, h: 9.88 });

// hero graphic
const hw = 8.95, hh = hw * (445/489);
s.addImage({ path: "./cover-hero.png", x: 4.20, y: -0.32, w: hw, h: hh });

// ---- left column ----
s.addImage({ path: A+"logo.png", x: 0.49, y: 0.45, w: 2.2, h: 0.75 });

// Title — Montserrat Bold 27pt (skill rule)
s.addText([
  { text: "The AI", options: { breakLine: true } },
  { text: "Prototyping", options: { breakLine: true } },
  { text: "Studio", options: { breakLine: true } },
  { text: "for GovTech", options: { breakLine: true } },
  { text: "Bhutan.", options: {} },
], { x: 0.49, y: 2.05, w: 3.5, h: 2.2, fontFace: "Montserrat", fontSize: 27, bold: true,
     color: "231F20", lineSpacingMultiple: 1.08, margin: 0 });

// Description
s.addText("Learn rapid prototyping by shipping real citizen services — a studio, not a seminar.",
  { x: 0.49, y: 4.68, w: 3.6, h: 0.75, fontFace: "Montserrat", fontSize: 12,
    color: "002B5C", lineSpacingMultiple: 1.25, margin: 0 });

// Meta block
s.addText([
  { text: "PREPARED FOR  ", options: { bold: true } },
  { text: "GovTech Agency, Royal Government of Bhutan", options: { breakLine: true } },
  { text: "DATE  ", options: { bold: true } },
  { text: "August 2026", options: { breakLine: true } },
  { text: "CONTACT  ", options: { bold: true } },
  { text: "rajiv@intelligaia.com · intelligaia.com", options: {} },
], { x: 0.49, y: 5.95, w: 3.6, h: 1.1, fontFace: "Montserrat", fontSize: 8.5,
     color: "231F20", lineSpacingMultiple: 1.3, margin: 0 });


// GovTech Bhutan logo — top-right white space (1244x268 native)
const gw = 2.5, gh = gw * (268/1244);
s.addImage({ path: "./govtech-logo.png", x: 10.35, y: 0.55, w: gw, h: gh });

p.writeFile({ fileName: "./Cover Slide.pptx" }).then(()=>console.log("written"));

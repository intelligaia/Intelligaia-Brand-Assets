/* ============================================================================
   CX ROADMAP · CONTENT FILE  —  THE ONLY FILE YOU EDIT
   ----------------------------------------------------------------------------
   Fill `brand` and populate the `sections` array, then build:

       python3 build.py content.js -o /mnt/user-data/outputs/cx-roadmap-<client>.html

   The build step inlines the logo, thumbnails and CSS from the shell + assets.
   DO NOT paste base64, CSS, or markup into this file. Keep values as plain
   strings. `GREEN` / `CYAN` are phase colour tokens defined in the shell — they
   resolve at build time; never redefine or hand-edit them.
   ============================================================================ */

/* ---- BRAND (R4) — plain strings only. Leave "" to keep the shipped default. */
const brand = {
  name:       "Brand Name",   // hero heading + footer copyright
  primary:    "",             // accent hex, e.g. "#6C3CD2"  ("" = locked default)
  secondary:  "",             // optional hex
  tertiary:   "",             // optional hex
  background: "",             // optional page bg hex
  logo:       "",             // path to client logo (svg/png); "" = Intelligaia default
  hero:       ""              // path to hero visual;          "" = default dashed brand-mark
};

/* ---- SECTIONS — structure is LOCKED. Per section object, edit ONLY:
        desc · techniques[] · personas[] · workshop.rows · and per-technique
        { o, image, link, links }.  NEVER change n / color / title / phase /
        phaseName / icon / divider — those define the fixed 5D layout.
        One card per real item (R11). Empty = leave placeholder (R2).           */
const sections = [

    // ─── PHASE DIVIDER → D3 Design ────────────────────────────────────
    {divider:true, label:'D3 · Design', accent:CYAN},

    // ─── D3 · DESIGN ───────────────────────────────────────────────────
    {n:11, color:CYAN, title:'High Fidelity Mockups (Prototype)', desc:'Polished, clickable screens showing the final look and flow.', icon:'ti-device-desktop',
      phase:'D3', phaseName:'Design', techniques:[
        {t:'Flow 1', o:'Provide description for this technique in the intake.', group:'Persona',
         links:[{label:'Prototype', url:'#'}, {label:'Figma', url:'#'}]},
        {t:'Flow 2', o:'Provide description for this technique in the intake.', group:'Persona',
         links:[{label:'Prototype', url:'#'}, {label:'Figma', url:'#'}]}
    ]},
    {n:9, color:CYAN, title:'Low Fidelity Wireframes', desc:'Early layouts to test structure and flow before visual design.', icon:'ti-layout',
      phase:'D3', phaseName:'Design', techniques:[
        {t:'Low fidelity wireframe', o:'Provide description for this technique in the intake.'}
    ]},

    // ─── PHASE DIVIDER → D1 Discover ──────────────────────────────────
    {divider:true, label:'D1 · Discover', accent:GREEN},

    // ─── D1 · DISCOVER ─────────────────────────────────────────────────
    {n:1, color:GREEN, title:'Discovery Workshop', desc:'Kickoff sessions to align on goals, users and constraints.', icon:'ti-users',
      phase:'D1', phaseName:'Discover', techniques:[],
      workshop:{
        title:'Discovery Workshop',
        date:'Week of —',
        rows:[
          {day:'Day 1'},
          {activity:'Introductions'},
          {activity:'Discovery session'},
          {activity:'Discovery session Contd.'},
          {activity:'Walk thru/demo of the current product'}
        ]
      }
    },

    // ─── PHASE DIVIDER → D2 Define ────────────────────────────────────
    {divider:true, label:'D2 · Define', accent:GREEN},

    // ─── D2 · DEFINE ───────────────────────────────────────────────────
    {n:6, color:GREEN, title:'Business Objectives', desc:'The outcomes this work must deliver for the business.', icon:'ti-target',
      phase:'D2', phaseName:'Define', layout:'cards', techniques:[
        {t:'Objective 01', o:'Provide description for this objective in the intake.'},
        {t:'Objective 02', o:'Provide description for this objective in the intake.'},
        {t:'Objective 03', o:'Provide description for this objective in the intake.'}
    ]},
    {n:7, color:GREEN, title:'Brainstorming Session', desc:'Ideas and directions explored to solve the key problems.', icon:'ti-bulb',
      phase:'D2', phaseName:'Define', techniques:[
        {t:'Point of View (POV)', o:'Provide description for this technique in the intake.'},
        {t:'Opportunity solution tree', o:'Provide description for this technique in the intake.'}
    ]},

    // ─── PHASE DIVIDER → D1 Discover ──────────────────────────────────
    {divider:true, label:'D1 · Discover', accent:GREEN},

    // ─── D1 · DISCOVER ─────────────────────────────────────────────────
    {n:5, color:GREEN, title:'Analysis', desc:'Competitive and pattern research that informs design decisions.', icon:'ti-chart-bar',
      phase:'D1', phaseName:'Discover', techniques:[
        {t:'Competitive / pattern analysis', o:'Provide description for this technique in the intake.'}
    ]},
    {n:4, color:GREEN, title:'Service Blueprint', desc:'How people, systems and steps connect behind each touchpoint.', icon:'ti-stack-2',
      phase:'D1', phaseName:'Discover → Define', techniques:[
        {t:'Service blueprint (as-is)', o:'Provide description for this technique in the intake.'},
        {t:'Service blueprint (to-be)', o:'Provide description for this technique in the intake.'}
    ]},
    {n:2, color:GREEN, title:'Persona', desc:'The key users we are designing for — their goals and needs.', icon:'ti-user',
      phase:'D1', phaseName:'Discover',
      personas:[
        {name:'Persona Name', designation:'Role'},
        {name:'Persona Name', designation:'Role'},
        {name:'Persona Name', designation:'Role'}
      ],
      techniques:[
        {t:'Persona mapping', o:'Provide description for this technique in the intake.'}
    ]},

    // ─── PHASE DIVIDER → D2 Define ────────────────────────────────────
    {divider:true, label:'D2 · Define', accent:GREEN},

    // ─── D2 · DEFINE ───────────────────────────────────────────────────
    {n:8, color:GREEN, title:'Information Architecture', desc:'How content and features are organised and found.', icon:'ti-sitemap',
      phase:'D2', phaseName:'Define', techniques:[
        {t:'Information architecture mapping', o:'Provide description for this technique in the intake.'}
    ]},
    {n:14, color:GREEN, title:'User Story Mapping', desc:'User tasks mapped into prioritised, buildable stories.', icon:'ti-notes',
      phase:'D2', phaseName:'Define', techniques:[
        {t:'User story grooming', o:'Provide description for this technique in the intake.'}
    ]},

    // ─── PHASE DIVIDER → D1 Discover ──────────────────────────────────
    {divider:true, label:'D1 · Discover', accent:GREEN},

    // ─── D1 · DISCOVER ─────────────────────────────────────────────────
    {n:3, color:GREEN, title:'Customer Journey Mapping', desc:'The end-to-end experience, including pain points and key moments.', icon:'ti-route',
      phase:'D1', phaseName:'Discover', techniques:[
        {t:'Journey mapping', o:'Provide description for this technique in the intake.'}
    ]},

    // ─── PHASE DIVIDER → D3 Design ────────────────────────────────────
    {divider:true, label:'D3 · Design', accent:CYAN},

    // ─── D3 · DESIGN ───────────────────────────────────────────────────
    {n:10, color:CYAN, title:'Design System', desc:'Shared components and styles that keep the product consistent.', icon:'ti-components',
      phase:'D3', phaseName:'Design', techniques:[
        {t:'Design tokens & foundations', o:'Provide description for this technique in the intake.'}
    ]},

    // ─── PHASE DIVIDER → D4 Develop ───────────────────────────────────
    {divider:true, label:'D4 · Develop', accent:CYAN},

    // ─── D4 · DEVELOP ──────────────────────────────────────────────────
    {n:12, color:CYAN, title:'Develop', desc:'Build and deployment of the designed experience.', icon:'ti-code',
      phase:'D4', phaseName:'Develop', techniques:[
        {t:'Code deployment', o:'Provide description for this technique in the intake.'}
    ]},

    // ─── PHASE DIVIDER → D5 Deliver ───────────────────────────────────
    {divider:true, label:'D5 · Deliver', accent:CYAN},

    // ─── D5 · DELIVER ──────────────────────────────────────────────────
    {n:13, color:CYAN, title:'Deliver', desc:'Quality checks and handover of the finished product.', icon:'ti-rocket',
      phase:'D5', phaseName:'Deliver', techniques:[
        {t:'QA reports', o:'Provide description for this technique in the intake.'}
    ]}
  ];

/* build.py reads `brand` and `sections` from this file. Nothing else is used. */

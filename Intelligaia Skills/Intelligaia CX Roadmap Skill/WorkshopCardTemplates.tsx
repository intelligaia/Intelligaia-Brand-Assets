import React from "react";

// ─────────────────────────────────────────────
// Shared types
// ─────────────────────────────────────────────
interface WorkshopCardProps {
  number: number;
  title: string;
  description: string;
  bullets: string[];
  imageSrc?: string;           // omit to show placeholder
  imageAlt?: string;
  imageLabel?: string;         // caption under placeholder
  bulletColor?: string;        // default: "#22d3ee" (cyan) | alt: "#f59e0b" (amber)
  imageBorderStyle?: "solid" | "dashed"; // default: "solid"
  outerBackground?: string;    // default: "#e8f5e9" (light green) | "transparent" for dark pages
}

// ─────────────────────────────────────────────
// Template 1 — with image
// ─────────────────────────────────────────────
export const WorkshopCardWithImage: React.FC<WorkshopCardProps> = ({
  number,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt = "Workshop image",
  imageLabel = "Workshop Image",
  bulletColor = "#22d3ee",
  imageBorderStyle = "solid",
  outerBackground = "#e8f5e9",
}) => (
  <div
    style={{
      background: outerBackground,
      padding: outerBackground === "transparent" ? "0" : "24px",
      borderRadius: outerBackground === "transparent" ? "0" : "12px",
    }}
  >
    <div
      style={{
        background: "#18191a",
        borderRadius: "10px",
        padding: "28px 32px",
        color: "#fff",
        maxWidth: "700px",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "20px" }}>
        <Badge number={number} />
        <div>
          <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 700, lineHeight: 1.3 }}>
            {title}
          </h3>
          <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#aaa", lineHeight: 1.5 }}>
            {description}
          </p>
        </div>
      </div>

      {/* Content row: bullets + image */}
      <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
        {/* Bullets */}
        <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: 1 }}>
          {bullets.map((item, i) => (
            <BulletItem key={i} text={item} color={bulletColor} />
          ))}
        </ul>

        {/* Image area */}
        <div
          style={{
            flex: "0 0 220px",
            minHeight: "160px",
            background: "#222324",
            borderRadius: "8px",
            border: `1px ${imageBorderStyle} #444`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            overflow: "hidden",
          }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <>
              <MonitorIcon />
              <span style={{ fontSize: "12px", color: "#666" }}>{imageLabel}</span>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Template 2 — without image
// ─────────────────────────────────────────────
export const WorkshopCardNoImage: React.FC<WorkshopCardProps> = ({
  number,
  title,
  description,
  bullets,
  bulletColor = "#22d3ee",
  outerBackground = "#e8f5e9",
}) => (
  <div
    style={{
      background: outerBackground,
      padding: outerBackground === "transparent" ? "0" : "24px",
      borderRadius: outerBackground === "transparent" ? "0" : "12px",
    }}
  >
    <div
      style={{
        background: "#18191a",
        borderRadius: "10px",
        padding: "28px 32px",
        color: "#fff",
        maxWidth: "700px",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "20px" }}>
        <Badge number={number} />
        <div>
          <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 700, lineHeight: 1.3 }}>
            {title}
          </h3>
          <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#aaa", lineHeight: 1.5 }}>
            {description}
          </p>
        </div>
      </div>

      {/* Full-width bullets */}
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {bullets.map((item, i) => (
          <BulletItem key={i} text={item} color={bulletColor} />
        ))}
      </ul>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────
const Badge: React.FC<{ number: number }> = ({ number }) => (
  <div
    style={{
      minWidth: "28px",
      height: "28px",
      borderRadius: "50%",
      background: "#f59e0b",
      color: "#fff",
      fontWeight: 700,
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {number}
  </div>
);

const BulletItem: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <li
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      marginBottom: "12px",
      fontSize: "13px",
      lineHeight: 1.5,
      color: "#e5e5e5",
    }}
  >
    <span
      style={{
        width: "7px",
        height: "7px",
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
        marginTop: "5px",
      }}
    />
    {text}
  </li>
);

const MonitorIcon: React.FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#555"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

// ─────────────────────────────────────────────
// Demo data
// ─────────────────────────────────────────────

// Template 1 & 2 — cyan bullets, light green wrapper (original)
const WORKSHOP_DATA = {
  number: 1,
  title: "Discovery Workshop (02 Days)",
  description:
    "A structured two-day engagement with key stakeholders to understand the current state of the customer experience, uncover friction points, and align on strategic priorities.",
  bullets: [
    "Stakeholder interviews across sales, support, and product teams",
    "Heuristic review of existing platform and touchpoints",
    "Analytics and support ticket analysis to identify drop-off patterns",
    "Synthesis session to align on top pain points and opportunity areas",
  ],
};

// Template 3 — amber bullets, dashed image border, dark page background
const BRAINSTORMING_DATA = {
  number: 3,
  title: "Brainstorming Session",
  description:
    "Cross-functional ideation using How Might We prompts and affinity mapping to generate solutions aligned to the identified opportunity areas.",
  bullets: [
    "Simplify the product configuration experience for non-technical buyers",
    "Introduce guided selling flows based on customer role and intent",
    "Create a unified dashboard for tracking quotes, orders, and renewals",
  ],
  bulletColor: "#f59e0b",        // amber — matches badge
  imageBorderStyle: "dashed" as const,
  imageLabel: "Session image",
  outerBackground: "transparent", // sits directly on a dark page
};

// ─────────────────────────────────────────────
// Demo — all three variants
// ─────────────────────────────────────────────
const Demo: React.FC = () => (
  <div style={{ background: "#18191a", padding: "32px", display: "flex", flexDirection: "column", gap: "32px" }}>
    {/* Original pair — light green wrapper */}
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <WorkshopCardWithImage {...WORKSHOP_DATA} imageLabel="Workshop Image" />
      <WorkshopCardNoImage {...WORKSHOP_DATA} />
    </div>

    {/* Brainstorming variant — amber bullets, dashed border, no wrapper */}
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <WorkshopCardWithImage {...BRAINSTORMING_DATA} />
      <WorkshopCardNoImage {...BRAINSTORMING_DATA} />
    </div>
  </div>
);

export default Demo;

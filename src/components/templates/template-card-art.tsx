import React from "react";
import type { AspectRatio, TemplateFormat } from "../../data/demo-templates";
import styles from "./template-card-art.module.css";

interface TemplateCardArtProps {
  title: string;
  format: TemplateFormat;
  aspectRatio: AspectRatio;
  accent: "indigo" | "pink" | "amber" | "neutral";
  duration?: string;
}

export function TemplateCardArt({
  title,
  format,
  aspectRatio,
  accent,
  duration,
}: TemplateCardArtProps) {
  const ratioClass =
    aspectRatio === "9:16"
      ? styles["ratio-9-16"]
      : aspectRatio === "1:1"
      ? styles["ratio-1-1"]
      : styles["ratio-16-9"];

  const bgClass = styles[`art-bg-${accent}`];

  return (
    <div className={`${styles["art-wrapper"]} ${ratioClass} ${bgClass}`} aria-hidden="true">
      {/* Format badge indicator */}
      <div className={styles["format-badge"]}>
        {format === "video" ? (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Motion Video</span>
          </>
        ) : (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span>Photo Collage</span>
          </>
        )}
      </div>

      {/* Dynamic SVG graphic representing the template layout */}
      <svg className={styles["svg-art"]} viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>{title}</title>
        {aspectRatio === "9:16" && (
          <g>
            {/* Phone/Story Canvas */}
            <rect x="65" y="10" width="110" height="180" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="75" y="24" width="90" height="95" rx="6" fill="#f1f5f9" />
            {/* Media slot preview */}
            <circle cx="120" cy="65" r="16" fill="rgba(99, 102, 241, 0.2)" />
            <polygon points="116,58 127,65 116,72" fill="#6366f1" />
            {/* Text lines */}
            <rect x="75" y="130" width="60" height="8" rx="4" fill="#0f172a" />
            <rect x="75" y="144" width="80" height="5" rx="2.5" fill="#94a3b8" />
            <rect x="75" y="154" width="45" height="5" rx="2.5" fill="#cbd5e1" />
            {/* Progress bar */}
            <rect x="75" y="172" width="90" height="3" rx="1.5" fill="#e2e8f0" />
            <rect x="75" y="172" width="45" height="3" rx="1.5" fill="#6366f1" />
          </g>
        )}

        {aspectRatio === "1:1" && (
          <g>
            {/* Square Polaroid / Scrapbook Frame */}
            <rect x="35" y="20" width="170" height="160" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            {/* Multi-photo grid inside */}
            <rect x="47" y="32" width="68" height="68" rx="4" fill="#f1f5f9" />
            <rect x="125" y="32" width="68" height="68" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeDasharray="3 3" />
            <rect x="47" y="108" width="68" height="38" rx="4" fill="#e2e8f0" />
            <rect x="125" y="108" width="68" height="38" rx="4" fill="#f1f5f9" />
            {/* Tape sticker */}
            <rect x="100" y="12" width="40" height="14" rx="2" fill="rgba(245, 158, 11, 0.4)" transform="rotate(-4 100 12)" />
            {/* Caption bar */}
            <rect x="47" y="158" width="85" height="6" rx="3" fill="#0f172a" />
          </g>
        )}

        {aspectRatio === "16:9" && (
          <g>
            {/* Cinematic Widescreen Frame */}
            <rect x="20" y="35" width="200" height="130" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
            <rect x="28" y="43" width="184" height="96" rx="4" fill="#0f172a" />
            {/* Cinematic play ring */}
            <circle cx="120" cy="91" r="18" fill="rgba(255, 255, 255, 0.2)" />
            <polygon points="116,83 128,91 116,99" fill="#ffffff" />
            {/* Lower third title bar */}
            <rect x="36" y="118" width="70" height="6" rx="3" fill="#fbbf24" />
            <rect x="36" y="127" width="100" height="4" rx="2" fill="rgba(255, 255, 255, 0.6)" />
            {/* Audio wave timeline */}
            <rect x="28" y="148" width="184" height="8" rx="2" fill="#f1f5f9" />
            <circle cx="68" cy="152" r="4" fill="#6366f1" />
          </g>
        )}
      </svg>

      {/* Video duration if applicable */}
      {duration && (
        <div className={styles["duration-badge"]}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{duration}</span>
        </div>
      )}
    </div>
  );
}

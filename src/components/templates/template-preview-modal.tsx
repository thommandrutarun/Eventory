"use client";

import React, { useEffect, useCallback, useRef } from "react";
import type { DemoTemplate } from "../../data/demo-templates";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TemplateCardArt } from "./template-card-art";
import styles from "./template-preview-modal.module.css";

interface TemplatePreviewModalProps {
  template: DemoTemplate | null;
  onClose: () => void;
}

export function TemplatePreviewModal({ template, onClose }: TemplatePreviewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Focus containment & keyboard handling
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!template) return;

    // Save triggering active element to restore focus on close
    triggerElementRef.current = document.activeElement as HTMLElement;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Focus entry into modal
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";

      // Restore focus to triggering element
      if (triggerElementRef.current && typeof triggerElementRef.current.focus === "function") {
        triggerElementRef.current.focus();
      }
    };
  }, [template, handleKeyDown]);

  if (!template) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="template-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={modalRef} className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles["title-group"]}>
            <div className={styles.badges}>
              <Badge variant={template.accent} size="sm">
                {template.occasionName}
              </Badge>
              <Badge variant="neutral" size="sm">
                {template.format === "video" ? "Motion Video Story" : "Photo Collage"}
              </Badge>
              <Badge variant="neutral" size="sm">
                {template.aspectRatio}
              </Badge>
            </div>
            <h2 id="template-modal-title" className={styles.title}>
              {template.title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles["close-btn"]}
            onClick={onClose}
            aria-label="Close template preview"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Artwork Banner */}
        <div className={styles["preview-container"]}>
          <TemplateCardArt
            title={template.title}
            format={template.format}
            aspectRatio={template.aspectRatio}
            accent={template.accent}
            duration={template.duration}
          />
        </div>

        {/* Description */}
        <p className={styles.desc}>{template.description}</p>

        {/* Specifications Grid */}
        <div className={styles["specs-grid"]}>
          <div className={styles["spec-item"]}>
            <span className={styles["spec-label"]}>Media Slots</span>
            <span className={styles["spec-value"]}>
              {template.photoSlots} {template.format === "video" ? "Clips / Photos" : "Photos"}
            </span>
          </div>
          <div className={styles["spec-item"]}>
            <span className={styles["spec-label"]}>Target Format</span>
            <span className={styles["spec-value"]}>{template.aspectRatio} Aspect Ratio</span>
          </div>
          <div className={styles["spec-item"]}>
            <span className={styles["spec-label"]}>Duration</span>
            <span className={styles["spec-value"]}>{template.duration || "Static Export"}</span>
          </div>
        </div>

        {/* Features Checklist */}
        <div className={styles["features-list"]}>
          <h4 className={styles["features-title"]}>Template Features</h4>
          <ul className={styles["features-items"]}>
            {template.features.map((feature, idx) => (
              <li key={idx} className={styles["feature-item"]}>
                <svg
                  className={styles["feature-icon"]}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Development Status Callout */}
        <div className={styles["status-callout"]}>
          <svg
            className={styles["status-icon"]}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <div>
            <strong>Interactive Customizer in Development:</strong> Template timeline editing, drag-and-drop photo replacement, and local client-side video rendering will become active in Phase 4.
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-3)" }}>
          <Button variant="secondary" onClick={onClose}>
            Close Preview
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onClose();
              const target = document.getElementById("how-it-works");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn How Editing Works
          </Button>
        </div>
      </div>
    </div>
  );
}

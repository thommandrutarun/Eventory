import React from "react";
import styles from "./section.module.css";

export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";
export type SectionSurface = "transparent" | "default" | "subtle" | "muted" | "inverted";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Vertical padding scale for generous whitespace (defaults to 'md') */
  spacing?: SectionSpacing;
  /** Semantic surface background (defaults to 'transparent') */
  surface?: SectionSurface;
  /** Adds subtle top and bottom border separators */
  bordered?: boolean;
  /** HTML element to render (defaults to 'section') */
  as?: "section" | "div" | "article" | "aside";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      spacing = "md",
      surface = "transparent",
      bordered = false,
      as: Component = "section",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classNames = [
      styles.section,
      styles[`spacing-${spacing}`],
      styles[`surface-${surface}`],
      bordered ? styles.bordered : "",
      className || "",
    ]
      .filter(Boolean)
      .join(" ");

    return React.createElement(
      Component,
      {
        ref,
        className: classNames,
        ...props,
      },
      children
    );
  }
);

Section.displayName = "Section";

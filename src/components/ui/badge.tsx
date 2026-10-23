import React from "react";
import styles from "./badge.module.css";

export type BadgeVariant =
  | "default"
  | "indigo"
  | "pink"
  | "amber"
  | "neutral"
  | "success"
  | "danger";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant matching studio accent and feedback tokens */
  variant?: BadgeVariant;
  /** Size affecting font-size and padding */
  size?: BadgeSize;
  /** Whether to render a colored dot indicator */
  dot?: boolean;
  /** Optional icon rendered before the label */
  icon?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "md",
      dot = false,
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classNames = [
      styles.badge,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      className || "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <span ref={ref} className={classNames} {...props}>
        {dot && <span className={styles.dot} aria-hidden="true" />}
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";

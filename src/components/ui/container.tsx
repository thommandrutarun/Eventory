import React from "react";
import styles from "./container.module.css";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Target max-width constraint for content (defaults to 'xl' - 1280px) */
  size?: ContainerSize;
  /** HTML element to render (defaults to 'div') */
  as?: "div" | "section" | "main" | "article" | "header" | "footer" | "nav";
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ size = "xl", as: Component = "div", className, children, ...props }, ref) => {
    const classNames = [
      styles.container,
      styles[`size-${size}`],
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

Container.displayName = "Container";

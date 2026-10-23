import React, { useId } from "react";
import styles from "./input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible accessible label for the input */
  label?: string;
  /** Error message displayed below input, triggering aria-invalid */
  error?: string;
  /** Helper text displayed below input */
  hint?: string;
  /** Left slot element, such as an icon */
  leftElement?: React.ReactNode;
  /** Right slot element, such as an action button or icon */
  rightElement?: React.ReactNode;
  /** Controls if the wrapper should take full width (defaults to true) */
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: customId,
      label,
      error,
      hint,
      leftElement,
      rightElement,
      fullWidth = true,
      className,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const errorId = `${id}-error`;
    const hintId = `${id}-hint`;

    const describedBy = [
      error ? errorId : null,
      hint ? hintId : null,
      props["aria-describedby"],
    ]
      .filter(Boolean)
      .join(" ");

    const inputClasses = [
      styles.input,
      leftElement ? styles["has-left-element"] : "",
      rightElement ? styles["has-right-element"] : "",
      className || "",
    ]
      .filter(Boolean)
      .join(" ");

    const wrapperClasses = [
      styles.wrapper,
      fullWidth ? styles["full-width"] : "",
      error ? styles["has-error"] : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            <span>{label}</span>
            {required && (
              <span className={styles["required-indicator"]} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div className={styles["control-container"]}>
          {leftElement && <span className={styles["element-left"]}>{leftElement}</span>}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={describedBy || undefined}
            className={inputClasses}
            {...props}
          />
          {rightElement && <span className={styles["element-right"]}>{rightElement}</span>}
        </div>

        {error && (
          <p id={errorId} role="alert" className={styles["error-message"]}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
              <line x1="8" y1="4" x2="8" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="8" cy="12" r="1" fill="currentColor" />
            </svg>
            <span>{error}</span>
          </p>
        )}

        {!error && hint && (
          <p id={hintId} className={styles["hint-message"]}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

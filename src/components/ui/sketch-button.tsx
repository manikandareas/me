"use client";

import {
  forwardRef,
  useId,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import styles from "./sketch-button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  seed?: number;
  animate?: boolean;
}

/** Self-contained sketch treatment; no dependency on the demo's missing utility package. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function SketchButton(
    {
      children,
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      startIcon,
      endIcon,
      seed = 42,
      animate = true,
      disabled,
      onClick,
      ...props
    },
    ref,
  ) {
    const id = `sketch-${useId().replace(/:/g, "")}`;
    const Comp = asChild ? Slot : "button";
    const slant = Math.abs(seed % 3);
    return (
      <Comp
        {...props}
        ref={ref}
        type={asChild ? undefined : (props.type ?? "button")}
        disabled={asChild ? undefined : disabled}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : props.tabIndex}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        className={cn(
          styles.button,
          styles[variant],
          styles[size],
          animate && styles.animated,
          className,
        )}
      >
        <svg
          aria-hidden="true"
          className={styles.sketch}
          viewBox="0 0 240 58"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <pattern
              id={id}
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
              patternTransform={`rotate(${-18 + slant})`}
            >
              <path
                d="M-2 8L8 -2M6 10L10 6"
                stroke="currentColor"
                strokeWidth=".7"
                opacity=".28"
              />
            </pattern>
          </defs>
          <path className={styles.paper} d="M5 5L234 3L236 52L4 54Z" />
          <path
            className={styles.hatch}
            d="M5 5L234 3L236 52L4 54Z"
            fill={`url(#${id})`}
          />
          <g
            className={styles.outline}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              pathLength="1"
              d={`M5 6Q113 ${1 + slant} 235 4L237 52Q117 57 4 53Q2 29 5 6Z`}
            />
            <path
              pathLength="1"
              d="M8 3Q119 6 232 2Q239 27 234 55Q112 51 6 56L3 9"
              opacity=".7"
            />
          </g>
        </svg>
        {startIcon && <span className={styles.icon}>{startIcon}</span>}
        {asChild ? <Slottable>{children}</Slottable> : <span>{children}</span>}
        {endIcon && <span className={styles.icon}>{endIcon}</span>}
      </Comp>
    );
  },
);
Button.displayName = "SketchButton";
export default Button;

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Two rails of cards ride from behind the screen toward the viewer.
 * Geometric apparent sizes keep the cards overlapped, the rails fan open
 * early, and each card is born across the axis to keep the centre covered.
 * All lengths use cqw so the corridor scales with its own container.
 */

export type CorridorPath = {
  /** Strength of the projection. Lower gives a wider angle. @default 30 */
  perspective?: number;
  /** Card width in world units. @default 18 */
  cardWidth?: number;
  /** Card height in world units. @default 25 */
  cardHeight?: number;
  /** Corner radius applied to each card. @default 0.4 */
  cardRadius?: number;
  /** On-screen card height at birth. @default 2.6 */
  birthHeight?: number;
  /** On-screen card height at exit. @default 46 */
  exitHeight?: number;
  /** Negative offsets start the card across the axis. @default -11 */
  railBirth?: number;
  /** Lateral offset after the rails finish opening. @default 44 */
  railExit?: number;
  /** Values above 1 open the rails early, then hold. @default 3.3 */
  fan?: number;
  /** Y-rotation at birth in degrees. @default 6 */
  turnBirth?: number;
  /** Y-rotation at exit in degrees. @default 28 */
  turnExit?: number;
  /** Keyframe stops used to trace the curve. @default 24 */
  stops?: number;
};

const PATH: Required<CorridorPath> = {
  perspective: 30,
  cardWidth: 18,
  cardHeight: 25,
  cardRadius: 0.4,
  birthHeight: 2.6,
  exitHeight: 46,
  railBirth: -11,
  railExit: 44,
  fan: 3.3,
  turnBirth: 6,
  turnExit: 28,
  stops: 24,
};

/** Sample the path once so the CSS keyframes trace the real curve. */
function keyframes(dir: 1 | -1, name: string, p: Required<CorridorPath>) {
  const steps: string[] = [];
  for (let s = 0; s <= p.stops; s++) {
    const u = s / p.stops;
    // Geometric apparent size keeps consecutive cards at a constant ratio.
    const scale =
      (p.birthHeight / p.cardHeight) *
      Math.pow(p.exitHeight / p.birthHeight, u);
    const z = p.perspective * (1 - 1 / scale);
    const rail =
      p.railExit - (p.railExit - p.railBirth) * Math.pow(1 - u, p.fan);
    const turn = p.turnBirth + (p.turnExit - p.turnBirth) * u;
    steps.push(
      `${(u * 100).toFixed(2)}%{transform:translate3d(${(dir * rail).toFixed(
        2,
      )}cqw,0,${z.toFixed(2)}cqw) rotateY(${(-dir * turn).toFixed(2)}deg)}`,
    );
  }
  return `@keyframes ${name}{${steps.join("")}}`;
}

export type StreamImage = {
  src: string;
  /** The corridor is decorative and hidden from assistive technology. */
  alt?: string;
};

export type ImageStreamHeroProps = {
  /** Both rails cycle through the same sequence. */
  images: StreamImage[];
  /** Cards on each rail. Lower counts can leave gaps near the exit. @default 9 */
  cards?: number;
  /** Seconds for a card to travel the whole corridor. @default 18 */
  speed?: number;
  /** Vertical placement of the axis as a percentage of height. @default 55 */
  axis?: number;
  /** Pause in place, retaining every card's current position. */
  paused?: boolean;
  /** Override any part of the corridor geometry. */
  path?: CorridorPath;
  /** Content rendered above the corridor. */
  children?: React.ReactNode;
  className?: string;
};

export function ImageStreamHero({
  images,
  cards = 9,
  speed = 18,
  axis = 55,
  paused = false,
  path,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & ImageStreamHeroProps) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const right = `ish-r-${id}`;
  const left = `ish-l-${id}`;
  const card = `ish-c-${id}`;

  const p = React.useMemo(() => ({ ...PATH, ...path }), [path]);

  const css = React.useMemo(
    () =>
      `${keyframes(1, right, p)}${keyframes(-1, left, p)}` +
      // Freeze the negative-delay positions instead of collapsing the corridor.
      `@media(prefers-reduced-motion:reduce){.${card}{animation-play-state:paused}}`,
    [right, left, card, p],
  );

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
      style={{ containerType: "inline-size", ...props.style }}
    >
      <style>{css}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          perspective: `${p.perspective}cqw`,
          perspectiveOrigin: `50% ${axis}%`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {[right, left].map((name) =>
            Array.from({ length: cards }, (_, i) => {
              const img = images[i % Math.max(images.length, 1)];
              return (
                <div
                  key={`${name}-${i}`}
                  className={cn(card, "absolute overflow-hidden")}
                  style={{
                    left: "50%",
                    top: `${axis}%`,
                    // Enlarge artwork responsively without changing the rail path.
                    width: `calc(${p.cardWidth}cqw * var(--stream-card-size, 1))`,
                    height: `calc(${p.cardHeight}cqw * var(--stream-card-size, 1))`,
                    marginLeft: `calc(${-p.cardWidth / 2}cqw * var(--stream-card-size, 1))`,
                    marginTop: `calc(${-p.cardHeight / 2}cqw * var(--stream-card-size, 1))`,
                    borderRadius: `${p.cardRadius}cqw`,
                    // Longhands let the reduced-motion CSS pause the animation.
                    animationName: name,
                    animationDuration: `${speed}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: paused ? "paused" : undefined,
                    // Start mid-flight so the first frame is already full.
                    animationDelay: `${-(i * speed) / cards}s`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {img ? (
                    // Container-relative 3D cards control their own image sizes.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img.src}
                      alt={img.alt ?? ""}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  ) : null}
                </div>
              );
            }),
          )}
        </div>
      </div>

      {children}
    </div>
  );
}

export default ImageStreamHero;

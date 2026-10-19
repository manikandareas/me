"use client";

import {
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import styles from "./handwriting-text.module.css";

const DEFAULT_FONT_URL = "/fonts/studio/handwriting.ttf";
const OPENTYPE_URL = "/vendor/opentype/opentype.min.js";

export interface HandwritingTextProps {
  text?: string;
  words?: string[];
  interval?: number;
  fontUrl?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  fill?: boolean;
  height?: string;
  className?: string;
}

type FontPath = {
  toPathData(precision: number): string;
  getBoundingBox(): { x1: number; y1: number; x2: number; y2: number };
};
type Font = {
  getPath(text: string, x: number, y: number, size: number): FontPath;
};
type OpenType = { parse(buffer: ArrayBuffer): Font };
let libPromise: Promise<OpenType> | null = null;
const fontCache = new Map<string, Promise<Font>>();

function loadOpentype() {
  const browser = window as Window & { opentype?: OpenType };
  if (browser.opentype) return Promise.resolve(browser.opentype);
  if (!libPromise) {
    libPromise = new Promise<OpenType>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = OPENTYPE_URL;
      script.async = true;
      script.onload = () =>
        browser.opentype
          ? resolve(browser.opentype)
          : reject(new Error("Font parser unavailable"));
      script.onerror = () => {
        script.remove();
        reject(new Error("Font parser failed to load"));
      };
      document.head.appendChild(script);
    }).catch((error) => {
      libPromise = null;
      throw error;
    });
  }
  return libPromise;
}

function loadFont(url: string) {
  let pending = fontCache.get(url);
  if (!pending) {
    pending = Promise.all([
      loadOpentype(),
      fetch(url).then((response) => {
        if (!response.ok)
          throw new Error(`Font request failed: ${response.status}`);
        return response.arrayBuffer();
      }),
    ])
      .then(([lib, buffer]) => lib.parse(buffer))
      .catch((error) => {
        fontCache.delete(url);
        throw error;
      });
    fontCache.set(url, pending);
  }
  return pending;
}

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Trace each glyph contour, then fill the complete word to preserve letter counters. */
export function HandwritingText({
  text,
  words,
  interval = 3200,
  fontUrl = DEFAULT_FONT_URL,
  duration = 1.5,
  delay = 0.05,
  strokeWidth = 1.6,
  fill = true,
  height = "1.15em",
  className,
}: HandwritingTextProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<{ url: string; font: Font } | null>(
    null,
  );
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    getReducedMotion,
    () => true,
  );
  const cycle = Boolean(words?.length);
  const current = cycle ? words![index % words!.length] : (text ?? "");

  useEffect(() => {
    if (!cycle || reducedMotion) return;
    const timer = window.setInterval(
      () => setIndex((value) => value + 1),
      Math.max(100, interval),
    );
    return () => window.clearInterval(timer);
  }, [cycle, interval, reducedMotion]);

  useEffect(() => {
    let cancelled = false;
    loadFont(fontUrl)
      .then((font) => {
        if (!cancelled) setLoaded({ url: fontUrl, font });
      })
      .catch(() => {
        /* Keep the readable text fallback. */
      });
    return () => {
      cancelled = true;
    };
  }, [fontUrl]);

  const geom = useMemo(() => {
    if (loaded?.url !== fontUrl || !current.trim()) return null;
    try {
      const path = loaded.font.getPath(current, 0, 100, 100);
      const box = path.getBoundingBox();
      const full = path.toPathData(2);
      return {
        full,
        contours: full.split(/(?=M)/).filter((d) => d.trim().length > 1),
        x: box.x1 - 12,
        y: box.y1 - 12,
        w: box.x2 - box.x1 + 24,
        h: box.y2 - box.y1 + 24,
      };
    } catch {
      return null;
    }
  }, [loaded, fontUrl, current]);

  if (!geom) return <span className={className}>{current}</span>;
  const count = Math.max(1, geom.contours.length);
  const seconds = Math.max(0, duration);
  return (
    <svg
      key={`${fontUrl}-${current}`}
      viewBox={`${geom.x} ${geom.y} ${geom.w} ${geom.h}`}
      role="img"
      aria-label={current}
      className={[styles.word, className].filter(Boolean).join(" ")}
      style={{
        height,
        width: `calc(${height} * ${geom.w / geom.h})`,
        maxWidth: "100%",
        overflow: "visible",
      }}
    >
      {fill && (
        <path
          d={geom.full}
          fill="currentColor"
          stroke="none"
          className={styles.ink}
          style={{ animationDelay: `${Math.max(0, delay) + seconds * 0.72}s` }}
        />
      )}
      {geom.contours.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.stroke}
          style={
            {
              "--write-duration": `${(seconds / count) * 2.4}s`,
              animationDelay: `${Math.max(0, delay) + (i / count) * seconds}s`,
            } as CSSProperties
          }
        />
      ))}
    </svg>
  );
}
export default HandwritingText;

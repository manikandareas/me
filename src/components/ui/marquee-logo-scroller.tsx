"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./marquee-logo-scroller.module.css";

interface Logo {
  src: string;
  alt: string;
  gradient: { from: string; via: string; to: string };
}

interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  logos: Logo[];
  speed?: "normal" | "slow" | "fast";
}

const MarqueeLogoScroller = React.forwardRef<HTMLElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = "normal", className, ...props }, ref) => {
    const [paused, setPaused] = React.useState(false);
    const headingId = React.useId();
    const durations = { normal: "40s", slow: "80s", fast: "5s" };

    // Each half covers the viewport, including when only a few clients exist.
    const repetitions = logos.length ? Math.max(1, Math.ceil(16 / logos.length)) : 0;
    const items = Array.from({ length: repetitions }, () => logos).flat();

    return (
      <section ref={ref} aria-labelledby={headingId} className={cn(styles.section, className)} {...props}>
        <div className={styles.header}>
          <h2 id={headingId}>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.viewport}>
          <div
            className={styles.track}
            data-paused={paused}
            style={{ "--marquee-duration": durations[speed] } as React.CSSProperties}
          >
            {[0, 1].map((copy) => (
              <ul key={copy} className={styles.group} aria-hidden={copy === 1 ? true : undefined}>
                {items.map((logo, index) => (
                  <li key={`${logo.src}-${index}`} className={styles.card} aria-hidden={index >= logos.length ? true : undefined}>
                    <div className={styles.tint} style={{ background: `linear-gradient(135deg, ${logo.gradient.from}, ${logo.gradient.via}, ${logo.gradient.to})` }} />
                    <Image src={logo.src} alt={logo.alt} width={128} height={72} className={styles.image} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

MarqueeLogoScroller.displayName = "MarqueeLogoScroller";
export { MarqueeLogoScroller };

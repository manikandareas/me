"use client";

import SketchButton from "@/components/ui/sketch-button";
import { HandwritingText } from "@/components/ui/handwriting-text";
import { ArrowUpRight } from "lucide-react";
import styles from "./studio-hero.module.css";
import { STUDIO_WHATSAPP } from "./studio-contact";

export function StudioHero() {
  return (
    <section id="beranda" aria-labelledby="studio-heading" className={styles.hero}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={styles.content}>
        <h1 id="studio-heading" className={styles.title}>
          <span className="sr-only">
            Dari ide yang kamu punya, kita bangun aplikasi yang selama ini kamu
            bayangkan, kamu butuhin, dan bisa kamu banggakan.
          </span>
          <span aria-hidden="true">
            <span className={styles.titleLine}>Dari ide yang kamu punya,</span>
            <span className={styles.titleLine}>kita bangun aplikasi yang</span>
            <span className={styles.handwriting}>
              <HandwritingText
                words={[
                  "kamu butuhin.",
                  "bisa kamu banggakan.",
                  "selama ini kamu bayangkan.",
                ]}
                interval={4200}
                height="1.15em"
                duration={1.8}
                delay={0.2}
              />
            </span>
          </span>
        </h1>
        <p className={styles.description}>
          Dari produk digital, sistem bisnis, hingga solusi untuk pekerjaan
          sehari-hari. Apa pun idenya, kita cari cara untuk mewujudkannya
          bareng.
        </p>
        <div className={styles.actions}>
          <SketchButton asChild size="lg" seed={42} animate={false}>
            <a href={STUDIO_WHATSAPP} target="_blank" rel="noopener noreferrer">
              Konsultasi gratis{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </SketchButton>
        </div>
      </div>
      <div className={styles.scroll}>
        <a
          href="#proyek"
          className="flex items-center gap-2 px-8 py-4 text-xs leading-none text-muted-foreground motion-safe:animate-pulse motion-safe:[animation-duration:3s]"
        >
          Scroll dulu aja
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6 shrink-0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 4C13 2 19 7 17 13C16 16 14 18 12 20" />
            <path d="M8 14C9 17 10 19 12 21C15 19 18 18 21 17" />
          </svg>
        </a>
      </div>
    </section>
  );
}

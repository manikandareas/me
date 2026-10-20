"use client";

import { useEffect, useRef } from "react";
import styles from "./studio-about.module.css";

const introduction = [
  { text: "Aplikasi custom itu mahal biasanya cuma karena kebanyakan drama. Jam terbang " },
  { text: "6 tahun", highlight: true },
  { text: " bikin kami bisa " },
  { text: "kerja secara efisien", highlight: true },
  { text: ": paham maumu apa, eksekusi fiturnya, dan hilangkan biaya-biaya nggak masuk akal. Hasilnya? Aplikasi yang beneran nempel sama " },
  { text: "kebutuhan operasionalmu", highlight: true },
  { text: ", nyaman dipakai user, tapi dengan angka yang tetap " },
  { text: "realistis.", highlight: true },
];
const belief = [
  { text: "“Teknologi hebat itu nggak harus mewah sampai bikin bangkrut. Dari desain tombol sampai baris kodenya, tujuan kami cuma memastikan " },
  { text: "penggunanya terbantu", highlight: true },
  { text: ", dengan proses yang " },
  { text: "seringkas mungkin.", highlight: true },
  { text: "”" },
];

type CopyPart = { text: string; highlight?: boolean };

function ScrollWords({ parts }: { parts: CopyPart[] }) {
  // Keep punctuation attached to its word even at a highlight boundary.
  const text = parts.map((part) => part.text).join("");
  const highlights = parts.flatMap((part, index) => {
    const start = parts.slice(0, index).reduce((length, previous) => length + previous.text.length, 0);
    return part.highlight ? [{ start, end: start + part.text.length }] : [];
  });

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text.matchAll(/\S+|\s+/g), (match) => {
          if (/^\s+$/.test(match[0])) return match[0];
          const highlighted = highlights.some(({ start, end }) => match.index < end && match.index + match[0].length > start);
          return <span key={match.index} data-scroll-word className={highlighted ? `${styles.word} ${styles.highlight}` : styles.word}>{match[0]}</span>;
        })}
      </span>
    </>
  );
}

export function StudioAbout() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const content = section.querySelector<HTMLElement>(`[data-scroll-content]`);
    if (!content) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const words = Array.from(section.querySelectorAll<HTMLElement>("[data-scroll-word]"));
    let frame = 0;
    let disposed = false;

    function update() {
      frame = 0;
      if (!content) return;
      // Finish slightly before visual center, leaving a reading buffer.
      const bounds = content.getBoundingClientRect();
      const center = bounds.top + bounds.height / 2;
      const finishCenter = window.innerHeight * .6;
      const finishDistance = window.innerHeight - finishCenter + bounds.height / 2;
      const entered = window.innerHeight - bounds.top;
      const progress = center <= finishCenter + 1
        ? 1
        : Math.max(0, Math.min(1, entered / finishDistance));
      words.forEach((word, index) => {
        const reveal = Math.max(0, Math.min(1, progress * words.length - index));
        word.style.opacity = motion.matches ? "1" : String(.22 + reveal * .78);
      });
    }

    function schedule() {
      if (!disposed && !frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(section);
    observer.observe(content);
    const page = section.closest("main");
    if (page) observer.observe(page);
    void document.fonts.ready.then(schedule);
    window.addEventListener("pageshow", schedule);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", schedule);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section ref={sectionRef} id="tentang-kami" aria-labelledby="about-heading" className={styles.about}>
      <div className={styles.inner} data-scroll-content>
        <h2 id="about-heading" className="sr-only">Kenapa memilih kami</h2>
        <p className={styles.copy} data-scroll-copy><ScrollWords parts={introduction} /></p>
        <blockquote className={styles.belief}>
          <p data-scroll-copy><ScrollWords parts={belief} /></p>
        </blockquote>
      </div>
    </section>
  );
}

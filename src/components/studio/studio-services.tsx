"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useSyncExternalStore, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { STUDIO_WHATSAPP } from "./studio-contact";
import styles from "./studio-services.module.css";

const services = [
  {
    name: "Mobile app",
    title: "Idemu, selalu dalam genggaman.",
    detail: "Android · iOS",
    image: "/images/studio/mobile-service.webp",
  },
  {
    name: "E-commerce",
    title: "Dari lihat-lihat, sampai checkout.",
    detail: "Katalog · Pembayaran · Pesanan",
    image: "/images/studio/commerce-service.webp",
  },
  {
    name: "AI integrated",
    title: "App yang bisa bantu mikir juga.",
    detail: "Asisten AI · Data · Automasi",
    image: "/images/studio/ai-service.webp",
  },
  {
    name: "Website",
    title: "Ruang digital untuk tumbuh.",
    detail: "Company profile · Landing page",
    image: "/images/studio/website-service.webp",
  },
];

// A second visual set gives the loop enough slides even on wide screens.
// Its links stay out of the tab order and accessibility tree.
const slides = [...services, ...services];

const motionPreference = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(motionPreference);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia(motionPreference).matches;
}

export function StudioServices() {
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    () => true,
  );
  const [carouselRef, carousel] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: true,
    duration: reducedMotion ? 0 : 28,
  });

  function move(direction: -1 | 1) {
    if (direction === -1) carousel?.scrollPrev(!!reducedMotion);
    else carousel?.scrollNext(!!reducedMotion);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        move(-1);
        break;
      case "ArrowRight":
        event.preventDefault();
        move(1);
        break;
      case "Home":
        event.preventDefault();
        carousel?.scrollTo(0, !!reducedMotion);
        break;
      case "End":
        event.preventDefault();
        carousel?.scrollTo(services.length - 1, !!reducedMotion);
        break;
    }
  }

  return (
    <section
      id="proyek"
      aria-labelledby="services-heading"
      className={styles.services}
    >
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="services-heading">App seperti apa yang kamu mau?</h2>
          <p>
            Untuk pelanggan, untuk tim, atau untuk ide barumu.
            <br className={styles.desktopBreak} /> Pilih arahnya, kita wujudkan bareng.
          </p>
        </div>

        <div
          id="studio-services"
          ref={carouselRef}
          className={styles.viewport}
          role="group"
          aria-roledescription="carousel"
          aria-label="Layanan Studio. Gunakan tombol panah kiri dan kanan untuk menggeser."
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <ul className={styles.track}>
            {slides.map((service, index) => (
              <li
                key={`${service.name}-${index}`}
                className={styles.slide}
                aria-hidden={index >= services.length ? true : undefined}
              >
                <a
                  href={STUDIO_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Konsultasi gratis tentang ${service.name}`}
                  className={styles.card}
                  tabIndex={index >= services.length ? -1 : undefined}
                  draggable={false}
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 599px) 82vw, (max-width: 899px) 46vw, (max-width: 1399px) 32vw, 384px"
                    className={styles.image}
                    draggable={false}
                  />
                  <div className={styles.copy}>
                    <span className={styles.category}>{service.name}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.detail}>{service.detail}</span>
                    <span className={styles.cardAction} aria-hidden="true">
                      <ArrowUpRight size={20} strokeWidth={1.75} />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer}>
          <p>
            Punya kebutuhan yang beda?{" "}
            <a href="#konsultasi">Kita obrolin dulu.</a>
          </p>
          <div className={styles.navigation} aria-label="Navigasi layanan">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={styles.navigationButton}
              aria-label="Layanan sebelumnya"
              aria-controls="studio-services"
              disabled={!carousel}
              onClick={() => move(-1)}
            >
              <ArrowLeft size={20} strokeWidth={1.75} aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={styles.navigationButton}
              aria-label="Layanan berikutnya"
              aria-controls="studio-services"
              disabled={!carousel}
              onClick={() => move(1)}
            >
              <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

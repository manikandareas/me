"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import styles from "./studio-about.module.css";

type StudioImagePreviewProps = {
  children: ReactNode;
  image: string;
  alt: string;
  caption: string;
};

export function StudioImagePreview({
  children,
  image,
  alt,
  caption,
}: StudioImagePreviewProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    // Warm the local image cache as the section approaches the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const preview = new window.Image();
        preview.src = image;
        observer.disconnect();
      },
      { rootMargin: "300px" },
    );
    observer.observe(trigger);

    return () => {
      observer.disconnect();
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [image]);

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function changeOpen(next: boolean) {
    cancelClose();
    setOpen(next);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  }

  return (
    <Popover open={open} onOpenChange={changeOpen}>
      <PopoverTrigger asChild>
        <button
          ref={triggerRef}
          type="button"
          className={styles.trigger}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") changeOpen(true);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") scheduleClose();
          }}
          onFocus={(event) => {
            if (event.currentTarget.matches(":focus-visible")) changeOpen(true);
          }}
          onBlur={() => changeOpen(false)}
        >
          {children}
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        sideOffset={12}
        collisionPadding={16}
        hideWhenDetached
        className={styles.preview}
        aria-label={caption}
        onPointerEnter={cancelClose}
        onPointerLeave={scheduleClose}
        onOpenAutoFocus={(event) => event.preventDefault()}
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <figure>
          <Image
            src={image}
            alt={alt}
            width={560}
            height={380}
            unoptimized
            loading="eager"
            className={styles.previewImage}
          />
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
      </PopoverContent>
    </Popover>
  );
}

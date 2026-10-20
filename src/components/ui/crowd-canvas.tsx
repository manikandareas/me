"use client";

import { useEffect, useRef } from "react";

interface CrowdCanvasProps {
  src: string;
  rows?: number;
  cols?: number;
  paused?: boolean;
  className?: string;
}

// Adapted from Skiper UI #39 / Zadvorsky's crowd canvas, with Open Peeps art.
// https://skiper-ui.com/registry/skiper39.json
// Native canvas animation keeps this decorative adaptation dependency-free.
export function CrowdCanvas({ src, rows = 15, cols = 7, paused = false, className }: CrowdCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || rows < 1 || cols < 1) return;

    const image = new Image();
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let visible = false;
    let loaded = false;
    let frame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let width = 0;
    let height = 0;
    let ratio = 1;
    let people: { sprite: number; x: number; scale: number; direction: number; speed: number; depth: number }[] = [];

    function draw() {
      if (!context || !loaded) return;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
      const cellWidth = image.naturalWidth / rows;
      const cellHeight = image.naturalHeight / cols;
      people.forEach((person) => {
        const personHeight = height * person.scale;
        const personWidth = personHeight * cellWidth / cellHeight;
        const span = width + personWidth * 2;
        const x = ((person.x * span + elapsed * person.speed * person.direction) % span + span) % span - personWidth;
        const bounce = motion.matches ? 0 : Math.sin(elapsed * 8 + person.sprite) * 2;
        context.save();
        context.translate(x + (person.direction < 0 ? personWidth : 0), height - personHeight + person.depth + bounce);
        context.scale(person.direction, 1);
        context.drawImage(image, (person.sprite % rows) * cellWidth, Math.floor(person.sprite / rows) * cellHeight, cellWidth, cellHeight, 0, 0, personWidth, personHeight);
        context.restore();
      });
    }

    function tick(time: number) {
      elapsed += previousTime ? Math.min((time - previousTime) / 1000, .05) : 0;
      previousTime = time;
      draw();
      frame = requestAnimationFrame(tick);
    }

    function syncAnimation() {
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (disposed || !loaded) return;
      draw();
      if (!paused && !motion.matches && visible && !document.hidden) frame = requestAnimationFrame(tick);
    }

    function resize() {
      if (!canvas || !loaded || disposed) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      const count = Math.max(5, Math.min(22, Math.round(width / 75)));
      people = Array.from({ length: count }, (_, index) => ({
        sprite: (index * 17 + 9) % (rows * cols),
        x: (index + .5) / count,
        scale: .67 + (index % 3) * .12,
        direction: index % 3 === 0 ? -1 : 1,
        speed: 12 + (index % 5) * 3,
        depth: (index % 3) * 8,
      })).sort((a, b) => a.depth - b.depth);
      syncAnimation();
    }

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    motion.addEventListener("change", syncAnimation);
    document.addEventListener("visibilitychange", syncAnimation);
    image.onload = () => { loaded = true; resize(); };
    image.src = src;

    return () => {
      disposed = true;
      image.onload = null;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motion.removeEventListener("change", syncAnimation);
      document.removeEventListener("visibilitychange", syncAnimation);
    };
  }, [src, rows, cols, paused]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted px-6 text-center text-xs font-medium text-muted-foreground">
        Preview unavailable
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-muted border-b border-border/60">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full cursor-pointer"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              poster={image}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted px-6 text-center text-xs font-medium text-muted-foreground">
              Preview unavailable
            </div>
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2.5 right-2.5 z-10 flex flex-wrap gap-1.5">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs font-medium bg-black/80 hover:bg-black text-white dark:bg-black/80 dark:hover:bg-black dark:text-white backdrop-blur-md border border-white/15 px-2.5 py-0.5 rounded-full shadow-xs transition-transform hover:scale-105"
                  variant="secondary"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-0.5 min-w-0">
              <Link
                href={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-primary transition-colors inline-block"
              >
                <h3 className="font-semibold text-lg sm:text-xl tracking-tight leading-snug">
                  {title}
                </h3>
              </Link>
              <time className="text-xs text-muted-foreground tabular-nums">{dates}</time>
            </div>
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-foreground/30 hover:bg-muted hover:text-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="text-xs sm:text-sm leading-relaxed text-muted-foreground prose prose-sm dark:prose-invert max-w-none prose-p:my-0 prose-p:leading-relaxed line-clamp-3">
            <Markdown>{description}</Markdown>
          </div>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-t border-border/50 pt-3.5 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="h-6 w-fit border-border/60 bg-muted/40 px-2 text-[11px] font-normal text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

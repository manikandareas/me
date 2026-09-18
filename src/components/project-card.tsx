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
      <div className="flex h-full min-h-56 items-center justify-center bg-muted px-6 text-center text-sm font-medium text-muted-foreground">
        Preview unavailable
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full min-h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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
        "group grid h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.45)] md:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.2fr)]",
        className
      )}
    >
      <div className="relative min-h-56 overflow-hidden bg-muted md:col-start-1 md:row-start-1 md:min-h-full">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full min-h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="flex h-full min-h-56 items-center justify-center bg-muted px-6 text-center text-sm font-medium text-muted-foreground">
              Preview unavailable
            </div>
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-col justify-between gap-7 p-5 sm:p-7 md:col-start-2 md:row-start-1">
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 flex-col gap-2">
              <h3 className="truncate text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
              <time className="text-sm tabular-nums text-muted-foreground">{dates}</time>
            </div>
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="prose max-w-[65ch] flex-1 text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert sm:text-base">
            <Markdown>{description}</Markdown>
          </div>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-t border-border/70 pt-4">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="h-7 w-fit border-border bg-transparent px-2.5 text-xs font-medium text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground"
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

import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import { Github, Globe } from "lucide-react";
import type { ComponentProps } from "react";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

export function ProjectLinks({
  website,
  repository,
}: {
  website?: string;
  repository?: string;
}) {
  const linkStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 14px",
    border: "1px solid rgba(128, 128, 128, 0.25)",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        margin: "24px 0",
      }}
    >
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Globe size={16} />
          Visit Website
        </a>
      )}

      {repository && (
        <a
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Github size={16} />
          View Repository
        </a>
      )}
    </div>
  );
}

export const mdxComponents = {
  MediaContainer,
  pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
  hr: (props: ComponentProps<"hr">) => (
    <div className="my-10 flex w-full items-center" {...props}>
      <div
        className="flex-1 h-px bg-border"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      />
    </div>
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 border border-border rounded-xl overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table
          className="m-0! w-full min-w-full border-separate border-spacing-0"
          {...props}
        />
      </div>
    </div>
  ),
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-muted/60 dark:bg-muted/40 text-sm font-mono text-foreground/90"
        {...props}
      >
        {children}
      </code>
    );
  },
  ProjectLinks
} as const;


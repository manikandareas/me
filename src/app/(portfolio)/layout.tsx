import { PortfolioShell } from "@/components/portfolio/portfolio-shell";
import type { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <PortfolioShell>{children}</PortfolioShell>;
}

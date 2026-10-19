import { Geist, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";

const studioFont = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const studioDisplayFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-studio-display",
});

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${studioFont.className} ${studioDisplayFont.variable} min-h-svh bg-background text-foreground antialiased`}
    >
      {children}
    </div>
  );
}

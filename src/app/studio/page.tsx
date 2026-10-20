import { StudioInstitutions } from "@/components/studio/studio-institutions";
import { StudioHero } from "@/components/studio/studio-hero";
import { StudioHeader } from "@/components/studio/studio-header";
import { StudioFooter } from "@/components/studio/studio-footer";
import { StudioAbout } from "@/components/studio/studio-about";
import { StudioServices } from "@/components/studio/studio-services";
import { StudioProcess } from "@/components/studio/studio-sections";
import { StudioContact } from "@/components/studio/studio-consultation";
import type { Metadata } from "next";
import styles from "./studio-page.module.css";

const title = "Studio by Manik";
const description =
  "Website, aplikasi, dan solusi AI sesuai kebutuhanmu. Lihat karya Studio by Manik dan mulai dengan konsultasi gratis.";
const studioUrl = "https://studio.whoismanik.dev";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: studioUrl },
  openGraph: {
    title,
    description,
    url: studioUrl,
    siteName: title,
    type: "website",
  },
  twitter: { title, description },
};

export default function StudioPage() {
  return (
    <>
      <StudioHeader />
      <main aria-labelledby="studio-heading" className={styles.page}>
        <StudioHero />
        <StudioInstitutions />
        <StudioServices />
        <StudioProcess />
        <StudioAbout />
        <StudioContact />
      </main>
      <StudioFooter />
    </>
  );
}

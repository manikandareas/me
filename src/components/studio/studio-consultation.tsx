import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STUDIO_WHATSAPP } from "./studio-contact";
import styles from "./studio-consultation.module.css";

export function StudioContact() {
  return (
    <section id="konsultasi" aria-labelledby="contact-heading" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.content}>
          <h2 id="contact-heading">Ada ide?<br />Ceritain aja dulu.</h2>
          <ol className={styles.conversation} aria-label="Contoh obrolan konsultasi">
            <li className={styles.visitor}><span className="sr-only">Kamu: </span>Aku mau bikin aplikasi, tapi masih bingung mulai dari mana 😅</li>
            <li className={styles.reply}><span className="sr-only">Kami: </span>Boleh, kita obrolin dulu. Aplikasinya mau dipakai buat apa?</li>
            <li className={styles.visitor}><span className="sr-only">Kamu: </span>Buat usahaku. Biar pesanan nggak kecatat manual terus.</li>
          </ol>
          <div className={styles.action}>
            <Button asChild size="lg" className={styles.cta}>
              <a href={STUDIO_WHATSAPP} target="_blank" rel="noopener noreferrer">Konsultasi gratis <ArrowUpRight size={18} aria-hidden="true" /></a>
            </Button>
            <p>Ngobrol dulu, baru putuskan.</p>
          </div>
        </div>
        <div className={styles.artwork}>
          <Image src="/images/studio/consultation.webp" alt="Ilustrasi diskusi ide aplikasi bersama software engineer di ruang kerja yang cerah." fill sizes="(max-width: 800px) 90vw, (max-width: 1440px) 42vw, 560px" />
        </div>
      </div>
    </section>
  );
}

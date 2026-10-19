import { StudioImagePreview } from "./studio-image-preview";
import styles from "./studio-about.module.css";

export function StudioAbout() {
  return (
    <section
      id="tentang-kami"
      aria-labelledby="about-heading"
      className={styles.about}
    >
      <div className={styles.inner}>
        <h2 id="about-heading" className="sr-only">
          Kenapa memilih kami
        </h2>
        <p className={styles.copy}>
          Berbekal{" "}
          <StudioImagePreview
            image="/images/studio/experience-preview.webp"
            alt="Ilustrasi alur pengembangan dari wireframe, penulisan kode, sampai tampilan aplikasi."
            caption="Dari rancangan ke aplikasi."
          >
            4 tahun pengalaman
          </StudioImagePreview>{" "}
          sebagai <strong>Software Engineer</strong>, kami membangun aplikasi yang
          nyaman digunakan dan sesuai kebutuhanmu, lewat{" "}
          <StudioImagePreview
            image="/images/studio/communication-preview.webp"
            alt="Ilustrasi review desain aplikasi dengan catatan feedback dan revisi."
            caption="Ada ruang untuk diskusi dan revisi."
          >
            komunikasi yang terbuka
          </StudioImagePreview>{" "}
          dan{" "}
          <StudioImagePreview
            image="/images/studio/direction-preview.webp"
            alt="Ilustrasi brief yang merangkum kebutuhan, prioritas fitur, dan hasil yang ingin dicapai."
            caption="Kebutuhan, prioritas, dan hasil yang jelas."
          >
            tujuan yang jelas
          </StudioImagePreview>
          .
        </p>
        <blockquote className={styles.belief}>
          <p>
            “Kami percaya aplikasi yang baik dimulai dengan{" "}
            <strong>memahami penggunanya.</strong> Dari desain sampai cara kerjanya,
            tujuannya membantu mereka menyelesaikan sesuatu dengan lebih mudah.”
          </p>
        </blockquote>
      </div>
    </section>
  );
}

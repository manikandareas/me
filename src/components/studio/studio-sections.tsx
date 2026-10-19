import styles from "./studio-sections.module.css";

const steps = [
  {
    number: "I",
    title: "Ceritain idemu.",
    text: "Mulai dari kebutuhan atau masalah yang ingin dibereskan. Konsultasi awal gratis, tanpa perlu presentasi.",
  },
  {
    number: "II",
    title: "Sepakati arahnya.",
    text: "Kita tentukan desain, fitur, biaya, dan timeline. Semuanya jelas sebelum pengerjaan dimulai.",
  },
  {
    number: "III",
    title: "Bangun bertahap.",
    text: "Lihat progres, coba aplikasinya, dan beri feedback. Kita rapikan dan uji sampai siap digunakan.",
  },
  {
    number: "IV",
    title: "Siap diluncurkan.",
    text: "Aplikasimu siap dipakai. Kita bantu proses peluncuran dan jelaskan cara mengelolanya.",
  },
];

export function StudioProcess() {
  return (
    <section
      id="cara-kerja"
      aria-labelledby="process-heading"
      className={styles.process}
    >
      <div className={styles.processInner}>
        <div className={styles.processIntro}>
          <h2 id="process-heading">Cara kita kerja.</h2>
          <p>Dari obrolan pertama sampai aplikasimu siap dipakai.</p>
        </div>
        <ol className={styles.steps} role="list">
          {steps.map((step) => (
            <li key={step.number}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

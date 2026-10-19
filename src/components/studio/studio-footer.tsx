import { STUDIO_WHATSAPP } from "./studio-contact";
import styles from "./studio-footer.module.css";

const columns = [
  {
    title: "Layanan",
    links: [
      { label: "Website", href: "#proyek" },
      { label: "Mobile app", href: "#proyek" },
      { label: "E-commerce", href: "#proyek" },
      { label: "AI integrated", href: "#proyek" },
    ],
  },
  {
    title: "Halaman",
    links: [
      { label: "Tentang kami", href: "#tentang-kami" },
      { label: "Cara kita kerja", href: "#cara-kerja" },
      { label: "Konsultasi gratis", href: "#konsultasi" },
    ],
  },
  {
    title: "Terhubung",
    links: [
      { label: "WhatsApp", href: STUDIO_WHATSAPP },
      { label: "Email", href: "mailto:me@whoismanik.dev" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vitomanik/" },
    ],
  },
  {
    title: "Jelajahi",
    links: [
      { label: "Portofolio", href: "https://whoismanik.dev" },
      { label: "Blog", href: "https://whoismanik.dev/blog" },
      { label: "GitHub", href: "https://github.com/manikandareas" },
    ],
  },
];

export function StudioFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <a href="#konsultasi" className={styles.name}>
              Let’s build.
            </a>
            <p>
              Website, aplikasi, dan solusi AI yang berangkat dari kebutuhanmu.
            </p>
            <span className={styles.copyright}>
              © {new Date().getFullYear()}. Dibangun dengan perhatian.
            </span>
          </div>
          <nav aria-label="Navigasi footer" className={styles.columns}>
            {columns.map((column) => (
              <div key={column.title} className={styles.column}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => {
                    const external = link.href.startsWith("https://");

                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <svg
          className={styles.wordmark}
          viewBox="0 0 1200 280"
          aria-hidden="true"
          focusable="false"
        >
          <text
            x="600"
            y="215"
            textAnchor="middle"
            textLength="1120"
            lengthAdjust="spacingAndGlyphs"
            fontSize="220"
            fontWeight="600"
            stroke="currentColor"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          >
            Let’s build.
          </text>
        </svg>
      </div>
    </footer>
  );
}

import styles from "./studio-header.module.css";

const links = [
  { label: "Home", href: "#beranda" },
  { label: "Layanan", href: "#proyek" },
  { label: "Proses", href: "#cara-kerja" },
  { label: "Tentang", href: "#tentang-kami" },
  { label: "Kontak", href: "#konsultasi" },
];

export function StudioHeader() {
  return (
    <header className={styles.header}>
      <nav aria-label="Navigasi utama" className={styles.navigation}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

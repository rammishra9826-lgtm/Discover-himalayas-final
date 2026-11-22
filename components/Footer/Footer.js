import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SITE } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.top}>
          {/* Left: logo + descriptor + copyright + credit */}
          <div className={styles.brandCol}>
            <span className={styles.logoBlock}>
              <Image
                src="/logo/logo-foot.svg"
                alt={SITE.name}
                width={440}
                height={110}
                className={styles.logo}
              />
              <span className={styles.descriptor}>
                Guided journeys across India.<br />
                In the Himalaya since 1994.
              </span>
            </span>
            <span>
              © {new Date().getFullYear()} {SITE.name}, Naggar, Himachal Pradesh.
            </span>
            <span className={styles.credit}>
              Website developer:{" "}
              <a href="mailto:rammishra9826@gmail.com">Puneet Mishra</a>
            </span>
          </div>

          {/* Right: contact */}
          <div className={styles.contact}>
            {SITE.addressOneLine}
            <br />
            <a href={SITE.phoneHref}>{SITE.phone}</a> ·{" "}
            <a href={SITE.whatsapp}>WhatsApp</a> ·{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>

        {/* Bottom: links, banner ke www.discover-himalayas.com ke neeche */}
        <nav className={styles.links} aria-label="Footer">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
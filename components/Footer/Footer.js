"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SITE } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const [done, setDone] = useState(false);

  // TODO: connect to a newsletter service (Mailchimp, Brevo, Resend...) when the client picks one.
  const onSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.brandCol}>
          <span className={styles.logoBlock}>
            <Image src="/logo/logo-foot.svg" alt={SITE.name} width={440} height={110} className={styles.logo} />
            <span className={styles.descriptor}>
              Guided journeys across India.<br />In the Himalaya since 1994.
            </span>
          </span>
          <span>© {new Date().getFullYear()} {SITE.name}, Naggar, Himachal Pradesh.</span>
          <span className={styles.credit}>
            Website developer:{" "}
            <a href="mailto:rammishra9826@gmail.com">Puneet Mishra</a>
          </span>
        </div>

        <div className={styles.contact}>
          {SITE.addressOneLine}
          <br />
          <a href={SITE.phoneHref}>{SITE.phone}</a> · <a href={SITE.whatsapp}>WhatsApp</a> ·{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>

        <form className={styles.news} onSubmit={onSubmit}>
          <label htmlFor="nl">Journey dates and news, a few times a year</label>
          <span>
            <input id="nl" type="email" required placeholder="Your email" />
            <button className="btn" type="submit">{done ? "Thank you" : "Sign up"}</button>
          </span>
        </form>

        <div className={styles.links}>
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
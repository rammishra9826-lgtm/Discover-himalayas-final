"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV, SITE } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className={styles.nav} aria-label="Main">
      <div className={`wrap ${styles.row}`}>
        <Link href="/" className={styles.brand} aria-label={`${SITE.name} home`}>
          <Image src="/logo/logo-nav.svg" alt={SITE.name} width={165} height={40} priority className={styles.logo} />
        </Link>

        <button
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul id="menu" className={`${styles.list} ${open ? styles.open : ""}`}>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.link} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
                {isActive(item.href) && <motion.span layoutId="nav-underline" className={styles.underline} />}
              </Link>
            </li>
          ))}
          <li className={styles.lang} aria-label="Language">
            <span className={styles.langOn} aria-current="true">EN</span>
            <span aria-disabled="true" title="German version coming">DE</span>
            <span aria-disabled="true" title="Dutch version coming">NL</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

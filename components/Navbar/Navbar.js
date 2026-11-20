"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV, SITE } from "@/data/site";
import styles from "./Navbar.module.css";

/** Smoothly scrolls the page to `target` (px) with easing. Works regardless of CSS / OS settings. */
function smoothScrollTo(target = 0) {
  const start = window.scrollY;
  const distance = target - start;
  if (Math.abs(distance) < 2) return;

  // longer pages take a bit longer, but never less than 0.7s or more than 1.6s
  const duration = Math.min(1600, Math.max(700, Math.abs(distance) * 0.35));
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  let startTime = null;
  let rafId = null;

  const stop = () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
  };

  // if the user scrolls by hand while animating, stop immediately
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);

  const step = (now) => {
    if (startTime === null) startTime = now;
    const t = Math.min(1, (now - startTime) / duration);
    // "instant" so the CSS scroll-behavior doesn't smooth every frame a second time
    window.scrollTo({ top: start + distance * easeInOutCubic(t), behavior: "instant" });
    if (t < 1) rafId = requestAnimationFrame(step);
    else stop();
  };
  rafId = requestAnimationFrame(step);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  // close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  // shrink + glass effect once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // if the window becomes wide again, make sure the mobile menu is closed
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1181px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // while the mobile menu is open: lock page scroll, Esc closes it
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");

  // logo tap on home page -> animated scroll to top (no instant jump)
  const onLogoClick = (e) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      smoothScrollTo(0);
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="Main">
      {/* dims the page behind the mobile menu */}
      <div className={`${styles.scrim} ${open ? styles.scrimOn : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />

      <div className={`wrap ${styles.row}`}>
        <Link href="/" className={styles.brand} aria-label={`${SITE.name} home`} onClick={onLogoClick}>
          <Image src="/logo/logo-nav.svg" alt={SITE.name} width={165} height={40} priority className={styles.logo} />
        </Link>

        <button
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <ul id="menu" className={`${styles.list} ${open ? styles.open : ""}`} onMouseLeave={() => setHovered(null)}>
          {NAV.map((item, i) => (
            <li key={item.href} style={{ "--i": i }} onMouseEnter={() => setHovered(item.href)}>
              <Link href={item.href} className={styles.link} aria-current={isActive(item.href) ? "page" : undefined}>
                {hovered === item.href && (
                  <motion.span
                    layoutId="nav-hover"
                    className={styles.hoverPill}
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                  />
                )}
                {item.label}
                {isActive(item.href) && <motion.span layoutId="nav-underline" className={styles.underline} />}
              </Link>
            </li>
          ))}

          <li className={styles.lang} style={{ "--i": NAV.length }} aria-label="Language">
            <span className={styles.langOn} aria-current="true">EN</span>
            <span aria-disabled="true" title="German version coming">DE</span>
            <span aria-disabled="true" title="Dutch version coming">NL</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
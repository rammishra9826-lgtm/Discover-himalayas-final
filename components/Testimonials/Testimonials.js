"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./Testimonials.module.css";

function Stars({ n, className }) {
  if (!n) return null;
  return (
    <span className={className} role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Testimonial cards (3 visible at a time, scroll/arrows for the rest)
 * + fullscreen lightbox: photo zooms in, the full review sits under it.
 * items: [{ id, name, country, trip?, photo, review: string[] }]
 */
export default function Testimonials({ items }) {
  const [open, setOpen] = useState(null);
  const [closing, setClosing] = useState(false);
  const [active, setActive] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });

  const railRef = useRef(null);
  const trackRef = useRef(null);
  const lastCard = useRef(null);
  const closingRef = useRef(false);
  const startIndex = useRef(0);

  const count = items.length;
  const isOpen = open !== null;

  const reduced = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- card rail ---------- */
  const updateEdge = useCallback(() => {
    const r = railRef.current;
    if (!r) return;
    setEdge({
      start: r.scrollLeft <= 4,
      end: r.scrollLeft + r.clientWidth >= r.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    updateEdge();
    window.addEventListener("resize", updateEdge);
    return () => window.removeEventListener("resize", updateEdge);
  }, [updateEdge]);

  const slideRail = (dir) => {
    const r = railRef.current;
    if (!r) return;
    const card = r.firstElementChild;
    const gap = parseFloat(getComputedStyle(r).columnGap) || 0;
    const step = card ? card.getBoundingClientRect().width + gap : r.clientWidth;
    r.scrollBy({ left: dir * step * (window.innerWidth > 860 ? 3 : 1), behavior: reduced() ? "auto" : "smooth" });
  };

  /* ---------- lightbox ---------- */
  const openAt = (index, el) => {
    lastCard.current = el;
    startIndex.current = index;
    closingRef.current = false;
    setActive(index);
    setClosing(false);
    setOpen(index);
  };

  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    setTimeout(() => {
      setOpen(null);
      setClosing(false);
      closingRef.current = false;
      lastCard.current?.focus();
    }, 220);
  }, []);

  const goTo = useCallback(
    (i) => {
      const t = trackRef.current;
      if (!t || count === 0) return;
      const next = Math.max(0, Math.min(count - 1, i));
      t.scrollTo({ left: next * t.clientWidth, behavior: reduced() ? "auto" : "smooth" });
    },
    [count]
  );

  useLayoutEffect(() => {
    if (!isOpen) return;
    const t = trackRef.current;
    if (t) t.scrollTo({ left: startIndex.current * t.clientWidth, behavior: "instant" });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") goTo(active + 1);
      else if (e.key === "ArrowLeft") goTo(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, active, close, goTo]);

  const onTrackScroll = (e) => {
    const t = e.currentTarget;
    const i = Math.round(t.scrollLeft / t.clientWidth);
    if (i !== active && i >= 0 && i < count) setActive(i);
  };

  const who = (t) => [t.name, t.country].filter(Boolean).join(", ");

  return (
    <>
      <div className={styles.wrap}>
        <div ref={railRef} className={styles.rail} onScroll={updateEdge}>
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              className={styles.card}
              onClick={(e) => openAt(i, e.currentTarget)}
              aria-label={`Read the full review from ${who(t)}`}
            >
              <span className={styles.avatar}>
                <Image
                  src={t.photo}
                  alt={`${t.name}, ${t.country}`}
                  fill
                  sizes="96px"
                  className={styles.avatarImg}
                />
              </span>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.meta}>
                {t.country}
                {t.trip ? ` · ${t.trip}` : ""}
              </span>
              <Stars n={t.rating} className={styles.stars} />
              <span className={styles.excerpt}>“{t.review[0]}”</span>
              <span className={styles.more}>Read full review</span>
            </button>
          ))}
        </div>

        <div className={styles.nav}>
          <button type="button" className={styles.navBtn} onClick={() => slideRail(-1)} disabled={edge.start} aria-label="Previous reviews">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" className={styles.navBtn} onClick={() => slideRail(1)} disabled={edge.end} aria-label="Next reviews">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div
            className={`${styles.overlay} ${closing ? styles.closing : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Rider reviews"
          >
            <div className={styles.top}>
              <span className={styles.counter}>
                {active + 1} / {count}
              </span>
              <button type="button" className={styles.close} onClick={close} aria-label="Close reviews">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>

            <div className={styles.stage}>
              <div ref={trackRef} className={styles.track} onScroll={onTrackScroll}>
                {items.map((t, i) => (
                  <div
                    key={t.id}
                    className={styles.slide}
                    onClick={(e) => e.target === e.currentTarget && close()}
                  >
                    <figure className={styles.panel}>
                      <div className={styles.zoom}>
                        <Image
                          src={t.photo}
                          alt={`${t.name}, ${t.country}`}
                          fill
                          sizes="(max-width: 700px) 100vw, 340px"
                          className={styles.full}
                          priority={i === startIndex.current}
                        />
                      </div>
                      <figcaption className={styles.review}>
                        <h3 className={styles.rName}>{t.name}</h3>
                        <p className={styles.rMeta}>
                          {t.country}
                          {t.trip ? ` · ${t.trip}` : ""}
                        </p>
                        <Stars n={t.rating} className={styles.rStars} />
                        <div className={styles.rBody}>
                          {t.review.map((p, k) => (
                            <p key={k} className={styles.rText}>
                              {k === 0 ? "“" : ""}
                              {p}
                              {k === t.review.length - 1 ? "”" : ""}
                            </p>
                          ))}
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>

              <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous review">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => goTo(active + 1)} disabled={active === count - 1} aria-label="Next review">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
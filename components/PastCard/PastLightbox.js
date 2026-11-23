"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./PastLightbox.module.css";

/**
 * Fullscreen photo viewer for Past journeys.
 * photos: array of image paths, startIndex: konsi photo se khule, onClose: band hone par call hota hai
 */
export default function PastLightbox({ photos, startIndex = 0, title = "", onClose }) {
  const [active, setActive] = useState(startIndex);
  const [closing, setClosing] = useState(false);

  const trackRef = useRef(null);
  const stripRef = useRef(null);
  const thumbRefs = useRef([]);
  const closingRef = useRef(false);
  const count = photos.length;

  const reduced = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    setTimeout(onClose, 220);
  }, [onClose]);

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track || count === 0) return;
      const next = Math.max(0, Math.min(count - 1, i));
      track.scrollTo({ left: next * track.clientWidth, behavior: reduced() ? "auto" : "smooth" });
    },
    [count]
  );

  // khulte hi seedha clicked photo par jao
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollLeft = startIndex * track.clientWidth;
  }, [startIndex]);

  // page scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") goTo(active + 1);
      else if (e.key === "ArrowLeft") goTo(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, goTo]);

  // active thumbnail ko beech me rakho
  useEffect(() => {
    const strip = stripRef.current;
    const el = thumbRefs.current[active];
    if (!strip || !el) return;
    strip.scrollTo({
      left: el.offsetLeft - strip.clientWidth / 2 + el.clientWidth / 2,
      behavior: reduced() ? "auto" : "smooth",
    });
  }, [active]);

  const onTrackScroll = (e) => {
    const t = e.currentTarget;
    const i = Math.round(t.scrollLeft / t.clientWidth);
    if (i !== active && i >= 0 && i < count) setActive(i);
  };

  return createPortal(
    <div
      className={`${styles.overlay} ${closing ? styles.closing : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos`}
    >
      <div className={styles.top}>
        <span className={styles.counter}>
          {active + 1} / {count}
        </span>
        <span className={styles.title}>{title}</span>
        <button type="button" className={styles.close} onClick={close} aria-label="Close photos">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div className={styles.stage}>
        <div ref={trackRef} className={styles.track} onScroll={onTrackScroll}>
          {photos.map((src, i) => (
            <div
              key={src}
              className={styles.slide}
              onClick={(e) => e.target === e.currentTarget && close()}
            >
              <div className={styles.slideInner}>
                <Image
                  src={src}
                  alt={`${title} photo ${i + 1}`}
                  fill
                  sizes="100vw"
                  className={styles.full}
                  priority={i === startIndex}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => goTo(active + 1)}
          disabled={active === count - 1}
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div ref={stripRef} className={styles.thumbs}>
        {photos.map((src, i) => (
          <button
            key={src}
            ref={(el) => (thumbRefs.current[i] = el)}
            type="button"
            className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === active}
          >
            <Image src={src} alt="" fill sizes="96px" className={styles.thumbImg} />
          </button>
        ))}
      </div>
    </div>,
    document.body
  );
}
"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import MediaFrame from "./MediaFrame";
import styles from "./Gallery.module.css";

/**
 * Home gallery grid + fullscreen lightbox.
 * items: [{ src, label, ratio, sizes }]  (src can be null -> placeholder, not clickable)
 */
export default function Gallery({ items }) {
  const [open, setOpen] = useState(null); // index inside `slides`
  const [closing, setClosing] = useState(false);
  const [active, setActive] = useState(0);

  const trackRef = useRef(null);
  const stripRef = useRef(null);
  const thumbRefs = useRef([]);
  const lastTile = useRef(null);
  const closingRef = useRef(false);
  const startIndex = useRef(0);

  const slides = items.filter((i) => i.src);
  const count = slides.length;
  const isOpen = open !== null;

  const reduced = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const openAt = (index, el) => {
    lastTile.current = el;
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
      lastTile.current?.focus();
    }, 220);
  }, []);

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track || count === 0) return;
      const next = Math.max(0, Math.min(count - 1, i));
      track.scrollTo({ left: next * track.clientWidth, behavior: reduced() ? "auto" : "smooth" });
    },
    [count]
  );

  // jump straight to the tapped photo when the lightbox opens
  useLayoutEffect(() => {
    if (!isOpen) return;
    const track = trackRef.current;
    if (track) track.scrollTo({ left: startIndex.current * track.clientWidth, behavior: "instant" });
  }, [isOpen]);

  // lock page scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // keyboard
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

  // keep the active thumbnail centred in the strip
  useEffect(() => {
    if (!isOpen) return;
    const strip = stripRef.current;
    const el = thumbRefs.current[active];
    if (!strip || !el) return;
    strip.scrollTo({
      left: el.offsetLeft - strip.clientWidth / 2 + el.clientWidth / 2,
      behavior: reduced() ? "auto" : "smooth",
    });
  }, [active, isOpen]);

  const onTrackScroll = (e) => {
    const t = e.currentTarget;
    const i = Math.round(t.scrollLeft / t.clientWidth);
    if (i !== active && i >= 0 && i < count) setActive(i);
  };

  return (
    <>
      <div className={styles.gallery}>
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            className={styles.tile}
            disabled={!it.src}
            aria-label={it.label ? `Open photo: ${it.label}` : "Open photo"}
            onClick={(e) => openAt(slides.indexOf(it), e.currentTarget)}
          >
            <MediaFrame
              src={it.src}
              label={it.label}
              ratio={it.ratio}
              sizes={it.sizes}
              style={{ height: "100%" }}
            />
          </button>
        ))}
      </div>

      {isOpen &&
        createPortal(
          <div
            className={`${styles.overlay} ${closing ? styles.closing : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery"
          >
            <div className={styles.top}>
              <span className={styles.counter}>
                {active + 1} / {count}
              </span>
              <button type="button" className={styles.close} onClick={close} aria-label="Close gallery">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className={styles.stage}>
              <div ref={trackRef} className={styles.track} onScroll={onTrackScroll}>
                {slides.map((s, i) => (
                  <div
                    key={s.src}
                    className={styles.slide}
                    onClick={(e) => e.target === e.currentTarget && close()}
                  >
                    <div className={styles.slideInner}>
                      <Image
                        src={s.src}
                        alt={s.label ?? ""}
                        fill
                        sizes="100vw"
                        className={styles.full}
                        priority={i === startIndex.current}
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

            <p className={styles.caption}>{slides[active]?.label}</p>

            <div ref={stripRef} className={styles.thumbs}>
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  ref={(el) => (thumbRefs.current[i] = el)}
                  type="button"
                  className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Show photo ${i + 1}`}
                  aria-current={i === active}
                >
                  <Image src={s.src} alt="" fill sizes="96px" className={styles.full} />
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
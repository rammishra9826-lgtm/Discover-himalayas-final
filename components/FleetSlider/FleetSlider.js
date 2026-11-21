"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./FleetSlider.module.css";

/**
 * Photo slider with left / right buttons, dots, touch swipe and arrow-key support.
 * slides: [{ src, label }]
 * aspect: CSS aspect-ratio on desktop, e.g. "21 / 9" (phones use a taller shape, see the CSS)
 */
export default function FleetSlider({
  slides = [],
  aspect = "21 / 9",
  sizes = "(max-width: 1228px) calc(100vw - 48px), 1180px",
}) {
  const trackRef = useRef(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const count = slides.length;

  const reduced = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // go to slide i; going past the last photo wraps to the first (and the other way round)
  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track || count === 0) return;
      const next = (i + count) % count;
      track.scrollTo({ left: next * track.clientWidth, behavior: reduced() ? "auto" : "smooth" });
    },
    [count]
  );

  // keep the dots in sync while the person swipes or scrolls
  const onScroll = (e) => {
    const t = e.currentTarget;
    const i = Math.max(0, Math.min(count - 1, Math.round(t.scrollLeft / t.clientWidth)));
    if (i !== activeRef.current) {
      activeRef.current = i;
      setActive(i);
    }
  };

  // if the window is resized, stay on the same photo
  useEffect(() => {
    const onResize = () => {
      const track = trackRef.current;
      if (track) track.scrollTo({ left: activeRef.current * track.clientWidth, behavior: "auto" });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(activeRef.current - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(activeRef.current + 1);
    }
  };

  if (count === 0) return null;

  return (
    <div
      className={styles.wrap}
      style={{ "--a": aspect }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of the fleet"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div ref={trackRef} className={styles.track} onScroll={onScroll}>
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={styles.slide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <Image
              src={s.src}
              alt={s.label ?? ""}
              fill
              sizes={sizes}
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              className={styles.img}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            onClick={() => goTo(active - 1)}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={() => goTo(active + 1)}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className={styles.dots} role="tablist" aria-label="Choose a photo">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show photo ${i + 1}`}
                className={`${styles.dot} ${i === active ? styles.dotOn : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./RotatingMedia.module.css";

/**
 * Slideshow: the next photo slides in from the right while the current one
 * slides out to the left. Auto-advances, pauses on mouse hover.
 * slides: [{ src, label }]
 */
export default function RotatingMedia({
  slides = [],
  interval = 8000,
  flat = false,
  sizes = "(max-width: 860px) 100vw, 50vw",
  className = "",
  style,
}) {
  const [pos, setPos] = useState({ active: 0, prev: -1 });
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const goTo = useCallback((next) => {
    setPos((p) => (p.active === next ? p : { active: next, prev: p.active }));
  }, []);

  // the timer restarts whenever the active slide changes (also after a dot click)
  useEffect(() => {
    if (count < 2 || paused) return;
    const id = setTimeout(() => goTo((pos.active + 1) % count), interval);
    return () => clearTimeout(id);
  }, [pos.active, paused, count, interval, goTo]);

  if (count === 0) return null;

  return (
    <div
      className={[styles.wrap, flat && styles.flat, className].filter(Boolean).join(" ")}
      style={style}
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => {
        const state = i === pos.active ? styles.current : i === pos.prev ? styles.leaving : "";
        return (
          <div
            key={s.src}
            className={`${styles.slide} ${state}`}
            aria-hidden={i !== pos.active}
          >
            <Image
              src={s.src}
              alt={s.label ?? ""}
              fill
              sizes={sizes}
              loading="eager"
              className={styles.img}
            />
          </div>
        );
      })}

      {count > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Photo slideshow">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === pos.active}
              aria-label={`Show photo ${i + 1}`}
              className={`${styles.dot} ${i === pos.active ? styles.dotOn : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
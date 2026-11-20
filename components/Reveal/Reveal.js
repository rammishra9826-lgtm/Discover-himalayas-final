"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

/**
 * Scroll reveal: fades + slides its children in once, when they enter the viewport.
 * direction: "up" | "left" | "right" | "none"
 * delay: ms (use it to stagger cards in a grid)
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, styles[direction], shown && styles.shown, className]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
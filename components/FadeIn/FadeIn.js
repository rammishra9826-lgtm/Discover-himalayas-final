"use client";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.2, 0.7, 0.2, 1];

/** Soft reveal when a block scrolls into view. Skipped for people who prefer reduced motion. */
export default function FadeIn({
  children,
  delay = 0,
  y = 40,
  direction = "up", // "up" | "down" | "left" | "right" | "none"
  scale = 1,        // e.g. 0.96 for a subtle zoom-in
  duration = 0.8,
  once = true,
  className,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const from = {
    up: { y },
    down: { y: -y },
    left: { x: y },
    right: { x: -y },
    none: {},
  }[direction];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, scale, ...from }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
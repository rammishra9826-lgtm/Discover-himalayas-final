"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import styles from "./PageHero.module.css";

/**
 * Full-width photo/video header used on every inner page.
 * kicker = small line above the title, lead = paragraph under it, children = buttons.
 * The media stays fixed in size and position; only the text fades and lifts slightly on scroll.
 */
export default function PageHero({
  src,
  video = false,
  label,
  ratio = "16:9",
  kicker,
  title,
  titleMax,
  titleSize,
  lead,
  meta,
  height = "min(60vh, 520px)",
  children,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const copyY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const anim = reduce
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] } };

  return (
    <header ref={ref} className={styles.hero} style={{ "--h": height }}>
      <MediaFrame fill flat priority src={src} label={label} ratio={ratio} video={video} labelTop sizes="100vw" />
      <div className={styles.shade} />
      <motion.div className={styles.copy} style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}>
        <motion.div className="wrap" {...anim}>
          {kicker && <div className={styles.kicker}>{kicker}</div>}
          <h1 className={styles.title} style={{ maxWidth: titleMax, fontSize: titleSize }}>{title}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
          {meta && <div className={styles.meta}>{meta}</div>}
          {children && <div className={styles.cta}>{children}</div>}
        </motion.div>
      </motion.div>
    </header>
  );
}
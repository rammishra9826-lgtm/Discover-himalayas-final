"use client";
import { motion, useReducedMotion } from "framer-motion";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import styles from "./PageHero.module.css";

/**
 * Full-width photo/video header used on every inner page.
 * kicker = small line above the title, lead = paragraph under it, children = buttons.
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
  const anim = reduce
    ? {}
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" } };

  return (
    <header className={styles.hero} style={{ "--h": height }}>
      <MediaFrame fill flat priority src={src} label={label} ratio={ratio} video={video} labelTop sizes="100vw" />
      <div className={styles.shade} />
      <div className={styles.copy}>
        <motion.div className="wrap" {...anim}>
          {kicker && <div className={styles.kicker}>{kicker}</div>}
          <h1 className={styles.title} style={{ maxWidth: titleMax, fontSize: titleSize }}>{title}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
          {meta && <div className={styles.meta}>{meta}</div>}
          {children && <div className={styles.cta}>{children}</div>}
        </motion.div>
      </div>
    </header>
  );
}

"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import styles from "./PageHero.module.css";

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
  aspect,            // NEW: e.g. "3 / 2" -> hero takes the photo's real shape (no crop)
  position,          // NEW: e.g. "center 60%" -> which part stays visible if some crop happens
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

  const heroStyle = aspect ? { "--a": aspect } : { "--h": height };

  return (
    <header
      ref={ref}
      className={`${styles.hero} ${aspect ? styles.byAspect : ""}`}
      style={heroStyle}
    >
      <MediaFrame
        fill
        flat
        priority
        src={src}
        label={label}
        ratio={ratio}
        video={video}
        labelTop
        sizes="100vw"
        objectPosition={position}
      />
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
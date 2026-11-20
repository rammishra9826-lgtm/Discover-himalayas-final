import Image from "next/image";
import styles from "./MediaFrame.module.css";

/**
 * One component for every photo / video slot on the site.
 *  - src given  -> shows the real image (or <video> for .mp4/.webm)
 *  - src empty  -> shows a grey placeholder with the caption (label)
 * Paths come from data/images.js.
 */
export default function MediaFrame({
  src,
  alt,
  label,
  ratio,
  video = false,       // show a play icon on the placeholder
  aspect,              // CSS aspect-ratio, e.g. "3 / 2"
  tone = "default",    // placeholder colour: default | warm | green | stone
  labelTop = false,    // put the caption at the top-left (used on heroes)
  fill = false,        // stretch to cover the parent (heroes)
  flat = false,        // no rounded corners
  priority = false,
  objectPosition,      // NEW: e.g. "center 60%" -> which part of the photo stays visible
  sizes = "(max-width: 860px) 100vw, 50vw",
  className = "",
  style,
  children,
}) {
  const isVideo = src && /\.(mp4|webm)$/i.test(src);
  const cls = [
    styles.frame,
    styles[tone],
    fill && styles.fill,
    flat && styles.flat,
    video && !src && styles.video,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mediaStyle = objectPosition ? { objectPosition } : undefined;

  return (
    <div
      className={cls}
      style={{ aspectRatio: aspect, ...style }}
      {...(!src && label ? { role: "img", "aria-label": label } : {})}
    >
      {src ? (
        isVideo ? (
          <video
            className={styles.media}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            style={mediaStyle}
          />
        ) : (
          <Image
            className={styles.media}
            src={src}
            alt={alt ?? label ?? ""}
            fill
            sizes={sizes}
            priority={priority}
            style={mediaStyle}
          />
        )
      ) : (
        <>
          {label && <span className={`${styles.lbl} ${labelTop ? styles.lblTop : ""}`}>{label}</span>}
          {ratio && <span className={styles.ratio}>{ratio}</span>}
        </>
      )}
      {children}
    </div>
  );
}
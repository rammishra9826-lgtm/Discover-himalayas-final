"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./VideoThumb.module.css";

const CLOSE_MS = 240; // keep in sync with the closing animation in the CSS

/** Pulls the 11-character video id out of any normal YouTube link. */
function getYouTubeId(url = "") {
  const m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

/** Thumbnail with a play button. Tapping it opens the YouTube video in a small 16:9 popup. */
export default function VideoThumb({ src, video, label = "Video", sizes = "150px" }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const id = getYouTubeId(video);

  // play the closing animation first, then remove the popup (this also stops the video)
  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, CLOSE_MS);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className={styles.thumb}
        onClick={() => id && setOpen(true)}
        aria-label="Play video"
        disabled={!id}
      >
        {src && <Image src={src} alt="" fill sizes={sizes} className={styles.img} />}
        <span className={styles.play} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
        <span className={styles.label}>{label}</span>
      </button>

      {open &&
        createPortal(
          <div
            className={`${styles.overlay} ${closing ? styles.out : ""}`}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Journey video"
          >
            <div className={styles.player} onClick={(e) => e.stopPropagation()}>
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                title="Journey video"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
            <button type="button" className={styles.close} onClick={close} aria-label="Close video">
              ✕
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
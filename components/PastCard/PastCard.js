"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import { TOURS } from "@/data/tours";
import { IMAGES } from "@/data/images";
import styles from "./PastCard.module.css";

/** YouTube link (youtu.be / watch?v= / embed / shorts) se video ID nikalta hai. */
function getYouTubeId(url) {
  if (!url) return null;
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/
  );
  return m ? m[1] : null;
}

/** One past departure on /past-journeys. */
export default function PastCard({ item, index }) {
  const t = TOURS[item.tour];
  const videoId = getYouTubeId(item.video);
  const [open, setOpen] = useState(false);       // panel DOM mein hai ya nahi
  const [closing, setClosing] = useState(false); // band hone ki animation chal rahi hai

  const openPanel = () => {
    setClosing(false);
    setOpen(true);
  };
  const closePanel = () => setClosing(true);

  // Esc se band + panel khula ho to page scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setClosing(true);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Panel ki slide-out animation khatam hone par hi hatao
  const onPanelAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (closing) {
      setOpen(false);
      setClosing(false);
    }
  };

  return (
    <article className={styles.pcard}>
      <Link href={`/journeys/${item.tour}`} className={styles.main}>
        <MediaFrame aspect="16 / 10" tone={index % 2 ? "warm" : "default"} label="Group photo" src={IMAGES.past.groups[index]} alt={`${t.name}, ${item.when}`} />
      </Link>
      <div className={styles.meta}>
        <div className={styles.when}>{item.when}</div>
        <h3><Link href={`/journeys/${item.tour}`}>{t.name}</Link></h3>
        <div className={styles.who}>{item.riders}</div>
      </div>

      <div className={styles.strip}>
        {videoId ? (
          <button
            type="button"
            className={styles.thumb}
            onClick={openPanel}
            aria-label={`Play video: ${t.name}, ${item.when}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className={styles.thumbImg}
            />
            
            <span className={styles.thumbLabel}>Video</span>
          </button>
        ) : (
          <MediaFrame aspect="1 / 1" video label="Video" />
        )}
        <MediaFrame aspect="1 / 1" label="Road" />
        <MediaFrame aspect="1 / 1" label="Camp" />
        <MediaFrame aspect="1 / 1" label="Pass" />
      </div>
      <p className={styles.note}>{item.note}</p>

      {open && videoId && (
        <div
          className={`${styles.overlay} ${closing ? styles.overlayOut : ""}`}
          onClick={closePanel}
        >
          <aside
            className={`${styles.panel} ${closing ? styles.panelOut : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={`${t.name} video`}
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={onPanelAnimationEnd}
          >
            <button
              type="button"
              className={styles.close}
              onClick={closePanel}
              aria-label="Close video"
            >
              ✕
            </button>

            <div className={styles.player}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={`${t.name}, ${item.when}`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>

            <div className={styles.panelInfo}>
              <div className={styles.when}>{item.when}</div>
              <h3 className={styles.panelTitle}>{t.name}</h3>
              <div className={styles.who}>{item.riders}</div>
              <p className={styles.panelNote}>{item.note}</p>
              <a
                className={styles.ytLink}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube ↗
              </a>
              <Link href={`/journeys/${item.tour}`} className={styles.tourLink}>
                View this journey →
              </Link>
            </div>
          </aside>
        </div>
      )}
    </article>
  );
}
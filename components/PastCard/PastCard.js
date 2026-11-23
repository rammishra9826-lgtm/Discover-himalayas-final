"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import PastLightbox from "./PastLightbox";
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
  const [open, setOpen] = useState(false);       // video panel DOM mein hai ya nahi
  const [closing, setClosing] = useState(false); // video panel band hone ki animation
  const [lightbox, setLightbox] = useState(null); // null = band, number = photo index

  // is departure ki photos (data/images.js -> IMAGES.past.photos)
  const photos = (IMAGES.past.photos?.[index] ?? []).filter(Boolean);
  const hasPhotos = photos.length > 0;
  const extra = Math.max(0, photos.length - 4); // chhoti strip me jo photos nahi dikh rahi

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

  const mainSrc = photos[0] ?? IMAGES.past.groups[index];
  const mainFrame = (
    <MediaFrame
      aspect="16 / 10"
      tone={index % 2 ? "warm" : "default"}
      label="Group photo"
      src={mainSrc}
      alt={`${t.name}, ${item.when}`}
    />
  );

  return (
    <article className={styles.pcard}>
      {/* Badi photo: click par photos khulti hain */}
      {hasPhotos ? (
        <button
          type="button"
          className={styles.photoBtn}
          onClick={() => setLightbox(0)}
          aria-label={`Open photos: ${t.name}, ${item.when}`}
        >
          {mainFrame}
        </button>
      ) : (
        <div className={styles.main}>{mainFrame}</div>
      )}

      {/* Title: click par journeys page */}
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

        {hasPhotos ? (
          [1, 2, 3].map((n) =>
            photos[n] ? (
              <button
                key={n}
                type="button"
                className={styles.photoThumb}
                onClick={() => setLightbox(n)}
                aria-label={
                  n === 3 && extra > 0
                    ? `Open all ${photos.length} photos`
                    : `Open photo ${n + 1}`
                }
              >
                <MediaFrame
                  fill
                  src={photos[n]}
                  alt={`${t.name} photo ${n + 1}`}
                  sizes="(max-width: 860px) 25vw, 12vw"
                />
                {n === 3 && extra > 0 && <span className={styles.more}>+{extra}</span>}
              </button>
            ) : (
              <MediaFrame key={n} aspect="1 / 1" label={["", "Road", "Camp", "Pass"][n]} />
            )
          )
        ) : (
          <>
            <MediaFrame aspect="1 / 1" label="Road" />
            <MediaFrame aspect="1 / 1" label="Camp" />
            <MediaFrame aspect="1 / 1" label="Pass" />
          </>
        )}
      </div>
      <p className={styles.note}>{item.note}</p>

      {/* Photo lightbox */}
      {lightbox !== null && hasPhotos && (
        <PastLightbox
          photos={photos}
          startIndex={lightbox}
          title={`${t.name} · ${item.when}`}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Video panel */}
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
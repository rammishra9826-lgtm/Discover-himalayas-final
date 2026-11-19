import Link from "next/link";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import StatusTag from "@/components/StatusTag/StatusTag";
import { TOURS, LOWLAND_REGIONS } from "@/data/tours";
import { IMAGES } from "@/data/images";
import { GRADE, eur, num, altLabel } from "@/data/site";
import styles from "./UpcomingCard.module.css";

const TONES = ["default", "warm", "green"];

/** Big journey block on /journeys: photos on the left, details + departures on the right. */
export default function UpcomingCard({ id, index = 0 }) {
  const t = TOURS[id];
  const img = IMAGES.tours[id] ?? {};
  const low = LOWLAND_REGIONS.includes(t.region);

  return (
    <article className={styles.ucard}>
      <Link className={styles.hero} href={`/journeys/${id}`}>
        <MediaFrame aspect="4 / 3" tone={TONES[index % 3]} src={img.card} label={`${t.region}: hero still`} ratio="4:3" alt={t.name} />
      </Link>
      <div className={styles.thumbs}>
        <MediaFrame aspect="4 / 3" video label="Video" src={img.thumbs?.[0]} sizes="150px" />
        <MediaFrame aspect="4 / 3" label="Road" src={img.thumbs?.[1]} sizes="150px" />
        <MediaFrame aspect="4 / 3" label="Stay" src={img.thumbs?.[2]} sizes="150px" />
      </div>

      <div className={styles.body}>
        <span className={`${styles.chip} ${low ? styles.low : styles.him}`}>{t.region}</span>
        <div className={styles.since}>
          {num(t.days)} days · {t.start} to {t.end} · {altLabel(t.alt)}
        </div>
        <h2><Link href={`/journeys/${id}`}>{t.name}</Link></h2>
        <p className={styles.blurb}>{t.blurb}</p>
        <div className={styles.grades}>
          Terrain {t.terrain}/5 · {GRADE.t[t.terrain - 1]} &nbsp;·&nbsp; Rider {t.riderlvl}/5 · {GRADE.r[t.riderlvl - 1]}
        </div>

        <div className={styles.deps}>
          {t.dates.map(([d, s]) => (
            <div className={styles.dep} key={d}>
              <span className={styles.d}>{d}</span>
              <StatusTag status={s} />
              <span className={styles.p}>
                {t.rider == null ? (
                  "Price on request"
                ) : (
                  <>
                    {eur(t.rider)}<small> per rider</small>
                    {t.pillion ? <> · {eur(t.pillion)}<small> pillion</small></> : null}
                  </>
                )}
              </span>
              <Link className={`btn ${s === "full" ? "" : "solid"}`} href={`/contact?tour=${id}`}>
                {s === "full" ? "Next departure" : s === "request" ? "Ask" : "Enquire"}
              </Link>
            </div>
          ))}
        </div>
        <Link className="more" href={`/journeys/${id}`} style={{ marginTop: 14 }}>Full itinerary →</Link>
      </div>
    </article>
  );
}

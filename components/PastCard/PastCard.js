import Link from "next/link";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import { TOURS } from "@/data/tours";
import { IMAGES } from "@/data/images";
import styles from "./PastCard.module.css";

/** One past departure on /past-journeys. */
export default function PastCard({ item, index }) {
  const t = TOURS[item.tour];
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
        <MediaFrame aspect="1 / 1" video label="Video" />
        <MediaFrame aspect="1 / 1" label="Road" />
        <MediaFrame aspect="1 / 1" label="Camp" />
        <MediaFrame aspect="1 / 1" label="Pass" />
      </div>
      <p className={styles.note}>{item.note}</p>
    </article>
  );
}

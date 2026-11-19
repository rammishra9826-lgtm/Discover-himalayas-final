import Link from "next/link";
import Image from "next/image";
import TourArt from "@/components/TourArt/TourArt";
import { TOURS } from "@/data/tours";
import { IMAGES } from "@/data/images";
import { eur, num, altLabel } from "@/data/site";
import styles from "./TourCard.module.css";

/** Small journey card used on the home page and "Other journeys". */
export default function TourCard({ id }) {
  const t = TOURS[id];
  const photo = IMAGES.tours[id]?.card;
  return (
    <Link className={styles.tour} href={`/journeys/${id}`}>
      <div className={styles.pic}>
        {photo ? (
          <Image src={photo} alt={t.name} fill sizes="(max-width: 620px) 100vw, 33vw" style={{ objectFit: "cover" }} />
        ) : (
          <TourArt id={id} />
        )}
        <span className={styles.region}>{t.region}</span>
      </div>
      <div className={styles.body}>
        <h3>{t.name}</h3>
        <div className={styles.meta}>
          <span><b>{num(t.days)}</b> days</span>
          <span><b>{num(t.km)}</b> km</span>
          <span><b>{t.alt}</b>{t.alt === "Lowland" ? "" : " max"}</span>
        </div>
        <p>{t.blurb}</p>
        <div className={styles.foot}>
          <span>{t.dates.length} departure{t.dates.length > 1 ? "s" : ""} in 2027</span>
          <span className={styles.price}>{eur(t.rider)}</span>
        </div>
      </div>
    </Link>
  );
}

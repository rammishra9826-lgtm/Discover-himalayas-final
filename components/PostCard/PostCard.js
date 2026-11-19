import Link from "next/link";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import { IMAGES } from "@/data/images";
import styles from "./PostCard.module.css";

/** Journal teaser. variant "list" = picture left, text right. */
export default function PostCard({ post, index = 0, variant = "grid" }) {
  const href = post.id ? `/journal/${post.id}` : "/journal";
  const photo = post.id ? IMAGES.journal[post.id]?.card : undefined;
  return (
    <Link href={href} className={`${styles.post} ${variant === "list" ? styles.list : ""}`}>
      <MediaFrame aspect="3 / 2" tone={index % 3 === 1 ? "warm" : "default"} label="Photo" src={photo} alt={post.t} sizes="(max-width: 700px) 100vw, 300px" />
      <div>
        <span className={styles.kicker}>{post.k}</span>
        <h3>{post.t}</h3>
        <p>{post.d}</p>
        {!post.id && <span className={styles.soon}>Coming soon</span>}
      </div>
    </Link>
  );
}

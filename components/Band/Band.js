import MediaFrame from "@/components/MediaFrame/MediaFrame";
import styles from "./Band.module.css";

/** Photo on one side, text on the other. flip = photo on the right. */
export default function Band({ image = {}, flip = false, id, children }) {
  return (
    <div className={`${styles.band} ${flip ? styles.flip : ""}`} id={id}>
      <MediaFrame flat className={styles.pic} {...image} />
      <div className={styles.txt}>{children}</div>
    </div>
  );
}

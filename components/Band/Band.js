import MediaFrame from "@/components/MediaFrame/MediaFrame";
import RotatingMedia from "@/components/MediaFrame/RotatingMedia";
import styles from "./Band.module.css";

/** Photo on one side, text on the other. flip = photo on the right.
 *  image.slides = [{ src, label }] -> crossfading slideshow instead of one photo. */
export default function Band({ image = {}, flip = false, id, children }) {
  const { slides, ...rest } = image;
  return (
    <div className={`${styles.band} ${flip ? styles.flip : ""}`} id={id}>
      {slides?.length ? (
        <RotatingMedia flat slides={slides} className={styles.pic} />
      ) : (
        <MediaFrame flat className={styles.pic} {...rest} />
      )}
      <div className={styles.txt}>{children}</div>
    </div>
  );
}
import styles from "./Steps.module.css";

/** Three numbered cards. items = [{ title, text }] */
export default function Steps({ items }) {
  return (
    <div className={styles.steps}>
      {items.map((s) => (
        <div className={styles.step} key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}

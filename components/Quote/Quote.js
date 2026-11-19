import styles from "./Quote.module.css";

export default function Quote({ children, cite, size }) {
  return (
    <blockquote className={styles.quote} style={{ fontSize: size }}>
      {children}
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
}

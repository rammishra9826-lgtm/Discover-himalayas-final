import styles from "./StatusTag.module.css";
import { STATUS } from "@/data/site";

export default function StatusTag({ status }) {
  const s = STATUS[status] ?? STATUS.request;
  return <span className={`${styles.tag} ${styles[s.tone]}`}>{s.label}</span>;
}

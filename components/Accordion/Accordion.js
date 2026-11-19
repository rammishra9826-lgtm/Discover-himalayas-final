"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Accordion.module.css";

/** FAQ-style open/close list. items = [{ q, a }]  (a can be text or JSX) */
export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className={styles.list}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={styles.item} key={it.q}>
            <h3 className={styles.q}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{it.q}</span>
                <span className={styles.icon} aria-hidden="true">{isOpen ? "–" : "+"}</span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  role="region"
                  key="a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className={styles.a}>{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

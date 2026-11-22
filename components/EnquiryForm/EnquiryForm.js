"use client";
import { useState, useRef, useEffect } from "react";
import { SITE } from "@/data/site";
import styles from "./EnquiryForm.module.css";

/** Custom dropdown: options blue, selected option bold + tick. Hidden input se form data same jata hai. */
function JourneySelect({ tours, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const all = [{ id: "", name: "Not sure yet" }, ...tours];
  const current = all.find((o) => o.id === value) ?? all[0];

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function onKey(e) {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const i = all.findIndex((o) => o.id === value);
      const n = e.key === "ArrowDown" ? Math.min(i + 1, all.length - 1) : Math.max(i - 1, 0);
      onChange(all[n].id);
      setOpen(true);
    }
  }

  return (
    <div className={styles.field} ref={ref}>
      <span className={styles.lbl}>Journey</span>
      <input type="hidden" name="tour" value={value} />
      <button
        type="button"
        className={`${styles.selectBtn} ${open ? styles.selectOpen : ""}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKey}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.name}</span>
        <i className={styles.chev} aria-hidden="true" />
      </button>
      {open && (
        <ul className={styles.menu} role="listbox">
          {all.map((o) => (
            <li
              key={o.id || "none"}
              role="option"
              aria-selected={o.id === value}
              className={`${styles.opt} ${o.id === value ? styles.optSel : ""}`}
              onClick={() => { onChange(o.id); setOpen(false); }}
            >
              {o.name}
              {o.id === value && <span aria-hidden="true">✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Enquiry form. Sends to /api/enquiry (see app/api/enquiry/route.js).
 * If email sending is not set up yet, it falls back to opening the visitor's email app, like the prototype.
 */
export default function EnquiryForm({ tours, defaultTour = "" }) {
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const [tour, setTour] = useState(defaultTour);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const tourName = data.tour ? tours.find((t) => t.id === data.tour)?.name ?? "Custom tour" : "Not sure yet";
    setState("sending");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, tourName }),
      });
      if (res.ok) {
        setState("sent");
        form.reset();
        setTour(defaultTour);
        return;
      }
      if (res.status === 501) {
        // email service not configured yet -> open the email app instead
        const body = `Name: ${data.name}\nJourney: ${tourName}\nPreferred departure: ${data.dates || "-"}\nRiders: ${data.riders}  Pillions: ${data.pillions}\n\n${data.msg || ""}`;
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Journey enquiry: " + tourName)}&body=${encodeURIComponent(body)}`;
        setState("idle");
        return;
      }
      setState("error");
    } catch {
      setState("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className={styles.row}>
        <JourneySelect tours={tours} value={tour} onChange={setTour} />
        <label>Preferred departure<input name="dates" placeholder="e.g. 25 July 2027" /></label>
      </div>
      <div className={styles.row}>
        <label>Riders<input name="riders" type="number" min="1" defaultValue="1" /></label>
        <label>Pillions<input name="pillions" type="number" min="0" defaultValue="0" /></label>
      </div>
      <label>
        Anything else
        <textarea name="msg" placeholder="Riding experience, questions, a custom route you have in mind" />
      </label>
      {/* spam trap: real visitors never see or fill this */}
      <input name="website" tabIndex={-1} autoComplete="off" className={styles.trap} aria-hidden="true" />

      <div>
        <button className={`btn solid ${styles.submit}`} type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      <p className={`${styles.status} ${state === "sent" ? styles.ok : ""}`} role="status">
        {state === "sent" && "Thank you. We'll reply within two working days."}
        {state === "error" && `Something went wrong. Please email ${SITE.email} directly.`}
        {state === "idle" && "We reply within two working days."}
      </p>
    </form>
  );
}
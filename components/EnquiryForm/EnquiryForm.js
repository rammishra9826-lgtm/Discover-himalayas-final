"use client";
import { useState } from "react";
import { SITE } from "@/data/site";
import styles from "./EnquiryForm.module.css";

/**
 * Enquiry form. Sends to /api/enquiry (see app/api/enquiry/route.js).
 * If email sending is not set up yet, it falls back to opening the visitor's email app, like the prototype.
 */
export default function EnquiryForm({ tours, defaultTour = "" }) {
  const [state, setState] = useState("idle"); // idle | sending | sent | error

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
        <label>
          Journey
          <select name="tour" defaultValue={defaultTour}>
            <option value="">Not sure yet</option>
            {tours.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </label>
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
        <button className="btn solid" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      <p className={styles.status} role="status">
        {state === "sent" && "Thank you. We'll reply within two working days."}
        {state === "error" && `Something went wrong. Please email ${SITE.email} directly.`}
        {state === "idle" && "We reply within two working days."}
      </p>
    </form>
  );
}

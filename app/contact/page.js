import EnquiryForm from "@/components/EnquiryForm/EnquiryForm";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { TOURS, ORDER } from "@/data/tours";
import { SITE } from "@/data/site";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description: "Ask about a journey. We reply within two working days with availability and a booking form.",
};

export default async function ContactPage({ searchParams }) {
  const { tour } = await searchParams;
  const options = [...ORDER.map((id) => ({ id, name: TOURS[id].name })), { id: "custom", name: "Custom tour" }];
  const defaultTour = options.some((o) => o.id === tour) ? tour : "";

  return (
    <section>
      <div className={`wrap ${styles.two}`}>
        <div>
          <h1 className={`pageTitle ${styles.accent}`}>Ask about a journey</h1>
          <p className={`lead mute ${styles.lead}`}>
            Tell us which ride and which dates, and we'll reply within two working days with availability and a booking form.
          </p>
          <EnquiryForm tours={options} defaultTour={defaultTour} />
        </div>

        <aside className={styles.card}>
          <div className={styles.addr}>
            <b>{SITE.name}</b>
            {SITE.addressLines.map((l, i) => (
              <span key={l}>{l}{i < SITE.addressLines.length - 1 && <br />}</span>
            ))}
            <p style={{ marginTop: 14 }}>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
            <div className={styles.divider} />
            <SocialLinks />
          </div>
        </aside>
      </div>
    </section>
  );
}
import PageHero from "@/components/PageHero/PageHero";
import UpcomingCard from "@/components/UpcomingCard/UpcomingCard";
import FadeIn from "@/components/FadeIn/FadeIn";
import { ORDER } from "@/data/tours";
import { IMAGES } from "@/data/images";
import styles from "./journeys.module.css";

export const metadata = {
  title: "Journeys",
  description: "Eight guided motorcycle journeys for 2027: Ladakh, Mustang, Bhutan, Zanskar, Spiti, Rajasthan, Goa and Konkan to Kanyakumari.",
};

export default function JourneysPage() {
  return (
    <>
      <PageHero
        src={IMAGES.journeys.hero}
        label="Drone still: group riding toward a pass, early morning"
        kicker="Journeys · 2027"
        title="Eight journeys"
      />
      <section>
        <div className="wrap">
          <p className={`lead mute ${styles.lead}`}>
            Each departure needs seven riders to run and takes fourteen at most. Prices are per person in euros; pillions ride at a
            lower rate. Single room +EUR 595. Book with a deposit of EUR 500; the balance is due three months before the start.
          </p>
          <div className={styles.upcoming}>
            {ORDER.map((id, i) => (
              <FadeIn key={id}>
                <UpcomingCard id={id} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

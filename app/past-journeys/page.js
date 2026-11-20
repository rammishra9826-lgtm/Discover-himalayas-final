import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import PastCard from "@/components/PastCard/PastCard";
import Band from "@/components/Band/Band";
import { PAST } from "@/data/past";
import { IMAGES } from "@/data/images";
import styles from "./past.module.css";

export const metadata = {
  title: "Past journeys",
  description: "departure since 2011: groups, roads and the Rider Passport.",
};

export default function PastJourneysPage() {
  return (
    <>
      <PageHero
        src={IMAGES.past.heroVideo}
        video
        label="Drone video: best of our departures, 60-second cut"
        kicker="Past journeys"
        title="departure since 2011"
      />
      <section>
        <div className="wrap">
          {/* PLACEHOLDER note from the client prototype: delete this box once real departures are added in data/past.js */}
          <div className="note">
            Placeholder entries — replace with real departures, the group photo, a short video and three stills from each ride. Newest first.
          </div>
          <div className={styles.grid}>
            {PAST.map((p, i) => (
              <PastCard key={p.tour + p.when} item={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="passport" className={styles.tight}>
        <div className="wrap">
          <Band image={{ src: IMAGES.past.passport, label: "Photo: a Rider Passport open on a tank bag, journey sticker in place, with handwritten notes", ratio: "4:5", tone: "warm" }}>
            <div className="kicker">Rider Passport</div>
            <h2>Every journey, in your passport</h2>
            <p>
              On your first journey you get a Rider Passport. On the last evening of every journey, your road captain places that
              ride's sticker in it and signs across it, and you write five short notes: the best moment, the hardest day, a person
              you'll remember, the road you'd ride again, and one line for next time.
            </p>
            <p>
              Every ride has its own sticker for the year you rode it, and you get a second one for your bike. Every sticker counts
              towards milestones at three, five and ten journeys. Scheduled journeys and custom tours count the same.
            </p>
            <p className="mute">[Milestone rewards to be confirmed by Discover Himalayas.]</p>
            <p><Link className="more strong" href="/journeys">Find your next journey →</Link></p>
          </Band>
        </div>
      </section>
    </>
  );
}

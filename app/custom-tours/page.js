import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import Steps from "@/components/Steps/Steps";
import Accordion from "@/components/Accordion/Accordion";
import { CUSTOM_FAQ } from "@/data/faq";
import { IMAGES } from "@/data/images";
import styles from "./custom.module.css";

export const metadata = {
  title: "Custom tours",
  description: "A route drawn for your group: riding clubs, families, friends and company offsites, seven to fourteen riders.",
};

const STEPS = [
  { title: "Tell us the shape of it", text: "Who's riding, how experienced, how many days, which month, and the kind of riding you want — high passes, desert, coast, jungle, or a mix. A short call usually settles it." },
  { title: "We chart the route", text: "Within a week you get a day-by-day itinerary with distances, altitudes, hotels and a price. We revise it with you until it's right. Knowing which roads are open in which month, from riding them every season, goes into this." },
  { title: "We run it", text: "Bikes, permits, support vehicles, mechanic, road captain, every hotel and meal. Your group gets the same crew and the same care as our scheduled tours — with nobody else on the road." },
];

// PLACEHOLDER examples from the client prototype: replace with three real custom tours
const CASES = [
  { title: "[Club name], 12 riders — Zanskar and Ladakh, 16 days", line: "[One line: what they asked for and what made the ride theirs.]", tone: "default" },
  { title: "[Family name], 6 riders and 3 pillions — Rajasthan, 10 days", line: "[One line.]", tone: "warm" },
  { title: "[Company name], 18 riders — Spiti offsite, 8 days", line: "[One line.]", tone: "green" },
];

export default function CustomToursPage() {
  return (
    <>
      <PageHero
        src={IMAGES.custom.hero}
        label="Drone still: private group, remote road"
        kicker="Custom tours"
        title="A route drawn for your group"
        height="min(70vh, 620px)"
      />
      <section>
        <div className="wrap">
          <p className="lead" style={{ maxWidth: "66ch", fontSize: 21 }}>
            Most of our riders now come to us as a group with an idea: a club that wants two weeks in the mountains on its own, a
            family marking a birthday, a company that would rather take its team over Khardung La than into a conference room. We
            build the ride around you — the route, the pace, the bikes, the hotels, the dates — and then we ride it with you.
          </p>

          <h2 style={{ marginTop: 48, marginBottom: 24 }}>How it works</h2>
          <Steps items={STEPS} />

          <h2 style={{ marginTop: 64 }}>Rides we've built for groups</h2>
          <div className="note">
            Placeholder examples — replace with three real custom tours from recent years, with the group's permission and a photo from the trip.
          </div>
          <div className={styles.cases}>
            {CASES.map((c, i) => (
              <Link className={styles.case} href="/contact?tour=custom" key={c.title}>
                <MediaFrame aspect="4 / 3" tone={c.tone} src={IMAGES.custom.cases[i]} label="Photo: the group" className={styles.pic} sizes="(max-width: 860px) 100vw, 33vw" />
                <h3>{c.title}</h3>
                <p>{c.line}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ marginTop: 64 }}>Good to know</h2>
          <div style={{ marginTop: 16, maxWidth: 860 }}>
            <Accordion items={CUSTOM_FAQ} />
          </div>

          <div className={styles.cta}>
            <div>
              <h2 style={{ fontSize: 36 }}>Tell us about your group</h2>
              <p className="mute" style={{ margin: "8px 0 0", maxWidth: "56ch" }}>A few lines is enough to start. We reply within two working days.</p>
            </div>
            <Link className="btn solid" href="/contact?tour=custom">Start planning</Link>
          </div>
        </div>
      </section>
    </>
  );
}

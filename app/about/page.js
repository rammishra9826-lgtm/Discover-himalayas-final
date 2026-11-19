import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import Steps from "@/components/Steps/Steps";
import Quote from "@/components/Quote/Quote";
import { IMAGES } from "@/data/images";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description: "From Naggar, since 1994: the Kaistha family and the story of Discover Himalayas.",
};

const UNCHANGED = [
  { title: "Personal care", text: "The same small team looks after every guest, from the first enquiry to the last chai stop." },
  { title: "Close to the people", text: "Deep knowledge of local culture, and friends in the villages along every route." },
  { title: "Our own routes", text: "Every journey is one we designed, and every road is one we ride before any guest does." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        src={IMAGES.about.hero}
        label="Archive photo: Naggar, the guesthouse and the valley, 1990s"
        kicker="About"
        title="From Naggar, since 1994"
      />

      <section>
        <div className={`wrap ${styles.two}`}>
          <div>
            <div className="kicker">The story</div>
            <h2>A valley family that took every road the mountains offered</h2>
          </div>
          <div className={styles.copy}>
            <p>
              Naggar sits above the Beas in the Kullu valley. When Vinod was growing up, tourism and apples were the only income in
              the region. His father opened the first guest house in Naggar, and the family took every opportunity the mountains
              brought. Vinod has worked in tourism since 1994, with Ragini Tours; Nadia joined him in 1999.
            </p>
            <p>
              One of those opportunities was riding. In 1996 Vinod made his first rides to Goa and Ladakh, inspired by the travellers
              who came through the valley on motorcycles, and from 2004 by Peter, a German friend who had founded Classic Bike
              Adventure. Discover Himalayas was founded in 2008 for trekking, cultural, spiritual and wellness tours, and ran its
              first motorcycle journey in 2011.
            </p>
            <p>
              The passion has not changed. Vinod still rides, and the team that looks after each group has grown around him rather
              than replaced him. The map keeps growing: Ladakh and Spiti first, then Rajasthan, Goa, the palm-fringed Konkan coast,
              tropical South India, Bhutan and Nepal, and next the North East and Madhya Pradesh.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.tight}>
        <div className="wrap">
          <Quote cite="Vinod, founder">
            Tourism was the only income in the region, except for the apple business, at that time. My father started the first
            guest house in Naggar, which brought us opportunities, whichever way, we just took them. One opportunity was riding bikes to Goa and Ladakh.
          </Quote>
        </div>
      </section>

      <section className={styles.tight}>
        <div className="wrap">
          <div className="kicker">What has not changed</div>
          <div style={{ marginTop: 12 }}>
            <Steps items={UNCHANGED} />
          </div>
          <p style={{ marginTop: 32 }}><Link className="more" href="/crew">Meet the crew →</Link></p>
        </div>
      </section>
    </>
  );
}

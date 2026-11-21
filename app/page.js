import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import FleetSlider from "@/components/FleetSlider/FleetSlider";
import Gallery from "@/components/MediaFrame/Gallery";
import Band from "@/components/Band/Band";
import Quote from "@/components/Quote/Quote";
import FadeIn from "@/components/FadeIn/FadeIn";
import Testimonials from "@/components/Testimonials/Testimonials";
import { IMAGES } from "@/data/images";
import { TESTIMONIALS } from "@/data/testimonials";
import styles from "./page.module.css";

export default function Home() {
  const g = IMAGES.home.gallery;
  const galleryItems = [
    { src: g[0], label: "Pangong Tso shoreline, rider and bike", ratio: "3:2", sizes: "(max-width: 860px) 100vw, 50vw" },
    { src: g[1], label: "Group at the Khardung La top", ratio: "4:5", sizes: "25vw" },
    { src: g[2], label: "Rider portrait, Chang La", ratio: "4:5", sizes: "25vw" },
    { src: g[3], label: "Shyok road water crossing", ratio: "4:5", sizes: "25vw" },
    { src: g[4], label: "Bikes at the Tso Moriri camp", ratio: "4:5", sizes: "25vw" },
  ];

  // custom-tours slideshow: one entry per photo in IMAGES.home.customSlides
  const customSlides = IMAGES.home.customSlides.map((src, i) => ({
    src,
    label: `Custom tour group ride, photo ${i + 1}`,
  }));

  // fleet slider: one entry per photo in IMAGES.home.fleetSlides
  const fleetSlides = IMAGES.home.fleetSlides.map((src, i) => ({
    src,
    label: `The fleet on the road, photo ${i + 1} of ${IMAGES.home.fleetSlides.length}`,
  }));

  return (
    <>
      <PageHero
        src={IMAGES.home.heroVideo}
        video
        label="Drone video: rider cresting Khardung La · loops silently"
        title="Guided motorcycle journeys across India"
        titleMax="16ch"
        lead="Small groups, the right bikes for the road, every road ridden by the crew before you."
        height="max(460px, min(88vh, 760px))"
      >
        <Link className="btn ochre" href="/journeys">See the journeys</Link>
      </PageHero>

      <section className={styles.intro}>
        <div className="wrap">
          <p>
            From the highest passes in Ladakh to the Rajasthan desert, the Goa coast and the tea gardens of Assam. A road
            captain, a mechanic and support vehicles on every journey. We handle the permits, the hotels and the spares. You ride.
          </p>
        </div>
      </section>

      <section className={styles.tight}>
        <div className="wrap">
          <Gallery items={galleryItems} />
        </div>
      </section>

      <section className={styles.tight}>
        <div className="wrap">
          <FadeIn>
            <Band image={{ src: IMAGES.home.people, label: "Photo: Vinod briefing the group at dawn", ratio: "4:5" }}>
              <h2>The people on the ride</h2>
              <p>We love riding, and we have spent our lives riding these roads with guests: Ladakh, Spiti, Goa and everything in between.</p>
              <p>
                The idea hasn't changed: a small group, a road captain who knows every village on the route, a mechanic with the
                spares, and support vehicles so a pillion can rest or a rider can sit out a hard day. We take care of the detail so you can ride.
              </p>
              <p><Link className="more" href="/crew">Meet the crew →</Link></p>
              <div className={styles.quoteWrap}>
                <Quote cite="Neil, Germany — Ladakh journey">
                  Due to Vinod's experience and his open and friendly nature, we got connected to the land and its people in no time wherever we went.
                </Quote>
              </div>
            </Band>
          </FadeIn>
        </div>
      </section>

      <section className={styles.tight}>
        <div className="wrap">
          <FleetSlider slides={fleetSlides} aspect="21 / 9" />
          <div className={`sectionHead ${styles.fleetHead}`}>
            <div>
              <h2>The fleet</h2>
              <p className="lead mute">
                Bikes chosen for the road we're riding, serviced by our own mechanic, with insurance, fuel, oil and spares included.
                Support vehicles follow every day with the luggage, and with a seat for anyone who'd rather not ride a stretch.
              </p>
            </div>
            <Link className="more" href="/fleet">See the fleet →</Link>
          </div>
        </div>
      </section>

      <section className={styles.tight}>
        <div className="wrap">
          <h2>From riders who came back</h2>
          <div>
            <Testimonials items={TESTIMONIALS} />
          </div>
        </div>
      </section>

      <section className={styles.tight}>
        <div className="wrap">
          <FadeIn>
            <Band flip image={{ slides: customSlides }}>
              <div className="kicker">Custom tours</div>
              <h2 style={{ maxWidth: "16ch" }}>Your group. Your dates. A route drawn for you.</h2>
              <p>
                Riding clubs, families, a group of friends, a company offsite on two wheels. Tell us who's riding and how long you
                have; we chart the route, run the logistics, and ride it with you.
              </p>
              <div className="actions" style={{ marginTop: 24 }}>
                <Link className="btn solid" href="/custom-tours">How custom tours work</Link>
                <Link className="btn" href="/contact?tour=custom">Start planning</Link>
              </div>
            </Band>
          </FadeIn>
        </div>
      </section>

      <section className={styles.tight}>
        <div className={`wrap ${styles.center}`}>
          <Link className="btn lake" href="/journeys">See the journeys, dates and prices</Link>
        </div>
      </section>
    </>
  );
}
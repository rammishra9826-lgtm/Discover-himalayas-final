import PageHero from "@/components/PageHero/PageHero";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import Band from "@/components/Band/Band";
import { BIKES } from "@/data/fleet";
import { IMAGES } from "@/data/images";
import styles from "./fleet.module.css";

export const metadata = {
  title: "Fleet",
  description: "Royal Enfield Himalayan 450, Himalayan 411 and Bullet 500, serviced by our own mechanic, with support vehicles on every journey.",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        src={IMAGES.fleet.hero}
        label="Photo: the fleet lined up outside the guesthouse in Naggar"
        kicker="Fleet"
        title="The fleet"
      />
      <section>
        <div className="wrap">
          <div style={{ marginTop: 8 }}>
            <Band image={{ src: IMAGES.fleet.archive, label: "Archive photo: Bullet 350 on a Himalayan road, 1990s", ratio: "4:5", tone: "stone" }}>
              <h2>Why these bikes</h2>
              <p>
                The Bullet came to India with the army in the 1950s, built for the new border roads. For decades it was the only
                motorcycle a village mechanic in Ladakh could fix. Eicher took over the company in 1994, and the line has grown into
                the Himalayan 411 and the liquid-cooled 450: simple to repair, strong low down where the air thins, at home on a mountain road.
              </p>
              <p className="mute">
                The fleet changes as better bikes arrive. What doesn't change: every bike is serviced by our mechanic and ridden on the route before you.
              </p>
            </Band>
          </div>

          <div className={styles.bikes}>
            {BIKES.map((b, i) => (
              <div key={b.name}>
                <MediaFrame aspect="3 / 2" tone={b.tone} src={b.src} label={b.label} ratio="3:2" alt={b.name} sizes="(max-width: 860px) 100vw, 33vw" />
                <h3>{b.name}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.tight}>
        <div className="wrap">
          <Band flip image={{ src: IMAGES.fleet.support, label: "Support vehicles and mechanic, Tanglang La", ratio: "4:5" }}>
            <h2>Support vehicles</h2>
            <p>
              Support vehicles ride behind the group every day with the mechanic, spares, tools, luggage, first aid and oxygen. They
              carry seats for pillions who'd rather sit out a pass, and for any rider who's had enough for the day. Nobody is left to limp.
            </p>
          </Band>
        </div>
      </section>
    </>
  );
}

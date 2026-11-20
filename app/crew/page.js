import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import Reveal from "@/components/Reveal/Reveal";
import { CREW } from "@/data/crew";
import { IMAGES } from "@/data/images";
import styles from "./crew.module.css";

export const metadata = {
  title: "Crew",
  description: "A road captain, a mechanic and a support driver travel with every group.",
};

const TONES = ["default", "warm", "green", "stone"];
const pad = (n) => String(n).padStart(2, "0");

export default function CrewPage() {
  const [lead, ...team] = CREW;

  return (
    <>
      <PageHero
        src={IMAGES.crew.hero}
        label="Photo: the crew with the support vehicles at a pass"
        kicker="Crew"
        title="The people on the ride"
      />

      <section>
        <div className="wrap">
          <Reveal>
            <p className="lead" style={{ maxWidth: "62ch" }}>
              Riders remember the crew by name. A road captain, a mechanic and a support driver travel with every group, and most of
              them have ridden these roads with us for years.
            </p>
          </Reveal>

          {/* featured member */}
          {lead && (
            <div className={styles.featured}>
              <Reveal direction="left">
                <div className={styles.photo}>
                  <MediaFrame
                    aspect="4 / 5"
                    tone="default"
                    src={IMAGES.crew.portraits[0]}
                    label={`Portrait: ${lead.name.split(" ")[0]}`}
                    ratio="4:5"
                    alt={lead.name}
                    sizes="(max-width: 860px) 240px, 260px"
                    priority
                  />
                  <span className={styles.num}>{pad(1)}</span>
                </div>
              </Reveal>

              <Reveal direction="right" delay={150}>
                <div className="kicker">{lead.role}</div>
                <h2 className={styles.leadName}>{lead.name}</h2>
                <p className={styles.leadLine}>{lead.line}</p>
              </Reveal>
            </div>
          )}

          {/* rest of the crew */}
          <Reveal>
            <div className={styles.head}>
              <h2>Riding with you</h2>
              <span className={styles.count}>{CREW.length} people</span>
            </div>
          </Reveal>

          <div className={styles.crew}>
            {team.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 100}>
                <article className={styles.card}>
                  <div className={styles.photo}>
                    <MediaFrame
                      aspect="4 / 5"
                      tone={TONES[(i + 1) % 4]}
                      src={IMAGES.crew.portraits[i + 1]}
                      label={`Portrait: ${p.name.split(" ")[0]}`}
                      ratio="4:5"
                      alt={p.name}
                      sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw"
                    />
                    <span className={styles.num}>{pad(i + 2)}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className={styles.role}>{p.role}</p>
                  <p className={styles.line}>{p.line}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* closing call to action */}
          <Reveal>
            <div className={styles.cta}>
              <div>
                <h2>Ride with the crew</h2>
                <p>Pick a journey from the calendar, or tell us about your own group and we will draw the route.</p>
              </div>
              <div className="actions">
                <Link className="btn solid" href="/journeys">See the journeys</Link>
                <Link className="btn" href="/contact">Get in touch</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
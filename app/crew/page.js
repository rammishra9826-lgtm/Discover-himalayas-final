import PageHero from "@/components/PageHero/PageHero";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import { CREW } from "@/data/crew";
import { IMAGES } from "@/data/images";
import styles from "./crew.module.css";

export const metadata = {
  title: "Crew",
  description: "A road captain, a mechanic and a support driver travel with every group.",
};

export default function CrewPage() {
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
          <p className="lead" style={{ maxWidth: "62ch" }}>
            Riders remember the crew by name. A road captain, a mechanic and a support driver travel with every group, and most of
            them have ridden these roads with us for years.
          </p>
          <div className={styles.crew}>
            {CREW.map((p, i) => (
              <div key={p.name}>
                <MediaFrame
                  aspect="4 / 5"
                  tone={["default", "warm", "green", "stone"][i % 4]}
                  src={IMAGES.crew.portraits[i]}
                  label={`Portrait: ${p.name.split(" ")[0]}`}
                  ratio="4:5"
                  alt={p.name}
                  sizes="(max-width: 560px) 100vw, 25vw"
                  className={styles.portrait}
                />
                <h3>{p.name}</h3>
                <p><b>{p.role}</b><br />{p.line}</p>
              </div>
            ))}
          </div>
          {/* PLACEHOLDER from the client prototype */}
          <p className="mute" style={{ marginTop: 24 }}>[The rest of the crew, mechanics and support drivers, to be added.]</p>
        </div>
      </section>
    </>
  );
}

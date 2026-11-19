import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero/PageHero";
import MediaFrame from "@/components/MediaFrame/MediaFrame";
import StatusTag from "@/components/StatusTag/StatusTag";
import TourCard from "@/components/TourCard/TourCard";
import FadeIn from "@/components/FadeIn/FadeIn";
import { TOURS, ORDER } from "@/data/tours";
import { IMAGES } from "@/data/images";
import { GRADE, GRADENOTE, STAGE_WORDS, eur, num } from "@/data/site";
import styles from "./tour.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = TOURS[slug];
  if (!t) return {};
  return { title: t.name, description: t.blurb };
}

function Grade({ kind, n }) {
  const names = GRADE[kind];
  return (
    <div>
      <div className={styles.gh}>
        <small>{kind === "t" ? "Terrain" : "Rider experience"}</small>
        <b>{n}/5 · {names[n - 1]}</b>
      </div>
      <div className={styles.bars}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={i <= n ? styles.on : ""} />
        ))}
      </div>
      <div className={styles.gl}>
        <span>1 · {names[0]}</span>
        <span>5 · {names[4]}</span>
      </div>
      <p className={`mute ${styles.gnote}`}>{GRADENOTE[kind][n - 1]}</p>
    </div>
  );
}

export default async function TourPage({ params }) {
  const { slug: id } = await params;
  const t = TOURS[id];
  if (!t) notFound();
  const img = IMAGES.tours[id] ?? {};
  const pad = (i) => String(i + 1).padStart(2, "0");

  return (
    <>
      <PageHero
        src={img.hero}
        label={`Drone still or short clip: ${t.region} hero, rider from behind`}
        kicker={`// ${t.region} · ${t.country}`}
        title={t.name}
        titleMax="14ch"
        lead={t.blurb}
        height="min(70vh, 620px)"
      >
        <a className="btn ochre" href="#deps">Book this journey</a>
        <Link className="btn ghost" href={`/contact?tour=${id}`}>Ask us about this journey</Link>
      </PageHero>

      <section className={styles.top}>
        <div className="wrap">
          {/* At a glance */}
          <div className={styles.glance}>
            <div><small>Duration</small><b>{num(t.days)} days</b></div>
            <div><small>Riding / rest days</small><b>{t.ride ?? "[TBC]"} / {t.rest ?? "[TBC]"}</b></div>
            <div><small>Start / end</small><b>{t.start} / {t.end}</b></div>
            <div><small>Distance</small><b>{t.km == null ? "[TBC] km" : `${num(t.km)} km`}</b></div>
            <div><small>Highest altitude</small><b>{t.alt}{t.pass ? ` — ${t.pass}` : ""}</b></div>
            <div><small>Motorcycle</small><b><Link href="/fleet" style={{ color: "inherit" }}>{t.bike}</Link></b></div>
            <div><small>Support vehicle</small><b>{t.support}</b></div>
            <div><small>Terrain</small><b>{t.terrain}/5 · {GRADE.t[t.terrain - 1]}</b></div>
            <div><small>Rider experience</small><b>{t.riderlvl}/5 · {GRADE.r[t.riderlvl - 1]}</b></div>
            <div><small>Group size</small><b>7 to 14 riders</b></div>
          </div>

          {/* Why ride here */}
          <FadeIn className={styles.why}>
            <div>
              <div className="kicker">The journey</div>
              <h2>Why ride {t.region}?</h2>
            </div>
            <div className={styles.whyCopy}>
              {t.why.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </FadeIn>

          {/* Route */}
          <div className={styles.route} id="route">
            <MediaFrame
              tone="sky"
              src={img.map}
              className={styles.map}
              label={`Route map: stage markers 1–${t.stages.length}, route line in Lake, passes labelled with altitude`}
              alt={`Route map, ${t.name}`}
            />
            <div>
              <div className="kicker">The route</div>
              <h2>{t.start} to {t.end === t.start ? t.pass || t.region : t.end}</h2>
              {t.route.map((p, i) => <p key={i}>{p}</p>)}
              <ol className={styles.hlgrid}>
                {t.hl.map((h, i) => (
                  <li key={i}><span>{pad(i)}</span>{h}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* Stages */}
          <div className={styles.stages}>
            <div className="sectionHead">
              <div>
                <div className="kicker">Along the journey</div>
                <h2>{STAGE_WORDS[t.stages.length]} stages</h2>
              </div>
            </div>
            {t.stages.map((s, i) => (
              <FadeIn key={i}>
                <article className={`${styles.stage} ${i % 2 ? styles.flip : ""}`}>
                  <MediaFrame aspect="3 / 2" src={img.stages?.[i]} label={`Stage ${i + 1}: ${s[2]}`} ratio="3:2" alt={s[2]} />
                  <div>
                    <div className="kicker">Stage {pad(i)}</div>
                    <h3>{s[0]}</h3>
                    <p>{s[1]}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Vinod */}
          <div className={styles.vinod}>
            <div className="kicker">Vinod's view</div>
            <blockquote>
              {t.vinod ? `“${t.vinod}”` : "[Vinod's view on this journey: one or two sentences in his own words. A voice note is enough; we'll transcribe it.]"}
            </blockquote>
            <div className={styles.who}>— Vinod, founder and senior road captain</div>
          </div>

          {/* Is it for you */}
          <div className={styles.fit}>
            <div>
              <div className="kicker">Is this journey for you?</div>
              <h2>{t.fith}</h2>
              {t.fit.map((p, i) => <p key={i}>{p}</p>)}
              <Link className="more" href="/faq">Before you ride →</Link>
            </div>
            <div className={styles.grades}>
              <Grade kind="t" n={t.terrain} />
              <Grade kind="r" n={t.riderlvl} />
            </div>
          </div>

          {/* Departures */}
          <div className={styles.deps} id="deps">
            <div className="sectionHead" style={{ marginBottom: 28 }}>
              <div>
                <div className="kicker">Upcoming departures</div>
                <h2>Ride with us</h2>
              </div>
              <p className={`mute ${styles.depsNote}`}>
                Price per rider, sharing a room. Pillions ride at a lower rate; single room +EUR 595. Includes motorcycle, fuel,
                support vehicles, mechanic, accommodation and permits. Availability: Open · Filling up · Last seats · Full. Full: ask about the next departure.
              </p>
            </div>
            <div className={styles.table}>
              {t.dates.map(([d, s]) => (
                <div className={styles.drow} key={d}>
                  <div><b>{d}</b><small>{num(t.days)} days · {t.start} to {t.end}</small></div>
                  <div><StatusTag status={s} /></div>
                  <div><b>{eur(t.rider)}</b><small>per rider{t.pillion ? ` · ${eur(t.pillion)} pillion` : ""}</small></div>
                  <Link className="btn" href={`/contact?tour=${id}`}>{s === "full" ? "Next departure" : "Enquire"}</Link>
                </div>
              ))}
              <div className={styles.drow}>
                <div><b>Private departure</b><small>Your dates, your group, 7 to 14 riders</small></div>
                <div><StatusTag status="request" /></div>
                <div><b>Quoted</b><small>per group</small></div>
                <Link className="btn" href="/custom-tours">Custom tours</Link>
              </div>
            </div>
            <div className={styles.depsCta}>
              <Link className="btn ochre" href={`/contact?tour=${id}`}>Book this journey</Link>
              <Link className="more strong" href={`/contact?tour=${id}`}>Ask us about this journey →</Link>
            </div>
          </div>

          {/* Day by day (shown only when itin is filled in data/tours.js) */}
          {t.itin.length > 0 && (
            <>
              <h2 id="itin" style={{ marginTop: 64 }}>Day by day</h2>
              <ol className={styles.days}>
                {t.itin.map((d, i) => (
                  <li className={styles.day} key={i}>
                    <div className={styles.n}>{i + 1}<small>day</small></div>
                    <div>
                      <h4>{d[0]}</h4>
                      {d[1] && <div className={styles.km}>{d[1]}</div>}
                      <p>{d[2]}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          )}

          {/* Included */}
          <h2 id="inc" style={{ marginTop: 64 }}>What's included</h2>
          <ul className={styles.inc}>
            {t.inc.map((h, i) => <li key={i}>{h}</li>)}
            <li>
              Your <Link href="/past-journeys#passport">Rider Passport</Link>, with this journey's sticker placed and signed by the
              road captain on the last evening, and a second sticker for your bike
            </li>
          </ul>
          <p className={`mute ${styles.notInc}`}>
            Not included: international flights, visas, alcohol, tips, and meals on free days. See the <Link href="/faq">FAQ</Link> for insurance and licence requirements.
          </p>
        </div>
      </section>

      <section className={styles.others}>
        <div className="wrap">
          <h2>Other journeys</h2>
          <div className={styles.cards}>
            {ORDER.filter((x) => x !== id).slice(0, 3).map((x) => <TourCard key={x} id={x} />)}
          </div>
        </div>
      </section>
    </>
  );
}

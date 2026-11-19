import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero/PageHero";
import PostCard from "@/components/PostCard/PostCard";
import TourArt from "@/components/TourArt/TourArt";
import { POSTS } from "@/data/posts";
import { TOURS } from "@/data/tours";
import { IMAGES } from "@/data/images";
import { eur, num, altLabel } from "@/data/site";
import styles from "./post.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.filter((p) => p.id).map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  return post ? { title: post.t, description: post.d } : {};
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) notFound();

  const t = TOURS[post.tour];
  const next = t ? t.dates.find((d) => d[1] !== "full" && d[1] !== "request") : null;
  const related = POSTS.filter((p) => p !== post && (p.tour === post.tour || !p.tour)).slice(0, 3);

  return (
    <>
      <PageHero
        src={IMAGES.journal[post.id]?.hero}
        label={post.hero}
        kicker={`${post.k}${t ? " · " + t.region : ""}`}
        title={post.t}
        titleMax="18ch"
        titleSize="clamp(34px, 5vw, 68px)"
        meta={`${post.date} · ${post.mins} minute read`}
        height="min(60vh, 560px)"
      />

      <section className={styles.section}>
        <div className="wrap">
          {/* body is HTML written in data/posts.js */}
          <div className={styles.article} dangerouslySetInnerHTML={{ __html: post.body }} />

          {t && (
            <Link className={styles.tourcard} href={`/journeys/${post.tour}`}>
              <div className={styles.pic}><TourArt id={post.tour} /></div>
              <div>
                <div className="kicker">The journey</div>
                <h3>{t.name}</h3>
                <p>
                  {t.region} · {num(t.days)} days · {altLabel(t.alt)}
                  {next ? ` · next departure ${next[0]}` : ""} · {eur(t.rider)}
                </p>
                <span className="more">See the journey →</span>
              </div>
            </Link>
          )}

          <div className="sectionHead" style={{ margin: "72px 0 24px" }}>
            <h2>More from the journal</h2>
            <Link className="more" href="/journal">All entries →</Link>
          </div>
          <div className={styles.related}>
            {related.map((p, i) => <PostCard key={p.t} post={p} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}

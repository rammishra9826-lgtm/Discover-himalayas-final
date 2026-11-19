import PostCard from "@/components/PostCard/PostCard";
import { POSTS } from "@/data/posts";

export const metadata = {
  title: "Journal",
  description: "Route knowledge from three decades on these roads, written by the people who lead the rides.",
};

export default function JournalPage() {
  return (
    <section>
      <div className="wrap">
        <h1 className="pageTitle">Journal</h1>
        <p className="lead mute" style={{ marginTop: 22 }}>
          Route knowledge from three decades on these roads. Written by the people who lead the rides, for the people planning one.
        </p>
        <div style={{ marginTop: 24 }}>
          {POSTS.map((p, i) => (
            <PostCard key={p.t} post={p} index={i} variant="list" />
          ))}
        </div>
      </div>
    </section>
  );
}

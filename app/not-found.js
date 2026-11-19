import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="kicker">404</div>
        <h1 className="pageTitle">This road doesn't exist</h1>
        <p className="lead mute" style={{ marginTop: 22 }}>The page you were looking for has moved or never existed.</p>
        <div className="actions">
          <Link className="btn solid" href="/journeys">See the journeys</Link>
          <Link className="btn" href="/">Back to the start</Link>
        </div>
      </div>
    </section>
  );
}

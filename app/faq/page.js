import Accordion from "@/components/Accordion/Accordion";
import { FAQ } from "@/data/faq";

export const metadata = {
  title: "FAQ",
  description: "Questions riders ask: experience, bikes, altitude, pillions, what's included and the Rider Passport.",
};

export default function FaqPage() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 860 }}>
        <h1 className="pageTitle">Questions riders ask</h1>
        <div style={{ marginTop: 32 }}>
          <Accordion items={FAQ} />
        </div>
      </div>
    </section>
  );
}

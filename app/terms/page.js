import styles from "./terms.module.css";

export const metadata = {
  title: "Terms and cancellation",
  description: "Booking, cancellation, motorcycle deposit and payment details for all journeys and custom tours.",
};

export default function TermsPage() {
  return (
    <section>
      <div className={`wrap ${styles.page}`}>
        <h1 className="pageTitle">Booking and cancellation</h1>
        <p className="lead mute" style={{ marginTop: 22 }}>
          For all journeys and custom tours. The same text is sent with every booking form and quote.
        </p>

        <h3>Booking</h3>
        <p>
          We confirm your seat as soon as your deposit of EUR 500 per person (or the equivalent in your currency) reaches our bank
          account. The balance is due at least three months before the tour starts. The price quoted is the price paid: what is
          included and what is not is written in the itinerary, and nothing is added once the ride has begun.
        </p>

        <h3>Cancellation</h3>
        <table className={styles.table}>
          <thead>
            <tr><th>When you cancel</th><th>What we retain</th></tr>
          </thead>
          <tbody>
            <tr><td>More than three months before the start</td><td>The deposit, EUR 500</td></tr>
            <tr><td>Between three and two months before the start</td><td>50 percent of the tour price</td></tr>
            <tr><td>One month or less before the start</td><td>The full tour price</td></tr>
          </tbody>
        </table>
        <p>
          We will always try to move you to another departure first. We recommend travel insurance bought in your home country
          before the tour that covers cancellation, medical care and motorcycling above 4,000 m.
        </p>

        <h3>Motorcycle deposit</h3>
        <p>
          Every rider signs a motorcycle deposit agreement before the first day of riding. For self-caused damage to the bike the
          rider bears a deductible of up to EUR 500 per motorcycle (Bullet 500, Himalayan 411 and Himalayan 450), paid before the
          end of the tour. The condition of the bike is recorded at handover.
        </p>

        <h3>Payment</h3>
        <div className={styles.panel}>
          <p style={{ margin: 0 }}>
            <b>Account holder</b> Discover Himalayas<br />
            <b>Bank</b> Punjab National Bank, Naggar 175130, Kullu, Himachal Pradesh, India<br />
            <b>Account number</b> 2705 0021 0000 6393 &nbsp;·&nbsp; <b>SWIFT</b> PUNBINBBISB &nbsp;·&nbsp; <b>IFSC</b> PUNB0270500<br />
            <span className="mute">Put your name and the tour name in the transfer reference and send us the confirmation by email or WhatsApp.</span>
          </p>
        </div>

        <h3>Registered office</h3>
        <p className="mute">
          Discover Himalayas, Ragini Cottages, V.P.O. Naggar, Tehsil Kullu, Kullu 175130, Himachal Pradesh, India. Managing Director
          and Proprietor: Vinod Kaistha. Registration no. 2-53/2008-MNL-TD-2756, Department of Tourism, Government of Himachal
          Pradesh. GST 02AEXPK2164C1ZP.
        </p>
      </div>
    </section>
  );
}

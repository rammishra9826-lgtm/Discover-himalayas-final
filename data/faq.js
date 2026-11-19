import Link from "next/link";

// Questions on /faq. "a" can be plain text or JSX (for links).
export const FAQ = [
  {
    q: "How experienced do I need to be?",
    a: "Ladakh and Little Tibet are for experienced riders: long days, altitude, gravel and water crossings. Rajasthan and the two South India tours suit any confident road rider. You need a valid motorcycle licence from home plus an International Driving Permit.",
  },
  {
    q: "What bike will I ride?",
    a: (
      <>
        Each journey page names the bike for that route, and the <Link href="/fleet">fleet page</Link> has the details. Comprehensive
        insurance, fuel, oil and all replacement parts are included. If you'd prefer a different bike from the fleet, ask when you book.
      </>
    ),
  },
  {
    q: "What about altitude?",
    a: "The Ladakh tour starts at 3,500 m and reaches 5,600 m. The itinerary is built around acclimatisation — the first days ride low in the Indus valley before the high passes. We carry oxygen, and the road captain has been watching how riders cope at altitude for thirty years. Talk to your doctor before booking if you have heart or lung conditions.",
  },
  {
    q: "Can I bring a pillion?",
    a: "Yes. Pillions pay a lower rate, share the rider's room, and can swap into the support vehicle on any day they'd rather not be on the back of the bike.",
  },
  {
    q: "What's included in the price?",
    a: "Motorcycle, fuel, insurance, all hotels (double occupancy), all meals on tour with soft drinks, support vehicles, road captain and mechanic, permits and entry fees. Not included: international flights, Indian visa, the domestic flight sector where noted, alcohol, tips, and lunches and dinners on free days in Leh or Goa.",
  },
  {
    q: "How big are the groups?",
    a: "Seven to fourteen riders, plus pillions. Seven is the minimum for a departure to run; fourteen is the most we take, so the road captain knows every rider by the end of the first day.",
  },
  {
    q: "What is the Rider Passport?",
    a: (
      <>
        A small book you get on your first journey with us. Your road captain places that ride's sticker in it at the end of every
        journey and signs across it, and you write five ride notes on the facing page. Every sticker counts towards milestones at
        three, five and ten journeys. Bring it back on your next ride. <Link href="/past-journeys#passport">More on Past journeys</Link>.
      </>
    ),
  },
  {
    q: "What if a journey doesn't fill?",
    a: "We need seven riders for a departure to run. If a date doesn't reach seven by three months before the start, we offer you a move to the next date or a full refund of your deposit.",
  },
  {
    q: "Do I need travel insurance?",
    a: "Yes, and it must cover motorcycling and, for Himalayan tours, altitude above 5,000 m. We'll ask for the policy details before you ride.",
  },
];

// "Good to know" on /custom-tours
export const CUSTOM_FAQ = [
  {
    q: "How big a group?",
    a: "From seven to fourteen riders, with pillions on top. Fewer than seven, one of our scheduled journeys is usually the better fit. More than fourteen, we split into two riding groups, each with its own road captain.",
  },
  {
    q: "How far ahead do we need to book?",
    a: "Himalayan rides in July and August: six months, because hotels at Pangong and Nubra fill. Lowland rides: three months is comfortable. Shorter notice is sometimes possible; ask.",
  },
  {
    q: "Can we mix riding levels?",
    a: "Yes, within reason. We set the pace for the group and the support vehicles carry anyone who wants a day off. If the gap is very wide we'll say so and suggest a route that works for everyone.",
  },
  {
    q: "What does it cost?",
    a: "Per rider it's in the same range as the scheduled tours; the exact figure depends on route, length, group size and hotel standard. The itinerary we send you comes with a firm price.",
  },
  {
    // PLACEHOLDER from the client prototype: confirm the answer with the owner
    q: "Can we bring our own bikes?",
    a: "[Confirm with the owner — some operators allow riders on their own motorcycles with reduced pricing; others don't for insurance reasons.]",
  },
];

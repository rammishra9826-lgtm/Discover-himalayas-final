/**
 * Rider testimonials for the home page.
 * To add or edit a review: change this file only.
 *  - photo : path inside /public (no "public" in the path)
 *  - trip  : optional, shown under the name
 *  - review: array of paragraphs (first paragraph is the short preview on the card)
 */
const DIR = "/images/home/testimonials";

export const TESTIMONIALS = [
  {
    id: "neil",
    name: "Neil",
    country: "Germany",
    trip: "Ladakh journey",
    photo: `${DIR}/Neil-Germany.avif`,
    review: [
      "Riding the tour from Ladakh, with my father and my German friends was an experience of a lifetime! Unique monasteries, spectacular views, friendly people… and what a ride! Vinod and his team provided a very special tour. Everything was very well organised and prepared. Due to Vinod’s experience and his very special open and friendly nature, we got connected to the land and its people in no time wherever we went. For sure we all will take this experience along as a treasure for the years to come.",
    ],
  },
  {
    id: "alex-katty",
    name: "Alex and Katty",
    country: "La Bourgogne, France",
    trip: "Goa and South India",
    photo: `${DIR}/Alex-and-Katty-La-Bourgogne-France.avif`,
    review: [
      "What a motorcycle trip it was through Goa and the south of India! Every motorcyclist can only dream of this. Vinod and Nadia took us to incredible places which filled us with delight – even as experienced India travellers (we undertook a dozen individual trips earlier).",
      "The unbelievable, beautiful and fantastic motorcycle trip that I made six months earlier with them in the Spiti valley in the Himalayas ensured that I did not hesitate for a second to commit to the South India trip. These have become two unforgettable journeys… Worth repeating!",
    ],
  },
  {
    id: "didier",
    name: "Didier Ravyts",
    country: "Belgium",
    trip: "Little Tibet, 2018",
    photo: `${DIR}/Didier-Ravyts-Belgium.avif`,
    review: [
      "Hi, participated in the 2018 Little Tibet tour. What a wonderful experience, breathtaking landscapes, with all types of roads. Perfect organization, great host and very experienced guide. Highly recommended motorcycle trip on reliable Enfield bikes.",
    ],
  },
  {
    id: "bob",
    name: "Bob Van Aert",
    country: "Belgium",
    trip: "Little Tibet",
    photo: `${DIR}/Bob-Van-Aert-Belgium.avif`,
    review: [
      "The Little Tibet tour is a stunning journey where every turn reveals stunning vistas of formidable glaciers, picturesque mountains, deep gorges, and turquoise blue waters. Fantastic experience… with a very cool crew… recommended between the chaff!!!",
    ],
  },
  {
    id: "thierry",
    name: "Thierry",
    country: "Belgium",
    trip: "Little Tibet",
    photo: `${DIR}/Thierry-Belgium.avif`,
    review: [
      "It is unimaginable what Vinod and his crew did for us during this fabulous “Little Tibet” trip. After travelling India for many years, I thought it would be hard to impress me. I was wrong. Great bikes, great guiding, unbeatable food and accommodation and fantastic interaction with local people. I want more…",
    ],
  },
  {
    id: "anders",
    name: "Anders",
    country: "Sweden",
    photo: `${DIR}/Anders-Sweden.avif`,
    review: [
      "It was a wonderful and interesting experience to ride with you Vinod! We went to many interesting places thanks to his good guidance and knowledge of the land, people and culture.",
    ],
  },
  {
    id: "bernie",
    name: "Bernie",
    country: "Belgium",
    trip: "Spiti, “Little Tibet”",
    photo: `${DIR}/Bernie-Belgium.avif`,
    review: [
      "My experience was so amazing, fantastic, awesome… I have no words to explain it. I’m into adventure and like to take challenges. I had the opportunity to ride with Vinod to Spiti, “Little Tibet”. It was all magic and spirituality at the same time. So close to mother earth, all the time, every night in comfortable places in beautiful nature. On the way back, riding over one of the most dangerous tracks in the world, the Rohtang Pass. Wet to the bones, defying the muddy, misty Rohtang road, that was fun!! Yeahh, an absolute must to experience in a lifetime!",
      "I’ll be there for another trip, promise!!",
    ],
  },
];
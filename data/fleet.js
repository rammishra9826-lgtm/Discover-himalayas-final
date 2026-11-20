// Bikes on /fleet.
// Photo paths come from images.js (IMAGES.fleet.bikes) so they live in one place.
import { IMAGES } from "./images"; // agar images.js alag folder mein hai toh path badal lena

export const BIKES = [
  {
    name: "Royal Enfield Himalayan 450",
    label: "Himalayan 450 on the Morey plains",
    tone: "default",
    src: IMAGES.fleet.bikes[0],
    text: "The newest bike on the fleet, ridden on Ladakh and Upper Mustang. 452cc, 40 bhp, 21-inch front wheel, 230 mm of ground clearance. Tall enough for the water crossings on the Shyok road and happy at Umling La. Comprehensive insurance, fuel, oil and all replacement parts are included on every tour.",
  },
  {
    name: "Royal Enfield Himalayan 411",
    label: "Himalayan 411, Spiti valley",
    tone: "cool",
    src: IMAGES.fleet.bikes[1],
    text: "The bike that carried our tours for years before the 450 arrived, and still on the fleet for Rajasthan. 411cc, air-cooled, unhurried and very hard to upset. Lower seat than the 450, which some riders prefer on the long days. Same insurance, fuel, oil and spares included.",
  },
  {
    name: "Royal Enfield Bullet 500",
    label: "Bullet 500, Rajasthan back road",
    tone: "cool",
    src: IMAGES.fleet.bikes[2],
    text: "The classic Enfield, ridden on Zanskar, Spiti and Kinnaur, Bhutan, Goa and the South. The big single, the thump, the long cruising gait. Comprehensive insurance, fuel, oil and spares included.",
  },
];
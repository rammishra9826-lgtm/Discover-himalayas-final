// ---------------------------------------------------------------------------
// ALL PHOTOS AND VIDEOS OF THE SITE ARE LISTED HERE.
//
// 1. Put the file in /public/images  (e.g. /public/images/home-hero.jpg)
// 2. Replace the matching null below with the path:  "/images/home-hero.jpg"
//
// While a value is null the site shows a grey placeholder with a caption.
// Videos: use a .mp4 path (it plays muted and looping).
// Tip: export photos as .jpg/.webp, about 2000px wide; Next.js resizes them.
// ---------------------------------------------------------------------------

// TEMPORARY: the Ladakh photo + video are used on every journey for now.
// Later, replace a journey's  tour(n)  with its own values (see the commented example below).
const LADAKH_PHOTO = "/images/journeys/ladakh-hero.JPG"; // capital .JPG, exactly like the file name
const LADAKH_VIDEO = "https://youtu.be/4GNGrHnER7g";      // YouTube link, opens in a popup

const tour = (stageCount) => ({
  card: LADAKH_PHOTO,                                   // big picture on the journey card (4:3)
  hero: null,                                           // big picture at the top of the journey page (16:9)
  map: null,                                            // route map image
  video: LADAKH_VIDEO,                                  // YouTube link for the VIDEO thumbnail
  thumbs: [LADAKH_PHOTO, LADAKH_PHOTO, LADAKH_PHOTO],   // video, road, stay
  stages: Array(stageCount).fill(null),                 // one picture per stage (3:2)
});

/* Example of a journey with its own files later:
   mustang: {
     card: "/images/journeys/mustang/card.jpg",
     hero: null,
     map: null,
     video: "https://youtu.be/XXXXXXXXXXX",
     thumbs: ["/images/journeys/mustang/video.jpg", "/images/journeys/mustang/road.jpg", "/images/journeys/mustang/stay.jpg"],
     stages: [null, null, null, null, null],
   },
*/

export const IMAGES = {
  home: {
    heroVideo: "/videos/home/hero-promo.mp4",   // 16:9 drone video (.mp4)
    gallery: [
      "/images/home/pangong-shoreline-bikes.png",    // 1 wide
      "/images/home/prayer-flags-khardung-la.png",   // portrait
      "/images/home/rider-portrait-chang-la.png",    // portrait
      "/images/home/Shyok-road-water-crossing.png",  // portrait
      "/images/home/group-tso-moriri-camp.png",      // portrait
    ],                                               // 5 pictures: 1 wide + 4 portrait
    people: "/images/home/vinod-briefing-dawn.png",  // Vinod briefing the group (4:5)
    fleetWide: "/images/home/the-fleet.png",            // wide photo of the fleet (21:9)
    fleetSlides: [                                   // fleet slider on the home page (left/right buttons)
      "/images/home/the-fleet.png",
      "/images/home/the-fleet2.png",
      "/images/home/the-fleet3.png",
      "/images/home/the-fleet4.png",
    ],
    custom: "/images/home/home-buttom.png",  // private group on an unmarked road (4:5)
    customSlides: [                          // custom-tours slideshow, changes every 8s
      "/images/home/home-buttom.png",
      "/images/home/home-buttom-2.jpeg",
      "/images/home/home-buttom3.jpg",
      "/images/home/home-buttom4.png",       // converted from .heif
      "/images/home/home-buttom5.jpg",
    ],
  },
  journeys: { hero: "/images/journeys/group-riding-toward-pass-early-morning.png" },

  past: {
    heroVideo: "/videos/Past-journeys/pastjourney-hero.mp4",  // 16:9 drone video (.mp4)
    passport: null,
    // one entry per departure in data/past.js, same order
    groups: [null, null, null, null, null, null],
  },
  custom: { hero: "/images/custom-tour/private-group-remote-road.png", cases: [null, null, null] },
  fleet: {
    hero: "/images/fleet/fleet.png",        // top of the /fleet page
    archive: "/images/fleet/REMAIN.png",
    bikes: [
      "/images/fleet/RE450.png",             // Himalayan 450
      "/images/fleet/RE411.png",             // Himalayan 411
      "/images/fleet/RE500.png",             // Bullet 500
    ],
    support:"/images/fleet/support-vehicle.png",  // support vehicle
  },
  about: { hero: null },
  crew: {
    hero: "/images/crew/crew_with_vehicle.png",  // top of the /crew page
    // same order as CREW in data/crew.js
    portraits: [
      "/images/crew/vinod.jpeg",          // Vinod Kaistha
      "/images/crew/nadia.jpeg",          // Nadia Kaistha
      "/images/crew/Uwe-balser.jpeg",     // Uwe Balser
      "/images/crew/sahil.jpeg",          // Sahil Kaistha
      "/images/crew/jaydeep.jpeg",        // Jaydeep Mishra
      "/images/crew/tony.jpeg",           // Tony
      "/images/crew/Surya-Kaistha.jpeg",  // Surya Kaistha
      "/images/crew/aloo.jpeg",           // Aloo
      "/images/crew/ramesh.jpeg",         // Ramesh
    ],
  },
  // journal: key = post "id" in data/posts.js (hero) ; the card picture uses card
  journal: {
    "khardung-la": { hero: null, card: null },
  },
  tours: {
    ladakh: tour(7),
    mustang: tour(5),
    heaven: tour(6),
    tibet: tour(5),
    bhutan: tour(5),
    rajasthan: tour(6),
    goa: tour(6),
    k2k: tour(6),
  },
};
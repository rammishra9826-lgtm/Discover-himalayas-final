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
    fleetWide: "/images/home/buttom.png",            // wide photo of the fleet (21:9)
    custom: "/images/home/a-private-group-on-Zanskar-Kinnaur.png",  // private group on an unmarked road (4:5)
  },
  journeys: { hero: "/images/journeys/group-riding-toward-pass-early-morning.png" },
  past: {
    heroVideo: null,
    passport: null,
    // one entry per departure in data/past.js, same order
    groups: [null, null, null, null, null, null],
  },
  custom: { hero: "/images/custom-tour/private-group-remote-road.png", cases: [null, null, null] },
  fleet: {
    hero: "/images/fleet/fleet.jpeg",        // top of the /fleet page
    archive: "/images/fleet/REMAIN.avif",
    bikes: [
      "/images/fleet/RE450.png",             // Himalayan 450
      "/images/fleet/RE411.png",             // Himalayan 411
      "/images/fleet/RE500.png",             // Bullet 500
    ],
    support: null,
  },
  about: { hero: null },
  crew: {
    hero: null,
    // same order as CREW in data/crew.js
    portraits: [
      "/images/crew/vinod.jpeg",        // Vinod Kaistha
      "/images/crew/nadia.jpeg",        // Nadia Kaistha
      "/images/crew/sahil.jpeg",        // Sahil Kaistha
      null,                             // Surya Kaistha (photo chahiye)
      "/images/crew/jaydeep.jpeg",      // Jaydeep Mishra
      "/images/crew/Uwe-balser.jpeg",   // Uwe Balser
      "/images/crew/tony.jpeg",         // Tony
    ],
  },
  // journal: key = post "id" in data/posts.js (hero) ; the card picture uses card
  journal: {
    "khardung-la": { hero: null, card: null },
  },
  tours: {
    ladakh: {
      card: null,            // square-ish picture on the journey card (4:3)
      hero: null,            // big picture at the top of the journey page (16:9)
      map: null,             // route map image
      thumbs: [null, null, null],   // 3 small pictures on /journeys (video, road, stay)
      stages: [null, null, null, null, null, null, null], // one picture per stage (3:2)
    },
    mustang: {
      card: null,
      hero: null,
      map: null,
      thumbs: [null, null, null],
      stages: [null, null, null, null, null],
    },
    heaven: {
      card: null,
      hero: null,
      map: null,
      thumbs: [null, null, null],
      stages: [null, null, null, null, null, null],
    },
    tibet: {
      card: null,
      hero: null,
      map: null,
      thumbs: [null, null, null],
      stages: [null, null, null, null, null],
    },
    bhutan: {
      card: null,
      hero: null,
      map: null,
      thumbs: [null, null, null],
      stages: [null, null, null, null, null],
    },
    rajasthan: {
      card: null,
      hero: null,
      map: null,
      thumbs: [null, null, null],
      stages: [null, null, null, null, null, null],
    },
    goa: {
      card: null,
      hero: null,
      map: null,
      thumbs: [null, null, null],
      stages: [null, null, null, null, null, null],
    },
    k2k: {
      card: null,
      hero: null,
      map: null,
      thumbs: [null, null, null],
      stages: [null, null, null, null, null, null],
    },
  },
};
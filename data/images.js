// ---------------------------------------------------------------------------
// ALL PHOTOS AND VIDEOS OF THE SITE ARE LISTED HERE.
//
// 1. Put the file in /public/images  (e.g. /public/images/home-hero.jpg)
// 2. Replace the matching null below with the path:  "/images/home-hero.jpg"
//
// While a value is null the site shows a grey placeholder with a caption.
// Videos: use a .mp4 path (it plays muted and looping).
// Tip: export photos as .jpg/.webp, about 2000px wide; Next.js resizes them.
// File names are case-sensitive: write them exactly as they appear in the folder.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// JOURNEYS: every journey has its own photos and video.
//
// tour(stageCount, { ...only the things you have })
//   card      big picture on the journey card (4:3)
//   hero      big picture at the top of the journey page (16:9)
//   heroVideo background .mp4 at the top of the journey page (16:9)
//   map       route map image
//   video     YouTube link for the VIDEO thumbnail (opens in a popup)
//   thumbs    3 pictures: [video thumbnail, road, stay]
//   stages    one picture per stage (3:2), same count as stageCount
// Anything you leave out stays null (grey placeholder).
// ---------------------------------------------------------------------------
const tour = (stageCount, o = {}) => ({
  card: o.card ?? null,
  hero: o.hero ?? null,
  heroVideo: o.heroVideo ?? null,
  map: o.map ?? null,
  video: o.video ?? null,
  thumbs: o.thumbs ?? [null, null, null],
  stages: o.stages ?? Array(stageCount).fill(null),
});

// ---- LADAKH: To the Highest Road on Earth ----------------------------------
const LADAKH_PHOTO = "/images/journeys/ladakh-hero.JPG";        // card + main picture
const LADAKH_VIDEO_THUMB = "/images/journeys/ladakh-hero.JPG";  // VIDEO thumbnail
const LADAKH_ROAD = "/images/journeys/ladakh-road.JPG";         // road thumbnail
const LADAKH_CAMP = "/images/journeys/ladakh-camp.JPG";         // camp / stay thumbnail        // camp / stay thumbnail
const LADAKH_VIDEO = "https://youtu.be/4GNGrHnER7g";            // YouTube link, opens in a popup

// The folder name has spaces, so they are written as %20 (safe for Next.js).
const LADAKH_DIR = "/images/journeys/Highest%20Road%20on%20Earth";
const LADAKH_STAGES = [
  `${LADAKH_DIR}/Stage1-Pass-summit.JPG`,                // stage 1
  `${LADAKH_DIR}/Stage2-Monastery-indus.JPG`,            // stage 2
  `${LADAKH_DIR}/Stage3-Hunder-dunes-Khardung.JPG`,      // stage 3
  `${LADAKH_DIR}/stage-4-Lakeshore-road.JPG`,            // stage 4 (small "s", as in the file name)
  `${LADAKH_DIR}/Stage-5-Changpa-camp.JPG`,              // stage 5
  `${LADAKH_DIR}/Stage6-Umling-La.JPG`,                  // stage 6
  `${LADAKH_DIR}/Stage-7-Tso-Morir.JPG`,                 // stage 7
];

/* Example: how to fill another journey later (copy this, change the names).
   Put its files in  public/images/journeys/mustang/  and use it below as  mustang: MUSTANG

   const MUSTANG = tour(5, {
     card: "/images/journeys/mustang/card.jpg",
     heroVideo: "/videos/journeys/Mustang-hero-video.mp4",
     video: "https://youtu.be/XXXXXXXXXXX",
     thumbs: [
       "/images/journeys/mustang/video.jpg",
       "/images/journeys/mustang/road.jpg",
       "/images/journeys/mustang/stay.jpg",
     ],
     stages: [
       "/images/journeys/mustang/stage-1.jpg",
       "/images/journeys/mustang/stage-2.jpg",
       "/images/journeys/mustang/stage-3.jpg",
       "/images/journeys/mustang/stage-4.jpg",
       "/images/journeys/mustang/stage-5.jpg",
     ],
   });
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
  journeys: {
     hero: "/images/journeys/journey-hero.png" ,
     herovideo: "/videos/journeys/Ladakh-hero-video.mp4",  // 16:9 drone video (.mp4)
     
    },

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

  // Each journey below has its own values. Fill the others the same way as Ladakh.
  tours: {
    ladakh: tour(7, {
      card: LADAKH_PHOTO,
      heroVideo: "/videos/journeys/Ladakh-hero-video.mp4",
      video: LADAKH_VIDEO,
      thumbs: [LADAKH_VIDEO_THUMB, LADAKH_ROAD, LADAKH_CAMP],   // video, road, stay
      stages: LADAKH_STAGES,
    }),
    mustang: tour(5),
    heaven: tour(6),
    tibet: tour(5),
    bhutan: tour(5),
    rajasthan: tour(6),
    goa: tour(6),
    k2k: tour(6),
  },
};
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
    heroVideo: null,                 // 16:9 drone video (.mp4)
    gallery: [null, null, null, null, null],   // 5 pictures: 1 wide + 4 portrait
    people: null,                    // Vinod briefing the group (4:5)
    fleetWide: null,                 // wide photo of the fleet (21:9)
    custom: null,                    // private group on an unmarked road (4:5)
  },
  journeys: { hero: null },
  past: {
    heroVideo: null,
    passport: null,
    // one entry per departure in data/past.js, same order
    groups: [null, null, null, null, null, null],
  },
  custom: { hero: null, cases: [null, null, null] },
  fleet: {
    hero: null,
    archive: null,
    bikes: [null, null, null],       // Himalayan 450, Himalayan 411, Bullet 500
    support: null,
  },
  about: { hero: null },
  crew: { hero: null, portraits: [null, null, null, null] },
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
      card: null,            // square-ish picture on the journey card (4:3)
      hero: null,            // big picture at the top of the journey page (16:9)
      map: null,             // route map image
      thumbs: [null, null, null],   // 3 small pictures on /journeys (video, road, stay)
      stages: [null, null, null, null, null], // one picture per stage (3:2)
    },
    heaven: {
      card: null,            // square-ish picture on the journey card (4:3)
      hero: null,            // big picture at the top of the journey page (16:9)
      map: null,             // route map image
      thumbs: [null, null, null],   // 3 small pictures on /journeys (video, road, stay)
      stages: [null, null, null, null, null, null], // one picture per stage (3:2)
    },
    tibet: {
      card: null,            // square-ish picture on the journey card (4:3)
      hero: null,            // big picture at the top of the journey page (16:9)
      map: null,             // route map image
      thumbs: [null, null, null],   // 3 small pictures on /journeys (video, road, stay)
      stages: [null, null, null, null, null], // one picture per stage (3:2)
    },
    bhutan: {
      card: null,            // square-ish picture on the journey card (4:3)
      hero: null,            // big picture at the top of the journey page (16:9)
      map: null,             // route map image
      thumbs: [null, null, null],   // 3 small pictures on /journeys (video, road, stay)
      stages: [null, null, null, null, null], // one picture per stage (3:2)
    },
    rajasthan: {
      card: null,            // square-ish picture on the journey card (4:3)
      hero: null,            // big picture at the top of the journey page (16:9)
      map: null,             // route map image
      thumbs: [null, null, null],   // 3 small pictures on /journeys (video, road, stay)
      stages: [null, null, null, null, null, null], // one picture per stage (3:2)
    },
    goa: {
      card: null,            // square-ish picture on the journey card (4:3)
      hero: null,            // big picture at the top of the journey page (16:9)
      map: null,             // route map image
      thumbs: [null, null, null],   // 3 small pictures on /journeys (video, road, stay)
      stages: [null, null, null, null, null, null], // one picture per stage (3:2)
    },
    k2k: {
      card: null,            // square-ish picture on the journey card (4:3)
      hero: null,            // big picture at the top of the journey page (16:9)
      map: null,             // route map image
      thumbs: [null, null, null],   // 3 small pictures on /journeys (video, road, stay)
      stages: [null, null, null, null, null, null], // one picture per stage (3:2)
    },
  },
};

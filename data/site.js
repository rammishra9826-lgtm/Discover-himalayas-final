// Site-wide settings, navigation, labels and small formatting helpers.

export const SITE = {
  name: "Discover Himalayas",
  tagline: "Guided motorcycle journeys across India",
  url: "https://www.discover-himalayas.com",
  email: "info@discover-himalayas.com",
  phone: "+91 93185 85385",
  phoneHref: "tel:+919318585385",
  whatsapp: "https://wa.me/919318585385",
  addressLines: ["Ragini Cottages", "Naggar, Kullu District 175130", "Himachal Pradesh, India"],
  addressOneLine: "Ragini Cottages, Naggar, Kullu District 175130, Himachal Pradesh, India",
  social: {
    instagram: "https://www.instagram.com/_discover_himalayas/",
    youtube: "https://www.youtube.com/channel/UC1rYr28SM25l0ue4wWifsDA",
    facebook: "https://www.facebook.com/Discover-Himalayas-553782374716802",
  },
};

// Main menu (order = order on screen). "match" decides which routes keep the link highlighted.
export const NAV = [
  { href: "/past-journeys", label: "Past journeys" },
  { href: "/journeys", label: "Journeys" },
  { href: "/custom-tours", label: "Custom tours" },
  { href: "/about", label: "About" },
  { href: "/crew", label: "Crew" },
  { href: "/fleet", label: "Fleet" },
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS = [
  ...NAV,
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

// Departure status -> label + style name (see components/StatusTag)
export const STATUS = {
  open: { label: "Open", tone: "open" },
  filling: { label: "Filling up", tone: "filling" },
  last: { label: "Last seats", tone: "last" },
  full: { label: "Full", tone: "full" },
  request: { label: "On request", tone: "request" },
};

// Grades to confirm with Vinod before launch.
export const GRADE = {
  t: ["Easy", "Moderate", "Challenging", "Demanding", "Expedition"],
  r: ["Any confident rider", "Some touring", "Experienced", "Very experienced", "Expert"],
};
export const GRADENOTE = {
  t: [
    "Good tarmac, short days, plenty of stops",
    "Mostly tarmac with some broken sections and hill roads",
    "Long days, rough and gravel sections, mountain passes",
    "High passes above 5,000 m, water crossings, long gravel stretches",
    "Remote gravel, steep climbs, narrow sections and days far from help",
  ],
  r: [
    "Comfortable on a motorcycle in traffic and on open roads",
    "A few multi-day rides behind you",
    "Comfortable on loose surfaces and long days in the saddle",
    "Several multi-day tours, at ease on gravel and at altitude",
    "Confident off-road, used to altitude and hard days",
  ],
};

export const STAGE_WORDS = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

// Helpers
export const eur = (n) => (n == null ? "On request" : "EUR " + n.toLocaleString("en-IE"));
export const num = (n) => (n == null ? "TBC" : n.toLocaleString("en-IE"));
export const altLabel = (alt) => (alt === "Lowland" ? alt : alt + " max");

// All journey content lives here. To add or edit a journey, change this file only.
// dates: [label, status]  status = open | filling | last | full | request
// terrain / riderlvl: 1-5 (see data/site.js for the scale names)
// rider / pillion: price in EUR (null = "On request"); km / ride / rest: null = "TBC"

export const TOURS = {
  "ladakh": {
    "name": "To the Highest Road on Earth",
    "region": "Ladakh",
    "country": "India",
    "days": 15,
    "ride": null,
    "rest": null,
    "start": "Leh",
    "end": "Leh",
    "km": null,
    "alt": "5,798 m",
    "pass": "Umling La",
    "bike": "Royal Enfield Himalayan 450",
    "support": "Included",
    "terrain": 4,
    "riderlvl": 3,
    "rider": 3195,
    "pillion": 2695,
    "blurb": "A 15-day journey through Ladakh's highest motorable passes, ancient valleys, Buddhist monasteries and three lakes above 4,000 metres.",
    "why": [
      "Everything on this ride happens above 3,000 metres. Leh itself sits at 3,500, and from there the road only goes up: Khardung La, Chang La, the Changthang Plateau and finally Umling La at 5,798 metres, the highest road a rider can actually ride.",
      "This is the ride Discover Himalayas was built on. The pacing is the point: acclimatisation days before the first big pass, lakes and monasteries placed so the altitude comes in steps, and the highest road saved for the second week."
    ],
    "fith": "For riders who want altitude more than speed",
    "vinod": "The first time I crossed this road there wasn't even a proper road.",
    "route": [
      "Beginning in Leh, the route gradually climbs through Ladakh's valleys and mountain passes before reaching Nubra, Pangong, Hanle and the Changthang Plateau. Carefully paced for acclimatisation, it culminates at Umling La, the highest road a rider can actually ride, before returning past Tso Moriri and Tso Kar to Leh."
    ],
    "hl": [
      "12 high mountain passes",
      "3 high-altitude Himalayan lakes",
      "Ancient Buddhist monasteries",
      "The Changpa nomadic plateau",
      "The Indus and Nubra valleys"
    ],
    "fit": [
      "Days are long and the air is thin. Nobody rides fast here; the skill is holding concentration for six hours on gravel at 5,000 metres while your body works harder than usual.",
      "You should have several multi-day tours behind you, be comfortable on loose surfaces, and be fit enough that a 5 a.m. start at altitude is tiring rather than dangerous. Acclimatisation is built in; patience is not, so bring your own."
    ],
    "stages": [
      [
        "The high passes",
        "The road climbs steadily above the tree line, crossing some of Ladakh's highest mountain passes before descending into the valleys beyond.",
        "Pass summit above the tree line, prayer flags"
      ],
      [
        "The Indus Valley",
        "Following the Indus, the route passes Hemis, Thiksey and Alchi, villages green with apricot trees against bare rock, before turning towards the high valleys.",
        "Monastery above the Indus, bikes in foreground"
      ],
      [
        "Nubra Valley",
        "Crossing Khardung La, the road descends into Nubra, where high mountain landscapes give way to the unexpected green oasis and sand dunes of Hunder.",
        "Hunder dunes, Khardung La descent"
      ],
      [
        "Pangong",
        "The route crosses Chang La before reaching Pangong Lake, where the road follows the changing colours of the lake beneath the mountains.",
        "Lakeshore road, drone wide"
      ],
      [
        "Hanle and the Changthang",
        "Beyond Pangong, the journey enters the remote Changthang Plateau, travelling through vast open landscapes and the territory of Changpa nomadic communities.",
        "Changpa camp, open plateau"
      ],
      [
        "The highest road",
        "The defining stage of the journey reaches Umling La at 5,798 metres before continuing through some of Ladakh's most remote terrain towards Tso Moriri and the Rupshu Plateau.",
        "Umling La marker, group shot"
      ],
      [
        "The high lakes",
        "The route continues through the high plateaus around Tso Moriri and Tso Kar before crossing the final passes and descending back towards the Indus Valley and Leh.",
        "Tso Moriri or Tso Kar at dawn"
      ]
    ],
    "dates": [
      [
        "25 July to 8 August 2027",
        "open"
      ],
      [
        "8 to 22 August 2027",
        "open"
      ]
    ],
    "inc": [
      "Motorcycle with comprehensive insurance, fuel, oil and spares",
      "Support vehicles for luggage, with seats for pillions",
      "14 nights in handpicked hotels and deluxe camps, double occupancy, en-suite",
      "All meals Leh to Leh with soft drinks (free-day meals in Leh excluded)",
      "Road captain, mechanic, permits and entry fees"
    ],
    "itin": []
  },
  "mustang": {
    "name": "Upper Mustang & Manang",
    "region": "Upper Mustang",
    "country": "Nepal",
    "days": 15,
    "ride": null,
    "rest": null,
    "start": "Kathmandu",
    "end": "Pokhara",
    "km": null,
    "alt": "4,660 m",
    "pass": "Kora La",
    "bike": "Royal Enfield Himalayan 450",
    "support": "Included",
    "terrain": 5,
    "riderlvl": 4,
    "rider": null,
    "pillion": null,
    "blurb": "A 15-day journey through the Annapurna region and into the ancient kingdom of Upper Mustang, across some of Nepal's most challenging mountain roads.",
    "why": [
      "Upper Mustang was closed to outsiders until 1992 and still needs a restricted-area permit. The road in follows the Kali Gandaki, which cuts between Annapurna and Dhaulagiri in one of the deepest gorges on earth, then climbs into a dry, wind-carved landscape that looks more like Tibet than Nepal.",
      "Two very different Nepals in one fortnight: the green Annapurna Circuit up to Manang at 3,500 metres, then the walled city of Lo Manthang, the cave settlements and the border at Kora La, 4,660 metres."
    ],
    "fith": "For riders who are happy when the tarmac ends",
    "vinod": "",
    "route": [
      "Beginning in Kathmandu, the route heads towards Gorkha before joining the Annapurna Circuit and climbing gradually towards Manang. From there, it descends through the Kali Gandaki Gorge before rising again towards Muktinath and Upper Mustang.",
      "The journey continues to Lo Manthang and the Tibetan border before turning south through Marpha and towards Pokhara. Along the way, the landscape changes from green valleys and forests to dry mountain valleys and the high desert of Mustang."
    ],
    "hl": [
      "The Annapurna Circuit",
      "Manang at 3,500 metres",
      "The Kali Gandaki Gorge",
      "Muktinath Temple",
      "Lo Manthang, the walled city",
      "Kora La, gateway to Tibet",
      "Ancient cave settlements",
      "Tibetan nomadic communities"
    ],
    "fit": [
      "Most of the route beyond Muktinath is gravel, rock and dry riverbed, with steep climbs and narrow shelves where there is no room for a mistake. This is the hardest surface on any of our journeys.",
      "Real off-road experience is a requirement, not a preference. You need to pick a line on loose rock, control a loaded Himalayan on a steep descent, and keep that up for a long day."
    ],
    "stages": [
      [
        "The Annapurna Circuit",
        "The road climbs through green valleys and mountain villages before reaching Manang, with the Annapurna and Manaslu ranges rising above the route.",
        "Green valley road, Annapurna behind"
      ],
      [
        "The Kali Gandaki Gorge",
        "The route follows the Kali Gandaki through one of the world's deepest gorges, with the Annapurna and Dhaulagiri ranges towering on either side.",
        "Gorge road, river below"
      ],
      [
        "Into Upper Mustang",
        "Beyond Muktinath, the landscape changes dramatically. Green valleys give way to barren cliffs, dry riverbeds and the open landscapes of Mustang.",
        "Dry riverbed, eroded cliffs"
      ],
      [
        "Lo Manthang",
        "The ancient walled city sits at the heart of Upper Mustang, surrounded by narrow streets, centuries-old monasteries and Tibetan-Buddhist architecture.",
        "Walled city from above"
      ],
      [
        "The road to Tibet",
        "The route continues towards the Tibetan border, reaching Kora La at 4,660 metres and passing ancient caves and Tibetan nomadic settlements along the way.",
        "Kora La border marker"
      ]
    ],
    "dates": [
      [
        "11 to 25 April 2027",
        "open"
      ]
    ],
    "inc": [
      "Motorcycle with comprehensive insurance, fuel, oil and spares",
      "Support vehicles with seats for pillions",
      "Hotels and lodges, double occupancy",
      "All meals on tour",
      "Road captain, mechanic, Upper Mustang restricted-area permit"
    ],
    "itin": []
  },
  "bhutan": {
    "name": "Land of the Thunder Dragon",
    "region": "Bhutan",
    "country": "Bhutan",
    "days": 11,
    "ride": null,
    "rest": null,
    "start": "Phuentsholing",
    "end": "Paro",
    "km": null,
    "alt": "3,990 m",
    "pass": "Chele La",
    "bike": "Royal Enfield Bullet 500",
    "support": "Included",
    "terrain": 3,
    "riderlvl": 2,
    "rider": null,
    "pillion": null,
    "blurb": "An 11-day journey through Bhutan's winding mountain roads, ancient monasteries, remote valleys and some of the highest motorable passes in the country.",
    "why": [
      "Bhutan limits visitor numbers and charges a daily fee, so the roads are empty, the valleys are quiet and the dzongs are working monasteries rather than museums.",
      "Seven passes link the route: Dochu La with its 108 chortens, Pele La, Trumshing La into the rarely visited east, and Chele La at 3,990 metres, the highest motorable pass in the country, before the descent to Paro and the Tiger's Nest."
    ],
    "fith": "For riders who like a slow road and a long view",
    "vinod": "",
    "route": [
      "Beginning in India, the journey crosses into Bhutan at Phuentsholing before following the Wang Chu River towards Thimphu. From the capital, the route climbs through mountain passes and valleys towards Gangtey and Bumthang.",
      "The journey then heads into the remote east before turning west again through Punakha, the Haa Valley and Paro. Along the way, seven mountain passes connect Bhutan's forests, valleys and high Himalayan landscapes."
    ],
    "hl": [
      "Chele La, Bhutan's highest motorable pass",
      "Trumshing La and the wild east",
      "Bumthang Valley",
      "Phobjikha, the valley of the black-necked cranes",
      "Thimphu, Bhutan's capital",
      "Punakha Dzong",
      "Ancient monasteries and temples",
      "Taktshang, the Tiger's Nest"
    ],
    "fit": [
      "Bhutan's roads are mostly surfaced but rarely straight. The riding is about rhythm: hundreds of corners a day, steady climbs and descents, and the discipline to stop for the view.",
      "A confident rider with a few long tours behind them will be fine. Eleven days with a pass most days is tiring more than technical."
    ],
    "stages": [
      [
        "Into Bhutan",
        "Crossing from India, the road follows the Wang Chu River through deep gorges and steadily climbs towards Thimphu, Bhutan's capital.",
        "Wang Chu gorge road"
      ],
      [
        "The high valleys",
        "The road climbs through Dochu La and Pele La before reaching Gangtey and the Valley of the Black-Necked Cranes.",
        "Dochu La chortens in mist"
      ],
      [
        "Bumthang and the wild east",
        "Beyond Bumthang, the route enters one of Bhutan's more remote regions, crossing Trumshing La and Ura La through changing forests and mountain landscapes.",
        "Forest road, Trumshing La"
      ],
      [
        "The road west",
        "After descending towards the Indian border, the route climbs again through Punakha and towards western Bhutan, following winding mountain roads back towards Paro.",
        "Punakha Dzong across the river"
      ],
      [
        "Chele La and Paro",
        "At 3,990 metres, Chele La is the highest motorable pass in Bhutan. From here, the road descends towards Paro and the Taktshang, or Tiger's Nest, monastery.",
        "Tiger's Nest from the trail"
      ]
    ],
    "dates": [
      [
        "Dates to be announced",
        "request"
      ]
    ],
    "inc": [
      "Motorcycle with comprehensive insurance, fuel, oil and spares",
      "Support vehicles with seats for pillions",
      "Hotels, double occupancy",
      "All meals on tour",
      "Road captain, mechanic, Bhutan permits and guide"
    ],
    "itin": []
  },
  "heaven": {
    "name": "Highway through Heaven",
    "region": "Zanskar",
    "country": "India",
    "days": 14,
    "ride": null,
    "rest": null,
    "start": "Naggar",
    "end": "Naggar",
    "km": null,
    "alt": "5,390 m",
    "pass": "Tanglang La",
    "bike": "Royal Enfield Bullet 500",
    "support": "Included",
    "terrain": 5,
    "riderlvl": 4,
    "rider": null,
    "pillion": null,
    "blurb": "A 14-day journey from the Kullu Valley through Lahaul and Zanskar, across newly opened high-altitude passes and into the Indus Valley and Ladakh.",
    "why": [
      "Zanskar had one road in and one road out until the Shingo La route opened. This ride uses it: over Rohtang, up the Lahaul valley, over Shingo La into a valley of old Buddhist monasteries that most riders have never seen.",
      "Eight passes in fourteen days. The highest, Tanglang La at 5,390 metres, comes on the Manali–Leh Highway after Senge La and the Zanskar Gorge, where the road is cut into the cliff above the river."
    ],
    "fith": "For riders who have done Ladakh and want harder",
    "vinod": "",
    "route": [
      "Beginning in Naggar, the route crosses Rohtang Pass before descending into the Chandra and Lahaul Valleys. From Jispa, the road climbs over Shingo La and enters the remote Zanskar Valley.",
      "The journey continues through the Zanskar Gorge and over Sisir La and Senge La into the Indus Valley before reaching Leh. From there, the route follows the Manali–Leh Highway across the high passes of Ladakh before returning to Naggar through Lahaul."
    ],
    "hl": [
      "Rohtang Pass and the Chandra Valley",
      "Shingo La, into Zanskar",
      "Bardan and Karsha monasteries",
      "The abandoned palace of Zangla",
      "Sisir La and Senge La",
      "The Indus Valley and Sham Valley",
      "Leh and the Manali–Leh Highway",
      "Eight high-altitude passes"
    ],
    "fit": [
      "Gravel, steep hairpins, water on the road and long stretches with no settlement between fuel stops. The Zanskar section is the remotest riding we offer in India.",
      "Good riding experience and confident control of the bike are essential. If you rode Ladakh or Spiti with us and wanted more, this is the one."
    ],
    "stages": [
      [
        "Across Rohtang",
        "Leaving Naggar, the road climbs over Rohtang Pass before descending into the drier landscape of Lahaul and following the Chandra River towards Keylong.",
        "Rohtang hairpins from above"
      ],
      [
        "Into Zanskar",
        "From Jispa, the route leaves the main roads behind and climbs over Shingo La before entering the remote valleys of Zanskar.",
        "Shingo La, gravel track"
      ],
      [
        "Through the Zanskar Gorge",
        "The road follows the Zanskar River through a narrowing gorge, passing Bardan Monastery, Karsha Temple and the abandoned Palace of Zangla.",
        "Bardan Monastery on its rock"
      ],
      [
        "Across the high passes",
        "Sisir La and Senge La take the route into the Indus Valley, with rugged gravel roads, steep climbs and long stretches of remote mountain terrain.",
        "Senge La switchbacks"
      ],
      [
        "Into Ladakh",
        "From the Indus Valley, the route continues through Sham Valley and Leh before joining the Manali–Leh Highway and crossing some of Ladakh's highest passes.",
        "Manali–Leh Highway, Morey plains"
      ],
      [
        "Back to Naggar",
        "After crossing Lachung La, Nakee La and Baralach La, the road descends through Lahaul before returning to the green Kullu Valley and Naggar.",
        "Baralacha La, snow walls"
      ]
    ],
    "dates": [
      [
        "18 to 31 July 2027",
        "open"
      ]
    ],
    "inc": [
      "Motorcycle with comprehensive insurance, fuel, oil and spares",
      "Support vehicles with seats for pillions",
      "Hotels, guesthouses and camps, double occupancy",
      "All meals on tour",
      "Road captain, mechanic, permits"
    ],
    "itin": []
  },
  "tibet": {
    "name": "Little Tibet",
    "region": "Spiti & Kinnaur",
    "country": "India",
    "days": 15,
    "ride": null,
    "rest": null,
    "start": "Naggar",
    "end": "Naggar",
    "km": null,
    "alt": "5,000 m",
    "pass": "",
    "bike": "Royal Enfield Bullet 500",
    "support": "Included",
    "terrain": 4,
    "riderlvl": 3,
    "rider": null,
    "pillion": null,
    "blurb": "A 15-day journey through Kinnaur and Spiti, following the ancient Hindustan–Tibet trade route through high mountain valleys, remote villages and the Tibetan plateau.",
    "why": [
      "The Hindustan–Tibet road was built in the 1850s as a trade route; this journey follows it from the apple orchards of Kinnaur to the high desert of Spiti, where villages sit above 4,000 metres and the monastery at Tabo is over a thousand years old.",
      "The landscape changes a little every day: pine forest, then the Sutlej gorge, then no trees at all. Kunzum Pass and Chandratal close the loop back into Lahaul and down to Naggar."
    ],
    "fith": "For riders who want the whole range, not one pass",
    "vinod": "",
    "route": [
      "Beginning in Naggar, the route travels through the Kullu and Banjar Valleys before crossing into Kinnaur. From Sangla and Kalpa, the landscape becomes increasingly dry as the road enters Spiti through Nako, Giu and Tabo.",
      "The journey continues through Dhankar, Kaza and the remote villages of the Spiti Valley before crossing Kunzum Pass into Lahaul and returning through Chandratal and the Chandra Valley to Naggar."
    ],
    "hl": [
      "The Kullu and Banjar valleys",
      "Jalori Pass and Sarahan",
      "Sangla Valley and Chitkul",
      "The ancient monasteries of Tabo and Dhankar",
      "Kaza and the Pin Valley",
      "Langza, Komik and Demul",
      "Chandratal, the Lake of the Moon",
      "The high desert landscapes of Spiti"
    ],
    "fit": [
      "A mix of good tarmac, broken road and dirt, with the worst stretches on the Kinnaur cliff roads and around Kunzum. Days are long and the altitude builds gradually.",
      "You should be confident on a motorcycle and relaxed about a surface that changes from one corner to the next. Several long tours behind you is the right background."
    ],
    "stages": [
      [
        "Across the Valley of the Gods",
        "The journey begins in Naggar before following the Beas Valley towards Banjar and the remote Thirthan Valley, with a first day on the bikes and the mountain roads ahead.",
        "Thirthan Valley, forest road"
      ],
      [
        "Across Kinnaur",
        "From Sarahan and Kalpa, the route follows the Sutlej towards Sangla and Chitkul, the last village in the valley, before the landscape begins its transition into the high desert.",
        "Chitkul village, Kinner Kailash behind"
      ],
      [
        "Entering Spiti",
        "Beyond Nako, the road passes through Giu and Tabo, home to some of Spiti's oldest Buddhist monasteries, before reaching the ancient capital of Dhankar.",
        "Dhankar Monastery on the ridge"
      ],
      [
        "The high valleys",
        "From Kaza, the route climbs towards Pin Valley, Chicham, Langza, Komik and Demul, travelling through some of the highest inhabited villages and remote plateaus of Spiti.",
        "Langza Buddha, high plateau"
      ],
      [
        "Across Kunzum",
        "The final stage crosses Kunzum Pass into Lahaul and descends towards Chandratal, the high-altitude Lake of the Moon, before following the Chandra Valley back towards Naggar.",
        "Chandratal at first light"
      ]
    ],
    "dates": [
      [
        "4 to 18 July 2027",
        "open"
      ],
      [
        "5 to 19 September 2027",
        "open"
      ]
    ],
    "inc": [
      "Motorcycle with comprehensive insurance, fuel, oil and spares",
      "Support vehicles with seats for pillions",
      "Hotels and guesthouses, double occupancy",
      "All meals on tour",
      "Road captain, mechanic, permits"
    ],
    "itin": []
  },
  "rajasthan": {
    "name": "Royal Rajasthan Ride",
    "region": "Rajasthan",
    "country": "India",
    "days": 13,
    "ride": null,
    "rest": null,
    "start": "Delhi",
    "end": "Delhi",
    "km": null,
    "alt": "Lowland",
    "pass": "",
    "bike": "Royal Enfield Himalayan 411",
    "support": "Included",
    "terrain": 1,
    "riderlvl": 1,
    "rider": null,
    "pillion": null,
    "blurb": "A 13-day journey through the Land of Kings, travelling from Delhi through wildlife reserves, historic forts, desert landscapes and the heritage towns of Rajasthan.",
    "why": [
      "Rajasthan in winter means warm, dry days and cold nights. The ride starts in tiger country at Sariska and Ranthambhore, crosses the Aravallis to Chittorgarh and Ranakpur, and ends deep in the Thar at Jaisalmer before turning back through Bikaner and the painted towns of Shekhawati.",
      "Nights are in heritage hotels: forts and havelis that were family homes before they took guests. The riding is on quiet country roads between them."
    ],
    "fith": "For riders who want long days and good hotels",
    "vinod": "",
    "route": [
      "Beginning outside Delhi, the route heads towards Sariska and Ranthambhore before turning west through Bundi, Bijaipur, Chittorgarh and Ranakpur. From the Aravallis, the journey continues to Jodhpur and deep into the Thar Desert to Jaisalmer.",
      "The return journey crosses the desert towards Bikaner and the historic Shekhawati region, ending in Mandawa before returning to the outskirts of Delhi."
    ],
    "hl": [
      "Sariska and Ranthambhore tiger reserves",
      "Bhangarh Fort and rural Rajasthan",
      "Bundi and its historic palaces",
      "Chittorgarh and Ranakpur",
      "Jodhpur and Mehrangarh Fort",
      "Jaisalmer and the Thar Desert",
      "Bikaner and the living desert",
      "Shekhawati and the painted havelis"
    ],
    "fit": [
      "Flat, mostly well-surfaced roads with plenty of traffic near towns and none at all in the desert. The challenge is distance and Indian traffic, not surface.",
      "A confident rider with good motorcycle control and the patience for town traffic will enjoy this. No off-road skill needed."
    ],
    "stages": [
      [
        "Into the wild",
        "The journey begins outside Delhi before heading towards Sariska and Ranthambhore, where country roads lead into forests once used as royal hunting grounds and now protected as important tiger reserves.",
        "Ranthambhore forest track"
      ],
      [
        "Through rural Rajasthan",
        "From Ranthambhore, the route heads towards Bundi through scattered villages and the rural heartland of Rajasthan, before continuing to Bijaipur and its historic castle.",
        "Bundi stepwell or palace"
      ],
      [
        "Forts and kingdoms",
        "The road continues through Chittorgarh and Ranakpur, bringing together the monumental forts and temples that reflect the history of Rajasthan's Rajput kingdoms.",
        "Chittorgarh ramparts"
      ],
      [
        "Into the Thar",
        "From Ranakpur, the journey reaches Jodhpur and its imposing Mehrangarh Fort before heading deeper into the Thar Desert towards Jaisalmer, where the landscape opens into vast stretches of sand and sky.",
        "Mehrangarh over the blue city"
      ],
      [
        "Across the desert",
        "A day around Jaisalmer allows time to explore the surrounding dunes before the route continues towards Bikaner, with the desert gradually giving way to the historic landscapes of Shekhawati.",
        "Bikes on the dunes, dusk"
      ],
      [
        "The painted towns",
        "The final stage passes through Tal Chapper and Mandawa, travelling through the former Silk Route region of Shekhawati, known for its forts and intricately painted havelis, before returning towards Delhi.",
        "Painted haveli facade, Mandawa"
      ]
    ],
    "dates": [
      [
        "9 to 21 January 2027",
        "full"
      ]
    ],
    "inc": [
      "Motorcycle with comprehensive insurance, fuel, oil and spares",
      "Support vehicles with seats for pillions",
      "Heritage hotels, double occupancy",
      "All meals on tour",
      "Road captain, mechanic"
    ],
    "itin": []
  },
  "goa": {
    "name": "The Ghats & Goa",
    "region": "Western Ghats",
    "country": "India",
    "days": 14,
    "ride": null,
    "rest": null,
    "start": "Goa",
    "end": "Goa",
    "km": null,
    "alt": "Lowland",
    "pass": "",
    "bike": "Royal Enfield Bullet 500",
    "support": "Included",
    "terrain": 2,
    "riderlvl": 2,
    "rider": null,
    "pillion": null,
    "blurb": "A 14-day journey through the Western Ghats, Deccan Plateau and Konkan Coast, combining winding mountain roads, wildlife, ancient kingdoms and the beaches of Goa.",
    "why": [
      "Goa is only the start and the finish. In between, the ride climbs out of the coconut belt into the Western Ghats, crosses the Deccan to Bijapur and Hampi, then drops back through Dandeli's forests and the Kali River to the beaches at Gokarna.",
      "It is the most varied fortnight we run: sea level to plateau, monsoon-green forest to dry rock, with the Vijayanagara ruins at Hampi in the middle of it."
    ],
    "fith": "For riders who want green roads and a beach at the end",
    "vinod": "",
    "route": [
      "Beginning in Goa, the route heads south and east through the state's tropical hinterland before crossing into Maharashtra and climbing into the Western Ghats. From Radhanagari, the road opens onto the Deccan Plateau and continues towards Bijapur and Hampi.",
      "The journey then turns back towards the Western Ghats, passing through forests, wildlife sanctuaries and the Kali River before reaching Gokarna and returning through Dandeli and Mollem to Goa."
    ],
    "hl": [
      "The Western Ghats and tropical forests",
      "Bijapur and the Deccan Plateau",
      "Hampi, capital of the Vijayanagara Kingdom",
      "Sakrebyle Elephant Camp",
      "Jog Falls and Sharavati",
      "Gokarna and the Konkan Coast",
      "Dandeli National Park and the Kali River",
      "The beaches of South Goa"
    ],
    "fit": [
      "Country roads and ghat sections, mostly surfaced, with forest stretches that get rough after rain. Weather is the variable here, not altitude.",
      "Comfortable on a motorcycle and happy with long days in changing conditions. A good first India ride."
    ],
    "stages": [
      [
        "Through Goa's hinterland",
        "The journey begins among the beaches and tropical landscapes of South Goa before heading into the state's quieter hills, spice farms and forested countryside.",
        "Spice farm road, Goa"
      ],
      [
        "Into the Western Ghats",
        "Crossing into Maharashtra, the road climbs through increasingly dense forests, following rivers and winding mountain roads towards Radhanagari Wildlife Sanctuary.",
        "Ghat road in monsoon green"
      ],
      [
        "Across the Deccan",
        "Beyond the Western Ghats, the landscape opens onto the vast Deccan Plateau before reaching Bijapur, with its historic fort, mosques and royal tombs.",
        "Gol Gumbaz, Bijapur"
      ],
      [
        "Into Hampi",
        "Quiet roads lead towards Hampi, where the green rice fields and enormous boulder-strewn landscape surround the ruins of the Vijayanagara Kingdom.",
        "Hampi boulders and river"
      ],
      [
        "Back through the forests",
        "From Hampi, the route returns towards the Western Ghats through fertile plantations and forests, with a stop at the Sakrebyle Elephant Camp before continuing towards Jog Falls.",
        "Jog Falls in full flow"
      ],
      [
        "Along the Konkan Coast",
        "The final stages pass through Yana, Gokarna, Dandeli and Mollem before returning to the beaches of Goa, with the Kali River and Dudhsagar Falls along the way.",
        "Gokarna beach at sunset"
      ]
    ],
    "dates": [
      [
        "4 to 17 January 2027",
        "open"
      ]
    ],
    "inc": [
      "Motorcycle with comprehensive insurance, fuel, oil and spares",
      "Support vehicles with seats for pillions",
      "Hotels, double occupancy",
      "All meals on tour",
      "Road captain, mechanic"
    ],
    "itin": []
  },
  "k2k": {
    "name": "A Wildlife & Spice Trail",
    "region": "Konkan to Kanyakumari",
    "country": "India",
    "days": 15,
    "ride": null,
    "rest": null,
    "start": "South Goa",
    "end": "Kanyakumari",
    "km": null,
    "alt": "2,673 m",
    "pass": "Doddabetta",
    "bike": "Royal Enfield Bullet 500",
    "support": "Included",
    "terrain": 2,
    "riderlvl": 2,
    "rider": null,
    "pillion": null,
    "blurb": "A 15-day journey from the beaches of Goa to the southernmost tip of India, travelling through the Western Ghats, wildlife reserves, tea and spice plantations, historic towns and colonial hill stations.",
    "why": [
      "From the Konkan coast to the southern tip of the subcontinent, where three seas meet at Kanyakumari. On the way: the Hoysala temples at Belur and Halebid, Mysore's palace, the tiger reserves at Bandipur and Mudumalai, and the 36 hairpins up to Ooty.",
      "Tea, coffee and cardamom country fill the second week: Munnar, Kumily, Periyar, then the backwaters and the coast."
    ],
    "fith": "For riders who measure a trip in kilometres",
    "vinod": "",
    "route": [
      "Beginning in South Goa, the route heads along the Konkan Coast before climbing into the forests of the Western Ghats. From Kali and Jog Falls, it continues through coffee country and the historic towns of Belur, Halebid and Mysore.",
      "The journey then crosses into Tamil Nadu, passing through Bandipur, Mudumalai and Ooty before descending towards Kerala. Tea and spice plantations lead to Periyar, Varkala and finally Kanyakumari at the southernmost tip of the Indian mainland."
    ],
    "hl": [
      "The beaches of Goa and the Konkan Coast",
      "The wildlife of the Western Ghats",
      "Kali, Bandipur, Mudumalai and Periyar",
      "Belur and Halebid's Hoysala temples",
      "Mysore and the Maharaja's Palace",
      "Ooty and the Nilgiri Hills",
      "Tea, coffee and spice plantations",
      "Kanyakumari, where three oceans meet"
    ],
    "fit": [
      "Coast roads, forest sections and hill-station climbs, with the hairpins to Ooty and the descent into Kerala as the technical highlights. The main demand is time in the saddle: fifteen days, few of them short.",
      "Good motorcycle control and the stamina for long days. No altitude to worry about."
    ],
    "stages": [
      [
        "Along the Konkan Coast",
        "The journey begins on the beaches of South Goa before heading south along the tropical Konkan Coast, gradually leaving the coast behind as the Western Ghats rise ahead.",
        "Coast road, palms and sea"
      ],
      [
        "Into the Western Ghats",
        "From the Kali River and its surrounding forests, the road climbs through winding mountain country towards Jog Falls, passing quiet roads, spice plantations and the heritage town of Sirsi.",
        "Kali River crossing"
      ],
      [
        "Through coffee country",
        "The route continues through the forests and coffee estates of Karnataka towards Bhadra, before reaching the historic Hoysala temples of Belur and Halebid.",
        "Halebid temple carvings"
      ],
      [
        "Mysore and the Nilgiris",
        "From the Deccan highlands, the journey passes through Bylakuppe and Mysore before entering Bandipur and Mudumalai. The road then climbs through 36 hairpin bends towards Ooty and the summit of Doddabetta.",
        "The 36 hairpins to Ooty"
      ],
      [
        "Through tea and spice country",
        "Descending into Kerala, the route travels through tea and cardamom plantations around Munnar before continuing towards the spice town of Kumily and Periyar Wildlife Sanctuary.",
        "Munnar tea terraces"
      ],
      [
        "To the southernmost tip",
        "The final stretch leaves the hills for the backwaters and coast, passing Varkala before reaching Kanyakumari, where three seas meet at the southernmost tip of the Indian mainland.",
        "Kanyakumari, three seas"
      ]
    ],
    "dates": [
      [
        "23 January to 6 February 2027",
        "open"
      ],
      [
        "6 Feb – 20 Feb 2027 · reversed route",
        "open"
      ]
    ],
    "inc": [
      "Motorcycle with comprehensive insurance, fuel, oil and spares",
      "Support vehicles with seats for pillions",
      "Hotels, double occupancy",
      "All meals on tour",
      "Road captain, mechanic"
    ],
    "itin": []
  }
};

// Order the journeys appear in on /journeys and in the enquiry form
export const ORDER = [
  "ladakh",
  "mustang",
  "heaven",
  "tibet",
  "bhutan",
  "rajasthan",
  "goa",
  "k2k"
];

// Regions that get the "lowland" chip instead of the "Himalaya" chip
export const LOWLAND_REGIONS = ["Rajasthan", "Western Ghats", "Konkan to Kanyakumari", "North East"];

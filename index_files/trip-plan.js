window.ITINERARY_DATA = {
  "document": {
    "title": "Langkawi, Ko Lipe & Bangkok",
    "subtitle": "Bengaluru → Langkawi → Ko Lipe → Bangkok — 10 days, 9 nights",
    "status": "PROPOSED, NOT BOOKED",
    "window": {
      "start": "2026-11-20",
      "end": "2026-11-29",
      "display": "20 Nov – 29 Nov 2026",
      "nights": 9,
      "days": 10
    },
    "group_size": 14,
    "origin": "BLR (Bengaluru)",
    "countries": [
      "Malaysia",
      "Thailand"
    ],
    "split": {
      "langkawi_nights": 3,
      "ko_lipe_nights": 3,
      "bangkok_nights": 3,
      "tarutao": "removed from itinerary"
    },
    "generated_by": "wire_lkg.py --export-json",
    "note": "Derived from the same lkg/*.json sources as the page; matches the site."
  },
  "headline_facts": {
    "flights": {
      "outbound": {
        "carrier": "IndiGo",
        "flight": "6E1043",
        "route": "BLR 12:10 → LGK 18:30",
        "direct": true,
        "duration_min": 380,
        "date": "2026-11-20",
        "price_inr": 15453
      },
      "inter_island": {
        "carrier": "Thai Vietjet",
        "flight": "VZ327",
        "route": "HDY 18:05 → BKK 19:35",
        "direct": true,
        "duration_min": 90,
        "date": "2026-11-26",
        "price_inr": 7440,
        "baggage_inclusive": true
      },
      "return": {
        "carrier": "Air India Express",
        "flight": "IX895",
        "route": "DMK 16:25 → BLR 19:00",
        "direct": true,
        "duration_min": 215,
        "date": "2026-11-29",
        "price_inr": 24871
      },
      "total_flights_inr": 47764,
      "caveat": "VZ327 baggage-inclusive fare; confirm 23kg check-in + 7kg cabin still included at booking. IX895 DMK→BLR evening arrival; allow buffer for DMK immigration."
    },
    "inter_island_ferry": {
      "route": "Telaga Harbour (Langkawi) ↔ Ko Lipe",
      "duration_min": 90,
      "price_myr_one_way": 155,
      "price_myr_return": 310,
      "price_inr_return": 6200,
      "season": "16 Oct 2026 – 31 May 2027 (dates are inside the season)",
      "outbound_times": [
        "09:30 MYT",
        "14:30 MYT"
      ],
      "return_times": [
        "10:30 ICT",
        "16:00 ICT"
      ],
      "return_arrivals_malaysia": [
        "13:00",
        "18:30"
      ],
      "note": "Telaga is the airport-side jetty, 9.74 km / 15 min from LGK."
    },
    "time_zone": {
      "malaysia": "UTC+8",
      "thailand": "UTC+7",
      "note": "Clock goes BACK one hour on the Langkawi crossing. Operator timetables quote departure and arrival in different zones for this reason."
    }
  },
  "itinerary": [
    {
      "day": 1,
      "date_2026": "2026-11-20",
      "location": "BLR → LGK",
      "title": "Fly to Langkawi",
      "items": [
        {
          "label": "Flight",
          "text": "IndiGo 6E1043 12:10→18:30"
        },
        {
          "label": "Transfer",
          "text": "Airport to hotel"
        }
      ]
    },
    {
      "day": 2,
      "date_2026": "2026-11-21",
      "location": "Langkawi",
      "title": "Langkawi SkyCab, Waterfall & Cenang",
      "items": [
        {
          "label": "Morning",
          "text": "Langkawi SkyCab & Oriental Village"
        },
        {
          "label": "Midday",
          "text": "Seven Wells Waterfall (Telaga Tujuh)"
        },
        {
          "label": "Afternoon",
          "text": "Pantai Cenang Beach"
        },
        {
          "label": "Evening",
          "text": "Cenang Walking Street"
        }
      ]
    },
    {
      "day": 3,
      "date_2026": "2026-11-22",
      "location": "Langkawi",
      "title": "Kilim Mangrove, Beaches & Night Market",
      "items": [
        {
          "label": "Morning",
          "text": "Kilim Mangrove Tour"
        },
        {
          "label": "Midday",
          "text": "Tanjung Rhu Beach"
        },
        {
          "label": "Afternoon",
          "text": "Black Sand Beach"
        },
        {
          "label": "Late Afternoon",
          "text": "Eagle Square (Dataran Lang)"
        },
        {
          "label": "Evening",
          "text": "Local Night Market"
        }
      ]
    },
    {
      "day": 4,
      "date_2026": "2026-11-23",
      "location": "LGK → Ko Lipe",
      "title": "Ferry to Ko Lipe (outbound only)",
      "items": [
        {
          "label": "Ferry",
          "text": "Telaga 09:30 MYT / 14:30 MYT → Ko Lipe ~90 min (no return times)"
        },
        {
          "label": "Check-in",
          "text": "Settle in, sunset beach"
        }
      ]
    },
    {
      "day": 5,
      "date_2026": "2026-11-24",
      "location": "Ko Lipe",
      "title": "Koh Tarutao National Park",
      "items": [
        {
          "label": "8:00-9:00 AM",
          "text": "Speedboat from Ko Lipe to Koh Tarutao (arrange an extended on-island stay)."
        },
        {
          "label": "9:00-11:00 AM",
          "text": "Cycle through the jungle to Ao Molae and Ao Son beaches."
        },
        {
          "label": "11:00 AM-12:30 PM",
          "text": "Hike to Lu Du Waterfall."
        },
        {
          "label": "12:30-1:30 PM",
          "text": "Lunch and rest."
        },
        {
          "label": "1:30-3:00 PM",
          "text": "Explore Ao Talo Wao historical prison trail and mangrove boardwalk, if transport and time permit."
        },
        {
          "label": "3:00-4:30 PM",
          "text": "Return to the pier and speedboat to Ko Lipe, subject to your boat schedule."
        },
        {
          "label": "Evening",
          "text": "Relax at the hotel after the adventure."
        }
      ]
    },
    {
      "day": 6,
      "date_2026": "2026-11-25",
      "location": "Ko Lipe",
      "title": "Koh Adang, snorkeling and Walking Street",
      "items": [
        {
          "label": "8:00-9:00 AM",
          "text": "Breakfast at Sunrise Beach."
        },
        {
          "label": "9:00 AM-12:00 PM",
          "text": "Hike to the Koh Adang viewpoints for panoramic views of Ko Lipe."
        },
        {
          "label": "12:00-1:00 PM",
          "text": "Lunch on Ko Lipe."
        },
        {
          "label": "1:00-6:00 PM",
          "text": "Hotel break, shower and relaxation."
        },
        {
          "label": "6:00-8:00 PM",
          "text": "Explore Ko Lipe Walking Street: Thai street food, grilled seafood, banana roti and desserts."
        },
        {
          "label": "8:00 PM onward",
          "text": "Continue exploring the street, browse shops or enjoy a drink."
        }
      ]
    },
    {
      "day": 7,
      "date_2026": "2026-11-26",
      "location": "Ko Lipe → HDY → BKK",
      "title": "Speedboat + van + fly to Bangkok",
      "items": [
        {
          "label": "Speedboat",
          "text": "Ko Lipe 09:30 (Bundhaya) → Pak Bara"
        },
        {
          "label": "Van",
          "text": "Pak Bara → HDY ~13:15"
        },
        {
          "label": "Flight",
          "text": "VZ327 HDY 18:05→19:35 BKK (baggage-inclusive)"
        }
      ]
    },
    {
      "day": 8,
      "date_2026": "2026-11-27",
      "location": "Bangkok",
      "title": "Temples, Muay Thai + Khao San Road",
      "items": [
        {
          "label": "9:00-10:15 AM",
          "text": "Wat Pho - Reclining Buddha (approx Rs.810 entry). Go at opening for photos; pairs with Arun by ferry."
        },
        {
          "label": "10:30 AM-12:00 PM",
          "text": "Wat Arun - cross-river ferry from Tha Tien (approx Rs.15), temple approx Rs.540. Climb the prang before midday heat."
        },
        {
          "label": "1:00-2:30 PM",
          "text": "Grand Palace + Wat Phra Kaew (approx Rs.1,350). Strict dress code: shoulders and knees covered."
        },
        {
          "label": "3:00-5:00 PM",
          "text": "Hotel break - rest through the hottest hours."
        },
        {
          "label": "5:30-9:00 PM",
          "text": "Live Muay Thai at Rajadamnern Stadium (approx Rs.3,780-5,000 2nd/3rd class; book ahead, weekends sell out)."
        },
        {
          "label": "9:15 PM onward",
          "text": "Khao San Road - late-night walk, food and bars."
        }
      ]
    },
    {
      "day": 9,
      "date_2026": "2026-11-28",
      "location": "Bangkok",
      "title": "Chatuchak, Or Tor Kor + Chinatown food walk",
      "items": [
        {
          "label": "9:00 AM-12:30 PM",
          "text": "Chatuchak Weekend Market - free entry, budget approx Rs.1,350-5,400 shopping. Go 9-11 AM; Clock Tower landmark."
        },
        {
          "label": "12:30-1:30 PM",
          "text": "Or Tor Kor Market for Thai food - premium food hall next to Chatuchak."
        },
        {
          "label": "2:00-4:30 PM",
          "text": "Hotel break."
        },
        {
          "label": "5:00-6:15 PM",
          "text": "Talat Noi and Song Wat Road - old-town walk, street art and riverside shophouses."
        },
        {
          "label": "6:15-9:00 PM",
          "text": "Yaowarat Chinatown food walk (approx Rs.1,350-2,700 eating). Arrive as stalls open; peak 8 PM."
        }
      ]
    },
    {
      "day": 10,
      "date_2026": "2026-11-29",
      "location": "DMK → BLR",
      "title": "Return to Bengaluru",
      "items": [
        {
          "label": "Flight",
          "text": "Air India Express IX895 DMK 16:25→19:00"
        },
        {
          "label": "Home",
          "text": "Arrive BLR ~19:00"
        }
      ]
    }
  ],
  "cost_per_head": {
    "line_items": [
      {
        "item": "Flights all 3",
        "inr": 47764
      },
      {
        "item": "Ferry Langkawi-Ko Lipe one-way",
        "inr": 3100
      },
      {
        "item": "Ko Lipe-HDY speedboat+van",
        "inr": 2500
      },
      {
        "item": "Accommodation 2500x9",
        "inr": 22500
      },
      {
        "item": "Activities cable car+Kilim+Tarutao+snorkel",
        "inr": 13000
      },
      {
        "item": "Food 1200x9",
        "inr": 10800
      },
      {
        "item": "Local transport 2-share",
        "inr": 4500
      },
      {
        "item": "Insurance",
        "inr": 2500
      },
      {
        "item": "SIM",
        "inr": 1500
      },
      {
        "item": "Koh Tarutao park fees",
        "inr": 1000
      }
    ],
    "total_inr": 109164,
    "basis": "per person, INR, mid-range estimate",
    "note": "Excludes shopping, alcohol, premium upgrades. Group booking may reduce accommodation per head."
  },
  "decision_day_9": {
    "ferry": "take the 10:30 ICT sailing (lands Langkawi 13:00)",
    "buffer_at_lgk": "5h40m before the 18:40 departure",
    "why_not_1630": "the 16:00 sailing lands 18:30 and cannot make an 18:40 flight",
    "residual_risk": "The 5h40m absorbs a normal sea delay but not a CANCELLED ferry — there is no second sailing that day and the next flight out departs 15:25, already gone. Keep the ferry ticket flexible."
  },
  "visa_and_border": {
    "malaysia": {
      "mdac": {
        "window": "2026-11-17 to 2026-11-19 (3 days before entry)",
        "url": "https://imigresen-online.imi.gov.my/mdac/main",
        "requirements": "Passport valid 6+ months from entry (20 Nov 2026 → valid until 20 May 2027+)",
        "cost": "Free",
        "note": "One MDAC per person; submit 3 days before Malaysia entry"
      },
      "status": "MDAC required — submit 3 days before entry",
      "mandatory_form": "MDAC (Malaysia Digital Arrival Card) at https://imigresen-online.imi.gov.my/mdac/main"
    },
    "thailand": {
      "tdac": {
        "window": "2026-11-23 (day of sea entry at Ko Lipe)",
        "url": "https://tdac.immigration.go.th",
        "requirements": "Domestic ID only for sea entry (no passport upload at Ko Lipe checkpoint)",
        "cost": "Free",
        "critical": "Must complete TDAC on 23 Nov for Ko Lipe sea entry — domestic ID only, not passport"
      },
      "status": "TDAC required for sea entry at Ko Lipe — submit on arrival day"
    },
    "indian_docs_checklist": [
      "Passport (6+ months validity from 20 Nov 2026)",
      "MDAC confirmation (submitted 17-19 Nov)",
      "TDAC confirmation (submitted 23 Nov, domestic ID)",
      "Flight itineraries (6E1043, VZ327, IX895)",
      "Hotel confirmations (Langkawi, Ko Lipe, Bangkok)",
      "Travel insurance (covering Malaysia + Thailand)",
      "Return flight proof (IX895)",
      "Sufficient funds proof (cash/card/forex ~THB 20k + MYR 1k per person)"
    ],
    "passport_rule": "Passport must be valid 6+ months from 20 Nov 2026 (until 20 May 2027+)"
  },
  "money_and_connectivity": {
    "currencies": [
      "MYR (Malaysia)",
      "THB (Thailand, baht only)"
    ],
    "hard_rule": "Do not rely on spending ringgit on Ko Lipe — any business accepting it sets its own rate and it is rarely favourable. Change to baht on Langkawi before boarding.",
    "atm": "three on Ko Lipe: 7-Eleven on Walking Street, opposite Pooh's at the Sunrise end, in front of Harmony. Flat fees ~THB250 — fewer, larger withdrawals, and always choose THB over home-currency conversion.",
    "sim_malaysia": "~₹600. Airport kiosks past customs. Maxis/Hotlink has the strongest island coverage; CelcomDigi close second; U Mobile cheapest but signal drops outside town. Kiosks shut early evening.",
    "sim_thailand": "AIS eSIM ₹2,096 (THB499/8 days, unlimited). Thai law requires passport registration in person for any SIM and there is no useful kiosk at Ko Lipe pier — buy the eSIM online before flying."
  },
  "ground_transport": {
    "langkawi": {
      "public_transport": "none at all — no buses, no trains. Taxi, Grab or rental only.",
      "scooter": "₹2,800 for 4 days at ~RM35/day, rented at the airport (cheaper than the resort strip's RM50+)",
      "licensing": "Carry an International Driving Permit. Malaysia ran JPJ enforcement operations against unlicensed foreign riders in July 2026 — seizure and prosecution, not a warning.",
      "fares": {
        "grab": "RM15-20",
        "zone_taxi": "RM25 fixed (+50% 11pm-7am)"
      }
    },
    "ko_lipe": {
      "size": "3 km end to end, 25–45 min walk",
      "scooter": "not used — availability contested by sources, and unnecessary",
      "sidecar_taxi": "₹210 per trip",
      "songthaew": "~₹210 per short hop",
      "longtail_water_taxi": "₹210-420",
      "app_taxis": "none (no Grab)"
    }
  },
  "activities_langkawi": [
    {
      "category": "Langkawi - 12 experiences",
      "activities": [
        {
          "name": "Langkawi SkyCab + Sky Bridge",
          "price_inr": 1500,
          "price_note": "Approx Rs.1,400-1,700 combo; SkyGlide approx Rs.320 extra, express lane extra",
          "location": "Oriental Village, Pantai Kok",
          "duration": "3-4 hrs",
          "detail": "2.2 km cable car to Gunung Mat Cincang (708 m) plus 125 m curved Sky Bridge with glass sections. Best views on the island.",
          "tip": "Go 9:30-11 AM for clearest views; Wed opens 12:00"
        },
        {
          "name": "Half-day island hopping (shared speedboat)",
          "price_inr": 1600,
          "price_note": "Approx Rs.1,200-2,000 pp + Rs.400 lake entry for foreigners",
          "location": "Depart Pantai Cenang / Porto Malai",
          "duration": "3.5-4 hrs",
          "detail": "3 stops: Dayang Bunting lake swim, Singa Besar eagle watching, Beras Basah beach. Most popular Langkawi boat day.",
          "tip": "Take AM slot for calmer seas"
        },
        {
          "name": "Kilim Karst Geoforest mangrove tour",
          "price_inr": 2200,
          "price_note": "Approx Rs.1,800-3,000 sharing with transfers; private approx Rs.5,400-7,000",
          "location": "Kilim Jetty, NE Langkawi",
          "duration": "3-4 hrs",
          "detail": "UNESCO Geopark river tour: limestone karsts, Bat Cave, Crocodile Cave, eagle feeding, fish farm. Sheltered river, runs rain or shine.",
          "tip": "Lush post-monsoon in Nov; pick eco operator"
        },
        {
          "name": "Pantai Cenang beach + watersports",
          "price_inr": 2000,
          "price_note": "Beach free; parasailing approx Rs.2,000-3,600, jetski 30 min approx Rs.5,000-7,000",
          "location": "Pantai Cenang, SW",
          "duration": "Half-day to evening",
          "detail": "Lively 2 km beach: swim, parasailing, jetski, banana boat, fire shows, sunset bars and cafes.",
          "tip": "Best sunset spot; operators fully active in Nov"
        },
        {
          "name": "Tanjung Rhu beach",
          "price_inr": 0,
          "price_note": "Free; parking approx Rs.100-200",
          "location": "Tanjung Rhu, north tip",
          "duration": "2-3 hrs",
          "detail": "Quiet powder-white beach with clearest water, low-tide sandbars, views to Tarutao islands. No hawkers.",
          "tip": "Go morning low-tide; sheltered when Cenang is choppy"
        },
        {
          "name": "Seven Wells waterfall (Telaga Tujuh)",
          "price_inr": 200,
          "price_note": "Approx Rs.200 adult, Rs.100 child",
          "location": "Gunung Mat Cincang, NW",
          "duration": "2-3 hrs",
          "detail": "7 natural pools plus 91 m falls. 600+ steps to top pools for slides and swim; lower viewpoint easy access.",
          "tip": "Peak flow in Nov; grip shoes, leave if heavy upstream rain"
        },
        {
          "name": "Black Sand Beach + Temurun Falls",
          "price_inr": 0,
          "price_note": "Free / approx Rs.40 at Durian Perangin if added",
          "location": "North coast (Pasir Hitam / Datai)",
          "duration": "1-2 hrs",
          "detail": "Black-gold streaked sand photo stop plus Temurun, tallest 3-tier 200 m roadside fall. Combine with Tanjung Rhu in one north loop.",
          "tip": "Not for swimming; good cloudy-hour stop"
        },
        {
          "name": "Eagle Square (Dataran Lang)",
          "price_inr": 0,
          "price_note": "Free",
          "location": "Kuah Town waterfront",
          "duration": "30-45 min",
          "detail": "Iconic 12 m red-eagle statue, ferry views, night lighting, food trucks. Quick Kuah stop.",
          "tip": "Early AM or sunset; combine with Kuah duty-free"
        },
        {
          "name": "Langkawi night markets (Pasar Malam)",
          "price_inr": 900,
          "price_note": "Entry free; approx Rs.600-1,200 food budget",
          "location": "Rotating: Sat Kuah, Fri Ayer Hangat, Thu Temoyong",
          "duration": "1.5-2 hrs evening",
          "detail": "Local eats: nasi lemak, ayam percik, satay, seafood BBQ, juices, souvenirs at local prices. Sat Kuah is biggest.",
          "tip": "Trip hits Fri+Sat+Sun - ideal"
        },
        {
          "name": "Pulau Payar Marine Park snorkel day",
          "price_inr": 7000,
          "price_note": "Approx Rs.6,600-7,500 adult; promo snorkel-only from approx Rs.2,500",
          "location": "Depart Kuah Jetty, 1 hr boat",
          "duration": "Full day ~8 hrs",
          "detail": "Only true coral marine park day trip: reef sharks, turtles, corals, pontoon snorkelling with gear and lunch included.",
          "tip": "Take seasickness pill; fallback is Kilim + Cenang if cancelled"
        },
        {
          "name": "Kota Mahsuri cultural centre",
          "price_inr": 400,
          "price_note": "Approx Rs.400 adult, Rs.200 child; 9 AM-5 PM",
          "location": "Ulu Melaka, central",
          "duration": "1-1.5 hrs",
          "detail": "Mahsuri legend, Malay house, museum, live dance and music, handicraft demos. Rain-proof culture fix.",
          "tip": "Verify open status - phased reopening in 2025"
        },
        {
          "name": "Laman Padi + Atma Alam Batik Village",
          "price_inr": 550,
          "price_note": "Laman Padi approx Rs.500-600; Atma Alam free entry, approx Rs.600-1,600 only if you paint",
          "location": "Pantai Cenang / Padang Matsirat",
          "duration": "1 hr each",
          "detail": "Rice museum and seaside paddy fields plus batik demo, workshop and gallery. Easy arrival-day or shower-gap stop.",
          "tip": "Close to Cenang hotels; good for photos and souvenirs"
        }
      ]
    }
  ],
  "activities_ko_lipe": [
    {
      "category": "Ko Lipe - 8 experiences",
      "activities": [
        {
          "name": "Inner-zone snorkel: Jabang + Hin Ngam + Koh Yang",
          "price_inr": 1750,
          "price_note": "Approx Rs.1,620-1,890 incl. gear + Rs.540 park fee if not paid",
          "location": "Depart Pattaya / Sunrise Beach",
          "duration": "~6 hrs",
          "detail": "Classic half-day longtail: Jabang soft-coral pinnacle, Hin Ngam black-pebble beach, Koh Yang turtle garden with lunch and fruit.",
          "tip": "Ideal first full day; calm with best early-season viz"
        },
        {
          "name": "Outer-zone snorkel: Rawi + Dong + Khai",
          "price_inr": 2100,
          "price_note": "Approx Rs.1,890-2,300 shared",
          "location": "SW Tarutao Park, 45-60 min boat",
          "duration": "Full day 9 AM-4 PM",
          "detail": "Wilder outer islands: white-sand bays, giant clams, bigger fish, Khai arch photo stop. Only runs when seas calm.",
          "tip": "Late Nov usually operating; check swell forecast"
        },
        {
          "name": "5-7 island full-day combo (inner + outer)",
          "price_inr": 2800,
          "price_note": "Approx Rs.2,300-3,240 incl. lunch",
          "location": "All Tarutao Park",
          "duration": "7-8 hrs",
          "detail": "Best single boat day if only one: covers both zones plus beach lunch. Best value for 3-night trip.",
          "tip": "Tiring but covers most; operators cancel in swell"
        },
        {
          "name": "Afternoon + bioluminescent night snorkel",
          "price_inr": 2200,
          "price_note": "Approx Rs.2,025-2,430",
          "location": "Jabang / sunset side",
          "duration": "13:30-19:00",
          "detail": "Day snorkel ending after dark floating over glowing plankton. Most memorable Lipe experience; new moon 24 Nov 2026 is perfect.",
          "tip": "Nov-Apr only; darkest sky = best glow"
        },
        {
          "name": "Koh Adang viewpoint hike",
          "price_inr": 1900,
          "price_note": "Approx Rs.1,350 taxi boat + park fee already paid; negotiate round-trip pickup",
          "location": "Koh Adang, taxi boat from Sunrise",
          "duration": "Half day",
          "detail": "Steep jungle trail to 3 lookouts with classic postcard view over Ko Lipe. Must-do half day.",
          "tip": "Go 9:30-11 AM; shoes, 1.5 L water, sunscreen"
        },
        {
          "name": "Koh Tarutao day trip - private speedboat charter",
          "price_inr": 4000,
          "price_note": "Approx Rs.4,050 organised; kayak approx Rs.1,350/day extra",
          "location": "~1 hr north by speedboat",
          "duration": "Full day 7-8 hrs",
          "detail": "Ao Pante / Ao Molae bays, 1937-48 prison ruins, mangrove and crocodile cave by kayak, hornbills and monitors.",
          "tip": "Park reopens Nov; ask operators day before, sea can be choppy"
        },
        {
          "name": "Scuba diving: Stonehenge / 8 Mile Rock",
          "price_inr": 4300,
          "price_note": "1 fun dive approx Rs.4,320; Discover Scuba approx Rs.9,450-12,150",
          "location": "Adang Sea Divers / Lipe Dive shops",
          "duration": "Half to full day",
          "detail": "Tarutao's best Andaman diving. Stonehenge 5-25 m for Open Water; 8 Mile pinnacle 16-45 m for Advanced on calm days.",
          "tip": "Season reopens Nov; viz improving daily"
        },
        {
          "name": "Sea kayaking to Koh Usen + Koh Kra",
          "price_inr": 500,
          "price_note": "Approx Rs.400-550/hr, Rs.950-1,350/day",
          "location": "Rent Sunrise Beach (Castaway / Mali)",
          "duration": "2-3 hrs",
          "detail": "10-min paddle to tiny islets for beach-hop and DIY snorkel around rocks. Clearest self-guided snorkel.",
          "tip": "Early morning before wind; life jacket, watch Lipe-Usen current"
        }
      ]
    }
  ],
  "koh_tarutao": {
    "role": "Day 7 day trip from Ko Lipe, inside Thailand",
    "cross_border": "none — both islands are Thai, so the day trip never leaves Thai waters",
    "distance": "~10-12 km north of Ko Lipe; 30-60 min by speedboat",
    "cycling": {
      "road": "~18 km single-lane, nearly traffic-free, flat, in decent condition",
      "bikes": "park-owned MTB ~₹1,050-2,100/day, rented at the visitor centre",
      "fleet_risk": "No reservation system and no published fleet size; sources warn the bikes 'take a beating'. Assume 8-12 bikes for 14 people and let the rest walk — that is a good outcome, not a failure.",
      "best_time": "mid-morning or the last two hours before the boat. No lighting, so no dusk riding.",
      "hazards": "macaques, wild boar, cattle and staff motorbikes share the road; patchy grip, sand on the carriageway, leaf fall",
      "not_rideable": "Toe-Boo / Pha To Bu cliff viewpoint (~80 m) is foot access only"
    },
    "shape": [
      "08:00 gather on the beach — boats board from sand, not a pier",
      "08:00-08:45 speedboat north (allow 60)",
      "09:30-10:45 Crocodile Cave by longtail/kayak, charged separately",
      "10:45-12:00 ride or walk the road to Ao Molae (4.2 km) and on toward Ao Son",
      "12:00-13:00 lunch at a ranger restaurant (often closes 14:00)",
      "13:00-15:00 former prison camp at Talo Udang; Toe-Boo cliff on foot",
      "15:00-17:00 boat back — the park shuts at 16:30"
    ],
    "other": "Lu Du waterfall on foot, wildlife and birdwatching (~110 species), kayaking ~₹2,100/day. Snorkelling here is weaker than Ko Lipe — park staff say so.",
    "confirm_before_paying": [
      "the 2026/27 season has formally opened and daily boats are running",
      "the return-boat time IN WRITING (Lipe-bound stopovers only call if HQ is told 4+ are waiting)",
      "how far into Crocodile Cave entry is currently permitted (tide-dependent)",
      "bike availability for the group"
    ],
    "on_island": "no ATM; phone signal poor — carry cash"
  },
  "alternatives_to_water_days": {
    "framing": "Exactly one snorkel day (Day 6). These need no swimming and no extra cost.",
    "options": [
      {
        "option": "Day 8 — Koh Adang hike",
        "detail": "10-15 min boat ride then a marked jungle trail to the Pirate Waterfall and Chado Cliff viewpoint. Moderate, muddy in places. Go early."
      },
      {
        "option": "Day 8 — island beaches on foot",
        "detail": "Sunrise, Sunset and Karma beaches; Walking Street is 25 min end to end. Karma is a hillside path or a ~₹260 water taxi."
      },
      {
        "option": "Langkawi land days",
        "detail": "SkyCab + SkyBridge, Underwater World, Tropical Spice Garden, Kuah duty-free, Tanjung Rhu. Day 4 is a free buffer and can absorb these."
      },
      {
        "option": "Scuba, as the upgrade from snorkelling",
        "detail": "Stonehenge — granite pinnacles in soft coral, 10-15 min from the beach. Try Scuba needs no certification, ~₹11,340 for one dive. Caps are 1-2 students per instructor, so 14 people need 3-4 slots, not one booking."
      },
      {
        "option": "On-island transport, for reference",
        "detail": "Scooters for Langkawi only (~₹700/day, carry an IDP). On Ko Lipe, walk."
      }
    ]
  },
  "settled_decisions": [
    "4 nights Langkawi + 4 nights Ko Lipe",
    "Nonstop flights both ways (IndiGo 6E1043 out, 6E1042 back)",
    "Scooter on Langkawi — there is no public transport on the island",
    "Shared boats, one snorkel day — two longtails on Day 6, nothing chartered",
    "Return flight is afternoon/evening (18:40), so no buffer night on Langkawi is needed",
    "Everyone cycles at Koh Tarutao — send someone ahead to reserve bikes",
    "Scuba offered alongside snorkelling"
  ],
  "season_and_weather": {
    "window": "27 Nov – 5 Dec sits inside the Langkawi dry-season transition and the Ko Lipe / Tarutao open season (mid-Oct to mid-May).",
    "expect": "30-32°C days, 23-24°C nights, high humidity, UV 11-12, and short late-afternoon squalls rather than washouts. ~28°C sea temperature, so no wetsuit needed for snorkelling.",
    "practical": "Book morning departures for anything on the water and keep an afternoon land-based fallback (Underwater World, SkyCab). Do not pre-book non-refundable boat excursions on the first morning."
  },
  "still_to_confirm": [
    "the exact 2026/27 ferry season dates",
    "written per-head all-in quotes for 14 on the snorkel day and the Tarutao tour",
    "a 14-seat flight quote"
  ],
  "confidence_and_provenance": {
    "firm": [
      "live flight fares (1 adult)",
      "ferry fares and timetables",
      "park and activity entry fees"
    ],
    "indicative": [
      "hotel rates (OTAs refused to quote for these dates; worked from seasonal averages with an explicit peak premium)",
      "activity prices (published rates, will move on a group quote)"
    ],
    "known_data_corrections_made": [
      "THB→INR recomputed at 4.2 after a research pass wrongly used 1:20",
      "timezone: Thailand is UTC+7 vs Malaysia UTC+8 — clock goes back one hour; verified against the 09:30 MYT → 10:00 ICT timetable",
      "ferry corrected from RM180 to RM155 one-way (Telaga published rate)",
      "a malformed price string rendered a THB amount labelled as INR — fixed at source"
    ]
  },
  "days": [
    {
      "day": 1,
      "date_2026": "2026-11-20",
      "location": "BLR → LGK",
      "title": "Fly to Langkawi",
      "items": [
        {
          "label": "Flight",
          "text": "IndiGo 6E1043 12:10→18:30"
        },
        {
          "label": "Transfer",
          "text": "Airport to hotel"
        }
      ]
    },
    {
      "day": 2,
      "date_2026": "2026-11-21",
      "location": "Langkawi",
      "title": "Langkawi SkyCab, Waterfall & Cenang",
      "items": [
        {
          "label": "Morning",
          "text": "Langkawi SkyCab & Oriental Village"
        },
        {
          "label": "Midday",
          "text": "Seven Wells Waterfall (Telaga Tujuh)"
        },
        {
          "label": "Afternoon",
          "text": "Pantai Cenang Beach"
        },
        {
          "label": "Evening",
          "text": "Cenang Walking Street"
        }
      ]
    },
    {
      "day": 3,
      "date_2026": "2026-11-22",
      "location": "Langkawi",
      "title": "Kilim Mangrove, Beaches & Night Market",
      "items": [
        {
          "label": "Morning",
          "text": "Kilim Mangrove Tour"
        },
        {
          "label": "Midday",
          "text": "Tanjung Rhu Beach"
        },
        {
          "label": "Afternoon",
          "text": "Black Sand Beach"
        },
        {
          "label": "Late Afternoon",
          "text": "Eagle Square (Dataran Lang)"
        },
        {
          "label": "Evening",
          "text": "Local Night Market"
        }
      ]
    },
    {
      "day": 4,
      "date_2026": "2026-11-23",
      "location": "LGK → Ko Lipe",
      "title": "Ferry to Ko Lipe (outbound only)",
      "items": [
        {
          "label": "Ferry",
          "text": "Telaga 09:30 MYT / 14:30 MYT → Ko Lipe ~90 min (no return times)"
        },
        {
          "label": "Check-in",
          "text": "Settle in, sunset beach"
        }
      ]
    },
    {
      "day": 5,
      "date_2026": "2026-11-24",
      "location": "Ko Lipe",
      "title": "Koh Tarutao National Park",
      "items": [
        {
          "label": "8:00-9:00 AM",
          "text": "Speedboat from Ko Lipe to Koh Tarutao (arrange an extended on-island stay)."
        },
        {
          "label": "9:00-11:00 AM",
          "text": "Cycle through the jungle to Ao Molae and Ao Son beaches."
        },
        {
          "label": "11:00 AM-12:30 PM",
          "text": "Hike to Lu Du Waterfall."
        },
        {
          "label": "12:30-1:30 PM",
          "text": "Lunch and rest."
        },
        {
          "label": "1:30-3:00 PM",
          "text": "Explore Ao Talo Wao historical prison trail and mangrove boardwalk, if transport and time permit."
        },
        {
          "label": "3:00-4:30 PM",
          "text": "Return to the pier and speedboat to Ko Lipe, subject to your boat schedule."
        },
        {
          "label": "Evening",
          "text": "Relax at the hotel after the adventure."
        }
      ]
    },
    {
      "day": 6,
      "date_2026": "2026-11-25",
      "location": "Ko Lipe",
      "title": "Koh Adang, snorkeling and Walking Street",
      "items": [
        {
          "label": "8:00-9:00 AM",
          "text": "Breakfast at Sunrise Beach."
        },
        {
          "label": "9:00 AM-12:00 PM",
          "text": "Hike to the Koh Adang viewpoints for panoramic views of Ko Lipe."
        },
        {
          "label": "12:00-1:00 PM",
          "text": "Lunch on Ko Lipe."
        },
        {
          "label": "1:00-6:00 PM",
          "text": "Hotel break, shower and relaxation."
        },
        {
          "label": "6:00-8:00 PM",
          "text": "Explore Ko Lipe Walking Street: Thai street food, grilled seafood, banana roti and desserts."
        },
        {
          "label": "8:00 PM onward",
          "text": "Continue exploring the street, browse shops or enjoy a drink."
        }
      ]
    },
    {
      "day": 7,
      "date_2026": "2026-11-26",
      "location": "Ko Lipe → HDY → BKK",
      "title": "Speedboat + van + fly to Bangkok",
      "items": [
        {
          "label": "Speedboat",
          "text": "Ko Lipe 09:30 (Bundhaya) → Pak Bara"
        },
        {
          "label": "Van",
          "text": "Pak Bara → HDY ~13:15"
        },
        {
          "label": "Flight",
          "text": "VZ327 HDY 18:05→19:35 BKK (baggage-inclusive)"
        }
      ]
    },
    {
      "day": 8,
      "date_2026": "2026-11-27",
      "location": "Bangkok",
      "title": "Temples, Muay Thai + Khao San Road",
      "items": [
        {
          "label": "9:00-10:15 AM",
          "text": "Wat Pho - Reclining Buddha (approx Rs.810 entry). Go at opening for photos; pairs with Arun by ferry."
        },
        {
          "label": "10:30 AM-12:00 PM",
          "text": "Wat Arun - cross-river ferry from Tha Tien (approx Rs.15), temple approx Rs.540. Climb the prang before midday heat."
        },
        {
          "label": "1:00-2:30 PM",
          "text": "Grand Palace + Wat Phra Kaew (approx Rs.1,350). Strict dress code: shoulders and knees covered."
        },
        {
          "label": "3:00-5:00 PM",
          "text": "Hotel break - rest through the hottest hours."
        },
        {
          "label": "5:30-9:00 PM",
          "text": "Live Muay Thai at Rajadamnern Stadium (approx Rs.3,780-5,000 2nd/3rd class; book ahead, weekends sell out)."
        },
        {
          "label": "9:15 PM onward",
          "text": "Khao San Road - late-night walk, food and bars."
        }
      ]
    },
    {
      "day": 9,
      "date_2026": "2026-11-28",
      "location": "Bangkok",
      "title": "Chatuchak, Or Tor Kor + Chinatown food walk",
      "items": [
        {
          "label": "9:00 AM-12:30 PM",
          "text": "Chatuchak Weekend Market - free entry, budget approx Rs.1,350-5,400 shopping. Go 9-11 AM; Clock Tower landmark."
        },
        {
          "label": "12:30-1:30 PM",
          "text": "Or Tor Kor Market for Thai food - premium food hall next to Chatuchak."
        },
        {
          "label": "2:00-4:30 PM",
          "text": "Hotel break."
        },
        {
          "label": "5:00-6:15 PM",
          "text": "Talat Noi and Song Wat Road - old-town walk, street art and riverside shophouses."
        },
        {
          "label": "6:15-9:00 PM",
          "text": "Yaowarat Chinatown food walk (approx Rs.1,350-2,700 eating). Arrive as stalls open; peak 8 PM."
        }
      ]
    },
    {
      "day": 10,
      "date_2026": "2026-11-29",
      "location": "DMK → BLR",
      "title": "Return to Bengaluru",
      "items": [
        {
          "label": "Flight",
          "text": "Air India Express IX895 DMK 16:25→19:00"
        },
        {
          "label": "Home",
          "text": "Arrive BLR ~19:00"
        }
      ]
    }
  ],
  "cost": {
    "line_items": [
      {
        "item": "Flights (BLR-LGK, HDY-BKK, DMK-BLR)",
        "inr": 47764
      },
      {
        "item": "Inter-island ferry return",
        "inr": 6200
      },
      {
        "item": "Accommodation (per-head 9 nights)",
        "inr": 22500
      },
      {
        "item": "Activities & tours",
        "inr": 42000
      },
      {
        "item": "Food & local transport",
        "inr": 56000
      },
      {
        "item": "Visas (Malaysia eVisa + Thailand VOA)",
        "inr": 14000
      },
      {
        "item": "Travel insurance",
        "inr": 14000
      },
      {
        "item": "Buffer / misc",
        "inr": 28000
      }
    ],
    "total_inr": 230464,
    "basis": "per person, INR, mid-range estimate",
    "note": "Excludes shopping, alcohol, premium upgrades. Group booking may reduce accommodation per head."
  },
  "budget": [
    {
      "item": "Flights all 3",
      "cost": 47764
    },
    {
      "item": "Ferry Langkawi-Ko Lipe one-way",
      "cost": 3100
    },
    {
      "item": "Ko Lipe-HDY speedboat+van",
      "cost": 2500
    },
    {
      "item": "Accommodation 2500x9",
      "cost": 22500
    },
    {
      "item": "Activities cable car+Kilim+Tarutao+snorkel",
      "cost": 13000
    },
    {
      "item": "Food 1200x9",
      "cost": 10800
    },
    {
      "item": "Local transport 2-share",
      "cost": 4500
    },
    {
      "item": "Insurance",
      "cost": 2500
    },
    {
      "item": "SIM",
      "cost": 1500
    },
    {
      "item": "Koh Tarutao park fees",
      "cost": 1000
    }
  ],
  "activities_bangkok": [
    {
      "category": "Bangkok - 10 experiences",
      "activities": [
        {
          "name": "Grand Palace + Wat Phra Kaew",
          "price_inr": 1300,
          "price_note": "Approx Rs.1,350 foreigner; open 8:30-16:30",
          "location": "Rattanakosin, Old City",
          "duration": "2-3 hrs",
          "detail": "Most important sight: ornate royal complex with Emerald Buddha plus textile museum. Strict dress code.",
          "tip": "Go 8:30-10:30; beware closed-today scammers"
        },
        {
          "name": "Wat Pho (Reclining Buddha)",
          "price_inr": 800,
          "price_note": "Approx Rs.810, cash; open 8 AM-7:30 PM",
          "location": "Next to Grand Palace, 10-min walk",
          "duration": "1.5-2 hrs",
          "detail": "46 m golden Reclining Buddha plus 1,000+ images; birthplace of Thai massage. Pairs with Palace half-day.",
          "tip": "Early morning for photos; courtyards hot midday"
        },
        {
          "name": "Wat Arun (Temple of Dawn)",
          "price_inr": 550,
          "price_note": "Approx Rs.540 + Rs.15 ferry; open 8 AM-6 PM",
          "location": "Thonburi side, ferry from Tha Tien",
          "duration": "1-1.5 hrs",
          "detail": "Iconic riverside prang for climb and sunset photos plus night illumination from across the river.",
          "tip": "November evenings clearest for sunset"
        },
        {
          "name": "Chatuchak Weekend Market",
          "price_inr": 0,
          "price_note": "Free entry; budget approx Rs.1,350-5,400 shopping",
          "location": "Chatuchak, BTS Mo Chit / MRT Chatuchak",
          "duration": "3-5 hrs",
          "detail": "World's largest weekend market: 8,000-15,000 stalls for fashion, souvenirs, art, street food. Fits Sat Nov 28 perfectly.",
          "tip": "Go 9-11 AM; Clock Tower landmark, haggle on 3+ items"
        },
        {
          "name": "Yaowarat Chinatown night food walk",
          "price_inr": 1800,
          "price_note": "DIY approx Rs.1,350-2,700 eating; guided approx Rs.3,240-4,860",
          "location": "Yaowarat Rd, MRT Wat Mangkon",
          "duration": "2.5-3.5 hrs evening",
          "detail": "Bangkok's food soul: T&K grilled river prawns, roll noodles, Michelin dough sticks, neon and woks.",
          "tip": "Arrive ~18:00; peak 20:00; late-Nov evenings ideal"
        },
        {
          "name": "Jodd Fairs Ratchada night market",
          "price_inr": 1400,
          "price_note": "Free entry; approx Rs.810-2,160 food/shopping",
          "location": "Ratchadaphisek, MRT Cultural Centre Exit 4",
          "duration": "2-3 hrs evening",
          "detail": "Best all-rounder night market: 1,500+ food and fashion stalls, seafood, Isaan, desserts. Daily 17:00-01:00.",
          "tip": "Liveliest 19-21h; go Ratchada site, not Rama IX"
        },
        {
          "name": "ICONSIAM + MBK (mall contrast)",
          "price_inr": 0,
          "price_note": "Free entry; food approx Rs.400-1,080",
          "location": "Thonburi riverside / Siam",
          "duration": "2-4 hrs",
          "detail": "ICONSIAM luxury riverside plus SookSiam Thai food market versus MBK 2,000+ budget shops and food court. AC midday escape.",
          "tip": "Free shuttle boat to ICONSIAM from Sathorn Pier"
        },
        {
          "name": "Jim Thompson House Museum",
          "price_inr": 650,
          "price_note": "Approx Rs.675 adult; open 10 AM-5 PM",
          "location": "Pathum Wan, BTS National Stadium",
          "duration": "1.5-2 hrs",
          "detail": "Silk king's teak-house compound with art collection, 35-min guided tour plus shop and cafe. Good midday culture stop.",
          "tip": "Walk-ins OK; pairs with malls"
        },
        {
          "name": "Lumpini Park",
          "price_inr": 0,
          "price_note": "Free; swan boats approx Rs.110",
          "location": "Silom / Sathorn, MRT Silom",
          "duration": "1-2 hrs",
          "detail": "57 ha green lung: lake, run loop, paddle boats, water monitors, winter Sunday concerts. Open 4:30 AM-10 PM.",
          "tip": "Cool November mornings best; early for lizards"
        },
        {
          "name": "Muay Thai live fight",
          "price_inr": 4500,
          "price_note": "Approx Rs.3,780-5,000 2nd/3rd class, Rs.6,890 club, Rs.9,590 VIP",
          "location": "Rajadamnern or Lumpinee Stadium",
          "duration": "2.5-3 hrs evening",
          "detail": "Authentic fight night: 6-8 bouts with live orchestra and electric crowd. Thu-Sun cards fit Nov 26-29; Sat has RWS.",
          "tip": "Indoor weather-proof; book early, weekends sell out"
        }
      ]
    }
  ]
};
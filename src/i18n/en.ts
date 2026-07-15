import type { Dictionary } from "./fr";

/**
 * Dictionnaire ANGLAIS.
 * Le typage `: Dictionary` garantit que la structure est identique à fr.ts —
 * une clé manquante ou en trop déclenche une erreur au typecheck.
 */
const en: Dictionary = {
  meta: {
    home: {
      title: "Refuge du Nid d'Aigle — A halt at the edge of the glaciers",
      description:
        "Mountain refuge at 2,412 m in the Mont Blanc Massif, in the commune of Saint-Gervais. Booking, rates and access.",
    },
    tarifs: {
      title: "Rates & Booking — Refuge du Nid d'Aigle",
      description:
        "Rates and online booking for an overnight stay at the Refuge du Nid d'Aigle, 2026 season.",
    },
    contact: {
      title: "Contact & Access — Refuge du Nid d'Aigle",
      description:
        "How to reach the Refuge du Nid d'Aigle: Tramway du Mont-Blanc, hiking, contact details.",
    },
    about: {
      title: "About — Refuge du Nid d'Aigle",
      description:
        "The story of the Refuge du Nid d'Aigle since 1933, its location and its role on the normal route up Mont Blanc.",
    },
  },

  routes: {
    home: "",
    tarifs: "rates",
    about: "about",
    contact: "contact",
  },

  nav: {
    home: "Home",
    tarifs: "Rates & Booking",
    about: "About",
    contact: "Contact",
  },

  footer: {
    title: "Refuge du Nid d'Aigle",
    tagline: "2,412 m · Mont Blanc Massif",
    navHeading: "Navigation",
    contactHeading: "Contact",
    contactLines: [
      { text: "04 50 58 05 78", href: "tel:+33450580578" },
      { text: "refuge@nidaigle.com", href: "mailto:refuge@nidaigle.com" },
      { text: "Saint-Gervais-les-Bains" },
    ],
    seasonHeading: "Season",
    seasonLines: ["Open June to September", "Booking recommended"],
    copyright: "© 2026 — Bak Studio",
  },

  home: {
    hero: {
      eyebrow: "Run by enthusiasts · Since 1933",
      title: "A halt suspended<br><em>at the edge of the glaciers.</em>", // HTML
      cta: "Book a night",
      stats: [
        { label: "Altitude", value: "2,412 m" },
        { label: "Beds", value: "30" },
        { label: "Season", value: "June → Sept." },
        { label: "Access", value: "Tramway · Hiking" },
      ],
    },
    intro: {
      eyebrow: "01 / The refuge",
      title: "A waypoint. <em>A destination.</em>", // HTML
      body: "The Nid d'Aigle is the meeting point between two mountain worlds: day hikers coming up to enjoy a meal and the view over the glaciers, and mountaineers climbing towards the summit of Mont Blanc or making their way back down. On the way up as on the way down, it is not merely a passage — it is a destination in its own right.",
      link: "Read the story →",
    },
    cards: {
      eyebrow: "02 / Plan your visit",
      title: "Three things to know before heading up.",
      more: "Learn more →",
      items: [
        {
          n: "01",
          title: "Rates & Booking",
          target: "tarifs",
          desc: "Half board, overnight-only or packed lunch. See the 2026 rates and book your bed online.",
        },
        {
          n: "02",
          title: "Access",
          target: "contact",
          desc: "By the Tramway du Mont-Blanc or on foot from Bionnassay. Two paths to the refuge, with no road access.",
        },
        {
          n: "03",
          title: "About",
          target: "about",
          desc: "A refuge on the normal route up Mont Blanc since 1933. Its history, its location, its role between valley and summit.",
        },
      ],
    },
  },

  tarifs: {
    header: {
      eyebrow: "02 / Rates & Booking · 2026 Season",
      title: "Rates &amp;<br><em>booking</em>.", // HTML
    },
    booking: {
      eyebrow: "Online booking",
      title: "Book your <em>overnight stay</em>.", // HTML
      intro:
        "Booking is handled online, on the Pays du Mont-Blanc refuge reservation platform. Select your dates and type of bed, then confirm your stay in just a few minutes.",
      cta: "Book online →",
      ctaHref:
        "https://www.monrefugepaysdumontblanc.com/uk/il4-refuge_i136101-refuge-du-nid-d-aigle.aspx",
      // HTML — contains a mailto link
      fallback:
        "If no places are available for online booking, email us at <a href='mailto:refuge@nidaigle.com'>refuge@nidaigle.com</a>.",
    },
    practical: {
      eyebrow: "Good to know",
      title: "The refuge <em>in practice</em>.", // HTML
      rows: [
        { label: "Capacity", value: "30 beds" },
        { label: "Meals", value: "Single set menu, vegetarian option on request" },
        { label: "Blankets", value: "Provided — sleeping-bag liner required" },
        { label: "Water", value: "Non-potable: bring your own, purchase possible" },
        { label: "Shower", value: "No shower" },
        { label: "Pets", value: "Not allowed for overnight stays" },
      ],
    },
    pricing: {
      eyebrow: "Rate card",
      columns: ["Service", "Adult", "13-18", "6-12", "Under 6"],
      rows: [
        {
          name: "Half board",
          sub: "Overnight + dinner + breakfast",
          prices: ["80 €*", "72 €", "55 €*", "40 €"],
        },
        { name: "Overnight only", sub: "Bed only", prices: ["30 €*", "22 €", "15 €", "Free"] },
        { name: "Packed lunch", sub: "Flat rate", prices: ["15 €", "—", "—", "—"] },
        { name: "Breakfast", sub: "Flat rate", prices: ["15 €", "—", "—", "—"] },
      ],
      note: "* Excluding tourist tax.",
      notesHeading: "Note",
      notes: [
        { ref: "A", title: "Group overnight", detail: "10+ people", price: "20 €*" },
        {
          ref: "B",
          title: "Professionals' overnight",
          detail: "Guides, mountain leaders, wardens",
          price: "18 €*",
        },
        { ref: "C", title: "School group overnight", detail: "", price: "5 €" },
      ],
    },
  },

  contact: {
    header: {
      eyebrow: "04 / Contact & access",
      title: "How to <em>find us</em>.", // HTML
    },
    map: {
      alt: "3D aerial view from the Saint-Gervais valley up to the Refuge du Nid d'Aigle",
      attribution: "© Google Earth",
    },
    access: {
      eyebrow: "Access",
      title: "Two <em>routes</em> to the refuge.", // HTML
      routes: [
        {
          n: "01",
          title: "Tramway du Mont-Blanc",
          tag: "Recommended",
          // HTML — contains an external link
          desc: "From Le Fayet or Saint-Gervais, the Tramway du Mont-Blanc — the highest train in France — climbs to its terminus, a few minutes' walk from the refuge. Allow around 1h10 for the journey; booking is strongly advised in summer: <a href='https://www.tramwaydumontblanc.fr/' target='_blank' rel='noopener noreferrer'>tramwaydumontblanc.fr</a>",
        },
        {
          n: "02",
          title: "Hiking — access from Bionnassay",
          tag: "Summer season",
          desc: "From the hamlet of Bionnassay, a trail climbs through alpine pastures and forest, crosses the Bionnassay torrent, then joins the tramway line, which it follows up to the refuge. A steady climb of about 3 to 4 hours.",
        },
      ],
    },
    coords: {
      eyebrow: "Contact details",
      rows: [
        { label: "Phone", value: "04 50 58 05 78" },
        { label: "Email", value: "refuge@nidaigle.com" },
        { label: "GPS coordinates", value: "45.8560° N · 6.7995° E" },
      ],
      cta: "Book →",
    },
  },

  about: {
    header: {
      eyebrow: "05 / About",
      title: "A century <em>watching over</em><br>the passes.", // HTML
    },
    history: {
      eyebrow: "History",
      title: "<em>1933 — 2026</em>", // HTML
      paragraphs: [
        "Founded in 1933 by Georges Orset, a high-mountain guide from Saint-Gervais, the Refuge du Nid d'Aigle established itself from the outset as an essential stop on the normal route up Mont Blanc. The building houses mountaineers and staff in its dormitories, while the ground floor holds a catering service. It has become a landmark of the local mountains.",
        "In 2002, a fire destroyed the building entirely. It was rebuilt in 2006 on its current site, in timber architecture blended into the landscape and resistant to avalanches and rockfall. Today it spans two levels and 242.8 m². In 2026, a new chapter opens as Fabien Demolis takes over the refuge.",
      ],
    },
    timeline: [
      {
        year: "1913",
        text: "The Tramway du Mont-Blanc reaches the Nid d'Aigle. The site becomes accessible to all, opening the normal route to a wider public.",
      },
      {
        year: "1933",
        text: "Georges Orset, a Saint-Gervais guide, builds and opens the first refuge. He also runs the Refuge du Goûter, inaugurated three years later.",
      },
      {
        year: "2002",
        text: "Fire at the refuge. The building is completely destroyed. The refuge closes during the rebuild.",
      },
      {
        year: "2006",
        text: "Reopening after reconstruction. Timber architecture blended into the landscape, designed to withstand avalanches and rockfall.",
      },
      {
        year: "2026",
        text: "Inauguration of the new Tramway du Mont-Blanc terminus, modernising access to the refuge after more than a century on the site.\nFabien Demolis takes over the running of the refuge, bringing a new vision for welcoming visitors and showcasing the site.",
      },
    ],
    geography: {
      eyebrow: "Location",
      title: "At the end of the tramway, <em>with no road access</em>.", // HTML
      body: "Not accessible by road, the Nid d'Aigle is reached on foot or by the Tramway du Mont-Blanc, of which it marks the final stop. Located in the commune of Saint-Gervais in the Mont Blanc Massif, it is one of the three refuges on the normal route linking the valley to the summit.",
      stats: [
        { value: "2,412 m", label: "Altitude" },
        { value: "30", label: "Beds" },
        { value: "June → Sept", label: "" },
        { value: "Mont Blanc Massif", label: "" },
      ],
    },
    role: {
      eyebrow: "Role",
      title: "A stop, <em>between two worlds.</em>", // HTML
      items: [
        {
          kicker: "Downhill",
          title: "Saint-Gervais",
          text: "Starting point of the normal route, the spa town is two hours' walk downhill or thirty minutes by the Tramway du Mont-Blanc.",
        },
        {
          kicker: "Uphill",
          title: "Refuge du Goûter",
          text: "The next stage for mountaineers heading for the roof of Europe. The Refuge du Goûter, at 3,835 metres, is reached in three to four hours' walk.",
        },
        {
          kicker: "Beyond",
          title: "Summit of Mont Blanc",
          text: "At 4,808 metres, the roof of Europe. The Nid d'Aigle is the first stage of the ascent — from here, mountaineers reach the Goûter before setting off for the summit the following morning.",
        },
      ],
    },
  },
};

export default en;

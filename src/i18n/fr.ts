/**
 * Dictionnaire FRANÇAIS — langue par défaut du site.
 *
 * ▸ Pour modifier un texte : édite simplement la valeur ici.
 * ▸ Certaines valeurs contiennent du balisage inline (<em>, <br>, <a>...).
 *   Elles sont signalées par un commentaire « HTML » et rendues via set:html.
 * ▸ Ce fichier définit aussi le type `Dictionary` : le fichier en.ts doit
 *   respecter exactement la même structure (sinon erreur au typecheck).
 */
const fr = {
  // Métadonnées <head> par page (SEO)
  meta: {
    home: {
      title: "Refuge du Nid d'Aigle — Une halte au seuil des glaciers",
      description:
        "Refuge de montagne à 2 412 m dans le Massif du Mont-Blanc, sur la commune de Saint-Gervais. Réservation, tarifs et accès.",
    },
    tarifs: {
      title: "Tarifs & Réservation — Refuge du Nid d'Aigle",
      description:
        "Tarifs et réservation en ligne pour une nuitée au Refuge du Nid d'Aigle, saison 2026.",
    },
    contact: {
      title: "Contact & Accès — Refuge du Nid d'Aigle",
      description:
        "Comment rejoindre le Refuge du Nid d'Aigle : Tramway du Mont-Blanc, randonnée, coordonnées.",
    },
    about: {
      title: "À propos — Refuge du Nid d'Aigle",
      description:
        "L'histoire du Refuge du Nid d'Aigle depuis 1933, sa situation et son rôle sur la voie normale du Mont-Blanc.",
    },
  },

  nav: {
    home: "Accueil",
    tarifs: "Tarifs & Réservation",
    about: "À propos",
    contact: "Contact",
  },

  footer: {
    title: "Refuge du Nid d'Aigle",
    tagline: "2 412 m · Massif du Mont-Blanc",
    navHeading: "Navigation",
    contactHeading: "Contact",
    contactLines: [
      { text: "04 50 58 05 78", href: "tel:+33450580578" },
      { text: "refuge@niddaigle.com", href: "mailto:refuge@niddaigle.com" },
      { text: "Saint-Gervais-les-Bains" },
    ],
    deptLogoLabel: "Département de la Haute-Savoie",
    copyright: "© 2026 — Bak Studio",
  },

  home: {
    hero: {
      eyebrow: "Géré par des passionnés · Depuis 1933",
      title: "Une halte suspendue<br><em>au seuil des glaciers.</em>", // HTML
      cta: "Réserver une nuitée",
      alt: "Le Refuge du Nid d'Aigle au seuil des glaciers du Massif du Mont-Blanc",
      stats: [
        { label: "Altitude", value: "2 412 m" },
        { label: "Couchages", value: "30" },
        { label: "Saison", value: "Juin → Sept." },
        { label: "Accès", value: "Tramway · Randonnée" },
      ],
    },
    intro: {
      eyebrow: "Le refuge",
      title: "Un point d'étape. <em>Une destination.</em>", // HTML
      body: "Le Nid d'Aigle est le point de rendez-vous entre deux mondes de la montagne : les randonneurs venus à la journée profiter d'un repas et de la vue sur les glaciers, et les alpinistes qui montent vers le sommet du Mont-Blanc ou en redescendent. À l'aller comme au retour, ce n'est pas qu'un passage — c'est une destination à part entière.",
      link: "Lire l'histoire →",
    },
    triptych: {
      facadeAlt:
        "Le Refuge du Nid d'Aigle et sa terrasse, adossés au versant au-dessus du terminus du Tramway du Mont-Blanc",
      commonRoomAlt:
        "La salle commune du refuge : tables et bancs en bois, fenêtres ouvertes sur la vallée",
      dormAlt: "Un dortoir du refuge, avec ses lits superposés en bois et sa literie préparée",
    },
    cards: {
      eyebrow: "Préparer votre venue",
      title: "Trois choses à savoir avant de monter.",
      more: "En savoir plus →",
      items: [
        {
          n: "01",
          title: "Tarifs & Réservation",
          target: "tarifs",
          desc: "Demi-pension, nuitée simple ou pique-nique. Consultez la grille 2026 et réservez votre couchage en ligne.",
        },
        {
          n: "02",
          title: "Accès",
          target: "contact",
          desc: "Par le Tramway du Mont-Blanc ou à pied depuis Bionnassay. Deux chemins jusqu'au refuge, sans route d'accès.",
        },
        {
          n: "03",
          title: "À propos",
          target: "about",
          desc: "Un refuge sur la voie normale du Mont-Blanc depuis 1933. Son histoire, sa situation, son rôle entre vallée et sommet.",
        },
      ],
    },
  },

  tarifs: {
    header: {
      eyebrow: "Tarifs & Réservation · Saison 2026",
      title: "Tarifs &amp;<br><em>réservation</em>.", // HTML
    },
    booking: {
      eyebrow: "Réservation en ligne",
      title: "Réserver votre <em>nuitée</em>.", // HTML
      intro:
        "La réservation s'effectue en ligne, sur la plateforme de réservation des refuges du Pays du Mont-Blanc. Sélectionnez vos dates et votre type de couchage, puis confirmez votre nuitée en quelques minutes.",
      cta: "Réserver en ligne →",
      ctaHref:
        "https://www.monrefugepaysdumontblanc.com/fr/il4-refuge_i136101-refuge-du-nid-d-aigle.aspx",
      // HTML — contient un lien mailto
      fallback:
        "S'il n'y a plus de places disponibles à la réservation en ligne, écrivez-nous à <a href='mailto:refuge@niddaigle.com'>refuge@niddaigle.com</a>.",
    },
    practical: {
      eyebrow: "À savoir",
      title: "Le refuge <em>en pratique</em>.", // HTML
      rows: [
        { label: "Capacité", value: "30 couchages" },
        { label: "Repas", value: "Plat unique, option végétarienne sur demande" },
        { label: "Couverture", value: "Fournies — drap de sac obligatoire" },
        { label: "Eau", value: "Non potable : prévoir son eau, vente possible" },
        { label: "Douche", value: "Pas de douche" },
        { label: "Animaux", value: "Non acceptés pour les nuitées" },
      ],
    },
    pricing: {
      eyebrow: "Grille tarifaire",
      columns: ["Prestation", "Adulte", "13-18 ans", "6-12 ans", "- de 6 ans"],
      rows: [
        {
          name: "Demi-pension",
          sub: "Nuitée + dîner + petit-déjeuner",
          prices: ["80 €*", "72 €", "55 €*", "40 €"],
        },
        { name: "Nuitée simple", sub: "Couchage seul", prices: ["30 €*", "22 €", "15 €", "Gratuit"] },
        { name: "Pique-nique", sub: "Tarif unique", prices: ["15 €", "—", "—", "—"] },
        { name: "Petit-déjeuner", sub: "Tarif unique", prices: ["15 €", "—", "—", "—"] },
      ],
      note: "* Prix hors taxe de séjour.",
      notesHeading: "Note",
      notes: [
        { ref: "A", title: "Nuitée groupe", detail: "+ de 10 personnes", price: "20 €*" },
        { ref: "B", title: "Nuitée professionnels", detail: "Guides, AEM, gardiens", price: "18 €*" },
        { ref: "C", title: "Nuitée groupe scolaire", detail: "", price: "5 €" },
      ],
    },
  },

  contact: {
    header: {
      eyebrow: "Contact & accès",
      title: "Comment <em>nous trouver</em>.", // HTML
    },
    map: {
      alt: "Vue aérienne 3D de la vallée de Saint-Gervais jusqu'au Refuge du Nid d'Aigle",
      attribution: "© Google Earth",
    },
    access: {
      eyebrow: "Accès",
      title: "Deux <em>chemins</em> jusqu'au refuge.", // HTML
      routes: [
        {
          n: "01",
          title: "Tramway du Mont-Blanc",
          tag: "Recommandé",
          // HTML — contient un lien externe
          desc: "Depuis Le Fayet ou Saint-Gervais, le Tramway du Mont-Blanc — le plus haut train de France — monte jusqu'à son terminus, à quelques minutes de marche du refuge. Comptez environ 1h10 de trajet ; réservation vivement conseillée en été&nbsp;: <a href='https://www.tramwaydumontblanc.fr/' target='_blank' rel='noopener noreferrer'>tramwaydumontblanc.fr</a>",
        },
        {
          n: "02",
          title: "Randonnée — accès depuis Bionnassay",
          tag: "Saison été",
          desc: "Depuis le hameau de Bionnassay, un sentier grimpe à travers alpages et forêt, franchit le torrent de Bionnassay puis rejoint la voie du tramway qu'il longe jusqu'au refuge. Une montée soutenue d'environ 3 à 4 heures.",
        },
      ],
    },
    coords: {
      eyebrow: "Coordonnées",
      rows: [
        { label: "Téléphone", value: "04 50 58 05 78" },
        { label: "Email", value: "refuge@niddaigle.com" },
        { label: "Coordonnées GPS", value: "45.8560° N · 6.7995° E" },
      ],
      cta: "Réserver →",
    },
  },

  about: {
    header: {
      eyebrow: "À propos",
      title: "Cent ans <em>à veiller</em><br>sur les passages.", // HTML
      tramAlt:
        "Photo d'archive : deux automotrices du Tramway du Mont-Blanc à l'arrêt sur le flanc rocheux, des voyageurs descendus le long de la voie",
      tunnelAlt:
        "Carte postale ancienne : le terminus du Chemin de fer du Mont-Blanc, le tunnel ouvrant sur le glacier et l'Aiguille de Bionnassay",
      terminusAlt:
        "Carte postale ancienne : des promeneurs sur le sentier au terminus du Chemin de fer du Mont-Blanc, au pied du glacier et de l'Aiguille de Bionnassay",
    },
    history: {
      eyebrow: "Histoire",
      title: "<em>1933 — 2026</em>", // HTML
      paragraphs: [
        "Fondé en 1933 par Georges Orset, guide de haute montagne de Saint-Gervais, le Refuge du Nid d'Aigle s'est imposé dès sa création comme un passage obligé sur la voie normale du Mont-Blanc. Le bâtiment accueille alpinistes et personnel dans ses dortoirs, tandis que le rez-de-chaussée abrite un service de restauration. Il est devenu un repère incontournable de la montagne locale.",
        "En 2002, un incendie détruit entièrement le bâtiment. Il est reconstruit en 2006 à son emplacement actuel, en architecture bois intégrée au paysage et résistante aux avalanches et chutes de pierres. Il est aujourd'hui réparti sur deux niveaux et 242,8 m². En 2026, une nouvelle page s'ouvre avec la reprise du refuge par Fabien Demolis.",
      ],
    },
    timeline: [
      {
        year: "1913",
        text: "Le Tramway du Mont-Blanc atteint le Nid d'Aigle. Le site devient accessible à tous, ouvrant la voie normale à un public plus large.",
      },
      {
        year: "1933",
        text: "Georges Orset, guide de Saint-Gervais, construit et ouvre le premier refuge. Il gère également le refuge du Goûter, inauguré trois ans plus tard.",
      },
      {
        year: "2002",
        text: "Incendie au refuge. Le bâtiment est entièrement détruit. Le refuge ferme le temps de la reconstruction.",
      },
      {
        year: "2006",
        text: "Réouverture après reconstruction. Architecture bois intégrée au paysage, conçue pour résister aux avalanches et aux chutes de pierres.",
      },
      {
        year: "2026",
        // Le retour à la ligne (\n) est conservé à l'affichage (whitespace-pre-line)
        text: "Inauguration du nouveau terminus du Tramway du Mont-Blanc, modernisant l'accès au refuge après plus d'un siècle de présence sur le site.\nFabien Demolis reprend la gestion du refuge, portant un nouveau projet pour l'accueil et la valorisation du site.",
      },
    ],
    geography: {
      eyebrow: "Situation",
      title: "Au bout du tramway, <em>sans route d'accès</em>.", // HTML
      body: "Non accessible par voie carrossable, le Nid d'Aigle se rejoint à pied ou par le Tramway du Mont-Blanc, dont il marque le dernier arrêt. Situé sur la commune de Saint-Gervais dans le Massif du Mont-Blanc, il s'inscrit parmi les trois refuges de la voie normale reliant la vallée au sommet.",
      imageAlt:
        "Le Tramway du Mont-Blanc en été, traversant les alpages fleuris face aux glaciers du Massif du Mont-Blanc.",
      stats: [
        { value: "2 412 m", label: "Altitude" },
        { value: "30", label: "Couchages" },
        { value: "Juin → Sept", label: "" },
        { value: "Massif du Mont-Blanc", label: "" },
      ],
    },
    role: {
      eyebrow: "Rôle",
      title: "Une étape, <em>entre deux mondes.</em>", // HTML
      items: [
        {
          kicker: "Vers le bas",
          title: "Saint-Gervais",
          text: "Point de départ de la voie normale, la ville thermale est à deux heures de descente à pied ou trente minutes par le Tramway du Mont-Blanc.",
        },
        {
          kicker: "Vers le haut",
          title: "Refuge du Goûter",
          text: "Prochaine étape pour les alpinistes en route vers le toit de l'Europe. Le refuge du Goûter, à 3 835 mètres, est accessible en trois à quatre heures de marche.",
        },
        {
          kicker: "Au-delà",
          title: "Sommet du Mont-Blanc",
          text: "À 4 808 mètres, le toit de l'Europe. Le Nid d'Aigle est la première étape de l'ascension — d'ici, les alpinistes gagnent le Goûter avant de s'élancer vers le sommet le lendemain matin.",
        },
      ],
    },
  },
};

/** Type structurel partagé — en.ts doit s'y conformer. */
export type Dictionary = typeof fr;

export default fr;

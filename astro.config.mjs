// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // URL de production. Doit correspondre au domaine principal configuré dans
  // Vercel : c'est elle qui préfixe toutes les URL du sitemap.
  site: "https://www.niddaigle.com",
  // Les pages vivent dans src/pages/[lang]/ : chaque page est écrite une seule
  // fois et générée pour /fr/... et /en/... (slugs anglais communs aux 2 langues).
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // La racine renvoie vers la langue par défaut.
  redirects: {
    "/": "/fr/",
  },
  integrations: [
    sitemap({
      // Déclare chaque page comme la traduction de l'autre (balises hreflang) :
      // Google sert alors la bonne langue au lieu de traiter /fr/ et /en/ comme
      // deux pages concurrentes au contenu dupliqué.
      i18n: {
        defaultLocale: "fr",
        locales: { fr: "fr", en: "en" },
      },
      // La racine n'est qu'une page de redirection en noindex : hors sitemap.
      filter: (page) => new URL(page).pathname !== "/",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

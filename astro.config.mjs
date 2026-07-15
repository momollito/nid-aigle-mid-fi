// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
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
  vite: {
    plugins: [tailwindcss()],
  },
});

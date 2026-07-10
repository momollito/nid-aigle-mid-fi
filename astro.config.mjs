// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Internationalisation native d'Astro.
  // FR = langue par défaut, servie à la racine (/, /tarifs, ...).
  // EN = servie sous /en/ (/en/, /en/rates, ...).
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

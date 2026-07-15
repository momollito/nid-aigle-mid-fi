import fr, { type Dictionary } from "./fr";
import en from "./en";

/** Langues disponibles (label affichable — utilisé par le sélecteur). */
export const languages = {
  fr: "Français",
  en: "English",
} as const;

/** Tous les dictionnaires, indexés par code de langue. */
export const dictionaries = { fr, en };

export type Lang = keyof typeof dictionaries;

/** Langue par défaut. */
export const defaultLang: Lang = "fr";

/**
 * Slugs d'URL par page — communs aux deux langues (seul le préfixe /fr ou /en change).
 * La clé est l'identifiant interne stable ; la valeur est le segment d'URL (vide = accueil).
 *   home → /fr/        tarifs → /fr/rates
 */
export const routes = {
  home: "",
  tarifs: "rates",
  about: "about",
  contact: "contact",
} as const;

export type RouteKey = keyof typeof routes;

/** Déduit la langue à partir du 1er segment de l'URL (/en/... → "en"). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  return segment in dictionaries ? (segment as Lang) : defaultLang;
}

/** Renvoie le dictionnaire complet de la langue demandée. */
export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/**
 * Construit le chemin localisé d'une page.
 *   localizedPath("fr", "tarifs") → "/fr/rates"
 *   localizedPath("en", "home")   → "/en/"
 */
export function localizedPath(lang: Lang, key: RouteKey): string {
  const slug = routes[key];
  return slug ? `/${lang}/${slug}` : `/${lang}/`;
}

/**
 * Même page, autre langue : échange le préfixe /fr ↔ /en en gardant le reste du chemin.
 *   switchLangPath(URL "/fr/rates", "en") → "/en/rates"
 *   switchLangPath(URL "/en/", "fr")      → "/fr/"
 */
export function switchLangPath(url: URL, target: Lang): string {
  const rest = url.pathname.replace(/^\/(fr|en)(?=\/|$)/, "");
  return `/${target}${rest || "/"}`;
}

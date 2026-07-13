import fr, { type Dictionary } from "./fr";
import en from "./en";

/** Langues disponibles (label affichable — utile pour un futur sélecteur). */
export const languages = {
  fr: "Français",
  en: "English",
} as const;

/** Tous les dictionnaires, indexés par code de langue. */
export const dictionaries = { fr, en };

export type Lang = keyof typeof dictionaries;
export type RouteKey = keyof Dictionary["routes"];

/** Langue par défaut (servie à la racine, sans préfixe d'URL). */
export const defaultLang: Lang = "fr";

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
 *   localizedPath("fr", "tarifs") → "/tarifs"
 *   localizedPath("en", "tarifs") → "/en/rates"
 *   localizedPath("en", "home")   → "/en/"
 */
export function localizedPath(lang: Lang, key: RouteKey): string {
  const slug = dictionaries[lang].routes[key];
  const prefix = lang === defaultLang ? "" : `/${lang}`;
  return slug ? `${prefix}/${slug}` : `${prefix}/`;
}

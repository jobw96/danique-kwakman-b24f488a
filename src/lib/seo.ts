/**
 * Gedeelde SEO-helper voor route-level `head()` in TanStack Start.
 * Zorgt dat title, description, canonical, og:url en robots in de
 * rauwe server-response staan (Helmet doet dat alleen client-side).
 */

export const SITE_URL = "https://daniquekwakman.nl";
const SITE_NAME = "Danique Kwakman";
const DEFAULT_TITLE = "Danique Kwakman | Orthomoleculair Therapeut & Hormoonbalans";
const DEFAULT_DESCRIPTION =
  "Herstel je hormonale balans, darmgezondheid en energie met orthomoleculaire therapie. Persoonlijke begeleiding via de CIRCLE-methode voor duurzame gezondheid.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

export interface SeoOptions {
  /** Pagina-titel zonder merknaam; merk wordt automatisch toegevoegd. */
  title?: string;
  description?: string;
  /** Pad van deze pagina, bijv. "/over-mij". */
  path: string;
  /** Afwijkend canonical pad (bijv. alias-pagina's). Standaard: `path`. */
  canonicalPath?: string;
  ogType?: "website" | "article";
  image?: string;
  robots?: string;
}

const buildTitle = (pageTitle?: string) => {
  if (!pageTitle) return DEFAULT_TITLE;
  return /danique\s+kwakman/i.test(pageTitle) ? pageTitle : `${pageTitle} | ${SITE_NAME}`;
};

const absolute = (path: string) => {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${clean}`;
};

export function seoHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  canonicalPath,
  ogType = "website",
  image = DEFAULT_IMAGE,
  robots = "index, follow",
}: SeoOptions) {
  const fullTitle = buildTitle(title);
  const canonical = absolute(canonicalPath ?? path);

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { property: "og:type", content: ogType },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: image },
      { property: "og:image:type", content: "image/webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Danique Kwakman, orthomoleculair therapeut" },
      { property: "og:locale", content: "nl_NL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

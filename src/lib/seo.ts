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
  /**
   * JSON-LD voor deze pagina. Hoort hier en niet in een Helmet-component:
   * Helmet injecteert pas na hydratie, waardoor Google de schema's niet in
   * de rauwe server-response ziet en er geen rich results uit volgen.
   */
  schemas?: Array<Record<string, unknown>>;
}

/** Maakt van een pad of relatieve asset-URL een absolute URL. */
export const toAbsoluteUrl = (pathOrUrl: string) =>
  /^https?:\/\//.test(pathOrUrl) ? pathOrUrl : `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;

/**
 * Service-schema voor een traject. Prijs en looptijd komen uit wat de pagina
 * zelf toont; laat een veld weg als de pagina het niet noemt.
 */
export const serviceSchema = ({
  name,
  description,
  path,
  monthlyPrice,
  price,
  duration,
}: {
  name: string;
  description: string;
  path: string;
  /** Bedrag per maand, voor trajecten met een maandtarief. */
  monthlyPrice?: number;
  /** Eenmalig bedrag voor het hele traject. */
  price?: number;
  /** Looptijd als ISO 8601-duur, bijv. "P3M" of "P2W". */
  duration?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: toAbsoluteUrl(path),
  serviceType: "Orthomoleculaire therapie",
  inLanguage: "nl-NL",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "City", name: "Hoorn" },
    { "@type": "Country", name: "Nederland" },
  ],
  availableChannel: [
    { "@type": "ServiceChannel", name: "Op locatie in Hoorn", serviceLocation: { "@id": `${SITE_URL}/#business` } },
    { "@type": "ServiceChannel", name: "Online via Zoom", serviceUrl: toAbsoluteUrl(path) },
  ],
  ...(duration ? { timeRequired: duration } : {}),
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: toAbsoluteUrl(path),
    ...(monthlyPrice !== undefined
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: monthlyPrice,
            priceCurrency: "EUR",
            unitText: "maand",
            referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
          },
        }
      : {}),
    ...(price !== undefined ? { price, priceCurrency: "EUR" } : {}),
  },
});

/** BreadcrumbList voor een reeks kruimels, in volgorde vanaf Home. */
export const breadcrumbs = (trail: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});

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
  schemas,
}: SeoOptions) {
  const fullTitle = buildTitle(title);
  const canonical = absolute(canonicalPath ?? path);

  return {
    ...(schemas?.length
      ? {
          scripts: schemas.map((schema) => ({
            type: "application/ld+json",
            children: JSON.stringify(schema),
          })),
        }
      : {}),
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

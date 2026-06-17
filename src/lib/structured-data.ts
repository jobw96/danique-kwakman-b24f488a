/**
 * JSON-LD structured-data generators.
 *
 * Each helper returns a plain object you can drop into `<SEOHead structuredData={...} />`
 * (single object or array). All URLs are normalized to absolute via `getCanonicalUrl`.
 *
 * Re-exports the existing helpers from `@/components/SEOHead` so pages have a single
 * import surface: `import { ... } from '@/lib/structured-data'`.
 */

import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  DEFAULT_DESCRIPTION,
  getCanonicalUrl,
  organizationSchema as baseOrganizationSchema,
  webPageSchema as baseWebPageSchema,
  articleSchema,
  productSchema as baseProductSchema,
  breadcrumbSchema,
  faqSchema,
} from '@/components/SEOHead';

export {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
};

type Json = Record<string, unknown>;

/* ------------------------------------------------------------------ */
/* 1. Organization                                                    */
/* ------------------------------------------------------------------ */

export interface PostalAddress {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface ContactPoint {
  telephone?: string;
  email?: string;
  contactType?: string; // e.g. "customer service"
  areaServed?: string | string[];
  availableLanguage?: string | string[];
}

export const organizationSchema = (params: {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: ContactPoint | ContactPoint[];
  address?: PostalAddress;
  description?: string;
} = {}): Json => {
  const base = baseOrganizationSchema({
    name: params.name ?? SITE_NAME,
    url: params.url ?? SITE_URL,
    logo: params.logo ?? DEFAULT_OG_IMAGE,
  });

  const out: Json = { ...base };
  if (params.description) out.description = params.description;
  if (params.sameAs?.length) out.sameAs = params.sameAs;
  if (params.address) {
    out.address = { '@type': 'PostalAddress', ...params.address };
  }
  if (params.contactPoint) {
    const cps = Array.isArray(params.contactPoint) ? params.contactPoint : [params.contactPoint];
    out.contactPoint = cps.map((cp) => ({ '@type': 'ContactPoint', ...cp }));
  }
  return out;
};

/* ------------------------------------------------------------------ */
/* 2. WebSite (with optional SearchAction)                            */
/* ------------------------------------------------------------------ */

export const webSiteSchema = (params: {
  name?: string;
  url?: string;
  /** Search-results URL template, e.g. "/search?q={search_term_string}" */
  searchUrlTemplate?: string;
  inLanguage?: string;
} = {}): Json => {
  const url = params.url ?? SITE_URL;
  const schema: Json = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: params.name ?? SITE_NAME,
    url,
    inLanguage: params.inLanguage ?? 'nl-NL',
  };
  if (params.searchUrlTemplate) {
    const template = params.searchUrlTemplate.startsWith('http')
      ? params.searchUrlTemplate
      : `${SITE_URL}${params.searchUrlTemplate.startsWith('/') ? '' : '/'}${params.searchUrlTemplate}`;
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: template },
      'query-input': 'required name=search_term_string',
    };
  }
  return schema;
};

/* ------------------------------------------------------------------ */
/* 3. WebPage                                                         */
/* ------------------------------------------------------------------ */

export const webPageSchema = (params: {
  name: string;
  description?: string;
  url: string;
  inLanguage?: string;
  /** Defaults to the site's WebSite node. */
  isPartOfUrl?: string;
}): Json => {
  const base = baseWebPageSchema({
    name: params.name,
    description: params.description ?? DEFAULT_DESCRIPTION,
    url: params.url,
  });
  return {
    ...base,
    inLanguage: params.inLanguage ?? 'nl-NL',
    isPartOf: { '@type': 'WebSite', url: params.isPartOfUrl ?? SITE_URL, name: SITE_NAME },
  };
};

/* ------------------------------------------------------------------ */
/* 4. BreadcrumbList — auto-generate from path                        */
/* ------------------------------------------------------------------ */

/** Human-readable label for a URL segment. Override per-segment if needed. */
const humanizeSegment = (segment: string): string =>
  segment
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

/**
 * Auto-generate a BreadcrumbList from a pathname.
 *
 * - `/recepten/granola` → Home › Recepten › Granola
 * - Pass `labels` to override the default humanized labels
 *   (e.g. `{ '/recepten': 'Recepten', '/recepten/granola': 'Granola Bowl' }`).
 */
export const breadcrumbsFromPath = (
  pathname: string,
  options: {
    homeLabel?: string;
    labels?: Record<string, string>;
  } = {},
): Json => {
  const segments = pathname.split('/').filter(Boolean);
  const items: Array<{ name: string; url: string }> = [
    { name: options.homeLabel ?? 'Home', url: '/' },
  ];
  let acc = '';
  for (const seg of segments) {
    acc += `/${seg}`;
    items.push({
      name: options.labels?.[acc] ?? humanizeSegment(seg),
      url: acc,
    });
  }
  return breadcrumbSchema(items);
};

/* ------------------------------------------------------------------ */
/* 6. Product — extended with rating + reviews                        */
/* ------------------------------------------------------------------ */

export interface ProductReview {
  author: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
  datePublished?: string;
}

export const productSchema = (params: {
  name: string;
  description: string;
  image: string;
  url: string;
  sku?: string;
  brand?: string;
  price: number | string;
  priceCurrency?: string;
  availability?: string;
  aggregateRating?: { ratingValue: number; reviewCount: number; bestRating?: number };
  reviews?: ProductReview[];
}): Json => {
  const base = baseProductSchema({
    name: params.name,
    description: params.description,
    image: params.image,
    price: params.price,
    priceCurrency: params.priceCurrency,
    availability: params.availability,
    url: params.url,
  });
  const out: Json = { ...base };
  if (params.sku) out.sku = params.sku;
  if (params.brand) out.brand = { '@type': 'Brand', name: params.brand };
  if (params.aggregateRating) {
    out.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: params.aggregateRating.ratingValue,
      reviewCount: params.aggregateRating.reviewCount,
      bestRating: params.aggregateRating.bestRating ?? 5,
    };
  }
  if (params.reviews?.length) {
    out.review = params.reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.ratingValue,
        bestRating: r.bestRating ?? 5,
      },
      ...(r.datePublished ? { datePublished: r.datePublished } : {}),
    }));
  }
  return out;
};

/* ------------------------------------------------------------------ */
/* 8. LocalBusiness                                                   */
/* ------------------------------------------------------------------ */

export interface OpeningHoursSpec {
  /** e.g. ["Monday", "Tuesday"] or "Monday" */
  dayOfWeek: string | string[];
  opens: string; // "09:00"
  closes: string; // "17:00"
}

export const localBusinessSchema = (params: {
  '@type'?: string; // e.g. "MedicalBusiness", "HealthAndBeautyBusiness"
  name?: string;
  url?: string;
  image?: string;
  telephone?: string;
  email?: string;
  priceRange?: string;
  address?: PostalAddress;
  geo?: { latitude: number; longitude: number };
  openingHours?: OpeningHoursSpec[];
  sameAs?: string[];
} = {}): Json => {
  const out: Json = {
    '@context': 'https://schema.org',
    '@type': params['@type'] ?? 'LocalBusiness',
    name: params.name ?? SITE_NAME,
    url: params.url ?? SITE_URL,
    image: params.image ?? DEFAULT_OG_IMAGE,
  };
  if (params.telephone) out.telephone = params.telephone;
  if (params.email) out.email = params.email;
  if (params.priceRange) out.priceRange = params.priceRange;
  if (params.address) out.address = { '@type': 'PostalAddress', ...params.address };
  if (params.geo) {
    out.geo = {
      '@type': 'GeoCoordinates',
      latitude: params.geo.latitude,
      longitude: params.geo.longitude,
    };
  }
  if (params.openingHours?.length) {
    out.openingHoursSpecification = params.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  if (params.sameAs?.length) out.sameAs = params.sameAs;
  return out;
};

/* ------------------------------------------------------------------ */
/* 9. HowTo                                                           */
/* ------------------------------------------------------------------ */

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export const howToSchema = (params: {
  name: string;
  description: string;
  image?: string;
  /** ISO 8601 duration, e.g. "PT30M". */
  totalTime?: string;
  estimatedCost?: { value: number | string; currency?: string };
  supplies?: string[];
  tools?: string[];
  steps: HowToStep[];
}): Json => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: params.name,
  description: params.description,
  ...(params.image ? { image: params.image } : {}),
  ...(params.totalTime ? { totalTime: params.totalTime } : {}),
  ...(params.estimatedCost
    ? {
        estimatedCost: {
          '@type': 'MonetaryAmount',
          value: String(params.estimatedCost.value),
          currency: params.estimatedCost.currency ?? 'EUR',
        },
      }
    : {}),
  ...(params.supplies?.length
    ? { supply: params.supplies.map((s) => ({ '@type': 'HowToSupply', name: s })) }
    : {}),
  ...(params.tools?.length
    ? { tool: params.tools.map((t) => ({ '@type': 'HowToTool', name: t })) }
    : {}),
  step: params.steps.map((s, idx) => ({
    '@type': 'HowToStep',
    position: idx + 1,
    name: s.name,
    text: s.text,
    ...(s.image ? { image: s.image } : {}),
    ...(s.url ? { url: getCanonicalUrl(s.url) } : {}),
  })),
});

/* ------------------------------------------------------------------ */
/* Helper: combine multiple schemas for one page                      */
/* ------------------------------------------------------------------ */

/**
 * Flatten and filter a list of schema objects so you can pass several at once
 * to `<SEOHead structuredData={combineSchemas(a, b, [c, d])} />`.
 */
export const combineSchemas = (
  ...schemas: Array<Json | Json[] | null | undefined | false>
): Json[] => {
  const out: Json[] = [];
  for (const s of schemas) {
    if (!s) continue;
    if (Array.isArray(s)) out.push(...s.filter(Boolean));
    else out.push(s);
  }
  return out;
};

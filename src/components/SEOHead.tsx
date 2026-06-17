import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Site-wide SEO constants. Update here when the canonical domain or
 * default social image changes.
 */
export const SITE_NAME = 'Danique Kwakman';
export const SITE_URL = 'https://daniquekwakman.nl';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const DEFAULT_DESCRIPTION =
  'Herstel je hormonale balans, darmgezondheid en energie met orthomoleculaire therapie. Persoonlijke begeleiding voor duurzame gezondheid.';
export const TWITTER_HANDLE = '@daniquekwakman';

export type OgType = 'website' | 'article' | 'profile' | 'product';

export interface Author {
  name: string;
  url?: string;
}

export interface ArticleMeta {
  publishedTime: string; // ISO 8601
  modifiedTime?: string;
  authors?: Array<Author | string>;
  section?: string;
  tags?: string[];
}

export interface SEOHeadProps {
  /** Page title — site name is appended automatically as "Title | Site Name". */
  title?: string;
  /** Meta description. Keep under 160 characters. */
  description?: string;
  /** Keywords array — joined with commas. */
  keywords?: string[];
  /** Relative path (e.g. "/about") or absolute URL. Defaults to current pathname. */
  canonicalUrl?: string;
  /**
   * Optional query params to preserve on the canonical URL (e.g. `{ page: 2 }`).
   * All other query params (utm_*, ref, fbclid, gclid, ...) are stripped.
   */
  canonicalParams?: Record<string, string | number | undefined | null>;
  /** OG image URL (absolute preferred). Defaults to site OG image. */
  ogImage?: string;
  /** Open Graph type. */
  ogType?: OgType;
  /** Adds <meta name="robots" content="noindex,nofollow"> when true. */
  noindex?: boolean;
  /** JSON-LD structured data — single object or array. */
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  /** Article metadata — adds article:* OG tags when ogType="article". */
  article?: ArticleMeta;
  /** Pagination: emits <link rel="prev"> / <link rel="next"> (path or absolute URL). */
  prevUrl?: string;
  nextUrl?: string;
}

/* ------------------------------------------------------------------ */
/* Canonical URL helpers                                              */
/* ------------------------------------------------------------------ */

/** Query params that must never appear in a canonical URL. */
const TRACKING_PARAM_PATTERNS: RegExp[] = [
  /^utm_/i,
  /^ref$/i,
  /^referrer$/i,
  /^fbclid$/i,
  /^gclid$/i,
  /^gbraid$/i,
  /^wbraid$/i,
  /^msclkid$/i,
  /^yclid$/i,
  /^igshid$/i,
  /^mc_/i,
  /^_hs/i,
  /^hsa_/i,
  /^vero_/i,
  /^_ga$/i,
  /^session/i,
];

const isTrackingParam = (key: string) =>
  TRACKING_PARAM_PATTERNS.some((re) => re.test(key));

/** Lowercase pathname, ensure leading slash, strip trailing slash (except root). */
const normalizePath = (path: string): string => {
  let p = path || '/';
  if (!p.startsWith('/')) p = `/${p}`;
  const [rawPath, ...queryParts] = p.split('?');
  let lowered = rawPath.toLowerCase();
  if (lowered.length > 1 && lowered.endsWith('/')) {
    lowered = lowered.replace(/\/+$/, '');
  }
  return queryParts.length ? `${lowered}?${queryParts.join('?')}` : lowered;
};

/**
 * Build the canonical URL for a page.
 *
 * - Always https + canonical (non-www) host (`SITE_URL`).
 * - Lowercases the pathname; trims trailing slash (except root).
 * - Strips tracking/session params (utm_*, ref, fbclid, gclid, ...).
 * - Merges in `params` you want to keep (e.g. `{ page: 2 }`).
 *   `page=1` is dropped — page 1 canonicalizes to the base URL.
 */
export const getCanonicalUrl = (
  pathOrUrl: string,
  params?: Record<string, string | number | undefined | null>,
): string => {
  let pathname = pathOrUrl;
  let existingSearch = '';
  if (/^https?:\/\//i.test(pathOrUrl)) {
    try {
      const u = new URL(pathOrUrl);
      pathname = u.pathname;
      existingSearch = u.search;
    } catch {
      /* noop */
    }
  } else {
    const qIdx = pathOrUrl.indexOf('?');
    if (qIdx >= 0) {
      pathname = pathOrUrl.slice(0, qIdx);
      existingSearch = pathOrUrl.slice(qIdx);
    }
  }

  const normalizedPath = normalizePath(pathname);

  const sp = new URLSearchParams(existingSearch);
  for (const key of Array.from(sp.keys())) {
    if (isTrackingParam(key)) sp.delete(key);
  }

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null || value === '') {
        sp.delete(key);
        continue;
      }
      if (key === 'page' && Number(value) <= 1) {
        sp.delete(key);
        continue;
      }
      sp.set(key, String(value));
    }
  }

  const query = sp.toString();
  return `${SITE_URL}${normalizedPath}${query ? `?${query}` : ''}`;
};

const toAbsolute = (urlOrPath: string): string => {
  if (!urlOrPath) return SITE_URL;
  if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) return urlOrPath;
  return `${SITE_URL}${urlOrPath.startsWith('/') ? '' : '/'}${urlOrPath}`;
};

const normalizeAuthors = (authors?: Array<Author | string>): Author[] =>
  (authors ?? []).map((a) => (typeof a === 'string' ? { name: a } : a));

export const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalUrl,
  canonicalParams,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  structuredData,
  article,
  prevUrl,
  nextUrl,
}: SEOHeadProps) => {
  const location = useLocation();
  const path = canonicalUrl ?? location.pathname;
  const canonical = getCanonicalUrl(path, canonicalParams);
  const image = toAbsolute(ogImage);

  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const truncatedDescription =
    description.length > 160 ? `${description.slice(0, 157)}...` : description;

  const ldArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  const articleAuthors = normalizeAuthors(article?.authors);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={truncatedDescription} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta
        name="robots"
        content={noindex ? 'noindex,nofollow' : 'index,follow'}
      />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="nl_NL" />

      {/* Article-specific Open Graph */}
      {ogType === 'article' && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {ogType === 'article' && article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {ogType === 'article' && article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {ogType === 'article' &&
        articleAuthors.map((author, idx) => (
          <meta key={`author-${idx}`} property="article:author" content={author.name} />
        ))}
      {ogType === 'article' &&
        (article?.tags ?? []).map((tag, idx) => (
          <meta key={`tag-${idx}`} property="article:tag" content={tag} />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />

      {ldArray.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

/* ------------------------------------------------------------------ */
/* Structured-data helpers                                            */
/* ------------------------------------------------------------------ */

export const organizationSchema = (overrides: Record<string, unknown> = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.jpg`,
  ...overrides,
});

export const webPageSchema = (params: {
  name: string;
  description?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: params.name,
  description: params.description ?? DEFAULT_DESCRIPTION,
  url: toAbsolute(params.url),
});

export const articleSchema = (params: {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  /** Single author name (legacy) or array of Author objects. */
  authorName?: string;
  authors?: Array<Author | string>;
  category?: string;
  keywords?: string[];
  wordCount?: number;
  timeRequired?: string; // ISO 8601 duration, e.g. "PT5M"
}) => {
  const authorList = normalizeAuthors(
    params.authors ?? (params.authorName ? [{ name: params.authorName }] : undefined),
  );
  const authorNode = authorList.length
    ? authorList.map((a) => ({
        '@type': 'Person',
        name: a.name,
        ...(a.url ? { url: a.url } : {}),
      }))
    : [{ '@type': 'Person', name: SITE_NAME, url: `${SITE_URL}/over-mij` }];

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: params.headline,
    description: params.description,
    image: toAbsolute(params.image),
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: authorNode.length === 1 ? authorNode[0] : authorNode,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': toAbsolute(params.url),
    },
    ...(params.category ? { articleSection: params.category } : {}),
    ...(params.keywords?.length ? { keywords: params.keywords.join(', ') } : {}),
    ...(params.wordCount ? { wordCount: params.wordCount } : {}),
    ...(params.timeRequired ? { timeRequired: params.timeRequired } : {}),
  };
};

export const productSchema = (params: {
  name: string;
  description: string;
  image: string;
  price: number | string;
  priceCurrency?: string;
  availability?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: params.name,
  description: params.description,
  image: toAbsolute(params.image),
  offers: {
    '@type': 'Offer',
    price: String(params.price),
    priceCurrency: params.priceCurrency ?? 'EUR',
    availability: params.availability ?? 'https://schema.org/InStock',
    url: toAbsolute(params.url),
  },
});

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: toAbsolute(item.url),
  })),
});

export const faqSchema = (items: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

/* ------------------------------------------------------------------ */
/* Reading time + article helpers                                     */
/* ------------------------------------------------------------------ */

const WORDS_PER_MINUTE = 225;

/** Count words in a plain-text string. Strips HTML tags first. */
export const countWords = (input: string): number => {
  const text = input.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (!text) return 0;
  return text.split(' ').length;
};

/** Estimated reading time in minutes (rounded up, min 1). */
export const readingTimeMinutes = (
  input: string | number,
  wordsPerMinute = WORDS_PER_MINUTE,
): number => {
  const words = typeof input === 'number' ? input : countWords(input);
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

/** Human-readable label, e.g. "5 min leestijd". */
export const readingTimeLabel = (
  input: string | number,
  suffix = 'min leestijd',
): string => `${readingTimeMinutes(input)} ${suffix}`;

/** ISO 8601 duration for schema.org `timeRequired`, e.g. "PT5M". */
export const readingTimeISO = (input: string | number): string =>
  `PT${readingTimeMinutes(input)}M`;

/**
 * Build a BreadcrumbList for an article: Home → Section → Subsection → Article.
 * Pass section hierarchy parents-first; `sectionBaseUrl` defaults to "/blog".
 */
export const articleBreadcrumbs = (params: {
  articleTitle: string;
  articleUrl: string;
  sections?: Array<{ name: string; url: string }>;
  sectionBaseUrl?: string;
  homeLabel?: string;
}) => {
  const items: Array<{ name: string; url: string }> = [
    { name: params.homeLabel ?? 'Home', url: '/' },
  ];
  if (params.sectionBaseUrl) {
    items.push({ name: 'Blog', url: params.sectionBaseUrl });
  }
  for (const s of params.sections ?? []) items.push(s);
  items.push({ name: params.articleTitle, url: params.articleUrl });
  return breadcrumbSchema(items);
};

export default SEOHead;

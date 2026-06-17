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

export interface SEOHeadProps {
  /** Page title — site name is appended automatically as "Title | Site Name". */
  title?: string;
  /** Meta description. Keep under 160 characters. */
  description?: string;
  /** Keywords array — joined with commas. */
  keywords?: string[];
  /** Relative path (e.g. "/about") or absolute URL. Defaults to current pathname. */
  canonicalUrl?: string;
  /** OG image URL (absolute preferred). Defaults to site OG image. */
  ogImage?: string;
  /** Open Graph type. */
  ogType?: OgType;
  /** Adds <meta name="robots" content="noindex,nofollow"> when true. */
  noindex?: boolean;
  /** JSON-LD structured data — single object or array. */
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const toAbsolute = (urlOrPath: string): string => {
  if (!urlOrPath) return SITE_URL;
  if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) return urlOrPath;
  return `${SITE_URL}${urlOrPath.startsWith('/') ? '' : '/'}${urlOrPath}`;
};

export const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  structuredData,
}: SEOHeadProps) => {
  const location = useLocation();
  const path = canonicalUrl ?? location.pathname;
  const canonical = toAbsolute(path);
  const image = toAbsolute(ogImage);

  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const truncatedDescription =
    description.length > 160 ? `${description.slice(0, 157)}...` : description;

  const ldArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

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
  authorName?: string;
  category?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: params.headline,
  description: params.description,
  image: toAbsolute(params.image),
  datePublished: params.datePublished,
  dateModified: params.dateModified ?? params.datePublished,
  author: {
    '@type': 'Person',
    name: params.authorName ?? SITE_NAME,
    url: `${SITE_URL}/over-mij`,
  },
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
});

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

export default SEOHead;

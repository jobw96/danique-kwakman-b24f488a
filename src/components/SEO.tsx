import { Helmet } from '@/lib/helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const BASE_URL = 'https://daniquekwakman.nl';
const DEFAULT_IMAGE = 'https://daniquekwakman.nl/og-image.webp';
const SITE_NAME = 'Danique Kwakman';

export const SEO = ({
  title,
  description = 'Herstel je hormonale balans, darmgezondheid en energie met orthomoleculaire therapie. Persoonlijke begeleiding voor duurzame gezondheid.',
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
  jsonLd,
}: SEOProps) => {
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // Titel, description, canonical, og:*, twitter:* en robots worden per route
  // gezet via `head()` (src/lib/seo.ts) zodat ze in de server-response staan.
  // Deze component levert alleen nog aanvullende tags die daar niet in zitten.
  void title;
  void description;
  void canonicalUrl;
  void ogImage;

  return (
    <Helmet>
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Article specific (for blog posts) */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content="Danique Kwakman" />
      )}

      {/* JSON-LD structured data */}
      {jsonLdArray.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};


export default SEO;

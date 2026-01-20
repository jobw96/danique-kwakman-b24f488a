import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://daniquekwakman.nl';
const DEFAULT_IMAGE = 'https://daniquekwakman.nl/og-image.jpg';
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
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | Danique Kwakman - Orthomoleculair Therapeut`
    : 'Danique Kwakman - Orthomoleculair Therapeut | Hormoonbalans & Darmgezondheid';
  
  const canonical = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : undefined;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:locale" content="nl_NL" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
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
    </Helmet>
  );
};

export default SEO;

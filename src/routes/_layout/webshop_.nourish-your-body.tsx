import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, toAbsoluteUrl } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Webshop, { CHECKOUT_URL, PRICE_AMOUNT, ebookPages } from "@/pages/Webshop";
import nourishCover from "@/assets/nourish-your-body-cover-2.webp.asset.json";


const TITLE = "Nourish Your Body — e-book met 50+ hormoonproof recepten";
const DESCRIPTION =
  "Nourish Your Body: e-book met 50+ hormoonproof recepten voor cyclusgerichte voeding, darmgezondheid en hormoonbalans. Direct te downloaden na je bestelling.";

const URL = `${SITE_URL}/webshop/nourish-your-body`;
const OG_IMAGE = `${SITE_URL}/og-nourish-your-body-ebook.jpg`;
const PRODUCT_IMAGE_1X1 = `${SITE_URL}/nourish-mockup-1x1.webp`;
const PRODUCT_IMAGE_4X3 = `${SITE_URL}/nourish-mockup-4x3.webp`;
const PRODUCT_IMAGE_16X9 = `${SITE_URL}/nourish-mockup-16x9.webp`;

export const Route = createFileRoute("/_layout/webshop_/nourish-your-body")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "product" },
      { property: "og:site_name", content: "Danique Kwakman" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "nl_NL" },
      { property: "product:price:amount", content: PRICE_AMOUNT },
      { property: "product:price:currency", content: "EUR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: URL },
      { rel: "preload", as: "image", href: nourishCover.url, fetchpriority: "high" },

    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Nourish Your Body",
          url: URL,
          description:
            "E-book met 50+ hormoonproof recepten voor cyclusgerichte voeding, darmgezondheid en hormoonbalans.",
          image: [PRODUCT_IMAGE_1X1, PRODUCT_IMAGE_4X3, PRODUCT_IMAGE_16X9],
          category: "E-book",
          inLanguage: "nl-NL",
          brand: { "@type": "Brand", name: "Danique Kwakman" },
          author: { "@type": "Person", name: "Danique Kwakman", url: `${SITE_URL}/over-mij` },
          offers: {
            "@type": "Offer",
            price: PRICE_AMOUNT,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: URL,
            priceValidUntil: "2027-12-31",

          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Foto's uit het e-book Nourish Your Body",
          itemListElement: ebookPages.map((page, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "ImageObject",
              name: page.alt,
              description: page.alt,
              caption: page.alt,
              contentUrl: toAbsoluteUrl(page.src),
              url: toAbsoluteUrl(page.src),
              width: page.width,
              height: page.height,
              encodingFormat: "image/webp",
              inLanguage: "nl-NL",
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Webshop", item: `${SITE_URL}/webshop` },
            { "@type": "ListItem", position: 3, name: "Nourish Your Body", item: URL },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <PageTransition>
      <Webshop />
    </PageTransition>
  ),
});

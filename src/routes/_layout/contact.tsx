import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs, SITE_URL } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/_layout/contact")({
  head: () => seoHead({
    path: "/contact",
    title: "Contact | Orthomoleculair Therapeut",
    description: "Neem contact op met Danique Kwakman, orthomoleculair therapeut, voor vragen over trajecten, kennismaking of samenwerking.",
    // Bewust géén FAQPage hier: dezelfde vragen staan op /faq en dubbele
    // FAQ-markup op twee URL's negeert Google doorgaans.
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact",
        url: `${SITE_URL}/contact`,
        inLanguage: "nl-NL",
        mainEntity: { "@id": `${SITE_URL}/#business` },
      },
      breadcrumbs([{ name: "Contact", path: "/contact" }]),
    ],
  }),
  component: () => (
    <PageTransition>
      <Contact />
    </PageTransition>
  ),
});

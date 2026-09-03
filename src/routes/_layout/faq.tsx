import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs } from "@/lib/seo";
import { FAQ_ITEMS } from "@/pages/FAQ";
import { PageTransition } from "@/components/Animations";
import FAQ from "@/pages/FAQ";

export const Route = createFileRoute("/_layout/faq")({
  head: () => seoHead({
    path: "/faq",
    title: "Veelgestelde Vragen",
    description: "Antwoorden op veelgestelde vragen over orthomoleculaire therapie, vergoeding, trajecten en werkwijze van Danique Kwakman.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: "nl-NL",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      breadcrumbs([{ name: "Veelgestelde vragen", path: "/faq" }]),
    ],
  }),
  component: () => (
    <PageTransition>
      <FAQ />
    </PageTransition>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import FAQ from "@/pages/FAQ";

export const Route = createFileRoute("/_layout/faq")({
  head: () => seoHead({ path: "/faq", title: "Veelgestelde Vragen", description: "Antwoorden op veelgestelde vragen over orthomoleculaire therapie, vergoeding, trajecten en werkwijze van Danique Kwakman." }),
  component: () => (
    <PageTransition>
      <FAQ />
    </PageTransition>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Index from "@/pages/Index";

export const Route = createFileRoute("/_layout/")({
  head: () =>
    seoHead({
      path: "/",
      title: "Orthomoleculair Therapeut Hoorn | Danique Kwakman",
      description:
        "Orthomoleculair therapeut in Hoorn. Herstel je hormonale balans, darmgezondheid en energie met persoonlijke begeleiding via de CIRCLE-methode.",
    }),
  component: () => (
    <PageTransition>
      <Index />
    </PageTransition>
  ),
});

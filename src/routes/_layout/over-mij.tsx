import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import About from "@/pages/About";

export const Route = createFileRoute("/_layout/over-mij")({
  head: () => seoHead({ path: "/over-mij", title: "Over mij | Orthomoleculair Therapeut", description: "Maak kennis met Danique Kwakman, orthomoleculair therapeut gespecialiseerd in hormoonbalans, darmgezondheid en energie voor vrouwen." }),
  component: () => (
    <PageTransition>
      <About />
    </PageTransition>
  ),
});

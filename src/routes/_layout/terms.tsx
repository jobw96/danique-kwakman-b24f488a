import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Terms from "@/pages/Terms";

export const Route = createFileRoute("/_layout/terms")({
  head: () => seoHead({ path: "/terms", title: "Algemene Voorwaarden", description: "Algemene voorwaarden van orthomoleculair therapeut Danique Kwakman." }),
  component: () => (
    <PageTransition>
      <Terms />
    </PageTransition>
  ),
});

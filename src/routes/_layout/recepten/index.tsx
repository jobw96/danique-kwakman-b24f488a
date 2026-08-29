import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Recepten from "@/pages/Recepten";

export const Route = createFileRoute("/_layout/recepten/")({
  head: () => seoHead({ path: "/recepten", title: "Gezonde Recepten | Hormoonbalans & Darmgezondheid", description: "Voedzame, hormoon- en darmvriendelijke recepten van orthomoleculair therapeut Danique Kwakman. Ondersteunend voor energie en welzijn." }),
  component: () => (
    <PageTransition>
      <Recepten />
    </PageTransition>
  ),
});

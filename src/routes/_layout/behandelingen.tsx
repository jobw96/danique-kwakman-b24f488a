import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Behandelingen from "@/pages/Behandelingen";

export const Route = createFileRoute("/_layout/behandelingen")({
  head: () => seoHead({ path: "/behandelingen", title: "Aanbod Trajecten | Hormonen, Darmen & Bloedsuiker", description: "Bekijk de 1:1 trajecten van Danique Kwakman: Bloedsuiker-, Hormoon- en Darmtraject voor stabiele energie, hormoonbalans en darmherstel." }),
  component: () => (
    <PageTransition>
      <Behandelingen />
    </PageTransition>
  ),
});

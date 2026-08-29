import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Podcast from "@/pages/Podcast";

export const Route = createFileRoute("/_layout/podcast")({
  head: () => seoHead({ path: "/podcast", title: "Podcast Health & Hormone Secrets", description: "Luister naar de podcast van Danique Kwakman over hormoonbalans, darmgezondheid, voeding en leefstijl voor vrouwen." }),
  component: () => (
    <PageTransition>
      <Podcast />
    </PageTransition>
  ),
});

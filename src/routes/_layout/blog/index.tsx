import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Blog from "@/pages/Blog";

export const Route = createFileRoute("/_layout/blog/")({
  head: () => seoHead({ path: "/blog", title: "Blog | Hormoonbalans, Darmen & Energie", description: "Lees artikelen over hormoonbalans, darmgezondheid, voeding en leefstijl op de blog van orthomoleculair therapeut Danique Kwakman." }),
  component: () => (
    <PageTransition>
      <Blog />
    </PageTransition>
  ),
});

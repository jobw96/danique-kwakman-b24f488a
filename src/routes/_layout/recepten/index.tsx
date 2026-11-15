import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs } from "@/lib/seo";
import { recipeCollectionSchema } from "@/lib/recipe-seo";
import { recipesByNewest } from "@/data/recipes";
import { PageTransition } from "@/components/Animations";
import Recepten from "@/pages/Recepten";

export const Route = createFileRoute("/_layout/recepten/")({
  head: () => seoHead({
    path: "/recepten",
    title: "Hormoon- en darmvriendelijke recepten",
    description: "Ontdek de hormoon- en darmvriendelijke recepten van Danique Kwakman. Van ontbijt en smoothies tot snacks: met ingrediënten en stap-voor-stap bereiding.",
    schemas: [recipeCollectionSchema(recipesByNewest), breadcrumbs([{ name: 'Recepten', path: '/recepten' }])],
  }),
  component: () => (
    <PageTransition>
      <Recepten />
    </PageTransition>
  ),
});

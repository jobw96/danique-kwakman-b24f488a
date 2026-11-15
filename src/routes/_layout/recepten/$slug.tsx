import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import ReceptDetail from "@/pages/ReceptDetail";
import { recipes } from "@/data/recipes";
import { seoHead } from "@/lib/seo";
import { recipeHead } from "@/lib/recipe-seo";

export const Route = createFileRoute("/_layout/recepten/$slug")({
  head: ({ params }) => {
    const recipe = recipes.find((r) => r.slug === params.slug);
    if (!recipe) {
      return seoHead({
        path: `/recepten/${params.slug}`,
        title: "Recept niet gevonden",
        robots: "noindex, follow",
      });
    }
    return recipeHead(recipe);
  },
  component: () => (
    <PageTransition>
      <ReceptDetail />
    </PageTransition>
  ),
});

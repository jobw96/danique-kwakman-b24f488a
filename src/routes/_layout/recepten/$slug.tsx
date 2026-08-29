import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import ReceptDetail from "@/pages/ReceptDetail";
import { RECIPES } from "@/data/recipes";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/_layout/recepten/$slug")({
  head: ({ params }) => {
    const recipe = RECIPES.find((r) => r.slug === params.slug);
    if (!recipe) {
      return seoHead({
        path: `/recepten/${params.slug}`,
        title: "Recept niet gevonden",
        robots: "noindex, follow",
      });
    }
    return seoHead({
      path: `/recepten/${recipe.slug}`,
      title: recipe.title,
      description: recipe.intro.slice(0, 155),
      ogType: "article",
    });
  },
  component: () => (
    <PageTransition>
      <ReceptDetail />
    </PageTransition>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import ReceptDetail from "@/pages/ReceptDetail";
import { recipes } from "@/data/recipes";
import { seoHead, breadcrumbs, toAbsoluteUrl, SITE_URL } from "@/lib/seo";

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
    return seoHead({
      path: `/recepten/${recipe.slug}`,
      title: recipe.title,
      description: recipe.intro.slice(0, 155),
      ogType: "article",
      image: toAbsoluteUrl(recipe.image),
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Recipe",
          name: recipe.title,
          description: recipe.intro,
          // Google vereist een afbeelding voor een receptkaart; die ontbrak.
          image: [toAbsoluteUrl(recipe.image)],
          recipeIngredient: recipe.ingredients,
          recipeInstructions: recipe.steps.map((text, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            text,
          })),
          author: { "@type": "Person", name: "Danique Kwakman", url: `${SITE_URL}/over-mij` },
          publisher: { "@id": `${SITE_URL}/#business` },
          url: `${SITE_URL}/recepten/${recipe.slug}`,
          inLanguage: "nl-NL",
        },
        breadcrumbs([
          { name: "Recepten", path: "/recepten" },
          { name: recipe.title, path: `/recepten/${recipe.slug}` },
        ]),
      ],
    });
  },
  component: () => (
    <PageTransition>
      <ReceptDetail />
    </PageTransition>
  ),
});

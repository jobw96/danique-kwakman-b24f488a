import { createFileRoute } from "@tanstack/react-router";
import Linktree from "@/pages/Linktree";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/linktree")({
  // Bewust uit de index: deze pagina dupliceert alleen navigatie voor
  // bezoekers vanuit de Instagram-bio. `follow` houdt de links wel bruikbaar.
  // De sitemap slaat noindex-routes automatisch over.
  head: () => seoHead({ path: "/linktree", title: "Linktree", description: "Alle links van Danique Kwakman op één plek: trajecten, e-books, podcast en contact.", robots: "noindex, follow" }),
  component: Linktree,
});

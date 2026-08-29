import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Method from "@/pages/Method";

export const Route = createFileRoute("/_layout/method")({
  head: () => seoHead({ path: "/method", title: "De CIRCLE-methode | Holistische aanpak voor vrouwen", description: "Ontdek de CIRCLE-methode: een holistische aanpak voor hormoonbalans, darmherstel en duurzame energie bij vrouwen." }),
  component: () => (
    <PageTransition>
      <Method />
    </PageTransition>
  ),
});

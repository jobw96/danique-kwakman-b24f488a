import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Nieuwsbrief from "@/pages/Nieuwsbrief";

export const Route = createFileRoute("/_layout/nieuwsbrief")({
  head: () => seoHead({ path: "/nieuwsbrief", title: "Nieuwsbrief", description: "Schrijf je in voor de nieuwsbrief en ontvang wekelijks tips en inzichten voor hormoonbalans, darmgezondheid en energie." }),
  component: () => (
    <PageTransition>
      <Nieuwsbrief />
    </PageTransition>
  ),
});

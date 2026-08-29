import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Privacy from "@/pages/Privacy";

export const Route = createFileRoute("/_layout/privacy")({
  head: () => seoHead({ path: "/privacy", title: "Privacybeleid", description: "Lees het privacybeleid van Danique Kwakman over de verwerking van persoonsgegevens." }),
  component: () => (
    <PageTransition>
      <Privacy />
    </PageTransition>
  ),
});

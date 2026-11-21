import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import WebshopOverzicht from "@/pages/WebshopOverzicht";

export const Route = createFileRoute("/_layout/webshop")({
  head: () =>
    seoHead({
      title: "Webshop | Danique Kwakman",
      description:
        "Bekijk de webshop van Danique Kwakman met het e-book Nourish Your Body: hormoonproof en darmvriendelijke recepten om zelf mee aan de slag te gaan.",
      path: "/webshop",
    }),
  component: () => (
    <PageTransition>
      <WebshopOverzicht />
    </PageTransition>
  ),
});

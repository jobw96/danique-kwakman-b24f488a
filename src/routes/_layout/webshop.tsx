import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Webshop from "@/pages/Webshop";

export const Route = createFileRoute("/_layout/webshop")({
  head: () =>
    seoHead({
      path: "/webshop",
      title: "Webshop | E-books voor hormoonbalans & darmgezondheid",
      description:
        "Bestel praktische e-books van Danique Kwakman, zoals Nourish Your Body met 50+ hormoonproof en darmvriendelijke recepten.",
    }),
  component: () => (
    <PageTransition>
      <Webshop />
    </PageTransition>
  ),
});

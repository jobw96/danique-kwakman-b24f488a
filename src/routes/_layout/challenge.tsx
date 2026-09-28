import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Challenge from "@/pages/Challenge";

export const Route = createFileRoute("/_layout/challenge")({
  head: () =>
    seoHead({
      path: "/challenge",
      title: "Gratis 5-daagse challenge",
      description:
        "Doe gratis mee met de 5-daagse challenge van Danique Kwakman en ontdek welke puzzelstukjes samenhangen met jouw PMS en opgeblazen buik.",
      schemas: [
        breadcrumbs([{ name: "Gratis challenge", path: "/challenge" }]),
      ],
    }),
  component: () => (
    <PageTransition>
      <Challenge />
    </PageTransition>
  ),
});

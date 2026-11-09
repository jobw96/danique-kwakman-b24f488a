import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs, serviceSchema } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import MommyToBe from "@/pages/MommyToBe";

export const Route = createFileRoute("/_layout/mommy-to-be")({
  head: () => seoHead({
    path: "/mommy-to-be",
    title: "1:1 Mommy (to be) traject",
    description: "Vijf maanden persoonlijke begeleiding bij kinderwens, zwangerschap en herstel na de bevalling. Vijf afspraken, in Hoorn of online.",
    schemas: [
      serviceSchema({
        name: "1:1 Mommy (to be) traject",
        description: "Persoonlijk traject van vijf maanden voor vrouwen met een kinderwens, tijdens de zwangerschap of in de postpartumperiode.",
        path: "/mommy-to-be",
        monthlyPrice: 149,
        duration: "P5M",
      }),
      breadcrumbs([
        { name: "Aanbod", path: "/behandelingen" },
        { name: "1:1 Mommy (to be) traject", path: "/mommy-to-be" },
      ]),
    ],
  }),
  component: () => (
    <PageTransition>
      <MommyToBe />
    </PageTransition>
  ),
});

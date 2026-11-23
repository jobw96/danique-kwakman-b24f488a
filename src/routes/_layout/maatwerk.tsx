import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs, serviceSchema } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Maatwerk from "@/pages/Maatwerk";

export const Route = createFileRoute("/_layout/maatwerk")({
  head: () => seoHead({
    path: "/maatwerk",
    title: "Maatwerk",
    description: "Begeleiding die volledig bij jou past. In een match call kijken we waar je nu staat, wat je nodig hebt en hoeveel sessies je nodig hebt.",
    schemas: [
      serviceSchema({
        name: "Maatwerk",
        description: "Persoonlijke 1:1 begeleiding die volledig bij jou past. In een match call bepalen we samen waar je nu staat, wat je nodig hebt en hoeveel sessies je nodig hebt.",
        path: "/maatwerk",
      }),
      breadcrumbs([
        { name: "Aanbod", path: "/behandelingen" },
        { name: "Maatwerk", path: "/maatwerk" },
      ]),
    ],
  }),
  component: () => (
    <PageTransition>
      <Maatwerk />
    </PageTransition>
  ),
});

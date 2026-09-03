import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs, serviceSchema } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Hormoontraject from "@/pages/Hormoontraject";

export const Route = createFileRoute("/_layout/hormoontraject")({
  head: () => seoHead({
    path: "/hormoontraject",
    title: "1:1 Hormoontraject | Hormoonbalans & Energie",
    description: "Het 1:1 Hormoontraject voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans. In 3 maanden naar hormonale balans, rust en vertrouwen in je lijf.",
    schemas: [
      serviceSchema({
        name: "1:1 Hormoontraject",
        description: "Persoonlijk traject van drie maanden voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans.",
        path: "/hormoontraject",
        monthlyPrice: 296,
        duration: "P3M",
      }),
      breadcrumbs([
        { name: "Aanbod", path: "/behandelingen" },
        { name: "1:1 Hormoontraject", path: "/hormoontraject" },
      ]),
    ],
  }),
  component: () => (
    <PageTransition>
      <Hormoontraject />
    </PageTransition>
  ),
});

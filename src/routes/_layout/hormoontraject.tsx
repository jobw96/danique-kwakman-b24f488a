import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs, serviceSchema } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Hormoontraject from "@/pages/Hormoontraject";

export const Route = createFileRoute("/_layout/hormoontraject")({
  head: () => seoHead({
    path: "/hormoontraject",
    title: "1:1 Hormoontraject voor vrouwen",
    description: "Drie maanden persoonlijke begeleiding bij PMS, een onregelmatige cyclus, vermoeidheid, acne of een opgeblazen buik. Gratis kennismaking, in Hoorn of online.",
    schemas: [
      serviceSchema({
        name: "1:1 Hormoontraject",
        description: "Persoonlijk traject van drie maanden voor vrouwen met PMS, een onregelmatige cyclus, vermoeidheid of hormonale klachten.",
        path: "/hormoontraject",
        monthlyPrice: 249,
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

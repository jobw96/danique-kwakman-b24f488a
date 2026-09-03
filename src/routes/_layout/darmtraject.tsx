import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs, serviceSchema } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Darmtraject from "@/pages/Darmtraject";

export const Route = createFileRoute("/_layout/darmtraject")({
  head: () => seoHead({
    path: "/darmtraject",
    title: "1:1 Darmtraject Therapie | Lab onderzoek",
    description: "Diepgaand 1:1 darmtraject met gericht laboratoriumonderzoek om tot de kern van jouw klacht te komen. Persoonlijke begeleiding door Danique Kwakman.",
    schemas: [
      serviceSchema({
        name: "1:1 Darmtraject",
        description: "Darmtraject van ongeveer zes maanden met gericht laboratoriumonderzoek, opgebouwd uit vier fases. Labkosten zijn niet inbegrepen.",
        path: "/darmtraject",
        monthlyPrice: 299,
        duration: "P6M",
      }),
      breadcrumbs([
        { name: "Aanbod", path: "/behandelingen" },
        { name: "1:1 Darmtraject", path: "/darmtraject" },
      ]),
    ],
  }),
  component: () => (
    <PageTransition>
      <Darmtraject />
    </PageTransition>
  ),
});

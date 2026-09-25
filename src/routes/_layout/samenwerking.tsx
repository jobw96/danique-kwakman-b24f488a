import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbs, seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Samenwerking from "@/pages/Samenwerking";

export const Route = createFileRoute("/_layout/samenwerking")({
  head: () => seoHead({
    path: "/samenwerking",
    title: "Samenwerkingen",
    description: "Danique Kwakman werkt samen met zorgprofessionals, zoals bekkenfysiotherapeut Florine Veldstra in Hoorn, voor begeleiding die voeding en leefstijl aanvult.",
    schemas: [breadcrumbs([{ name: "Samenwerkingen", path: "/samenwerking" }])],
  }),
  component: () => (
    <PageTransition>
      <Samenwerking />
    </PageTransition>
  ),
});

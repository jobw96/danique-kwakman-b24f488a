import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Samenwerking from "@/pages/Samenwerking";

export const Route = createFileRoute("/_layout/samenwerking")({
  head: () => seoHead({ path: "/samenwerking", title: "Samenwerking met Florine Veldstra", description: "Danique Kwakman werkt samen met bekkenfysiotherapeut Florine Veldstra in Hoorn voor begeleiding bij bekkenbodemklachten, obstipatie en postpartum herstel." }),
  component: () => (
    <PageTransition>
      <Samenwerking />
    </PageTransition>
  ),
});

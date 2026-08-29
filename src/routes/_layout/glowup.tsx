import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Hormoontraject from "@/pages/Hormoontraject";

export const Route = createFileRoute("/_layout/glowup")({
  head: () => seoHead({ path: "/glowup", canonicalPath: "/hormoontraject", title: "GlowUp traject voor vrouwen", description: "De GlowUp-pagina verwijst naar het 1:1 Hormoontraject: persoonlijke begeleiding voor vrouwen die weer energie, rust en hormonale balans willen voelen." }),
  component: () => (
    <PageTransition>
      <Hormoontraject
        seoTitle="GlowUp traject voor vrouwen"
        seoDescription="De GlowUp-pagina verwijst naar het 1:1 Hormoontraject: persoonlijke begeleiding voor vrouwen die weer energie, rust en hormonale balans willen voelen."
      />
    </PageTransition>
  ),
});

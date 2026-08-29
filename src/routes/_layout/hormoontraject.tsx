import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Hormoontraject from "@/pages/Hormoontraject";

export const Route = createFileRoute("/_layout/hormoontraject")({
  head: () => seoHead({ path: "/hormoontraject", title: "1:1 Hormoontraject | Hormoonbalans & Energie", description: "Het 1:1 Hormoontraject voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans. In 3 maanden naar hormonale balans, rust en vertrouwen in je lijf." }),
  component: () => (
    <PageTransition>
      <Hormoontraject />
    </PageTransition>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import FAQ from "@/pages/FAQ";

export const Route = createFileRoute("/_layout/faq")({
  component: () => (
    <PageTransition>
      <FAQ />
    </PageTransition>
  ),
});

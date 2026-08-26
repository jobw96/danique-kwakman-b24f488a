import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import ReceptDetail from "@/pages/ReceptDetail";

export const Route = createFileRoute("/_layout/recepten/$slug")({
  component: () => (
    <PageTransition>
      <ReceptDetail />
    </PageTransition>
  ),
});

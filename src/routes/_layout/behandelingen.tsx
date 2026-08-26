import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Behandelingen from "@/pages/Behandelingen";

export const Route = createFileRoute("/_layout/behandelingen")({
  component: () => (
    <PageTransition>
      <Behandelingen />
    </PageTransition>
  ),
});

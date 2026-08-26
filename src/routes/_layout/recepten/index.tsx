import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Recepten from "@/pages/Recepten";

export const Route = createFileRoute("/_layout/recepten/")({
  component: () => (
    <PageTransition>
      <Recepten />
    </PageTransition>
  ),
});

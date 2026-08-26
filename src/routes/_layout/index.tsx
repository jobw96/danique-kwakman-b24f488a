import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Index from "@/pages/Index";

export const Route = createFileRoute("/_layout/")({
  component: () => (
    <PageTransition>
      <Index />
    </PageTransition>
  ),
});

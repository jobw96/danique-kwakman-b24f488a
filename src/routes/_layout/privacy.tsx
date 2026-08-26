import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Privacy from "@/pages/Privacy";

export const Route = createFileRoute("/_layout/privacy")({
  component: () => (
    <PageTransition>
      <Privacy />
    </PageTransition>
  ),
});

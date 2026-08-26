import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Terms from "@/pages/Terms";

export const Route = createFileRoute("/_layout/terms")({
  component: () => (
    <PageTransition>
      <Terms />
    </PageTransition>
  ),
});

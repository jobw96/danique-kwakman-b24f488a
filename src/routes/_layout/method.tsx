import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Method from "@/pages/Method";

export const Route = createFileRoute("/_layout/method")({
  component: () => (
    <PageTransition>
      <Method />
    </PageTransition>
  ),
});

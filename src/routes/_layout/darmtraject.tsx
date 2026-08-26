import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Darmtraject from "@/pages/Darmtraject";

export const Route = createFileRoute("/_layout/darmtraject")({
  component: () => (
    <PageTransition>
      <Darmtraject />
    </PageTransition>
  ),
});

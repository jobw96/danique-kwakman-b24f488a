import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Hormoontraject from "@/pages/Hormoontraject";

export const Route = createFileRoute("/_layout/glowup")({
  component: () => (
    <PageTransition>
      <Hormoontraject />
    </PageTransition>
  ),
});

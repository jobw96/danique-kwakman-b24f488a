import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import About from "@/pages/About";

export const Route = createFileRoute("/_layout/over-mij")({
  component: () => (
    <PageTransition>
      <About />
    </PageTransition>
  ),
});

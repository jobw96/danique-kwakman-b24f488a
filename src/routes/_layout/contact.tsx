import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/_layout/contact")({
  component: () => (
    <PageTransition>
      <Contact />
    </PageTransition>
  ),
});

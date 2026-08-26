import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Nieuwsbrief from "@/pages/Nieuwsbrief";

export const Route = createFileRoute("/_layout/nieuwsbrief")({
  component: () => (
    <PageTransition>
      <Nieuwsbrief />
    </PageTransition>
  ),
});

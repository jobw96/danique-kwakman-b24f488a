import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Podcast from "@/pages/Podcast";

export const Route = createFileRoute("/_layout/podcast")({
  component: () => (
    <PageTransition>
      <Podcast />
    </PageTransition>
  ),
});

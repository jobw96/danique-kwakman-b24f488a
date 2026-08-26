import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Blog from "@/pages/Blog";

export const Route = createFileRoute("/_layout/blog/")({
  component: () => (
    <PageTransition>
      <Blog />
    </PageTransition>
  ),
});

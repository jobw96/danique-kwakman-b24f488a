import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Ebook from "@/pages/Ebook";

export const Route = createFileRoute("/_layout/e-book")({
  component: () => (
    <PageTransition>
      <Ebook />
    </PageTransition>
  ),
});

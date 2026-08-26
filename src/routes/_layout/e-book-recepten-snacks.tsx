import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import EbookCravings from "@/pages/EbookCravings";

export const Route = createFileRoute("/_layout/e-book-recepten-snacks")({
  component: () => (
    <PageTransition>
      <EbookCravings />
    </PageTransition>
  ),
});

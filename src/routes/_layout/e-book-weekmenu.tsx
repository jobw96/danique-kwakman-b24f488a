import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import EbookWeekmenu from "@/pages/EbookWeekmenu";

export const Route = createFileRoute("/_layout/e-book-weekmenu")({
  component: () => (
    <PageTransition>
      <EbookWeekmenu />
    </PageTransition>
  ),
});

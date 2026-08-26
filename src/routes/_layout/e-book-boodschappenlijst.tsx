import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import EbookBoodschappenlijst from "@/pages/EbookBoodschappenlijst";

export const Route = createFileRoute("/_layout/e-book-boodschappenlijst")({
  component: () => (
    <PageTransition>
      <EbookBoodschappenlijst />
    </PageTransition>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import EbookMealprepSnacks from "@/pages/EbookMealprepSnacks";

export const Route = createFileRoute("/_layout/e-book-mealprep-snacks")({
  component: () => (
    <PageTransition>
      <EbookMealprepSnacks />
    </PageTransition>
  ),
});

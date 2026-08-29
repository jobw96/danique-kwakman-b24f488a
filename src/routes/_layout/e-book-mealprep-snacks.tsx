import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import EbookMealprepSnacks from "@/pages/EbookMealprepSnacks";

export const Route = createFileRoute("/_layout/e-book-mealprep-snacks")({
  head: () => seoHead({ path: "/e-book-mealprep-snacks", title: "6 mealprep snacks perfect voor onderweg", description: "Download gratis het e-book met 6 mealprep snacks perfect voor onderweg. Stabiele energie, ondersteuning voor je hormonen en darmen, makkelijk vooraf te maken." }),
  component: () => (
    <PageTransition>
      <EbookMealprepSnacks />
    </PageTransition>
  ),
});

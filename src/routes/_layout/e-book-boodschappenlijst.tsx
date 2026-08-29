import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import EbookBoodschappenlijst from "@/pages/EbookBoodschappenlijst";

export const Route = createFileRoute("/_layout/e-book-boodschappenlijst")({
  head: () => seoHead({ path: "/e-book-boodschappenlijst", title: "Boodschappenlijst vol hormoonproof en darmvriendelijke basics", description: "Download gratis de boodschappenlijst vol hormoonproof en darmvriendelijke basics. Vul je keuken met producten die je hormonen en darmen ondersteunen." }),
  component: () => (
    <PageTransition>
      <EbookBoodschappenlijst />
    </PageTransition>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import EbookWeekmenu from "@/pages/EbookWeekmenu";

export const Route = createFileRoute("/_layout/e-book-weekmenu")({
  head: () => seoHead({ path: "/e-book-weekmenu", title: "Hormoonproof en darmvriendelijk weekmenu", description: "Download gratis het hormoonproof en darmvriendelijk weekmenu. Een overzichtelijke, voedende basis waarmee je jouw hormonen en darmen stap voor stap ondersteunt." }),
  component: () => (
    <PageTransition>
      <EbookWeekmenu />
    </PageTransition>
  ),
});

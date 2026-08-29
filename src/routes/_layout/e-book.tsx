import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Ebook from "@/pages/Ebook";

export const Route = createFileRoute("/_layout/e-book")({
  head: () => seoHead({ path: "/e-book", title: "Gratis E-book: 5 ontbijtrecepten voor meer energie", description: "Download het gratis e-book van Danique Kwakman met 5 hormoonvriendelijke ontbijtrecepten voor een energieke start van je dag." }),
  component: () => (
    <PageTransition>
      <Ebook />
    </PageTransition>
  ),
});

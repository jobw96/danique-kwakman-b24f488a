import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import EbookCravings from "@/pages/EbookCravings";

export const Route = createFileRoute("/_layout/e-book-recepten-snacks")({
  head: () => seoHead({ path: "/e-book-recepten-snacks", title: "5 Recepten om je Cravings te Stillen", description: "Download gratis het e-book met 5 recepten om je zoete cravings rondom je menstruatie te stillen. Voedzaam, darmvriendelijk en snel klaar." }),
  component: () => (
    <PageTransition>
      <EbookCravings />
    </PageTransition>
  ),
});

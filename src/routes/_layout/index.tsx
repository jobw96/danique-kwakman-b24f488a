import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Index from "@/pages/Index";

export const Route = createFileRoute("/_layout/")({
  head: () => seoHead({ path: "/" }),
  component: () => (
    <PageTransition>
      <Index />
    </PageTransition>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import CookiePolicy from "@/pages/CookiePolicy";

export const Route = createFileRoute("/_layout/cookie-policy")({
  component: () => (
    <PageTransition>
      <CookiePolicy />
    </PageTransition>
  ),
});

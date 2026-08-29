import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import CookiePolicy from "@/pages/CookiePolicy";

export const Route = createFileRoute("/_layout/cookie-policy")({
  head: () => seoHead({ path: "/cookie-policy", title: "Cookiebeleid", description: "Informatie over het cookiebeleid van de website van Danique Kwakman." }),
  component: () => (
    <PageTransition>
      <CookiePolicy />
    </PageTransition>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/_layout/contact")({
  head: () => seoHead({ path: "/contact", title: "Contact | Orthomoleculair Therapeut", description: "Neem contact op met Danique Kwakman, orthomoleculair therapeut, voor vragen over trajecten, kennismaking of samenwerking." }),
  component: () => (
    <PageTransition>
      <Contact />
    </PageTransition>
  ),
});

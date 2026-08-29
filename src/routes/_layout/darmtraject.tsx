import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Darmtraject from "@/pages/Darmtraject";

export const Route = createFileRoute("/_layout/darmtraject")({
  head: () => seoHead({ path: "/darmtraject", title: "1:1 Darmtraject Therapie | Lab onderzoek", description: "Diepgaand 1:1 darmtraject inclusief laboratoriumonderzoek om tot de kern van jouw klacht te komen. Persoonlijke begeleiding door Danique Kwakman." }),
  component: () => (
    <PageTransition>
      <Darmtraject />
    </PageTransition>
  ),
});

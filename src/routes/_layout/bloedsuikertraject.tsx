import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Bloedsuikertraject from "@/pages/Bloedsuikertraject";

export const Route = createFileRoute("/_layout/bloedsuikertraject")({
  head: () => seoHead({ path: "/bloedsuikertraject", title: "1:1 Bloedsuikertraject | Glucosesensor & begeleiding", description: "In 2 weken tijd naar stabiele energie, minder cravings en meer vertrouwen in je lichaam. 1:1 Bloedsuikertraject met glucosesensor door Danique Kwakman." }),
  component: () => (
    <PageTransition>
      <Bloedsuikertraject />
    </PageTransition>
  ),
});

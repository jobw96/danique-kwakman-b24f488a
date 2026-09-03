import { createFileRoute } from "@tanstack/react-router";
import { seoHead, breadcrumbs, serviceSchema } from "@/lib/seo";
import { PageTransition } from "@/components/Animations";
import Bloedsuikertraject from "@/pages/Bloedsuikertraject";

export const Route = createFileRoute("/_layout/bloedsuikertraject")({
  head: () => seoHead({
    path: "/bloedsuikertraject",
    title: "1:1 Bloedsuikertraject met glucosesensor",
    description: "In 2 weken tijd naar stabiele energie, minder cravings en meer vertrouwen in je lichaam. 1:1 Bloedsuikertraject met glucosesensor door Danique Kwakman.",
    schemas: [
      serviceSchema({
        name: "1:1 Bloedsuikertraject",
        description: "Traject van twee weken met een glucosesensor en persoonlijke begeleiding voor stabiele energie en minder cravings.",
        path: "/bloedsuikertraject",
        price: 325,
        duration: "P2W",
      }),
      breadcrumbs([
        { name: "Aanbod", path: "/behandelingen" },
        { name: "1:1 Bloedsuikertraject", path: "/bloedsuikertraject" },
      ]),
    ],
  }),
  component: () => (
    <PageTransition>
      <Bloedsuikertraject />
    </PageTransition>
  ),
});

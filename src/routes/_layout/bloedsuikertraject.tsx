import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import Bloedsuikertraject from "@/pages/Bloedsuikertraject";

export const Route = createFileRoute("/_layout/bloedsuikertraject")({
  component: () => (
    <PageTransition>
      <Bloedsuikertraject />
    </PageTransition>
  ),
});

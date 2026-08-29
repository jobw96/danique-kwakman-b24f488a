import { createFileRoute } from "@tanstack/react-router";
import Linktree from "@/pages/Linktree";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/linktree")({
  head: () => seoHead({ path: "/linktree", title: "Linktree", description: "Alle links van Danique Kwakman op één plek: trajecten, e-books, podcast en contact." }),
  component: Linktree,
});

import { createFileRoute } from "@tanstack/react-router";
import Linktree from "@/pages/Linktree";

export const Route = createFileRoute("/linktree")({
  component: Linktree,
});

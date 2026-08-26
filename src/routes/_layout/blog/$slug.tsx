import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import BlogPost from "@/pages/BlogPost";

export const Route = createFileRoute("/_layout/blog/$slug")({
  component: () => (
    <PageTransition>
      <BlogPost />
    </PageTransition>
  ),
});

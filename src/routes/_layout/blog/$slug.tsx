import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import BlogPost from "@/pages/BlogPost";
import { BLOG_POSTS } from "@/pages/Blog";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/_layout/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) {
      return seoHead({
        path: `/blog/${params.slug}`,
        title: "Artikel niet gevonden",
        robots: "noindex, follow",
      });
    }
    return seoHead({
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      ogType: "article",
    });
  },
  component: () => (
    <PageTransition>
      <BlogPost />
    </PageTransition>
  ),
});

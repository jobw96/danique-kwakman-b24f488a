import { createFileRoute } from "@tanstack/react-router";
import { PageTransition } from "@/components/Animations";
import BlogPost from "@/pages/BlogPost";
import { BLOG_POSTS } from "@/pages/Blog";
import { POST_DATES } from "@/pages/BlogPost";
import { seoHead, breadcrumbs, toAbsoluteUrl, SITE_URL } from "@/lib/seo";

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
    const published = POST_DATES[post.slug];
    return seoHead({
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      ogType: "article",
      image: toAbsoluteUrl(post.image),
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: [toAbsoluteUrl(post.image)],
          ...(published ? { datePublished: published, dateModified: published } : {}),
          author: { "@type": "Person", name: "Danique Kwakman", url: `${SITE_URL}/over-mij` },
          publisher: { "@id": `${SITE_URL}/#business` },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
          articleSection: post.category,
          inLanguage: "nl-NL",
        },
        breadcrumbs([
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]),
      ],
    });
  },
  component: () => (
    <PageTransition>
      <BlogPost />
    </PageTransition>
  ),
});

import { createFileRoute } from '@tanstack/react-router';
import { PageTransition } from '@/components/Animations';
import { findComplaintCategory } from '@/data/complaints';
import { breadcrumbs, seoHead } from '@/lib/seo';
import KlachtCategorie from '@/pages/KlachtCategorie';

export const Route = createFileRoute('/_layout/klachten/onderdeel/$category')({
  head: ({ params }) => {
    const category = findComplaintCategory(params.category);
    if (!category) {
      return seoHead({
        path: `/klachten/onderdeel/${params.category}`,
        title: 'Onderdeel niet gevonden',
        robots: 'noindex, follow',
      });
    }

    return seoHead({
      path: `/klachten/onderdeel/${category.slug}`,
      title: category.name,
      description: `${category.description} Bekijk herkenbare klachten en lees hoe ik je hierin begeleid.`,
      schemas: [
        breadcrumbs([
          { name: 'Klachten', path: '/klachten' },
          { name: category.name, path: `/klachten/onderdeel/${category.slug}` },
        ]),
      ],
    });
  },
  component: () => (
    <PageTransition>
      <KlachtCategorie />
    </PageTransition>
  ),
});
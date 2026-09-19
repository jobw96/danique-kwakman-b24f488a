import { createFileRoute } from '@tanstack/react-router';
import { PageTransition } from '@/components/Animations';
import { findComplaint } from '@/data/complaints';
import { breadcrumbs, seoHead } from '@/lib/seo';
import KlachtDetail from '@/pages/KlachtDetail';

export const Route = createFileRoute('/_layout/klachten/$slug')({
  head: ({ params }) => {
    const complaint = findComplaint(params.slug);
    if (!complaint) {
      return seoHead({
        path: `/klachten/${params.slug}`,
        title: 'Klacht niet gevonden',
        robots: 'noindex, follow',
      });
    }
    return seoHead({
      path: `/klachten/${complaint.slug}`,
      title: complaint.seoTitle,
      description: complaint.seoDescription,
      schemas: [
        breadcrumbs([
          { name: 'Klachten', path: '/klachten' },
          { name: complaint.title, path: `/klachten/${complaint.slug}` },
        ]),
      ],
    });
  },
  component: () => (
    <PageTransition>
      <KlachtDetail />
    </PageTransition>
  ),
});

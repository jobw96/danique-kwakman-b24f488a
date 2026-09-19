import { createFileRoute } from '@tanstack/react-router';
import { PageTransition } from '@/components/Animations';
import { breadcrumbs, seoHead } from '@/lib/seo';
import Klachten from '@/pages/Klachten';

export const Route = createFileRoute('/_layout/klachten')({
  head: () =>
    seoHead({
      path: '/klachten',
      title: 'Hormonale klachten en darmklachten',
      description:
        'Hulp bij hormonale klachten, PMS, PCOS, darmklachten, vermoeidheid, cravings en bloedsuikerschommelingen in Hoorn en online.',
      schemas: [breadcrumbs([{ name: 'Klachten', path: '/klachten' }])],
    }),
  component: () => (
    <PageTransition>
      <Klachten />
    </PageTransition>
  ),
});
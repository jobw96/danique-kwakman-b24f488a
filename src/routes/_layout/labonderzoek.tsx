import { createFileRoute } from '@tanstack/react-router';
import { PageTransition } from '@/components/Animations';
import { breadcrumbs, seoHead, serviceSchema } from '@/lib/seo';
import Labonderzoek from '@/pages/Labonderzoek';

export const Route = createFileRoute('/_layout/labonderzoek')({
  head: () =>
    seoHead({
      path: '/labonderzoek',
      title: 'Labonderzoek hormonen en darmen',
      description:
        'Gericht labonderzoek voor hormonen, darmen, voeding en energie, met persoonlijke uitleg en advies door Danique Kwakman in Hoorn en online.',
      schemas: [
        serviceSchema({
          name: 'Labonderzoek hormonen en darmen',
          description:
            'Gericht laboratoriumonderzoek met persoonlijke uitleg voor hormonale klachten, darmklachten, voeding en energie.',
          path: '/labonderzoek',
        }),
        breadcrumbs([
          { name: 'Aanbod', path: '/behandelingen' },
          { name: 'Labonderzoek', path: '/labonderzoek' },
        ]),
      ],
    }),
  component: () => (
    <PageTransition>
      <Labonderzoek />
    </PageTransition>
  ),
});
import { createFileRoute } from '@tanstack/react-router';
import { PageTransition } from '@/components/Animations';
import { complaintContent } from '@/data/complaint-content';
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
    // De FAQ staat al op de pagina; dit zet dezelfde vragen en antwoorden
    // ook als FAQPage in de server-response, zodat Google ze kan tonen.
    const faqs = complaintContent[complaint.slug]?.faqs ?? [];
    return seoHead({
      path: `/klachten/${complaint.slug}`,
      title: complaint.seoTitle,
      description: complaint.seoDescription,
      schemas: [
        ...(faqs.length
          ? [
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                inLanguage: 'nl-NL',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: { '@type': 'Answer', text: faq.answer.join(' ') },
                })),
              },
            ]
          : []),
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

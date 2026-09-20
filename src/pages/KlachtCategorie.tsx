import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { Section } from '@/components/Section';
import { complaintsByCategory, findComplaintCategory } from '@/data/complaints';
import { Link, Navigate, useParams } from '@/lib/router-compat';

const categoryIntros: Record<string, string> = {
  'hormonen-en-cyclus':
    'Hieronder vind je de klachten waarmee ik vrouwen begeleid. Van PMS, een onregelmatige cyclus en PCOS tot schildklierklachten, klachten rondom zwangerschap en de overgang.',
  'darmen-en-spijsvertering':
    'Hieronder vind je de klachten waarmee ik vrouwen begeleid. Van een opgeblazen buik en buikpijn tot PDS, obstipatie, maagzuur en voedselintoleranties.',
  'energie-en-bloedsuiker':
    'Hieronder vind je de klachten waarmee ik vrouwen begeleid. Van moe wakker worden en energiedips tot cravings, brain fog en bloedsuikerschommelingen die je hele dag bepalen.',
  'huid-en-haar':
    'Hieronder vind je de klachten waarmee ik vrouwen begeleid. Van acne en rosacea tot eczeem, een onrustige of gevoelige huid en haaruitval.',
};

const KlachtCategorie = () => {
  const { category: categorySlug } = useParams();
  const category = categorySlug ? findComplaintCategory(categorySlug) : undefined;
  const categoryWithItems = complaintsByCategory.find((item) => item.slug === categorySlug);

  if (!category || !categoryWithItems) return <Navigate to="/klachten" replace />;

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-4 pb-14 md:pb-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <Link
              to="/klachten"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Terug naar klachten
            </Link>
            <span className="mb-5 block font-serif text-2xl leading-none text-secondary/70 tabular-nums">
              {category.number}
            </span>
            <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {category.name}
            </h1>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              {category.description}{' '}
              {categoryIntros[category.slug] ??
                'Hieronder vind je de klachten waarmee ik vrouwen begeleid.'}
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 border-l border-t border-secondary/40 sm:grid-cols-2 lg:grid-cols-3">
          {categoryWithItems.items.map((complaint, index) => (
            <FadeIn key={complaint.slug} delay={index * 0.04} className="h-full">
              <Link
                to={`/klachten/${complaint.slug}`}
                className="group flex h-full flex-col border-b border-r border-secondary/40 bg-background p-6 transition-colors hover:bg-secondary/15"
              >
                <h2 className="mb-3 font-serif text-xl text-foreground">{complaint.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{complaint.teaser}</p>
                <span className="mt-auto flex items-center justify-end pt-6 text-primary" aria-hidden="true">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default KlachtCategorie;
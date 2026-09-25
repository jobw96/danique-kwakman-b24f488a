import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { Section } from '@/components/Section';
import { complaintsByCategory, findComplaintCategory } from '@/data/complaints';
import { Link, Navigate, useParams } from '@/lib/router-compat';
import granaatappelTerracotta from '@/assets/sfeer/granaatappel-terracotta-3x4.webp';
import gipsmuurStrijklicht from '@/assets/sfeer/abstract-gipsmuur-strijklicht-21x9.webp';

/**
 * Sfeerbeeld naast de introtekst, per categorie. Alleen ingevuld voor de
 * categorieën die al een beeld hebben; zonder entry blijft de intro
 * eenkoloms, precies zoals hij was.
 */
const CATEGORY_IMAGE: Record<string, { src: string; alt: string }> = {
  'hormonen-en-cyclus': {
    src: granaatappelTerracotta,
    alt: 'Opengebroken granaatappel op een terracotta ondergrond in de zon',
  },
};

const categoryIntros: Record<string, string> = {
  'hormonen-en-cyclus':
    'Hieronder vind je de klachten waarmee ik vrouwen begeleid. Van PMS, een onregelmatige cyclus en PCOS tot schildklierklachten, klachten rondom zwangerschap en de overgang.',
  'darmen-en-spijsvertering':
    'Hieronder vind je de klachten waarmee ik vrouwen begeleid. Van een opgeblazen buik en buikpijn tot PDS, obstipatie, maagzuur en voedselintoleranties.',
  'energie-en-bloedsuiker':
    'Hieronder vind je de klachten waarmee ik vrouwen begeleid. Van moe wakker worden en energiedips tot cravings, brain fog en bloedsuikerschommelingen die je hele dag bepalen.',
  'huid-en-haar':
    'Hieronder vind je de klachten waarmee ik vrouwen begeleid. Van acne tot eczeem, een gevoelige huid en haaruitval.',
};

const KlachtCategorie = () => {
  const { category: categorySlug } = useParams();
  const category = categorySlug ? findComplaintCategory(categorySlug) : undefined;
  const categoryWithItems = complaintsByCategory.find((item) => item.slug === categorySlug);

  if (!category || !categoryWithItems) return <Navigate to="/klachten" replace />;

  const beeld = CATEGORY_IMAGE[category.slug];

  return (
    <>
      <Section className="pt-12 md:pt-20 pb-10 md:pb-14">
        <div className={beeld ? 'mx-auto max-w-6xl' : 'mx-auto max-w-4xl'}>
          <Link
            to="/klachten"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Terug naar klachten
          </Link>
          <div className={beeld ? 'flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16' : ''}>
            <div className={beeld ? 'lg:w-3/5' : ''}>
              <FadeIn>
                <span className="mb-5 block font-serif text-2xl leading-none text-secondary/70 tabular-nums">
                  {category.number}
                </span>
                <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                  {category.name}
                </h1>
                <p className="max-w-3xl leading-relaxed text-muted-foreground">
                  {categoryIntros[category.slug] ??
                    'Hieronder vind je de klachten waarmee ik vrouwen begeleid.'}
                </p>
              </FadeIn>
            </div>
            {beeld && (
              <div className="w-full lg:w-2/5">
                <FadeIn delay={0.15}>
                  <div className="aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl">
                    <img
                      src={beeld.src}
                      alt={beeld.alt}
                      width={1195}
                      height={1600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </FadeIn>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Losse tegels met tussenruimte in plaats van een doorlopend raster met
          celranden. Het aantal klachten verschilt per categorie (4 tot 12), dus
          de laatste rij is zelden vol; bij losse tegels valt dat niet op, bij
          een tabelraster liet het een gat in de omlijning achter. */}
      {/* Foto over de volle breedte achter de tegels. Er staat geen tekst
          rechtstreeks op het beeld: de tegels zijn dekkende kaarten, dus hun
          tekst houdt exact het contrast dat de site elders ook haalt. */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <img
          src={gipsmuurStrijklicht}
          alt=""
          aria-hidden="true"
          width={1600}
          height={686}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-card/75" aria-hidden="true" />
        <div className="container relative mx-auto px-6">
        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryWithItems.items.map((complaint, index) => (
            <li key={complaint.slug} className="h-full">
              <FadeIn delay={index * 0.03} className="h-full">
                <Link
                  to={`/klachten/${complaint.slug}`}
                  className="group flex h-full flex-col rounded-md border border-secondary/40 bg-background p-5 transition-colors hover:border-primary/40 hover:bg-secondary/10"
                >
                  <h2 className="mb-2 flex items-start gap-2 font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-primary-dark">
                    <span className="min-w-0 flex-1">{complaint.title}</span>
                    <ArrowRight
                      className="mt-1 h-4 w-4 shrink-0 text-primary/50 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{complaint.teaser}</p>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>
        </div>
      </section>
    </>
  );
};

export default KlachtCategorie;
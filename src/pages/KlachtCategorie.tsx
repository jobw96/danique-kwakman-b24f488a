import { ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { Section } from '@/components/Section';
import { complaintsByCategory, complaintsInGroups, findComplaintCategory } from '@/data/complaints';
import { Link, Navigate, useParams } from '@/lib/router-compat';
import granaatappelTerracotta from '@/assets/sfeer/granaatappel-terracotta-3x4.webp';

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

/**
 * Een klacht als regel in een kolom. Geen kaart, geen rand: alleen de titel.
 * De beschrijvende zin staat op de detailpagina.
 *
 * De onderlijn is een apart laagje dat van breedte 0 naar 100% groeit, dus
 * hij schuift vanaf links uit zonder dat er iets verspringt; een echte
 * text-decoration of een border zou de regelhoogte veranderen. Het laagje zit
 * om de tekst heen en niet om de link, want de link loopt over de volle
 * kolombreedte terwijl de lijn alleen onder de woorden hoort.
 *
 * De kop is een h3 zodra er groepslabels boven staan, en anders een h2: dan is
 * de regel zelf het eerste niveau onder de h1.
 */
const KlachtRegel = ({
  complaint,
  gegroepeerd,
}: {
  complaint: { slug: string; title: string };
  gegroepeerd: boolean;
}) => {
  const Kop = gegroepeerd ? 'h3' : 'h2';
  return (
    <li>
      <Kop className="font-normal">
        <Link
          to={`/klachten/${complaint.slug}`}
          className="group block rounded-sm py-1 font-serif text-lg leading-snug text-foreground/75 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
        >
          <span className="relative inline">
            {complaint.title}
            <span
              aria-hidden="true"
              className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-[width] duration-300 ease-out group-hover:w-full group-focus-visible:w-full motion-reduce:transition-none"
            />
          </span>
        </Link>
      </Kop>
    </li>
  );
};

const KlachtCategorie = () => {
  const { category: categorySlug } = useParams();
  const category = categorySlug ? findComplaintCategory(categorySlug) : undefined;
  const categoryWithItems = complaintsByCategory.find((item) => item.slug === categorySlug);

  if (!category || !categoryWithItems) return <Navigate to="/klachten" replace />;

  const beeld = CATEGORY_IMAGE[category.slug];
  // Null bij een categorie zonder groepsindeling; dan blijft het een platte lijst.
  const groepen = categorySlug ? complaintsInGroups(categorySlug) : null;

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
                  <div className="aspect-[3/4] overflow-hidden rounded-[2rem]">
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

      {/* Overzicht in kolommen: per groep een kolom met de klachten als regels
          eronder. De kolommen lezen als losse blokken door de horizontale
          ruimte ertussen, zonder scheidingslijnen of vlakken. De achtergrond
          blijft de cremekleur van de pagina. */}
      <section className="pb-16 pt-4 md:pb-24 md:pt-8">
        <div className="container mx-auto px-6">
          {groepen ? (
            <div className="mx-auto grid max-w-5xl items-start gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 xl:gap-x-20">
              {groepen.map((groep, groepIndex) => (
                <FadeIn key={groep.name || 'overig'} delay={groepIndex * 0.08}>
                  {groep.name && (
                    // Ruimer dan de afstand tussen de regels onderling, zodat
                    // het label duidelijk bij de kolom hoort en niet bij de
                    // eerste klacht.
                    <h2 className="mb-7 font-serif text-2xl text-foreground">{groep.name}</h2>
                  )}
                  <ul className="space-y-5">
                    {groep.items.map((complaint) => (
                      <KlachtRegel key={complaint.slug} complaint={complaint} gegroepeerd />
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          ) : (
            // Een categorie zonder groepsindeling heeft geen labels, dus daar
            // lopen de regels als een enkele lijst over de kolommen door. Twee
            // kolommen in plaats van drie: zo'n categorie heeft maar een handvol
            // klachten en die zouden in drie kolommen als losse woorden op een
            // lege breedte staan.
            <FadeIn>
              <ul className="mx-auto grid max-w-3xl items-start gap-x-12 gap-y-5 sm:grid-cols-2 lg:gap-x-16">
                {categoryWithItems.items.map((complaint) => (
                  <KlachtRegel key={complaint.slug} complaint={complaint} gegroepeerd={false} />
                ))}
              </ul>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
};

export default KlachtCategorie;
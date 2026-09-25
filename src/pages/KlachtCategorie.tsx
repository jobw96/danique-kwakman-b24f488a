import { ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { Section } from '@/components/Section';
import { complaintsByCategory, complaintsInGroups, findComplaintCategory } from '@/data/complaints';
import { Link, Navigate, useParams } from '@/lib/router-compat';
import granaatappelTerracotta from '@/assets/sfeer/granaatappel-terracotta-3x4.webp';
import citrusBruiswater from '@/assets/sfeer/macro-citrus-bruiswater-3x4.webp';
import avocadoSalie from '@/assets/sfeer/macro-avocado-sage-4x3.webp';
import gefermenteerdeGroenten from '@/assets/sfeer/gefermenteerde-groenten-pot-4x3.webp';
import groenteschaalBovenaf from '@/assets/sfeer/groenteschaal-bovenaf-9x16.webp';
import havermoutKom from '@/assets/sfeer/havermout-kom-bovenaf-4x3.webp';
import walnotenAmandelen from '@/assets/sfeer/walnoten-amandelen-linnen-4x3.webp';
import linnenLakens from '@/assets/sfeer/linnen-lakens-waslijn-9x16.webp';
import palmschaduwMuur from '@/assets/sfeer/textuur-palmschaduw-muur-21x9.webp';

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
 * Beeld per groep, met het groepslabel er middenin. De bronbestanden hebben
 * verschillende verhoudingen; ze staan alle acht in een kader van 4:3 met
 * object-cover, zodat de kolommen gelijk ogen.
 *
 * width en height zijn de echte afmetingen van het bestand. De browser kent
 * daarmee de verhouding voordat het beeld binnen is en reserveert de ruimte,
 * dus er schuift niets als het laadt.
 *
 * De foto's zijn gekozen op helderheid: met de waas hieronder haalt de
 * lichtste keuze nog 5,17:1 voor het label. Bij een lichtere foto zou dat
 * onder de 4,5 van WCAG AA zakken.
 */
const GROEP_BEELD: Record<string, { src: string; width: number; height: number }> = {
  // Hormonen en cyclus
  'Je cyclus': { src: citrusBruiswater, width: 1195, height: 1600 },
  'Hormonen uit balans': { src: avocadoSalie, width: 1600, height: 1195 },
  Levensfase: { src: linnenLakens, width: 904, height: 1600 },
  // Darmen en spijsvertering
  'Buik en vertering': { src: gefermenteerdeGroenten, width: 1600, height: 1194 },
  'Ontlasting en darmwerking': { src: groenteschaalBovenaf, width: 905, height: 1600 },
  // Energie en bloedsuiker
  'Energie door de dag': { src: havermoutKom, width: 1600, height: 1194 },
  Bloedsuiker: { src: walnotenAmandelen, width: 1600, height: 1194 },
  'Stress en slaap': { src: palmschaduwMuur, width: 1600, height: 686 },
};

/**
 * De kolommen zakken van links naar rechts steeds iets verder, zodat het
 * blok niet als een strak raster leest. Alleen op lg: daaronder staan de
 * kolommen onder elkaar of in tweeen en zou een verspringing een gat maken.
 * De klassenamen staan voluit, want Tailwind leest de broncode als tekst en
 * vindt een samengestelde naam niet.
 */
const KOLOM_TRAP = ['', 'lg:mt-10', 'lg:mt-20'];

/**
 * Verloop van onderaf: donker achter het label linksonder en volledig
 * doorzichtig op iets over de helft van de hoogte. Zo blijft de bovenkant van
 * de foto onaangetast en ligt het gewicht alleen waar de letters staan.
 *
 * De waarden zijn gemeten: onder de letters haalt de lichtste van de acht
 * foto's er 4,4:1 mee tegen de cremekleurige letter. Het label staat op 24px
 * en telt daarmee als grote tekst, waarvoor WCAG AA 3:1 vraagt.
 */
const WAAS =
  'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0) 70%)';

/**
 * Een klacht als klikbare regel in een kolom. De onderlijn staat er altijd en
 * verandert bij hover alleen van kleur: een lijn die pas bij hover verschijnt
 * of dikker wordt, zou de regelhoogte veranderen en de lijst laten verspringen.
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
          className="group block border-b border-secondary/50 py-3.5 font-serif text-lg leading-snug text-foreground/75 transition-colors hover:border-secondary-dark/60 hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
        >
          {complaint.title}
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
      {/* De foto loopt rechts uit de kolom en tegen de schermrand aan, net als
          de hero van /klachten. Hij staat absoluut en spant van de boven- tot
          de onderkant van de sectie; de min-hoogte op lg bepaalt daarmee hoe
          groot hij wordt, zonder dat een vaste beeldverhouding hem over de
          kolommen eronder heen laat hangen. */}
      <Section className={`relative pt-12 md:pt-20 pb-6 md:pb-8${beeld ? ' lg:min-h-[40rem]' : ''}`}>
        <div className={beeld ? 'mx-auto max-w-6xl' : 'mx-auto max-w-4xl'}>
          <Link
            to="/klachten"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Terug naar klachten
          </Link>
          {/* Onder lg staat de foto gewoon onder de tekst; de tekstkolom mag
              daar de volle breedte houden. Op lg krijgt hij 52%, zodat er
              ruimte overblijft naast het beeld. */}
          <div className={beeld ? 'lg:max-w-[52%]' : ''}>
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
            <div className="mt-10 lg:absolute lg:bottom-0 lg:right-0 lg:top-0 lg:mt-0 lg:w-[42vw] lg:max-w-[620px]">
              <FadeIn delay={0.15} className="h-full">
                {/* Alleen links afgerond: rechts loopt de foto tegen de
                    schermrand aan. Onder lg staat hij binnen de marges en is
                    hij rondom afgerond. */}
                <div className="aspect-[3/4] overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:rounded-l-3xl lg:rounded-r-none">
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
      </Section>

      {/* Overzicht in kolommen: per groep een beeld, een klein label en de
          klachten als regels eronder. Geen kaarten of vlakken; de cremekleur
          van de pagina loopt door. */}
      <section className="pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container mx-auto px-6">
          {groepen ? (
            <div className="mx-auto grid max-w-6xl items-start gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
              {groepen.map((groep, groepIndex) => {
                const beeld = GROEP_BEELD[groep.name];
                return (
                  <FadeIn
                    key={groep.name || 'overig'}
                    delay={groepIndex * 0.08}
                    className={KOLOM_TRAP[groepIndex % KOLOM_TRAP.length]}
                  >
                    {beeld ? (
                      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                        <img
                          src={beeld.src}
                          alt=""
                          aria-hidden="true"
                          width={beeld.width}
                          height={beeld.height}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0"
                          style={{ backgroundImage: WAAS }}
                        />
                        {groep.name && (
                          <h2 className="absolute inset-x-0 bottom-0 px-6 pb-5 font-serif text-2xl uppercase leading-snug tracking-[0.12em] text-background">
                            {groep.name}
                          </h2>
                        )}
                      </div>
                    ) : (
                      // Zonder beeld valt het label terug op de plek erboven,
                      // in de donkere beigetint die op de cremekleur leesbaar is.
                      groep.name && (
                        <h2 className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.18em] text-secondary-dark">
                          {groep.name}
                        </h2>
                      )
                    )}
                    <ul>
                      {groep.items.map((complaint) => (
                        <KlachtRegel key={complaint.slug} complaint={complaint} gegroepeerd />
                      ))}
                    </ul>
                  </FadeIn>
                );
              })}
            </div>
          ) : (
            // Een categorie zonder groepsindeling heeft geen labels en geen
            // beeld, dus daar lopen de regels als een enkele lijst door. Twee
            // kolommen in plaats van drie: zo'n categorie heeft maar een
            // handvol klachten en die zouden in drie kolommen als losse woorden
            // op een lege breedte staan.
            <FadeIn>
              <ul className="mx-auto grid max-w-3xl items-start gap-x-12 sm:grid-cols-2 lg:gap-x-16">
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
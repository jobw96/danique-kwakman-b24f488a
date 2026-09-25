import { ArrowRight } from 'lucide-react';
import { m } from 'framer-motion';
import { FadeIn } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { complaintsByCategory } from '@/data/complaints';
import { Link } from '@/lib/router-compat';
import kustParasols from '@/assets/sfeer/kust-parasols-onderaanzicht-2x3.webp';
import gipsmuurStrijklicht from '@/assets/sfeer/abstract-gipsmuur-strijklicht-21x9.webp';

const categoryDescriptions: Record<string, string> = {
  'hormonen-en-cyclus':
    'Van PMS en pijnlijke of onregelmatige menstruaties tot PCOS, schildklierproblemen, kinderwens, klachten rondom zwangerschap en klachten rondom de overgang en menopauze.',
  'darmen-en-spijsvertering':
    'Van een opgeblazen buik, buikpijn en winderigheid tot obstipatie, diarree, PDS, maagzuur en voedselintoleranties.',
  'energie-en-bloedsuiker':
    'Van moe wakker worden en energiedips tot cravings, een middagdip, brain fog en het gevoel dat je energie gedurende de dag alle kanten op gaat.',
  'huid-en-haar': 'Van acne tot eczeem en haaruitval.',
};

/**
 * Decoratieve golf in de primaire kleur, hetzelfde motief als de witte lijn
 * die op de strandfoto van het hormoontraject staat. Puur sier: hij staat op
 * aria-hidden en vangt geen muis. De tegels komen later in de DOM en hebben
 * een dekkende achtergrond, dus die lopen er vanzelf overheen.
 *
 * De lijnen worden getekend in plaats van ingefadet, en pas nadat de tegels
 * er staan: die beginnen op 0 tot 0,24s en duren 0,9s. De bovenste lijn start
 * op 0,7s, de onderste loopt er met 0,25s achteraan. Voor een lijn die zich
 * tekent werkt een ease-out beter dan de in-out van FadeIn: hij zet meteen
 * door en komt aan het eind tot rust in plaats van traag op gang te komen.
 */
const TEKEN_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tekenVariant = (vertraging: number) => ({
  verborgen: { pathLength: 0 },
  zichtbaar: {
    pathLength: 1,
    transition: { duration: 1.2, ease: TEKEN_EASE, delay: vertraging },
  },
});

const Golf = () => (
  <m.svg
    viewBox="0 0 340 200"
    fill="none"
    className="h-auto w-full"
    initial="verborgen"
    whileInView="zichtbaar"
    viewport={{ once: true, margin: '-10%' }}
  >
    <m.path
      d="M14 78C52 24 104 18 150 56c46 38 96 32 134-22"
      className="stroke-primary"
      strokeWidth={10}
      strokeLinecap="round"
      variants={tekenVariant(0.7)}
    />
    <m.path
      d="M52 168C90 114 142 108 188 146c30 25 62 29 92 12"
      className="stroke-primary"
      strokeWidth={10}
      strokeLinecap="round"
      opacity={0.5}
      variants={tekenVariant(0.95)}
    />
  </m.svg>
);

const Klachten = () => {
  const { openModal } = useBookingModal();

  return (
    <>
      {/* Hero: foto links over 60vw en 120vh, tekst rechts en verticaal
          gecentreerd. De splitsing gaat pas op xl in; daaronder wordt de
          tekstkolom zo smal dat een regel onder de 45 tekens zakt, dus daar
          staat de foto boven de tekst. */}
      <section className="bg-card xl:grid xl:grid-cols-[60vw_1fr]">
        {/* Radius alleen aan de onderkant: links en boven loopt de foto tegen
            de schermrand en de header aan. Op xl valt linksonder weg, want
            daar raakt de foto de linkerrand. */}
        <div className="h-[41vh] w-full overflow-hidden rounded-b-[2.5rem] sm:h-[65vh] xl:h-[120vh] xl:rounded-bl-none xl:rounded-br-[3rem]">
          <img
            src={kustParasols}
            alt="Twee crèmekleurige parasols van onderaf tegen een lichtblauwe lucht"
            width={1062}
            height={1600}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-14 md:py-20 xl:px-10 2xl:px-14">
          <div className="mx-auto w-full max-w-2xl xl:mx-0">
            <FadeIn>
              <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                Klachten waarmee ik je kan helpen
              </h1>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Je weet dat er iets niet lekker gaat, maar je krijgt niet goed boven tafel waar het vandaan komt.
                </p>
                <p>
                  Je hebt bijvoorbeeld last van een opgeblazen buik, bent de hele dag moe, hebt steeds cravings, veel PMS-klachten of een cyclus waar geen regelmaat in zit. En misschien heb je al van alles geprobeerd, maar blijven de klachten terugkomen.
                </p>
                <p>
                  Ik kijk niet alleen naar de klacht waarmee je bij mij komt. Ik wil weten wat er nog meer speelt. Hoe ziet je voeding eruit? Hoeveel energie krijg je binnen? Hoe is je slaap, stress en herstel? Wat gebeurt er rondom je cyclus, darmen, bloedsuiker, huid of energie?
                </p>
                <p>Juist die combinatie geeft belangrijke informatie over wat er speelt.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Intro links uitgelijnd op dezelfde rand als de eerste tegel.
              max-w-2xl houdt de regel op ~75 tekens; het raster eronder mag
              wel de volle max-w-5xl gebruiken. */}
          <div className="relative mb-12 md:mb-16">
            <FadeIn className="max-w-2xl">
            <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
              Herken je jezelf in meerdere klachten?
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Je hoeft niet één duidelijke klacht te hebben om te weten dat er iets niet goed gaat. Misschien heb je bijvoorbeeld én een opgeblazen buik én weinig energie. Of zijn je menstruaties onregelmatig en heb je daarnaast last van acne en cravings.
              </p>
              <p>
                Tijdens een traject brengen we daarom eerst rustig in kaart wat er speelt. Aan de hand daarvan kijken we welke puzzelstukjes met elkaar samenhangen, waar we het beste kunnen beginnen en hoe we dit stap voor stap gaan aanpakken.
              </p>
            </div>
            </FadeIn>

            {/* Onder lg is er naast de tekstkolom geen ruimte over, daar blijft
                de golf weg. De negatieve bodem laat hem 96px voorbij de marge
                zakken, zodat tegel 02 over de onderste golf heen valt. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 right-0 hidden w-[250px] lg:block xl:w-[340px]"
            >
              <Golf />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {complaintsByCategory.map((category, index) => (
              <FadeIn key={category.name} delay={index * 0.08} className="h-full">
                <Link
                  to={`/klachten/onderdeel/${category.slug}`}
                  className="group relative flex h-full flex-col rounded-3xl border border-secondary/30 bg-background p-7 transition-colors hover:border-primary/40 hover:bg-secondary/10 md:p-8"
                >
                  <span className="mb-5 font-serif text-2xl leading-none text-secondary/70 tabular-nums">
                    {category.number}
                  </span>
                  {/* Pijl naast de titel in plaats van onderaan: bij een korte
                      omschrijving bleef daar anders een groot gat over. */}
                  <h3 className="mb-4 flex items-start gap-3 font-serif text-2xl text-foreground transition-colors group-hover:text-primary-dark md:text-3xl">
                    <span className="min-w-0 flex-1">{category.name}</span>
                    <ArrowRight
                      className="mt-1.5 h-5 w-5 shrink-0 text-primary/60 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {categoryDescriptions[category.slug] ?? category.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Afsluitende CTA over de volle breedte. De gipsmuur ligt onder een
          cremekleurige waas van 70%: daarmee komt de donkerste pixel onder de
          tekst uit op rgb(202,194,182) en haalt de bodytekst in foreground/75
          een contrast van 5,3:1. Met muted-foreground bleef dat zelfs bij een
          waas van 90% onder de 4,5 steken, vandaar de donkerdere tekstkleur. */}
      <section className="relative isolate overflow-hidden">
        <img
          src={gipsmuurStrijklicht}
          alt=""
          aria-hidden="true"
          width={1600}
          height={686}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-background/70" aria-hidden="true" />
        {/* Golvende overgang: een vorm in de kleur van de sectie erboven die
            over de bovenkant van de foto heen valt. Zo hoeft de foto zelf niet
            gemaskerd te worden en blijft de rechte onderrand intact.
            preserveAspectRatio="none" laat de golf meerekken met de breedte,
            waardoor hij op elk scherm even hoog blijft. */}
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[34px] w-full fill-card md:h-[56px]"
        >
          <path d="M0 0h1440v24c-180 36-360 42-540 22S540 6 360 20C240 30 120 44 0 38V0Z" />
        </svg>
        <div className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
          <FadeIn>
            <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
              Heb je al van alles geprobeerd?
            </h2>
            <div className="space-y-4 leading-relaxed text-foreground/75">
              <p>
                Misschien weet je inmiddels precies welke klachten je hebt, maar niet waarom ze blijven terugkomen. Tijdens een gratis en vrijblijvende kennismaking bespreken we waar je tegenaan loopt en wat je graag anders zou willen. Vanuit daar kijken we wat er nodig is en welk traject daarbij past.
              </p>
              <p>
                Volg je een traject bij mij, dan start je met uitgebreide intakeformulieren en een persoonlijke intake. Waar nodig kunnen we aanvullend <Link to="/labonderzoek" className="underline underline-offset-4 transition-colors hover:text-primary-dark">laboratoriumonderzoek</Link> inzetten om bepaalde puzzelstukjes verder te onderzoeken. Vanuit daar gaan we verder met het traject en werken we gericht aan wat er bij jou speelt.
              </p>
            </div>
            <div className="mt-10">
              <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Klachten;

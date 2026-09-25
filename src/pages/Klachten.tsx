import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { complaintsByCategory } from '@/data/complaints';
import { Link } from '@/lib/router-compat';
import kustParasols from '@/assets/sfeer/kust-parasols-onderaanzicht-2x3.webp';
import citroenBruiswater from '@/assets/sfeer/macro-citroenschijf-bruiswater-2x3.webp';

const categoryDescriptions: Record<string, string> = {
  'hormonen-en-cyclus':
    'Van PMS en pijnlijke of onregelmatige menstruaties tot PCOS, schildklierproblemen, kinderwens, klachten rondom zwangerschap en klachten rondom de overgang en menopauze.',
  'darmen-en-spijsvertering':
    'Van een opgeblazen buik, buikpijn en winderigheid tot obstipatie, diarree, PDS, maagzuur en voedselintoleranties.',
  'energie-en-bloedsuiker':
    'Van moe wakker worden en energiedips tot cravings, een middagdip, brain fog en het gevoel dat je energie gedurende de dag alle kanten op gaat.',
  'huid-en-haar': 'Van acne tot eczeem en haaruitval.',
};

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
        <div className="h-[55vh] w-full overflow-hidden rounded-b-[2.5rem] sm:h-[65vh] xl:h-[120vh] xl:rounded-bl-none xl:rounded-br-[3rem]">
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {complaintsByCategory.map((category, index) => (
              <FadeIn key={category.name} delay={index * 0.08} className="h-full">
                <Link
                  to={`/klachten/onderdeel/${category.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-secondary/30 bg-background p-7 transition-colors hover:border-primary/40 hover:bg-secondary/10 md:p-8"
                >
                  <span className="mb-5 font-serif text-2xl leading-none text-secondary/70 tabular-nums">
                    {category.number}
                  </span>
                  {/* Pijl naast de titel in plaats van onderaan: bij een korte
                      omschrijving bleef daar anders een groot gat over. */}
                  <h2 className="mb-4 flex items-start gap-3 font-serif text-2xl text-foreground transition-colors group-hover:text-primary-dark md:text-3xl">
                    <span className="min-w-0 flex-1">{category.name}</span>
                    <ArrowRight
                      className="mt-1.5 h-5 w-5 shrink-0 text-primary/60 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {categoryDescriptions[category.slug] ?? category.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* De foto loopt hier bewust uit de kolom: hij staat vast aan de
          rechter schermrand, is alleen links afgerond en is verticaal
          gecentreerd ten opzichte van de sectie in plaats van uitgelijnd op
          de eerste kop. Dat breekt het strakke tweekoloms ritme van de rest
          van de pagina. */}
      <Section className="relative bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* max-w-2xl houdt de regel op ~75 tekens. Met max-w-3xl liep hij
              onder de lg-breakpoint, waar de foto eronder valt, op tot 86. */}
          <div className="max-w-2xl lg:max-w-[55%]">
          <FadeIn>
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

          <FadeIn delay={0.08} className="mt-14">
            <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
              Heb je al van alles geprobeerd?
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Misschien weet je inmiddels precies welke klachten je hebt, maar niet waarom ze blijven terugkomen. Tijdens een gratis en vrijblijvende kennismaking bespreken we waar je tegenaan loopt en wat je graag anders zou willen. Vanuit daar kijken we wat er nodig is en welk traject daarbij past.
              </p>
              <p>
                Volg je een traject bij mij, dan start je met uitgebreide intakeformulieren en een persoonlijke intake. Waar nodig kunnen we aanvullend <Link to="/labonderzoek" className="underline underline-offset-4 transition-colors hover:text-primary-dark">laboratoriumonderzoek</Link> inzetten om bepaalde puzzelstukjes verder te onderzoeken. Vanuit daar gaan we verder met het traject en werken we gericht aan wat er bij jou speelt.
              </p>
            </div>
            <div className="mt-8">
              <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
            </div>
          </FadeIn>
          </div>

          {/* Onder lg past de foto niet naast een leesbare kolom. Hij valt dan
              onder de tekst, maar rechts uitgelijnd en op halve breedte, zodat
              het een bewuste tegenhanger blijft in plaats van een los blok. */}
          <div className="mt-14 ml-auto max-w-sm sm:max-w-md lg:absolute lg:right-0 lg:top-1/2 lg:ml-0 lg:mt-0 lg:w-[38vw] lg:max-w-[560px] lg:-translate-y-1/2">
            <FadeIn delay={0.12}>
              <div className="aspect-[3/4] overflow-hidden rounded-[2rem] lg:rounded-r-none lg:rounded-l-[3rem]">
                <img
                  src={citroenBruiswater}
                  alt="Close-up van een schijf citroen in bruiswater met opstijgende belletjes"
                  width={1062}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Klachten;

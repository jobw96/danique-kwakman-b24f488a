import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { complaintsByCategory } from '@/data/complaints';
import { Link } from '@/lib/router-compat';

const categoryDescriptions: Record<string, string> = {
  'hormonen-en-cyclus':
    'Van PMS en pijnlijke of onregelmatige menstruaties tot PCOS, schildklierproblemen, kinderwens, klachten rondom zwangerschap en klachten rondom de overgang en menopauze.',
  'darmen-en-spijsvertering':
    'Van een opgeblazen buik, buikpijn en winderigheid tot obstipatie, diarree, PDS, maagzuur en voedselintoleranties.',
  'energie-en-bloedsuiker':
    'Van moe wakker worden en energiedips tot cravings, een middagdip, brain fog en het gevoel dat je energie gedurende de dag alle kanten op gaat.',
  'huid-en-haar': 'Van acne en rosacea tot eczeem en haaruitval.',
};

const Klachten = () => {
  const { openModal } = useBookingModal();

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Klachten waarmee ik je kan helpen
            </h1>
            <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
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
      </Section>

      <Section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {complaintsByCategory.map((category, index) => (
              <FadeIn key={category.name} delay={index * 0.08} className="h-full">
                <Link
                  to={`/klachten/onderdeel/${category.slug}`}
                  className="group flex h-full flex-col rounded-md border border-secondary/30 bg-background p-7 transition-colors hover:border-primary/40 md:p-8"
                >
                  <span className="mb-5 font-serif text-2xl leading-none text-secondary/70 tabular-nums">
                    {category.number}
                  </span>
                  <h2 className="mb-4 font-serif text-2xl text-foreground md:text-3xl">
                    {category.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {categoryDescriptions[category.slug] ?? category.description}
                  </p>
                  <span className="mt-auto flex items-center justify-end pt-8 text-primary" aria-hidden="true">
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
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
      </Section>
    </main>
  );
};

export default Klachten;

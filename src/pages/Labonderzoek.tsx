import {
  Activity,
  ClipboardCheck,
  Droplets,
  FlaskConical,
  HeartPulse,
  Microscope,
  PackageCheck,
  Salad,
  ScanSearch,
  TestTubes,
} from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import daniqueMatchCall from '@/assets/danique-match-call.webp';

const SectionTag = ({ children }: { children: string }) => (
  <span className="mb-6 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground">
    {children}
  </span>
);

const TESTS = [
  {
    title: 'Darm- en ontlastingsonderzoek',
    icon: Microscope,
    description:
      'Geeft inzicht in verschillende aspecten van je spijsvertering en darmmilieu. Afhankelijk van jouw klachten kan worden gekeken naar onder andere de samenstelling van het microbioom, spijsverteringsmarkers en ontstekingswaarden.',
  },
  {
    title: 'Hormoonprofiel via speeksel',
    icon: Droplets,
    description:
      'Kan inzicht geven in de verhouding tussen hormonen zoals oestradiol, progesteron, testosteron en DHEA. We bekijken altijd eerst of deze test past bij jouw klachten en cyclus.',
  },
  {
    title: 'Cortisol-dagprofiel',
    icon: Activity,
    description:
      'Brengt het verloop van cortisol op meerdere momenten van de dag in beeld. Dit kan aanvullende informatie geven wanneer stress, vermoeidheid of slaapproblemen een rol spelen.',
  },
  {
    title: 'Voedingsreacties',
    icon: Salad,
    description:
      'Wanneer voeding mogelijk meespeelt, kijken we zorgvuldig welke vorm van onderzoek zinvol kan zijn. Een uitslag staat nooit op zichzelf, maar wordt naast jouw klachten, voedingspatroon en gezondheidsgeschiedenis gelegd.',
  },
  {
    title: 'Bloedonderzoek',
    icon: TestTubes,
    description:
      'Afhankelijk van je hulpvraag kunnen waarden rondom bijvoorbeeld ijzer, vitamines, schildklier of hormonen aanvullende informatie geven. Bloedafname vindt plaats via een passend prikpunt of in overleg met je arts.',
  },
  {
    title: 'Aanvullend onderzoek',
    icon: FlaskConical,
    description:
      'Soms past een urineonderzoek, histamineonderzoek of een andere gerichte test beter bij jouw situatie. Ik adviseer alleen onderzoek als de uitslag daadwerkelijk richting kan geven aan de volgende stap.',
  },
];

const STEPS = [
  {
    title: 'Kennismaking',
    icon: HeartPulse,
    description:
      'We bespreken waar je tegenaan loopt, wat je al hebt geprobeerd en waar je graag duidelijkheid over wilt. Zo voelen we samen of mijn manier van werken bij jou past.',
  },
  {
    title: 'Intake en onderzoekskeuze',
    icon: ClipboardCheck,
    description:
      'Met een uitgebreide intake brengen we jouw klachten, voeding, leefstijl, cyclus, stress en gezondheidsgeschiedenis in kaart. Daarna bepalen we samen welk onderzoek echt iets kan toevoegen. Soms is testen niet nodig, en dat vertel ik je ook eerlijk.',
  },
  {
    title: 'Afname en analyse',
    icon: PackageCheck,
    description:
      'Afhankelijk van het onderzoek neem je thuis speeksel, ontlasting of urine af, of laat je bloed prikken. Het laboratorium analyseert het materiaal en stuurt de uitslag naar mij.',
  },
  {
    title: 'Persoonlijke uitleg en plan',
    icon: ScanSearch,
    description:
      'Ik vertaal de waarden naar begrijpelijke taal en leg de verbinding met jouw verhaal. Je krijgt geen los rapport vol cijfers, maar duidelijkheid over wat de uitslag wel en niet zegt en welke vervolgstappen bij jou passen.',
  },
];

const Labonderzoek = () => {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-background">
      <Section className="pt-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <FadeIn className="lg:w-1/2">
              <SectionTag>Gericht onderzoeken</SectionTag>
              <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Labonderzoek
              </h1>
              <div className="mb-8 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Je voelt dat er iets niet klopt, maar krijgt geen grip op waar je klachten vandaan komen. Misschien heb je al van alles geprobeerd en blijf je zitten met vermoeidheid, hormonale klachten, darmproblemen of het gevoel dat je lichaam niet meewerkt.
                </p>
                <p>
                  Laboratoriumonderzoek kan helpen om gerichter te kijken. Niet om jouw lichaam terug te brengen tot een rijtje waarden, maar om extra puzzelstukjes te verzamelen. We starten altijd bij jouw verhaal en kiezen alleen een onderzoek dat past bij jouw klachten en hulpvraag.
                </p>
              </div>
              <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full lg:w-1/2">
              <div className="aspect-[4/5] overflow-hidden rounded-md">
                <ParallaxImage
                  src={daniqueMatchCall}
                  alt="Danique Kwakman begeleidt vrouwen bij gericht laboratoriumonderzoek"
                  className="h-full w-full"
                  eager
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mb-12 max-w-3xl">
            <SectionTag>Mogelijke onderzoeken</SectionTag>
            <h2 className="mb-5 font-serif text-3xl text-foreground md:text-4xl">
              Welk onderzoek past bij jouw klachten?
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Geen lichaam en geen hulpvraag is hetzelfde. Daarom werken we niet met een standaardpakket, maar kijken we welke test gerichte informatie kan geven en welke juist niets toevoegt.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {TESTS.map((test, index) => (
              <FadeIn key={test.title} delay={index * 0.05}>
                <article className="flex h-full gap-4 border-t border-secondary/50 py-7">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-dark">
                    <test.icon aria-hidden="true" size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-xl text-foreground">{test.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{test.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mb-12 text-center">
            <SectionTag>Werkwijze</SectionTag>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Van jouw verhaal naar een helder plan
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {STEPS.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08} className="h-full">
                <article className="h-full rounded-md border border-secondary/40 bg-card p-7 md:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary/30 text-foreground">
                      <step.icon aria-hidden="true" size={20} strokeWidth={1.6} />
                    </div>
                    <span className="text-sm text-primary-dark">0{index + 1}</span>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-primary py-16 md:py-20">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 font-serif text-3xl text-primary-foreground md:text-4xl">
            Geen losse uitslag, maar inzicht in jouw lichaam
          </h2>
          <p className="mb-8 leading-relaxed text-primary-foreground/90">
            Ik neem de tijd om jouw uitslag rustig uit te leggen en samen te bekijken wat deze betekent binnen het grotere geheel. Zo weet je welke stappen passend zijn, zonder te verdwalen in cijfers of medisch jargon.
          </p>
          <CustomButton variant="white" onClick={openModal}>
            Laat mij met je meedenken
          </CustomButton>
        </FadeIn>
      </Section>

      <Section className="py-12 md:py-16">
        <FadeIn className="mx-auto max-w-3xl border-l-2 border-secondary pl-6">
          <h2 className="mb-3 font-serif text-2xl text-foreground">Goed om te weten</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Labonderzoek is aanvullend en vervangt geen diagnose, behandeling of controle door een arts. Bij ernstige, acute of aanhoudende klachten adviseer ik je altijd contact op te nemen met je huisarts of specialist. De mogelijkheden en kosten van een passend onderzoek bespreken we vooraf.
          </p>
        </FadeIn>
      </Section>
    </div>
  );
};

export default Labonderzoek;
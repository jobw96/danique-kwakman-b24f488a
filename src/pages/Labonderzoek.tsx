import {
  Activity,
  Droplets,
  FlaskConical,
  Microscope,
  Salad,
  TestTubes,
} from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Link } from '@/lib/router-compat';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import daniqueMatchCall from '@/assets/danique-match-call.webp';

const SectionTag = ({ children }: { children: string }) => (
  <span className="mb-6 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground">
    {children}
  </span>
);

type TestMarker = string | { label: string; href?: string };

const TESTS = [
  {
    title: 'Darm- en ontlastingsonderzoek',
    icon: Microscope,
    description:
      'Geeft inzicht in verschillende aspecten van je spijsvertering en darmmilieu. Afhankelijk van jouw klachten kan worden gekeken naar onder andere:',
    markers: [
      'Darmmicrobioom in kaart, waaronder bacteriën, dysbiose, parasieten, ontstekingen en spijsvertering',
      'Spijsverteringsmarkers, zoals pancreas-elastase',
      'Ontstekingswaarden, zoals calprotectine',
      'Secretorisch IgA (darmimmuniteit)',
      'Pathogenen, zoals bacteriën, gisten en parasieten',
      { label: 'Meer over het 1:1 Darmtraject', href: '/darmtraject' },
    ],
  },
  {
    title: 'Hormoonprofiel vrouw',
    icon: Droplets,
    description:
      'Brengt de vrouwelijke hormoonhuishouding in kaart via speeksel. Afhankelijk van jouw klachten en cyclus kan worden gekeken naar:',
    markers: [
      'Oestradiol',
      'Progesteron',
      'DHEA',
      'Testosteron',
    ],
  },
  {
    title: 'Cortisol-dagprofiel',
    icon: Activity,
    description:
      'Brengt het verloop van cortisol over de dag in beeld via meerdere speekselmonsters. Dit kan aanvullende informatie geven wanneer stress, vermoeidheid of slaapproblemen een rol spelen.',
  },
  {
    title: 'Voedselintoleranties',
    icon: Salad,
    description:
      'Wanneer klachten mogelijk met voeding te maken hebben, kan gericht onderzoek naar voedselintoleranties uitkomst bieden:',
    markers: [
      'IGG prescreening op 31 voedingsmiddelen',
      'IGE totaal',
    ],
  },
  {
    title: 'Bloedonderzoek',
    icon: TestTubes,
    description:
      'Afhankelijk van je hulpvraag kunnen bloedwaarden aanvullende informatie geven. Denk aan:',
    markers: [
      'IJzer en ferritine',
      'Vitamine B12, D en foliumzuur',
      { label: 'Bloedsuiker en HbA1c', href: '/bloedsuikertraject' },
      'Algemeen bloedbeeld',
    ],
  },
  {
    title: 'Schildklierprogramma plus',
    icon: Activity,
    description:
      'Geeft een vollediger beeld van de schildklierfunctie dan alleen de standaardwaarden. Denk aan:',
    markers: [
      'TSH',
      'fT4 en fT3',
      'Reverse T3',
      'Antistoffen (anti-TPO, anti-Tg, TSH-receptor)',
    ],
  },
  {
    title: 'Aanvullend onderzoek',
    icon: FlaskConical,
    description:
      'Soms past een andere gerichte test beter bij jouw situatie. Denk bijvoorbeeld aan:',
    markers: [
      'Histamineonderzoek',
      'Overige gerichte tests die passen bij jouw hulpvraag',
    ],
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
              Als je een traject bij mij volgt, start je met uitgebreide intakeformulieren en een persoonlijke intake. Daarmee krijg ik een compleet beeld van jouw klachten, gezondheid, leefstijl en eventuele hormonale of darmgerelateerde klachten. Vervolgens bekijken we samen of aanvullend laboratoriumonderzoek van meerwaarde is bij bijvoorbeeld hormonale klachten, een vermoeden van hormonale disbalans of darmklachten, en welke onderzoeken daarbij passen. Niet iedere situatie en ieder traject vraagt om aanvullend onderzoek.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Hieronder zie je een kleine inkijk in de mogelijke onderzoeken die binnen een traject kunnen worden ingezet.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {TESTS.map((test, index) => (
              <FadeIn key={test.title} delay={index * 0.05}>
                <article className="flex h-full flex-col border-t border-secondary/50 py-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-dark">
                      <test.icon aria-hidden="true" size={19} strokeWidth={1.7} />
                    </div>
                    <h3 className="font-serif text-xl text-foreground">{test.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{test.description}</p>
                  {test.markers && test.markers.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {test.markers.map((marker) => {
                        const item: { label: string; href?: string } =
                          typeof marker === 'string' ? { label: marker } : marker;
                        return (
                          <li key={item.label} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                            {item.href ? (
                              <Link
                                to={item.href}
                                className="underline underline-offset-2 transition-colors hover:text-primary-dark"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <span>{item.label}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
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

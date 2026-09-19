import {
  Activity,
  Brain,
  Droplets,
  Leaf,
  MoonStar,
  Sparkles,
} from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { Link } from '@/lib/router-compat';

const SectionTag = ({ children }: { children: string }) => (
  <span className="mb-6 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground">
    {children}
  </span>
);

const COMPLAINT_GROUPS = [
  {
    title: 'Hormonen & cyclus',
    icon: Droplets,
    complaints: [
      'PMS of stemmingswisselingen voor je menstruatie',
      'Een onregelmatige, pijnlijke of hevige menstruatie',
      'PCOS/PMOS of het vermoeden van hormonale disbalans',
      'Klachten rondom de overgang of menopauze',
      'Een kinderwens of voorbereiding op een zwangerschap',
    ],
    description:
      'Je cyclus vertelt veel over je hormonale gezondheid. Daarom kijken we niet alleen naar je menstruatie, maar ook naar voeding, darmen, bloedsuiker, slaap en stress.',
    href: '/hormoontraject',
    linkLabel: 'Bekijk het 1:1 Hormoontraject',
  },
  {
    title: 'Darmen & spijsvertering',
    icon: Leaf,
    complaints: [
      'Een opgeblazen buik, vooral na het eten',
      'Winderigheid, buikpijn of buikkrampen',
      'Verstopping, diarree of wisselende ontlasting',
      'Prikkelbare darm (PDS)',
      'Maagzuur, voedselintoleranties of verteringsklachten',
    ],
    description:
      'Darmklachten kunnen invloed hebben op hoe je je de hele dag voelt. Samen onderzoeken we welke rol je spijsvertering, darmflora, voeding en leefstijl spelen.',
    href: '/darmtraject',
    linkLabel: 'Bekijk het 1:1 Darmtraject',
  },
  {
    title: 'Energie & bloedsuiker',
    icon: Activity,
    complaints: [
      'Moe wakker worden, ook na voldoende slaap',
      'Energiedips gedurende de dag',
      'Cravings of steeds trek in iets zoets',
      'Trillerig, prikkelbaar of slap voelen als je niet eet',
      'Moeite met afvallen of snel weer honger hebben',
    ],
    description:
      'Schommelingen in je bloedsuiker kunnen doorwerken in je energie, honger, slaap en hormonen. Inzicht in jouw reactie op voeding helpt om gerichter te kiezen.',
    href: '/bloedsuikertraject',
    linkLabel: 'Bekijk het 1:1 Bloedsuikertraject',
  },
  {
    title: 'Stress, slaap & herstel',
    icon: MoonStar,
    complaints: [
      'Moeite met inslapen of doorslapen',
      'Niet uitgerust wakker worden',
      'Je opgejaagd voelen en moeilijk kunnen ontspannen',
      'Lang nodig hebben om te herstellen na drukke periodes',
      'Vermoeid zijn, maar toch niet tot rust komen',
    ],
    description:
      'Langdurige stress en onvoldoende herstel kunnen je energie, cyclus, spijsvertering en eetlust beïnvloeden. Daarom nemen we ook je dagritme en slaap mee.',
  },
  {
    title: 'Huid & haar',
    icon: Sparkles,
    complaints: [
      'Acne die steeds terugkomt',
      'Eczeem, rosacea of een onrustige huid',
      'Een droge, gevoelige of geïrriteerde huid',
      'Haaruitval of dunner wordend haar',
      'Huidklachten die rondom je cyclus verergeren',
    ],
    description:
      'Je huid en haar kunnen signalen geven over wat er vanbinnen speelt. We kijken onder andere naar hormonen, darmen, voeding, tekorten en ontstekingsgevoeligheid.',
  },
  {
    title: 'Hoofd, stemming & concentratie',
    icon: Brain,
    complaints: [
      'Brain fog of moeite met focussen',
      'Prikkelbaarheid of stemmingswisselingen',
      'Je somber, gespannen of emotioneel voelen',
      'Hoofdpijn of migraine rondom je menstruatie',
      'Het gevoel dat je hoofd nooit echt tot rust komt',
    ],
    description:
      'Hoe je je mentaal voelt staat niet los van je lichaam. Je cyclus, darmen, bloedsuiker, slaap en stress kunnen allemaal invloed hebben op je stemming en concentratie.',
  },
];

const Klachten = () => {
  const { openModal } = useBookingModal();

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <SectionTag>Herkenbare signalen</SectionTag>
            <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Klachten waarmee ik je kan helpen
            </h1>
            <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Je hebt klachten, maar kunt er niet precies de vinger op leggen. Misschien heb je last van een opgeblazen buik, vermoeidheid, cravings, PMS of een onregelmatige cyclus. Soms lijken die klachten los van elkaar te staan, terwijl ze elkaar juist kunnen beïnvloeden.
              </p>
              <p>
                Als orthomoleculair hormoon- en darmtherapeut kijk ik naar het geheel. Niet alleen naar waar je last van hebt, maar ook naar de mogelijke samenhang tussen je hormonen, darmen, voeding, bloedsuiker, slaap en stress.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
            <SectionTag>Waar herken jij jezelf in?</SectionTag>
            <h2 className="mb-5 font-serif text-3xl text-foreground md:text-4xl">
              Je klachten staan niet altijd op zichzelf
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Hieronder vind je klachten die ik regelmatig tegenkom bij vrouwen in mijn praktijk in Hoorn en online. Je hoeft jezelf niet in één blok te herkennen. Juist de combinatie van signalen helpt om jouw gezondheidspuzzel beter te begrijpen.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {COMPLAINT_GROUPS.map((group, index) => (
              <FadeIn key={group.title} delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col border-t border-secondary/50 py-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-dark">
                      <group.icon aria-hidden="true" size={19} strokeWidth={1.7} />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground">{group.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {group.complaints.map((complaint) => (
                      <li key={complaint} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                        <span>{complaint}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/80">{group.description}</p>
                  {group.href && group.linkLabel && (
                    <Link
                      to={group.href}
                      className="mt-5 inline-flex text-sm text-primary underline underline-offset-4 transition-colors hover:text-primary-dark"
                    >
                      {group.linkLabel}
                    </Link>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="rounded-md border border-secondary/30 bg-card p-8 text-center md:p-12">
              <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
                Weet je niet waar jouw klachten bij passen?
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Dat hoeft ook niet. Tijdens een gratis kennismaking bespreken we waar je tegenaan loopt en kijken we welk traject bij jouw klachten en hulpvraag past.
              </p>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Volg je een traject bij mij, dan starten we met uitgebreide intakeformulieren en een persoonlijke intake. Waar nodig kan aanvullend <Link to="/labonderzoek" className="underline underline-offset-4 transition-colors hover:text-primary-dark">laboratoriumonderzoek</Link> helpen om gerichter naar jouw gezondheid te kijken.
              </p>
              <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="pt-0 pb-16 md:pb-24">
        <FadeIn className="mx-auto max-w-3xl border-l-2 border-secondary pl-6">
          <h2 className="mb-3 font-serif text-2xl text-foreground">Goed om te weten</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            De informatie op deze pagina is bedoeld om klachten te herkennen en vervangt geen diagnose, behandeling of controle door een arts. Neem bij ernstige, acute of aanhoudende klachten altijd contact op met je huisarts of specialist.
          </p>
        </FadeIn>
      </Section>
    </main>
  );
};

export default Klachten;
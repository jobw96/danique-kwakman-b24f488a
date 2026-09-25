import React, { useState } from 'react';
import { m } from 'framer-motion';
import {
  Activity,
  Check,
  ChevronDown,
  ClipboardList,
  Heart,
  MessageCircle,
  ScanLine,
  Users,
  X,
} from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import sensorPortraitAsset from '@/assets/bloedsuiker/danique-glucosesensor-portret.webp.asset.json';
import sensorShowAsset from '@/assets/bloedsuiker/danique-toont-glucosesensor.webp.asset.json';
import sensorBoxAsset from '@/assets/bloedsuiker/freestyle-libre-sensor.webp.asset.json';
import glucoseRangeAsset from '@/assets/bloedsuiker/glucosewaarde-in-bereik.webp.asset.json';
import lowGlucoseAsset from '@/assets/bloedsuiker/lage-glucosewaarde.webp.asset.json';

const symptoms = [
  'Energiedips, vooral na een maaltijd',
  'Cravings en snaaimomenten',
  'Brain fog of moeite met concentreren',
  'Moeite met afvallen',
  'Een opgeblazen gevoel of darmklachten',
  'Acne, PCOS/PMOS of insulineresistentie',
  'Moeite met inslapen of doorslapen',
];

const results = [
  'Begrijp je hoe jouw lichaam reageert op voeding, beweging, stress en slaap',
  'Weet je welke gewoontes samenhangen met energiepieken en energiedips',
  'Heb je praktische aanpassingen die passen bij jouw dagelijks leven',
  'Voel je je langer verzadigd na maaltijden',
  'Heb je meer vertrouwen in de signalen en patronen die je lichaam laat zien',
];

const processSteps = [
  {
    number: '01',
    title: 'Kennismaking',
    icon: Users,
    description:
      'Tijdens dit vrijblijvende gesprek bespreken we jouw situatie en hulpvraag. Je kunt al je vragen stellen en samen bekijken we of dit traject passend is.',
  },
  {
    number: '02',
    title: 'Intake en plaatsing glucosesensor',
    icon: ClipboardList,
    description:
      'We brengen jouw voeding, leefstijl, energie, slaap, stress, beweging en klachten in kaart. Daarna plaatsen we de sensor op de achterkant van je bovenarm. De eerste week verander je bewust niets, zodat we een eerlijk beeld krijgen van jouw huidige patroon.',
  },
  {
    number: '03',
    title: 'Meten in jouw dagelijks leven',
    icon: ScanLine,
    description:
      'Veertien dagen lang zie je hoe je glucosewaarden gedurende de dag bewegen. Je houdt bij wat je eet en wat er rondom beweging, slaap en stress gebeurt.',
  },
  {
    number: '04',
    title: 'Check-in na één week',
    icon: Activity,
    description:
      'Na zeven dagen analyseren we de eerste patronen. Je ontvangt persoonlijke adviezen en gaat daar tijdens de tweede week gericht mee aan de slag.',
  },
  {
    number: '05',
    title: 'Eindconsult en persoonlijk plan',
    icon: MessageCircle,
    description:
      'Na veertien dagen vergelijken we de resultaten en bespreken we jouw ervaringen. Je krijgt een persoonlijk plan waarmee je zelfstandig verder kunt.',
  },
];

const included = [
  'Online kennismakingsgesprek om jouw hulpvraag helder te krijgen',
  'Uitgebreide intake',
  'Glucosesensor voor een meting van veertien dagen',
  'Analyse van jouw persoonlijke glucosegegevens',
  'Check-in na één week',
  'Eindconsult na twee weken',
  'Persoonlijk plan op basis van voeding, leefstijl en jouw resultaten',
  'Begeleiding via WhatsApp wanneer je daar behoefte aan hebt',
  'Praktische tools en boodschappenlijst',
  'Weekmenu voor maaltijden die bijdragen aan een stabiele bloedsuikerspiegel',
];

const faqs = [
  {
    question: 'Doet het plaatsen van de glucosesensor pijn?',
    answer:
      'De sensor wordt op de achterkant van je bovenarm geplaatst. Dit gaat snel en wordt doorgaans nauwelijks gevoeld. Daarna blijft de sensor veertien dagen zitten.',
  },
  {
    question: 'Moet ik tijdens de meting anders gaan eten?',
    answer:
      'De eerste week verander je bewust niets. Zo krijgen we een eerlijk beeld van hoe jouw lichaam nu reageert. Na de check-in ga je met persoonlijke aanpassingen aan de slag en kunnen we zien wat er verandert.',
  },
  {
    question: 'Wat laat een glucosemeting zien?',
    answer:
      'De meting laat zien hoe jouw glucosewaarden gedurende de dag bewegen en hoe die beweging samenvalt met onder andere maaltijden, beweging, slaap en stress. De sensor is een hulpmiddel voor inzicht en stelt geen medische diagnose.',
  },
  {
    question: 'Is dit traject ook geschikt bij PCOS of insulineresistentie?',
    answer:
      'Het traject kan waardevol inzicht geven wanneer je PCOS/PMOS of insulineresistentie hebt. Tijdens de kennismaking bespreken we jouw situatie en bekijken we welk traject het beste aansluit.',
  },
  {
    question: 'Kan het traject online?',
    answer:
      'De gesprekken kunnen online plaatsvinden. Voor het plaatsen van de sensor stemmen we vooraf praktisch af wat in jouw situatie mogelijk is.',
  },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-primary">{children}</p>
);

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/25 text-primary-dark">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Bloedsuikertraject = () => {
  const { openModal } = useBookingModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      <SEO
        title="1:1 Bloedsuikertraject"
        description="Ontdek in 14 dagen hoe voeding, beweging, slaap en stress jouw glucose beïnvloeden met een sensor en persoonlijke begeleiding van Danique Kwakman."
        canonicalUrl="/bloedsuikertraject"
      />

      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <FadeIn immediate>
              <SectionLabel>1:1 traject · 14 dagen</SectionLabel>
              <h1 className="max-w-3xl text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                1:1 bloedsuikertraject
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-primary-dark">
                Je eet gezond en slaapt genoeg, maar om 15.00 uur val je bijna in slaap achter je laptop en ga je opzoek naar suiker en koffie om de middag door te komen.
              </p>
              <div className="mt-7 max-w-xl space-y-4 leading-relaxed">
                <p>
                  Je eet gezond, beweegt voldoende en probeert goed voor jezelf te zorgen. En toch word je na acht uur slaap niet uitgerust wakker, zakt je energie rond 15.00 uur compleet weg en zit je ’s avonds ineens dat pak koek open te trekken.
                  Misschien heb je rondom je menstruatie nog meer trek, meer last van PMS of merk je dat je energie de hele dag alle kanten op gaat.
                </p>
                <p>
                  Geen enkel lichaam reageert hetzelfde op voeding. Daarom kijken we tijdens dit traject niet alleen naar algemene adviezen, maar naar jouw eigen gegevens en dagelijks leven.
                </p>
              </div>
              <CustomButton onClick={openModal} className="mt-8">
                Plan een gratis kennismaking
              </CustomButton>
              <dl className="mt-10 grid max-w-xl grid-cols-3 border-y border-secondary/50 py-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Duur</dt>
                  <dd className="mt-1 text-foreground">14 dagen</dd>
                </div>
                <div className="border-x border-secondary/50 px-4">
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Contact</dt>
                  <dd className="mt-1 text-foreground">3 momenten</dd>
                </div>
                <div className="pl-4">
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Investering</dt>
                  <dd className="mt-1 text-foreground">€325</dd>
                </div>
              </dl>
            </FadeIn>

            <FadeIn immediate delay={0.15} className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-md">
                <ParallaxImage
                  src={sensorPortraitAsset.url}
                  alt="Danique Kwakman draagt een glucosesensor op haar bovenarm tijdens het 1:1 bloedsuikertraject"
                  title="Danique Kwakman met glucosesensor tijdens het 1:1 bloedsuikertraject"
                  className="h-full w-full"
                  eager
                />
              </div>
              <div className="absolute bottom-4 left-4 max-w-[15rem] rounded-md bg-background/95 px-4 py-3 text-sm leading-snug text-foreground backdrop-blur-sm md:bottom-6 md:left-6">
                Jouw meting. Jouw patronen. Praktische keuzes die bij jou passen.
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/40 bg-card py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <SectionLabel>Misschien herken je dit</SectionLabel>
              <h2 className="text-3xl leading-tight text-foreground md:text-5xl">
                Gezond eten en toch blijven schommelen
              </h2>
              <p className="mt-6 max-w-md leading-relaxed">
                Je hoeft niet te blijven gokken welke maaltijd, gewoonte of timing voor jou werkt. De sensor maakt zichtbaar wat je normaal alleen achteraf voelt.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <CheckList items={symptoms} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-3xl">
              <SectionLabel>Meten maakt patronen zichtbaar</SectionLabel>
              <h2 className="text-3xl leading-tight text-foreground md:text-5xl">
                Een grafiek vertelt meer wanneer je de context begrijpt
              </h2>
              <p className="mt-6 leading-relaxed">
                Een losse waarde zegt niet alles. Daarom combineren we de meting met jouw eetpatroon, beweging, stress, slaap en klachten. Zo onderzoeken we waar jouw lichaam anders reageert dan je verwacht en welke kleine veranderingen verschil kunnen maken.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeIn>
                <figure className="grid min-h-full grid-cols-[0.82fr_1.18fr] overflow-hidden rounded-md border border-secondary/40 bg-card">
                  <img
                    src={glucoseRangeAsset.url}
                    alt="Voorbeeld van een glucosegrafiek met een waarde van 7,7 millimol per liter binnen het ingestelde bereik"
                    title="Voorbeeld van een glucosewaarde binnen bereik"
                    width="700"
                    height="1517"
                    loading="lazy"
                    decoding="async"
                    className="h-full min-h-72 w-full object-cover object-top"
                  />
                  <figcaption className="flex flex-col justify-end p-6">
                    <span className="text-xs uppercase tracking-[0.12em] text-primary-dark">Inzicht 01</span>
                    <h3 className="mt-3 text-2xl text-foreground">Wat gebeurt er na een maaltijd?</h3>
                    <p className="mt-3 text-sm leading-relaxed">We bekijken niet alleen de piek, maar ook de timing, de samenstelling van je maaltijd en wat je daarna deed.</p>
                  </figcaption>
                </figure>
              </FadeIn>
              <FadeIn delay={0.1}>
                <figure className="grid min-h-full grid-cols-[0.82fr_1.18fr] overflow-hidden rounded-md border border-secondary/40 bg-card">
                  <img
                    src={lowGlucoseAsset.url}
                    alt="Voorbeeld van een glucosegrafiek met een lage glucosewaarde van 3,7 millimol per liter"
                    title="Voorbeeld van een lage glucosewaarde"
                    width="700"
                    height="1517"
                    loading="lazy"
                    decoding="async"
                    className="h-full min-h-72 w-full object-cover object-top"
                  />
                  <figcaption className="flex flex-col justify-end p-6">
                    <span className="text-xs uppercase tracking-[0.12em] text-primary-dark">Inzicht 02</span>
                    <h3 className="mt-3 text-2xl text-foreground">Waar komt die plotselinge trek vandaan?</h3>
                    <p className="mt-3 text-sm leading-relaxed">Een daling kan samenvallen met trek, onrust of minder focus. Jouw logboek helpt ons het patroon eromheen te begrijpen.</p>
                  </figcaption>
                </figure>
              </FadeIn>
            </div>

            <FadeIn className="mt-10 border-l-2 border-primary pl-6 md:ml-auto md:max-w-3xl">
              <p className="text-xl leading-relaxed text-foreground md:text-2xl">
                Het doel is niet om iedere lijn perfect vlak te krijgen. Het doel is dat jij begrijpt welke keuzes jouw energie ondersteunen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden rounded-md">
                <img
                  src={sensorShowAsset.url}
                  alt="Danique Kwakman laat zien waar de glucosesensor op de bovenarm wordt gedragen"
                  title="Plaatsing van de glucosesensor op de bovenarm"
                  width="1080"
                  height="1911"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/75">Na veertien dagen</p>
              <h2 className="text-3xl leading-tight text-primary-foreground md:text-5xl">Van losse signalen naar een persoonlijk plan</h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/85">
                Hoe beter je jouw reactie op voeding en leefstijl begrijpt, hoe makkelijker het wordt om keuzes te maken die passen bij jouw energie, verzadiging en dagelijks ritme.
              </p>
              <div className="mt-8 text-primary-foreground/90">
                <CheckList items={results} />
              </div>
              <CustomButton onClick={openModal} variant="white" className="mt-9">
                Bespreek jouw situatie
              </CustomButton>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-2xl">
              <SectionLabel>Zo verloopt het traject</SectionLabel>
              <h2 className="text-3xl leading-tight text-foreground md:text-5xl">Twee weken, stap voor stap begeleid</h2>
            </FadeIn>
            <div className="mt-12 divide-y divide-secondary/50 border-y border-secondary/50">
              {processSteps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.04}>
                  <div className="grid gap-5 py-8 md:grid-cols-[4rem_3rem_0.75fr_1.25fr] md:items-start md:gap-8">
                    <span className="text-sm text-primary-dark">{step.number}</span>
                    <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="text-2xl text-foreground">{step.title}</h3>
                    <p className="leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/40 bg-card py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <FadeIn>
              <figure className="overflow-hidden rounded-md bg-background">
                <img
                  src={sensorBoxAsset.url}
                  alt="Verpakking van de FreeStyle Libre 2 glucosesensor die tijdens het 1:1 bloedsuikertraject wordt gebruikt"
                  title="Glucosesensor voor de 14-daagse meting"
                  width="1080"
                  height="1440"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
                <figcaption className="border-t border-secondary/40 px-5 py-4 text-sm">De sensor voor jouw 14-daagse meting is inbegrepen.</figcaption>
              </figure>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel>Alles wat je nodig hebt</SectionLabel>
              <h2 className="text-3xl leading-tight text-foreground md:text-5xl">Dit zit bij het traject</h2>
              <div className="mt-8">
                <CheckList items={included} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="text-center">
              <SectionLabel>Wel of niet passend</SectionLabel>
              <h2 className="text-3xl text-foreground md:text-5xl">Is dit traject voor jou?</h2>
            </FadeIn>
            <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-secondary/40 bg-secondary/40 md:grid-cols-2">
              <FadeIn className="h-full bg-card p-8 md:p-10">
                <Heart className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-2xl text-foreground">Dit past bij jou als je</h3>
                <div className="mt-6">
                  <CheckList
                    items={[
                      'Wilt stoppen met gokken wat gezond is voor jou',
                      'Meer inzicht wilt in jouw energie en eetpatroon',
                      'Openstaat voor praktische aanpassingen in voeding en leefstijl',
                      'Persoonlijke begeleiding wilt bij het interpreteren van de meting',
                    ]}
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.1} className="h-full bg-background p-8 md:p-10">
                <X className="h-7 w-7 text-primary-dark" aria-hidden="true" />
                <h3 className="mt-5 text-2xl text-foreground">Dit is niet passend als je</h3>
                <ul className="mt-6 space-y-3">
                  {[
                    'Alleen een glucosesensor wilt dragen zonder begeleiding',
                    'Op zoek bent naar een snel dieet of tijdelijke oplossing',
                    'Geen ruimte wilt maken voor verandering in voeding en leefstijl',
                    'Niet bereid bent om twee weken actief inzicht te krijgen in jouw patroon',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <FadeIn className="text-center">
              <SectionLabel>Veelgestelde vragen</SectionLabel>
              <h2 className="text-3xl text-foreground md:text-5xl">Goed om vooraf te weten</h2>
            </FadeIn>
            <div className="mt-10 border-t border-secondary/60">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <FadeIn key={faq.question} delay={index * 0.04}>
                    <div className="border-b border-secondary/60">
                      <m.button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        aria-expanded={isOpen}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-lg text-foreground md:text-xl">{faq.question}</h3>
                        <m.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-primary-dark">
                          <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        </m.span>
                      </m.button>
                      <m.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 leading-relaxed">{faq.answer}</p>
                      </m.div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mx-auto max-w-5xl overflow-hidden rounded-md border border-secondary/50 bg-card">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <img
                src={sensorPortraitAsset.url}
                alt="Danique Kwakman met de glucosesensor die wordt gebruikt tijdens het persoonlijke bloedsuikertraject"
                title="Persoonlijke begeleiding tijdens het 1:1 bloedsuikertraject"
                width="1080"
                height="1911"
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover object-[center_35%] lg:h-full"
              />
              <div className="p-8 md:p-12">
                <SectionLabel>Investering</SectionLabel>
                <h2 className="text-3xl leading-tight text-foreground md:text-5xl">Klaar om jouw patronen te begrijpen?</h2>
                <p className="mt-5 leading-relaxed">
                  Plan eerst een gratis kennismaking. Dan bespreken we waar je tegenaan loopt en of deze korte, intensieve meting past bij jouw hulpvraag.
                </p>
                <p className="mt-8 text-5xl text-primary-dark md:text-6xl">€325</p>
                <p className="mt-2 text-sm">Eenmalige investering voor het volledige traject</p>
                <CustomButton onClick={openModal} className="mt-8">
                  Plan een gratis kennismaking
                </CustomButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Bloedsuikertraject;
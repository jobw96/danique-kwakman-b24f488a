import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { Testimonials } from '@/components/Testimonials';
import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import { BLOEDSUIKER_TESTIMONIALS } from '@/data/testimonials';
import sensorPortraitAsset from '@/assets/bloedsuiker/danique-glucosesensor-portret.webp.asset.json';
import sensorShowAsset from '@/assets/bloedsuiker/danique-toont-glucosesensor.webp.asset.json';
import sensorBoxAsset from '@/assets/bloedsuiker/freestyle-libre-sensor.webp.asset.json';
import glucoseRangeAsset from '@/assets/bloedsuiker/glucosewaarde-in-bereik.webp.asset.json';
import lowGlucoseAsset from '@/assets/bloedsuiker/lage-glucosewaarde.webp.asset.json';
import daniqueAbout from '@/assets/danique-about.webp';

const symptoms = [
  'Je kunt die reep chocola na het eten maar moeilijk uit je hoofd zetten.',
  'Je merkt dat je humeur behoorlijk kan omslaan zodra je te lang niets hebt gegeten.\n',
  'Je wordt totaal niet fit wakker, ook na een nacht van acht uur slaap.',
  'Je merkt dat je rond je menstruatie veel meer trek hebt en ineens de hele dag aan eten kunt denken.',
  'Je hebt standaard een Sultana, banaan of mueslireep in je tas, want je weet inmiddels maar al te goed dat je ergens op de dag ineens NU iets moet eten.\n',
];

const results = [
  'Je weet welke voedingsmiddelen bij jou voor een piek in je bloedsuikerspiegel zorgen',
  'Je herkent wanneer je energiedips ontstaan en wat daar aan bijdraagt',
  'Je ontdekt welke gewoontes bijdragen aan stabielere energie gedurende de dag',
  'Je weet welke keuzes jou helpen om langer verzadigd te blijven en kunnen bijdragen aan een gezond gewicht',
  'Je krijgt meer inzicht in de invloed van je bloedsuikerspiegel op je hormonale gezondheid en hebt praktische handvatten waar je zelf mee verder kunt',
];

const included = [
  {
    title: 'Online kennismakingsgesprek',
    description:
      'We starten met een online kennismakingsgesprek om jouw hulpvraag helder te krijgen. We bespreken waar je nu tegenaan loopt, wat je graag wilt veranderen en of het bloedsuikertraject daarbij past.',
  },
  {
    title: 'Uitgebreide intake',
    description:
      'Voor we gaan meten, brengen we eerst jouw situatie in kaart. We kijken naar je voeding, leefstijl, slaap, stress, beweging, cyclus en de klachten die je ervaart. Zo weten we niet alleen wat je wilt onderzoeken, maar ook waar we tijdens de meting op letten.',
  },
  {
    title: 'Persoonlijke analyse en persoonlijk plan',
    description:
      'We kijken naar jouw glucosegegevens en leggen verbanden met wat je eet, hoe je beweegt, slaapt en leeft. Zo krijg je inzicht in de patronen die bij jou spelen. Daarna vertalen we dat naar praktische handvatten die aansluiten bij jouw resultaten. Geen nieuw voedingsschema vol regels, maar een plan waarmee je weet wat voor jou werkt.',
  },
  {
    title: 'Check-in na één week',
    description:
      'Na de eerste week nemen we samen de metingen door. We bespreken wat opvalt, welke puzzelstukjes we zien en waar we in de tweede week mee aan de slag gaan.',
  },
  {
    title: 'Eindconsult na twee weken',
    description:
      'Na de tweede week vergelijken we de resultaten en zetten we de puntjes op de i. We kijken wat de aanpassingen hebben gedaan en welke keuzes je wilt blijven toepassen in je dagelijks leven.',
  },
  {
    title: 'Persoonlijke WhatsApp-begeleiding',
    description:
      'Heb je tijdens het traject een vraag, wil je iets bespreken of loop je ergens tegenaan? Dan kun je me via WhatsApp bereiken wanneer je daar behoefte aan hebt. Zo hoef je niet te wachten tot ons volgende afspraak.',
  },
  {
    title: 'Praktische tools',
    description:
      'Zoals de boodschappenlijst en een weekmenu met maaltijden die passen binnen een voedingspatroon dat bijdraagt aan een stabielere bloedsuikerspiegel.',
  },
];

const faqs = [
  {
    question: 'Doet het plaatsen van de glucosesensor pijn?',
    answer: [
      'De plaatsing wordt meestal nauwelijks gevoeld. De sensor wordt op de achterkant van je bovenarm geplaatst. Daarna blijft de sensor veertien dagen zitten.',
    ],
  },
  {
    question: 'Hoe werkt het met de glucosesensor?',
    answer: [
      'De app die je nodig hebt om je glucosewaarden te bekijken is gratis. In veel gevallen kun je de sensor zelf ook gratis bestellen. Heb je al eerder een sensor gebruikt of kom je niet in aanmerking voor een gratis sensor? Dan kun je de sensor voor €66 bestellen.',
      'Je hoeft dit niet allemaal zelf uit te zoeken. Ik begeleid je bij het volledige proces: van het bestellen en plaatsen van de sensor tot het uitlezen en bespreken van jouw persoonlijke glucosegegevens.',
    ],
  },
  {
    question: 'Moet ik tijdens de meting anders gaan eten?',
    answer: [
      'Nee, in de eerste week verander je bewust niets aan je voeding of leefstijl. Zo krijgen we een zo eerlijk mogelijk beeld van hoe jouw glucose gedurende de dag reageert op wat je nu doet. Tijdens de check-in bekijken we de eerste inzichten en daarna ga je met persoonlijke aanpassingen aan de slag.',
    ],
  },
  {
    question: 'Wat laat een glucosemeting zien?',
    answer: [
      'De sensor laat zien hoe je glucose gedurende de dag verandert. We leggen deze gegevens naast o.a. je maaltijden, beweging, slaap en stress. Zo krijg je inzicht in hoe jouw lichaam reageert op verschillende situaties.',
    ],
  },
  {
    question: 'Bij welke klachten kan ik dit traject volgen?',
    answer: [
      'Het bloedsuikertraject kan interessant zijn wanneer je merkt dat je energie gedurende de dag wisselt, je regelmatig cravings of snaaidrang hebt of snel weer honger hebt na een maaltijd. Maar ook wanneer je klachten ervaart die kunnen samenhangen met je bloedsuikerregulatie, zoals PMS, PCOS, insulineresistentie, hormonale klachten, vermoeidheid, energiedips, prediabetes of zwangerschapsdiabetes.',
      'Je hoeft dus niet per se een specifieke diagnose te hebben. Misschien wil je vooral begrijpen wat er in jouw lichaam gebeurt en ontdekken welke invloed voeding, beweging, slaap en stress hebben op je glucosewaarden. De meting helpt ons om daar veel gerichter naar te kijken.',
    ],
  },
  {
    question: 'Wat is het verschil tussen een glucosesensor en een nuchtere glucosemeting in je bloed?',
    answer: [
      'Bij een nuchtere bloedmeting wordt je glucose op één specifiek moment gemeten. Een glucosesensor meet daarentegen gedurende veertien dagen en laat zien hoe je glucose gedurende de dag reageert. Daardoor kunnen we veel beter kijken naar wat er rondom maaltijden, beweging, slaap en stress gebeurt.',
    ],
  },
  {
    question: 'Kan ik het traject ook online volgen?',
    answer: [
      'Ja zeker! Je kunt het traject volgen in mijn praktijk in Hoorn of volledig online via Zoom. Ook online begeleid ik je bij het plaatsen van de sensor.',
    ],
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
  const [openIncluded, setOpenIncluded] = useState<number | null>(0);

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
                  Je weet inmiddels echt wel wat gezond eten is en je snapt dat eiwitten belangrijk zijn. En toch kak je bijna iedere middag in, heb je regelmatig cravings en lijken je hormonen maar niet in balans te komen.
                </p>
                <p>
                  Je kunt de gezondste maaltijd eten, maar als je bloedsuikerspiegel daarna flink stijgt en weer daalt, heeft dat grote invloed op hoe je je voelt en op hoe snel je daarna weer trek krijgt.
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
                  <dd className="mt-1 text-foreground">{"\n"}</dd>
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
              <SectionLabel>Een schommelende bloedsuiker is NIET iets waar je je alleen druk over hoeft te maken als je diabetes hebt.</SectionLabel>
              <h2 className="text-3xl leading-tight text-foreground md:text-5xl">
                Een stabiele bloedsuiker spiegel is DE basis van hormonale balans
              </h2>
              <p className="mt-6 max-w-md leading-relaxed">
                Herken je jezelf hierin?
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
              <SectionLabel>JE KUNT 100 VERSCHILLENDE ADVIEZEN VINDEN OVER JE BLOEDSUIKER SPIEGEL.</SectionLabel>
              <h2 className="text-3xl leading-tight text-foreground md:text-5xl">
                Je wilt niet meer gokken en hopen dat het werkt.
              </h2>
              <p className="mt-6 leading-relaxed">
                Zwart-op-wit zien hoe jouw lichaam reageert?{"\u00a0"}
                <br /><br />
                Eet dit bij je ontbijt, laat koolhydraten staan, combineer havermout met eiwitten en ga 10 minuten wandelen. Maar zonder te weten hoe JOUW bloedsuikerspiegel daadwerkelijk reageert, blijft je dus gokken.
                <br /><br />
                Daarom werken we in dit traject met de 14- daagse glucosesensor. 24/7 zien we live hoe jij reageert op voeding, beweging, slaap, stress en je gewoontes.{"\u00a0"}
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
                    <p className="mt-3 text-sm leading-relaxed">We kijken niet alleen{"\u00a0"}WAT je eet, maar vooral hoe jouw lichaam daarop reageert.{"\n"}</p>
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
                    <h3 className="mt-3 text-2xl text-foreground">Waar komen mijn klachten vandaan?</h3>
                    <p className="mt-3 text-sm leading-relaxed">Een dip kan zorgen voor zoete trek, onrust of minder focus. Met de meting testen we gericht wat voor jou werkt en zie je direct hoe jouw lichaam reageert.</p>
                  </figcaption>
                </figure>
              </FadeIn>
            </div>

            <FadeIn className="mt-10 border-l-2 border-primary pl-6 md:ml-auto md:max-w-3xl">
              <p className="text-xl leading-relaxed text-foreground md:text-2xl">
                Het gaat niet om een perfecte grafiek, maar om leren begrijpen wat jouw lichaam je vertelt en wat het nodig heeft.{"\n"}
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
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/75">RESULTAAT NA VEERTIEN DAGEN</p>
              <h2 className="text-3xl leading-tight text-primary-foreground md:text-5xl">In 2 weken van cravings en energiedips naar meer energie, verzadiging en rust in je eetpatroon</h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/85">
                Je hebt niet alleen een hele hoop data verzameld, maar eindelijk gezien hoe jouw lichaam reageert op voeding, beweging, slaap, stress en je dagelijkse gewoontes. We hebben op basis daarvan getest welke aanpassingen bij jou verschil maken en daar een concreet plan van gemaakt. Nu weet je:
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
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full rounded-b-md bg-secondary/10 lg:max-w-none">
                <img
                  src={daniqueAbout}
                  alt="Danique Kwakman, orthomoleculair hormoon- en darmtherapeut in Hoorn"
                  title="Danique Kwakman, orthomoleculair hormoon- en darmtherapeut"
                  width="1280"
                  height="1920"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel>Hi, ik ben Danique</SectionLabel>
              <h2 className="text-3xl leading-tight text-foreground md:text-5xl">
                Van jarenlang zoeken naar begrijpen wat mijn lichaam nodig heeft
              </h2>
              <p className="mt-6 leading-relaxed">
                Na 10+ jaar hormonale klachten kreeg ik de diagnose PCOS. Ik had last van onregelmatige cyclussen, vermoeidheid, acne en moodswings. De reguliere zorg hielp me aan de diagnose, maar ik miste de praktische handvatten om mijn klachten in het dagelijks leven te ondersteunen.
              </p>
              <p className="mt-4 leading-relaxed">
                Die ervaring vormt nog steeds de basis van hoe ik werk. Als orthomoleculair hormoon- en darmtherapeut en ex-verpleegkundige combineer ik mijn ervaring uit de reguliere zorg met mijn kennis over voeding, leefstijl en het lichaam.
              </p>
              <p className="mt-4 leading-relaxed">
                Ik weet hoe frustrerend het is als je voelt dat er meer speelt, maar niet weet waar je moet beginnen. Daar help ik je graag bij.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/40 bg-card py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28">
                <SectionLabel>Alles wat je nodig hebt</SectionLabel>
                <h2 className="text-3xl leading-tight text-foreground md:text-5xl">Wat is inbegrepen?</h2>
                <figure className="mt-8 overflow-hidden rounded-md bg-background">
                  <img
                    src={sensorBoxAsset.url}
                    alt="Verpakking van de FreeStyle Libre 2 glucosesensor die tijdens het 1:1 bloedsuikertraject wordt gebruikt"
                    title="Glucosesensor voor de 14-daagse meting"
                    width="1080"
                    height="1440"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="border-t border-secondary/40 px-5 py-4 text-sm">
                    {"\n"}
                  </figcaption>
                </figure>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-t border-secondary/40">
                {included.map((item, index) => {
                  const isOpen = openIncluded === index;
                  return (
                    <div key={item.title} className="border-b border-secondary/40">
                      <m.button
                        type="button"
                        onClick={() => setOpenIncluded(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        aria-expanded={isOpen}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-lg text-foreground md:text-xl">{item.title}</h3>
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
                        <p className="pb-6 leading-relaxed">{item.description}</p>
                      </m.div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="text-center">
              <SectionLabel>Ervaringen</SectionLabel>
              <h2 className="text-3xl text-foreground md:text-5xl">En zij gingen je voor</h2>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-12">
              <Testimonials testimonials={BLOEDSUIKER_TESTIMONIALS} />
            </FadeIn>
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
                        <div className="space-y-4 pb-6">
                          {faq.answer.map((paragraph, pIdx) => (
                            <p key={pIdx} className="leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
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

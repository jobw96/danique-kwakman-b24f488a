import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { Testimonials } from '@/components/Testimonials';
import { useBookingModal } from '@/components/BookingModal';
import { Link } from '@/lib/router-compat';
import { HORMOON_TESTIMONIALS } from '@/data/testimonials';
import daniqueMatchCall from '@/assets/danique-match-call.webp';
import daniqueRelaxed from '@/assets/danique-relaxed.webp';
import daniqueAbout from '@/assets/danique-about.webp';
import daniqueWalkingBeach from '@/assets/danique-walking-beach.webp';
import daniqueGlowup from '@/assets/danique-glowup.webp';
import groenteschaal from '@/assets/sfeer/groenteschaal-bovenaf-9x16.webp';

/** De signalen uit de sectie "Je bent niet elke week dezelfde versie van jezelf". */
const signalen = [
  'Je hebt een paar dagen per maand waarop je je totaal anders voelt.',
  'Je hebt regelmatig PMS, cravings of stemmingswisselingen.',
  'Je menstruatie is pijnlijk, zwaar of onregelmatig.',
  'Je energie kan enorm verschillen gedurende je cyclus.',
  'Je buik is regelmatig opgeblazen of onrustig.',
  'Je hebt last van acne of andere hormonale huidklachten.',
  'Je wordt moe wakker terwijl je eigenlijk genoeg hebt geslapen.',
  'Je voelt je soms alsof je jezelf even kwijt bent.',
];

/** De vijf onderdelen die tijdens het traject naast elkaar worden gelegd. */
const aandachtsvelden = [
  {
    title: 'Hormonen & cyclus',
    description:
      'We brengen je cyclus en de klachten rondom je menstruatie in kaart. Wanneer ontstaan je klachten? Wat verandert er gedurende de maand? En welke patronen vallen op?',
  },
  {
    title: 'Darmen',
    description:
      'Een opgeblazen buik, buikpijn of een veranderde stoelgang nemen we mee in het grotere geheel. We kijken wat jouw darmen nodig hebben en welke rol voeding en leefstijl hierin spelen.',
  },
  {
    title: 'Bloedsuiker & energie',
    description:
      'Cravings, energiedips en schommelingen in energie kunnen je dagelijks behoorlijk beïnvloeden. We kijken naar je eetpatroon en gewoontes en wat daarin voor jou verschil kan maken.',
  },
  {
    title: 'Voeding & leefstijl',
    description:
      'Niet wat je volgens een standaard lijstje zou moeten doen, maar wat past bij jouw lichaam, jouw klachten en jouw leven.',
  },
  {
    title: 'Slaap & stress',
    description:
      'Ook herstel krijgt een plek. Want je lichaam heeft niet alleen goede voeding nodig, maar ook voldoende ruimte voor herstel.',
  },
];

/** Wat je na drie maanden weet. */
const resultaten = [
  'Welke patronen er in je cyclus en klachten zitten',
  'Welke voeding en leefstijlkeuzes bij jou passen',
  'Welke signalen je lichaam geeft en hoe je daarop kunt reageren',
  'Wat jou helpt rondom PMS, cravings, energiedips of darmklachten',
  'Welke gewoontes jou ondersteunen gedurende je cyclus',
  'Hoe je zelf verder kunt met het plan dat we samen hebben opgebouwd',
];

/** De onderdelen van "Wat is inbegrepen?". */
const included = [
  {
    title: 'Online kennismakingsgesprek',
    description:
      'We starten met een vrijblijvend online gesprek om jouw hulpvraag helder te krijgen. We bespreken waar je nu tegenaan loopt, wat je graag wilt veranderen en of het 1:1 hormoontraject bij je past.',
  },
  {
    title: 'Uitgebreide intake',
    description:
      'Tijdens de uitgebreide intake brengen we jouw situatie uitgebreid in kaart. We kijken onder andere naar je klachten, cyclus, voeding, darmen, bloedsuiker, slaap, stress, beweging en leefstijl. Zo krijgen we zicht op de belangrijkste puzzelstukjes binnen jouw situatie.',
  },
  {
    title: '2 persoonlijke vervolgconsulten van 60 minuten',
    description:
      'Na de intake hebben we nog twee persoonlijke vervolgconsulten. We bespreken wat je hebt ervaren, wat er verandert en waar je tegenaan loopt. Op basis daarvan sturen we je persoonlijke plan steeds bij.',
  },
  {
    title: '3 maanden persoonlijke begeleiding',
    description:
      'Drie maanden lang sta ik naast je. We nemen de tijd om veranderingen uit te proberen, te evalueren en bij te sturen. Zo hoef je niet alles in één keer te veranderen.',
  },
  {
    title: 'Persoonlijke WhatsApp-begeleiding',
    description:
      'Heb je tussen de afspraken door een vraag, loop je ergens tegenaan of wil je iets overleggen? Dan kun je me via WhatsApp bereiken. Zo hoef je niet te wachten tot onze volgende afspraak.',
  },
  {
    title: 'Persoonlijk plan',
    description:
      'Je krijgt geen standaard protocol. We maken een persoonlijk plan op basis van jouw hulpvraag, klachten, leefstijl en wat we gedurende het traject ontdekken. Dit plan beweegt met je mee wanneer je situatie verandert.',
  },
  {
    title: 'Jouw persoonlijke online health dashboard',
    description:
      'Alles wat je tijdens je traject nodig hebt, vind je overzichtelijk op één plek. Denk aan je persoonlijke informatie en plan, 100+ recepten, een maaltijdplanner, cyclus-trackers en praktische tools rondom voeding, slaap, stress, beweging en ontspanning.',
  },
  {
    title: 'Praktische tools en opdrachten',
    description:
      'Je krijgt praktische tools en opdrachten waarmee je de inzichten uit onze gesprekken kunt vertalen naar je dagelijks leven. Geen enorme lijst met dingen die je moet afvinken, maar stappen die passen bij waar jij op dat moment staat.',
  },
  {
    title: 'Nourish Your Body e-book',
    description:
      'Je ontvangt mijn Nourish Your Body e-book met 50+ hormoonproof recepten, cyclusgerichte voeding en praktische inspiratie voor maaltijden die passen binnen een hormoon- en darmvriendelijke leefstijl.',
  },
  {
    title: 'Aanvullend onderzoek indien passend',
    description:
      'Wanneer we tijdens het traject aanleiding zien voor aanvullend onderzoek, bespreken we samen welke informatie relevant kan zijn. Eventuele onderzoeken en supplementen zijn niet inbegrepen in de investering.',
  },
];

/** De vragen bij "Veelgestelde vragen". */
const faqs = [
  {
    question: 'Voor welke klachten kan ik het hormoontraject volgen?',
    answer: [
      'Het traject kan passend zijn wanneer je langere tijd klachten ervaart rondom je cyclus en hormonale gezondheid. Denk bijvoorbeeld aan PMS, een onregelmatige of pijnlijke menstruatie, vermoeidheid, acne, cravings, stemmingswisselingen, schommelingen in energie of een opgeblazen buik.',
      'Tijdens de gratis kennismaking bespreken we jouw persoonlijke situatie.',
    ],
  },
  {
    question: 'Is dit traject ook geschikt als mijn bloedwaarden normaal zijn?',
    answer: [
      'Ja. Je kunt je niet goed voelen terwijl standaard bloedonderzoek geen duidelijke afwijkingen laat zien. We kijken daarom niet alleen naar losse waarden, maar naar je klachten, patronen, leefstijl en het geheel.',
    ],
  },
  {
    question: 'Wordt er altijd bloedonderzoek gedaan?',
    answer: [
      'Nee. Aanvullend onderzoek is niet standaard onderdeel van het traject. Wanneer we tijdens het traject aanleiding zien om verder te onderzoeken, bespreken we samen wat passend is.',
    ],
  },
  {
    question: 'Moet ik mijn voeding volledig omgooien?',
    answer: [
      'Nee. Het doel is niet om je een streng voedingsschema te geven. We kijken naar je huidige eetpatroon en bepalen samen welke aanpassingen voor jou relevant en haalbaar zijn.',
    ],
  },
  {
    question: 'Krijg ik een supplementenadvies?',
    answer: [
      'Wanneer supplementen relevant zijn voor jouw situatie, kunnen we dit bespreken. Supplementen zijn niet standaard onderdeel van het traject.',
    ],
  },
  {
    question: 'Kan ik het traject online volgen?',
    answer: ['Ja. Het volledige traject kan online worden gevolgd.'],
  },
  {
    question: 'Hoeveel afspraken hebben we?',
    answer: [
      'Je hebt in totaal drie persoonlijke afspraken: een uitgebreide intake en twee vervolgconsulten van 60 minuten.',
      'Daarnaast word je gedurende drie maanden persoonlijk begeleid via WhatsApp.',
    ],
  },
  {
    question: 'Hoe lang duurt het traject?',
    answer: [
      'De begeleiding duurt drie maanden. In die periode hebben we drie persoonlijke afspraken en kun je tussen de afspraken door gebruikmaken van WhatsApp-begeleiding en je online health dashboard.',
    ],
  },
  {
    question: 'Wat als ik geen regelmatige cyclus heb?',
    answer: [
      'Ook dan kunnen we kijken naar de signalen die je lichaam geeft en naar de andere onderdelen van je gezondheid. Je cyclus hoeft dus niet regelmatig te zijn om met je hormonale gezondheid aan de slag te gaan.',
    ],
  },
  {
    question: 'Hoe weet ik of dit traject bij mij past?',
    answer: [
      'Tijdens de gratis kennismaking bespreken we jouw klachten, hulpvraag en wat je graag wilt veranderen. Het gesprek is volledig vrijblijvend. Zo kun je rustig ontdekken of mijn manier van werken en het traject bij je passen.',
    ],
  },
];

/**
 * Opschrift boven een kop: groene kleine kapitalen zonder achtergrond.
 *
 * Het groen uit de branding (#C9C07D) haalt op de cremekleurige achtergrond maar
 * 1,8:1 en is op deze grootte niet te lezen, dus staat het hier in --olive-deep.
 * Op de donkergroene band werkt dat niet, daar staat het in de lichte tint.
 */
const SectionLabel = ({ text, opDonker = false }: { text: string; opDonker?: boolean }) => (
  <p
    className={`mb-5 text-xs font-medium uppercase tracking-[0.16em] ${
      opDonker ? 'text-olive-soft' : 'text-olive-deep'
    }`}
  >
    {text}
  </p>
);

/**
 * Zelfde vinkje als op de bloedsuikertrajectpagina, nu in het groen. Op de
 * donkergroene band erft de regel de kleur van de sectie en krijgt het rondje
 * een lichte doorschijnende vulling.
 */
const CheckList = ({ items, opDonker = false }: { items: string[]; opDonker?: boolean }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-6 w-6 min-w-6 shrink-0 items-center justify-center rounded-full ${
            opDonker ? 'bg-olive/25 text-olive-soft' : 'bg-olive-soft text-olive-deep'
          }`}
          aria-hidden="true"
        >
          <Check className="h-3.5 w-3.5" />
        </span>
        <span className={`leading-relaxed ${opDonker ? '' : 'text-muted-foreground'}`}>{item}</span>
      </li>
    ))}
  </ul>
);

const Hormoontraject = () => {
  const { openModal } = useBookingModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openIncluded, setOpenIncluded] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <FadeIn immediate>
              <SectionLabel text="1:1 traject · 3 maanden" />
              <h1 className="max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                1:1 hormoontraject
              </h1>
              <p className="mt-6 max-w-xl text-lg text-olive-deep md:text-xl">
                De ene week voel je je energiek en zit je lekker in je vel. Een paar dagen later ben je prikkelbaar, moe, opgeblazen en heb je alleen nog maar zin in chocola.
              </p>
              <div className="mt-7 max-w-xl space-y-4 leading-relaxed">
                <p>
                  Je menstruatie is pijnlijk of onvoorspelbaar. Je hebt last van PMS, acne, cravings of een buik die regelmatig opspeelt. En ondertussen doe je eigenlijk al ontzettend veel goed.
                </p>
                <p>
                  Misschien heb je al bloed laten prikken. Misschien heb je zelf je voeding aangepast, supplementen geprobeerd of eindeloos gezocht naar informatie.
                </p>
                <p>
                  In het 1:1 hormoontraject nemen we drie maanden de tijd om jouw klachten en lichaam beter te leren begrijpen. We kijken naar je cyclus, hormonen, darmen, bloedsuiker, voeding, slaap, stress en leefstijl en brengen samen de puzzelstukjes in kaart.
                </p>
              </div>
              <CustomButton onClick={openModal} variant="green" className="mt-8">
                Plan een gratis kennismaking
              </CustomButton>
            </FadeIn>

            <FadeIn immediate delay={0.15}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <ParallaxImage
                  src={daniqueMatchCall}
                  alt="Danique Kwakman, orthomoleculair hormoon- en darmtherapeut, staat op een duin tijdens het 1:1 hormoontraject"
                  title="Danique Kwakman, orthomoleculair hormoon- en darmtherapeut"
                  className="h-full w-full"
                  eager
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/40 bg-card py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <SectionLabel text="Je bent niet elke week dezelfde versie van jezelf" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                En misschien heeft je cyclus daar meer mee te maken dan je denkt.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Herken je dit?
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <CheckList items={signalen} />
              <p className="mt-8 max-w-md leading-relaxed text-foreground">
                En het frustrerende is: je weet niet goed waar je moet beginnen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-3xl">
              <SectionLabel text="Hormonen staan niet op zichzelf" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                Daarom kijken we naar het hele plaatje
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Je cyclus, energie, buik, huid, cravings en slaap kunnen allemaal onderdeel zijn van hetzelfde verhaal.
                </p>
                <p>
                  Tijdens het traject kijken we daarom naar verschillende onderdelen van je gezondheid en vooral naar hoe ze bij jou met elkaar samenhangen.
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {aandachtsvelden.map((veld, index) => (
                <FadeIn
                  key={veld.title}
                  delay={index * 0.06}
                  className={`border border-secondary/40 bg-card p-8 ${
                    index === aandachtsvelden.length - 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-olive-deep">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-2xl text-foreground">{veld.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {veld.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* De CIRCLE-methode in een eigen sectie: foto links, tekst rechts over de
          volle hoogte. Onder lg passen twee kolommen niet, daar staat de foto
          boven de tekst met een vaste hoogte. */}
      <section className="lg:grid lg:grid-cols-2">
        <div className="h-[45vh] w-full overflow-hidden sm:h-[55vh] lg:h-auto">
          <img
            src={daniqueRelaxed}
            alt="Danique Kwakman leest een boek terwijl ze op een handdoek op het strand zit"
            title="Drie maanden de tijd nemen voor je lichaam"
            width={1920}
            height={1279}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-16 md:py-20 lg:px-12 xl:px-16">
          <FadeIn className="w-full">
            <SectionLabel text="Van inzicht naar een plan dat bij jou past" />
            <h2 className="text-3xl text-foreground md:text-4xl">
              Dat is waar mijn CIRCLE-methode voor staat.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed">
              <p>
                Tijdens het traject gebruiken we mijn eigen CIRCLE-methode als structuur.
              </p>
              <p>
                We beginnen bij de kern van jouw hulpvraag en brengen vervolgens stap voor stap in kaart wat er speelt, wat je lichaam nodig heeft en waar we verandering kunnen maken.
              </p>
              <p>
                Je krijgt niet na één gesprek een lijst met twintig dingen die je allemaal moet aanpassen.
              </p>
            </div>
            <p className="mt-8 leading-relaxed">We kijken steeds:</p>
            <blockquote className="mt-4 border-l-2 border-olive pl-6">
              <p className="font-serif text-2xl leading-tight text-foreground md:text-3xl">
                Wat is nu de volgende stap?
              </p>
            </blockquote>
            <div className="mt-6 space-y-4 leading-relaxed">
              <p>
                Je probeert die stap uit, we evalueren wat het doet en passen je plan aan waar nodig.
              </p>
              <p>
                Zo ontstaat er gedurende drie maanden steeds meer duidelijkheid over wat voor jou werkt.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-olive-dark py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={daniqueWalkingBeach}
                  alt="Danique Kwakman rent in een lange crèmekleurige jurk langs de waterkant op het strand"
                  title="Drie maanden de tijd om stap voor stap verder te komen"
                  width={682}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel text="Resultaat na drie maanden" opDonker />
              <h2 className="text-3xl text-primary-foreground md:text-4xl">
                Van steeds zoeken naar begrijpen wat jouw lichaam nodig heeft
              </h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/85">
                Het doel is niet dat je na drie maanden alles over hormonen weet.
              </p>
              <p className="mt-4 leading-relaxed text-primary-foreground/85">
                Het doel is dat je je lichaam beter begrijpt en weet wat jij kunt doen wanneer je klachten opspelen.
              </p>
              <p className="mt-8 leading-relaxed text-primary-foreground/85">Je weet:</p>
              <div className="mt-6 text-primary-foreground/90">
                <CheckList items={resultaten} opDonker />
              </div>
              <p className="mt-8 font-serif text-2xl text-primary-foreground md:text-3xl">
                Niet perfect. Wel passend bij jou.
              </p>
              <CustomButton onClick={openModal} variant="white" className="mt-9">
                Plan een gratis kennismaking
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
              <SectionLabel text="Hi, ik ben Danique" />
              <h2 className="text-3xl text-foreground md:text-4xl">
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
              <Link to="/over-mij" className="mt-8 inline-block">
                <CustomButton variant="green">Lees meer over mij</CustomButton>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-secondary/40 bg-card py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28">
                <SectionLabel text="Alles wat je nodig hebt" />
                <h2 className="text-3xl text-foreground md:text-4xl">Wat is inbegrepen?</h2>
                <figure className="mt-8 overflow-hidden rounded-2xl bg-background">
                  <img
                    src={groenteschaal}
                    alt="Vier kleine schalen met roastgroenten, verse kruiden en salie op een linnen tafelkleed"
                    title="Praktische tools en recepten tijdens het 1:1 hormoontraject"
                    width={905}
                    height={1600}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
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
                        <m.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-olive-deep">
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
              <SectionLabel text="Ervaringen" />
              <h2 className="text-3xl text-foreground md:text-4xl">En zij gingen je voor</h2>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-12">
              <Testimonials testimonials={HORMOON_TESTIMONIALS} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-olive-soft py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl text-foreground md:text-4xl">Veelgestelde vragen</h2>
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
                        <m.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-olive-deep">
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
          <FadeIn className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-secondary/50 bg-card">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <img
                src={daniqueGlowup}
                alt="Danique Kwakman kijkt met opgeheven armen uit over zee op het strand"
                title="Drie maanden persoonlijke begeleiding tijdens het 1:1 hormoontraject"
                width={548}
                height={828}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover object-[center_35%] lg:h-full"
              />
              <div className="p-8 md:p-12">
                <SectionLabel text="Investering" />
                <h2 className="text-3xl text-foreground md:text-4xl">
                  Klaar om beter te begrijpen wat er in je lichaam gebeurt?
                </h2>
                <p className="mt-6 leading-relaxed">
                  Je hoeft niet vooraf te weten wat er precies aan de hand is.
                </p>
                <p className="mt-4 leading-relaxed">
                  Tijdens een gratis kennismaking kijken we samen naar jouw situatie, je hulpvraag en of het 1:1 hormoontraject aansluit.
                </p>
                <p className="mt-8 font-serif text-5xl text-olive-deep md:text-6xl">€888</p>
                <p className="mt-2 text-sm">3 maanden persoonlijke begeleiding</p>
                <CustomButton onClick={openModal} variant="green" className="mt-8">
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

export default Hormoontraject;

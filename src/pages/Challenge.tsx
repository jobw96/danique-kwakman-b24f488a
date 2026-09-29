import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { Link } from '@/lib/router-compat';

import buikDuinenAsset from '@/assets/sfeer/challenge-buik-duinen.webp.asset.json';
import havermoutKomAsset from '@/assets/sfeer/havermout-zaden-kom.webp.asset.json';
import pannenkoekenAsset from '@/assets/sfeer/pannenkoeken-frambozen.webp.asset.json';
import daniqueBlouseAsset from '@/assets/sfeer/danique-gele-blouse.webp.asset.json';

/**
 * Aanmelding voor de challenge. Zodra bekend is waar mensen zich aanmelden
 * (bijvoorbeeld een ActiveCampaign-formulier of een WhatsApp-link), hier de
 * URL invullen. Tot die tijd scrollen de knoppen naar het aanmeldblok
 * onderaan de pagina.
 */
const AANMELD_URL: string | null = null;

const herkenning = [
  'Je buik voelt de ene week prima en de andere week opgeblazen en onrustig',
  'Je energie, stemming en eetlust kunnen gedurende je cyclus flink veranderen',
  'Je hebt regelmatig last van cravings, een middagdip of weinig energie',
  'Je hebt het gevoel dat je hormonen uit balans zijn, maar weet niet meer waar je moet beginnen',
  'Je hebt al van alles geprobeerd, maar je klachten blijven steeds terugkomen',
];


const watJeKrijgt = [
  {
    title: 'Kick-off',
    description: 'We starten met een kick-off op maandag 12 oktober.',
  },
  {
    title: '5 dagen begeleiding',
    description:
      'Vijf dagen lang praktische informatie en opdrachten waarmee je naar je eigen klachten kijkt.',
  },
  {
    title: 'Besloten WhatsApp-groep',
    description: 'Alle informatie, opdrachten en updates op één plek.',
  },
  {
    title: 'Praktische checklists',
    description:
      'Om jouw PMS, opgeblazen buik, cyclus en darmklachten goed in kaart te brengen.',
  },
  {
    title: 'Recepten',
    description: 'Praktische recepten waarmee je direct aan de slag kunt.',
  },
  {
    title: 'Concrete handvatten',
    description:
      'Geen lange lijst met dingen die je allemaal moet veranderen, maar praktische handvatten waar je direct mee aan de slag kunt.',
  },
];

const resultaat = [
  'Je begrijpt je PMS en cyclus beter',
  'Je herkent patronen in je buikklachten',
  'Je weet beter wat voeding en bloedsuiker met je energie en cravings kunnen doen en hoe je dit aanpakt',
  'Je hebt praktische handvatten om zelf toe te passen',
  'Je hebt inzicht met welke puzzelstukjes jij aan de slag mag',
];

const voorWie = [
  'Je iedere maand weer PMS-klachten ervaart',
  'Je regelmatig een opgeblazen buik hebt',
  'Je meer cravings of trek hebt rondom je menstruatie',
  'Je energie gedurende de dag wisselt',
  'Je al bewust bezig bent met voeding en leefstijl, maar toch klachten houdt',
  'Je al veel informatie over hormonen hebt verzameld',
  'Je ziet door de bomen het bos niet meer door alle info online',
  'Je geen streng dieet of lange lijst met verboden voedingsmiddelen wilt',
  'Je wilt begrijpen wat er bij jou speelt',
  'Je wilt weten waar je gericht kunt beginnen',
];

const faqs = [
  {
    question: 'Is de challenge echt gratis?',
    answer: ['Ja. Je kunt helemaal gratis deelnemen aan de challenge.'],
  },
  {
    question: 'Wanneer start de challenge?',
    answer: ['De challenge start op maandag 12 oktober.'],
  },
  {
    question: 'Hoe werkt de challenge?',
    answer: [
      'Je krijgt toegang tot de WhatsApp-groep en ontvangt gedurende vijf dagen praktische informatie, opdrachten, checklists en inspiratie.',
    ],
  },
  {
    question: 'Hoeveel tijd kost de challenge?',
    answer: ['Houd rekening met ongeveer 15 tot 20 minuten per dag.'],
  },
  {
    question: 'Moet ik mijn voeding volledig aanpassen?',
    answer: [
      'Nee. Het doel is juist niet om je een streng dieet of een lange lijst met regels te geven. Je krijgt praktische handvatten en kijkt naar wat voor jou interessant kan zijn.',
    ],
  },
  {
    question: 'Kan ik meedoen als ik geen regelmatige cyclus heb?',
    answer: [
      'Ja. We kijken niet alleen naar de timing van je cyclus, maar vooral naar de signalen en klachten die jij ervaart.',
    ],
  },
  {
    question:
      'Ik heb vooral last van mijn buik en minder van PMS. Is deze challenge iets voor mij?',
    answer: [
      'Ja. De opgeblazen buik en je darmgezondheid zijn een belangrijk onderdeel van de challenge. We kijken daarnaast naar voeding, bloedsuikerspiegel, cyclus en leefstijl.',
    ],
  },
  {
    question: 'Ik weet al veel over hormonen. Is deze challenge dan iets voor mij?',
    answer: [
      'Juist dan kan de challenge interessant zijn. Het gaat niet alleen om nóg meer informatie, maar vooral om kijken welke informatie relevant is voor jou.',
    ],
  },
  {
    question: 'Ik weet niet of deze challenge bij mij past. Kan ik gewoon meedoen?',
    answer: ['Ja. De challenge is gratis en vrijblijvend.'],
  },
];

/**
 * Opschrift boven een kop: blauwe kleine kapitalen zonder achtergrond, zoals
 * op de trajectpagina's. Op de blauwe band staat het in de cremekleur.
 */
const SectionLabel = ({ text, opDonker = false }: { text: string; opDonker?: boolean }) => (
  <p
    className={`mb-5 text-xs font-medium uppercase tracking-[0.16em] ${
      opDonker ? 'text-primary-foreground' : 'text-primary-deep'
    }`}
  >
    {text}
  </p>
);

/** Zelfde vinkje als op de trajectpagina's, met dezelfde kleurlogica op donker. */
const CheckList = ({ items, opDonker = false }: { items: string[]; opDonker?: boolean }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-6 w-6 min-w-6 shrink-0 items-center justify-center rounded-full ${
            opDonker ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-[#FDF8F3] text-primary'
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

const Challenge = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openKrijg, setOpenKrijg] = useState<number | null>(0);

  const naarAanmelding = () => {
    if (AANMELD_URL) {
      window.open(AANMELD_URL, '_blank', 'noopener,noreferrer');
      return;
    }
    document.getElementById('aanmelding')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      {/* Hero */}
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <FadeIn immediate>
              <SectionLabel text="Gratis 5-daagse challenge" />
              <h1 className="max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Gut & hormone reset
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-deep md:text-xl">
                We zijn inmiddels aangekomen bij de laatste maanden van het jaar en in hoeveel van de afgelopen 9 maanden heb je last gehad van PMS of een opgeblazen buik?
              </p>
              <div className="mt-7 max-w-xl space-y-4 leading-relaxed">
                <p>{"\n"}</p>
                <p>{"\n"}</p>
                <p>
                  Misschien heb je al van alles geprobeerd. ..{"\u00a0"}
                  {"\n\n"}
                  Gezonder eten, supplementen, minder suiker, meer bewegen en toch blijf je last houden van: Je buik die na het eten ineens helemaal opblaast, je hormonen, PMS, cravings of weinig energie en voel je je niet jezelf.{"\u00a0"}
                  {"\n\n"}
                  {"\u00a0"}In 5 dagen gaan we kijken naar de verschillende puzzelstukken die invloed kunnen hebben op jouw PMS en je opgeblazen buik. Van voeding en bloedsuiker tot je darmen, cyclus, stress en leefstijl.
                  {"\n\n"}
                </p>
                <p>{"\n"}</p>
                <p>{"\n"}</p>
                <p>{"\n"}</p>
              </div>
              <CustomButton onClick={naarAanmelding} className="mt-8">
                Ik doe mee met de gratis challenge
              </CustomButton>
              <p className="mt-4 text-sm text-muted-foreground">
                Start maandag 12 oktober • 5 dagen • online • helemaal gratis
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.15}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={buikDuinenAsset.url}
                  alt="Vrouw in wit topje en witte broek staat in de duinen met de zon op haar buik"
                  title="Gratis 5-daagse challenge voor PMS en een opgeblazen buik"
                  width="1175"
                  height="653"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Herkenning */}
      <section className="border-y border-secondary/40 bg-card py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <SectionLabel text="HERKEN JE JEZELF HIERIN?" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                De ene week voel je je top. De andere week vraag je je af wat er ineens met je lichaam aan de hand is.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                {"\n"}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <CheckList items={herkenning} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Het probleem */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mx-auto max-w-3xl">
            <SectionLabel text="Het probleem" />
            <h2 className="text-3xl text-foreground md:text-4xl">
              Je weet misschien al heel veel. Maar weet je ook wat voor jouw lichaam werkt?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed">
              <p>
                Je kunt tegenwoordig ontzettend veel informatie vinden over hormonen, PMS en een
                opgeblazen buik.
              </p>
              <p>
                Eet minder suiker, neem magnesium, eet meer vezels, laat zuivel staan, drink geen
                koffie op nuchtere maag.
              </p>
              <p>
                En voor je het weet heb je een hele lijst met dingen die je allemaal zou moeten
                doen.
              </p>
              <p>Misschien zijn je bloedwaarden volgens de huisarts gewoon normaal.</p>
              <p>Misschien eet je eigenlijk al heel gezond.</p>
              <p>Misschien weet je zelfs behoorlijk veel over hormonen.</p>
              <p>Toch blijven je klachten terugkomen.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <figure className="mx-auto max-w-3xl text-center">
              <span
                aria-hidden="true"
                className="block font-serif text-6xl leading-none text-primary-deep md:text-7xl"
              >
                &ldquo;
              </span>
              <blockquote className="mt-1 font-serif text-2xl leading-snug text-foreground md:text-3xl lg:text-4xl">
                In 5 dagen gaan we kijken naar de verschillende puzzelstukken die invloed kunnen
                hebben op jouw PMS en je opgeblazen buik.{"\u00a0"}
                <br />
                <br />
                Van voeding en bloedsuiker tot je darmen, cyclus, stress en leefstijl.
              </blockquote>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Wat gaan we doen? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-secondary/10 lg:max-w-none">
                <img
                  src={havermoutKomAsset.url}
                  alt="Hand houdt een kom havermout vast met lijnzaad, hennepzaad, chiazaad en havermoutvlokken"
                  title="Voeding als puzzelstukje tijdens de gratis challenge"
                  width="1200"
                  height="1600"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel text="In 5 dagen" />
              <h2 className="text-3xl text-foreground md:text-4xl">Wat gaan we doen?</h2>
              <div className="mt-6 space-y-4 leading-relaxed">
                <p>
                  In 5 dagen gaan we kijken naar de verschillende puzzelstukjes die invloed kunnen
                  hebben op jouw PMS en je opgeblazen buik. Van voeding en bloedsuiker tot je
                  darmen, cyclus, stress en leefstijl.
                </p>
                <p>
                  Geen streng dieet en geen lijst met twintig dingen die je vanaf morgen moet
                  veranderen. Wel praktische inzichten en opdrachten waarmee je ontdekt wat er bij
                  jou mogelijk meespeelt.
                </p>
                <p>
                  We starten op maandag 12 oktober met een kick-off en daarna ontvang je iedere dag
                  een korte uitleg en opdracht in de WhatsApp-groep.
                </p>
                <p>Je krijgt praktische opdrachten, checklists en recepten waarmee je direct aan de slag kunt.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wat krijg je? */}
      <section className="border-y border-secondary/40 bg-card py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28">
                <SectionLabel text="Alles wat je krijgt" />
                <h2 className="text-3xl text-foreground md:text-4xl">
                  Dit krijg je tijdens de gratis challenge
                </h2>
                <figure className="mt-8 overflow-hidden rounded-2xl bg-background">
                  <img
                    src={pannenkoekenAsset.url}
                    alt="Bord pannenkoeken met frambozen, bosbessen en rode bessen"
                    title="Recepten tijdens de gratis 5-daagse challenge"
                    width="1200"
                    height="1600"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </figure>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-t border-secondary/40">
                {watJeKrijgt.map((item, index) => {
                  const isOpen = openKrijg === index;
                  return (
                    <div key={item.title} className="border-b border-secondary/40">
                      <m.button
                        type="button"
                        onClick={() => setOpenKrijg(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        aria-expanded={isOpen}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-lg text-foreground md:text-xl">{item.title}</h3>
                        <m.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="shrink-0 text-primary-dark"
                        >
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

      {/* Resultaat */}
      <section className="bg-primary-dark py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <SectionLabel text="Na 5 dagen" opDonker />
              <h2 className="max-w-3xl text-3xl text-primary-foreground md:text-4xl">
                Na 5 dagen weet je beter waar je moet kijken
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-primary-foreground/85">
                In 5 dagen ontdek je welke puzzelstukjes samenhangen met jouw PMS en opgeblazen
                buik, zodat je weet waar je kunt beginnen en niet 2027 in gaat met dezelfde
                klachten.
              </p>
              <p className="mt-6 max-w-2xl font-serif text-xl leading-tight text-primary-foreground md:text-2xl">
                Je weet beter waar je kunt beginnen.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-8 max-w-2xl text-primary-foreground/90">
                <CheckList items={resultaat} opDonker />
              </div>
              <CustomButton onClick={naarAanmelding} variant="white" className="mt-9">
                Ik doe mee met de gratis challenge
              </CustomButton>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Voor wie? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-3xl">
              <SectionLabel text="Voor wie?" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                Deze challenge is voor jou als...
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2">
                <CheckList items={voorWie.slice(0, 5)} />
                <CheckList items={voorWie.slice(5)} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Over Danique */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full rounded-b-md bg-secondary/10 lg:max-w-none">
                <img
                  src={daniqueBlouseAsset.url}
                  alt="Danique Kwakman lacht in een gele blouse met de blauwe lucht op de achtergrond"
                  title="Danique Kwakman, orthomoleculair hormoon- en darmtherapeut"
                  width="954"
                  height="964"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel text="Hi, ik ben Danique" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                Van jarenlang zoeken naar begrijpen wat mijn lichaam nodig heeft
              </h2>
              <p className="mt-6 leading-relaxed">
                Orthomoleculair hormoon- & darmtherapeut en voormalig verpleegkundige
              </p>
              <div className="mt-6 space-y-4 leading-relaxed">
                <p>
                  Na jarenlang zelf rondgelopen te hebben met hormonale klachten kreeg ik
                  uiteindelijk de diagnose PCOS.
                </p>
                <p>
                  Ik had onder andere last van onregelmatige cyclussen, vermoeidheid, acne en
                  moodswings.
                </p>
                <p>
                  De reguliere zorg hielp mij om een diagnose te krijgen, maar ik miste praktische
                  handvatten voor het dagelijks leven.
                </p>
                <p>
                  Inmiddels combineer ik mijn achtergrond als verpleegkundige met mijn kennis als
                  orthomoleculair therapeut.
                </p>
                <p>
                  Ik kijk naar het geheel en naar de verschillende puzzelstukjes die samen kunnen
                  hangen met jouw klachten.
                </p>
                <p>
                  Met deze challenge wil ik je op een laagdrempelige manier laten ervaren hoe het
                  is om niet alleen naar één klacht te kijken, maar te ontdekken wat er bij jou
                  mogelijk meespeelt.
                </p>
              </div>
              <Link to="/over-mij" className="mt-8 inline-block">
                <CustomButton>Lees meer over mij</CustomButton>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/20 py-16 md:py-24">
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
                        <m.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="shrink-0 text-primary-dark"
                        >
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

      {/* Afsluitende CTA + aanmeldblok */}
      <section id="aanmelding" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-secondary/50 bg-card">
            <div className="p-8 text-center md:p-12">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-primary-deep">
                Gratis 5-daagse challenge
              </p>
              <h2 className="mx-auto max-w-3xl text-3xl text-foreground md:text-4xl">
                Klaar om niet iedere maand opnieuw te denken: daar gaan we weer?
              </h2>
              <div className="mx-auto mt-6 max-w-2xl space-y-4 leading-relaxed">
                <p>
                  Vijf dagen lang gaan we kijken naar de puzzelstukjes achter jouw PMS en
                  opgeblazen buik.
                </p>
                <p>
                  Zodat je niet alweer een jaar verder bent met dezelfde klachten, maar beter
                  begrijpt waar je kunt beginnen.
                </p>
              </div>
              <CustomButton onClick={naarAanmelding} className="mt-8">
                Ik doe mee met de gratis challenge
              </CustomButton>
              <p className="mt-4 text-sm text-muted-foreground">
                Start maandag 12 oktober • 5 dagen • WhatsApp • gratis
              </p>

              {/* AANMELDFORMULIER: zodra het ActiveCampaign-form-ID bekend is,
                  hier de embed laden (zelfde patroon als src/pages/Ebook.tsx).
                  Tot die tijd staat er een plekhouder. */}
              <div
                aria-hidden={AANMELD_URL ? true : undefined}
                className="mt-10 rounded-2xl border border-dashed border-primary/50 p-8"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary-deep">
                  Aanmeldformulier
                </p>
                <p className="mt-2 text-sm">
                  Hier komt de plek waar je je aanmeldt voor de challenge. De challenge start op
                  maandag 12 oktober.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Challenge;

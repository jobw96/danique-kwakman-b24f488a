import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { Link } from '@/lib/router-compat';

import buikDuinenAsset from '@/assets/sfeer/challenge-buik-duinen.webp.asset.json';
import havermoutKomAsset from '@/assets/sfeer/havermout-zaden-kom.webp.asset.json';
import daniqueBlouseAsset from '@/assets/sfeer/danique-gele-blouse.webp.asset.json';

/** Aanmelding voor de challenge loopt via de Plug&Pay-checkout. */
const AANMELD_URL = 'https://daniquekwakman.plugandpay.com/checkout/challenge';

const herkenning = [
  'Je buik voelt de ene week prima en de andere week opgeblazen en onrustig',
  'Je energie, stemming en eetlust kunnen gedurende je cyclus flink veranderen',
  'Je hebt regelmatig last van cravings, een middagdip of weinig energie',
  'Je hebt het gevoel dat je hormonen uit balans zijn, maar weet niet meer waar je moet beginnen',
  'Je hebt al van alles geprobeerd, maar je klachten blijven steeds terugkomen',
];



const resultaat = [
  'Begrijp je beter wat er tijdens je cyclus gebeurt en waarom PMS-klachten in de dagen voor je menstruatie kunnen toenemen',
  'Herken je beter welke momenten, voedingsmiddelen en gewoontes samen kunnen hangen met jouw opgeblazen buik',
  'Weet je hoe je met je maaltijden en bloedsuiker kunt omgaan om cravings en energiedips te verminderen',
  'Heb je concrete aanpassingen die je direct kunt toepassen rondom voeding, darmen en je cyclus',
  'Weet je welke puzzelstukjes bij jou aandacht verdienen',
];

const voorWie = [
  'Je iedere maand weer PMS-klachten ervaart en regelmatig een opgeblazen buik hebt',
  'Je meer cravings, eneregiedips of schommelingen in je hormonen',
  'Je misschien al veel informatie over hormonen hebt verzameld, maar door de bomen het bos niet meer ziet',
  'Je geen streng dieet of lange lijst met verboden voedingsmiddelen wilt',
  'Je wilt begrijpen wat er bij jou speelt en waar je kunt beginnen',
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

  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      {/* Hero */}
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <FadeIn immediate>
              <SectionLabel text="Gratis 5-daagse challenge" />
              <h1 className="max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Gut & hormone reset harmony
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-deep md:text-xl">
                We zijn inmiddels aangekomen bij de laatste maanden van het jaar en in hoeveel van de afgelopen 9 maanden heb je last gehad van PMS of een opgeblazen buik?
              </p>
              <div className="mt-7 max-w-xl space-y-4 leading-relaxed">
                <p>{"\n"}</p>
                <p>{"\n"}</p>
                <p>
                  Misschien heb je al van alles geprobeerd. ..{"\u00a0\u00a0"}
                  {"\n\n"}
                  {"\u00a0"}
                  <span className="block">- Gezonder eten</span>
                  <span className="block">- Supplementen gebruikt</span>
                  <span className="block">- Minder suiker gegeten{"\u00a0"}</span>
                  <span className="block">- Meer bewogen</span>
                  <span className="block">- Meer eiwitten en vezels toegevoegd</span>
                  {"\u00a0"}
                  <br />
                  En toch blijf je last houden van: Je buik die na het eten ineens helemaal opblaast, je hormonen, PMS, cravings of weinig energie en voel je je niet jezelf.{"\u00a0\u00a0"}
                  {"\n\n"}
                </p>
                <p>{"\n"}</p>
                <p>{"\n"}</p>
                <p>{"\n"}</p>
              </div>
              <a
                href={AANMELD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block"
              >
                <CustomButton>Ik doe mee met de gratis challenge</CustomButton>
              </a>
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
              Je weet misschien al best veel over hormonen, PMS en een opgeblazen buik. Maar weet je ook wat jouw lichaam nodig heeft?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed">
              <p className="whitespace-pre-line">
                {"Online vind je eindeloos veel adviezen: eet minder suiker, neem magnesium, eet meer vezels, laat zuivel staan en drink geen koffie op een lege maag.\u00a0\u00a0\n\nJe hebt inmiddels een hele lijst met dingen die je allemaal zou moeten aanpassen en 100 recepten opgeslagen die zouden moeten helpen om je klachten te verminderen.\u00a0\u00a0\n\nMisschien zijn je bloedwaarden volgens de huisarts normaal, eet je eigenlijk al heel gezond en heb je al van alles geprobeerd om je klachten te verminderen. Toch komen die PMS-klachten, cravings of opgeblazen buik iedere maand weer terug.\u00a0\u00a0\n\nWeten wat 'gezond' is, betekent niet dat dit ook is waar jouw lichaam om vraagt."}
              </p>
              <p>{"\n"}</p>
              <p>{"\n"}</p>
              <p>{"\n"}</p>
              <p>{"\n"}</p>
              <p>{"\n"}</p>
              <p>{"\n"}</p>
            </div>
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
                  Je krijgt van mij geen streng dieet en geen lijst met twintig dingen die je vanaf morgen moet
                  veranderen. Wel praktische inzichten en opdrachten waarmee je ontdekt wat er bij
                  jou mogelijk meespeelt.
                </p>
                <p>
                  We starten op maandag 12 oktober met een online kick-off en daarna ontvang je iedere dag
                  een korte uitleg en opdracht in de WhatsApp-groep.
                </p>
                <p>Je krijgt praktische opdrachten, checklists en recepten waarmee je direct aan de slag kunt.</p>
              </div>
              <a
                href={AANMELD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block"
              >
                <CustomButton>I&apos;m in!</CustomButton>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* Resultaat */}
      <section className="bg-primary-dark py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <SectionLabel text="" opDonker />
              <h2 className="max-w-3xl text-3xl text-primary-foreground md:text-4xl">
                Na de gut & hormone harmony reset:
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-primary-foreground/85">
                In 5 dagen ontdek je welke puzzelstukjes samenhangen met jouw PMS en opgeblazen
                buik, zodat je weet waar je kunt beginnen en niet 2027 in gaat met dezelfde
                klachten.
              </p>
              <div className="mt-6 max-w-2xl space-y-3 leading-relaxed text-primary-foreground/85">
                <p>
                  ✓ 5 dagen praktische begeleiding van mij als orthomoleculair hormoon- en
                  darmtherapeut{"\u00a0"}
                </p>
                <p>
                  ✓ Iedere dag krijg je een simpele, maar doeltreffende checklist of opdracht rondom
                  PMS, je darmen en je bloedsuiker, zodat je ontdekt wat er achter jouw klachten
                  speelt én direct praktische stappen kunt zetten voor meer verlichting.{"\u00a0"}
                </p>
                <p>
                  ✓ Recepten waar jouw lichaam heel erg blij van gaat worden en die ik normaal
                  alleen met mijn klanten deel.
                </p>
              </div>
              <p className="mt-6 max-w-2xl font-serif text-xl leading-tight text-primary-foreground md:text-2xl">
                Na 5 dagen:
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-8 max-w-2xl text-primary-foreground/90">
                <CheckList items={resultaat} opDonker />
              </div>
              <a
                href={AANMELD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-block"
              >
                <CustomButton variant="white">
                  Meld je voor de gut & hormone harmony{"\n"}{"\u00a0"}reset challenge
                </CustomButton>
              </a>
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
              <div className="mt-10 max-w-3xl">
                <CheckList items={voorWie} />
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
                Van 10+ jaar hormonale klachten naar een klachtenvrij lijf
              </h2>
              <p className="mt-6 leading-relaxed whitespace-pre-line">
                {`Jarenlang ging ik van huisarts naar huisarts om na de zoveelste 'leer er mee leven' de diagnose PCOS te krijgen.
De reguliere zorg hielp me aan de diagnose, maar ik miste handvatten om mijn lichaam en klachten in het dagelijks leven te ondersteunen. Daar begon mijn zoektocht naar het waarom.

Die zoektocht vormt nu de basis van hoe ik jou begeleid.

Als orthomoleculair hormoon- en darmtherapeut en ex-verpleegkundige kijk ik verder dan alleen je klachten. Ik combineer mijn achtergrond in de reguliere zorg met wetenschappelijke kennis, voeding, leefstijl en laboratoriumonderzoek.  We brengen niet alleen je klachten in kaart, maar kijken ook naar de samenhang tussen je hormonen, darmen, voeding, bloedsuiker, slaap en stress. Zo krijgen we inzicht in wat er achter jouw klachten speelt en werken we gericht aan een plan dat bij jou past.


`}
              </p>
              <div className="mt-6 space-y-4 leading-relaxed">
                <p>{"\n"}</p>
                <p>{"\n"}</p>
                <p>{"\n"}</p>
                <p>{"\n"}</p>
                <p>{"\n"}</p>
                <p>{"\n"}</p>
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

      {/* Afsluitende CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-secondary/50 bg-card">
            <div className="p-8 text-center md:p-12">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-primary-deep">
                Gratis 5-daagse challenge
              </p>
              <h2 className="mx-auto max-w-3xl text-3xl text-foreground md:text-4xl">
                Gut & hormone harmony reset challenge
              </h2>
              <div className="mx-auto mt-6 max-w-2xl space-y-4 leading-relaxed">
                <p>
                  In 5 dagen gaan we kijken naar de verschillende puzzelstukken die invloed kunnen hebben op jouw PMS en je opgeblazen buik. Van voeding en bloedsuiker tot je darmen, cyclus, stress en leefstijl.
                </p>
                <p>
                  Zodat je niet alweer een jaar verder bent met dezelfde klachten, maar beter
                  begrijpt waar je kunt beginnen.
                </p>
              </div>
              <a
                href={AANMELD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block"
              >
                <CustomButton>Meld je aan voor de challenge</CustomButton>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Start maandag 12 oktober • 5 dagen 
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Challenge;

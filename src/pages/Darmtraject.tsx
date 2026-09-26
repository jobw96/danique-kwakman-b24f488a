import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { Testimonials } from '@/components/Testimonials';
import { useBookingModal } from '@/components/BookingModal';
import { Link } from '@/lib/router-compat';
import { GENERAL_TESTIMONIALS } from '@/data/testimonials';
import daniqueDarm from '@/assets/danique-darm.webp';
import daniqueAbout from '@/assets/danique-about.webp';
import daniqueWalking from '@/assets/danique-walking.webp';
import daniqueTowel from '@/assets/danique-towel.webp';
import ontlastingAsset from '@/assets/sfeer/ontlastingsonderzoek-buisje.webp.asset.json';
import bloedbuisjesAsset from '@/assets/sfeer/bloedbuisjes-labonderzoek.webp.asset.json';

const DARM_TESTIMONIALS = [
  {
    id: 'd1',
    name: 'Cliënt',
    rating: 5,
    image: '',
    text: 'Het eten gaat mij steeds makkelijker af en heb echt mijn routine gevonden. Je recepten zijn ook erg fijn!',
  },
  {
    id: 'd2',
    name: 'Cliënt',
    rating: 5,
    image: '',
    text: 'De afgelopen dagen kan ik elke dag naar de wc zonder die movicolon zakjes. En het gaat makkelijker 🙃',
  },
  ...GENERAL_TESTIMONIALS,
];

/** Herkenningspunten. */
const signalen = [
  'Je buik is in de ochtend nog plat, maar aan het eind van de dag zie je eruit alsof je 6 maanden zwanger bent',
  'Je stoelgang wisselt: de ene week zit je vast, de andere week moet je juist snel naar de wc',
  'Je hebt buikpijn, krampen of veel last van winderigheid',
  'Je voel je onzeker over wat je wel en niet kunt eten',
  'Je hebt al van alles geprobeerd, maar je klachten blijven terugkomen',
];

/** Uitklapmenu: wat het labonderzoek je laat zien. */
const onderzoekOnderwerpen = [
  {
    title: 'Ontlastingsonderzoek',
    description:
      'Met een uitgebreid ontlastingsonderzoek kijken we hoe je darmen er op dit moment voor staan. We onderzoeken onder andere je\u00a0darmflora en microbioom, de vertering en opname van voedingsstoffen en de conditie van je darmslijmvlies.\u00a0\n\nWe kijken bijvoorbeeld naar\u00a0pancreas-elastase, calprotectine, secretorisch IgA en alfa-1-antitrypsine. Daarnaast onderzoeken we of er\u00a0ongewenste bacteriën, gisten, schimmels of parasieten\u00a0aanwezig zijn. \n',
  },
  {
    title: 'Voedselintolerantietest',
    description:
      'Met een bloedonderzoek kijken we naar\u00a0IgG- en IgG4-reacties op 31 voedingsmiddelen..\u00a0\nDe uitslag geeft inzicht in welke voedingsmiddelen een reactie laten zien. We bekijken deze resultaten altijd samen met jouw klachten, voedingspatroon en het darmonderzoek.\n',
  },
  {
    title: 'Van uitslag naar plan',
    description:
      'Een uitslag alleen zegt nog niet zoveel. Ik leg de uitkomsten naast jouw klachten, voeding, leefstijl en gezondheidsgeschiedenis. Samen bespreken we wat de uitslag voor jou betekent en welke stappen we gaan zetten.',
  },
];

/** De vier fases. */
const fases = [
  {
    title: 'Voorbereiden',
    duration: '4-8 weken',
    description:
      'We ondersteunen je lever, nieren en lymfesysteem. Zo is je lichaam klaar voor de volgende fase.',
  },
  {
    title: 'Opruimen',
    duration: '8 weken',
    description:
      'We pakken de ongewenste bacteriën, schimmels, parasieten of virussen aan die uit je onderzoek naar voren komen.',
  },
  {
    title: 'Versterken',
    duration: '12 weken',
    description:
      'We werken aan het herstel van je darmslijmvlies en bouwen een sterke darmflora op.',
  },
  {
    title: 'Stabiliseren',
    duration: '12-24 weken',
    description:
      'We zorgen dat je darmflora stevig blijft staan. Je weet wat je nodig hebt om ook na het traject zelf verder te kunnen.',
  },
];

/** Resultaten na het traject. */
const resultaten = [
  'Weet je wat er in jouw darmen speelt en waar je klachten vandaan komen',
  'Weet je welke voeding jouw darmen ondersteunt en waar je beter even op kunt letten',
  'Eet je weer met plezier, zonder bij elke maaltijd te twijfelen',
  'Heb je concrete aanpassingen gedaan in je voeding, slaap, stress en beweging die passen bij jouw dagelijks leven',
  'Heb je een persoonlijk plan waarmee je ook na het traject precies weet wat jouw lijf nodig heeft',
];

/** Wat is inbegrepen. */
const included = [
  {
    title: 'Online kennismakingsgesprek',
    description:
      'We starten met een vrijblijvend online gesprek om jouw hulpvraag helder te krijgen. We bespreken waar je nu tegenaan loopt, wat je graag wilt veranderen en of het 1:1 darmtraject bij je past.',
  },
  {
    title: 'Uitgebreide intake',
    description:
      'Tijdens de intake brengen we jouw situatie uitgebreid in kaart. We kijken onder andere naar je darmklachten, stoelgang, voeding, energie, slaap, stress, je cyclus en je gezondheidsgeschiedenis. Zo krijgen we zicht op de belangrijke puzzelstukjes binnen jouw situatie.',
  },
  {
    title: 'Ontlastingsonderzoek en voedselintolerantietest',
    description:
      'Met gericht laboratoriumonderzoek zien we wat er in jouw darmen speelt en waar je lichaam op reageert. De labkosten zijn niet inbegrepen in de trajectprijs.',
  },
  {
    title: '5 persoonlijke 1:1 sessies van 60 minuten',
    description:
      'We bespreken je uitslagen, wat je hebt ervaren, wat er verandert en waar je tegenaan loopt. Op basis daarvan sturen we je plan steeds bij.',
  },
  {
    title: '6 maanden persoonlijke begeleiding',
    description:
      '6 maanden lang sta ik naast je. Mijn begeleiding stopt niet zodra onze 1:1 sessie voorbij is. Ook tussen de sessies door kun je bij mij terecht met vragen, ervaringen en dingen waar je tegenaan loopt. We kijken samen wat er speelt, sturen bij waar nodig en bepalen steeds wat voor jou de volgende stap is.',
  },
  {
    title: 'WhatsApp-begeleiding',
    description:
      'Heb je tussen de sessies door een vraag, loop je ergens tegenaan of wil je even overleggen? Dan kun je me via WhatsApp bereiken. Zo hoef je niet te wachten tot onze volgende sessie.',
  },
  {
    title: 'Een behandelplan dat met je meebeweegt',
    description:
      'We kijken naar het geheel: van je darmgezondheid en hormonen tot voeding, slaap, stress, leefstijl, mindset en je cyclus. Tijdens het traject evalueren we wat er verandert, wat wel en niet werkt en wat er in jouw dagelijks leven speelt. Op basis daarvan pas ik je persoonlijke behandelplan steeds aan.',
  },
  {
    title: 'Jouw persoonlijke online health dashboard',
    description:
      'Een online omgeving die je helpt je lichaam beter te begrijpen en praktische stappen te zetten die passen bij jou. Alles wat je tijdens je traject nodig hebt, vind je overzichtelijk op één plek: van 100+ recepten en een maaltijdplanner tot cyclus-trackers, inzichten over je hormonen en darmen en praktische tools voor slaap, stress en ontspanning.',
  },
  {
    title: 'Praktische tools en opdrachten',
    description:
      'Om niet alleen te begrijpen wat er speelt, maar ook stap voor stap te ervaren wat voor jou werkt. Geen enorme lijst met dingen die je moet afvinken, maar stappen die passen bij waar jij op dat moment staat.',
  },
  {
    title: 'Nourish Your Body e-book',
    description:
      'Je ontvangt mijn Nourish Your Body e-book met 50+ hormoonproof en darmvriendelijke recepten en praktische inspiratie voor maaltijden die je hormonen en darmen ondersteunen.\nT.w.v. €39,99',
  },
];

/** Veelgestelde vragen. */
const faqs = [
  {
    question: 'Voor welke klachten kan ik het darmtraject volgen?',
    answer: [
      'Het traject kan passend zijn wanneer je langere tijd last hebt van je buik of spijsvertering. Denk aan een opgeblazen gevoel, buikpijn, winderigheid, obstipatie, diarree of een wisselende stoelgang. Ook vermoeidheid of huidklachten kunnen samenhangen met je darmgezondheid.',
      'Tijdens de gratis kennismaking bespreken we jouw persoonlijke situatie.',
    ],
  },
  {
    question: 'Is het labonderzoek verplicht?',
    answer: [
      'Ja. Het ontlastingsonderzoek en de voedselintolerantietest vormen de basis van dit traject. Op basis van de uitslagen stemmen we de vier fases af op jouw lichaam. De labkosten bedragen €600 en worden rechtstreeks door het lab aan jou gefactureerd.',
    ],
  },
  {
    question: 'Moet ik mijn voeding volledig omgooien?',
    answer: [
      'Nee, je krijgt geen streng voedingsschema mee. We kijken naar je huidige eetpatroon en bepalen samen welke aanpassingen voor jou relevant en haalbaar zijn. We gaan niet onnodig dingen schrappen, juist omdat we weten waar jouw lichaam op reageert.',
    ],
  },
  {
    question: 'Krijg ik een supplementenadvies?',
    answer: [
      'Er is geen standaard supplementen advies dat voor iedereen werkt dus ik kijk individueel wat jouw lijf nodig heeft. Dit is altijd ter aanvulling en vervangt niet je voeding. Ik verkoop geen supplementen en ben dus ook niet gebonden aan bepaalde merken. Supplementen zijn niet inbegrepen in de trajectprijs.',
    ],
  },
  {
    question: 'Hoe lang duurt het traject?',
    answer: [
      'Het darmtraject duurt ongeveer 6 maanden. Afhankelijk van jouw situatie kan dit iets langer of korter zijn.',
    ],
  },
  {
    question: 'Kan ik het traject online volgen?',
    answer: ['Ja. Het volledige traject kan online worden gevolgd. De intake kan ook in Hoorn.'],
  },
  {
    question: 'Hoe weet ik of dit traject bij mij past?',
    answer: [
      'Tijdens de gratis kennismaking bespreken we jouw klachten, hulpvraag en wat je graag wilt veranderen. Het gesprek is volledig vrijblijvend. Zo kun je rustig ontdekken of mijn manier van werken en het traject bij je passen.',
    ],
  },
];

const SectionLabel = ({ text, opDonker = false }: { text: string; opDonker?: boolean }) => (
  <p
    className={`mb-5 text-xs font-medium uppercase tracking-[0.16em] ${
      opDonker ? 'text-primary-foreground' : 'text-primary-deep'
    }`}
  >
    {text}
  </p>
);

const CheckList = ({ items, opDonker = false }: { items: string[]; opDonker?: boolean }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-6 w-6 min-w-6 shrink-0 items-center justify-center rounded-full ${
            opDonker ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-background text-primary'
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

type AccordionItem = { title: string; body: React.ReactNode };

const Accordion = ({
  items,
  open,
  setOpen,
  border = 'border-secondary/40',
}: {
  items: AccordionItem[];
  open: number | null;
  setOpen: (i: number | null) => void;
  border?: string;
}) => (
  <div className={`border-t ${border}`}>
    {items.map((item, index) => {
      const isOpen = open === index;
      return (
        <div key={item.title} className={`border-b ${border}`}>
          <m.button
            type="button"
            onClick={() => setOpen(isOpen ? null : index)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
            aria-expanded={isOpen}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg text-foreground md:text-xl">{item.title}</h3>
            <m.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-foreground">
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </m.span>
          </m.button>
          <m.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pb-6 leading-relaxed">{item.body}</div>
          </m.div>
        </div>
      );
    })}
  </div>
);

const toText = (text: string) => <p className="whitespace-pre-line">{text}</p>;

const Darmtraject = () => {
  const { openModal } = useBookingModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openIncluded, setOpenIncluded] = useState<number | null>(0);
  const [openOnderzoek, setOpenOnderzoek] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <FadeIn immediate>
              <SectionLabel text="1:1 traject · 6 maanden" />
              <h1 className="max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                1:1 darmtraject
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-deep md:text-xl">
                Je wilt gewoon kunnen eten zonder na te denken over hoe je buik reageert. Uit eten gaan, een broek dragen die ook na de lunch nog lekker zit en niet steeds rekening houden met waar de wc is.
              </p>
              <div className="mt-7 max-w-xl space-y-4 leading-relaxed">
                <p className="whitespace-pre-line">
                  {'Jouw avondritueel? Met buikpijn op de bank omdat je darmen weer van streek zijn. Let\'s change that!\n\nJe hebt je voeding aangepast, bepaalde producten weggelaten, supplementen geprobeerd en misschien zelfs verschillende diëten gevolgd. Toch blijf je last houden van een opgeblazen buik, buikpijn, een wisselende stoelgang, vermoeidheid of huidklachten die steeds terugkomen.\u00a0\n\nMet mijn 1:1 darmtraject kijken we niet alleen naar jouw klachten, maar gaan we op zoek naar de oorzaak.\n'}
                </p>
              </div>
              <CustomButton onClick={openModal} className="mt-8">
                Plan een gratis kennismaking
              </CustomButton>
            </FadeIn>

            <FadeIn immediate delay={0.15}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <ParallaxImage
                  src={daniqueDarm}
                  alt="Danique Kwakman, orthomoleculair hormoon- en darmtherapeut in Hoorn, tijdens het 1:1 darmtraject"
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
              <SectionLabel text="JE WEET HOE FRUSTEREND HET IS ALS JE LIJF NIET MEEWERKT." />
              <h2 className="text-3xl text-foreground md:text-4xl">
                Je wilt weten wat er in je darmen gebeurt en waar je klachten vandaan komen.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed">Herken je dit?</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <CheckList items={signalen} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="lg:grid lg:grid-cols-2">
        <div className="h-[45vh] w-full overflow-hidden sm:h-[55vh] lg:h-auto">
          <img
            src={ontlastingAsset.url}
            alt="Hand houdt een buisje voor ontlastingsonderzoek vast tegen een lichte muur"
            title="Ontlastingsonderzoek tijdens het 1:1 darmtraject"
            width={1000}
            height={1333}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-16 md:py-20 lg:px-12 xl:px-16">
          <FadeIn className="w-full">
            <SectionLabel text="METEN = WETEN" />
            <h2 className="text-3xl text-foreground md:text-4xl">
              Onderzoek laat zien wat je darmen je proberen te vertellen.
            </h2>
            <div className="mt-8">
              <Accordion
                items={onderzoekOnderwerpen.map((o) => ({ title: o.title, body: toText(o.description) }))}
                open={openOnderzoek}
                setOpen={setOpenOnderzoek}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-3xl">
              <SectionLabel text="Stap voor stap herstellen" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                We werken in vier fases, afgestemd op jouw uitslag.
              </h2>
              <p className="mt-6 leading-relaxed">
                Je darmen herstel je niet in een week. Daarom nemen we de tijd. Elke fase bouwt voort op de vorige en krijgt een eigen plan met voeding, leefstijladvies en praktische opdrachten.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {fases.map((fase, index) => (
                <FadeIn key={fase.title} delay={index * 0.06} className="border border-secondary/40 bg-card p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary-deep">
                    {String(index + 1).padStart(2, '0')} · {fase.duration}
                  </p>
                  <h3 className="mt-3 text-2xl text-foreground">{fase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed">{fase.description}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={daniqueWalking}
                  alt="Danique Kwakman wandelt ontspannen buiten"
                  title="Weer met plezier eten na het 1:1 darmtraject"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel text="Resultaat na het traject" opDonker />
              <h2 className="text-3xl text-primary-foreground md:text-4xl">
                Weer rust in je buik en vertrouwen in je lijf
              </h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/85">
                Stel je voor dat je 's ochtends wakker wordt en niet meteen voelt hoe je buik erbij ligt. Dat je een etentje met vriendinnen niet meer afzegt. Daar werken we samen naartoe.
              </p>
              <p className="mt-8 leading-relaxed text-primary-foreground/85">Na het traject:</p>
              <div className="mt-6 text-primary-foreground/90">
                <CheckList items={resultaten} opDonker />
              </div>
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
                Ik weet hoe het is als je lichaam niet doet wat je wilt
              </h2>
              <p className="mt-6 leading-relaxed">
                Na 10+ jaar hormonale klachten kreeg ik de diagnose PCOS. Onderweg ontdekte ik hoe sterk mijn darmen, hormonen en energie met elkaar samenhangen. Pas toen ik daar echt naar ging kijken, kwam er beweging in mijn klachten.
              </p>
              <p className="mt-4 leading-relaxed">
                Als orthomoleculair hormoon- en darmtherapeut en ex-verpleegkundige combineer ik mijn ervaring uit de reguliere zorg met mijn kennis over voeding, leefstijl en het lichaam.
              </p>
              <p className="mt-4 leading-relaxed">
                Ik weet hoe frustrerend het is als je voelt dat er meer speelt, maar niet weet waar je moet beginnen. Daar help ik je graag bij.
              </p>
              <Link to="/over-mij" className="mt-8 inline-block">
                <CustomButton>Lees meer over mij</CustomButton>
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
                    src={bloedbuisjesAsset.url}
                    alt="Hand houdt drie buisjes met gele doppen voor laboratoriumonderzoek vast tegen een lichte muur"
                    title="Laboratoriumonderzoek tijdens het 1:1 darmtraject"
                    width={1000}
                    height={1333}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </figure>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Accordion
                items={included.map((i) => ({ title: i.title, body: toText(i.description) }))}
                open={openIncluded}
                setOpen={setOpenIncluded}
              />
              <div className="mt-8 border border-secondary/40 bg-background p-6">
                <h3 className="text-lg text-foreground">Exclusief</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  <li>Labkosten van €600 voor het ontlastingsonderzoek en de voedselintolerantietest, rechtstreeks gefactureerd door het lab</li>
                  <li>Eventuele aanvullende onderzoeken of her-testen</li>
                  <li>Supplementen</li>
                </ul>
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
              <Testimonials testimonials={DARM_TESTIMONIALS} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <FadeIn className="text-center">
              <h2 className="text-3xl text-foreground md:text-4xl">Veelgestelde vragen</h2>
            </FadeIn>
            <div className="mt-10">
              <Accordion
                items={faqs.map((f) => ({
                  title: f.question,
                  body: f.answer.map((p, i) => <p key={i}>{p}</p>),
                }))}
                open={openFaq}
                setOpen={setOpenFaq}
                border="border-secondary/60"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-secondary/50 bg-card">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <img
                src={daniqueTowel}
                alt="Danique Kwakman ontspannen op het strand met een handdoek"
                title="Zes maanden persoonlijke begeleiding tijdens het 1:1 darmtraject"
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover object-[center_35%] lg:h-full"
              />
              <div className="p-8 md:p-12">
                <SectionLabel text="Investering" />
                <h2 className="text-3xl text-foreground md:text-4xl">
                  Klaar om weer zonder zorgen te eten?
                </h2>
                <p className="mt-6 leading-relaxed">Plan je gratis kennismakingsgesprek in.</p>
                <p className="mt-8 font-serif text-5xl text-foreground md:text-6xl">
                  €299
                  <span className="font-sans text-xl font-light text-muted-foreground md:text-2xl">/maand</span>
                </p>
                <p className="mt-2 text-sm">Exclusief labkosten: €600, rechtstreeks gefactureerd door het lab.</p>
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

export default Darmtraject;

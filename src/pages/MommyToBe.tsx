import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { Testimonials } from '@/components/Testimonials';
import { useBookingModal } from '@/components/BookingModal';
import { Link } from '@/lib/router-compat';
import { GENERAL_TESTIMONIALS } from '@/data/testimonials';
import daniqueBeach from '@/assets/danique-beach.webp';
import daniqueAbout from '@/assets/danique-about.webp';
import daniqueWalkingBeach from '@/assets/danique-walking-beach.webp';
import daniqueTowel from '@/assets/danique-towel.webp';
import buikDuinenAsset from '@/assets/sfeer/buik-duinen-darmtraject.webp.asset.json';
import kookboekAsset from '@/assets/sfeer/kookboek-strandlaken.webp.asset.json';

const buikDuinenUrl = buikDuinenAsset.url;
const kookboekUrl = kookboekAsset.url;

/** De signalen uit de herkenningssectie. */
const signalen = [
  'Je graag zwanger wilt worden en het niet vanzelf lukt zoals je had gehoopt',
  'Je een onregelmatige cyclus hebt, hormonale klachten of vragen over je vruchtbaarheid',
  'Je al zwanger bent en je lichaam zo goed mogelijk wilt ondersteunen',
  'Je net bevallen bent en zoekt naar een goede basis voor je herstel',
  'Je wilt begrijpen wat je lichaam nodig heeft, in iedere fase',
];

/** De drie fases die het uitklapmenu bij "In iedere fase kijken we naar wat jouw lichaam nodig heeft" toont. */
const fases = [
  {
    title: 'Kinderwens en vruchtbaarheid',
    description:
      'Je wilt zwanger worden en het lukt niet zoals je had gehoopt, of je wilt je hier bewust op voorbereiden. We kijken naar je cyclus, hormonen, voeding en leefstijl en brengen in kaart wat jouw lichaam hierin nodig heeft.',
  },
  {
    title: 'Zwangerschap',
    description:
      'Je bent zwanger en wilt je lichaam zo goed mogelijk ondersteunen. We kijken naar wat je eet, hoe je slaapt en herstelt en waar je in deze fase extra behoefte aan hebt.',
  },
  {
    title: 'Postpartum herstel',
    description:
      'Je bent bevallen en wilt werken aan je herstel. We kijken naar wat je lichaam nodig heeft om op krachten te komen na de zwangerschap en het moederschap.',
  },
];

/** De vier puzzelstukjes die tijdens het traject naast elkaar worden gelegd. */
const aandachtsvelden = [
  {
    title: 'Hormonen & cyclus',
    description:
      'We kijken naar je cyclus en je hormonale klachten en naar wat er in iedere fase van je cyclus verandert. Zo krijgen we zicht op de patronen die jouw hormoonhuishouding beïnvloeden.',
  },
  {
    title: 'Darmen',
    description:
      'Je wilt niet alleen voldoende vetten, eiwitten, vitaminen en mineralen binnenkrijgen, maar ze ook goed kunnen verteren en opnemen. Daarom kijken we ook naar je spijsvertering en darmgezondheid.',
  },
  {
    title: 'Voeding',
    description:
      'Je voeding levert de bouwstoffen die je lichaam nodig heeft. We kijken naar wat je eet, of je voldoende binnenkrijgt en waar we jouw voeding kunnen aanpassen aan de fase waarin je zit.',
  },
  {
    title: 'Leefstijl & herstel',
    description:
      'Slaap, stress, beweging en herstel nemen we mee. Deze factoren spelen een rol in hoe je je voelt en wat je lichaam nodig heeft van kinderwens tot postpartum.',
  },
];

/** Wat je na vijf maanden hebt. */
const resultaten = [
  'Weet je welke factoren bij jou meespelen in je cyclus, hormonen en vruchtbaarheid',
  'Weet je welke voeding en leefstijl jouw lichaam ondersteunt in de fase waarin je zit',
  'Heb je een persoonlijk plan waarmee je ook na het traject precies weet wat je lichaam nodig heeft',
  'Voel je je beter in je lichaam, voor jezelf en je kindje',
];

/** De onderdelen van "Wat is inbegrepen?". */
const included = [
  {
    title: 'Online kennismakingsgesprek',
    description:
      'We starten met een vrijblijvend online gesprek om jouw hulpvraag helder te krijgen. We bespreken waar je nu tegenaan loopt, wat je graag wilt veranderen en of het 1:1 Mommy (to be) traject bij je past.',
  },
  {
    title: 'Uitgebreide intake',
    description:
      'Tijdens de uitgebreide intake brengen we jouw situatie uitgebreid in kaart. We kijken onder andere naar je klachten, cyclus, voeding, darmen, slaap, stress, beweging en leefstijl. Zo krijgen we zicht op de belangrijke puzzelstukjes binnen jouw situatie.',
  },
  {
    title: 'Vervolgconsulten',
    description:
      'Na de intake hebben we nog vier persoonlijke vervolgconsulten. In totaal heb je vijf afspraken. We bespreken wat je hebt ervaren, wat er verandert en waar je tegenaan loopt. Op basis daarvan sturen we je persoonlijke plan steeds bij.',
  },
  {
    title: '5 maanden persoonlijke begeleiding',
    description:
      'Vijf maanden lang sta ik naast je. Mijn begeleiding stopt niet zodra onze 1:1 sessie voorbij is. Ook tussen de sessies door kun je bij mij terecht met vragen, ervaringen en dingen waar je tegenaan loopt. We kijken samen wat er speelt, sturen bij waar nodig en bepalen steeds wat voor jou de volgende stap is.',
  },
  {
    title: 'WhatsApp-begeleiding',
    description:
      'Heb je tussen de afspraken door een vraag, loop je ergens tegenaan of wil je iets overleggen? Dan kun je me via WhatsApp bereiken. Zo hoef je niet te wachten tot onze volgende afspraak.',
  },
  {
    title: 'Persoonlijk plan',
    description:
      'We kijken naar het geheel: van je hormonen en darmgezondheid tot voeding, slaap, stress, leefstijl en je cyclus. Tijdens het traject evalueren we wat er verandert, wat wel en niet werkt en wat er in jouw dagelijks leven speelt. Op basis daarvan pas ik je persoonlijke plan steeds aan, zodat het blijft aansluiten bij jouw situatie en voortgang.',
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
    question: 'Voor welke situaties is het Mommy (to be) traject bedoeld?',
    answer: [
      'Een kinderwens die niet vanzelf in vervulling gaat, een onregelmatige cyclus, hormonale klachten of vragen over je vruchtbaarheid.\n\nOf misschien ben je al zwanger en wil je je lichaam zo goed mogelijk ondersteunen. Of ben je bevallen en zoek je naar een goede basis voor je herstel.\n\nTijdens de gratis kennismaking bespreken we jouw persoonlijke situatie.',
    ],
  },
  {
    question: 'Hoe lang duurt het traject en hoeveel afspraken heb ik?',
    answer: [
      'Het traject loopt 5 maanden en bestaat uit 5 afspraken: een uitgebreide intake en vier vervolgconsulten. Tussen de afspraken door heb je begeleiding via WhatsApp, zodat je niet met een vraag hoeft te wachten.',
    ],
  },
  {
    question: 'Wat kost het traject?',
    answer: [
      'De investering is nu €149 per maand in plaats van €199 per maand, gedurende 5 maanden. Aanvullend onderzoek en supplementen zijn niet inbegrepen.',
    ],
  },
  {
    question: 'Is het traject ook geschikt als ik al zwanger ben?',
    answer: [
      'Ja. Ook tijdens een zwangerschap kijken we naar wat jouw lichaam nodig heeft. We stemmen je voeding en leefstijl af op de fase waarin je zit en op wat je op dat moment merkt.',
    ],
  },
  {
    question: 'Moet ik mijn voeding volledig omgooien?',
    answer: [
      'Nee, je krijgt geen streng voedingsschema mee. We kijken naar je huidige eetpatroon en bepalen samen welke aanpassingen voor jou relevant en haalbaar zijn.',
    ],
  },
  {
    question: 'Kan ik het traject online volgen?',
    answer: ['Ja. Het volledige traject kan online worden gevolgd.'],
  },
  {
    question: 'Worden de consulten vergoed?',
    answer: [
      'Ja, als je aanvullend verzekerd bent, wordt orthomoleculaire therapie vaak (gedeeltelijk) vergoed vanuit de alternatieve geneeswijzen.',
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
 * Opschrift boven een kop: kleine kapitalen met wat meer letterafstand.
 *
 * Het blauw van de site is de accentkleur van deze pagina, net als op de
 * hormoontrajectpagina. Het lichtste blauw haalt op de cremekleur maar
 * 2,4:1, dus is voor de kleine labeltjes het diepe blauw gekozen (4,79:1).
 * Op de donkerblauwe band staat het label in het wit.
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

/**
 * Zelfde vinkje als op de hormoontrajectpagina: een licht rondje met een
 * blauwe vink erin. Op de donkerblauwe band is dat blauw zelf de achtergrond,
 * dus krijgt het rondje daar een lichte doorschijnende vulling met een witte vink.
 */
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

const MommyToBe = () => {
  const { openModal } = useBookingModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openIncluded, setOpenIncluded] = useState<number | null>(0);
  const [openFase, setOpenFase] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <FadeIn immediate>
              <SectionLabel text="1:1 traject · 5 maanden" />
              <h1 className="max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                1:1 Mommy (to be) traject
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-deep md:text-xl">
                Een kinderwens die niet vanzelf in vervulling gaat, een onregelmatige cyclus, hormonale klachten of vragen over je vruchtbaarheid.
              </p>
              <div className="mt-7 max-w-xl space-y-4 leading-relaxed">
                <p>
                  Of misschien ben je al zwanger en wil je je lichaam zo goed mogelijk ondersteunen. Of ben je bevallen en zoek je naar een goede basis voor je herstel.
                  <br /><br />
                  Je wilt je lichaam begrijpen, weten wat het nodig heeft en je zo goed mogelijk voelen in iedere fase, voor jezelf en je kindje.
                  <br /><br />
                  Ik help je stap voor stap de juiste puzzelstukjes samenbrengen. Met aandacht voor je hormonen, darmen, voeding en leefstijl, van kinderwens tot zwangerschap en postpartum.
                  <br /><br />
                </p>
              </div>
              <CustomButton onClick={openModal} className="mt-8">
                Plan een gratis kennismaking
              </CustomButton>
            </FadeIn>

            <FadeIn immediate delay={0.15}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <ParallaxImage
                  src={daniqueBeach}
                  alt="Danique Kwakman glimlacht in een lichtblauwen kanten top in de duinen tijdens het 1:1 Mommy (to be) traject"
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
              <SectionLabel text="Van kinderwens tot herstel" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                Je wilt je lichaam zo goed mogelijk ondersteunen, van kinderwens en zwangerschap tot herstel na de bevalling.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Herken je dit?
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <CheckList items={signalen} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Kinderwens, zwangerschap en postpartum in een uitklapmenu: foto links,
          de fases rechts. Onder lg passen twee kolommen niet, daar staat de
          foto boven de lijst met een vaste hoogte. */}
      <section className="lg:grid lg:grid-cols-2">
        <div className="h-[45vh] w-full overflow-hidden sm:h-[55vh] lg:h-auto">
          <img
            src={buikDuinenUrl}
            alt="Vrouw in een wit topje en witte broek staat met blote buik in de duinen, met de zon op haar lichaam"
            title="In iedere fase kijken we naar wat jouw lichaam nodig heeft"
            width={1175}
            height={653}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-16 md:py-20 lg:px-12 xl:px-16">
          <FadeIn className="w-full">
            <SectionLabel text="Van kinderwens tot postpartum" />
            <h2 className="text-3xl text-foreground md:text-4xl">
              Of je nu graag zwanger wilt worden, al een tijdje probeert, zwanger bent of wilt werken aan je postpartum herstel?
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              In iedere fase kijken we naar wat jouw lichaam nodig heeft.
            </p>
            <div className="mt-8 border-t border-secondary/40">
              {fases.map((fase, index) => {
                const isOpen = openFase === index;
                return (
                  <div key={fase.title} className="border-b border-secondary/40">
                    <m.button
                      type="button"
                      onClick={() => setOpenFase(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg text-foreground md:text-xl">{fase.title}</h3>
                      <m.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="shrink-0 text-foreground"
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
                      <p className="pb-6 leading-relaxed">{fase.description}</p>
                    </m.div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-3xl">
              <SectionLabel text="De puzzelstukjes" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                Ik help je stap voor stap de juiste puzzelstukjes samenbrengen.
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Met aandacht voor je hormonen, darmen, voeding en leefstijl, van kinderwens tot zwangerschap en postpartum. Tijdens het traject kijken we daarom niet alleen naar één onderdeel, maar naar het hele plaatje en vooral naar wat er bij jou meespeelt.
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {aandachtsvelden.map((veld, index) => (
                <FadeIn
                  key={veld.title}
                  delay={index * 0.06}
                  className="border border-secondary/40 bg-card p-8"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary-deep">
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

      <section className="bg-primary-dark py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={daniqueTowel}
                  alt="Geel-wit gestreepte doek golft over het zand in de zon op het strand"
                  title="Vijf maanden de tijd om stap voor stap verder te komen"
                  width={1900}
                  height={1261}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel text="RESULTAAT NA 5 MAANDEN" opDonker />
              <h2 className="text-3xl text-primary-foreground md:text-4xl">
                In 5 maanden naar een lichaam dat je zo goed mogelijk ondersteunt
              </h2>
              <p className="mt-6 leading-relaxed text-primary-foreground/85">
                Met het 1:1 Mommy (to be) traject nemen we 5 maanden de tijd om te kijken wat jouw lichaam nodig heeft, van kinderwens tot zwangerschap en postpartum. We brengen in kaart welke factoren bij jou meespelen en stemmen je voeding en leefstijl af op de fase waarin je zit.
              </p>
              <p className="mt-8 leading-relaxed text-primary-foreground/85">Na 5 maanden:</p>
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
                    src={kookboekUrl}
                    alt="Opengeslagen kookboek met een foto van geroosterde groenten, liggend op een geel-wit gestreepte handdoek in de zon"
                    title="Recepten en praktische tools tijdens het 1:1 Mommy (to be) traject"
                    width={886}
                    height={1570}
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
              <Testimonials testimonials={GENERAL_TESTIMONIALS} />
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
                src={daniqueWalkingBeach}
                alt="Danique Kwakman rent in een lange crèmekleurige jurk langs de waterkant op het strand"
                title="Vijf maanden persoonlijke begeleiding tijdens het 1:1 Mommy (to be) traject"
                width={682}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover object-[center_35%] lg:h-full"
              />
              <div className="p-8 md:p-12">
                <SectionLabel text="Investering" />
                <h2 className="text-3xl text-foreground md:text-4xl">
                  Klaar om je lichaam te ondersteunen in deze fase?
                </h2>
                <p className="mt-6 leading-relaxed">
                  Plan je gratis kennismakingsgesprek in.
                </p>
                <p className="mt-8 font-serif text-5xl text-foreground md:text-6xl">
                  €149
                  <span className="font-sans text-xl font-light text-muted-foreground md:text-2xl">
                    /maand
                  </span>
                </p>
                <p className="mt-2 text-sm">
                  Nu met korting: <span className="line-through">normaal €199/maand</span>
                </p>
                <p className="mt-1 text-sm">5 maanden · 5 afspraken</p>
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

export default MommyToBe;

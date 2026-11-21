import React, { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { m } from 'framer-motion';
import { CustomButton } from '@/components/CustomButton';
import { TrajectPrice } from '@/components/TrajectPrice';
import { trajectPrices, type TrajectPrice as PriceDetails } from '@/data/traject-prices';
import { Section } from '@/components/Section';
import { ArrowRight, Calendar } from 'lucide-react';
import { Testimonial, FaqItem, Stat } from '@/types';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Testimonials } from '@/components/Testimonials';
import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import heroImage from '@/assets/hero-foto.webp';
import heroImageMobile from '@/assets/hero-foto-mobile.webp';
import daniqueAbout from '@/assets/danique-about.webp';
import daniqueDarm from '@/assets/danique-darm.webp';
import daniqueBeach from '@/assets/danique-beach.webp';
import daniqueRelaxed from '@/assets/danique-relaxed.webp';
import hetProces from '@/assets/het-proces.webp';
import daniqueMatchCall from '@/assets/danique-match-call.webp';
import { GENERAL_TESTIMONIALS as TESTIMONIALS } from '@/data/testimonials';
import nourishCover from '@/assets/nourish-your-body-cover-2.webp.asset.json';
import nourishCoverJpeg from '@/assets/nourish-your-body-cover.jpeg.asset.json';
import { BLOG_POSTS } from '@/pages/Blog';

const EBOOK_PRICE = '€39,99';

type Treatment = {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: PriceDetails;
  comingSoon?: boolean;
};

const TREATMENTS: Treatment[] = [{
  id: 'bloedsuikertraject',
  title: "1:1 Bloedsuikertraject",
  description: "Met het 1:1 bloedsuikertraject krijg je in 2 weken inzicht in hoe jouw lichaam reageert op voeding, stress, beweging en slaap. Je ontdekt wat zorgt voor pieken en dalen in je bloedsuikerspiegel en leert met praktische veranderingen bouwen aan meer energie, minder cravings en een stabiele basis voor je hormonen.",
  image: daniqueRelaxed,
  price: trajectPrices.bloedsuikertraject
}, {
  id: 'hormoontraject',
  title: "1:1 Hormoontraject",
  description: "Met het 1:1 hormoontraject duiken we 3 maanden in jouw hormonale klachten. Waarom heb je zoveel last van mood swings, acne, PCOS-klachten of een luteale fase waarin je je compleet anders voelt? We brengen in kaart welke factoren jouw hormonale disbalans beïnvloeden en pakken deze gericht aan, zodat je cyclus stabieler wordt en je hormonale klachten niet langer je dagelijks leven bepalen.",
  image: hetProces,
  price: trajectPrices.hormoontraject
}, {
  id: 'mommy-to-be',
  title: "1:1 Mommy (to be) traject",
  description: "Met het 1:1 Mommy (to be) traject help ik je stap voor stap de juiste puzzelstukjes samenbrengen. Met aandacht voor je hormonen, darmen, voeding en leefstijl, van kinderwens tot zwangerschap en postpartum.",
  image: daniqueBeach,
  price: trajectPrices['mommy-to-be']
}, {
  id: 'darmtraject',
  title: "1:1 Darmtraject",
  description: "Met het 1:1 darmtraject begeleid ik je 6 maanden door het proces van darmherstel, inclusief labonderzoek. Zodat je eindelijk weet waarom je last hebt van een opgeblazen buik, buikpijn of een onrustige stoelgang en we je klachten stap voor stap kunnen gaan verminderen.",
  image: daniqueDarm,
  price: trajectPrices.darmtraject
}];

const STATS: Stat[] = [{
  value: '8',
  label: 'Jaren ervaring',
  description: 'In klinische psycho-neuro-immunologie.'
}, {
  value: '1.2k+',
  label: 'Cliënten geholpen',
  description: 'Succesvolle trajecten afgerond.'
}, {
  value: '30',
  label: 'Certificaten',
  description: 'Continue bijscholing in orthomoleculaire wetenschap.'
}, {
  value: '100%',
  label: 'Maatwerk',
  description: 'Geen standaard protocollen, maar maatwerk.'
}];



const FAQ: FaqItem[] = [{
  question: 'Worden consulten vergoed?',
  answer: 'Ja, als je aanvullend verzekerd bent, wordt orthomoleculaire therapie vaak (gedeeltelijk) vergoed vanuit de alternatieve geneeswijzen.'
}, {
  question: 'Heb ik een verwijzing nodig?',
  answer: 'Nee, je kunt zonder verwijzing van de huisarts een afspraak maken. Ik werk wel graag samen met reguliere zorgverleners.'
}, {
  question: 'Hoe lang duurt een traject?',
  answer: 'Gemiddeld zie ik cliënten 3 tot 5 keer over een periode van 4 tot 6 maanden, afhankelijk van de complexiteit van de klachten.'
}, {
  question: 'Kan ik ook online afspreken?',
  answer: 'Zeker. Videoconsulten zijn mogelijk en net zo effectief als afspraken op de praktijk.'
}];

const SectionTag = ({
  text,
  className = ''
}: {
  text: string;
  className?: string;
}) => <div className={`inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium tracking-wide ${className}`}>{text}</div>;

const COMPLAINT_BLOCKS: { title: string; complaints: string[] }[] = [{
  title: 'Hormonen en cyclus',
  complaints: ['Veel last van PMS', 'Pijnlijke of hevige menstruaties', 'Een onregelmatige cyclus', 'PCOS/ PMOS', 'Schildklierproblemen', 'Zwanger worden of je voorbereiden op een zwangerschap', 'Klachten rondom de overgang of menopauze']
}, {
  title: 'Darmen en spijsvertering',
  complaints: ['Een opgeblazen buik (na het eten)', 'Veel last van winderigheid', 'Vaak verstopt zitten of juist diarree', 'Prikkelbare darm (PDS)', 'Maagzuur of andere verteringsklachten', 'Voedselintoleranties of het vermoeden daarvan']
}, {
  title: 'Energie en bloedsuiker',
  complaints: ['Moe wakker worden, ook na genoeg slaap', 'Energiedips gedurende de dag', 'Cravings of veel trek in zoet', 'Brain fog en moeite met focussen', 'Moeite met inslapen of doorslapen', 'Schommelingen in je bloedsuikerspiegel']
}, {
  title: 'Huid en haar',
  complaints: ['Acne die steeds terugkomt', 'Een droge of gevoelige huid', 'Eczeem of rode, geïrriteerde plekken', 'Haaruitval']
}];

const CIRCLE_STEPS: { title: string; paragraphs: string[] }[] = [{
  title: 'De kern',
  paragraphs: ['Van blijven zoeken naar eindelijk begrijpen wat er met je lichaam speelt.']
}, {
  title: 'Groei',
  paragraphs: ['Je ontdekt wat jouw lichaam nodig heeft en leert de signalen herkennen voordat je klachten je weer in de weg zitten.']
}, {
  title: 'Het proces',
  paragraphs: ['De puzzelstukjes vallen op hun plek en je begrijpt wat voeding, hormonen, darmen, stress en leefstijl betekenen voor jouw klachten en wat er nodig is om deze op te lossen.']
}, {
  title: 'Nieuw proces',
  paragraphs: ['Je weet wat voor jou werkt en hoeft niet meer achter iedere nieuwe tip, dieet of supplement aan.']
}, {
  title: 'Stap voor stap',
  paragraphs: ['Gezonde keuzes worden vanzelfsprekend, zonder dat je bij iedere maaltijd hoeft te twijfelen of je het wel goed doet.']
}, {
  title: 'Verandering',
  paragraphs: ['Je kunt weer uit eten, sporten, afspreken en leven zonder steeds rekening te houden met je buik, energie of cyclus en je weet ook na het traject wat je nodig hebt als je lichaam weer signalen geeft.']
}];

const CIRCLE_ANGLES = [-90, -30, 30, 90, 150, 210];
/** Straal van de ring, de knoppen en de labels, als percentage van de breedte. */
const CIRCLE_RING = 25;
const CIRCLE_LABEL_RADIUS = 31;
/**
 * De box is lager dan breed, dus percentages van de hoogte moeten worden
 * omgerekend om de ring een echte cirkel te laten blijven. Zonder deze factor
 * stond het diagram zwevend in een vierkant met veel lege ruimte eronder.
 */
const CIRCLE_TALL = 1 / 0.8;
const CIRCLE_DOODLE_KINDS = ['kern', 'groei', 'proces', 'nieuw', 'stap', 'verandering'];
/**
 * Labelpositie ten opzichte van het ankerpunt op de cirkel. De padding duwt de
 * tekst weg van de knop: bij een bovenlabel valt het element met
 * -translate-y-full op het anker, dus zit de ruimte in de padding eronder.
 */
const CIRCLE_LABEL_OFFSET = [
  'pb-3 -translate-x-1/2 -translate-y-full',
  'pl-4 -translate-y-1/2',
  'pl-4 -translate-y-1/2',
  'pt-3 -translate-x-1/2',
  'pr-4 -translate-x-full -translate-y-1/2',
  'pr-4 -translate-x-full -translate-y-1/2',
];

type DoodleKind = typeof CIRCLE_DOODLE_KINDS[number];

/** Handgetekende accentjes naast de labels, naar voorbeeld van de visual. */
const CircleDoodle = ({ kind, className = '' }: { kind: DoodleKind; className?: string }) => <svg viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
  {kind === 'kern' && <>
    <path d="M3 14C11 5 27 4 37 10" />
    <path d="M7 17c8 4 19 3 27-2" />
  </>}
  {kind === 'groei' && <>
    <path d="M20 21V5" />
    <path d="M20 13c-4 0-7-2-8-6 4 0 7 2 8 6Z" />
    <path d="M20 10c3 0 6-2 7-5-3 0-6 2-7 5Z" />
  </>}
  {kind === 'proces' && <>
    <path d="M22 12a4 4 0 1 1-4-4 7 7 0 1 1 7 7" />
    <circle cx="20" cy="12" r="1" fill="currentColor" stroke="none" />
  </>}
  {kind === 'nieuw' && <>
    <path d="M3 10c5-5 9 3 14-1s9 3 14-1" />
    <path d="M6 17c5-5 9 3 14-1s9 3 14-1" />
  </>}
  {kind === 'stap' && <>
    <ellipse cx="14" cy="15" rx="9" ry="6" />
    <ellipse cx="28" cy="9" rx="6" ry="4" />
  </>}
  {kind === 'verandering' && <>
    <path d="M4 18c0-9 6-14 13-14" />
    <path d="M10 19c0-6 4-10 9-10" />
  </>}
</svg>;

/**
 * De zes stappen als cirkeldiagram, naar voorbeeld van de aangeleverde visual.
 * De toelichting van de gekozen stap staat in het midden van de cirkel. De
 * knoppen zijn echte knoppen: met muis, toetsenbord en tik te kiezen.
 */
const CircleDiagram = () => {
  const [active, setActive] = useState(0);

  const point = (radius: number, index: number) => {
    const rad = (CIRCLE_ANGLES[index] * Math.PI) / 180;
    return { left: `${50 + radius * Math.cos(rad)}%`, top: `${50 + radius * CIRCLE_TALL * Math.sin(rad)}%` };
  };

  return <>
    <div className="relative mx-auto aspect-[1/0.8] w-full max-w-[900px]">
      <div className="absolute left-1/2 top-1/2 aspect-square w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-olive" />
      {/* Onder lg is het midden te klein voor een alinea: daar blijft de naam
          staan en staat de tekst van de gekozen stap onder de cirkel. */}
      <div className="absolute inset-0 flex items-center justify-center lg:hidden">
        <span className="font-serif text-sm text-secondary-dark">CIRCLE-methode</span>
      </div>
      <div className="absolute inset-0 hidden items-center justify-center lg:flex">
        <div className="grid w-full max-w-[280px]">
          {CIRCLE_STEPS.map((step, index) => <m.div
            key={step.title}
            initial={false}
            animate={{ opacity: active === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden={active !== index}
            className="col-start-1 row-start-1 text-center"
          >
            <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.paragraphs.join(' ')}</p>
          </m.div>)}
        </div>
      </div>
      {CIRCLE_STEPS.map((step, index) => {
        const kind = CIRCLE_DOODLE_KINDS[index] as DoodleKind;
        const doodleFirst = index >= 4;
        return <React.Fragment key={step.title}>
          <div className="absolute aspect-square w-[9%] -translate-x-1/2 -translate-y-1/2" style={point(CIRCLE_RING, index)}>
            <m.button
              type="button"
              whileHover={{ scale: 1.12 }}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              aria-pressed={active === index}
              aria-label={`Stap ${index + 1}: ${step.title}`}
              className={`flex h-full w-full cursor-pointer items-center justify-center rounded-full ${active === index ? 'bg-olive text-foreground' : 'border border-olive bg-background text-secondary-dark'}`}
            >
              <span className="text-xs tabular-nums md:text-base">{index + 1}</span>
            </m.button>
          </div>
          <div className={`absolute hidden items-center gap-2 whitespace-nowrap lg:flex ${CIRCLE_LABEL_OFFSET[index]}`} style={point(CIRCLE_LABEL_RADIUS, index)}>
            {doodleFirst && <CircleDoodle kind={kind} className="h-4 w-7 text-olive" />}
            <span className={`text-[11px] uppercase tracking-[0.12em] ${active === index ? 'text-foreground' : 'text-secondary-dark'}`}>{step.title}</span>
            {!doodleFirst && <CircleDoodle kind={kind} className="h-4 w-7 text-olive" />}
          </div>
        </React.Fragment>;
      })}
    </div>
    <div className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
      {CIRCLE_STEPS.map((step, index) => <button
        key={step.title}
        type="button"
        onClick={() => setActive(index)}
        aria-pressed={active === index}
        className={`cursor-pointer rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] ${active === index ? 'border-olive bg-olive text-foreground' : 'border-secondary text-secondary-dark'}`}
      >
        {step.title}
      </button>)}
    </div>
    <div className="mt-6 text-center lg:hidden">
      <p className="font-serif text-lg text-foreground mb-2">{CIRCLE_STEPS[active].title}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{CIRCLE_STEPS[active].paragraphs.join(' ')}</p>
    </div>
  </>;
};

const ComplaintBlocks = () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
  {COMPLAINT_BLOCKS.map((block, index) => <FadeIn key={block.title} delay={index * 0.1} className="h-full">
    <div className="bg-card border border-secondary/30 rounded-2xl p-8 h-full">
      <div className="flex items-start gap-5">
        <span className="font-serif text-2xl text-secondary/70 leading-none pt-1 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-5">{block.title}</h3>
          <ul className="space-y-2.5">
            {block.complaints.map(complaint => <li key={complaint} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden="true" />
              {complaint}
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  </FadeIn>)}
</div>;

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openModal } = useBookingModal();


  return <>
    <SEO 
      canonicalUrl="/"
      description="Herstel je hormonale balans, darmgezondheid en energie met orthomoleculaire therapie. Persoonlijke begeleiding via de CIRCLE-methode voor duurzame gezondheid."
    />
    <article className="min-h-screen">
    <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground pb-28 md:pb-0 [@media(max-height:640px)]:pt-[73px] [@media(max-height:640px)]:pb-16 md:[@media(max-height:640px)]:pt-0" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        {/* Eén <picture> in plaats van twee <img>-tags met CSS-toggle: zo
            downloadt de browser alleen het beeld dat hij echt toont, in
            plaats van beide met hoge prioriteit. */}
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImage} />
          <img src={heroImageMobile} alt="Danique Kwakman orthomoleculair therapeut - hormoonbalans en darmgezondheid specialist" className="w-full h-full object-cover object-center md:object-right" loading="eager" fetchPriority="high" decoding="async" />
        </picture>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-white leading-[1.15]">
            Van een opgeblazen buik, vermoeidheid en een onregelmatige cyclus tot cravings, PMS of het gevoel dat je lichaam niet meer meewerkt.
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
            Als orthomoleculair hormoon- en darmtherapeut in <span className="font-semibold text-white">Hoorn</span> en online onderzoeken we de oorzaken achter jouw klachten en werken we stap voor stap aan het herstel van je hormonale en darmgezondheid.{"\u00a0"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">
            <CustomButton variant="secondary" onClick={openModal} className="w-56 max-w-full">Gratis kennismaking</CustomButton>
            <Link to="/behandelingen" className="w-56 max-w-full">
              <CustomButton variant="outline" className="w-full">Mijn aanbod</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Section className="pb-0 md:pb-0">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug mb-8">
            Je voelt dat er iets niet klopt
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Je bent al zo vaak van huisarts naar huisarts gegaan. Je bloedwaarden zijn &ldquo;goed&rdquo;, je krijgt te horen dat het waarschijnlijk stress is of dat je er maar mee moet leren leven of je terug kan komen als je zwanger wilt worden. Maar ondertussen blijf jij zitten met een opgeblazen buik, vermoeidheid, cravings, een onregelmatige cyclus of andere vervelende klachten.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Je voelt aan alles dat dit er niet zomaar bij hoort..
          </p>
        </FadeIn>
      </div>
    </Section>

    <Section id="services">
      <div className="text-center mb-16">
        <FadeIn>
          <SectionTag text="Specialisaties" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{"\n"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Voel je weer energiek en lekker in je vel, zonder eindeloos te zoeken naar wat je nu weer moet eten of veranderen. Samen brengen we in kaart wat er speelt en werken we stap voor stap toe naar meer energie, een rustige buik en dat zonder hormonale klachten.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Hier help ik je onder andere bij:</p>
        </FadeIn>
      </div>
      <ComplaintBlocks />
    </Section>

    <Section id="behandelingen" className="bg-background">
      <div className="text-center mb-16">
        <FadeIn>
          <SectionTag text="Trajecten" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Aanbod</h2>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {TREATMENTS.map((treatment, index) => {
          const linkPath = `/${treatment.id}`;
          const card = <m.div className={`bg-card rounded-2xl overflow-hidden border border-secondary/30 h-full flex flex-col${treatment.comingSoon ? '' : ' cursor-pointer'}`} whileHover={treatment.comingSoon ? undefined : {
            y: -8,
            borderColor: "hsl(var(--primary) / 0.3)"
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
          }}>
            <div className="h-64 overflow-hidden relative">
              <ParallaxImage src={treatment.image} alt={`${treatment.title} - traject voor vrouwen met gezondheidsklachten`} className="w-full h-full" />
              {!treatment.comingSoon && <m.div className="absolute inset-0 bg-foreground/0" whileHover={{
                backgroundColor: "hsl(var(--foreground) / 0.1)"
              }} transition={{
                duration: 0.5
              }} />}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-serif text-xl text-card-foreground mb-3">{treatment.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{treatment.description}</p>
              {!treatment.comingSoon && <m.div className="flex items-center text-primary font-medium mt-auto text-sm" whileHover={{
                x: 8
              }} transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
              }}>
                Bekijk traject<span className="sr-only"> {treatment.title}</span> <ArrowRight className="w-4 h-4 ml-2" />
              </m.div>}
              {treatment.price && <TrajectPrice pricing={treatment.price} compact />}
            </div>
          </m.div>;
          return (
            <FadeIn key={treatment.id} delay={index * 0.2} className="h-full">
              {treatment.comingSoon ? card : <Link to={linkPath} className="h-full block">{card}</Link>}
            </FadeIn>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <CustomButton variant="secondary" onClick={openModal}>Gratis kennismaking</CustomButton>
      </div>
    </Section>

    <Section id="over-mij" className="bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <FadeIn direction="left">
          <div className="relative rounded-t-full rounded-b-md overflow-hidden bg-secondary/10 aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full">
            <img loading="lazy" decoding="async" src={daniqueAbout} alt="Danique Kwakman, orthomoleculair hormoon- en darmtherapeut in Hoorn" width={1280} height={1920} className="w-full h-full object-cover object-top" />
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.15}>
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Hi, ik ben Danique</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Van 10+ jaar hormonale klachten naar een klachtenvrij lijf</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jarenlang ging ik van huisarts naar huisarts om na de zoveelste 'leer er mee leven' de diagnose PCOS te krijgen.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            De reguliere zorg hielp me aan de diagnose, maar ik miste handvatten om mijn lichaam en klachten in het dagelijks leven te ondersteunen. Daar begon mijn zoektocht naar het waarom.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Die zoektocht vormt nu de basis van hoe ik jou begeleid.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Als orthomoleculair hormoon- en darmtherapeut en ex-verpleegkundige kijk ik verder dan alleen je klachten. Ik combineer mijn achtergrond in de reguliere zorg met wetenschappelijke kennis, voeding, leefstijl en laboratoriumonderzoek.&nbsp;

            We brengen niet alleen je klachten in kaart, maar kijken ook naar de samenhang tussen je hormonen, darmen, voeding, bloedsuiker, slaap en stress. Zo krijgen we inzicht in wat er achter jouw klachten speelt en werken we gericht aan een plan dat bij jou past.

          </p>
          <Link to="/over-mij">
            <CustomButton variant="secondary">Lees meer over mij</CustomButton>
          </Link>
        </FadeIn>
      </div>
    </Section>

    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug mb-8">
            Je wilt je gewoon weer goed voelen
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Niet meer je broek losmaken na het eten omdat je buik zo opgezet is. Niet om 15.00 uur compleet instorten. Niet iedere maand denken: wanneer komt mijn menstruatie nou weer? Of steeds twijfelen of je dat etentje wel moet doen omdat je bang bent voor hoe je buik daarna voelt.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Je wilt wakker worden met energie, lekker kunnen eten zonder gedoe, je goed voelen in je lichaam en niet de hele dag met je gezondheid bezig zijn.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Gewoon weer kunnen sporten, werken, afspreken en genieten zonder dat je klachten steeds op de voorgrond staan.
          </p>
          <CustomButton variant="secondary" onClick={openModal}>
            yesss, ik wil aan de slag!

          </CustomButton>
        </FadeIn>
      </div>
    </Section>

    <Section id="circle-methode">
      <div className="text-center mb-16">
        <FadeIn>
          <SectionTag text="Mijn methode" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">De CIRCLE-methode</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Een systemische en liefdevolle structuur die jou helpt je lichaam opnieuw te begrijpen, klachten te doorgronden en weer in balans te komen. Stap voor stap, op jouw eigen tempo.
          </p>
          
        </FadeIn>
      </div>
      <FadeIn direction="none" className="mb-12">
        <CircleDiagram />
      </FadeIn>
      <div className="text-center mt-12">
        <Link to="/method">
          <CustomButton variant="secondary">Bekijk mijn methode</CustomButton>
        </Link>
      </div>
    </Section>

    <Section>
      <div className="text-center mb-16">
        <FadeIn>
          <SectionTag text="Ervaringen" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Wat mijn cliënten zeggen</h2>
        </FadeIn>
      </div>
      <div className="max-w-6xl mx-auto">
        <Testimonials testimonials={TESTIMONIALS} />
      </div>
    </Section>

    <Section className="bg-secondary/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeIn>
          <picture className="block">
            <source srcSet={nourishCover.url} type="image/webp" />
            <img
              src={nourishCoverJpeg.url}
              alt="E-book Nourish Your Body van Danique Kwakman met 50+ hormoonproof recepten"
              className="w-full max-w-md mx-auto h-auto object-contain rounded-xl"
              width={1080}
              height={1101}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary mb-4">{"\n"}</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            E-BOOK NOURISH YOUR BODY{"\n"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Je krijgt niet alleen&nbsp;50+ hormoonproof en darmvriendelijke recepten, maar ook&nbsp;
            praktische handvatten om&nbsp;te eten volgens je cyclus, mealprep- en keukenhacks en tools&nbsp;
            om zelf voedzame maaltijden samen te stellen. Zodat gezond eten voor je&nbsp;
            hormonen, darmen en energie&nbsp;makkelijker wordt, zonder ingewikkelde ingrediënten of uren in de keuken.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/webshop/nourish-your-body">
              <CustomButton variant="secondary">Meer info</CustomButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>

    <Section className="bg-background">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-12">
          <div className="flex justify-center">
            <SectionTag text="Blog" className="text-base! px-6! py-2.5! mb-0!" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            {"\n"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"\n"}
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post, index) => <FadeIn key={post.id} delay={index * 0.1} className="h-full">
            <Link to={`/blog/${post.slug}`} className="group block h-full">
              <div className="bg-card rounded-xl overflow-hidden border border-secondary/30 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <m.img loading="lazy" decoding="async" src={post.image} alt={post.imageAlt ?? post.title} className={`w-full h-full object-cover ${post.imagePosition ?? 'object-top'}`} whileHover={{
                scale: 1.05
              }} transition={{
                duration: 0.6,
                ease: "easeOut"
              }} />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-muted-foreground text-xs mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mt-3 pt-3 border-t border-border/30">
                    <span>Lees meer</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>)}
        </div>
        <FadeIn delay={0.2} className="mt-10 flex justify-center">
          <Link to="/blog">
            <CustomButton variant="secondary">Bekijk alle blogs</CustomButton>
          </Link>
        </FadeIn>
      </div>
    </Section>

    <Section className="bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <FadeIn direction="left" delay={0.15}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Laten we kennismaken</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Misschien weet je al precies waar je hulp bij wilt of misschien heb je juist nog geen idee welk traject bij je past. Allebei is helemaal oké.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Tijdens de kennismaking kun je vertellen waar je tegenaan loopt en al je vragen stellen. Ik luister naar jouw verhaal, denk met je mee en samen bespreken we welk traject het beste aansluit bij jouw situatie.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Zo weet je na dit gesprek waar je aan toe bent en kijken we samen of er een match is.
          </p>
          <CustomButton variant="secondary" onClick={openModal}>Vrijblijvend kennismaken</CustomButton>
        </FadeIn>
        <FadeIn direction="right">
          <div className="relative rounded-t-full rounded-b-md overflow-hidden bg-secondary/10 aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full">
            <img loading="lazy" decoding="async" src={daniqueMatchCall} alt="Danique Kwakman tijdens een online kennismakingsgesprek" width={839} height={1120} className="w-full h-full object-cover object-top" />
          </div>
        </FadeIn>
      </div>
    </Section>
  </article>
  </>;
};

export default Index;

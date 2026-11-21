import React from 'react';
import { m } from 'framer-motion';
import { Link } from '@/lib/router-compat';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Check, Mail, ShieldCheck, Tablet, BookOpen, CalendarHeart, ChefHat, ArrowRight, UtensilsCrossed, Sparkles, Star } from 'lucide-react';

import nourishCover from '@/assets/nourish-your-body-cover-2.webp.asset.json';
import ebookPage0 from '@/assets/nourish-ebook-inhoud.webp.asset.json';
import ebookPage1 from '@/assets/nourish-ebook-keuken-essentials.webp.asset.json';
import ebookPage2 from '@/assets/nourish-ebook-eten-volgens-je-cyclus.webp.asset.json';
import ebookPage3 from '@/assets/nourish-ebook-traybake-in-5-stappen.webp.asset.json';
import ebookPage4 from '@/assets/nourish-ebook-wortelpannenkoekjes-recept.webp.asset.json';
import ebookPage5 from '@/assets/nourish-ebook-zoete-aardappel-tzaziki-bowl.webp.asset.json';
import daniquePortret from '@/assets/danique-portret.webp';
import daniqueGlowup from '@/assets/danique-glowup.webp';
import daniqueDarm from '@/assets/danique-darm.webp';
import daniqueBeach from '@/assets/danique-beach.webp';
import daniqueBloedsuiker from '@/assets/danique-walking-beach.webp';

export const CHECKOUT_URL = 'https://daniquekwakman.plugandpay.com/checkout/nourish-your-body';
/** Enige bron van waarheid voor de prijs: zichtbare prijs én JSON-LD komen hier vandaan. */
export const PRICE_AMOUNT = '39.99';
export const PRICE_DISPLAY = `€${PRICE_AMOUNT.replace('.', ',')}`;



const PANEL = 'rounded-2xl bg-card shadow-[0_12px_32px_-16px_rgba(148,120,88,0.25)]';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium tracking-wide">
    {text}
  </div>
);

const OrderButton = ({ className = '' }: { className?: string }) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark cursor-pointer ${className}`}
  >
    Bestel nu
  </a>
);


const features = [
  {
    icon: BookOpen,
    title: '50+ hormoonproof & darmvriendelijke recepten',
    text: 'Voedzame ontbijtjes, lunches, diners en snacks die je lichaam ondersteunen.',
  },
  {
    icon: Sparkles,
    title: 'Waarom voeding zo belangrijk is voor je hormonen en darmen',
    text: 'Praktische inzichten om beter te begrijpen wat jouw lichaam nodig heeft.',
  },
  {
    icon: CalendarHeart,
    title: 'Eten volgens je cyclus',
    text: 'Ontdek welke voeding je kunt inzetten tijdens de verschillende fases van je cyclus en hoe je hiermee kunt meebewegen met je lichaam.',
  },
  {
    icon: ChefHat,
    title: 'How to make: voedende maaltijden bouwen',
    text: 'Leer hoe je een hormoonproof ontbijt, een voedzame salade in 10 minuten en een makkelijke traybake in 5 stappen maakt.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Slimmer in de keuken',
    text: 'Mealprep tips, keuken essentials en praktische hacks om gezond eten makkelijker te maken.',
  },
  {
    icon: ShieldCheck,
    title: 'Overwegend vrij van suikers, gluten en helemaal hormoonproof',
    text: 'De recepten zijn overwegend vrij van suiker, gluten en zuivel of makkelijk te vervangen.',
  },
];


/** Reviews van cliënten die het e-book al gelezen hebben; initialen zoals aangeleverd. */
const reviews = [
  {
    text: 'Door de recepten heb ik veel meer energie door de dag heen en ik heb geen last met van cravings!',
    initial: 'A.',
  },
  {
    text: 'Je recepten zijn echt heel fijn!',
    initial: 'S.',
  },
  {
    text: 'Ik heb nu veel minder cravings op een dag en mijn energie is top!',
    initial: 'S.',
  },
  {
    text: 'Ik ben elke dag bezig geweest met jouw recepten en mijn hormonen voelen stukken stabieler. Ook ben ik al een paar kilo kwijt, ondanks dat dat niet eens mijn focus was!',
    initial: 'L.',
  },
];

const trajectories = [
  {
    href: '/bloedsuikertraject',
    image: daniqueBloedsuiker,
    title: '1:1 Bloedsuikertraject',
    description:
      'In 2 weken tijd naar stabiele energie, minder cravings en meer vertrouwen in je lichaam met een 14-daagse glucosesensor.',
  },
  {
    href: '/hormoontraject',
    image: daniqueGlowup,
    title: '1:1 Hormoontraject',
    description:
      'In 3 maanden tijd naar een hormonale balans, rust en vertrouwen in je lijf. Voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans.',
  },
  {
    href: '/mommy-to-be',
    image: daniqueBeach,
    title: '1:1 Mommy (to be) traject',
    description:
      'Met het 1:1 Mommy (to be) traject help ik je stap voor stap de juiste puzzelstukjes samenbrengen. Met aandacht voor je hormonen, darmen, voeding en leefstijl, van kinderwens tot zwangerschap en postpartum.',
  },
  {
    href: '/darmtraject',
    image: daniqueDarm,
    title: '1:1 Darmtraject',
    description: 'Een diepgaand 1:1 traject incl. lab onderzoek om tot de kern van jouw klacht te komen.',
  },
];

type EbookImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** 'contain' houdt de hele afbeelding zichtbaar, 'cover' vult het kader. */
  fit?: 'cover' | 'contain';
};

const ebookPages: EbookImage[] = [
  { src: nourishCover.url, alt: 'Omslag van het e-book Nourish Your Body van Danique Kwakman met 50+ hormoonproof recepten', width: 1080, height: 1101, fit: 'contain' },
  { src: ebookPage0.url, alt: 'Inhoudsopgave van het e-book Nourish Your Body met alle hoofdstukken', width: 1200, height: 1696 },
  { src: ebookPage1.url, alt: 'Pagina Keuken essentials met een hormoonproof keuken checklist', width: 1200, height: 1696 },
  { src: ebookPage2.url, alt: 'Pagina Eten volgens je cyclus uit het e-book Nourish Your Body', width: 1200, height: 1696 },
  { src: ebookPage3.url, alt: 'Pagina How to make: een makkelijke traybake in 5 stappen', width: 1200, height: 1696 },
  { src: ebookPage4.url, alt: 'Receptpagina Wortelpannenkoekjes met ingrediënten en bereiding', width: 1200, height: 1696 },
  { src: ebookPage5.url, alt: 'Receptpagina Zoete aardappel met tzaziki bowl', width: 1200, height: 1696 },
];

const ProductGallery = () => {
  const [active, setActive] = React.useState(0);
  const current = ebookPages[active] ?? ebookPages[0]!;
  return (
    <div className="w-full max-w-md mx-auto">
      <img
        src={current.src}
        alt={current.alt}
        title={current.alt}
        style={{ aspectRatio: `${current.width} / ${current.height}` }}
        className={`w-full h-auto rounded-xl ${current.fit === 'contain' ? 'object-contain bg-secondary/20' : 'object-cover'}`}
        width={current.width}
        height={current.height}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="mt-3 grid grid-cols-7 gap-1.5">
        {ebookPages.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Toon ${p.alt}`}
            aria-pressed={i === active}
            className={`overflow-hidden rounded-md border-2 cursor-pointer transition-colors ${i === active ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
          >
            <img
              src={p.src}
              alt=""
              style={{ aspectRatio: `${p.width} / ${p.height}` }}
              className={`w-full h-full ${p.fit === 'contain' ? 'object-contain bg-secondary/20' : 'object-cover'}`}
              width={120}
              height={170}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const Webshop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Section className="pt-12 md:pt-20 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* 1. Header */}
          <div className="text-center mb-14 md:mb-20">
            <FadeIn>
              <SectionTag text="Webshop" />
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Nourish Your Body
              </h1>
              <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                Het e-book met 50+ hormoonproof recepten voor cyclusgerichte voeding,
                darmgezondheid en hormoonbalans. Direct te downloaden na je bestelling.
              </p>
            </FadeIn>
          </div>

          {/* 2. Featured product */}
          <FadeIn>
            <div className={`${PANEL} p-6 sm:p-10 md:p-14 mb-20 md:mb-28`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <ProductGallery />

                <div>
                  <span className="inline-block rounded-full bg-primary/15 text-primary text-xs font-medium px-3 py-1 mb-4">
                    Nourish Your Body
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    E-BOOK NOURISH YOUR BODY
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Je krijgt niet alleen 50+ hormoonproof en darmvriendelijke recepten, maar ook praktische
                    handvatten om te eten volgens je cyclus, mealprep- en keukenhacks en tools om zelf voedzame
                    maaltijden samen te stellen. Zodat gezond eten voor je hormonen, darmen en energie makkelijker
                    wordt, zonder ingewikkelde ingrediënten of uren in de keuken.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['50+ recepten', 'Cyclusgerichte voeding', 'Hormoon- & darmproof', 'Direct te downloaden'].map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <OrderButton />
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-primary" /> Direct in je mail</span>
                    <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary" /> Veilig betalen met iDEAL</span>
                    <span className="inline-flex items-center gap-1.5"><Tablet className="w-3.5 h-3.5 text-primary" /> Voor telefoon, tablet en print</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 3. Wat je krijgt */}
          <FadeIn>
            <section className="mb-20 md:mb-28">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center">In dit recepten boek vind je:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {features.map(({ icon: Icon, title, text }) => (
                  <div key={title}>
                    <Icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                    <h3 className="font-serif text-lg text-foreground mb-1.5">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 4. Reviews */}
          <FadeIn>
            <section className="mb-20 md:mb-28">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center">Andere gingen je voor</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                {reviews.map((r) => (
                  <figure key={r.initial + r.text} className="bg-card rounded-2xl border border-secondary/30 p-6 flex flex-col gap-3">
                    <div className="flex gap-1" role="img" aria-label="5 van de 5 sterren">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-sm text-card-foreground leading-relaxed flex-grow">
                      &ldquo;{r.text}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs font-medium text-muted-foreground">{r.initial}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 5. Over Danique */}
          <FadeIn>
            <section className={`${PANEL} p-8 sm:p-10 md:p-14 mb-20 md:mb-28`}>
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
                <img
                  src={daniquePortret}
                  alt="Danique Kwakman, orthomoleculair therapeut en auteur van het e-book Nourish Your Body"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto"
                  width={192}
                  height={192}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Over Danique</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hi! Ik ben Danique Kwakman. <span className="font-semibold text-foreground">Orthomoleculair hormoon- en darmtherapeut en ex-verpleegkundige</span>. Ik combineer mijn achtergrond in de reguliere zorg met wetenschappelijke kennis, voeding, leefstijl en laboratoriumonderzoek. We brengen niet alleen je klachten in kaart, maar kijken ook naar de samenhang tussen je <span className="font-semibold text-foreground">hormonen, darmen, voeding, bloedsuiker, slaap en stress</span>. Zo krijgen we inzicht in wat er achter jouw klachten speelt en werken we gericht aan een plan dat bij jou past.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Lees meer <Link to="/over-mij" className="text-primary underline underline-offset-4">over mijn werkwijze en achtergrond</Link>,
                    ontdek <Link to="/blog/darmen-gezond-houden-5-tips" className="text-primary underline underline-offset-4">5 simpele tips om je darmen gezond te houden</Link>{' '}
                    of lees verder op mijn <Link to="/blog" className="text-primary underline underline-offset-4">blog met artikelen over hormonen, darmen en energie</Link>.
                  </p>
                </div>

              </div>
            </section>
          </FadeIn>


          {/* 8. Andere trajecten */}
          <FadeIn>
            <section className="mt-20 md:mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
                Ontdekt mijn 1:1 aanbod
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {trajectories.map((t, index) => (
                  <FadeIn key={t.href} delay={index * 0.2} className="h-full">
                    <Link to={t.href} className="h-full block">
                      <m.div
                        className="bg-card rounded-2xl overflow-hidden border border-secondary/30 h-full flex flex-col cursor-pointer"
                        whileHover={{
                          y: -8,
                          borderColor: "hsl(var(--primary) / 0.3)",
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      >
                        <div className="h-64 overflow-hidden relative">
                          <ParallaxImage
                            src={t.image}
                            alt={`${t.title} - traject voor vrouwen met gezondheidsklachten`}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="p-6 flex flex-col grow">
                          <h3 className="font-serif text-xl text-card-foreground mb-3">{t.title}</h3>
                          <p className="text-muted-foreground text-sm mb-6 leading-relaxed grow">{t.description}</p>
                          <m.div
                            className="flex items-center text-primary font-medium mt-auto text-sm"
                            whileHover={{ x: 8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                          >
                            Bekijk traject<span className="sr-only"> {t.title}</span>{' '}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </m.div>
                        </div>
                      </m.div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Webshop;

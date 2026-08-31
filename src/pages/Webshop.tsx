import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/lib/router-compat';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check, Mail, ShieldCheck, Tablet, BookOpen, CalendarHeart, ChefHat, ListChecks, ArrowRight } from 'lucide-react';
import nourishCover from '@/assets/nourish-your-body-cover-2.jpeg.asset.json';
import daniquePortret from '@/assets/danique-portret.webp';
import daniqueGlowup from '@/assets/danique-glowup.webp';
import daniqueDarm from '@/assets/danique-darm.webp';
import daniqueBloedsuiker from '@/assets/danique-walking-beach.webp';

export const CHECKOUT_URL = 'https://daniquekwakman.plugandpay.com/checkout/nourish-your-body';
export const PRICE_AMOUNT = '24.95';
const PRICE = '€24,95';


const PANEL = 'rounded-2xl bg-card shadow-[0_12px_32px_-16px_rgba(148,120,88,0.25)]';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">
    {text}
  </div>
);

const OrderButton = ({ className = '' }: { className?: string }) => (
  <a
    href={CHECKOUT_URL}
    rel="noopener"
    className={`inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark cursor-pointer ${className}`}
  >
    Bestel nu
  </a>
);


const features = [
  { icon: BookOpen, title: '50+ recepten', text: 'Voedzame recepten voor elk moment van de dag.' },
  { icon: CalendarHeart, title: 'Cyclusgerichte voeding', text: 'Eten dat aansluit bij elke fase van je cyclus.' },
  { icon: ChefHat, title: 'Mealprep & hacks', text: 'Slim voorbereiden, ook op drukke dagen.' },
  { icon: ListChecks, title: 'Boodschappenlijsten', text: 'Kant-en-klare lijstjes zodat je niets vergeet.' },
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
    href: '/darmtraject',
    image: daniqueDarm,
    title: '1:1 Darmtraject Therapie',
    description: 'Een diepgaand 1:1 traject incl. lab onderzoek om tot de kern van jouw klacht te komen.',
  },
];

const faqs = [
  {
    q: 'Hoe ontvang ik het e-book?',
    a: 'Direct na je bestelling ontvang je een mail met je downloadlink. Meestal is dat binnen een paar minuten; check anders even je spammap.',
  },
  {
    q: 'Kan ik het printen?',
    a: 'Zeker. Het boek is opgemaakt als pdf, dus je kunt het helemaal of per pagina uitprinten en in een map bewaren.',
  },
  {
    q: 'Op welke apparaten kan ik het lezen?',
    a: 'Op je telefoon, tablet, laptop en e-reader die pdf ondersteunt. Je hebt geen speciale app nodig.',
  },
  {
    q: 'Kan ik mijn geld terugkrijgen?',
    a: 'Omdat het om een digitaal product gaat dat je meteen ontvangt, is retour niet mogelijk. Twijfel je? Stuur me gerust eerst een berichtje.',
  },
  {
    q: 'Is het geschikt bij een specifieke klacht?',
    a: 'De recepten zijn hormoon- en darmvriendelijk en voor veel vrouwen een fijne basis. Bij een specifieke klacht is persoonlijke begeleiding altijd passender.',
  },
];

const Webshop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* 1. Header */}
          <div className="text-center mb-14 md:mb-20">
            <FadeIn>
              <SectionTag text="Webshop" />
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Webshop
              </h1>
              <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                Praktische e-books en tools voor hormoonbalans, darmgezondheid en meer energie.
                Direct te downloaden na je bestelling.
              </p>
            </FadeIn>
          </div>

          {/* 2. Featured product */}
          <FadeIn>
            <div className={`${PANEL} p-6 sm:p-10 md:p-14 mb-20 md:mb-28`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <img
                  src={nourishCover.url}
                  alt="Mockup van het e-book Nourish Your Body van Danique Kwakman"
                  className="w-full max-w-md mx-auto h-auto object-contain rounded-xl drop-shadow-[0_18px_32px_rgba(148,120,88,0.25)]"
                  loading="eager"
                  decoding="async"
                />
                <div>
                  <span className="inline-block rounded-full bg-primary/15 text-primary text-xs font-medium px-3 py-1 mb-4">
                    E-book
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                    Nourish Your Body
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Voedzame, cyclusgerichte recepten die je hormonen, darmen en energie ondersteunen.
                    Zonder ingewikkelde ingrediënten of eindeloos in de keuken staan.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['50+ recepten', 'Cyclusgerichte voeding', 'Hormoon- & darmproof', 'Direct te downloaden'].map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-serif text-3xl md:text-4xl text-foreground mb-6">{PRICE}</p>
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
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center">Wat je krijgt</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
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

          {/* 4. Over Danique */}
          <FadeIn>
            <section className={`${PANEL} p-8 sm:p-10 md:p-14 mb-20 md:mb-28`}>
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
                <img
                  src={daniquePortret}
                  alt="Portret van Danique Kwakman, hormoon- en darmtherapeut"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Over Danique</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ik help vrouwen hun lichaam opnieuw te begrijpen en stap voor stap van{' '}
                    <strong className="text-foreground font-medium">overleven naar leven</strong> te gaan, met mijn
                    unieke <strong className="text-foreground font-medium">CIRCLE-methode</strong>. Deze methode helpt
                    je klachten te doorgronden en duurzame balans te creëren, afgestemd op jouw energie, ritme en
                    leven.
                  </p>
                  <p className="mt-5 text-sm text-foreground font-medium">Danique Kwakman</p>
                  <p className="text-sm text-muted-foreground">Orthomoleculair Therapeut</p>
                </div>
              </div>
            </section>
          </FadeIn>


          {/* 6. FAQ */}
          <FadeIn>
            <section className="mb-20 md:mb-28 max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">Veelgestelde vragen</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/50">
                    <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline cursor-pointer">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </FadeIn>


          {/* 8. Andere trajecten */}
          <FadeIn>
            <section className="mt-20 md:mt-28">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">
                Liever persoonlijke begeleiding?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {trajectories.map((t, index) => (
                  <FadeIn key={t.href} delay={index * 0.2} className="h-full">
                    <Link to={t.href} className="h-full block">
                      <motion.div
                        className="bg-card rounded-2xl overflow-hidden shadow-xs border border-secondary/30 h-full flex flex-col cursor-pointer"
                        whileHover={{
                          y: -8,
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
                          <motion.div
                            className="flex items-center text-primary font-medium mt-auto text-sm"
                            whileHover={{ x: 8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                          >
                            Bekijk traject<span className="sr-only"> {t.title}</span>{' '}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </motion.div>
                        </div>
                      </motion.div>
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

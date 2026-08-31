import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check, Mail, ShieldCheck, Tablet, BookOpen, CalendarHeart, ChefHat, ListChecks } from 'lucide-react';
import nourishCover from '@/assets/nourish-your-body-cover-2.jpeg.asset.json';
import daniquePortret from '@/assets/danique-portret.webp';

const CHECKOUT_URL = 'https://daniquekwakman.plugandpay.com/checkout/nourish-your-body';
/** Placeholder — vervang door de definitieve prijs. */
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

const reviews = [
  { quote: 'Placeholder-review: de recepten zijn simpel en ik merk echt verschil in mijn energie.', name: 'Naam', age: '32' },
  { quote: 'Placeholder-review: eindelijk een boek dat rekening houdt met mijn cyclus.', name: 'Naam', age: '28' },
  { quote: 'Placeholder-review: mijn buik is rustiger en koken kost me minder tijd.', name: 'Naam', age: '41' },
];

const upcoming = [
  { title: 'Hormoonproof Mealplan', text: 'Een compleet weekmenu voor meer balans en energie.' },
  { title: 'Darmherstel Gids', text: 'Stap voor stap werken aan een rustige, blije buik.' },
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
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

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
                    In mijn praktijk zie ik dagelijks vrouwen die willen eten wat hun lijf steunt, maar niet weten
                    waar ze moeten beginnen. Daarom bundelde ik mijn favoriete recepten in dit boek: voedzaam,
                    afgestemd op je cyclus en simpel genoeg voor een doordeweekse avond. Zodat gezond eten weer
                    licht en vanzelfsprekend voelt.
                  </p>
                  <p className="mt-5 text-sm text-foreground font-medium">Danique Kwakman</p>
                  <p className="text-sm text-muted-foreground">hormoon- &amp; darmtherapeut</p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 5. Reviews */}
          <FadeIn>
            <section className="mb-20 md:mb-28">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center">Wat anderen zeggen</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {reviews.map((r, i) => (
                  <figure key={i} className={`${PANEL} p-6 flex flex-col`}>
                    <blockquote className="text-sm text-muted-foreground leading-relaxed grow">“{r.quote}”</blockquote>
                    <figcaption className="mt-5 text-sm text-foreground">
                      {r.name} <span className="text-muted-foreground">· {r.age}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 6. Binnenkort */}
          <FadeIn>
            <section className="mb-20 md:mb-28">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10 text-center">Binnenkort in de shop</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {upcoming.map((u) => (
                  <article key={u.title} className={`${PANEL} overflow-hidden`}>
                    <div className="h-40 bg-primary/10" aria-hidden="true" />
                    <div className="p-6">
                      <span className="inline-block rounded-full bg-primary/15 text-primary text-xs font-medium px-3 py-1 mb-3">
                        Binnenkort
                      </span>
                      <h3 className="font-serif text-lg text-foreground mb-1.5">{u.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{u.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <form
                className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSignedUp(true);
                }}
              >
                <label htmlFor="shop-notify" className="sr-only">E-mailadres</label>
                <input
                  id="shop-notify"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Je e-mailadres"
                  className="grow rounded-md border border-border/60 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/40"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark cursor-pointer"
                >
                  Hou me op de hoogte
                </button>
              </form>
              {signedUp && (
                <p className="mt-3 text-center text-sm text-muted-foreground">Fijn, ik laat het je weten zodra er iets nieuws is.</p>
              )}
            </section>
          </FadeIn>

          {/* 7. FAQ */}
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

          {/* 8. Afsluitende CTA */}
          <FadeIn>
            <motion.section className="rounded-2xl bg-primary/10 px-6 py-14 md:py-20 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">Klaar om te beginnen?</h2>
              <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
                Begin vandaag nog met voeding die je hormonen, darmen en energie steunt.
              </p>
              <OrderButton />
            </motion.section>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Webshop;

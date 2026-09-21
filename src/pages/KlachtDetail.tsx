import { useState } from 'react';
import { m } from 'framer-motion';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { complaintCategories, complaints, findComplaint } from '@/data/complaints';
import { complaintContent } from '@/data/complaint-content';
import type { ComplaintFaq } from '@/data/complaint-content/types';
import { Link, Navigate, useParams } from '@/lib/router-compat';

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const TRAJECT_LINKS: { term: string; to: string }[] = [
  { term: '1:1 Hormoontraject', to: '/hormoontraject' },
  { term: 'Hormoontraject', to: '/hormoontraject' },
  { term: '1:1 hormoon traject', to: '/hormoontraject' },
  { term: 'hormoon traject', to: '/hormoontraject' },
  { term: '1:1 Darmtraject', to: '/darmtraject' },
  { term: 'Darmtraject', to: '/darmtraject' },
  { term: '1:1 Bloedsuikertraject', to: '/bloedsuikertraject' },
  { term: 'Bloedsuikertraject', to: '/bloedsuikertraject' },
  { term: '1:1 bloedsuiker traject', to: '/bloedsuikertraject' },
  { term: '1:1 bloedsuikertraject', to: '/bloedsuikertraject' },
  { term: 'bloedsuiker traject', to: '/bloedsuikertraject' },
];

const EXTRA_LINKS: { term: string; to: string }[] = [
  { term: 'mijn recepten pagina', to: '/recepten' },
  { term: 'Nourish Your Body', to: '/webshop' },
  { term: 'deze pagina', to: '/klachten/insulineresistentie' },
];

const BOOKING_TERM = 'gratis kennismaking';

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

type LinkifyOptions = { extra?: boolean; onBooking?: () => void };

const linkifyTrajecten = (text: string, options: LinkifyOptions = {}) => {
  const terms = [...TRAJECT_LINKS.map((item) => item.term)];
  if (options.extra) terms.push(...EXTRA_LINKS.map((item) => item.term), BOOKING_TERM);
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})(?![a-zA-Z])`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const match = [...TRAJECT_LINKS, ...EXTRA_LINKS].find(
      (item) => item.term.toLowerCase() === part.toLowerCase(),
    );
    if (options.extra && options.onBooking && part.toLowerCase() === BOOKING_TERM) {
      return (
        <button
          key={`${part}-${index}`}
          type="button"
          onClick={options.onBooking}
          className="inline text-primary underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
        >
          {part}
        </button>
      );
    }
    if (!match) return part;
    return (
      <Link
        key={`${part}-${index}`}
        to={match.to}
        className="text-primary underline decoration-primary/40 underline-offset-4 transition hover:decoration-primary"
      >
        {part}
      </Link>
    );
  });
};

const FaqList = ({ faqs, onBooking }: { faqs: ComplaintFaq[]; onBooking: () => void }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-secondary/40">
            <m.button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-5 py-6 text-left focus:outline-hidden"
              aria-expanded={isOpen}
            >
              <h3 className="font-serif text-xl text-foreground">{item.question}</h3>
              <m.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-primary">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </m.span>
            </m.button>
            <m.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pb-6">
                {item.answer.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-muted-foreground">
                    {linkifyTrajecten(paragraph, { extra: item.extraLinks, onBooking })}
                  </p>
                ))}
              </div>
            </m.div>
          </div>
        );
      })}
    </div>
  );
};

const KlachtDetail = () => {
  const { slug } = useParams();
  const { openModal } = useBookingModal();
  const complaint = slug ? findComplaint(slug) : undefined;

  if (!complaint) return <Navigate to="/klachten" replace />;

  const others = complaints.filter((item) => item.slug !== complaint.slug).slice(0, 6);
  const content = complaintContent[complaint.slug];
  const category = complaintCategories.find((item) => item.name === complaint.category);

  const ctaBlock = (
    <Section className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="rounded-md border border-secondary/30 bg-card p-8 text-center md:p-12">
            <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
              Wil je weten wat er bij jou speelt?
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Tijdens een gratis kennismaking bespreken we jouw klachten en hulpvraag. Vanuit daar
              kijken we wat er nodig is om te begrijpen wat er in jouw lichaam speelt en welke
              begeleiding daarbij past.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Waar nodig kan aanvullend{' '}
              <Link
                to="/labonderzoek"
                className="underline underline-offset-4 transition-colors hover:text-primary-dark"
              >
                laboratoriumonderzoek
              </Link>{' '}
              extra puzzelstukjes geven.
            </p>
            <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
            {complaint.traject && (
              <div className="mt-6">
                <Link
                  to={complaint.traject.href}
                  className="text-sm text-primary underline underline-offset-4 transition-colors hover:text-primary-dark"
                >
                  {complaint.traject.label}
                </Link>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );

  const othersBlock = (
    <Section className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="mb-6 font-serif text-2xl text-foreground md:text-3xl">
            Andere klachten waar ik je bij help
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={`/klachten/${item.slug}`}
                className="group flex items-center justify-between gap-3 rounded-md border border-secondary/40 bg-card px-5 py-4 transition-colors hover:border-primary/40"
              >
                <span className="font-serif text-lg text-foreground">{item.title}</span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );

  const disclaimerBlock = (
    <Section className="pt-0 pb-16 md:pb-24">
      <FadeIn className="mx-auto max-w-3xl border-l-2 border-secondary pl-6">
        <h2 className="mb-3 font-serif text-2xl text-foreground">Goed om te weten</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          De informatie op deze pagina is bedoeld om klachten te herkennen en vervangt geen diagnose,
          behandeling of controle door een arts. Bij ernstige, acute of aanhoudende klachten is het
          belangrijk om contact op te nemen met je huisarts of specialist.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Ik help je daarnaast om met voeding en leefstijl gericht te werken aan de klachten waar je
          in het dagelijks leven tegenaan loopt
        </p>
      </FadeIn>
    </Section>
  );

  if (content) {
    return (
      <main className="min-h-screen bg-background">
        <Section className="pt-4 pb-14 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <Link
                to={category ? `/klachten/onderdeel/${category.slug}` : '/klachten'}
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />{' '}
                {category ? `Terug naar ${category.name.toLowerCase()}` : 'Terug naar klachten'}
              </Link>
              <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                {complaint.pageTitle}
              </h1>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                {content.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="bg-card py-14 md:py-20">
          <FadeIn className="mx-auto max-w-4xl">
            <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
              {content.recognitionHeading ?? 'Misschien herken je één of meerdere van deze signalen'}
            </h2>
            <BulletList items={content.recognition} />
          </FadeIn>
        </Section>

        <Section className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
            <FadeIn>
              <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
                {content.explanationHeading}
              </h2>
              <div className="space-y-4">
                {content.explanation.map((paragraph) => (
                  <p key={paragraph}>{linkifyTrajecten(paragraph)}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="bg-card py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="mb-10 max-w-3xl">
              <h2 className="mb-5 font-serif text-3xl text-foreground md:text-4xl">
                {content.factorsHeading}
              </h2>
              <p className="leading-relaxed text-muted-foreground">{content.factorsIntro}</p>
            </FadeIn>
            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
              {content.factors.map((factor) => (
                <FadeIn key={factor.title}>
                  <article className="border-t border-secondary/50 py-7">
                    <h3 className="mb-3 font-serif text-2xl text-foreground">{factor.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{factor.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            <FadeIn>
              <h2 className="mb-5 font-serif text-3xl text-foreground">{content.widerHeading}</h2>
              <p className="mb-5 leading-relaxed text-muted-foreground">{content.widerIntro}</p>
              <BulletList items={content.widerSignals} />
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-5 font-serif text-3xl text-foreground">Waar we samen naar kijken</h2>
              <p className="mb-5 leading-relaxed text-muted-foreground">{content.togetherIntro}</p>
              <BulletList items={content.together} />
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Mijn verpleegkundige achtergrond helpt me om klachten en medische informatie goed
                te beoordelen. Vanuit mijn orthomoleculaire kennis kijk ik daarnaast naar de rol
                van voeding, voedingsstoffen en leefstijl.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Waar het iets toevoegt, kan aanvullend{' '}
                <Link
                  to="/labonderzoek"
                  className="underline underline-offset-4 transition-colors hover:text-primary-dark"
                >
                  laboratoriumonderzoek
                </Link>{' '}
                extra informatie geven. Die uitslagen neem ik mee in jouw begeleiding.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Laboratoriumonderzoek vervangt onderzoek door een arts niet.
              </p>
            </FadeIn>
          </div>
        </Section>

        {ctaBlock}

        <Section className="bg-card py-14 md:py-20">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-serif text-3xl text-foreground md:text-4xl">
              {content.faqHeading}
            </h2>
            <FaqList faqs={content.faqs} onBooking={openModal} />
          </FadeIn>
        </Section>

        {othersBlock}
        {disclaimerBlock}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-4 pb-14 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <Link
              to="/klachten"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Terug naar klachten
            </Link>

            <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {complaint.pageTitle}
            </h1>

            <div className="space-y-4 leading-relaxed text-muted-foreground">
              {complaint.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <FadeIn>
            <h2 className="mb-5 font-serif text-2xl text-foreground md:text-3xl">
              Hoe je het kunt herkennen
            </h2>
            <BulletList items={complaint.signals} />
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="mb-5 font-serif text-2xl text-foreground md:text-3xl">
              Waar we samen naar kijken
            </h2>
            <BulletList items={complaint.causes} />
          </FadeIn>
        </div>
      </Section>

      {ctaBlock}
      {othersBlock}
      {disclaimerBlock}
    </main>
  );
};

export default KlachtDetail;

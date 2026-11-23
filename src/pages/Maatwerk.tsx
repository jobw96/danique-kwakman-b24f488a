import React from 'react';
import { m } from 'framer-motion';
import { Check } from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { useBookingModal } from '@/components/BookingModal';
import daniqueMatchCall from '@/assets/danique-match-call.webp';

/**
 * Opschrift boven een kop: blauwe kleine kapitalen zonder achtergrond.
 * Op de blauwe band werkt blauw op blauw niet, daar staat het opschrift in
 * de cremekleur van de site.
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

/** Zelfde vinkje als op de trajectpagina's. */
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

/** Wat er in de match call aan bod komt. */
const matchCall = [
  'Waar je nu staat',
  'Wat je je nodig hebt',
  'Hoeveel sessies jij nodig hebt en in welk tijdsbestek',
];

const Maatwerk = () => {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-background text-muted-foreground">
      <section className="pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <FadeIn immediate>
              <SectionLabel text="1:1 begeleiding" />
              <h1 className="max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Maatwerk
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-deep md:text-xl">
                mijn maatwerk is geschikt als je behoefte hebt aan begeleiding die volledig bij jou past:
              </p>
              <CustomButton onClick={openModal} className="mt-8">
                Plan een gratis kennismaking
              </CustomButton>
            </FadeIn>

            <FadeIn immediate delay={0.15}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <ParallaxImage
                  src={daniqueMatchCall}
                  alt="Danique Kwakman tijdens een match call, waarin samen wordt bekeken welke begeleiding bij jou past"
                  title="Match call: samen kijken we welke begeleiding bij jou past"
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
              <SectionLabel text="De match call" />
              <h2 className="text-3xl text-foreground md:text-4xl">
                In het de match call  bespreken we:
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <CheckList items={matchCall} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <SectionLabel text="Benieuwd wat maatwerk voor jou betekent?" opDonker />
            <h2 className="text-3xl text-primary-foreground md:text-4xl">
              We starten met een gratis kennismaking
            </h2>
            <p className="mt-6 leading-relaxed text-primary-foreground/85">
              Tijdens de match call kijken we samen naar jouw situatie en naar wat je nodig hebt.
              Daarna weet je of begeleiding op maat bij je past.
            </p>
            <CustomButton variant="white" onClick={openModal} className="mt-8">
              Plan een gratis kennismaking
            </CustomButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Maatwerk;

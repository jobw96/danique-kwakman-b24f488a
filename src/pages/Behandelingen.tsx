import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ArrowRight } from 'lucide-react';
import daniqueGlowup from '@/assets/danique-glowup.jpg';
import daniqueDarm from '@/assets/danique-darm.jpg';
import daniqueRelaxed from '@/assets/danique-relaxed.jpg';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

interface TreatmentCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ image, title, description, href, delay = 0 }) => (
  <FadeIn delay={delay} className="flex flex-col">
    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>
    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{description}</p>
    <Link 
      to={href} 
      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
    >
      Bekijk traject <ArrowRight size={16} />
    </Link>
  </FadeIn>
);

const Behandelingen = () => {
  const treatments = [
    {
      image: daniqueGlowup,
      title: "1:1 Glow Up Traject",
      description: "Voor de vrouw die al bewust bezig is, maar blijft worstelen met vermoeidheid, hormonale disbalans of buikklachten",
      href: "/glowup"
    },
    {
      image: daniqueDarm,
      title: "1:1 Darmtraject Therapie",
      description: "Een diepgaand 1:1 traject incl. lab onderzoek om tot de kern van jouw klacht te komen.",
      href: "/darmtraject"
    },
    {
      image: daniqueRelaxed,
      title: "1:1 Reset & Recharge",
      description: "1 maand intensieve begeleiding voor meer energie, rust in je lijf en helderheid in je hoofd.",
      href: "/reset-recharge"
    }
  ];

  return (
    <div className="min-h-screen">
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeIn className="text-center mb-16">
            <SectionTag text="Aanbod" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Behandelingen</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ontdek welk traject het beste bij jouw situatie past. Elk traject is ontworpen om je te helpen terug te keren naar balans, energie en vitaliteit.
            </p>
          </FadeIn>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20">
            {treatments.map((treatment, index) => (
              <TreatmentCard 
                key={treatment.title}
                {...treatment}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* CTA Section */}
          <FadeIn className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Niet zeker welk traject bij je past?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Plan een gratis kennismakingsgesprek en ontdek samen welke aanpak het beste aansluit bij jouw situatie en doelen.
            </p>
            <a 
              href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Gratis kennismaking <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Behandelingen;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { ArrowRight } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import daniqueGlowup from '@/assets/danique-glowup.jpg';
import daniqueDarm from '@/assets/danique-darm.jpg';
import daniqueRelaxed from '@/assets/danique-relaxed.jpg';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const treatments = [
  {
    id: 'glowup',
    image: daniqueGlowup,
    title: "1:1 Glow Up Traject",
    description: "Voor de vrouw die al bewust bezig is, maar blijft worstelen met vermoeidheid, hormonale disbalans of buikklachten",
    href: "/glowup"
  },
  {
    id: 'darmtraject',
    image: daniqueDarm,
    title: "1:1 Darmtraject Therapie",
    description: "Een diepgaand 1:1 traject incl. lab onderzoek om tot de kern van jouw klacht te komen.",
    href: "/darmtraject"
  },
  {
    id: 'reset-recharge',
    image: daniqueRelaxed,
    title: "1:1 Reset & Recharge",
    description: "1 maand intensieve begeleiding voor meer energie, rust in je lijf en helderheid in je hoofd.",
    href: "/reset-recharge"
  }
];

const Behandelingen = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-4 bg-background">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionTag text="Aanbod" />
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Behandelingen</h1>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <FadeIn key={treatment.id} delay={index * 0.2} className="h-full">
              <Link to={treatment.href} className="h-full block">
                <motion.div 
                  className="bg-card rounded-2xl overflow-hidden shadow-sm border border-secondary/30 h-full flex flex-col cursor-pointer" 
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "hsl(var(--primary) / 0.3)"
                  }} 
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                >
                  <div className="h-64 overflow-hidden relative">
                    <ParallaxImage 
                      src={treatment.image} 
                      alt={`${treatment.title} - traject voor vrouwen met gezondheidsklachten`} 
                      className="w-full h-full" 
                    />
                    <motion.div 
                      className="absolute inset-0 bg-foreground/0" 
                      whileHover={{
                        backgroundColor: "hsl(var(--foreground) / 0.1)"
                      }} 
                      transition={{
                        duration: 0.5
                      }} 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-xl text-card-foreground mb-3">{treatment.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{treatment.description}</p>
                    <motion.div 
                      className="flex items-center text-primary font-medium mt-auto text-sm" 
                      whileHover={{
                        x: 8
                      }} 
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                    >
                      Bekijk traject <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
            <CustomButton variant="secondary">Gratis kennismaking</CustomButton>
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Behandelingen;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Instagram } from 'lucide-react';
import { Section } from '@/components/Section';
import { FadeIn, StaggerContainer } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Worden de trajecten vergoed?',
    answer: 'Nee, ondanks dat ik de juiste opleidingen heb gevolgd werk ik niet meer samen met zorgverzekeraars. Ik hoop dat mijn klanten de trajecten zien als een duurzame investering in zichzelf. Deze investering verdien je terug door de energie die je ervaart, hormonale balans, een blije buik en mentaal welzijn door een gezond lijf. Je gezondheid is elke cent waard.'
  },
  {
    question: 'Kan ik de trajecten ook online volgen?',
    answer: 'Ja zeker, zowel de intake als de vervolgafspraken kunnen in Hoorn of online via Zoom plaatsvinden.'
  },
  {
    question: 'Kan ik dit traject combineren met andere behandelingen of begeleiding?',
    answer: 'Ja, mijn aanpak is complementair en kan vaak gecombineerd worden met reguliere zorg of andere therapieën.'
  },
  {
    question: 'Zijn labonderzoeken (zoals bloed-, ontlasting- of hormoontesten) mogelijk?',
    answer: 'Ja, wanneer dat nodig is. Tijdens het traject kijken we samen of (extra) labonderzoek waarde toevoegt voor jouw situatie. Denk aan hormonentesten, darmonderzoek of vitamines.'
  },
  {
    question: 'Staat je gehele aanbod op je website?',
    answer: 'De basis van mijn aanbod vind je hier op de website. Andere programma\'s, gratis videotrainingen, masterclasses en trainingen deel ik niet altijd op mijn website. Wil je niets missen en op de hoogte blijven? Volg me dan op Instagram'
  }
];

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">
    {text}
  </div>
);

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <Section>
        <div className="text-center mb-16">
          <FadeIn>
            <SectionTag text="Veelgestelde vragen" />
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Vragen?
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hier vind je antwoorden op de meest gestelde vragen
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div
                className="border-b border-secondary/30 mb-4 last:mb-0"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.span
                    className="text-lg font-medium pr-4"
                    animate={{
                      color: openFaq === idx ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {item.question}
                  </motion.span>
                  <motion.div
                    animate={{
                      rotate: openFaq === idx ? 45 : 0,
                      scale: openFaq === idx ? 1.1 : 1,
                      color: openFaq === idx ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="shrink-0"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === idx ? "auto" : 0,
                    opacity: openFaq === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </StaggerContainer>

        <div className="text-center mt-16">
          <FadeIn>
            <p className="text-muted-foreground mb-6">
              Wil je niets missen en op de hoogte blijven van mijn programma's en trainingen?
            </p>
            <a 
              href="https://www.instagram.com/daniquekwakman/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <CustomButton variant="secondary" icon={true}>
                <Instagram className="w-4 h-4 mr-2" />
                Volg me op Instagram
              </CustomButton>
            </a>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default FAQ;

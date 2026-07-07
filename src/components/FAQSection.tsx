import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FadeIn, StaggerContainer } from '@/components/Animations';

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Worden de trajecten vergoed?',
    answer:
      'Nee, ondanks dat ik de juiste opleidingen heb gevolgd werk ik niet meer samen met zorgverzekeraars. Ik hoop dat mijn klanten de trajecten zien als een duurzame investering in zichzelf. Deze investering verdien je terug door de energie die je ervaart, hormonale balans, een blije buik en mentaal welzijn door een gezond lijf. Je gezondheid is elke cent waard.',
  },
  {
    question: 'Kan ik de trajecten ook online volgen?',
    answer:
      'Ja zeker, zowel de intake als de vervolgafspraken kunnen in Hoorn of online via Zoom plaatsvinden.',
  },
  {
    question: 'Kan ik dit traject combineren met andere behandelingen of begeleiding?',
    answer:
      'Ja, mijn aanpak is complementair en kan vaak gecombineerd worden met reguliere zorg of andere therapieën.',
  },
  {
    question: 'Zijn labonderzoeken (zoals bloed-, ontlasting- of hormoontesten) mogelijk?',
    answer:
      'Ja, wanneer dat nodig is. Tijdens het traject kijken we samen of (extra) labonderzoek waarde toevoegt voor jouw situatie. Denk aan hormonentesten, darmonderzoek of vitamines.',
  },
  {
    question: 'Staat je gehele aanbod op je website?',
    answer:
      "De basis van mijn aanbod vind je hier op de website. Andere programma's, gratis videotrainingen, masterclasses en trainingen deel ik niet altijd op mijn website. Wil je niets missen en op de hoogte blijven? Volg me dan op Instagram",
  },
];

export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <StaggerContainer className="max-w-3xl mx-auto">
      {FAQ_ITEMS.map((item, idx) => (
        <FadeIn key={idx} delay={idx * 0.05}>
          <motion.div
            className="border-b border-secondary/30 mb-4 last:mb-0"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <motion.button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              aria-expanded={openFaq === idx}
            >
              <motion.span
                className="text-lg font-medium pr-4"
                animate={{
                  color: openFaq === idx ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {item.question}
              </motion.span>
              <motion.div
                animate={{
                  rotate: openFaq === idx ? 45 : 0,
                  scale: openFaq === idx ? 1.1 : 1,
                  color:
                    openFaq === idx
                      ? 'hsl(var(--primary))'
                      : 'hsl(var(--muted-foreground))',
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
                height: openFaq === idx ? 'auto' : 0,
                opacity: openFaq === idx ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-6">
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        </FadeIn>
      ))}
    </StaggerContainer>
  );
};

export default FAQSection;

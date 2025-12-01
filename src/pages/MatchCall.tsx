import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import daniqueMatchCall from '@/assets/danique-match-call.jpg';
const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>;
const MatchCall = () => {
  return <div className="min-h-screen">
      <Section className="pt-4 min-h-[80vh] flex items-center bg-background">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              
              <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Gratis kennismakingsgesprek<span className="text-secondary">&</span> kennismakingsgesprek
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ben je benieuwd wat ik voor jou kan betekenen of twijfel je welk traject het beste bij jou past?
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Om daarachter te komen, plan ik graag een gratis kennismakingsgesprek van ongeveer 30 minuten met je in. Tijdens dit gesprek nemen we de tijd om jouw situatie te bespreken, vragen te beantwoorden, te kijken hoe mijn werkwijze jou kan helpen en om aan te voelen of we een match zijn. Het is geheel vrijblijvend, maar geeft zowel jou als mij een helder beeld van wat mogelijk is.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed font-medium">
                Klaar om de eerste stap te zetten naar jouw nieuwe way of life? Plan een kennismakingsgesprek in.
              </p>
              <CustomButton onClick={() => window.open('https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC', '_blank')}>
                Plan je kennismakingsgesprek
              </CustomButton>
            </FadeIn>
          </div>
          <div className="md:w-1/2 relative">
            <FadeIn delay={0.2} className="rounded-full overflow-hidden border-8 border-primary/20 shadow-xl">
              <img src={daniqueMatchCall} alt="Gratis kennismakingsgesprek met Danique Kwakman - ontdek welk traject bij jou past" className="w-full object-cover aspect-square" />
            </FadeIn>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full -z-10 opacity-30"></div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-secondary rounded-full -z-10"></div>
          </div>
        </div>
      </Section>
    </div>;
};
export default MatchCall;
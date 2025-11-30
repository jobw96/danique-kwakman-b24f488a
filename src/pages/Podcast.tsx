import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>;
const Podcast = () => {
  return <div className="min-h-screen">
      <Section className="bg-background pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionTag text="Nu te beluisteren" />
            <h1 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">Health & hormone secrets</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="text-left space-y-4 text-muted-foreground mb-12">
              <p className="text-center">
                In mijn podcast neem ik je mee in alles wat jij nodig hebt om je lichaam écht te begrijpen en je beter te voelen. Van hormonale balans tot darmgezondheid, van voeding en leefstijl tot kleine dagelijkse aanpassingen die een groot verschil maken.
              </p>
              <p className="text-center">
                Ik deel inzichten uit mijn praktijk, verhalen van vrouwen die hun energie en rust hebben teruggevonden en praktische tips die je direct kunt toepassen.
              </p>
              <p className="font-medium text-foreground text-center">
                Beluister hier mijn laatste aflevering.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="w-full">
              <iframe style={{
              borderRadius: '12px'
            }} src="https://open.spotify.com/embed/episode/7c1GreoBYmHnHHnlmlmkR4?utm_source=generator&t=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>;
};
export default Podcast;
import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import daniqueDarm from '@/assets/danique-darm.jpg';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const Darmtraject = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-32 md:pt-40 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="Specialisatie" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">1:1 Darmtraject Therapie</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Heb jij last van een opgeblazen buik, krampen of een onregelmatige stoelgang? 
                  Een gezonde darm is de basis van je algehele gezondheid.
                </p>
                <CustomButton>Herstel je darmen</CustomButton>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage 
                  src={daniqueDarm} 
                  alt="Danique - Darmtherapie" 
                  className="w-full h-full object-cover" 
                />
              </FadeIn>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Hoe ziet het traject eruit?</h2>
              <p className="text-muted-foreground">We gaan grondig te werk om de oorzaak te vinden.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { num: 1, title: "Uitgebreide Anamnese", desc: "We brengen je klachten, voeding en leefstijl gedetailleerd in kaart." },
                { num: 2, title: "EMB Bloedtest & Ontlastingstest", desc: "Meten is weten. We onderzoeken ontstekingen, intoleranties en darmflora." },
                { num: 3, title: "Persoonlijk Behandelplan", desc: "Een plan op maat met voeding, supplementen en leefstijladvies." },
                { num: 4, title: "Begeleiding & Resultaat", desc: "Intensieve begeleiding om te zorgen dat je darmen rustig worden en herstellen." }
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold shrink-0">{item.num}</div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Darmtraject;

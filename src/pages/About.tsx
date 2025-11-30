import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage, StaggerContainer } from '@/components/Animations';
import { GraduationCap } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import daniqueAbout from '@/assets/danique-about.jpg';
import daniqueRelaxed from '@/assets/danique-relaxed.jpg';
const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>;
const About = () => {
  return <div className="min-h-screen">
      <Section className="bg-background overflow-hidden pt-32 md:pt-40">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          <div className="lg:w-5/12 relative z-10">
            <FadeIn>
              <SectionTag text="Orthomoleculair Therapeut" />
              <h1 className="font-serif text-5xl lg:text-7xl mb-8 text-foreground leading-[1.1]">
                Ik ben <span className="italic">Danique</span>
              </h1>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6 font-light">
                <p>
                  Mijn passie voor gezondheid is ontstaan toen ik startte met mijn opleiding voor verpleegkunde. Ik heb patiënten mogen begeleiden en verzorgen in goede en slechte tijden. Een heel mooi vak!
                </p>
                <p>
                  Zelf ervaarde ik vanaf mijn tiener jaren al verschillende klachten waar ik maar niet vanaf kon komen. Klachten als acne, onregelmatige menstruaties, moodswings, vermoeidheid en darmklachten.
                </p>
              </div>
              <div className="mt-10">
                
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-7/12 relative">
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/5] lg:aspect-[3/4] rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md">
                <ParallaxImage src={daniqueAbout} alt="Danique" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/50 rounded-full -z-10"></div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="bg-white relative">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-12 items-stretch">
              <div className="md:w-5/12 flex flex-col gap-8">
                <div className="bg-background p-8 rounded-2xl border-l-4 border-secondary italic text-muted-foreground font-serif text-xl leading-relaxed shadow-sm">
                  "Rust, reinheid en regelmaat kreeg ik te horen. Maar ik miste daarbij de handvatten hoe ik dit kon realiseren."
                </div>
                <div className="rounded-2xl overflow-hidden flex-grow min-h-[300px]">
                  <ParallaxImage src={daniqueRelaxed} alt="Danique" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="md:w-7/12 space-y-6 text-muted-foreground leading-relaxed text-lg">
                <SectionTag text="Mijn Verhaal" />
                <h2 className="font-serif text-3xl text-foreground mb-4">Mijn reis naar balans</h2>
                <p>
                  In mijn twintiger jaren verergerde mijn klachten en ik snapte maar niet waarom leeftijdsgenoten altijd zoveel meer energie hadden. Na verschillende onderzoeken bij artsen kreeg ik net als veel anderen te horen dat dit er nu eenmaal bij hoort.
                </p>
                <p>
                  Ik ben uiteindelijk bij een orthomoleculair therapeut terecht gekomen, waar ik onder begeleiding mijn levensstijl en voedingspatroon omgooide maar vooral ook meer naar mijn lichaam ging luisteren. Enthousiast met mijn resultaten, besloot ik zelf ook mijn diploma tot orthomoleculair therapeut te behalen.
                </p>
                <p>
                  Door mijn kennis uit de reguliere zorg en de alternatieve geneeskunde heb ik een brede kijk op de gezondheidszorg en kan ik jou vol passie begeleiden. Ik heb mijn praktijk aan huis. Een praktijk waar ik samen met jou op zoek ga naar de oorzaak van jouw klachten en je begeleid naar een betere gezondheid en leefstijl die passend is voor jou!
                </p>
                <div className="pt-6">
                  <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
                    <CustomButton variant="secondary">Gratis kennismaking</CustomButton>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionTag text="Achtergrond" />
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Kennis & Opleidingen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ik houd mijn kennis actueel door regelmatig scholingen te volgen. Hier een overzicht van mijn achtergrond.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Verpleegkunde", "Orthomoleculair therapeut Basis", "Orthomoleculair therapeut Gevorderd", "Orthomoleculair Epigenetisch therapeut", "Energetische Morfologische Bloedtest (EMB)", "Bijscholing Fibromyalgie"].map((item, i) => <FadeIn key={i} className="bg-white p-6 rounded-xl border border-secondary/30 shadow-sm hover:border-primary/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background border border-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium text-lg leading-snug">{item}</h3>
                    <p className="text-muted-foreground text-sm mt-1">Gecertificeerd</p>
                  </div>
                </div>
              </FadeIn>)}
          </StaggerContainer>
        </div>
      </Section>
    </div>;
};
export default About;
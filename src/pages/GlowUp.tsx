import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Sparkles, Activity, Heart } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import daniqueGlowup from '@/assets/danique-glowup.jpg';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const GlowUp = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-32 md:pt-40 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="Exclusief Traject" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">1:1 Glow Up Traject</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Voor de vrouw die klaar is om de regie over haar gezondheid terug te pakken. 
                  Geen snelle fixes, maar een duurzame transformatie van binnenuit.
                </p>
                <CustomButton>Start jouw Glow Up</CustomButton>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage 
                  src={daniqueGlowup} 
                  alt="Danique - Glow Up" 
                  className="w-full h-full object-cover" 
                />
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Sparkles, title: "Hormonale Balans", desc: "We herstellen je natuurlijke cyclus en pakken PMS klachten bij de wortel aan." },
              { icon: Activity, title: "Energie Boost", desc: "Van vermoeid opstaan naar bruisen van energie, de hele dag door." },
              { icon: Heart, title: "Stralende Huid", desc: "Een zuivere huid komt van binnenuit. We pakken de interne oorzaken aan." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">Wat krijg je?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  "Intake van 90 minuten",
                  "Uitgebreide bloedanalyse",
                  "Persoonlijk voedingsplan",
                  "Supplementenadvies op maat",
                  "4 vervolgconsulten",
                  "E-mail ondersteuning"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Sparkles size={14} />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default GlowUp;

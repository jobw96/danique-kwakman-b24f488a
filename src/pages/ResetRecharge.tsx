import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Check, X, MessageCircle, ClipboardList, Zap, CalendarCheck, Heart, Sparkles } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { Countdown } from '@/components/Countdown';
import daniqueKleedZand from '@/assets/danique-kleed-zand.jpg';

const JANUARY_END = new Date('2026-02-01T00:00:00');

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const ResetRecharge = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="1:1 Reset en Recharge" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-4 leading-tight">Reset & Recharge</h1>
                <p className="text-xl text-primary font-medium mb-6">1 maand 1:1 begeleiding voor meer energie, rust in je lijf en helderheid in je hoofd.</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Voel je je vaak moe, opgeblazen of uit balans door hormonale schommelingen? Wil je eindelijk grip krijgen op je energie, je buik en je gemoedstoestand?
                  </p>
                  <p>
                    Reset & Recharge is jouw korte, gerichte traject om je lichaam weer te leren begrijpen, rust te creëren en energie terug te krijgen. Geen overdaad aan theorie, maar concrete inzichten, praktische stappen en voelbare resultaten, stap voor stap en passend bij jou.
                  </p>
                  <p>
                    Compact en doelgericht, waarbij we in een maand krachtige stappen zetten richting verandering die blijft.
                  </p>
                </div>
                <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
                  <CustomButton>Gratis kennismaking</CustomButton>
                </a>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage 
                  src={daniqueKleedZand} 
                  alt="Reset & Recharge traject - meer energie en rust in 1 maand met Danique Kwakman" 
                  className="w-full h-full object-cover" 
                />
              </FadeIn>
            </div>
          </div>

          {/* Voor wie is dit traject? */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Voor wie is dit traject?</h2>
              <p className="text-muted-foreground mb-6">Dit traject past bij jou als je:</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vermoeidheid, stemmingswisselingen of PMS ervaart",
                  "Vaak een opgeblazen gevoel hebt of buikklachten na maaltijden",
                  "Helder wilt krijgen wat jouw lichaam écht nodig heeft",
                  "Energie, rust en balans wilt ervaren zonder maandenlange trajecten",
                  "Je lichaam weer wilt leren vertrouwen en keuzes wilt maken vanuit gemak en gevoel"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-[#6B7B8A]" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Wat je voelt en bereikt in 1 maand */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wat je voelt en bereikt in 1 maand</h2>
              <ul className="space-y-3">
                {[
                  "Meer energie en lichtheid in je lijf",
                  "Rust in je hoofd en minder stress",
                  "Minder PMS, stemmingswisselingen of hormonale klachten",
                  "Vrijheid om te eten en te leven zonder angst voor klachten",
                  "Helderheid over wat jouw lichaam nodig heeft",
                  "Zelfvertrouwen om moeiteloos keuzes te maken en je lichaam te vertrouwen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center mt-0.5">
                      <Heart size={14} className="text-[#6B7B8A]" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Hoe het traject eruitziet */}
          <FadeIn className="mb-20">
            <div className="text-center mb-12">
              <SectionTag text="Het Proces" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Hoe het traject eruitziet</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  step: "1", 
                  title: "Intensieve 1:1 begeleiding", 
                  icon: Sparkles,
                  desc: "Gedurende 1 maand werk je samen met mij aan jouw persoonlijke doelen en uitdagingen." 
                },
                { 
                  step: "2", 
                  title: "Persoonlijk plan", 
                  icon: ClipboardList,
                  desc: "Op basis van voeding, leefstijl, slaap, hormonale en darmgezondheid stel ik een plan op dat volledig bij jou past." 
                },
                { 
                  step: "3", 
                  title: "Kick-off sessie", 
                  icon: Zap,
                  desc: "We starten met een sessie waarin we direct aan de slag gaan met jouw plan." 
                },
                { 
                  step: "4", 
                  title: "1:1 Evaluatie na 4 weken", 
                  icon: CalendarCheck,
                  desc: "We bespreken je voortgang, stellen bij waar nodig en optimaliseren je resultaten." 
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center">
                      <item.icon size={20} className="text-[#6B7B8A]" />
                    </div>
                    <div>
                      <span className="text-primary font-medium text-sm">{item.step}.</span>
                      <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <FadeIn delay={0.4} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center">
                    <MessageCircle size={20} className="text-[#6B7B8A]" />
                  </div>
                  <div>
                    <span className="text-primary font-medium text-sm">5.</span>
                    <h3 className="font-serif text-xl text-foreground mb-2">WhatsApp-support</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Gedurende het hele traject kun je mij bereiken voor vragen en ondersteuning.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.5} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center">
                    <Check size={20} className="text-[#6B7B8A]" />
                  </div>
                  <div>
                    <span className="text-primary font-medium text-sm">6.</span>
                    <h3 className="font-serif text-xl text-foreground mb-2">Praktische tools</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Inzichten en tools die je direct kunt toepassen in je dagelijks leven.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          {/* Investering */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Investering</h2>
              <p className="text-muted-foreground line-through mb-1">€444</p>
              <p className="text-4xl md:text-5xl font-serif text-primary mb-2">€379</p>
              <p className="text-sm text-primary font-medium mb-4">✨ Nieuwjaarsactie – geldig t/m 31 januari</p>
              <Countdown targetDate={JANUARY_END} />
              <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
                <CustomButton>Plan een gratis kennismaking</CustomButton>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default ResetRecharge;

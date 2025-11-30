import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { GraduationCap, Heart, Sparkles } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import daniqueAbout from '@/assets/danique-about.jpg';
import daniqueRelaxed from '@/assets/danique-relaxed.jpg';
import daniqueBeach from '@/assets/danique-beach.png';
import daniqueWalking from '@/assets/danique-walking.jpg';
const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>;
const About = () => {
  return <div className="min-h-screen">
      <Section className="pt-32 md:pt-40 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="Over mij" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  Hi, ik ben <span className="italic">Danique</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Ik help vrouwen hun lichaam opnieuw te begrijpen en stap voor stap van <strong>overleven naar leven</strong> te gaan, met mijn unieke <strong>CIRCLE-methode</strong>. Deze methode helpt je klachten te doorgronden en duurzame balans te creëren, afgestemd op jouw energie, ritme en leven.
                </p>
                <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
                  <CustomButton>Gratis kennismaking</CustomButton>
                </a>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage src={daniqueAbout} alt="Danique Kwakman" className="w-full h-full object-cover" />
              </FadeIn>
            </div>
          </div>

          {/* Overleven naar leven */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-2/3">
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Overleven naar leven</h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Vanaf mijn tienerjaren voelde het alsof ik <strong>aan het overleven was</strong>. Mijn hormonen schommelden alle kanten op en ik ervaarde allerlei vage klachten die ik maar niet kon oplossen: acne, onregelmatige en uitblijvende menstruaties, moodswings, opgeblazen buiken, extreme vermoeidheid en darmklachten.
                    </p>
                    <p>
                      In mijn twintiger jaren werden de klachten erger. Na diverse onderzoeken bij artsen kreeg ik vaak te horen dat het "er nu eenmaal bij hoort" en het advies: rust, reinheid en regelmaat. Maar hoe ik dat concreet kon toepassen? Daar kreeg ik geen handvatten voor.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <ParallaxImage src={daniqueBeach} alt="Danique op het strand" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Mijn achtergrond en passie */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-5/12">
              <FadeIn delay={0.1} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage src={daniqueRelaxed} alt="Danique relaxed" className="w-full h-full object-cover" />
              </FadeIn>
            </div>
            <div className="lg:w-7/12">
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Mijn achtergrond en passie</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Ondanks mijn kennis als <strong>verpleegkundige</strong> en alles wat ik leerde van de acute en reguliere zorg, ontdekte ik dat er veel meer te leren viel over hoe vrouwen hun lichaam écht kunnen begrijpen en ondersteunen.
                  </p>
                  <p>
                    Toen ik zelf vastliep met klachten, besloot ik mijn kennis verder te verdiepen. Ik volgde talloze scholingen en dook in voeding, leefstijl, hormonen en de vrouwelijke cyclus. Niet alleen om mezelf te helpen, maar vooral om <strong>andere vrouwen te laten ervaren dat het ook anders kan</strong>.
                  </p>
                  <p>
                    Door mijn werk heb ik geleerd hoe belangrijk het is om <strong>holistisch naar een mens te kijken</strong>. Mijn manier van werken is persoonlijk en praktisch, maar altijd met aandacht voor jouw unieke situatie.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Inzicht cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30">
              <div className="w-14 h-14 min-w-14 min-h-14 flex-shrink-0 bg-[#FDF8F3] rounded-full flex items-center justify-center mb-6">
                <Heart size={24} className="text-[#6B7B8A]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Inzicht in cyclus</h3>
              <p className="text-muted-foreground">
                Wanneer je je cyclus leert volgen en ondersteunen, krijg je veel meer grip op je energie, stemming en dagelijkse keuzes. Kleine, gerichte aanpassingen maken een groot verschil in hoe je je voelt.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30">
              <div className="w-14 h-14 min-w-14 min-h-14 flex-shrink-0 bg-[#FDF8F3] rounded-full flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-[#6B7B8A]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Darmen in balans</h3>
              <p className="text-muted-foreground">
                Een gezonde darm ondersteunt niet alleen een goede spijsvertering, maar ook de productie van serotonine, het gelukshormoon. Dit betekent dat je je rustiger, gelukkiger en energieker voelt.
              </p>
            </FadeIn>
          </div>

          {/* Mijn werkwijze */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-2/3">
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Mijn werkwijze</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Mijn unieke <strong>CIRCLE-methode</strong> helpt vrouwen stap voor stap naar meer inzicht, energie en balans te werken. Op een manier die past bij jouw lichaam, energie en leven.
                  </p>
                  <a href="/method">
                    <CustomButton variant="secondary">Ontdek de CIRCLE-methode</CustomButton>
                  </a>
                </div>
                <div className="lg:w-1/3">
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    <ParallaxImage src={daniqueWalking} alt="Danique wandelend" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Opleidingen */}
          <FadeIn className="mb-20">
            <div className="text-center mb-12">
              <SectionTag text="Achtergrond" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Opleidingen & bijscholing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Daarnaast volg ik regelmatig bijscholingen om mijn kennis op hoog niveau te houden.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Verpleegkunde", "Orthomoleculaire therapeut Basis", "Orthomoleculair therapeut Gevorderd", "Orthomoleculaire Epigenetisch therapeut"].map((item, i) => <FadeIn key={i} delay={i * 0.1} className="bg-white p-6 rounded-xl border border-secondary/30 shadow-sm hover:border-primary/50 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GraduationCap size={20} className="text-[#6B7B8A]" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium leading-snug">{item}</h3>
                      
                    </div>
                  </div>
                </FadeIn>)}
            </div>
          </FadeIn>

          {/* Waarom */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Waarom ik doe wat ik doe</h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Ik weet hoe het is om constant moe te zijn, met klachten te worstelen en het gevoel te hebben dat niemand je echt begrijpt. Daarom combineer ik mijn kennis en ervaring om vrouwen te helpen ontdekken hoe ze hun lichaam écht kunnen begrijpen, weer vertrouwen kunnen krijgen in hun eigen lijf en duurzaam in balans kunnen komen.
              </p>
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wil je kennismaken?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Wil je ontdekken hoe ik jou kan helpen en hoe mijn begeleiding eruitziet? <strong>Plan een gratis kennismaking</strong> of <strong>volg me op Instagram</strong> voor inspiratie, tips en praktische adviezen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
                  <CustomButton>Gratis kennismaking</CustomButton>
                </a>
                <a href="https://www.instagram.com/daniquekwakman/" target="_blank" rel="noopener noreferrer">
                  <CustomButton variant="secondary">Volg me op Instagram</CustomButton>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>;
};
export default About;
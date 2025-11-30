import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Sparkles, Activity, Heart, Check, X, MessageCircle, ClipboardList, Users, Zap } from 'lucide-react';
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
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="1:1 Traject" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-4 leading-tight">1:1 Glow Up</h1>
                <p className="text-xl text-primary font-medium mb-6">Terug naar een lijf dat met je meebeweegt</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Voel je dat je klachten je afremmen, zoals vermoeidheid, hormonale onrust of buikpijn, terwijl je diep van binnen weet dat er méér in je zit? Merk je dat je vastloopt in oude patronen of steeds opnieuw dezelfde uitdagingen tegenkomt, zonder echt vooruitgang te boeken?
                  </p>
                  <p>
                    In dit traject brengen we rust, richting en helderheid terug in jouw systeem. Met een combi van <strong>orthomoleculaire kennis</strong> en <strong>persoonlijke coaching</strong> help ik je begrijpen wat er onder je klachten ligt en hoe je weer in balans komt.
                  </p>
                  <p>
                    Niet om een betere versie van jezelf te worden, maar om <strong>volledig jezelf te zijn</strong>: energiek, ontspannen en stevig in je eigen ritme.
                  </p>
                  <p>
                    Dit is geen quick fix. In dit traject leer je luisteren naar je lichaam, begrijpen wat er onder je klachten zit en weer in je eigen ritme te komen. <strong>Je leert weer wat je lichaam nodig heeft, stap voor stap.</strong>
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
                  src={daniqueGlowup} 
                  alt="Danique - Glow Up" 
                  className="w-full h-full object-cover" 
                />
              </FadeIn>
            </div>
          </div>

          {/* Wat dit traject voor je betekent */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wat dit traject voor je betekent</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                <p>
                  We bouwen samen aan een fundament dat klopt met wie jij bent. Geen quick fix, geen overweldigende to-do's, maar een afgestemde, cyclische aanpak waarin jij je lichaam opnieuw leert begrijpen.
                </p>
                <p>
                  Dit traject is voor jou als je merkt dat je klachten je tegenhouden: vermoeidheid, hormonale onrust, buik- of darmklachten, stemmingswisselingen of een opgejaagd gevoel. Misschien voel je dat je méér in je hebt, maar oude patronen, onzekerheid of chronische klachten houden je tegen.
                </p>
              </div>
              
              <h3 className="font-serif text-xl text-foreground mb-4">Na dit traject:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "voel je je energieker, helderder en meer jezelf",
                  "begrijp je wat je lichaam nodig heeft en waarom",
                  "verdwijnen vage klachten en snap je eindelijk waar ze vandaan komen",
                  "maak je keuzes die passen bij jouw cyclus, ritme en leven",
                  "wordt gezondheid iets waar je op kunt vertrouwen",
                  "ontstaat er ruimte: voor jezelf, je werk, je gezin en je dromen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-[#6B7B8A]" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl text-foreground mb-4">Dit traject past bij jou als je verlangt naar:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "meer energie, zodat je je dagen weer vol vertrouwen en focus kunt doorkomen",
                  "een hormonale balans die zorgt voor zelfvertrouwen, stabiliteit en plezier in het leven",
                  "rust in je lijf én hoofd, zodat je weer helder kunt denken en voelen",
                  "een leven zonder lichamelijke klachten en piekergedachten",
                  "een leefstijl die moeiteloos voelt en echt bij jou past",
                  "een lijf dat je ondersteunt, zodat je keuzes kunt maken zonder twijfel"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center mt-0.5">
                      <Heart size={14} className="text-[#6B7B8A]" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl text-foreground mb-4">En als je klaar bent om:</h3>
              <ul className="space-y-3">
                {[
                  "voorgoed afscheid te nemen van vage klachten die je beperken",
                  "je energie en motivatie terug te vinden",
                  "weer vol vertrouwen je dagen te plannen en je doelen te behalen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center mt-0.5">
                      <Zap size={14} className="text-[#6B7B8A]" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-muted-foreground mt-8">
                Je staat open voor nieuwe inzichten, bent bereid om stap voor stap te groeien en wilt eindelijk begrijpen wat je lichaam probeert te vertellen.
              </p>
            </div>
          </FadeIn>

          {/* Wanneer dit traject niet passend is */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wanneer dit traject niet passend is</h2>
              <p className="text-muted-foreground mb-6">Dit traject is niet voor jou wanneer:</p>
              <ul className="space-y-3">
                {[
                  "je geen ruimte voelt om naar jezelf te kijken",
                  "je liever snelle oplossingen wilt dan duurzame verandering",
                  "je niet wilt investeren in voeding, leefstijl en herstel",
                  "je niet klaar bent om verantwoordelijkheid te nemen voor de stappen die nodig zijn"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                      <X size={14} className="text-red-400" />
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
                  title: "Kennismaking — online", 
                  icon: Users,
                  desc: "Tijdens dit gesprek nemen we de tijd om jouw situatie te bespreken, al je vragen te beantwoorden en te ontdekken hoe mijn werkwijze jou kan helpen. Ook voelen we aan of er een klik is en of we een goede match zijn. Het gesprek is volledig vrijblijvend, maar geeft jou én mij een helder beeld van wat mogelijk is." 
                },
                { 
                  step: "2", 
                  title: "Intake", 
                  icon: ClipboardList,
                  desc: "Tijdens de intake duiken we echt de diepte in: hormonale gezondheid, darmen, cyclus, voeding, leefstijl en belastbaarheid. Met behulp van uitgebreide vragenlijsten en de volledige CIRCLE-methode brengen we je gezondheid volledig in kaart, ontdekken we waar je klachten vandaan komen en bepalen we samen welke richting het traject op gaat en wat jij nodig hebt." 
                },
                { 
                  step: "3", 
                  title: "Twee vervolgconsulten", 
                  icon: Activity,
                  desc: "Volledig afgestemd op jouw proces, tempo en doelen. Tijdens deze sessies bespreken we de voortgang, passen we het plan aan waar nodig en geven we praktische handvatten om nieuwe inzichten direct toe te passen. Zo blijf je stappen maken en merk je echte verandering." 
                },
                { 
                  step: "4", 
                  title: "WhatsApp-support", 
                  icon: MessageCircle,
                  desc: "Voor extra begeleiding tussen de consulten door. Precies wanneer je het nodig hebt." 
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
            <FadeIn delay={0.4} className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-secondary/30">
              <h4 className="font-medium text-foreground mb-3">Exclusief</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>– eventuele aanvullende onderzoeken</li>
                <li>– supplementen</li>
              </ul>
            </FadeIn>
          </FadeIn>

          {/* Wat zit erbij? */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Wat zit erbij?</h2>
              <div className="space-y-4">
                {[
                  "Online kennismakingsgesprek om elkaar te leren kennen, je vragen te bespreken en jouw hulpvraag helder te krijgen",
                  "3 persoonlijke 1:1 sessies van 60 minuten",
                  "Intensieve begeleiding en support via WhatsApp",
                  "Persoonlijk behandelplan op basis van o.a. voeding, leefstijl, mindset, je cyclus en darmgezondheid",
                  "Praktische tools en opdrachten om groei tastbaar te maken",
                  "Hulpmiddelen die je ondersteunen tijdens het traject, zoals cyclus-trackers, receptenboeken en werkboeken"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-[#6B7B8A]" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Investering */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Investering</h2>
              <p className="text-4xl md:text-5xl font-serif text-primary mb-2">€888</p>
              <p className="text-muted-foreground mb-8">excl. btw</p>
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

export default GlowUp;

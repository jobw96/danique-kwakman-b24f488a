import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Check, X, Users, ClipboardList, Activity, MessageCircle, Layers, Heart, Zap } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { Countdown } from '@/components/Countdown';
import daniqueDarm from '@/assets/danique-darm.jpg';

const JANUARY_END = new Date('2026-02-01T00:00:00');

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const Darmtraject = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="1:1 Traject" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">1:1 Darmtherapie</h1>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Heb je vaak last van een opgeblazen gevoel, wisselende stoelgang, buikpijn of vermoeidheid? Word je beperkt door je darmklachten, voel je je onzeker over wat je wel of niet kunt eten en beïnvloedt dit je dagelijks leven?
                  </p>
                  <p>
                    In dit traject zoeken we naar de oorzaak van je klachten. Niet door standaarddiëten of snelle oplossingen, maar met gericht onderzoek, een onderbouwde aanpak die rekening houdt met jouw lichaam, leefstijl en energie. Zo krijg je inzicht, grip en rust in je spijsvertering en algehele gezondheid.
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
                  src={daniqueDarm} 
                  alt="1:1 Darmtraject - darmtherapie en spijsverteringsklachten behandelen met Danique Kwakman" 
                  className="w-full h-full object-cover" 
                />
              </FadeIn>
            </div>
          </div>

          {/* Wat dit traject voor je betekent */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wat dit traject voor je betekent</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "duidelijkheid over je darmgezondheid en inzicht in wat jouw klachten veroorzaakt",
                  "gedag zeggen tegen buikpijn, constipatie, diarree, winderigheid of een opgeblazen gevoel",
                  "betere opname van voedingsstoffen, waardoor je meer energie en veerkracht ervaart",
                  "inzicht in welke voeding, leefstijl en routines jouw lichaam ondersteunen",
                  "een uitgebreid darmonderzoek en voedselintolerantietest om precies te achterhalen waar je gevoelig voor bent, wat je lichaam nodig heeft en waar de oorzaak ligt van je klachten",
                  "praktische stappen en persoonlijke begeleiding om klachten stap voor stap te verhelpen",
                  "begeleiding die afgestemd is op jouw energie, tempo en situatie, zodat verandering haalbaar en duurzaam is",
                  "meer rust en vertrouwen in je lichaam, zodat je weet hoe je je spijsvertering en gezondheid kunt ondersteunen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-[#6B7B8A]" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl text-foreground mb-4">Dit traject past bij jou als je:</h3>
              <ul className="space-y-3">
                {[
                  "al langere tijd darmklachten ervaart die je dagelijks leven beïnvloeden",
                  "merkt dat voeding, stress of je cyclus invloed heeft op hoe je buik reageert en hoe je je voelt",
                  "wilt begrijpen wat jouw lichaam echt nodig heeft en hoe je klachten kunt verminderen",
                  "bereid bent stap voor stap veranderingen door te voeren met begeleiding en praktische tools",
                  "klaar bent om te investeren in jezelf en je gezondheid, zodat je lichaam weer optimaal kan functioneren en het leven nog 100x leuker wordt"
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

          {/* Wanneer dit traject niet passend is */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wanneer dit traject niet passend is</h2>
              <ul className="space-y-3">
                {[
                  "je verwacht snelle oplossingen zonder commitment",
                  "je wilt geen inzicht of begeleiding bij voeding, leefstijl of herstel",
                  "je bent niet bereid om naar je lichaam te kijken en stappen te gaan zetten om je fantastisch te voelen"
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
                  desc: "We starten met een vrijblijvend gesprek waarin we jouw situatie bespreken. Je kunt al je vragen stellen, we bekijken samen wat jij nodig hebt en voelen aan of er een klik is. Het geeft zowel jou als mij helderheid over de mogelijkheden en of dit traject bij jou past." 
                },
                { 
                  step: "2", 
                  title: "Intake — online of in Hoorn", 
                  icon: ClipboardList,
                  desc: "Tijdens de intake duiken we echt de diepte in. We bespreken je darmgezondheid, voeding, leefstijl, belastbaarheid en hormonale balans. Met uitgebreide vragenlijsten en jouw persoonlijke gezondheidsgeschiedenis brengen we volledig in kaart waar je klachten vandaan komen en bepalen we samen welke richting het traject op gaat. Zo ontstaat een duidelijk, persoonlijk plan dat afgestemd is op jouw lichaam en situatie." 
                },
                { 
                  step: "3", 
                  title: "Darmtherapie in fases", 
                  icon: Layers,
                  desc: "Het traject doorloopt vier fases, die we stap voor stap afstemmen op jouw situatie: Voorbereiden, Opruimen, Versterken en Stabiliseren. Elke fase wordt ondersteund met een persoonlijk behandelplan, inclusief voeding, leefstijladvies, praktische opdrachten en hulpmiddelen zoals werkboeken, trackers en recepten om de verandering tastbaar te maken." 
                },
                { 
                  step: "4", 
                  title: "Vervolgconsulten", 
                  icon: Activity,
                  desc: "Tijdens de persoonlijke 1:1 sessies evalueren we je voortgang, passen we het plan aan waar nodig en bespreken we praktische handvatten die je direct kunt toepassen. Alles volledig afgestemd op jouw tempo en doelen, zodat je stap voor stap écht verschil merkt." 
                },
                { 
                  step: "5", 
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
          </FadeIn>

          {/* 4 Fases van de darmtherapie */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">4 fases van de darmtherapie</h2>
              <p className="text-muted-foreground mb-8">
                Het 1:1 Darmtherapie traject duurt ± 6 maanden. Afhankelijk van jouw situatie kan dit langer of korter zijn. Op basis van jouw labonderzoek doorlopen we de 4 fases van de darmtherapie.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "Fase 1: Voorbereiding", 
                    duration: "4-8 weken",
                    desc: "We optimaliseren: lever, nieren en lymfesysteem, zodat je klaar bent voor de volgende fase."
                  },
                  { 
                    title: "Fase 2: Opruimen", 
                    duration: "8 weken",
                    desc: "We elimineren ziekmakende micro-organismen en virussen."
                  },
                  { 
                    title: "Fase 3: Versterken", 
                    duration: "12 weken",
                    desc: "Herstellen van het darmslijmvlies en opbouwen van een sterk microbioom."
                  },
                  { 
                    title: "Fase 4: Stabiliseren", 
                    duration: "12-24 weken",
                    desc: "Ondersteuning van de darmflora en advies om blijvend resultaat te behouden."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl border border-secondary/30 bg-background/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 min-w-8 min-h-8 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center">
                        <Zap size={14} className="text-[#6B7B8A]" />
                      </div>
                      <span className="text-primary text-sm font-medium">{item.duration}</span>
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Wat zit erbij? */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Wat zit erbij?</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Online kennismakingsgesprek om elkaar te leren kennen, je vragen te bespreken en jouw hulpvraag helder te krijgen",
                  "5 persoonlijke 1:1 sessies van 60 minuten",
                  "Intensieve begeleiding en support via WhatsApp",
                  "Persoonlijk behandelplan op basis van o.a. jouw lab uitslagen, voeding, leefstijl, mindset, je cyclus en darmgezondheid",
                  "Ontlastingsonderzoek (t.w.v. €490)",
                  "Voedselintolerantietest van 31 voedingsmiddelen (t.w.v. €115)",
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

              <div className="p-6 rounded-xl border border-secondary/30 bg-background/50">
                <h4 className="font-medium text-foreground mb-3">Exclusief</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>– Eventuele aanvullende onderzoeken of her-testen</li>
                  <li>– Supplementen</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Investering */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Investering</h2>
              <p className="text-muted-foreground line-through mb-1">€2100</p>
              <p className="text-4xl md:text-5xl font-serif text-primary mb-2">€1799</p>
              <p className="text-sm text-primary font-medium mb-4">✨ Nieuwjaarsactie – geldig t/m 31 januari</p>
              <Countdown targetDate={JANUARY_END} />
              <p className="text-sm text-muted-foreground mb-8">
                Inclusief: Ontlastingsonderzoek (€490) + intolerantietest 31 voedingsmiddelen (€115)
              </p>
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

export default Darmtraject;

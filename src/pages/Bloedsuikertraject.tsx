import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Check, X, Users, ClipboardList, Activity, MessageCircle, Heart, Zap } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import daniqueBloedsuiker from '@/assets/danique-relaxed.webp';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const Bloedsuikertraject = () => {
  const { openModal } = useBookingModal();
  return (
    <div className="min-h-screen">
      <SEO
        title="1:1 Bloedsuikertraject | Glucosesensor & begeleiding"
        description="In 2 weken naar stabiele energie, minder cravings en meer vertrouwen in je lichaam. Persoonlijk bloedsuikertraject met glucosesensor door Danique Kwakman."
        canonicalUrl="/bloedsuikertraject"
      />
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="1:1 Traject" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">1:1 Bloedsuikertraject</h1>
                <p className="text-lg text-foreground/80 mb-4">In 2 weken tijd naar stabiele energie, minder cravings en meer vertrouwen in je lichaam.</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Je doet je best om gezond te eten, kiest bewust voor voedzame maaltijden, probeert minder te snoepen en let op wat je lichaam nodig heeft.
                  </p>
                  <p>
                    Toch blijf je last houden van energiedips, cravings, brain fog, moeite met afvallen, een opgeblazen gevoel, darmklachten, acne, PCOS of insulineresistentie, of slecht (in)slapen.
                  </p>
                  <p>
                    Geen enkel lichaam reageert hetzelfde op voeding. Met een 14-daagse glucosesensor kijken we hoe jouw lichaam reageert op voeding, beweging, stress en slaap — en welke kleine veranderingen een groot verschil maken.
                  </p>
                </div>
                <CustomButton onClick={openModal}>Gratis kennismaking</CustomButton>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage
                  src={daniqueBloedsuiker}
                  alt="1:1 Bloedsuikertraject met glucosesensor door Danique Kwakman"
                  className="w-full h-full object-cover"
                />
              </FadeIn>
            </div>
          </div>

          {/* Na dit traject */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Na dit traject</h2>
              <ul className="space-y-3 mb-8">
                {[
                  'begrijp je hoe jouw lichaam reageert op voeding, beweging, stress en slaap',
                  'weet je welke gewoontes zorgen voor energiepieken en energiedips',
                  'zijn cravings en snaaimomenten verminderd',
                  'voel je je langer verzadigd na maaltijden',
                  'heb je meer vertrouwen in de signalen van jouw lichaam',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-[#6B7B8A]" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-xl text-foreground mb-4">Dit past bij jou als je verlangt naar:</h3>
              <ul className="space-y-3">
                {[
                  'meer energie, zodat je je dagen weer met focus en plezier kunt beleven',
                  'minder behoefte aan suiker en tussendoortjes',
                  'rust rondom eten',
                  'meer inzicht in jouw lichaam',
                  'een gezonde relatie met voeding',
                  'een leefstijl die moeiteloos voelt en echt bij jou past',
                  'een lichaam dat je ondersteunt in plaats van tegenwerkt',
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

          {/* Niet passend */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wanneer dit traject niet passend is</h2>
              <ul className="space-y-3">
                {[
                  'je wilt alleen een glucosesensor dragen zonder begeleiding',
                  'je bent op zoek naar een snel dieet of tijdelijke oplossing',
                  'je wilt geen ruimte maken voor verandering in voeding en leefstijl',
                  'je bent niet bereid om twee weken actief inzicht te krijgen in jouw lichaam',
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
                  step: '1',
                  title: 'Kennismaking',
                  icon: Users,
                  desc: 'We nemen de tijd om jouw situatie te bespreken, al je vragen te beantwoorden en te ontdekken of dit traject bij jouw hulpvraag past. Het gesprek is volledig vrijblijvend.',
                },
                {
                  step: '2',
                  title: 'Intake & plaatsing glucosesensor',
                  icon: ClipboardList,
                  desc: 'We duiken de diepte in: voeding, leefstijl, energie, slaap, stress, beweging en klachten via de CIRCLE-methode. Daarna plaatsen we de glucosesensor pijnloos op de achterkant van je bovenarm. De eerste week verander je bewust niets, zodat we een eerlijk beeld krijgen.',
                },
                {
                  step: '3',
                  title: 'Check-in na 1 week',
                  icon: Activity,
                  desc: 'We bespreken je eerste resultaten, analyseren je glucosewaarden en patronen. Je ontvangt persoonlijke adviezen en gaat hiermee aan de slag tijdens de tweede week.',
                },
                {
                  step: '4',
                  title: 'Eindconsult na 2 weken',
                  icon: Zap,
                  desc: 'We bekijken het volledige proces, vergelijken de resultaten, bespreken jouw ervaringen en maken een persoonlijk plan waarmee je verder kunt.',
                },
                {
                  step: '5',
                  title: 'WhatsApp-support',
                  icon: MessageCircle,
                  desc: 'Voor extra begeleiding tussen de consulten door. Precies wanneer je het nodig hebt.',
                },
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

          {/* Wat zit erbij */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Wat zit erbij?</h2>
              <div className="space-y-4">
                {[
                  'Online kennismakingsgesprek om elkaar te leren kennen en jouw hulpvraag helder te krijgen',
                  'Uitgebreide intake',
                  'Analyse van jouw persoonlijke glucosegegevens',
                  'Check-in na 1 week',
                  'Eindconsult na 2 weken',
                  'Persoonlijk plan op basis van voeding, leefstijl en jouw resultaten',
                  'Begeleiding via WhatsApp bij behoefte',
                  'Praktische tools en boodschappenlijst',
                  'Weekmenu dat zorgt voor een stabiele bloedsuikerspiegel',
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
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Investering</h2>
              <p className="text-5xl md:text-6xl font-serif text-primary mb-8">€325</p>
              <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Bloedsuikertraject;

import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Activity, Heart, Check, X, MessageCircle, ClipboardList, Users, Zap } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { Testimonials } from '@/components/Testimonials';

import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import daniqueGlowup from '@/assets/danique-glowup.webp';

const HORMOON_TESTIMONIALS = [
  {
    id: 'h1',
    name: 'Cliënt',
    rating: 5,
    image: '',
    text: 'Ik moet bijna ongesteld worden, maar heb echt bijna geen last meer van PMS klachten deze maand. Stuk minder stemmingswisselingen en ook meer rust thuis daardoor. Het eten gaat ook goed.',
  },
  {
    id: 'h2',
    name: 'Cliënt',
    rating: 5,
    image: '',
    text: 'Meer rust in mijn hoofd, minder buikpijn en minder last van PMS.',
  },
  {
    id: 'h3',
    name: 'Cliënt',
    rating: 5,
    image: '',
    text: 'Mijn laatste menstruatie was echt een stuk minder pijnlijk, dus dat geeft heel veel rust en positiviteit.',
  },
  {
    id: 'h4',
    name: 'Cliënt',
    rating: 5,
    image: '',
    text: 'Ik kwam bij Danique met ernstige menstruatieklachten en een zeer onregelmatige cyclus. We hebben samen naar de opties gekeken; nu ben ik veel regelmatiger en ik heb veel minder klachten. Ik zou Danique echt aanraden als je naar een fijn traject met veel persoonlijke aandacht en een vriendelijke aanpak op zoek bent!',
  },
  {
    id: 'h5',
    name: 'Cliënt',
    rating: 5,
    image: '',
    text: 'Danique is kundig. Denkt mee en geeft goeie tips. Ik kwam bij Danique met forse vermoeidheidsklachten waarvoor ik al jaren bij allerlei specialisten ben geweest maar nooit een goeie oplossing kreeg aangeboden. Door met mij mee te denken over mijn dagelijks leven en mee te denken over voeding heeft zij mij om drie maanden tijd vooruit geholpen. Minder vermoeid en ook andere problemen aangepakt.',
  },
  {
    id: 'h6',
    name: 'Cliënt',
    rating: 5,
    image: '',
    text: 'Hi Danique, wilde je via deze weg even laten weten dat ik afgelopen zaterdag ongesteld ben geworden 🙌🏻🙌🏻. Geeft nu weer goede energie om door te pakken!!',
  },
];



const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const Hormoontraject = () => {
  const { openModal } = useBookingModal();
  return (
    <div className="min-h-screen">
      <SEO
        title="1:1 Hormoontraject | Hormoonbalans & Energie"
        description="Het 1:1 Hormoontraject voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans. In 3 maanden naar hormonale balans, rust en vertrouwen in je lijf."
        canonicalUrl="/hormoontraject"
      />
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="1:1 Traject" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-4 leading-tight">1:1 Hormoontraject</h1>
                <p className="text-xl text-primary font-medium mb-6">In 3 maanden tijd naar een hormonale balans, rust en vertrouwen in je lijf</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Er zijn momenten waarop je voelt: dit ben ik niet helemaal. Maar wat het dan is, kun je moeilijk onder woorden brengen.
                  </p>
                  <p>
                    Je libido schommelt of lijkt verdwenen. Je cyclus voelt elke maand als een emotionele achtbaan, met PMS, moodswings, cravings en een menstruatie waar je tegenop ziet. Je hebt misschien al laten checken of alles goed is en je bloedonderzoeken zijn prima, maar je voelt je niet goed.
                  </p>
                  <p>
                    Zelfs na een volle nacht slaap word je wakker met het gevoel dat je nog steeds leeg bent. Alsof je jezelf een beetje bent kwijtgeraakt.
                  </p>
                  <p>
                    Het is niet gek dat je verlangt naar stabiele energie, een rustige buik, een stabiele cyclus, vertrouwen in je lichaam en hormonen die vóór je werken in plaats van tegen je.
                  </p>
                  <p>
                    In het 1:1 hormoontraject onderzoeken we welke hormonale disbalans er speelt, je leert te luisteren naar je lichaam, begrijpen wat er onder je klachten zit en hoe we je klachten op een duurzame manier oplossen.
                  </p>
                </div>
                <CustomButton onClick={openModal}>Gratis kennismaking</CustomButton>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage
                  src={daniqueGlowup}
                  alt="1:1 Hormoontraject - hormonale balans, rust en energie met Danique Kwakman"
                  className="w-full h-full object-cover"
                />
              </FadeIn>
            </div>
          </div>

          {/* Wat kun je verwachten */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wat kun je verwachten?</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Ik heb een manier ontwikkeld waarmee ik je stap voor stap help om te begrijpen wat er in je lichaam gebeurt en hoe je de juiste puzzelstukjes kunt neerleggen om je energie, cyclus en buik weer in balans te brengen.
                </p>
                <p>
                  Met mijn CIRCLE-methode werken we gericht aan de oorzaak van jouw klachten en stoppen we met het plakken van pleisters.
                </p>
                <p>
                  Dit traject is voor vrouwen die (langere tijd) klachten ervaren rondom hun cyclus en hormonen. We gaan samen onderzoeken welke hormonale disbalans er speelt en hoe we de balans weer terug gaan brengen.
                </p>
                <p>
                  Dit traject is passend als je klachten ervaart zoals: PCOS, PMS, onregelmatige en/of pijnlijke menstruaties, vermoeidheid, niet lekker in je vel, 2 verschillende personen zijn door de maand heen, schommelingen in energie, lichaam niet in balans voelt, stemmingswisselingen, prikkelbaarheid, schommelingen in bloedsuiker en moeite met slapen.
                </p>
              </div>

              <h3 className="font-serif text-xl text-foreground mb-4">Na dit traject:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Zijn je hormonen in balans wat zorgt voor meer energie, helderheid en voel je je weer jezelf",
                  "Begrijp je wat je lichaam nodig heeft en waarom",
                  "Verdwijnen vage klachten en snap je eindelijk waar ze vandaan komen",
                  "Maak je keuzes die passen bij jouw cyclus, ritme en leven",
                  "Wordt gezondheid iets waar je op kunt vertrouwen",
                  "Ontstaat er ruimte voor jezelf, je werk, je gezin en je dromen"
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
                  "Meer energie, zodat je je dagen weer vol vertrouwen en focus kunt doorkomen",
                  "Een hormonale balans die zorgt voor zelfvertrouwen, stabiliteit en plezier in het leven",
                  "Rust in je lijf én hoofd, zodat je weer helder kunt denken en voelen",
                  "Een leven zonder lichamelijke klachten en piekergedachten",
                  "Een leefstijl die moeiteloos voelt en echt bij jou past",
                  "Een lijf dat je ondersteunt, zodat je keuzes kunt maken zonder twijfel"
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
                  "Voorgoed afscheid te nemen van vage klachten die je beperken",
                  "Je energie en motivatie terug te vinden",
                  "Weer vol vertrouwen je dagen te plannen en je doelen te behalen"
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
                  "Je geen ruimte voelt om naar jezelf te kijken",
                  "Je liever snelle oplossingen wilt dan duurzame verandering",
                  "Je niet wilt investeren in voeding, leefstijl en herstel",
                  "Je niet klaar bent om verantwoordelijkheid te nemen voor de stappen die nodig zijn"
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
                  desc: "Tijdens de intake duiken we echt de diepte in: hormonale gezondheid, darmen, cyclus, voeding, leefstijl en belastbaarheid. Met behulp van uitgebreide vragenlijsten en de volledige CIRCLE-methode brengen we je gezondheid volledig in kaart, ontdekken we waar je klachten vandaan komen, onderzoeken we welke hormonale disbalans er speelt en wat jij nodig hebt."
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

          {/* Ervaringen */}
          <FadeIn className="mb-20">
            <div className="text-center mb-12">
              <SectionTag text="Ervaringen" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Wat anderen zeggen</h2>
            </div>
            <Testimonials testimonials={HORMOON_TESTIMONIALS} />
          </FadeIn>

          {/* Investering */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Investering</h2>
              <p className="text-4xl md:text-5xl font-serif text-primary mb-8">€888</p>
              <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Hormoontraject;

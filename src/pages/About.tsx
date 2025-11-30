import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import daniqueAbout from '@/assets/danique-about.jpg';

const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>;

const About = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-background overflow-hidden pt-32 md:pt-40">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          <div className="lg:w-5/12 relative z-10">
            <FadeIn>
              <SectionTag text="Over mij" />
              <h1 className="font-serif text-5xl lg:text-6xl mb-8 text-foreground leading-[1.1]">
                Hi, ik ben <span className="italic">Danique Kwakman</span>
              </h1>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6 font-light">
                <p>
                  Ik help vrouwen hun lichaam opnieuw te begrijpen en stap voor stap van <strong>overleven naar leven</strong> te gaan, met mijn unieke <strong>CIRCLE-methode</strong>. Deze methode helpt je klachten te doorgronden en duurzame balans te creëren, afgestemd op jouw energie, ritme en leven.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-7/12 relative">
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/5] lg:aspect-[3/4] rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md">
                <ParallaxImage src={daniqueAbout} alt="Danique Kwakman" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/50 rounded-full -z-10"></div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Overleven naar leven */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Overleven naar leven</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Vanaf mijn tienerjaren voelde het alsof ik <strong>aan het overleven was</strong>. Mijn hormonen schommelden alle kanten op en ik ervaarde allerlei vage klachten die ik maar niet kon oplossen: acne, onregelmatige en uitblijvende menstruaties, moodswings, opgeblazen buiken, extreme vermoeidheid en darmklachten. Soms was de vermoeidheid zo intens dat ik halverwege de dag moest slapen om de dag door te komen.
              </p>
              <p>
                In mijn twintiger jaren werden de klachten erger. Ik vroeg me af waarom leeftijdsgenoten altijd zoveel energie leken te hebben, terwijl ik voortdurend worstelde om mee te kunnen komen. Na diverse onderzoeken bij artsen kreeg ik vaak te horen dat het "er nu eenmaal bij hoort en ik terug kan komen zodra het zwanger worden niet zou lukken in de toekomst" en het advies: rust, reinheid en regelmaat. Maar hoe ik dat concreet kon toepassen? Daar kreeg ik geen handvatten voor.
              </p>
              <p>
                Ik probeerde alles volgens het boekje goed te doen, maar toch voelde ik me helemaal niet goed. Het was super frustrerend.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Mijn achtergrond en passie */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Mijn achtergrond en passie voor het vrouwenlichaam</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Ondanks mijn kennis als <strong>verpleegkundige</strong> en alles wat ik leerde van de acute en reguliere zorg, ontdekte ik dat er veel meer te leren viel over hoe vrouwen hun lichaam écht kunnen begrijpen en ondersteunen. Het vrouwenlichaam heeft me altijd gefascineerd. Niet alleen wilde ik begrijpen hoe mijn eigen lichaam werkte en hoe ik van mijn klachten af kwam, want waar leer je dat nou echt? Ik ontdekte ook dat gebalanceerde hormonen je echt in je kracht kunnen zetten.
              </p>
              <p>
                Toen ik zelf vastliep met klachten, besloot ik mijn kennis verder te verdiepen. Ik volgde talloze scholingen en dook in voeding, leefstijl, hormonen en de vrouwelijke cyclus. Niet alleen om mezelf te helpen, maar vooral om <strong>andere vrouwen te laten ervaren dat het ook anders kan</strong>.
              </p>
              <p>
                Door mijn werk en ervaring als verpleegkundige heb ik geleerd hoe belangrijk het is om <strong>holistisch naar een mens te kijken</strong>. Mijn manier van werken is persoonlijk en praktisch, maar altijd met aandacht voor jouw unieke situatie. Buiten mijn werk ben ik een energieke vrouw die dol is op chocola, wandelen, het strand en alles wat met persoonlijke ontwikkeling te maken heeft. Ik geniet van reuring om me heen, maar kan ook intens gelukkig worden van tijd voor mezelf en selfcare.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Inzicht in cyclus en darmen */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Inzicht in cyclus en darmen</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Door mijn ervaring en kennis weet ik inmiddels hoe belangrijk het is om je cyclus te begrijpen en daarop af te stemmen wat je eet, hoe je beweegt en hoe je rust neemt. Wanneer je je cyclus leert volgen en ondersteunen, krijg je veel meer grip op je energie, stemming en dagelijkse keuzes. Kleine, gerichte aanpassingen maken een groot verschil maken in hoe je je voelt en functioneert.
              </p>
              <p>
                Daarnaast spelen je darmen een hele belangrijke rol in je welzijn. Een gezonde darm ondersteunt niet alleen een goede spijsvertering, maar ook de productie van serotonine, het gelukshormoon. Dit betekent dat je je rustiger, gelukkiger en energieker voelt wanneer je darmen in balans zijn. Het inzicht dat je zelf zoveel invloed hebt op je hormonen, energie en stemming, is een van de grootste stappen richting een gezond en energiek leven.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Mijn werkwijze */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Mijn werkwijze</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Mijn unieke <strong>CIRCLE-methode</strong> helpt vrouwen stap voor stap naar meer inzicht, energie en balans te werken. Op een manier die past bij jouw lichaam, energie en leven.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Opleidingen & bijscholing */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Opleidingen & bijscholing</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground text-lg mb-6">
              <li>Verpleegkunde</li>
              <li>Orthomoleculaire therapeut Basis</li>
              <li>Orthomoleculair therapeut Gevorderd</li>
              <li>Orthomoleculaire Epigenetisch therapeut</li>
            </ul>
            <p className="text-muted-foreground text-lg">
              Daarnaast volg ik regelmatig bijscholingen om mijn kennis op hoog niveau te houden.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Waarom ik doe wat ik doe */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Waarom ik doe wat ik doe</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Ik weet hoe het is om constant moe te zijn, met klachten te worstelen en het gevoel te hebben dat niemand je echt begrijpt. Daarom combineer ik mijn kennis en ervaring om vrouwen te helpen ontdekken hoe ze hun lichaam écht kunnen begrijpen, weer vertrouwen kunnen krijgen in hun eigen lijf en duurzaam in balans kunnen komen.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wil je kennismaken?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Wil je ontdekken hoe ik jou kan helpen en hoe mijn begeleiding eruitziet? <strong>Plan een gratis kennismaking</strong> of <strong>volg me op Instagram</strong> voor inspiratie, tips en praktische adviezen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
                <CustomButton>Gratis kennismaking</CustomButton>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <CustomButton variant="secondary">Volg me op Instagram</CustomButton>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>;
};

export default About;

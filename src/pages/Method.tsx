import { Section } from "@/components/Section";
import { FadeIn, ParallaxImage, PageTransition, StaggerContainer } from "@/components/Animations";
import { CustomButton } from "@/components/CustomButton";
import deKern from "@/assets/de-kern.png";
import groei from "@/assets/groei.png";
import hetProces from "@/assets/het-proces.png";
import nieuwProces from "@/assets/nieuw-proces.png";
import stapVoorStap from "@/assets/stap-voor-stap.png";
import verandering from "@/assets/verandering.png";
import daniqueRelaxed from "@/assets/danique-relaxed.jpg";

// --- Sub Components ---
const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-[#9CAAC6] text-white text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">
    {text}
  </div>;

// --- Data Constants ---
const METHOD_CARDS = [{
  id: "core",
  title: "De kern",
  description: "We aan de slag met het neerzetten van een gezonde en sterke basis. Ik geef je allerlei waardevolle tools en documenten, een persoonlijk plan en starten de samenwerking met een uitgebreid 1:1 consult. Hier ontstaat de fundering waarop we bouwen.",
  accentColor: "#E2DCC8",
  image: deKern,
}, {
  id: "growth",
  title: "Groei",
  description: "Er wordt een zaadje geplant. Je doet de eerste aanpassingen en merkt de veranderingen. Je begint te ontdekken wat jij écht nodig hebt. Inzichten ontstaan, oude patronen worden zichtbaar en er komt ruimte om te groeien vanuit zachtheid. In onze sessies verdiepen we dit proces en zetten we samen gerichte stappen.",
  accentColor: "#CED698",
  image: groei,
}, {
  id: "process",
  title: "Het proces",
  description: "Je proces komt in beweging. We zoomen in op thema's zoals slaap, ontspanning, voeding en beweging. Samen onderzoeken we waar jouw systeem behoefte aan heeft. Je leert vertragen en ontdekt hoe je lichaam communiceert.",
  accentColor: "#9CAAC6",
  image: hetProces,
}, {
  id: "new",
  title: "Nieuw proces",
  description: "Tijdens het vormen van het nieuwe proces ga je efficiënt aan de slag met implementeren en we vormen jouw nieuwe 'way of life'. Jouw nieuwe ritme krijgt vorm. Je leert keuzes maken die echt bij je passen, en laat los wat niet meer werkt.",
  accentColor: "#F4D03F",
  image: nieuwProces,
}, {
  id: "steps",
  title: "Stap voor stap",
  description: "Deze maand bouwen we stap voor stap jouw way of life naar een realistisch, haalbaar plan om ook na de samenwerking voort te zetten. Je weet wat voor jou werkt en hoe je dit kunt blijven toepassen. Ook na ons traject.",
  accentColor: "#D4D0A3",
  image: stapVoorStap,
}, {
  id: "change",
  title: "Verandering",
  description: "We reflecteren op de veranderingen en je hele proces. We reflecteren, vieren en zorgen voor een zachte afronding. En natuurlijk ben ik er nog even voor je met liefdevolle support.",
  accentColor: "#99A9C4",
  image: verandering,
}];

// --- MethodPage Component ---
const Method = () => {
  return <PageTransition>
      {/* Hero Section */}
      <Section className="bg-[#FCF9F2] pt-32 md:pt-40">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-20">
            <SectionTag text="Mijn Methode" />
            <h1 className="font-serif text-5xl md:text-6xl text-[#1D1D1B] mb-6">
              De CIRCLE methode
            </h1>
            <p className="text-[#757575] max-w-2xl mx-auto leading-relaxed text-lg">
              De CIRCLE-methode is een systemische en liefdevolle aanpak waarmee vrouwen hun lichaam opnieuw leren begrijpen, we klachten doorgronden en je stap voor stap in balans komt. Geen strenge protocollen of quick fixes, maar een praktische, persoonlijke methode die rust, helderheid en duurzame verandering brengt.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Method Cards Sections */}
      <Section className="bg-[#FCF9F2] py-12 md:py-16">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          {METHOD_CARDS.map((card, index) => {
            const isEven = index % 2 === 0;
            return (
              <StaggerContainer key={card.id} delay={0.1}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                  {/* Text Content */}
                  <FadeIn className="lg:w-1/2" delay={0.1}>
                    <div 
                      className="bg-background rounded-2xl p-6 md:p-8 border-l-4 relative overflow-hidden"
                      style={{ borderLeftColor: card.accentColor }}
                    >
                      <div 
                        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-15"
                        style={{ backgroundColor: card.accentColor }}
                      />
                      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 relative z-10">
                        {card.title}
                      </h2>
                      <p className="text-base leading-relaxed text-muted-foreground relative z-10">
                        {card.description}
                      </p>
                    </div>
                  </FadeIn>

                  {/* Image Content */}
                  <FadeIn className="lg:w-1/2" delay={0.2}>
                    <div className="relative rounded-2xl overflow-hidden w-full">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-auto object-contain" 
                      />
                    </div>
                  </FadeIn>
                </div>
              </StaggerContainer>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative min-h-[80vh] md:min-h-screen bg-[#1D1D1B] overflow-hidden py-0">
        <div className="absolute inset-0">
          <ParallaxImage 
            src={daniqueRelaxed} 
            alt="Spa Treatment" 
            className="w-full h-full" 
            speed={0.15} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 min-h-[80vh] md:min-h-screen">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight drop-shadow-2xl">
              Klaar om van overleven<br />naar leven te gaan?
            </h2>
            <CustomButton 
              variant="secondary" 
              onClick={() => window.open('https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC', '_blank')}
            >
              Gratis kennismaking
            </CustomButton>
          </FadeIn>
        </div>
        
        <div className="absolute bottom-8 right-8 text-white/50 font-serif italic text-xl z-10">
          DK
        </div>
      </Section>
    </PageTransition>;
};
export default Method;

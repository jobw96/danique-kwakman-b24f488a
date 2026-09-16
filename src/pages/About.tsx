import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { GraduationCap } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import daniqueAbout from '@/assets/danique-about.webp';
import daniqueRelaxed from '@/assets/danique-relaxed.webp';
import daniqueBeach from '@/assets/danique-beach.webp';
import daniqueWalking from '@/assets/danique-walking.webp';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">{text}</div>
);

const SAMENHANG_ITEMS = [
  'je hormonen en menstruatiecyclus',
  'voeding en voedingsstoffen',
  'je darmen en spijsvertering',
  'bloedsuiker en energieniveau',
  'slaap en herstel',
  'stress en leefstijl',
  'beweging',
  'en waar relevant ook naar laboratoriumonderzoek',
];

const OPLEIDINGEN = [
  'Verpleegkunde',
  'Orthomoleculair therapeut – Basis',
  'Orthomoleculair therapeut – Gevorderd',
  'Orthomoleculair Epigenetisch therapeut',
  'Voeding en hormonen',
  'Continue suiker analyse',
  'Darmtherapie basis',
  'Darmtherapie specialist – nu in opleiding',
];

const About = () => {
  const { openModal } = useBookingModal();
  return (
    <div className="min-h-screen">
      <SEO
        title="Over mij | Orthomoleculair Therapeut"
        description="Maak kennis met Danique Kwakman, orthomoleculair therapeut gespecialiseerd in hormoonbalans, darmgezondheid en energie voor vrouwen."
        canonicalUrl="/over-mij"
      />
      <Section className="pt-8 md:pt-16 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <FadeIn>
                <SectionTag text="Over mij" />
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  Danique Kwakman,<br />Orthomoleculair hormoon- en darmtherapeut in Hoorn
                </h1>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Ik ging van een pijnlijke, onregelmatige menstruatiecyclus en jarenlang zoeken naar antwoorden naar een vrouw die haar lichaam begrijpt en zich weer sterk en energiek voelt.
                  </p>
                  <p>
                    En juist daarom weet ik hoe het voelt als je lichaam signalen blijft geven, maar je niet weet wat je ermee moet.
                  </p>
                  <p>
                    Nu help ik andere vrouwen om die signalen wél te leren begrijpen. Met een persoonlijke en wetenschappelijk onderbouwde aanpak, waarbij we niet zomaar wat proberen, maar gericht onderzoeken wat er bij jou speelt.
                  </p>
                  <p>
                    Geen standaard protocol en losse gezondheidsadviezen, maar een aanpak waarbij we kijken naar de samenhang tussen jouw klachten, hormonen, darmen, voeding, leefstijl en wat er verder in jouw situatie speelt.
                  </p>
                  <p>
                    Het is mijn missie om gezondheid weer begrijpelijk, menselijk en haalbaar maken. Zodat je niet eindeloos blijft zoeken naar losse oplossingen, maar weet waar je kunt beginnen, begrijpt waarom je bepaalde keuzes maakt en een manier vindt die past bij jouw lichaam én jouw leven.
                  </p>
                </div>
                <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage src={daniqueAbout} alt="Danique Kwakman - orthomoleculair hormoon- en darmtherapeut gespecialiseerd in vrouwengezondheid" className="w-full h-full object-cover" />
              </FadeIn>
            </div>
          </div>

          {/* Leer er maar mee leven */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-secondary/30 mb-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-2/3">
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">“Leer er maar mee leven.”</h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Dat was een zin die ik niet kon loslaten toen de huisarts dat tegen mij zei.
                    </p>
                    <p>
                      Mijn lichaam gaf jarenlang allerlei signalen: een pijnlijke en onregelmatige menstruatiecyclus, acne, moodswings, een opgeblazen buik, darmklachten en extreme vermoeidheid.
                    </p>
                    <p>
                      Ik probeerde van alles en zocht steeds naar manieren om me beter te voelen. Maar ik begreep nog niet waarom mijn lichaam deed wat het deed. En dat maakte het lastig om er echt iets aan te veranderen.
                    </p>
                    <p>
                      In mijn twintiger jaren werden mijn klachten steeds duidelijker. Ik kwam bij verschillende zorgverleners en kreeg regelmatig te horen dat bepaalde klachten er nu eenmaal bij konden horen.
                    </p>
                    <p>
                      Maar voor mij voelde dat niet als een oplossing.
                    </p>
                    <p>
                      Ik wilde mijn klachten niet leren accepteren. Ik wilde begrijpen wat er aan de hand was.
                    </p>
                    <p>
                      Uiteindelijk kreeg ik na ruim 10 jaar eindelijk de diagnose PCOS.
                    </p>
                    <p>
                      Die diagnose gaf me een verklaring voor een deel van mijn klachten. Maar het gaf me nog niet het antwoord op de vraag: wat kan ik hier zelf mee?
                    </p>
                    <p>
                      De reguliere zorg had mij geholpen om de diagnose te krijgen, maar ik miste handvatten voor hoe ik mijn lichaam en klachten in het dagelijks leven kon ondersteunen.
                    </p>
                    <p>
                      Juist daar begon mijn zoektocht naar het waarom pas echt.
                    </p>
                    <p>
                      Ik wilde niet alleen weten dát ik PCOS had. Ik wilde begrijpen wat er in mijn lichaam gebeurde en welke rol voeding, leefstijl, stress, slaap en andere factoren daarin konden spelen.
                    </p>
                    <p>
                      Ik ben me hierin steeds verder gaan verdiepen en ging mijn lichaam op een andere manier ondersteunen.
                    </p>
                    <p>
                      De klachten waar ik jarenlang mee had geleefd, zijn inmiddels verdwenen.
                    </p>
                    <p>
                      Ik voel me weer sterk, energiek en verbonden met mijn lichaam. En juist die persoonlijke ervaring heeft de basis gelegd voor het werk dat ik nu doe.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <ParallaxImage src={daniqueBeach} alt="Danique Kwakman wandelt op het strand - haar eigen zoektocht naar antwoorden" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Van verpleegkundige naar orthomoleculair hormoon- en darmtherapeut */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-5/12">
              <FadeIn delay={0.1} className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
                <ParallaxImage src={daniqueRelaxed} alt="Danique Kwakman - verpleegkundige achtergrond en orthomoleculaire expertise" className="w-full h-full object-cover" />
              </FadeIn>
            </div>
            <div className="lg:w-7/12">
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Van verpleegkundige naar orthomoleculair hormoon- en darmtherapeut</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Op dat moment werkte ik al als verpleegkundige.
                  </p>
                  <p>
                    Ik begeleidde mensen in kwetsbare periodes van hun leven en had een stevige basis in de reguliere zorg. Maar tegelijkertijd ontdekte ik tijdens mijn eigen zoektocht hoeveel kennis er nog te leren was over voeding, leefstijl, hormonen, de vrouwelijke cyclus en darmgezondheid.
                  </p>
                  <p>
                    Dat vond ik fascinerend.
                  </p>
                  <p>
                    Het vrouwenlichaam heeft me altijd geïnteresseerd, maar mijn eigen klachten zorgden ervoor dat ik er écht in wilde duiken.
                  </p>
                  <p>
                    Ik volgde allerlei aanvullende opleidingen en scholingen en verdiepte me steeds verder in de materie.
                  </p>
                  <p>
                    Niet alleen om mezelf beter te begrijpen.
                  </p>
                  <p>
                    Ik wilde weten hoe ik deze kennis kon inzetten om andere vrouwen te helpen.
                  </p>
                  <p>
                    Mijn verpleegkundige achtergrond neem ik daar nog iedere dag in mee. Ik combineer mijn ervaring uit de reguliere zorg met mijn orthomoleculaire kennis en mijn specialisatie in vrouwengezondheid.
                  </p>
                  <p>
                    Vanuit mijn praktijk in Hoorn én online begeleid ik vrouwen met hormonale en darmklachten die hun lichaam beter willen begrijpen en gericht aan hun gezondheid willen werken.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Niet zomaar iets proberen */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Niet zomaar iets proberen, maar begrijpen wat er speelt</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Er is tegenwoordig ontzettend veel informatie over hormonen en gezondheid.
                </p>
                <p>
                  Je hoort dat je dit supplement moet nemen, dat je bepaalde voeding moet schrappen of dat een bepaald protocol dé oplossing is voor je klachten.
                </p>
                <p>
                  Maar zo werk ik niet.
                </p>
                <p>
                  Ik vind het belangrijk dat we weten waarom we iets doen.
                </p>
                <p>
                  Daarom gebruik ik wetenschappelijke onderzoeken, actuele kennis en mijn professionele ervaring als basis voor mijn keuzes. Vervolgens vertaal ik die kennis naar jouw persoonlijke situatie.
                </p>
                <p>
                  We kijken bijvoorbeeld naar de samenhang tussen:
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {SAMENHANG_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 min-w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Niet ieder onderzoek is voor iedere vrouw nodig en niet iedere klacht vraagt om hetzelfde antwoord.
                </p>
                <p>
                  Juist daarom begint mijn begeleiding met begrijpen wat er bij jou speelt.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Jouw klachten staan niet op zichzelf */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Jouw klachten staan niet op zichzelf</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Een onregelmatige cyclus staat niet los van de rest van je gezondheid.
                </p>
                <p>
                  Darmklachten kunnen samengaan met veranderingen in je voeding, leefstijl en hormonale gezondheid. Vermoeidheid kan verschillende oorzaken hebben. En wanneer je al langere tijd klachten hebt, is het vaak te makkelijk om één oorzaak aan te wijzen.
                </p>
                <p>
                  Daarom kijk ik naar het hele plaatje.
                </p>
                <p>
                  Mijn doel is dat jij niet alleen weet wat je moet doen, maar vooral begrijpt waarom we bepaalde keuzes maken.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* CIRCLE-methode */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-secondary/30 mb-20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-2/3">
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Daarom ontwikkelde ik mijn CIRCLE-methode</h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Door mijn eigen zoektocht én door de vrouwen die ik begeleid, merkte ik dat er behoefte is aan iets anders dan nóg een standaard lijstje met leefstijladviezen.
                    </p>
                    <p>
                      Daarom ontwikkelde ik mijn eigen CIRCLE-methode.
                    </p>
                    <p>
                      Een persoonlijke manier van werken waarin we jouw klachten, leefstijl en gezondheid in 6 stappen, stap voor stap in kaart brengen. We kijken naar de verbanden, bepalen waar op dit moment de meeste winst te behalen is en maken daar een concreet plan van.
                    </p>
                    <p>
                      Vervolgens kijken we wat het effect is, wat er verandert en waar we moeten bijsturen.
                    </p>
                    <p>
                      Een gerichte en systemische aanpak waarbij we werken aan wat jouw lichaam nodig heeft.
                    </p>
                  </div>
                  <a href="/method">
                    <CustomButton variant="secondary">Ontdek de CIRCLE-methode</CustomButton>
                  </a>
                </div>
                <div className="lg:w-1/3">
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    <ParallaxImage src={daniqueWalking} alt="Danique Kwakman CIRCLE-methode voor hormoonbalans en energie" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Waar ik in geloof */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Waar ik in geloof</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Ik geloof dat gezondheid niet begint bij nóg meer controle, regels of lijstjes, maar bij begrijpen wat jouw lichaam je vertelt.
                </p>
                <p>
                  In een wereld waarin het makkelijk is om eindeloos te zoeken naar antwoorden en waarin vrouwen soms leren om klachten maar te accepteren of te onderdrukken, wil ik het anders doen.
                </p>
                <p>
                  Ik wil dat je begrijpt waarom je bepaalde klachten ervaart, welke factoren daarin een rol kunnen spelen en wat jij daar zelf mee kunt.
                </p>
                <p>
                  Daarbij geloof ik niet in één perfecte manier van gezond leven. Wat voor de ene vrouw werkt, hoeft niet automatisch bij jou te passen.
                </p>
                <p>
                  Mijn missie? Gezondheid weer begrijpelijk, menselijk en haalbaar maken. Zodat je niet eindeloos blijft zoeken naar losse oplossingen, maar weet waar je kunt beginnen, begrijpt waarom je bepaalde keuzes maakt en een manier vindt die past bij jouw lichaam én jouw leven.
                </p>
                <p>
                  Niet perfect, maar passend.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Van mijn eigen zoektocht naar mijn eigen praktijk in Hoorn */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Van mijn eigen zoektocht naar mijn eigen praktijk in Hoorn</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Jaren geleden had ik nooit gedacht dat mijn zoektocht naar antwoorden uiteindelijk zou leiden tot mijn eigen praktijk.
                </p>
                <p>
                  Maar juist doordat ik mijn klachten serieus ben gaan nemen, ben ik mijn lichaam steeds beter gaan begrijpen.
                </p>
                <p>
                  Ik leerde dat gezondheid niet draait om alles perfect doen. Het gaat erom dat je begrijpt wat jouw lichaam nodig heeft en leert herkennen welke keuzes voor jou werken.
                </p>
                <p>
                  Die kennis heeft mijn eigen manier van leven veranderd en inmiddels help ik daar dagelijks andere vrouwen mee in mijn mooie praktijk in Hoorn en online.
                </p>
                <p>
                  Vrouwen die niet langer genoegen willen nemen met “leer er maar mee leven”.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Wat ik jou gun */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-secondary/30 mb-20">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Wat ik jou gun</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Het is mijn wens dat jij je weer goed voelt in je eigen lichaam.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'Dat je begrijpt waarom je lichaam bepaalde signalen geeft.',
                  'Dat je niet iedere maand opnieuw hoeft te zoeken naar wat er nu weer aan de hand is.',
                  'Dat je weer energie hebt voor de dingen die je belangrijk vindt.',
                  'En vooral dat je niet het gevoel hebt dat je lichaam tegen je werkt.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 min-w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Opleidingen */}
          <FadeIn className="mb-20">
            <div className="text-center mb-12">
              <SectionTag text="Achtergrond" />
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Opleidingen &amp; expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mijn kennis blijft zich ontwikkelen. Ik vind het belangrijk om mezelf te blijven bijscholen en mijn werkwijze steeds verder te verdiepen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {OPLEIDINGEN.map((item, i) => (
                <FadeIn key={i} delay={i * 0.05} className="bg-white p-6 rounded-xl border border-secondary/30 shadow-xs hover:border-primary/50 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 rounded-full bg-[#FDF8F3] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GraduationCap size={20} className="text-[#6B7B8A]" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium leading-snug">{item}</h3>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-8">
              Daarnaast volg ik regelmatig aanvullende scholingen en verdiep ik mij in actuele wetenschappelijke literatuur.
            </p>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-3">
              Omdat ik vind dat je als therapeut nooit bent uitgeleerd.
            </p>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Wil je kennismaken?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Wil je ontdekken hoe ik jou kan helpen en hoe mijn begeleiding eruitziet? <strong>Plan een gratis kennismaking</strong> of <strong>volg me op Instagram</strong> voor inspiratie, tips en praktische adviezen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton onClick={openModal}>Gratis kennismaking</CustomButton>
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

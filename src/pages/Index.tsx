import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { Plus, Minus, Star, ArrowRight, Quote } from 'lucide-react';
import { ServiceItem, Testimonial, FaqItem, Stat } from '@/types';
import { FadeIn, ParallaxImage, StaggerContainer } from '@/components/Animations';
import { Testimonials } from '@/components/Testimonials';

import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import heroImage from '@/assets/hero-foto.jpg';
import heroImageMobile from '@/assets/hero-foto-mobile.jpg';
import stap1Image from '@/assets/stap-1.png';
import stap2Image from '@/assets/stap-2.png';
import stap3Image from '@/assets/stap-3.png';
import stap4Image from '@/assets/stap-4.png';
import daniqueGlowup from '@/assets/danique-glowup.jpg';
import daniqueDarm from '@/assets/danique-darm.jpg';
import daniqueWalking from '@/assets/danique-walking.jpg';
import daniqueWalkingBeach from '@/assets/danique-walking-beach.jpg';
import daniqueRelaxed from '@/assets/danique-relaxed.jpg';
import hetProces from '@/assets/het-proces.png';
import daniqueKleedZand from '@/assets/danique-kleed-zand.jpg';

const TREATMENTS = [{
  id: 'glowup',
  title: "1:1 Glow Up Traject",
  description: "Voor de vrouw die al bewust bezig is, maar blijft worstelen met vermoeidheid, hormonale disbalans of buikklachten",
  image: hetProces
}, {
  id: 'darmtraject',
  title: "1:1 Darmtraject Therapie",
  description: "Een diepgaand 1:1 traject incl. lab onderzoek om tot de kern van jouw klacht te komen.",
  image: daniqueDarm
}, {
  id: 'reset-recharge',
  title: "1:1 Reset & Recharge",
  description: "1 maand intensieve begeleiding voor meer energie, rust in je lijf en helderheid in je hoofd.",
  image: daniqueKleedZand
}];

const SERVICES: ServiceItem[] = [{
  id: 'hormonal',
  title: 'Hormonale Balans',
  description: 'Je hormonen beïnvloeden letterlijk alles in je lichaam: je energie, je humeur, je slaap, je focus en zelfs je zelfvertrouwen. Wanneer ze weer in balans zijn, merk je dat je rustiger reageert, je krachtiger voelt en weer in je eigen energie staat. Het is alsof je eindelijk één voelt met je lijf en je lijf niet meer tegenwerkt. Door samen te werken met mijn aanpak ontdek je wat jouw lichaam nodig heeft om dit gevoel vast te houden, zodat je weer vrij, energiek en verbonden door je dag kunt bewegen.',
  image: daniqueGlowup
}, {
  id: 'gut',
  title: 'Darmgezondheid',
  description: 'Darmklachten kunnen je energie, je humeur en je vertrouwen in je lijf volledig onderuit halen. Je verlangt naar: een rustige buik, geen constante spanning en weer vrij kunnen leven zonder ongemak. Ik help je stap voor stap te ontdekken wat jouw darmen écht nodig hebben, zodat je buik rustiger wordt, je energie terugkomt en je je weer volledig in je lijf voelt.',
  image: daniqueDarm
}, {
  id: 'energy',
  title: 'Energie',
  description: 'Moe wakker worden na een hele nacht, energie dipjes, brainfog of niet doorslapen? Dit zijn signalen dat je lichaam niet in balans is. In mijn coaching kijken we samen naar wat jouw lichaam écht nodig heeft. Zo krijg je je energie terug, voel je je veerkrachtiger, kun je je dagen weer vol vertrouwen en zonder weerstand beleven. En misschien wel het allerbelangrijkste: een leven waarbij jij het leven weer fantastisch vindt, zodat je naast je werk, gezin, sociale leven en sport nog energie en plezier over hebt voor jezelf!',
  image: daniqueWalkingBeach
}, {
  id: 'prevention',
  title: 'Preventie',
  description: 'In plaats van steeds klachten te herstellen, leer je signalen van je lichaam herkennen en ernaar handelen. Zo bouw je een duurzame basis van gezondheid en vertrouwen, zodat je nieuwe way of life stabiel blijft en je lichaam je ondersteunt in plaats van tegenwerkt.',
  image: daniqueRelaxed
}];

const STATS: Stat[] = [{
  value: '8',
  label: 'Jaren ervaring',
  description: 'In klinische psycho-neuro-immunologie.'
}, {
  value: '1.2k+',
  label: 'Cliënten geholpen',
  description: 'Succesvolle trajecten afgerond.'
}, {
  value: '30',
  label: 'Certificaten',
  description: 'Continue bijscholing in orthomoleculaire wetenschap.'
}, {
  value: '100%',
  label: 'Maatwerk',
  description: 'Geen standaard protocollen, maar maatwerk.'
}];

const TESTIMONIALS: Testimonial[] = [{
  id: '1',
  name: 'Anoniem',
  text: 'Toen ik op zoek was naar een orthomoleculair therapeut en ging zoeken in de omgeving, kwam ik uit bij Danique. Na een uitgebreide intake en bloedtest ben ik de adviezen op gaan volgen, onder andere bepaalde voeding vermijden en aanvulling met supplementen voor tekorten. Nu zijn we inmiddels een tijdje verder, ongeveer 3 maanden en ik voel me beter. Na twee maanden merkte ik verbetering doordat ik bijv. wat meer energie had en minder opgeblazen was. Voorlopig blijf ik nog even doorgaan. Danique houdt goed contact, geeft tussendoor tips en neemt de tijd om te luisteren en mee te denken!',
  rating: 5,
  image: ''
}, {
  id: '2',
  name: 'Anoniem',
  text: 'Nadat ik al langere tijd verschillende klachten had en ik vastliep in de reguliere zorg ben ik verder op zoek gegaan wat me zou kunnen helpen. Mijn klachten waren op mentaal en fysiek vlak. Achteraf gezien een combi van burn-out, overgang, schildklier en fibromyalgie. Orthomoleculaire therapie sprak me erg aan omdat er gewerkt wordt vanuit een holistische visie. Zo kwam ik bij Danique Kwakman uit. Ze heeft me enorm geholpen om inzicht in mijn klachten te krijgen en wat ik eraan kon gaan doen. Door aanpassingen in mijn voeding en leefstijl voel ik me al stukken beter. Na een operatie had ze ook tips hoe ik me weer sneller fit kon gaan voelen. Vooral niet twijfelen maar gewoon contact met Danique Kwakman opnemen en ervaar het zelf!',
  rating: 5,
  image: ''
}, {
  id: '3',
  name: 'Anoniem',
  text: 'Ik kwam bij Danique met ernstige menstruatieklachten en een zeer onregelmatige cyclus. We hebben samen naar de opties gekeken; nu ben ik veel regelmatiger en ik heb veel minder klachten. Ik zou Danique echt aanraden als je naar een fijn traject met veel persoonlijke aandacht en een vriendelijke aanpak op zoek bent!',
  rating: 5,
  image: ''
}, {
  id: '4',
  name: 'Anoniem',
  text: 'In eerste instantie ging ik bij Danique langs voor mijn acne. Door middel van een bloedtest zijn we achter een aantal intoleranties gekomen! Met die info heeft Danique mij tips and tricks qua voeding maar ook advies over supplementen gegeven. We zijn nu een aantal maanden verder en niet alleen mijn huid ziet er stralender uit, ook voel ik mij een stuk fitter en ben ik me meer bewust van wat ik kan doen op het moment dag ik mij futloos voel. Ik raad het zeker aan om langs te gaan. Bedankt Danique voor je hulp!',
  rating: 5,
  image: ''
}, {
  id: '5',
  name: 'Anoniem',
  text: 'Ik ben drie dagen geleden weer ongesteld geworden, super blij mee 😊.',
  rating: 5,
  image: ''
}, {
  id: '6',
  name: 'Anoniem',
  text: 'Met mijn huid gaat het beter, ik merk dat ik geen nieuwe puistjes/ontstekingen erbij krijg. Wel is mn huid nog herstellende. Dus helemaal egaal is het nog niet haha.',
  rating: 5,
  image: ''
}];

const FAQ: FaqItem[] = [{
  question: 'Worden consulten vergoed?',
  answer: 'Ja, als je aanvullend verzekerd bent, wordt orthomoleculaire therapie vaak (gedeeltelijk) vergoed vanuit de alternatieve geneeswijzen.'
}, {
  question: 'Heb ik een verwijzing nodig?',
  answer: 'Nee, je kunt zonder verwijzing van de huisarts een afspraak maken. Ik werk wel graag samen met reguliere zorgverleners.'
}, {
  question: 'Hoe lang duurt een traject?',
  answer: 'Gemiddeld zie ik cliënten 3 tot 5 keer over een periode van 4 tot 6 maanden, afhankelijk van de complexiteit van de klachten.'
}, {
  question: 'Kan ik ook online afspreken?',
  answer: 'Zeker. Videoconsulten zijn mogelijk en net zo effectief als afspraken op de praktijk.'
}];

const STEPS = [{
  id: 1,
  title: "Stap 1: De kern ontdekken",
  description: "We starten met een intake waarin we samen jouw situatie en klachten in kaart brengen. Ik luister naar je verhaal, onderzoek de oorzaak van je klachten en samen brengen we in kaart wat jij nodig hebt. Dit is jouw startpunt: helderheid over waar je nu staat en wat je wilt bereiken.",
  image: stap1Image
}, {
  id: 2,
  title: "Stap 2: Groei in kleine stappen",
  description: "Na de intake starten we direct met de eerste concrete stappen. Tijdens de opvolgafspraken bouwen we verder voort op wat we hebben ontdekt en afgestemd op jouw situatie. We kijken naar voeding, leefstijl en hormoon- of darmfactoren die voor jou belangrijk zijn. Kleine, haalbare aanpassingen helpen je om te ervaren wat werkt en je voelt al snel de eerste successen die je vertrouwen en energie geven.",
  image: stap2Image
}, {
  id: 3,
  title: "Stap 3: Het proces verdiepen",
  description: "We samen de diepte in: patronen, gewoonten en signalen van je lichaam worden zichtbaar. We werken cyclisch en afgestemd op jouw ritme, zodat je leert je lichaam écht te begrijpen. In de vervolgafspraken verfijnen we de strategie, zodat de veranderingen duurzaam worden en je steeds meer grip krijgt op je energie en balans.",
  image: stap3Image
}, {
  id: 4,
  title: "Stap 4: Nieuwe routines en verandering",
  description: "Tijdens het traject bouwen we stap voor stap nieuwe routines op die natuurlijk voelen en je dagelijks ondersteunen. Je lichaam werkt met je mee, je energie wordt stabieler en je voelt je meer in balans. Zo ontwikkel je handvatten én vertrouwen om je nieuwe way of life ook op de lange termijn zelfstandig voort te zetten.",
  image: stap4Image
}];

const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>;

const ServiceAccordion = () => {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeId) || SERVICES[0];
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
    <motion.div className="h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-md" layout transition={{
      duration: 0.5,
      ease: "easeInOut"
    }}>
      <ParallaxImage key={activeService.id} src={activeService.image} alt={`${activeService.title} - orthomoleculaire therapie bij Danique Kwakman`} className="w-full h-full object-cover" />
    </motion.div>
    <div className="flex flex-col justify-center">
      {SERVICES.map(service => <div key={service.id} className="border-b border-secondary/30 last:border-none">
        <motion.button onClick={() => setActiveId(service.id)} className="w-full py-6 flex justify-between items-center text-left group focus:outline-none" whileHover={{
          x: 4
        }} transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}>
          <motion.span className="font-serif text-2xl md:text-3xl" animate={{
            color: activeId === service.id ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))'
          }} whileHover={{
            color: 'hsl(var(--foreground))'
          }} transition={{
            duration: 0.3
          }}>
            {service.title}
          </motion.span>
          <motion.div animate={{
            rotate: activeId === service.id ? 0 : 0
          }} transition={{
            duration: 0.3
          }}>
            {activeId === service.id ? <Minus className="w-5 h-5 text-foreground" /> : <Plus className="w-5 h-5 text-secondary" />}
          </motion.div>
        </motion.button>
        <motion.div initial={false} animate={{
          height: activeId === service.id ? "auto" : 0,
          opacity: activeId === service.id ? 1 : 0,
          marginBottom: activeId === service.id ? 24 : 0
        }} transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }} className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed pr-8">{service.description}</p>
        </motion.div>
      </div>)}
    </div>
  </div>;
};

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openModal } = useBookingModal();

  // Load ActiveCampaign newsletter form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://daniquekwakman.activehosted.com/f/embed.php?id=27';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="activehosted.com/f/embed.php?id=27"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return <>
    <SEO 
      canonicalUrl="/"
      description="Herstel je hormonale balans, darmgezondheid en energie met orthomoleculaire therapie. Persoonlijke begeleiding via de CIRCLE-methode voor duurzame gezondheid."
    />
    <article className="min-h-screen">
    <section className="relative h-screen flex items-center overflow-hidden bg-foreground" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <img src={heroImageMobile} alt="Danique Kwakman orthomoleculair therapeut - hormoonbalans en darmgezondheid specialist" className="md:hidden w-full h-full object-cover object-center" loading="eager" />
        <img src={heroImage} alt="Danique Kwakman orthomoleculair therapeut - hormoonbalans en darmgezondheid specialist" className="hidden md:block w-full h-full object-cover object-right" loading="eager" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <FadeIn>
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-[1.1]">
              Optimaliseer je <br />Hormoonbalans <span className="text-secondary">&</span> <br />Darmgezondheid voor <br />Meer Energie
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
              Ik help vrouwen in 3 maanden te transformeren via mijn CIRCLE-methode naar balans in hormonen, darmen en energie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">
              <CustomButton variant="secondary" onClick={openModal}>Gratis kennismaking</CustomButton>
              <Link to="/method">
                <CustomButton variant="outline">Mijn methode</CustomButton>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
      <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60" animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
        <ArrowRight className="w-6 h-6 rotate-90" />
      </motion.div>
    </section>

    <Section id="services">
      <div className="text-center mb-16">
        <FadeIn>
          <SectionTag text="Specialisaties" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Start je nieuwe way of life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Voel je weer energiek, in balans en in verbinding met je lijf, terwijl we samen de kern van je klachten aanpakken.
          </p>
        </FadeIn>
      </div>
      <ServiceAccordion />
    </Section>

    <Section id="behandelingen" className="bg-background">
      <div className="text-center mb-16">
        <FadeIn>
          <SectionTag text="Trajecten" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Aanbod</h2>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {TREATMENTS.map((treatment, index) => {
          const linkPath = treatment.id === 'glowup' ? '/glowup' : treatment.id === 'darmtraject' ? '/darmtraject' : '/reset-recharge';
          return (
            <FadeIn key={treatment.id} delay={index * 0.2} className="h-full">
              <Link to={linkPath} className="h-full block">
                <motion.div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-secondary/30 h-full flex flex-col cursor-pointer" whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: "hsl(var(--primary) / 0.3)"
                }} transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}>
                  <div className="h-64 overflow-hidden relative">
                    <ParallaxImage src={treatment.image} alt={`${treatment.title} - traject voor vrouwen met gezondheidsklachten`} className="w-full h-full" />
                    <motion.div className="absolute inset-0 bg-foreground/0" whileHover={{
                      backgroundColor: "hsl(var(--foreground) / 0.1)"
                    }} transition={{
                      duration: 0.5
                    }} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-xl text-card-foreground mb-3">{treatment.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{treatment.description}</p>
                    <motion.div className="flex items-center text-primary font-medium mt-auto text-sm" whileHover={{
                      x: 8
                    }} transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}>
                      Bekijk traject <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <CustomButton variant="secondary" onClick={openModal}>Gratis kennismaking</CustomButton>
      </div>
    </Section>

    <Section id="steps" className="bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <SectionTag text="Werkwijze" />
            <h2 className="font-serif text-4xl mb-6 text-foreground md:text-4xl">Creëer je nieuwe way of life via de CIRCLE-methode.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ik help je je lichaam opnieuw te leren begrijpen en weer in balans te brengen. Samen bouwen we aan je nieuwe way of life, zodat je lichaam weer met je meewerkt in plaats van tegen je, en je eindelijk de energie, rust en kracht voelt waar je naar verlangt.
            </p>
          </FadeIn>
        </div>
        <div className="relative">
          <motion.div className="hidden lg:block absolute left-1/2 top-0 w-px bg-secondary -translate-x-1/2" initial={{
            height: 0
          }} whileInView={{
            height: "100%"
          }} viewport={{
            once: true
          }} transition={{
            duration: 1.5,
            ease: "easeInOut"
          }} />
          <div className="flex flex-col gap-24">
            {STEPS.map((step, index) => <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <FadeIn direction={index % 2 === 0 ? 'left' : 'right'} className="w-full lg:w-1/2 relative">
                <motion.div initial={{
                  scale: 0.8,
                  opacity: 0
                }} whileInView={{
                  scale: 1,
                  opacity: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }} className="relative h-80 rounded-3xl overflow-hidden shadow-md group">
                  <img src={step.image} alt={`Stap ${step.id}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </motion.div>
              </FadeIn>
              <FadeIn direction={index % 2 === 0 ? 'right' : 'left'} delay={0.2} className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
                  {step.title.split('&').map((part, i, arr) => <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-secondary">&</span>}
                  </React.Fragment>)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </FadeIn>
            </div>)}
          </div>
        </div>
        <div className="text-center mt-16">
          <CustomButton variant="secondary" onClick={openModal}>Gratis kennismaking</CustomButton>
        </div>
      </div>
    </Section>

    <Section>
      <div className="text-center mb-16">
        <FadeIn>
          <SectionTag text="Ervaringen" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Wat mijn cliënten zeggen</h2>
        </FadeIn>
      </div>
      <div className="max-w-6xl mx-auto">
        <Testimonials testimonials={TESTIMONIALS} />
      </div>
    </Section>

    {/* Newsletter Section */}
    <Section id="nieuwsbrief" className="bg-[#FDF8F3]">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <SectionTag text="Nieuwsbrief" />
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Maandelijkse Glow & Nourish recepten</h2>
          <p className="text-muted-foreground mb-8">
            Schrijf je in voor mijn maandelijkse nieuwsbrief en ontvang gratis recepten, tips en inspiratie voor een gezonde leefstijl.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="newsletter-form-wrapper">
            <div className="_form_27"></div>
          </div>
        </FadeIn>
      </div>
    </Section>

  </article>
  </>;
};

export default Index;
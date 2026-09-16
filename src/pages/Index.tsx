import React, { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { m } from 'framer-motion';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import { Testimonial, FaqItem, Stat } from '@/types';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Testimonials } from '@/components/Testimonials';

import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import heroImage from '@/assets/hero-foto.webp';
import heroImageMobile from '@/assets/hero-foto-mobile.webp';
import stap1Image from '@/assets/stap-1.webp';
import stap2Image from '@/assets/stap-2.webp';
import stap3Image from '@/assets/stap-3.webp';
import stap4Image from '@/assets/stap-4.webp';
import daniqueDarm from '@/assets/danique-darm.webp';
import daniqueRelaxed from '@/assets/danique-relaxed.webp';
import hetProces from '@/assets/het-proces.webp';
import daniqueKleedZand from '@/assets/danique-kleed-zand.webp';
import { GENERAL_TESTIMONIALS as TESTIMONIALS } from '@/data/testimonials';

const TREATMENTS = [{
  id: 'bloedsuikertraject',
  title: "1:1 Bloedsuikertraject",
  description: "In 2 weken tijd naar stabiele energie, minder cravings en meer vertrouwen in je lichaam met behulp van een 14-daagse glucosesensor.",
  image: daniqueRelaxed
}, {
  id: 'hormoontraject',
  title: "1:1 Hormoontraject",
  description: "In 3 maanden tijd naar een hormonale balans, rust en vertrouwen in je lijf. Voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans.",
  image: hetProces
}, {
  id: 'darmtraject',
  title: "1:1 Darmtraject",
  description: "Een diepgaand 1:1 traject incl. lab onderzoek om tot de kern van jouw klacht te komen.",
  image: daniqueDarm
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
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">{text}</div>;

const COMPLAINT_BLOCKS: { title: string; complaints: string[] }[] = [{
  title: 'Hormonen en cyclus',
  complaints: ['Veel last van PMS', 'Pijnlijke of hevige menstruaties', 'Een onregelmatige cyclus', 'PCOS/ PMOS', 'Schildklierproblemen', 'Zwanger worden of je voorbereiden op een zwangerschap', 'Klachten rondom de overgang of menopauze']
}, {
  title: 'Darmen en spijsvertering',
  complaints: ['Een opgeblazen buik (na het eten)', 'Veel last van winderigheid', 'Vaak verstopt zitten of juist diarree', 'Prikkelbare darm (PDS)', 'Maagzuur of andere verteringsklachten', 'Voedselintoleranties of het vermoeden daarvan']
}, {
  title: 'Energie en bloedsuiker',
  complaints: ['Moe wakker worden, ook na genoeg slaap', 'Energiedips gedurende de dag', 'Cravings of veel trek in zoet', 'Brain fog en moeite met focussen', 'Moeite met inslapen of doorslapen', 'Schommelingen in je bloedsuikerspiegel']
}, {
  title: 'Huid en haar',
  complaints: ['Acne die steeds terugkomt', 'Een droge of gevoelige huid', 'Eczeem of rode, geïrriteerde plekken', 'Rosacea', 'Haaruitval', 'Een onrustige huid die regelmatig opvlamt']
}];

const ComplaintBlocks = () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
  {COMPLAINT_BLOCKS.map((block, index) => <FadeIn key={block.title} delay={index * 0.1} className="h-full">
    <div className="bg-card border border-secondary/30 rounded-2xl p-8 h-full">
      <div className="flex items-start gap-5">
        <span className="font-serif text-2xl text-secondary/70 leading-none pt-1 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-5">{block.title}</h3>
          <ul className="space-y-2.5">
            {block.complaints.map(complaint => <li key={complaint} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden="true" />
              {complaint}
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  </FadeIn>)}
</div>;

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openModal } = useBookingModal();


  return <>
    <SEO 
      canonicalUrl="/"
      description="Herstel je hormonale balans, darmgezondheid en energie met orthomoleculaire therapie. Persoonlijke begeleiding via de CIRCLE-methode voor duurzame gezondheid."
    />
    <article className="min-h-screen">
    <section className="relative h-screen flex items-center overflow-hidden bg-foreground" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        {/* Eén <picture> in plaats van twee <img>-tags met CSS-toggle: zo
            downloadt de browser alleen het beeld dat hij echt toont, in
            plaats van beide met hoge prioriteit. */}
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImage} />
          <img src={heroImageMobile} alt="Danique Kwakman orthomoleculair therapeut - hormoonbalans en darmgezondheid specialist" className="w-full h-full object-cover object-center md:object-right" loading="eager" fetchPriority="high" decoding="async" />
        </picture>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.15]">
            Orthomoleculair hormoon- <span className="text-secondary">en</span> darmtherapeut in Hoorn
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
             Van een opgeblazen buik, vermoeidheid en een onregelmatige cyclus tot cravings, PMS of het gevoel dat je lichaam niet meer meewerkt. 

             Met mijn CIRCLE-methode kijken we naar het geheel en werken we stap voor stap aan de oorzaken achter jouw klachten.

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">
            <CustomButton variant="secondary" onClick={openModal} className="w-56 max-w-full">Gratis kennismaking</CustomButton>
            <Link to="/method" className="w-56 max-w-full">
              <CustomButton variant="outline" className="w-full">Mijn methode</CustomButton>
            </Link>
          </div>
        </div>
      </div>
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
      <ComplaintBlocks />
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
          const linkPath = `/${treatment.id}`;
          return (
            <FadeIn key={treatment.id} delay={index * 0.2} className="h-full">
              <Link to={linkPath} className="h-full block">
                <m.div className="bg-card rounded-2xl overflow-hidden shadow-xs border border-secondary/30 h-full flex flex-col cursor-pointer" whileHover={{
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
                    <m.div className="absolute inset-0 bg-foreground/0" whileHover={{
                      backgroundColor: "hsl(var(--foreground) / 0.1)"
                    }} transition={{
                      duration: 0.5
                    }} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-xl text-card-foreground mb-3">{treatment.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{treatment.description}</p>
                    <m.div className="flex items-center text-primary font-medium mt-auto text-sm" whileHover={{
                      x: 8
                    }} transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}>
                      Bekijk traject<span className="sr-only"> {treatment.title}</span> <ArrowRight className="w-4 h-4 ml-2" />
                    </m.div>
                  </div>
                </m.div>
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
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
              Liever zelf aan de slag in de keuken? Start met{' '}
              <Link to="/webshop" className="text-primary underline underline-offset-4">
                het e-book met 50+ hormoonproof recepten
              </Link>.
            </p>

          </FadeIn>
        </div>
        <div className="relative">
          <m.div className="hidden lg:block absolute left-1/2 top-0 w-px bg-secondary -translate-x-1/2" initial={{
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
                <m.div initial={{
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
                  <img loading="lazy" decoding="async" src={step.image} alt={`${step.title} - CIRCLE-methode van Danique Kwakman`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </m.div>
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


  </article>
  </>;
};

export default Index;
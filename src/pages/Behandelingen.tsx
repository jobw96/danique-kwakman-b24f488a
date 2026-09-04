import React from 'react';
import { Link } from '@/lib/router-compat';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { ArrowRight } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import daniqueGlowup from '@/assets/danique-glowup.webp';
import daniqueDarm from '@/assets/danique-darm.webp';
import daniqueBloedsuiker from '@/assets/danique-walking-beach.webp';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">{text}</div>
);

const treatments = [
  {
    id: 'bloedsuikertraject',
    image: daniqueBloedsuiker,
    title: "1:1 Bloedsuikertraject",
    description: "In 2 weken tijd naar stabiele energie, minder cravings en meer vertrouwen in je lichaam met een 14-daagse glucosesensor.",
    href: "/bloedsuikertraject"
  },
  {
    id: 'hormoontraject',
    image: daniqueGlowup,
    title: "1:1 Hormoontraject",
    description: "In 3 maanden tijd naar een hormonale balans, rust en vertrouwen in je lijf. Voor vrouwen met PMS, PCOS, vermoeidheid of hormonale disbalans.",
    href: "/hormoontraject"
  },
  {
    id: 'darmtraject',
    image: daniqueDarm,
    title: "1:1 Darmtraject Therapie",
    description: "Een diepgaand 1:1 traject incl. lab onderzoek om tot de kern van jouw klacht te komen.",
    href: "/darmtraject"
  }
];

/**
 * Toelichting per traject. De inhoud is samengevat uit de trajectpagina's
 * zelf (voor wie, wat erbij zit, looptijd), zodat deze pagina en de
 * detailpagina's hetzelfde verhaal vertellen.
 */
const explanations = [
  {
    id: 'bloedsuikertraject',
    title: '1:1 Bloedsuikertraject',
    href: '/bloedsuikertraject',
    meta: '2 weken · online of in Hoorn',
    linkLabel: 'Alles over het Bloedsuikertraject',
    body: [
      'Dit traject is er voor jou als je door de dag heen energiedips hebt, steeds trek houdt in iets zoets en merkt dat eten onrust geeft in plaats van rust. Twee weken lang draag je een glucosesensor die continu meet hoe jouw lichaam op voeding, beweging en stress reageert. Daarmee stoppen we met gissen: je ziet zwart-op-wit waar je bloedsuiker piekt en daalt.',
      'Je begint met een kennismakingsgesprek en een uitgebreide intake. Na een week volgt een check-in, na twee weken het eindconsult waarin we jouw glucosegegevens samen doornemen. Je krijgt een persoonlijk plan op basis van voeding en leefstijl, een boodschappenlijst en een weekmenu, en tussendoor kun je me bereiken via WhatsApp.',
    ],
  },
  {
    id: 'hormoontraject',
    title: '1:1 Hormoontraject',
    href: '/hormoontraject',
    meta: '3 maanden · online of in Hoorn',
    linkLabel: 'Alles over het Hormoontraject',
    body: [
      'Herken je PMS, PCOS, aanhoudende vermoeidheid of het gevoel dat je hormonen je dag bepalen? In drie maanden werken we toe naar meer rust in je lijf én je hoofd. Niet met een standaardprotocol, maar met een aanpak die volgt wat jouw cyclus en jouw klachten laten zien.',
      'Je krijgt drie persoonlijke sessies van een uur, een behandelplan dat voeding, leefstijl, mindset, je cyclus en je darmgezondheid samenneemt, en praktische hulpmiddelen zoals cyclus-trackers, receptenboeken en werkboeken. Tussen de sessies door heb je intensieve begeleiding via WhatsApp, zodat je niet twee weken met een vraag blijft zitten.',
    ],
  },
  {
    id: 'darmtraject',
    title: '1:1 Darmtraject Therapie',
    href: '/darmtraject',
    meta: '± 6 maanden · online of in Hoorn',
    linkLabel: 'Alles over het Darmtraject',
    body: [
      'Het meest diepgaande traject, voor als je al langere tijd darmklachten hebt die je dagelijks leven beïnvloeden. Je merkt dat voeding, stress of je cyclus invloed heeft op hoe je buik reageert, maar je komt er niet achter waaróm. Daarom starten we hier met gericht laboratoriumonderzoek: een ontlastingsonderzoek en een voedselintolerantietest.',
      'Op basis van die uitslagen doorlopen we vier fases: voorbereiding, opruimen, versterken en stabiliseren. Je hebt vijf sessies van een uur, een behandelplan dat op jouw labuitslagen is gebouwd, en WhatsApp-support gedurende het hele traject. De labkosten zijn niet inbegrepen; het lab factureert die rechtstreeks aan jou.',
    ],
  },
];

const Behandelingen = () => {
  const { openModal } = useBookingModal();
  return (
    <div className="min-h-screen">
      <SEO
        title="Aanbod Trajecten | Hormonen, Darmen & Bloedsuiker"
        description="Bekijk de 1:1 trajecten van Danique Kwakman: Bloedsuiker-, Hormoon- en Darmtraject voor stabiele energie, hormoonbalans en darmherstel."
        canonicalUrl="/behandelingen"
      />
      <Section className="pt-4 bg-background">
        <div className="text-center mb-16">
          <FadeIn>
          <SectionTag text="Trajecten" />
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Behandelingen voor Hormoonbalans, Darmgezondheid en Bloedsuiker</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Drie 1:1 trajecten, elk met een eigen startpunt: je bloedsuiker, je hormonen of je darmen. Welk traject bij je past hangt af van je klachten en van hoe diep je wilt gaan. Weet je het niet zeker? Plan dan een gratis kennismaking, dan kijken we er samen naar.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <FadeIn key={treatment.id} delay={index * 0.2} className="h-full">
              <Link to={treatment.href} className="h-full block">
                <motion.div 
                  className="bg-card rounded-2xl overflow-hidden shadow-xs border border-secondary/30 h-full flex flex-col cursor-pointer" 
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "hsl(var(--primary) / 0.3)"
                  }} 
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                >
                  <div className="h-64 overflow-hidden relative">
                    <ParallaxImage 
                      src={treatment.image} 
                      alt={`${treatment.title} - traject voor vrouwen met gezondheidsklachten`} 
                      className="w-full h-full" 
                    />
                    <motion.div 
                      className="absolute inset-0 bg-foreground/0" 
                      whileHover={{
                        backgroundColor: "hsl(var(--foreground) / 0.1)"
                      }} 
                      transition={{
                        duration: 0.5
                      }} 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="font-serif text-xl text-card-foreground mb-3">{treatment.title}</h2>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{treatment.description}</p>
                    <motion.div 
                      className="flex items-center text-primary font-medium mt-auto text-sm" 
                      whileHover={{
                        x: 8
                      }} 
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                    >
                      Bekijk traject<span className="sr-only"> {treatment.title}</span> <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
        
        {/* Toelichting per traject, zodat deze pagina op zichzelf uitlegt
            waar de trajecten in verschillen. */}
        <div className="max-w-3xl mx-auto mt-24">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 text-center">
              Welk traject past bij jou?
            </h2>
            <p className="text-muted-foreground text-center mb-14 leading-relaxed">
              Hieronder lees je per traject voor wie het bedoeld is en wat je krijgt.
            </p>
          </FadeIn>

          <div className="space-y-14">
            {explanations.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <article className="border-t border-secondary/40 pt-8">
                  <h3 className="font-serif text-2xl text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-primary mb-5">{item.meta}</p>
                  <div className="space-y-4">
                    {item.body.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-primary font-medium mt-5 text-sm hover:underline underline-offset-4"
                  >
                    {item.linkLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            Twijfel je welk traject het beste aansluit? In een gratis kennismakingsgesprek bespreken we je klachten en kijken we samen wat past.
          </p>
          <CustomButton variant="secondary" onClick={openModal}>Gratis kennismaking</CustomButton>
        </div>
      </Section>
    </div>
  );
};

export default Behandelingen;

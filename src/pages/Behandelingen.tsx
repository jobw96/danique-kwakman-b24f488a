import React from 'react';
import { Link } from '@/lib/router-compat';
import { m } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { ArrowRight } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import daniqueGlowup from '@/assets/danique-glowup.webp';
import daniqueDarm from '@/assets/danique-darm.webp';
import daniqueBeach from '@/assets/danique-beach.webp';
import daniqueBloedsuiker from '@/assets/danique-walking-beach.webp';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium tracking-wide">{text}</div>
);

type Treatment = {
  id: string;
  image: string;
  title: string;
  description: string;
  href: string;
  price: string;
  comingSoon?: boolean;
};

const treatments: Treatment[] = [
  {
    id: 'bloedsuikertraject',
    image: daniqueBloedsuiker,
    title: "1:1 Bloedsuikertraject",
    description: "Met het 1:1 bloedsuikertraject krijg je in 2 weken inzicht in hoe jouw lichaam reageert op voeding, stress, beweging en slaap. Je ontdekt wat zorgt voor pieken en dalen in je bloedsuikerspiegel en leert met praktische veranderingen bouwen aan meer energie, minder cravings en een stabiele basis voor je hormonen.",
    href: "/bloedsuikertraject",
    price: '€325 eenmalig'
  },
  {
    id: 'hormoontraject',
    image: daniqueGlowup,
    title: "1:1 Hormoontraject",
    description: "Met het 1:1 hormoontraject duiken we 3 maanden in jouw hormonale klachten. Waarom heb je zoveel last van mood swings, acne, PCOS-klachten of een luteale fase waarin je je compleet anders voelt? We brengen in kaart welke factoren jouw hormonale disbalans beïnvloeden en pakken deze gericht aan, zodat je cyclus stabieler wordt en je hormonale klachten niet langer je dagelijks leven bepalen.",
    href: "/hormoontraject",
    price: '€249 p/m'
  },
  {
    id: 'mommy-to-be',
    image: daniqueBeach,
    title: "1:1 Mommy (to be) traject",
    description: "Met het 1:1 Mommy (to be) traject help ik je stap voor stap de juiste puzzelstukjes samenbrengen. Met aandacht voor je hormonen, darmen, voeding en leefstijl, van kinderwens tot zwangerschap en postpartum.",
    href: "/mommy-to-be",
    price: '€149 p/m'
  },
  {
    id: 'darmtraject',
    image: daniqueDarm,
    title: "1:1 Darmtraject",
    description: "Met het 1:1 darmtraject begeleid ik je 6 maanden door het proces van darmherstel, inclusief labonderzoek. Zodat je eindelijk weet waarom je last hebt van een opgeblazen buik, buikpijn of een onrustige stoelgang en we je klachten stap voor stap kunnen gaan verminderen.",
    href: "/darmtraject",
    price: '€299 p/m'
  }
];

/**
 * Toelichting per traject. De inhoud is samengevat uit de trajectpagina's
 * zelf (voor wie, wat erbij zit, looptijd), zodat deze pagina en de
 * detailpagina's hetzelfde verhaal vertellen.
 */
type Explanation = {
  id: string;
  title: string;
  href: string;
  meta: string;
  linkLabel: string;
  body: string[];
};

const explanations: Explanation[] = [
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
    id: 'mommy-to-be',
    title: '1:1 Mommy (to be) traject',
    href: '/mommy-to-be',
    meta: '5 maanden · online of in Hoorn',
    linkLabel: 'Alles over het Mommy (to be) traject',
    body: [
      'Je wilt je lichaam zo goed mogelijk ondersteunen, van kinderwens en zwangerschap tot herstel na de bevalling. Of je nu graag zwanger wilt worden, al een tijdje probeert, zwanger bent of wilt werken aan je postpartum herstel? In iedere fase kijken we naar wat jouw lichaam nodig heeft.',
      'Het traject loopt vijf maanden en bestaat uit vijf afspraken: een uitgebreide intake en vier vervolgconsulten. We brengen je hormonen, darmen, voeding en leefstijl in kaart en stemmen je plan af op de fase waarin je zit. Tussen de afspraken door ben ik bereikbaar via WhatsApp.',
    ],
  },
  {
    id: 'darmtraject',
    title: '1:1 Darmtraject',
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
      <Section className="pt-12 md:pt-20 bg-background">
        <div className="text-center mb-16">
          <FadeIn>
          <SectionTag text="Trajecten" />
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Je wilt je gewoon weer goed voelen in je lichaam.</h1>
            <div className="text-muted-foreground max-w-2xl mx-auto leading-relaxed space-y-4">
              <p>
                Je probeert gezond te eten, voldoende te slapen en hebt misschien al van alles geprobeerd. En toch blijf je last houden van een opgeblazen buik, cravings, vermoeidheid, PMS, een onregelmatige cyclus, een onrustige buik of andere klachten waar je maar niet vanaf komt ...
              </p>
              <p>
                Tijd om niet langer te blijven zoeken, maar te ontdekken waar de disbalans in je lichaam is ontstaan en wat jouw lichaam nodig heeft.
              </p>
              <p>
                Hieronder vind je mijn verschillende trajecten. Weet je nog niet welke bij jou past? Tijdens een vrijblijvend kennismakingsgesprek kijken we samen wat jouw lijf nodig heeft.
              </p>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => {
            const card = <m.div
              className={`bg-card rounded-2xl overflow-hidden border border-secondary/30 h-full flex flex-col${treatment.comingSoon ? '' : ' cursor-pointer'}`}
              whileHover={treatment.comingSoon ? undefined : {
                y: -8,
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
                {!treatment.comingSoon && <m.div
                  className="absolute inset-0 bg-foreground/0"
                  whileHover={{
                    backgroundColor: "hsl(var(--foreground) / 0.1)"
                  }}
                  transition={{
                    duration: 0.5
                  }}
                />}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-serif text-xl text-card-foreground mb-3">{treatment.title}</h2>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{treatment.description}</p>
                {!treatment.comingSoon && <m.div
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
                </m.div>}
                {treatment.price && <p className="mt-2 text-xs text-muted-foreground">{treatment.price}</p>}
              </div>
            </m.div>;
            return (
              <FadeIn key={treatment.id} delay={index * 0.2} className="h-full">
                {treatment.comingSoon ? card : <Link to={treatment.href} className="h-full block">{card}</Link>}
              </FadeIn>
            );
          })}
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
                  {item.href && <Link
                    to={item.href}
                    className="inline-flex items-center text-primary font-medium mt-5 text-sm hover:underline underline-offset-4"
                  >
                    {item.linkLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>}
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

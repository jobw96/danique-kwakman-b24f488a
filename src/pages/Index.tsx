import React, { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { m } from 'framer-motion';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import { Testimonial, FaqItem, Stat } from '@/types';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { Testimonials } from '@/components/Testimonials';
import { InstagramFeed } from '@/components/InstagramFeed';

import { useBookingModal } from '@/components/BookingModal';
import SEO from '@/components/SEO';
import heroImage from '@/assets/hero-foto.webp';
import heroImageMobile from '@/assets/hero-foto-mobile.webp';
import daniqueAbout from '@/assets/danique-about.webp';
import daniqueDarm from '@/assets/danique-darm.webp';
import daniqueRelaxed from '@/assets/danique-relaxed.webp';
import hetProces from '@/assets/het-proces.webp';
import daniqueKleedZand from '@/assets/danique-kleed-zand.webp';
import { GENERAL_TESTIMONIALS as TESTIMONIALS } from '@/data/testimonials';
import nourishCover from '@/assets/nourish-your-body-cover-2.webp.asset.json';
import nourishCoverJpeg from '@/assets/nourish-your-body-cover.jpeg.asset.json';

const EBOOK_CHECKOUT_URL = 'https://daniquekwakman.plugandpay.com/checkout/nourish-your-body';
const EBOOK_PRICE = '€39,99';

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
             <br />
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

    <Section className="pb-0 md:pb-0">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug mb-8">
            Je voelt dat er iets niet klopt
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Je bent al zo vaak van huisarts naar huisarts gegaan. Je bloedwaarden zijn &ldquo;goed&rdquo;, je krijgt te horen dat het waarschijnlijk stress is of dat je er maar mee moet leren leven of je terug kan komen als je zwanger wilt worden. Maar ondertussen blijf jij zitten met een opgeblazen buik, vermoeidheid, cravings, een onregelmatige cyclus of andere vervelende klachten.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Je voelt aan alles dat dit er niet zomaar bij hoort..
          </p>
        </FadeIn>
      </div>
    </Section>

    <Section id="services">
      <div className="text-center mb-16">
        <FadeIn>
          <SectionTag text="Specialisaties" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Start je nieuwe way of life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Voel je weer energiek en lekker in je vel, zonder eindeloos te zoeken naar wat je nu weer moet eten of veranderen. Samen brengen we in kaart wat er speelt en werken we stap voor stap toe naar meer energie, een rustige buik en dat zonder hormonale klachten.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Hier help ik je onder andere bij:</p>
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

    <Section id="over-mij" className="bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <FadeIn direction="left">
          <div className="relative rounded-t-full rounded-b-md overflow-hidden bg-secondary/10 aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full">
            <img loading="lazy" decoding="async" src={daniqueAbout} alt="Danique Kwakman, orthomoleculair hormoon- en darmtherapeut in Hoorn" className="w-full h-full object-cover object-top" />
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.15}>
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Hi, ik ben Danique</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Van 10+ jaar hormonale klachten naar een klachtenvrij lijf</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jarenlang ging ik van huisarts naar huisarts om na de zoveelste 'leer er mee leven' de diagnose PCOS te krijgen.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            De reguliere zorg hielp me aan de diagnose, maar ik miste handvatten om mijn lichaam en klachten in het dagelijks leven te ondersteunen. Daar begon mijn zoektocht naar het waarom.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Die zoektocht vormt nu de basis van hoe ik jou begeleid.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Als orthomoleculair hormoon- en darmtherapeut en ex-verpleegkundige kijk ik verder dan alleen je klachten. Ik combineer mijn achtergrond in de reguliere zorg met wetenschappelijke kennis, voeding, leefstijl en laboratoriumonderzoek.&nbsp;

            We brengen niet alleen je klachten in kaart, maar kijken ook naar de samenhang tussen je hormonen, darmen, voeding, bloedsuiker, slaap en stress. Zo krijgen we inzicht in wat er achter jouw klachten speelt en werken we gericht aan een plan dat bij jou past.

          </p>
          <Link to="/over-mij">
            <CustomButton variant="secondary">Lees meer over mij</CustomButton>
          </Link>
        </FadeIn>
      </div>
    </Section>

    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug mb-8">
            Je wilt je gewoon weer goed voelen
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Niet meer je broek losmaken na het eten omdat je buik zo opgezet is. Niet om 15.00 uur compleet instorten. Niet iedere maand denken: wanneer komt mijn menstruatie nou weer? Of steeds twijfelen of je dat etentje wel moet doen omdat je bang bent voor hoe je buik daarna voelt.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Je wilt wakker worden met energie, lekker kunnen eten zonder gedoe, je goed voelen in je lichaam en niet de hele dag met je gezondheid bezig zijn.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Gewoon weer kunnen sporten, werken, afspreken en genieten zonder dat je klachten steeds op de voorgrond staan.
          </p>
        </FadeIn>
      </div>
    </Section>

    <Section>
        <FadeIn>
          <SectionTag text="Ervaringen" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Wat mijn cliënten zeggen</h2>
        </FadeIn>
      </div>
      <div className="max-w-6xl mx-auto">
        <Testimonials testimonials={TESTIMONIALS} />
      </div>
    </Section>

    <Section className="bg-secondary/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeIn>
          <picture className="block">
            <source srcSet={nourishCover.url} type="image/webp" />
            <img
              src={nourishCoverJpeg.url}
              alt="E-book Nourish Your Body van Danique Kwakman met 50+ hormoonproof recepten"
              className="w-full max-w-md mx-auto h-auto object-contain rounded-xl"
              width={1080}
              height={1101}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary mb-4">{"\n"}</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            E-BOOK NOURISH YOUR BODY{"\n"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Je krijgt niet alleen&nbsp;50+ hormoonproof en darmvriendelijke recepten, maar ook&nbsp;
            praktische handvatten om&nbsp;te eten volgens je cyclus, mealprep- en keukenhacks en tools&nbsp;
            om zelf voedzame maaltijden samen te stellen. Zodat gezond eten voor je&nbsp;
            hormonen, darmen en energie&nbsp;makkelijker wordt, zonder ingewikkelde ingrediënten of uren in de keuken.
          </p>
          <p className="font-serif text-3xl md:text-4xl text-foreground mb-8">Nu voor {EBOOK_PRICE}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={EBOOK_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <CustomButton>Bestel direct</CustomButton>
            </a>
            <Link to="/webshop">
              <CustomButton variant="secondary">Meer info</CustomButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>

    <InstagramFeed />
  </article>
  </>;
};

export default Index;

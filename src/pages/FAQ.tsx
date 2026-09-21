import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section } from '@/components/Section';
import { FadeIn, StaggerContainer } from '@/components/Animations';
import { Link } from '@/lib/router-compat';

interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Worden de trajecten vergoed?',
    answer: 'Nee, ondanks dat ik de juiste opleidingen heb gevolgd werk ik niet meer samen met zorgverzekeraars. Ik hoop dat mijn klanten de trajecten zien als een duurzame investering in zichzelf. Deze investering verdien je terug door de energie die je ervaart, hormonale balans, een blije buik en mentaal welzijn door een gezond lijf. Je gezondheid is elke cent waard.'
  },
  {
    question: 'Kan ik de trajecten ook online volgen?',
    answer: 'Ja zeker, zowel de intake als de vervolgafspraken kunnen in Hoorn (Muntstraat 18, 1621 GB Hoorn) of online via Zoom plaatsvinden.'
  },
  {
    question: 'Kan ik dit traject combineren met andere behandelingen of begeleiding?',
    answer: 'Ja, mijn aanpak is complementair en kan vaak gecombineerd worden met reguliere zorg of andere therapieën.'
  },
  {
    question: 'Zijn labonderzoeken (zoals bloed-, ontlasting- of hormoontesten) mogelijk?',
    answer: 'Ja, wanneer dat nodig is. Tijdens het traject kijken we samen of (extra) labonderzoek waarde toevoegt voor jouw situatie. Denk aan hormonentesten, darmonderzoek of vitamines.'
  },
  {
    question: 'Staat je gehele aanbod op je website?',
    answer: 'De basis van mijn aanbod vind je hier op de website. Andere programma\'s, gratis videotrainingen, masterclasses en trainingen deel ik niet altijd op mijn website. Wil je niets missen en op de hoogte blijven? Volg me dan op Instagram'
  },
  {
    question: 'Bij de huisarts waren mijn bloedwaarden goed. Waarom zou aanvullend laboratoriumonderzoek dan nog iets kunnen toevoegen?',
    answer: 'Regulier bloedonderzoek is waardevol en wordt vooral ingezet om ziekten en medische afwijkingen op te sporen of uit te sluiten. Wanneer daar geen duidelijke afwijkingen uit komen, betekent dat niet automatisch dat er geen aanvullende informatie te verkrijgen is.\n\nIn mijn begeleiding kan aanvullend laboratoriumonderzoek van RP Sanitas Humanus worden ingezet om bepaalde puzzelstukjes verder te onderzoeken. Afhankelijk van jouw klachten en hulpvraag kan dit bijvoorbeeld informatie geven over hormonen, voedingsstoffen of andere relevante waarden.\n\nIk werk met laboratoriumonderzoek en niet met energetische of niet-laboratoriumgerichte testmethoden, zoals een EMB-test. De uitslagen zie ik altijd als aanvulling op de uitgebreide intake en mijn begeleiding met voeding en leefstijl.\n\nAanvullend onderzoek is geen standaard onderdeel van ieder traject. Eerst brengen we jouw klachten en situatie uitgebreid in kaart. Daarna kijken we of onderzoek iets kan toevoegen aan jouw begeleiding.'
  },
  {
    question: 'Geef je ook los supplementenadvies?',
    answer: 'Nee, ik ben geen drogisterij 😉 Supplementen zijn voor mij een aanvulling op de basis en geen vervanging van voeding, leefstijl en andere belangrijke onderdelen van je gezondheid.\n\nBinnen mijn trajecten werk ik wél met supplementen wanneer dat iets toevoegt. Bijvoorbeeld om een tekort aan te vullen of je lichaam tijdelijk extra te ondersteunen. Maar ik wil niet dat je voor iedere klacht een nieuw potje moet aanschaffen.\n\nAls je bijvoorbeeld voedingsstoffen slecht opneemt door problemen in je maag of darmen, heeft het weinig zin om steeds meer en duurdere supplementen toe te voegen. Daarom kijken we eerst naar de basis en naar wat er bij jou speelt.\n\nMijn doel is niet dat je de rest van je leven een hele kast vol supplementen nodig hebt. Supplementen worden waar nodig tijdelijk ingezet, terwijl we tegelijkertijd werken aan de basis. Je krijgt daarnaast een plan voor de toekomst, zodat je weet wat bij jouw lichaam past en hoe je je gezondheid kunt blijven ondersteunen zonder iedere maand een fortuin aan supplementen uit te geven.'
  },
  {
    question: 'Kan ik ook een traject volgen als ik geen specifieke hormoon- of darmklachten heb?',
    answer: 'Ja, zeker. Niet iedere klacht past netjes in één hokje. Misschien heb je bijvoorbeeld last van een hoge bloeddruk, huidklachten, vermoeidheid, cravings of andere klachten waar je niet direct een hormoon- of darmprobleem aan kunt koppelen.\n\nHet 1:1 Hormoontraject kan dan alsnog passend zijn. We kijken namelijk niet alleen naar je hormonen. We brengen ook je voedingspatroon, energie-inname, slaap, beweging, stress, herstel en andere relevante factoren in kaart. Juist deze basis speelt bij veel verschillende gezondheidsklachten een rol.\n\nMijn trajecten duren daarom meerdere maanden. Je klachten zijn meestal niet van de ene op de andere dag ontstaan en ik geloof ook niet in een oplossing waarbij je na één gesprek een lijstje meekrijgt en klaar bent. Je lichaam heeft tijd nodig om te herstellen en nieuwe gewoontes hebben tijd nodig om onderdeel te worden van je dagelijks leven.\n\nWeet je niet zeker welk traject bij jouw situatie past? Plan dan een gratis en vrijblijvende kennismaking.'
  },
  {
    question: 'Kan ik in termijnen betalen?',
    answer: 'Uiteraard is dat mogelijk! Je kunt dit aangeven tijdens het kennismakingsgesprek en dan denk ik met je mee naar passende termijnen. '
  }
];

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">
    {text}
  </div>
);

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen pb-20">
      {/* Het FAQPage-schema staat in src/routes/_layout/faq.tsx, zodat het in
          de server-response staat in plaats van pas na hydratie. */}
      <Section className="pt-4">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionTag text="Veelgestelde vragen" />
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Veelgestelde vragen 
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hier vind je antwoorden op de meest gestelde vragen
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <m.div
                className="border-b border-secondary/30 mb-4 last:mb-0"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {/* De vraag staat in een h2 zodat Google en screenreaders de
                    koppenstructuur zien; visueel verandert er niets. */}
                <m.button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-hidden group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  aria-expanded={openFaq === idx}
                >
                  <m.h2
                    className="text-lg font-medium pr-4"
                    animate={{
                      color: openFaq === idx ? 'hsl(var(--primary))' : 'hsl(var(--foreground))'
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {item.question}
                  </m.h2>
                  <m.div
                    animate={{
                      rotate: openFaq === idx ? 45 : 0,
                      scale: openFaq === idx ? 1.1 : 1,
                      color: openFaq === idx ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="shrink-0"
                  >
                    <Plus className="w-5 h-5" />
                  </m.div>
                </m.button>
                <m.div
                  initial={false}
                  animate={{
                    height: openFaq === idx ? "auto" : 0,
                    opacity: openFaq === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 space-y-4">
                    {item.answer.split('\n\n').map((paragraph, pIdx) => {
                      const marker = 'Volg me dan op Instagram';
                      const at = paragraph.indexOf(marker);
                      if (at === -1) {
                        return (
                          <p key={pIdx} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      }
                      return (
                        <p key={pIdx} className="text-muted-foreground leading-relaxed">
                          {paragraph.slice(0, at)}
                          <a
                            href="https://www.instagram.com/daniquekwakman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline underline-offset-2 hover:opacity-80"
                          >
                            {marker}
                          </a>
                          {paragraph.slice(at + marker.length)}
                        </p>
                      );
                    })}
                  </div>
                </m.div>
              </m.div>
            </FadeIn>
          ))}
        </StaggerContainer>

        <div className="text-center mt-16">
          <FadeIn>
            <p className="text-muted-foreground">
              Staat jouw vraag er niet tussen?{' '}
              <Link to="/contact" className="text-primary underline underline-offset-2 hover:opacity-80">
                neem dan contact op
              </Link>
            </p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default FAQ;

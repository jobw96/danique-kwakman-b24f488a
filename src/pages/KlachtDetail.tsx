import { useState } from 'react';
import { m } from 'framer-motion';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { complaints, findComplaint } from '@/data/complaints';
import { Link, Navigate, useParams } from '@/lib/router-compat';

const irregularCycleContent = {
  recognition: [
    'Je cyclus duurt de ene maand 30 dagen en de volgende maand ineens 45 dagen of langer.',
    'Je menstruatie blijft soms weken of maanden uit, zonder dat je zwanger bent.',
    'Je hebt juist een korte cyclus en wordt vaker ongesteld dan je verwacht.',
    'Je weet niet goed of en wanneer je een ovulatie hebt.',
    'Je hebt tussentijds bloedverlies of spotting en vindt het lastig om te bepalen wat bij jouw cyclus hoort.',
    'Naast een onregelmatige menstruatie heb je klachten zoals acne, haaruitval, cravings, vermoeidheid of moeite met afvallen.',
    'Je bent gestopt met hormonale anticonceptie, maar je natuurlijke cyclus komt niet goed op gang.',
  ],
  factors: [
    {
      title: 'Ovulatie en hormonale aansturing',
      text: 'De lengte van je cyclus wordt voor een groot deel bepaald door de periode vóór je ovulatie. Als een eicel later rijpt of de ovulatie uitblijft, duurt je cyclus langer en komt je menstruatie later. Dat is waarom ik niet alleen kijk naar de dag waarop je bloedt, maar juist naar wat er gedurende je hele cyclus gebeurt.',
    },
    {
      title: 'PCOS/PMOS, bloedsuiker en insuline',
      text: 'Bij PCOS/PMOS komen een onregelmatige ovulatie en lange cycli vaak voor. Insuline speelt hierbij regelmatig een rol. Grote bloedsuikerschommelingen en een verhoogde aanmaak van insuline kunnen de hormonale aansturing beïnvloeden. Cravings, energiedips, acne of makkelijker aankomen zijn daarom relevante signalen om mee te nemen.',
    },
    {
      title: 'Voeding, energie-inname en beweging',
      text: 'Je lichaam heeft voldoende energie, eiwitten, vetten en micronutriënten nodig om een cyclus aan te sturen. Structureel te weinig eten, veel sporten zonder genoeg herstel of snel gewicht verliezen kan ervoor zorgen dat een menstruatie onregelmatig wordt of uitblijft. “Gezond eten” is dus niet automatisch hetzelfde als genoeg eten voor wat jouw lichaam dagelijks vraagt.',
    },
    {
      title: 'Stress, slaap en herstel',
      text: 'Bij langdurige stress moet je lichaam steeds prioriteiten stellen. De signalen tussen je hersenen en eierstokken kunnen daardoor veranderen, waardoor een ovulatie later komt of uitblijft. Ook slecht slapen, weinig rust en steeds doorgaan tellen hierin mee. Het gaat niet om één drukke dag, maar om de belasting die zich over langere tijd opstapelt.',
    },
    {
      title: 'Schildklier en stoppen met anticonceptie',
      text: 'Schildklierhormonen zijn betrokken bij je stofwisseling én je menstruatiecyclus. Daarom verdient de schildklier aandacht wanneer je cyclus verandert en je bijvoorbeeld ook erg moe bent, het vaak koud hebt of haar verliest. Na stoppen met de pil of andere hormonale anticonceptie heeft je eigen cyclus soms tijd nodig om weer zichtbaar te worden. Blijft je menstruatie lang uit, dan is beoordelen door je huisarts belangrijk.',
    },
  ],
  widerSignals: [
    'energie en bloedsuikerschommelingen door de dag heen',
    'acne, haaruitval of toegenomen haargroei',
    'PMS, pijnlijke menstruaties of hevig bloedverlies',
    'darmklachten en hoe je voeding wordt verteerd',
    'slaap, stressbelasting en ruimte voor herstel',
    'je eetpatroon, beweging en of je voldoende energie binnenkrijgt',
  ],
  together: [
    'Je cyclusverloop, menstruaties, mogelijke ovulaties en klachten door de maand heen',
    'Je voeding, energie-inname, bloedsuiker, beweging en herstel',
    'Signalen die kunnen passen bij PCOS/PMOS, schildklierklachten of een andere hormonale hulpvraag',
    'Je slaap, stressbelasting, darmen, huid, haar en energieniveau',
    'Eerdere onderzoeken, medicatie, hormonale anticonceptie en wat je zelf al hebt geprobeerd',
  ],
  faqs: [
    {
      question: 'Wanneer is een menstruatiecyclus onregelmatig?',
      answer: 'Een cyclus hoeft niet precies 28 dagen te duren. Veel volwassen vrouwen hebben een cyclus van ongeveer 21 tot 35 dagen. Vooral sterke verschillen tussen opeenvolgende cycli, heel korte of lange cycli en een menstruatie die herhaaldelijk uitblijft zijn redenen om verder te kijken. Eén afwijkende maand na ziekte, reizen of een stressvolle periode vertelt nog niet het hele verhaal.',
    },
    {
      question: 'Wat betekent het als mijn cyclus 40 of 60 dagen duurt?',
      answer: 'Bij een lange cyclus vindt de ovulatie vaak later plaats of blijft deze uit. Dat kan samenhangen met onder andere PCOS/PMOS, stress, onvoldoende energie-inname, intensief sporten, veranderingen in gewicht, de schildklier of herstel na hormonale anticonceptie. Laat een menstruatie die regelmatig lang uitblijft medisch beoordelen.',
    },
    {
      question: 'Kan ik een onregelmatige cyclus hebben en toch ovuleren?',
      answer: 'Ja. Bij wisselende cycli kan er wel een ovulatie zijn, maar deze valt dan niet iedere maand rond hetzelfde moment. Bij sommige cycli blijft de ovulatie uit. Een app voorspelt dit op basis van eerdere maanden en is daarom bij een onregelmatige cyclus niet altijd betrouwbaar.',
    },
    {
      question: 'Kan stress mijn menstruatie onregelmatig maken?',
      answer: 'Langdurige lichamelijke of mentale stress kan de hormonale aansturing van de ovulatie beïnvloeden. Ook weinig slaap, veel trainen en onvoldoende herstel zijn vormen van belasting. Daarom kijk ik niet alleen naar hoe druk je agenda is, maar ook naar wat je lichaam dagelijks moet opvangen.',
    },
    {
      question: 'Welke rol spelen voeding en bloedsuiker bij mijn cyclus?',
      answer: 'Voldoende energie en voedingsstoffen zijn nodig voor de aanmaak en aansturing van hormonen. Daarnaast kunnen sterke bloedsuikerschommelingen en veel insuline relevant zijn, vooral wanneer een onregelmatige cyclus samengaat met PCOS/PMOS, cravings, energiedips of acne. De aanpak verschilt per vrouw en is geen standaard voedingslijst.',
    },
    {
      question: 'Wanneer komt mijn cyclus terug na stoppen met de pil?',
      answer: 'Dat verschilt per vrouw. De bloeding tijdens de stopweek was geen natuurlijke menstruatie; na stoppen moet de eigen hormonale aansturing weer zichtbaar worden. Geef je lichaam tijd, maar neem contact op met je huisarts als je menstruatie langdurig uitblijft of als je je zorgen maakt.',
    },
    {
      question: 'Wanneer moet ik met een onregelmatige menstruatie naar de huisarts?',
      answer: 'Neem contact op met je huisarts wanneer je menstruatie zonder duidelijke reden drie maanden uitblijft, bij een mogelijke zwangerschap, zeer hevig bloedverlies, ernstige pijn, bloedverlies na de overgang of wanneer je je zorgen maakt. Ook bij een kinderwens is het verstandig om een sterk wisselende of uitblijvende cyclus tijdig te bespreken.',
    },
  ],
};

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const IrregularCycleFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      {irregularCycleContent.faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-secondary/40">
            <m.button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-5 py-6 text-left focus:outline-hidden"
              aria-expanded={isOpen}
            >
              <h3 className="font-serif text-xl text-foreground">{item.question}</h3>
              <m.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-primary">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </m.span>
            </m.button>
            <m.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              className="overflow-hidden"
            >
              <p className="pb-6 leading-relaxed text-muted-foreground">{item.answer}</p>
            </m.div>
          </div>
        );
      })}
    </div>
  );
};

const KlachtDetail = () => {
  const { slug } = useParams();
  const { openModal } = useBookingModal();
  const complaint = slug ? findComplaint(slug) : undefined;

  if (!complaint) return <Navigate to="/klachten" replace />;

  const others = complaints.filter((item) => item.slug !== complaint.slug).slice(0, 6);

  if (complaint.slug === 'onregelmatige-cyclus') {
    return (
      <main className="min-h-screen bg-background">
        <Section className="pt-4 pb-14 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <Link
                to="/klachten/onderdeel/hormonen-en-cyclus"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Terug naar hormonen en cyclus
              </Link>
              <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                Een onregelmatige cyclus
              </h1>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  De ene maand word je na 30 dagen ongesteld, de volgende maand pas na 45 dagen. Soms blijft je menstruatie helemaal uit. Daardoor weet je niet wanneer je menstruatie komt, of je een ovulatie hebt en wat er nu eigenlijk in je lichaam gebeurt.
                </p>
                <p>
                  Een onregelmatige cyclus is meer dan een lastige planning. Het kan onzeker maken, zeker wanneer je zwanger wilt worden, veel andere hormonale klachten hebt of gewoon wilt begrijpen waarom je menstruatie steeds wisselt. Je wilt niet iedere maand opnieuw hoeven gokken, maar weten waar je aan toe bent.
                </p>
                <p>
                  Ik herken die zoektocht. Zelf liep ik jarenlang rond met een pijnlijke, onregelmatige menstruatie en kreeg ik uiteindelijk de diagnose PCOS. Die ervaring, mijn achtergrond als voormalig verpleegkundige en mijn kennis als orthomoleculair hormoon- en darmtherapeut neem ik mee in hoe ik naar jouw cyclus kijk: nuchter, breed en zonder zomaar een standaard protocol te volgen.
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="bg-card py-14 md:py-20">
          <FadeIn className="mx-auto max-w-4xl">
            <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">Misschien herken je dit</h2>
            <BulletList items={irregularCycleContent.recognition} />
          </FadeIn>
        </Section>

        <Section className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
            <FadeIn>
              <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
                Wat betekent een onregelmatige cyclus?
              </h2>
              <div className="space-y-4">
                <p>
                  Je menstruatiecyclus loopt van de eerste dag van je menstruatie tot de eerste dag van je volgende menstruatie. Een cyclus hoeft daarbij echt niet precies 28 dagen te duren. Bij veel volwassen vrouwen ligt de cyclus ergens tussen ongeveer 21 en 35 dagen. Belangrijker is of jouw cyclus een herkenbaar ritme heeft en hoe groot de verschillen tussen de maanden zijn.
                </p>
                <p>
                  Als je cyclus de ene maand 29 dagen en de volgende maand 32 dagen duurt, is dat iets anders dan cycli die wisselen tussen 30, 45 en 60 dagen. Ook een menstruatie die herhaaldelijk uitblijft, een heel korte cyclus of onverwacht bloedverlies vraagt om aandacht. Zeker als je daarnaast acne, haaruitval, vermoeidheid, pijn, cravings of problemen met zwanger worden ervaart.
                </p>
                <p>
                  Vaak zit de wisseling in het moment van de ovulatie. Vindt je eisprong later plaats, dan wordt je cyclus langer. Blijft een ovulatie uit, dan kan je menstruatie lang op zich laten wachten. De vraag is daarom niet alleen: “Waarom word ik niet op tijd ongesteld?”, maar ook: “Wat heeft mijn lichaam nodig om een ovulatie en cyclus goed aan te sturen?”
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="bg-card py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <FadeIn className="mb-10 max-w-3xl">
              <h2 className="mb-5 font-serif text-3xl text-foreground md:text-4xl">
                Wat kan er meespelen bij een onregelmatige menstruatie?
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Een cyclus die onregelmatig is heeft niet één vaste oorzaak. Daarom kijk ik niet alleen naar je hormonen, maar naar de omstandigheden waarin jouw lichaam die hormonen moet aanmaken en aansturen.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
              {irregularCycleContent.factors.map((factor) => (
                <FadeIn key={factor.title}>
                  <article className="border-t border-secondary/50 py-7">
                    <h3 className="mb-3 font-serif text-2xl text-foreground">{factor.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{factor.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            <FadeIn>
              <h2 className="mb-5 font-serif text-3xl text-foreground">Verder kijken dan je menstruatie</h2>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                Je cyclus staat niet los van de rest van je gezondheid. Een onregelmatige menstruatie vertelt dus nooit het hele verhaal. Afhankelijk van jouw klachten kijk ik ook naar:
              </p>
              <BulletList items={irregularCycleContent.widerSignals} />
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mb-5 font-serif text-3xl text-foreground">Waar we samen naar kijken</h2>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                Vooraf vul je uitgebreide intakeformulieren in. Tijdens de intake leggen we jouw gezondheidspuzzel: niet met een standaard lijstje, maar vanuit jouw cyclus, dagelijks leven en hulpvraag. Met mijn CIRCLE-methode brengen we verbanden in kaart en bepalen we waar je praktisch kunt beginnen.
              </p>
              <BulletList items={irregularCycleContent.together} />
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Mijn verpleegkundige achtergrond helpt me om reguliere uitslagen en medische zorg serieus mee te nemen. Waar nodig kan aanvullend{' '}
                <Link to="/labonderzoek" className="underline underline-offset-4 transition-colors hover:text-primary-dark">
                  laboratoriumonderzoek
                </Link>{' '}
                extra informatie geven. Dat is nooit automatisch de eerste stap en vervangt onderzoek door een arts niet.
              </p>
            </FadeIn>
          </div>
        </Section>

        <Section className="bg-card py-14 md:py-20">
          <FadeIn className="mx-auto max-w-3xl border-l-2 border-secondary pl-6 md:pl-8">
            <h2 className="mb-4 font-serif text-3xl text-foreground">Weten waar je aan toe bent</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Het doel is niet om je cyclus in een perfect schema te dwingen. Het gaat erom dat je begrijpt welke signalen jouw lichaam geeft en welke factoren bij jou relevant zijn.
              </p>
              <p>
                Zodat je niet iedere maand opnieuw verrast wordt, gerichter keuzes kunt maken rondom voeding, beweging en herstel en weet wanneer het verstandig is om medische hulp in te schakelen. Bij een kinderwens geeft inzicht in je cyclus bovendien meer duidelijkheid over je mogelijke ovulatie, zonder dat we vooraf een resultaat beloven.
              </p>
            </div>
          </FadeIn>
        </Section>

        <Section className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="rounded-md border border-secondary/30 bg-card p-8 text-center md:p-12">
                <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
                  Wil je weten wat er bij jou speelt?
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Tijdens een gratis kennismaking bespreken we jouw klachten en hulpvraag. Vanuit daar kijken we wat er nodig is om te begrijpen wat er in jouw lichaam speelt en welke begeleiding daarbij past.
                </p>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  Waar nodig kan aanvullend{' '}
                  <Link to="/labonderzoek" className="underline underline-offset-4 transition-colors hover:text-primary-dark">
                    laboratoriumonderzoek
                  </Link>{' '}
                  extra puzzelstukjes geven.
                </p>
                <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
                {complaint.traject && (
                  <div className="mt-6">
                    <Link
                      to={complaint.traject.href}
                      className="text-sm text-primary underline underline-offset-4 transition-colors hover:text-primary-dark"
                    >
                      {complaint.traject.label}
                    </Link>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="bg-card py-14 md:py-20">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-serif text-3xl text-foreground md:text-4xl">
              Veelgestelde vragen over een onregelmatige cyclus
            </h2>
            <IrregularCycleFaq />
          </FadeIn>
        </Section>

        <Section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="mb-6 font-serif text-2xl text-foreground md:text-3xl">
                Andere klachten waar ik je bij help
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/klachten/${item.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-md border border-secondary/40 bg-card px-5 py-4 transition-colors hover:border-primary/40"
                  >
                    <span className="font-serif text-lg text-foreground">{item.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="pt-0 pb-16 md:pb-24">
          <FadeIn className="mx-auto max-w-3xl border-l-2 border-secondary pl-6">
            <h2 className="mb-3 font-serif text-2xl text-foreground">Goed om te weten</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              De informatie op deze pagina is bedoeld om klachten te herkennen en vervangt geen diagnose, behandeling of controle door een arts. Neem bij ernstige, acute of aanhoudende klachten altijd contact op met je huisarts of specialist.
            </p>
          </FadeIn>
        </Section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-4 pb-14 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <Link
              to="/klachten"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Terug naar klachten
            </Link>

            <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {complaint.pageTitle}
            </h1>

            <div className="space-y-4 leading-relaxed text-muted-foreground">
              {complaint.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <FadeIn>
            <h2 className="mb-5 font-serif text-2xl text-foreground md:text-3xl">
              Hoe je het kunt herkennen
            </h2>
            <ul className="space-y-3">
              {complaint.signals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="mb-5 font-serif text-2xl text-foreground md:text-3xl">
              Waar we samen naar kijken
            </h2>
            <ul className="space-y-3">
              {complaint.causes.map((cause) => (
                <li
                  key={cause}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="rounded-md border border-secondary/30 bg-card p-8 text-center md:p-12">
              <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
                Wil je weten wat er bij jou speelt?
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Tijdens een gratis kennismaking bespreken we jouw klachten en hulpvraag. Vanuit daar
                kijken we wat er nodig is om te begrijpen wat er in jouw lichaam speelt en welke
                begeleiding daarbij past.
              </p>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Waar nodig kan aanvullend{' '}
                <Link
                  to="/labonderzoek"
                  className="underline underline-offset-4 transition-colors hover:text-primary-dark"
                >
                  laboratoriumonderzoek
                </Link>{' '}
                extra puzzelstukjes geven.
              </p>
              <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
              {complaint.traject && (
                <div className="mt-6">
                  <Link
                    to={complaint.traject.href}
                    className="text-sm text-primary underline underline-offset-4 transition-colors hover:text-primary-dark"
                  >
                    {complaint.traject.label}
                  </Link>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="pt-0 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-6 font-serif text-2xl text-foreground md:text-3xl">
              Andere klachten waar ik je bij help
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  to={`/klachten/${item.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-md border border-secondary/40 bg-card px-5 py-4 transition-colors hover:border-primary/40"
                >
                  <span className="font-serif text-lg text-foreground">{item.title}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="pt-0 pb-16 md:pb-24">
        <FadeIn className="mx-auto max-w-3xl border-l-2 border-secondary pl-6">
          <h2 className="mb-3 font-serif text-2xl text-foreground">Goed om te weten</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            De informatie op deze pagina is bedoeld om klachten te herkennen en vervangt geen
            diagnose, behandeling of controle door een arts. Neem bij ernstige, acute of aanhoudende
            klachten altijd contact op met je huisarts of specialist.
          </p>
        </FadeIn>
      </Section>
    </main>
  );
};

export default KlachtDetail;

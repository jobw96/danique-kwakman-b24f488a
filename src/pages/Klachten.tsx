import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { complaints } from '@/data/complaints';
import { Link } from '@/lib/router-compat';

const SectionTag = ({ children }: { children: string }) => (
  <span className="mb-6 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground">
    {children}
  </span>
);

const Klachten = () => {
  const { openModal } = useBookingModal();

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <SectionTag>Herkenbare signalen</SectionTag>
            <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Klachten waarmee ik je kan helpen
            </h1>
            <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Je hebt klachten, maar kunt er niet precies de vinger op leggen. Misschien heb je last van een opgeblazen buik, vermoeidheid, cravings, PMS of een onregelmatige cyclus. Soms lijken die klachten los van elkaar te staan, terwijl ze elkaar juist kunnen beïnvloeden.
              </p>
              <p>
                Als orthomoleculair hormoon- en darmtherapeut kijk ik naar het geheel. Niet alleen naar waar je last van hebt, maar ook naar de mogelijke samenhang tussen je hormonen, darmen, voeding, bloedsuiker, slaap en stress.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
            <SectionTag>Waar herken jij jezelf in?</SectionTag>
            <h2 className="mb-5 font-serif text-3xl text-foreground md:text-4xl">
              Je klachten staan niet altijd op zichzelf
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Klik op een klacht voor een korte uitleg: hoe je de klacht kunt herkennen, wat er achter kan zitten en hoe ik je hierin begeleid. Je hoeft jezelf niet in één klacht te herkennen, juist de combinatie van signalen helpt om jouw gezondheidspuzzel te leggen.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 border-l border-t border-secondary/40 sm:grid-cols-2 lg:grid-cols-3">
            {complaints.map((complaint, index) => (
              <FadeIn key={complaint.slug} delay={index * 0.04} className="h-full">
                <Link
                  to={`/klachten/${complaint.slug}`}
                  className="group flex h-full flex-col border-b border-r border-secondary/40 bg-background p-6 transition-colors hover:bg-secondary/15"
                >
                  <h3 className="mb-3 font-serif text-xl text-foreground">{complaint.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{complaint.teaser}</p>
                  <span className="mt-6 flex items-center justify-end text-primary" aria-hidden="true">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="rounded-md border border-secondary/30 bg-card p-8 text-center md:p-12">
              <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
                Weet je niet waar jouw klachten bij passen?
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Dat hoeft ook niet. Tijdens een gratis kennismaking bespreken we waar je tegenaan loopt en kijken we welk traject bij jouw klachten en hulpvraag past.
              </p>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Volg je een traject bij mij, dan starten we met uitgebreide intakeformulieren en een persoonlijke intake. Waar nodig kan aanvullend <Link to="/labonderzoek" className="underline underline-offset-4 transition-colors hover:text-primary-dark">laboratoriumonderzoek</Link> helpen om gerichter naar jouw gezondheid te kijken.
              </p>
              <CustomButton onClick={openModal}>Plan een gratis kennismaking</CustomButton>
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
};

export default Klachten;

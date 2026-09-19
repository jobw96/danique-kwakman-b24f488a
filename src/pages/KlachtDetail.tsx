import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useBookingModal } from '@/components/BookingModal';
import { CustomButton } from '@/components/CustomButton';
import { Section } from '@/components/Section';
import { complaints, findComplaint } from '@/data/complaints';
import { Link, Navigate, useParams } from '@/lib/router-compat';

const KlachtDetail = () => {
  const { slug } = useParams();
  const { openModal } = useBookingModal();
  const complaint = slug ? findComplaint(slug) : undefined;

  if (!complaint) return <Navigate to="/klachten" replace />;

  const others = complaints.filter((item) => item.slug !== complaint.slug).slice(0, 6);

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

import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HeartHandshake, Mic } from 'lucide-react';

const Samenwerking = () => {
  return (
    <div className="min-h-screen">
      <Breadcrumbs />
      <Section className="pt-4 md:pt-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">Samenwerkingen</div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Samenwerkingen
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Gezondheid houdt niet op bij één vakgebied. Sommige klachten vragen om meer dan alleen voeding en leefstijl. Daarom werk ik graag samen met andere zorgprofessionals die ieder vanuit hun eigen expertise naar een klacht kijken.
                </p>
                <p>
                  Door kennis en expertise te combineren, kunnen we elkaar aanvullen en vrouwen naar de juiste begeleiding doorverwijzen wanneer dat nodig is.
                </p>
                <p>
                  Op deze pagina vind je de professionals met wie ik samenwerk.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Partner card */}
          <FadeIn>
            <div className="bg-white rounded-3xl border border-secondary/30 shadow-xs overflow-hidden mb-12">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 bg-secondary/30 border-b lg:border-b-0 lg:border-r border-secondary/40 flex flex-col items-center justify-center p-10 md:p-14 min-h-[260px]">
                  <div className="w-20 h-20 rounded-full bg-white border border-secondary/50 flex items-center justify-center text-primary mb-5">
                    <HeartHandshake size={36} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-2xl text-foreground">Fysio Veldstra</p>
                    <p className="text-sm text-muted-foreground mt-1">Bekkenfysiotherapie in Hoorn</p>
                  </div>
                </div>
                <div className="lg:w-3/5 p-8 md:p-12">
                  <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">Bekkenfysiotherapeut in Hoorn</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Florine Veldstra</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      Voor sommige klachten is het fijn als voeding en leefstijl worden aangevuld met gespecialiseerde fysiotherapie. Daarom werk ik samen met Florine Veldstra van Fysio Veldstra, bekkenfysiotherapeut in Hoorn.
                    </p>
                    <p>
                      Florine is gespecialiseerd in bekkenfysiotherapie en begeleidt vrouwen onder andere bij bekkenpijn, bekkenbodemklachten, obstipatie en andere ontlastingsklachten, plas problematiek, pijn bij het vrijen en klachten rondom zwangerschap en bevalling.
                    </p>
                    <p>
                      Daarnaast biedt ze postpartum hersteltraining voor vrouwen die na hun bevalling weer verantwoord willen opbouwen.
                    </p>
                    <p>
                      Juist bij klachten zoals buik- en darmproblemen, bekkenbodemklachten of klachten rondom zwangerschap en bevalling kunnen onze expertises elkaar mooi aanvullen. Waar mijn begeleiding zich richt op onder andere voeding, voedingsstoffen, hormonen en darmgezondheid, kijkt Florine naar het functioneren van het bekken en de bekkenbodem en naar de rol van bewegen en belasting.
                    </p>
                    <p>
                      Zo kunnen we, wanneer dat passend is, vanuit verschillende kanten naar een klacht kijken.
                    </p>
                  </div>
                  <a href="https://www.fysioveldstra.nl" target="_blank" rel="noopener noreferrer">
                    <CustomButton>Bezoek de website van Fysio Veldstra</CustomButton>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Podcast */}
          <FadeIn>
            <div className="bg-white rounded-3xl border border-secondary/30 shadow-xs p-8 md:p-12 mb-12">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="w-16 h-16 min-w-16 rounded-full bg-secondary/30 border border-secondary/50 flex items-center justify-center text-primary shrink-0">
                  <Mic size={26} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Samen in de podcast 🎙️</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Samen met Florine van Fysio Veldstra heb ik een podcastaflevering opgenomen waarin we praten over onze verschillende expertises en hoe deze elkaar kunnen aanvullen.&nbsp;

                    Aflevering #14 - De link tussen je bekkenbodem en darmklachten.

                  </p>
                  <a href="https://open.spotify.com/episode/3HzKC7F8yJPPpBsvMfXy03" target="_blank" rel="noopener noreferrer">
                    <CustomButton variant="secondary">Luister naar de podcastaflevering</CustomButton>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default Samenwerking;

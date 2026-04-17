import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { Headphones, ExternalLink } from 'lucide-react';

const SPOTIFY_SHOW_URL = 'https://open.spotify.com/show/21JMWSXjs1SziLcNNNFHZf?si=8dcc75c1583f40e0';
const SPOTIFY_EMBED_URL = 'https://open.spotify.com/embed/show/21JMWSXjs1SziLcNNNFHZf?si=8dcc75c1583f40e0&utm_source=oembed';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const Podcast = () => {
  return (
    <div className="min-h-screen">
      <Section className="bg-background pt-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionTag text="Nu te beluisteren" />
            <h1 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">Health & hormone secrets</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="text-left space-y-4 text-muted-foreground mb-6">
              <p className="text-center">
                In mijn podcast neem ik je mee in alles wat jij nodig hebt om je lichaam écht te begrijpen en je beter te voelen. Van hormonale balans tot darmgezondheid, van voeding en leefstijl tot kleine dagelijkse aanpassingen die een groot verschil maken.
              </p>
              <p className="text-center">
                Ik deel inzichten uit mijn praktijk, verhalen van vrouwen die hun energie en rust hebben teruggevonden en praktische tips die je direct kunt toepassen.
              </p>
              <p className="font-medium text-foreground text-center">
                Beluister hier mijn laatste aflevering.
              </p>
            </div>
          </FadeIn>

          <div className="w-full mb-4">
            <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
              <iframe
                src={SPOTIFY_EMBED_URL}
                className="block w-full"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Health & Hormone Secrets podcast op Spotify"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href={SPOTIFY_SHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-medium shadow-sm transition-colors hover:bg-primary/90"
            >
              <Headphones className="w-5 h-5" />
              <span>Volg de podcast op Spotify</span>
              <ExternalLink className="w-4 h-4 opacity-80 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="text-sm text-muted-foreground">
              Alle afleveringen op één plek — abonneer en mis er geen.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Podcast;

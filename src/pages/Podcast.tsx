import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { Headphones, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import { SPOTIFY_EMBED_URL, SPOTIFY_SHOW_URL, PODCAST_CAPTION, PODCAST_CTA_LINE, PODCAST_LEAD, PODCAST_LEAD_2, PODCAST_TAG, PODCAST_TITLE } from '@/data/podcast';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium tracking-wide">{text}</div>
);

const Podcast = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Podcast Health & Hormone Secrets"
        description="Luister naar de podcast van Danique Kwakman over hormoonbalans, darmgezondheid, voeding en leefstijl voor vrouwen."
        canonicalUrl="/podcast"
      />
      <Section className="bg-background pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionTag text={PODCAST_TAG} />
            <h1 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">{PODCAST_TITLE}</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="text-left space-y-4 text-muted-foreground mb-6">
              <p className="text-center">
                {PODCAST_LEAD}
              </p>
              <p className="text-center">
                {PODCAST_LEAD_2}
              </p>
              <p className="font-medium text-foreground text-center">
                {PODCAST_CTA_LINE}
              </p>
            </div>
          </FadeIn>

          <div className="w-full mb-4">
            <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
              <iframe
                src={SPOTIFY_EMBED_URL}
                className="block w-full"
                width="100%"
                height="232"
                frameBorder="0"
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
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-medium transition-colors hover:bg-primary/90"
            >
              <Headphones className="w-5 h-5" />
              <span>Volg de podcast op Spotify</span>
              <ExternalLink className="w-4 h-4 opacity-80 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="text-sm text-muted-foreground">
              {PODCAST_CAPTION}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Podcast;

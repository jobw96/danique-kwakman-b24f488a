import React, { useEffect } from 'react';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import SEO from '@/components/SEO';
import daniqueRelaxed from '@/assets/danique-relaxed.webp';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">
    {text}
  </div>
);

const Nieuwsbrief = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://daniquekwakman.activehosted.com/f/embed.php?id=37';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="activehosted.com/f/embed.php?id=37"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <SEO
        canonicalUrl="/nieuwsbrief"
        description="Schrijf je in voor de wekelijkse nieuwsbrief van Danique Kwakman en ontvang exclusieve inspiratie, tips en inzichten voor hormoonbalans, darmgezondheid en energie."
      />
      <div className="min-h-screen">
        <Section className="pt-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left: Form */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <FadeIn>
                  <SectionTag text="Nieuwsbrief" />
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                    Wekelijkse <span className="italic text-secondary">inspiratie</span> in je inbox
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Ontvang elke week mijn gratis nieuwsbrief vol exclusieve inspiratie, tips en inzichten over hormoonbalans, darmgezondheid en meer energie. 💌
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="newsletter-form-wrapper">
                    <div className="_form_37"></div>
                  </div>
                </FadeIn>
              </div>

              {/* Right: Image */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                  <ParallaxImage
                    src={daniqueRelaxed}
                    alt="Danique Kwakman - orthomoleculair therapeut"
                    className="w-full h-full object-cover"
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Nieuwsbrief;

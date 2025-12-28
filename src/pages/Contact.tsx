import React, { useEffect } from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import daniqueWalkingBeach from '@/assets/danique-walking-beach.jpg';

const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>;
const Contact = () => {
  useEffect(() => {
    // Remove any existing AC scripts first
    const existingScripts = document.querySelectorAll('script[src*="activehosted.com/f/embed"]');
    existingScripts.forEach(s => s.remove());
    
    // Load fresh ActiveCampaign form script
    const script = document.createElement('script');
    script.src = 'https://daniquekwakman.activehosted.com/f/embed.php?id=29';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return <div className="min-h-screen">
      {/* Main Content Section */}
      <Section className="pt-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionTag text="Contact" />
            
            
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: CTA and Form */}
            <div className="space-y-16">
              {/* Priority CTA */}
              <FadeIn>
                <div className="space-y-6 pb-8 border-b border-border/50">
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                    Maak een afspraak
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base py-0 pt-0 pb-[20px]">
                    Met de volgende button kan je bij mij een afspraak maken voor een intakegesprek (60 minuten) of een kennismaking (vrijblijvend 10 minuten).
                  </p>
                  <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
                    <CustomButton variant="secondary">Afspraak maken</CustomButton>
                  </a>
                </div>
              </FadeIn>

              {/* Contact Form - ActiveCampaign Embed */}
              <FadeIn delay={0.1}>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl text-foreground">
                    Of stel mij een vraag via het contactformulier
                  </h3>
                  {/* ActiveCampaign Form Container */}
                  <div className="contact-form-29">
                    <div className="_form_29"></div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Contact Information */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <img src={daniqueWalkingBeach} alt="Danique Kwakman orthomoleculair therapeut - neem contact op voor een kennismakingsgesprek" className="w-full h-auto rounded-lg object-cover" />
                </div>
                <div>
                  
                  <p className="text-muted-foreground leading-relaxed">Alle trajecten kunnen zowel online als fysiek worden gevolgd. Indien afspraken fysiek zijn ontvang ik je op de volgende locatie:</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Locatie</h4>
                    <p className="text-muted-foreground">Muntstraat 18, 1621GB Hoorn</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Bereikbaarheid</h4>
                    <p className="text-muted-foreground leading-relaxed">OV: +- 10 min lopen vanaf station Hoorn. Parkeren: betaald op straat.
Parkeren: betaald op straat of in nabije parkeergarage .<br />
                      Parkeren: betaald op straat of in parkeergarage scheepvaartkwartier.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Het is een co working space waar je gewoon kunt aanbellen, ikzelf of 1 van mijn collega's doet de deur voor je open.
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 pt-8 border-t border-secondary/30">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">E-mail</h4>
                    <p className="text-muted-foreground">info@daniquekwakman.nl</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Telefoon</h4>
                    <p className="text-muted-foreground">+31 682018727</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>;
};
export default Contact;
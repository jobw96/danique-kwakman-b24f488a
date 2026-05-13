import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { ArrowUpRight, Sparkles, Zap, UtensilsCrossed } from 'lucide-react';
import { SEO } from '@/components/SEO';
import ebookCover from '@/assets/ebook-cover-cravings.webp';

const AC_FORM_URL = 'https://daniquekwakman.activehosted.com/f/31';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">
    {text}
  </div>
);

const EbookCravings = () => {

  return (
    <div className="min-h-screen">
      <SEO
        title="5 Recepten om je Cravings te Stillen"
        description="Download gratis het e-book met 5 recepten om je zoete cravings rondom je menstruatie te stillen. Voedzaam, darmvriendelijk en snel klaar."
        canonicalUrl="/e-book-recepten-snacks"
      />
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-[65%]">
              <FadeIn>
                <SectionTag text="Gratis E-book" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  5 recepten om je zoete cravings rondom je <span className="italic text-secondary">menstruatie</span> te stillen
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Ken je dat gevoel dat je rondom je menstruatie mega veel cravings ervaart naar iets zoets? Dat je het liefst direct na het avondeten begint aan een pak koekjes of dat je NU naar de winkel wilt om chocola te halen. Je bent zeker niet de enige en er is een manier om daar slimmer mee om te gaan, zonder je hormonen of darmen uit balans te brengen en bakken met suiker naar binnen te werken.
                </p>
                <motion.button
                  onClick={() => {
                    document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Ontvang gratis e-book
                  <ArrowDown className="w-5 h-5" />
                </motion.button>
              </FadeIn>
            </div>
            <div className="lg:w-[35%]">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden">
                <img
                  src={ebookCover}
                  alt="Gratis e-book 5 recepten om je zoete cravings rondom je menstruatie te stillen - Danique Kwakman"
                  className="w-full h-auto rounded-[2rem]"
                  loading="lazy"
                />
              </FadeIn>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Zap,
                title: "Energie in plaats van moeheid",
                desc: "Recepten die je energie geven in plaats van dat je na een zak koekjes nog moeier op de bank ligt."
              },
              {
                icon: Sparkles,
                title: "Not-guilty & darmvriendelijk",
                desc: "Not-guilty recepten, zonder bergen suikers en dus darmvriendelijk."
              },
              {
                icon: UtensilsCrossed,
                title: "Snel & makkelijk",
                desc: "Snacks die je gemakkelijk en snel in elkaar draait."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30 h-full"
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Content & Form Section */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 border border-secondary/30 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    In dit e-book ontdek je:
                  </h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Hoe je met de juiste snacks je zoete cravings rondom je menstruatie kunt stillen. Zonder suikerdips of triggers voor je darmen, maar voedzame keuzes die je lichaam echt ondersteunen en je hormonen in balans houden.
                    </p>
                    <div>
                      <p className="font-medium text-foreground mb-4">Dit e-book is voor jou als je:</p>
                      <div className="space-y-3">
                        {[
                          "Op zoek bent naar makkelijke, voedzame en lekkere snacks",
                          "Recepten wilt die je energie geven, in plaats van dat je na een zak koekjes nog vermoeider op de bank belandt",
                          "Wilt genieten van not-guilty recepten, zonder bergen suikers en dus darmvriendelijk",
                          "Snacks wilt die je makkelijk en snel in elkaar draait",
                          "Nieuwsgierig bent hoe kleine aanpassingen in je voeding een groot verschil kunnen maken"
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                              <Sparkles size={14} />
                            </div>
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div id="download-form">
                  <motion.div
                    className="p-4 sm:p-8 rounded-2xl sticky top-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div id="ac-form-container">
                      <div className="_form_31"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};

export default EbookCravings;

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ArrowDown, Sparkles, Leaf, Heart, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">
    {text}
  </div>
);

const EbookWeekmenu = () => {

  return (
    <div className="min-h-screen">
      <SEO
        title="Hormoonproof en darmvriendelijk weekmenu"
        description="Download gratis het hormoonproof en darmvriendelijk weekmenu. Een overzichtelijke, voedende basis waarmee je jouw hormonen en darmen stap voor stap ondersteunt."
        canonicalUrl="/e-book-weekmenu"
      />
      <Section className="pt-4 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20">
            <FadeIn>
              <SectionTag text="Gratis E-book" />
              <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Hormoonproof en <span className="italic text-secondary">darmvriendelijk</span> weekmenu
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Door alle informatie en adviezen online zie je al snel niet meer wat nu écht bij jou past en wat werkt.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Alle losse recepten die je hebt opgeslagen komen niet tot een geheel.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Met dit weekmenu zet je een stabiele basis neer voor je hormonen en darmen om je lichaam tot rust te laten komen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Je krijgt een overzichtelijke, voedende basis waarmee je jouw hormonen en darmen stap voor stap ondersteunt zonder ingewikkeld gedoe.
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

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Heart,
                title: "Rust in je voeding, rust in je lichaam",
                desc: "Geen keuzestress meer, maar duidelijkheid over wat je eet."
              },
              {
                icon: CheckCircle2,
                title: "Eén overzicht in plaats van losse recepten",
                desc: "Alle maaltijden vormen samen een kloppend geheel voor je lichaam."
              },
              {
                icon: Leaf,
                title: "Eenvoudig vol te houden",
                desc: "Recepten die passen in je leven, niet andersom."
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
                      Hoe je met een compleet weekmenu meer rust creëert in je voeding en je lichaam ondersteunt richting balans in je hormonen en darmen. Alle recepten zijn (overwegend) koemelk-, gluten- en suikervrij en afgestemd op stabiliteit in energie en bloedsuikers.
                    </p>
                    <div>
                      <p className="font-medium text-foreground mb-4">Dit e-book is voor jou als je:</p>
                      <div className="space-y-3">
                        {[
                          "Door alle voedingsadviezen niet meer weet wat bij jou past",
                          "Losse recepten hebt opgeslagen, maar geen duidelijk geheel ervaart",
                          "Meer rust en overzicht wilt rondom je maaltijden",
                          "Je hormonen en darmen stap voor stap wilt ondersteunen",
                          "Houdt van simpel, voedzaam en praktisch eten",
                          "Graag ziet wat je op een dag kunt eten in één overzicht"
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
                      <iframe
                        src="https://daniquekwakman.activehosted.com/f/43"
                        title="Download gratis weekmenu e-book"
                        className="w-full border-0 bg-transparent"
                        style={{ minHeight: '600px' }}
                      />
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

export default EbookWeekmenu;

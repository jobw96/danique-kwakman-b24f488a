import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ArrowDown, Sparkles, ShoppingBasket, Sprout, ListChecks } from 'lucide-react';
import { SEO } from '@/components/SEO';
import ebookCover from '@/assets/ebook-cover-boodschappenlijst.jpg';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">
    {text}
  </div>
);

const EbookBoodschappenlijst = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://daniquekwakman.activehosted.com/f/embed.php?id=41';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Boodschappenlijst vol hormoonproof en darmvriendelijke basics"
        description="Download gratis de boodschappenlijst vol hormoonproof en darmvriendelijke basics. Vul je keuken met producten die je hormonen en darmen ondersteunen."
        canonicalUrl="/e-book-boodschappenlijst"
      />
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-[65%]">
              <FadeIn>
                <SectionTag text="Gratis E-book" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  Boodschappenlijst vol <span className="italic text-secondary">hormoonproof</span> en darmvriendelijke basics
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  De supermarkt kan nogal een jungle zijn met mega veel keuze. Je raakt overweldigd en pakt toch weer de producten die je gewend bent om te halen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Een goed gevulde koelkast en voorraadkast maakt het zóveel makkelijker en overzichtelijker om een sterke basis neer te zetten.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Als jij precies weet welke basics je standaard in huis wilt hebben, pak je je hormoonproof en darmvriendelijke producten straks met je ogen dicht en ga je je hormonen stapje voor stapje in balans brengen.
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
                  alt="Gratis e-book boodschappenlijst vol hormoonproof en darmvriendelijke basics - Danique Kwakman"
                  className="w-full h-auto rounded-[2rem]"
                  width={1024}
                  height={1536}
                  loading="lazy"
                />
              </FadeIn>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: ShoppingBasket,
                title: "Geen keuzestress meer in de supermarkt",
                desc: "Je weet precies wat je standaard in huis wilt hebben."
              },
              {
                icon: Sprout,
                title: "Keukenkastje vol goede producten",
                desc: "Je vult je koelkast en voorraadkast met producten die je lichaam helpen."
              },
              {
                icon: ListChecks,
                title: "Automatisch betere keuzes",
                desc: "Zonder extra moeite, omdat je basis goed staat."
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
                      Een overzichtelijke boodschappenlijst waarmee je jouw keuken vult met hormoonproof en darmvriendelijke basics. Zodat je altijd iets in huis hebt dat je energie ondersteunt en je darmen niet belast.
                    </p>
                    <div>
                      <p className="font-medium text-foreground mb-4">Dit e-book is voor jou als je:</p>
                      <div className="space-y-3">
                        {[
                          "Niet meer wilt twijfelen in de supermarkt",
                          "Steeds dezelfde \u201Cveilige\u201D producten pakt",
                          "Een sterke basis in je keuken wilt opbouwen",
                          "Meer rust en overzicht wilt in je voeding",
                          "Makkelijkere en betere keuzes wilt maken zonder moeite",
                          "Je lichaam wilt ondersteunen met simpele basics"
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
                      <div className="_form_41"></div>
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

export default EbookBoodschappenlijst;

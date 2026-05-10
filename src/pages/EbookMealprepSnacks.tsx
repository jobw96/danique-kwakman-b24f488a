import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ArrowDown, Sparkles, Zap, Heart, Clock } from 'lucide-react';
import { SEO } from '@/components/SEO';
import ebookCover from '@/assets/ebook-cover-mealprep-snacks.jpg';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">
    {text}
  </div>
);

const EbookMealprepSnacks = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://daniquekwakman.activehosted.com/f/embed.php?id=33';
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
        title="6 mealprep snacks perfect voor onderweg"
        description="Download gratis het e-book met 6 mealprep snacks perfect voor onderweg. Stabiele energie, ondersteuning voor je hormonen en darmen, makkelijk vooraf te maken."
        canonicalUrl="/e-book-mealprep-snacks"
      />
      <Section className="pt-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-[65%]">
              <FadeIn>
                <SectionTag text="Gratis E-book" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  6 mealprep snacks perfect <span className="italic text-secondary">voor onderweg</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Als je onderweg te weinig eten hebt meegenomen van thuis zie je pas hoe moeilijk het is om snel iets voedzaams te vinden.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Te weinig eten is niet alleen vervelend omdat je trek krijgt, het kan ook je energie en hormonen in de war brengen. Je krijgt sneller cravings, je word ineens chagrijnig, voelt je moe en soms ook opgeblazen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Ik heb mijn 6 favoriete mealprep snacks verzameld, zodat jij altijd iets voedzaams bij de hand hebt, ook op je drukste dagen.
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
                  alt="Gratis e-book 6 mealprep snacks perfect voor onderweg - Danique Kwakman"
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
                icon: Zap,
                title: "Energie die stabiel blijft",
                desc: "Geen middagdips of snelle crashes meer."
              },
              {
                icon: Heart,
                title: "Ondersteuning voor je hormonen en darmen",
                desc: "Snacks die je lichaam echt voeden in plaats van belasten."
              },
              {
                icon: Clock,
                title: "Makkelijk vooraf te maken",
                desc: "Zodat je op drukke dagen niet hoeft na te denken."
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
                      6 praktische, voedzame snacks die je makkelijk kunt mealpreppen en meenemen. Zodat je altijd iets bij de hand hebt dat je energie stabiel houdt en je hormonen ondersteunt.
                    </p>
                    <div>
                      <p className="font-medium text-foreground mb-4">Dit e-book is voor jou als je:</p>
                      <div className="space-y-3">
                        {[
                          "Vaak onderweg bent en te weinig eetmomenten hebt",
                          "Sneller grijpt naar snelle of bewerkte snacks",
                          "Je energie gedurende de dag stabieler wilt houden",
                          "Minder last wilt hebben van cravings en dips",
                          "Houdt van praktische, snelle oplossingen",
                          "Goed voor jezelf wilt zorgen, ook op drukke dagen"
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
                      <div className="_form_33"></div>
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

export default EbookMealprepSnacks;
